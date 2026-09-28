'use strict';
/* ============================================================================
   THE LADDER — PRD §5.7. A creator only reaches the next pass by earning it.

     SWEEP   who is this, how big, what do they link to.   Rules. Cheap.
     PROBE   the inventory. Where "verified absent" is earned. Rules + HTTP.
     STUDY   demand, their own words, fit. The model. Expensive.

   The escalation gate between Probe and Study is the spend rule, and it is
   also PRD §6.4's best outcome: if Probe finds she has had a newsletter since
   2023, Warhol stops and says so rather than paying for a report nobody needs.

   Everything each pass learns is written to the observation log as it goes.
   ========================================================================== */

const path = require('path');
const { get, getAll } = require('./http');
const { extract, normalizeLink } = require('./extract');
const { resolvePlace, resolveItem, findBacklink, linkNeedles } = require('./resolve');
const site = require('./site');
const { readOwnSite } = site;
const { appendObservation, readObservations } = require('./store');
const llm = require('./llm');
const yt = require('./youtube');
const reddit = require('./reddit');
const feeds = require('./feeds');
const harvest = require('./harvest');
const bsky = require('./bluesky');

const PROBES = require(path.join(__dirname, '..', 'config', 'probes.json'));

function fill(tpl, ctx) {
  return tpl
    .replace(/\{handle\}/g, ctx.handle)
    .replace(/\{handleWords\}/g, encodeURIComponent(ctx.nameNeedle || ctx.handle));
}

function record(creatorId, pass, o) {
  return appendObservation({ creatorId, pass, ...o });
}

/* ===========================================================================
   ONE AUDIENCE TOTAL — Q11(b), 6 Aug 2026.

   Adding two follower counts together asserts that two accounts are one
   person. The handle match is free here — every surface was fetched from a URL
   built out of the same handle — and on its own it is a coincidence detector:
   @chipotle on TikTok and @chipotle on YouTube happen to be the same company,
   @james on both is a coin flip.

   So the second half is required: one surface has to LINK to the other. That
   is deterministic, cheap, and it states itself in words. Where it fails we do
   not merge — the platforms are reported separately and the report says why.
   No percentage; §6.2 removed it deliberately.

   Consequence, accepted in advance: totals get smaller. Some creators stop
   looking large. A smaller true number beats a larger assumed one.
   =========================================================================== */
/*  Q6 footnote to Q11(b), 6 Aug 2026 — a new source of links, not a new rule.
 *
 *  Task 1 left this rule almost unusable for YouTube: a YouTube channel page
 *  carries none of its outbound links in static HTML, so the YouTube surface
 *  arrived with an empty `links` array and could never link to anything. It was
 *  the rule failing for want of data rather than for want of a link.
 *
 *  Checked against the API on 6 Aug across five channels: the Data API does not
 *  expose the channel's Links section either, and not one of the five had a URL
 *  anywhere in its About text. What DOES carry them is video descriptions —
 *  MKBHD's recent five publish shop.MKBHD.com, twitter.com/MKBHD and
 *  instagram.com/MKBHD — and those ride along free on the videos.list call
 *  cadence already makes.
 *
 *  So they are read, and they are kept in their own field. `mentionLinks` may
 *  answer "does this surface link to that one", which is the merge rule exactly
 *  as written. They may NOT join `dossier.links`, which drives two other things
 *  they would poison:
 *
 *    declaredLinkHit  — "anything they link to themselves outranks a guess".
 *                       MKBHD's description links dbrand.com/shop/fold8, a
 *                       sponsor. `/shop` is a store signal, so this would report
 *                       a sponsor's shop as HIS store — the mkbhd.substack.com
 *                       failure wearing a different hat.
 *    abandonment      — "a link they still publish that no longer resolves".
 *                       A dead sponsor link from a year-old video is not a
 *                       creator's own thing breaking.
 *
 *  A needle here is always host + path of a surface we already confirmed, so a
 *  sponsor link cannot match one by accident.
 */
function linksTo(from, to) {
  const needles = linkNeedles(to.url);
  if (!needles.length) return false;
  const hay = [...(from.links || []), ...(from.mentionLinks || []), from.bio || ''].join(' ').toLowerCase();
  return needles.some((n) => hay.includes(n));
}

function mergeAudience(surfaces) {
  // Only CONFIRMED surfaces can join a total. Instagram answers 200 for handles
  // that do not exist, so "read" is not "theirs" and it cannot be counted.
  const nodes = surfaces.filter((s) => s.confirmed);
  if (!nodes.length) return { total: 0, counted: [], separate: [], why: 'no confirmed profile of theirs was readable' };

  // Components of a tiny undirected graph: an edge is a link in either direction.
  const seen = new Set();
  const components = [];
  for (const start of nodes) {
    if (seen.has(start.id)) continue;
    const group = [start];
    seen.add(start.id);
    for (let i = 0; i < group.length; i++) {
      for (const other of nodes) {
        if (seen.has(other.id)) continue;
        if (linksTo(group[i], other) || linksTo(other, group[i])) { group.push(other); seen.add(other.id); }
      }
    }
    components.push(group);
  }

  const size = (g) => g.reduce((n, s) => n + (s.followers || 0), 0);
  const biggest = nodes.reduce((a, b) => ((b.followers || 0) > (a.followers || 0) ? b : a));
  const counted = components.find((g) => g.includes(biggest));
  const separate = components
    .filter((g) => g !== counted)
    .flatMap((g) => g)
    .filter((s) => s.followers);

  const names = counted.map((s) => s.platform).join(' + ');
  const why = counted.length > 1
    ? `${names} — one audience, because their pages link to each other`
    : `${names} alone${separate.length ? ` — nothing links the ${separate.map((s) => s.platform).join(' or ')} to it` : ''}`;

  return {
    total: size(counted),
    counted,
    separate: separate.map((s) => ({
      id: s.id, platform: s.platform, followers: s.followers, url: s.url,
      why: `nothing on either page links the ${s.platform} to the ${biggest.platform}, so it is not added in`,
    })),
    why,
  };
}

/* ===========================================================================
   THE YOUTUBE API READ — Q6. Runs inside Sweep because everything it returns
   is a Sweep question: who is this, how big are they, what do they link to,
   and — new — how often do they post now against how often they used to.

   Cadence lives here rather than in Probe or Study because it is neither a
   check nor a judgment. It is a measurement of their own published history,
   and the point of Q6 is that it needs no model and no second visit.

   Everything is best-effort. A missing key, a channel at a different handle, a
   quota refusal: each returns a REASON, and the reason is what the Pressure
   line prints. "We could not read their posting rate" with a cause attached is
   an honest report line; a silent zero is not.
   =========================================================================== */
async function readYouTube(creatorId, handle, cfg, log) {
  const ycfg = cfg.youtube;

  if (!yt.available()) {
    log(`sweep · youtube api · skipped — ${yt.reason()}`);
    return { ok: false, why: yt.reason() };
  }

  const ch = await yt.channel(handle, 'sweep');
  if (!ch.ok) {
    log(`sweep · youtube api · ${ch.why}`);
    return { ok: false, why: ch.why };
  }
  if (!ch.exists) {
    log('sweep · youtube api · no channel at that handle');
    return { ok: true, exists: false, why: ch.why };
  }

  log(`sweep · youtube api · ${ch.title} · ${ch.subscribers == null ? 'subscribers hidden' : ch.subscribers.toLocaleString() + ' subscribers'} · ${ch.videoCount} uploads`);

  // The upload walk, then one stats call per 50 of them. Both are 1 quota unit
  // per page, so the whole history read costs single digits.
  const up = await yt.uploads(ch.uploadsPlaylist, ycfg, 'sweep');
  if (!up.ok || !up.videos.length) {
    return { ok: true, exists: true, channel: ch, cadence: { computable: false, why: up.why || 'the uploads playlist came back empty' } };
  }

  const stats = await yt.videoStats(up.videos.map((v) => v.id), 'sweep');
  const withViews = up.videos.map((v) => {
    const s = stats.stats.get(v.id);
    /* `title` joined this merge on 10 Aug 2026 with the samples work. The
       uploads walk returns only an id and a date; the title has always been in
       the videoStats snippet — already fetched, same quota unit — and was
       simply not carried across, which nothing noticed until a sample tried to
       print one and rendered an untitled row. */
    return {
      ...v,
      views: s ? s.views : null,
      title: s ? s.title : null,
      description: s ? s.description : '',
    };
  });

  const cad = yt.cadence(withViews, up, ycfg);
  log(`sweep · youtube api · ${up.videos.length} uploads over ${up.pages} page${up.pages === 1 ? '' : 's'} · cadence ${cad.computable ? cad.line : 'not readable — ' + cad.why}`);

  // See the Q11(b) footnote on linksTo: these are read, and they are kept out
  // of dossier.links on purpose.
  const mentionLinks = harvestLinks(withViews.slice(0, ycfg.commentVideos * 4).map((v) => v.description || ''));

  return {
    ok: true, exists: true, channel: ch, cadence: cad, mentionLinks,
    videoIds: withViews.map((v) => v.id),
    /* The most recent handful, kept for the samples block. This is the one
       platform that hands over an engagement figure, so a YouTube sample is
       the only one that can carry a number — see the metric note in
       harvest.js for why the others must not invent one. */
    videos: withViews.slice(0, 5),
  };
}

/* ===========================================================================
   THE BLUESKY READ — 12 August 2026. Runs inside Sweep for the same reason the
   YouTube read does: everything it returns is a Sweep question.

   It is placed AFTER the identity loop rather than alongside it, and that is
   not an oversight. The second candidate handle is the creator's own domain,
   and the domain is found by site.js out of the links the identity loop just
   harvested. So this read depends on that loop having finished, which costs it
   the parallelism the YouTube read gets and buys the guess that actually hits.

   REQUESTS ARE NOT DUPLICATED. `{handle}.bsky.social` was already fetched by
   the identity probe, and its answer is passed in rather than asked for again.
   A creator found at the default costs zero extra requests here; only a miss
   at the default, plus a domain worth trying, spends one.
   =========================================================================== */
async function readBluesky(creatorId, handle, surfaces, cfg, log) {
  const bcfg = cfg.bluesky;
  const httpCfg = { ...cfg.http, pass: 'sweep' };
  const surface = surfaces.find((s) => s.id === 'bluesky_profile');

  /* site.js applies the test that earns a domain — it carries their name AND
     they published it — which is what makes it usable as an identity claim
     rather than merely a link. Without one there is only the platform default,
     and the platform default cannot confirm itself. */
  const picked = site.pickOwnSite({
    handle,
    displayName: surfaces.map((s) => s.displayName).find(Boolean) || null,
    surfaces,
  });
  const domain = picked.site ? picked.site.host : null;

  /* What the identity probe already learned about {handle}.bsky.social,
     handed back in the shape bluesky.js returns so findProfile can reuse it
     rather than re-fetch it. Only a READ surface qualifies — a miss or a
     blocked read is re-asked, because those are the two the probe layer draws
     no conclusion from. */
  const defaultActor = `${String(handle).replace(/^@/, '').toLowerCase()}.bsky.social`;
  const known = surface && surface.read && surface.did
    ? {
      [defaultActor]: {
        ok: true,
        exists: true,
        actor: defaultActor,
        status: 200,
        url: `https://bsky.app/profile/${defaultActor}`,
        profile: {
          did: surface.did,
          handle: defaultActor,
          displayName: surface.displayName || null,
          bio: surface.bio || null,
          avatar: surface.avatar ? surface.avatar.url : null,
          followers: surface.followers == null ? null : surface.followers,
          follows: null,
          posts: surface.posts == null ? null : surface.posts,
          createdAt: null,
          labels: surface.labels || [],
          hidden: (surface.labels || []).includes(bsky.NO_UNAUTHENTICATED),
        },
        why: 'read by the identity probe',
      },
    }
    : null;

  const { found, undecided, tried } = await bsky.findProfile(handle, domain, httpCfg, { surfaces, known, bcfg });

  /* Every candidate that answered gets a check row, including the one we
     refused to claim. "There is a profile at their name and it is not theirs"
     is a finding, and burying it would leave the next reader to rediscover the
     squatter by hand. */
  for (const t of tried) {
    record(creatorId, 'sweep', {
      key: `check.bluesky.${t.actor}`,
      value: t.ok ? (t.exists ? (t.owner && t.owner.verdict === 'theirs' ? 'theirs' : 'someone else') : 'absent') : 'unread',
      source_url: t.url || null,
      http_status: t.status,
      engine: 'http',
      verification_state: null,
      evidence: `${t.kind} — ${(t.owner && t.owner.why) || t.why}`,
    });
  }

  if (!found) {
    /* A profile sitting at their name that we could not tie to them. It is not
       theirs and it is not nothing, and the surface must say the first without
       implying the second. */
    if (undecided) {
      log(`sweep · bluesky · a profile at ${undecided.actor} we could not tie to them — ${undecided.owner.why}`);
      if (surface) Object.assign(surface, { confirmed: false, read: false, url: undecided.url, why: undecided.owner.why });
      record(creatorId, 'sweep', {
        key: 'surface.bluesky_profile',
        value: null,
        source_url: undecided.url,
        http_status: 200,
        engine: 'http',
        // Not absent — somebody is there. Not present — it is not them.
        verification_state: 'not_found',
        evidence: `there is a Bluesky profile at ${undecided.actor} and ${undecided.owner.why}`,
      });
      return { ok: true, exists: false, why: `the only Bluesky profile at their name could not be tied to them — ${undecided.owner.why}` };
    }
    const why = tried.length
      ? tried.map((t) => `${t.actor}: ${t.why}`).join('; ')
      : 'there was no handle worth trying';
    log(`sweep · bluesky · ${why}`);
    return { ok: true, exists: false, why };
  }

  const prof = found;
  const actor = found.actor;

  /* The account list on the report is clickable, and the identity probe's URL
     is an XRPC endpoint — a reader who clicked the Bluesky chip got a page of
     JSON. The surface always points at the profile a person can open. */
  if (surface) surface.url = prof.url;

  /* The identity probe only ever asked {handle}.bsky.social, so for a creator
     found at their own domain it answered a narrower question than the report
     asks. The log is append-only and project() takes the newest row per key,
     so the correction is written rather than the earlier row edited — both
     readings stay visible, which is what makes the record worth keeping. */
  if (surface) {
    Object.assign(surface, {
      read: true,
      confirmed: true,
      status: 200,
      url: prof.url,
      platform: 'Bluesky',
      displayName: prof.profile.displayName || surface.displayName,
      followers: prof.profile.followers,
      posts: prof.profile.posts,
      bio: prof.profile.bio || surface.bio,
      avatar: prof.profile.avatar ? { url: prof.profile.avatar, expires: null, host: 'bsky.app' } : surface.avatar,
      links: surface.links || [],
      why: prof.owner.why,
    });
  }

  /* WRITTEN EVERY TIME, not only when the domain won. project() rebuilds every
     surface from this log and takes `source_url` as the account's address, and
     the identity probe wrote an XRPC endpoint there — so a report built an hour
     later linked the Bluesky chip to a page of JSON no matter which handle
     turned out to be theirs. The row is cheap and the log is append-only. */
  record(creatorId, 'sweep', {
    key: 'surface.bluesky_profile',
    value: {
      followers: prof.profile.followers,
      posts: prof.profile.posts,
      avatar: (surface && surface.avatar) || null,
    },
    source_url: prof.url,
    http_status: 200,
    engine: 'http',
    verification_state: 'present',
    evidence: `${prof.profile.handle} — ${prof.owner.why}, and the AppView resolved it to ${prof.profile.did}`,
  });

  /* An account that has opted out of logged-out viewing still resolves here.
     Presence is settled; the posts are what go missing. Saying so is the
     difference between a creator who posts nothing and one we cannot read. */
  if (prof.profile.hidden) {
    log(`sweep · bluesky · ${prof.profile.handle} · the account is hidden from logged-out readers`);
    return {
      ok: true, exists: true, actor, profile: prof.profile, url: prof.url,
      cadence: { computable: false, why: 'their account is hidden from logged-out readers, so we could not read their posts' },
      samples: [], posts: [],
      why: 'the account is hidden from logged-out readers',
    };
  }

  const feed = await bsky.authorFeed(actor, httpCfg, bcfg, cfg.youtube);
  const own = bsky.ownPosts(feed.posts);
  const cad = bsky.cadence(feed, cfg.youtube);
  log(`sweep · bluesky · ${prof.profile.handle} · ${prof.profile.followers == null ? 'followers hidden' : prof.profile.followers.toLocaleString() + ' followers'} · ${feed.why} · cadence ${cad.computable ? cad.line : 'not readable — ' + cad.why}`);

  return {
    ok: true,
    exists: true,
    actor,
    url: prof.url,
    profile: prof.profile,
    feed,
    cadence: cad,
    samples: bsky.samples(feed, bcfg),
    /* Trimmed to what the demand read needs. The full walk can be 300 posts
       and Study only ever opens the handful that have replies on them. */
    posts: own.filter((p) => (p.replies || 0) > 0).map((p) => ({ uri: p.uri, handle: p.handle, replies: p.replies })),
    why: feed.why,
  };
}

/* ===========================================================================
   SAMPLES — what their work looks like.

   One shape for every source, because the report shows them in one list and a
   row that means something different depending on where it came from is a row
   the reader has to decode. Everything optional is explicitly null rather than
   missing: `metric: null` with a reason beside it is the difference between
   "no engagement figure exists at this door" and "we forgot to ask".
   =========================================================================== */
/* THE KEY IS THE POST, NOT THE PLATFORM.

   It was `sample.<platform>.<id>`, and renaming a platform label — which
   happened once during this build, when feed samples stopped being labelled
   with the publication's name — orphaned every row written under the old
   label. project.js takes the newest row per key, so the orphans never expired
   and the same three posts rendered twice under two names.

   A URL identifies a post independently of what we decided to call the place
   it came from, so a relabelling now rewrites the row it should rewrite. */
function sampleKey(s) {
  const basis = s.url || `${s.platform}:${s.id}`;
  return `sample.${String(basis).replace(/^https?:\/\//, '').replace(/[^a-z0-9]+/gi, '_').slice(0, 80).toLowerCase()}`;
}

/* Returns the value it wrote, so a caller can hold the same objects the log
   now has without re-reading them. The verdict line needs every sample —
   uploads, feed posts and harvested TikToks alike — and before this only the
   harvested ones were ever collected in memory. */
function sampleRow(creatorId, pass, s) {
  const value = {
    platform: s.platform,
    publication: s.publication || null,
    kind: s.kind,
    title: s.title || null,
    url: s.url || null,
    at: s.at || null,
    thumbnail: s.thumbnail || null,
    excerpt: s.excerpt || null,
    metric: s.metric == null ? null : s.metric,
    metricUnit: s.metricUnit || null,
    metricWhy: s.metric == null ? (s.metricWhy || null) : null,
    foundIn: s.foundIn || null,
  };

  record(creatorId, pass, {
    key: sampleKey(s),
    value,
    source_url: s.url || null,
    engine: 'http',
    // A sample is what somebody published. It says nothing about whether
    // anything else exists, so it never carries a verification state.
    verification_state: null,
    evidence: `${s.platform} · ${s.title ? `"${String(s.title).slice(0, 110)}"` : 'untitled'}${s.at ? ` · ${String(s.at).slice(0, 10)}` : ''}`,
  });

  return value;
}

/** Keep the model input inside a known size. Said out loud when it bites,
 *  because a silent cap reads on the report as "we looked at everything". */
function budget(lines, maxChars, log) {
  const kept = [];
  let used = 0;
  for (const l of lines) {
    if (used + l.length > maxChars) break;
    kept.push(l);
    used += l.length + 1;
  }
  if (kept.length < lines.length) {
    log(`study · trimmed to ${kept.length} of ${lines.length} lines — ${maxChars} characters is the budget for one classify call`);
  }
  return kept;
}

/** URLs a creator typed into their own video descriptions. Noise-filtered by
 *  the same list the HTML extractor uses, so YouTube's own plumbing does not
 *  come back looking like something they published. */
function harvestLinks(descriptions) {
  const found = [];
  for (const d of descriptions) {
    for (const m of String(d).matchAll(/https?:\/\/[a-z0-9.-]+\.[a-z]{2,}(?:\/[^\s"'<>)\]]{0,160})?/gi)) {
      found.push(normalizeLink(m[0]));
    }
  }
  const seen = new Set();
  const out = [];
  for (const l of found) {
    let host;
    try { host = new URL(l).hostname; } catch { continue; }
    if (seen.has(l) || /(^|\.)(google|gstatic|googleapis|youtube|youtu\.be|ytimg|schema\.org|w3\.org|fonts\.|cdn\.)/i.test(host)) continue;
    seen.add(l);
    out.push(l);
  }
  return out.slice(0, 60);
}

/* ===========================================================================
   PASS 1 — SWEEP
   =========================================================================== */
async function sweep(handle, cfg, log) {
  const creatorId = handle.toLowerCase();
  const httpCfg = { ...cfg.http, pass: 'sweep' };
  const urls = PROBES.identity.map((p) => ({ url: fill(p.url, { handle }), maxBodyBytes: p.maxBodyBytes }));
  log(`sweep · reading ${urls.length} of their own pages`);

  // The API read is independent of the page reads, so it runs alongside them
  // rather than after — and its answers are folded into the YouTube surface
  // below rather than arriving as a separate platform nobody asked about.
  const [responses, ytInfo] = await Promise.all([
    getAll(urls, httpCfg),
    readYouTube(creatorId, handle, cfg, log),
  ]);
  const surfaces = [];

  PROBES.identity.forEach((place, i) => {
    const res = responses[i];
    const outcome = resolvePlace(place, res);
    const data = res.body ? extract(place.extract, res.body) : null;
    const d = data || {};

    // Q6 — the API's answer for this surface, where there is one. A keyed
    // lookup that resolves @handle → channel through a documented endpoint is
    // a stronger statement of "this exists and it is theirs" than a 200 from
    // an HTML page, and it keeps working on the days YouTube rate-limits the
    // page. So the API wins on identity and on the numbers; the HTML page is
    // still read, because captions only come from there.
    const api = place.id === 'youtube_profile' && ytInfo && ytInfo.exists ? ytInfo.channel : null;

    const read = !!api || outcome.outcome === 'hit' || (place.neverConclusive && res.status === 200 && !!data);
    // READ is not THEIRS. A neverConclusive surface (Instagram) can be read for
    // links and can never confirm identity, so it may neither corroborate a hit
    // (Q9d) nor join an audience total (Q11b).
    const confirmed = !!api || outcome.outcome === 'hit';

    const followers = api && api.subscribers != null ? api.subscribers : d.followers;
    const posts = api && api.videoCount != null ? api.videoCount : d.posts;

    record(creatorId, 'sweep', {
      key: `surface.${place.id}`,
      // The avatar goes into the LOG, not just the in-memory surface, because
      // project() rebuilds every report from the log and anything not written
      // here does not exist an hour later. It is stored as the URL plus its
      // expiry — §6.12 forbids copying the image, so the link is all there is,
      // and a link with a known death date is the only honest way to hold one.
      value: read ? { followers, posts, avatar: (d.avatar || null) } : null,
      source_url: res.url,
      http_status: res.status,
      engine: 'http',
      verification_state: place.neverConclusive ? null
        : api ? 'present'
        : outcome.outcome === 'hit' ? 'present'
        : outcome.outcome === 'miss' ? 'verified_absent' : 'not_found',
      evidence: api
        ? `${api.title} — the YouTube Data API resolved ${api.customUrl || api.channelId}${api.subscribersHidden ? ', subscriber count hidden by the channel' : ''}`
        : outcome.why,
    });

    surfaces.push({
      id: place.id,
      platform: d.platform || place.label,
      read,
      confirmed,
      status: res.status,
      url: res.url,
      displayName: (api && api.title) || d.displayName,
      // §6.12 / decision 117. Only ever taken from a surface we actually READ,
      // so the face and the evidence come from the same place — an avatar
      // scraped off a guessed URL would be a picture of somebody we never
      // confirmed is them, which is the mkbhd.substack.com failure with a
      // human face on it. Carries its own expiry; see avatarFrom in extract.js.
      avatar: read ? (d.avatar || null) : null,
      followers,
      posts,
      bio: (api && api.description) || d.bio,
      /* Only Bluesky sets these, and only so readBluesky can reuse this
         response instead of fetching the same profile a second time. */
      did: d.did || null,
      labels: d.labels || null,
      links: d.links || [],
      // Links they typed into their own video descriptions. Merge-only — see
      // the footnote on linksTo for why they are not in `links`.
      mentionLinks: api ? (ytInfo.mentionLinks || []) : [],
      captions: d.captions || [],
      why: api ? `resolved through the YouTube Data API` : outcome.why,
    });
  });

  // Their own link hubs, if they publish one.
  const hubUrls = PROBES.linkHubs.map((h) => fill(h.url, { handle }));
  const hubRes = await getAll(hubUrls, httpCfg);
  PROBES.linkHubs.forEach((hub, i) => {
    const res = hubRes[i];
    if (res.status !== 200) return;
    const data = extract(hub.extract, res.body);
    if (!data) return;
    surfaces.push({ id: hub.id, platform: 'Link hub', read: true, confirmed: false, status: 200, url: res.url, links: data.links, captions: [], bio: data.bio, why: 'their own links page' });
    record(creatorId, 'sweep', {
      key: `surface.${hub.id}`, value: { links: data.links.length }, source_url: res.url,
      http_status: 200, engine: 'http', verification_state: 'present', evidence: 'link hub read',
    });
  });

  /* Bluesky runs here — after the link harvest that its second guess depends
     on, and before the audience merge, which it may join. See readBluesky. */
  const bs = await readBluesky(creatorId, handle, surfaces, cfg, log);

  const readSurfaces = surfaces.filter((s) => s.read);
  const displayName = readSurfaces.map((s) => s.displayName).find(Boolean) || null;
  const links = [...new Set(readSurfaces.flatMap((s) => s.links))];

  const merged = mergeAudience(readSurfaces);
  const audience = merged.total;
  const shortForm = merged.counted
    .filter((s) => s.platform === 'TikTok' || s.platform === 'Instagram profile')
    .reduce((n, s) => n + (s.followers || 0), 0);

  record(creatorId, 'sweep', { key: 'audience.total', value: audience, engine: 'rule', evidence: merged.why });
  // Carried as its own row so the projection uses the MERGED short-form figure
  // rather than re-adding platforms this rule just refused to add (§5.2 pays 14
  // points for a missing YouTube against a large short-form audience, so an
  // unmerged total leaking in here would buy points with an assumption).
  record(creatorId, 'sweep', {
    key: 'audience.shortform', value: shortForm, engine: 'rule',
    evidence: merged.counted.filter((s) => /TikTok|Instagram/.test(s.platform)).map((s) => `${s.platform}:${s.followers || '?'}`).join(', ') || 'no short-form platform in the counted total',
  });
  for (const s of merged.separate) {
    record(creatorId, 'sweep', {
      key: `audience.separate.${s.id}`, value: s.followers, source_url: s.url,
      engine: 'rule', evidence: s.why,
    });
  }

  /* Q6 — cadence, written down as its own row rather than carried in memory.
     Pressure is recomputed from the log every time a report is built (§10.1),
     so the rewind stays honest in both directions: a report projected at a date
     before this row existed finds no cadence, prints a ceiling of 22 of 40, and
     names the reason — which is precisely what was true that day. */
  const ytCadence = (ytInfo && ytInfo.ok && ytInfo.exists && ytInfo.cadence)
    ? ytInfo.cadence
    : { computable: false, why: (ytInfo && ytInfo.why) || 'there is no YouTube channel we could read' };
  const bsCadence = (bs && bs.ok && bs.exists && bs.cadence) ? bs.cadence : null;

  /* TWO SOURCES, ONE LINE, AND YOUTUBE GOES FIRST — not because it is better
     liked but because it hands over a complete upload history where Bluesky
     hands over as much as maxFeedPages reaches. Both run through the same
     arithmetic against the same thresholds (yt.cadence), so the number means
     the same thing either way and the only question is which sample is deeper.

     This is the 22-of-40 Pressure ceiling coming off for creators with no
     YouTube — the ceiling exists because posting rate was unreadable, and for
     anyone who posts on Bluesky it is now readable. When neither can be read
     the report gets BOTH reasons, because "no YouTube channel" on its own
     stopped being the whole story the moment a second source existed. */
  const cadence = ytCadence.computable ? ytCadence
    : bsCadence && bsCadence.computable ? bsCadence
    : bsCadence ? { computable: false, why: `${ytCadence.why}, and ${bsCadence.why}` }
    : ytCadence;
  const cadenceFrom = cadence === bsCadence ? 'bluesky' : 'youtube';

  /* Their most recent uploads, as samples. The thumbnail is YouTube's own
     documented static address for a video id — no API call, no quota, and
     nothing copied: §6.12 forbids holding the image, so this is a link like
     every other. */
  if (ytInfo && ytInfo.ok && ytInfo.exists && (ytInfo.videos || []).length) {
    for (const v of ytInfo.videos) {
      sampleRow(creatorId, 'sweep', {
        platform: 'YouTube',
        kind: 'video',
        id: v.id,
        title: v.title,
        url: `https://www.youtube.com/watch?v=${v.id}`,
        at: v.publishedAt,
        thumbnail: `https://i.ytimg.com/vi/${v.id}/hqdefault.jpg`,
        metric: v.views == null ? null : v.views,
        metricUnit: 'views',
        metricWhy: 'this channel hides its view counts',
        foundIn: 'the YouTube Data API',
      });
    }
  }

  /* Their most recent Bluesky posts. Same sample shape as everything else, and
     the second source in the engine that may honestly print an engagement
     figure — the AppView returns a like count, where TikTok's oEmbed returns
     none and harvest.js has to say so. */
  if (bs && bs.ok && bs.exists) {
    for (const s of bs.samples) sampleRow(creatorId, 'sweep', s);
  }

  record(creatorId, 'sweep', {
    key: 'pressure.cadence',
    value: cadence.computable ? cadence : null,
    source_url: cadenceFrom === 'bluesky'
      ? (bs && bs.url) || null
      : (ytInfo && ytInfo.channel && ytInfo.channel.url) || null,
    engine: 'rule',
    verification_state: null,
    evidence: cadence.computable ? cadence.line : cadence.why,
  });

  return {
    creatorId, handle, displayName, surfaces, links,
    audience, shortFormAudience: shortForm, audienceSeparate: merged.separate,
    firstPartyRead: readSurfaces.length > 0,
    nameNeedle: displayName || handle,
    cadence,
    youtube: ytInfo && ytInfo.exists
      ? { channelId: ytInfo.channel.channelId, videoIds: ytInfo.videoIds || [] }
      : null,
    /* Carried for the demand read in Study. Only the posts that HAVE replies
       come through, because those are the only ones Study would open. */
    bluesky: bs && bs.ok && bs.exists
      ? { did: bs.profile.did, handle: bs.profile.handle, url: bs.url, posts: bs.posts || [] }
      : null,
    blueskyWhy: bs ? bs.why : null,
  };
}

/* ===========================================================================
   READING WHAT A HIT ACTUALLY PUBLISHES — 10 August 2026.

   Three of the eleven inventory items are things that publish a feed, and
   until now the engine stopped at their front door: it could tell you a
   Substack existed and nothing whatever about it.

   WHAT THE READ IS ALLOWED TO DO, in order of how much it changes.

   1. DISOWN A GUESS. This is the one that removes a wrong answer rather than
      adding a right one. mkbhd.substack.com returns 200 with every Substack
      signature and belongs to somebody called Bharath — verified 10 Aug 2026,
      and it is the exact case resolve.js:282 was written about. A guessed hit
      whose masthead names a different person is not a hit. It becomes a miss,
      and absence is then earned by the ordinary rules with one more real
      answer in hand.

      Only a GUESS can be disowned. A first-party hit is a page they publish;
      whatever its feed is titled, the page is still theirs.

   2. CORROBORATE. score.js:194 keeps an uncorroborated hit out of the resolved
      count. A masthead that names them settles it, from the thing itself.

   3. SUPPLY SAMPLES AND A POSTING RATE. Neither touches verification.

   AND WHAT IT MAY NEVER DO: WRITE ABSENCE. A feed that 404s means there is no
   RSS at that address, not that there is no newsletter — plenty of live
   publications expose none. Absence is the probe layer's decision across five
   or six places under rules written for it, and this is not a vote in it.
   =========================================================================== */
const FEED_BEARING = {
  newsletter: 'newsletter',
  podcast: 'podcast',
  website: 'site',
};

async function readItemFeed(job, resolvedPlaces, dossier, cfg, log) {
  const kind = FEED_BEARING[job.item.item];
  if (!kind) return null;

  const hit = resolvedPlaces.find((p) => p.outcome === 'hit' && p.kind === 'first_party')
    || resolvedPlaces.find((p) => p.outcome === 'hit');
  if (!hit) return null;

  /* Apple hands the show's own RSS address back in the search response we
     already made and already parsed (resolve.js). Everywhere else the feed
     hangs off the origin the probe landed on. */
  const candidates = hit.feedUrl
    ? [{ url: hit.feedUrl, platform: 'podcast', kind: 'derived' }]
    : feeds.fromHit(hit.final_url || hit.url);
  if (!candidates.length) return null;

  const needles = [dossier.handle, dossier.displayName, dossier.nameNeedle].filter(Boolean);
  const { found, tried } = await feeds.firstFeed(candidates, { ...cfg.http, pass: 'probe' }, needles);

  /* An empty feed still has a masthead, and the masthead is the whole point of
     the disown path — so a read that found no posts is still a read. */
  const read = found || tried.find((t) => t.ok && t.owner) || null;
  if (!read) return { kind, tried, feed: null };

  const owner = read.owner || { verdict: 'undecided', why: 'nothing to match against' };
  const disown = owner.verdict === 'someone_else' && hit.kind === 'guess';

  if (disown) {
    log(`probe · ${job.item.item} · disowned — ${owner.why}`);
    hit.outcome = 'miss';
    hit.why = `${hit.why} — but ${owner.why}`;
    hit.disownedBy = read.url;
  } else if (owner.verdict === 'theirs') {
    log(`probe · ${job.item.item} · ${read.items.length} post${read.items.length === 1 ? '' : 's'} read · ${owner.why}`);
  }

  return {
    kind,
    tried,
    feed: read,
    owner,
    disowned: disown,
    feedOwned: owner.verdict === 'theirs' && !disown ? owner : null,
    items: read.items || [],
  };
}

/* ===========================================================================
   PASS 2 — PROBE. Where verified absent is earned.
   =========================================================================== */
async function probe(dossier, cfg, log, extraPlaces = []) {
  const httpCfg = { ...cfg.http, pass: 'probe' };
  const handle = dossier.handle;
  const inventory = [];
  const feedReads = [];
  /* Every sample written this pass, in memory, for the verdict line. */
  const written = [];

  const jobs = [];
  for (const item of PROBES.inventory) {
    const places = (item.places || []).map((p) => ({ ...p }));
    for (const ex of extraPlaces.filter((e) => e.item === item.item)) {
      let host;
      try { host = new URL(ex.url).hostname; } catch {
        // Q21 counts this rather than crashing on it: a proposal that is not a
        // URL is a miss of a different kind, and the hit-rate table should say
        // so. Before this, one malformed string killed the whole probe.
        record(dossier.creatorId, 'probe', {
          key: `proposal.${item.item}`, value: 'unusable', engine: 'http',
          evidence: `the model proposed "${String(ex.url).slice(0, 120)}", which is not a URL — ${ex.why || 'no reason given'}`,
        });
        continue;
      }
      places.push({
        id: `proposed_${places.length}`,
        label: `${host} (proposed)`,
        kind: 'guess',
        url: ex.url,
        proposed: true,
        proposedWhy: ex.why || null,
        absent: { status: [404, 410, 0] },
        present: { status: [200], bodyAny: ['<html', '<HTML', '{'] },
      });
    }
    jobs.push({ item, places });
  }

  const flat = [];
  for (const job of jobs) {
    for (const p of job.places) {
      if (p.matcher) continue;
      flat.push({ job, place: p, url: fill(p.url, { handle, nameNeedle: dossier.nameNeedle }), maxBodyBytes: p.maxBodyBytes });
    }
  }
  log(`probe · checking ${flat.length} places across ${jobs.length} pieces of inventory`);

  /* Q5 — their own site is read alongside the platform guesses rather than
     after them. It is a different host, so it costs no politeness and no wall
     time; and it is the place most likely to hold the real answer, which makes
     it a poor thing to do last. */
  const [responses, ownSite] = await Promise.all([
    getAll(flat.map((f) => ({ url: f.url, maxBodyBytes: f.maxBodyBytes })), httpCfg),
    readOwnSite(dossier, cfg, log),
  ]);
  const byUrl = new Map(flat.map((f, i) => [f.url, responses[i]]));

  // The place only exists for a creator who publishes a site. Adding it as a
  // permanent inconclusive for everyone else would drag the reachability ratio
  // and make absence harder to earn for the people we have the least to say
  // about — a cost with no evidence behind it.
  if (!ownSite.site) {
    for (const job of jobs) job.places = job.places.filter((p) => !p.ownSite);
  }

  record(dossier.creatorId, 'probe', {
    key: 'site.own',
    value: ownSite.site ? ownSite.site.host : null,
    source_url: ownSite.site ? ownSite.site.origin : null,
    engine: 'rule',
    verification_state: null,
    evidence: ownSite.why,
  });
  (ownSite.pages || []).forEach((p, i) => {
    record(dossier.creatorId, 'probe', {
      key: `check.site.page${i}`,
      value: p.readable ? 'read' : 'unread',
      source_url: p.final_url || p.url,
      http_status: p.status,
      engine: 'http',
      verification_state: null,
      evidence: p.why,
    });
  });

  for (const job of jobs) {
    const resolvedPlaces = [];
    for (const p of job.places) {
      if (p.matcher) {
        const url = p.url ? fill(p.url, { handle, nameNeedle: dossier.nameNeedle }) : null;
        const res = url ? byUrl.get(url) || (await get(url, httpCfg)) : null;
        resolvedPlaces.push(resolvePlace(p, res, {
          surfaces: dossier.surfaces,
          response: res,
          nameNeedle: dossier.nameNeedle,
          nameNeedles: [dossier.handle, dossier.displayName],
          ownSite,
        }));
      } else {
        const url = fill(p.url, { handle, nameNeedle: dossier.nameNeedle });
        resolvedPlaces.push(resolvePlace(p, byUrl.get(url)));
      }
    }

    /* Read what the hit publishes before deciding what the hit means. This can
       turn a hit into a miss (see readItemFeed), so it has to run before the
       hit is picked up below — otherwise a disowned publication would still be
       sitting there as this item's answer. */
    const feedRead = await readItemFeed(job, resolvedPlaces, dossier, cfg, log);
    if (feedRead) {
      feedReads.push(feedRead);
      for (const t of feedRead.tried) {
        record(dossier.creatorId, 'probe', {
          key: `check.${job.item.item}.feed`,
          value: t.ok ? (t.items.length ? 'read' : 'empty') : 'unread',
          source_url: t.final_url || t.url,
          http_status: t.status,
          engine: 'http',
          // The wall: a feed read is evidence, never a verdict on existence.
          verification_state: null,
          evidence: t.why,
        });
      }
    }

    // Anything they link to themselves outranks anything we guessed.
    const declared = (job.item.signalsInLinks || []).length
      ? dossier.links.find((l) => job.item.signalsInLinks.some((sig) => l.toLowerCase().includes(sig)))
      : null;

    // Q9(d) — give a guessed hit one mechanical chance to prove it is theirs
    // before its doubt is allowed to block a gap. The page is already in hand
    // from the fetch above, so this costs nothing: no second request, no model.
    // Same preference resolveItem applies: a page they publish outranks a guess,
    // and a first-party hit needs no backlink to prove whose it is.
    const hit = resolvedPlaces.find((p) => p.outcome === 'hit' && p.kind === 'first_party')
      || resolvedPlaces.find((p) => p.outcome === 'hit');
    const backlink = (hit && hit.kind === 'guess' && !declared)
      ? findBacklink((byUrl.get(hit.url) || {}).body, dossier.surfaces)
      : null;

    const resolved = resolveItem(job.item, resolvedPlaces, {
      declaredLinkHit: declared,
      firstPartyRead: dossier.firstPartyRead,
      backlink,
      feedOwned: feedRead && feedRead.feedOwned,
    });
    // Carried so score.js can keep them out of the confidence denominator (Q1).
    resolved.presenceOnly = !!job.item.presenceOnly;
    resolved.requiresApi = !!job.item.requiresApi;
    inventory.push(resolved);

    record(dossier.creatorId, 'probe', {
      key: `inventory.${resolved.item}`,
      value: resolved.state,
      verification_state: resolved.state,
      engine: 'rule',
      source_url: resolved.evidence || null,
      evidence: resolved.why,
    });
    // Q10 — whether a present item is confirmed as THEIRS is a fact about the
    // check, and confidence is computed over it (score.js). It is not a
    // verification state, so it gets its own row rather than overloading one.
    if (resolved.state === 'present') {
      record(dossier.creatorId, 'probe', {
        key: `corroboration.${resolved.item}`,
        value: !!resolved.corroborated,
        source_url: backlink ? backlink.url : (declared || resolved.evidence || null),
        engine: 'rule',
        verification_state: null,
        evidence: resolved.corroborated
          ? `confirmed as theirs by ${resolved.corroboratedBy}`
          : 'nothing ties this to them beyond the name matching — it stays unconfirmed and it costs confidence',
      });
    }

    resolvedPlaces.forEach((pl, i) => {
      record(dossier.creatorId, 'probe', {
        key: `check.${resolved.item}.${pl.id}`,
        value: pl.outcome,
        source_url: pl.final_url || pl.url,
        http_status: pl.status,
        engine: 'http',
        verification_state: null,
        evidence: pl.why,
        advisory: pl.advisory,
      });

      // Q21 — the loop, instrumented for real (§5.6). Every URL the model
      // proposed is written down beside what was actually at it. A hit rate,
      // not a retraining set: a pattern that pays off is worth reusing, one
      // that 404s across fifty creators should be retired. `warhol proposals`.
      const src = job.places[i];
      if (src && src.proposed) {
        record(dossier.creatorId, 'probe', {
          key: `proposal.${resolved.item}`,
          value: pl.outcome,
          source_url: pl.final_url || pl.url,
          http_status: pl.status,
          engine: 'http',
          verification_state: null,
          evidence: `the model proposed this place — ${src.proposedWhy || 'no reason given'}`,
        });
      }
    });
  }

  // Abandonment markers — dead links they still publish. Rule, checkable today.
  let dead = [];
  if (dossier.links.length) {
    const linkRes = await getAll(dossier.links.slice(0, 15), httpCfg);
    dead = dossier.links.slice(0, 15)
      .map((l, i) => ({ url: l, status: linkRes[i].status }))
      .filter((x) => x.status === 404 || x.status === 410 || x.status === 0);
    for (const d of dead) {
      record(dossier.creatorId, 'probe', {
        key: 'pressure.abandonment', value: d.url, source_url: d.url,
        http_status: d.status, engine: 'rule',
        evidence: 'a link they still publish that no longer resolves — they tried, it broke',
      });
    }
  }

  /* CADENCE FROM A FEED, and only when there is no YouTube reading to prefer.

     Uploads win when both exist: the uploads walk holds a complete prefix of
     the history, a feed holds a recent window (feeds.js), so the YouTube
     figure is the better measurement of the same thing. Averaging the two, or
     letting the feed overwrite, would trade a measurement for a guess.

     Where there is no channel, this is the whole difference between a posting
     rate and the 22-of-40 ceiling. */
  const feedCadence = (() => {
    if (dossier.cadence && dossier.cadence.computable) return null;
    const owned = feedReads.filter((f) => f.feed && f.items.length && !f.disowned
      && f.owner && f.owner.verdict !== 'someone_else');
    if (!owned.length) return null;
    const best = owned.sort((a, b) => b.items.length - a.items.length)[0];
    const cad = feeds.cadenceFrom(best.items, cfg.youtube);
    return { ...cad, source: best.feed.url, kind: best.kind };
  })();

  if (feedCadence) {
    record(dossier.creatorId, 'probe', {
      key: 'pressure.cadence',
      value: feedCadence.computable ? feedCadence : null,
      source_url: feedCadence.source,
      engine: 'rule',
      verification_state: null,
      evidence: feedCadence.computable ? feedCadence.line : feedCadence.why,
    });
    log(`probe · posting rate from their ${feedCadence.kind} · ${feedCadence.computable ? feedCadence.line : 'not readable — ' + feedCadence.why}`);
  }

  /* ------------------------------------------------------------------ */
  /* WHAT THEIR WORK LOOKS LIKE — the samples.
     Every document scanned here was fetched for another reason and is already
     in memory. Discovery costs no request; only resolving a post does. */
  const sources = [
    { where: 'their own pages', text: (dossier.links || []).join('\n') },
    {
      where: 'a YouTube description',
      text: (dossier.surfaces || []).flatMap((s) => s.mentionLinks || []).join('\n'),
    },
    ...feedReads.filter((f) => f.feed && !f.disowned).map((f) => ({
      where: `their ${f.kind}`,
      text: (f.items || []).map((i) => `${i.link || ''}\n${i.text || ''}`).join('\n'),
    })),
  ];

  /* WRITTEN WORK IS A SAMPLE TOO, and for a writer it is the only one there
     is. Three posts per feed: enough to show range without turning the report
     into a reader. The excerpt is the opening of the piece, which is a better
     sample of somebody who writes than any thumbnail could be.

     No metric, and the reason is structural rather than incidental: RSS
     carries no engagement figure at all. */
  for (const f of feedReads.filter((x) => x.feed && !x.disowned && x.items.length)) {
    for (const it of f.items.filter((i) => i.text || i.title).slice(0, 3)) {
      written.push(sampleRow(dossier.creatorId, 'probe', {
        /* The PLATFORM names the door, the PUBLICATION names the thing behind
           it. Setting platform to the feed title put "Platformer" in a column
           that reads "YouTube" and "TikTok" on the rows above, so the one
           label that tells you what kind of work this is stopped doing it. */
        platform: f.kind === 'podcast' ? 'Podcast' : f.kind === 'site' ? 'Their site' : 'Newsletter',
        publication: f.feed.feed && f.feed.feed.title ? f.feed.feed.title : null,
        kind: f.kind === 'podcast' ? 'episode' : 'writing',
        id: (it.link || it.title || '').replace(/[^a-z0-9]+/gi, '').slice(-24) || String(f.items.indexOf(it)),
        title: it.title,
        url: it.link,
        at: it.at,
        thumbnail: null,
        excerpt: (it.text || '').slice(0, 300),
        metric: null,
        metricWhy: 'a feed carries no read or listen count',
        foundIn: `their ${f.kind}`,
      }));
    }
  }

  const found = harvest.harvest(sources, [dossier.handle, dossier.displayName].filter(Boolean));
  let samples = [];
  if (found.posts.length) {
    log(`probe · ${found.posts.length} of their own posts linked from pages we read${found.rejected ? ` · ${found.rejected} more belonged to somebody else` : ''}`);
    samples = await harvest.resolveAll(found.posts, httpCfg);
    for (const s of samples) {
      if (!s.ok) {
        /* A post we could not read is still part of the check record — an X
           link we declined to fetch is a fact about what we may look at, and
           deleting it would make the report look like they never linked one. */
        record(dossier.creatorId, 'probe', {
          key: `check.samples.${s.platform.toLowerCase()}_${s.id}`,
          value: s.declined ? 'declined' : 'unread',
          source_url: s.url,
          http_status: s.status || null,
          engine: 'http',
          verification_state: null,
          evidence: s.why,
        });
        continue;
      }
      written.push(sampleRow(dossier.creatorId, 'probe', {
        platform: s.platform,
        kind: 'post',
        id: s.id,
        title: s.caption,
        url: s.url,
        at: null,
        thumbnail: s.thumbnail,
        metric: null,
        metricWhy: s.metricWhy,
        foundIn: s.foundIn,
      }));
    }
  } else if (found.rejected) {
    log(`probe · ${found.rejected} linked post${found.rejected === 1 ? '' : 's'} belonged to somebody else — none of their own`);
  }

  /* WRITTEN WHETHER OR NOT ANYTHING WAS FOUND. §6.6 needs the empty case
     stated rather than inferred from a list of length zero, and the two
     silences are not the same sentence: a creator whose work we could not
     reach is a fact about our reach, and one whose linked posts all belonged
     to other people is a fact about what they link. */
  const feedSampleCount = feedReads
    .filter((x) => x.feed && !x.disowned && x.items.length)
    .reduce((n, f) => n + Math.min(3, f.items.filter((i) => i.text || i.title).length), 0);
  const harvested = samples.filter((s) => s.ok).length;
  const declined = samples.filter((s) => s.declined).length;

  record(dossier.creatorId, 'probe', {
    key: 'samples.searched',
    value: harvested + feedSampleCount,
    engine: 'rule',
    verification_state: null,
    evidence: (harvested + feedSampleCount)
      ? [
        feedSampleCount ? `${feedSampleCount} piece${feedSampleCount === 1 ? '' : 's'} of their own work` : '',
        harvested ? `${harvested} post${harvested === 1 ? '' : 's'} they linked from pages we read` : '',
      ].filter(Boolean).join(', ')
      : declined
        ? `the only posts they link are on X, and X asks software not to read them`
        : found.rejected
          ? `nothing of theirs — the ${found.rejected} post${found.rejected === 1 ? '' : 's'} linked from their pages belong to other people`
          : 'they link none of their own posts anywhere we can read',
  });

  return { inventory, deadLinks: dead, feedReads, feedCadence, samples, written };
}

/**
 * The spend rule. PRD §6.4 — the ladder decides when to escalate, and stopping
 * is a legitimate outcome with a sentence attached.
 */
function shouldStudy(dossier, probed, weights) {
  const absent = probed.inventory.filter((i) => i.state === 'verified_absent');
  const tier1Absent = absent.filter((i) => i.tier === 1);
  const present = probed.inventory.filter((i) => i.state === 'present' && i.tier === 1);

  if (!dossier.firstPartyRead) {
    return { go: false, why: "we couldn't read a single one of their own pages, so there is nothing solid to build on" };
  }
  if (!tier1Absent.length) {
    const names = present.map((i) => i.label.toLowerCase());
    const built = names.length > 1 ? `${names.slice(0, -1).join(', ')} and ${names[names.length - 1]}` : names[0];
    return {
      go: false,
      why: present.length
        ? `we looked in ${probed.inventory.reduce((n, i) => n + i.placesLooked, 0)} places — they already have a ${built}. We didn't go further.`
        : 'nothing in the top tier of the inventory came back as a verified gap, so there is no case to build.',
    };
  }
  return { go: true, why: `${tier1Absent.map((i) => i.label.toLowerCase()).join(', ')} — worth a closer look` };
}

/* ===========================================================================
   THE COMMENT SECTION — Q6, and §11.3's one clean source.

   TikTok is gated, Instagram is closed, Reddit is next. YouTube publishes a
   documented endpoint that hands over the text, so this is where Demand stops
   being a substitute (captions, i.e. the creator quoting their own demand) and
   becomes the thing itself: strangers, in their own words, asking to buy.

   It is read here, in Study, rather than in Sweep, because it is the one part
   of the API that costs real quota per creator — one unit per video — and the
   ladder exists so that we do not spend it on a creator whose top-tier
   inventory is already built (§6.4). By the time this runs, the escalation gate
   has already said this one is worth looking at properly.
   =========================================================================== */
async function readComments(dossier, cfg, log) {
  const texts = [];
  const said = [];        // one clause per source, for the aggregate row
  const unread = [];      // why a source gave us nothing — never the same sentence as "nothing there"
  let videosRead = 0;
  let skipped = [];

  /* ---- YouTube: the audience under their own work ---------------------- */
  if (!dossier.youtube || !dossier.youtube.videoIds.length) {
    unread.push('there is no YouTube channel here');
  } else {
    const r = await yt.comments(dossier.youtube.videoIds, dossier.youtube.channelId, cfg.youtube, 'study');
    const off = r.skipped.length ? ` · ${r.skipped.length} had comments turned off` : '';
    log(`study · comments · youtube · ${r.texts.length} from ${r.videosRead} recent video${r.videosRead === 1 ? '' : 's'}${off}`);
    texts.push(...r.texts);
    videosRead = r.videosRead;
    skipped = r.skipped;
    said.push(r.texts.length
      ? `${r.texts.length} top-level comments across ${r.videosRead} recent video${r.videosRead === 1 ? '' : 's'}, read through the YouTube Data API${off ? `,${off.replace(' · ', ' ')}` : ''}. The creator's own comments are excluded — demand means the audience asking`
      : `no YouTube comments could be read${off ? `,${off.replace(' · ', ' ')}` : ''}`);
  }

  /* ---- Reddit: what strangers say when the creator is not in the room ---
     Added 6 Aug 2026. This is the source that unblocks Demand for the 14 of 20
     who have no comment section at all. It is written as a SECOND source rather
     than a fallback on purpose — a creator with both gets both, because the two
     answer different questions: one is their audience, the other is everyone
     else. Every failure mode below lands in `unread`, never in a zero.
     Reddit's own note carries the attribution trap; the short-handle refusal
     comes back through `why` and is recorded as a reason we could not read. */
  const rcfg = cfg.reddit || {};
  if (!reddit.available()) {
    unread.push(`Reddit could not be read — ${reddit.reason()}`);
  } else {
    const rr = await reddit.mentions(dossier.handle, rcfg, 'study', dossier.aliases);
    if (!rr.ok) {
      log(`study · comments · reddit · not read — ${rr.why}`);
      unread.push(`Reddit could not be read — ${rr.why}`);
    } else {
      const dropped = rr.rejected ? ` · ${rr.rejected} of ${rr.postsFound} search hits were about someone else and were dropped` : '';
      log(`study · comments · reddit · ${rr.texts.length} from ${rr.threadsRead} thread${rr.threadsRead === 1 ? '' : 's'}${dropped}`);
      texts.push(...rr.texts);
      said.push(rr.texts.length
        ? `${rr.texts.length} Reddit comments across ${rr.threadsRead} thread${rr.threadsRead === 1 ? '' : 's'}${rr.subreddits.length ? ` in ${rr.subreddits.slice(0, 4).map((s) => `r/${s}`).join(', ')}` : ''}, each from a post whose title or body names them on a word boundary${dropped}`
        : `no Reddit thread named them${dropped}`);

      record(dossier.creatorId, 'study', {
        key: 'demand.reddit_read',
        value: rr.texts.length,
        source_url: rr.sources[0] || null,
        engine: 'http',
        verification_state: null,
        evidence: said[said.length - 1],
      });
    }
  }

  /* ---- Bluesky: replies under their own posts -------------------------
     Added 12 Aug 2026. Deliberately described as a comment section and not as
     a conversation. searchPosts answers 403 without a session, so there is no
     keyless route here to what strangers say when the creator is not in the
     room — Reddit remains the only source for that, and this must never be
     summarised as covering it. Their own replies are excluded, the same rule
     YouTube comments follow. */
  if (!dossier.bluesky) {
    unread.push(dossier.blueskyWhy || 'there is no Bluesky account here');
  } else if (!dossier.bluesky.posts.length) {
    said.push('nothing they posted on Bluesky has a reply on it');
  } else {
    const br = await bsky.replies(
      { posts: dossier.bluesky.posts },
      dossier.bluesky.did,
      { ...cfg.http, pass: 'study' },
      cfg.bluesky,
    );
    log(`study · comments · bluesky · ${br.texts.length} from ${br.readFrom} post${br.readFrom === 1 ? '' : 's'}`);
    texts.push(...br.texts);
    said.push(br.why);

    record(dossier.creatorId, 'study', {
      key: 'demand.bluesky_read',
      value: br.texts.length,
      source_url: br.sources[0] || dossier.bluesky.url,
      engine: 'http',
      verification_state: null,
      evidence: br.why,
    });
  }

  /* Task 4 — the aggregate row is written whatever happened, including when
     nothing could be read. It used to return without writing anything, and the
     missing row made the report say "we did not get as far as their comments"
     about a creator we got all the way to and found nothing readable for.
     §11.3 spends a paragraph on those two being different sentences; leaving
     the count unwritten collapsed them into the wrong one. Zero-with-a-reason
     is the honest row, and render.js already has a branch for it.

     `unread` is kept separate from `said` for the same reason one layer up: a
     source we could not open must never be summarised as a source that was
     empty. Both end up in the evidence, and they read differently. */
  const why = said.length
    ? said.join('. ') + (unread.length ? `. Not read: ${unread.join('; ')}` : '')
    : `no comment section anywhere would give us its text — TikTok is gated, Instagram is closed (§11.3)${unread.length ? `, and ${unread.join('; ')}` : ''}`;

  if (!said.length) log(`study · comments · ${why}`);

  record(dossier.creatorId, 'study', {
    key: 'demand.comments_read',
    value: texts.length,
    source_url: dossier.youtube && dossier.youtube.channelId
      ? `https://www.youtube.com/channel/${dossier.youtube.channelId}` : null,
    engine: 'http',
    verification_state: null,
    evidence: why,
  });

  return { ok: true, texts, videosRead, skipped };
}

/* ===========================================================================
   PASS 3 — STUDY. The model, on text we already fetched.
   =========================================================================== */
async function study(dossier, probed, brief, cfg, log) {
  // Q20, 6 Aug 2026 — a brief is required, and the requirement is enforced here
  // rather than described on the report. Fit is a GATE; a gate with three
  // values is not a gate, and `unknown` only ever existed because the CLI let
  // you leave the brief out. The house brief ("anyone worth a call", §6.1)
  // always exists in the real product, so there is no such creator — a missing
  // brief at this point is a caller bug and should read like one.
  if (!brief || !String(brief).trim()) {
    throw new Error('Study needs a brief. Every creator is judged against one — the house brief is "anyone worth a call" (§6.1).');
  }

  /* Q6 — the deterministic half of Study runs before the model is consulted,
     and whether or not there is one to consult. Reading the comment section is
     an HTTP fact; classifying what is in it is a judgment. §11.3 spends a
     paragraph on the difference between "we read 412 comments and none of them
     asked to buy" and "we could not read their comments", and the report cannot
     tell those apart unless the count is established on its own. */
  const audience = await readComments(dossier, cfg, log);

  const out = {
    available: llm.available(), ran: [], skipped: [],
    commentsRead: audience.texts.length, commentVideos: audience.videosRead,
  };
  if (!out.available) {
    out.why = llm.reason();
    log(`study · skipped — ${out.why}`);
    return out;
  }

  const captions = dossier.surfaces.flatMap((s) => s.captions || []);
  log(`study · ${audience.texts.length} comments and ${captions.length} lines of their own text`);

  /* DEMAND is the audience asking; STRAIN is the creator's own words. The two
     inputs stay separate on purpose. A comment reading "I'm so behind on
     watching these" is not a creator falling behind, and a caption reading
     "link in bio" is not a stranger asking where to buy. Merging the two piles
     would let each signal be sourced from the wrong mouth. */
  const demandText = budget([...audience.texts, ...captions], cfg.youtube.maxDemandChars, log);
  const demand = await llm.classifyDemand(demandText, cfg.llm);
  if (demand.ok) {
    out.demand = demand.signals;
    out.ran.push('demand');
    if (demand.fabricated && demand.fabricated.length) {
      out.fabricated = (out.fabricated || 0) + demand.fabricated.length;
    }
    for (const s of demand.signals) {
      record(dossier.creatorId, 'study', {
        key: 'demand.signal', value: s.points_at, engine: 'llm',
        verification_state: null, evidence: s.quote,
      });
    }
  } else { out.skipped.push(`demand (${demand.why})`); }

  // Captions only. See the note above — comments are other people's words.
  const strain = await llm.classifyStrain(captions, cfg.llm);
  if (strain.ok) {
    out.strain = strain.quotes;
    out.ran.push('strain');
    if (strain.fabricated && strain.fabricated.length) {
      out.fabricated = (out.fabricated || 0) + strain.fabricated.length;
    }
    for (const q of strain.quotes) {
      record(dossier.creatorId, 'study', {
        key: 'pressure.self_reported', value: q.reading, engine: 'llm',
        verification_state: null, evidence: q.quote,
      });
    }
  } else { out.skipped.push(`strain (${strain.why})`); }

  const fit = await llm.judgeFit(brief, dossier, cfg.llm);
  if (fit.ok) {
    out.fit = { verdict: fit.verdict, because: fit.because };
    out.distinctive = fit.distinctive;
    out.ran.push('fit');
    record(dossier.creatorId, 'study', {
      key: 'fit.verdict', value: fit.verdict, engine: 'llm',
      verification_state: null, evidence: fit.because,
    });
  } else { out.skipped.push(`fit (${fit.why})`); }

  /* THE VERDICT LINE, LAST — it reads everything the passes above settled,
     including the samples, so it cannot run before them.

     The failure branch is the point of it. When the model puts a number in the
     sentence that is not in the record, llm.js drops the whole line rather
     than repairing it, and the report falls back to the countable facts it has
     always assembled. A verdict line is the most prominent sentence on the
     page and the one nobody will check; a half-trusted one there is worse than
     none, and the fallback is honest and already written. */
  /* Read back out of the log rather than passed down, because the samples come
     from two different passes — uploads are written in Sweep, feed posts and
     harvested TikToks in Probe — and threading two collections through would
     be a second source of truth for a thing the log already holds. Everything
     is written by the time Study runs. */
  const samples = readObservations(dossier.creatorId, null)
    .filter((r) => r.key.startsWith('sample.') && r.value && r.value.title)
    .map((r) => r.value);

  const head = await llm.writeHeadline(dossier, probed, samples, cfg.llm);
  if (head.ok) {
    out.headline = head.sentence;
    out.ran.push('headline');
    record(dossier.creatorId, 'study', {
      key: 'creator.headline', value: head.sentence, engine: 'llm',
      // engine 'llm' — store.js makes this row structurally incapable of
      // carrying a verification state, which is the wall doing the work.
      verification_state: null,
      evidence: (head.restsOn || []).join(' · ') || 'written from the settled record',
    });
    log(`study · verdict line · "${head.sentence}"`);
  } else {
    out.skipped.push(`headline (${head.why})`);
    if (head.fabricated) log(`study · verdict line DROPPED — ${head.why}`);
  }

  return out;
}

module.exports = { sweep, probe, study, shouldStudy, mergeAudience, harvestLinks, PROBES };
