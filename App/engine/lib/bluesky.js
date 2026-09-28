'use strict';
/* ============================================================================
   BLUESKY — the first new enumerable source since YouTube. 12 August 2026.

   ---------------------------------------------------------------------------
   WHY THIS ONE ROUTES THROUGH http.js AND THE OTHER TWO API CLIENTS DO NOT
   ---------------------------------------------------------------------------
   youtube.js and reddit.js each bypass the robots layer, and both say why: a
   keyed, quota-metered API is governed by its quota, not by a file written for
   crawlers. Neither of those facts is true here. The AppView takes no key, no
   credential and no quota, and it publishes this at
   public.api.bsky.app/robots.txt — verified 12 Aug 2026:

       # Crawling the public parts of the API is allowed. HTTP 429 ("backoff")
       # status codes are used for rate-limiting.
       User-agent: *
       Allow: /

   That is a host granting access in writing, which is the exact thing §11.3
   asks us to look for. So every call below goes through `get()` and inherits
   the per-host delay, the body cap, the cost row and the robots check for
   free. No new politeness rules, because there is no new relationship.

   ---------------------------------------------------------------------------
   THE ABSENCE SIGNATURE, AND WHY IT IS A BODY MARKER RATHER THAN A STATUS
   ---------------------------------------------------------------------------
   Verified in both directions, 12 Aug 2026:

       actor=jay.bsky.team          200, {"did":"did:plc:oky5...
       actor=zzzznotarealhandle999  400, {"error":"InvalidRequest",
                                          "message":"Profile not found"}

   Two things follow, and getting either wrong costs a real creator.

   FIRST: a 400 is the good answer here. Everywhere else in this engine a 400
   is an error that resolves inconclusive, so `bluesky_profile` is the one
   place a 4xx is allowed to mean *not there*.

   SECOND, and this is the one that bites: 400 ALONE MUST NOT MEAN ABSENT.
   The same status comes back for a malformed actor — and a bare handle IS
   malformed, since the AppView wants a DID or a full handle. Treating status
   alone as the signature would mark every creator absent from Bluesky the
   moment someone guessed `@alice` instead of `alice.bsky.social`. So the
   probe entry keys absence on the MESSAGE, and anything else at 400 falls
   through to inconclusive, which is what "we asked the question wrong" is.

   ---------------------------------------------------------------------------
   THEIR DOMAIN FIRST, AND {handle}.bsky.social BARELY AT ALL
   ---------------------------------------------------------------------------
   This order was written the other way round and live data reversed it on
   12 Aug 2026. Measured, both handles for two creators:

       mkbhd.bsky.social      62 followers, 0 posts, no display name
       mkbhd.com              189,304 followers, 169 posts, "Marques Brownlee"

       pfrazee.bsky.social    247 followers, "Bot Testing - NOT pfrazee.com"
       pfrazee.com            309,552 followers, "Paul Frazee"

   THE PLATFORM DEFAULT IS THE WORSE GUESS, AND IT IS WORSE IN THE DIRECTION
   THAT COSTS MOST. A notable creator predictably moves to their own domain,
   which leaves {handle}.bsky.social to whoever asked for it next. Taking the
   first handle that resolves would have put a squatter's empty profile on
   Marques Brownlee's report and left his real account unread — the
   mkbhd.substack.com failure, on a different platform, in the same shape.

   So: their own domain is tried FIRST and wins outright, because site.js has
   already applied the test that earns it — the domain carries their name AND
   they published it, which is the pair that turns a link into a possession.

   {handle}.bsky.social is a bare name guess in a namespace where squatting is
   normal, so a hit there is never confirmation on its own. It must link back
   to a surface already confirmed as theirs, exactly as a guessed Substack
   must. Note that a DISPLAY-NAME MATCH WOULD NOT DO: "Bot Testing - NOT
   pfrazee.com" contains "pfrazee", and a containment test would have called it
   his. An uncorroborated hit is reported as a profile we could not tie to
   them, never as theirs, and never joins their audience total.

   ---------------------------------------------------------------------------
   WHAT IT BUYS, AND THE ONE THING IT DOES NOT
   ---------------------------------------------------------------------------
   getAuthorFeed is enumerable and paginated, so unlike RSS — which ships 10 to
   15 items by convention and is why feed cadence only computes for monthly
   publishers — this can reach back past the baseline window. When the cursor
   runs out we hold a COMPLETE prefix of their posts, which is the condition
   youtube.js:330 attaches to the sentence "their whole account is N days old".
   When we stop at the page cap instead, we do not hold one, and `truncated`
   says so. The two produce different sentences on the report and only one of
   them is true at a time.

   Posts carry likeCount, repostCount and replyCount. TikTok oEmbed carries no
   engagement figure at all, so a Bluesky sample is the second kind that may
   honestly print a number.

   AND WHAT IT DOES NOT BUY: the stranger conversation. app.bsky.feed
   .searchPosts answers 403 on the public AppView — verified 12 Aug 2026, it
   needs a session. So Bluesky demand is replies under their own posts, which
   is a comment section: the person being discussed is in the room and can
   moderate it. Reddit remains the only unmoderated demand source in the
   engine, and nothing here may be described as replacing it.
   ========================================================================== */

const { get } = require('./http');
const { findBacklink } = require('./resolve');
const yt = require('./youtube');

const APPVIEW = 'https://public.api.bsky.app/xrpc';

/* The exact message that means "this handle belongs to nobody". Any other 400
   is a question we asked wrong — see the header. */
const NOT_FOUND = 'Profile not found';

/* An account that has opted out of logged-out viewing carries this label. The
   AppView still answers getProfile, so presence is unaffected; what goes
   missing is the feed. UNVERIFIED against a live opted-out account as of
   12 Aug 2026 — the handling below is written so that being wrong about it
   costs a sample rather than a false absence, which is the safe direction. */
const NO_UNAUTHENTICATED = '!no-unauthenticated';

function url(method, params) {
  const q = new URLSearchParams(params).toString();
  return `${APPVIEW}/${method}?${q}`;
}

/* JSON, or a reason it is not JSON. A body truncated by maxBodyBytes parses as
   a syntax error, and that is a read we did not finish rather than a document
   that was malformed — so the two are named differently. */
function body(res) {
  if (!res.body) return { ok: false, why: 'the response carried no body' };
  try {
    return { ok: true, json: JSON.parse(res.body) };
  } catch {
    return {
      ok: false,
      why: res.bytes > res.body.length
        ? `the response was ${res.bytes.toLocaleString()} bytes and the read cap cut it short`
        : 'the response was not the JSON this endpoint documents',
    };
  }
}

/**
 * The candidate handles, in the order they should be tried.
 *
 * A BARE HANDLE IS NEVER ONE OF THEM. `alice` is not a Bluesky handle and the
 * AppView says so with the same 400 a dead account gets. Including it would
 * spend a request to learn nothing and hand the probe layer an answer that
 * looks like absence.
 */
/* WHY A DOMAIN HANDLE IS EVIDENCE AND A .bsky.social HANDLE IS NOT.

   Bluesky binds a domain handle with a DNS TXT record at _atproto.<domain>
   holding the account's DID. Verified 12 Aug 2026:

       _atproto.404media.co   "did=did:plc:vcepp6trx4vpe5ourxso4tjl"
       _atproto.mkbhd.com     "did=did:plc:ys5aypbbeqmwn42edy5t3sho"

   and both match the DID the AppView returns for that handle. Only whoever
   controls DNS for the domain can put that record there, so a domain handle
   that RESOLVES is proof of domain control. A .bsky.social handle is proof of
   having typed a name in first.

   That is what makes {handle}.com worth constructing here even though site.js
   never saw it published. site.js requires publication because it takes
   domains out of LINKS, and the link-in-bio slot is where sponsors live —
   Veritasium's bio link was an Anker campaign URL. There is no sponsor vector
   in a domain built from the creator's own handle; the risk here is a
   different one, and minHandleChars is the guard for it. */
function candidates(handle, domain, bcfg) {
  const h = String(handle || '').replace(/^@/, '').toLowerCase();
  const min = (bcfg && bcfg.minHandleChars) || 6;
  const out = [];
  const seen = new Set();
  const add = (actor, kind, earned) => {
    if (!actor || seen.has(actor)) return;
    seen.add(actor);
    out.push({ actor, kind, earned });
  };

  // What site.js found and vouched for: it carries their name AND they publish it.
  add(domain, 'their own domain', true);

  /* Constructed from their handle. Earned by the DNS binding above, and only
     for a handle long enough that the domain is unlikely to be somebody
     else's — the same refusal reddit.js makes for the same reason, and for a
     worse consequence: a three-letter handle would hand us a large company's
     Bluesky account and print its follower count as this creator's. */
  if (h.length >= min) {
    add(`${h}.com`, 'their name as a domain', true);
    add(`${h}.co`, 'their name as a domain', true);
  }

  // A free, first-come name. It proves nothing on its own — see whose().
  add(`${h && `${h}.bsky.social`}`, 'the platform default', false);
  return out;
}

/**
 * Is this profile theirs? Only ever asked of the platform default — their own
 * domain arrives already earned by site.js.
 *
 * The test is a link back to a surface we have already confirmed is theirs.
 * It is deliberately the same test a guessed Substack faces, and deliberately
 * NOT a name comparison: the account calling itself "Bot Testing - NOT
 * pfrazee.com" would pass a name comparison and is the exact thing this is
 * here to catch.
 */
function normalizeName(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

function whose(prof, ctx) {
  const hay = `${prof.profile.bio || ''} ${prof.profile.handle || ''}`;
  const back = findBacklink(hay.toLowerCase(), ctx.surfaces || []);
  if (back) {
    return { verdict: 'theirs', corroboratedBy: `a link to their ${back.surface} in the profile`, why: `the profile links back to their ${back.surface}` };
  }

  /* THE NAME THEY GO BY SOMEWHERE ELSE, MATCHED WHOLE.

     Added 12 Aug 2026 after a second cohort showed the backlink test alone
     refusing real accounts: Taylor Lorenz (343,917 followers) and Casey Newton
     (297,698) are both genuinely at {handle}.bsky.social and neither links to a
     platform we confirmed, so both came back as somebody else.

     The comparison is against the display name on a surface ALREADY CONFIRMED
     as theirs — evidence from another platform, not from the handle we
     guessed with — and it is WHOLE-STRING, which is what separates this from
     the containment test the header rejects:

       "Taylor Lorenz"                vs "Taylor Lorenz"  -> equal, theirs
       "Bot Testing - NOT pfrazee.com" vs "Paul Frazee"   -> not equal, refused
       ""                              vs anything        -> refused

     Measured on the same day: every squatter found — mkbhd, theverge, techmeme,
     404media — carries an EMPTY display name, which this rejects on length
     before it compares anything. */
  const mine = normalizeName(prof.profile.displayName);
  if (mine.length >= 6) {
    const match = (ctx.surfaces || [])
      .filter((s) => s.confirmed && s.displayName)
      .find((s) => normalizeName(s.displayName) === mine);
    if (match) {
      return {
        verdict: 'theirs',
        corroboratedBy: `the name on their ${match.platform || match.id}`,
        why: `the profile goes by "${prof.profile.displayName}", the same name as their ${match.platform || match.id}`,
      };
    }
  }

  return {
    verdict: 'undecided',
    why: 'the handle is their name and nothing on the profile ties it to them — in a namespace where the name is first-come, that is not enough to call it theirs',
  };
}

/* ---------------------------------------------------------------------------
   THE PROFILE
   ------------------------------------------------------------------------- */

/**
 * One getProfile call. Never throws.
 *
 * @returns {{ok, exists, actor, status, profile?, why}}
 *   ok:false     we could not tell — a block, a timeout, a 400 we did not
 *                recognise. NEVER absence.
 *   exists:false the AppView said Profile not found. This is the only route to
 *                a negative, and it is deliberately narrow.
 */
async function profile(actor, cfg) {
  const res = await get(url('app.bsky.actor.getProfile', { actor }), cfg);

  if (res.blocked === 'robots') {
    return { ok: false, actor, status: res.status, why: "robots.txt asks us not to look here" };
  }
  if (res.status === 429) {
    return { ok: false, actor, status: 429, why: 'the AppView asked us to back off' };
  }
  if (res.status === 400 && (res.body || '').includes(NOT_FOUND)) {
    return { ok: true, exists: false, actor, status: 400, why: `there is nobody at ${actor}` };
  }
  if (res.status !== 200) {
    return {
      ok: false,
      actor,
      status: res.status,
      why: res.status ? `the AppView answered ${res.status}` : (res.error || 'no response'),
    };
  }

  const parsed = body(res);
  if (!parsed.ok) return { ok: false, actor, status: 200, why: parsed.why };

  const j = parsed.json;
  if (!j || !j.did) {
    return { ok: false, actor, status: 200, why: 'the AppView answered 200 without a DID, so we learned nothing' };
  }

  const labels = (j.labels || []).map((l) => l.val);
  return {
    ok: true,
    exists: true,
    actor,
    status: 200,
    url: `https://bsky.app/profile/${j.handle || actor}`,
    profile: {
      did: j.did,
      handle: j.handle || actor,
      displayName: j.displayName || null,
      bio: j.description || null,
      avatar: j.avatar || null,
      followers: j.followersCount == null ? null : j.followersCount,
      follows: j.followsCount == null ? null : j.followsCount,
      posts: j.postsCount == null ? null : j.postsCount,
      createdAt: j.createdAt || null,
      labels,
      hidden: labels.includes(NO_UNAUTHENTICATED),
    },
    why: `the AppView resolved ${j.handle || actor} to ${j.did}`,
  };
}

/**
 * Work down the candidates and return the one that is actually theirs.
 *
 * A HIT IS NOT AN ANSWER. The domain wins outright because site.js earned it.
 * The platform default has to corroborate, and when it cannot, it is returned
 * as `undecided` rather than as `found` — so the caller can say "there is a
 * profile at this name and we could not tie it to them", which is true, rather
 * than either of the two false things on offer.
 */
async function findProfile(handle, domain, cfg, ctx = {}) {
  const tried = [];
  let undecided = null;

  for (const c of candidates(handle, domain, ctx.bcfg)) {
    /* The identity probe already fetched {handle}.bsky.social and its answer
       is passed in here. Asking the same endpoint twice for the same profile
       is a request against someone else's server that buys nothing. */
    const r = (ctx.known && ctx.known[c.actor]) || await profile(c.actor, cfg);
    const row = { ...r, kind: c.kind };

    if (r.ok && r.exists) {
      const owner = c.earned
        ? { verdict: 'theirs', corroboratedBy: 'their own domain', why: `${c.actor} carries their name and they publish it, and it is their handle` }
        : whose(r, ctx);
      row.owner = owner;
      tried.push(row);
      if (owner.verdict === 'theirs') return { found: { ...r, owner }, tried };
      undecided = undecided || { ...r, owner };
      continue;                       // a name we could not claim is not a stop
    }

    tried.push(row);
    // A door that would not open is not permission to keep guessing.
    if (!r.ok) return { found: null, undecided, tried };
  }

  return { found: null, undecided, tried };
}

/* ---------------------------------------------------------------------------
   THE FEED
   ------------------------------------------------------------------------- */

/** at://did/app.bsky.feed.post/<rkey> → the address a person can open. */
function postUrl(uri, handle) {
  const m = String(uri || '').match(/\/app\.bsky\.feed\.post\/([a-z0-9]+)$/i);
  return m ? `https://bsky.app/profile/${handle}/post/${m[1]}` : null;
}

/**
 * Walk getAuthorFeed newest-first until the cursor runs out or the page cap
 * bites, whichever comes first.
 *
 * `complete` is the whole reason this is a walk rather than one call. It is
 * true only when the AppView ran out of posts to give us, which means we hold
 * every post the account has — and that is the precondition youtube.js puts on
 * the sentence "their whole account is N days old". Hitting the cap instead
 * means we hold a window, and a window may not make that claim.
 */
async function authorFeed(actor, cfg, bcfg, ycfg) {
  const posts = [];
  let cursor = null;
  let pages = 0;
  let complete = false;
  let reached = false;

  /* THE WALK STOPS WHEN THE SAMPLE IS DEEP ENOUGH, NOT WHEN THE CAP BITES.
     The arithmetic compares the last recentWindowDays against the baseline
     behind it, and it clamps that baseline to the oldest post we hold — so
     once we hold a post older than baselineWindowDays, every further page is a
     request that cannot change the answer. Measured 12 Aug 2026: this is the
     difference between 2 pages for a creator who posts weekly and 20 for
     404 Media, instead of 20 for both. */
  const reachDays = (ycfg && ycfg.baselineWindowDays) || 365;
  const now = Date.now();

  /* A page of 50 posts with embeds runs well past the default 600KB read cap,
     and a truncated body is a JSON syntax error rather than a short list — so
     the cap is raised here rather than discovered as a parse failure. */
  const httpCfg = { ...cfg, maxBodyBytes: Math.max(cfg.maxBodyBytes || 0, bcfg.maxBodyBytes) };

  while (pages < bcfg.maxFeedPages) {
    const params = { actor, limit: String(bcfg.postsPerPage), filter: 'posts_no_replies' };
    if (cursor) params.cursor = cursor;

    const res = await get(url('app.bsky.feed.getAuthorFeed', params), httpCfg);
    pages += 1;

    if (res.status === 429) return { ok: false, posts, pages, complete: false, why: 'the AppView asked us to back off partway through their posts' };
    if (res.status !== 200) {
      return {
        ok: false, posts, pages, complete: false,
        why: res.blocked ? "robots.txt asks us not to read their posts"
          : res.status ? `their posts answered ${res.status}`
          : (res.error || 'their posts did not answer'),
      };
    }

    const parsed = body(res);
    if (!parsed.ok) return { ok: false, posts, pages, complete: false, why: parsed.why };

    const feed = parsed.json.feed || [];
    for (const entry of feed) {
      const p = entry.post;
      if (!p || !p.record) continue;
      /* Reposts arrive in this feed carrying somebody else's post, marked by
         `reason`. They are recorded so the walk is a truthful account of what
         the page returned, and excluded from everything downstream by
         ownPosts(): a repost is not their work, so it may neither appear as a
         sample nor count toward a posting rate. Showing one as theirs is the
         harvest.js identity failure arriving through a different door. */
      posts.push({
        uri: p.uri,
        did: p.author && p.author.did,
        handle: (p.author && p.author.handle) || actor,
        text: String(p.record.text || '').replace(/\s+/g, ' ').trim(),
        at: p.record.createdAt || p.indexedAt || null,
        likes: p.likeCount == null ? null : p.likeCount,
        reposts: p.repostCount == null ? null : p.repostCount,
        replies: p.replyCount == null ? null : p.replyCount,
        repost: !!entry.reason,
      });
    }

    cursor = parsed.json.cursor || null;
    if (!cursor || !feed.length) { complete = true; break; }

    /* MEASURED OVER THEIR OWN POSTS, WHICH IS THE THIRD TIME REPOSTS HAVE HAD
       TO BE EXCLUDED IN THIS FILE. A repost carries the ORIGINAL post's date,
       so one repost of a three-year-old thread makes the sample look like it
       reaches back three years. Caught live on 12 Aug 2026: the walk stopped
       at 7 pages believing it had a year of history, and the creator's own
       posts reached back 149 days — one day short of what the arithmetic
       needs, so cadence came back unreadable for an account posting daily. */
    const oldest = ownPosts(posts).reduce((d, p) => {
      const age = (now - Date.parse(p.at)) / 86400000;
      return Number.isFinite(age) && age > d ? age : d;
    }, 0);
    if (oldest >= reachDays) { reached = true; break; }
  }

  return {
    ok: true,
    posts,
    pages,
    complete,
    reached,
    why: posts.length
      ? `${posts.length} post${posts.length === 1 ? '' : 's'} read over ${pages} page${pages === 1 ? '' : 's'}${
        complete ? '' : reached ? ' — far enough back to read a rate, and stopped there'
          : ' — the page cap stopped the walk before their history ran out'}`
      : 'the account has published nothing we could read',
  };
}

/** Their own posts, reposts dropped. A repost is somebody else's work. */
function ownPosts(posts) { return (posts || []).filter((p) => !p.repost); }

/* ---------------------------------------------------------------------------
   CADENCE — the same arithmetic as everywhere else, deliberately.
   ------------------------------------------------------------------------- */

/**
 * `complete` is passed straight through as the inverse of `truncated`, so the
 * one sentence that claims to know a whole history is only ever printed when
 * we actually walked one. See feeds.js for the RSS side of the same rule.
 */
function cadence(feed, ycfg, nowMs) {
  const own = ownPosts(feed.posts);
  const dated = own.filter((p) => p.at);
  if (!dated.length) {
    /* Three different silences, and they are not the same sentence. An
       account that only reposts has published nothing of its own to measure —
       verified 12 Aug 2026 on a live account whose entire feed was reposts,
       where "nothing carried a date" would have been simply untrue. */
    const why = !feed.ok ? feed.why
      : !feed.posts.length ? 'they have published nothing we could read'
      : !own.length ? 'everything in their feed is a repost of somebody else, so there is nothing of their own to measure'
      : 'nothing they posted carried a date';
    return { computable: false, why };
  }
  return yt.cadence(
    dated.map((p) => ({ publishedAt: p.at, views: null })),
    { truncated: !feed.complete },
    ycfg,
    nowMs,
    { noun: 'posts', verb: 'posted', singular: 'post', whole: 'their whole account is' },
  );
}

/* ---------------------------------------------------------------------------
   SAMPLES
   ------------------------------------------------------------------------- */

/**
 * The most recent handful, in the one sample shape the report renders.
 *
 * A Bluesky post has no title — it is a body with no head — so the text does
 * double duty and is cut at a length that still reads as a sentence. The
 * engagement figure is real and comes from the response; nothing here is
 * inferred, which is the rule harvest.js states for the platforms that hand
 * over no number at all.
 */
function samples(feed, bcfg) {
  return ownPosts(feed.posts).slice(0, bcfg.maxSamples).map((p) => ({
    platform: 'Bluesky',
    kind: 'post',
    id: p.uri,
    title: p.text ? p.text.slice(0, bcfg.maxTitleChars) : null,
    url: postUrl(p.uri, p.handle),
    at: p.at,
    excerpt: p.text ? p.text.slice(0, bcfg.maxTextChars) : null,
    metric: p.likes,
    metricUnit: 'likes',
    /* Only ever set when there is no figure. A reason sitting beside a number
       reads as a caveat on the number, and there is no caveat — the AppView
       returned it. */
    metricWhy: p.likes == null ? 'this post carries no like count' : null,
    foundIn: 'the Bluesky AppView',
  }));
}

/* ---------------------------------------------------------------------------
   DEMAND — replies, and only replies.
   ------------------------------------------------------------------------- */

/**
 * Replies under their own recent posts.
 *
 * THE WORD FOR THIS IS "COMMENT SECTION", NOT "CONVERSATION". searchPosts is
 * 403 without a session, so there is no route here to what strangers say when
 * the creator is not in the room. Their own replies are dropped for the same
 * reason youtube.js drops the channel's own comments: demand means the
 * audience asking.
 */
async function replies(feed, did, cfg, bcfg) {
  const texts = [];
  const sources = [];
  let readFrom = 0;

  const targets = ownPosts(feed.posts)
    .filter((p) => (p.replies || 0) > 0)
    .slice(0, bcfg.replyPosts);

  if (!targets.length) {
    return { ok: true, texts, sources, readFrom, why: 'nothing they posted on Bluesky has a reply on it' };
  }

  for (const t of targets) {
    const res = await get(url('app.bsky.feed.getPostThread', { uri: t.uri, depth: '1' }), cfg);
    if (res.status !== 200) continue;
    const parsed = body(res);
    if (!parsed.ok) continue;

    const list = (parsed.json.thread && parsed.json.thread.replies) || [];
    let took = 0;
    for (const r of list) {
      const p = r.post;
      if (!p || !p.record) continue;
      if (p.author && p.author.did === did) continue;          // their own words are not demand
      const text = String(p.record.text || '').replace(/\s+/g, ' ').trim().slice(0, bcfg.maxReplyChars);
      if (!text) continue;
      texts.push(text);
      took += 1;
      if (texts.length >= bcfg.maxReplies) break;
    }
    if (took) {
      readFrom += 1;
      sources.push(postUrl(t.uri, t.handle));
    }
    if (texts.length >= bcfg.maxReplies) break;
  }

  return {
    ok: true,
    texts,
    sources,
    readFrom,
    why: texts.length
      ? `${texts.length} repl${texts.length === 1 ? 'y' : 'ies'} under ${readFrom} of their own Bluesky post${readFrom === 1 ? '' : 's'}. Their own replies are excluded — demand means the audience asking. Bluesky's post search needs a session, so this is their comment section and not what strangers say elsewhere`
      : 'no replies could be read under their Bluesky posts',
  };
}

module.exports = {
  APPVIEW, NOT_FOUND, NO_UNAUTHENTICATED,
  candidates, whose, profile, findProfile, authorFeed, ownPosts, cadence, samples, replies, postUrl,
};
