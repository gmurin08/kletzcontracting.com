// Enhanced stripe-paid.js with proper accounting data
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
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook error:', err.message);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata?.booking_id;
    
    // Get detailed payment info from Stripe
    const paymentIntent = await stripe.paymentIntents.retrieve(session.payment_intent);
    const charge = paymentIntent.charges.data[0];
    
    // Calculate accurate accounting figures
    const accountingData = calculateAccountingData(charge);
    
    let bookingData = null;
    if (bookingId) {
      bookingData = await updateBookingWithAccountingData(bookingId, accountingData);
    }
    
    // Send emails with accurate amounts
    await sendInvoiceEmail(session, bookingData, accountingData);
    await sendBusinessNotification(session, bookingData, accountingData);
    
    // Optional: Create QuickBooks entry via API
    // await createQuickBooksEntry(bookingData, accountingData);
  }

  res.status(200).json({ received: true });
}

function calculateAccountingData(charge) {
  const grossAmount = charge.amount; // Amount in cents
  const stripeFee = charge.application_fee_amount || calculateStripeFee(grossAmount);
  const netAmount = grossAmount - stripeFee;
  
  return {
    grossAmount: grossAmount / 100, // Convert to dollars
    stripeFee: stripeFee / 100,
    netAmount: netAmount / 100,
    stripeChargeId: charge.id,
    paymentDate: new Date(charge.created * 1000).toISOString(),
    paymentMethod: charge.payment_method_details?.type || 'card',
    last4: charge.payment_method_details?.card?.last4 || null
  };
}

function calculateStripeFee(amountInCents) {
  // Stripe standard pricing: 2.9% + $0.30
  return Math.round(amountInCents * 0.029 + 30);
}

async function updateBookingWithAccountingData(bookingId, accountingData) {
  try {
    const { data: booking, error } = await supabase
      .from('bookings')
      .update({ 
        status: 'paid',
        payment_gross_amount: accountingData.grossAmount,
        payment_stripe_fee: accountingData.stripeFee,
        payment_net_amount: accountingData.netAmount,
        stripe_charge_id: accountingData.stripeChargeId,
        payment_date: accountingData.paymentDate,
        payment_method: accountingData.paymentMethod,
        payment_last4: accountingData.last4
      })
      .eq('id', bookingId)
      .select()
      .single();

    return booking;
  } catch (error) {
    console.error('Database error:', error);
    return null;
  }
}

// Optional: Direct QuickBooks integration
async function createQuickBooksEntry(bookingData, accountingData) {
  // This would require QuickBooks API setup
  const qbEntry = {
    type: 'sales_receipt',
    customer: bookingData.name,
    date: accountingData.paymentDate,
    line_items: [
      {
        description: `${bookingData.dumpster_size} Yard Dumpster Rental`,
        amount: accountingData.grossAmount,
        account: 'Dumpster Rental Income'
      }
    ],
    expenses: [
      {
        description: 'Credit Card Processing Fees',
        amount: accountingData.stripeFee,
        account: 'Processing Fees Expense'
      }
    ],
    deposit_to: 'Stripe Clearing Account', // Matches your bank deposit
    reference: bookingData.id
  };
  
  // Would call QB API here
  console.log('QB Entry to create:', qbEntry);
}


// //stripe-paid.js
// import Stripe from 'stripe';
// import { createClient } from '@supabase/supabase-js';
// import { buffer } from 'micro';
// import { sendInvoiceEmail, sendBusinessNotification } from '../../../lib/email-service';

// const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
// const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// export default async function handler(req, res) {
//   if (req.method !== 'POST') {
//     return res.status(405).end();
//   }

//   const sig = req.headers['stripe-signature'];
//   let rawBody;
//   let event;

//   try {
//     rawBody = await buffer(req);
//     console.log('Raw body length:', rawBody.length);
//   } catch (err) {
//     console.error('Error reading request body:', err);
//     return res.status(400).send('Error reading request body');
//   }

//   try {
//     event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
//     console.log('Event type:', event.type);
//   } catch (err) {
//     console.error('Webhook signature verification failed:', err.message);
//     return res.status(400).send(`Webhook Error: ${err.message}`);
//   }

//   if (event.type === 'checkout.session.completed') {
//     const session = event.data.object;
//     const bookingId = session.metadata?.booking_id;
    
//     console.log('Processing checkout session completed:', session.id);
    
//     let bookingData = null;
    
//     // If this is a dumpster booking, update the booking status and get booking details
//     if (bookingId) {
//       bookingData = await updateBookingStatus(bookingId);
//     }
    
//     // Send emails
//     await sendInvoiceEmail(session, bookingData);
//     await sendBusinessNotification(session, bookingData);
//   } else {
//     console.log('Ignoring event type:', event.type);
//   }

//   res.status(200).json({ received: true });
// }

// async function updateBookingStatus(bookingId) {
//   try {
//     const { data: booking, error } = await supabase
//       .from('bookings')
//       .update({ status: 'paid' })
//       .eq('id', bookingId)
//       .select()
//       .single();

//     if (error) {
//       console.error('Supabase error:', error);
//       return null;
//     }

//     if (booking) {
//       console.log('Booking updated successfully:', booking.id);
//       return booking;
//     } else {
//       console.log('No booking found with ID:', bookingId);
//       return null;
//     }
//   } catch (dbError) {
//     console.error('Database error:', dbError);
//     return null;
//   }
// }