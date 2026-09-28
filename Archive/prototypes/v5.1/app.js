/* ==========================================================================
   SCOUT v5 — application shell, state and views.
   Classic script, no modules, no fetch. Runs from file://.

   PRD v1.3. What changed from v4, and why:

   · WARHOL IS THE ENGINE; SCOUT IS THE PRODUCT. The interface says Scout.
     "Scout Report" became the report, "Warhol Score" became the score, the
     Ledger became the check record. Warhol survives in the footer (§4.6).
   · THE CARD IS THREE CLAIMS — Demand / Missing / Pressure, with Pressure
     carrying two lines and the creator's quote on the card. The expand
     collapsed away; nothing behind it was worth hiding.
   · THE REPORT IS THE CARD, EXPANDED. Same claims, same order, same words.
     "How it scored" is gone as a drawer — its arithmetic attaches to each
     claim. Recommended play and Fit came out of drawers onto the page.
   · BRIEFS ARE TABS AND THEY ARE PARALLEL. The house brief is first and there
     is no All view. Fit is per brief, so a creator outside a brief has no gate
     and therefore no honest score to put on a card.
   · ONE USER TYPE. The Scout/Spotter toggle, referrals and everything
     role-dependent are gone. Admin is a permission, four knobs.
   · TRACK RECORD IS CUT AS A SCREEN. What survives is what-happened-next on one
     creator's report, and the rewound cohort as a first-run moment (§6.9).
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var S = window.SCOUT;
  var U = window.UI;
  var esc = U.esc;
  var DOT = U.DOT;

  /* ------------------------------------------------------------------ state */
  var state = {
    phase: 'signedout',
    view: 'drop',
    briefId: 'b_house',
    asOf: null,                 // the rewind. Null = today.
    firstRun: true,             // January 2024 is shown once, on day one
    reportId: null,
    from: 'drop',
    outreachId: null,
    decisions: {},              // creator id -> { verb, reasonCode, at, window }
    outcomeState: {},           // creator id -> { code, at, declineCode }
    open: {},                   // disclosure id -> open
    passTray: null,
    watchTray: null,
    watchWindow: null,          // a longer window, awaiting its reason (§5.8)
    outcomeTray: null,
    rcp: null,                  // { key, id, x, y } — the receipts popover
    userBriefs: [],
    draft: null,                // the brief being written
    briefStage: 'write',        // write -> read
    paused: { b_workshop: true },
    admin: {
      threshold: S.THRESHOLD,
      ceiling: S.admin.budget.ceiling,
      platforms: S.admin.platforms.map(function (p) { return { name: p.name, on: p.on }; })
    },
    run: { stage: 'idle', query: '', step: 0 },
    copied: false,
    menu: false,
    animate: true
  };

  /* v5 kept every decision in memory only, so a trackpad back-swipe mid-demo
     reset the session to the sign-in gate with no warning. Persisting the
     decided state is enough — the seed rebuilds everything else. */
  var PERSIST = ['phase', 'view', 'briefId', 'asOf', 'firstRun', 'reportId', 'from',
    'outreachId', 'decisions', 'outcomeState', 'userBriefs', 'paused', 'admin'];
  function persist() {
    try {
      var out = {};
      PERSIST.forEach(function (k) { out[k] = state[k]; });
      sessionStorage.setItem('scout-v51', JSON.stringify(out));
    } catch (e) { /* private mode, or file:// — the app still works, it just forgets */ }
  }
  function restore() {
    try {
      var raw = sessionStorage.getItem('scout-v51');
      if (!raw) return;
      var saved = JSON.parse(raw);
      PERSIST.forEach(function (k) { if (saved[k] !== undefined) state[k] = saved[k]; });
    } catch (e) { /* corrupt or unavailable: start fresh rather than fail */ }
  }

  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------ derivations */
  function me() { return S.me; }
  function asOf() { return state.asOf || S.TODAY; }
  function rewound() { return !!state.asOf; }
  function allBriefs() {
    return S.briefs.concat(state.userBriefs).filter(function (b) { return !b.archived; });
  }
  function brief(id) {
    var b = null;
    allBriefs().forEach(function (x) { if (x.id === id) b = x; });
    return b || S.briefs[0];
  }
  function isPaused(b) { return !!state.paused[b.id]; }
  function dropList(b) {
    return S.dropFor(asOf(), b || brief(state.briefId), state.admin.threshold);
  }
  function decisionFor(id) { return state.decisions[id] || null; }
  function creator(id) { return id === W.runANameResult.id ? W.runANameResult : W.byId[id]; }
  function score(c) { return S.score13(c); }
  function remaining() {
    return dropList().filter(function (c) { return !decisionFor(c.id); }).length;
  }
  function stateLabel(v) {
    return v === 'pass' ? 'Passed' : v === 'watch' ? 'Watched' : 'Promoted';
  }
  function watchlist() {
    var seeded = W.candidates.filter(function (c) { return c.status === 'watched'; });
    var added = [];
    Object.keys(state.decisions).forEach(function (id) {
      if (state.decisions[id].verb !== 'watch') return;
      var c = creator(id);
      if (c && seeded.indexOf(c) === -1) added.push(c);
    });
    return added.concat(seeded);
  }
  function passedList() {
    var rows = S.passedSeed.map(function (p) {
      return { c: creator(p.id), at: p.at, code: p.code, by: p.by, trigger: p.trigger, brief: p.brief };
    }).filter(function (r) { return r.c; });
    Object.keys(state.decisions).forEach(function (id) {
      var d = state.decisions[id];
      if (d.verb !== 'pass') return;
      var c = creator(id);
      if (!c) return;
      var r = S.reasonFor(d.reasonCode) || {};
      var oc = d.reasonCode === 'declined' ? outcomeOf(c.id) : null;
      var why = oc && oc.declineCode ? declineLabel(oc.declineCode) : null;
      rows.unshift({ c: c, at: d.at, code: d.reasonCode, by: me().name,
        trigger: why || r.suppression, brief: state.briefId, fresh: true });
    });
    /* Newest first. The screen exists to answer "I passed someone in March and
       now I cannot find them" on a surface with no search box, so scanning is
       the only mechanism — and scanning needs an order you can stop reading at. */
    return rows.sort(function (a, b) { return a.at < b.at ? 1 : a.at > b.at ? -1 : 0; });
  }

  function declineLabel(code) {
    var hit = null;
    S.declineReasons.forEach(function (x) { if (x.code === code) hit = x.label; });
    return hit;
  }
  function promotedList() {
    var rows = [];
    Object.keys(S.promotedSeed).forEach(function (id) {
      var c = creator(id);
      if (c) rows.push({ c: c, at: S.promotedSeed[id].at, by: S.promotedSeed[id].by });
    });
    Object.keys(state.decisions).forEach(function (id) {
      if (state.decisions[id].verb !== 'promote') return;
      var c = creator(id);
      if (c) rows.unshift({ c: c, at: state.decisions[id].at, by: me().name, fresh: true });
    });
    return rows;
  }
  function outcomeOf(id) {
    if (state.outcomeState[id]) return state.outcomeState[id];
    return S.promotedSeed[id] ? { code: S.promotedSeed[id].state, at: S.promotedSeed[id].at } : null;
  }

  /* ------------------------------------------------------------------ rail */
  function railHTML() {
    var who = me();
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return '<nav class="railcol railcol--wide" aria-label="Sections">' +
      '<div class="brandrow"><span class="me">S</span>' +
      '<span><span class="wm">Scout</span><span class="sub-t">Origination desk</span></span></div>' +

      '<button class="btn btn--primary newbrief" data-act="newbrief">' + U.icon('plus') + 'New brief</button>' +

      '<div class="nav">' +
      /* String(remaining() || total) printed the full count at zero remaining,
         at the exact moment the page says "Worked to zero". */
      navBtn('drop', 'drop', "Today's drop", String(dropList().length ? remaining() : 0)) +
      navBtn('watchlist', 'watch', 'Watchlist', String(watchlist().length)) +
      navBtn('passed', 'passed', 'Passed', String(passedList().length)) +
      navBtn('runname', 'run', 'Run a name', '') +
      (who.admin ? navBtn('admin', 'admin', 'Admin', '') : '') +
      '</div>' +

      /* One account control, not two. The rail already carried the identity at
         the bottom and the top bar carried a second avatar that did the same
         job — so the identity is now the control, where it already was. */
      '<div class="acct acct--rail">' +
      '<button class="whoami" data-act="menu" aria-expanded="' + state.menu + '" aria-haspopup="true">' +
      '<span class="ini ini--lilac ini--xs">' + esc(who.initials) + '</span>' +
      '<span class="who"><b>' + esc(who.name) + '</b><span>' + esc(who.email) + '</span></span>' +
      '</button>' +
      (state.menu ? acctMenu(who, dark) : '') +
      '</div>' +
      /* Warhol is the engine. Strategy documents and a footer (§4.6). */
      '<p class="engineft">Warhol engine ' + DOT + ' Paradium</p>' +
      '</nav>';
  }

  function navBtn(view, ic, label, n) {
    var on = state.view === view ||
      (view === 'drop' && state.view === 'report' && state.from === 'drop') ||
      (view === 'watchlist' && state.view === 'report' && state.from === 'watchlist') ||
      (view === 'passed' && state.view === 'report' && state.from === 'passed');
    return '<button class="rnav" data-act="view" data-view="' + view + '"' +
      (on ? ' aria-current="page"' : '') + '>' +
      '<span class="ic">' + U.icon(ic) + '</span><span class="tx">' + esc(label) + '</span>' +
      (n ? '<span class="pill"><span class="sr-only">, </span>' + esc(n) + '</span>' : '') + '</button>';
  }

  /* --------------------------------------------------------------- top bar */
  function topHTML() {
    var tail = state.view === 'report' ? 'The report'
      : state.view === 'outreach' ? 'Outreach package'
        : state.view === 'watchlist' ? 'Watchlist'
          : state.view === 'passed' ? 'Passed'
            : state.view === 'runname' ? 'Run a name'
              : state.view === 'admin' ? 'Admin'
                : state.view === 'newbrief' ? 'New brief' : 'Drop';
    return '<div class="top">' +
      '<div class="crumb"><button data-act="view" data-view="drop"><b>Scout</b></button>' +
      '<span>/</span>' + esc(tail) + '</div></div>';
  }

  function acctMenu(who, dark) {
    return '<div class="acctmenu">' +
      '<div class="who"><b>' + esc(who.name) + '</b><span>' + esc(who.email) + '</span></div>' +
      '<span class="lab">Theme</span>' +
      '<div class="tsw"><button data-act="theme" data-set="light" aria-pressed="' + (!dark) + '">Light</button>' +
      '<button data-act="theme" data-set="dark" aria-pressed="' + dark + '">Dark</button></div>' +
      '<span class="lab">Digest</span>' +
      '<div class="seg"><button data-act="noop" aria-pressed="true">Daily</button>' +
      '<button data-act="noop" aria-pressed="false">Weekly</button></div>' +
      '<p class="menunote">Daily includes the empty days. The empty day is the signal.</p>' +
      '<button class="btn btn--ghost btn--sm out" data-act="signout">Sign out</button>' +
      '</div>';
  }

  /* ================================================================== DROP */
  function dropView() {
    var b = brief(state.briefId);
    var list = dropList(b);
    var left = list.left || {};
    var done = list.length - remaining();

    /* The rewind is a first-run moment, not a menu item — a new member sees
       January 2024 once, on day one, where calibration actually matters (§6.9).
       It does not become a permanent destination. */
    var lens = rewound() ? '<div class="aslens">' +
      '<b>You are reading Scout as of ' + esc(U.longDate(S.REWIND)) + '.</b> ' +
      'Same screen, same model, same bar &mdash; wound back two and a half years, before any of these ' +
      'names meant anything. Open one and the bottom of the report says what actually happened.' +
      '<button class="btn btn--primary btn--sm" data-act="totoday">Come back to today</button>' +
      '</div>' : '';

    var head = '<header class="pagehead"><h1>Today&rsquo;s drop</h1>' +
      '<p class="deck">' + (list.length
        ? U.plural(list.length, 'creator') + ' cleared the bar for <b>' + esc(b.name) + '</b>. ' +
          'Enough on each card to kill it without opening; backing one needs the report.'
        : 'Nothing cleared the bar for <b>' + esc(b.name) + '</b> today.') + '</p>' +
      '</header>';

    var chips = briefTabs();

    if (isPaused(b)) {
      return lens + head + chips + '<section class="p zero">' +
        '<h2>This brief is paused.</h2>' +
        '<p>Scout has stopped looking, so nothing new arrives. Every decision you made under it is still here, ' +
        'and one click starts it again.</p>' +
        '<p><button class="btn btn--primary" data-act="resume" data-b="' + esc(b.id) + '">Resume this brief</button></p>' +
        '</section>';
    }

    if (b.fresh) {
      /* The state the guardrails screen promised, kept verbatim so the two
         screens agree: Scout goes looking tonight, first names tomorrow. */
      return lens + head + chips + '<section class="p zero">' +
        '<h2>Scout is looking.</h2>' +
        '<p>Nobody in Scout matched <b>' + esc(b.name) + '</b> when you wrote it, so it went out looking ' +
        'tonight. First names tomorrow morning — and every morning after that, until you pause it.</p>' +
        '<p class="lifecycle">A brief returns nobody today, starts a standing job, reports tomorrow, ' +
        'stays gated and capped, and is allowed to find nothing. That is the whole difference between ' +
        'a brief and a search.</p></section>';
    }

    if (!list.length) {
      /* "Scout found nothing worth your time today" is a feature. A fixed daily
         ten forces filler on thin days and quietly teaches you the list is
         arbitrary (§5.4). The argument attaches on the empty day (§6.11). */
      return lens + head + chips + '<section class="p zero">' +
        '<h2>Scout found nothing worth your time today.</h2>' +
        '<p>' + left.pool + ' people were looked at for this brief. ' +
        (left.wrongFit ? left.wrongFit + ' did not match it. ' : '') +
        (left.below ? left.below + ' scored under ' + state.admin.threshold + '. ' : '') +
        'The bar protects your trust and the cap protects your attention &mdash; so some days this is empty, ' +
        'and that is the machine working rather than the scan failing.</p>' +
        '</section>';
    }

    var progress = '<div class="worked"><span class="lab">Worked</span>' +
      '<span class="pill">' + done + ' / ' + list.length + '</span>' +
      U.track(list.length ? (done / list.length) * 100 : 0) +
      '<span class="sub-t">bar at ' + state.admin.threshold + ' ' + DOT + ' capped at ' + S.CAP + '</span></div>';

    var rows = list.map(function (c, i) {
      var d = decisionFor(c.id);
      return d ? decidedRow(c, d) : card(c, i + 1, b);
    }).join('');

    /* What the gates left out, stated rather than implied. */
    var below = (left.below || left.wrongFit) ? '<p class="leftout">' +
      'Scout also looked at ' +
      [left.below ? left.below + ' who scored under ' + state.admin.threshold : '',
        left.wrongFit ? left.wrongFit + ' who did not match this brief' : ''].filter(Boolean).join(' and ') +
      '. They are not gone &mdash; they are just not worth your morning.</p>' : '';

    var done0 = remaining() === 0 ? '<div class="p p--teal zero mt-5">' +
      '<h2>Worked to zero.</h2>' +
      '<p>Every name has a decision and an owner. Close Scout; it will have the next one at 06:00.</p></div>' : '';

    return lens + head + chips + progress + '<div class="listwrap">' + rows + '</div>' + below + done0;
  }

  /* Briefs are tabs, and they are parallel: the house brief first, then each
     brief you have written, then + New brief. There is no All view — the
     population is the sum of every brief ever written, so "All" would be a pile
     whose contents are an accident of who wrote what, and Fit is per brief, so a
     creator outside any brief has no gate and no honest score (§6.1). */
  function briefTabs() {
    return '<div class="views">' + allBriefs().map(function (x) {
      var on = state.briefId === x.id;
      var n = isPaused(x) ? '' : String(S.dropFor(asOf(), x, state.admin.threshold).length);
      return '<button class="vchip' + (x.house ? ' vchip--house' : '') +
        (isPaused(x) ? ' vchip--paused' : '') + '" data-act="brief" data-b="' + x.id +
        '" aria-pressed="' + on + '">' + esc(x.name) +
        (isPaused(x) ? '<span class="c">paused</span>' : '<span class="c">' + n + '</span>') +
        '</button>';
    }).join('') +
      '<button class="vchip vchip--new" data-act="newbrief">' + U.icon('plus') + 'New brief</button>' +
      '</div>' +
      (brief(state.briefId).house
        ? '<p class="tabnote">Nobody wrote the house brief and nobody can edit it. ' +
          'Big audience, no business, under pressure &mdash; anyone worth a call.</p>'
        : '<p class="tabnote">' + esc(brief(state.briefId).description) +
          ' <button class="lnk" data-act="editbrief" data-b="' + esc(state.briefId) + '">See what it is made of</button></p>');
  }

  /* ------------------------------------------------------------- the card */
  /* Three claims and nothing else, in the order the report repeats. */
  function card(c, rank, b) {
    var plat = c.platforms[0] || { name: c.primaryPlatform, followers: c.audience.total };
    return '<article class="row" data-id="' + c.id + '">' +
      '<div class="rk">' + rank + '</div>' +
      '<div class="scorewrap">' + U.ring(c, 'sm', score(c)) + '</div>' +
      '<div class="rowmain">' +
      '<div class="idline"><h2 class="nm">' + esc(c.name) + '</h2>' +
      '<span class="hd">' + esc(c.handle) + '</span></div>' +
      /* The audience is a count only. */
      '<span class="plat1">' + esc(plat.name) + ' ' + DOT + ' ' + U.followers(plat.followers) + '</span>' +

      U.claimList(c, asOf()) +

      (c.resurfaced ? '<div class="resurf">' + U.icon('watch') +
        '<span><b>Back in the drop</b> ' + DOT + ' ' + esc(S.plain(c.resurfaced.reason)) + '</span></div>' : '') +
      (state.passTray === c.id ? passTray(c) : '') +
      (state.watchTray === c.id ? watchTray(c) : '') +
      '</div>' +

      '<div class="acts">' +
      '<button class="vbtn vbtn--open vbtn--sm" data-act="report" data-id="' + c.id + '">Open the report</button>' +
      /* Pass is available inline, one click, with a reason. Promote requires
         opening the report (§6.1). */
      U.verbBtn('watchtray', c.id, 'Watch', 'hold', 'sm') +
      U.verbBtn('passtray', c.id, 'Pass', 'no', 'sm') +
      '</div></article>';
  }

  /* Watching has a window, set when you watch. Watching compounds, so the
     watchlist needs an exit that is not a rejection — and the exit is a date
     chosen up front rather than a rule that fires much later (§5.8). */
  function watchTray(c) {
    return '<div class="passtray"><div class="hd"><span class="lab">Watch, and check back in</span>' +
      '<span class="q">A watch is a hypothesis with a date: something changes here within the window.</span></div>' +
      '<div class="windows">' + ['1 month', '2 months', '3 months'].map(function (w, i) {
        return '<button data-act="' + (i === 0 ? 'watch' : 'watchwhy') + '" data-id="' + c.id +
          '" data-w="' + esc(w) + '"' +
          (state.watchWindow === w ? ' class="on"' : i === 0 && !state.watchWindow ? ' class="on"' : '') +
          '><b>' + esc(w) + '</b>' +
          (i === 0 ? '<span>default</span>' : '<span>say why</span>') + '</button>';
      }).join('') + '</div>' +
      /* §5.8: default one month, longer only with a reason. v5 printed "needs a
         reason" on both longer windows and then never asked for one — friction
         promised and not delivered reads as a bug either way, so ask. */
      (state.watchWindow ? '<form class="whyrow" data-act="watchwhy-submit" data-id="' + c.id + '">' +
        '<label class="lab" for="watchwhy">Why ' + esc(state.watchWindow) + '?</label>' +
        '<div class="formacts mt-2">' +
        '<input class="inp" id="watchwhy" type="text" autocomplete="off" ' +
        'placeholder="Rebuilding after a platform move &mdash; give it a quarter">' +
        '<button class="btn btn--primary" type="submit">Watch for ' + esc(state.watchWindow) + '</button>' +
        '</div></form>' : '') +
      '<p class="traynote">Six months would contradict the whole claim &mdash; they feel this <b>this quarter</b>. ' +
      'When the window closes the name comes back as a decision, carrying what moved.</p>' +
      '<div class="mt-3"><button class="btn btn--ghost btn--sm" data-act="watchtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  function passTray(c) {
    return '<div class="passtray"><div class="hd"><span class="lab">Pass, with a reason</span>' +
      '<span class="q">The reason is the suppression rule and the training label. Nobody vanishes.</span></div>' +
      '<div class="reasons">' + S.passReasons.filter(function (r) { return !r.outcomeOnly; }).map(function (r) {
        return '<button data-act="pass" data-id="' + c.id + '" data-code="' + r.code + '">' +
          '<b>' + esc(r.label) + '</b><span>' + esc(r.suppression) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="mt-3"><button class="btn btn--ghost btn--sm" data-act="passtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  function decidedRow(c, d) {
    var r = d.verb === 'pass' ? S.reasonFor(d.reasonCode) : null;
    var oc = d.reasonCode === 'declined' ? outcomeOf(c.id) : null;
    var why = oc && oc.declineCode ? declineLabel(oc.declineCode) : null;
    var detail = d.verb === 'pass' ? (why ? 'Declined — ' + why.toLowerCase() + '.' : r.label + '. ' + r.suppression)
      : d.verb === 'watch' ? 'Checking back in ' + (d.window || '1 month') + ', with what moved.'
        : 'Outreach package generated. Tell Scout how it goes.';
    return '<div class="decided">' +
      '<span class="pill' + (d.verb === 'pass' ? '' : ' pill--ok') + '">' + esc(stateLabel(d.verb)) + '</span>' +
      '<span class="nm2">' + esc(c.name) + '</span><span class="sub-t">' + esc(detail) + '</span>' +
      '<span class="spacer"></span>' +
      /* A decided name still has to be reachable. Promote is not the end of the
         record — the outcome lives on the report (§8), and without a way back
         there the field can never be filled in. */
      '<button class="btn btn--ghost btn--sm" data-act="report" data-id="' + c.id + '">Open the report</button>' +
      (d.verb === 'promote' ? '<button class="btn btn--sm btn--out" data-act="outreach" data-id="' + c.id + '">Outreach package</button>' : '') +
      '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button></div>';
  }

  /* ================================================================ REPORT */
  /* The report is the card, expanded. Same three claims, same order, same
     words, each carrying its own number and its own proof. The previous
     structure reorganised into Case / Quotes / Inventory / four drawers one
     click after promising three things on the card — a continuity break, which
     is what made it hard to follow. Volume was never the problem (§6.2). */
  function reportView() {
    var c = creator(state.reportId);
    if (!c) return '<p class="sub-t">Not found.</p>';
    var b = brief(state.briefId);
    var cl = S.claims(c);
    var fit = S.fitFor(c, b);
    var d = decisionFor(c.id);
    var call = rewound() ? S.rewindCalls[c.id] : null;
    var sc = score(c);

    var lens = rewound() ? '<div class="aslens"><b>Reading this as of ' + esc(U.longDate(S.REWIND)) + '.</b> ' +
      'Nothing observed after that date is in it. What actually happened is at the bottom.</div>' : '';

    /* The tall header is the arrival and scrolls away; this compact bar takes
       over, so a decision can be made from anywhere in the report. It is a
       zero-height sticky anchor with the bar itself positioned out of flow —
       otherwise an invisible 82px block sits at the top of every report, and
       collapsing it on activation would shove the page down mid-scroll. */
    var out = '<div class="compact" id="compact"><div class="cbar">' +
      '<button class="back" data-act="view" data-view="' + esc(state.from) + '" aria-label="Back">' +
      U.icon('back') + '</button>' +
      U.ring(c, 'xs', sc) +
      '<div class="who2"><b>' + esc(c.name) + '</b>' +
      '<span>Demand ' + cl.demand.points + ' ' + DOT + ' Missing ' + cl.missing.points +
      ' ' + DOT + ' Pressure ' + cl.pressure.points + '</span></div>' +
      (d || rewound() ? '' : '<div class="verbs">' +
        U.verbBtn('promote', c.id, 'Promote', 'go', 'sm') +
        U.verbBtn('watchtray', c.id, 'Watch', 'hold', 'sm') +
        U.verbBtn('passtray', c.id, 'Pass', 'no', 'sm') + '</div>') +
      '</div></div>';

    out += lens + '<header class="rpthead"><div class="who2">' +
      '<button class="btn btn--soft btn--sm backbtn" data-act="view" data-view="' + esc(state.from) + '">' +
      U.icon('back') + 'Back to ' + esc(state.from === 'watchlist' ? 'the watchlist'
        : state.from === 'passed' ? 'the passed list'
          : state.from === 'runname' ? 'Run a name' : 'the drop') + '</button>' +
      (c.sourceTag === 'manual' || c.resurfaced || rewound() ? '<div class="rpt-tags">' +
        (c.sourceTag === 'manual' ? '<span class="pill pill--warn">You ran this name</span>' : '') +
        (c.resurfaced ? '<span class="pill pill--ok">Back in the drop</span>' : '') +
        (rewound() ? '<span class="pill">' + esc(U.longDate(S.REWIND)) + '</span>' : '') + '</div>' : '') +
      '<h1>' + esc(c.name) + '</h1>' +
      /* Keep the cross-platform graph — 214k across four platforms is a
         different business from 214k on one. The per-platform identity match
         percentage came off; a weak match is stated in words instead (§6.2). */
      '<p class="handle">' + esc(c.handle) + '</p>' +
      '<div class="idrow">' + c.platforms.map(function (p) {
        return '<span class="plat"><span class="n">' + esc(p.name) + '</span>' +
          '<span class="f">' + U.followers(p.followers) + '</span></span>';
      }).join('') + '</div>' +
      weakMatch(c) +
      '<p class="thesis">' + esc(S.plain(c.headline)) + '</p>' +
      '<div class="topline">' +
      '<div class="tl"><span class="k">Fits your brief</span><span class="v">' + esc(b.name) +
      '<span class="why">' + esc(fit.why) + '</span></span></div>' +
      '<div class="tl"><span class="k">Recommended play</span><span class="v">' + esc(S.plain(c.play.label)) +
      '<span class="why">' + esc(S.plain(c.play.why)) + '</span></span></div>' +
      '</div>' +
      /* One set of verbs, at the top. They sit here while the header is on
         screen and the sticky bar picks them up the moment it scrolls away, so
         only one set is ever visible — which is what the second sticky row at
         the bottom of the page was failing to be. */
      (d || rewound() || outcomeOf(c.id) ? ''
        : state.passTray === c.id ? '<div class="headtray">' + passTray(c) + '</div>'
        : state.watchTray === c.id ? '<div class="headtray">' + watchTray(c) + '</div>'
        : '<div class="headverbs">' +
          U.verbBtn('promote', c.id, 'Promote', 'go') +
          U.verbBtn('watchtray', c.id, 'Watch', 'hold') +
          U.verbBtn('passtray', c.id, 'Pass', 'no') + '</div>') +
      '</div>' +
      /* The same mark the lists use, one size up. v5 invented a second
         treatment here — a bare number in a panel — so the score looked like a
         different quantity depending on which screen you were on. */
      '<div class="scoreblock">' + U.ring(c, 'lg', sc) +
      '<span class="bs-k">the score ' + U.rcp('score', c.id, 'the score') + '</span>' +
      '<span class="bs-n">bar is ' + state.admin.threshold + '</span></div>' +
      '</header>';

    /* Brand safety surfaces on the report itself, not merely as a card
       annotation, and blocks silent promotion (§8). */
    out += unsafeFlag(c);

    out += '<div class="claims">';

    /* ---- DEMAND ------------------------------------------------------- */
    out += '<section class="claim claim--demand"><div class="ch">' +
      '<h2>Demand ' + U.rcp('demand', c.id, 'Demand') + '</h2><span class="q">Do people want to buy?</span>' +
      '<span class="pts">+' + cl.demand.points + '</span></div>' +
      '<p class="lede">' + esc(cl.demand.line) + ', ' + esc(cl.demand.window) + '.</p>' +
      (cl.demand.quotes.length
        ? '<div class="quotes">' + cl.demand.quotes.map(function (e, i) {
            return U.quoteBlock(e, asOf(), { url: false, likes: S.likesFor(c, i) });
          }).join('') + '</div>'
        : '<p class="sub-t mt-3">Comments could not be read on this platform, so this scores neutral ' +
          'and pulls confidence down. It is not evidence of nothing.</p>') +
      '</section>';

    /* ---- WHY THEY'RE ON THIS LIST (Trajectory) ------------------------- */
    /* Trajectory reads as "why they're on this list" — the answer to why the
       machine picked this person, which nothing previously stated. It carries
       trends, never a score: a fourth number is a fourth thing to learn. */
    out += '<section class="claim claim--why"><div class="ch">' +
      '<h2>Why they&rsquo;re on this list ' + U.rcp('trajectory', c.id, 'why they are on this list') + '</h2>' +
      '<span class="q">A gate, not a score. Rising or steady, never fading.</span>' +
      '<span class="pts pts--gate">gate ' + DOT + ' pass</span></div>' +
      '<ul class="whylist">' + cl.trajectory.map(function (t) {
        return '<li><span class="l">' + esc(t[0]) + '</span>' +
          (t[1] ? '<span class="v">' + esc(t[1]) + '</span>' : '') + '</li>';
      }).join('') + '</ul></section>';

    /* ---- PRESSURE ------------------------------------------------------ */
    /* Pressure sits above Missing. Demand and Pressure make you lean in; the
       inventory is the proof you check second. A ten-row list in the middle
       buried the strongest line on the page (§6.2). */
    out += '<section class="claim claim--pressure"><div class="ch">' +
      '<h2>Pressure ' + U.rcp('pressure', c.id, 'Pressure') + '</h2><span class="q">Will they take the call?</span>' +
      '<span class="pts">' + cl.pressure.points + '/' + cl.pressure.max + '</span></div>' +
      '<p class="lede">' + esc(cl.pressure.lens) + '</p>' +
      '<ul class="preslist">' + cl.pressure.lines.map(function (l) {
        if (l.kind === 'said') {
          return '<li class="said"><span class="l">&ldquo;' + esc(l.text) + '&rdquo;</span>' +
            '<span class="v">their words ' + DOT + ' ' + esc(U.shortDate(l.at)) + '</span></li>';
        }
        return '<li><span class="l">' + esc(l.text) + '</span>' +
          '<span class="v">' + esc(l.when || 'last 90 days') + '</span></li>';
      }).join('') + '</ul></section>';

    /* ---- MISSING ------------------------------------------------------- */
    out += '<section class="claim claim--missing"><div class="ch">' +
      '<h2>Missing ' + U.rcp('missing', c.id, 'Missing') + '</h2><span class="q">Is there anything to buy?</span>' +
      '<span class="pts">+' + cl.missing.points + '</span></div>' +
      /* Weight is order, not a badge — highest-value absence first, with a
         clause on that line only (§5.2). */
      '<span class="subh">What they&rsquo;ve built</span>' +
      '<ul class="invlist">' + cl.missing.built.map(function (r) {
        return '<li>' + U.vmark(r.state) +
          '<span class="it">' + esc(r.item) + '</span>' +
          '<span class="st">' + invPhrase(r) + '</span></li>';
      }).join('') + '</ul>' +
      /* Missing everything including the trivial things is a LABEL, not a
         number: clean slate versus partway down a road (§5.2). */
      '<span class="subh">What they&rsquo;ve switched on <em>&mdash; ' + esc(cl.missing.onLabel) + '</em></span>' +
      '<ul class="invlist invlist--on">' + cl.missing.on.map(function (r) {
        return '<li>' + U.vmark(r.state) +
          '<span class="it">' + esc(r.item) + '</span>' +
          '<span class="st">' + esc(r.note || U.VLABEL[r.state]) + '</span></li>';
      }).join('') + '</ul></section>';

    out += '</div>';

    /* Receipts and samples stay collapsed. Nobody opens receipts until they are
       challenged — but they must exist, or "we looked in 6 places" is a claim
       rather than a fact (§6.10). */
    var sum = S.checkSummary(c, rewound() ? S.REWIND : null);
    out += '<div class="p flushbox mt-5">' +
      disclosure('record', 'How we checked',
        sum ? sum.checks + ' checks across ' + sum.places + ' places, ' +
          U.shortDate(sum.first) + '&ndash;' + U.shortDate(sum.last) : '',
        recordBody(c)) +
      (c.samples && c.samples.length
        ? disclosure('samples', 'What their work looks like', U.plural(c.samples.length, 'sample'), samplesBody(c))
        : '') +
      '</div>';

    /* What happened next — only on a rewound report, and only under the case
       that argued for it. */
    if (rewound() && c.outcome) out += happenedNext(c, call);

    if (d) {
      out += '<div class="decide"><span class="pill' + (d.verb === 'pass' ? '' : ' pill--ok') + '">' +
        esc(stateLabel(d.verb)) + '</span><span class="sub-t">Recorded by ' + esc(me().name) + '</span>' +
        '<span class="spacer"></span>' +
        (d.verb === 'promote' ? '<button class="btn btn--sm btn--out" data-act="outreach" data-id="' + c.id + '">Outreach package</button>' : '') +
        '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button></div>';
      /* Declining rewrites the verb to 'pass' for suppression (§8), which in v5
         made this branch unreachable and took the decline reason with it — the
         one fact the whole outcome field exists to capture. */
      if (d.verb === 'promote' || outcomeOf(c.id)) out += outcomeControl(c);
    } else if (outcomeOf(c.id)) {
      out += outcomeControl(c);
    } else if (!rewound()) {
      /* The verbs live in the bar at the top and nowhere else. A second sticky
         set at the bottom meant two identical action rows on screen at once for
         the whole length of the report — the same decision offered twice, which
         is one more thing to read and no more you can do. */
      out += '<p class="recorded">Recorded as ' + esc(me().name) + ' ' + DOT + ' ' +
        esc(U.longDate(asOf())) + '</p>';
    }
    return out;
  }

  function invPhrase(r) {
    if (r.state === S.STATES.A) {
      return 'not there ' + DOT + ' we looked in ' + (r.places || 3) + ' places' +
        (r.clause ? '<em>' + esc(r.clause) + '</em>' : r.note ? '<em>' + esc(r.note) + '</em>' : '');
    }
    if (r.state === S.STATES.P) {
      return 'found it' + (r.clause ? '<em>' + esc(r.clause) + '</em>' : r.note ? '<em>' + esc(r.note) + '</em>' : '');
    }
    if (r.state === S.STATES.NA) return esc(r.note || 'we did not need to check');
    return 'could not resolve ' + DOT + ' scores neutral' +
      (r.note ? '<em>' + esc(r.note) + '</em>' : '');
  }

  /* Say it in words only when the match is weak. Nobody acts on "id match 87%". */
  function weakMatch(c) {
    var weak = null;
    (c.platforms || []).forEach(function (p) { if (!weak && p.matchConfidence < 0.9) weak = p; });
    return weak ? '<p class="weakid">We are not certain the ' + esc(weak.name) +
      ' account is the same person.</p>' : '';
  }

  function unsafeFlag(c) {
    var d = decisionFor(c.id);
    if (!d || d.reasonCode !== 'unsafe') return '';
    return '<div class="unsafe"><b>Flagged brand-unsafe by ' + esc(me().name) + '.</b> ' +
      'This only suppresses the name in your own queue &mdash; nobody can delete a creator for everyone. ' +
      'Promoting from here means acknowledging the flag first.</div>';
  }

  function disclosure(id, title, summary, body) {
    var open = !!state.open[id];
    return '<div class="disc' + (open ? ' open' : '') + '">' +
      '<button data-act="disc" data-d="' + id + '" aria-expanded="' + open +
      '" aria-controls="disc-' + id + '">' +
      '<span class="t">' + title + '</span><span class="s">' + summary + '</span>' +
      '<span class="chev">' + U.icon('chev') + '</span></button>' +
      (open ? '<div class="disc-body" id="disc-' + id + '">' + body + '</div>' : '') + '</div>';
  }

  function recordBody(c) {
    var rows = S.recordFor(c, rewound() ? S.REWIND : null);
    if (!rows.length) return '<p class="sub-t">No check record at this depth.</p>';
    var e = S.effortFor(c, asOf());
    return '<div class="wrapx"><table class="ct"><thead><tr>' +
      '<th>Where we looked</th><th>What we found</th><th>Source</th><th>When</th><th>Result</th><th>Pass</th>' +
      '</tr></thead><tbody>' + rows.map(function (r) {
        return '<tr><td><b>' + esc(r.place) + '</b></td><td>' + esc(r.found) + '</td>' +
          '<td class="lsrc">' + esc(r.url) + '</td><td>' + esc(U.shortDate(r.at)) + '</td>' +
          '<td>' + U.vstate(r.state) + '</td>' +
          '<td><span class="pill">' + esc(S.DEPTH[r.depth].label) + '</span> ' + U.engTag(r.engine) + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      /* Creator scope shows effort, never currency. "We've spent £4.20 learning
         about this person" is both grim and the wrong optimisation target —
         it invites judgments about people on cost grounds (§5.8). */
      /* The header already states the count. v5 had the footer restate it from a
         different sum, so one disclosure carried two totals for "how thorough
         was this" a few lines apart — on the page whose whole job is being
         defensible. Say it once, in the heading, and let the footer explain. */
      '<p class="ledger-ft">One row per place, tracked since ' + esc(U.shortDate(e.since)) +
      '. Names only exist from Probe depth upward, where an actual judgment was made and a ' +
      'result was written down.</p>';
  }

  function samplesBody(c) {
    return '<div class="samples">' + c.samples.map(function (sm) {
      return '<div class="sample"><div class="swatch ' + U.sampleField(sm.tone) + '">' +
        '<span class="playtag">plays here ' + DOT + ' current</span></div>' +
        '<div class="t">' + esc(sm.title) + '</div>' +
        '<div class="m"><span class="pill">' + esc(sm.platform) + '</span>' +
        '<span class="sub-t">' + esc(sm.metric) + '</span><span class="sub-t">' + esc(sm.length) + '</span></div></div>';
    }).join('') + '</div>' +
      '<p class="ledger-ft">Counts and thumbnails are as of the check. The clip itself plays on the ' +
      'platform&rsquo;s own player, so it is always <b>current</b> even when the report is not.</p>';
  }

  function happenedNext(c, call) {
    var o = c.outcome;
    var dud = !o.built || !o.built.length;
    return '<div class="p p--ink mt-5">' +
      '<span class="kick">' + esc(S.plain(o.window)) + ' ' + DOT + ' what happened next</span>' +
      '<h3 class="outcome-h outcome-h--lg">' + esc(S.plain(o.headline)) + '</h3>' +
      '<p class="outcome-n on-ink-soft">' + esc(S.plain(o.note)) + '</p>' +
      (dud ? '' : '<ul class="built">' + o.built.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span>' + esc(S.plain(b)) + '</span></li>';
      }).join('') + '</ul>') +
      (call ? '<p class="calledit">The desk ' + esc(call.verb === 'pass' ? 'passed' : call.verb === 'watch' ? 'watched' : 'promoted') +
        ' this name on ' + esc(U.longDate(S.REWIND)) + ', ' + esc(call.by) + '.' +
        (call.note ? ' ' + esc(call.note) : '') + '</p>' : '') +
      '</div>';
  }

  /* --------------------------------------------------------- the outcome */
  /* Promote is not the end of the record. The label that would actually
     validate the signal model is "they said yes", and nothing collected it.
     Recording an outcome is not managing a relationship: no notes, no next
     steps, no reminders, no pipeline (§8). */
  function outcomeControl(c) {
    var o = outcomeOf(c.id) || {};
    var open = state.outcomeTray === c.id;
    return '<div class="p outcomebox mt-5">' +
      '<span class="lab">Any word?</span>' +
      '<p class="obnote">The only thing that tells Scout whether it was right. It rides in the ' +
      'digest too &mdash; <em>&ldquo;You promoted ' + esc(c.name.split(' ')[0]) + ' 9 days ago. Any word?&rdquo;</em> &mdash; ' +
      'because a field nobody is prompted for is blank in a month.</p>' +
      '<div class="ocrow">' + S.outcomes.map(function (x) {
        return '<button class="ocbtn' + (o.code === x.code ? ' on' : '') + '" data-act="outcome" data-id="' +
          c.id + '" data-o="' + x.code + '"><b>' + esc(x.label) + '</b><span>' + esc(x.note) + '</span></button>';
      }).join('') + '</div>' +
      (o.code === 'declined' || open ? '<div class="declined">' +
        '<span class="lab">Why did they say no?</span>' +
        '<div class="reasons mt-3">' + S.declineReasons.map(function (r) {
          return '<button' + (o.declineCode === r.code ? ' class="on"' : '') +
            ' data-act="decline" data-id="' + c.id + '" data-code="' + r.code + '">' +
            '<b>' + esc(r.label) + '</b><span>' + esc(r.teaches) + '</span></button>';
        }).join('') + '</div></div>' : '') +
      (o.code && o.code !== 'declined'
        ? '<p class="obstate">Recorded ' + esc(U.longDate(o.at || asOf())) + '. ' +
          (o.code === 'signed' ? 'This is the row that validates the model.' : 'Scout will ask again in nine days.') + '</p>'
        : '') +
      '</div>';
  }

  /* ============================================================= WATCHLIST */
  function watchlistView() {
    var list = watchlist();
    var head = '<header class="pagehead"><h1>Watchlist</h1>' +
      '<p class="deck">Kept, not killed &mdash; and every name here is a dated check-back rather than a pile ' +
      'that only grows. When the window closes the name comes back as a decision, carrying what moved.</p>' +
      '<p class="lifecycle">This is the only place spend compounds. Scout recommends who to stop watching; ' +
      'nothing leaves without a person choosing it, because a state change nobody authored throws away the label.</p>' +
      '</header>';

    if (!list.length) {
      return head + '<section class="p zero"><h2>Nothing kept yet.</h2>' +
        '<p>Watch a creator from the drop and they are re-checked here until the window closes.</p></section>';
    }

    var rows = list.map(function (c) {
      var a = S.V13[c.id] || {};
      var d = decisionFor(c.id);
      var win = (d && d.window) || a.window || '1 month';
      var since = c.watchedSince || asOf();
      var days = U.daysBetween(since, asOf());
      var due = closing(c, days, win);
      var trend = a.trend || ['Re-checked continuously', 'nothing has moved yet'];

      return '<div class="wrow">' + U.initials(c, 'sm') +
        '<div><span class="nm">' + esc(c.name) + '</span>' +
        '<span class="hd">' + esc(c.handle) + ' ' + DOT + ' kept ' + esc(U.longDate(since)) +
        ' ' + DOT + ' ' + esc(win) + ' window</span>' +
        /* What the watchlist watches is the trajectory block, because those are
           the lines that move. An alert quotes the trend, never the score
           delta — "score dropped 4 points" says nothing a person can act on. */
        '<ul class="trendlist">' + trend.map(function (t) {
          return '<li>' + esc(t) + '</li>';
        }).join('') + '</ul>' +
        due +
        (state.passTray === c.id ? passTray(c) : '') + '</div>' +
        '<div class="right">' + U.ring(c, 'sm', score(c)) +
        '<button class="btn btn--out btn--sm" data-act="report" data-id="' + c.id + '" data-from="watchlist">Open the report</button>' +
        '</div></div>';
    }).join('');

    var cost = '<div class="wcostbar"><span class="lab">What this list costs</span>' +
      '<span class="v">' + U.money(watchlist().length * 4.2) + ' a month to keep watching</span>' +
      '<span class="sub-t">Effort per creator sits on the report; money sits here and in Admin, ' +
      'because pricing one human being on screen is the wrong thing to optimise.</span></div>';

    return head + '<div class="listwrap">' + rows + '</div>' + cost;
  }

  /* The window closes as a decision, never a silent expiry, carrying what
     moved: keep watching / promote / pass (§5.8). */
  function closing(c, days, win) {
    var span = win === '3 months' ? 90 : win === '2 months' ? 60 : 30;
    if (days < span) {
      return '<p class="duein">Checking back in ' + U.plural(Math.max(1, span - days), 'day') + '.</p>';
    }
    var a = S.V13[c.id] || {};
    return '<div class="checkback"><span class="k">The window has closed</span>' +
      '<p>You kept ' + esc(c.name.split(' ')[0]) + ' ' + esc(win) + ' ago, on the hypothesis that ' +
      'something would change. Here is what moved.</p>' +
      '<ul class="cbdiff">' + (a.trend || []).map(function (t) {
        return '<li>' + esc(t) + '</li>';
      }).join('') + '</ul>' +
      '<div class="cbacts">' +
      '<button class="btn btn--sm btn--out" data-act="watch" data-id="' + c.id + '" data-w="1 month">Keep watching</button>' +
      '<button class="btn btn--sm btn--out" data-act="report" data-id="' + c.id + '" data-from="watchlist">Read it again</button>' +
      '<button class="btn btn--sm btn--out" data-act="passtray" data-id="' + c.id + '">Stop watching</button>' +
      '</div></div>';
  }

  /* =========================================================== PASSED LIST */
  /* Passed creators go somewhere and it is visible. The reason and the trigger
     together are what make a Pass read as a decision rather than a deletion.
     Not a third holding state — that would be a fourth verb (§6.3.1). */
  function passedView() {
    var rows = passedList();
    var head = '<header class="pagehead"><h1>Passed</h1>' +
      '<p class="deck">Nobody vanishes. Every pass carries the reason you gave and the thing that would ' +
      'bring the name back &mdash; which is what makes it a decision rather than a deletion.</p>' +
      '<p class="lifecycle">This is not a third place to put someone you are unsure about. Watch already means that, ' +
      'and a fourth verb is exactly what the three-verb rule exists to prevent.</p></header>';

    if (!rows.length) {
      return head + '<section class="p zero"><h2>Nothing passed yet.</h2>' +
        '<p>Pass a creator with a reason and they appear here with what would return them.</p></section>';
    }

    var misread = 0;
    rows.forEach(function (r) { if (r.code === 'not_asked') misread++; });

    var body = '<div class="listwrap">' + rows.map(function (r) {
      var reason = S.reasonFor(r.code) || { label: r.code };
      return '<div class="prow' + (r.fresh ? ' prow--fresh' : '') + '">' +
        U.initials(r.c, 'sm') +
        '<div class="pmain"><span class="pline"><b>' + esc(r.c.name) + '</b>' +
        '<span class="sep">' + DOT + '</span>passed ' + esc(U.shortDate(r.at)) +
        /* Lower-case the first letter only, so the reason reads as part of the
           sentence without turning "Not what I asked for" into "i". */
        '<span class="sep">' + DOT + '</span><span class="rsn">' +
        esc(reason.label.charAt(0).toLowerCase() + reason.label.slice(1)) + '</span>' +
        '<span class="sep">' + DOT + '</span><span class="trg">' + esc(r.trigger) + '</span></span></div>' +
        '<button class="btn btn--out btn--sm" data-act="report" data-id="' + r.c.id + '" data-from="passed">Open the report</button>' +
        '</div>';
    }).join('') + '</div>';

    /* A Pass reason that points at the brief rather than the person. Three of
       them and Scout offers to re-read the brief with you (§6.7). */
    var repair = misread ? '<div class="p p--butter mt-5 repair">' +
      '<span class="kick">' + misread + ' of 3 ' + DOT + ' not what I asked for</span>' +
      '<h3>Scout may have misread a brief.</h3>' +
      '<p>Passing twenty people one at a time is not a repair. ' +
      (misread >= 3 ? 'Scout can read <b>Home cooks, no store</b> back to you now and fix what it heard.'
        : U.plural(3 - misread, 'more') + ' of these and Scout will offer to read ' +
          '<b>Home cooks, no store</b> back to you and fix what it heard.') + '</p></div>' : '';

    return head + body + repair;
  }

  /* ================================================================ BRIEFS */
  /* A brief is a description in, editable derived structure back. Three
     dropdowns cannot express "insider access to local coaches" (§6.7). */
  function briefView() {
    var d = state.draft || { text: '', chips: [], bar: '', cap: 100, runs: '3 months' };

    if (state.briefStage === 'write') {
      return '<header class="pagehead"><h1>New brief</h1>' +
        '<p class="deck">A brief is the assignment: what we need, who we are looking for, where they post, ' +
        'and what good looks like. Write it the way you would say it out loud.</p>' +
        '<p class="lifecycle">This is not a search. A search returns results now, ranked by match. A brief returns ' +
        'nobody today, starts a standing job, reports tomorrow, stays gated and capped, and is allowed to find nothing.</p>' +
        '</header>' +
        '<div class="form">' +
        '<form data-act="briefsubmit">' +
        '<label class="lab" for="bdesc">What are you looking for?</label>' +
        '<textarea class="inp inp--area" id="bdesc" rows="5" placeholder="Someone to fill our gap in Southern college football. Insider access &mdash; beat writers, people close to local coaches and recruits. Modest following is fine, but their stuff has to land consistently.">' + esc(d.text) + '</textarea>' +
        '<div class="formacts"><button class="btn btn--primary" type="submit">Read it back to me</button>' +
        '<button class="btn btn--ghost" type="button" data-act="view" data-view="drop">Cancel</button></div>' +
        '</form></div>';
    }

    /* Scout reads it back as editable structure. The derived structure has to be
       visible: it is what the overlap check compares, it is what estimates the
       cost, and it is the only way to tell that Scout heard "Southern" as a
       genre. Description-only means a misread is silent and surfaces three
       weeks later as a wrong drop (§6.7). */
    var narrow = d.chips.length > 3;
    return '<header class="pagehead"><h1>New brief</h1>' +
      '<p class="deck">Scout read what you wrote. Correct anything it heard wrong before you save it.</p></header>' +

      '<div class="form">' +
      '<div class="readback"><span class="lab">You wrote</span>' +
      '<p class="wrote">&ldquo;' + esc(d.text) + '&rdquo;</p></div>' +

      '<div class="readback"><span class="lab">Scout read that as</span>' +
      '<div class="chips mt-3">' + d.chips.map(function (ch, i) {
        return '<button class="chipbtn on" data-act="dechip" data-i="' + i + '">' + esc(ch) +
          ' <span class="x">' + U.icon('close') + '</span></button>';
      }).join('') + '</div>' +
      '<p class="qualbar">' + esc(d.bar) + '</p></div>' +

      /* The brief screen states which kind of brief was just written, because
         discovery speed differs by an order of magnitude (§5.7). */
      '<div class="speed">' + (narrow
        ? '<b>This is a narrow one &mdash; nobody in Scout matches it yet.</b> We will go looking tonight ' +
          'and have first names for you tomorrow.'
        : '<b>312 people already match.</b> Scout will start checking them now &mdash; first drop within the hour.') +
      '</div>' +

      /* Guardrails before it deploys, in human units, with money shown as the
         consequence. Nobody knows whether $40 a month is right; everyone knows
         whether "look for up to 100 people" is right (§6.7, decision 106). */
      '<div class="guard"><span class="lab">Before it starts</span>' +
      '<p class="gline">This brief will look for up to ' +
      '<span class="stepper"><button data-act="cap" data-v="-">&minus;</button><b>' + d.cap + '</b>' +
      '<button data-act="cap" data-v="+">+</button></span> people<br>' +
      'and run for ' + '<span class="seg seg--inline">' + ['1 month', '3 months', '6 months'].map(function (r) {
        return '<button data-act="runs" data-v="' + esc(r) + '" aria-pressed="' + (d.runs === r) + '">' + esc(r) + '</button>';
      }).join('') + '</span> before checking in with you.</p>' +
      '<p class="gcost">Roughly <b>' + U.money(d.cap * 0.18 + 4) + '</b> to start, about <b>' +
      U.money(d.cap * 0.12) + '/month</b> to keep watching. First names tomorrow morning.</p>' +
      '<p class="gnote">Narrow briefs are cheaper than broad ones, which is backwards from the intuition &mdash; ' +
      'the cost driver is breadth, not specificity. The search is capped and will say so if it hits the cap.</p>' +
      '</div>' +

      overlapFor(d) +
      '<div class="formacts"><button class="btn btn--primary" data-act="savebrief">Save and start</button>' +
      '<button class="btn btn--ghost" data-act="briefback">Rewrite it</button></div>' +
      '</div>';
  }

  /* Overlap is an exact category match that never blocks (§6.7) — so it has to
     actually compare something. v5 printed the same suggestion for every brief,
     which offered a restoration brief to someone writing about home fitness. */
  function overlapFor(d) {
    var cat = (d.chips[0] || '').split('›')[0].trim();
    var hit = null;
    S.briefs.forEach(function (b) {
      if (b.house || !b.chips) return;
      if ((b.chips[0] || '').split('›')[0].trim() === cat) hit = b;
    });
    if (!hit) return '';
    return '<div class="overlap"><span class="kick">This looks like one you already have</span>' +
      '<p><b>' + esc(hit.name) + '</b>, ' + (state.paused[hit.id] ? 'paused' : 'already running') +
      '. It found 34 people &mdash; 6 promoted. Resuming beats starting fresh on both counts: the ' +
      'population already exists, so results are immediate, and the preview is the actual people it ' +
      'found rather than a description. Anything resumed is re-checked before you see it.</p>' +
      '<div class="formacts mt-3">' +
      '<button class="btn btn--out btn--sm" data-act="resume" data-b="' + esc(hit.id) + '">Resume that one instead</button>' +
      '<span class="sub-t">Joining saves the discovery and probe spend on roughly 4,000 creators.</span></div></div>';
  }

  /* Existing brief, opened from the tab note. Pause yes, delete never. */
  function briefDetailView() {
    var b = brief(state.draft.editing);
    return '<header class="pagehead"><h1>' + esc(b.name) + '</h1>' +
      '<p class="deck">Version ' + (b.version || 1) + ', written ' + esc(U.longDate(b.created || '2026-06-12')) + '.</p></header>' +
      '<div class="form">' +
      '<div class="readback"><span class="lab">You wrote</span>' +
      '<p class="wrote">&ldquo;' + esc(b.description) + '&rdquo;</p></div>' +
      '<div class="readback"><span class="lab">Scout read that as</span>' +
      '<div class="chips mt-3">' + b.chips.map(function (ch) {
        return '<span class="chipbtn on">' + esc(ch) + '</span>';
      }).join('') + '</div><p class="qualbar">' + esc(b.bar) + '</p></div>' +
      (b.cost ? '<div class="guard"><span class="lab">What it costs</span>' +
        '<p class="gcost">About <b>' + U.money(b.cost.monthly) + '/month</b> to keep running, ' +
        'including its discovery pass. Looking for up to ' + b.cap + ' people, running for ' + esc(b.runs) + '.</p></div>' : '') +
      '<div class="editnote"><b>Editing makes a version.</b> This changes tomorrow&rsquo;s drop. ' +
      'Your ' + watchlist().length + ' watched and ' + passedList().length + ' passed creators are unaffected &mdash; ' +
      'once you kept someone, that is your call, not the brief&rsquo;s.</div>' +
      '<div class="formacts">' +
      '<button class="btn btn--primary" data-act="view" data-view="drop">Leave it as it is</button>' +
      (isPaused(b)
        ? '<button class="btn btn--out" data-act="resume" data-b="' + esc(b.id) + '">Resume</button>'
        : '<button class="btn btn--out" data-act="pause" data-b="' + esc(b.id) + '">' + U.icon('pause') + 'Pause it</button>') +
      '</div>' +
      '<p class="lifecycle">Delete does not exist. Every Promote, Watch and Pass under a brief is a training ' +
      'label, and deleting the brief orphans them. Pausing keeps the record and greys the tab.</p>' +
      '</div>';
  }

  /* ============================================================ RUN A NAME */
  function runNameView() {
    var r = W.runANameResult;
    var head = '<header class="pagehead"><h1>Run a name</h1>' +
      '<p class="deck">Paste a handle. Scout runs the same ladder it runs automatically, and the verbs behave ' +
      'identically from there.</p>' +
      '<p class="lifecycle">No price in front of a hunch. Putting one there teaches people to stop having them &mdash; ' +
      'and it is fake friction anyway, because nobody has a basis to judge whether 40 cents is worth it. ' +
      'The ladder decides when to spend instead.</p></header>';
    var body;

    if (state.run.stage === 'idle') {
      body = '<div class="p padbox"><label class="lab" for="runq">Handle or URL</label>' +
        '<form class="formacts mt-2" data-act="runsubmit">' +
        '<input class="inp" id="runq" type="text" value="' + esc(state.run.query) + '" placeholder="@vancemakesknives" autocomplete="off">' +
        '<button class="btn btn--primary" type="submit">Run it</button></form>' +
        '<p class="lifecycle">Names you enter are tagged as yours, so machine-found and human-found stay separable &mdash; ' +
        'which is what later answers whether Scout finds things a person would have missed.</p></div>';
    } else if (state.run.stage === 'scoring') {
      var cl = S.claims(r);
      body = '<div class="p padbox"><span class="lab">Looking for ' + esc(state.run.query || r.handle) + '</span>' +
        '<ul class="invlist mt-4">' + cl.missing.built.map(function (x, i) {
          var done = i < state.run.step;
          return '<li>' + (done ? U.vmark(x.state) : '<span class="vmark vmark--wait"></span>') +
            '<span class="it">' + esc(x.item) + '</span><span class="st">' +
            (done ? (x.state === S.STATES.A ? 'not there ' + DOT + ' we looked in ' + (x.places || 3) + ' places'
              : x.state === S.STATES.P ? 'found it' : x.state === S.STATES.NA ? esc(x.note) : 'could not resolve')
              : 'looking&hellip;') + '</span></li>';
        }).join('') + '</ul></div>';
    } else {
      body = '<div class="p padbox">' +
        '<div class="formacts mt-0"><span class="pill pill--ok">Done</span>' +
        '<span class="sub-t">' + esc(r.handle) + ' ' + DOT + ' scored ' + score(r) + '</span></div>' +
        '<div class="prune prune--stop mt-4"><span class="k">Under the bar</span>' +
        '<p>' + score(r) + ' is below ' + state.admin.threshold + ', so the scan would never have surfaced this name ' +
        'on its own. It is here because you asked for it, and the report says so on its face. If they later ' +
        'cross the bar unaided they come back in the drop like any watched name &mdash; which is how you learn ' +
        'whether to trust the score.</p></div>' +
        '<div class="formacts"><button class="btn btn--primary" data-act="report" data-id="' + r.id + '" data-from="runname">Open the report</button>' +
        '<button class="btn btn--ghost" data-act="runreset">Run another</button></div></div>';
    }
    return head + body;
  }

  /* ============================================================== OUTREACH */
  function outreachView() {
    var c = creator(state.outreachId);
    if (!c) return '<p class="sub-t">Not found.</p>';
    var o = c.outreach, who = me(), cl = S.claims(c);
    return '<header class="pagehead"><div class="rpt-tags">' +
      '<span class="pill pill--ok">Promoted</span></div>' +
      '<h1 class="mt-3">Outreach package: ' + esc(c.name) + '</h1>' +
      '<p class="deck">Everything a first contact needs was already in the report, so generating this costs ' +
      'nothing. Scout writes it. You send it.</p></header>' +
      '<div class="p case mt-5">' +
      '<div><span class="lab">The signals, in plain language</span>' +
      '<ul class="invlist mt-3">' + o.bullets.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span class="it">' + esc(S.plain(b)) + '</span><span class="st"></span></li>';
      }).join('') + '</ul>' +
      '<p class="invsum">' + esc(cl.demand.line) + ', and ' + esc(cl.missing.onLabel) + ' switched on.</p></div>' +
      '<div><span class="lab">Draft first contact</span>' +
      '<div class="invbox mt-3">' +
      '<p class="draft-subj">Subject: <b>' + esc(S.plain(o.subject)) + '</b></p>' +
      '<p class="draft-p">' + esc(S.plain(o.opener)) + '</p>' +
      '<p class="draft-p">' + esc(S.plain(o.close)) + '</p>' +
      '<p class="draft-sig">' + esc(who.name) + ' ' + DOT + ' Paradium</p></div>' +
      '<div class="formacts"><button class="btn btn--primary" data-act="copy" data-id="' + c.id + '">' +
      (state.copied ? 'Copied' : 'Copy the draft') + '</button>' +
      '<button class="btn btn--ghost" data-act="view" data-view="drop">Back to the drop</button></div>' +
      '<p class="lifecycle"><b>Scout never sends.</b> Owning outreach would inherit deliverability and ' +
      'relationship problems that belong to a person, and turn a listening tool into a CRM. When you hear ' +
      'back, tell it &mdash; that answer is the only thing that says whether the machine was right.</p></div></div>';
  }

  /* ================================================================= ADMIN */
  /* Four controls, and no fifth. The thesis is not editable and there is no
     prompt editor — what makes a creator interesting is hard-coded, because it
     IS the product (decision 70). */
  function adminView() {
    var a = S.admin, ad = state.admin;
    var pool = S.poolFor(asOf()).length;
    var clearing = S.dropFor(asOf(), brief('b_house'), ad.threshold).length;

    return '<header class="pagehead"><h1>Admin</h1>' +
      '<p class="deck">Four controls: what the organisation may spend, who is in, where Scout looks, and ' +
      'where the bar sits. Everything else about what makes a creator interesting is the product, not a setting.</p></header>' +

      '<div class="adgrid">' +
      '<section class="p adcard"><span class="lab">Budget ceiling</span>' +
      '<div class="bigfig">' + U.money(ad.ceiling) + '<small>/month</small></div>' +
      U.track((a.budget.spent / ad.ceiling) * 100, 'track--tall') +
      '<p class="adnote"><b>' + U.money(a.budget.spent) + ' spent</b> in ' + esc(a.budget.period) +
      ' ' + DOT + ' ' + esc(a.budget.trend) + '</p>' +
      '<div class="seg seg--inline mt-3">' + [1200, 2400, 4800].map(function (n) {
        return '<button data-act="ceiling" data-v="' + n + '" aria-pressed="' + (ad.ceiling === n) + '">' + U.money(n) + '</button>';
      }).join('') + '</div>' +
      '<p class="adfine">Per organisation, per month. Per-person quotas would make everyone ration their own ' +
      'hunches, which is how you stop them entering hunches at all.</p></section>' +

      '<section class="p adcard"><span class="lab">The bar</span>' +
      '<div class="bigfig">' + ad.threshold + '</div>' +
      '<p class="adnote"><b>' + clearing + ' of ' + pool + '</b> clear it in the house brief today.</p>' +
      '<div class="seg seg--inline mt-3">' + [70, 74, 78, 82].map(function (n) {
        return '<button data-act="thresh" data-v="' + n + '" aria-pressed="' + (ad.threshold === n) + '">' + n + '</button>';
      }).join('') + '</div>' +
      '<p class="adfine">Read off a result, not chosen. The bar is whatever produces five to ten names on a ' +
      'good day and zero on a thin one. 78 is where it starts, and it moves when the seed says so.</p></section>' +

      '<section class="p adcard"><span class="lab">Where Scout looks</span>' +
      '<div class="chips mt-3">' + ad.platforms.map(function (p, i) {
        return '<button class="chipbtn" data-act="plat" data-i="' + i + '" aria-pressed="' + p.on + '">' +
          esc(p.name) + '</button>';
      }).join('') + '</div>' +
      '<p class="adfine">Turning a platform off stops the spend on it. It does not delete what was already ' +
      'found there.</p></section>' +

      '<section class="p adcard"><span class="lab">Who is in</span>' +
      '<div class="wrapx"><table class="ct mt-3"><thead><tr><th>Member</th><th>Briefs</th><th>Last seen</th><th>Can spend</th></tr></thead><tbody>' +
      a.members.map(function (m) {
        return '<tr><td><b>' + esc(m.name) + '</b><br><span class="sub-t">' + esc(m.email) + '</span></td>' +
          '<td>' + m.briefs + '</td><td>' + esc(U.shortDate(m.lastSeen)) + '</td>' +
          '<td>' + (m.admin ? '<span class="pill pill--ok">Admin</span>' : '<span class="pill">Member</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="adfine">First sign-in with a Paradium address creates a member. Admin is a permission on a ' +
      'member, not a job title &mdash; in the interface nobody is a noun.</p></section>' +
      '</div>' +

      '<div class="p mt-5"><span class="lab">Where the money went</span>' +
      '<div class="wrapx"><table class="ct mt-3"><thead><tr><th>Pass</th><th>Creators</th><th></th><th>Cost</th></tr></thead><tbody>' +
      a.ledger.map(function (r) {
        return '<tr><td><b>' + esc(r.label) + '</b><br><span class="sub-t">' + esc(S.DEPTH[r.depth].note) + '</span></td>' +
          '<td>' + esc(r.creators) + '</td><td class="sub-t">' + esc(r.note) + '</td>' +
          '<td><b>' + U.money(r.cost) + '</b></td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="adfine"><b>No names at Sweep depth.</b> A browsable list of thousands of creators evaluated ' +
      'and silently discarded is a liability the moment it leaves the building, and noise to everyone inside ' +
      'it. Names appear from Probe upward, where a judgment was made and a result was written down.</p>' +
      '<p class="adfine">Budget decides how many creators reach Probe and Study. It never decides how thoroughly ' +
      'one of them is examined &mdash; the confidence floor is not tunable downward to save money.</p></div>';
  }

  /* ================================================================== GATE */
  /* A utility gate. Wordmark, one button. No marketing copy, no product tour,
     no backtest teaser — building a landing page now is a second surface to
     maintain for an audience of one company (§6.8). */
  function signInView() {
    return '<div class="signin"><div class="signin-mark">S</div>' +
      '<h1 class="signin-wm">Scout</h1><p class="signin-sub">Origination desk</p>' +
      '<button class="btn btn--primary signin-sso" data-act="signin">' +
      '<span class="g-g" aria-hidden="true"></span>Continue with Google</button>' +
      '<p class="signin-fine">Paradium accounts only.</p></div>';
  }

  /* ============================================================= RENDERING */
  /* render() replaces the whole of #app, which destroys whatever had focus.
     Nearly every branch of the click handler ends here, so in v5 that meant
     opening a disclosure or a tray dropped a keyboard user back to the top of
     the document. Capture a locator for the focused control first — the node
     itself is about to stop existing — and put focus back on its replacement. */
  function focusKeyOf(el) {
    if (!el || el === document.body) return null;
    var act = el.getAttribute('data-act');
    if (!act) return null;
    return { act: act, id: el.getAttribute('data-id'), k: el.getAttribute('data-k'),
      view: el.getAttribute('data-view'), b: el.getAttribute('data-b'), d: el.getAttribute('data-d') };
  }
  function restoreFocus(key, viewChanged) {
    if (viewChanged) {
      /* A view change announces itself by moving focus to the new heading —
         which is also what tells a screen reader the page changed at all. */
      var h = document.querySelector('#main h1');
      if (h) { h.setAttribute('tabindex', '-1'); h.focus(); }
      return;
    }
    if (!key) return;
    var sel = '[data-act="' + key.act + '"]';
    ['id', 'k', 'view', 'b', 'd'].forEach(function (a) {
      if (key[a] != null && key[a] !== '') sel += '[data-' + (a === 'id' ? 'id' : a) + '="' + key[a] + '"]';
    });
    var el = document.querySelector(sel) || document.querySelector('[data-act="' + key.act + '"]');
    if (el) el.focus();
  }

  /* One small live region, for the handful of things that are genuinely status
     messages. v5 put aria-live on #app itself, which is the entire application —
     so nudging a stepper by one looked identical to changing view. */
  function announce(msg) {
    var el = document.getElementById('status');
    if (el) el.textContent = msg;
  }

  function render(viewChanged) {
    var fade = state.animate && !reduceMotion.matches ? ' viewfade' : '';
    state.animate = false;
    var key = focusKeyOf(document.activeElement);
    var html;

    if (state.phase === 'signedout') {
      html = '<div class="slab slab--solo slab--gate"><main class="main" id="main">' + signInView() + '</main></div>';
    } else {
      var body =
        state.view === 'report' ? reportView() :
          state.view === 'watchlist' ? watchlistView() :
            state.view === 'passed' ? passedView() :
              state.view === 'runname' ? runNameView() :
                state.view === 'outreach' ? outreachView() :
                  state.view === 'admin' ? adminView() :
                    state.view === 'briefdetail' ? briefDetailView() :
                      state.view === 'newbrief' ? briefView() : dropView();

      html = '<div class="slab slab--app">' + railHTML() +
        '<main class="main" id="main">' + topHTML() +
        '<div class="wrap' + fade + '">' + body + '</div></main></div>';
    }
    if (state.rcp) html += rcpPop();

    /* render() replaces the whole DOM, which destroys the scroll container.
       Capture and restore; go() is the only thing that resets, because only a
       view change should. */
    var prev = 0;
    var old = document.getElementById('main');
    if (old) prev = old.scrollTop;

    document.getElementById('app').innerHTML = html;

    var main = document.getElementById('main');
    if (main && prev) main.scrollTop = prev;
    if (main) bindCompact(main);
    restoreFocus(key, viewChanged);
    persist();
  }

  function bindCompact(main) {
    var bar = document.getElementById('compact');
    if (!bar) return;
    var head = main.querySelector('.rpthead');
    if (!head) return;
    function sync() {
      /* Measured on each call: at first paint the fonts have not landed and a
         cached threshold would show the bar at rest. */
      var trigger = Math.max(60, head.offsetTop + head.offsetHeight - 76);
      bar.classList.toggle('on', main.scrollTop > trigger);
    }
    main.addEventListener('scroll', sync);
    sync();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }

  /* The `?` returns receipts, not a definition. Same component that argues the
     creator teaches the pillar, so it is built once (§6.11). */
  function rcpPop() {
    var c = creator(state.rcp.id);
    if (!c) return '';
    var r = S.receipts(c, state.rcp.key);
    if (!r.lines.length) return '';
    /* Receipts are as long as the evidence is — a seven-line Missing block is
       normal — so the popover is measured rather than assumed, and flips above
       the `?` when it would otherwise run off the bottom. */
    var h = 62 + r.lines.length * 26;
    var x = Math.max(12, Math.min(window.innerWidth - 372, state.rcp.x - 180));
    var below = state.rcp.y + 18;
    var y = below + h > window.innerHeight - 12
      ? Math.max(12, state.rcp.top - h - 12)
      : below;
    return '<div class="defpop" role="group" aria-labelledby="rcp-t" tabindex="-1"' +
      ' style="left:' + x + 'px;top:' + y + 'px">' +
      '<h5 id="rcp-t">' + esc(r.title) + ' ' + DOT + ' the receipts</h5>' +
      '<ul>' + r.lines.map(function (l) { return '<li>' + esc(l) + '</li>'; }).join('') + '</ul></div>';
  }

  function go(view, from) {
    clearTimers();
    state.view = view;
    state.passTray = null;
    state.watchTray = null;
    state.copied = false;
    state.animate = true;
    state.menu = false;
    state.rcp = null;
    if (from) state.from = from;
    render(true);
    var m = document.getElementById('main');
    if (m) m.scrollTop = 0;
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('scout-v5-theme', t); } catch (e) { /* file:// */ }
  }

  /* ================================================================ EVENTS */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;

    if (!el) {
      if (state.rcp || state.menu) { state.rcp = null; state.menu = false; render(); }
      return;
    }
    var act = el.getAttribute('data-act');
    var id = el.getAttribute('data-id');

    if (act === 'noop') return;

    if (act === 'rcp') {
      var r = el.getBoundingClientRect();
      var k = el.getAttribute('data-k');
      var open = !(state.rcp && state.rcp.key === k && state.rcp.id === id);
      state.rcp = open ? { key: k, id: id, x: r.left, y: r.bottom, top: r.top } : null;
      render();
      /* Focus follows the popover in, and the restore in render() puts it back on
         the ? when it closes — otherwise the panel is invisible to anyone not
         using a mouse, however good its contents are. */
      if (open) { var pop = document.querySelector('.defpop'); if (pop) pop.focus(); }
      return;
    }
    state.rcp = null;

    if (act === 'menu') { state.menu = !state.menu; render(); return; }
    if (act === 'theme') { setTheme(el.getAttribute('data-set')); render(); return; }

    /* First sign-in lands in January 2024 — proof, then promise. */
    if (act === 'signin') { state.phase = 'app'; state.asOf = S.REWIND; state.firstRun = true; go('drop'); return; }
    if (act === 'totoday') { state.asOf = null; state.firstRun = false; go('drop'); return; }
    if (act === 'signout') {
      state.phase = 'signedout'; state.decisions = {}; state.outcomeState = {};
      state.userBriefs = []; state.briefId = 'b_house'; state.asOf = null; state.firstRun = true;
      state.open = {}; state.menu = false; state.animate = true; render(); return;
    }

    if (act === 'view') {
      /* The rewind attaches to the drop and the report, never to the whole desk
         (§7). v5 left it silently active everywhere else, so the watchlist
         reported "checking back in 838 days" and the passed list showed 2026
         dates inside a 2024 view, with no banner anywhere to explain it. */
      var v = el.getAttribute('data-view');
      if (rewound() && v !== 'drop' && v !== 'report') { state.asOf = null; state.firstRun = false; }
      go(v); return;
    }
    if (act === 'brief') { state.briefId = el.getAttribute('data-b'); go('drop'); return; }
    if (act === 'newbrief') {
      state.draft = { text: '', chips: [], bar: '', cap: 100, runs: '3 months' };
      state.briefStage = 'write'; go('newbrief'); return;
    }
    if (act === 'editbrief') { state.draft = { editing: el.getAttribute('data-b') }; go('briefdetail'); return; }
    if (act === 'briefback') { state.briefStage = 'write'; render(); return; }
    if (act === 'dechip') { state.draft.chips.splice(Number(el.getAttribute('data-i')), 1); render(); return; }
    if (act === 'cap') {
      var dv = el.getAttribute('data-v') === '+' ? 25 : -25;
      state.draft.cap = Math.max(25, Math.min(500, state.draft.cap + dv)); render(); return;
    }
    if (act === 'runs') { state.draft.runs = el.getAttribute('data-v'); render(); return; }
    if (act === 'savebrief') {
      var d = state.draft;
      var nb = { id: 'ub_' + state.userBriefs.length, fresh: true, name: briefName(d), description: d.text,
        chips: d.chips.slice(), bar: d.bar, cap: d.cap, runs: d.runs,
        cost: { start: Math.round(d.cap * 0.18 + 4), monthly: Math.round(d.cap * 0.12) },
        created: S.TODAY, version: 1 };
      state.userBriefs.push(nb);
      state.briefId = nb.id;
      go('drop'); return;
    }
    if (act === 'pause') { state.paused[el.getAttribute('data-b')] = true; go('drop'); return; }
    if (act === 'resume') {
      var bid = el.getAttribute('data-b');
      delete state.paused[bid]; state.briefId = bid; go('drop'); return;
    }

    if (act === 'disc') { var k2 = el.getAttribute('data-d'); state.open[k2] = !state.open[k2]; render(); return; }

    if (act === 'report') {
      state.reportId = id;
      state.open = {};
      go('report', el.getAttribute('data-from') || (state.view === 'report' ? state.from : state.view));
      return;
    }

    if (act === 'passtray') { state.passTray = id || null; state.watchTray = null; render(); return; }
    if (act === 'watchtray') {
      state.watchTray = id || null; state.passTray = null; state.watchWindow = null; render(); return;
    }
    if (act === 'watchwhy') { state.watchWindow = el.getAttribute('data-w'); render(); return; }
    if (act === 'pass') {
      state.decisions[id] = { verb: 'pass', reasonCode: el.getAttribute('data-code'), at: asOf() };
      state.passTray = null;
      announce('Passed ' + creator(id).name + '.');
      if (state.view === 'report') go('drop'); else render();
      return;
    }
    if (act === 'watch') {
      state.decisions[id] = { verb: 'watch', at: asOf(), window: el.getAttribute('data-w') || '1 month' };
      state.watchTray = null; state.watchWindow = null;
      announce('Watching ' + creator(id).name + ', checking back in ' + (el.getAttribute('data-w') || '1 month') + '.');
      if (state.view === 'report') go('drop'); else render();
      return;
    }
    if (act === 'promote') {
      state.decisions[id] = { verb: 'promote', at: asOf() };
      state.outreachId = id; go('outreach'); return;
    }
    if (act === 'outreach') { state.outreachId = id; go('outreach'); return; }
    if (act === 'undo') { delete state.decisions[id]; delete state.outcomeState[id]; render(); return; }

    if (act === 'outcome') {
      var code = el.getAttribute('data-o');
      state.outcomeState[id] = { code: code, at: asOf(),
        declineCode: (state.outcomeState[id] || {}).declineCode };
      state.outcomeTray = code === 'declined' ? id : null;
      render(); return;
    }
    if (act === 'decline') {
      state.outcomeState[id] = { code: 'declined', at: asOf(), declineCode: el.getAttribute('data-code') };
      /* A declined creator gets a suppression rule like any Pass reason, so
         nobody promotes them again in April for want of knowing about February. */
      state.decisions[id] = { verb: 'pass', reasonCode: 'declined', at: asOf() };
      state.outcomeTray = null;
      render(); return;
    }

    if (act === 'thresh') { state.admin.threshold = Number(el.getAttribute('data-v')); render(); return; }
    if (act === 'ceiling') { state.admin.ceiling = Number(el.getAttribute('data-v')); render(); return; }
    if (act === 'plat') {
      var pi = Number(el.getAttribute('data-i'));
      state.admin.platforms[pi].on = !state.admin.platforms[pi].on; render(); return;
    }

    if (act === 'runreset') { state.run = { stage: 'idle', query: '', step: 0 }; render(); return; }

    if (act === 'copy') {
      var c = creator(id), o = c.outreach, who = me();
      copyText('Subject: ' + o.subject + '\n\n' + o.opener + '\n\n' +
        o.bullets.map(function (b) { return '- ' + b; }).join('\n') + '\n\n' + o.close + '\n\n' +
        who.name + '\nParadium');
      state.copied = true; announce('Draft copied.'); render();
      later(function () { state.copied = false; if (state.view === 'outreach') render(); }, 2200);
      return;
    }
  });

  document.addEventListener('submit', function (e) {
    var run = e.target.closest ? e.target.closest('[data-act="runsubmit"]') : null;
    if (run) {
      e.preventDefault();
      var i = document.getElementById('runq');
      state.run.query = (i && i.value.trim()) || W.runANameResult.handle;
      startScoring();
      return;
    }
    var ww = e.target.closest ? e.target.closest('[data-act="watchwhy-submit"]') : null;
    if (ww) {
      e.preventDefault();
      var wi = document.getElementById('watchwhy');
      var id = ww.getAttribute('data-id');
      state.decisions[id] = { verb: 'watch', at: asOf(), window: state.watchWindow,
        why: (wi && wi.value.trim()) || 'No reason given' };
      announce('Watching ' + creator(id).name + ' for ' + state.watchWindow + '.');
      state.watchTray = null; state.watchWindow = null;
      if (state.view === 'report') go('drop'); else render();
      return;
    }
    var bf = e.target.closest ? e.target.closest('[data-act="briefsubmit"]') : null;
    if (bf) {
      e.preventDefault();
      var ta = document.getElementById('bdesc');
      var text = (ta && ta.value.trim()) ||
        'Someone to fill our gap in Southern college football. Insider access — beat writers, people close to ' +
        'local coaches and recruits. Modest following is fine, but their stuff has to land consistently.';
      state.draft = readBack(text, state.draft);
      state.briefStage = 'read';
      go('newbrief');
    }
  });

  /* v5 checked only the popover and the menu, which taught you the key works
     and then dropped it two clicks later on a tray that looks the same. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.rcp || state.menu) { state.rcp = null; state.menu = false; render(); return; }
    if (state.passTray || state.watchTray || state.outcomeTray) {
      state.passTray = null; state.watchTray = null; state.outcomeTray = null; render();
    }
  });

  /* Scout deriving structure from a description. In the product this is one
     model call with the derived fields as a fallback path rather than an error
     if it fails (§6.7); here it is keyword matching over the same vocabulary,
     so the read-back is real rather than canned. */
  function readBack(text, draft) {
    var t = ' ' + text.toLowerCase() + ' ';
    var chips = [];
    var CAT = [
      [/college football|cfb|recruit|coach/, 'Sports › College Football'],
      [/restor|gild|machin|workshop|woodwork|trade/, 'Craft › Restoration'],
      [/bak|bread|sourdough|pastry|cake/, 'Food › Baking'],
      [/cook|kitchen|recipe|food|ferment|sauce/, 'Food › Home cooking'],
      [/money|finance|invest|budget/, 'Finance › Personal'],
      [/outdoor|trail|hike|gear|pack/, 'Outdoor › Gear']
    ];
    CAT.forEach(function (r) { if (!chips.length && r[0].test(t)) chips.push(r[1]); });
    if (!chips.length) chips.push('Any category');

    if (/south|sec |texas|georgia|alabama/.test(t)) chips.push('US South');
    else if (/\buk\b|britain|london/.test(t)) chips.push('UK');
    else if (/global|worldwide|anywhere/.test(t)) chips.push('Global EN');
    else chips.push('US / CA');

    var PLAT = [[/tiktok/, 'TikTok'], [/instagram|\big\b/, 'Instagram'], [/youtube|yt\b/, 'YouTube'],
      [/substack|newsletter/, 'Substack'], [/reddit/, 'Reddit'], [/\bx\b|twitter/, 'X']];
    var found = [];
    PLAT.forEach(function (r) { if (r[0].test(t)) found.push(r[1]); });
    if (!found.length) found = ['TikTok', 'Instagram', 'YouTube'];
    found.forEach(function (p) { chips.push(p); });

    if (/modest|small|niche|micro/.test(t)) chips.push('5k–75k');
    else if (/large|big|million/.test(t)) chips.push('500k+');
    else chips.push('50k–2M');

    var bar = /trade press|cited|written about|quoted/.test(t)
      ? 'Cited by the people who write about the field'
      : /consistent|reliab|land|quality/.test(t)
      ? 'Consistent engagement, not audience size'
      : /insider|access|close to|source/.test(t)
        ? 'Access other people do not have'
        : 'Named demand in the comments, not audience size';

    return { text: text, chips: chips, bar: bar,
      cap: (draft && draft.cap) || 100, runs: (draft && draft.runs) || '3 months' };
  }

  function briefName(d) {
    var cat = (d.chips[0] || 'Any category').split('›').pop().trim();
    var band = d.chips[d.chips.length - 1] || '';
    return cat + (band && /[0-9]/.test(band) ? ', ' + band : '');
  }

  function startScoring() {
    var total = S.claims(W.runANameResult).missing.built.length;
    state.run.stage = 'scoring'; state.run.step = 0; render();
    if (reduceMotion.matches) { state.run.stage = 'done'; render(); return; }
    var tick = function () {
      state.run.step += 1; render();
      if (state.run.step < total) later(tick, 330);
      else later(function () { state.run.stage = 'done'; render(); }, 520);
    };
    later(tick, 400);
  }

  function copyText(text) {
    try {
      var ta = document.createElement('textarea');
      ta.value = text; ta.setAttribute('readonly', ''); ta.className = 'offscreen';
      document.body.appendChild(ta); ta.select(); document.execCommand('copy');
      document.body.removeChild(ta);
    } catch (err) { /* unavailable from file://; the draft is on screen anyway */ }
  }

  /* ------------------------------------------------------------------ boot */
  (function initTheme() {
    var saved = null;
    try { saved = localStorage.getItem('scout-v5-theme'); } catch (e) { /* file:// */ }
    if (saved) { document.documentElement.setAttribute('data-theme', saved); return; }
    /* Light is the default. The system preference no longer decides it — a
       dark first paint for someone who never asked for one is the surprise. */
    document.documentElement.setAttribute('data-theme', 'light');
  })();

  restore();
  render();
})();
