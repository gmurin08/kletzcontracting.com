// /pages/api/get-booking.js
import { createClient } from '@supabase/supabase-js';

const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_SERVICE_ROLE_KEY);

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { id } = req.query;

  if (!id) {
    return res.status(400).json({ error: 'Booking ID is required' });
  }

  try {
    const { data: booking, error } = await supabase
      .from('bookings')
      .select('*')
      .eq('id', id)
      .single();

    if (error || !booking) {
      return res.status(404).json({ error: 'Booking not found' });
    }

    // Return booking data (excluding sensitive info)
    const safeBooking = {
      id: booking.id,
      name: booking.name,
      email: booking.email,
      phone: booking.phone,
      dumpster_size: booking.dumpster_size,
      address: booking.address,
      service_date: booking.service_date,
      status: booking.status,
      payment_amount: booking.payment_amount,
      payment_date: booking.payment_date,
      qb_invoice_id: booking.qb_invoice_id
    };

    res.status(200).json(safeBooking);

  } catch (error) {
    console.error('Error fetching booking:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
}