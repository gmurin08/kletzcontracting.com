// Simplified booking-response.js - Contract only
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

// Price calculation utilities
function getDumpsterPrice(size) {
  const prices = {
    '12': 38000,  // $380 for 12 yard
    '15': 40000   // $400 for 15 yard
  };
  return prices[size] || 38000;
}

function formatPrice(size) {
  const priceInCents = getDumpsterPrice(size);
  return `$${(priceInCents / 100).toFixed(2)}`;
}

export default async function handler(req, res) {
  const { id, action } = req.query;
  if (!id || !action) return res.status(400).send('Missing parameters');

  const { data: booking, error } = await supabase.from('bookings').select('*').eq('id', id).single();
  if (error || !booking) return res.status(404).send('Booking not found');

  const baseUrl = process.env.BASE_URL || 'https://kletzcontracting.com/';
  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';
  
  if (action === 'deny') {
    // Just update status and send denial email
    await supabase.from('bookings').update({ status: 'denied' }).eq('id', id);
    
    const deniedHtml = generateDeniedEmail({
      name: booking.name,
      logoUrl,
      baseUrl
    });
    
    await sendEmail(booking.email, 'Important Update About Your Dumpster Rental Request', deniedHtml);
    return res.redirect('/admin/booking-denied');
  }

  if (action === 'approve') {
    try {
      // Just update status to approved
      await supabase.from('bookings').update({ status: 'approved' }).eq('id', id);
      
      // Send approval email with contract link
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
        amount: formatPrice(booking.dumpster_size),
        contractUrl: "https://sendlink.co/documents/doc-form/6810e1bbbd56f4288f4db5bb?locale=en_US",
        logoUrl,
        baseUrl
      });
      
      await sendEmail(booking.email, 'Your Dumpster Rental Request Has Been Approved!', acceptedHtml);
      
      console.log('Booking approved and contract sent:', booking.id);
      return res.redirect('/admin/booking-request-sent');

    } catch (error) {
      console.error('Error processing approval:', error);
      return res.status(500).send('Error processing booking approval');
    }
  }

  return res.status(400).send('Invalid action');
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

function generateAcceptedEmail({ name, dumpsterSize, date, address, amount, contractUrl, logoUrl, baseUrl }) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Dumpster Rental Approved</title>
      <style>
        @media (prefers-color-scheme: dark) {
          body { background-color: #1a1a1a !important; color: #f5f5f5 !important; }
          .container { background-color: #2d2d2d !important; border-color: #444444 !important; }
          .content { background-color: #2d2d2d !important; }
          .footer { background-color: #222222 !important; border-color: #444444 !important; }
          h1, h2, h3, h4, p, li { color: #f5f5f5 !important; }
          .booking-details { background-color: #3d3d3d !important; border-color: #555555 !important; }
          .booking-details li { border-color: #555555 !important; }
          .action-button { background-color: #28a745 !important; color: #ffffff !important; }
          .priority-notice { background-color: #3d3d3d !important; border-color: #555555 !important; }
        }
        
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
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
          background-color: #f8f9fa;
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
          padding: 16px 40px;
          background-color: #28a745;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 18px;
          transition: all 0.3s;
        }
        .action-button:hover {
          background-color: #218838;
          transform: translateY(-2px);
          box-shadow: 0 4px 8px rgba(40, 167, 69, 0.3);
        }
        .priority-notice {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          border-radius: 8px;
          padding: 20px;
          margin: 30px 0;
          color: #856404;
        }
        .priority-notice ul {
          margin: 10px 0 0 0;
          padding-left: 20px;
        }
        .priority-notice li {
          margin-bottom: 8px;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          background-color: #f8f9fa;
          color: #666666;
          border-top: 1px solid #eeeeee;
        }
        .footer a {
          color: #007bff;
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
          color: #28a745;
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
          
          <p>Great news! Your dumpster rental request has been approved. To complete your booking, please sign the rental agreement using the button below.</p>
          
          <div class="booking-details">
            <h3>Booking Details</h3>
            <ul>
              <li><strong>Dumpster Size:</strong> ${dumpsterSize} Yard</li>
              <li><strong>Delivery Date:</strong> ${date}</li>
              <li><strong>Delivery Address:</strong> ${address}</li>
              <li><strong>Estimated Cost:</strong> ${amount}</li>
            </ul>
          </div>
          
          <div class="action-container">
            <a href="${contractUrl}" class="action-button">📋 Sign Rental Agreement</a>
          </div>
          
          <p>Please sign our rental agreement to confirm your booking. Once signed, we'll contact you to arrange payment and delivery details.</p>

          <div class="priority-notice">
            <strong>Next Steps:</strong> 
            <ul>
              <li>Click the button above to sign your rental agreement</li>
              <li>We'll contact you within 24 hours to arrange payment</li>
              <li>We'll confirm delivery timing the day before your scheduled date</li>
            </ul>
          </div>
          
          <p>If you have any questions, please don't hesitate to contact us at (412) 200-2475.</p>
          
          <div class="help-links">
            <a href="${baseUrl}faq">Frequently Asked Questions</a>
            <a href="${baseUrl}contact">Contact Support</a>
            <a href="${baseUrl}size-guide">Dumpster Size Guide</a>
          </div>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
          <p>
            <a href="${baseUrl}privacy">Privacy Policy</a> | 
            <a href="${baseUrl}terms">Terms of Service</a>
          </p>
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
      <title>Booking Update</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333333;
          margin: 0;
          padding: 0;
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
        .action-button {
          display: inline-block;
          padding: 14px 36px;
          background-color: #dc3545;
          color: #ffffff;
          text-decoration: none;
          border-radius: 6px;
          font-weight: 600;
          font-size: 16px;
        }
        .action-container {
          text-align: center;
          margin: 35px 0;
        }
        .footer {
          padding: 20px 30px;
          text-align: center;
          font-size: 14px;
          background-color: #f8f9fa;
          color: #666666;
          border-top: 1px solid #eeeeee;
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
          
          <p>Thank you for your interest in our dumpster rental services. Unfortunately, we're unable to accommodate your booking request for the requested date and location.</p>
          
          <p>We'd be happy to help you reschedule for an alternative date or discuss other options.</p>
          
          <div class="action-container">
            <a href="${baseUrl}contact" class="action-button">Contact Us to Reschedule</a>
          </div>
          
          <p>Please don't hesitate to reach out - we value your business and want to find a solution that works.</p>
        </div>
        
        <div class="footer">
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        </div>
      </div>
    </body>
    </html>
  `;
}