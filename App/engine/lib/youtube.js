'use strict';
/* ============================================================================
   THE YOUTUBE DATA API — Q6, 6 Aug 2026. One key, three things.

     1. COMMENTS       §11.3's clean source of demand. Text we fetched, handed
                       to the model to classify. The wall is unchanged.
     2. PUBLISH DATES  the only legitimate route to posting-frequency-over-time
                       on a FIRST look, and therefore the whole of cadence decay.
     3. VIEW COUNTS    evidence on the cadence line. Deliberately worth no
                       points — see the note above `cadence()`.

   WHY THIS FILE EXISTS AT ALL, rather than a fetch in passes.js. Checked on
   5 Aug: TikTok and YouTube both hydrate their video grids by XHR, so a static
   fetch of a profile page returns zero timestamps. There is no posting history
   in the HTML. The options were an official API or a headless browser, and
   §11.3 rules out the second — so this is not a convenience, it is the only
   door that is open.

   ---------------------------------------------------------------------------
   ROBOTS, AND WHY IT IS NOT CONSULTED HERE
   ---------------------------------------------------------------------------
   Every other fetch in this engine goes through lib/http.js and obeys
   robots.txt, because every other fetch is a crawler reading a page written
   for a person. This is not that. It is a keyed call against a documented,
   quota-metered API that Google publishes for exactly this purpose. robots.txt
   governs crawling; the politeness rule for an API is its quota, and we obey
   that instead — and count it, so `warhol cost` can show it.

   §11.3 says no scraping. Using the sanctioned API IS the form of that rule,
   not an exception to it.

   ---------------------------------------------------------------------------
   QUOTA — the real currency here, not dollars
   ---------------------------------------------------------------------------
   Free tier is 10,000 units/day. list calls are 1 unit each regardless of
   maxResults, so the cost of a creator is the number of PAGES, not the number
   of videos. A full sweep is at most 1 + 4 + 4 = 9 units; Study adds one per
   video whose comments we read. Every one is written through appendCost.
   ========================================================================== */

const { appendCost } = require('./store');

const BASE = 'https://www.googleapis.com/youtube/v3';

// Documented cost of each list call, in quota units. All 1; named rather than
// inlined so that the day someone adds `search.list` (100 units, 1% of the
// daily budget in a single call) the number is visible instead of assumed.
const QUOTA_UNITS = { channels: 1, playlistItems: 1, videos: 1, commentThreads: 1 };

let unavailableReason = null;

function available() {
  if (process.env.YOUTUBE_API_KEY) return true;
  unavailableReason = 'no YOUTUBE_API_KEY in the environment';
  return false;
}

function reason() { return unavailableReason; }

/**
 * One list call. Never throws — like lib/http.js, it always returns a record
 * of what happened, because a call that failed is part of the check record.
 */
async function call(resource, params, pass) {
  if (!available()) return { ok: false, why: reason(), items: [] };

  const url = new URL(`${BASE}/${resource}`);
  for (const [k, v] of Object.entries(params)) url.searchParams.set(k, v);
  url.searchParams.set('key', process.env.YOUTUBE_API_KEY);

  const units = QUOTA_UNITS[resource] || 1;
  const started = Date.now();
  try {
    const res = await fetch(url, {
      headers: { accept: 'application/json' },
      signal: AbortSignal.timeout(15000),
    });
    const text = await res.text();
    const ms = Date.now() - started;
    let body = {};
    try { body = JSON.parse(text); } catch { /* handled below */ }

    appendCost({
      kind: 'api', pass, host: 'youtube.googleapis.com', resource,
      units, status: res.status, bytes: text.length, ms,
      error: res.status === 200 ? undefined : apiError(body),
    });

    if (res.status !== 200) {
      return { ok: false, status: res.status, why: apiError(body) || `HTTP ${res.status}`, items: [] };
    }
    return { ok: true, status: 200, items: body.items || [], nextPageToken: body.nextPageToken, pageInfo: body.pageInfo, ms };
  } catch (e) {
    const ms = Date.now() - started;
    appendCost({ kind: 'api', pass, host: 'youtube.googleapis.com', resource, units, status: 0, error: e.name, ms });
    return { ok: false, status: 0, why: `${e.name}: ${e.message}`, items: [] };
  }
}

/** The reason string Google actually sends back, e.g. "commentsDisabled". */
function apiError(body) {
  const e = body && body.error;
  if (!e) return null;
  const first = (e.errors || [])[0];
  return (first && first.reason) || e.message || null;
}

/* ---------------------------------------------------------------------------
   1. WHO THIS IS

   `forHandle` resolves @handle → channel. Verified 2026-08-06: a handle that
   does not exist answers HTTP 200 with an EMPTY items array, not a 404. That
   is the opposite of Instagram's 200-for-everything problem rather than an
   instance of it — an empty result set from a documented API is a contractual
   "no such channel", where an Instagram 200 is an HTML page that declines to
   say. So this one CAN decide, and it says so in `exists`.
   ------------------------------------------------------------------------- */
async function channel(handle, pass) {
  const r = await call('channels', {
    part: 'snippet,statistics,contentDetails',
    forHandle: handle.startsWith('@') ? handle : `@${handle}`,
  }, pass);

  if (!r.ok) return { ok: false, why: r.why };
  if (!r.items.length) {
    return { ok: true, exists: false, why: 'the YouTube API has no channel at that handle' };
  }

  const c = r.items[0];
  const st = c.statistics || {};
  // hiddenSubscriberCount means the API reports 0, which is not a fact about
  // their audience. Nothing is better than a wrong zero.
  const hidden = st.hiddenSubscriberCount === true || st.hiddenSubscriberCount === 'true';

  return {
    ok: true,
    exists: true,
    channelId: c.id,
    title: (c.snippet && c.snippet.title) || null,
    description: (c.snippet && c.snippet.description) || null,
    customUrl: (c.snippet && c.snippet.customUrl) || null,
    startedAt: (c.snippet && c.snippet.publishedAt) || null,
    subscribers: hidden ? null : num(st.subscriberCount),
    subscribersHidden: hidden,
    videoCount: num(st.videoCount),
    totalViews: num(st.viewCount),
    uploadsPlaylist: c.contentDetails && c.contentDetails.relatedPlaylists && c.contentDetails.relatedPlaylists.uploads,
    url: c.snippet && c.snippet.customUrl ? `https://www.youtube.com/${c.snippet.customUrl}` : `https://www.youtube.com/channel/${c.id}`,
  };
}

/* ---------------------------------------------------------------------------
   2. WHAT THEY POSTED, AND WHEN

   Walks the uploads playlist newest-first and stops at whichever comes first:
   the far edge of the baseline window, or the page cap. Either way what we end
   up holding is a COMPLETE prefix — every upload from now back to the oldest
   one we saw, with nothing missing in the middle. cadence() depends on that
   and nothing else; it is why a truncated sample can still be read honestly
   instead of being thrown away.

   `contentDetails.videoPublishedAt` is when the video went public.
   `snippet.publishedAt` on a playlist item is when it was added to the
   playlist, which for an uploads playlist is nearly always the same and
   occasionally is not (a video made public long after upload). Prefer the
   first, fall back to the second, and sort — never trust the order.
   ------------------------------------------------------------------------- */
async function uploads(playlistId, cfg, pass) {
  if (!playlistId) return { ok: false, why: 'the channel has no uploads playlist', videos: [] };

  const videos = [];
  let pageToken = null;
  let pages = 0;
  let truncated = false;
  const horizonMs = Date.now() - cfg.baselineWindowDays * 86400000;

  while (pages < cfg.maxPages) {
    const params = { part: 'contentDetails', playlistId, maxResults: 50 };
    if (pageToken) params.pageToken = pageToken;
    const r = await call('playlistItems', params, pass);
    pages += 1;
    if (!r.ok) return { ok: false, why: r.why, videos, pages };

    for (const it of r.items) {
      const cd = it.contentDetails || {};
      videos.push({
        id: cd.videoId,
        publishedAt: cd.videoPublishedAt || (it.snippet && it.snippet.publishedAt) || null,
      });
    }

    pageToken = r.nextPageToken;
    if (!pageToken) break;                                   // whole channel read
    const oldest = videos[videos.length - 1];
    if (oldest && oldest.publishedAt && Date.parse(oldest.publishedAt) < horizonMs) break;   // past the window
    if (pages >= cfg.maxPages) truncated = true;
  }

  return { ok: true, videos: videos.filter((v) => v.id && v.publishedAt), pages, truncated };
}

/**
 * View counts, and — the part that turned out to matter for Q11(b) — the video
 * DESCRIPTIONS, which is where creators actually publish their other handles.
 * Same call, same quota unit: `part=snippet,statistics` costs exactly what
 * `part=statistics` costs.
 */
async function videoStats(ids, pass) {
  const out = new Map();
  for (let i = 0; i < ids.length; i += 50) {
    const batch = ids.slice(i, i + 50);
    const r = await call('videos', { part: 'snippet,statistics', id: batch.join(',') }, pass);
    if (!r.ok) return { ok: false, why: r.why, stats: out };
    for (const v of r.items) {
      out.set(v.id, {
        views: num(v.statistics && v.statistics.viewCount),
        comments: num(v.statistics && v.statistics.commentCount),
        title: v.snippet && v.snippet.title,
        description: (v.snippet && v.snippet.description) || '',
      });
    }
  }
  return { ok: true, stats: out };
}

/* ---------------------------------------------------------------------------
   3. WHAT THE AUDIENCE SAID

   Top-level comments on the most recent videos. §11.3 names YouTube as the one
   clean source for this and it is right: TikTok is gated, Instagram is closed,
   and this is a documented endpoint that hands over the text.

   The creator's OWN comments are dropped. Demand means the audience asking to
   buy; a creator replying "link in bio!" under their own video is the thing we
   are trying to detect the absence of, and counting it as demand would let a
   creator manufacture their own score.
   ------------------------------------------------------------------------- */
async function comments(videoIds, channelId, cfg, pass) {
  const texts = [];
  const skipped = [];
  let videosRead = 0;

  for (const id of videoIds.slice(0, cfg.commentVideos)) {
    const r = await call('commentThreads', {
      part: 'snippet', videoId: id, order: 'relevance',
      maxResults: Math.min(100, cfg.commentsPerVideo), textFormat: 'plainText',
    }, pass);

    // Comments off, or the video is private/removed. Both are ordinary and
    // neither is an error worth stopping for.
    if (!r.ok) { skipped.push({ id, why: r.why }); continue; }

    videosRead += 1;
    for (const t of r.items) {
      const s = t.snippet && t.snippet.topLevelComment && t.snippet.topLevelComment.snippet;
      if (!s) continue;
      const author = s.authorChannelId && s.authorChannelId.value;
      if (channelId && author === channelId) continue;         // their own words are not demand
      // Cut long. A comment can be 10,000 characters and purchase intent is
      // never one of the long ones; the cap is what keeps a paid call bounded.
      const text = (s.textOriginal || s.textDisplay || '').replace(/\s+/g, ' ').trim().slice(0, cfg.maxCommentChars);
      if (text) texts.push(text);
    }
  }

  return { ok: true, texts, videosRead, skipped };
}

/* ===========================================================================
   CADENCE DECAY — the arithmetic, and the honesty rule around it.

   Two rates, compared:

     recent    uploads per 30 days over the last `recentWindowDays`
     baseline  uploads per 30 days over the window before that

   The baseline window is [recentWindowDays, min(baselineWindowDays, oldest
   video we saw)]. Clamping to the oldest video is the whole trick: we hold a
   complete prefix of the uploads, so we know EXACTLY how many videos fall in
   any span inside it, and we never divide by a span we did not observe. A
   sample that does not reach back far enough returns computable:false with the
   reason, rather than a decline number computed against a window that is
   partly guesswork.

   WHY THIS IS NOT THE SAME AS TRAJECTORY, which still needs two looks.
   YouTube stamps every upload with the date it went public, so a creator's
   posting history is legible in a single visit — the change over time is
   already IN the data. Nobody stamps a follower count. That is the entire
   difference, and it is why cadence_decay can flip needsHistory to false and
   unanswered_audience cannot.

   VIEW COUNTS ARE EVIDENCE, NOT POINTS. Views move for reasons that have
   nothing to do with a creator's situation — an algorithm change, one video
   breaking out, a seasonal audience. Reading a decline in views as pressure
   would be inventing a story about a number, which is the failure §5.3 exists
   to prevent. They go on the line so a person can read them and judge.

   KNOWN LIMITATION, stated rather than fixed: the uploads playlist mixes
   Shorts with long-form. A creator who abandoned long-form but posts Shorts
   daily reads as healthy cadence. That direction of error under-scores rather
   than over-scores, which is the safe one here, so it is noted and left.
   =========================================================================== */
/* `unit` arrived 10 Aug 2026 with lib/feeds.js, which computes a writer's
   posting rate through this same function. The arithmetic was never
   YouTube-specific — it compares a recent rate against a baseline over dated
   things — but every sentence it wrote said "upload" and "videos", so a
   Substack came back reading "3 videos a month". One set of thresholds, one
   implementation, two nouns. Callers that pass nothing keep the old words. */
const UPLOADS = { noun: 'videos', verb: 'posted', singular: 'upload', whole: 'their whole channel is' };

function cadence(videos, sample, cfg, nowMs, unit) {
  const now = nowMs == null ? Date.now() : nowMs;
  const u = { ...UPLOADS, ...(unit || {}) };
  const no = (why) => ({ computable: false, why });

  const dated = videos
    .map((v) => ({ ...v, ageDays: (now - Date.parse(v.publishedAt)) / 86400000 }))
    .filter((v) => Number.isFinite(v.ageDays) && v.ageDays >= 0)
    .sort((a, b) => a.ageDays - b.ageDays);

  if (dated.length < cfg.minVideosInBaseline) {
    return no(`only ${dated.length} dated ${u.singular}${dated.length === 1 ? '' : 's'} came back — not enough to read a posting rate`);
  }

  const oldest = dated[dated.length - 1].ageDays;
  const baselineTo = Math.min(cfg.baselineWindowDays, oldest);
  const baselineSpan = baselineTo - cfg.recentWindowDays;

  if (baselineSpan < cfg.minBaselineSpanDays) {
    // Two different causes, and they deserve different sentences.
    const why = sample && sample.truncated
      ? `they post often enough that ${dated.length} ${u.noun} only reach back ${Math.round(oldest)} days — not far enough behind the last ${cfg.recentWindowDays} to compare against`
      /* Only a source that hands over a COMPLETE prefix may say this — it is a
         claim about the creator's whole history, not about our sample. The
         uploads walk qualifies; a feed never does, which is why lib/feeds.js
         marks itself truncated and never reaches this branch. */
      : `${u.whole} ${Math.round(oldest)} days old, so there is no earlier stretch to compare the last ${cfg.recentWindowDays} days against`;
    return no(why);
  }

  const recent = dated.filter((v) => v.ageDays < cfg.recentWindowDays);
  const before = dated.filter((v) => v.ageDays >= cfg.recentWindowDays && v.ageDays <= baselineTo);

  if (before.length < cfg.minVideosInBaseline) {
    return no(`only ${before.length} ${u.singular}${before.length === 1 ? '' : 's'} in the ${Math.round(baselineSpan)} days before that — too few to call it a rate`);
  }

  const recentPerMonth = (recent.length / cfg.recentWindowDays) * 30;
  const baselinePerMonth = (before.length / baselineSpan) * 30;
  const decline = 1 - recentPerMonth / baselinePerMonth;

  const recentViews = median(recent.map((v) => v.views).filter((n) => n != null));
  const beforeViews = median(before.map((v) => v.views).filter((n) => n != null));

  return {
    computable: true,
    decline: round(decline, 3),
    recentPerMonth: round(recentPerMonth, 2),
    baselinePerMonth: round(baselinePerMonth, 2),
    recentCount: recent.length,
    baselineCount: before.length,
    recentWindowDays: cfg.recentWindowDays,
    baselineSpanDays: Math.round(baselineSpan),
    sampled: dated.length,
    truncated: !!(sample && sample.truncated),
    recentMedianViews: recentViews,
    baselineMedianViews: beforeViews,
    unit: u.noun,
    line: cadenceLine(recentPerMonth, baselinePerMonth, decline, recentViews, beforeViews, cfg, u),
  };
}

function cadenceLine(recentRate, baseRate, decline, recentViews, baseViews, cfg, unit) {
  const u = { ...UPLOADS, ...(unit || {}) };
  const rate = (x) => (x >= 10 ? Math.round(x) : Math.round(x * 10) / 10);
  const pct = Math.abs(Math.round(decline * 100));

  let s;
  if (recentRate === 0) {
    s = `nothing ${u.verb} in ${cfg.recentWindowDays} days, after ${rate(baseRate)} a month before that`;
  } else if (decline > 0) {
    s = `${rate(recentRate)} ${u.noun} a month now, against ${rate(baseRate)} before that — down ${pct}%`;
  } else if (decline < -0.05) {
    s = `${rate(recentRate)} ${u.noun} a month now, against ${rate(baseRate)} before that — up ${pct}%, they are posting more`;
  } else {
    s = `${rate(recentRate)} ${u.noun} a month, steady against ${rate(baseRate)} before that`;
  }

  // Views ride along as context. They are never why the points moved.
  if (recentViews != null && baseViews != null && baseViews > 0) {
    const vd = Math.round((1 - recentViews / baseViews) * 100);
    if (Math.abs(vd) >= 15) {
      s += `; the recent ones are getting ${vd > 0 ? `${vd}% fewer` : `${Math.abs(vd)}% more`} views`;
    }
  }
  return s;
}

function median(xs) {
  if (!xs.length) return null;
  const s = [...xs].sort((a, b) => a - b);
  const m = Math.floor(s.length / 2);
  return s.length % 2 ? s[m] : Math.round((s[m - 1] + s[m]) / 2);
}

function num(x) { const n = Number(x); return Number.isFinite(n) ? n : null; }
function round(n, dp) { const f = 10 ** dp; return Math.round(n * f) / f; }

module.exports = { available, reason, channel, uploads, videoStats, comments, cadence, QUOTA_UNITS };
