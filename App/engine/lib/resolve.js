'use strict';
/* ============================================================================
   THE RESOLVER — where "verified absent" is earned. PRD §5.3.

   This is the most important file in the engine and the shortest interesting
   one. It contains no model, no heuristic and no judgment. It reads HTTP
   responses and applies a written rule.

   ---------------------------------------------------------------------------
   PER PLACE — what one URL told us
   ---------------------------------------------------------------------------
   hit           status ok AND a positive marker matched AND no veto
   miss          a definitive negative status (404/410), or a negative marker
   inconclusive  403, 429, 5xx, timeout, DNS failure, robots-blocked, or 200
                 with no marker either way

   A 200 is not a hit. That is the whole reason signatures exist: substack.com
   returns 200 and a search page for a handle that does not exist, and a naive
   engine reports a newsletter that was never there.

   ---------------------------------------------------------------------------
   PER ITEM — what the set of places adds up to
   ---------------------------------------------------------------------------
   present          any hit. A hit on a place we GUESSED is present-but-
                    uncorroborated until something ties it to them: a link they
                    publish, or a link back from that page to a surface already
                    confirmed as theirs. Uncorroborated, it says so on the line
                    and it costs confidence (Q10).
   verified_absent  ALL THREE of:
                      1. reachability — at most a third of the places were
                         inconclusive. If half the doors wouldn't open, we
                         did not conduct a search.
                      2. coverage — we got at least `requiredPlaces` misses,
                         AND we successfully read at least one FIRST-PARTY
                         surface. Guessing at platform URLs without ever
                         reading what the creator says about themselves is
                         not looking; it is assuming.
                         Q5: for store and newsletter, the creator's OWN SITE
                         is one of the places, and the number required rises
                         with it — see requiredPlacesWithOwnSite below.
                      3. no hit anywhere, including in their own declared links.
   not_found        anything else, with the reason stated.

   Condition 2's second half is the strict one. It will produce more
   not_found days than a looser rule would. That is the correct direction of
   failure: PRD §5.3 says a Scout burned twice stops trusting the drop
   permanently, and the cost of an honest "we couldn't tell" is one quiet day.
   ========================================================================== */

const INCONCLUSIVE_CEILING = 1 / 3;

function bodyHas(body, needles) {
  if (!needles || !needles.length) return false;
  const hay = body || '';
  return needles.some((n) => hay.includes(n));
}

/** Read one fetched place against its signature. */
function resolvePlace(place, res, context = {}) {
  const base = {
    id: place.id,
    label: place.label || place.id,
    kind: place.kind || 'guess',
    advisory: !!place.advisory,
    ownSite: !!place.ownSite,
    url: res ? res.url : null,
    final_url: res ? res.final_url : null,
    status: res ? res.status : null,
    ms: res ? res.ms : null,
  };

  // Places resolved by a matcher rather than by URL signature.
  if (place.matcher) return { ...base, ...runMatcher(place, context) };

  if (!res) return { ...base, outcome: 'inconclusive', why: 'not attempted' };

  if (res.blocked === 'robots') {
    return { ...base, outcome: 'inconclusive', why: "robots.txt asks us not to look here" };
  }
  if (res.status === 0 && !(place.absent && (place.absent.status || []).includes(0))) {
    return { ...base, outcome: 'inconclusive', why: res.error || 'no response' };
  }

  // Explicit negative markers — a page can return 200 and say "not found".
  if (place.absent && bodyHas(res.body, place.absent.bodyAny)) {
    return { ...base, outcome: 'miss', why: 'page says it is not there' };
  }

  // A redirect away from the thing we asked for is not the thing.
  if (place.finalUrlNot && place.finalUrlNot.some((frag) => (res.final_url || '').includes(frag))) {
    return { ...base, outcome: 'miss', why: `redirected to ${shortUrl(res.final_url)}` };
  }

  // THE GENERAL FORM OF THAT TRAP. A site that does not have /handle very often
  // answers 200 and quietly redirects to its own front page or a generic
  // profile shell. Verified 2026-08-05: stan.store/<handle> lands on
  // stan.store, patreon.com/<handle> lands on /profile/creators. Both look
  // like a hit and neither is one. So: if we asked for a path segment, the
  // page we ended up on has to still be about it.
  // The handle may legitimately move from the path into the hostname —
  // gumroad.com/<handle> redirects to <handle>.gumroad.com, and that redirect
  // IS the presence signal (a seller who does not exist 404s instead). So the
  // test is that the handle survives ANYWHERE in the final URL, not that the
  // path is unchanged. stan.store/<handle> landing on stan.store still fails
  // it, which is the case this rule exists for.
  if (place.pathMustSurvive) {
    const asked = lastSegment(res.url);
    const landed = `${safeHost(res.final_url) || ''}${safePath(res.final_url) || ''}`.toLowerCase();
    if (asked && !landed.includes(asked.toLowerCase())) {
      return { ...base, outcome: 'miss', why: `asked for /${asked}, landed on ${shortUrl(res.final_url)}` };
    }
  }

  if (place.neverConclusive) {
    return { ...base, outcome: 'inconclusive', why: place.note || 'this surface cannot answer the question' };
  }

  // Presence is tested BEFORE absent.status, because some places answer 200
  // either way and the marker is the only discriminator (TikTok). Where the
  // two status lists are disjoint — the normal case — order is irrelevant.
  const statusOk = (place.present && place.present.status ? place.present.status : [200]).includes(res.status);
  const markerOk = !place.present
    || (!place.present.bodyAny && !place.present.bodyRegex)
    || bodyHas(res.body, place.present.bodyAny)
    || (place.present.bodyRegex && new RegExp(place.present.bodyRegex).test(res.body || ''));
  if (statusOk && markerOk) {
    return { ...base, outcome: 'hit', why: `HTTP ${res.status} and the page looks like one` };
  }

  if (place.absent && (place.absent.status || []).includes(res.status)) {
    return {
      ...base,
      outcome: 'miss',
      why: res.status === 200 ? 'the page loaded and there is nothing there' : `HTTP ${res.status}`,
    };
  }

  if (res.status === 403 || res.status === 429 || res.status >= 500) {
    return { ...base, outcome: 'inconclusive', why: `HTTP ${res.status} — blocked or unavailable` };
  }

  return { ...base, outcome: 'inconclusive', why: `HTTP ${res.status} with nothing recognisable on the page` };
}

/* ---------------------------------------------------------------------------
   Matchers — deterministic reads over things we already fetched.
   ------------------------------------------------------------------------- */

const REPRESENTATION_MARKERS = [
  'repped by', 'represented by', 'management:', 'mgmt:', 'booking:', 'bookings:',
  'for business', 'business inquiries', 'inquiries:', 'agency', 'talent',
];
const SPONSORSHIP_MARKERS = ['#ad', '#sponsored', '#gifted', 'paid partnership', 'in partnership with', '#partner'];
const AFFILIATE_MARKERS = [
  'amzn.to', 'amazon.com/shop', 'tag=', 'shopmy.us', 'ltk.app', 'liketoknow',
  'rstyle.me', 'shareasale', 'impact.com', 'howl.link', 'collabs',
];

function runMatcher(place, ctx) {
  const surfaces = ctx.surfaces || [];
  const readAny = surfaces.some((s) => s.read);
  const bio = surfaces.map((s) => s.bio || '').join(' ').toLowerCase();
  const captions = surfaces.flatMap((s) => s.captions || []).join(' ').toLowerCase();
  const links = surfaces.flatMap((s) => s.links || []);

  if (place.matcher === 'bio_representation') {
    if (!readAny) return { outcome: 'inconclusive', why: 'we could not read any of their own pages' };
    const found = REPRESENTATION_MARKERS.find((m) => bio.includes(m));
    if (found) return { outcome: 'hit', why: `their bio says "${found}"`, evidence: found };
    // A silent bio does not prove nobody signed them.
    return { outcome: 'inconclusive', why: 'their bio does not mention it, which is not the same as nobody having signed them' };
  }

  // SAMPLE MATCHERS. These read a slice of what a creator has posted, so they
  // can prove a thing IS there and can never prove it is not. A few dozen
  // captions with no "#ad" in them is not evidence that nobody sponsors her.
  // Absence of a marker in a sample resolves not_found, lowers confidence, and
  // says why — which is the same discipline as an unreadable comment section.
  if (place.matcher === 'caption_sponsorship') {
    const n = surfaces.flatMap((s) => s.captions || []).length;
    if (!captions) return { outcome: 'inconclusive', why: 'we could not read their captions' };
    const found = SPONSORSHIP_MARKERS.find((m) => captions.includes(m));
    if (found) return { outcome: 'hit', why: `a caption carries "${found}"`, evidence: found };
    return { outcome: 'inconclusive', why: `nothing in the ${n} recent captions we could read — a sample, which cannot show that none exist` };
  }

  if (place.matcher === 'links_affiliate') {
    if (!readAny) return { outcome: 'inconclusive', why: 'we could not read their links' };
    const found = links.find((l) => AFFILIATE_MARKERS.some((m) => l.toLowerCase().includes(m)));
    if (found) return { outcome: 'hit', why: 'an affiliate link in their own links', evidence: found };
    return { outcome: 'inconclusive', why: `none among the ${links.length} links they publish, though these usually sit in video descriptions we cannot read` };
  }

  if (place.matcher === 'itunes_podcast') {
    const res = ctx.response;
    if (!res || res.status !== 200) return { outcome: 'inconclusive', why: 'the directory did not answer' };
    let data;
    try { data = JSON.parse(res.body); } catch { return { outcome: 'inconclusive', why: 'unreadable directory response' }; }
    if (!data.results || !data.results.length) {
      return { outcome: 'miss', why: 'nothing under that name in the Apple Podcasts directory' };
    }
    // Match on handle AND display name, both directions. Verified 2026-08-05:
    // searching a real name returns a show credited to the handle, so a
    // single-needle match misses it and reports a podcast that plainly exists
    // as absent.
    const needles = (ctx.nameNeedles || [ctx.nameNeedle])
      .filter(Boolean)
      .map((s) => s.toLowerCase().replace(/[^a-z0-9]/g, ''))
      .filter((s) => s.length >= 3);
    const match = data.results.find((r) => {
      const a = (r.artistName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      const c = (r.collectionName || '').toLowerCase().replace(/[^a-z0-9]/g, '');
      return needles.some((nd) => a.includes(nd) || c.includes(nd) || (a.length >= 3 && nd.includes(a)));
    });
    if (match) {
      /* `feedUrl` carried out, 10 Aug 2026. It was in this response all along
         and thrown away one line later, which made the podcast the one hit the
         engine could confirm but never open — we knew the show existed and had
         nothing to say about it. Apple publishes the show's own RSS address
         here; lib/feeds.js reads it for episodes and a publishing rate. The
         cheapest source in the project: the call is already made and already
         parsed. */
      return {
        outcome: 'hit',
        why: `"${match.collectionName}" by ${match.artistName}`,
        evidence: match.collectionViewUrl,
        feedUrl: match.feedUrl || null,
      };
    }
    return { outcome: 'miss', why: `${data.results.length} show${data.results.length === 1 ? '' : 's'} came back, none of them theirs` };
  }

  /* Q5, 6 Aug 2026 — THEIR OWN SITE.
   *
   * The pages are already in hand (lib/site.js read them); this decides what
   * they say. Unlike every other place in these two items, a negative here is
   * worth something: we read the page they publish about themselves and there
   * is no way to buy anything on it. That is why Q5 rejected the presence-only
   * option (c) — and why the read has to be honest about NOT having happened.
   * Three different silences, three different outcomes:
   *
   *   no site we can call theirs   the place is not added at all (see passes.js)
   *   a site we could not read     inconclusive, with the cause
   *   more of it we did not open   inconclusive — a search that stopped early
   *                                must not read as a search that finished
   */
  if (place.matcher === 'own_site') {
    const own = ctx.ownSite;
    if (!own || !own.site) return { outcome: 'inconclusive', why: (own && own.why) || 'we found no site of their own to read' };

    const at = { url: own.site.origin, final_url: own.site.origin, status: (own.pages[0] || {}).status };
    const readable = (own.pages || []).filter((p) => p.readable);
    if (!readable.length) {
      const first = (own.pages || [])[0];
      return { ...at, outcome: 'inconclusive', why: `we could not read ${own.site.host} — ${first ? first.why : 'nothing came back'}` };
    }

    for (const p of readable) {
      const found = (place.markers || []).find((m) => p.hay.includes(m));
      if (found) {
        const where = shortUrl(p.final_url || p.url) || own.site.host;
        // No `evidence` field: resolveItem prefers it over the URL when it
        // writes "found it — …", and a bare host reads better there than a full
        // URL. The URL itself is carried by final_url and lands in the check
        // record, which is where §6.10 wants it.
        return {
          ...at, url: p.url, final_url: p.final_url || p.url, status: p.status,
          outcome: 'hit', why: `their own site says "${found}" — ${where}`,
        };
      }
    }

    const n = `${readable.length} page${readable.length === 1 ? '' : 's'}`;
    if (own.truncated) {
      return { ...at, outcome: 'inconclusive', why: `we read ${n} of ${own.site.host} and there were more of theirs we did not open` };
    }
    return { ...at, outcome: 'miss', why: `${place.missWhy || 'nothing of the kind on their own site'} — we read ${n} of ${own.site.host}` };
  }

  return { outcome: 'inconclusive', why: `no matcher named ${place.matcher}` };
}

/* ---------------------------------------------------------------------------
   Corroboration — Q9(d), 6 Aug 2026.

   A hit on a GUESSED url proves something exists at a name that looks like
   theirs, which is not the same as it being theirs. Before that doubt is
   allowed to block a gap, resolve it mechanically: read the page we already
   fetched and look for a link back to a surface we have ALREADY CONFIRMED is
   theirs. Found → it is theirs, and the guess became a check, which is the
   whole method. Not found → the current behaviour stands: it blocks, and the
   line reads "not confirmed as theirs".

   Verified 2026-08-05: mkbhd.substack.com is a live Substack belonging to
   someone called Bharath. It carries no link to MKBHD's YouTube, so it stays
   uncorroborated and never reads as his newsletter.

   Only CONFIRMED surfaces may corroborate. Instagram answers 200 for handles
   that do not exist, so a link to an Instagram page proves nothing — an
   unconfirmed surface cannot lend confirmation it does not have.

   A bare hostname is not a link back to a person: every Substack links to
   substack.com. The needle is always host + path.
   ------------------------------------------------------------------------- */

function linkNeedles(u) {
  try {
    const x = new URL(u);
    const host = x.hostname.replace(/^www\./, '').toLowerCase();
    const p = x.pathname.replace(/\/+$/, '').toLowerCase();
    if (!p || p === '/') return [];
    const plain = `${host}${p}`;
    return [plain, plain.replace(/@/g, '%40')];   // @ survives href encoding as %40
  } catch { return []; }
}

/** @returns {{surface:string,url:string}|null} */
function findBacklink(body, surfaces) {
  const hay = (body || '').toLowerCase();
  if (!hay) return null;
  for (const s of surfaces || []) {
    if (!s.confirmed || !s.url) continue;
    if (linkNeedles(s.url).some((n) => hay.includes(n))) {
      return { surface: s.platform || s.id, url: s.url };
    }
  }
  return null;
}

/* ---------------------------------------------------------------------------
   Item resolution — the rule
   ------------------------------------------------------------------------- */

function resolveItem(item, places, opts = {}) {
  const { declaredLinkHit = null, firstPartyRead = false, backlink = null, feedOwned = null } = opts;

  if (item.requiresApi) {
    return {
      item: item.item,
      label: item.label,
      half: item.half,
      tier: item.tier,
      state: 'not_found',
      places,
      placesLooked: 0,
      why: item.requiresApi,
    };
  }

  // Q5 — a hit on a page THEY publish outranks a hit on a URL we guessed, for
  // the same reason a declared link does: it needs no hedge. Without this, a
  // creator whose store is on their own site but whose handle also matches an
  // unrelated Gumroad reads "something at x.gumroad.com — not confirmed as
  // theirs" while the real answer was sitting in the same array.
  const hit = places.find((p) => p.outcome === 'hit' && p.kind === 'first_party')
    || places.find((p) => p.outcome === 'hit');
  if (hit) {
    const where = hit.evidence || shortUrl(hit.final_url || hit.url) || hit.label;

    // Corroboration. A hit on a GUESSED url means something exists at a name
    // that looks like theirs — not that it is theirs. A hit on a link they
    // publish themselves, or on their own platform page, needs no such hedge;
    // a guessed one earns it by linking back (see findBacklink above).
    /* `feedOwned` — 10 Aug 2026, lib/feeds.js. The strongest corroboration
       available on a guessed publication, and the only one that comes from
       reading the thing itself rather than from a link pointing at it: the
       masthead names them. It outranks a backlink for that reason. */
    const by = hit.kind === 'first_party' ? 'their own page'
      : hit.kind === 'api' ? 'an official directory'
      : declaredLinkHit ? 'a link they publish'
      : feedOwned ? `the feed it publishes — ${feedOwned.why}`
      : backlink ? `a link back to their ${backlink.surface}`
      : null;
    return {
      item: item.item, label: item.label, half: item.half, tier: item.tier,
      state: 'present', places, placesLooked: places.length,
      corroborated: !!by, corroboratedBy: by,
      why: by
        ? (backlink && hit.kind === 'guess' && !declaredLinkHit && !feedOwned
          ? `found it — ${where} · that page links back to their ${backlink.surface}`
          : `found it — ${where}`)
        : `something at ${where} — not confirmed as theirs`,
      evidence: hit.final_url || hit.evidence || hit.url,
    };
  }

  // Their own declared links beat any guess we could make.
  if (declaredLinkHit) {
    return {
      item: item.item, label: item.label, half: item.half, tier: item.tier,
      state: 'present', places, placesLooked: places.length,
      corroborated: true, corroboratedBy: 'a link they publish',
      why: 'they link to it themselves', evidence: declaredLinkHit,
    };
  }

  // ADVISORY places are excluded from the arithmetic. Some endpoints sit
  // permanently behind a bot wall and answer 403 to everyone (ko-fi, Etsy,
  // verified 2026-08-05). They are still worth asking, because a hit there
  // kills a false gap — but a door that never opens is not a place we looked,
  // and letting it drag the reachability ratio means the highest-value gaps
  // can never be verified at all. They stay visible in the check record.
  const counted = places.filter((p) => !p.advisory);
  const misses = counted.filter((p) => p.outcome === 'miss');
  const inconclusive = counted.filter((p) => p.outcome === 'inconclusive');
  const total = counted.length || 1;
  const inconclusiveShare = inconclusive.length / total;

  // Q3, 6 Aug 2026 — "we looked in N places" counts DOORS THAT OPENED, and the
  // ones that didn't get named rather than dropped. The advisory rule cuts both
  // ways: a door that never opens is not a place we looked (so Ko-fi's 403 is
  // out of the arithmetic above), but a door that DID open and said no is a
  // place we looked whether or not its answers count toward the bar. So the
  // sentence counts every definitive miss, and appends every silent door.
  // Six words, and it pre-empts the only good question anyone can ask of that
  // line: "how many places wouldn't talk to you?"
  const opened = places.filter((p) => p.outcome === 'miss');
  const silent = places.filter((p) => p.outcome === 'inconclusive');
  const wouldntAnswer = silent.length ? ` · ${silent.length} wouldn't answer` : '';

  /* Q5, 6 Aug 2026 — the bar rises when their own site is one of the places.
     "We looked in 4 places including their own site" is a much stronger claim
     than four platform guesses, and the number that earns the claim should move
     with it. The consequence is deliberate and it is the strict direction: a
     creator whose own site we could not read can no longer reach verified_absent
     on these items. We knew where to look and did not manage it, which is a
     not_found with a reason — the one quiet day §5.3 prefers to a false claim. */
  const ownSite = places.find((p) => p.ownSite);
  const required = (ownSite ? item.requiredPlacesWithOwnSite : null) || item.requiredPlaces || 1;

  const failures = [];
  if (inconclusiveShare > INCONCLUSIVE_CEILING) {
    failures.push(`${inconclusive.length} of ${total} places wouldn't answer`);
  }
  if (misses.length < required) {
    // When their own site is the only thing standing between us and the bar,
    // its reason is the useful sentence — not a restatement of the arithmetic.
    failures.push(ownSite && ownSite.outcome !== 'miss' && misses.length >= required - 1
      ? `their own site is where this usually lives, and ${ownSite.why}`
      : `only ${misses.length} of the ${required} places we need actually answered`);
  }
  if (!firstPartyRead) {
    failures.push("we couldn't read any of their own pages, so we don't get to say it isn't there");
  }

  if (!failures.length) {
    const including = ownSite && ownSite.outcome === 'miss' ? ' including their own site' : '';
    return {
      item: item.item, label: item.label, half: item.half, tier: item.tier,
      state: 'verified_absent', places, placesLooked: opened.length,
      why: `not there · we looked in ${opened.length} place${opened.length === 1 ? '' : 's'}${including}${wouldntAnswer}`,
    };
  }

  // When a single place was supposed to settle it and couldn't, its own reason
  // is the useful sentence — not a restatement of the arithmetic.
  const why = (places.length === 1 && inconclusive.length === 1)
    ? inconclusive[0].why
    : failures.join('; ');

  return {
    item: item.item, label: item.label, half: item.half, tier: item.tier,
    state: 'not_found', places, placesLooked: opened.length,
    why,
  };
}

function shortUrl(u) {
  try { const x = new URL(u); return `${x.hostname.replace(/^www\./, '')}${x.pathname.replace(/\/$/, '')}`; }
  catch { return null; }
}
function safePath(u) { try { return new URL(u).pathname; } catch { return null; } }
function safeHost(u) { try { return new URL(u).hostname; } catch { return null; } }
function lastSegment(u) {
  const p = safePath(u);
  if (!p) return null;
  const parts = p.split('/').filter(Boolean);
  return parts.length ? parts[parts.length - 1].replace(/^@/, '') : null;
}

module.exports = { resolvePlace, resolveItem, findBacklink, linkNeedles, INCONCLUSIVE_CEILING };
