export default async function handler(req, res) {

    if (req.query.token !== process.env.CRON_SECRET) {
  return res.status(401).json({ error: 'Unauthorized' });
}
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  try {
    const supabaseUrl = process.env.SUPABASE_URL;
    const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

    const response = await fetch(`${supabaseUrl}/rest/v1/bookings?select=id`, {
      headers: {
        apikey: serviceKey,
        Authorization: `Bearer ${serviceKey}`,
      },
    });

    const data = await response.json();
    res.status(200).json({ status: response.status, count: Array.isArray(data) ? data.length : 0 });
  } catch (error) {
    res.status(500).json({ error: 'Supabase ping failed', details: error.message });
  }
}
