/* ==========================================================================
   WARHOL SCOUT — application shell, state and views.
   Classic script, no modules, no fetch. Runs from file://.
   The seed data is read-only. Decisions live in local state and are layered
   over it, so the cohort is never mutated.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var U = window.UI;
  var esc = U.esc;

  /* ------------------------------------------------------------------ state */
  var state = {
    view: 'drop',
    asOf: W.meta.today,
    mandateId: 'm_food',
    reportId: null,
    from: 'drop',
    outreachId: null,
    decisions: {},          // id -> { verb, reasonCode, at }
    revealed: {},           // id -> true (backtest outcome)
    passTray: null,         // id currently choosing a reason
    run: { stage: 'idle', query: '', step: 0 },
    copied: false,
    animate: true          // only true on a real view change, never on re-render
  };

  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }

  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ----------------------------------------------------------- derivations */
  function isBacktest() { return state.asOf !== W.meta.today; }
  function mandate(id) {
    var m = null;
    W.mandates.forEach(function (x) { if (x.id === id) m = x; });
    return m;
  }
  function reason(code) {
    var r = null;
    W.passReasons.forEach(function (x) { if (x.code === code) r = x; });
    return r;
  }
  function dropList() { return W.drop(state.asOf, state.mandateId); }
  function decisionFor(id) { return state.decisions[id] || null; }

  function watchlist() {
    var seeded = W.watchlist().filter(function (c) {
      return U.daysBetween(c.watchedSince, state.asOf) >= 0;
    });
    var added = [];
    Object.keys(state.decisions).forEach(function (id) {
      if (state.decisions[id].verb !== 'watch') return;
      var c = W.byId[id] || (W.runANameResult.id === id ? W.runANameResult : null);
      if (c && seeded.indexOf(c) === -1) added.push(c);
    });
    return added.concat(seeded);
  }

  function dropCounts(mid) {
    return (W.drops[state.asOf] && W.drops[state.asOf][mid]) ? W.drops[state.asOf][mid].length : 0;
  }
  function remaining() {
    return dropList().filter(function (c) { return !decisionFor(c.id); }).length;
  }

  /* ------------------------------------------------------------ rail render */
  function railHTML() {
    var back = isBacktest();
    var wl = watchlist().length;
    var trail = W.timeline.filter(function (t) {
      return U.daysBetween(t.at.slice(0, 10), state.asOf) >= 0;
    }).slice(0, 4);

    return '' +
      '<aside class="rail">' +
      '<div class="brand"><div class="wm">Warhol</div>' +
      '<div class="sub">Scout ' + String.fromCharCode(183) + ' origination desk</div></div>' +

      '<nav class="nav" aria-label="Surfaces">' +
      navBtn('drop', "Today's Drop", remaining() ? remaining() + ' left' : dropCounts(state.mandateId) ? 'worked' : '0') +
      navBtn('watchlist', 'Watchlist', String(wl)) +
      navBtn('runname', 'Run a Name', back ? 'off' : '') +
      '</nav>' +

      '<div class="timebox">' +
      '<div class="hd"><span class="lbl">As of</span>' +
      '<span class="lbl" style="letter-spacing:.06em">' + (back ? 'rewound' : 'live') + '</span></div>' +
      '<div class="body">' +
      W.meta.availableDates.map(function (d) {
        var on = state.asOf === d;
        return '<button class="opt" data-act="asof" data-d="' + d + '" aria-pressed="' + on + '"' +
          ' aria-label="View the app as of ' + esc(U.longDate(d)) + '">' +
          '<span class="d">' + esc(U.longDate(d)) + '</span>' +
          '<span class="k">' + (d === W.meta.today ? 'Today' : 'Backtest cohort') + '</span></button>';
      }).join('') +
      '</div></div>' +

      '<div class="railfoot">' +
      '<div><div class="lbl">Desk activity</div>' +
      (trail.length
        ? '<ul class="trail" style="margin-top:9px">' + trail.map(function (t) {
          return '<li><span class="t">' + esc(t.at.replace('T', ' ')) + ' ' + String.fromCharCode(183) + ' ' + esc(t.actor) + '</span>' + esc(t.text) + '</li>';
        }).join('') + '</ul>'
        : '<p style="margin-top:9px;font-size:11.5px;color:var(--ink-3);line-height:1.45">No desk activity recorded on or before this date. Nothing observed later is visible while rewound.</p>') +
      '</div>' +
      '<div class="whoami">' +
      '<span class="av">' + esc(W.user.initials) + '</span>' +
      '<span class="who"><b>' + esc(W.user.name) + '</b><span>' + esc(W.user.role) + '</span></span>' +
      '<button class="btn themebtn" data-sz="sm" data-v="ghost" data-act="theme">' +
      (document.documentElement.getAttribute('data-theme') === 'dark' ? 'Light' : 'Dark') + '</button>' +
      '</div></div></aside>';
  }

  function navBtn(view, label, n) {
    var on = state.view === view || (view === 'drop' && state.view === 'report' && state.from === 'drop');
    return '<button data-act="view" data-view="' + view + '" aria-current="' + on + '" aria-label="' + esc(label) + '">' +
      '<span>' + esc(label) + '</span>' + (n ? '<span class="n">' + esc(n) + '</span>' : '') + '</button>';
  }

  /* ------------------------------------------------------------- drop view */
  function dropView() {
    var m = mandate(state.mandateId);
    var list = dropList();
    var back = isBacktest();
    var resurf = list.filter(function (c) { return c.resurfaced; }).length;
    var done = list.length - remaining();

    var head = '<header class="pagehead">' +
      '<h1>' + (back ? 'The drop, ' + esc(U.longDate(state.asOf)) : "Today's drop") + '</h1>' +
      '<p class="deck">' + (back
        ? 'Six unknowns in Food &amp; Home Craft, scored on what was observable that morning. Nothing after this date is in the model.'
        : 'Ranked, threshold-gated, capped. Enough on each card to kill it without opening. Promote needs the report.') + '</p>' +
      '<div class="mandates">' + W.mandates.map(function (x) {
        var n = dropCounts(x.id);
        return '<button data-act="mandate" data-m="' + x.id + '" aria-pressed="' + (x.id === state.mandateId) + '" data-zero="' + (n === 0) + '">' +
          esc(x.name) + '<span class="c">' + n + '</span></button>';
      }).join('') + '</div>' +
      '<div class="meta">' +
      '<span class="lbl">Brief</span>' +
      '<span class="mono" style="font-size:11.5px;color:var(--ink-2)">' +
      esc(m.category) + ' ' + String.fromCharCode(183) + ' ' + esc(m.platforms.join(', ')) + ' ' + String.fromCharCode(183) + ' ' +
      esc(m.audienceBand) + ' ' + String.fromCharCode(183) + ' ' + esc(m.geo) + ' ' + String.fromCharCode(183) + ' owner ' + esc(m.owner) +
      '</span></div>' +
      '</header>';

    if (!list.length) return head + zeroState(m);

    var progress = '<div class="worked">' +
      '<span class="lbl">Worked</span>' +
      '<span class="mono" style="font-size:12.5px">' + done + ' / ' + list.length + '</span>' +
      '<span class="bar"><i style="width:' + (list.length ? (done / list.length) * 100 : 0) + '%"></i></span>' +
      '<span class="mono" style="font-size:11px;color:var(--ink-3)">' +
      list.length + ' surfaced ' + String.fromCharCode(183) + ' ' + resurf + ' resurfaced ' + String.fromCharCode(183) +
      ' threshold ' + W.meta.scoreThreshold + ' ' + String.fromCharCode(183) + ' cap ' + W.meta.dropCap +
      ' ' + String.fromCharCode(183) + ' coverage gate ' + U.pct(W.meta.coverageGate) + '</span>' +
      '</div>';

    var cards = list.map(function (c, i) {
      var d = decisionFor(c.id);
      return d ? decidedRow(c, d) : card(c, i + 1);
    }).join('');

    var finish = remaining() === 0 ? '<div class="done">' +
      '<h2>Drop worked to zero.</h2>' +
      '<p>Every name has a decision and an owner. The reasons are now suppression rules and training labels. Close Warhol; it will have the next one at 06:00.</p>' +
      '</div>' : '';

    return head + progress + cards + finish;
  }

  function card(c, rank) {
    var t = U.inventoryTally(c.inventory);
    var quotes = pickQuotes(c, 2);
    var g = c.pillars.gap, s = c.pillars.strain;

    var flags = '';
    if (c.alert) {
      flags += '<div class="flag" data-t="alert"><b>Acute</b>' +
        '<span class="why">' + esc(c.alert.text) + '</span>' +
        '<span class="mono" style="font-size:10.5px;opacity:.8;margin-left:auto">flagged ' + esc(U.shortDate(c.alert.at)) + '</span></div>';
    }
    if (c.resurfaced) {
      flags += '<div class="flag" data-t="resurfaced"><b>Resurfaced</b>' +
        '<span class="why">' + esc(c.resurfaced.reason) + '. ' + esc(c.resurfaced.trigger) + '</span>' +
        '<span class="mono" style="font-size:10.5px;opacity:.8;margin-left:auto">was ' + c.resurfaced.previousScore + ' on ' + esc(U.shortDate(c.resurfaced.since)) + '</span></div>';
    }

    return '<article class="card" data-id="' + c.id + '">' + flags +
      '<div class="cardtop">' +
      '<div class="ident">' + U.initials(c) +
      '<div class="namebits">' +
      '<h3>' + esc(c.name) + ' <span class="mono" style="font-size:11px;color:var(--ink-3);font-weight:400">#' + rank + '</span></h3>' +
      '<div class="handle">' + esc(c.handle) + ' ' + String.fromCharCode(183) + ' ' + esc(c.primaryPlatform) + ' ' + String.fromCharCode(183) + ' ' + U.followers(c.audience.total) + ' across ' + c.platforms.length + '</div>' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      '</div></div>' + U.scoreBox(c) + '</div>' +

      '<div class="evidence">' +
      '<div>' + (quotes.length
        ? quotes.map(function (e) { return U.quoteBlock(e, state.asOf, { url: false }); }).join('') +
        (c.evidence.length > quotes.length ? '<div class="qmore">' + (c.evidence.length - quotes.length) + ' more cited in the report</div>' : '')
        : '<p style="font-size:13px;color:var(--ink-3)">No quoted evidence captured at this tier. Open the report before acting.</p>') +
      '</div>' +
      '<div>' +
      '<div class="lbl">Monetization inventory</div>' +
      '<ul class="invstrip" style="margin-top:11px">' + (c.inventory || []).map(function (r) {
        return '<li>' + U.vmark(r.state) + '<span class="it">' + esc(r.item) + '</span>' +
          '<span class="sf">' + r.surfacesChecked + ' surf.</span></li>';
      }).join('') + '</ul>' +
      '<p class="invsum">' + esc(invSentence(t)) + '</p>' +
      '</div></div>' +

      '<div class="pillars">' +
      pillBit('Gap', g.score, g.max) +
      pillBit('Strain', s.score, s.max) +
      '<span class="gate"><span class="k">Format fit</span><span class="v">' + esc(c.pillars.fit.verdict) + '</span>' +
      '<span class="k" style="letter-spacing:.02em;text-transform:none">gate, 0 pts</span></span>' +
      '<span class="pill"><span class="k">Coverage</span><span class="v" style="color:' + (g.coverage < W.meta.coverageGate ? 'var(--warn)' : 'inherit') + '">' + U.pct(g.coverage) + '</span></span>' +
      '</div>' +

      '<div class="playline"><span class="lbl">Recommended play</span>' +
      '<span class="p">' + esc(c.play.label) + '</span></div>' +

      (state.passTray === c.id ? passTray(c) : '') +

      '<div class="acts">' +
      '<button class="btn" data-v="primary" data-act="report" data-id="' + c.id + '">Open Scout Report</button>' +
      '<button class="btn" data-act="watch" data-id="' + c.id + '">Watch</button>' +
      '<button class="btn" data-v="ghost" data-act="passtray" data-id="' + c.id + '">Pass' + String.fromCharCode(8230) + '</button>' +
      '<span class="spacer"></span>' +
      '<span class="note">Promote requires the report</span>' +
      '</div></article>';
  }

  function pillBit(k, v, max) {
    return '<span class="pill"><span class="k">' + esc(k) + '</span>' +
      '<span class="track"><i style="width:' + (v / max) * 100 + '%"></i></span>' +
      '<span class="v">' + v + '<span style="color:var(--ink-3)">/' + max + '</span></span></span>';
  }

  function invSentence(t) {
    var bits = [];
    if (t.verified_absent === t.total && t.total) bits.push('Nothing owned.');
    else if (t.verified_absent) bits.push(t.verified_absent + ' of ' + t.total + ' lines verified absent.');
    if (t.surfaces) bits.push(t.surfaces + ' surfaces checked.');
    if (t.not_found) bits.push(t.not_found + ' inconclusive, which is why confidence is not 100%.');
    if (t.present) bits.push(t.present + ' present, so no gap on ' + (t.present > 1 ? 'those lines' : 'that line') + '.');
    return bits.join(' ') || 'No inventory captured at this tier.';
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
      '<div class="hd"><span class="lbl">Pass with a reason</span>' +
      '<span class="q">The reason is the suppression rule and the training label. Pick the true one.</span></div>' +
      '<div class="reasons">' + W.passReasons.map(function (r) {
        return '<button data-act="pass" data-id="' + c.id + '" data-code="' + r.code + '">' +
          '<b>' + esc(r.label) + '</b><span>' + esc(r.suppression) + '</span></button>';
      }).join('') + '</div>' +
      '<div style="margin-top:10px"><button class="btn" data-sz="sm" data-v="ghost" data-act="passtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  function decidedRow(c, d) {
    var label, detail;
    if (d.verb === 'pass') {
      var r = reason(d.reasonCode);
      label = 'Passed';
      detail = r.label + '. Suppression: ' + r.suppression;
    } else if (d.verb === 'watch') {
      label = 'Watching';
      detail = 'Re-scored nightly. Resurfaces on a strain trigger or a score move of 5 or more.';
    } else {
      label = 'Promoted';
      detail = 'Outreach package generated. Phase Two record created.';
    }
    return '<div class="decided">' +
      '<span class="chip" data-t="' + (d.verb === 'pass' ? 'quiet' : 'accent') + '">' + esc(label) + '</span>' +
      '<span class="nm">' + esc(c.name) + '</span>' +
      '<span class="sup">' + esc(detail) + '</span>' +
      '<span class="spacer"></span>' +
      '<span class="sup">' + esc(W.user.name) + '</span>' +
      '<button class="btn" data-sz="sm" data-v="ghost" data-act="undo" data-id="' + c.id + '">Undo</button>' +
      '</div>';
  }

  /* ------------------------------------------------------------ zero state */
  function zeroState(m) {
    var other = W.mandates.filter(function (x) { return dropCounts(x.id) > 0; });
    var line = null;
    W.timeline.forEach(function (t) {
      if (t.text.indexOf(m.name.split(' ')[0]) > -1 && t.text.indexOf('0 above') > -1) line = t;
    });
    return '<section class="zero">' +
      '<div class="top">' +
      '<h2>Warhol found nothing worth your time today.</h2>' +
      '<p class="say">The mandate ran at 06:00 and scored the cohort. Nothing cleared ' + W.meta.scoreThreshold +
      ', so nothing is here. This is the drop working, not the drop failing.</p>' +
      '<p class="say">A fixed daily ten would have handed you two real names and eight pieces of filler, and within a fortnight you would have stopped reading the list. The cap protects your attention. The threshold protects your trust.</p>' +
      '</div>' +
      '<div class="cols">' +
      '<div><div class="lbl">What ran</div>' +
      '<ul class="kv">' +
      '<li><span class="k">Mandate</span><span class="v">' + esc(m.name) + '</span></li>' +
      '<li><span class="k">Platforms</span><span class="v">' + esc(m.platforms.join(' / ')) + '</span></li>' +
      '<li><span class="k">Audience band</span><span class="v">' + esc(m.audienceBand) + '</span></li>' +
      '<li><span class="k">Geo / language</span><span class="v">' + esc(m.geo) + ' / ' + esc(m.language) + '</span></li>' +
      '<li><span class="k">Owner</span><span class="v">' + esc(m.owner) + '</span></li>' +
      '<li><span class="k">Score threshold</span><span class="v">' + W.meta.scoreThreshold + '</span></li>' +
      '<li><span class="k">Coverage gate</span><span class="v">' + U.pct(W.meta.coverageGate) + '</span></li>' +
      '<li><span class="k">Cap</span><span class="v">' + W.meta.dropCap + '</span></li>' +
      '</ul>' +
      (line ? '<p style="margin-top:14px;font-family:var(--mono);font-size:11px;color:var(--ink-3)">' +
        esc(line.at.replace('T', ' ')) + ' ' + String.fromCharCode(183) + ' ' + esc(line.text) + '</p>' : '') +
      '</div>' +
      '<div><div class="lbl">Where the work is</div>' +
      '<div class="go">' + other.map(function (x) {
        return '<button data-act="mandate" data-m="' + x.id + '"><span>' + esc(x.name) + '</span>' +
          '<span class="c">' + dropCounts(x.id) + ' waiting</span></button>';
      }).join('') +
      '<button data-act="view" data-view="watchlist"><span>Watchlist</span><span class="c">' + watchlist().length + ' being re-scored</span></button>' +
      '</div>' +
      '<p style="margin-top:14px;font-size:12.5px;color:var(--ink-2);line-height:1.5">Watched names are re-scored every night. When one crosses a threshold it comes back into this drop with the reason attached, so there is no second inbox to keep.</p>' +
      '</div></div></section>';
  }

  /* ----------------------------------------------------------- report view */
  function reportView() {
    var c = state.reportId === W.runANameResult.id ? W.runANameResult : W.byId[state.reportId];
    if (!c) return '<p>Not found.</p>';
    var back = isBacktest();
    var t = U.inventoryTally(c.inventory);
    var g = c.pillars.gap, s = c.pillars.strain, f = c.pillars.fit;
    var d = decisionFor(c.id);

    var out = '<div class="backbar"><button class="btn" data-sz="sm" data-v="ghost" data-act="view" data-view="' + state.from + '">' +
      String.fromCharCode(8592) + ' Back to ' + (state.from === 'watchlist' ? 'watchlist' : state.from === 'runname' ? 'Run a Name' : 'the drop') + '</button></div>';

    /* identity */
    out += '<header class="rpthead"><div class="row"><div>' +
      '<div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:10px">' +
      '<span class="chip">Scout Report</span>' +
      (c.sourceTag === 'manual' ? '<span class="chip" data-t="warn">Manual entry</span>' : '') +
      (c.resurfaced ? '<span class="chip" data-t="accent">Resurfaced</span>' : '') +
      (c.alert ? '<span class="chip" data-t="alert">Acute trigger</span>' : '') +
      (back ? '<span class="chip" data-t="accent">As of ' + esc(U.longDate(state.asOf)) + '</span>' : '') +
      '</div>' +
      '<h1>' + esc(c.name) + '</h1>' +
      '<div class="handle">' + esc(c.handle) + ' ' + String.fromCharCode(183) + ' ' + esc(c.primaryPlatform) + ' ' + String.fromCharCode(183) + ' ' +
      U.num(c.audience.total) + ' total audience ' + String.fromCharCode(183) + ' ' + (c.audience.growth90d > 0 ? '+' : '') + Math.round(c.audience.growth90d * 100) + '% in 90d</div>' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      '<div class="idrow">' + c.platforms.map(function (p) {
        return '<span class="plat" data-weak="' + (p.matchConfidence < 0.9) + '">' +
          '<span class="n">' + esc(p.name) + '</span>' +
          '<span class="f">' + U.followers(p.followers) + '</span>' +
          '<span class="mc">id match ' + U.pct(p.matchConfidence) + '</span></span>';
      }).join('') + '</div>' +
      '</div>' + U.scoreBox(c) + '</div></header>';

    if (c.alert) {
      out += '<div class="flag" data-t="alert" style="margin-top:16px;border:1px solid var(--alert);border-radius:var(--r)">' +
        '<b>Acute</b><span class="why">' + esc(c.alert.text) + '</span>' +
        '<span class="mono" style="font-size:10.5px;margin-left:auto">flagged ' + esc(U.shortDate(c.alert.at)) + '</span></div>';
    }
    if (c.resurfaced) {
      out += '<div class="flag" data-t="resurfaced" style="margin-top:12px;border:1px solid var(--accent);border-radius:var(--r)">' +
        '<b>Came back because</b><span class="why">' + esc(c.resurfaced.reason) + '. ' + esc(c.resurfaced.trigger) + '</span>' +
        '<span class="mono" style="font-size:10.5px;margin-left:auto">first seen ' + esc(U.shortDate(c.resurfaced.since)) + ', scored ' + c.resurfaced.previousScore + '</span></div>';
    }
    if (c.sourceTag === 'manual') {
      out += '<div class="override"><div class="t">Scout override</div>' +
        '<p>Added by hand, not by the scan, and tagged as such so machine-found and human-found stay separable in the label data. ' +
        'Scored ' + c.score + ' against a threshold of ' + W.meta.scoreThreshold + ', with gap coverage at ' + U.pct(g.coverage) +
        ' against a gate of ' + U.pct(W.meta.coverageGate) + '. It would not have entered the drop on its own. That is the point of the entry.</p></div>';
    }

    /* the case: argument and quotes beside the empty inventory */
    out += '<section class="sect"><div class="hd"><h2>The case</h2>' +
      '<span class="n">Argument first. Numbers underneath it.</span></div>' +
      '<div class="panel case">' +
      '<div>' +
      '<p class="argument">' + U.argument(c) + '</p>' +
      '<div class="quotes"><div class="lbl">What the audience is saying</div>' +
      '<div style="margin-top:12px">' +
      (c.evidence.length
        ? c.evidence.map(function (e) { return U.quoteBlock(e, state.asOf); }).join('')
        : '<p style="font-size:13px;color:var(--ink-3)">No quoted evidence captured for this candidate at this tier.</p>') +
      '</div></div></div>' +
      '<div><div class="lbl">Monetization inventory</div>' +
      '<p style="font-size:12.5px;color:var(--ink-2);margin-top:8px;line-height:1.5">Only <b>verified absent</b> scores as a gap. <b>Not found</b> is inconclusive: it scores neutral and pulls confidence down.</p>' +
      '<div class="invtable" style="margin-top:14px">' + (c.inventory || []).map(function (r) {
        return '<div class="invrow"><div class="r1">' +
          '<span class="it">' + esc(r.item) + '</span>' + U.vstate(r.state) +
          '<span class="mono" style="font-size:10.5px;color:var(--ink-3)">' + r.surfacesChecked + ' surfaces</span></div>' +
          '<p class="note">' + esc(r.note) + '</p>' +
          U.provLine(r.source, r.observedAt, 'rule', state.asOf) + '</div>';
      }).join('') + '</div>' +
      '<p class="invsum">' + esc(invSentence(t)) + '</p>' +
      '</div></div></section>';

    /* scoring */
    out += '<section class="sect"><div class="hd"><h2>How it scored</h2>' +
      '<span class="n">Two weighted pillars. One gate that contributes nothing.</span></div>' +
      '<div class="panel scoring">' +
      pillarCol('Monetization Gap', 'The buy signal.', g, 60) +
      pillarCol('Operator Strain', 'The timing trigger.', s, 40) +
      '</div>' +

      '<div class="gatepanel">' +
      '<div class="hd"><h3>Format Fit</h3>' +
      '<span class="zero">Gate. Pass or fail. Contributes 0 points to the score.</span>' +
      U.engTag(f.engine) +
      '<span class="verdict">' + esc(f.verdict) + '</span></div>' +
      '<div class="gategrid">' + f.subsignals.map(function (x) {
        return '<div><div class="l">' + esc(x.label) + '</div><div class="v">' + esc(x.value) + '</div>' +
          '<div class="d">' + esc(x.detail) + '</div></div>';
      }).join('') + '</div></div></section>';

    /* confidence */
    var gateFail = g.coverage < W.meta.coverageGate;
    out += '<section class="sect"><div class="hd"><h2>Confidence</h2>' +
      '<span class="n">Displayed beside the score. Never folded into it.</span></div>' +
      '<div class="panel confpanel" data-gate="' + (gateFail ? 'fail' : 'ok') + '">' +
      '<div><div class="lbl">Overall confidence</div><div class="big">' + U.pct(c.confidence) + '</div>' +
      '<p class="cap">Share of every absence check that resolved to present or verified absent.</p></div>' +
      '<div class="gatecell"><div class="lbl">Gap coverage</div><div class="big">' + U.pct(g.coverage) + '</div>' +
      '<p class="cap">' + (gateFail
        ? 'Below the ' + U.pct(W.meta.coverageGate) + ' gate. Cannot enter a drop on its own, whatever the score says.'
        : 'Clears the ' + U.pct(W.meta.coverageGate) + ' gate, so the gap is defensible.') + '</p></div>' +
      '<div><div class="lbl">Inventory resolved</div><div class="big">' + t.resolved + ' / ' + t.total + '</div>' +
      '<p class="cap">' + (t.not_found
        ? t.not_found + ' line' + (t.not_found > 1 ? 's' : '') + ' inconclusive. Resolve ' + (t.not_found > 1 ? 'them' : 'it') + ' before the call.'
        : 'Every line resolved. Nothing is being assumed.') + '</p></div>' +
      '</div></section>';

    /* samples */
    if (c.samples && c.samples.length) {
      out += '<section class="sect"><div class="hd"><h2>What the work looks like</h2>' +
        '<span class="n">Observed content, not thumbnails.</span></div>' +
        '<div class="panel samples">' + c.samples.map(function (sm) {
          return '<div class="sample"><div class="swatch" style="' + U.toneSwatch(c.accent, sm.tone) + '"></div>' +
            '<div class="body"><div class="t">' + esc(sm.title) + '</div>' +
            '<div class="m"><span class="chip" data-t="quiet">' + esc(sm.platform) + '</span>' +
            '<span class="mono" style="font-size:10.5px;color:var(--ink-3)">' + esc(sm.metric) + '</span>' +
            '<span class="mono" style="font-size:10.5px;color:var(--ink-3)">' + esc(sm.length) + '</span>' +
            '<span class="mono" style="font-size:10.5px;color:var(--ink-3)">' + esc(U.shortDate(sm.observedAt)) + '</span></div>' +
            '</div></div>';
        }).join('') + '</div></section>';
    }

    /* play */
    out += '<section class="sect"><div class="hd"><h2>Recommended play</h2>' +
      '<span class="n">One, from what Paradium actually operates.</span></div>' +
      '<div class="panel playpanel">' +
      '<div class="badge"><div class="l">The play</div><div class="p">' + esc(c.play.label) + '</div></div>' +
      '<div><p class="why">' + esc(c.play.why) + '</p>' +
      '<p class="caveat">No revenue estimate. Warhol does not model what it cannot observe.</p></div>' +
      '</div></section>';

    /* outcome reveal, backtest only */
    if (back && c.outcome) {
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
      out += '<div class="panel" style="margin-top:22px">' + passTray(c) + '</div>';
    } else {
      out += '<div class="decide">' +
        '<button class="btn" data-v="primary" data-act="promote" data-id="' + c.id + '">Promote' + (back ? '' : ' ' + String.fromCharCode(8594) + ' outreach package') + '</button>' +
        '<button class="btn" data-act="watch" data-id="' + c.id + '">Watch</button>' +
        '<button class="btn" data-v="ghost" data-act="passtray" data-id="' + c.id + '">Pass' + String.fromCharCode(8230) + '</button>' +
        '<span class="spacer"></span>' +
        '<span class="who">Recorded as ' + esc(W.user.name) + ' ' + String.fromCharCode(183) + ' ' + esc(U.longDate(state.asOf)) + ' ' + String.fromCharCode(183) + ' score snapshot ' + c.score + '</span>' +
        '</div>';
    }
    return out;
  }

  function decidedInline(c, d) {
    var txt, chip = 'accent';
    if (d.verb === 'pass') { txt = 'Passed: ' + reason(d.reasonCode).label + '. ' + reason(d.reasonCode).suppression; chip = 'quiet'; }
    else if (d.verb === 'watch') txt = 'On the watchlist. Re-scored nightly; resurfaces with a stated trigger.';
    else txt = 'Promoted. Outreach package generated and a Phase Two record created.';
    return '<span class="chip" data-t="' + chip + '">' + (d.verb === 'pass' ? 'Passed' : d.verb === 'watch' ? 'Watching' : 'Promoted') + '</span>' +
      '<span style="font-size:13px;color:var(--ink-2)">' + esc(txt) + '</span>' +
      '<span class="spacer"></span>' +
      (d.verb === 'promote' ? '<button class="btn" data-sz="sm" data-act="outreach" data-id="' + c.id + '">Open outreach package</button>' : '') +
      '<button class="btn" data-sz="sm" data-v="ghost" data-act="undo" data-id="' + c.id + '">Undo</button>';
  }

  function pillarCol(name, role, p, max) {
    return '<div>' +
      '<div class="pillhd"><h3>' + esc(name) + '</h3>' + U.engTag(p.engine) +
      '<span class="sc">' + p.score + '<small>/' + max + '</small></span></div>' +
      '<div class="pillbar"><i style="width:' + (p.score / max) * 100 + '%"></i></div>' +
      '<p class="pillrole">' + esc(role) + '</p>' +
      '<div class="subs">' + p.subsignals.map(function (x) {
        return '<div class="sub" data-e="' + U.engineKind(x.engine) + '">' +
          '<div class="r1"><span class="l">' + esc(x.label) + '</span>' + U.engTag(x.engine) +
          '<span class="w">' + x.weightPct + '% of pillar</span></div>' +
          '<div class="val">' + esc(x.value) + '</div>' +
          '<p class="det">' + esc(x.detail) + '</p></div>';
      }).join('') + '</div></div>';
  }

  function outcomeCard(c) {
    var o = c.outcome;
    var dud = !o.built || !o.built.length;
    return '<div class="outcomecard' + (reduceMotion.matches ? '' : ' reveal-anim') + '">' +
      '<div class="top"><div class="win">' + esc(o.window) + '</div>' +
      '<h3>' + esc(o.headline) + '</h3>' +
      '<p class="note">' + esc(o.note) + '</p></div>' +
      '<div class="cols">' +
      '<div><div class="lbl">Audience now</div><div class="now">' + esc(o.followersNow) + '</div>' +
      '<div class="mono" style="font-size:10.5px;color:var(--ink-3);margin-top:6px">was ' + U.followers(c.audience.total) + ' at snapshot</div></div>' +
      '<div><div class="lbl">' + (dud ? 'What got built' : 'What got built, by somebody else') + '</div>' +
      (dud ? '<p class="nothing">Nothing. Warhol ranked him fifth of six and fifth of six is where he stayed. The ordering held, which is the only part of a backtest worth trusting.</p>'
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
      return head + '<section class="zero"><div class="top">' +
        '<h2>Nothing kept at this date.</h2>' +
        '<p class="say">Watch decisions are recorded with a timestamp. While the app is rewound, anything kept after ' +
        esc(U.longDate(state.asOf)) + ' is not visible, because it had not happened yet.</p></div></section>';
    }

    var rows = list.map(function (c) {
      var d = decisionFor(c.id);
      var trig = c.nextTrigger || 'Re-scored nightly. Resurfaces on a strain trigger or a score move of 5 or more.';
      var since = c.watchedSince ? U.longDate(c.watchedSince) : U.longDate(state.asOf);
      return '<div class="wrow">' + U.initials(c) +
        '<div><div class="nm">' + esc(c.name) + '</div>' +
        '<div class="handle">' + esc(c.handle) + ' ' + String.fromCharCode(183) + ' kept ' + esc(since) +
        (d ? ' ' + String.fromCharCode(183) + ' by ' + esc(W.user.name) : '') + '</div>' +
        '<p class="kept">' + esc(c.headline) + '</p>' +
        '<div class="trigger"><span class="k">Next trigger</span><span class="v">' + esc(trig) + '</span></div>' +
        '</div>' +
        '<div class="right">' + U.scoreBox(c) +
        '<button class="btn" data-sz="sm" data-act="report" data-id="' + c.id + '" data-from="watchlist">Open Scout Report</button>' +
        '</div></div>';
    }).join('');

    return head + '<div class="panel" style="margin-top:20px">' + rows + '</div>';
  }

  /* --------------------------------------------------------- run a name view */
  function runNameView() {
    var head = '<header class="pagehead"><h1>Run a name</h1>' +
      '<p class="deck">The Scout\'s hunch is data too. Paste a handle and Warhol scores it on demand, tags it as manual, and lets it through the threshold as a declared override.</p>' +
      '</header>';

    if (isBacktest()) {
      return head + '<section class="zero"><div class="top">' +
        '<h2>On-demand scoring runs against the live web.</h2>' +
        '<p class="say">The app is rewound to ' + esc(U.longDate(state.asOf)) +
        '. There is no honest way to fetch a creator as they were on that morning, so this surface is switched off rather than faked.</p>' +
        '<p class="say"><button class="btn" data-v="primary" data-act="asof" data-d="' + W.meta.today + '">Return to today</button></p>' +
        '</div></section>';
    }

    var r = W.runANameResult;
    var body = '';

    if (state.run.stage === 'idle') {
      body = '<div class="panel runbox">' +
        '<div class="lbl">Handle or URL</div>' +
        '<form class="runform" data-act="runsubmit">' +
        '<input id="runq" type="text" value="' + esc(state.run.query) + '" placeholder="@vancemakesknives" aria-label="Handle or URL" autocomplete="off">' +
        '<button class="btn" data-v="primary" type="submit">Score it</button></form>' +
        '<p class="runhint">Manual adds are source-tagged so machine-found and human-found stay separable in the label data. That is what later answers the only question that matters: does Warhol find things a person would have missed?</p>' +
        '</div>';
    } else if (state.run.stage === 'scoring') {
      var checks = r.inventory;
      body = '<div class="panel runbox">' +
        '<div class="lbl">Resolving ' + esc(state.run.query || r.handle) + '</div>' +
        '<p class="runhint" style="margin-top:8px">Every absence check has to land on present, verified absent, or not found. Nothing is assumed missing.</p>' +
        '<ul class="resolving">' + checks.map(function (x, i) {
          var done = i < state.run.step;
          return '<li data-done="' + done + '">' +
            (done ? U.vmark(x.state) : '<span class="vmark"></span>') +
            '<span>' + esc(x.item) + '</span>' +
            '<span class="st">' + (done ? esc(U.VLABEL[x.state]) + ' ' + String.fromCharCode(183) + ' ' + x.surfacesChecked + ' surfaces' : 'checking' + String.fromCharCode(8230)) + '</span></li>';
        }).join('') + '</ul></div>';
    } else {
      body = '<div class="panel runbox">' +
        '<div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap">' +
        '<span class="chip" data-t="accent">Scored</span>' +
        '<span class="mono" style="font-size:12.5px">' + esc(r.handle) + ' ' + String.fromCharCode(183) + ' ' + r.score + ' ' + String.fromCharCode(183) + ' confidence ' + U.pct(r.confidence) + '</span>' +
        '</div>' +
        '<div class="override" style="margin-top:14px"><div class="t">Scout override</div>' +
        '<p>' + r.score + ' is below the ' + W.meta.scoreThreshold + ' threshold and gap coverage is ' + U.pct(r.pillars.gap.coverage) +
        ' against a ' + U.pct(W.meta.coverageGate) + ' gate, so the scan would never have surfaced this name. Manual entry bypasses both, and the report says so on its face.</p></div>' +
        '<div style="display:flex;gap:8px;margin-top:16px;flex-wrap:wrap">' +
        '<button class="btn" data-v="primary" data-act="report" data-id="' + r.id + '" data-from="runname">Open Scout Report</button>' +
        '<button class="btn" data-v="ghost" data-act="runreset">Run another</button></div>' +
        '</div>';
    }
    return head + body;
  }

  /* ---------------------------------------------------------- outreach view */
  function outreachView() {
    var c = state.outreachId === W.runANameResult.id ? W.runANameResult : W.byId[state.outreachId];
    if (!c) return '<p>Not found.</p>';
    var o = c.outreach;
    var t = U.inventoryTally(c.inventory);

    return '<div class="backbar"><button class="btn" data-sz="sm" data-v="ghost" data-act="report" data-id="' + c.id + '">' +
      String.fromCharCode(8592) + ' Back to the Scout Report</button></div>' +

      '<header class="pagehead">' +
      '<div style="display:flex;gap:8px;margin-bottom:12px;flex-wrap:wrap">' +
      '<span class="chip" data-t="accent">Promoted</span>' +
      '<span class="chip">Phase Two record created</span>' +
      '<span class="chip" data-t="quiet">' + esc(W.user.name) + ' ' + String.fromCharCode(183) + ' ' + esc(U.longDate(state.asOf)) + '</span>' +
      '</div>' +
      '<h1>Outreach package: ' + esc(c.name) + '</h1>' +
      '<p class="deck">Everything a first contact needs was already in the report, so generating this costs nothing. Warhol writes it. You send it.</p>' +
      '</header>' +

      '<div class="panel pkg" style="margin-top:20px">' +
      '<div><div class="lbl">The signals, in plain language</div>' +
      '<ul class="plain">' + o.bullets.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span>' + esc(b) + '</span></li>';
      }).join('') + '</ul>' +
      '<div style="margin-top:22px" class="lbl">The play</div>' +
      '<p style="font-family:var(--serif);font-size:17px;line-height:1.5;margin-top:8px">' + esc(c.play.label) + '</p>' +
      '<p style="font-size:13px;color:var(--ink-2);line-height:1.55;margin-top:8px;max-width:52ch">' + esc(c.play.why) + '</p>' +
      '<div style="margin-top:22px" class="lbl">Evidence to bring</div>' +
      '<ul class="kv">' +
      '<li><span class="k">Warhol score</span><span class="v">' + c.score + ' / confidence ' + U.pct(c.confidence) + '</span></li>' +
      '<li><span class="k">Inventory</span><span class="v">' + t.verified_absent + ' of ' + t.total + ' verified absent</span></li>' +
      '<li><span class="k">Surfaces checked</span><span class="v">' + t.surfaces + '</span></li>' +
      '<li><span class="k">Quoted comments</span><span class="v">' + (c.evidence || []).length + ' cited</span></li>' +
      '</ul></div>' +

      '<div><div class="lbl">Draft first contact</div>' +
      '<div class="draft" style="margin-top:12px">' +
      '<div class="subj"><span class="lbl">Subject</span><span class="v">' + esc(o.subject) + '</span></div>' +
      '<div class="msg"><p>' + esc(o.opener) + '</p>' +
      '<ul>' + o.bullets.map(function (b) { return '<li>' + esc(b) + '</li>'; }).join('') + '</ul>' +
      '<p>' + esc(o.close) + '</p>' +
      '<p style="margin-top:18px">' + esc(W.user.name) + '<br><span style="font-family:var(--sans);font-size:13px;color:var(--ink-3)">' + esc(W.user.role) + ', Paradium</span></p>' +
      '</div></div>' +
      '<div style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">' +
      '<button class="btn" data-act="copy" data-id="' + c.id + '">' + (state.copied ? 'Copied to clipboard' : 'Copy the draft') + '</button>' +
      '<button class="btn" data-v="ghost" data-act="view" data-view="drop">Back to the drop</button>' +
      '</div>' +
      '<p class="neversend"><b>Warhol never sends.</b> Owning outreach would inherit deliverability and relationship problems that belong to a person, and would turn a listening tool into a CRM. The draft is yours to edit and send from your own inbox.</p>' +
      '</div></div>';
  }

  /* -------------------------------------------------------------- rendering */
  function render() {
    document.documentElement.setAttribute('data-mode', isBacktest() ? 'backtest' : 'live');

    var body;
    if (state.view === 'report') body = reportView();
    else if (state.view === 'watchlist') body = watchlistView();
    else if (state.view === 'runname') body = runNameView();
    else if (state.view === 'outreach') body = outreachView();
    else body = dropView();

    var banner = isBacktest()
      ? '<div class="rewound"><b>Rewound</b>' +
      '<span>Warhol as of ' + esc(U.longDate(state.asOf)) + '. Nothing observed after this date is visible on any screen.</span>' +
      '<button class="btn" data-sz="sm" data-act="asof" data-d="' + W.meta.today + '" style="margin-left:auto;background:transparent;border-color:currentColor;color:inherit">Return to today</button>' +
      '</div>'
      : '';

    var fade = state.animate && !reduceMotion.matches ? ' viewfade' : '';
    state.animate = false;

    document.getElementById('app').innerHTML =
      '<div class="shell">' + railHTML() +
      '<main class="work" id="work">' + banner +
      '<div class="wrap' + fade + '">' + body + '</div>' +
      '</main></div>';
  }

  /* ---------------------------------------------------------------- actions */
  function go(view, from) {
    clearTimers();
    state.view = view;
    state.passTray = null;
    state.copied = false;
    state.animate = true;
    if (from) state.from = from;
    render();
    window.scrollTo(0, 0);
  }

  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;
    if (!el) return;
    var act = el.getAttribute('data-act');
    var id = el.getAttribute('data-id');

    if (act === 'view') { go(el.getAttribute('data-view')); return; }

    if (act === 'asof') {
      state.asOf = el.getAttribute('data-d');
      state.revealed = {};
      state.run = { stage: 'idle', query: '', step: 0 };
      if (state.view === 'report' || state.view === 'outreach') state.view = 'drop';
      if (isBacktest() && state.view === 'runname') state.view = 'drop';
      go(state.view);
      return;
    }

    if (act === 'mandate') { state.mandateId = el.getAttribute('data-m'); go('drop'); return; }

    if (act === 'theme') {
      var cur = document.documentElement.getAttribute('data-theme');
      document.documentElement.setAttribute('data-theme', cur === 'dark' ? 'light' : 'dark');
      render();
      return;
    }

    if (act === 'report') {
      state.reportId = id;
      go('report', el.getAttribute('data-from') || (state.view === 'outreach' ? state.from : state.view === 'report' ? state.from : state.view));
      return;
    }

    if (act === 'passtray') { state.passTray = id || null; render(); return; }

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

    if (act === 'promote') {
      state.decisions[id] = { verb: 'promote', at: state.asOf };
      state.outreachId = id;
      go('outreach');
      return;
    }

    if (act === 'outreach') { state.outreachId = id; go('outreach'); return; }

    if (act === 'undo') { delete state.decisions[id]; render(); return; }

    if (act === 'reveal') { state.revealed[id] = true; render(); return; }

    if (act === 'runreset') { state.run = { stage: 'idle', query: '', step: 0 }; render(); return; }

    if (act === 'copy') {
      var c = W.byId[id] || W.runANameResult;
      var o = c.outreach;
      var text = 'Subject: ' + o.subject + '\n\n' + o.opener + '\n\n' +
        o.bullets.map(function (b) { return '- ' + b; }).join('\n') + '\n\n' + o.close + '\n\n' +
        W.user.name + '\n' + W.user.role + ', Paradium';
      copyText(text);
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
      ta.style.position = 'fixed';
      ta.style.left = '-9999px';
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (err) { /* clipboard is unavailable from file://; the draft is on screen anyway */ }
  }

  /* ------------------------------------------------------------------- boot */
  function initTheme() {
    var mq = window.matchMedia('(prefers-color-scheme: dark)');
    document.documentElement.setAttribute('data-theme', mq.matches ? 'dark' : 'light');
    if (mq.addEventListener) {
      mq.addEventListener('change', function (ev) {
        document.documentElement.setAttribute('data-theme', ev.matches ? 'dark' : 'light');
        render();
      });
    }
  }

  initTheme();
  render();
})();
