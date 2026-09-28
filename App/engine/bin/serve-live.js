#!/usr/bin/env node
'use strict';
/* ============================================================================
   SERVE LIVE — the prototype, and the engine underneath it. 7 Aug 2026.

   Until now the two halves of Warhol could only be shown separately: Scout in a
   browser reading a seed exported hours earlier, and the engine in a terminal
   actually going and looking. The seed made that gap invisible rather than
   closing it — real people, really checked, but SELECTED from a fixed cohort by
   keyword, so the match was theatre even though the data was not.

   This closes it. A brief written in Scout starts a real run: one model call
   proposes names, the real ladder checks every one of them over real HTTP, and
   the browser watches it happen.

   WHY ONE PROCESS AND ONE ORIGIN. The prototype is a file:// -safe pile of
   scripts with no build step and no fetch anywhere in it. Serving the static
   files and the API from the same server means no CORS, no proxy config, and
   nothing for a demo machine to get wrong at 9am.

   WHAT IT DOES NOT DO. It does not authenticate, rate-limit, or queue. It binds
   to localhost and it is a demo server; treating it as anything else is a
   mistake this comment is here to prevent.

     node bin/serve-live.js [port]              default 8140 — real, and it spends
     node bin/serve-live.js [port] --no-model   rehearsal — the seeded scan, free

   ========================================================================== */

const http = require('http');
const fs = require('fs');
const path = require('path');

const briefs = require('../lib/briefs');
const llm = require('../lib/llm');
const { runMany } = require('../lib/run');
const WEIGHTS = require('../config/weights.json');

const ROOT = path.resolve(__dirname, '..', '..');
const args = process.argv.slice(2);
const PORT = Number(args.filter((a) => !a.startsWith('--'))[0]) || 8140;

/* --no-model — REHEARSAL. Every live scan is a model call and a real ladder over
   nine people, and walking the demo through five times to check the wording is
   not a reason to buy that five times. This makes the server say what a server
   with no key says, so the prototype takes its seeded path and the whole run of
   the demo can be practised for nothing.

   It is a lie about the server and it is confined to one flag on one line,
   because the alternative — pulling the key out of the environment to rehearse,
   then remembering to put it back — is how a demo starts with no key. */
const NO_MODEL = args.includes('--no-model');
function modelReady() { return !NO_MODEL && llm.available(); }

const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2'
};

/* Same shape cmdCheck builds, minus the CLI flags. Robots are respected and the
   bot user-agent is sent, because a demo is not a reason to behave differently
   towards somebody else's server than the CLI does. */
function config() {
  // reddit/bluesky included for the reason spelled out in warhol.js configFrom:
  // a missing block does not disable a source, it runs it with every field undefined.
  return { http: WEIGHTS.http, llm: WEIGHTS.llm, youtube: WEIGHTS.youtube, reddit: WEIGHTS.reddit, bluesky: WEIGHTS.bluesky, run: WEIGHTS.run };
}

function cleanHandle(s) {
  return String(s || '').trim().replace(/^@/, '').replace(/\/+$/, '').toLowerCase();
}

/* Places checked, from the report the ladder just wrote. The same number
   export-seed.js puts in the seed as `surfacesChecked`, so a live row and a
   seeded row are counting the same thing. */
function placesIn(report) {
  return (report.inventory || []).reduce((n, i) => n + (i.placesLooked || 0), 0);
}

/* An avatar the browser can actually render, chosen the way export-seed.js
   chooses one: an unsigned URL outlives a signed one, so prefer it. */
function avatarIn(report) {
  const withPic = (report.surfaces || []).filter((s) => s.avatar && s.avatar.url);
  const unexpiring = withPic.filter((s) => !s.avatar.expires);
  const pick = (unexpiring[0] || withPic[0]);
  return pick ? pick.avatar.url : null;
}

/* ------------------------------------------------------------------- SSE */

function sse(res) {
  res.writeHead(200, {
    'Content-Type': 'text/event-stream; charset=utf-8',
    'Cache-Control': 'no-cache, no-transform',
    Connection: 'keep-alive',
    /* Without this a proxy or a dev tool can hold the whole stream and deliver
       it at the end, which turns a live scan into a slideshow that arrives
       after it is over. */
    'X-Accel-Buffering': 'no'
  });
  let open = true;
  res.on('close', () => { open = false; });
  return {
    get open() { return open; },
    send(event, data) {
      if (!open) return;
      res.write(`event: ${event}\ndata: ${JSON.stringify(data)}\n\n`);
    },
    end() { if (open) res.end(); }
  };
}

/* --------------------------------------------------------------- THE SCAN */
/*
   The order of events is the honest order of the work, and it is deliberately
   not smoothed out:

     status    'proposing'  — one model call is happening. It takes ~15s and
                              nothing can be shown during it, so it is announced
                              rather than hidden behind a spinner.
     proposed  every candidate at once, because ONE CALL PRODUCED THEM AT ONCE.
                              Revealing them one at a time would look better and
                              would be a small lie about how discovery works.
     checked   one per creator, as its ladder finishes. This is the part that is
                              genuinely serial-ish and genuinely live.
     done      the bill.

   Nothing here sends a score, a gate or a verdict, and that is not an oversight
   — the screen this feeds makes no judgement, and an endpoint that offers one
   is an invitation to start printing it.
*/
/* ---- ONE RUN PER BRIEF AT A TIME -----------------------------------------

   Every request here is a model call and a real ladder over up to twenty people,
   and the client asking for it is a browser. On 14 Aug a render loop in the
   prototype asked eighteen times in eight seconds and the engine did all
   eighteen: eighteen briefs written down, eighteen runs, four and a half dollars.
   The prototype bug is fixed. This is here because the next one will be
   different and the bill is not the browser's to decide.

   Keyed on the brief text, because that is what identifies the work. A second
   request for a brief already in flight is answered with the truth — it is
   already running — and costs nothing. */
const inFlight = new Map();

async function scan(req, res, url) {
  const text = String(url.searchParams.get('text') || '').trim();
  const asked = Number(url.searchParams.get('limit'));
  const limit = asked > 0 ? Math.min(asked, WEIGHTS.run.maxCandidates) : 12;

  const s = sse(res);
  if (!text) { s.send('failed', { why: 'no brief text' }); return s.end(); }

  if (inFlight.has(text)) {
    console.log(`  refused a second run of a brief already in flight (${inFlight.size} running)`);
    s.send('failed', { why: 'this brief is already running' });
    return s.end();
  }
  inFlight.set(text, Date.now());
  res.on('close', () => inFlight.delete(text));
  try {
    return await runScan(s, text, limit);
  } finally {
    inFlight.delete(text);
  }
}

async function runScan(s, text, limit) {

  if (!modelReady()) {
    s.send('failed', { why: NO_MODEL ? 'the model is switched off for this run (--no-model)' : `no model, so nobody can propose names — ${llm.reason()}` });
    return s.end();
  }

  const t0 = Date.now();
  let brief;
  try {
    brief = briefs.createBrief(text);
  } catch (e) {
    s.send('failed', { why: e.message }); return s.end();
  }

  s.send('status', { phase: 'proposing', slug: brief.slug,
    message: 'asking the model who might match' });

  let proposed;
  try {
    proposed = await llm.proposeCandidates(brief.text, limit, WEIGHTS.llm);
  } catch (e) {
    s.send('failed', { why: e.message }); return s.end();
  }
  if (!s.open) return;
  if (!proposed.ok) { s.send('failed', { why: proposed.why }); return s.end(); }

  const added = briefs.addCandidates(brief.slug, proposed.candidates.map((c) => ({
    creatorId: cleanHandle(c.handle), source: 'proposed', why: c.why
  })));

  s.send('proposed', {
    slug: brief.slug,
    /* `proposed: true` travels on every row from here to the screen. §11.1:
       nothing has checked that a handle belongs to the person the model meant,
       and no surface downstream is allowed to imply otherwise. */
    candidates: added.map((c) => ({ handle: '@' + c.creator_id, name: c.creator_id,
      why: c.why, proposed: true }))
  });

  const run = briefs.startRun(brief.slug);
  const candidates = added.map((c) => ({ creatorId: c.creator_id, source: c.source, why: c.why }));

  let done = 0;
  const results = await runMany(
    candidates,
    { brief: brief.text, briefSlug: brief.slug, runId: run.run_id },
    config(),
    (r) => {
      done += 1;
      if (!s.open) return;
      if (r.error) {
        /* A creator who throws does not take the scan down, and is not silently
           dropped either — the row says it could not be read. */
        s.send('checked', { handle: '@' + r.creatorId, name: r.creatorId,
          error: r.error, places: 0, audience: 0, proposed: true, done, total: candidates.length });
        return;
      }
      s.send('checked', {
        handle: '@' + r.creatorId,
        name: r.creatorId,
        audience: r.report.audience || 0,
        places: placesIn(r.report),
        avatar: avatarIn(r.report),
        proposed: true,
        done,
        total: candidates.length
      });
    }
  );

  const errors = results.filter((r) => r && r.error).length;
  briefs.finishRun(run, {
    creators: candidates.length,
    checked: results.length - errors,
    errors,
    ms: Date.now() - t0
  });

  s.send('done', { slug: brief.slug, checked: results.length - errors, errors,
    ms: Date.now() - t0 });
  s.end();
}

/* ------------------------------------------------------------------ STATIC */

function serveStatic(req, res, pathname) {
  let file = path.normalize(path.join(ROOT, decodeURIComponent(pathname)));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('403'); }
  try { if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch (e) { /* not a dir */ }
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('404 ' + pathname); }
  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  fs.createReadStream(file).pipe(res);
}

/* -------------------------------------------------------------------- WIRE */

http.createServer((req, res) => {
  const url = new URL(req.url, `http://localhost:${PORT}`);

  if (url.pathname === '/api/health') {
    res.writeHead(200, { 'Content-Type': TYPES['.json'] });
    /* The browser asks this before it commits to a live scan. `model` is the
       one that matters: without a key nobody can propose names, and the
       prototype needs to know that BEFORE a brief is written, not after. */
    return res.end(JSON.stringify({
      live: true,
      model: modelReady(),
      why: modelReady() ? null : (NO_MODEL ? '--no-model' : llm.reason()),
      maxCandidates: WEIGHTS.run.maxCandidates,
      concurrency: WEIGHTS.run.creatorConcurrency
    }));
  }

  if (url.pathname === '/api/scan') {
    scan(req, res, url).catch((e) => {
      try { res.write(`event: failed\ndata: ${JSON.stringify({ why: e.message })}\n\n`); res.end(); }
      catch (_) { /* the client already left */ }
    });
    return;
  }

  serveStatic(req, res, url.pathname);
}).listen(PORT, '127.0.0.1', () => {
  console.log(`\n  Warhol live — prototype and engine, one origin`);
  console.log(`  http://localhost:${PORT}/scout/`);
  console.log(`  model: ${modelReady() ? 'available' : (NO_MODEL ? 'OFF — --no-model, this is a rehearsal and costs nothing' : 'MISSING — ' + llm.reason())}`);
  console.log(`  a brief written in Scout starts a real run and spends real money\n`);
});
