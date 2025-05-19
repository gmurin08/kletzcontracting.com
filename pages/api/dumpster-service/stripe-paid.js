import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

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
  try {
    // Get the raw body as a buffer
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }
    rawBody = Buffer.concat(chunks);
  } catch (err) {
    console.error('Error reading request body:', err);
    return res.status(400).send('Error reading request body');
  }

  let event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('Event type:', event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata.booking_id;

    try {
      const { data: booking } = await supabase
        .from('bookings')
        .update({ status: 'paid' })
        .eq('id', bookingId)
        .select()
        .single();

      if (booking) {
        const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dumpster+Dropoff&dates=${booking.service_date.replace(/-/g, '')}T090000Z/${booking.service_date.replace(/-/g, '')}T100000Z&details=Dumpster+delivery+at+${encodeURIComponent(booking.address)}`;

        await sendEmail(
          booking.email,
          'Booking Confirmed ✅',
          `Thanks for your payment. We'll see you on ${booking.service_date}. Add to calendar: <a href="${calendarLink}">Google Calendar</a>`
        );

        await sendEmail(
          process.env.CLIENT_EMAIL,
          'Booking Paid ✅',
          `Customer ${booking.name} has paid for their booking on ${booking.service_date}. <a href="${calendarLink}">Add to calendar</a>`
        );
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).send('Database error');
    }
  }

  async function sendEmail(to, subject, html) {
    const transporter = nodemailer.createTransporter({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Kletz Contracting" <donotreply@goaldercreekdigital.com>`,
      to,
      subject,
      html,
    });
  }

  res.status(200).json({ received: true });
}