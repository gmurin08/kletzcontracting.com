// book.js
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, dumpster_size, address, city, state, zip, service_date } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !dumpster_size || !address || !city || !state || !zip || !service_date) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  try {
    // Insert booking with pending status
    const { data, error } = await supabase
      .from('bookings')
      .insert([{ 
        name, 
        email, 
        phone, 
        dumpster_size, 
        address, 
        city,
        state,
        zip,
        service_date,
        status: 'pending',
        created_at: new Date().toISOString()
      }])
      .select()
      .single();

    if (error) {
      console.error('Database error:', error);
      return res.status(500).json({ error: 'Failed to save booking' });
    }

    // Generate approval/denial links
    const baseUrl = process.env.BASE_URL || 'https://kletzcontracting.com';
    const approveLink = `${baseUrl}/api/dumpster-service/booking-response?id=${data.id}&action=approve`;
    const denyLink = `${baseUrl}/api/dumpster-service/booking-response?id=${data.id}&action=deny`;

    // Send notification email to business
    await sendBusinessNotification({
      booking: data,
      approveLink,
      denyLink
    });

    console.log('New booking created:', data.id);
    res.status(200).json({ 
      message: 'Booking submitted successfully',
      bookingId: data.id 
    });

  } catch (error) {
    console.error('Booking submission error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}

async function sendBusinessNotification({ booking, approveLink, denyLink }) {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  });

  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';

  // *** Refactored: Define emailHTML as a variable first ***
  const emailHTML = generateBusinessNotificationEmail({ booking, approveLink, denyLink, logoUrl });

  await transporter.sendMail({
    from: `"Kletz Contracting Bookings" <donotreply@goaldercreekdigital.com>`,
    to: process.env.CLIENT_EMAIL,
    subject: `New Dumpster Booking Request - ${booking.name}`,
    html: emailHTML, // Pass the variable
  });
}

function generateBusinessNotificationEmail({ booking, approveLink, denyLink, logoUrl }) {
  const formattedDate = new Date(booking.service_date).toLocaleDateString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });

  return `
  <body style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f5f5f5;">
    <div class="container" style="max-width: 600px; margin: 20px auto; background-color: #ffffff; border: 1px solid #e1e1e1; border-radius: 8px; overflow: hidden;">
      <div class="header" style="background-color: #f8f9fa; padding: 30px 20px; text-align: center; border-bottom: 2px solid #e9ecef;">
        <img src="${logoUrl}" alt="Kletz Contracting" class="logo" style="max-width: 200px; height: auto;">
      </div>
      
      <div class="content" style="padding: 40px 30px; background-color: #ffffff;">
        <div class="alert" style="background-color: #fff3cd; border: 1px solid #ffeaa7; color: #856404; padding: 15px; border-radius: 6px; margin-bottom: 25px; text-align: center;">
          <h2 style="margin: 0 0 10px 0; font-size: 20px;">🔔 New Booking Request</h2>
          <p style="margin: 0;">Action Required - Customer Waiting for Response</p>
        </div>
        
        <h1 style="color: #292929; font-size: 24px; margin: 0 0 20px 0; text-align: center;">Dumpster Rental Request</h1>
        
        <div class="booking-id" style="background-color: #e9ecef; padding: 10px; border-radius: 4px; font-family: 'Courier New', monospace; font-weight: bold; text-align: center; margin: 15px 0;">
          Booking ID: #${booking.id}
        </div>
        
        <div class="booking-details" style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 25px; margin: 25px 0;">
          <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 18px; border-bottom: 2px solid #dee2e6; padding-bottom: 10px;">Customer Information</h3>
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Name:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; color: #212529;"><strong>${booking.name}</strong></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Email:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; color: #212529;"><a href="mailto:${booking.email}" style="color: #007bff; text-decoration: none;">${booking.email}</a></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Phone:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; color: #212529;"><a href="tel:${booking.phone}" style="color: #007bff; text-decoration: none;">${booking.phone}</a></td>
            </tr>
          </table>
        </div>
        
        <div class="booking-details" style="background-color: #f8f9fa; border: 1px solid #e9ecef; border-radius: 6px; padding: 25px; margin: 25px 0;">
          <h3 style="margin: 0 0 15px 0; color: #495057; font-size: 18px; border-bottom: 2px solid #dee2e6; padding-bottom: 10px;">Service Details</h3>
          <table role="presentation" style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Dumpster Size:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; color: #212529;"><strong>${booking.dumpster_size} Yard</strong></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Delivery Date:</td>
              <td style="padding: 12px 0; border-bottom: 1px solid #e9ecef; vertical-align: top; color: #212529;"><strong>${formattedDate}</strong></td>
            </tr>
            <tr>
              <td style="padding: 12px 0; vertical-align: top; font-weight: 600; color: #495057; width: 35%;">Delivery Address:</td>
              <td style="padding: 12px 0; vertical-align: top; color: #212529;">${booking.address}<br/>${booking.city}, ${booking.state} ${booking.zip}</td>
            </tr>
          </table>
        </div>
        
        <div class="priority-notice" style="background-color: #d1ecf1; border: 1px solid #bee5eb; color: #0c5460; padding: 15px; border-radius: 6px; margin: 20px 0;">
          <strong style="font-weight: bold;">Next Steps:</strong> If approved, the customer will receive a contract and Stripe payment link. Once paid, both you and the customer will receive confirmation emails with a calendar invite.
        </div>
        
        <div class="button-container" style="text-align: center; margin: 35px 0; padding: 20px; background-color: #f8f9fa; border-radius: 6px;">
          <p style="margin: 0 0 20px 0; font-weight: 600; color: #495057;">Choose your response:</p>
          <a href="${approveLink}" class="button approve-button" style="display: inline-block; padding: 14px 28px; margin: 8px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; border: 2px solid transparent; background-color: #28a745; color: #ffffff; border-color: #28a745;">✅ Approve & Send Payment Link</a>
          <a href="${denyLink}" class="button deny-button" style="display: inline-block; padding: 14px 28px; margin: 8px; border-radius: 6px; text-decoration: none; font-weight: 600; font-size: 16px; transition: all 0.3s ease; border: 2px solid transparent; background-color: #dc3545; color: #ffffff; border-color: #dc3545;">❌ Deny Request</a>
        </div>
        
        <p style="margin: 0 0 10px 0;"><strong>Note:</strong> Approving this request will:</p>
        <ul style="margin: 0 0 20px 0; padding: 0 20px;">
          <li style="margin-bottom: 5px;">Send the customer a contract to sign</li>
          <li style="margin-bottom: 5px;">Send a Stripe payment link to the customer</li>
          <li style="margin-bottom: 5px;">Automatically process payment and send confirmations</li>
          <li>Reserve the delivery date in your schedule</li>
        </ul>
        
        <p style="margin: 0;">If you have any questions about this booking, you can contact the customer directly using the information above.</p>
      </div>
      
      <div class="footer" style="background-color: #f8f9fa; padding: 25px; font-size: 14px; color: #6c757d; text-align: center; border-top: 1px solid #e9ecef;">
        <p style="margin: 0 0 5px 0;"><strong>Kletz Contracting Booking System</strong></p>
        <p style="margin: 0 0 5px 0;">© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
        <p style="margin: 0;">1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
        <p style="margin: 10px 0 0 0;">
          <a href="${'https://kletzcontracting.com'}/privacy" style="color: #007bff; text-decoration: none;">Privacy Policy</a> | 
          <a href="${process.env.BASE_URL || 'https://kletzcontracting.com'}/terms" style="color: #007bff; text-decoration: none;">Terms of Service</a>
        </p>
      </div>
    </div>
  </body>
  `;
}