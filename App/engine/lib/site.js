'use strict';
/* ============================================================================
   THEIR OWN SITE — Q5, 6 Aug 2026.

   The engine checked five store platforms and five newsletter platforms and
   never looked at the creator's own domain, which is where most real stores and
   newsletters actually live. Verified the same day: MKBHD sells at mkbhd.com,
   and the report read "Store: not there · we looked in 3 places". Three true
   sentences adding up to a false one — the exact failure §5.3 exists to prevent.

   Two rules keep this a first-party READ rather than a wider guess.

   1. THE DOMAIN IS HARVESTED, NEVER GUESSED — AND IT CARRIES THEIR NAME.
      It comes from something they published about themselves, a link or the
      address in their bio, AND the domain itself is their name. Both halves are
      required, and the second was learned the hard way on 6 Aug 2026: a first
      draft also accepted "the only off-platform link on a page of theirs", and
      on the first live creator it read Veritasium's TikTok bio link —
      ankerfast.club, an Anker campaign URL that redirects to anker.com — as his
      own site, and reported Anker's Shopify cart and Klaviyo signup as HIS store
      and HIS newsletter, "confirmed as theirs by their own page". The
      link-in-bio slot is where sponsors live. A link is a pointer, not a
      possession; that is the mkbhd.substack.com failure (Q9d) in a third hat.

   2. WE ONLY FOLLOW LINKS THEY PUBLISHED, AND ONLY TO THEMSELVES.
      Extra pages come from anchors on their own homepage, and only at their own
      registrable domain. That is what makes shop.MKBHD.com readable — a
      subdomain of a domain confirmed as his, which Q6 harvested from his video
      descriptions and deliberately left unused pending this rule — and what
      stops the crawl wandering onto dbrand.com/shop, which is a sponsor's store.

   Everything here reads pages. Nothing here decides anything: the markers and
   the verdict live in probes.json and resolve.js, where every other signature
   lives.
   ========================================================================== */

const path = require('path');
const { get } = require('./http');

const CFG = require(path.join(__dirname, '..', 'config', 'probes.json')).ownSite;

/* Public suffixes that are two labels deep. Not the full PSL — a list this
   short is honest about being a heuristic, and the cost of getting one wrong is
   that we decline to call a domain theirs. */
const TWO_PART_TLDS = new Set([
  'co.uk', 'org.uk', 'ac.uk', 'gov.uk', 'com.au', 'net.au', 'org.au', 'co.nz',
  'co.jp', 'ne.jp', 'or.jp', 'com.br', 'com.mx', 'co.za', 'co.in', 'co.kr',
]);

const HINT = new RegExp(`(^|[^a-z])(${CFG.hints.join('|')})([^a-z]|$)`, 'i');

/** Bio links arrive as typed, and people type "chipotle.com". */
function withScheme(link) {
  const s = String(link || '').trim();
  if (!s) return null;
  return /^https?:\/\//i.test(s) ? s : `https://${s}`;
}

function hostOf(link) {
  try { return new URL(withScheme(link)).hostname.replace(/^www\./, '').toLowerCase(); }
  catch { return null; }
}

function registrable(host) {
  if (!host) return null;
  const parts = host.replace(/^www\./, '').toLowerCase().split('.');
  if (parts.length <= 2) return parts.join('.');
  const lastTwo = parts.slice(-2).join('.');
  return TWO_PART_TLDS.has(lastTwo) ? parts.slice(-3).join('.') : lastTwo;
}

function isPlatform(host) {
  const d = registrable(host);
  return CFG.notTheirOwn.includes(d) || CFG.notTheirOwn.includes(host);
}

function normalizeName(s) { return String(s || '').toLowerCase().replace(/[^a-z0-9]/g, ''); }

/**
 * Does this domain look like this person? The label before the suffix, against
 * their handle and their display name, both directions — "mkbhd" ⊂ "mkbhd.com",
 * "veritasium" ⊂ "veritasium.com". Four characters minimum, because three-letter
 * fragments match by accident and the whole point of this test is that it does
 * not.
 */
function resembles(host, names) {
  const label = normalizeName((registrable(host) || '').split('.')[0]);
  if (label.length < CFG.minNameOverlap) return false;
  return names.map(normalizeName).some((n) =>
    n.length >= CFG.minNameOverlap && (n.includes(label) || label.includes(n)));
}

/* ---------------------------------------------------------------------------
   WHICH DOMAIN IS THEIRS
   ------------------------------------------------------------------------- */

function found(host, why) {
  const h = host.replace(/^www\./, '');
  return { site: { host: h, origin: `https://${h}`, domain: registrable(h) }, why };
}

/**
 * @returns {{site:{host,origin,domain}|null, why:string}}
 *
 * ONE TEST, TWO SOURCES: the domain has to carry their name, and they have to
 * have published it — as a link, or as the address in their bio. A link is a
 * pointer, not a possession, and the name is what turns one into the other.
 *
 * An earlier version of this had a third rule — "the only off-platform link on
 * a page confirmed as theirs" — and it survived exactly one live creator.
 * Veritasium's TikTok bio link is ankerfast.club, a sponsor's campaign URL that
 * redirects to anker.com, and the engine reported Anker's Shopify cart and
 * Klaviyo signup as HIS store and HIS newsletter, "confirmed as theirs by their
 * own page". The link-in-bio slot is where sponsors live. That rule is gone.
 *
 * What it costs: a creator whose site is branded differently from their name —
 * @janedoe at thecozykitchen.com — is not found, the place is not added, and
 * they are judged on the old bar. Coverage, never a claim. §5.3's direction.
 */
function pickOwnSite(dossier) {
  const surfaces = dossier.surfaces || [];
  const names = [dossier.handle, dossier.displayName].filter(Boolean);

  // 1 — a domain carrying their name, anywhere they publish links.
  const published = [];
  for (const s of surfaces) {
    for (const l of s.links || []) {
      const host = hostOf(l);
      if (host && !isPlatform(host)) published.push({ host, surface: s });
    }
  }
  const lookalike = published.find((p) => resembles(p.host, names));
  if (lookalike) {
    return found(lookalike.host, `they link to ${registrable(lookalike.host)} from their ${lookalike.surface.platform || 'own page'}, and the domain is their name`);
  }

  // 2 — the domain of an address they publish in their own bio. MKBHD's YouTube
  //     bio reads "business@MKBHD.com" and links to nothing at all. The same
  //     name test applies: an agency's address in a bio — marques@standard.tv —
  //     is a domain someone else owns, and reading a talent agency's site as his
  //     would be the sponsor failure again with better manners.
  for (const s of surfaces) {
    for (const m of String(s.bio || '').matchAll(/[a-z0-9._%+-]+@([a-z0-9.-]+\.[a-z]{2,})/gi)) {
      const host = m[1].toLowerCase();
      if (CFG.notAnAddress.includes(registrable(host)) || isPlatform(host)) continue;
      if (!resembles(host, names)) continue;
      return found(host, `their ${s.platform || 'own page'} publishes an address at ${registrable(host)}, and the domain is their name`);
    }
  }

  return {
    site: null,
    why: published.length
      ? `they publish ${published.length} link${published.length === 1 ? '' : 's'} off-platform, none at a domain carrying their name`
      : 'they do not publish a link to a site of their own that we could read',
  };
}

/* ---------------------------------------------------------------------------
   READING IT
   ------------------------------------------------------------------------- */

/** One page, read and judged readable or not. Never throws. */
async function readPage(url, httpCfg) {
  const res = await get(url, httpCfg);
  const body = res.body || '';
  const hay = body.toLowerCase();
  const text = hay
    .replace(/<script[\s\S]*?<\/script>/g, ' ')
    .replace(/<style[\s\S]*?<\/style>/g, ' ')
    .replace(/<[^>]+>/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
  const anchors = (hay.match(/<a\s[^>]*href=/g) || []).length;
  const page = { url, final_url: res.final_url || url, status: res.status, body, hay, chars: text.length, anchors };

  if (res.blocked === 'robots') return { ...page, readable: false, why: 'robots.txt asks us not to look here' };
  if (res.status !== 200) {
    return { ...page, readable: false, why: res.status ? `HTTP ${res.status}` : (res.error || 'no response') };
  }
  // A page that arrives as an empty shell and fills itself in the browser is a
  // page we did not read. §11.3 rules out a headless browser, so the honest
  // answer is that we could not see it — not that there was nothing on it.
  if (text.length < CFG.minTextChars && anchors < CFG.minAnchors) {
    return { ...page, readable: false, why: 'the page arrives empty and fills itself in the browser, and §11.3 rules out running one' };
  }
  return { ...page, readable: true, why: `read ${text.length.toLocaleString()} characters and ${anchors} links` };
}

/** Anchors on a page of theirs that point somewhere else on their own domain
 *  and read like the thing we are looking for. */
function hintLinks(page, domain) {
  const out = [];
  for (const m of String(page.body).matchAll(/<a\s[^>]*href=["']([^"']+)["'][^>]*>([\s\S]{0,120}?)<\/a>/gi)) {
    let u;
    try { u = new URL(m[1], page.final_url || page.url); } catch { continue; }
    if (!/^https?:$/.test(u.protocol)) continue;
    if (registrable(u.hostname) !== domain) continue;
    const text = m[2].replace(/<[^>]+>/g, ' ');
    if (!HINT.test(`${u.hostname} ${u.pathname} ${text}`)) continue;
    out.push(`${u.origin}${u.pathname.replace(/\/+$/, '')}`);
  }
  return out;
}

/** Links already harvested from elsewhere that sit at their own domain.
 *
 *  This is the other half of Q6's footnote. Video-description links are kept
 *  out of `dossier.links` because a sponsor's link there would read as the
 *  creator's own store. A link whose host is their own confirmed domain cannot
 *  be a sponsor's, so this is the one safe use of that pile — and it is what
 *  puts shop.MKBHD.com in front of the store signature.
 */
function harvestedAtDomain(dossier, domain) {
  const all = (dossier.surfaces || []).flatMap((s) => [...(s.links || []), ...(s.mentionLinks || [])]);
  const out = [];
  for (const l of all) {
    const withS = withScheme(l);
    let u;
    try { u = new URL(withS); } catch { continue; }
    if (registrable(u.hostname) !== domain) continue;
    out.push(`${u.origin}${u.pathname.replace(/\/+$/, '')}`);
  }
  return out;
}

/**
 * Pick their site and read a handful of pages of it.
 *
 * Politeness is inherited rather than reinvented: every fetch goes through
 * lib/http, so the per-host delay, the timeout, the truthful user agent and
 * robots.txt all apply unchanged. The page cap is the only new limit, and when
 * it bites the report says so — a search that stopped early must not read as a
 * search that finished.
 */
async function readOwnSite(dossier, cfg, log) {
  const picked = pickOwnSite(dossier);
  if (!picked.site) {
    log(`probe · their own site · none to read — ${picked.why}`);
    return { site: null, why: picked.why, pages: [], truncated: false };
  }

  const httpCfg = { ...cfg.http, pass: 'probe', maxBodyBytes: CFG.maxBodyBytes };
  const home = await readPage(picked.site.origin, httpCfg);
  const pages = [home];

  const queue = [...new Set([
    ...harvestedAtDomain(dossier, picked.site.domain),
    ...(home.readable ? hintLinks(home, picked.site.domain) : []),
  ])].filter((u) => u !== home.url && u !== home.final_url && u !== `${picked.site.origin}/`);

  const take = queue.slice(0, CFG.maxPages - 1);
  for (const u of take) pages.push(await readPage(u, httpCfg));

  const readable = pages.filter((p) => p.readable);
  log(`probe · their own site · ${picked.site.host} — ${picked.why} · ${readable.length} of ${pages.length} page${pages.length === 1 ? '' : 's'} readable${queue.length > take.length ? ` · ${queue.length - take.length} more we did not open` : ''}`);

  return { site: picked.site, why: picked.why, pages, truncated: queue.length > take.length };
}

module.exports = { readOwnSite, pickOwnSite, hintLinks, registrable, resembles, isPlatform, withScheme };
