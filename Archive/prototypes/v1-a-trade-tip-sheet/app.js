/* ==========================================================================
   WARHOL SCOUT — the trade tip sheet
   Classic script. No modules, no fetch, no build step. Runs from file://
   Reads window.WARHOL (never mutates it). Decisions live in a session overlay.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var META = W.meta;
  var STATES = META.states;

  // ------------------------------------------------------------- state
  var S = {
    view: 'drop',
    asOf: META.today,
    mandateId: 'm_food',
    candidateId: null,
    returnTo: 'drop',
    decisions: {},      // id -> { verb, reasonCode, label, suppression, at, by, trigger }
    revealed: {},       // id -> true
    passMenuFor: null,
    ran: false,
    runQuery: '',
    wireOpen: false,
    animate: true   // the press only runs off on a new issue/desk/section, not on a decision
  };

  var $ = function (id) { return document.getElementById(id); };
  var stage = $('stage');

  // ------------------------------------------------------------ helpers
  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }
  var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var DAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  function d(iso) { return new Date(iso.slice(0, 10) + 'T00:00:00'); }
  function shortDate(iso) { var x = d(iso); return x.getDate() + ' ' + MON[x.getMonth()] + ' ' + x.getFullYear(); }
  function longDate(iso) { var x = d(iso); return DAY[x.getDay()] + ' ' + x.getDate() + ' ' + MON[x.getMonth()].toUpperCase() + ' ' + x.getFullYear(); }
  function daysSince(iso, ref) { return Math.round((d(ref) - d(iso)) / 86400000); }
  function ageTag(iso) {
    var n = daysSince(iso, S.asOf);
    if (n < 0) return { txt: shortDate(iso), stale: false };
    if (n === 0) return { txt: 'today', stale: false };
    if (n === 1) return { txt: 'yesterday', stale: false };
    return { txt: n + 'd ago', stale: n > 14 };
  }
  function provDate(iso) {
    var a = ageTag(iso);
    return '<span class="' + (a.stale ? 'stale' : '') + '">' + esc(shortDate(iso)) + ' · ' + esc(a.txt) + (a.stale ? ' · stale' : '') + '</span>';
  }
  function pct(x) { return Math.round(x * 100) + '%'; }
  function conf2(x) { return (x >= 1 ? '1.00' : ('.' + String(Math.round(x * 100)).padStart(2, '0'))); }
  function kfollow(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(n >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return String(n);
  }
  function hexRGB(h) {
    h = h.replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function sub(list, key) { for (var i = 0; i < list.length; i++) if (list[i].key === key) return list[i]; return null; }
  function isBack() { return S.asOf !== META.today; }
  function mandate(id) { for (var i = 0; i < W.mandates.length; i++) if (W.mandates[i].id === id) return W.mandates[i]; return W.mandates[0]; }
  function firstNum(s) { var m = String(s).match(/[\d,]+/); return m ? m[0] : null; }

  // engine label ----------------------------------------------------------
  function engTag(engine) {
    var e = String(engine || '').toLowerCase();
    var llm = e.indexOf('llm') > -1;
    var txt = e.indexOf('llm') > -1 && e.indexOf('rule') > -1 ? 'rule + llm'
      : llm ? 'llm — judgment' : 'rule — counted';
    return '<span class="pv-eng' + (llm ? ' llm' : '') + '">' + esc(txt) + '</span>';
  }
  function engShort(engine) {
    var e = String(engine || '').toLowerCase();
    var llm = e.indexOf('llm') > -1, rule = e.indexOf('rule') > -1 || e.indexOf('map') > -1;
    return { llm: llm, txt: llm && rule ? 'Rule + LLM' : llm ? 'LLM' : 'Rule' };
  }

  // verification marks ----------------------------------------------------
  function markClass(state) {
    return state === STATES.PRESENT ? 'mk mk-present'
      : state === STATES.ABSENT ? 'mk mk-absent' : 'mk mk-unknown';
  }
  function stateWord(state) {
    return state === STATES.PRESENT ? 'present'
      : state === STATES.ABSENT ? 'verified absent' : 'not found';
  }
  function stateKey(state) {
    return state === STATES.PRESENT ? 'present' : state === STATES.ABSENT ? 'absent' : 'unknown';
  }
  function invTally(inv) {
    var t = { absent: 0, present: 0, unknown: 0, surfaces: 0, total: inv.length };
    inv.forEach(function (r) { t[stateKey(r.state)]++; t.surfaces += (r.surfacesChecked || 0); });
    return t;
  }

  // decisions -------------------------------------------------------------
  function decisionOf(c) {
    if (S.decisions[c.id]) return S.decisions[c.id];
    if (c.status === 'promoted' && c.promoted) return { verb: 'promoted', by: c.promoted.by, at: c.promoted.at };
    if (c.status === 'passed' && c.passed) {
      var r = reasonByCode(c.passed.reasonCode);
      return { verb: 'passed', reasonCode: c.passed.reasonCode, label: r ? r.label : c.passed.reasonCode, suppression: c.passed.suppression, by: c.passed.by, at: c.passed.at };
    }
    return null;
  }
  function reasonByCode(code) { for (var i = 0; i < W.passReasons.length; i++) if (W.passReasons[i].code === code) return W.passReasons[i]; return null; }

  function nextTrigger(c) {
    if (c.nextTrigger) return c.nextTrigger;
    var cov = c.pillars.gap.coverage;
    if (cov != null && cov < META.coverageGate) {
      return 'Resurfaces when Monetization Gap coverage reaches ' + pct(META.coverageGate) + ' — currently ' + pct(cov) + '.';
    }
    if (c.score < META.scoreThreshold) {
      return 'Resurfaces at Warhol Score ' + META.scoreThreshold + ' or above — currently ' + c.score + '.';
    }
    return 'Resurfaces on a new self-reported strain marker, or any change to the monetization inventory.';
  }

  // ---------------------------------------------------------------- data
  function dropList() { return W.drop(S.asOf, S.mandateId); }
  function liveDrop() {
    return dropList().filter(function (c) { return !S.decisions[c.id]; });
  }
  function watchlist() {
    var base = W.watchlist().slice();
    Object.keys(S.decisions).forEach(function (id) {
      if (S.decisions[id].verb === 'watched' && W.byId[id]) base.push(W.byId[id]);
    });
    return base.filter(function (c, i, a) { return a.indexOf(c) === i; });
  }
  function promotedList() {
    var base = W.byStatus('promoted').slice();
    Object.keys(S.decisions).forEach(function (id) {
      var c = W.byId[id] || (S.runResult && S.runResult.id === id ? S.runResult : null);
      if (S.decisions[id].verb === 'promoted' && c && base.indexOf(c) === -1) base.push(c);
    });
    return base;
  }
  function candidate(id) {
    if (S.runResult && S.runResult.id === id) return S.runResult;
    return W.byId[id];
  }

  /* ======================================================================
     CHROME
     ====================================================================== */

  function renderChrome() {
    document.getElementById('edition').className = 'edition' + (isBack() ? ' is-back' : '');
    document.body.className = isBack() ? 'is-back' : '';

    var m = mandate(S.mandateId);
    var todayDrop = W.drop(S.asOf, S.mandateId);
    var issueNo = isBack() ? 'No. 41' : 'No. 214';

    $('mastheadMid').innerHTML = isBack()
      ? '<div class="deckline">Back issue&nbsp; · &nbsp;<b>Nothing observed after this date is visible</b></div>'
      : '<div class="deckline">The morning shortlist for a desk that has to defend every name</div>';

    $('whoami').innerHTML = '<b>' + esc(W.user.name) + '</b>' + esc(W.user.role);

    $('issueline').innerHTML =
      '<span class="il-b">Vol. 1 &nbsp;' + esc(issueNo) + '</span>' +
      '<span class="il-b">' + esc(longDate(S.asOf)) + '</span>' +
      '<span>Desk: <span class="il-b">' + esc(m.name) + '</span></span>' +
      '<span>' + esc(m.platforms.join(' · ')) + '</span>' +
      '<span>' + esc(m.audienceBand) + ' · ' + esc(m.geo) + ' · ' + esc(m.language) + '</span>' +
      '<span>Owner <span class="il-b">' + esc(m.owner) + '</span></span>' +
      (isBack()
        ? '<span class="il-red">Rewound — as of ' + esc(shortDate(S.asOf)) + '</span>'
        : '<span>Generated <span class="il-b">06:00</span> · ' + todayDrop.length + ' above the line</span>');

    // desks + sections
    var back = isBack();
    function badge(n) {
      // Nothing observed after as_of is visible — including counts.
      if (back) return '<span class="tab-n is-zero" aria-hidden="true">&mdash;</span>';
      return '<span class="tab-n' + (n === 0 ? ' is-zero' : '') + '">' + n + '</span>';
    }
    var tabs = '';
    W.mandates.forEach(function (md) {
      var n = W.drop(S.asOf, md.id).length;
      var sel = (S.view === 'drop' || S.view === 'report') && S.mandateId === md.id;
      var short = md.name.split(' & ')[0].replace('Personal Finance', 'Finance');
      tabs += '<button class="tab" role="tab" aria-selected="' + (sel ? 'true' : 'false') + '"' +
        ' aria-label="' + esc(md.name) + ' desk — ' + n + ' in the drop" data-desk="' + md.id + '">' +
        esc(short) + '<span class="tab-n' + (n === 0 ? ' is-zero' : '') + '">' + n + '</span></button>';
    });
    tabs += '<button class="tab" role="tab" aria-selected="' + (S.view === 'watchlist' ? 'true' : 'false') +
      '" aria-label="Watchlist' + (back ? ' — not applicable in a back issue' : ' — ' + watchlist().length + ' names') +
      '" data-view="watchlist">Watchlist' + badge(watchlist().length) + '</button>';
    tabs += '<button class="tab" role="tab" aria-selected="' + (S.view === 'run' ? 'true' : 'false') + '" data-view="run">Run a name</button>';
    tabs += '<button class="tab" role="tab" aria-selected="' + (S.view === 'outreach' ? 'true' : 'false') +
      '" aria-label="Promoted' + (back ? ' — not applicable in a back issue' : ' — ' + promotedList().length + ' handed off') +
      '" data-view="outreach">Promoted' + badge(promotedList().length) + '</button>';
    $('railSections').innerHTML = tabs;

    var picks = '';
    META.availableDates.forEach(function (dt) {
      var kind = dt === META.today ? 'Current issue' : 'Back issue';
      picks += '<button class="issue-btn" data-date="' + dt + '" aria-pressed="' + (S.asOf === dt ? 'true' : 'false') +
        '" aria-label="' + kind + ', ' + esc(shortDate(dt)) + '">' +
        '<span class="ib-kind">' + (dt === META.today ? 'Current' : 'Back issue') + '</span>' +
        '<span class="ib-date">' + esc(shortDate(dt)) + '</span></button>';
    });
    $('issuePicker').innerHTML = picks;

    $('colThreshold').textContent = META.scoreThreshold;
    $('colCap').textContent = META.dropCap;
    $('colCoverage').textContent = pct(META.coverageGate);
  }

  /* ======================================================================
     SHARED FRAGMENTS
     ====================================================================== */

  function keyStrip() {
    return '<div class="key">' +
      '<span class="key-item"><span class="mk mk-absent"></span><b>Verified absent</b> — scores as a gap</span>' +
      '<span class="key-item"><span class="mk mk-present"></span>Present — no gap</span>' +
      '<span class="key-item"><span class="mk mk-unknown"></span>Not found — inconclusive, drags confidence</span>' +
      '<span class="key-item"><span class="mk mk-bullet"></span>Score rising since last run</span>' +
      '<span class="key-item"><b>RE</b> Re-entry, with its reason</span>' +
      '</div>';
  }

  function confBlock(c) {
    var ticks = '';
    var on = Math.round(c.confidence * 10);
    for (var i = 0; i < 10; i++) ticks += '<i class="' + (i < on ? 'on' : '') + '"></i>';
    return '<div class="conf">' +
      '<div class="conf-n">' + conf2(c.confidence) + '</div>' +
      '<div class="conf-l">Confidence</div>' +
      '<div class="ticks" aria-hidden="true">' + ticks + '</div>' +
      '<div class="conf-note">Checks resolved<br>not part of the score</div>' +
      '</div>';
  }

  function pillarsBlock(c, full) {
    var g = c.pillars.gap, st = c.pillars.strain, f = c.pillars.fit;
    var h = '<div class="pillars">';
    h += '<div class="pillar"><span class="pl-name">Monetization gap</span>' +
      '<span class="pl-val">' + g.score + '<span> / ' + g.max + '</span></span>' +
      '<span class="bar"><i style="width:' + (g.score / g.max * 100) + '%"></i></span>' +
      '<span class="pl-eng">' + esc(engShort(g.engine).txt) + ' · coverage ' + pct(g.coverage) + '</span></div>';
    h += '<div class="pillar"><span class="pl-name">Operator strain</span>' +
      '<span class="pl-val">' + st.score + '<span> / ' + st.max + '</span></span>' +
      '<span class="bar"><i style="width:' + (st.score / st.max * 100) + '%"></i></span>' +
      '<span class="pl-eng">' + esc(engShort(st.engine).txt) + ' · the timing trigger</span></div>';
    h += '</div><div class="sumrule"></div>';
    h += '<div class="gate"><div class="gate-l"><b>Format fit</b>Gate — contributes no points</div>' +
      '<span class="stamp' + (f.verdict === 'pass' ? '' : ' fail') + '">' + esc(f.verdict) + '</span></div>';
    return h;
  }

  function inventoryStrip(c) {
    var inv = c.inventory || [];
    if (!inv.length) {
      return '<div class="inv"><div class="inv-h"><span>Monetization inventory</span></div>' +
        '<div class="inv-more">Not resolved at this tier — the coverage gate is why this name is ranked where it is.</div></div>';
    }
    var t = invTally(inv);
    var show = inv.slice(0, 5);
    var h = '<div class="inv"><div class="inv-h"><span>Monetization inventory</span><em>' + t.surfaces + ' surfaces</em></div>';
    show.forEach(function (r) {
      h += '<div class="inv-row ' + stateKey(r.state) + '">' +
        '<span class="' + markClass(r.state) + '" aria-hidden="true"></span>' +
        '<span class="inv-item">' + esc(r.item) + '</span>' +
        '<span class="inv-state">' + esc(stateWord(r.state)) + ' · ' + (r.surfacesChecked || 0) + '</span></div>';
    });
    if (inv.length > show.length) h += '<div class="inv-more">+ ' + (inv.length - show.length) + ' more lines in the report</div>';
    h += '<div class="inv-more">' + t.absent + ' verified absent · ' + t.present + ' present · ' +
      (t.unknown ? '<b style="color:var(--red-deep)">' + t.unknown + ' not found</b>' : '0 not found') + '</div>';
    h += '</div>';
    return h;
  }

  function bestQuote(c) {
    var ev = c.evidence || [];
    var buy = ev.filter(function (e) { return e.kind === 'comment' && /intent/.test(e.label || ''); });
    if (buy.length) return buy[0];
    var com = ev.filter(function (e) { return e.kind === 'comment'; });
    if (com.length) return com[0];
    return ev[0] || null;
  }

  /* The timing half of the argument. The buy signal is quoted above it; this is
     the reason it is worth calling THIS quarter. Quoted where the creator said
     it themselves, stated as a counted fact where they did not. */
  function strainLine(c) {
    var said = (c.evidence || []).filter(function (e) {
      return e.kind === 'caption' && /capacity|appetite|unbuilt|strain/.test(e.label || '');
    })[0];
    var top = c.pillars.strain.subsignals.slice().sort(function (a, b) {
      return (b.weightPct || 0) - (a.weightPct || 0);
    })[0];

    var h = '<div class="strainline"><span class="sl-k">Strain</span><div class="sl-b">';
    if (said) {
      var a = ageTag(said.observedAt);
      h += '<p class="sl-q">&ldquo;' + esc(said.quote) + '&rdquo;</p>' +
        '<div class="sl-m"><span>' + esc(said.platform) + '</span>' +
        '<span class="' + (a.stale ? 'stale' : '') + '">' + esc(shortDate(said.observedAt)) + ' · ' + esc(a.txt) + (a.stale ? ' · stale' : '') + '</span>' +
        engTag(said.engine) +
        (top ? '<span>' + esc(top.label) + ': <b style="color:var(--ink-2)">' + esc(top.value) + '</b></span>' : '') +
        '</div>';
    } else if (top) {
      h += '<p class="sl-q sl-fact">' + esc(top.label) + ' &mdash; ' + esc(top.value) + '. ' + esc(top.detail) + '</p>' +
        '<div class="sl-m"><span>No creator statement sampled</span>' + engTag(top.engine) + '</div>';
    } else {
      h += '<p class="sl-q sl-fact">No strain markers observed.</p>';
    }
    return h + '</div></div>';
  }

  function quoteBox(c, q, compact) {
    if (!q) {
      var dm = sub(c.pillars.gap.subsignals, 'demand');
      return '<div class="quotebox"><div class="qb-label jud">Comment sampling not run at this tier</div>' +
        '<p class="qb-q">' + esc(dm ? dm.detail : 'No sampled evidence for this candidate.') + '</p>' +
        '<div class="qb-src"><span>Rule — counted</span><span>Sampling is a Tier-1 depth setting</span></div></div>';
    }
    var demand = /intent/.test(q.label || '');
    var a = ageTag(q.observedAt);
    var dm = sub(c.pillars.gap.subsignals, 'demand');
    var n = dm ? firstNum(dm.value) : null;
    var more = '';
    if (compact && n && demand) {
      var rest = parseInt(n.replace(/,/g, ''), 10) - 1;
      more = '<div class="qb-more">and <b>' + rest.toLocaleString('en-US') + '</b> more purchase-intent comments in ninety days — against <b>nothing to buy</b></div>';
    }
    return '<div class="quotebox' + (demand ? ' demand' : '') + '">' +
      '<div class="qb-label' + (demand ? '' : ' jud') + '"><span class="mk mk-bullet" aria-hidden="true"></span>' +
      esc(q.kind === 'comment' ? 'Audience — ' + (q.label || 'comment') : (q.label || q.kind)) + '</div>' +
      '<p class="qb-q">&ldquo;' + esc(q.quote) + '&rdquo;</p>' +
      '<div class="qb-src"><span>' + esc(q.platform) + '</span><span class="src-url">' + esc(q.url) + '</span>' +
      '<span class="' + (a.stale ? 'stale' : '') + '">' + esc(shortDate(q.observedAt)) + ' · ' + esc(a.txt) + (a.stale ? ' · stale' : '') + '</span>' +
      engTag(q.engine) + '</div>' + more + '</div>';
  }

  /* ======================================================================
     VIEW — TODAY'S DROP
     ====================================================================== */

  function viewDrop() {
    var m = mandate(S.mandateId);
    var list = dropList();
    var remaining = liveDrop().length;

    if (!list.length) return emptyIssue(m);

    var h = '';
    h += '<div class="flag"><div class="flag-l">' +
      '<h2 class="flag-title">' + (isBack() ? 'The drop, as it stood' : 'Today&rsquo;s drop') + '</h2>' +
      '<p class="flag-sub">' + esc(m.name) + ' &nbsp;·&nbsp; ranked by Warhol Score &nbsp;·&nbsp; threshold <b>' + META.scoreThreshold +
      '</b>, cap <b>' + META.dropCap + '</b>' + (isBack() ? ' &nbsp;·&nbsp; <b>every fact below was observed on or before ' + esc(shortDate(S.asOf)) + '</b>' : '') + '</p>' +
      '</div>' +
      '<div class="flag-count' + (remaining === 0 ? ' is-done' : '') + '"><span class="fc-n">' + remaining + '<span style="color:var(--ink-3);font-size:20px">/' + list.length + '</span></span>' +
      '<span class="fc-l">' + (remaining === 0 ? 'Worked to zero' : 'Left to work') + '</span></div></div>';
    h += '<div class="flag-rule"></div>';
    h += keyStrip();

    h += '<div class="chart">';
    list.forEach(function (c, i) { h += entryRow(c, i + 1); });
    h += '</div>';

    if (remaining === 0) {
      h += '<div class="zero"><h3>Drop worked to zero</h3>' +
        '<p>Every name on this desk has a decision against it, attributed to ' + esc(W.user.name) +
        '. Close Warhol. The next issue lands at 06:00.</p></div>';
    }
    return h;
  }

  function entryRow(c, pos) {
    var dec = S.decisions[c.id];
    if (dec) return decidedRow(c, dec);

    var q = bestQuote(c);
    var move = '';
    if (c.scoreDelta == null) {
      move = '<span class="rank-new">New entry</span>';
    } else if (c.scoreDelta > 0) {
      move = '<span class="rank-move up"><span class="mk mk-bullet" aria-hidden="true"></span>+' + c.scoreDelta + '</span>';
    } else {
      move = '<span class="rank-move flat"><span class="mk mk-bullet-down" aria-hidden="true"></span>' + c.scoreDelta + '</span>';
    }

    var flags = '';
    if (c.resurfaced) {
      flags += '<span class="pill red"><span class="pill-k">Re-entry</span>' + esc(c.resurfaced.reason) +
        ' &mdash; <i>' + esc(c.resurfaced.trigger) + '</i>' +
        (c.resurfaced.previousScore ? ' &nbsp;Was ' + c.resurfaced.previousScore + ', now ' + c.score + '.' : '') + '</span>';
    }
    if (c.alert) {
      flags += '<span class="pill red"><span class="pill-k">Acute · ' + esc(shortDate(c.alert.at)) + '</span>' + esc(c.alert.text) + '</span>';
    }

    var h = '<article class="entry' + (S.animate ? ' press' : '') + (c.alert ? ' is-alert' : '') +
      '" style="animation-delay:' + Math.min(pos * 26, 260) + 'ms">';
    h += '<div class="rank"><span class="rank-n">' + pos + '</span>' + move + '</div>';

    h += '<div class="ent-main">';
    h += '<h3 class="ent-name"><button data-report="' + c.id + '">' + esc(c.name) + '</button></h3>';
    h += '<div class="ent-meta"><span>' + esc(c.handle) + '</span><span><b>' + kfollow(c.audience.total) + '</b> across ' + c.platforms.length + '</span>' +
      '<span>+' + Math.round(c.audience.growth90d * 100) + '% / 90d</span><span>' + esc(c.primaryPlatform) + '</span></div>';
    h += '<p class="ent-dek">' + esc(c.headline) + '</p>';
    if (flags) h += '<div class="flagrow">' + flags + '</div>';
    h += '<div class="unit">' + quoteBox(c, q, true) + '</div>';
    h += strainLine(c);
    h += '<div class="pick"><span class="pick-k">Play</span><span class="pick-v">' + esc(c.play.label) + '</span></div>';
    h += '</div>';

    h += '<div class="app-rail">';
    h += '<div class="score-head"><div><div class="score-n">' + c.score + '<sub>/100</sub></div><div class="score-l">Warhol score</div></div>' + confBlock(c) + '</div>';
    h += pillarsBlock(c);
    h += inventoryStrip(c);
    h += '</div>';

    h += '<div class="acts">' +
      '<button class="btn primary" data-report="' + c.id + '">Open scout report</button>' +
      '<button class="btn" data-watch="' + c.id + '">Watch</button>' +
      '<span class="passwrap"><button class="btn ghost" data-passmenu="' + c.id + '" aria-expanded="' + (S.passMenuFor === c.id) + '">Pass &#9662;</button>' +
      (S.passMenuFor === c.id ? passMenu(c) : '') + '</span>' +
      '<span class="spacer"></span>' +
      '<span class="acts-note">Promote requires the report &nbsp;·&nbsp; every decision is attributed to ' + esc(W.user.initials) + '</span>' +
      '</div>';
    h += '</article>';
    return h;
  }

  function passMenu(c) {
    var h = '<div class="passmenu"><div class="passmenu-h">Pass with a reason<em>The reason is the suppression rule. It is also a training label.</em></div>';
    W.passReasons.forEach(function (r) {
      h += '<button data-pass="' + c.id + '" data-reason="' + r.code + '">' +
        '<span class="pm-label">' + esc(r.label) + '</span>' +
        '<span class="pm-rule">' + esc(r.suppression) + '</span></button>';
    });
    return h + '</div>';
  }

  function decidedRow(c, dec) {
    if (dec.verb === 'passed') {
      return '<div class="decided"><span class="dc-verb">Passed</span>' +
        '<span class="dc-name">' + esc(c.name) + '</span>' +
        '<span><b>' + esc(dec.label) + '</b></span>' +
        '<span class="dc-rule">Suppression: ' + esc(dec.suppression) + '</span>' +
        '<span class="dc-rule">' + esc(W.user.initials) + ' · ' + esc(shortDate(S.asOf)) + '</span>' +
        '<span class="spacer"></span><button class="linkbtn" data-undo="' + c.id + '">Undo</button></div>';
    }
    if (dec.verb === 'watched') {
      return '<div class="decided"><span class="dc-verb">Watched</span>' +
        '<span class="dc-name">' + esc(c.name) + '</span>' +
        '<span class="dc-rule">Watching for: ' + esc(dec.trigger) + '</span>' +
        '<span class="spacer"></span><button class="linkbtn" data-undo="' + c.id + '">Undo</button></div>';
    }
    return '<div class="decided promoted"><span class="dc-verb">Promoted</span>' +
      '<span class="dc-name">' + esc(c.name) + '</span>' +
      '<span class="dc-rule">Outreach package generated · record created in the Phase Two app</span>' +
      '<span class="spacer"></span><button class="linkbtn" data-outreach="' + c.id + '">Open package</button></div>';
  }

  /* ------------------------------------------------------- empty issue */

  function emptyIssue(m) {
    var other = null;
    W.mandates.forEach(function (md) { if (!other && md.id !== m.id && W.drop(S.asOf, md.id).length) other = md; });
    var logline = null;
    W.timeline.forEach(function (t) {
      if (!logline && t.text.indexOf(m.name.split(' ')[0]) > -1 && t.text.indexOf('0 above') > -1) logline = t;
    });

    var h = '';
    h += '<div class="flag"><div class="flag-l">' +
      '<h2 class="flag-title">Today&rsquo;s drop</h2>' +
      '<p class="flag-sub">' + esc(m.name) + ' &nbsp;·&nbsp; owner <b>' + esc(m.owner) + '</b> &nbsp;·&nbsp; generated 06:00</p></div>' +
      '<div class="flag-count is-done"><span class="fc-n">0</span><span class="fc-l">Above the line</span></div></div>';
    h += '<div class="flag-rule"></div>';

    h += '<div class="empty">';
    h += '<div class="empty-top"><span class="empty-mark" aria-hidden="true"></span>' +
      '<h2>Warhol found nothing<br>worth your time today</h2>' +
      '<p class="lede">The scan ran. Names were scored. None of them cleared the line, so none of them are here. ' +
      'A fixed daily ten would have handed you filler and quietly taught you the list was arbitrary.</p>' +
      '<p class="why">This is the designed state, not an error &nbsp;·&nbsp; the cap protects your attention, the threshold protects your trust</p>' +
      '</div>';

    h += '<div class="empty-grid">' +
      '<div class="empty-cell"><span class="ec-l">Warhol score</span><span class="ec-n">&lt; ' + META.scoreThreshold + '</span>' +
      '<p class="ec-d">Nothing on this desk reached the composite threshold on Monetization Gap plus Operator Strain.</p></div>' +
      '<div class="empty-cell"><span class="ec-l">Coverage gate</span><span class="ec-n">' + pct(META.coverageGate) + '</span>' +
      '<p class="ec-d">Gap checks must resolve to Present or Verified absent at this rate before a name can be surfaced at all. Not found is not a gap.</p></div>' +
      '<div class="empty-cell"><span class="ec-l">Cap</span><span class="ec-n">' + META.dropCap + '</span>' +
      '<p class="ec-d">The cap is a ceiling, never a quota. Some days three names, some days zero.</p></div>' +
      '</div>';

    h += '<div class="empty-foot">' +
      '<p>' + (logline
        ? 'Run log &mdash; ' + esc(logline.at.replace('T', ' ')) + ' &middot; &ldquo;' + esc(logline.text) + '&rdquo;'
        : 'The scan completed and produced no names above the line.') + '</p>' +
      (other ? '<button class="btn primary" data-desk="' + other.id + '">Go to ' + esc(other.name) + ' — ' + W.drop(S.asOf, other.id).length + ' names</button>' : '') +
      '<button class="btn" data-view="run">Run a name manually</button>' +
      '</div>';
    h += '</div>';
    return h;
  }

  /* ======================================================================
     VIEW — SCOUT REPORT
     ====================================================================== */

  function caseProse(c) {
    var g = c.pillars.gap, st = c.pillars.strain;
    var demand = sub(g.subsignals, 'demand');
    var inv = c.inventory || [];
    var t = invTally(inv);
    var p = [];

    var n = demand ? firstNum(demand.value) : null;
    var s1 = n
      ? 'The audience has asked to buy or subscribe <b>' + esc(n) + ' times</b> in the last ninety days. There is nothing to buy.'
      : 'The audience is expressing purchase intent and there is nothing to buy.';
    if (t.total) {
      s1 += ' <b>' + t.absent + ' of ' + t.total + '</b> monetization lines resolved <b>verified absent</b> across <b>' + t.surfaces + '</b> checked surfaces';
      s1 += t.unknown
        ? '. ' + t.unknown + (t.unknown === 1 ? ' line is' : ' lines are') + ' inconclusive — that is why confidence sits at ' + conf2(c.confidence) + ' and not higher.'
        : ', with nothing left inconclusive.';
    }
    p.push(s1);

    var top = st.subsignals.slice().sort(function (a, b) { return (b.weightPct || 0) - (a.weightPct || 0); })[0];
    var second = st.subsignals[1];
    var s2 = 'The timing signal is <b>' + esc(String(top.label).toLowerCase()) + '</b> — ' + esc(top.value) + '. ' + esc(top.detail);
    if (second && second !== top) s2 += ' Alongside it: ' + esc(String(second.label).toLowerCase()) + ', ' + esc(second.value) + '.';
    p.push(s2);

    var appetite = (c.evidence || []).filter(function (e) { return /appetite|capacity|unbuilt/.test(e.label || ''); })[0];
    if (appetite) {
      p.push('They have said it themselves, on <b>' + esc(shortDate(appetite.observedAt)) + '</b>: &ldquo;' + esc(appetite.quote) + '&rdquo;');
    }
    p.push('<b>Why this play.</b> ' + esc(c.play.why));
    return p.map(function (x) { return '<p>' + x + '</p>'; }).join('');
  }

  function subsignalTable(list) {
    var h = '<div class="sig">';
    list.forEach(function (s) {
      var e = engShort(s.engine);
      h += '<div class="sig-row">' +
        '<span class="sig-name">' + esc(s.label) + '</span>' +
        '<span class="sig-val' + (e.llm && !/rule/i.test(e.txt) ? ' jud' : '') + '">' + esc(s.value) + '</span>' +
        '<span class="sig-w">' + (s.weightPct ? s.weightPct + '%' : '&mdash;') + '</span>' +
        '<span class="sig-det">' + esc(s.detail) + '</span>' +
        '<span class="sig-eng' + (e.llm ? ' llm' : '') + '">' + esc(e.txt) + '</span>' +
        '</div>';
    });
    return h + '</div>';
  }

  function viewReport() {
    var c = candidate(S.candidateId);
    if (!c) { S.view = 'drop'; return viewDrop(); }
    var dec = decisionOf(c);
    var manual = !!c.sourceTag;
    var t = invTally(c.inventory || []);
    var g = c.pillars.gap, st = c.pillars.strain, f = c.pillars.fit;

    var h = '<div class="rpt-back"><button class="btn ghost sm" data-view="' + S.returnTo + '">&larr; Back to ' +
      (S.returnTo === 'watchlist' ? 'watchlist' : S.returnTo === 'run' ? 'run a name' : 'the drop') + '</button></div>';

    h += '<article class="sheet">';

    if (manual) {
      h += '<div class="override-band"><span class="ob-k">Scout override</span>' +
        '<span class="ob-t">Source-tagged <b>manual</b>. This name scored ' + c.score + ' against a threshold of ' + META.scoreThreshold +
        ' and coverage of ' + pct(g.coverage) + ' against a gate of ' + pct(META.coverageGate) +
        '. It would not have entered the drop. Warhol is showing it because you asked for it, and the override is recorded as a label.</span></div>';
    }

    /* head ------------------------------------------------------------- */
    h += '<div class="rpt-head">';
    h += '<div class="rpt-eyebrow"><span>Scout report</span><span>·</span><span>' + esc(mandate(c.mandateId).name) + '</span>' +
      '<span>·</span><span>Observed as of ' + esc(shortDate(S.asOf)) + '</span>' +
      (isBack() ? '<span class="re-red">· Back issue — nothing after this date is shown</span>' : '') +
      (dec ? '<span class="re-red">· ' + esc(dec.verb.toUpperCase()) + '</span>' : '') + '</div>';
    h += '<h2 class="rpt-name">' + esc(c.name) + '</h2>';
    h += '<div class="rpt-sub"><span>' + esc(c.handle) + '</span><span><b>' + kfollow(c.audience.total) + '</b> total audience</span>' +
      '<span><b>+' + Math.round(c.audience.growth90d * 100) + '%</b> 90-day growth</span><span>Primary: ' + esc(c.primaryPlatform) + '</span></div>';
    h += '<p class="rpt-dek">' + esc(c.headline) + '</p>';
    if (c.alert) {
      h += '<div class="flagrow"><span class="pill red"><span class="pill-k">Acute alert · ' + esc(shortDate(c.alert.at)) + '</span>' + esc(c.alert.text) + '</span></div>';
    }
    if (c.resurfaced) {
      h += '<div class="flagrow"><span class="pill red"><span class="pill-k">Re-entry</span>' + esc(c.resurfaced.reason) +
        ' &mdash; <i>' + esc(c.resurfaced.trigger) + '</i> Watched since ' + esc(shortDate(c.resurfaced.since)) +
        ', scored ' + c.resurfaced.previousScore + ' then.</span></div>';
    }
    h += '</div>';

    /* body ------------------------------------------------------------- */
    h += '<div class="rpt-body">';

    /* ---- main column: the argument in words --------------------------- */
    h += '<div class="rpt-main">';

    h += '<section class="blk"><div class="blk-h"><h3>The case</h3><em>Argument first. Every number below is restated from observed facts.</em></div>';
    h += '<div class="case">' + caseProse(c) + '</div></section>';

    var ev = c.evidence || [];
    if (ev.length) {
      h += '<section class="blk"><div class="blk-h"><h3>Exhibits</h3><em>' + ev.length + ' cited · verbatim · provenance on every line</em></div>';
      h += '<div class="exhibits">';
      ev.forEach(function (e, i) {
        var demand = /intent/.test(e.label || '');
        h += '<div class="exhibit' + (demand ? ' demand' : '') + (e.kind === 'signal' ? ' signal' : '') + '">' +
          '<div class="ex-h"><span class="ex-n">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="ex-lab' + (demand ? '' : ' jud') + '">' + esc(e.kind === 'comment' ? 'Audience comment' : e.kind === 'caption' ? 'Creator caption' : 'Machine signal') +
          ' — ' + esc(e.label || '') + '</span></div>' +
          '<p class="ex-q">' + (e.kind === 'signal' ? esc(e.quote) : '&ldquo;' + esc(e.quote) + '&rdquo;') + '</p>' +
          '<div class="prov"><span>' + esc(e.platform) + '</span><span class="pv-url">' + esc(e.url) + '</span>' +
          '<span>Observed ' + provDate(e.observedAt) + '</span>' + engTag(e.engine) + '</div></div>';
      });
      h += '</div></section>';
    }

    h += '<section class="blk"><div class="blk-h"><h3>Monetization gap</h3><em>' + g.score + ' / ' + g.max + ' · ' + esc(engShort(g.engine).txt) + ' · coverage ' + pct(g.coverage) + '</em></div>';
    h += subsignalTable(g.subsignals) + '</section>';

    h += '<section class="blk"><div class="blk-h"><h3>Operator strain</h3><em>' + st.score + ' / ' + st.max + ' · ' + esc(engShort(st.engine).txt) + ' · the timing trigger</em></div>';
    h += subsignalTable(st.subsignals) + '</section>';

    h += '<section class="blk"><div class="blk-h"><h3>Format fit</h3><em>Qualifier gate · pass / fail · contributes no points</em></div>';
    h += '<div class="gate-block"><div class="gb-h"><div><div class="gb-t">' +
      (f.verdict === 'pass' ? 'Structurally suited to the machine' : 'Fails the qualifier') + '</div>' +
      '<p class="gb-note">A qualifier qualifies. It does not add score. Fail here and the name never enters the drop, whatever the other two say.</p></div>' +
      '<span class="stamp' + (f.verdict === 'pass' ? '' : ' fail') + '">' + esc(f.verdict) + '</span></div>';
    h += '<div class="gate-grid">';
    f.subsignals.forEach(function (s) {
      h += '<div class="gate-item"><div class="gi-n">' + esc(s.label) + ' &nbsp;<span style="color:var(--ink-3);font-weight:600">' + esc(engShort(s.engine).txt) + '</span></div>' +
        '<div class="gi-v">' + esc(s.value) + '</div><div class="gi-d">' + esc(s.detail) + '</div></div>';
    });
    h += '</div></div></section>';

    var sm = c.samples || [];
    if (sm.length) {
      h += '<section class="blk"><div class="blk-h"><h3>Content samples</h3><em>What the machine actually watched</em></div><div class="samples">';
      sm.forEach(function (s) {
        var rgb = hexRGB(c.accent || '#5A5A6B');
        var r = (0.7 + (s.tone || 0) * 1.7).toFixed(2);
        var a = ageTag(s.observedAt);
        h += '<div class="sample"><div class="halftone" style="background-color:rgba(' + rgb[0] + ',' + rgb[1] + ',' + rgb[2] + ',' + (0.14 + (s.tone || 0) * 0.2).toFixed(2) + ');--dot:rgb(' + rgb.join(',') + ');--r:' + r + 'px" aria-hidden="true"></div>' +
          '<div class="sample-b"><div class="sample-t">' + esc(s.title) + '</div>' +
          '<div class="sample-m"><span>' + esc(s.platform) + '</span><span>' + esc(s.metric) + '</span><span>' + esc(s.length) + '</span>' +
          '<span class="' + (a.stale ? 'stale' : '') + '">' + esc(shortDate(s.observedAt)) + (a.stale ? ' · stale' : '') + '</span></div></div></div>';
      });
      h += '</div></section>';
    }

    h += '<section class="blk"><div class="blk-h"><h3>Recommended play</h3><em>One play, from the fixed catalog of what Paradium operates</em></div>';
    h += '<div class="playbox"><div class="playbox-h"><span class="ph-k">The play</span><span class="ph-n">No revenue estimate — deliberately</span></div>' +
      '<div class="playbox-b"><h4 class="playbox-t">' + esc(c.play.label) + '</h4>' +
      '<p class="playbox-w">' + esc(c.play.why) + '</p>' +
      '<div class="playbox-f">Catalog: ' + W.plays.map(function (p) {
        return (p.id === c.play.id ? '<b style="color:var(--red-deep)">' + esc(p.label) + '</b>' : esc(p.label));
      }).join(' &nbsp;·&nbsp; ') + '</div></div></div></section>';

    h += '</div>'; /* /rpt-main */

    /* ---- side column: the apparatus ---------------------------------- */
    h += '<div class="rpt-side">';

    h += '<section class="blk"><div class="blk-h"><h3>Score</h3><em>Confidence sits beside it, never inside it</em></div>';
    h += '<div class="score-head"><div><div class="score-n">' + c.score + '<sub>/100</sub></div>' +
      '<div class="score-l">Warhol score' + (c.scoreDelta != null ? ' · ' + (c.scoreDelta > 0 ? '+' : '') + c.scoreDelta + ' since last run' : '') + '</div></div>' +
      confBlock(c) + '</div>';
    h += pillarsBlock(c, true) + '</section>';

    h += '<section class="blk"><div class="blk-h"><h3>Monetization inventory</h3><em>State per line</em></div>';
    var inv = c.inventory || [];
    if (!inv.length) {
      h += '<p class="invtable-foot">No inventory resolved for this candidate at this tier.</p>';
    } else {
      h += '<div class="invtable">';
      inv.forEach(function (r) {
        h += '<div class="ivt-row">' +
          '<span class="' + markClass(r.state) + '" aria-hidden="true"></span>' +
          '<span class="ivt-item">' + esc(r.item) + '</span>' +
          '<span class="ivt-state ' + stateKey(r.state) + '">' + esc(stateWord(r.state)) + '</span>' +
          '<p class="ivt-note">' + esc(r.note) + '</p>' +
          '<div class="ivt-prov"><span><b>' + (r.surfacesChecked || 0) + '</b> surfaces checked</span>' +
          '<span class="pv-url">' + esc(r.source) + '</span><span>' + provDate(r.observedAt) + '</span></div></div>';
      });
      h += '</div>';
      h += '<div class="invtable-foot">' + t.absent + ' verified absent &nbsp;·&nbsp; ' + t.present + ' present &nbsp;·&nbsp; ' +
        (t.unknown ? '<b>' + t.unknown + ' not found</b>' : '0 not found') + ' &nbsp;·&nbsp; ' + t.surfaces + ' surfaces total<br>' +
        'Only <b>verified absent</b> scores as a gap. Not found is neutral and reduces confidence.' +
        (g.coverage < META.coverageGate ? '<br><b>Coverage ' + pct(g.coverage) + ' is below the ' + pct(META.coverageGate) + ' gate.</b>' : '') +
        '</div>';
    }
    h += '</section>';

    h += '<section class="blk"><div class="blk-h"><h3>Identity graph</h3><em>Match confidence</em></div><div class="idt">';
    c.platforms.forEach(function (p) {
      var low = p.matchConfidence < 0.9;
      h += '<div class="idt-row"><span class="idt-p">' + esc(p.name) + '</span>' +
        '<span class="idt-f">' + kfollow(p.followers) + '</span>' +
        '<span class="idt-c' + (low ? ' low' : '') + '">match ' + conf2(p.matchConfidence) + '</span>' +
        '<span class="idt-h">' + esc(p.url) + '</span></div>';
    });
    h += '</div><div class="invtable-foot">Identity resolution is probabilistic. Anything below <b>.90</b> is asserted, not proven — check before you use it in a room.</div></section>';

    h += '</div>'; /* /rpt-side */
    h += '</div>'; /* /rpt-body */

    /* outcome reveal --------------------------------------------------- */
    if (c.outcome) {
      h += '<div style="padding:0 30px 30px">' + outcomeBlock(c) + '</div>';
    }

    /* actions ---------------------------------------------------------- */
    h += '<div class="rpt-acts">';
    if (dec && dec.verb === 'promoted') {
      h += '<span class="stamp ink">Promoted</span><span class="acts-note">' + esc(dec.by || W.user.name) + ' · ' + esc(shortDate(dec.at || S.asOf)) + '</span>' +
        '<span class="spacer"></span><button class="btn primary" data-outreach="' + c.id + '">Open outreach package</button>';
    } else if (dec && dec.verb === 'passed') {
      h += '<span class="stamp fail">Passed</span><span class="acts-note">' + esc(dec.label) + ' · suppression: ' + esc(dec.suppression) + '</span>' +
        '<span class="spacer"></span><button class="btn" data-undo="' + c.id + '">Undo</button>';
    } else if (isBack()) {
      h += '<span class="acts-note">This is a back issue. Decisions are read-only when the app is rewound — you cannot promote a name as of a date that has already passed.</span>';
    } else {
      h += '<button class="btn primary" data-promote="' + c.id + '">Promote &rarr; outreach package</button>' +
        '<button class="btn" data-watch="' + c.id + '">Watch</button>' +
        '<span class="passwrap"><button class="btn ghost" data-passmenu="' + c.id + '" aria-expanded="' + (S.passMenuFor === c.id) + '">Pass &#9662;</button>' +
        (S.passMenuFor === c.id ? passMenu(c) : '') + '</span>' +
        '<span class="spacer"></span><span class="acts-note">Promote also creates the record in the Phase Two app</span>';
    }
    h += '</div>';

    h += '</article>';
    return h;
  }

  function outcomeBlock(c) {
    var o = c.outcome;
    if (!S.revealed[c.id]) {
      return '<div class="seal" id="seal-' + c.id + '">' +
        '<button class="seal-btn" data-reveal="' + c.id + '">' +
        '<div class="seal-k">Sealed — outside this issue</div>' +
        '<div class="seal-t">What actually happened to ' + esc(c.name.split(' ')[0]) + '</div>' +
        '<div class="seal-s">' + esc(o.window) + ' &nbsp;·&nbsp; observed ' + esc(shortDate(META.today)) +
        ' &nbsp;·&nbsp; click to break the seal</div></button></div>';
    }
    var dud = !o.built.length;
    var h = '<div class="outcome press">';
    h += '<div class="outcome-h"><span class="oh-k">Outcome</span><span class="oh-w">' + esc(o.window) +
      ' &nbsp;·&nbsp; observed ' + esc(shortDate(META.today)) + ', outside the ' + esc(shortDate(S.asOf)) + ' issue</span></div>';
    h += '<div class="outcome-b">';
    h += '<h3 class="outcome-hl' + (dud ? ' dud' : '') + '">' + esc(o.headline) + '</h3>';
    h += '<p class="outcome-note">' + esc(o.note) + '</p>';
    h += '<div class="outcome-grid"><div><div class="outcome-l">Audience now</div><div class="outcome-now">' + esc(o.followersNow) + '</div>' +
      '<div class="outcome-l" style="margin-top:14px">Then</div><div class="outcome-now" style="color:var(--ink-3)">' + kfollow(c.audience.total) + '</div></div>';
    h += '<div><div class="outcome-l" style="margin-bottom:6px">What got built' + (dud ? '' : ' — by someone else') + '</div>' +
      '<ul class="outcome-built' + (dud ? ' none' : '') + '">' +
      (dud ? '<li>Nothing.</li>' : o.built.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('')) + '</ul></div>';
    h += '</div>';
    var nInv = (c.inventory || []).length, nEv = (c.evidence || []).length;
    h += '<div class="outcome-ranked">On ' + esc(shortDate(S.asOf)) + ' Warhol scored this name <b>' + c.score +
      '</b> at confidence <b>' + conf2(c.confidence) + '</b>, from ' + nInv + ' inventory line' + (nInv === 1 ? '' : 's') +
      ' and ' + nEv + ' cited exhibit' + (nEv === 1 ? '' : 's') + ' &mdash; and knew nothing of anything above this rule.</div>';
    h += '</div></div>';
    return h;
  }

  /* ======================================================================
     VIEW — WATCHLIST
     ====================================================================== */

  function viewWatchlist() {
    var h = '<div class="flag"><div class="flag-l"><h2 class="flag-title">Watchlist</h2>' +
      '<p class="flag-sub">Kept, re-scored continuously &nbsp;·&nbsp; every name states the condition that puts it back in the drop</p></div>';

    if (isBack()) {
      h += '</div><div class="flag-rule"></div>';
      h += '<div class="empty"><div class="empty-top"><span class="empty-mark" aria-hidden="true"></span>' +
        '<h2>No watchlist as of<br>' + esc(shortDate(S.asOf)) + '</h2>' +
        '<p class="lede">This desk had no kept names on that date. Warhol will not project today&rsquo;s watchlist backwards onto a past issue — ' +
        'the whole point of the rewind is that nothing observed after ' + esc(shortDate(S.asOf)) + ' is visible.</p></div>' +
        '<div class="empty-foot"><p>Return to the current issue to work the live watchlist.</p>' +
        '<button class="btn primary" data-date="' + META.today + '">Go to ' + esc(shortDate(META.today)) + '</button></div></div>';
      return h;
    }

    var wl = watchlist();
    var resurfaced = dropList().filter(function (c) { return c.resurfaced; });

    h += '<div class="flag-count"><span class="fc-n">' + wl.length + '</span><span class="fc-l">Under watch</span></div></div>';
    h += '<div class="flag-rule"></div>';

    if (resurfaced.length) {
      h += '<div class="key"><span class="key-item"><b>' + resurfaced.length + ' re-entered today</b> — ' +
        esc(resurfaced.map(function (c) { return c.name; }).join(' · ')) +
        ' — and are now in the drop, not here. One inbox, not two.</span></div>';
    }

    wl.forEach(function (c) {
      var dec = S.decisions[c.id];
      h += '<div class="wl-row' + (S.animate ? ' press' : '') + '">';
      h += '<div><h3 class="wl-name"><button data-report="' + c.id + '" data-from="watchlist">' + esc(c.name) + '</button></h3>' +
        '<div class="wl-meta"><span>' + esc(c.handle) + '</span><span>' + kfollow(c.audience.total) + '</span>' +
        '<span>Kept ' + esc(shortDate(c.watchedSince || (dec && dec.at) || S.asOf)) + '</span>' +
        '<span>' + esc(mandate(c.mandateId).name) + '</span></div>' +
        '<p class="wl-dek">' + esc(c.headline) + '</p></div>';
      h += '<div class="wl-trigger"><div class="wt-l"><span class="mk mk-bullet" aria-hidden="true"></span>Next trigger</div>' +
        '<div class="wt-v">' + esc(nextTrigger(c)) + '</div>' +
        '<div class="wt-s">Re-scored every run · returns to the drop tagged with the reason</div></div>';
      h += '<div class="wl-right"><div class="wl-score">' + c.score + '</div>' +
        '<div class="wl-score-l">Score · conf ' + conf2(c.confidence) +
        (c.scoreDelta != null ? ' · <span class="' + (c.scoreDelta > 0 ? 'arrow-up' : '') + '">' + (c.scoreDelta > 0 ? '+' : '') + c.scoreDelta + '</span>' : '') + '</div>' +
        '<div class="wl-acts"><button class="btn sm" data-report="' + c.id + '" data-from="watchlist">Report</button>' +
        '<span class="passwrap"><button class="btn ghost sm" data-passmenu="' + c.id + '" aria-expanded="' + (S.passMenuFor === c.id) + '">Pass &#9662;</button>' +
        (S.passMenuFor === c.id ? passMenu(c) : '') + '</span></div></div>';
      h += '</div>';
    });

    return h;
  }

  /* ======================================================================
     VIEW — RUN A NAME
     ====================================================================== */

  function viewRun() {
    var h = '<div class="flag"><div class="flag-l"><h2 class="flag-title">Run a name</h2>' +
      '<p class="flag-sub">Manual entry &nbsp;·&nbsp; source-tagged &nbsp;·&nbsp; bypasses the threshold &nbsp;·&nbsp; recorded as a Scout override</p></div></div>';
    h += '<div class="flag-rule"></div>';

    if (isBack()) {
      h += '<div class="empty"><div class="empty-top"><span class="empty-mark" aria-hidden="true"></span>' +
        '<h2>Run a name works on<br>the current issue only</h2>' +
        '<p class="lede">Warhol cannot fetch a creator as they were on ' + esc(shortDate(S.asOf)) +
        '. On-demand scoring observes the live web, and a live observation would be dated today — which would contaminate the back issue.</p>' +
        '<p class="why">The rewind is only honest because nothing after the as-of date can get in</p></div>' +
        '<div class="empty-foot"><p>Return to the current issue to run a name.</p>' +
        '<button class="btn primary" data-date="' + META.today + '">Go to ' + esc(shortDate(META.today)) + '</button></div></div>';
      return h;
    }

    h += '<div class="run-wrap"><div class="run-top">';
    h += '<h2>Paste a handle. Warhol argues.</h2>';
    h += '<p>The Scout&rsquo;s hunch is data too. A manual add is scored on the same model, tagged as human-found so the label set ' +
      'stays honest, and surfaced even when it fails the gates — with the failures stated, not hidden.</p>';
    h += '<form class="run-form" id="runForm"><input id="runInput" type="text" autocomplete="off" spellcheck="false" ' +
      'placeholder="@handle or profile URL" value="' + esc(S.runQuery) + '" aria-label="Handle or URL">' +
      '<button class="btn primary" type="submit">Score it</button></form>';
    h += '<p class="run-hint">Try <b>@vancemakesknives</b> — or anything; this prototype resolves every input to one fixture</p>';
    h += '</div>';

    if (S.ran && S.runResult) {
      var r = S.runResult;
      h += '<div class="run-steps">';
      var steps = [
        ['Resolved identity', r.platforms.length + ' platforms matched, lowest confidence ' + conf2(Math.min.apply(null, r.platforms.map(function (p) { return p.matchConfidence; })))],
        ['Monetization inventory', invTally(r.inventory).absent + ' verified absent, ' + invTally(r.inventory).unknown + ' not found — coverage ' + pct(r.pillars.gap.coverage)],
        ['Comment sampling', (sub(r.pillars.gap.subsignals, 'demand') || {}).value],
        ['Strain classification', r.pillars.strain.score + ' / ' + r.pillars.strain.max],
        ['Format fit gate', r.pillars.fit.verdict.toUpperCase()],
        ['Threshold check', r.score + ' vs ' + META.scoreThreshold + ' — BYPASSED, Scout override']
      ];
      steps.forEach(function (s, i) {
        h += '<div class="run-step done"><span class="rs-n">' + String(i + 1).padStart(2, '0') + '</span>' +
          '<span class="rs-t">' + esc(s[0]) + ' — ' + esc(s[1]) + '</span><span class="rs-s">Done</span></div>';
      });
      h += '<div style="margin-top:22px;display:flex;gap:12px;flex-wrap:wrap;align-items:center">' +
        '<button class="btn primary" data-report="' + r.id + '" data-from="run">Open scout report — ' + esc(r.name) + '</button>' +
        '<span class="acts-note">Scored ' + r.score + ' · confidence ' + conf2(r.confidence) + ' · source: manual</span></div>';
      h += '</div>';
    }
    h += '</div>';
    return h;
  }

  /* ======================================================================
     VIEW — OUTREACH PACKAGE / PROMOTED
     ====================================================================== */

  function viewOutreach() {
    var list = promotedList();
    var c = S.candidateId && decisionOf(candidate(S.candidateId) || {}) ? candidate(S.candidateId) : null;
    if (!c || !decisionOf(c) || decisionOf(c).verb !== 'promoted') c = list[list.length - 1] || null;

    var h = '<div class="flag"><div class="flag-l"><h2 class="flag-title">Promoted &amp; outreach</h2>' +
      '<p class="flag-sub">Generated on promote &nbsp;·&nbsp; Warhol drafts, the Scout sends &nbsp;·&nbsp; Phase Two record created</p></div>' +
      '<div class="flag-count"><span class="fc-n">' + list.length + '</span><span class="fc-l">Handed off</span></div></div>';
    h += '<div class="flag-rule"></div>';

    if (list.length > 1) {
      h += '<div class="key"><span class="key-item"><b>Packages</b></span>';
      list.forEach(function (p) {
        h += '<span class="key-item"><button class="linkbtn" data-outreach="' + p.id + '"' + (p === c ? ' style="color:var(--ink)"' : '') + '>' + esc(p.name) + '</button></span>';
      });
      h += '</div>';
    }

    if (!c) {
      h += '<div class="empty"><div class="empty-top"><span class="empty-mark" aria-hidden="true"></span>' +
        '<h2>Nothing promoted yet</h2>' +
        '<p class="lede">Open a Scout Report from the drop and promote it. Warhol will generate the outreach package here — ' +
        'the signals in plain language, the play, and a draft first message.</p></div>' +
        '<div class="empty-foot"><p>Promote requires opening the report. That is deliberate: you should never hand a name off from a summary.</p>' +
        '<button class="btn primary" data-view="drop">Back to the drop</button></div></div>';
      return h;
    }

    var dec = decisionOf(c);
    var t = invTally(c.inventory || []);
    var demand = sub(c.pillars.gap.subsignals, 'demand');
    var o = c.outreach || {};

    h += '<article class="sheet">';
    h += '<div class="out-head"><div class="rpt-eyebrow"><span>Outreach package</span><span>·</span>' +
      '<span>Promoted by ' + esc(dec.by || W.user.name) + ' on ' + esc(shortDate(dec.at || S.asOf)) + '</span>' +
      '<span>·</span><span class="re-red">Phase Two record created</span></div>' +
      '<h2>' + esc(c.name) + '</h2>' +
      '<p class="oh-s">' + esc(c.handle) + ' &nbsp;·&nbsp; ' + kfollow(c.audience.total) + ' audience &nbsp;·&nbsp; ' +
      esc(mandate(c.mandateId).name) + ' &nbsp;·&nbsp; scored ' + c.score + ' at confidence ' + conf2(c.confidence) + '</p></div>';

    h += '<div class="out-grid">';

    h += '<div class="out-left">';
    h += '<section class="blk"><div class="blk-h"><h3>The signals, in plain language</h3></div><ul class="plain">';
    var lines = [];
    if (demand) lines.push(esc(demand.value) + ' in the last ninety days — and nothing to sell them.');
    if (t.total) lines.push(t.absent + ' of ' + t.total + ' monetization lines verified absent across ' + t.surfaces + ' checked surfaces' + (t.unknown ? '; ' + t.unknown + ' inconclusive.' : '.'));
    var topStrain = c.pillars.strain.subsignals.slice().sort(function (a, b) { return b.weightPct - a.weightPct; })[0];
    if (topStrain) lines.push(topStrain.label + ': ' + topStrain.value + '. This is the timing, not the buy signal.');
    if (c.alert) lines.push(c.alert.text);
    if (c.resurfaced) lines.push('Re-entered the drop: ' + c.resurfaced.reason + '.');
    lines.push('Format fit passed the qualifier gate. It contributes no points and never did.');
    lines.forEach(function (l) { h += '<li>' + l + '</li>'; });
    h += '</ul></section>';

    h += '<section class="blk"><div class="blk-h"><h3>The play</h3></div>' +
      '<div class="playbox"><div class="playbox-h"><span class="ph-k">' + esc(c.play.label) + '</span></div>' +
      '<div class="playbox-b"><p class="playbox-w" style="margin:0">' + esc(c.play.why) + '</p>' +
      '<div class="playbox-f">No revenue estimate is attached, by design. Fabricated precision is the easiest thing in a room to shoot at.</div>' +
      '</div></div></section>';
    h += '</div>';

    h += '<div class="out-right">';
    h += '<section class="blk"><div class="blk-h"><h3>Draft first contact</h3><em>Copy it, edit it, send it yourself</em></div>';
    h += '<div class="draft" id="draftBody">';
    h += '<div class="draft-sub"><span class="ds-l">Subject</span><span class="ds-v">' + esc(o.subject || 'A conversation about what you have not built yet') + '</span></div>';
    h += '<div class="draft-body">';
    h += '<p>Hi ' + esc(c.name.split(' ')[0]) + ' —</p>';
    h += '<p>' + esc(o.opener || '') + '</p>';
    if (o.bullets && o.bullets.length) {
      h += '<ul>' + o.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>';
    }
    h += '<p>' + esc(o.close || '') + '</p>';
    h += '<p class="sig-off">' + esc(W.user.name) + '<br>' + esc(W.user.role) + ', Paradium</p>';
    h += '</div></div>';
    h += '<div style="margin-top:14px;display:flex;gap:10px;flex-wrap:wrap;align-items:center">' +
      '<button class="btn primary" id="copyDraft">Copy draft</button>' +
      '<button class="btn ghost" data-report="' + c.id + '" data-from="outreach">Back to the scout report</button>' +
      '<span class="acts-note" id="copyNote"></span></div>';
    h += '<div class="notice"><span class="nt-k">Warhol does not send</span>' +
      '<p>Sending is a human act with a human&rsquo;s relationships behind it. Owning the send would inherit deliverability, ' +
      'reply tracking and a CRM — and turn a listening tool into something else entirely.</p></div>';
    h += '</section></div>';

    h += '</div></article>';
    return h;
  }

  /* ======================================================================
     WIRE PANEL — the 06:00 digest artifact
     ====================================================================== */

  function renderWire() {
    var p = $('wirePanel');
    var h = '<div class="wire-h"><div><div class="wh-k">Daily digest · 06:00</div>' +
      '<h3>Your drop is ready</h3>' +
      '<div class="wh-s">To ' + esc(W.user.name) + ' &nbsp;·&nbsp; ' + esc(longDate(META.today)) + ' &nbsp;·&nbsp; Vol. 1 No. 214</div></div>' +
      '<button class="btn ghost sm" id="wireClose">Close</button></div><div class="wire-b">';

    W.mandates.forEach(function (m) {
      var list = W.drop(META.today, m.id);
      var re = list.filter(function (c) { return c.resurfaced; });
      h += '<div class="wire-mand"><div class="wm-n">' + esc(m.name) + ' &nbsp;<span style="color:var(--ink-3);font-weight:500">' + esc(m.ownerInitials) + '</span></div>';
      h += '<div class="wm-c">' + (list.length
        ? '<b>' + (list.length - re.length) + ' new</b>' + (re.length ? ', <b>' + re.length + ' resurfaced</b>' : '') + '.'
        : 'Nothing above the threshold today. <b>That is the answer.</b>') + '</div>';
      if (list.length) h += '<div class="wire-names">' + esc(list.map(function (c) { return c.name; }).join(' · ')) + '</div>';
      h += '</div>';
    });

    var acute = W.candidates.filter(function (c) { return c.alert; });
    if (acute.length) {
      h += '<div class="wire-mand" style="border-top-width:3px"><div class="wm-n" style="color:var(--red-deep)">Immediate alert</div>';
      acute.forEach(function (c) {
        h += '<div class="wm-c">' + esc(c.name) + ' — ' + esc(c.alert.text) + '</div>';
      });
      h += '</div>';
    }

    h += '<div class="wire-foot">Email is the default channel: it works when the app is closed, and it forwards to an exec without a login. ' +
      'Browser push is opt-in.</div></div>';
    p.innerHTML = h;
  }

  /* ======================================================================
     RENDER + EVENTS
     ====================================================================== */

  function render() {
    renderChrome();
    var html = S.view === 'report' ? viewReport()
      : S.view === 'watchlist' ? viewWatchlist()
        : S.view === 'run' ? viewRun()
          : S.view === 'outreach' ? viewOutreach()
            : viewDrop();
    stage.innerHTML = html;
    S.animate = false;
  }

  function go(view, opts) {
    opts = opts || {};
    S.passMenuFor = null;
    S.animate = true;
    S.view = view;
    if (opts.candidateId !== undefined) S.candidateId = opts.candidateId;
    if (opts.returnTo) S.returnTo = opts.returnTo;
    render();
    if (opts.top !== false) window.scrollTo({ top: 0, behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  }

  document.addEventListener('click', function (e) {
    var t = e.target.closest ? e.target.closest('[data-desk],[data-view],[data-date],[data-report],[data-watch],[data-passmenu],[data-pass],[data-undo],[data-promote],[data-outreach],[data-reveal],#wireBtn,#wireClose,#copyDraft') : null;

    // close pass menu on outside click
    if (!t || (!t.hasAttribute('data-passmenu') && !t.hasAttribute('data-pass'))) {
      if (S.passMenuFor && !(e.target.closest && e.target.closest('.passmenu'))) {
        S.passMenuFor = null;
        if (t) { /* fall through and re-render below */ } else { render(); return; }
      }
    }
    if (!t) return;

    if (t.id === 'wireBtn') { openWire(true); return; }
    if (t.id === 'wireClose') { openWire(false); return; }
    if (t.id === 'copyDraft') { copyDraft(); return; }

    var v;
    if ((v = t.getAttribute('data-desk'))) {
      S.mandateId = v; S.candidateId = null; go('drop'); return;
    }
    if ((v = t.getAttribute('data-view'))) { go(v); return; }
    if ((v = t.getAttribute('data-date'))) {
      if (v === S.asOf) return;
      S.asOf = v;
      S.candidateId = null;
      if (S.view === 'report' || S.view === 'outreach') S.view = 'drop';
      go(S.view); return;
    }
    if ((v = t.getAttribute('data-report'))) {
      go('report', { candidateId: v, returnTo: t.getAttribute('data-from') || 'drop' }); return;
    }
    if ((v = t.getAttribute('data-passmenu'))) {
      S.passMenuFor = S.passMenuFor === v ? null : v; render(); return;
    }
    if ((v = t.getAttribute('data-pass'))) {
      var code = t.getAttribute('data-reason');
      var r = reasonByCode(code);
      S.decisions[v] = { verb: 'passed', reasonCode: code, label: r.label, suppression: r.suppression, by: W.user.name, at: S.asOf };
      S.passMenuFor = null;
      if (S.view === 'report') { render(); } else { render(); }
      return;
    }
    if ((v = t.getAttribute('data-watch'))) {
      var c = candidate(v);
      S.decisions[v] = { verb: 'watched', by: W.user.name, at: S.asOf, trigger: nextTrigger(c) };
      S.passMenuFor = null;
      render(); return;
    }
    if ((v = t.getAttribute('data-undo'))) {
      delete S.decisions[v]; render(); return;
    }
    if ((v = t.getAttribute('data-promote'))) {
      S.decisions[v] = { verb: 'promoted', by: W.user.name, at: S.asOf };
      go('outreach', { candidateId: v }); return;
    }
    if ((v = t.getAttribute('data-outreach'))) {
      go('outreach', { candidateId: v }); return;
    }
    if ((v = t.getAttribute('data-reveal'))) {
      reveal(v); return;
    }
  });

  function reveal(id) {
    var el = document.getElementById('seal-' + id);
    var reduced = matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (el && !reduced) {
      el.classList.add('tearing');
      setTimeout(function () { S.revealed[id] = true; render(); }, 300);
    } else {
      S.revealed[id] = true; render();
    }
  }

  function openWire(on) {
    S.wireOpen = on;
    $('wirePanel').hidden = !on;
    $('wireScrim').hidden = !on;
    $('wireBtn').setAttribute('aria-expanded', String(on));
    if (on) { renderWire(); $('wirePanel').scrollTop = 0; }
  }
  $('wireScrim').addEventListener('click', function () { openWire(false); });

  function copyDraft() {
    var el = $('draftBody');
    var note = $('copyNote');
    var txt = el ? el.innerText.replace(/\n{3,}/g, '\n\n') : '';
    var done = function () { if (note) note.textContent = 'Copied — now send it yourself.'; };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(txt).then(done, function () {
        if (note) note.textContent = 'Select the draft and copy it — clipboard is blocked from file://';
      });
    } else if (note) {
      note.textContent = 'Select the draft and copy it — clipboard is blocked from file://';
    }
  }

  // run-a-name submit
  document.addEventListener('submit', function (e) {
    if (e.target && e.target.id === 'runForm') {
      e.preventDefault();
      var input = $('runInput');
      S.runQuery = input ? input.value : '';
      S.runResult = W.runANameResult;
      S.ran = true;
      render();
    }
  });

  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (S.wireOpen) { openWire(false); return; }
    if (S.passMenuFor) { S.passMenuFor = null; render(); return; }
    if (S.view === 'report') { go(S.returnTo); }
  });

  // ------------------------------------------------------------- boot
  render();
})();
