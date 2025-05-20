import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { buffer } from 'micro';
import { sendInvoiceEmail, sendBusinessNotification } from '../../../lib/email-service';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  const sig = req.headers['stripe-signature'];
  let rawBody;
  let event;

  try {
    rawBody = await buffer(req);
    console.log('Raw body length:', rawBody.length);
  } catch (err) {
    console.error('Error reading request body:', err);
    return res.status(400).send('Error reading request body');
  }

  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    console.log('Event type:', event.type);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata?.booking_id;
    
    console.log('Processing checkout session completed:', session.id);
    
    let bookingData = null;
    
    // If this is a dumpster booking, update the booking status and get booking details
    if (bookingId) {
      bookingData = await updateBookingStatus(bookingId);
    }
    
    // Send emails
    await sendInvoiceEmail(session, bookingData);
    await sendBusinessNotification(session, bookingData);
  } else {
    console.log('Ignoring event type:', event.type);
  }

  res.status(200).json({ received: true });
}

async function updateBookingStatus(bookingId) {
  try {
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ status: 'paid' })
      .eq('id', bookingId)
      .select()
      .single();

    if (error) {
      console.error('Supabase error:', error);
      return null;
    }

    if (booking) {
      console.log('Booking updated successfully:', booking.id);
      return booking;
    } else {
      console.log('No booking found with ID:', bookingId);
      return null;
    }
  } catch (dbError) {
    console.error('Database error:', dbError);
    return null;
  }
}