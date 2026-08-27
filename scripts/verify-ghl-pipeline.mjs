#!/usr/bin/env node
// Verifies that the pipeline/stage ids the website writes to still exist in GHL.
// Run this after renaming or reordering stages — renames keep the id, but a
// deleted-and-recreated stage gets a new one and the env var goes stale.
//
//   node scripts/verify-ghl-pipeline.mjs
//
// Requires GHL_API_KEY and GHL_LOCATION_ID (reads .env.local / .env if present).
// Checks GHL_PIPELINE_ID plus the four stage ids the API routes use.
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

const { GHL_API_KEY, GHL_LOCATION_ID, GHL_PIPELINE_ID } = process.env;
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

// Where each stage id is used, so a failure points straight at the caller.
const STAGE_VARS = [
  ['GHL_NEW_LEAD_STAGE_ID', 'submit-contact-form.js — every website form lands here'],
  ['GHL_BOOKED_STAGE_ID', "update-opportunity.js — email 'book' button"],
  ['GHL_CLOSED_STAGE_ID', "update-opportunity.js — email 'close' button"],
  ['GHL_COMPLETED_STAGE_ID', "update-opportunity.js — email 'complete' button"],
];

const res = await fetch(`${BASE}/opportunities/pipelines?locationId=${GHL_LOCATION_ID}`, { headers });
if (!res.ok) {
  console.error(`Pipeline lookup failed (${res.status}):`, await res.text());
  console.error('\nIf this is a scope error, grant the token opportunities.readonly.');
  process.exit(1);
}

const { pipelines = [] } = await res.json();
console.log(`Pipelines on location ${GHL_LOCATION_ID}:\n`);
for (const pipeline of pipelines) {
  const marker = pipeline.id === GHL_PIPELINE_ID ? '<- GHL_PIPELINE_ID' : '';
  console.log(`  ${pipeline.name}  (${pipeline.id}) ${marker}`);
  for (const stage of pipeline.stages || []) {
    console.log(`      ${String(stage.position ?? '?').padStart(2)}. ${stage.name.padEnd(30)} ${stage.id}`);
  }
  console.log('');
}

const target = pipelines.find((p) => p.id === GHL_PIPELINE_ID);
let failed = false;

if (!GHL_PIPELINE_ID) {
  console.log('GHL_PIPELINE_ID is not set locally — skipping the stage checks.');
  process.exit(0);
}
if (!target) {
  console.error(`FAIL  GHL_PIPELINE_ID ${GHL_PIPELINE_ID} matches no pipeline on this location.`);
  process.exit(1);
}

console.log(`Checking stage ids against "${target.name}":\n`);
const stagesById = new Map((target.stages || []).map((s) => [s.id, s]));
const elsewhere = new Map(
  pipelines.flatMap((p) => (p.stages || []).map((s) => [s.id, { stage: s, pipeline: p }]))
);

for (const [name, usage] of STAGE_VARS) {
  const id = process.env[name];
  if (!id) {
    console.log(`SKIP  ${name} not set locally (${usage})`);
    continue;
  }
  const stage = stagesById.get(id);
  if (stage) {
    console.log(`OK    ${name} -> "${stage.name}"`);
    continue;
  }
  failed = true;
  const other = elsewhere.get(id);
  console.error(
    other
      ? `FAIL  ${name} -> "${other.stage.name}" lives in pipeline "${other.pipeline.name}", not "${target.name}" — ${usage}`
      : `FAIL  ${name} (${id}) matches no stage on this location — ${usage}`
  );
}

process.exit(failed ? 1 : 0);
