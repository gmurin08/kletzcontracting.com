import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export default async function handler(req, res) {
    const { id, action } = req.query;
    if (!id || !action) return res.status(400).send('Missing parameters');
  
    const { data: booking, error } = await supabase.from('bookings').select('*').eq('id', id).single();
    if (error || !booking) return res.status(404).send('Booking not found');
  
    if (action === 'deny') {
      await supabase.from('bookings').update({ status: 'denied' }).eq('id', id);
      await sendEmail(booking.email, 'Booking Update', 'Unfortunately, we are unable to fulfill your dumpster rental request on the selected date. Please reply to reschedule.');
      //THIS DOESN'T NEED TO REDIRECT UNLESS ITS TO A PAGE EXPLAINING TO BUSINESS WHAT HAPPENS NEXT
      return res.redirect('/thank-you?status=denied');
    }

      // Create Stripe customer if needed
    const customer = await stripe.customers.create({
      email: booking.email,
      name: booking.name,
      phone: booking.phone,
      metadata: { booking_id: booking.id }
    });
  
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      mode: 'payment',
      customer: customer.id,
      line_items: [{
        price_data: {
          currency: 'usd',
          product_data: {
            name: `${booking.dumpster_size} Dumpster Rental`,
          },
          unit_amount: 30000,
        },
        quantity: 1,
      }],
      payment_intent_data: {
        setup_future_usage: 'off_session'
      },
      metadata: {
        booking_id: booking.id,
        name: booking.name,
        phone: booking.phone,
        address: booking.address,
        service_date: booking.service_date,
      },
      success_url: `${process.env.BASE_URL}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.BASE_URL}/cancel`,
    });
  
    await supabase.from('bookings').update({ status: 'approved', stripe_url: session.url, stripe_customer_id: customer.id }).eq('id', id);
    await sendEmail(booking.email, 'Booking Approved – Complete Payment', `Click below to confirm your dumpster rental:<br><a href="${session.url}">Pay Now</a>`);
    //REDIRECT THIS FROM BUSINESS PERSPECTIVE
    return res.redirect('/thank-you?status=approved');
  }
  
  async function sendEmail(to, subject, html) {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
    await transporter.sendMail({
      from: `"Booking Alerts" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html,
    });
  }