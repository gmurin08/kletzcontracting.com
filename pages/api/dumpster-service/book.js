import { createClient } from '@supabase/supabase-js';
import nodemailer from 'nodemailer';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).end();

  const { name, email, phone, dumpster_size, address, service_date} = req.body;

  const { data, error } = await supabase.from('bookings').insert([{ name, email, phone, dumpster_size, address, service_date}]).select().single();
  if (error) return res.status(500).json({ error: error.message });

  const approveLink = `${process.env.BASE_URL}/api/dumpster-service/booking-response?id=${data.id}&action=approve`;
  const denyLink = `${process.env.BASE_URL}/api/dumpster-service/booking-response?id=${data.id}&action=deny`;

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
      <p><strong>New Booking Request:</strong></p>
      <ul>
        <li>Name: ${name}</li>
        <li>Email: ${email}</li>
        <li>Phone: ${phone}</li>
        <li>Size: ${dumpster_size}</li>
        <li>Dropoff Date: ${service_date}</li>
        <li>Address: ${address}</li>
      </ul>
      <p>Respond below:</p>
      <p><a href="${approveLink}">✅ Approve</a> | <a href="${denyLink}">❌ Deny</a></p>
    `,
  });

  res.status(200).json({ message: 'Booking submitted' });
}
