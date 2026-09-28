'use strict';
/* ============================================================================
   THE FETCHER — the only thing in the engine allowed to learn a fact.

   Polite by construction: one GET per place, a real timeout, a per-host delay,
   a capped body, a truthful user agent, and robots.txt honoured. When robots
   says no, the check comes back "not found — we're not permitted to look here",
   which is an honest sentence a report can carry. PRD §11.3: no scraping.

   Every request is recorded whether it succeeded or not. A 403 that stops us
   learning something is as much a part of the check record as a 404 that tells
   us something.
   ========================================================================== */

const { appendCost } = require('./store');

const robotsCache = new Map();   // origin -> { rules, fetchedAt }
const hostFreeAt = new Map();    // host -> ms, the earliest another request may go out

function sleep(ms) { return new Promise((r) => setTimeout(r, ms)); }

/* ===========================================================================
   THE POLITENESS DELAY, RESERVED RATHER THAN CHECKED — Task 4, 6 Aug 2026.

   This used to read the last hit time, sleep the difference, then stamp the
   clock after waking up:

       const wait = lastHitAt.get(host) + delay - now;
       if (wait > 0) await sleep(wait);
       lastHitAt.set(host, Date.now());

   Which is a race, and it only stayed hidden because one creator's checks are
   spread across twenty different hosts. Run five creators at once and they all
   want substack.com: every one of them reads the same last-hit time, computes
   the same wait, sleeps, and then fires SIMULTANEOUSLY. The delay is obeyed by
   each request individually and by the host not at all.

   So the slot is reserved SYNCHRONOUSLY, before any await, and the reservation
   is what the next caller sees. Ten concurrent requests to one host now go out
   400ms apart in the order they asked. There is no window between deciding and
   recording, because there is nothing to decide — the clock is claimed.

   This is what makes "parallelise across creators, never against one host"
   true rather than intended, and it is why the drop can run twenty creators at
   once without hitting anyone harder than a single check does.
   =========================================================================== */
function reserveHostSlot(host, delayMs) {
  const now = Date.now();
  const earliest = Math.max(now, hostFreeAt.get(host) || 0);
  hostFreeAt.set(host, earliest + delayMs);
  return earliest - now;
}

function agent(cfg) {
  if (!cfg.identify) return cfg.userAgentBrowser;
  const contact = process.env.WARHOL_CONTACT;
  return contact
    ? `WarholScout/0.1 (+internal sourcing research; contact: ${contact})`
    : cfg.userAgentIdentified;
}

/** Minimal robots.txt: the `*` group plus our own token, longest match wins. */
function parseRobots(text, token) {
  const groups = [];
  let current = null;
  for (const raw of text.split('\n')) {
    const line = raw.split('#')[0].trim();
    if (!line) continue;
    const idx = line.indexOf(':');
    if (idx < 0) continue;
    const field = line.slice(0, idx).trim().toLowerCase();
    const value = line.slice(idx + 1).trim();

    if (field === 'user-agent') {
      if (!current || current.rules.length) { current = { agents: [], rules: [] }; groups.push(current); }
      current.agents.push(value.toLowerCase());
    } else if (current && (field === 'disallow' || field === 'allow')) {
      current.rules.push({ allow: field === 'allow', path: value });
    }
  }
  const mine = groups.filter((g) => g.agents.includes(token.toLowerCase()));
  const star = groups.filter((g) => g.agents.includes('*'));
  return (mine.length ? mine : star).flatMap((g) => g.rules);
}

function robotsAllows(rules, pathname) {
  let best = null;
  for (const r of rules) {
    if (r.path === '') continue;                       // empty Disallow allows everything
    if (!pathname.startsWith(r.path)) continue;
    if (!best || r.path.length > best.path.length) best = r;
  }
  return best ? best.allow : true;
}

async function loadRobots(origin, cfg) {
  if (robotsCache.has(origin)) return robotsCache.get(origin);
  let rules = [];
  try {
    const res = await fetch(`${origin}/robots.txt`, {
      headers: { 'user-agent': agent(cfg) },
      signal: AbortSignal.timeout(6000),
    });
    if (res.status === 200) rules = parseRobots(await res.text(), 'WarholScout');
  } catch { /* unreachable robots.txt means no stated rules */ }
  robotsCache.set(origin, rules);
  return rules;
}

/**
 * GET one URL. Never throws. Always returns a record of what happened.
 *
 * status 0 = the request did not complete (DNS failure, timeout, TLS error).
 * blocked  = robots.txt said no. Not an error; a reason we did not look.
 */
async function get(url, cfg) {
  const started = Date.now();
  let u;
  try { u = new URL(url); } catch {
    return { url, final_url: url, status: 0, ok: false, error: 'bad-url', ms: 0, body: '' };
  }

  if (cfg.respectRobots) {
    const rules = await loadRobots(u.origin, cfg);
    if (!robotsAllows(rules, u.pathname)) {
      appendCost({ kind: 'http', pass: cfg.pass, host: u.host, blocked: true, ms: 0 });
      return { url, final_url: url, status: 0, ok: false, blocked: 'robots', error: 'robots-disallow', ms: 0, body: '' };
    }
  }

  // Claimed before the await, not after it. See reserveHostSlot.
  const waited = reserveHostSlot(u.host, cfg.perHostDelayMs);
  if (waited > 0) await sleep(waited);

  try {
    const res = await fetch(url, {
      headers: { 'user-agent': agent(cfg), accept: 'text/html,application/json,*/*' },
      redirect: 'follow',
      signal: AbortSignal.timeout(cfg.timeoutMs),
    });
    const text = await res.text();
    const ms = Date.now() - started;
    // `waited` is carried separately from `ms` because §11.4 asks which of the
    // two is the binding constraint, and a single wall-time figure cannot say.
    appendCost({ kind: 'http', pass: cfg.pass, host: u.host, status: res.status, bytes: text.length, ms, waited });
    return {
      url,
      final_url: res.url || url,
      status: res.status,
      ok: res.ok,
      ms,
      body: text.slice(0, cfg.maxBodyBytes),
      bytes: text.length,
    };
  } catch (e) {
    const ms = Date.now() - started;
    appendCost({ kind: 'http', pass: cfg.pass, host: u.host, status: 0, error: e.name, ms, waited });
    return { url, final_url: url, status: 0, ok: false, error: `${e.name}: ${e.message}`, ms, body: '' };
  }
}

/**
 * Run gets with a concurrency cap. Order of results matches order of input.
 * Items may be a plain URL string, or { url, maxBodyBytes } when one place
 * needs a bigger read than the default (a YouTube channel page is ~2.6MB and
 * everything worth having sits past the usual cap).
 */
async function getAll(items, cfg) {
  const out = new Array(items.length);
  let next = 0;
  const workers = Array.from({ length: Math.min(cfg.concurrency, items.length) }, async () => {
    while (true) {
      const i = next++;
      if (i >= items.length) return;
      const it = items[i];
      out[i] = typeof it === 'string'
        ? await get(it, cfg)
        : await get(it.url, it.maxBodyBytes ? { ...cfg, maxBodyBytes: it.maxBodyBytes } : cfg);
    }
  });
  await Promise.all(workers);
  return out;
}

// reserveHostSlot is exported for the test suite alone. The property it
// asserts — the third concurrent caller waits 800ms, not the same 400 as the
// second — cannot be observed through get() without a real clock and a real
// network, and a flaky test of a politeness rule is worse than none.
module.exports = { get, getAll, reserveHostSlot };
