// stripe-paid.js - Stripe webhook for payment confirmation
import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import { buffer } from 'micro';
import nodemailer from 'nodemailer';

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
    
    if (bookingId) {
      try {
        // Update booking status to paid
        const { data: booking, error } = await supabase
          .from('bookings')
          .update({ 
            status: 'paid',
            payment_date: new Date().toISOString(),
            payment_amount: session.amount_total / 100
          })
          .eq('id', bookingId)
          .select()
          .single();

        if (error) {
          console.error('Database error:', error);
          return res.status(500).json({ error: 'Failed to update booking' });
        }

        // Send confirmation emails
        await sendConfirmationEmails(booking, session);
        
        console.log('Payment processed for booking:', bookingId);
      } catch (error) {
        console.error('Error processing payment:', error);
        return res.status(500).json({ error: 'Internal server error' });
      }
    }
  }

  res.status(200).json({ received: true });
}

async function sendConfirmationEmails(booking, session) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';
  const baseUrl = process.env.BASE_URL || 'https://kletzcontracting.com';
  
  // Generate calendar event
  const startDate = new Date(booking.service_date);
  const endDate = new Date(startDate);
  endDate.setHours(endDate.getHours() + 2); // 2 hour window
  
  const icsContent = generateICS({
    title: `Dumpster Delivery - ${booking.dumpster_size} Yard`,
    location: booking.address,
    description: `Dumpster rental delivery for ${booking.name}\\nPhone: ${booking.phone}\\nEmail: ${booking.email}`,
    startDate,
    endDate
  });

  // Send customer confirmation
  const customerHtml = generateCustomerConfirmationEmail({
    booking,
    amount: session.amount_total / 100,
    logoUrl
  });
  
  await transporter.sendMail({
    from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
    to: booking.email,
    subject: '✅ Payment Confirmed - Dumpster Rental Ready for Delivery',
    html: customerHtml,
    attachments: [{
      filename: 'dumpster-delivery.ics',
      content: icsContent,
      contentType: 'text/calendar'
    }]
  });

  // Send business notification
  const businessHtml = generateBusinessPaymentNotification({
    booking,
    amount: session.amount_total / 100
  });
  
  await transporter.sendMail({
    from: '"Kletz Contracting" <donotreply@goaldercreekdigital.com>',
    to: process.env.CLIENT_EMAIL,
    subject: `💰 Payment Received - Booking ${booking.id} Ready for Delivery`,
    html: businessHtml,
    attachments: [{
      filename: 'dumpster-delivery.ics',
      content: icsContent,
      contentType: 'text/calendar'
    }]
  });
}

function generateICS({ title, location, description, startDate, endDate }) {
  const formatDate = (date) => {
    return date.toISOString().replace(/-|:|\.\d\d\d/g, '');
  };
  
  return `BEGIN:VCALENDAR
VERSION:2.0
PRODID:-//Kletz Contracting//Dumpster Rental//EN
BEGIN:VEVENT
UID:${Date.now()}@kletzcontracting.com
DTSTAMP:${formatDate(new Date())}
DTSTART:${formatDate(startDate)}
DTEND:${formatDate(endDate)}
SUMMARY:${title}
DESCRIPTION:${description}
LOCATION:${location}
STATUS:CONFIRMED
END:VEVENT
END:VCALENDAR`;
}

function generateCustomerConfirmationEmail({ booking, amount, logoUrl }) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Confirmed</title>
    </head>
    <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f7f7f7;">
      <div style="max-width: 600px; margin: 20px auto; background: white; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1);">
        
        <div style="background: linear-gradient(135deg, #28a745, #20c997); color: white; padding: 30px; text-align: center;">
          <img src="${logoUrl}" alt="Kletz Contracting" style="max-width: 200px; margin-bottom: 15px;">
          <h1 style="margin: 0; font-size: 24px;">✅ Payment Confirmed!</h1>
          <p style="margin: 10px 0 0 0; opacity: 0.9;">Your dumpster rental is confirmed and ready for delivery</p>
        </div>

        <div style="padding: 30px;">
          <p style="font-size: 16px; margin-bottom: 25px;">Hi ${booking.name},</p>
          
          <p style="font-size: 16px; margin-bottom: 25px;">Thank you for your payment! Your dumpster rental has been confirmed and we've attached a calendar invite to help you remember your delivery date.</p>

          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #333;">Booking Details</h3>
            <div style="display: grid; gap: 8px;">
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Booking ID:</span>
                <span style="font-weight: 600;">#${booking.id}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Dumpster Size:</span>
                <span style="font-weight: 600;">${booking.dumpster_size} Yard</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Delivery Date:</span>
                <span style="font-weight: 600;">${formatDate(booking.service_date)}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid #e9ecef;">
                <span style="color: #666;">Address:</span>
                <span style="font-weight: 600;">${booking.address}</span>
              </div>
              <div style="display: flex; justify-content: space-between; padding: 8px 0;">
                <span style="color: #666;">Amount Paid:</span>
                <span style="font-weight: 600; color: #28a745;">$${amount.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div style="background: #fff3cd; padding: 20px; border-radius: 8px; border: 1px solid #ffeaa7; margin-bottom: 25px;">
            <h3 style="margin: 0 0 15px 0; color: #856404;">What Happens Next</h3>
            <ul style="margin: 0; padding-left: 20px; color: #856404;">
              <li>We'll contact you the day before delivery with timing details</li>
              <li>Our driver will deliver and place your dumpster at the specified location</li>
              <li>Contact us when you're ready for pickup or at the end of your rental period</li>
            </ul>
          </div>

          <div style="text-align: center; margin: 30px 0;">
            <p style="margin: 0 0 15px 0; font-size: 14px; color: #666;">Save the date! We've attached a calendar invite to this email.</p>
            <div style="display: inline-block; padding: 12px 24px; background: #f8f9fa; border: 2px solid #dee2e6; border-radius: 8px;">
              <span style="font-size: 24px;">📅</span>
              <p style="margin: 5px 0 0 0; font-weight: 600;">${formatDate(booking.service_date)}</p>
            </div>
          </div>

          <p style="margin: 0 0 15px 0;">Questions? Contact us at <a href="tel:(412) 200-2475" style="color: #28a745;">(412) 200-2475</a> or reply to this email.</p>
          <p style="margin: 0;">Thank you for choosing Kletz Contracting!</p>
        </div>

        <div style="background: #f8f9fa; padding: 20px; text-align: center; border-top: 1px solid #e9ecef;">
          <p style="margin: 0; font-size: 14px; color: #666;">© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p style="margin: 5px 0 0 0; font-size: 14px; color: #666;">1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}

function generateBusinessPaymentNotification({ booking, amount }) {
  const formatDate = (dateString) => new Date(dateString).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Payment Received</title>
    </head>
    <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
      
      <div style="background: #d4edda; border: 1px solid #c3e6cb; color: #155724; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h2 style="margin: 0 0 10px 0;">💰 Payment Received!</h2>
        <p style="margin: 0;">A dumpster rental booking has been paid and is ready for delivery.</p>
      </div>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 15px 0;">Customer Information</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Name:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.name}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Email:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><a href="mailto:${booking.email}">${booking.email}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Phone:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;"><a href="tel:${booking.phone}">${booking.phone}</a></td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Address:</td>
            <td style="padding: 8px 0;">${booking.address}</td>
          </tr>
        </table>
      </div>

      <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 15px 0;">Service Details</h3>
        <table style="width: 100%; border-collapse: collapse;">
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold; width: 30%;">Booking ID:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">#${booking.id}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Dumpster Size:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6;">${booking.dumpster_size} Yard</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; font-weight: bold;">Delivery Date:</td>
            <td style="padding: 8px 0; border-bottom: 1px solid #dee2e6; color: #dc3545; font-weight: bold;">${formatDate(booking.service_date)}</td>
          </tr>
          <tr>
            <td style="padding: 8px 0; font-weight: bold;">Amount Paid:</td>
            <td style="padding: 8px 0; color: #28a745; font-weight: bold; font-size: 18px;">$${amount.toFixed(2)}</td>
          </tr>
        </table>
      </div>

      <div style="background: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 20px; border-radius: 8px; margin-bottom: 25px;">
        <h3 style="margin: 0 0 10px 0;">⚠️ Action Required</h3>
        <p style="margin: 0 0 10px 0;">Schedule delivery for <strong>${formatDate(booking.service_date)}</strong> and contact customer day before with timing details.</p>
        <p style="margin: 0;">A calendar invite has been attached to this email for your convenience.</p>
      </div>

      <hr style="border: none; border-top: 1px solid #dee2e6; margin: 30px 0;">
      <p style="margin: 0; font-size: 12px; color: #666; text-align: center;">
        This notification was automatically generated when payment was received via Stripe.
      </p>
    </body>
    </html>
  `;
}