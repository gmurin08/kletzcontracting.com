import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, dumpster_size, address, service_date} = req.body;

  const { data, error } = await supabase.from('bookings').insert([{ name, email, phone, dumpster_size, address, service_date}]).select().single();
  if (error) return res.status(500).json({ error: error.message });

  const approveLink = `${process.env.BASE_URL}api/dumpster-service/booking-response?id=${data.id}&action=approve`;
  const denyLink = `${process.env.BASE_URL}api/dumpster-service/booking-response?id=${data.id}&action=deny`;

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
    to: process.env.CLIENT_EMAIL,
    subject: 'New Dumpster Booking Request',
    html: `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Booking Request</title>
        <style>
          body {
            font-family: Arial, sans-serif;
            line-height: 1.6;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            border: 1px solid #e1e1e1;
          }
          .header {
            background-color:rgb(251, 251, 251);
            padding: 20px;
            text-align: center;
          }
          .logo {
            max-width: 120px;
          }
          .content {
            padding: 30px;
            background-color: #ffffff;
          }
          h1 {
            color: #333;
            font-size: 24px;
            margin-top: 0;
            margin-bottom: 20px;
          }
          .booking-details {
            background-color: #f8f8f8;
            border-radius: 4px;
            padding: 20px;
            margin-bottom: 25px;
          }
          .booking-details ul {
            list-style-type: none;
            padding: 0;
            margin: 0;
          }
          .booking-details li {
            padding: 8px 0;
            border-bottom: 1px solid #e1e1e1;
          }
          .booking-details li:last-child {
            border-bottom: none;
          }
          .button-container {
            text-align: center;
            margin: 25px 0;
          }
          .button {
            display: inline-block;
            padding: 10px 20px;
            margin: 0 10px;
            border-radius: 4px;
            text-decoration: none;
            font-weight: bold;
            font-size: 16px;
          }
          .approve-button {
            background-color:rgb(22, 98, 213);
            color: #000000;
            border: 1px solidrgb(92, 180, 80);
          }
          .deny-button {
            background-color: #dc3545;
            color: #ffffff;
            border: 1px solid #c82333;
          }
          .verification-code {
            font-size: 36px;
            font-weight: bold;
            text-align: center;
            margin: 20px 0;
          }
          .footer {
            background-color: #f8f8f8;
            padding: 20px;
            font-size: 12px;
            color: #666;
            text-align: center;
            border-top: 1px solid #e1e1e1;
          }
          .footer a {
            color: #0066c0;
            text-decoration: none;
          }
          @media screen and (max-width: 480px) {
            .button {
              display: block;
              margin: 10px 0;
            }
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <img src="https://storage.googleapis.com/msgsndr/3xGyNbyyifHaQaEVS0Sx/media/681b9786e17a082df127e5af.png" alt="Company Logo" class="logo">
          </div>
          
          <div class="content">
            <h1>New Dumpster Booking Request</h1>
            
            <p>A new customer has submitted a dumpster rental request. Please review the details below and respond accordingly.</p>
            
            <div class="booking-details">
              <ul>
                <li><strong>Name:</strong> ${name}</li>
                <li><strong>Email:</strong> ${email}</li>
                <li><strong>Phone:</strong> ${phone}</li>
                <li><strong>Dumpster Size:</strong> ${dumpster_size} Yard</li>
                <li><strong>Dropoff Date:</strong> ${service_date}</li>
                <li><strong>Address:</strong> ${address}</li>
              </ul>
            </div>
            
            <p>Please respond to this booking request:</p>
            
            <div class="button-container">
              <a href="${approveLink}" class="button approve-button">✅ Approve Request</a>
              <a href="${denyLink}" class="button deny-button">❌ Deny Request</a>
            </div>
            
            <p>This booking will be automatically assigned to the customer's account if approved.</p>
          </div>
          
          <div class="footer">
            <p>This message was sent from your Company Name Booking System.</p>
            <p>© ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
            <p>
              <a href="${process.env.BASE_URL}privacy-policy">Privacy Policy</a> | 
              <a href="${process.env.BASE_URL}terms">Terms of Service</a>
            </p>
          </div>
        </div>
      </body>
      </html>
    `,
  });

  res.status(200).json({ message: 'Booking submitted' });
}
