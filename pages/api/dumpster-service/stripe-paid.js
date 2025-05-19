import { buffer } from 'micro';
import Stripe from 'stripe';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

export const config = {
    api: {
      bodyParser: false,
    },
  };


  
  export default async function handler(req, res) {
    const sig = req.headers['stripe-signature'];
    const rawBody = await buffer(req);
  
    let event;
    try {
      event = stripe.webhooks.constructEvent(rawBody, sig, process.env.STRIPE_WEBHOOK_SECRET);
    } catch (err) {
      console.log(err.message)
      return res.status(400).send(`Webhook Error: ${err.message}`);
    }
  
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;
      const bookingId = session.metadata.booking_id;
  
      const { data: booking } = await supabase.from('bookings').update({ status: 'paid' }).eq('id', bookingId).select().single();
  
      const calendarLink = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=Dumpster+Dropoff&dates=${booking.service_date.replace(/-/g, '')}T090000Z/${booking.service_date.replace(/-/g, '')}T100000Z&details=Dumpster+delivery+at+${encodeURIComponent(booking.address)}`;
  
      await sendEmail(booking.email, 'Booking Confirmed ✅', `Thanks for your payment. We’ll see you on ${booking.service_date}. Add to calendar: <a href="${calendarLink}">Google Calendar</a>`);
  
      await sendEmail(process.env.CLIENT_EMAIL, 'Booking Paid ✅', `Customer ${booking.name} has paid for their booking on ${booking.service_date}. <a href="${calendarLink}">Add to calendar</a>`);
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
  
    res.status(200).json({ received: true });
  }