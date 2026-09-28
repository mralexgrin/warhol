'use strict';
/* ============================================================================
   FEEDS — the second kind of first-party read, and the first one that returns
   a creator's actual work. 10 August 2026.

   Until now the engine could tell you a Substack EXISTS. It pinged
   {handle}.substack.com, matched a signature, and stopped at the front door.
   This walks in and reads what is published there.

   ---------------------------------------------------------------------------
   WHY THIS IS THE CHEAPEST THING IN THE PROJECT
   ---------------------------------------------------------------------------
   No key, no credential, no quota, no partner agreement. Verified 10 Aug 2026,
   one request each, no spoofed user-agent:

       mkbhd.substack.com/feed        200
       medium.com/feed/@dhh           200, 55KB of full post text

   These are documented public endpoints that exist to be read by software.
   Reading one is the opposite of scraping: §11.3 rules out taking what a host
   has not offered, and an RSS feed is the offer.

   ---------------------------------------------------------------------------
   THE THREE THINGS A FEED BUYS, AND THE ONE IT MUST NEVER BUY
   ---------------------------------------------------------------------------
   1. CORROBORATION. score.js:194 refuses to count an uncorroborated hit as
      resolved — "there is a Substack at a name that looks like hers" is
      precisely the state confidence exists to express. The feed carries an
      author and a publication title. When those match, the hit is theirs and
      confidence rises on the line most likely to be wrong.

   2. SAMPLES. The report's whole defect was that it never showed the work.
      A feed hands over titles, dates and body text.

   3. CADENCE. Every post is stamped with a publish date, which is exactly the
      property youtube.js:285 names as the difference between cadence (legible
      in one visit) and trajectory (needs two looks). A creator with no YouTube
      is currently capped at 22 of 40 on Pressure because their posting rate is
      unreadable. For anyone who publishes a feed, that ceiling comes off.

   AND THE ONE IT MUST NOT BUY: ABSENCE.

   A feed that 404s does not mean there is no newsletter. It means there is no
   RSS at the URL we tried, and plenty of live publications do not expose one.
   The probe layer already decides absence across five or six places under
   rules written for it, and this file does not get a vote. `readFeed` returns
   no verification state and writes no observation carrying one.

   The one exception runs the other way and it is worth having: a feed that
   resolves to SOMEBODY ELSE turns a suspected hit into a miss. That is not
   this file inventing absence, it is this file removing a false presence —
   the mkbhd.substack.com failure, caught by reading the thing.

   ---------------------------------------------------------------------------
   NO PARSER DEPENDENCY, AND WHY THAT IS NOT MISPLACED THRIFT
   ---------------------------------------------------------------------------
   The engine has one dependency (@anthropic-ai/sdk) and adding a second to
   read four elements out of an XML document is a poor trade. We need title,
   link, date and body from <item> or <entry>. That is a hundred lines, it
   fails loudly, and it never becomes a supply-chain question.
   ========================================================================== */

const { get } = require('./http');
const yt = require('./youtube');

/* TWO CAPS, BECAUSE THE TWO COSTS ARE NOT THE SAME COST.

   Body text is the expensive part — it is what goes into memory, into the
   samples, and eventually into a classify call — so ten items of it is
   plenty for showing what someone writes.

   DATES ARE FREE, and capping them at ten broke cadence outright. Measured
   against Platformer on 10 Aug 2026: ten posts reach back 28 days, and the
   arithmetic needs the recent 90-day window plus a 60-day baseline behind it.
   Every frequent publisher — which is every publisher whose posting rate is
   worth reading — came back "not enough to compare against" for no reason but
   our own truncation. So the whole feed is dated and only the head of it is
   read. The document is already in hand and already capped at 600KB by
   http.js; parsing a date out of it costs nothing.

   MAX_DATED bounds the pathological case, a feed shipping its entire archive. */
const MAX_TEXTED = 10;
const MAX_DATED = 200;
const MAX_TEXT = 2000;

/* ===========================================================================
   WHERE A FEED LIVES

   Two shapes, and the difference matters. `fromHit` derives the feed from a
   publication the probe layer ALREADY FOUND — origin plus a known path. It is
   not a guess; the host is established and only the path is convention.

   `fromHandle` is a guess, and is marked as one, because medium.com/feed/@x
   answers for any x that exists whether or not it is our x. A guess that hits
   still has to survive the identity check below before it corroborates
   anything.
   =========================================================================== */

const PATHS = {
  substack: ['/feed'],
  beehiiv: ['/feed'],
  ghost: ['/rss/', '/feed/'],
  buttondown: ['/rss'],
  wordpress: ['/feed', '/feed/'],
  generic: ['/feed', '/rss', '/rss.xml', '/feed.xml', '/index.xml', '/atom.xml'],
};

function platformOf(host) {
  const h = String(host || '').toLowerCase();
  if (h.endsWith('substack.com')) return 'substack';
  if (h.endsWith('beehiiv.com')) return 'beehiiv';
  if (h.endsWith('ghost.io')) return 'ghost';
  if (h.endsWith('buttondown.com') || h.endsWith('buttondown.email')) return 'buttondown';
  if (h.endsWith('medium.com')) return 'medium';
  return 'generic';
}

/**
 * Candidate feed URLs for a publication we have already located.
 * `hitUrl` is the final URL the probe landed on, so its origin is real.
 */
function fromHit(hitUrl) {
  let u;
  try { u = new URL(hitUrl); } catch { return []; }
  const platform = platformOf(u.hostname);

  /* Medium is the one platform whose per-publication feed does not hang off
     the profile URL — a Medium hit is medium.com/@handle and its feed is
     medium.com/feed/@handle, a different path entirely. */
  if (platform === 'medium') {
    const m = u.pathname.match(/^\/(@[\w.%-]+)/);
    if (m) return [{ url: `https://medium.com/feed/${m[1]}`, platform: 'medium', kind: 'derived' }];
    return [];
  }

  /* Buttondown publishes at /handle, so the feed is /handle/rss — the path is
     part of the identity and dropping it would fetch the site's own feed. */
  if (platform === 'buttondown') {
    const base = u.pathname.replace(/\/+$/, '');
    return [{ url: `${u.origin}${base}/rss`, platform, kind: 'derived' }];
  }

  return (PATHS[platform] || PATHS.generic).map((p) => ({
    url: `${u.origin}${p}`, platform, kind: 'derived',
  }));
}

/** Feed URLs derivable from the handle alone. Guesses, and marked as such. */
function fromHandle(handle) {
  const h = String(handle || '').replace(/^@/, '');
  if (!h) return [];
  return [
    { url: `https://medium.com/feed/@${h}`, platform: 'medium', kind: 'guess' },
    { url: `https://${h}.substack.com/feed`, platform: 'substack', kind: 'guess' },
    { url: `https://${h}.beehiiv.com/feed`, platform: 'beehiiv', kind: 'guess' },
    { url: `https://buttondown.com/${h}/rss`, platform: 'buttondown', kind: 'guess' },
  ];
}

/* ===========================================================================
   THE PARSER
   =========================================================================== */

const ENTITIES = {
  amp: '&', lt: '<', gt: '>', quot: '"', apos: "'", nbsp: ' ', '#39': "'", '#x27': "'", '#160': ' ',
};

function decode(s) {
  return String(s || '').replace(/&(#x?[0-9a-f]+|[a-z]+);/gi, (m, e) => {
    const key = e.toLowerCase();
    if (ENTITIES[key] != null) return ENTITIES[key];
    if (key[0] === '#') {
      const code = key[1] === 'x' ? parseInt(key.slice(2), 16) : parseInt(key.slice(1), 10);
      return Number.isFinite(code) ? String.fromCodePoint(code) : m;
    }
    return m;
  });
}

/** Innermost text of the first <tag>, CDATA unwrapped. Namespaces tolerated. */
function tag(block, name) {
  const re = new RegExp(`<(?:[a-z0-9]+:)?${name}\\b[^>]*>([\\s\\S]*?)</(?:[a-z0-9]+:)?${name}>`, 'i');
  const m = block.match(re);
  if (!m) return '';
  return m[1].replace(/^\s*<!\[CDATA\[([\s\S]*?)\]\]>\s*$/, '$1').trim();
}

/** Atom puts the URL in an attribute; RSS puts it in the element. */
function linkOf(block) {
  const rss = tag(block, 'link');
  if (rss && /^https?:/i.test(rss)) return rss;
  const alt = block.match(/<link\b[^>]*rel=["']alternate["'][^>]*href=["']([^"']+)["']/i)
    || block.match(/<link\b[^>]*href=["']([^"']+)["']/i);
  return alt ? decode(alt[1]) : '';
}

/** Markup to readable text. Feeds ship full HTML bodies; a sample is prose. */
function plain(html, cap) {
  return decode(
    String(html || '')
      .replace(/<(script|style)[\s\S]*?<\/\1>/gi, ' ')
      .replace(/<\/(p|div|h[1-6]|li|br)>/gi, '\n')
      .replace(/<[^>]+>/g, ' ')
  ).replace(/[ \t ]+/g, ' ').replace(/\n{2,}/g, '\n').trim().slice(0, cap || MAX_TEXT);
}

function when(block) {
  const raw = tag(block, 'pubDate') || tag(block, 'published') || tag(block, 'date') || tag(block, 'updated');
  const t = Date.parse(raw);
  return Number.isFinite(t) ? new Date(t).toISOString() : null;
}

/**
 * Parse an RSS or Atom document. Returns null when it is neither — an HTML
 * error page served with a 200 is a thing hosts do, and it must not come back
 * looking like an empty publication.
 */
function parse(xml) {
  const doc = String(xml || '').replace(/<!--[\s\S]*?-->/g, '');
  if (!/<(rss|feed|rdf:RDF)\b/i.test(doc)) return null;

  const blocks = doc.match(/<(item|entry)\b[\s\S]*?<\/\1>/gi) || [];

  /* The channel's own title and author, read from the document HEAD rather
     than from an item — taking it from an item picks up a guest writer's
     byline and calls it the publication's owner. */
  const head = doc.slice(0, blocks.length ? doc.indexOf(blocks[0]) : doc.length);

  return {
    title: decode(tag(head, 'title')),
    description: plain(tag(head, 'description') || tag(head, 'subtitle'), 400),
    author: decode(tag(head, 'name') || tag(head, 'creator') || tag(head, 'managingEditor') || ''),
    items: blocks.slice(0, MAX_DATED).map((b, i) => ({
      title: decode(tag(b, 'title')),
      link: linkOf(b),
      at: when(b),
      author: decode(tag(b, 'creator') || tag(b, 'author') || tag(b, 'name') || ''),
      // Only the head carries prose. See the two-caps note above.
      text: i < MAX_TEXTED
        ? plain(tag(b, 'encoded') || tag(b, 'content') || tag(b, 'description') || tag(b, 'summary'))
        : '',
    })).filter((i) => i.title || i.link),
  };
}

/* ===========================================================================
   IS IT THEIRS?

   The same question resolve.js asks of a 200, asked of a document that has an
   author's name in it. Normalised hard on both sides — "MKBHD", "mkbhd" and
   "M.K.B.H.D." are one needle — and matched against the publication title,
   the feed author, and the per-item bylines.

   A feed with no author anywhere is UNDECIDED, not a mismatch. Plenty of
   publications ship no byline, and reading that as "somebody else's" would
   turn a silence into an accusation.
   =========================================================================== */
function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }

function whose(feed, needles) {
  const ns = (needles || []).map(norm).filter((n) => n.length >= 3);
  if (!ns.length) return { verdict: 'undecided', why: 'we have no name to match against' };

  const fields = [
    ['the publication title', feed.title],
    ['the feed author', feed.author],
    ...(feed.items || []).slice(0, 3).map((i) => ['a post byline', i.author]),
  ].filter(([, v]) => norm(v).length >= 3);

  if (!fields.length) return { verdict: 'undecided', why: 'the feed carries no name to match' };

  /* Containment both ways, but the REVERSE direction needs a longer field.
     Forward — "MKBHD Weekly" contains "mkbhd" — is the common case. Reverse
     covers a handle carrying a suffix the masthead drops, "marquesbrownlee
     official" against "Marques Brownlee". Left unbounded it also matches a
     needle against any short word inside it, so a feed titled "Brown" would
     read as theirs. Six characters is long enough that the collision has to be
     deliberate. */
  for (const [where, value] of fields) {
    const v = norm(value);
    if (ns.some((n) => v.includes(n) || (v.length >= 6 && n.includes(v)))) {
      return { verdict: 'theirs', why: `${where} reads "${String(value).trim().slice(0, 80)}"`, matched: where };
    }
  }

  /* Every name-bearing field disagreed. That is a real finding: something is
     published here and it belongs to someone else. */
  const shown = fields.map(([, v]) => String(v).trim()).filter(Boolean)[0];
  return {
    verdict: 'someone_else',
    why: `the feed is published by "${String(shown).slice(0, 80)}", which is not them`,
  };
}

/* ===========================================================================
   THE READ
   =========================================================================== */

/**
 * Fetch and parse one feed. Never throws. Always returns a record of what
 * happened, because a feed that would not answer is part of the check record.
 *
 * Carries NO verification_state. See the header.
 */
async function readFeed(candidate, cfg, needles) {
  const res = await get(candidate.url, cfg);
  const base = {
    url: candidate.url,
    platform: candidate.platform,
    kind: candidate.kind,
    status: res.status,
    final_url: res.final_url,
  };

  if (res.status !== 200 || !res.body) {
    return {
      ...base,
      ok: false,
      items: [],
      why: res.blocked ? "we're not permitted to read this feed"
        : res.status === 404 || res.status === 410 ? 'no feed at this address'
        : res.status ? `the feed answered ${res.status}`
        : `the feed did not answer — ${res.error || 'no response'}`,
    };
  }

  const feed = parse(res.body);
  if (!feed) {
    return { ...base, ok: false, items: [], why: 'the address answered 200 with something that is not a feed' };
  }

  /* Ownership is settled BEFORE the empty check, and the order is the whole
     point. Measured 10 Aug 2026: mkbhd.substack.com is a live Substack with
     nothing published in it, titled "Bharath" — the exact false hit
     resolve.js:282 was written about. Returning early on "no posts" would
     throw away the one fact that visit established, which is that the
     publication we guessed at belongs to somebody else. An empty feed still
     has a masthead. */
  const owner = whose(feed, needles);

  if (!feed.items.length) {
    return {
      ...base,
      ok: true,
      empty: true,
      feed,
      items: [],
      owner,
      why: `${feed.title ? `"${feed.title}" is live and has nothing published in it` : 'the feed is live and has nothing published in it'} — ${owner.why}`,
    };
  }

  return {
    ...base,
    ok: true,
    feed,
    items: feed.items,
    owner,
    why: `${feed.items.length} post${feed.items.length === 1 ? '' : 's'} read from ${feed.title || candidate.url} — ${owner.why}`,
  };
}

/**
 * Try candidates in order, stop at the first that parses. Feed paths are
 * conventions rather than standards, so a publication may answer on the second
 * or third — but once one answers there is nothing to gain from the rest, and
 * every extra request is someone else's server.
 */
async function firstFeed(candidates, cfg, needles) {
  const tried = [];
  for (const c of candidates) {
    const r = await readFeed(c, cfg, needles);
    tried.push(r);
    if (r.ok && r.items.length) return { found: r, tried };
  }
  return { found: null, tried };
}

/* ===========================================================================
   CADENCE FROM POSTS

   youtube.js already owns this arithmetic and it is not YouTube-specific: it
   takes dated things and compares a recent rate against a baseline. Posts are
   dated things. Reusing it means a writer's posting rate and a video
   creator's are computed by one function against one set of thresholds, so
   the Pressure points mean the same thing on both — two implementations would
   drift the day one window was tuned.

   `views` is null on every post, which cadence() already tolerates: it
   medians whatever numbers it is given and omits the views clause when there
   are none. RSS carries no engagement figure, and inventing one is the
   failure §5.3 exists to prevent.
   =========================================================================== */
function cadenceFrom(items, ycfg, nowMs) {
  const posts = (items || [])
    .filter((i) => i.at)
    .map((i) => ({ publishedAt: i.at, views: null }));

  if (!posts.length) {
    return { computable: false, why: 'nothing in the feed carried a publish date' };
  }

  /* ALWAYS truncated, and this is a statement about RSS rather than about us.

     A feed is a recent window by convention, not an archive: measured 10 Aug
     2026, Platformer ships 15 items and Stratechery 10, and neither is telling
     us the publication is three years old. cadence() has two sentences for a
     sample that will not reach back far enough, and they differ on exactly this
     — whether the shortfall is our sample or their whole history. For a video
     channel the engine holds a complete prefix of the uploads and can tell.
     For a feed it never can, so it must never claim the second.

     THE COST, STATED: with a 90-day recent window and a 60-day baseline behind
     it, cadence only computes for a publication whose feed reaches back about
     150 days. That is monthly publishers, not weekly ones. The 22-of-40
     Pressure ceiling lifts for some writers and not for most — and where it
     does not lift, the report says why rather than printing a zero. */
  return yt.cadence(posts, { truncated: true }, ycfg, nowMs, {
    noun: 'posts', verb: 'published', singular: 'post',
  });
}

module.exports = {
  fromHit, fromHandle, readFeed, firstFeed, parse, plain, whose, cadenceFrom,
  platformOf, MAX_TEXTED, MAX_DATED, MAX_TEXT,
};
