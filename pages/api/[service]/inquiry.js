// /pages/api/[service]/inquiry.js
// Catch-all for the service-page quote forms (/api/roofing/inquiry,
// /api/siding/inquiry, ...). It normalizes each form's own fields into the
// standard contact-form shape and hands off to the main handler so leads,
// opportunities, notifications and tracking all behave identically.
import contactFormHandler from '../submit-contact-form';
import { formatProjectDescription } from '../../../lib/ghl';

// Fields the main handler consumes directly — everything else becomes part of
// the project description so the qualifying answers aren't lost.
const CORE_FIELDS = new Set([
  'name', 'firstName', 'lastName', 'email', 'phone', 'address',
  'city', 'state', 'country', 'postalCode', 'zip', 'message', 'notes',
  'ga_client_id', 'ga_session_id', 'agreeToTerms',
]);

function labelFor(key) {
  return key
    .replace(/[_-]+/g, ' ')
    .replace(/([a-z])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, (c) => c.toUpperCase());
}

function serviceLabel(slug) {
  return labelFor(String(slug || 'general'));
}

export default async function handler(req, res) {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { service } = req.query;
  const body = req.body || {};

  const [firstName, ...rest] = String(body.name || body.firstName || '').trim().split(/\s+/);
  const lastName = body.lastName || rest.join(' ');

  const details = { Service: serviceLabel(service) };
  for (const [key, value] of Object.entries(body)) {
    if (!CORE_FIELDS.has(key)) details[labelFor(key)] = value;
  }

  req.body = {
    firstName: firstName || '',
    lastName: lastName || '',
    email: body.email || '',
    phone: body.phone || '',
    address: body.address || '',
    city: body.city || '',
    state: body.state || '',
    country: body.country || 'US',
    postalCode: body.postalCode || body.zip || '',
    notes: formatProjectDescription(body.message || body.notes, details),
    ga_client_id: body.ga_client_id,
    ga_session_id: body.ga_session_id,
  };

  return contactFormHandler(req, res);
}
