#!/usr/bin/env node
// Verifies that website form notes land on contact.project_description in GHL.
//
//   node scripts/verify-ghl-fields.mjs            # list the contact custom fields
//   node scripts/verify-ghl-fields.mjs --send     # also upsert a test contact and read it back
//
// Requires GHL_API_KEY and GHL_LOCATION_ID (reads .env.local / .env if present).
import fs from 'node:fs';

for (const file of ['.env.local', '.env']) {
  if (!fs.existsSync(file)) continue;
  for (const line of fs.readFileSync(file, 'utf8').split('\n')) {
    const match = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)$/);
    if (match && !process.env[match[1]]) {
      process.env[match[1]] = match[2].trim().replace(/^["']|["']$/g, '');
    }
  }
}

const { GHL_API_KEY, GHL_LOCATION_ID } = process.env;
if (!GHL_API_KEY || !GHL_LOCATION_ID) {
  console.error('Missing GHL_API_KEY or GHL_LOCATION_ID.');
  process.exit(1);
}

const BASE = 'https://services.leadconnectorhq.com';
const headers = {
  Authorization: `Bearer ${GHL_API_KEY}`,
  'Content-Type': 'application/json',
  Version: '2021-07-28',
  Accept: 'application/json',
};

const fieldsRes = await fetch(`${BASE}/locations/${GHL_LOCATION_ID}/customFields?model=contact`, { headers });
if (!fieldsRes.ok) {
  console.error(`Custom field lookup failed (${fieldsRes.status}):`, await fieldsRes.text());
  console.error('\nIf this is a scope error, grant the token locations.readonly, or set');
  console.error('GHL_PROJECT_DESCRIPTION_FIELD to the field id from the GHL UI instead.');
  process.exit(1);
}

const { customFields = [] } = await fieldsRes.json();
console.log(`Contact custom fields on location ${GHL_LOCATION_ID}:\n`);
for (const field of customFields) {
  console.log(`  ${field.fieldKey.padEnd(40)} ${field.dataType.padEnd(12)} ${field.id}`);
}

const target = customFields.find((f) => /(^|\.)project_description$/i.test(f.fieldKey || ''));
if (!target) {
  console.error('\n contact.project_description NOT FOUND — create it in GHL first');
  console.error('  (Settings > Custom Fields > Add Field, type Multi Line Text).');
  process.exit(1);
}
console.log(`\n found contact.project_description -> id ${target.id} (${target.dataType})`);
if (!/TEXT/i.test(target.dataType)) {
  console.log('  warning: field is not a text type; long notes may be rejected.');
}

if (!process.argv.includes('--send')) {
  console.log('\nRe-run with --send to push a test submission and read it back.');
  process.exit(0);
}

const email = `ghl-field-test+${Date.now()}@kletzcontracting.com`;
const notes = 'TEST SUBMISSION — verifying project_description mapping.';
const entry = (extra) => ({ field_value: notes, ...extra });

const upsertRes = await fetch(`${BASE}/contacts/upsert`, {
  method: 'POST',
  headers,
  body: JSON.stringify({
    locationId: GHL_LOCATION_ID,
    name: 'Field Mapping Test',
    email,
    tags: ['website_lead', 'field_mapping_test'],
    source: 'verify-ghl-fields script',
    customFields: [entry({ id: target.id, key: 'project_description' })],
  }),
});

if (!upsertRes.ok) {
  console.error(`\nUpsert failed (${upsertRes.status}):`, await upsertRes.text());
  process.exit(1);
}

const { contact } = await upsertRes.json();
console.log(`\nUpserted test contact ${contact.id} (${email}).`);

const readRes = await fetch(`${BASE}/contacts/${contact.id}`, { headers });
const readBody = await readRes.json();
const stored = (readBody.contact?.customFields || []).find((f) => f.id === target.id);

if (stored && String(stored.value ?? stored.fieldValue ?? stored.field_value ?? '').includes('TEST SUBMISSION')) {
  console.log(' project_description stored correctly:', stored.value ?? stored.fieldValue ?? stored.field_value);
  console.log('\nDelete the test contact in GHL when you are done.');
} else {
  console.error(' project_description came back empty. Stored custom fields:');
  console.error(JSON.stringify(readBody.contact?.customFields, null, 2));
  process.exit(1);
}
