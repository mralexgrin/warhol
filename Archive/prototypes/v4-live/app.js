/* ==========================================================================
   WARHOL SCOUT v4 — application shell, state and views.
   Classic script, no modules, no fetch. Runs from file://.

   The model inverted from v2: the DROP is the primary object. You sign in and
   you are looking at today's creators. A BRIEF is a free saved filter over it,
   created later, from the rail — never a gate you pass through first.

   Deleted since v2: the mandate wizard, firstRun, the wire band, the rewound
   band, the lens disclosure, the global as-of control, the hint queue and its
   priority logic, the overlap prompt, the roster, brief membership, Desk
   Activity, and the watchlist's currency.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var V4 = window.WARHOL_V4;
  var U = window.UI;
  var esc = U.esc;
  var DOT = String.fromCharCode(183);
  var ELL = String.fromCharCode(8230);

  /* ------------------------------------------------------------------ state */
  var state = {
    phase: 'signedout',
    role: 'scout',
    userId: 's_alex',
    view: 'drop',
    briefId: null,              // null = All creators
    reportId: null,
    reportAsOf: null,           // set only when reading a Track record entry
    from: 'drop',
    outreachId: null,
    userBriefs: [],
    draft: null,                // the New brief form
    decisions: {},
    expanded: {},               // creator id -> card expanded
    open: {},                   // report disclosure id -> open
    revealed: {},
    passTray: null,
    def: null,                  // { key, x, y } inline definition popover
    run: { stage: 'idle', query: '', step: 0 },
    copied: false,
    menu: false,
    animate: true
  };

  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  function later(fn, ms) { timers.push(setTimeout(fn, ms)); }
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------ derivations */
  function me() { return V4.people[state.userId] || V4.people.s_alex; }
  function isScout() { return state.role !== 'spotter'; }
  function verbs() {
    return isScout()
      ? { act: 'promote', label: 'Promote', state: 'Promoted' }
      : { act: 'refer', label: 'Refer to desk', state: 'Referred' };
  }
  function today() { return W.meta.today; }
  function allBriefs() { return V4.briefs.concat(state.userBriefs); }
  function brief(id) {
    var b = null;
    allBriefs().forEach(function (x) { if (x.id === id) b = x; });
    return b;
  }
  function baseDrop() { return V4.dropFor(today()); }
  function dropList() { return V4.applyBrief(baseDrop(), brief(state.briefId)); }
  function countFor(b) { return V4.applyBrief(baseDrop(), b).length; }
  function decisionFor(id) { return state.decisions[id] || null; }
  function creator(id) { return id === W.runANameResult.id ? W.runANameResult : W.byId[id]; }
  function reason(code) {
    var r = null;
    V4.passReasons.forEach(function (x) { if (x.code === code) r = x; });
    return r;
  }
  function watchlist() {
    var seeded = W.watchlist();
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
  function stateLabel(v) {
    return v === 'pass' ? 'Passed' : v === 'watch' ? 'Watched' : v === 'refer' ? 'Referred' : 'Promoted';
  }

  /* ------------------------------------------------------------------ rail */
  function railHTML() {
    var who = me();
    return '<nav class="railcol railcol--wide" aria-label="Sections">' +
      '<div class="brandrow"><span class="me">WS</span>' +
      '<span><span class="wm">Warhol</span><span class="sub-t">Scout ' + DOT + ' origination desk</span></span></div>' +

      /* Creation sits above navigation. In the filter row it read as one more
         filter; here it reads as the thing that makes one. */
      '<button class="btn btn--primary newbrief" data-act="newbrief">' + U.icon('plus') + 'New brief</button>' +

      '<div class="nav">' +
      navBtn('drop', 'drop', "Today's drop", String(remaining() || dropList().length)) +
      navBtn('watchlist', 'watch', 'Watchlist', String(watchlist().length)) +
      navBtn('trackrecord', 'record', 'Track record', String(V4.trackRecord.length)) +
      navBtn('runname', 'run', 'Run a name', '') +
      '</div>' +

      '<div class="whoami">' +
      '<span class="ini ini--lilac ini--xs">' + esc(who.initials) + '</span>' +
      '<span class="who"><b>' + esc(who.name) + '</b><span>' + esc(who.title) + '</span></span>' +
      '</div></nav>';
  }

  function navBtn(view, ic, label, n) {
    var on = state.view === view ||
      (view === 'drop' && (state.view === 'report' && state.from === 'drop')) ||
      (view === 'trackrecord' && state.view === 'report' && state.from === 'trackrecord');
    return '<button class="rnav" data-act="view" data-view="' + view + '"' +
      (on ? ' aria-current="page"' : '') + '>' +
      '<span class="ic">' + U.icon(ic) + '</span><span class="tx">' + esc(label) + '</span>' +
      (n ? '<span class="pill">' + esc(n) + '</span>' : '') + '</button>';
  }

  /* --------------------------------------------------------------- top bar */
  /* Down from seven controls to two. The as-of picker and the ? are gone by
     decision; theme and sign-out moved inside the identity menu. */
  function topHTML() {
    var tail = state.view === 'report' ? 'Scout Report'
      : state.view === 'outreach' ? 'Outreach package'
        : state.view === 'watchlist' ? 'Watchlist'
          : state.view === 'trackrecord' ? 'Track record'
            : state.view === 'runname' ? 'Run a name'
              : state.view === 'newbrief' ? 'New brief' : 'Drop';
    var who = me();
    return '<div class="top">' +
      '<div class="crumb"><button data-act="view" data-view="drop"><b>Desk</b></button>' +
      '<span>/</span>' + esc(tail) + '</div>' +
      '<div class="r"><div class="acct">' +
      '<button class="circ" data-act="menu" aria-expanded="' + state.menu + '" aria-label="Account">' +
      '<span class="ini ini--teal ini--xs">' + esc(who.initials) + '</span></button>' +
      (state.menu ? acctMenu(who) : '') +
      '</div></div></div>';
  }

  function acctMenu(who) {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return '<div class="acctmenu">' +
      '<div class="who"><b>' + esc(who.name) + '</b><span>' + esc(who.title) + '</span></div>' +
      '<span class="lab">Theme</span>' +
      '<div class="tsw"><button data-act="theme" data-set="light" aria-pressed="' + (!dark) + '">Light</button>' +
      '<button data-act="theme" data-set="dark" aria-pressed="' + dark + '">Dark</button></div>' +
      /* Prototype affordance, kept out of the product's first frame so the
         sign-in screen can be literally one button. */
      '<span class="lab">View as <span class="sub-t">(prototype)</span></span>' +
      '<div class="seg"><button data-act="role" data-r="scout" aria-pressed="' + isScout() + '">Scout</button>' +
      '<button data-act="role" data-r="spotter" aria-pressed="' + (!isScout()) + '">Spotter</button></div>' +
      '<button class="btn btn--ghost btn--sm out" data-act="signout">Sign out</button>' +
      '</div>';
  }

  /* ================================================================== DROP */
  function dropView() {
    var list = dropList();
    var b = brief(state.briefId);
    var done = list.length - remaining();
    var v = verbs();

    var head = '<header class="pagehead"><h1>Today&rsquo;s drop</h1>' +
      '<p class="deck">' + U.plural(baseDrop().length, 'creator') + ' cleared the threshold this morning. ' +
      'Enough on each card to kill it without opening; backing one needs the report.</p>' +
      /* v2 never said what became of an undecided name. This is the rule. */
      '<p class="lifecycle">Today&rsquo;s drop is today&rsquo;s. Anything you don&rsquo;t decide on expires tonight and comes ' +
      'back tomorrow if it still clears &mdash; so nothing piles up, and nothing is lost.</p>' +
      '</header>';

    var chips = '<div class="views">' +
      '<button class="vchip" data-act="brief" data-b="" aria-pressed="' + (!state.briefId) + '">' +
      'All creators <span class="c">' + baseDrop().length + '</span></button>' +
      allBriefs().map(function (x) {
        return '<button class="vchip" data-act="brief" data-b="' + x.id + '" aria-pressed="' + (state.briefId === x.id) + '">' +
          esc(x.name) + ' <span class="c">' + countFor(x) + '</span></button>';
      }).join('') + '</div>';

    if (!list.length) {
      return head + chips + '<section class="p zero">' +
        '<h2>Nothing in this brief today.</h2>' +
        '<p>' + (b ? 'The scan ran and nothing inside <b>' + esc(b.name) + '</b> cleared ' + W.meta.scoreThreshold + '. ' +
          'That is the threshold working, not the scan failing.' : 'Nothing cleared ' + W.meta.scoreThreshold + ' this morning.') + '</p>' +
        '<p><button class="btn btn--primary" data-act="brief" data-b="">See all ' + baseDrop().length + ' creators</button></p>' +
        '</section>';
    }

    var progress = '<div class="worked"><span class="lab">Worked</span>' +
      '<span class="pill">' + done + ' / ' + list.length + '</span>' +
      U.track(list.length ? (done / list.length) * 100 : 0) +
      '<span class="sub-t">threshold ' + W.meta.scoreThreshold + ' ' + DOT + ' capped at ' + W.meta.dropCap + '</span></div>';

    var rows = list.map(function (c, i) {
      var d = decisionFor(c.id);
      return d ? decidedRow(c, d) : row(c, i + 1, v);
    }).join('');

    var done0 = remaining() === 0 ? '<div class="p p--teal zero mt-5">' +
      '<h2>Drop worked to zero.</h2>' +
      '<p>Every name has a decision and an owner. Close Warhol; it will have the next one at 06:00.</p></div>' : '';

    return head + chips + progress + '<div class="listwrap">' + rows + '</div>' + done0;
  }

  /* The row is now identity plus three named signals, and nothing else. The
     thesis and the quotes moved behind the expand: a quote read well on its own
     but did not tell you what was missing, how much demand there was, or why
     now — which is the only thing a row has to answer. */
  function row(c, rank, v) {
    var open = state.expanded[c.id];
    var ref = V4.referralFor(c.id);
    var annots = V4.annotationsFor(c.id);

    return '<article class="row" data-id="' + c.id + '">' +
      '<div class="rk">' + rank + '</div>' +
      '<div class="scorewrap">' + U.ring(c, 'sm') + '</div>' +
      '<div class="rowmain">' +
      '<span class="nm">' + esc(c.name) + '</span>' +
      '<span class="hd">' + esc(c.handle) + ' ' + DOT + ' ' + esc(c.primaryPlatform) + ' ' + DOT + ' ' +
      U.followers(c.audience.total) + ' across ' + c.platforms.length + '</span>' +

      U.signalRows(c) +

      (annots.length ? annotStrip(annots) : '') +
      (ref ? refStrip(c, ref) : '') +

      '<button class="more" data-act="expand" data-id="' + c.id + '">' +
      (open ? 'Hide the evidence' : 'Show the evidence and the full inventory') + '</button>' +

      (open ? expandBlock(c) : '') +
      (state.passTray === c.id ? passTray(c) : '') +
      '</div>' +

      '<div class="acts">' +
      '<button class="vbtn vbtn--open vbtn--sm" data-act="report" data-id="' + c.id + '">Open report</button>' +
      U.verbBtn(v.act, c.id, v.label, 'go', 'sm') +
      U.verbBtn('watch', c.id, 'Watch', 'hold', 'sm') +
      U.verbBtn('passtray', c.id, 'Pass', 'no', 'sm') +
      '</div></article>';
  }

  function expandBlock(c) {
    var ev = c.evidence || [];
    var t = U.inventoryTally(c.inventory);
    return '<div class="expand">' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      (ev.length ? ev.map(function (e) { return U.quoteBlock(e, today(), { url: false }); }).join('')
        : '<p class="sub-t">No further evidence captured at this depth.</p>') +
      '<div class="invbox"><span class="lab">Monetization inventory ' + U.def('absent') + '</span>' +
      '<ul class="invstrip">' + (c.inventory || []).map(function (r) {
        return '<li>' + U.vmark(r.state) + '<span>' + esc(r.item) + '</span>' +
          '<span class="sf">' + r.surfacesChecked + ' surfaces</span></li>';
      }).join('') + '</ul>' +
      '<p class="invsum">' + esc(invSentence(t)) + '</p></div></div>';
  }

  function annotStrip(rows) {
    return '<div class="annots">' + rows.map(function (a) {
      var did = a.verb === 'pass' ? 'passed this' + (a.reasonCode ? ' — ' + (reason(a.reasonCode) || {}).label.toLowerCase() : '')
        : a.verb === 'refer' ? 'referred this to the desk'
          : a.verb === 'promote' ? 'promoted this' : 'is watching this';
      return '<div class="annot"><span class="av">' + esc(a.initials) + '</span>' +
        '<span><span class="who">' + esc(a.actor) + '</span> ' + esc(did) +
        (a.note ? ' ' + DOT + ' ' + esc(a.note) : '') + '</span>' +
        '<span class="sub-t">' + esc(U.shortDate(a.at)) + '</span></div>';
    }).join('') + '</div>';
  }

  /* Status follows the creator: the only way a Spotter learns whether their
     judgment was any good. The passed case carries WHY. */
  function refStrip(c, r) {
    var label = stateLabel(r.state);
    return '<div class="refstate">' +
      '<span class="pill ' + (r.state === 'promote' ? 'pill--ok' : r.state === 'pass' ? '' : 'pill--warn') + '">' + esc(label) + '</span>' +
      '<span>' + esc(r.note) + '</span>' +
      '<span class="sub-t">' + esc(r.by) + ' ' + DOT + ' ' + esc(U.shortDate(r.at)) + '</span></div>';
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

  function passTray(c) {
    return '<div class="passtray"><div class="hd"><span class="lab">Pass with a reason</span>' +
      '<span class="q">The reason is the suppression rule and the training label.</span></div>' +
      '<div class="reasons">' + V4.passReasons.map(function (r) {
        return '<button data-act="pass" data-id="' + c.id + '" data-code="' + r.code + '">' +
          '<b>' + esc(r.label) + '</b><span>' + esc(r.suppression) + '</span></button>';
      }).join('') + '</div>' +
      '<div class="mt-3"><button class="btn btn--ghost btn--sm" data-act="passtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  function decidedRow(c, d) {
    var detail = d.verb === 'pass' ? reason(d.reasonCode).label + '. ' + reason(d.reasonCode).suppression
      : d.verb === 'watch' ? 'Re-scored nightly. Comes back on a strain trigger or a score move of 5 or more.'
        : d.verb === 'refer' ? 'With the desk. Referring is also the request to authorize a Study.'
          : 'Outreach package generated. Phase Two record created.';
    return '<div class="decided">' +
      '<span class="pill' + (d.verb === 'pass' ? '' : ' pill--ok') + '">' + esc(stateLabel(d.verb)) + '</span>' +
      '<span class="nm2">' + esc(c.name) + '</span><span class="sub-t">' + esc(detail) + '</span>' +
      '<span class="spacer"></span>' +
      (d.verb === 'promote' ? '<button class="btn btn--sm btn--out" data-act="outreach" data-id="' + c.id + '">Outreach package</button>' : '') +
      '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button></div>';
  }

  /* ================================================================ REPORT */
  function reportView() {
    var c = creator(state.reportId);
    if (!c) return '<p class="sub-t">Not found.</p>';
    var asOf = state.reportAsOf || today();
    var dated = !!state.reportAsOf;
    var t = U.inventoryTally(c.inventory);
    var g = c.pillars.gap, s = c.pillars.strain, f = c.pillars.fit;
    var d = decisionFor(c.id);
    var v = verbs();
    var tr = V4.trackFor(c.id);

    /* The only rewind in the product: one creator, as of the day a call was
       made. There is no global date control to get lost in. */
    var lens = dated ? '<div class="aslens"><b>Reading this as of ' + esc(U.longDate(asOf)) + '.</b> ' +
      'This is the report the desk saw on the day it made the call &mdash; nothing observed later is in it. ' +
      'What happened next is at the bottom.</div>' : '';

    /* The tall header is the arrival and scrolls away; this compact bar takes
       over once it does, carrying the way out, the identity, the score and the
       verbs — so a decision can be made from anywhere in the report without
       scrolling back to the top. At ~250px the tall header itself could not be
       sticky: it would hold a third of the viewport permanently. */
    var out = '<div class="compact" id="compact">' +
      '<button class="back" data-act="view" data-view="' + esc(state.from) + '" aria-label="Back">' +
      U.icon('back') + '</button>' +
      U.ring(c, 'xs') +
      '<div class="who2"><b>' + esc(c.name) + '</b>' +
      '<span>' + c.score + '/100 ' + DOT + ' ' + U.pct(c.confidence) + ' resolved ' + DOT +
      ' gap ' + g.score + ' ' + DOT + ' strain ' + s.score + '</span></div>' +
      (d || dated ? '' : '<div class="verbs">' +
        U.verbBtn(v.act, c.id, v.label, 'go', 'sm') +
        U.verbBtn('watch', c.id, 'Watch', 'hold', 'sm') +
        U.verbBtn('passtray', c.id, 'Pass', 'no', 'sm') + '</div>') +
      '</div>';

    out += lens + '<header class="rpthead"><div class="who2">' +
      '<button class="btn btn--soft btn--sm backbtn" data-act="view" data-view="' + esc(state.from) + '">' +
      U.icon('back') + 'Back to ' + esc(state.from === 'watchlist' ? 'the watchlist'
        : state.from === 'trackrecord' ? 'Track record'
          : state.from === 'runname' ? 'Run a name' : 'the drop') + '</button>' +
      '<div class="rpt-tags"><span class="pill pill--solid">Scout Report</span>' +
      (c.sourceTag === 'manual' ? '<span class="pill pill--warn">Manual entry</span>' : '') +
      (c.resurfaced ? '<span class="pill pill--ok">Resurfaced</span>' : '') +
      (dated ? '<span class="pill">' + esc(U.longDate(asOf)) + '</span>' : '') + '</div>' +
      '<h1>' + esc(c.name) + '</h1>' +
      '<p class="handle">' + esc(c.handle) + ' ' + DOT + ' ' + esc(c.primaryPlatform) + ' ' + DOT + ' ' +
      U.num(c.audience.total) + ' total audience</p>' +
      '<p class="thesis">' + esc(c.headline) + '</p>' +
      '<div class="idrow">' + c.platforms.map(function (p) {
        return '<span class="plat" data-weak="' + (p.matchConfidence < 0.9) + '">' +
          '<span class="n">' + esc(p.name) + '</span><span class="f">' + U.followers(p.followers) + '</span>' +
          '<span class="mc">id match ' + U.pct(p.matchConfidence) + '</span></span>';
      }).join('') + '</div></div>' +
      U.scoreRing(c) + '</header>';

    /* The case is always open. Everything else earns its expansion, and every
       closed row still states its own summary. */
    out += '<div class="p mt-5 flushbox">' +
      '<div class="case"><div>' +
      '<span class="lab">The case</span>' +
      '<p class="argument">' + U.argument(c) + '</p>' +
      '<div class="quotes"><span class="lab">What the audience is saying</span>' +
      ((c.evidence || []).length ? c.evidence.map(function (e) { return U.quoteBlock(e, asOf); }).join('')
        : '<p class="sub-t">No quoted evidence at this depth.</p>') + '</div></div>' +
      '<div class="invbox"><span class="lab">Monetization inventory ' + U.def('absent') + '</span>' +
      '<ul class="invstrip">' + (c.inventory || []).map(function (r) {
        return '<li>' + U.vmark(r.state) + '<span>' + esc(r.item) + '</span>' +
          '<span class="sf">' + r.surfacesChecked + ' surfaces</span></li>';
      }).join('') + '</ul><p class="invsum">' + esc(invSentence(t)) + '</p></div></div>' +

      disclosure('scoring', 'How it scored',
        'gap ' + g.score + '/60 ' + DOT + ' strain ' + s.score + '/40 ' + DOT + ' format fit ' + esc(String(f.verdict).toLowerCase()),
        scoringBody(c, g, s, f)) +
      disclosure('ledger', 'The check record', checkSummary(c, asOf), ledgerBody(c, asOf)) +
      (c.samples && c.samples.length
        ? disclosure('samples', 'What the work looks like', U.plural(c.samples.length, 'sample'), samplesBody(c))
        : '') +
      disclosure('play', 'Recommended play', esc(c.play.label), playBody(c)) +
      '</div>';

    /* What happened next — only on a Track record entry, and only after the
       report above it has been read. */
    if (tr && c.outcome) out += outcomeBlock(c, tr);

    if (d) {
      out += '<div class="decide"><span class="pill' + (d.verb === 'pass' ? '' : ' pill--ok') + '">' +
        esc(stateLabel(d.verb)) + '</span><span class="sub-t">Recorded by ' + esc(me().name) + '</span>' +
        '<span class="spacer"></span>' +
        (d.verb === 'promote' ? '<button class="btn btn--sm btn--out" data-act="outreach" data-id="' + c.id + '">Outreach package</button>' : '') +
        '<button class="btn btn--ghost btn--sm" data-act="undo" data-id="' + c.id + '">Undo</button></div>';
    } else if (state.passTray === c.id) {
      out += '<div class="p mt-5 traybox">' + passTray(c) + '</div>';
    } else if (!dated) {
      out += '<div class="decide">' +
        U.verbBtn(v.act, c.id, v.label, 'go') +
        U.verbBtn('watch', c.id, 'Watch', 'hold') +
        U.verbBtn('passtray', c.id, 'Pass', 'no') +
        '<span class="spacer"></span>' +
        '<span class="who3">Recorded as ' + esc(me().name) + ' ' + DOT + ' ' + esc(U.longDate(asOf)) + '</span></div>';
    }
    return out;
  }

  function disclosure(id, title, summary, body) {
    var open = !!state.open[id];
    return '<div class="disc' + (open ? ' open' : '') + '">' +
      '<button data-act="disc" data-d="' + id + '" aria-expanded="' + open + '">' +
      '<span class="t">' + title + '</span><span class="s">' + summary + '</span>' +
      '<span class="chev">' + U.icon('chev') + '</span></button>' +
      (open ? '<div class="disc-body">' + body + '</div>' : '') + '</div>';
  }

  function scoringBody(c, g, s, f) {
    return '<div class="pillrow">' +
      '<div class="pillcard pillcard--gap"><span class="k">Monetization gap ' + U.def('gap') + '</span>' +
      '<div class="n">' + g.score + '<small>/60</small></div>' +
      '<p class="d">The buy signal. Demand that has nowhere to go.</p></div>' +
      '<div class="pillcard pillcard--strain"><span class="k">Operator strain ' + U.def('strain') + '</span>' +
      '<div class="n">' + s.score + '<small>/40</small></div>' +
      '<p class="d">The timing trigger. Why now rather than someday.</p></div></div>' +

      '<div class="sigs">' + [].concat(g.subsignals || [], s.subsignals || []).map(function (x) {
        return '<div class="sig" data-e="' + U.engineKind(x.engine) + '">' +
          '<div class="r1"><span class="l">' + esc(x.label) + '</span>' + U.engTag(x.engine) +
          '<span class="w">' + x.weightPct + '% of pillar</span></div>' +
          '<div class="val">' + esc(x.value) + '</div>' +
          '<p class="det">' + esc(x.detail) + '</p></div>';
      }).join('') + '</div>' +

      '<div class="gatepanel"><div class="gh"><h4>Format Fit ' + U.def('fit') + '</h4>' +
      '<span class="nopts">Gate. Pass or fail, contributing 0 points.</span>' + U.engTag(f.engine) +
      '<span class="verdict pill pill--ok">' + esc(f.verdict) + '</span></div>' +
      '<div class="gategrid">' + (f.subsignals || []).map(function (x) {
        return '<div><div class="l">' + esc(x.label) + '</div><div class="v">' + esc(x.value) + '</div>' +
          '<div class="d">' + esc(x.detail) + '</div></div>';
      }).join('') + '</div></div>';
  }

  function checkSummary(c, asOf) {
    var e = V4.effortFor(c, asOf);
    if (!e) return '';
    return U.plural(e.surfaces, 'surface') + ' ' + DOT + ' ' + U.plural(e.days, 'day') + ' tracked ' + DOT + ' ' +
      e.passes.map(function (p) { return V4.DEPTH[p].label; }).join(', ');
  }

  /* Creator scope shows effort, never currency. */
  function ledgerBody(c, asOf) {
    var rows = V4.ledgerFor(c, asOf);
    if (!rows.length) return '<p class="sub-t">No check record at this depth.</p>';
    return '<div class="wrapx"><table class="ct"><thead><tr>' +
      '<th>Surface</th><th>What was found</th><th>Source</th><th>Checked</th><th>State</th><th>Depth ' + U.def('depth') + '</th>' +
      '</tr></thead><tbody>' + rows.map(function (r) {
        return '<tr><td><b>' + esc(r.surface) + '</b></td><td>' + esc(r.value) + '</td>' +
          '<td class="lsrc">' + esc(r.url) + '</td><td>' + esc(U.shortDate(r.observedAt)) + '</td>' +
          '<td>' + U.vstate(r.state) + '</td>' +
          '<td><span class="pill">' + esc(V4.DEPTH[r.depth].label) + '</span> ' + U.engTag(r.engine) + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="ledger-ft">One row per check, with the surface, the date it was made and what resolved it. ' +
      'Names only exist from Probe depth upward, where an actual judgment was made.</p>';
  }

  function samplesBody(c) {
    return '<div class="samples">' + c.samples.map(function (sm) {
      return '<div class="sample"><div class="swatch ' + U.sampleField(sm.tone) + '"></div>' +
        '<div class="t">' + esc(sm.title) + '</div>' +
        '<div class="m"><span class="pill">' + esc(sm.platform) + '</span>' +
        '<span class="sub-t">' + esc(sm.metric) + '</span><span class="sub-t">' + esc(sm.length) + '</span></div></div>';
    }).join('') + '</div>';
  }

  function playBody(c) {
    return '<div class="playpanel"><div class="badge"><span class="kick">The play</span>' +
      '<div class="p2">' + esc(c.play.label) + '</div></div>' +
      '<div><p class="why">' + esc(c.play.why) + '</p>' +
      '<p class="caveat">No revenue estimate. Warhol does not model what it cannot observe.</p></div></div>';
  }

  function outcomeBlock(c, tr) {
    var o = c.outcome;
    var dud = !o.built || !o.built.length;
    return '<div class="p p--ink mt-5">' +
      '<span class="kick">' + esc(o.window) + ' ' + DOT + ' what happened next</span>' +
      '<h3 class="outcome-h outcome-h--lg">' + esc(o.headline) + '</h3>' +
      '<p class="outcome-n on-ink-soft">' + esc(o.note) + '</p>' +
      (dud ? '' : '<ul class="built">' + o.built.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span>' + esc(b) + '</span></li>';
      }).join('') + '</ul>') +
      (tr.missNote ? '<div class="miss"><span class="k">Warhol was right to rank it low</span>' +
        '<p>' + esc(tr.missNote) + '</p></div>' : '') +
      '</div>';
  }

  /* ========================================================= TRACK RECORD */
  function trackRecordView() {
    var head = '<header class="pagehead"><h1>Track record</h1>' +
      '<p class="deck">Every call the desk has made and what happened next &mdash; including the one Warhol ranked ' +
      'low that stayed low. Open any entry to read the report as it stood on the day the call was made.</p></header>';

    var rows = V4.trackRecord.map(function (t) {
      var c = W.byId[t.id];
      if (!c) return '';
      var o = c.outcome || {};
      return '<article class="trow">' +
        '<div class="scorewrap">' + U.ring(c, 'sm') + '</div>' +
        '<div class="rowmain"><span class="nm">' + esc(c.name) + '</span>' +
        '<span class="hd">' + esc(stateLabel(t.verb)) + ' by ' + esc(t.by) + ' ' + DOT + ' ' + esc(U.longDate(t.calledOn)) + '</span>' +
        '<p class="outcome-h">' + esc(o.headline || '') + '</p>' +
        '<p class="outcome-n">' + esc(o.note || '') + '</p>' +
        (t.missNote ? '<div class="miss"><span class="k">The miss</span><p>' + esc(t.missNote) + '</p></div>' : '') +
        '</div>' +
        '<div class="acts"><button class="btn btn--primary btn--sm" data-act="report" data-id="' + c.id +
        '" data-from="trackrecord" data-asof="' + t.calledOn + '">Read the call</button>' +
        '<span class="pill' + (t.hit ? ' pill--ok' : '') + '">' + (t.hit ? 'Held up' : 'Ranked low, stayed low') + '</span>' +
        '</div></article>';
    }).join('');

    return head + '<div class="listwrap">' + rows + '</div>';
  }

  /* ============================================================= WATCHLIST */
  function watchlistView() {
    var list = watchlist();
    var head = '<header class="pagehead"><h1>Watchlist</h1>' +
      '<p class="deck">Kept, not killed. Re-scored every night against the same model. When one crosses a ' +
      'threshold it comes back into the drop with the reason attached, so this never becomes a second inbox.</p></header>';

    if (!list.length) {
      return head + '<section class="p zero"><h2>Nothing kept yet.</h2>' +
        '<p>Watch a creator from the drop and they will be re-scored here every night.</p></section>';
    }

    var rows = list.map(function (c) {
      var rec = V4.pruneFor(c.id);
      var since = c.watchedSince ? U.longDate(c.watchedSince) : U.longDate(today());
      var days = c.watchedSince ? U.daysBetween(c.watchedSince, today()) : 0;
      var moved = Math.abs(c.scoreDelta || 0);
      /* The argument for dropping someone is movement, not money. A creator
         kept today has no history to move through yet, so claiming "N points
         in 0 days" would be reporting a number it cannot have. */
      var movement = '<div class="movement">' +
        (days > 0
          ? U.track(Math.min(100, moved * 12)) +
            '<span>' + (moved ? moved + ' points of movement' : 'no movement') + ' in ' + U.plural(days, 'day') + '</span>'
          : U.track(0) + '<span>kept today &mdash; nothing to compare against yet</span>') +
        '</div>';
      var prune = rec ? '<div class="prune ' + (rec.recommend ? 'prune--stop' : 'prune--keep') + '">' +
        '<span class="k">' + esc(rec.headline) + '</span><p>' + esc(rec.why) + '</p>' +
        (rec.recommend ? '<button class="btn btn--sm btn--out" data-act="passtray" data-id="' + c.id + '">Stop watching' + ELL + '</button>' : '') +
        '</div>' : '';

      return '<div class="wrow">' + U.initials(c, 'sm') +
        '<div><span class="nm">' + esc(c.name) + '</span>' +
        '<span class="hd">' + esc(c.handle) + ' ' + DOT + ' kept ' + esc(since) + '</span>' +
        '<p class="kept">' + esc(c.headline) + '</p>' + movement +
        '<div class="trigger"><span class="k">Next trigger</span><span class="v">' +
        esc(c.nextTrigger || 'Re-scored nightly. Comes back on a strain trigger or a score move of 5 or more.') + '</span></div>' +
        prune + (state.passTray === c.id ? passTray(c) : '') + '</div>' +
        '<div class="right">' + U.ring(c, 'sm') +
        '<button class="btn btn--out btn--sm" data-act="report" data-id="' + c.id + '" data-from="watchlist">Open report</button>' +
        '</div></div>';
    }).join('');

    return head + '<div class="listwrap">' + rows + '</div>';
  }

  /* ============================================================= NEW BRIEF */
  /* A short filter form. Not a wizard — a brief is a free saved filter, so
     asking three questions about business outcomes to build one was solving a
     problem that no longer exists. */
  function newBriefView() {
    var d = state.draft || { category: null, band: 'Any size', platforms: [] };
    var preview = V4.applyBrief(baseDrop(), d).length;

    return '<header class="pagehead"><h1>New brief</h1>' +
      '<p class="deck">A brief is a saved filter over the drop. It costs nothing, changes nothing about what ' +
      'Warhol scans, and you can delete it whenever it stops being useful.</p></header>' +

      '<div class="form">' +
      '<div class="frow"><span class="lab">Category</span><div class="chips">' +
      '<button class="chipbtn" data-act="dset" data-f="category" data-v="" aria-pressed="' + (!d.category) + '">Any</button>' +
      V4.categories.map(function (c) {
        return '<button class="chipbtn" data-act="dset" data-f="category" data-v="' + esc(c.label) + '"' +
          ' aria-pressed="' + (d.category === c.label) + '">' + esc(c.label) + '</button>';
      }).join('') + '</div></div>' +

      '<div class="frow"><span class="lab">Audience size</span><div class="chips">' +
      V4.bands.map(function (b) {
        return '<button class="chipbtn" data-act="dset" data-f="band" data-v="' + esc(b) + '"' +
          ' aria-pressed="' + (d.band === b) + '">' + esc(b) + '</button>';
      }).join('') + '</div></div>' +

      '<div class="frow"><span class="lab">Platforms <span class="sub-t">(any of)</span></span><div class="chips">' +
      V4.platforms.map(function (p) {
        return '<button class="chipbtn" data-act="dtog" data-v="' + esc(p) + '"' +
          ' aria-pressed="' + (d.platforms.indexOf(p) > -1) + '">' + esc(p) + '</button>';
      }).join('') + '</div></div>' +

      '<p class="preview">This brief matches <b>' + preview + '</b> of today&rsquo;s ' +
      baseDrop().length + ' creators. A brief never adds names &mdash; it only narrows what you are looking at.</p>' +

      '<div class="formacts">' +
      '<button class="btn btn--primary" data-act="savebrief">Save brief</button>' +
      '<button class="btn btn--ghost" data-act="view" data-view="drop">Cancel</button>' +
      '</div></div>';
  }

  /* ============================================================ RUN A NAME */
  function runNameView() {
    var r = W.runANameResult;
    var head = '<header class="pagehead"><h1>Run a name</h1>' +
      '<p class="deck">The Scout&rsquo;s hunch is data too. Paste a handle and Warhol scores it on demand, tags it as ' +
      'manual, and lets it through the threshold as a declared override.</p></header>';
    var body;

    if (state.run.stage === 'idle') {
      body = '<div class="p padbox"><label class="lab" for="runq">Handle or URL</label>' +
        '<form class="formacts mt-2" data-act="runsubmit">' +
        '<input class="inp" id="runq" type="text" value="' + esc(state.run.query) + '" placeholder="@vancemakesknives" autocomplete="off">' +
        '<button class="btn btn--primary" type="submit">Score it</button></form>' +
        '<p class="lifecycle">Manual adds are source-tagged so machine-found and human-found stay separable in the ' +
        'label data &mdash; which is what later answers whether Warhol finds things a person would have missed.</p></div>';
    } else if (state.run.stage === 'scoring') {
      body = '<div class="p padbox"><span class="lab">Resolving ' + esc(state.run.query || r.handle) + '</span>' +
        '<ul class="invstrip mt-4">' + r.inventory.map(function (x, i) {
          var done = i < state.run.step;
          return '<li>' + (done ? U.vmark(x.state) : '<span class="vmark"></span>') +
            '<span>' + esc(x.item) + '</span><span class="sf">' +
            (done ? esc(U.VLABEL[x.state]) : 'checking' + ELL) + '</span></li>';
        }).join('') + '</ul></div>';
    } else {
      body = '<div class="p padbox">' +
        '<div class="formacts mt-0"><span class="pill pill--ok">Scored</span>' +
        '<span class="sub-t">' + esc(r.handle) + ' ' + DOT + ' ' + r.score + ' ' + DOT + ' confidence ' + U.pct(r.confidence) + '</span></div>' +
        '<div class="prune prune--stop mt-4"><span class="k">Scout override</span>' +
        '<p>' + r.score + ' is below the ' + W.meta.scoreThreshold + ' threshold, so the scan would never have ' +
        'surfaced this name. Manual entry bypasses it, and the report says so on its face.</p></div>' +
        '<div class="formacts"><button class="btn btn--primary" data-act="report" data-id="' + r.id + '" data-from="runname">Open report</button>' +
        '<button class="btn btn--ghost" data-act="runreset">Run another</button></div></div>';
    }
    return head + body;
  }

  /* ============================================================== OUTREACH */
  function outreachView() {
    var c = creator(state.outreachId);
    if (!c) return '<p class="sub-t">Not found.</p>';
    var o = c.outreach, t = U.inventoryTally(c.inventory), who = me();
    return '<header class="pagehead"><div class="rpt-tags">' +
      '<span class="pill pill--ok">Promoted</span><span class="pill">Phase Two record created</span></div>' +
      '<h1 class="mt-3">Outreach package: ' + esc(c.name) + '</h1>' +
      '<p class="deck">Everything a first contact needs was already in the report, so generating this costs nothing. ' +
      'Warhol writes it. You send it.</p></header>' +
      '<div class="p case mt-5">' +
      '<div><span class="lab">The signals, in plain language</span>' +
      '<ul class="invstrip mt-3">' + o.bullets.map(function (b) {
        return '<li>' + U.vmark('verified_absent') + '<span>' + esc(b) + '</span><span></span></li>';
      }).join('') + '</ul>' +
      '<p class="invsum"><b>' + t.verified_absent + ' of ' + t.total + '</b> lines verified absent across ' +
      t.surfaces + ' surfaces.</p></div>' +
      '<div><span class="lab">Draft first contact</span>' +
      '<div class="invbox mt-3">' +
      '<p class="draft-subj">Subject: <b>' + esc(o.subject) + '</b></p>' +
      '<p class="draft-p">' + esc(o.opener) + '</p>' +
      '<p class="draft-p">' + esc(o.close) + '</p>' +
      '<p class="draft-sig">' + esc(who.name) + ' ' + DOT + ' ' + esc(who.title) + ', Paradium</p></div>' +
      '<div class="formacts"><button class="btn btn--primary" data-act="copy" data-id="' + c.id + '">' +
      (state.copied ? 'Copied' : 'Copy the draft') + '</button>' +
      '<button class="btn btn--ghost" data-act="view" data-view="drop">Back to the drop</button></div>' +
      '<p class="lifecycle"><b>Warhol never sends.</b> Owning outreach would inherit deliverability and relationship ' +
      'problems that belong to a person, and turn a listening tool into a CRM.</p></div></div>';
  }

  /* ================================================================== GATE */
  function signInView() {
    return '<div class="signin"><div class="signin-mark">W</div>' +
      '<h1 class="signin-wm">Warhol Scout</h1><p class="signin-sub">Origination desk</p>' +
      '<button class="btn btn--primary signin-sso" data-act="signin">' +
      '<span class="g-g" aria-hidden="true"></span>Continue with Google</button>' +
      '<p class="signin-fine">Paradium accounts only.</p></div>';
  }

  /* ============================================================= RENDERING */
  function render() {
    var fade = state.animate && !reduceMotion.matches ? ' viewfade' : '';
    state.animate = false;
    var html;

    if (state.phase === 'signedout') {
      html = '<div class="slab slab--solo slab--gate"><main class="main" id="main">' + signInView() + '</main></div>';
    } else {
      var body =
        state.view === 'report' ? reportView() :
          state.view === 'watchlist' ? watchlistView() :
            state.view === 'trackrecord' ? trackRecordView() :
              state.view === 'runname' ? runNameView() :
                state.view === 'outreach' ? outreachView() :
                  state.view === 'newbrief' ? newBriefView() : dropView();

      html = '<div class="slab slab--app">' + railHTML() +
        '<main class="main" id="main">' + topHTML() +
        '<div class="wrap' + fade + '">' + body + '</div></main></div>';
    }
    if (state.def) html += defPop();

    /* render() replaces the whole DOM, which destroys the scroll container.
       In v3 that meant every disclosure, expand and pass-tray click threw you
       back to the top — measured at 700 -> 0. Capture and restore; go() is the
       only thing that resets, because only a view change should. */
    var prev = 0;
    var old = document.getElementById('main');
    if (old) prev = old.scrollTop;

    document.getElementById('app').innerHTML = html;

    var main = document.getElementById('main');
    if (main && prev) main.scrollTop = prev;
    if (main) bindCompact(main);
  }

  /* The compact bar appears once the tall header has scrolled past. #main is
     rebuilt every render, so the listener is re-attached rather than delegated;
     it dies with the node it was bound to. */
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

  function defPop() {
    var d = V4.DEFS[state.def.key];
    if (!d) return '';
    var x = Math.max(12, Math.min(window.innerWidth - 352, state.def.x - 170));
    var y = Math.min(window.innerHeight - 180, state.def.y + 18);
    return '<div class="defpop" style="left:' + x + 'px;top:' + y + 'px">' +
      '<h5>' + esc(d.t) + '</h5><p>' + esc(d.d) + '</p></div>';
  }

  function go(view, from) {
    clearTimers();
    state.view = view;
    state.passTray = null;
    state.copied = false;
    state.animate = true;
    state.menu = false;
    state.def = null;
    if (from) state.from = from;
    render();
    var m = document.getElementById('main');
    if (m) m.scrollTop = 0;
  }

  function setTheme(t) {
    document.documentElement.setAttribute('data-theme', t);
    try { localStorage.setItem('warhol-v4-theme', t); } catch (e) { /* file:// */ }
  }

  /* ================================================================ EVENTS */
  document.addEventListener('click', function (e) {
    var el = e.target.closest ? e.target.closest('[data-act]') : null;

    /* A click anywhere else dismisses the transient layers. */
    if (!el) {
      if (state.def || state.menu) { state.def = null; state.menu = false; render(); }
      return;
    }
    var act = el.getAttribute('data-act');
    var id = el.getAttribute('data-id');

    if (act === 'def') {
      var r = el.getBoundingClientRect();
      var k = el.getAttribute('data-k');
      state.def = (state.def && state.def.key === k) ? null : { key: k, x: r.left, y: r.bottom };
      render();
      return;
    }
    state.def = null;

    if (act === 'menu') { state.menu = !state.menu; render(); return; }
    if (act === 'theme') { setTheme(el.getAttribute('data-set')); render(); return; }
    if (act === 'role') { state.role = el.getAttribute('data-r'); state.userId = isScout() ? 's_alex' : 'p_dana'; go('drop'); return; }
    if (act === 'signin') { state.phase = 'app'; go('drop'); return; }
    if (act === 'signout') {
      state.phase = 'signedout'; state.decisions = {}; state.userBriefs = []; state.briefId = null;
      state.expanded = {}; state.open = {}; state.menu = false; state.animate = true; render(); return;
    }

    if (act === 'view') { go(el.getAttribute('data-view')); return; }
    if (act === 'brief') { state.briefId = el.getAttribute('data-b') || null; go('drop'); return; }
    if (act === 'newbrief') { state.draft = { category: null, band: 'Any size', platforms: [] }; go('newbrief'); return; }

    if (act === 'dset') {
      var f = el.getAttribute('data-f');
      state.draft[f] = el.getAttribute('data-v') || null;
      render(); return;
    }
    if (act === 'dtog') {
      var p = el.getAttribute('data-v');
      var i = state.draft.platforms.indexOf(p);
      if (i > -1) state.draft.platforms.splice(i, 1); else state.draft.platforms.push(p);
      render(); return;
    }
    if (act === 'savebrief') {
      var d = state.draft;
      var name = (d.category || 'All categories') +
        (d.band && d.band !== 'Any size' ? ' ' + DOT + ' ' + d.band : '');
      var nb = { id: 'ub_' + state.userBriefs.length, name: name, category: d.category,
        band: d.band, platforms: d.platforms.slice() };
      state.userBriefs.push(nb);
      state.briefId = nb.id;
      go('drop'); return;
    }

    if (act === 'expand') { state.expanded[id] = !state.expanded[id]; render(); return; }
    if (act === 'disc') { var k2 = el.getAttribute('data-d'); state.open[k2] = !state.open[k2]; render(); return; }

    if (act === 'report') {
      state.reportId = id;
      state.reportAsOf = el.getAttribute('data-asof') || null;
      state.open = {};
      go('report', el.getAttribute('data-from') || (state.view === 'report' ? state.from : state.view));
      return;
    }

    if (act === 'passtray') { state.passTray = id || null; render(); return; }
    if (act === 'pass') {
      state.decisions[id] = { verb: 'pass', reasonCode: el.getAttribute('data-code'), at: today() };
      state.passTray = null;
      if (state.view === 'report') go('drop'); else render();
      return;
    }
    if (act === 'watch') {
      state.decisions[id] = { verb: 'watch', at: today() };
      if (state.view === 'report') go('drop'); else render();
      return;
    }
    if (act === 'refer') { state.decisions[id] = { verb: 'refer', at: today() }; go('drop'); return; }
    if (act === 'promote') {
      state.decisions[id] = { verb: 'promote', at: today() };
      state.outreachId = id; go('outreach'); return;
    }
    if (act === 'outreach') { state.outreachId = id; go('outreach'); return; }
    if (act === 'undo') { delete state.decisions[id]; render(); return; }
    if (act === 'runreset') { state.run = { stage: 'idle', query: '', step: 0 }; render(); return; }

    if (act === 'copy') {
      var c = creator(id), o = c.outreach, who = me();
      copyText('Subject: ' + o.subject + '\n\n' + o.opener + '\n\n' +
        o.bullets.map(function (b) { return '- ' + b; }).join('\n') + '\n\n' + o.close + '\n\n' +
        who.name + '\n' + who.title + ', Paradium');
      state.copied = true; render();
      later(function () { state.copied = false; if (state.view === 'outreach') render(); }, 2200);
      return;
    }
  });

  document.addEventListener('submit', function (e) {
    var f = e.target.closest ? e.target.closest('[data-act="runsubmit"]') : null;
    if (!f) return;
    e.preventDefault();
    var i = document.getElementById('runq');
    state.run.query = (i && i.value.trim()) || W.runANameResult.handle;
    startScoring();
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && (state.def || state.menu)) { state.def = null; state.menu = false; render(); }
  });

  function startScoring() {
    var total = W.runANameResult.inventory.length;
    state.run.stage = 'scoring'; state.run.step = 0; render();
    if (reduceMotion.matches) { state.run.stage = 'done'; render(); return; }
    var tick = function () {
      state.run.step += 1; render();
      if (state.run.step < total) later(tick, 380);
      else later(function () { state.run.stage = 'done'; render(); }, 560);
    };
    later(tick, 420);
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
    try { saved = localStorage.getItem('warhol-v4-theme'); } catch (e) { /* file:// */ }
    if (saved) { document.documentElement.setAttribute('data-theme', saved); return; }
    var mq = window.matchMedia('(prefers-color-scheme: light)');
    document.documentElement.setAttribute('data-theme', mq.matches ? 'light' : 'dark');
  })();

  render();
})();
