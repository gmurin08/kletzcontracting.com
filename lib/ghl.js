// /lib/ghl.js
// Shared GoHighLevel (LeadConnector) helpers so every website form writes
// contact data — especially the free-text project notes — the same way.

const GHL_BASE = 'https://services.leadconnectorhq.com';
const GHL_VERSION = '2021-07-28';

// The field the office team actually reads on the contact record.
export const PROJECT_DESCRIPTION_KEY = 'contact.project_description';

// Legacy field this site has always written to. Kept so nothing that already
// reports off it breaks.
const NOTES_KEY = 'contact.notes';

const FIELD_CACHE_TTL_MS = 10 * 60 * 1000;
let fieldCache = null; // { at: number, byKey: Map<string, string> }
let inFlight = null;

export function ghlHeaders() {
  return {
    Authorization: `Bearer ${process.env.GHL_API_KEY}`,
    'Content-Type': 'application/json',
    Version: GHL_VERSION,
    Accept: 'application/json',
  };
}

// Normalizes "project_description" / "contact.project_description" to the same
// lookup key, since GHL is inconsistent about the prefix.
function normalizeKey(key) {
  return String(key || '').replace(/^contact\./, '').toLowerCase();
}

// Pulls the location's contact custom fields once and caches the key -> id map.
// Never throws: if the lookup fails we fall back to sending the field by key.
async function loadContactFieldIds() {
  const fresh = fieldCache && Date.now() - fieldCache.at < FIELD_CACHE_TTL_MS;
  if (fresh) return fieldCache.byKey;
  if (inFlight) return inFlight;

  inFlight = (async () => {
    const byKey = new Map();
    try {
      const res = await fetch(
        `${GHL_BASE}/locations/${process.env.GHL_LOCATION_ID}/customFields?model=contact`,
        { headers: ghlHeaders() }
      );
      if (!res.ok) {
        console.log('GHL custom field lookup failed:', res.status, await res.text());
      } else {
        const data = await res.json();
        for (const field of data.customFields || []) {
          if (field.fieldKey && field.id) byKey.set(normalizeKey(field.fieldKey), field.id);
        }
        fieldCache = { at: Date.now(), byKey };
      }
    } catch (err) {
      console.log('GHL custom field lookup error:', err.message);
    }
    inFlight = null;
    return byKey;
  })();

  return inFlight;
}

// Env var wins (lets us pin an id without an API round trip), then the live
// lookup, then nothing — in which case we send the field by key alone.
async function resolveFieldId(fieldKey, envValue) {
  if (envValue && envValue !== 'undefined') return envValue;
  const byKey = await loadContactFieldIds();
  return byKey.get(normalizeKey(fieldKey)) || null;
}

// Verified against the live location: GHL accepts field_value, fieldValue and
// value interchangeably, and falls back to `key` when `id` is missing.
function fieldEntry({ id, key, value }) {
  const entry = { field_value: value };
  if (id) entry.id = id;
  if (key) entry.key = normalizeKey(key);
  return entry;
}

/**
 * Turns a form's extra qualifying answers into one readable block of text,
 * e.g. "Roof Type: Metal\nService Date: ASAP\n\nMessage from customer...".
 */
export function formatProjectDescription(notes, details = {}) {
  const lines = Object.entries(details)
    .filter(([, value]) => value !== undefined && value !== null && String(value).trim() !== '')
    .map(([label, value]) => `${label}: ${String(value).trim()}`);

  const message = (notes || '').trim();
  if (message) lines.push(lines.length ? `\n${message}` : message);

  return lines.join('\n');
}

/**
 * Builds the customFields payload for a contact upsert. The same notes text
 * goes to contact.project_description (what the team reads) and to the legacy
 * notes field, so every form is consistent.
 */
export async function buildContactCustomFields(notes) {
  const value = (notes || '').trim();
  if (!value) return [];

  const [projectId, notesId] = await Promise.all([
    resolveFieldId(PROJECT_DESCRIPTION_KEY, process.env.GHL_PROJECT_DESCRIPTION_FIELD),
    resolveFieldId(NOTES_KEY, process.env.GHL_NOTES_FIELD),
  ]);

  const customFields = [
    fieldEntry({ id: projectId, key: PROJECT_DESCRIPTION_KEY, value }),
  ];

  // Only write the legacy field when we can actually address it.
  if (notesId) customFields.push(fieldEntry({ id: notesId, key: NOTES_KEY, value }));

  return customFields;
}

/** Exposed for the verification script. */
export async function listContactCustomFields() {
  fieldCache = null;
  const byKey = await loadContactFieldIds();
  return byKey;
}
