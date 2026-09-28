#!/usr/bin/env node
/* ============================================================================
   MERGE SEEDS — several single-brief exports into one file the prototype loads.

   `warhol export --brief X` writes warhol-seed.X.js, and every one of those
   files sets window.WARHOL. Load three in a page and the third silently wins:
   you get one brief tab and no error anywhere. That is the whole reason this
   exists.

   HOW IT READS THEM. Each seed is a classic script wrapped in an IIFE, so the
   only honest way to get its data is to run it. We evaluate each file against a
   stub `window`, take the object it produced, and merge the real structures —
   never text. A regex over a 5,000-line generated file would break the first
   time the generator's formatting changed, and it would break quietly.

   WHAT MERGING ACTUALLY MEANS HERE:
     mandates    concatenated. Slugs are unique, so ids are.
     candidates  concatenated. A creator checked under two briefs is TWO rows —
                 different brief, different Fit verdict, different score. They
                 are not the same record and must not be deduped.
     drops       date -> mandateId -> [candidateId]. Merged per date, and the
                 mandate key keeps them from colliding.
     byId        rebuilt from the merged candidates, never merged. It is a
                 derived index and merging derived state is how they drift.

   TITLES. PRD: the slug is not a display name, and export-seed.js sends the
   slug to the screen. `--title slug=Text` writes a real one. Without it the
   mandate keeps whatever name it had, so this is additive, not a rename.

   Usage:
     node bin/merge-seeds.js OUT.js SEED1.js SEED2.js [...] \
       --title nfl-give-own-analysis="NFL analysis"
   ========================================================================== */

'use strict';

const fs = require('fs');
const path = require('path');
const vm = require('vm');

/* ---- args ---------------------------------------------------------------- */

const argv = process.argv.slice(2);
const titles = {};
const files = [];

for (let i = 0; i < argv.length; i += 1) {
  const a = argv[i];
  if (a === '--title') {
    const pair = argv[i + 1] || '';
    i += 1;
    const eq = pair.indexOf('=');
    if (eq === -1) fail(`--title wants slug=Text, got "${pair}"`);
    titles[pair.slice(0, eq)] = pair.slice(eq + 1);
  } else if (a.startsWith('--title=')) {
    const pair = a.slice('--title='.length);
    const eq = pair.indexOf('=');
    if (eq === -1) fail(`--title wants slug=Text, got "${pair}"`);
    titles[pair.slice(0, eq)] = pair.slice(eq + 1);
  } else {
    files.push(a);
  }
}

if (files.length < 2) {
  fail('usage: merge-seeds.js OUT.js SEED1.js SEED2.js [...] [--title slug="Text"]');
}

const outPath = files.shift();

/* ---- read each seed by running it ---------------------------------------- */

/* The seeds are browser scripts. They touch nothing but `window`, so a bare
   object is a sufficient host — if a future seed reaches for `document` this
   throws loudly here rather than producing half a cohort. */
function loadSeed(file) {
  const src = fs.readFileSync(file, 'utf8');
  const sandbox = { window: {} };
  vm.createContext(sandbox);
  try {
    new vm.Script(src, { filename: file }).runInContext(sandbox);
  } catch (e) {
    fail(`${path.basename(file)} would not run: ${e.message}`);
  }
  const w = sandbox.window.WARHOL;
  if (!w) fail(`${path.basename(file)} ran but set no window.WARHOL`);
  if (!Array.isArray(w.mandates) || !w.mandates.length) {
    fail(`${path.basename(file)} has no mandates`);
  }
  return w;
}

const seeds = files.map((f) => ({ file: f, data: loadSeed(f) }));

/* ---- merge --------------------------------------------------------------- */

const merged = {
  meta: null,
  scouts: null,
  mandates: [],
  candidates: [],
  drops: {},
  timeline: [],
  passReasons: null,
  /* app.js:123 does `id === W.runANameResult.id` with no guard, so writing null
     here throws on the first click after sign-in and the app never leaves the
     door. Run-a-name is one creator, not a per-brief fact, so the first seed
     that has one wins. */
  runANameResult: null,
};

const seenMandate = new Set();
const seenCandidate = new Set();

for (const { file, data } of seeds) {
  /* meta, scouts and passReasons are identical boilerplate in every export.
     First one wins; they are not per-brief facts. */
  if (!merged.meta) merged.meta = data.meta;
  if (!merged.scouts) merged.scouts = data.scouts;
  if (!merged.passReasons) merged.passReasons = data.passReasons;
  if (!merged.runANameResult && data.runANameResult) merged.runANameResult = data.runANameResult;

  for (const m of data.mandates) {
    if (seenMandate.has(m.id)) {
      fail(`two seeds both define mandate ${m.id} — ${path.basename(file)} is a duplicate`);
    }
    seenMandate.add(m.id);
    /* The slug is the engine's id for the brief and stays the id. `title` is
       new and is what a screen is allowed to print. */
    const slug = m.name;
    merged.mandates.push(Object.assign({}, m, {
      slug: slug,
      title: titles[slug] || m.title || m.name,
    }));
  }

  for (const c of data.candidates) {
    if (seenCandidate.has(c.id)) {
      fail(`candidate id ${c.id} appears in two seeds — ids must be brief-scoped`);
    }
    seenCandidate.add(c.id);
    merged.candidates.push(c);
  }

  for (const date of Object.keys(data.drops || {})) {
    merged.drops[date] = Object.assign({}, merged.drops[date], data.drops[date]);
  }

  if (Array.isArray(data.timeline)) merged.timeline = merged.timeline.concat(data.timeline);
}

/* ---- report before writing ----------------------------------------------- */

/* `drops` is the POOL considered on a date, NOT the cleared set — export-seed.js
   says so and the prototype's dropFor() applies threshold, confidence, Fit and
   Trajectory at render time. A first version of this line called that number
   "in the drop" and printed 20 where the answer is 1. A merge tool that
   miscounts the thing being merged is worse than one that prints nothing. */
const lines = [];
for (const m of merged.mandates) {
  const pooled = Object.keys(merged.drops).reduce((n, d) => n + ((merged.drops[d][m.id] || []).length), 0);
  const checked = merged.candidates.filter((c) => c.mandateId === m.id).length;
  lines.push(`  ${pad(m.title, 26)} ${pad(m.slug, 36)} ${String(checked).padStart(3)} checked · ${pooled} in the day's pool (gates run at render)`);
}

/* ---- write ---------------------------------------------------------------- */

const out = `/* ============================================================================
   WARHOL SCOUT — MERGED SEED
   ----------------------------------------------------------------------------
   Written by \`node bin/merge-seeds.js\` from ${seeds.length} single-brief exports:
${seeds.map((s) => `     ${path.basename(s.file)}`).join('\n')}

   Do not edit by hand; re-run the command. Sets window.WARHOL.

   Each source export sets window.WARHOL on its own, so loading them as three
   script tags gives you the LAST one and no error. This file is the reason the
   prototype can show more than one brief at a time.

   Every mandate here carries BOTH \`slug\` (the engine's id — urls, filenames,
   the CLI) and \`title\` (the only one a screen may print). They are different
   fields on purpose: the slug is hyphenated machine text and it was reaching
   the tab bar.
   ========================================================================== */
(function () {
  'use strict';

  var DATA = ${JSON.stringify({
    meta: merged.meta,
    scouts: merged.scouts,
    mandates: merged.mandates,
    candidates: merged.candidates,
    drops: merged.drops,
    timeline: merged.timeline,
    runANameResult: merged.runANameResult,
  }, null, 2)};

  var byId = {};
  DATA.candidates.forEach(function (c) { byId[c.id] = c; });

  window.WARHOL = {
    meta: DATA.meta,
    user: DATA.scouts[0],
    scouts: DATA.scouts,
    mandates: DATA.mandates,
    plays: [],
    passReasons: ${JSON.stringify(merged.passReasons, null, 4)},
    candidates: DATA.candidates,
    byId: byId,
    drops: DATA.drops,
    timeline: DATA.timeline,
    runANameResult: DATA.runANameResult,

    drop: function (asOf, mandateId) {
      var d = (DATA.drops[asOf] || {})[mandateId] || [];
      return d.map(function (id) { return byId[id]; }).filter(Boolean);
    },
    watchlist: function () { return DATA.candidates.filter(function (c) { return c.status === 'watched'; }); },
    byStatus: function (s) { return DATA.candidates.filter(function (c) { return c.status === s; }); },
    isBacktest: function () { return false; }
  };
})();
`;

fs.writeFileSync(outPath, out);

console.log(`\n  ${outPath}`);
console.log(`  ${merged.mandates.length} briefs · ${merged.candidates.length} creators\n`);
console.log(lines.join('\n'));
console.log('');

/* ---- helpers -------------------------------------------------------------- */

function pad(s, n) {
  s = String(s == null ? '' : s);
  return s.length >= n ? s.slice(0, n) : s + ' '.repeat(n - s.length);
}

function fail(msg) {
  console.error(`\n  ${msg}\n`);
  process.exit(1);
}
