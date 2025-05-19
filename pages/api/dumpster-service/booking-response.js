import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';
import Stripe from 'stripe';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  const { id, action } = req.query;
  if (!id || !action) return res.status(400).send('Missing parameters');

  const { data: booking, error } = await supabase.from('bookings').select('*').eq('id', id).single();
  if (error || !booking) return res.status(404).send('Booking not found');

  const baseUrl = process.env.BASE_URL || 'https://kletzcontracting.com/';
  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';
  
  if (action === 'deny') {
    await supabase.from('bookings').update({ status: 'denied' }).eq('id', id);
    
    const deniedHtml = generateDeniedEmail({
      name: booking.name,
      logoUrl,
      baseUrl
    });
    
    await sendEmail(booking.email, 'Important Update About Your Dumpster Rental Request', deniedHtml);
    // Redirect to business dashboard or status page
    return res.redirect('/admin/booking-denied');
  }

  // Create Stripe customer if needed
  let customer;
  if (booking.stripe_customer_id) {
    customer = await stripe.customers.retrieve(booking.stripe_customer_id);
  } else {
    const existingCustomers = await stripe.customers.list({ email: booking.email, limit: 1 });
    if (existingCustomers.data.length > 0) {
      customer = existingCustomers.data[0];
    } else {
      customer = await stripe.customers.create({
        email: booking.email,
        name: booking.name,
        phone: booking.phone,
        metadata: { booking_id: booking.id }
      });
    }
    await supabase.from('bookings').update({ stripe_customer_id: customer.id }).eq('id', id);
  }

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    customer: customer.id,
    line_items: [{
      price_data: {
        currency: 'usd',
        product_data: {
          name: `${booking.dumpster_size} Yard Dumpster Rental`,
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
    success_url: `${baseUrl}/thank-you?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: `${baseUrl}/cancel`,
  });

  await supabase.from('bookings').update({ 
    status: 'approved', 
    stripe_url: session.url, 
    stripe_customer_id: customer.id 
  }).eq('id', id);
  
  const acceptedHtml = generateAcceptedEmail({
    name: booking.name,
    dumpsterSize: booking.dumpster_size,
    date: new Date(booking.service_date).toLocaleDateString('en-US', {
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric'
    }),
    address: booking.address,
    paymentUrl: session.url,
    logoUrl,
    baseUrl
  });
  
  await sendEmail(booking.email, 'Your Dumpster Rental Request Has Been Approved!', acceptedHtml);
  // Redirect to business dashboard or status page
  return res.redirect('/admin/booking-request-sent');
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
    from: `"Kletz Contracting" <donotreply@goaldercreekdigital.com>`,
    to,
    subject,
    html,
  });
}

function generateAcceptedEmail({ name, dumpsterSize, date, address, paymentUrl, logoUrl, baseUrl }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dumpster Rental Approved</title>
      <style>
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1a1a1a !important;
            color: #f5f5f5 !important;
          }
          .container {
            background-color: #2d2d2d !important;
            border-color: #444444 !important;
          }
          .content {
            background-color: #2d2d2d !important;
          }
          .footer {
            background-color: #222222 !important;
            border-color: #444444 !important;
          }
          h1, h2, h3, h4, p, li {
            color: #f5f5f5 !important;
          }
          .booking-details {
            background-color: #3d3d3d !important;
            border-color: #555555 !important;
          }
          .booking-details li {
            border-color: #555555 !important;
          }
          .action-button {
            background-color: #990000 !important;
            color: #ffffff !important;
          }
          .footer a {
            color: #990000 !important;
          }
          .divider {
            border-color: #555555 !important;
          }
          .steps li::before {
            background-color: #990000 !important;
            color: #ffffff !important;
          }
          .help-links a::after {
            color: #990000 !important;
          }
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          background-color: #f7f7f7;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff;
        }
        .header {
          padding: 30px 0;
          text-align: center;
          background-color: #ffffff;
        }
        .logo {
          max-width: 250px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          background-color: #ffffff;
        }
        h1 {
          color: #292929;
          font-size: 24px;
          margin: 0 0 20px;
          text-align: center;
        }
        p {
          margin: 0 0 20px;
          font-size: 16px;
          color: #4a4a4a;
        }
        .booking-details {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
          border: 1px solid #eeeeee;
        }
        .booking-details h3 {
          margin-top: 0;
          color: #292929;
          font-size: 18px;
        }
        .booking-details ul {
          list-style-type: none;
          padding: 0;
          margin: 0;
        }
        .booking-details li {
          padding: 12px 0;
          border-bottom: 1px solid #eeeeee;
          font-size: 16px;
          display: flex;
        }
        .booking-details li:last-child {
          border-bottom: none;
        }
        .booking-details strong {
          width: 40%;
          display: inline-block;
          color: #555555;
        }
        .action-container {
          text-align: center;
          margin: 35px 0;
        }
        .action-button {
          display: inline-block;
          padding: 14px 36px;
          background-color:rgb(40, 100, 190);
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          transition: background-color 0.3s;
          border: none;
        }
        .action-button:hover {
          background-color:rgb(80, 200, 94);
        }
        .divider {
          height: 1px;
          background-color: #eeeeee;
          border: none;
          margin: 30px 0;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          background-color: #f9f9f9;
          color: #666666;
          border-top: 1px solid #eeeeee;
        }
        .footer a {
          color:rgb(40, 100, 190);
          text-decoration: none;
        }
        .steps {
          counter-reset: steps;
          margin: 30px 0;
          padding: 0;
          list-style: none;
        }
        .steps li {
          position: relative;
          margin-bottom: 20px;
          padding-left: 50px;
          counter-increment: steps;
        }
        .steps li::before {
          content: counter(steps);
          position: absolute;
          left: 0;
          top: 0;
          background-color:rgb(40, 100, 190);
          color: #ffffff;
          width: 30px;
          height: 30px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-weight: bold;
        }
        .steps h4 {
          margin: 0 0 5px;
          color: #292929;
        }
        .steps p {
          margin: 0;
          color: #666666;
        }
        .help-links {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          flex-wrap: wrap;
        }
        .help-links a {
          color: #333333;
          text-decoration: none;
          font-weight: bold;
          margin: 10px;
          display: inline-flex;
          align-items: center;
        }
        .help-links a::after {
          content: "→";
          margin-left: 5px;
          color: #990000;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <h1>Your Dumpster Rental Has Been Approved!</h1>
          
          <p>Hi ${name},</p>
          
          <p>Great news! Your dumpster rental request has been approved. We're ready to deliver your dumpster on the scheduled date. To finalize your booking, please complete the payment using the link below.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <ul>
              <li><strong>Dumpster Size:</strong> ${dumpsterSize} Yard</li>
              <li><strong>Delivery Date:</strong> ${date}</li>
              <li><strong>Delivery Address:</strong> ${address}</li>
              <li><strong>Amount:</strong> $300.00</li>
            </ul>
          </div>
          
          <div class="action-container">
            <a href="${paymentUrl}" class="action-button">Complete Payment</a>
          </div>
  
          <p>Note: In order to prevent any delay in service. Please click below to sign our dumpster rental agreement.</p>

          <div class="action-container">
            <a href="https://sendlink.co/documents/doc-form/6810e1bbbd56f4288f4db5bb?locale=en_US" class="action-button">Sign Contract</a>
          </div>
          
          <p>After your payment is processed, you'll receive a confirmation email with your receipt and further instructions.</p>
          
          <hr class="divider">
          
          <h3>What Happens Next</h3>
          
          <ul class="steps">
            <li>
              <h4>Payment Confirmation</h4>
              <p>Complete your payment to secure your booking.</p>
            </li>
            <li>
              <h4>Pre-Delivery Notification</h4>
              <p>We'll text you the day before delivery with your estimated arrival window.</p>
            </li>
            <li>
              <h4>Delivery</h4>
              <p>Our driver will place the dumpster according to your instructions.</p>
            </li>
            <li>
              <h4>Usage Period</h4>
              <p>You'll have the dumpster for the agreed rental period.</p>
            </li>
          </ul>
          
          <hr class="divider">
          
          <p>If you have any questions or need to make changes to your booking, please don't hesitate to contact us.</p>
          
          <div class="help-links">
            <a href="${baseUrl}faq">Frequently Asked Questions</a>
            <a href="${baseUrl}contact">Contact Support</a>
            <a href="${baseUrl}size-guide">Dumpster Size Guide</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>
            <a href="${baseUrl}privacy">Privacy Policy</a> | 
            <a href="${baseUrl}terms">Terms of Service</a>
          </p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateDeniedEmail({ name, logoUrl, baseUrl }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dumpster Rental Update</title>
      <style>
        @media (prefers-color-scheme: dark) {
          body {
            background-color: #1a1a1a !important;
            color: #f5f5f5 !important;
          }
          .container {
            background-color: #2d2d2d !important;
            border-color: #444444 !important;
          }
          .content {
            background-color: #2d2d2d !important;
          }
          .footer {
            background-color: #222222 !important;
            border-color: #444444 !important;
          }
          h1, h2, h3, h4, p {
            color: #f5f5f5 !important;
          }
          .message-box {
            background-color: #3d3d3d !important;
            border-color: #555555 !important;
          }
          .action-button {
            background-color: #990000 !important;
            color: #ffffff !important;
          }
          .footer a {
            color: #990000 !important;
          }
          .divider {
            border-color: #555555 !important;
          }
          .alternative-container {
            background-color: #3d3d3d !important;
            border-color: #555555 !important;
          }
          .help-links a::after {
            color: #990000 !important;
          }
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
          -webkit-font-smoothing: antialiased;
          background-color: #f7f7f7;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
          overflow: hidden;
          background-color: #ffffff;
        }
        .header {
          padding: 30px 0;
          text-align: center;
          background-color: #ffffff;
        }
        .logo {
          max-width: 250px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          background-color: #ffffff;
        }
        h1 {
          color: #292929;
          font-size: 24px;
          margin: 0 0 20px;
          text-align: center;
        }
        p {
          margin: 0 0 20px;
          font-size: 16px;
          color: #4a4a4a;
        }
        .message-box {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 25px;
          margin: 30px 0;
          border: 1px solid #eeeeee;
        }
        .message-box p {
          margin: 0;
        }
        .action-container {
          text-align: center;
          margin: 35px 0;
        }
        .action-button {
          display: inline-block;
          padding: 14px 36px;
          background-color: #990000;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
          transition: background-color 0.3s;
          border: none;
        }
        .action-button:hover {
          background-color: #7a0000;
        }
        .divider {
          height: 1px;
          background-color: #eeeeee;
          border: none;
          margin: 30px 0;
        }
        .alternative-container {
          background-color: #f9f9f9;
          border-radius: 8px;
          padding: 25px;
          margin: 30px 0;
          border: 1px solid #eeeeee;
        }
        .alternative-container h3 {
          margin-top: 0;
          color: #292929;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          background-color: #f9f9f9;
          color: #666666;
          border-top: 1px solid #eeeeee;
        }
        .footer a {
          color: #990000;
          text-decoration: none;
        }
        .help-links {
          display: flex;
          justify-content: space-around;
          margin: 30px 0;
          flex-wrap: wrap;
        }
        .help-links a {
          color: #333333;
          text-decoration: none;
          font-weight: bold;
          margin: 10px;
          display: inline-flex;
          align-items: center;
        }
        .help-links a::after {
          content: "→";
          margin-left: 5px;
          color: #990000;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <h1>Update About Your Dumpster Rental Request</h1>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for choosing Kletz Contracting for your dumpster rental needs. We've reviewed your request and unfortunately, we're unable to accommodate your booking for the requested date and location.</p>
          
          <div class="message-box">
            <p>This could be due to several reasons including high demand in your area, limited availability of the requested dumpster size, or delivery constraints.</p>
          </div>
          
          <p>We'd be happy to help you reschedule for an alternative date or suggest different options that might work better for your needs.</p>
          
          <div class="action-container">
            <a href="${baseUrl}contact" class="action-button">Contact Us to Reschedule</a>
          </div>
          
          <hr class="divider">
          
          <div class="alternative-container">
            <h3>Alternative Options</h3>
            <p>Consider these alternatives that might better fit your project needs:</p>
            <ul>
              <li>Schedule for a different date when we have more availability</li>
              <li>Choose a different dumpster size that might be available sooner</li>
              <li>Explore our on-demand pickup service for smaller waste disposal needs</li>
            </ul>
          </div>
          
          <p>We value your business and would like to find a solution that works for you. Please reply to this email or call us at (555) 123-4567 to discuss alternatives.</p>
          
          <div class="help-links">
            <a href="${baseUrl}faq">Frequently Asked Questions</a>
            <a href="${baseUrl}contact">Contact Support</a>
            <a href="${baseUrl}size-guide">Dumpster Size Guide</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>
            <a href="${baseUrl}privacy-policy">Privacy Policy</a> | 
            <a href="${baseUrl}terms-and-conditions">Terms of Service</a>
          </p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}