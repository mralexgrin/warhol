'use strict';
/* ============================================================================
   REDDIT — the second clean source of demand. 6 August 2026.

   The comment note in passes.js has said "TikTok is gated, Instagram is closed,
   Reddit is next" since the day it was written. This is next.

   WHY IT MATTERS MORE THAN IT LOOKS. Demand is 25 of the 60 Opportunity points
   and it is the only pillar that needs strangers rather than pages. Measured
   against the real cohort on 6 Aug, 14 of 20 creators had no readable comment
   section anywhere — no YouTube channel, and §11.3 rules out the other two — so
   Demand read a flat zero across the board and the top score on the whole board
   was 34 out of 100. Not because nobody wanted anything. Because we had nowhere
   to listen.

   Reddit is where people talk about a creator when the creator is not in the
   room. That makes it a BETTER demand source than a comment section, not merely
   another one: nothing there is moderated by the person being discussed.

   ---------------------------------------------------------------------------
   WHY THIS NEEDS A CREDENTIAL, WHICH IT DID NOT USED TO
   ---------------------------------------------------------------------------
   Reddit's keyless JSON — www.reddit.com/....json, old.reddit.com, api.reddit
   .com — was the obvious door and it is shut. Verified 6 Aug 2026: all three
   answer 403 with an HTML interstitial to any client, browser user-agent or
   not. Spoofing past it would be scraping, and §11.3 rules that out.

   The open door is the documented OAuth API. `client_credentials` is an
   app-only grant: no user logs in, no account is read, nothing is posted. It is
   free, and the politeness rule is 100 requests per minute, which we count and
   obey the way youtube.js obeys quota.

   Set REDDIT_CLIENT_ID and REDDIT_CLIENT_SECRET, from a "script" app at
   reddit.com/prefs/apps. Without both, this module reports itself unavailable
   and Study writes the honest zero-with-a-reason row — the §11.3 distinction
   between "we read 412 comments and none of them asked to buy" and "we could
   not read their comments" is preserved end to end, which is the entire reason
   `available()`/`reason()` exist rather than a silent empty array.

   ---------------------------------------------------------------------------
   THE TRAP, AND IT IS THE WORST ONE IN THE ENGINE
   ---------------------------------------------------------------------------
   A search for a handle returns posts that merely contain the word. "clemyntine"
   is distinctive; "backseatcoach" is two ordinary words; a handle like "gilby"
   will return strangers discussing an unrelated person, a dog, or a car part.
   Counting those as demand FOR THIS CREATOR would attribute one person's
   audience to another and put a fabricated quote on a report — precisely the
   failure §5.3 and keepOnlyRealQuotes exist to prevent, arriving through a door
   neither of them watches.

   So presence requires a NAME MATCH, the same rule the Apple Podcasts probe
   already uses, and it is enforced twice: the query is quoted for exactness,
   and every returned post is re-checked HERE against a word-boundary match on
   the handle before a single comment beneath it is read. A post that does not
   survive that check is dropped and counted in `rejected`, so a search that
   found forty posts and kept two says so rather than reporting forty.

   Short handles are refused outright. Below minHandleChars there is no such
   thing as a confident match, and a coin-flip attribution is worse than no
   reading at all — an unread creator scores neutral, a misread one scores
   someone else's demand.
   ========================================================================== */

const { appendCost } = require('./store');

const TOKEN_URL = 'https://www.reddit.com/api/v1/access_token';
const BASE = 'https://oauth.reddit.com';

// Reddit asks that the user-agent identify the app and a contact. An honest one
// is also what keeps this on the documented path rather than the scraped one.
const UA = 'warhol-scout/0.1 (monetization-gap research; app-only)';

let unavailableReason = null;
let token = null;          // { value, expiresAt }

/* TWO KINDS OF APP, AND ONLY ONE OF THEM HAS A SECRET.
   A "script" app gets a client id AND a secret, and authenticates with the
   standard `client_credentials` grant. An "installed" app gets a client id and
   NO secret — Reddit issues none on purpose, because an app shipped to a device
   cannot keep one — and authenticates with the `installed_client` grant using an
   empty password. Both are app-only: nobody logs in, no account is read.

   So a missing secret is not necessarily a missing credential, and refusing on
   its absence would send someone back to re-create an app that was already
   correct. Which grant to use is decided here, once, from what is actually set. */
function grantKind() {
  if (!process.env.REDDIT_CLIENT_ID) return null;
  return process.env.REDDIT_CLIENT_SECRET ? 'script' : 'installed';
}

function available() {
  if (grantKind()) return true;
  unavailableReason = process.env.REDDIT_CLIENT_SECRET
    ? 'REDDIT_CLIENT_SECRET is set but REDDIT_CLIENT_ID is not — the id is the one that cannot be inferred'
    : 'no REDDIT_CLIENT_ID in the environment';
  return false;
}

function reason() { return unavailableReason; }

/* ---------------------------------------------------------------------------
   THE TOKEN. Cached until a minute before it expires, because the grant is
   worth one request and a run makes hundreds.
   ------------------------------------------------------------------------- */
async function bearer(pass) {
  if (token && token.expiresAt > Date.now() + 60000) return { ok: true, value: token.value };
  if (!available()) return { ok: false, why: reason() };

  const kind = grantKind();

  // An installed app sends an EMPTY password — the colon still has to be there.
  // Dropping it produces a malformed header and a 401 that reads like a bad
  // credential rather than a bad request, which is a long afternoon.
  const basic = Buffer.from(
    `${process.env.REDDIT_CLIENT_ID}:${process.env.REDDIT_CLIENT_SECRET || ''}`,
  ).toString('base64');

  // device_id is required by the installed_client grant. DO_NOT_TRACK_THIS_DEVICE
  // is Reddit's own documented value for "do not build a profile of this client",
  // which is the correct answer for a research read and not merely the easy one.
  const grantBody = kind === 'script'
    ? 'grant_type=client_credentials'
    : 'grant_type=https%3A%2F%2Foauth.reddit.com%2Fgrants%2Finstalled_client&device_id=DO_NOT_TRACK_THIS_DEVICE';

  const started = Date.now();
  try {
    const res = await fetch(TOKEN_URL, {
      method: 'POST',
      headers: {
        authorization: `Basic ${basic}`,
        'content-type': 'application/x-www-form-urlencoded',
        'user-agent': UA,
      },
      body: grantBody,
      signal: AbortSignal.timeout(15000),
    });
    const text = await res.text();
    const ms = Date.now() - started;
    let body = {};
    try { body = JSON.parse(text); } catch { /* handled below */ }

    appendCost({
      kind: 'api', pass, host: 'reddit.com', resource: 'access_token',
      units: 1, status: res.status, bytes: text.length, ms,
      error: res.status === 200 ? undefined : (body.error || `HTTP ${res.status}`),
    });

    if (res.status !== 200 || !body.access_token) {
      // A rejected credential must never read as "this creator has no mentions".
      // The grant kind is named in the message because the commonest cause of a
      // 401 here is a mismatch — a script app with no secret set, or an installed
      // app being offered one — and the raw status says nothing about that.
      unavailableReason = `Reddit refused the credential (HTTP ${res.status}${body.error ? `, ${body.error}` : ''}) — `
        + (kind === 'script'
          ? 'tried the client_credentials grant because REDDIT_CLIENT_SECRET is set. If the app is an "installed" app, unset the secret'
          : 'tried the installed_client grant because no REDDIT_CLIENT_SECRET is set. If the app is a "script" app, set its secret');
      return { ok: false, why: unavailableReason };
    }

    token = {
      value: body.access_token,
      expiresAt: Date.now() + (Number(body.expires_in || 3600) * 1000),
    };
    return { ok: true, value: token.value };
  } catch (e) {
    appendCost({ kind: 'api', pass, host: 'reddit.com', resource: 'access_token', units: 1, status: 0, error: e.name, ms: Date.now() - started });
    unavailableReason = `${e.name}: ${e.message}`;
    return { ok: false, why: unavailableReason };
  }
}

async function call(path, params, pass) {
  const t = await bearer(pass);
  if (!t.ok) return { ok: false, why: t.why, data: null };

  const url = new URL(BASE + path);
  for (const [k, v] of Object.entries(params || {})) url.searchParams.set(k, v);

  const started = Date.now();
  try {
    const res = await fetch(url, {
      headers: { authorization: `Bearer ${t.value}`, 'user-agent': UA, accept: 'application/json' },
      signal: AbortSignal.timeout(20000),
    });
    const text = await res.text();
    const ms = Date.now() - started;
    let body = null;
    try { body = JSON.parse(text); } catch { /* handled below */ }

    appendCost({
      kind: 'api', pass, host: 'oauth.reddit.com', resource: path.split('?')[0],
      units: 1, status: res.status, bytes: text.length, ms,
      error: res.status === 200 ? undefined : `HTTP ${res.status}`,
    });

    if (res.status !== 200 || !body) {
      return { ok: false, status: res.status, why: `HTTP ${res.status}`, data: null };
    }
    return { ok: true, status: 200, data: body, ms };
  } catch (e) {
    appendCost({ kind: 'api', pass, host: 'oauth.reddit.com', resource: path.split('?')[0], units: 1, status: 0, error: e.name, ms: Date.now() - started });
    return { ok: false, status: 0, why: `${e.name}: ${e.message}`, data: null };
  }
}

/* ---------------------------------------------------------------------------
   IS THIS POST ACTUALLY ABOUT THEM?

   Word-boundary match on the handle, and on the handle split into words when
   it is a run-together phrase ("backseatcoach" -> "backseat coach"), because
   that is how a person writes it in a sentence. Punctuation and case are
   ignored; a substring match is NOT accepted — "gilby" inside "gilbyclarke" is
   a different person, and that is the whole failure this function prevents.
   ------------------------------------------------------------------------- */
function tokens(s) {
  return String(s || '').toLowerCase().split(/[^a-z0-9]+/).filter(Boolean);
}

function mentionsName(text, handle, aliases) {
  if (!text) return false;

  /* Both sides are stripped to letters and digits and run together, so that
     "backseatcoach" matches a person writing "backseat coach" and vice versa.
     That alone would be a substring test, which is the unsafe one — "gilby" is
     inside "gilbyclarke" and they are different people. So the position of a
     match is checked back against the ORIGINAL word boundaries: a hit counts
     only if it starts where some word started and ends where some word ended.
     Verified both directions in test.js. */
  const words = tokens(text);
  if (!words.length) return false;

  const hay = words.join('');
  const starts = new Set();
  const ends = new Set();
  let at = 0;
  for (const w of words) { starts.add(at); at += w.length; ends.add(at); }

  for (const name of [handle, ...(aliases || [])]) {
    const needle = tokens(name).join('');
    if (!needle) continue;
    let i = hay.indexOf(needle);
    while (i !== -1) {
      if (starts.has(i) && ends.has(i + needle.length)) return true;
      i = hay.indexOf(needle, i + 1);
    }
  }
  return false;
}

/**
 * Everything strangers said about one creator, in their own words.
 *
 * Returns the same shape yt.comments does — { ok, texts, videosRead, skipped }
 * plus what is specific to this source — so passes.js can merge the two without
 * either one becoming the special case.
 */
async function mentions(handle, cfg, pass, aliases) {
  const none = { ok: false, texts: [], threadsRead: 0, postsFound: 0, rejected: 0, skipped: [], sources: [] };

  if (!available()) return { ...none, why: reason() };

  const clean = String(handle || '').replace(/^@/, '').trim();
  if (clean.length < cfg.minHandleChars) {
    return {
      ...none,
      why: `"${clean}" is too short to match on confidently — a ${clean.length}-character handle returns other people's conversations, and attributing those would be worse than reading nothing`,
    };
  }

  // Quoted, so Reddit does the exact-phrase work before we do it again locally.
  const search = await call('/search', {
    q: `"${clean}"`, limit: cfg.maxPosts, sort: 'relevance', t: cfg.window,
    type: 'link', include_over_18: 'false', raw_json: 1,
  }, pass);
  if (!search.ok) return { ...none, why: search.why };

  const posts = ((search.data.data || {}).children || []).map((c) => c.data).filter(Boolean);
  let rejected = 0;
  const kept = posts.filter((p) => {
    const ok = mentionsName(`${p.title || ''} ${p.selftext || ''}`, clean, aliases);
    if (!ok) rejected += 1;
    return ok;
  });

  const texts = [];
  const sources = [];
  const skipped = [];
  let threadsRead = 0;

  for (const p of kept.slice(0, cfg.maxThreads)) {
    const thread = await call(`/comments/${p.id}`, {
      limit: cfg.commentsPerThread, depth: 1, sort: 'top', raw_json: 1,
    }, pass);
    if (!thread.ok) { skipped.push({ id: p.id, why: thread.why }); continue; }

    threadsRead += 1;
    const listing = Array.isArray(thread.data) ? thread.data[1] : null;
    const children = ((listing || {}).data || {}).children || [];
    for (const c of children) {
      const d = c.data;
      if (!d || c.kind !== 't1') continue;                       // 'more' stubs are not comments
      if (d.author === '[deleted]' || !d.body || d.body === '[removed]') continue;
      const text = String(d.body).replace(/\s+/g, ' ').trim().slice(0, cfg.maxCommentChars);
      if (text) {
        texts.push(text);
        sources.push(`https://www.reddit.com${d.permalink || p.permalink || ''}`);
      }
    }
  }

  return {
    ok: true,
    texts,
    threadsRead,
    postsFound: posts.length,
    rejected,
    skipped,
    sources,
    subreddits: [...new Set(kept.map((p) => p.subreddit).filter(Boolean))],
  };
}

module.exports = { available, reason, mentions, mentionsName };
