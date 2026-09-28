'use strict';
/* ============================================================================
   READING A FIRST-PARTY SURFACE.

   Pulls audience size, bio text and — the important one — the links the
   creator themselves declares. Those links are what turn a guessing engine
   into a checking one: a newsletter that exists is almost always announced by
   its owner, so reading the bio is the difference between "we looked in the
   usual places" and "we looked where SHE points."

   Everything here is string extraction from a page we were allowed to fetch.
   No inference, no model.
   ========================================================================== */

function decode(s) {
  if (!s) return s;
  return s
    .replace(/\\u002F/gi, '/')
    .replace(/\\u0026/gi, '&')
    .replace(/\\"/g, '"')
    .replace(/\\n/g, ' ')
    .replace(/&amp;/g, '&');
}

function firstMatch(body, re) {
  const m = body.match(re);
  return m ? m[1] : null;
}

function abbrevToNumber(s) {
  if (!s) return null;
  const m = String(s).replace(/,/g, '').match(/([\d.]+)\s*([KMB])?/i);
  if (!m) return null;
  const n = parseFloat(m[1]);
  const mult = { K: 1e3, M: 1e6, B: 1e9 }[(m[2] || '').toUpperCase()] || 1;
  return Math.round(n * mult);
}

/**
 * A profile picture, and WHEN IT STOPS WORKING.
 *
 * PRD §6.12 says link, never copy — Scout does not keep a library of
 * photographs of people who never consented. That rule is right and it has a
 * cost nobody had measured: TikTok serves avatars from a signed CDN, and the
 * signature carries `x-expires`. Measured 6 Aug 2026 on a live profile, the
 * window is about **48 hours**.
 *
 * So the URL is stored WITH its expiry rather than on its own. An interface
 * that knows when a link dies can fall back to initials before it breaks;
 * one that doesn't shows a broken image to a room full of people. YouTube's
 * googleusercontent URLs are unsigned and carry no expiry, which is why this
 * returns null there rather than inventing one.
 */
function avatarFrom(url, host) {
  if (!url) return null;
  let expires = null;
  try {
    const v = new URL(url).searchParams.get('x-expires');
    if (v && /^\d{9,10}$/.test(v)) expires = new Date(Number(v) * 1000).toISOString();
  } catch { /* an unparseable URL is just an avatar with no known expiry */ }
  return { url, expires, host: host || null };
}

function tiktok(body) {
  const followers = firstMatch(body, /"followerCount":(\d+)/);
  const hearts = firstMatch(body, /"heartCount":(\d+)/);
  const videos = firstMatch(body, /"videoCount":(\d+)/);
  const bio = decode(firstMatch(body, /"signature":"([^"]{0,400})"/));
  const bioLink = decode(firstMatch(body, /"bioLink":\{"link":"([^"]{0,300})"/));
  const nickname = decode(firstMatch(body, /"nickname":"([^"]{0,120})"/));

  const captions = [...body.matchAll(/"desc":"([^"]{10,300})"/g)]
    .map((m) => decode(m[1]))
    .filter((t) => !/^https?:/.test(t))
    .slice(0, 40);

  // Largest first — the card crops, the report does not, and asking for the
  // 100px thumb and scaling it up is how an avatar looks cheap.
  const avatarUrl = decode(
    firstMatch(body, /"avatarLarger":"([^"]{0,600})"/)
    || firstMatch(body, /"avatarMedium":"([^"]{0,600})"/)
    || firstMatch(body, /"avatarThumb":"([^"]{0,600})"/)
  );

  return {
    platform: 'TikTok',
    displayName: nickname,
    followers: followers ? Number(followers) : null,
    posts: videos ? Number(videos) : null,
    totalLikes: hearts ? Number(hearts) : null,
    bio,
    avatar: avatarFrom(avatarUrl, 'tiktokcdn'),
    links: bioLink ? [normalizeLink(bioLink)] : [],
    captions,
  };
}

function youtube(body) {
  const subsText = firstMatch(body, /"subscriberCountText":\{[^}]*?"simpleText":"([^"]+)"/)
    || firstMatch(body, /([\d.]+[KMB]?)\s+subscribers/);
  const desc = decode(
    firstMatch(body, /"description":\{"simpleText":"([^"]{0,600})"/)
    || firstMatch(body, /"channelMetadataRenderer":\{[^}]*?"description":"([^"]{0,600})"/)
    || firstMatch(body, /<meta name="description" content="([^"]{0,600})"/)
  );
  const title = decode(
    firstMatch(body, /"channelMetadataRenderer":\{"title":"([^"]{0,120})"/)
    || firstMatch(body, /<title>([^<]{0,120})<\/title>/)
  );
  const videosText = firstMatch(body, /"videoCountText":\{[^}]*?"simpleText":"([^"]+)"/);

  // YouTube wraps outbound links in /redirect?...&q=<encoded>
  const links = [...body.matchAll(/[?&]q=([^"&\\]+)/g)]
    .map((m) => { try { return decodeURIComponent(m[1]); } catch { return null; } })
    .filter((s) => s && /^https?:\/\//.test(s))
    .map(normalizeLink);

  const captions = [...body.matchAll(/"title":\{"runs":\[\{"text":"([^"]{10,200})"\}\]/g)]
    .map((m) => decode(m[1]))
    .slice(0, 40);

  // googleusercontent avatars are unsigned and do not expire, which makes the
  // six creators here with a channel the only ones whose face survives an
  // exported seed. `=s900` asks for the large rendition; the default is tiny.
  const avatarUrl = decode(
    firstMatch(body, /"avatar":\{"thumbnails":\[\{"url":"([^"]{0,400})"/)
    || firstMatch(body, /<meta property="og:image" content="([^"]{0,400})"/)
  );

  return {
    platform: 'YouTube',
    displayName: title ? title.replace(/ - YouTube$/, '') : null,
    followers: abbrevToNumber(subsText),
    posts: videosText ? abbrevToNumber(videosText) : null,
    bio: desc,
    avatar: avatarFrom(avatarUrl ? avatarUrl.replace(/=s\d+(-c)?(-k)?/, '=s900') : null, 'googleusercontent'),
    links: dedupe(links),
    captions,
  };
}

/* The only extractor whose input is documented JSON rather than a page written
   for a person, so it parses instead of pattern-matching. A body that will not
   parse returns null and the surface reads as unread — the same answer a
   404 gives, and the honest one: we did not see it.

   Bluesky avatars are unsigned CDN URLs with no expiry parameter, which puts
   them in the same class as googleusercontent rather than tiktokcdn — the face
   survives an exported seed. */
function bluesky(body) {
  let j;
  try { j = JSON.parse(body); } catch { return null; }
  if (!j || !j.did) return null;

  const bio = j.description || null;
  const links = [...String(bio || '').matchAll(/https?:\/\/[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s"'<>)\]]{0,120})?/gi)]
    .map((m) => normalizeLink(m[0]));

  /* A handle that IS a domain is a link they published about themselves — it
     is how site.js finds a site for a creator who links to nothing, and it is
     the reason the domain guess in bluesky.js is worth making at all. The
     .bsky.social default is not one: it is an address on the platform. */
  const handle = j.handle || null;
  if (handle && !/\.bsky\.social$/i.test(handle) && /\.[a-z]{2,}$/i.test(handle)) {
    links.push(normalizeLink(`https://${handle}`));
  }

  return {
    platform: 'Bluesky',
    /* Carried so the sweep does not have to ask the same endpoint twice: the
       demand read needs a DID to drop the creator's own replies, and this
       response already has one. */
    did: j.did,
    labels: (j.labels || []).map((l) => l.val),
    displayName: j.displayName || null,
    followers: j.followersCount == null ? null : j.followersCount,
    posts: j.postsCount == null ? null : j.postsCount,
    bio,
    avatar: avatarFrom(j.avatar || null, 'bsky.app'),
    links: dedupe(links),
    captions: [],
  };
}

function genericLinks(body) {
  const links = [...body.matchAll(/https?:\/\/[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s"'<>\\)]{0,120})?/gi)]
    .map((m) => normalizeLink(m[0]));
  const desc = decode(firstMatch(body, /<meta name="description" content="([^"]{0,400})"/));
  return { platform: null, followers: null, bio: desc, links: dedupe(links), captions: [] };
}

const NOISE = /(^|\.)(google|gstatic|googleapis|youtube|ytimg|schema\.org|w3\.org|fonts\.|cdn\.|facebook\.com\/tr|doubleclick|cloudflare|jsdelivr|apple\.com\/DTDs|licensebuttons|creativecommons)/i;

/* A bio link arrives as the creator typed it, and people type "chipotle.com".
   Left alone, that string reached the abandonment check as an unparseable URL,
   came back status 0, and was recorded as "a link they still publish that no
   longer resolves — they tried, it broke". chipotle.com resolves fine; it was
   worth 6 points of Pressure and a sentence on the report that was not true.
   Found 6 Aug 2026 while harvesting the same links for Q5. */
function normalizeLink(u) {
  const raw = String(u || '').trim();
  const withScheme = /^[a-z][a-z0-9+.-]*:\/\//i.test(raw) ? raw : `https://${raw}`;
  try {
    const url = new URL(withScheme);
    return `${url.origin}${url.pathname.replace(/\/$/, '')}`;
  } catch { return u; }
}

function hostname(u) { try { return new URL(u).hostname; } catch { return ''; } }

function dedupe(links) {
  const out = [];
  const seen = new Set();
  for (const l of links) {
    // An unparseable link is not worth losing the whole extraction over — this
    // runs inside a try/catch that would return null for the entire surface.
    if (!l || seen.has(l) || NOISE.test(hostname(l))) continue;
    seen.add(l);
    out.push(l);
  }
  return out.slice(0, 60);
}

const EXTRACTORS = { tiktok, youtube, bluesky, generic_links: genericLinks };

function extract(kind, body) {
  const fn = EXTRACTORS[kind];
  if (!fn) return null;
  try { return fn(body); } catch { return null; }
}

module.exports = { extract, abbrevToNumber, normalizeLink };
