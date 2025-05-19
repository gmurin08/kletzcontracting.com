import Stripe from 'stripe';
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);
const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Move sendEmail function outside and before the handler
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

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).end();
  }

  // PRODUCTION FIX: Handle body differently for Vercel
  let rawBody;
  
  // Check if body is already parsed by Vercel as an object
  if (req.body && typeof req.body === 'object' && !Buffer.isBuffer(req.body)) {
    // Vercel parsed it as JSON, convert back to string for signature verification
    rawBody = Buffer.from(JSON.stringify(req.body));
  } else if (req.body && Buffer.isBuffer(req.body)) {
    rawBody = req.body;
  } else if (req.body && typeof req.body === 'string') {
    rawBody = Buffer.from(req.body, 'utf8');
  } else {
    // Original stream reading approach
    try {
      const chunks = [];
      for await (const chunk of req) {
        chunks.push(chunk);
      }
      rawBody = Buffer.concat(chunks);
    } catch (err) {
      console.error('Error reading request body:', err);
      return res.status(400).send('Error reading request body');
    }
  }
  
  // Debug logging
  console.log('Raw body length:', rawBody.length);
  console.log('Raw body type:', typeof req.body);
  console.log('Stripe signature:', sig);

  const sig = req.headers['stripe-signature'];
  
  // Debug logging
  console.log('Raw body length:', rawBody.length);
  console.log('Raw body type:', typeof rawBody);
  console.log('Signature:', sig);
  console.log('Webhook secret exists:', !!process.env.STRIPE_WEBHOOK_SECRET);
  
  let event;
  try {
    // Ensure rawBody is a Buffer
    if (!Buffer.isBuffer(rawBody)) {
      rawBody = Buffer.from(rawBody);
    }
    
    event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
  } catch (err) {
    console.error('Webhook signature verification failed:', err.message);
    console.error('Error details:', err);
    return res.status(400).send(`Webhook Error: ${err.message}`);
  }

  console.log('Event type:', event.type);

  if (event.type === 'checkout.session.completed') {
    const session = event.data.object;
    const bookingId = session.metadata.booking_id;

    if (!bookingId) {
      console.log('No booking_id found in metadata');
      return res.status(200).json({ received: true, message: 'No booking_id in metadata' });
    }
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
          'Booking Confirmed ✅ - Kletz Contracting',
            generateCustomerConfirmationEmail(booking, calendarLink)
        );

        await sendEmail(
          process.env.CLIENT_EMAIL,
          'New Paid Booking 💰 - Action Required',
          generateBusinessNotificationEmail(booking, calendarLink)
        );
      }
    } catch (dbError) {
      console.error('Database error:', dbError);
      return res.status(500).send('Database error');
    }
  }

  res.status(200).json({ received: true });
}

// Business notification email template
function generateBusinessNotificationEmail(booking, calendarLink) {
  // Format date from YYYY-MM-DD to full English date
  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Paid Booking - Kletz Contracting</title>
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
          .header {
            background: linear-gradient(135deg, #2864be 0%, #50c85e 100%) !important;
          }
          .booking-details {
            background-color: #3d3d3d !important;
            border-color: #555555 !important;
          }
          .booking-details li {
            border-color: #555555 !important;
          }
          .calendar-button {
            background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%) !important;
            color: #ffffff !important;
          }
          .urgency-badge {
            background-color: #dc3545 !important;
          }
          .divider {
            border-color: #555555 !important;
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
          max-width: 650px;
          margin: 20px auto;
          border: 1px solid #e0e0e0;
          border-radius: 12px;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          padding: 30px 0;
          text-align: center;
          background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
          position: relative;
        }
        .logo {
          max-width: 180px;
          height: auto;
          filter: brightness(0) invert(1);
        }
        .urgency-badge {
          position: absolute;
          top: 15px;
          right: 20px;
          background-color: #28a745;
          color: white;
          padding: 8px 16px;
          border-radius: 20px;
          font-size: 12px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        .content {
          padding: 35px 30px;
          background-color: #ffffff;
        }
        h1 {
          color: #dc3545;
          font-size: 26px;
          margin: 0 0 10px;
          text-align: center;
          font-weight: 700;
        }
        .subtitle {
          text-align: center;
          color: #666;
          font-size: 18px;
          margin-bottom: 25px;
          font-weight: 500;
        }
        p {
          margin: 0 0 20px;
          font-size: 16px;
          color: #4a4a4a;
        }
        .booking-details {
          background: linear-gradient(135deg, #fff5f5 0%, #ffe5e5 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 25px 0;
          border: 2px solid #ffdbdb;
          box-shadow: 0 2px 8px rgba(220, 53, 69, 0.1);
        }
        .booking-details h3 {
          margin-top: 0;
          color: #dc3545;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        .booking-details h3::before {
          content: "💼";
          margin-right: 10px;
          font-size: 24px;
        }
        .booking-details ul {
          list-style-type: none;
          padding: 0;
          margin: 15px 0 0 0;
        }
        .booking-details li {
          padding: 12px 0;
          border-bottom: 1px solid #ffdbdb;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .booking-details li:last-child {
          border-bottom: none;
        }
        .booking-details strong {
          width: 45%;
          display: inline-block;
          color: #495057;
          font-weight: 600;
        }
        .booking-details .value {
          color: #dc3545;
          font-weight: 500;
        }
        .priority-info {
          background: linear-gradient(135deg, #fff3cd 0%, #ffeaa7 100%);
          border: 2px solid #ffc107;
          border-radius: 12px;
          padding: 20px;
          margin: 25px 0;
          text-align: center;
        }
        .priority-info h3 {
          color: #856404;
          margin-top: 0;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .priority-info h3::before {
          content: "⚠️";
          margin-right: 10px;
          font-size: 24px;
        }
        .calendar-container {
          text-align: center;
          margin: 30px 0;
          padding: 25px;
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 12px;
          border: 2px solid #e9ecef;
        }
        .calendar-button {
          display: inline-block;
          padding: 16px 32px;
          background: linear-gradient(135deg, #dc3545 0%, #fd7e14 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 12px rgba(220, 53, 69, 0.3);
        }
        .calendar-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(220, 53, 69, 0.4);
          background: linear-gradient(135deg, #c82333 0%, #e17613 100%);
        }
        .calendar-button::before {
          content: "📅";
          margin-right: 8px;
          font-size: 18px;
        }
        .action-items {
          background: linear-gradient(135deg, #e7f3ff 0%, #f0f9ff 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 25px 0;
          border: 2px solid #bde0ff;
        }
        .action-items h3 {
          color: #2864be;
          margin-top: 0;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        .action-items h3::before {
          content: "✅";
          margin-right: 10px;
          font-size: 20px;
        }
        .action-items ul {
          list-style: none;
          padding: 0;
          margin: 15px 0 0 0;
        }
        .action-items li {
          background: white;
          margin: 10px 0;
          padding: 15px;
          border-radius: 8px;
          border: 1px solid #cde7ff;
          display: flex;
          align-items: center;
        }
        .action-items li::before {
          content: "🔹";
          margin-right: 12px;
          font-size: 16px;
        }
        .divider {
          height: 2px;
          background: linear-gradient(90deg, #dc3545 0%, #fd7e14 100%);
          border: none;
          margin: 30px 0;
          border-radius: 1px;
        }
        .footer {
          padding: 25px 30px;
          text-align: center;
          font-size: 14px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #666666;
          border-top: 1px solid #dee2e6;
        }
        .footer strong {
          color: #dc3545;
          font-size: 16px;
        }
        .timestamp {
          font-style: italic;
          color: #6c757d;
          font-size: 14px;
          text-align: center;
          margin-top: 20px;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <div class="urgency-badge">Paid Booking</div>
          <img src="https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <h1>💰 Payment Received!</h1>
          <p class="subtitle">New confirmed dumpster rental booking</p>
          
          <p><strong>Great news!</strong> Customer <strong>${booking.name}</strong> has completed their payment and their dumpster rental is now confirmed.</p>
          
          <div class="booking-details">
            <h3>Booking Information</h3>
            <ul>
              <li><strong>Customer Name:</strong> <span class="value">${booking.name}</span></li>
              <li><strong>Email:</strong> <span class="value">${booking.email}</span></li>
              <li><strong>Phone:</strong> <span class="value">${booking.phone || 'Not provided'}</span></li>
              <li><strong>Dumpster Size:</strong> <span class="value">${booking.dumpster_size || 'Standard'} Yard</span></li>
              <li><strong>Service Date:</strong> <span class="value">${formatDate(booking.service_date)}</span></li>
              <li><strong>Delivery Address:</strong> <span class="value">${booking.address}</span></li>
              <li><strong>Special Instructions:</strong> <span class="value">${booking.special_instructions || 'None'}</span></li>
              <li><strong>Booking ID:</strong> <span class="value">#${booking.id}</span></li>
            </ul>
          </div>

          <div class="priority-info">
            <h3>Next Steps Required</h3>
            <p>This booking requires your attention to schedule delivery and coordinate with the customer.</p>
          </div>
          
          <div class="calendar-container">
            <h3 style="color: #dc3545; margin-top: 0;">Add to Business Calendar</h3>
            <p style="margin-bottom: 20px; color: #666;">Schedule this delivery in your calendar</p>
            <a href="${calendarLink}" class="calendar-button">Add to Company Calendar</a>
          </div>
          
          <hr class="divider">
          
          <div class="action-items">
            <h3>Action Items</h3>
            <ul>
              <li>Confirm dumpster availability for ${formatDate(booking.service_date)}</li>
              <li>Schedule delivery truck and driver</li>
              <li>Contact customer day before delivery for timing confirmation</li>
              <li>Update delivery schedule in company system</li>
              <li>Prepare delivery paperwork and customer receipt</li>
            </ul>
          </div>
          
          <p class="timestamp">
            📧 This notification was sent automatically at ${new Date().toLocaleString('en-US', {
              weekday: 'short',
              year: 'numeric',
              month: 'short',
              day: 'numeric',
              hour: '2-digit',
              minute: '2-digit',
              timeZoneName: 'short'
            })}
          </p>
        </div>
        
        <div class="footer">
          <p><strong>Kletz Contracting - Internal Notification System</strong></p>
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. | Business Operations Dashboard</p>
          <p style="color: #999; font-size: 12px;">
            This email contains confidential business information intended only for authorized personnel.
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}

// Customer confirmation email template
function generateCustomerConfirmationEmail(booking, calendarLink) {
  // Format date from YYYY-MM-DD to full English date
  const formatDate = (dateString) => {
    const date = new Date(dateString + 'T00:00:00');
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Booking Confirmed - Kletz Contracting</title>
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
          .calendar-button {
            background-color: #28a745 !important;
            color: #ffffff !important;
          }
          .contact-section {
            background-color: #3d3d3d !important;
            border-color: #555555 !important;
          }
          .footer a {
            color: #28a745 !important;
          }
          .divider {
            border-color: #555555 !important;
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
          border-radius: 12px;
          overflow: hidden;
          background-color: #ffffff;
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .header {
          padding: 40px 0;
          text-align: center;
          background: linear-gradient(135deg, #2864be 0%, #50c85e 100%);
          position: relative;
        }
        .logo {
          max-width: 200px;
          height: auto;
          filter: brightness(0) invert(1);
        }
        .success-icon {
          position: absolute;
          top: 20px;
          right: 30px;
          width: 40px;
          height: 40px;
          background-color: #28a745;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 24px;
          font-weight: bold;
        }
        .content {
          padding: 40px 30px;
          background-color: #ffffff;
        }
        h1 {
          color: #28a745;
          font-size: 28px;
          margin: 0 0 10px;
          text-align: center;
          font-weight: 700;
        }
        .subtitle {
          text-align: center;
          color: #666;
          font-size: 18px;
          margin-bottom: 30px;
        }
        p {
          margin: 0 0 20px;
          font-size: 16px;
          color: #4a4a4a;
        }
        .booking-details {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 30px 0;
          border: 2px solid #e9ecef;
          box-shadow: 0 2px 8px rgba(0,0,0,0.05);
        }
        .booking-details h3 {
          margin-top: 0;
          color: #2864be;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        .booking-details h3::before {
          content: "📋";
          margin-right: 10px;
          font-size: 24px;
        }
        .booking-details ul {
          list-style-type: none;
          padding: 0;
          margin: 15px 0 0 0;
        }
        .booking-details li {
          padding: 15px 0;
          border-bottom: 1px solid #dee2e6;
          font-size: 16px;
          display: flex;
          align-items: center;
        }
        .booking-details li:last-child {
          border-bottom: none;
        }
        .booking-details strong {
          width: 45%;
          display: inline-block;
          color: #495057;
          font-weight: 600;
        }
        .booking-details .value {
          color: #2864be;
          font-weight: 500;
        }
        .calendar-container {
          text-align: center;
          margin: 35px 0;
          padding: 25px;
          background: linear-gradient(135deg, #e3f2fd 0%, #f1f8e9 100%);
          border-radius: 12px;
          border: 2px solid #bbdefb;
        }
        .calendar-button {
          display: inline-block;
          padding: 16px 32px;
          background: linear-gradient(135deg, #28a745 0%, #20c997 100%);
          color: #ffffff;
          text-decoration: none;
          border-radius: 8px;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: none;
          box-shadow: 0 4px 12px rgba(40, 167, 69, 0.3);
        }
        .calendar-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 16px rgba(40, 167, 69, 0.4);
          background: linear-gradient(135deg, #218838 0%, #1abc9c 100%);
        }
        .calendar-button::before {
          content: "📅";
          margin-right: 8px;
          font-size: 18px;
        }
        .contact-section {
          background: linear-gradient(135deg, #f8f9fa 0%, #ffffff 100%);
          border-radius: 12px;
          padding: 25px;
          margin: 30px 0;
          border: 2px solid #e9ecef;
        }
        .contact-section h3 {
          color: #2864be;
          margin-top: 0;
          font-weight: 600;
          display: flex;
          align-items: center;
        }
        .contact-section h3::before {
          content: "📞";
          margin-right: 10px;
          font-size: 20px;
        }
        .contact-info {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 15px;
          margin-top: 15px;
        }
        .contact-item {
          display: flex;
          align-items: center;
          padding: 10px;
          background: white;
          border-radius: 8px;
          border: 1px solid #dee2e6;
        }
        .contact-item::before {
          margin-right: 10px;
          font-size: 18px;
        }
        .contact-item.phone::before { content: "☎️"; }
        .contact-item.email::before { content: "✉️"; }
        .contact-item.address::before { content: "📍"; }
        .contact-item.hours::before { content: "🕐"; }
        .divider {
          height: 2px;
          background: linear-gradient(90deg, #2864be 0%, #50c85e 100%);
          border: none;
          margin: 30px 0;
          border-radius: 1px;
        }
        .footer {
          padding: 25px 30px;
          text-align: center;
          font-size: 14px;
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          color: #666666;
          border-top: 1px solid #dee2e6;
        }
        .footer a {
          color: #2864be;
          text-decoration: none;
          font-weight: 500;
        }
        .footer a:hover {
          color: #50c85e;
        }
        .footer-logo {
          margin-bottom: 15px;
        }
        .social-links {
          margin: 15px 0;
        }
        .social-links a {
          margin: 0 10px;
          font-size: 18px;
          text-decoration: none;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          
          <img src="https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <h1>Payment Confirmed!</h1>
          <p class="subtitle">Your dumpster delivery is scheduled</p>
          
          <p>Hi ${booking.name},</p>
          
          <p>Thank you for your payment! Your dumpster rental is confirmed and we're all set for delivery. Our team will be in touch with you the day before delivery to confirm the timing and placement details.</p>
          
          <div class="booking-details">
            <h3>Your Booking Details</h3>
            <ul>
              <li><strong>Customer Name:</strong> <span class="value">${booking.name}</span></li>
              <li><strong>Dumpster Size:</strong> <span class="value">${booking.dumpster_size || 'Standard'} Yard</span></li>
              <li><strong>Delivery Date:</strong> <span class="value">${formatDate(booking.service_date)}</span></li>
              <li><strong>Delivery Address:</strong> <span class="value">${booking.address}</span></li>
              <li><strong>Contact Email:</strong> <span class="value">${booking.email}</span></li>
              <li><strong>Status:</strong> <span class="value" style="color: #28a745;">✓ Paid & Confirmed</span></li>
            </ul>
          </div>
          
          <div class="calendar-container">
            <h3 style="color: #2864be; margin-top: 0;">Add to Your Calendar</h3>
            <p style="margin-bottom: 20px; color: #666;">Don't forget about your delivery date!</p>
            <a href="${calendarLink}" class="calendar-button">Add Delivery to Calendar</a>
          </div>
          
          <hr class="divider">
          
          <div class="contact-section">
            <h3>Need Help? Contact Us</h3>
            <div class="contact-info">
              <div class="contact-item phone">
                <div>
                  <strong>Phone:</strong><br>
                  (412) 123-4567
                </div>
              </div>
              <div class="contact-item email">
                <div>
                  <strong>Email:</strong><br>
                  info@kletzcontracting.com
                </div>
              </div>
              <div class="contact-item address">
                <div>
                  <strong>Address:</strong><br>
                  1468 Old Steubenville Pike<br>
                  Suite D, Pittsburgh, PA 15205
                </div>
              </div>
              <div class="contact-item hours">
                <div>
                  <strong>Business Hours:</strong><br>
                  Mon-Fri: 7AM-6PM<br>
                  Sat: 8AM-4PM
                </div>
              </div>
            </div>
          </div>
          
          <p style="color: #666; font-style: italic; text-align: center; margin-top: 30px;">
            We appreciate your business and look forward to serving you!
          </p>
        </div>
        
        <div class="footer">
          <div class="footer-logo">
            <strong>Kletz Contracting Inc.</strong>
          </div>
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>
            <a href="https://kletzcontracting.com/privacy">Privacy Policy</a> | 
            <a href="https://kletzcontracting.com/terms">Terms of Service</a>
          </p>
          <div class="social-links">
            <span>Follow us: </span>
            <a href="#" style="text-decoration: none;">Powered By Kinesis©</a>
          </div>
        </div>
      </div>
    </body>
    </html>
  `;
}