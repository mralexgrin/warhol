'use strict';
/* ============================================================================
   HARVEST, THEN RESOLVE — samples from the two platforms that will not be
   enumerated. 10 August 2026.

   ---------------------------------------------------------------------------
   THE CONSTRAINT, BECAUSE EVERYTHING HERE IS SHAPED BY IT
   ---------------------------------------------------------------------------
   Sources come in two kinds, and confusing them is how this work goes wrong.

     ENUMERABLE     give it a handle, get a list of their work.
                    YouTube, Substack, Medium, podcasts.

     RESOLVABLE     give it a URL, get that one item. There is no free,
                    sanctioned way to list a creator's posts at all.
                    TikTok, X.

   TikTok's Research API is academic-gated and its Display API needs the
   creator to log in — that is a partner relationship, not a scan. X's listing
   endpoints are behind a paid tier. Verified 10 Aug 2026, no key, no
   credential:

       https://www.tiktok.com/oembed?url=<video>     200 — caption, author, thumbnail
       https://publish.x.com/oembed?url=<status>     200 — but see below

   So the question "can we sample TikTok and X" has an answer that is neither
   yes nor no: WE CAN SAMPLE WHAT THEY HAVE LINKED SOMEWHERE WE CAN ALREADY
   READ. Harvest the URLs out of text already in hand, then resolve each one.
   No new fetches for discovery, and no scraping (§11.3) — every document
   scanned here was fetched for another reason and is sitting in memory.

   ---------------------------------------------------------------------------
   X IS OUT, AND IT IS ROBOTS.TXT THAT SAYS SO — NOT THE STATUS CODE
   ---------------------------------------------------------------------------
   publish.x.com answers 200 with the full tweet text to anyone who asks. It
   also publishes, at publish.x.com/robots.txt, verified 10 Aug 2026:

       User-agent: *
       Disallow: /oembed

   That is X stating in machine-readable form that this endpoint is not to be
   fetched by software. §11.3 obeys robots.txt, and http.js enforces it before
   any request goes out — which is how this was caught at all: the resolver
   came back `robots-disallow` rather than with a tweet.

   A 200 is permission to READ. robots.txt is the host saying who may ask. When
   they disagree, the host's stated rule wins, and "the endpoint works" is not
   a counter-argument — it is the whole reason the rule needed writing.

   So X posts are harvested and never resolved. The harvest still earns its
   keep: a creator linking their own X posts is evidence they are on X, which
   is an inventory fact. It just cannot become a sample.
   ---------------------------------------------------------------------------

   COVERAGE IS OPPORTUNISTIC, AND THE REPORT MUST SAY SO. A creator who never
   cross-links yields nothing. That is a fact about what they published, not a
   fact about them, and the difference is the same one §11.3 spends a paragraph
   on: "we found no posts they had linked anywhere we can read" is not "they do
   not post."

   ---------------------------------------------------------------------------
   THE IDENTITY RULE, WHICH IS NOT OPTIONAL
   ---------------------------------------------------------------------------
   A TikTok link in a YouTube description is very often SOMEBODY ELSE'S — a
   collaborator, a duet, a credit, a stitch. Resolving it would attach another
   person's work to this creator's report under a heading that says "what their
   work looks like", which is worse than showing no work at all: an empty block
   is a silence, a wrong one is a false statement about two people.

   So a URL is harvested only when the handle INSIDE it matches the creator.
   Both platforms put the author in the path, which is what makes this
   checkable without a fetch.
   ========================================================================== */

const { get } = require('./http');

/* Author is capture group 1 in both. TikTok's handle allows dots and
   underscores; X's does not. The id is group 2 and is always digits. */
const PATTERNS = [
  {
    platform: 'TikTok',
    re: /https?:\/\/(?:www\.)?tiktok\.com\/@([\w.-]{1,30})\/video\/(\d{5,25})/gi,
    canonical: (a, id) => `https://www.tiktok.com/@${a}/video/${id}`,
  },
  {
    platform: 'X',
    re: /https?:\/\/(?:www\.)?(?:twitter|x)\.com\/(\w{1,15})\/status(?:es)?\/(\d{5,25})/gi,
    canonical: (a, id) => `https://x.com/${a}/status/${id}`,
  },
];

function norm(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]+/g, ''); }

/**
 * Is this post's author the creator we are checking?
 *
 * Deliberately stricter than the feed masthead check in feeds.js. There, a
 * near-match on a publication title is good evidence because we already know
 * the publication is at their handle. Here the URL could be anyone's, so the
 * author segment must match a needle outright or contain one whole.
 */
function isTheirs(author, needles) {
  const a = norm(author);
  if (a.length < 3) return false;
  return (needles || [])
    .map(norm)
    .filter((n) => n.length >= 3)
    .some((n) => a === n || a.includes(n) || (a.length >= 6 && n.includes(a)));
}

/**
 * Scan text for post URLs belonging to this creator.
 *
 * @param sources  [{ where, text }] — documents already fetched for other
 *                 reasons. `where` travels onto the sample so a reader can ask
 *                 how we came to have it.
 * @param needles  the creator's handle and display name.
 */
function harvest(sources, needles, cap = 40) {
  const out = [];
  const seen = new Set();
  let rejected = 0;

  for (const src of sources || []) {
    const text = String(src && src.text || '');
    if (!text) continue;

    for (const p of PATTERNS) {
      // A /g regex carries lastIndex between uses; a fresh one per document
      // keeps a long first source from making the second start halfway in.
      const re = new RegExp(p.re.source, p.re.flags);
      for (const m of text.matchAll(re)) {
        const [, author, id] = m;
        const url = p.canonical(author, id);
        if (seen.has(url)) continue;
        seen.add(url);

        if (!isTheirs(author, needles)) { rejected += 1; continue; }
        out.push({ platform: p.platform, author, id, url, foundIn: src.where || 'their own pages' });
        if (out.length >= cap) return { posts: out, rejected, capped: true };
      }
    }
  }
  return { posts: out, rejected, capped: false };
}

/* ===========================================================================
   RESOLVE — one oEmbed call per post.

   WHAT COMES BACK, AND WHAT DOES NOT. Caption, author, and for TikTok a
   thumbnail. NO VIEW COUNT, NO LIKES, NO ENGAGEMENT FIGURE OF ANY KIND —
   neither endpoint returns one and there is no free way to ask.

   That is a constraint on the report, not a gap to fill. A sample row that
   prints nothing where the views would be is honest; one that prints 0 is a
   number the API never gave us, and §5.3 exists to stop exactly that.
   =========================================================================== */

const OEMBED = {
  TikTok: (url) => `https://www.tiktok.com/oembed?url=${encodeURIComponent(url)}`,
};

/* Platforms whose posts we will not fetch, and the sentence why. Held here
   rather than left to fail through http.js so the reason is stated once and
   accurately: a request we choose not to make is a different fact from one
   that was refused, and only the first is true of X. */
const WILL_NOT_FETCH = {
  X: 'publish.x.com/robots.txt disallows /oembed — X asks software not to read it',
};

/** X returns the tweet inside an HTML blockquote; the text is the <p>. */
function textFromHtml(html) {
  const m = String(html || '').match(/<p[^>]*>([\s\S]*?)<\/p>/i);
  const raw = m ? m[1] : '';
  return raw
    .replace(/<br\s*\/?>/gi, ' ')
    .replace(/<[^>]+>/g, '')
    .replace(/&#(\d+);/g, (_, d) => String.fromCodePoint(Number(d)))
    .replace(/&amp;/g, '&').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"')
    .replace(/\s+/g, ' ')
    .trim();
}

async function resolveOne(post, cfg) {
  if (WILL_NOT_FETCH[post.platform]) {
    return { ...post, ok: false, declined: true, why: WILL_NOT_FETCH[post.platform] };
  }
  const endpoint = OEMBED[post.platform];
  if (!endpoint) return { ...post, ok: false, why: `no open endpoint for ${post.platform}` };

  const res = await get(endpoint(post.url), cfg);
  if (res.status !== 200 || !res.body) {
    return {
      ...post,
      ok: false,
      status: res.status,
      why: res.status === 404 ? 'the post is gone or private'
        : res.status ? `the directory answered ${res.status}`
        : `no answer — ${res.error || 'no response'}`,
    };
  }

  let d;
  try { d = JSON.parse(res.body); } catch {
    return { ...post, ok: false, status: res.status, why: 'the endpoint answered with something that is not JSON' };
  }

  const caption = post.platform === 'X' ? textFromHtml(d.html) : (d.title || '');

  /* The author the endpoint reports beats the one in the URL. A handle can be
     changed after a link is published, and the URL then names somebody who
     does not exist — or, worse, somebody who has since taken the name. */
  const author = d.author_name || post.author;

  return {
    ...post,
    ok: true,
    status: res.status,
    caption: String(caption || '').slice(0, 400),
    author,
    authorUrl: d.author_url || null,
    thumbnail: d.thumbnail_url || null,
    // Stated rather than omitted, so nothing downstream has to guess why a
    // TikTok row carries no number.
    metric: null,
    metricWhy: 'the open endpoint returns no view or like count',
    why: `read from ${post.platform}`,
  };
}

/**
 * Resolve harvested posts, newest-looking first, capped.
 *
 * Serial rather than parallel: both endpoints are one host each, so http.js's
 * per-host reservation would queue them anyway, and asking for four at once
 * only makes the wait harder to read in the cost log.
 */
async function resolveAll(posts, cfg, limit = 6) {
  const all = posts || [];
  /* Sort the fetchable ones to the front so the limit is not spent on posts we
     have already decided not to ask about. The declined ones still come back —
     "they link their own X posts and we may not read them" is a fact the check
     record should carry, not a silence. */
  const fetchable = all.filter((p) => !WILL_NOT_FETCH[p.platform]);
  const declined = all.filter((p) => WILL_NOT_FETCH[p.platform]);

  const out = [];
  for (const p of fetchable.slice(0, limit)) out.push(await resolveOne(p, cfg));
  for (const p of declined) out.push(await resolveOne(p, cfg));
  return out;
}

module.exports = { harvest, resolveOne, resolveAll, isTheirs, textFromHtml, PATTERNS, WILL_NOT_FETCH };
