//book.js
import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, dumpster_size, address, service_date } = req.body;

  // Validate required fields
  if (!name || !email || !phone || !dumpster_size || !address || !service_date) {
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
    },
  });

  const logoUrl = 'https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681ba0cc6da8499d97d2cdd0.png';

  await transporter.sendMail({
    from: `"Kletz Contracting Bookings" <donotreply@goaldercreekdigital.com>`,
    to: process.env.CLIENT_EMAIL,
    subject: `New Dumpster Booking Request - ${booking.name}`,
    html: generateBusinessNotificationEmail({ booking, approveLink, denyLink, logoUrl }),
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
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>New Booking Request</title>
      <style>
        body {
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          line-height: 1.6;
          color: #333;
          margin: 0;
          padding: 0;
          background-color: #f5f5f5;
        }
        .container {
          max-width: 600px;
          margin: 20px auto;
          background-color: #ffffff;
          border: 1px solid #e1e1e1;
          border-radius: 8px;
          overflow: hidden;
        }
        .header {
          background-color: #f8f9fa;
          padding: 30px 20px;
          text-align: center;
          border-bottom: 2px solid #e9ecef;
        }
        .logo {
          max-width: 200px;
          height: auto;
        }
        .content {
          padding: 40px 30px;
          background-color: #ffffff;
        }
        .alert {
          background-color: #fff3cd;
          border: 1px solid #ffeaa7;
          color: #856404;
          padding: 15px;
          border-radius: 6px;
          margin-bottom: 25px;
          text-align: center;
        }
        .alert h2 {
          margin: 0 0 10px 0;
          font-size: 20px;
        }
        h1 {
          color: #292929;
          font-size: 24px;
          margin: 0 0 20px 0;
          text-align: center;
        }
        .booking-details {
          background-color: #f8f9fa;
          border: 1px solid #e9ecef;
          border-radius: 6px;
          padding: 25px;
          margin: 25px 0;
        }
        .booking-details h3 {
          margin: 0 0 15px 0;
          color: #495057;
          font-size: 18px;
          border-bottom: 2px solid #dee2e6;
          padding-bottom: 10px;
        }
        .booking-details table {
          width: 100%;
          border-collapse: collapse;
        }
        .booking-details td {
          padding: 12px 0;
          border-bottom: 1px solid #e9ecef;
          vertical-align: top;
        }
        .booking-details td:first-child {
          font-weight: 600;
          color: #495057;
          width: 35%;
        }
        .booking-details td:last-child {
          color: #212529;
        }
        .booking-details tr:last-child td {
          border-bottom: none;
        }
        .button-container {
          text-align: center;
          margin: 35px 0;
          padding: 20px;
          background-color: #f8f9fa;
          border-radius: 6px;
        }
        .button-container p {
          margin: 0 0 20px 0;
          font-weight: 600;
          color: #495057;
        }
        .button {
          display: inline-block;
          padding: 14px 28px;
          margin: 8px;
          border-radius: 6px;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          transition: all 0.3s ease;
          border: 2px solid transparent;
        }
        .approve-button {
          background-color: #28a745;
          color: #ffffff;
          border-color: #28a745;
        }
        .approve-button:hover {
          background-color: #218838;
          border-color: #1e7e34;
        }
        .deny-button {
          background-color: #dc3545;
          color: #ffffff;
          border-color: #dc3545;
        }
        .deny-button:hover {
          background-color: #c82333;
          border-color: #bd2130;
        }
        .booking-id {
          background-color: #e9ecef;
          padding: 10px;
          border-radius: 4px;
          font-family: 'Courier New', monospace;
          font-weight: bold;
          text-align: center;
          margin: 15px 0;
        }
        .priority-notice {
          background-color: #d1ecf1;
          border: 1px solid #bee5eb;
          color: #0c5460;
          padding: 15px;
          border-radius: 6px;
          margin: 20px 0;
        }
        .footer {
          background-color: #f8f9fa;
          padding: 25px;
          font-size: 14px;
          color: #6c757d;
          text-align: center;
          border-top: 1px solid #e9ecef;
        }
        .footer a {
          color: #007bff;
          text-decoration: none;
        }
        .footer a:hover {
          text-decoration: underline;
        }
        @media screen and (max-width: 480px) {
          .container {
            margin: 10px;
          }
          .content {
            padding: 20px 15px;
          }
          .button {
            display: block;
            margin: 10px 0;
            text-align: center;
          }
          .booking-details td:first-child {
            width: 40%;
          }
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <img src="${logoUrl}" alt="Kletz Contracting" class="logo">
        </div>
        
        <div class="content">
          <div class="alert">
            <h2>🔔 New Booking Request</h2>
            <p>Action Required - Customer Waiting for Response</p>
          </div>
          
          <h1>Dumpster Rental Request</h1>
          
          <div class="booking-id">
            Booking ID: #${booking.id}
          </div>
          
          <div class="booking-details">
            <h3>Customer Information</h3>
            <table>
              <tr>
                <td>Name:</td>
                <td><strong>${booking.name}</strong></td>
              </tr>
              <tr>
                <td>Email:</td>
                <td><a href="mailto:${booking.email}">${booking.email}</a></td>
              </tr>
              <tr>
                <td>Phone:</td>
                <td><a href="tel:${booking.phone}">${booking.phone}</a></td>
              </tr>
            </table>
          </div>
          
          <div class="booking-details">
            <h3>Service Details</h3>
            <table>
              <tr>
                <td>Dumpster Size:</td>
                <td><strong>${booking.dumpster_size} Yard</strong></td>
              </tr>
              <tr>
                <td>Delivery Date:</td>
                <td><strong>${formattedDate}</strong></td>
              </tr>
              <tr>
                <td>Delivery Address:</td>
                <td>${booking.address}</td>
              </tr>
            </table>
          </div>
          
          <div class="priority-notice">
            <strong>Next Steps:</strong> If approved, a QuickBooks invoice will be automatically created and sent to the customer with a payment link. Once paid, you'll receive a confirmation notification.
          </div>
          
          <div class="button-container">
            <p>Choose your response:</p>
            <a href="${approveLink}" class="button approve-button">✅ Approve & Create Invoice</a>
            <a href="${denyLink}" class="button deny-button">❌ Deny Request</a>
          </div>
          
          <p><strong>Note:</strong> Approving this request will:</p>
          <ul>
            <li>Create a customer and invoice in QuickBooks Online</li>
            <li>Send payment link to customer via email</li>
            <li>Reserve the delivery date in your schedule</li>
          </ul>
          
          <p>If you have any questions about this booking, you can contact the customer directly using the information above.</p>
        </div>
        
        <div class="footer">
          <p><strong>Kletz Contracting Booking System</strong></p>
          <p>© ${new Date().getFullYear()} Kletz Contracting Inc. All rights reserved.</p>
          <p>1468 Old Steubenville Pike - Suite D, Pittsburgh, PA 15205</p>
          <p>
            <a href="${process.env.BASE_URL || 'https://kletzcontracting.com'}/privacy">Privacy Policy</a> | 
            <a href="${process.env.BASE_URL || 'https://kletzcontracting.com'}/terms">Terms of Service</a>
          </p>
        </div>
      </div>
    </body>
    </html>
  `;
}