/* ==========================================================================
   WARHOL SCOUT v2 — application shell, state and views.
   Classic script, no modules, no fetch. Runs from file://.

   This file is the ONLY one that holds state, calls render(), or installs a
   listener. onboarding.js and hints.js are pure renderers plus an act() hook.

   The seed data is read-only. Decisions live in local state and are layered
   over it, so the cohort is never mutated.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var V2 = window.WARHOL_V2;
  var U = window.UI;
  var ONBOARD = window.ONBOARD;
  var HINTS = window.HINTS;
  var esc = U.esc;
  var DOT = String.fromCharCode(183);
  var ARR = String.fromCharCode(8594);
  var ELL = String.fromCharCode(8230);

  /* ------------------------------------------------------------------ state */
  var state = {
    session: { phase: 'signedout', role: null, userId: null },
    wizard: null,
    firstRun: { active: false, mandateId: null, joined: false },
    hints: { seen: {}, dismissed: {}, open: null },
    pendingHint: null,
    ledgerOpen: {},
    userMandates: [],

    view: 'drop',
    asOf: W.meta.today,
    mandateId: 'm_food',
    reportId: null,
    from: 'drop',
    outreachId: null,
    decisions: {},          // id -> { verb, reasonCode, at }
    revealed: {},           // id -> true (rewound outcome)
    passTray: null,         // id currently choosing a reason
    run: { stage: 'idle', query: '', step: 0 },
    copied: false,
    animate: true           // only true on a real view change, never on re-render
  };

  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ----------------------------------------------------------- derivations */
  function isRewound() { return state.asOf !== W.meta.today; }
  function me() { return V2.people[state.session.userId] || V2.people.s_alex; }
  function isScout() { return state.session.role !== 'spotter'; }

  /* Role-dependent verbs. A Spotter sees Refer to desk in precisely the
     position a Scout sees Promote — nobody has more than three verbs. */
  function verbs() {
    return isScout()
      ? { act: 'promote', label: 'Promote', state: 'Promoted' }
      : { act: 'refer', label: 'Refer to desk', state: 'Referred' };
  }

  function allMandates() { return V2.mandatesFor(state); }
  function mandate(id) {
    var m = null;
    allMandates().forEach(function (x) { if (x.id === id) m = x; });
    return m;
  }
  function reason(code) {
    var r = null;
    V2.passReasons.forEach(function (x) { if (x.code === code) r = x; });
    return r;
  }

  /* A wizard-made mandate has no drop of its own in the seed, so it reads the
     scanned cohort its category maps to. */
  function cohortId(mid) { return V2.cohortFor(mid || state.mandateId, state); }
  function dropList() {
    var cid = cohortId();
    return cid ? W.drop(state.asOf, cid) : [];
  }
  function dropCounts(mid) {
    var cid = cohortId(mid);
    return (cid && W.drops[state.asOf] && W.drops[state.asOf][cid]) ? W.drops[state.asOf][cid].length : 0;
  }
  function decisionFor(id) { return state.decisions[id] || null; }
  function creator(id) {
    return id === W.runANameResult.id ? W.runANameResult : W.byId[id];
  }

  function watchlist() {
    var seeded = W.watchlist().filter(function (c) {
      return U.daysBetween(c.watchedSince, state.asOf) >= 0;
    });
    var added = [];
    Object.keys(state.decisions).forEach(function (id) {
      if (state.decisions[id].verb !== 'watch') return;
      var c = creator(id);
      if (c && seeded.indexOf(c) === -1) added.push(c);
    });
    return added.concat(seeded);
  }

  function remaining() {
    return dropList().filter(function (c) { return !decisionFor(c.id); }).length;
  }

  /* ------------------------------------------------------------ chrome: rail */
  function railHTML() {
    var wl = watchlist().length;
    var rewound = isRewound();
    var who = me();
    var trail = W.timeline.filter(function (t) {
      return U.daysBetween(t.at.slice(0, 10), state.asOf) >= 0;
    }).slice(0, 4);

    return '<nav class="railcol railcol--wide" aria-label="Surfaces">' +
      '<div class="brandrow"><span class="me">WS</span>' +
      '<span><span class="wm">Warhol</span>' +
      '<span class="sub-t">Scout ' + DOT + ' origination desk</span></span></div>' +

      '<div class="nav">' +
      navBtn('drop', 'drop', "Today's drop", remaining() ? remaining() + ' left' : dropCounts(state.mandateId) ? 'worked' : '0') +
      navBtn('watchlist', 'watch', 'Watchlist', String(wl)) +
      navBtn('runname', 'run', 'Run a name', rewound ? 'off' : '') +
      '</div>' +

      '<div class="railsec grow">' +
      '<span class="lab">Desk activity</span>' +
      (trail.length
        ? '<ul class="trail">' + trail.map(function (t) {
          return '<li><span class="t">' + esc(t.at.replace('T', ' ')) + ' ' + DOT + ' ' + esc(t.actor) + '</span>' +
            esc(t.text) + '</li>';
        }).join('') + '</ul>'
        : '<p class="sub-t">No desk activity recorded on or before this date. Nothing observed later is visible while the date is set back.</p>') +
      '</div>' +

      '<div class="whoami">' +
      '<span class="avatar avatar--ini ini--lilac">' + esc(who.initials) + '</span>' +
      '<span class="who"><b>' + esc(who.name) + '</b>' +
      '<span>' + esc(who.title) + ' ' + DOT + ' ' + (isScout() ? 'Scout' : 'Spotter') + '</span></span>' +
      '</div>' +
      '</nav>';
  }

  function navBtn(view, ic, label, n) {
    var on = state.view === view || (view === 'drop' && state.view === 'report' && state.from === 'drop');
    var off = view === 'runname' && isRewound();
    return '<button class="rnav" data-act="view" data-view="' + view + '"' +
      (on ? ' aria-current="page"' : '') + (off ? ' disabled' : '') + '>' +
      '<span class="ic">' + U.icon(ic) + '</span>' +
      '<span class="tx">' + esc(label) + '</span>' +
      (n ? '<span class="pill">' + esc(n) + '</span>' : '') + '</button>';
  }

  /* --------------------------------------------------------- chrome: top bar */
  /* The as-of control lives here, not in the rail. §4.5 calls it first-class
     and present everywhere; a rail module scrolls away on a long report, and
     a two-option list titled with the mode name is a mode picker. Two dates
     side by side make "same screen, different date" a visible affordance. */
  function topHTML() {
    var crumbTail =
      state.view === 'report' ? 'Scout Report' :
        state.view === 'outreach' ? 'Outreach package' :
          state.view === 'watchlist' ? 'Watchlist' :
            state.view === 'runname' ? 'Run a name' : 'Drop';

    return '<div class="top">' +
      '<div class="crumb">' +
      '<button data-act="view" data-view="drop"><b>Desk</b></button>' +
      '<span>/</span>' + esc(crumbTail) +
      '</div>' +
      '<div class="r">' +
      '<span class="kick">As of</span>' +
      '<div class="seg" role="group" aria-label="View the desk as of a date">' +
      W.meta.availableDates.map(function (d) {
        var on = state.asOf === d;
        return '<button data-act="asof" data-d="' + d + '" aria-pressed="' + on + '"' +
          ' aria-label="View the desk as of ' + esc(U.longDate(d)) + '">' +
          esc(d === W.meta.today ? 'Today' : U.monthYear(d)) + '</button>';
      }).join('') +
      '</div>' +
      '<button class="circ" data-act="hintrearm" aria-label="Show the explanatory notes again" title="Show the explanatory notes again">' +
      U.icon('help') +
      (HINTS.remaining(state) ? '<span class="dotb"></span>' : '') +
      '</button>' +
      ONBOARD.themeSwitch() +
      '<button class="circ" data-act="signout" aria-label="Sign out" title="Sign out">' +
      '<span class="avatar avatar--ini ini--teal">' + esc(me().initials) + '</span></button>' +
      '</div></div>';
  }

  /* ------------------------------------------------------------- banners */
  function rewoundBand() {
    if (!isRewound()) return '';
    return '<div class="rewound p p--butter">' +
      '<div class="rw-l"><span class="rw-t">' + esc(V2.copy.rewoundLabel) + ' to ' + esc(U.longDate(state.asOf)) + '</span>' +
      '<span class="rw-d">Nothing observed after this date is visible on any screen.</span></div>' +
      '<span class="r"><button class="btn btn--sm" data-act="asof" data-d="' + W.meta.today + '">Return to today</button></span>' +
      '</div>';
  }

  /* PRD §7, decision 45. Someone in the investment room will ask "did you
     build that filter already knowing who won?" — so the disclosure goes on
     screen, not in a footnote. Pre-empting the question converts the weakest
     moment of the demo into a credibility beat. One line, as specified: any
     longer and it reads as defensiveness rather than disclosure. */
  function lensDisclosure() {
    if (!isRewound()) return '';
    return '<p class="lens p p--lilac">' +
      '<span class="lens-b">The brief is today&rsquo;s. The evidence is ' +
      esc(U.monthYear(state.asOf)) + '&rsquo;s.</span> ' +
      'A mandate says what we are looking for; an observation records what was true. ' +
      'Rewinding hides what Warhol learned later, not the question being asked.' +
      '</p>';
  }

  /* A Scout's mandate defines a NEW scan surface, so it genuinely has latency.
     Filling the gap with §7 beats filling it with an apology. */
  function wireBand() {
    if (!state.firstRun.active || !isScout()) return '';
    return '<div class="wire p p--flat hatched">' +
      '<div><span class="kick">Your live drop</span>' +
      '<p class="note">Your brief is a new scan surface, so it is running now. The first live drop ' +
      'arrives at the next <b>' + esc(V2.copy.wire) + '</b>. In the meantime this is the same machine ' +
      'against ' + esc(U.monthYear(state.asOf)) + ' — names nobody had heard of yet, and you can ' +
      'check what happened to each of them.</p></div></div>';
  }

  /* ------------------------------------------------------------- drop view */
  function dropView() {
    var m = mandate(state.mandateId);
    if (!m) return '<p class="note">No brief selected.</p>';
    var list = dropList();
    var rewound = isRewound();
    var resurf = list.filter(function (c) { return c.resurfaced; }).length;
    var done = list.length - remaining();

    var head = '<header class="pagehead">' +
      '<h1>' + (rewound ? 'The drop, ' + esc(U.longDate(state.asOf)) : "Today's drop") + '</h1>' +
      '<p class="deck">' + (rewound
        ? esc(U.plural(list.length, 'creator')) + ' scored on what was observable that morning, against the brief you just wrote. Nothing after this date is in the model.'
        : 'Ranked, threshold-gated, capped. Enough on each card to kill it without opening. ' + verbs().label + ' needs the report.') + '</p>' +

      '<div class="mandates">' + allMandates().map(function (x) {
        var n = dropCounts(x.id);
        return '<button data-act="mandate" data-m="' + x.id + '" aria-pressed="' + (x.id === state.mandateId) + '" data-zero="' + (n === 0) + '">' +
          esc(x.name) + '<span class="c">' + n + '</span></button>';
      }).join('') + '</div>' +

      '<div class="brief">' +
      '<span class="lab">Brief</span>' +
      '<span class="sub-t">' + esc(m.category || 'No category — wildcard') + ' ' + DOT + ' ' +
      esc([].concat(m.platforms).join(', ')) + ' ' + DOT + ' ' + esc(m.audienceBand) + ' ' + DOT + ' ' +
      esc(m.geo) + ' ' + DOT + ' owner ' + esc(m.owner) + '</span></div>' +
      '</header>';

    var hint = HINTS.at(state, 'asof');

    if (!list.length) return head + hint + zeroState(m);

    var progress = '<div class="worked">' +
      '<span class="lab">Worked</span>' +
      '<span class="pill">' + done + ' / ' + list.length + '</span>' +
      U.track(list.length ? (done / list.length) * 100 : 0) +
      '<span class="sub-t">' + list.length + ' surfaced ' + DOT + ' ' + resurf + ' resurfaced ' + DOT +
      ' threshold ' + W.meta.scoreThreshold + ' ' + DOT + ' cap ' + W.meta.dropCap + ' ' + DOT + ' ' +
      esc(V2.copy.minConfidence.toLowerCase()) + ' ' + U.pct(W.meta.coverageGate) + '</span>' +
      '</div>';

    var cards = list.map(function (c, i) {
      var d = decisionFor(c.id);
      return d ? decidedRow(c, d) : card(c, i + 1);
    }).join('');

    var finish = remaining() === 0 ? '<div class="done p p--teal">' +
      '<h2>Drop worked to zero.</h2>' +
      '<p>Every name has a decision and an owner. The reasons are now suppression rules and training labels. Close Warhol; it will have the next one at 06:00.</p>' +
      '</div>' : '';

    return head + hint + progress + cards + finish;
  }

  function card(c, rank) {
    var t = U.inventoryTally(c.inventory);
    var quotes = pickQuotes(c, 2);
    var g = c.pillars.gap, s = c.pillars.strain;
    var v = verbs();

    var flags = '';
    if (c.alert) {
      flags += '<div class="flag" data-t="alert"><b>Acute</b>' +
        '<span class="why">' + esc(c.alert.text) + '</span>' +
        '<span class="sub-t">flagged ' + esc(U.shortDate(c.alert.at)) + '</span></div>';
    }
    if (c.resurfaced) {
      flags += '<div class="flag" data-t="resurfaced"><b>Resurfaced</b>' +
        '<span class="why">' + esc(c.resurfaced.reason) + '. ' + esc(c.resurfaced.trigger) + '</span>' +
        '<span class="sub-t">was ' + c.resurfaced.previousScore + ' on ' + esc(U.shortDate(c.resurfaced.since)) + '</span></div>';
    }

    return '<article class="card p" data-id="' + c.id + '">' + flags +
      '<div class="cardtop">' +
      '<div class="ident">' + U.initials(c) +
      '<div class="namebits">' +
      '<h3>' + esc(c.name) + ' <span class="sub-t">#' + rank + '</span></h3>' +
      '<div class="handle">' + esc(c.handle) + ' ' + DOT + ' ' + esc(c.primaryPlatform) + ' ' + DOT + ' ' +
      U.followers(c.audience.total) + ' across ' + c.platforms.length + '</div>' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      '</div></div>' + U.scoreBox(c) + '</div>' +

      '<div class="evidence">' +
      '<div>' + (quotes.length
        ? quotes.map(function (e) { return U.quoteBlock(e, state.asOf, { url: false }); }).join('') +
        (c.evidence.length > quotes.length ? '<div class="qmore">' + (c.evidence.length - quotes.length) + ' more cited in the report</div>' : '')
        : '<p class="sub-t">No quoted evidence captured at this depth. Open the report before acting.</p>') +
      '</div>' +
      '<div class="invbox">' +
      '<span class="lab">Monetization inventory</span>' +
      '<ul class="invstrip">' + (c.inventory || []).map(function (r) {
        return '<li>' + U.vmark(r.state) + '<span class="it">' + esc(r.item) + '</span>' +
          '<span class="sf">' + r.surfacesChecked + ' surf.</span></li>';
      }).join('') + '</ul>' +
      '<p class="invsum">' + esc(invSentence(t)) + '</p>' +
      '</div></div>' +

      '<div class="pillars">' +
      pillBit('Gap', g.score, g.max) +
      pillBit('Strain', s.score, s.max) +
      '<span class="gate"><span class="k">Format fit</span><span class="v">' + esc(c.pillars.fit.verdict) + '</span>' +
      '<span class="k">gate, 0 pts</span></span>' +
      '<span class="pstat"><span class="k">Confidence</span>' +
      '<span class="v"' + (g.coverage < W.meta.coverageGate ? ' data-low="true"' : '') + '>' + U.pct(g.coverage) + '</span></span>' +
      '</div>' +

      '<div class="playline"><span class="lab">Recommended play</span>' +
      '<span class="pv">' + esc(c.play.label) + '</span></div>' +

      annotationStrip(c) +
      (state.passTray === c.id ? passTray(c) : '') +

      '<div class="acts">' +
      '<button class="btn" data-act="report" data-id="' + c.id + '">Open Scout Report</button>' +
      '<button class="btn btn--out" data-act="watch" data-id="' + c.id + '">Watch</button>' +
      '<button class="btn btn--ghost" data-act="passtray" data-id="' + c.id + '">Pass' + ELL + '</button>' +
      '<span class="spacer"></span>' +
      '<span class="note">' + esc(v.label) + ' requires the report</span>' +
      '</div>' +
      /* card() runs once per creator, so this anchor has to be scoped to the
         one card that opened a tray — otherwise the bubble renders six times. */
      (state.passTray === c.id ? HINTS.at(state, 'decide') : '') +
      '</article>';
  }

  /* Other members' calls appear as annotations on the card, never as
     removals. The disagreement is the most valuable label in the set. */
  function annotationStrip(c) {
    var rows = V2.annotationsFor(c.id);
    if (!rows.length) return '';
    return '<div class="annots">' + rows.map(function (a) {
      var did = a.verb === 'pass'
        ? 'passed this' + (a.reasonCode ? ' — ' + (reason(a.reasonCode) || {}).label.toLowerCase() : '')
        : a.verb === 'refer' ? 'referred this to the desk'
          : a.verb === 'promote' ? 'promoted this'
            : 'is watching this';
      return '<div class="annot">' +
        '<span class="av">' + esc(a.initials) + '</span>' +
        '<span><span class="who">' + esc(a.actor) + '</span> ' + esc(did) +
        (a.note ? ' ' + DOT + ' ' + esc(a.note) : '') + '</span>' +
        '<span class="sub-t">' + esc(U.shortDate(a.at)) + '</span>' +
        '</div>';
    }).join('') + '</div>';
  }

  function pillBit(k, v, max) {
    return '<span class="pstat"><span class="k">' + esc(k) + '</span>' +
      U.track((v / max) * 100) +
      '<span class="v">' + v + '<span class="sub-t">/' + max + '</span></span></span>';
  }

  function invSentence(t) {
    var bits = [];
    if (t.verified_absent === t.total && t.total) bits.push('Nothing owned.');
    else if (t.verified_absent) bits.push(t.verified_absent + ' of ' + t.total + ' lines verified absent.');
    if (t.surfaces) bits.push(t.surfaces + ' surfaces checked.');
    if (t.not_found) bits.push(t.not_found + ' inconclusive, which is why confidence is not 100%.');
    if (t.present) bits.push(t.present + ' present, so no gap on ' + (t.present > 1 ? 'those lines' : 'that line') + '.');
    return bits.join(' ') || 'No inventory captured at this depth.';
  }

  function pickQuotes(c, n) {
    var ev = c.evidence || [];
    var buy = ev.filter(function (e) { return e.kind === 'comment'; });
    var say = ev.filter(function (e) { return e.kind === 'caption'; });
    var out = [];
    if (buy[0]) out.push(buy[0]);
    if (say[0] && out.length < n) out.push(say[0]);
    ev.forEach(function (e) { if (out.length < n && out.indexOf(e) === -1) out.push(e); });
    return out.slice(0, n);
  }

  function passTray(c) {
    return '<div class="passtray">' +
      '<div class="hd"><span class="lab">Pass with a reason</span>' +
      '<span class="q">The reason is the suppression rule and the training label. Pick the true one.</span></div>' +
      '<div class="reasons">' + V2.passReasons.map(function (r) {
        return '<button data-act="pass" data-id="' + c.id + '" data-code="' + r.code + '">' +
          '<b>' + esc(r.label) + '</b><span>' + esc(r.suppression) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="passtray-ft"><button class="btn btn--ghost btn--sm" data-act="passtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  function stateLabel(verb) {
    if (verb === 'pass') return 'Passed';
    if (verb === 'watch') return 'Watched';
    if (verb === 'refer') return 'Referred';
    return 'Promoted';
  }

  function decidedRow(c, d) {
    var label = stateLabel(d.verb), detail;
    if (d.verb === 'pass') {
      var r = reason(d.reasonCode);
      detail = r.label + '. Suppression: ' + r.suppression;
    } else if (d.verb === 'watch') {
      detail = 'Re-scored nightly. Resurfaces on a strain trigger or a score move of 5 or more.';
    } else if (d.verb === 'refer') {
      detail = 'Awaiting a desk decision. Not in anyone else’s drop, and it is also the request to authorize a Study.';
    } else {
      detail = 'Outreach package generated. Phase Two record created.';
    }
    return '<div class="decided">' +
      '<span class="pill' + (d.verb === 'pass' ? '' : ' pill--ok') + '">' + esc(label) + '</span>' +
      '<span class="nm">' + esc(c.name) + '</span>' +
      '<span class="sup">' + esc(detail) + '</span>' +
      '<span class="spacer"></span>' +
      '<span class="sup">' + esc(me().name) + '</span>' +
      '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button>' +
      '</div>';
  }

  /* ------------------------------------------------------------ zero state */
  function zeroState(m) {
    var other = allMandates().filter(function (x) { return dropCounts(x.id) > 0; });
    var line = null;
    W.timeline.forEach(function (t) {
      if (t.text.indexOf(m.name.split(' ')[0]) > -1 && t.text.indexOf('0 above') > -1) line = t;
    });
    return '<section class="zero p">' +
      '<div class="zhead">' +
      '<h2>Warhol found nothing worth your time today.</h2>' +
      '<p class="say">The brief ran at 06:00 and scored the cohort. Nothing cleared ' + W.meta.scoreThreshold +
      ', so nothing is here. This is the drop working, not the drop failing.</p>' +
      '<p class="say">A fixed daily ten would have handed you two real names and eight pieces of filler, and within a fortnight you would have stopped reading the list. The cap protects your attention. The threshold protects your trust.</p>' +
      '</div>' +
      '<div class="cols">' +
      '<div><span class="lab">What ran</span>' +
      '<ul class="kv">' +
      '<li><span class="k">Brief</span><span class="v">' + esc(m.name) + '</span></li>' +
      '<li><span class="k">Platforms</span><span class="v">' + esc([].concat(m.platforms).join(' / ')) + '</span></li>' +
      '<li><span class="k">Audience band</span><span class="v">' + esc(m.audienceBand) + '</span></li>' +
      '<li><span class="k">Geo / language</span><span class="v">' + esc(m.geo) + ' / ' + esc(m.language) + '</span></li>' +
      '<li><span class="k">Owner</span><span class="v">' + esc(m.owner) + '</span></li>' +
      '<li><span class="k">Score threshold</span><span class="v">' + W.meta.scoreThreshold + '</span></li>' +
      '<li><span class="k">' + esc(V2.copy.minConfidence) + '</span><span class="v">' + U.pct(W.meta.coverageGate) + '</span></li>' +
      '<li><span class="k">Cap</span><span class="v">' + W.meta.dropCap + '</span></li>' +
      '</ul>' +
      (line ? '<p class="sub-t zero-line">' + esc(line.at.replace('T', ' ')) + ' ' + DOT + ' ' + esc(line.text) + '</p>' : '') +
      '</div>' +
      '<div><span class="lab">Where the work is</span>' +
      '<div class="go">' + other.map(function (x) {
        return '<button data-act="mandate" data-m="' + x.id + '"><span>' + esc(x.name) + '</span>' +
          '<span class="c">' + dropCounts(x.id) + ' waiting</span></button>';
      }).join('') +
      '<button data-act="view" data-view="watchlist"><span>Watchlist</span><span class="c">' + watchlist().length + ' being re-scored</span></button>' +
      '</div>' +
      '<p class="note zero-note">Watched names are re-scored every night. When one crosses a threshold it comes back into this drop with the reason attached, so there is no second inbox to keep.</p>' +
      '</div></div></section>';
  }

  /* ----------------------------------------------------------- report view */
  function reportView() {
    var c = creator(state.reportId);
    if (!c) return '<p class="note">Not found.</p>';
    var rewound = isRewound();
    var t = U.inventoryTally(c.inventory);
    var g = c.pillars.gap, s = c.pillars.strain, f = c.pillars.fit;
    var d = decisionFor(c.id);
    var v = verbs();
    var eff = V2.effortFor(c, state.asOf);

    /* identity */
    var out = '<header class="rpthead"><div class="row"><div>' +
      '<div class="rpt-tags">' +
      '<span class="pill pill--solid">Scout Report</span>' +
      (c.sourceTag === 'manual' ? '<span class="pill pill--warn">Manual entry</span>' : '') +
      (c.resurfaced ? '<span class="pill pill--ok">Resurfaced</span>' : '') +
      (c.alert ? '<span class="pill pill--stop">Acute trigger</span>' : '') +
      (rewound ? '<span class="pill">As of ' + esc(U.longDate(state.asOf)) + '</span>' : '') +
      '</div>' +
      '<h1>' + esc(c.name) + '</h1>' +
      '<div class="handle">' + esc(c.handle) + ' ' + DOT + ' ' + esc(c.primaryPlatform) + ' ' + DOT + ' ' +
      U.num(c.audience.total) + ' total audience ' + DOT + ' ' +
      (c.audience.growth90d > 0 ? '+' : '') + Math.round(c.audience.growth90d * 100) + '% in 90d</div>' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      '<div class="idrow">' + c.platforms.map(function (p) {
        return '<span class="plat" data-weak="' + (p.matchConfidence < 0.9) + '">' +
          '<span class="n">' + esc(p.name) + '</span>' +
          '<span class="f">' + U.followers(p.followers) + '</span>' +
          '<span class="mc">id match ' + U.pct(p.matchConfidence) + '</span></span>';
      }).join('') + '</div>' +
      '</div>' + U.scoreBox(c) + '</div></header>' +
      HINTS.at(state, 'confidence');

    if (c.alert) {
      out += '<div class="flag flag--solo" data-t="alert"><b>Acute</b>' +
        '<span class="why">' + esc(c.alert.text) + '</span>' +
        '<span class="sub-t">flagged ' + esc(U.shortDate(c.alert.at)) + '</span></div>';
    }
    if (c.resurfaced) {
      out += '<div class="flag flag--solo" data-t="resurfaced"><b>Came back because</b>' +
        '<span class="why">' + esc(c.resurfaced.reason) + '. ' + esc(c.resurfaced.trigger) + '</span>' +
        '<span class="sub-t">first seen ' + esc(U.shortDate(c.resurfaced.since)) + ', scored ' + c.resurfaced.previousScore + '</span></div>';
    }
    if (c.sourceTag === 'manual') {
      out += '<div class="override p p--butter"><div class="t">Scout override</div>' +
        '<p>Added by hand, not by the scan, and tagged as such so machine-found and human-found stay separable in the label data. ' +
        'Scored ' + c.score + ' against a threshold of ' + W.meta.scoreThreshold + ', with confidence at ' + U.pct(g.coverage) +
        ' against a floor of ' + U.pct(W.meta.coverageGate) + '. It would not have entered the drop on its own. That is the point of the entry.</p></div>';
    }

    /* the case */
    out += '<section class="sect"><div class="hd"><h2>The case</h2>' +
      '<span class="n">Argument first. Numbers underneath it.</span></div>' +
      '<div class="p case">' +
      '<div>' +
      '<p class="argument">' + U.argument(c) + '</p>' +
      '<div class="quotes"><span class="lab">What the audience is saying</span>' +
      (c.evidence.length
        ? c.evidence.map(function (e) { return U.quoteBlock(e, state.asOf); }).join('')
        : '<p class="sub-t">No quoted evidence captured for this creator at this depth.</p>') +
      '</div></div>' +
      '<div><span class="lab">Monetization inventory</span>' +
      '<p class="note">Only <b>verified absent</b> scores as a gap. <b>Not found</b> is inconclusive: it scores neutral and pulls confidence down.</p>' +
      '<div class="invtable">' + (c.inventory || []).map(function (r) {
        return '<div class="invrow"><div class="r1">' +
          '<span class="it">' + esc(r.item) + '</span>' + U.vstate(r.state) +
          '<span class="sub-t">' + r.surfacesChecked + ' surfaces</span></div>' +
          '<p class="note">' + esc(r.note) + '</p>' +
          U.provLine(r.source, r.observedAt, 'rule', state.asOf) + '</div>';
      }).join('') + '</div>' +
      '<p class="invsum">' + esc(invSentence(t)) + '</p>' +
      HINTS.at(state, 'verification') +
      '</div></div>' +
      ledgerBlock(c, eff) +
      '</section>';

    /* scoring */
    out += '<section class="sect"><div class="hd"><h2>How it scored</h2>' +
      '<span class="n">Two weighted pillars. One gate that contributes nothing.</span></div>' +
      HINTS.at(state, 'engine') +
      '<div class="p scoring">' +
      pillarCol('Monetization Gap', 'The buy signal.', g, 60) +
      pillarCol('Operator Strain', 'The timing trigger.', s, 40) +
      '</div>' +

      '<div class="gatepanel p p--dash">' +
      '<div class="hd"><h3>Format Fit</h3>' +
      '<span class="nopts">Gate. Pass or fail. Contributes 0 points to the score.</span>' +
      U.engTag(f.engine) +
      '<span class="verdict pill pill--ok">' + esc(f.verdict) + '</span></div>' +
      '<div class="gategrid">' + f.subsignals.map(function (x) {
        return '<div><div class="l">' + esc(x.label) + '</div><div class="v">' + esc(x.value) + '</div>' +
          '<div class="d">' + esc(x.detail) + '</div></div>';
      }).join('') + '</div></div></section>';

    /* confidence */
    var gateFail = g.coverage < W.meta.coverageGate;
    out += '<section class="sect"><div class="hd"><h2>Confidence</h2>' +
      '<span class="n">Displayed beside the score. Never folded into it.</span></div>' +
      '<div class="p confpanel" data-gate="' + (gateFail ? 'fail' : 'ok') + '">' +
      '<div><span class="lab">Overall confidence</span><div class="big">' + U.pct(c.confidence) + '</div>' +
      '<p class="cap">Share of every absence check that resolved to present or verified absent.</p></div>' +
      '<div class="gatecell"><span class="lab">Gap confidence</span><div class="big">' + U.pct(g.coverage) + '</div>' +
      '<p class="cap">' + (gateFail
        ? 'Below the ' + U.pct(W.meta.coverageGate) + ' floor. Cannot enter a drop on its own, whatever the score says.'
        : 'Clears the ' + U.pct(W.meta.coverageGate) + ' floor, so the gap is defensible.') + '</p></div>' +
      '<div><span class="lab">Inventory resolved</span><div class="big">' + t.resolved + ' / ' + t.total + '</div>' +
      '<p class="cap">' + (t.not_found
        ? t.not_found + ' line' + (t.not_found > 1 ? 's' : '') + ' inconclusive. Resolve ' + (t.not_found > 1 ? 'them' : 'it') + ' before the call.'
        : 'Every line resolved. Nothing is being assumed.') + '</p></div>' +
      '</div></section>';

    /* samples */
    if (c.samples && c.samples.length) {
      out += '<section class="sect"><div class="hd"><h2>What the work looks like</h2>' +
        '<span class="n">Observed content, not thumbnails.</span></div>' +
        '<div class="p samples">' + c.samples.map(function (sm) {
          return '<div class="sample"><div class="swatch ' + U.sampleField(sm.tone) + '"></div>' +
            '<div class="body"><div class="t">' + esc(sm.title) + '</div>' +
            '<div class="m"><span class="pill">' + esc(sm.platform) + '</span>' +
            '<span class="sub-t">' + esc(sm.metric) + '</span>' +
            '<span class="sub-t">' + esc(sm.length) + '</span>' +
            '<span class="sub-t">' + esc(U.shortDate(sm.observedAt)) + '</span></div>' +
            '</div></div>';
        }).join('') + '</div></section>';
    }

    /* play */
    out += '<section class="sect"><div class="hd"><h2>Recommended play</h2>' +
      '<span class="n">One, from what Paradium actually operates.</span></div>' +
      '<div class="p playpanel">' +
      '<div class="badge p p--teal"><span class="kick">The play</span>' +
      '<div class="p2">' + esc(c.play.label) + '</div></div>' +
      '<div><p class="why">' + esc(c.play.why) + '</p>' +
      '<p class="caveat">No revenue estimate. Warhol does not model what it cannot observe.</p></div>' +
      '</div></section>';

    /* outcome reveal */
    if (rewound && c.outcome) {
      out += '<section class="sect outcome"><div class="hd"><h2>What actually happened</h2>' +
        '<span class="n">Observed after the snapshot. Invisible to the model above.</span></div>' +
        (state.revealed[c.id] ? outcomeCard(c) :
          '<button class="revealbtn" data-act="reveal" data-id="' + c.id + '">' +
          '<span class="t">Reveal the outcome</span>' +
          '<span class="s">' + esc(c.outcome.window) + '</span></button>') +
        '</section>';
    }

    /* decisions */
    if (d) {
      out += '<div class="decide">' + decidedInline(c, d) + '</div>';
    } else if (state.passTray === c.id) {
      out += '<div class="p passwrap">' + passTray(c) + '</div>';
    } else {
      out += '<div class="decide">' +
        '<button class="btn" data-act="' + v.act + '" data-id="' + c.id + '">' + esc(v.label) +
        (rewound || !isScout() ? '' : ' ' + ARR + ' outreach package') + '</button>' +
        '<button class="btn btn--out" data-act="watch" data-id="' + c.id + '">Watch</button>' +
        '<button class="btn btn--ghost" data-act="passtray" data-id="' + c.id + '">Pass' + ELL + '</button>' +
        '<span class="spacer"></span>' +
        '<span class="who">Recorded as ' + esc(me().name) + ' ' + DOT + ' ' + esc(U.longDate(state.asOf)) +
        ' ' + DOT + ' score snapshot ' + c.score + '</span>' +
        '</div>';
    }
    return out;
  }

  /* ------------------------------------------------------------- the Ledger */
  /* "No newsletter — six surfaces checked" is an assertion until somebody can
     open the six. At creator scope this shows EFFORT, never currency: pricing
     a human being on screen is both grim and the wrong optimisation target. */
  function ledgerBlock(c, eff) {
    var rows = V2.ledgerFor(c, state.asOf);
    var open = !!state.ledgerOpen[c.id];
    if (!rows.length) return '';

    var effort = eff
      ? U.plural(eff.surfaces, 'surface') + ' checked ' + DOT + ' ' +
      U.plural(Math.max(1, eff.days), 'day') + ' tracked ' + DOT + ' ' +
      eff.passes.map(function (p) { return V2.DEPTH[p].label; }).join(', ') + ' run'
      : '';

    var head = '<button class="ledger-tog" data-act="ledger" data-id="' + c.id + '" aria-expanded="' + open + '">' +
      '<span class="ic">' + U.icon('ledger') + '</span>' +
      '<span class="lt"><b>The check record</b>' +
      '<span class="sub-t">' + esc(effort) + '</span></span>' +
      '<span class="ipill">' + (open ? 'Hide' : 'Open the ' + rows.length) + '</span>' +
      '</button>';

    if (!open) return '<div class="ledger">' + head + '</div>';

    return '<div class="ledger">' + head +
      '<div class="wrapx"><table class="ct ledger-t">' +
      '<thead><tr>' +
      '<th>Surface</th><th>What was found</th><th>Source</th><th>Checked</th><th>State</th><th>Depth</th>' +
      '</tr></thead><tbody>' +
      rows.map(function (r) {
        return '<tr>' +
          '<td><b>' + esc(r.surface) + '</b></td>' +
          '<td>' + esc(r.value) + '</td>' +
          '<td class="lsrc">' + esc(r.url) + '</td>' +
          '<td>' + esc(U.shortDate(r.observedAt)) + '</td>' +
          '<td>' + U.vstate(r.state) + '</td>' +
          '<td><span class="pill" title="' + esc(V2.DEPTH[r.depth].note) + '">' +
          esc(V2.DEPTH[r.depth].label) + '</span> ' + U.engTag(r.engine) + '</td>' +
          '</tr>';
      }).join('') +
      '</tbody></table></div>' +
      '<p class="sub-t ledger-ft">Every row is one check, with the surface, the date it was made and what resolved it. ' +
      'Names only exist here from ' + esc(V2.DEPTH.probe.label) + ' depth upward, where an actual judgment was made.</p>' +
      '</div>';
  }

  function decidedInline(c, d) {
    var txt, ok = true;
    if (d.verb === 'pass') {
      txt = 'Passed: ' + reason(d.reasonCode).label + '. ' + reason(d.reasonCode).suppression;
      ok = false;
    } else if (d.verb === 'watch') {
      txt = 'On the watchlist. Re-scored nightly; resurfaces with a stated trigger.';
    } else if (d.verb === 'refer') {
      txt = 'Referred to the desk. It is also the request to authorize a Study, which only a Scout can approve.';
    } else {
      txt = 'Promoted. Outreach package generated and a Phase Two record created.';
    }
    return '<span class="pill' + (ok ? ' pill--ok' : '') + '">' + esc(stateLabel(d.verb)) + '</span>' +
      '<span class="dec-t">' + esc(txt) + '</span>' +
      '<span class="spacer"></span>' +
      (d.verb === 'promote' ? '<button class="btn btn--sm" data-act="outreach" data-id="' + c.id + '">Open outreach package</button>' : '') +
      '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button>';
  }

  function pillarCol(name, role, p, max) {
    return '<div>' +
      '<div class="pillhd"><h3>' + esc(name) + '</h3>' + U.engTag(p.engine) +
      '<span class="sc">' + p.score + '<small>/' + max + '</small></span></div>' +
      U.track((p.score / max) * 100, 'pillbar') +
      '<p class="pillrole">' + esc(role) + '</p>' +
      '<div class="subs">' + p.subsignals.map(function (x) {
        return '<div class="sig" data-e="' + U.engineKind(x.engine) + '">' +
          '<div class="r1"><span class="l">' + esc(x.label) + '</span>' + U.engTag(x.engine) +
          '<span class="w">' + x.weightPct + '% of pillar</span></div>' +
          '<div class="val">' + esc(x.value) + '</div>' +
          '<p class="det">' + esc(x.detail) + '</p></div>';
      }).join('') + '</div></div>';
  }

  function outcomeCard(c) {
    var o = c.outcome;
    var dud = !o.built || !o.built.length;
    return '<div class="outcomecard p p--ink' + (reduceMotion.matches ? '' : ' reveal-anim') + '">' +
      '<div class="zhead"><div class="win">' + esc(o.window) + '</div>' +
      '<h3>' + esc(o.headline) + '</h3>' +
      '<p class="note">' + esc(o.note) + '</p></div>' +
      '<div class="cols">' +
      '<div><span class="kick">Audience now</span><div class="now">' + esc(o.followersNow) + '</div>' +
      '<div class="sub-t">was ' + U.followers(c.audience.total) + ' at snapshot</div></div>' +
      '<div><span class="kick">' + (dud ? 'What got built' : 'What got built, by somebody else') + '</span>' +
      (dud ? '<p class="nothing">Nothing. Warhol ranked him fifth of six and fifth of six is where he stayed. The ordering held, which is the only part of a rewind worth trusting.</p>'
        : '<ul class="built">' + o.built.map(function (b) {
          return '<li>' + U.vmark('verified_absent') + '<span>' + esc(b) + '</span></li>';
        }).join('') + '</ul>') +
      '</div></div></div>';
  }

  /* -------------------------------------------------------- watchlist view */
  function watchlistView() {
    var list = watchlist();
    var head = '<header class="pagehead"><h1>Watchlist</h1>' +
      '<p class="deck">Kept, not killed. Re-scored every night against the same model. When one crosses a threshold it comes back into the drop with the reason attached, so this never becomes a second inbox.</p>' +
      '</header>';

    if (!list.length) {
      return head + '<section class="zero p"><div class="zhead">' +
        '<h2>Nothing kept at this date.</h2>' +
        '<p class="say">Watch decisions are recorded with a timestamp. With the date set to ' +
        esc(U.longDate(state.asOf)) + ', anything kept later is not visible, because it had not happened yet.</p></div></section>';
    }

    /* Mandate scope, so currency is allowed here — this is what the brief
       costs to run, not what one person is worth. */
    var cost = V2.watchCost;
    var costBar = '<div class="wcost p p--flat">' +
      '<div><span class="kick">What this costs to run</span>' +
      '<p class="note">Watching is the only cost that compounds. Every name here is re-scored nightly ' +
      'for as long as it stays.</p></div>' +
      '<div class="wcost-n">' +
      '<div class="sub"><span class="k">Per month</span><span class="v">' + esc(cost.currency) + cost.perMonth + '</span></div>' +
      '<div class="sub"><span class="k">Tracked</span><span class="v">' + list.length + '</span></div>' +
      '</div></div>';

    var rows = list.map(function (c) {
      var d = decisionFor(c.id);
      var trig = c.nextTrigger || 'Re-scored nightly. Resurfaces on a strain trigger or a score move of 5 or more.';
      var since = c.watchedSince ? U.longDate(c.watchedSince) : U.longDate(state.asOf);
      var rec = V2.pruneFor(c.id);

      /* Warhol recommends; a human decides. Nothing leaves the watchlist
         without a person choosing it — an auto-prune is a state change
         nobody chose. And it is a Pass reason, never a fourth verb. */
      var prune = rec ? '<div class="prune' + (rec.recommend ? ' prune--stop hatched' : ' prune--keep') + '">' +
        '<span class="kick">' + esc(rec.headline) + '</span>' +
        '<p class="note">' + esc(rec.why) + '</p>' +
        (rec.recommend
          ? '<button class="btn btn--sm btn--out" data-act="prune" data-id="' + c.id + '">Stop watching' + ELL + '</button>'
          : '') +
        '</div>' : '';

      return '<div class="wrow">' + U.initials(c) +
        '<div><div class="nm">' + esc(c.name) + '</div>' +
        '<div class="handle">' + esc(c.handle) + ' ' + DOT + ' kept ' + esc(since) +
        (d ? ' ' + DOT + ' by ' + esc(me().name) : '') + '</div>' +
        '<p class="kept">' + esc(c.headline) + '</p>' +
        '<div class="trigger p p--teal"><span class="k">Next trigger</span><span class="v">' + esc(trig) + '</span></div>' +
        prune +
        (state.passTray === c.id ? passTray(c) : '') +
        '</div>' +
        '<div class="right">' + U.scoreBox(c) +
        '<button class="btn btn--sm btn--out" data-act="report" data-id="' + c.id + '" data-from="watchlist">Open Scout Report</button>' +
        '</div></div>';
    }).join('');

    return head + costBar + '<div class="p wlist">' + rows + '</div>';
  }

  /* ------------------------------------------------------- run a name view */
  function runNameView() {
    var head = '<header class="pagehead"><h1>Run a name</h1>' +
      '<p class="deck">The Scout’s hunch is data too. Paste a handle and Warhol scores it on demand, tags it as manual, and lets it through the threshold as a declared override.</p>' +
      '</header>';

    if (isRewound()) {
      return head + '<section class="zero p"><div class="zhead">' +
        '<h2>On-demand scoring runs against the live web.</h2>' +
        '<p class="say">The desk is set to ' + esc(U.longDate(state.asOf)) +
        '. There is no honest way to fetch a creator as they were on that morning, so this surface is switched off rather than faked.</p>' +
        '<p class="say"><button class="btn" data-act="asof" data-d="' + W.meta.today + '">Return to today</button></p>' +
        '</div></section>';
    }

    var r = W.runANameResult;
    var body = '';

    if (state.run.stage === 'idle') {
      body = '<div class="p runbox">' +
        '<label class="lab" for="runq">Handle or URL</label>' +
        '<form class="runform" data-act="runsubmit">' +
        '<input class="inp" id="runq" type="text" value="' + esc(state.run.query) + '" placeholder="@vancemakesknives" aria-label="Handle or URL" autocomplete="off">' +
        '<button class="btn" type="submit">Score it</button></form>' +
        '<p class="runhint">Manual adds are source-tagged so machine-found and human-found stay separable in the label data. That is what later answers the only question that matters: does Warhol find things a person would have missed?</p>' +
        '</div>';
    } else if (state.run.stage === 'scoring') {
      body = '<div class="p runbox">' +
        '<span class="lab">Resolving ' + esc(state.run.query || r.handle) + '</span>' +
        '<p class="runhint">Every absence check has to land on present, verified absent, or not found. Nothing is assumed missing.</p>' +
        '<ul class="resolving">' + r.inventory.map(function (x, i) {
          var done = i < state.run.step;
          return '<li data-done="' + done + '">' +
            (done ? U.vmark(x.state) : '<span class="vmark"></span>') +
            '<span>' + esc(x.item) + '</span>' +
            '<span class="st">' + (done ? esc(U.VLABEL[x.state]) + ' ' + DOT + ' ' + x.surfacesChecked + ' surfaces' : 'checking' + ELL) + '</span></li>';
        }).join('') + '</ul></div>';
    } else {
      body = '<div class="p runbox">' +
        '<div class="run-done">' +
        '<span class="pill pill--ok">Scored</span>' +
        '<span class="sub-t">' + esc(r.handle) + ' ' + DOT + ' ' + r.score + ' ' + DOT + ' confidence ' + U.pct(r.confidence) + '</span>' +
        '</div>' +
        '<div class="override p p--butter"><div class="t">Scout override</div>' +
        '<p>' + r.score + ' is below the ' + W.meta.scoreThreshold + ' threshold and gap confidence is ' + U.pct(r.pillars.gap.coverage) +
        ' against a ' + U.pct(W.meta.coverageGate) + ' floor, so the scan would never have surfaced this name. Manual entry bypasses both, and the report says so on its face.</p></div>' +
        '<div class="run-acts">' +
        '<button class="btn" data-act="report" data-id="' + r.id + '" data-from="runname">Open Scout Report</button>' +
        '<button class="btn btn--ghost" data-act="runreset">Run another</button></div>' +
        '</div>';
    }
    return head + body;
  }

  /* --------------------------------------------------------- outreach view */
  function outreachView() {
    var c = creator(state.outreachId);
    if (!c) return '<p class="note">Not found.</p>';
    var o = c.outreach;
    var t = U.inventoryTally(c.inventory);
    var who = me();

    return '<header class="pagehead">' +
      '<div class="rpt-tags">' +
      '<span class="pill pill--ok">Promoted</span>' +
      '<span class="pill">Phase Two record created</span>' +
      '<span class="pill">' + esc(who.name) + ' ' + DOT + ' ' + esc(U.longDate(state.asOf)) + '</span>' +
      '</div>' +
      '<h1>Outreach package: ' + esc(c.name) + '</h1>' +
      '<p class="deck">Everything a first contact needs was already in the report, so generating this costs nothing. Warhol writes it. You send it.</p>' +
      '</header>' +

      '<div class="p pkg">' +
      '<div><span class="lab">The signals, in plain language</span>' +
      '<ul class="plain">' + o.bullets.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span>' + esc(b) + '</span></li>';
      }).join('') + '</ul>' +
      '<span class="lab lab--gap">The play</span>' +
      '<p class="pkg-play">' + esc(c.play.label) + '</p>' +
      '<p class="note">' + esc(c.play.why) + '</p>' +
      '<span class="lab lab--gap">Evidence to bring</span>' +
      '<ul class="kv">' +
      '<li><span class="k">Warhol score</span><span class="v">' + c.score + ' / confidence ' + U.pct(c.confidence) + '</span></li>' +
      '<li><span class="k">Inventory</span><span class="v">' + t.verified_absent + ' of ' + t.total + ' verified absent</span></li>' +
      '<li><span class="k">Surfaces checked</span><span class="v">' + t.surfaces + '</span></li>' +
      '<li><span class="k">Quoted comments</span><span class="v">' + (c.evidence || []).length + ' cited</span></li>' +
      '</ul></div>' +

      '<div><span class="lab">Draft first contact</span>' +
      '<div class="draft">' +
      '<div class="subj"><span class="lab">Subject</span><span class="v">' + esc(o.subject) + '</span></div>' +
      '<div class="msg"><p>' + esc(o.opener) + '</p>' +
      '<ul>' + o.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
      '<p>' + esc(o.close) + '</p>' +
      '<p class="sig-off">' + esc(who.name) + '<br><span class="sub-t">' + esc(who.title) + ', Paradium</span></p>' +
      '</div></div>' +
      '<div class="run-acts">' +
      '<button class="btn" data-act="copy" data-id="' + c.id + '">' + (state.copied ? 'Copied to clipboard' : 'Copy the draft') + '</button>' +
      '<button class="btn btn--ghost" data-act="view" data-view="drop">Back to the drop</button>' +
      '</div>' +
      '<p class="neversend"><b>Warhol never sends.</b> Owning outreach would inherit deliverability and relationship problems that belong to a person, and would turn a listening tool into a CRM. The draft is yours to edit and send from your own inbox.</p>' +
      '</div></div>';
  }

  /* ------------------------------------------------------------- rendering */
  /* Views arm the hints they could fire; render picks ONE, highest priority
     first. Three of the five live on the Scout Report, and stacking them is
     the upfront tour §6.9 refuses, rebuilt by accident. */
  function armHints() {
    HINTS.clearArmed();
    if (state.session.phase !== 'app') return;
    if (state.view === 'drop') HINTS.arm('h_asof');
    if (state.view === 'report') {
      HINTS.arm('h_verification');
      HINTS.arm('h_confidence');
      HINTS.arm('h_engine');
    }
    if (state.pendingHint) HINTS.arm(state.pendingHint);

    state.hints.open = HINTS.pick(state);
    if (state.hints.open) {
      state.hints.seen[state.hints.open] = true;
      if (state.pendingHint === state.hints.open) state.pendingHint = null;
    }
  }

  function render() {
    document.documentElement.setAttribute('data-when', isRewound() ? 'rewound' : 'live');
    armHints();

    var fade = state.animate && !reduceMotion.matches ? ' viewfade' : '';
    state.animate = false;
    var html;

    if (state.session.phase === 'signedout') {
      html = '<div class="slab slab--solo slab--gate">' +
        '<main class="main" id="main">' + ONBOARD.signIn() + '</main></div>';

    } else if (state.session.phase === 'onboarding') {
      html = '<div class="slab slab--solo">' +
        '<main class="main" id="main"><div class="wrap' + fade + '">' +
        ONBOARD.wizard(state) + '</div></main></div>';

    } else {
      var body;
      if (state.view === 'report') body = reportView();
      else if (state.view === 'watchlist') body = watchlistView();
      else if (state.view === 'runname') body = runNameView();
      else if (state.view === 'outreach') body = outreachView();
      else body = dropView();

      html = '<div class="slab slab--app">' + railHTML() +
        '<main class="main" id="main">' + topHTML() +
        rewoundBand() + wireBand() + lensDisclosure() +
        '<div class="wrap' + fade + '">' + body + '</div>' +
        '</main></div>';
    }

    document.getElementById('app').innerHTML = html;
  }

  /* --------------------------------------------------------------- actions */
  function go(view, from) {
    clearTimers();
    state.view = view;
    state.passTray = null;
    state.copied = false;
    state.animate = true;
    if (from) state.from = from;
    render();
    /* The slab is the scroll container, not the window. */
    var main = document.getElementById('main');
    if (main) main.scrollTop = 0;
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('warhol-v2-theme', t); } catch (e) { /* file:// */ }
  }

  /* The wizard hands over. A Spotter's mandate filters an index that already
     exists, so there is nothing to wait for. A Scout's defines a NEW scan
     surface, so they land in the rewound cohort while theirs spins up. */
  function completeWizard() {
    var made = ONBOARD.mandateFrom(state);
    var m = made.mandate;
    if (made.isNew && m) {
      var exists = false;
      state.userMandates.forEach(function (x) { if (x.id === m.id) exists = true; });
      if (!exists) state.userMandates.push(m);
    }
    var mid = m ? m.id : 'm_food';

    state.session.phase = 'app';
    state.mandateId = mid;
    state.view = 'drop';
    state.firstRun = { active: true, mandateId: mid, joined: state.wizard.overlap.joined };
    state.asOf = isScout() ? W.meta.backtestDate : W.meta.today;
    go('drop');
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act');
    var id = el.getAttribute('data-id');

    /* Theme is global to all three phases. */
    if (act === 'theme') {
      setTheme(el.getAttribute('data-set') ||
        (document.documentElement.getAttribute('data-theme') === 'dark' ? 'light' : 'dark'));
      render();
      return;
    }

    if (act === 'signout') {
      state.session = { phase: 'signedout', role: null, userId: null };
      state.wizard = null;
      state.firstRun = { active: false, mandateId: null, joined: false };
      state.decisions = {};
      state.userMandates = [];
      state.hints = { seen: {}, dismissed: {}, open: null };
      state.asOf = W.meta.today;
      state.view = 'drop';
      state.mandateId = 'm_food';
      state.animate = true;
      render();
      return;
    }

    /* Delegated to the pure modules. They mutate state and report; only this
       file re-renders. */
    if (HINTS.act(act, el, state)) { render(); return; }
    if (ONBOARD.act(act, el, state)) {
      if (act === 'signin') state.animate = true;
      render();
      return;
    }
    if (act === 'wizcreate') { completeWizard(); return; }

    if (act === 'view') { go(el.getAttribute('data-view')); return; }

    if (act === 'asof') {
      state.asOf = el.getAttribute('data-d');
      state.revealed = {};
      state.run = { stage: 'idle', query: '', step: 0 };
      state.firstRun.active = false;
      if (state.view === 'report' || state.view === 'outreach') state.view = 'drop';
      if (isRewound() && state.view === 'runname') state.view = 'drop';
      go(state.view);
      return;
    }

    if (act === 'mandate') {
      state.mandateId = el.getAttribute('data-m');
      state.firstRun.active = false;
      go('drop');
      return;
    }

    if (act === 'report') {
      state.reportId = id;
      go('report', el.getAttribute('data-from') ||
        (state.view === 'outreach' || state.view === 'report' ? state.from : state.view));
      return;
    }

    if (act === 'ledger') {
      state.ledgerOpen[id] = !state.ledgerOpen[id];
      render();
      return;
    }

    if (act === 'passtray') {
      state.passTray = id || null;
      /* Killing is cheap, backing is not — explain the asymmetry the first
         time somebody reaches for the cheap one. */
      if (id && !state.hints.seen.h_report_required) state.pendingHint = 'h_report_required';
      render();
      return;
    }

    if (act === 'prune') {
      state.passTray = id;
      go('watchlist');
      return;
    }

    if (act === 'pass') {
      state.decisions[id] = { verb: 'pass', reasonCode: el.getAttribute('data-code'), at: state.asOf };
      state.passTray = null;
      if (state.view === 'report') go('drop');
      else render();
      return;
    }

    if (act === 'watch') {
      state.decisions[id] = { verb: 'watch', at: state.asOf };
      if (state.view === 'report') go('drop');
      else render();
      return;
    }

    /* Refer is its own verb, not a role check inside promote: Referred is a
       different state with a different downstream — no outreach package, no
       Phase Two record, and it is also the request to authorize a Study. */
    if (act === 'refer') {
      state.decisions[id] = { verb: 'refer', at: state.asOf };
      go('drop');
      return;
    }

    if (act === 'promote') {
      state.decisions[id] = { verb: 'promote', at: state.asOf };
      if (isRewound()) { render(); return; }
      state.outreachId = id;
      go('outreach');
      return;
    }

    if (act === 'outreach') { state.outreachId = id; go('outreach'); return; }
    if (act === 'undo') { delete state.decisions[id]; render(); return; }
    if (act === 'reveal') { state.revealed[id] = true; render(); return; }
    if (act === 'runreset') { state.run = { stage: 'idle', query: '', step: 0 }; render(); return; }

    if (act === 'copy') {
      var c = creator(id);
      var o = c.outreach;
      var who = me();
      copyText('Subject: ' + o.subject + '\n\n' + o.opener + '\n\n' +
        o.bullets.map(function (b) { return '- ' + b; }).join('\n') + '\n\n' + o.close + '\n\n' +
        who.name + '\n' + who.title + ', Paradium');
      state.copied = true;
      render();
      later(function () { state.copied = false; if (state.view === 'outreach') render(); }, 2200);
      return;
    }
  });

  document.addEventListener('submit', function (e) {
    var f = e.target.closest ? e.target.closest('[data-act="runsubmit"]') : null;
    if (!f) return;
    e.preventDefault();
    var input = document.getElementById('runq');
    state.run.query = (input && input.value.trim()) || W.runANameResult.handle;
    startScoring();
  });

  /* Enter advances the wizard's free-text field rather than doing nothing. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Enter') return;
    if (state.session.phase !== 'onboarding') return;
    var t = e.target;
    if (!t || (t.id !== 'wizfree' && t.id !== 'sumedit')) return;
    e.preventDefault();
    var btn = document.querySelector('.wiz-acts .btn:last-child');
    if (btn) btn.click();
  });

  function startScoring() {
    var total = W.runANameResult.inventory.length;
    state.run.stage = 'scoring';
    state.run.step = 0;
    render();
    if (reduceMotion.matches) {
      state.run.stage = 'done';
      render();
      return;
    }
    var tick = function () {
      state.run.step += 1;
      render();
      if (state.run.step < total) later(tick, 420);
      else later(function () { state.run.stage = 'done'; render(); }, 620);
    };
    later(tick, 480);
  }

  function copyText(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text;
      ta.setAttribute('readonly', '');
      ta.className = 'offscreen';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (err) { /* clipboard is unavailable from file://; the draft is on screen anyway */ }
  }

  /* ------------------------------------------------------------------- boot */
  function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('warhol-v2-theme'); } catch (e) { /* file:// */ }
    if (saved) { document.documentElement.setAttribute('data-theme', saved); return; }
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    document.documentElement.setAttribute('data-theme', mq.matches ? 'light' : 'dark');
  }

  initTheme();
  render();
})();
