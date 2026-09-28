/* ==========================================================================
   SCOUT v5.9 — application shell, state and views.
   Classic script, no modules, no fetch. Runs from file://.

   v5.9 is a critique pass, not a feature. Ten changes, in the order they matter:
     · one name for one state — "could not tell" had eleven synonyms, and two
       triage verbs (Pass, Watch) were reused for scan depth and for the replay
     · every pillar prints its denominator; +20 of 25 is not the same finding
       as +10 of 35, and printed as "+20" and "+10" it read as the opposite
     · the ring is drawn against 100 with a tick at the bar, not against the
       highest score in today's seed
     · six sentences that argued for the design are gone (CLAUDE.md:16)
     · "Who else was looked at" states its rule once instead of 33 times
     · the pass tray opens on three reasons, not eight
     · Promote is on the row; Open the report moved to the name and the row
     · the Watchlist and the Passed list can be undone from the list itself
     · the drop names the source that is off when it costs a pillar
     · the row's own labels are 11px and its controls have visible boundaries

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

  /* v6.2 — ONE NAME FOR THE STANDING TAB OF NAMES YOU LOOKED UP. Was "Tracked
     by hand", which named the mechanism; this names the thing — the shortlist a
     desk builds by pulling people aside to keep watching. Held in one place so
     the tab, every sentence that points at it, and the announce all say the same
     word (CLAUDE.md: one name per state). */
  var TRACKED_TAB = 'Shortlist';

  /* ---------------------------------------------------------------- FEATURES
     v5.5c — RUN A NAME IS HIDDEN FOR THE DEMO. One flag, and the screen, its
     view, its handlers and its seed index are all left intact underneath — this
     is not a deletion. Set it back to true and everything returns.

     Hidden rather than deleted because the reason is presentational and
     temporary: the screen works, but it only resolves handles that are already
     in the seed, so a demo audience's first instinct — type a name they know —
     lands on "Scout hasn't looked at this one yet". That is the honest answer
     and it is the wrong first impression to hand someone in a room.

     The route is guarded as well as the button. A rail item removed without its
     route leaves a screen reachable by a persisted session and by nothing else,
     which is how a half-hidden feature turns into a screen nobody can get back
     from. */
  /* v6.1 — LOOKING A NAME UP IS BACK, AND IT IS NOT A SCREEN ANY MORE.

     It was cut to a flag because it sat in the rail as a fifth destination
     beside the four surfaces that are the morning's work, and it is not a
     surface — it is a way of STARTING something, which is exactly what the [+]
     already is. Two doors to "bring someone into Scout" taught that a brief and
     a name were different kinds of act. They are the same act at two scales:
     go and look, then tell me.

     So the [+] opens one sheet with two modes. `SHOW_RUNNAME` now governs only
     the old standalone rail entry, which stays off; the view itself is reachable
     and its whole machinery — normalizeSubject, runIndex, the four stages — is
     the same code that was already there. */
  var SHOW_RUNNAME = false;

  /* ------------------------------------------------------------------ state */
  var state = {
    phase: 'signedout',
    view: 'drop',
    briefId: 'b_house',
    asOf: null,                 // always today. The rewind is removed.
    firstRun: false,            // was: show January 2024 once. Nothing reads it now.
    reportId: null,
    from: 'drop',
    outreachId: null,
    sources: {},                // source id -> on/off, §6.13. Absent = the source's own default
    decisions: {},              // creator id -> { verb, reasonCode, at, window }
    outcomeState: {},           // creator id -> { code, at, declineCode }
    open: {},                   // disclosure id -> open
    trajMonth: {},              // creator id -> selected month index on the output graph
    passTray: null,
    passAll: false,             // v5.9 — the tray opens on three; this reveals the rest
    unpassed: {},               // v5.9 — seeded passes put back in the drop
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
      ceiling: S.admin.budget.ceiling
    },
    /* v6.2 — LOOKING UP IS A LIST, NOT A FIELD.

       `query` was one handle and the screen answered about one person. That is
       not how the job arrives: somebody comes back from a conference, or off a
       competitor's follow list, with six names on a napkin. Running them one at
       a time meant six searches, six results screens and six chances to lose
       the previous answer — and no moment where the six are a set.

       `subjects` is what was asked for, in the order it was typed. `query` is
       only the characters not yet committed to a pill. `found` and `missed` are
       the answer, kept as ids and as raw strings, because a name Scout has not
       reached is still something the reader asked for and the screen has to say
       so by name. `added` records that the answer was put somewhere. */
    run: { stage: 'idle', query: '', step: 0, subjects: [], found: [], missed: [], added: false },
    /* Which half of the [+] sheet is showing. Not persisted: the sheet is a
       thing you open to do one job, and reopening it a day later on the mode
       you happened to leave it in is a preference nobody set. */
    briefMode: 'brief',         // brief | person
    /* v6.1 — EVERY NAME LOOKED UP BY HAND, IN THE ORDER THEY WERE LOOKED UP.
       Creator ids. This is the population behind the standing Shortlist
       tab (was "Tracked by hand"): a brief nobody wrote, holding the people somebody asked for one at a
       time. Persisted, because it is a decision — the same class of thing as
       Watch, and losing it on reload would lose work. */
    tracked: [],
    /* v5.5b — the rail is icons at 76px unless you say otherwise, and the
       otherwise is remembered. Persisted so the choice survives a reload, which
       is the difference between a preference and a fidget. */
    railWide: false,
    gateError: null,            // the sign-in refusal, inline and generic
    gateShow: false,            // is the password field showing its value
    /* render() replaces the whole DOM, so a field that reads its value from the
       seed re-prefills itself on every re-render — which meant a refused attempt
       came back with the CORRECT password sitting in the box, silently undoing
       what had just been typed and rejected. What was typed lives here. */
    gateEmail: null,
    gatePass: null,
    briefInfo: false,          // B/D — the brief note + first-look caveat, collapsed by default
    replay: null,               // v5.4 — {id, step, timer} while the check replays
    /* v5.8 — briefId -> {mode, rows, step, phase, timers, es, startedAt} for
       every brief that has been looked at. KEYED, and no longer thrown away on
       a view change: see the note above startScan. */
    scans: {},
    copied: false,
    menu: false,
    animate: true
  };

  /* v5 kept every decision in memory only, so a trackpad back-swipe mid-demo
     reset the session to the sign-in gate with no warning. Persisting the
     decided state is enough — the seed rebuilds everything else.

     Keyed per version. Every prototype is served from one origin so the index
     can toggle between them, which means one key is one shared session: opening
     v5.1 and v5.2 in turn had each restore the other's half-worked drop. */
  var PERSIST = ['phase', 'view', 'briefId', 'asOf', 'firstRun', 'reportId', 'from',
    'outreachId', 'decisions', 'outcomeState', 'unpassed', 'userBriefs', 'paused', 'admin', 'sources',
    /* `helpFrom` rides along for the same reason `from` does: the help screen's
       only way back is a labelled button, and a restored session that lost it
       would offer "Back to the drop" to somebody who arrived from a report. */
    /* v6.2 — `run` rides along now that a lookup is a batch. Six names typed in
       and resolved is work, and the answer used to be thrown away by any
       navigation that cleared the timers. */
    'railWide', 'helpFrom', 'tracked', 'run',
    /* v5.8 — the scans ride along too. A reload used to put every fresh brief
       back to "Scout is looking" from zero, which on a live run means paying
       for the same names twice. Sanitised on the way out by scanSnapshot. */
    'scans'];

  /* A scan record holds two things that cannot be written down: an open
     EventSource and a list of timer handles. Everything else is just what the
     machine found, and that is worth keeping. */
  function scanSnapshot() {
    var out = {};
    Object.keys(state.scans || {}).forEach(function (id) {
      var sc = state.scans[id];
      /* Still deciding whether there is an engine behind the page. There is
         nothing to restore and the question is cheap to ask again. */
      if (sc.mode === 'probing') return;
      var copy = {};
      Object.keys(sc).forEach(function (k) {
        if (k !== 'es' && k !== 'timers') copy[k] = sc[k];
      });
      copy.es = null; copy.timers = [];
      /* A seeded scan's rows are whole creator records out of the seed, and
         writing nine of them per brief put 60KB a brief into sessionStorage for
         something that is a pure function of the brief's own words. Dropped and
         rebuilt by resumeScan; what is actually worth keeping is WHERE it is,
         which is tickFrom. */
      if (copy.mode === 'seed') delete copy.rows;
      /* A live run belongs to the page that opened the stream. Names already
         off the wire were really read and are kept as a finished list; one that
         had not produced a name yet is dropped so it runs again for real. */
      if (copy.mode === 'live' && copy.phase !== 'done') {
        if (!(copy.rows || []).length) return;
        copy.phase = 'done';
      }
      out[id] = copy;
    });
    return out;
  }

  function persist() {
    try {
      var out = {};
      PERSIST.forEach(function (k) { out[k] = k === 'scans' ? scanSnapshot() : state[k]; });
      sessionStorage.setItem('scout-v59', JSON.stringify(out));
    } catch (e) { /* private mode, or file:// — the app still works, it just forgets */ }
  }
  function restore() {
    try {
      var raw = sessionStorage.getItem('scout-v59');
      if (!raw) return;
      var saved = JSON.parse(raw);
      PERSIST.forEach(function (k) { if (saved[k] !== undefined) state[k] = saved[k]; });
      /* v5.5 — Sources folded into Admin. A session saved before that restores
         `view: 'sources'`, which now matches no branch in render() and falls
         through to the drop with the crumb saying Drop and the rail highlighting
         nothing. Land it where its contents went. */
      if (state.view === 'sources') state.view = 'admin';
      /* Same reason, same shape: a session saved while Run a name was visible
         restores onto a screen the rail no longer offers a way back from. */
      if (!SHOW_RUNNAME && state.view === 'runname') state.view = 'drop';
      if (!SHOW_RUNNAME && state.from === 'runname') state.from = 'drop';
      /* v5.8 — restored scans come back without their live parts. resumeScan
         puts a seeded one back on the clock when its screen is next drawn. */
      if (!state.scans || typeof state.scans !== 'object') state.scans = {};
      Object.keys(state.scans).forEach(function (id) {
        state.scans[id].es = null;
        state.scans[id].timers = [];
      });
    } catch (e) { /* corrupt or unavailable: start fresh rather than fail */ }
  }

  var timers = [];
  function clearTimers() { timers.forEach(clearTimeout); timers = []; }
  /* v5.4 — returns the id as well as tracking it. The replay needs to cancel its
     own next tick when you stop it or open a different creator; without that,
     leaving mid-replay leaves a timer writing into `state.replay` for a report
     nobody is looking at. Still pushed onto `timers` so the global teardown is
     unchanged. */
  function later(fn, ms) { var t = setTimeout(fn, ms); timers.push(t); return t; }
  var reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  /* ------------------------------------------------------------ derivations */
  function me() { return S.me; }
  /* `asOf` survives the rewind's removal and is NOT the same idea. Every fact
     Scout holds is stamped with when it was observed, which is what makes a
     stale fact showable as stale and the check record readable at all. What was
     deleted is the ability to WIND IT BACK — the as-of date is now always today
     and nothing sets it to anything else. */
  function asOf() { return state.asOf || S.TODAY; }
  /* Hard false. Kept as a function rather than ripped out of twenty call sites
     the week of a demo — each `rewound() ? a : b` now collapses to `b`, which is
     the live path and the one that was always exercised. Delete the branches in
     the reconciliation session, not before. */
  function rewound() { return false; }
  /* v6.1 — THE STANDING TAB FOR NAMES SOMEBODY ASKED FOR.

     A brief is a question put to the whole web; this is the same question put
     to one person at a time, and after three or four of them the answers need
     somewhere to live. Without it, looking a name up is a dead end: you read
     one report and the name is gone the moment you navigate away.

     It only exists once something is in it. An empty tab called "Tracked by
     hand" on a fresh account is furniture, and §6.11's argument for the empty
     day does not extend to a list nobody has started — an empty DROP is a
     finding, an empty tracking list is just an unused feature. */
  function trackedBrief() {
    if (!state.tracked.length) return null;
    return {
      id: 'b_tracked', tracked: true, name: TRACKED_TAB,
      /* THE SECOND SENTENCE IS THE ONE THAT MAKES THIS TRACKING RATHER THAN A
         BOOKMARK. A name that never re-checks is a link you saved; the whole
         reason to look somebody up in a listening product is that Scout keeps
         listening afterwards. It goes through the same 6am run as every other
         candidate — same ladder, same sources — so it is stated here rather
         than being a promise the screen never makes. */
      note: 'Names you looked up yourself. They are not gated: you asked for ' +
        'these, so Scout shows all of them and states what each one fails. ' +
        'They are re-checked every morning with everyone else.'
    };
  }
  function allBriefs() {
    var t = trackedBrief();
    return S.briefs.concat(state.userBriefs).concat(t ? [t] : [])
      .filter(function (b) { return !b.archived; });
  }
  function trackedList() {
    var out = [];
    state.tracked.forEach(function (id) {
      var c = creator(id);
      if (c && out.indexOf(c) === -1) out.push(c);
    });
    /* Same order as every other list in the product — best first. The order
       they were looked up in is not information anybody uses to choose. */
    return out.sort(function (x, y) { return score(y) - score(x); });
  }
  function brief(id) {
    var b = null;
    allBriefs().forEach(function (x) { if (x.id === id) b = x; });
    return b || S.briefs[0];
  }
  function isPaused(b) { return !!state.paused[b.id]; }
  function dropList(b) {
    var bb = b || brief(state.briefId);
    /* THE TRACKED TAB IS NOT GATED, and that is the point of it. The gates
       decide what Scout puts in front of you unasked; these names were asked
       for. Running them through dropFor would delete somebody's choice and
       report it as "3 did not match the brief" — against a brief nobody wrote.
       What each one fails is still stated, on the card and on the report, by
       the same gateBlock every other creator gets. */
    if (bb && bb.tracked) {
      var list = trackedList();
      list.left = { below: 0, wrongFit: 0, unjudged: 0, thin: 0, fading: 0, pool: list.length };
      return list;
    }
    return S.dropFor(asOf(), bb, state.admin.threshold, standingExcluded());
  }

  /* v6.2 — THE CREATORS A LIST ALREADY OWNS, kept out of the drop so the drop,
     the watchlist and the passed list never show the same person. Two standing
     kinds: a seeded watch (stamped status 'watched') and a seeded pass (in
     passedSeed) that has not been put back. A pass the reader un-does returns to
     the drop, which is the whole point of "Put back in the drop", so `unpassed`
     is respected here. In-session decisions are left in so their card can
     collapse to a decided row in place; only the standing, prior-day ones are
     removed. */
  function standingExcluded() {
    /* Not memoised: `unpassed` changes when a pass is put back, and the drop has
       to reflect that on the next render. Recomputing is a walk of ~120 records,
       which is nothing against a full re-render. */
    var ex = {};
    W.candidates.forEach(function (c) { if (c.status === 'watched') ex[c.id] = true; });
    (S.passedSeed || []).forEach(function (p) { if (!state.unpassed[p.id]) ex[p.id] = true; });
    return ex;
  }
  function decisionFor(id) { return state.decisions[id] || null; }
  /* v7 — THE LIST A NAME WAS ALREADY ON BEFORE TODAY. decisionFor only knows
     today's verbs, so a report opened from the watchlist offered "Watch" on
     someone already watched. The report's verbs now match the row they were
     opened from. */
  function standingOf(c) {
    if (!c || decisionFor(c.id)) return null;
    if (c.status === 'watched') return 'watched';
    var passed = S.passedSeed.some(function (p) { return p.id === c.id; });
    return passed && !state.unpassed[c.id] ? 'passed' : null;
  }
  function verbSet(c, size) {
    var st = standingOf(c);
    var undo = '<button class="vbtn vbtn--undo' + (size ? ' vbtn--' + size : '') + '" data-act="';
    if (st === 'watched') {
      return U.verbBtn('promote', c.id, 'Promote', 'go', size) +
        undo + 'passtray" data-id="' + c.id + '">Stop watching</button>';
    }
    if (st === 'passed') return undo + 'unpass" data-id="' + c.id + '">Put back in the drop</button>';
    return U.verbBtn('promote', c.id, 'Promote', 'go', size) +
      U.verbBtn('watchtray', c.id, 'Watch', 'hold', size) +
      U.verbBtn('passtray', c.id, 'Pass', 'no', size);
  }
  function creator(id) { return id === W.runANameResult.id ? W.runANameResult : W.byId[id]; }
  function score(c) { return S.score13(c); }
  function remaining() {
    return dropList().filter(function (c) { return !decisionFor(c.id); }).length;
  }
  function stateLabel(v) {
    return v === 'pass' ? 'Passed' : v === 'watch' ? 'Watched' : 'Promoted';
  }
  function watchlist() {
    /* v7 — a seeded watch that was passed or promoted today has left the list.
       "Stop watching" used to add the name to Passed and leave it here too. */
    var seeded = W.candidates.filter(function (c) {
      var d = decisionFor(c.id);
      return c.status === 'watched' && (!d || d.verb === 'watch');
    });
    var added = [];
    Object.keys(state.decisions).forEach(function (id) {
      if (state.decisions[id].verb !== 'watch') return;
      var c = creator(id);
      if (c && seeded.indexOf(c) === -1) added.push(c);
    });
    return added.concat(seeded);
  }
  function passedList() {
    /* v5.9 — a seeded pass is still a pass, and "Put back in the drop" has to
       work on it. The seed is read-only, so the un-passed ids are held beside
       it rather than spliced out of it. */
    var rows = S.passedSeed.filter(function (p) { return !state.unpassed[p.id]; })
      .map(function (p) {
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

  /* ------------------------------------------------------------------ rail
     v5.5b — THE RAIL IS ICONS BY DEFAULT, 76px instead of 252px, and the 176px
     it gives back goes to the work column. Alloy's own `.railcol` is 78px wide;
     the labelled version was the thing that departed from the toolkit, so this
     is a return rather than an invention.

     The labels do not disappear, they MOVE. Each item keeps its text in the DOM
     — that is its accessible name — and shows it as a flyout beside the icon on
     hover and on keyboard focus. A `title` attribute would have been shorter and
     would have been mouse-only, which is the same defect the confidence sweep
     had before v5.4 made it real text.

     Expanding is a real, remembered preference rather than a hover trick: the
     rail does not grow when the pointer crosses it. A sidebar that widens on
     hover reflows the page under the cursor every time you travel diagonally to
     reach something else — and it makes the wide state impossible to keep. */
  function railHTML() {
    var who = me();
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    var wide = !!state.railWide;
    return '<nav class="railcol railcol--wide' + (wide ? '' : ' railcol--mini') +
      '" aria-label="Sections">' +
      /* v5.5c — THE REAL MARK. The gradient tile with a typographic S in it was
         a stand-in, and it is now the FALLBACK: the icon layers over it and, if
         it fails to load, removes itself and puts the drawn disc back. Same
         shape as `U.face()`, and the reason is the same — a missing asset must
         degrade to what the surface looked like before the asset existed, not
         to a hole.

         TWO FILES, PICKED IN JS RATHER THAN CSS. The mark is navy on
         transparency, which disappears on the dark rail, and a `background-image`
         swap in CSS cannot tell us when the file is missing. Reading the theme
         here means one `<img>`, one error path, and the dark variant is a file
         rather than a filter — so the peach shadow survives, which it does not
         on the sign-in lockup. Theme changes re-render, so the src follows. */
      /* v5.5c — THE WIDE RAIL SHOWS THE FULL LOCKUP; THE MINI RAIL SHOWS THE
         MARK. Both are in the DOM and CSS picks — the alternative is branching
         the markup on width, which puts a layout decision in JS and needs a
         resize listener to stay true.

         Three layers, each the fallback for the one before: the lockup, then the
         icon, then the drawn gradient tile with a typographic S. Every step down
         is an `onerror`, so a missing file degrades one notch rather than
         leaving a hole — same rule as `U.face()`. */
      '<div class="brandrow" data-act="view" data-view="drop" role="link" tabindex="0" ' +
      'aria-label="Go to Today&rsquo;s drop">' +
      '<img class="brandlogo" src="assets/Scout_Logo.png" alt="Scout &mdash; Paradium.AI" ' +
      'onerror="this.parentNode.classList.add(\'no-logo\'); this.remove()">' +
      '<span class="me">' +
      '<img class="me-img" src="assets/' +
      (dark ? 'scount%20icon%20darkmode.png' : 'scount%20icon.png') + '" alt="" ' +
      'onerror="this.parentNode.classList.add(\'no-icon\'); this.remove()">' +
      '<span class="me-s" aria-hidden="true">S</span>' +
      '<span class="sr-only">Scout</span></span>' +
      '<span class="brandtx"><span class="wm">Scout</span><span class="sub-t">Origination desk</span></span>' +
      '</div>' +

      /* v5.4 — DEMOTED FROM btn--primary. This was a solid surface-inverting
         button at the top of the rail: the loudest control in the application,
         permanently, for the action taken least often — while "Open the report",
         the thing you do eight times a morning, is a button inside a card. Same
         defect v5.3 fixed on the card when Watch was solid butter and a deferral
         outranked the door to the evidence.

         Kept rather than deleted even though the tab row carries "+ New brief"
         in context: the tab row only exists on the drop, and this is the only
         create affordance visible from Admin, Passed and the watchlist. */
      /* The label is a span rather than a bare text node so the mini rail can
         move it into a flyout with the same rule the nav items use — a `::after`
         would have been a second copy of the words, in CSS, out of reach of a
         screen reader and out of step with the button's real name. */
      /* v5.5b — IT TAKES A CURRENT STATE LIKE EVERY OTHER DESTINATION. It opens
         a screen, sits in a column of things that open screens, and was the only
         one that never went dark when you were on it — so writing a brief looked
         like nothing in the rail was selected. */
      '<div class="nav">' +
      /* String(remaining() || total) printed the full count at zero remaining,
         at the exact moment the page says "Worked to zero". */
      /* v5.4 — this badge and the house tab's badge both read "8" on arrival and
         mean different things: this one is what is LEFT TO DECIDE, the tab is how
         many are in the list. They diverge the moment you decide anything, which
         teaches the difference — but only to someone still watching, and at t=0
         they are two anonymous eights 200px apart. Naming it costs nothing and is
         the only fix that survives them being equal. */
      navBtn('drop', 'drop', "Today's drop", String(dropList().length ? remaining() : 0), 'still to decide') +
      navBtn('watchlist', 'watch', 'Watchlist', String(watchlist().length), 'being watched') +
      navBtn('promoted', 'up', 'Promoted', String(promotedList().length || ''), 'promoted') +
      navBtn('passed', 'passed', 'Passed', String(passedList().length), 'passed') +
      (SHOW_RUNNAME ? navBtn('runname', 'run', 'Run a name', '') : '') +
      /* v5.8 — TRENDS. The standing read of everything scanned so far, which
         until now existed only one creator at a time. It sits below the three
         decision screens and above Admin because it is not a decision and not
         a setting: it is what the desk has learned, and you go to it between
         drops rather than during one. No badge — a count here would be the
         number of creators ever read, which is not a thing to clear. */
      navBtn('trends', 'trends', 'Trends', '') +
      /* v6.3 — NEW BRIEF SITS AT THE FOOT OF THE ICON SET, under the four
         destinations rather than above them. It is a create action, taken least
         often; the morning's screens come first and it waits below the last of
         them, still visible from every view. */
      '<button class="btn btn--ghost newbrief" data-act="newbrief"' +
      (state.view === 'newbrief' ? ' aria-current="page"' : '') + '>' +
      U.icon('plus') + '<span class="tx">New brief</span></button>' +
      /* v5.5 — SOURCES IS NO LONGER A DESTINATION. It was a settings screen with
         a permanent seat in the rail, one row below the four screens that are
         the actual job — and nobody visits it twice a quarter. It is a section
         of Admin now, which is where every other "how is this thing configured"
         answer already lives. See adminView. */
      '</div>' +

      /* v5.5b — THE FOOT IS SETTINGS AND SELF: Admin, the account, the width.
         Admin sat fifth in the main group, under the four screens that are the
         morning's work, which put a settings page in the list of jobs. Grouping
         it with the identity and the width control says what it is by where it
         is — the same argument that moved Sources into Admin in the first place,
         one level up. */
      '<div class="railfoot">' +
      (who.admin ? navBtn('admin', 'admin', 'Admin', '') : '') +

      /* One account control, not two. The rail already carried the identity at
         the bottom and the top bar carried a second avatar that did the same
         job — so the identity is now the control, where it already was. */
      '<div class="acct acct--rail">' +
      '<button class="whoami" data-act="menu" aria-expanded="' + state.menu + '" aria-haspopup="true"' +
      /* v6 P1 — the account control's visible label (`.who`) is display:none in
         the collapsed rail, which left the button nameless to a screen reader.
         The name is the accessible name in both states; in the wide rail it also
         shows, so label-in-name holds. */
      ' aria-label="' + esc(who.name) + '">' +
      /* v5.5c — no field behind it. `.ini` is the AVATAR component: a lilac tile
         standing in for a picture. With a glyph in it there is no picture being
         stood in for, so the tile was a coloured chip sitting directly under the
         unchipped Admin gear — two controls in the same group, drawn as two
         different kinds of thing for no reason. It is a plain icon now, at the
         gear's size and colour. */
      '<span class="whoami-ic">' + U.icon('user') + '</span>' +
      '<span class="who"><b>' + esc(who.name) + '</b><span>' + esc(who.email) + '</span></span>' +
      '</button>' +
      (state.menu ? acctMenu(who, dark) : '') +
      '</div>' +
      /* Warhol is the engine. Strategy documents and a footer (§4.6). */
      '<p class="engineft">Warhol engine ' + DOT + ' Paradium</p>' +

      /* v5.5b — THE WIDTH CONTROL SITS LAST, under the account. It was in the
         brand row, which put a piece of window chrome at the top of the rail
         beside the product's own mark — the loudest position in the column, for
         the control you press twice a month. Last is where a preference goes,
         and it is also last in the tab order, which is the same statement made
         to a keyboard. A bare chevron: the direction IS the label, and the
         accessible name carries the rest. */
      '<button class="railtog" data-act="railtog" aria-pressed="' + wide + '"' +
      ' aria-label="' + (wide ? 'Collapse the sidebar' : 'Expand the sidebar') + '">' +
      U.icon(wide ? 'back' : 'fwd') +
      '<span class="tx">' + (wide ? 'Collapse' : 'Expand') + '</span></button>' +
      '</div>' +
      '</nav>';
  }

  function navBtn(view, ic, label, n, nWhat) {
    var on = state.view === view ||
      (view === 'drop' && state.view === 'report' && state.from === 'drop') ||
      (view === 'watchlist' && state.view === 'report' && state.from === 'watchlist') ||
      (view === 'passed' && state.view === 'report' && state.from === 'passed') ||
      (view === 'promoted' && state.view === 'report' && state.from === 'promoted');
    return '<button class="rnav" data-act="view" data-view="' + view + '"' +
      (on ? ' aria-current="page"' : '') + '>' +
      '<span class="ic">' + U.icon(ic) + '</span><span class="tx">' + esc(label) + '</span>' +
      (n ? '<span class="pill"' + (nWhat ? ' title="' + esc(n) + ' ' + esc(nWhat) + '"' : '') + '>' +
        '<span class="sr-only">, </span>' + esc(n) +
        (nWhat ? '<span class="sr-only"> ' + esc(nWhat) + '</span>' : '') + '</span>' : '') + '</button>';
  }

  /* --------------------------------------------------------- the top bar, cut
     v5.5 — `Scout / The report` ran across the top of every screen and cost
     ~44px of the first viewport everywhere, permanently. It was a two-level
     crumb in a two-level application: the first level is the wordmark, which is
     already at the top of the rail, and the second is the current view, which
     the rail already marks with aria-current AND names in the h1 immediately
     below it. So the row was the page title, said a third time, smaller.

     Its one real job was going back — and every screen that needs that has its
     own return: the report and the outreach package carry a labelled button
     naming where they came from, which the crumb never did (it always went to
     the drop, even from the watchlist). Nothing was lost with it. */

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
      /* v5.6 — THE HELP SCREEN'S FRONT DOOR, and the reason it is here rather
         than in the rail: the rail is the four screens the morning is made of,
         and this is a reference. It sits above Sign out and below the
         preferences because it is the only thing in this menu that opens a
         page — a destination among settings, so it takes a divider rather than
         a heading. */
      '<button class="btn btn--soft btn--sm helpitem" data-act="help">' +
      U.icon('info') + 'How a score is built</button>' +
      '<button class="btn btn--ghost btn--sm out" data-act="signout">Sign out</button>' +
      /* v6.2 — RESET THE DEMO. Not a product control — a presenter's control, and
         the copy says which. Sign out keeps the session so a reload restores it;
         this wipes it. Every brief written on stage, every scan, every hand-added
         name lives in sessionStorage, so a clean start is one clear() away and
         the seed rebuilds the rest. Placed last and marked as its own kind of
         thing, because it is the one item in this menu that throws work away. */
      '<button class="btn btn--ghost btn--sm resetitem" data-act="resetdemo">' +
      U.icon('reset') + 'Reset the demo</button>' +
      '<p class="menunote">Clears every brief and name you added and returns to a clean sign-in. The daily drop is rebuilt from the seed.</p>' +
      '</div>';
  }

  /* ================================================================== DROP */
  /* v5.5 — the toolkit's empty-state mark, which is the one place a gradient is
     allowed to be purely a mood: a shape with no content in it. gr-duo is lilac
     into teal — judged into counted — and it goes on the three states where the
     drop has nothing to show, which are the states this product is least
     ashamed of and previously drew as a blank card with a sentence in it.
     Not on "Worked to zero": that panel is already a teal field, and a gradient
     on a field is two colour decisions arguing on one object. */
  /* v5.5c — the real mark replaces the gradient block. `gr-duo` was a stand-in
     for an illustration that did not exist: a rounded rectangle of colour above
     a sentence, which reads as a component that failed to load rather than as a
     considered empty state — and §6.11 spends a paragraph arguing that a thin
     day is the machine working, so this is the screen that can least afford to
     look broken. `onerror` puts the gradient block back. */
  var ZEROMARK = '<img class="zeromark" src="assets/scount_notes.png" alt="" aria-hidden="true" ' +
    'onerror="this.className=\'zeromark zeromark--gr gr-duo\'; this.removeAttribute(\'src\')">';

  /* ============================================================ THE LIVE SCAN */
  /* v5.6 — WHAT A FRESH BRIEF DOES WHILE IT WORKS.

     The screen a new brief landed on said "Scout is looking" and then showed
     nothing looking: a heading, two paragraphs, and a promise about tomorrow
     morning. It is the one moment in the product where the machine is
     genuinely working on something you just asked for, and it was the emptiest
     screen in the app. On stage it is worse than empty — it is the beat right
     after you type a brief in front of a room, and it hands them a page that
     says come back tomorrow.

     So the work is shown while it happens: names arrive one at a time, with
     what is being read for each one, and the count of places checked climbs.

     THE HARD RULE, and the reason this does not contradict §5.4 or the brief-
     is-not-a-search argument: NOTHING HERE IS JUDGED. No score, no ring, no
     gate, no verdict, no cleared/held-back. These are names being pulled and
     read, which is the honest description of what the ladder is doing in its
     first minute. The product's claim was never that it takes until tomorrow
     to FIND a name — it is that it takes until tomorrow to be willing to say
     something about one. That claim is intact, and it is stated on the screen
     rather than implied by an absence.

     A search would rank these. This one cannot even sort them: they arrive in
     the order the queue reached them, and the footer says so. */
  var SCAN_TICK = 950;   /* Slower than the replay's 240ms. The replay is
                            addresses scrolling past — texture. These are names
                            a person is expected to read, and one a second is
                            already faster than reading them. */
  var SCAN_ROWS = 9;     /* Enough to fill the screen without scrolling on a
                            projector. Past this the scan keeps running and the
                            counter keeps climbing; it just stops adding rows,
                            because a list that outgrows the screen during a
                            demo is a list nobody reads. */

  /* Which names a brief pulls. The pool is every creator in the seed, ranked by
     how much of the brief's own words the record answers to — so the car brief
     pulls car people and the football brief pulls football people, without
     anything here pretending to be the matcher the engine actually uses. It is
     a demo affordance and it is only allowed to choose ORDER. */
  var SCAN_STOP = { with: 1, that: 1, they: 1, this: 1, from: 1, have: 1, been: 1,
    their: 1, them: 1, what: 1, when: 1, where: 1, people: 1, someone: 1, anyone: 1,
    creators: 1, creator: 1, audience: 1, format: 1, camera: 1, video: 1, every: 1,
    same: 1, name: 1, nothing: 1, something: 1, worth: 1, call: 1, make: 1, makes: 1 };

  function scanRows(b) {
    var text = String((b && (b.description || '')) + ' ' + (b && b.name || '')).toLowerCase();
    var words = (text.match(/[a-z]{4,}/g) || []).filter(function (w) { return !SCAN_STOP[w]; });
    /* MATCHED ON THE MANDATE ONLY, never on the creator's own name or handle.
       Including the handle read as smarter and was worse: a car brief says
       "work on a machine", `@watchweswork` contains "work", and one coincidence
       of spelling put a 446k account above an 11M one at the top of the screen.
       The brief picks the cohort; audience orders it. */
    var ranked = (W.candidates || []).map(function (c) {
      var hay = String(c.mandateId || '').replace(/_/g, ' ').toLowerCase();
      var hits = 0;
      words.forEach(function (w) { if (hay.indexOf(w) >= 0) hits += 1; });
      return { c: c, hits: hits, aud: ((c.audience || {}).total) || 0 };
    });
    /* Audience breaks the tie rather than score, because score is a judgement
       and the whole point of this screen is that none has been made yet. */
    ranked.sort(function (x, y) { return (y.hits - x.hits) || (y.aud - x.aud); });
    /* A merged seed holds one record per (creator, brief) — deliberately, since
       the same person checked under two briefs is two different verdicts. On
       this screen that is one person, and a name arriving twice reads as the
       machine double-counting rather than as two honest records. */
    var seen = {}, out = [];
    ranked.forEach(function (r) {
      var k = String(r.c.handle || r.c.name || '').toLowerCase();
      if (seen[k] || out.length >= SCAN_ROWS) return;
      seen[k] = true; out.push(r.c);
    });
    return out;
  }

  /* Places checked, summed off the real check record rather than invented. A
     counter that ticks up on a timer with no observation behind it is the exact
     thing this product refuses to do everywhere else. */
  function scanPlaces(c) {
    var n = 0;
    (c.inventory || []).forEach(function (x) { n += (x.surfacesChecked || 0); });
    return n;
  }

  /* What is being read for the name that just arrived. Drawn from that
     creator's own inventory so the line names a real surface. */
  function scanReading(c) {
    var built = (c.inventory || []).filter(function (x) { return x.item; });
    var pick = built[Math.min(built.length - 1, 2)] || built[0];
    return pick ? 'reading for a ' + String(pick.item).toLowerCase() + '&hellip;' : 'reading their accounts&hellip;';
  }

  /* ======================================================== LIVE, FOR REAL
     v5.7 — the same screen, driven by the engine instead of the seed.

     Everything above this line ranks a fixed cohort by keyword. It shows real
     people with real numbers, but the MATCH is theatre: the brief chooses the
     order of a list that was decided days ago. Alex asked the right question
     about it — are these actually people who match what I typed — and the
     honest answer was no.

     When `bin/serve-live.js` is the server, this screen stops pretending. The
     brief is sent to the engine, one model call proposes names from those exact
     words, and the real ladder checks every one over real HTTP while you watch.

     THE FALLBACK IS NOT OPTIONAL. Served by anything else — plain http-server,
     file://, a machine with no key — `/api/health` fails and the seeded scan
     runs exactly as before. A demo that dies because a server was started from
     the wrong directory is not a demo, and the failure has to be silent enough
     that nobody in the room can tell which one they are watching. */
  var LIVE_LIMIT = 9;    /* Matched to SCAN_ROWS. Every proposed name is real
                            money and a real ladder, so asking for more than the
                            screen can hold is spending for nothing. */

  function scanLiveRow(d) {
    /* U.face wants `initials` and optionally `avatar`; a live row has neither
       until the ladder answers, so they are built here from the handle. */
    var n = String(d.name || d.handle || '').replace(/^@/, '');
    return {
      id: 'live_' + n, name: n, handle: d.handle || ('@' + n),
      initials: n.slice(0, 2).toUpperCase(),
      avatar: d.avatar || null,
      aud: d.audience || 0, places: d.places || 0,
      why: d.why || '', checked: false, error: null, live: true
    };
  }

  /* v5.8 — A SCAN IS WORK, AND WORK DOES NOT UNHAPPEN WHEN YOU LOOK AWAY.

     Until now a scan lived in one `state.scan` slot that go() dropped on every
     view change, and the screen restarted it on the render it reappeared in.
     Every trip to the watchlist and back re-ran the brief from zero: the names
     came in again one at a time, the counter went back to nought, and in live
     mode it was a second model call and a second real ladder — money spent to
     re-tell you something the engine had already said. Two new-brief tabs open
     at once could not both exist, because there was only one slot.

     The old note argued the reset was the honest option: a cleared timer left
     the screen claiming to be mid-flight, so dropping it beat resuming it. That
     was the right call about the wrong thing. The lie was never the resume — it
     was resuming a COUNTER, a step number that only moved because a timer moved
     it, so a timer that stopped left the number stranded. Fix the clock instead
     of the state: the seeded scan now derives where it is from wall time since
     it started, so it is correct at any moment it happens to be read, whether
     the tab was open the whole time or not. Come back after ten seconds and ten
     seconds have passed. Come back after a minute and it is finished, because
     it would have been.

     The live scan needs no such argument. The engine really is working while
     you are on another screen, so the stream stays open, keeps writing into its
     own record, and simply does not re-render anyone who is not watching. */
  function scanOf(id) { return state.scans[id] || null; }

  /* Which brief's scan the last render actually drew. A stream event or a tick
     that lands while you are on the watchlist must update the record and paint
     NOTHING — the point of keeping the work alive is that it never drags the
     view back to itself. */
  var scanShown = null;
  function paint(id) { if (scanShown === id) render(); }

  /* Scan timers are owned by the scan, not by the view, and so are deliberately
     NOT registered with later()/clearTimers(). That registry exists to kill
     view animations on navigation, which is exactly what must stop happening
     here. */
  function scanTimer(sc, fn, ms) {
    var t = setTimeout(fn, ms);
    sc.timers.push(t);
    return t;
  }
  function clearScanTimers(sc) {
    sc.timers.forEach(clearTimeout);
    sc.timers = [];
  }

  /* v6.2 — IS THERE AN ENGINE BEHIND THIS PAGE? ASKED ONCE, NOT PER BRIEF.

     Both halves have to be true — a server with no ANTHROPIC_API_KEY can serve
     the app but cannot propose a single name — and neither half is a fact about
     the brief. It is a fact about the server, so it is asked when the app boots
     and the answer is kept.

     It used to be asked inside startScan, racing a 2500ms timer that fell back
     to the seeded scan when it lost. That race is winnable in a way nothing on
     stage should depend on: a backgrounded tab does not run `fetch` promptly,
     so writing a brief in a window that had been left in the background lost
     the race, took the fallback, and drew the canned list — silently, because
     the fallback is designed to be silent. The one screen that is supposed to
     prove the engine is real is the one screen that must not quietly stop being
     live. Asked at boot, the answer is already in hand by the time anybody has
     finished typing a brief, and no scan has a race in it at all.

     `null` means not answered yet, which is a third state and not the same as
     no: a scan started in that window waits for the answer rather than assuming
     one. Timed out generously, because a slow yes is still a yes and the cost of
     a wrong no is the whole beat. */
  /* One token per page load. A live stream belongs to the page that opened it,
     and after a reload the record comes back with `es: null` — indistinguishable,
     by inspection alone, from one that is being opened right now. This tells the
     two apart by fact rather than by timing. */
  var PAGE = 'p' + Date.now() + Math.random().toString(36).slice(2, 7);

  var engineLive = null;
  var enginePending = null;
  function askEngine() {
    if (enginePending) return enginePending;
    enginePending = new Promise(function (resolve) {
      var settled = false;
      function answer(v) {
        if (settled) return;
        settled = true; engineLive = v; resolve(v);
      }
      var t = setTimeout(function () { answer(false); }, 10000);
      try {
        window.fetch('/api/health', { cache: 'no-store' })
          .then(function (r) { return r.ok ? r.json() : null; })
          .then(function (h) { clearTimeout(t); answer(!!(h && h.live && h.model)); })
          .catch(function () { clearTimeout(t); answer(false); });
      } catch (e) { clearTimeout(t); answer(false); }
    });
    return enginePending;
  }

  function startScan(b) {
    if (scanOf(b.id)) return;            // already running, or already finished
    var sc = { briefId: b.id, mode: 'probing', rows: [], step: 0, timers: [],
      es: null, phase: 'probing', checked: 0, slug: null, failed: null,
      startedAt: Date.now(), tickFrom: 0 };
    state.scans[b.id] = sc;

    /* Answered already, which is the ordinary case: straight into the right
       mode with nothing to wait for and nothing to race. */
    if (engineLive === true) { paint(b.id); startLiveScan(b); return; }
    if (engineLive === false) { paint(b.id); startSeededScan(b); return; }

    /* Still asking. The probing state is drawn while it settles. */
    paint(b.id);
    askEngine().then(function (live) {
      if (scanOf(b.id) !== sc || sc.mode !== 'probing') return;
      if (live) startLiveScan(b); else startSeededScan(b);
    });
  }

  function startLiveScan(b) {
    var sc = scanOf(b.id);
    if (!sc) return;

    /* THE STREAM IS OPENED BEFORE ANYTHING IS DRAWN, and the order is the whole
       of this fix. paint() runs a render, a render runs resumeScan, and
       resumeScan reads a live scan with no EventSource and no names as one
       abandoned by a page that no longer exists — so it threw it away and
       started another. Painting first meant it read that state on every single
       live scan, one microsecond after the mode was set and one before the
       stream existed: throw away, start again, throw away, start again. Each
       turn of it was a real model call and a real ladder over nine people.

       Nothing between `mode = 'live'` and `sc.es = es` may yield or paint. */
    var url = '/api/scan?limit=' + LIVE_LIMIT + '&text=' + encodeURIComponent(b.description || b.name);
    var es;
    try { es = new EventSource(url); } catch (e) { return startSeededScan(b); }
    sc.mode = 'live';
    sc.phase = 'proposing';
    sc.es = es;
    sc.page = PAGE;
    paint(b.id);

    var mine = function () { return scanOf(b.id) === sc && sc.es === es; };

    es.addEventListener('proposed', function (ev) {
      if (!mine()) return;
      var d = JSON.parse(ev.data);
      sc.slug = d.slug;
      sc.rows = (d.candidates || []).map(scanLiveRow);
      sc.step = sc.rows.length;   // they were proposed at once
      sc.phase = 'checking';
      persist(); paint(b.id);
    });

    es.addEventListener('checked', function (ev) {
      if (!mine()) return;
      var d = JSON.parse(ev.data);
      var key = String(d.handle || '').toLowerCase();
      sc.rows.forEach(function (r) {
        if (String(r.handle).toLowerCase() !== key) return;
        r.checked = true;
        r.error = d.error || null;
        r.aud = d.audience || 0;
        r.places = d.places || 0;
        if (d.avatar) r.avatar = d.avatar;
      });
      sc.checked = d.done || (sc.checked + 1);
      /* Written down as each one lands, not at the end: a reload halfway
         through a live run should keep the names the ladder actually read. */
      persist(); paint(b.id);
    });

    es.addEventListener('done', function () {
      if (!mine()) return;
      sc.phase = 'done';
      es.close(); sc.es = null;
      persist(); paint(b.id);
    });

    /* A named failure — no key, the model refused, a bad brief. Falls back to
       the seeded scan rather than showing a dead screen, and says nothing about
       it: on stage the recovery has to be invisible. */
    es.addEventListener('failed', function (ev) {
      if (!mine()) return;
      var why = '';
      try { why = (JSON.parse(ev.data) || {}).why || ''; } catch (e) { /* whatever it was */ }
      es.close(); sc.es = null;
      startSeededScan(b, why);
    });

    /* The unnamed one: the connection dropped. If names are already on screen
       the run genuinely happened, so it stops where it stopped rather than
       throwing away real work and replacing it with a canned list. */
    es.onerror = function () {
      if (!mine()) return;
      es.close(); sc.es = null;
      if (sc.rows.length) { sc.phase = 'done'; persist(); paint(b.id); }
      else startSeededScan(b, 'the connection to the engine dropped');
    };
  }

  function startSeededScan(b, why) {
    var sc = scanOf(b.id);
    if (!sc) return;
    if (sc.es) { try { sc.es.close(); } catch (e) { /* already gone */ } }
    clearScanTimers(sc);
    sc.mode = 'seed';
    sc.es = null;
    sc.rows = scanRows(b);
    sc.step = 0;
    sc.phase = 'checking';
    sc.checked = 0;
    sc.slug = null;
    sc.failed = why || null;
    /* The clock the row count is read off, rather than a step a timer pushes.
       600ms of nothing first, same as before — the beat where the screen is
       visibly about to do something. */
    sc.tickFrom = Date.now() + 600;
    if (!sc.rows.length) { sc.phase = 'done'; persist(); paint(b.id); return; }
    /* Reduced motion gets the finished list at once. The information is the
       names; the arrival is only how they get here. Same rule as the replay. */
    if (reduceMotion.matches) {
      sc.all = true; sc.step = sc.rows.length; sc.phase = 'done';
      persist(); paint(b.id); return;
    }
    persist();
    seedTick(b);   // paints
  }

  /* Where a seeded scan is RIGHT NOW, asked of the clock. Nothing accumulates,
     so nothing can be stranded by a timer that stopped or a tab that was hidden
     — and the browser throttling background timers, which it will, changes when
     the screen repaints and never what it says. */
  function seedStep(sc) {
    if (sc.all || reduceMotion.matches) return sc.rows.length;
    var n = Math.floor((Date.now() - sc.tickFrom) / SCAN_TICK) + 1;
    return Math.max(0, Math.min(sc.rows.length, n));
  }

  function seedTick(b) {
    var sc = scanOf(b.id);
    if (!sc || sc.mode !== 'seed') return;
    clearScanTimers(sc);
    sc.step = seedStep(sc);
    if (sc.step >= sc.rows.length) { sc.phase = 'done'; persist(); paint(b.id); return; }
    /* Aimed at the next row's own moment rather than a flat SCAN_TICK from now,
       so a resumed scan lands back on the beat it would have been on. Armed
       before the paint for the same reason the probe is — the render this
       triggers asks whether the scan still has a timer. */
    var due = sc.tickFrom + sc.step * SCAN_TICK - Date.now();
    scanTimer(sc, function () { seedTick(b); }, Math.max(50, due));
    paint(b.id);
  }

  /* Only for a scan that must genuinely end — the stream closed and the record
     thrown away, so the next open starts a new one. Navigation is not that. */
  function stopScan(id) {
    var sc = scanOf(id);
    if (!sc) return;
    clearScanTimers(sc);
    if (sc.es) { try { sc.es.close(); } catch (e) { /* already gone */ } }
    delete state.scans[id];
  }

  /* Called from the render the scan appears in. A record that is still mid-run
     but has no timer left — restored from sessionStorage, or interrupted before
     v5.8's timers were scan-owned — is put back on the clock here. */
  function resumeScan(b) {
    var sc = scanOf(b.id);
    if (!sc) { later(function () { if (brief(state.briefId).id === b.id) startScan(b); }, 0); return; }
    /* Restored from sessionStorage, which does not carry the rows. Same brief,
       same seed, same ranking — so the same nine names, in the same order. */
    if (sc.mode === 'seed' && !sc.rows) sc.rows = scanRows(b);
    if (sc.mode === 'seed' && sc.phase !== 'done' && !sc.timers.length) {
      later(function () { seedTick(b); }, 0);
    }
    /* A live stream cannot be re-attached: the engine's run ended with the page
       that was listening to it. Names already off the wire are real and stay;
       a live scan that never produced one starts over.

       ONLY FOR A SCAN FROM AN EARLIER PAGE. `sc.page !== PAGE` is the whole
       test. Without it this branch also fired on a scan being opened right now
       by this page — every live scan passes through a moment with a mode and no
       stream — and each firing threw away a run the engine had already been paid
       for and ordered another. This page's own live scan is never orphaned; if
       its stream closes, the handlers that closed it say so. */
    if (sc.mode === 'live' && !sc.es && sc.phase !== 'done' && sc.page !== PAGE) {
      if (sc.rows.length) sc.phase = 'done';
      else { stopScan(b.id); later(function () { if (brief(state.briefId).id === b.id) startScan(b); }, 0); }
    }
    /* A probe answers or gives up inside askEngine's 10s, so one still sitting
       there long after that belongs to a page that no longer exists — a restored
       session. Judged on age rather than on having a timer, because a probe
       spends its whole life with neither a timer nor an answer. */
    if (sc.mode === 'probing' && Date.now() - sc.startedAt > 14000) {
      stopScan(b.id);
      later(function () { if (brief(state.briefId).id === b.id) startScan(b); }, 0);
    }
  }

  /* `chips` is passed in rather than fetched, and it is placed BELOW the header
     here for the same reason it is on every other drop: the page says what it is
     about, then offers the tabs, then shows the list. The scan screen had the
     tabs first, so switching between a scanning brief and the drop moved the
     heading and the tab row past each other — the two things a reader uses to
     know where they are were the two things that jumped. Same order everywhere,
     and toggling between tabs now only changes what is under them. */
  function scanView(b, chips) {
    /* Deferred by a tick where it starts anything, so nothing calls render()
       from inside render(). */
    resumeScan(b);
    scanShown = b.id;
    var sc = scanOf(b.id) || { rows: [], step: 0, mode: 'probing', phase: 'probing' };
    if (sc.mode === 'seed') sc.step = seedStep(sc);
    var live = sc.mode === 'live';

    /* ONE SHAPE FOR BOTH SOURCES. The seeded scan holds candidate records and
       the live one holds rows off the wire; below this line the screen must not
       be able to tell which, or the two will drift and only one will be tested. */
    var cells;
    if (live) {
      cells = sc.rows.map(function (r) {
        return { c: r, name: r.name, handle: r.handle, aud: r.aud,
          working: !r.checked, error: r.error, places: r.places };
      });
    } else {
      var shown = sc.rows.slice(0, sc.step);
      var runningSeed = sc.step < sc.rows.length;
      cells = shown.map(function (c, i) {
        return { c: c, name: c.name, handle: c.handle, aud: ((c.audience || {}).total) || 0,
          working: i === shown.length - 1 && runningSeed, error: null, places: scanPlaces(c) };
      });
    }

    var places = 0, readCount = 0;
    cells.forEach(function (x) { places += x.places; if (!x.working) readCount += 1; });
    var working = cells.some(function (x) { return x.working; }) ||
      (live && sc.phase !== 'done') || (!live && sc.step < sc.rows.length);

    var head = '<header class="pagehead">' +
      '<h1><span class="scanpulse' + (working ? '' : ' scanpulse--done') + '" aria-hidden="true"></span>' +
      'Scout is looking.</h1>' +
      '<p class="deck">Reading the web for <b>' + esc(b.name) + '</b>. ' +
      'Names arrive as they are pulled &mdash; <b>none of them is judged yet</b>.</p>' +
      '</header>';

    /* In live mode "pulled" and "read" are two different numbers and the gap
       between them is the whole point: the model proposed nine names in one
       call, and the ladder is still working through them. Collapsing that into
       one figure would hide the only genuinely live thing on the screen. */
    var meter = '<div class="scanmeter" role="status" aria-live="polite">' +
      '<span class="scanfig"><b>' + cells.length + '</b> ' +
      (cells.length === 1 ? 'name' : 'names') + ' pulled</span>' +
      (live ? '<span class="sep">' + DOT + '</span>' +
        '<span class="scanfig"><b>' + readCount + '</b> read</span>' : '') +
      '<span class="sep">' + DOT + '</span>' +
      '<span class="scanfig"><b>' + U.num(places) + '</b> places checked</span>' +
      '<span class="sep">' + DOT + '</span>' +
      '<span class="scanfig scanfig--live' + (working ? '' : ' scanfig--rest') + '">' +
      (working ? (live && sc.phase === 'proposing' ? 'asking who might match' : 'still reading')
        : 'still looking') + '</span>' +
      (live ? '<span class="sep">' + DOT + '</span><span class="scanwire">live</span>' : '') +
      '</div>';

    /* The who-else board's presentation, one column shorter: it is the same
       claim — here is everybody we touched — minus the column that says what
       stopped them, because nothing has stopped anybody yet. */
    var list = cells.length
      ? '<div class="listwrap scanlist">' + cells.map(function (x) {
        var st = x.error
          /* Not styled as an error. A handle the model invented, or a person
             behind a wall, is the normal condition of a discovery step nothing
             has verified — §11.1 — and dressing it in red would claim the
             machine broke when what it actually did was fail to find somebody. */
          ? 'nothing readable at this handle'
          : x.working
            ? '<span class="vmark vmark--wait"></span>' +
              (live ? 'reading their accounts&hellip;' : scanReading(x.c))
            : U.num(x.places) + ' places ' + DOT + ' not judged yet';
        return '<div class="prow scanrow' + (x.working ? ' scanrow--new' : '') + '">' +
          U.face(x.c, 'sm') +
          /* The spaces around the separators are load-bearing. Without them the
             name, the handle and the audience are one unbroken token — the
             middle dot is not a break opportunity — so on a narrow screen the
             line cannot wrap and the audience is simply clipped off the row. */
          '<div class="pmain"><span class="pline"><b>' + esc(x.name) + '</b>' +
          ' <span class="sep">' + DOT + '</span> ' + esc(x.handle) +
          (x.aud ? ' <span class="sep">' + DOT + '</span> ' + U.followers(x.aud) : '') +
          '</span></div>' +
          '<span class="scanst">' + st + '</span>' +
          '</div>';
      }).join('') + '</div>'
      : '<div class="listwrap scanlist scanlist--empty"><p class="scanwait">' +
        '<span class="vmark vmark--wait"></span>' +
        (live && sc.phase === 'proposing'
          ? 'Asking the model who might match&hellip;'
          : 'Opening the first accounts&hellip;') + '</p></div>';

    /* TWO FOOTERS, BECAUSE THE TWO MODES ARE MAKING DIFFERENT CLAIMS.

       Seeded: the promise the old screen made, kept word for word. The ladder
       really does run overnight for a standing brief, and this list is a
       stand-in for its first minute.

       Live: the ladder is running RIGHT NOW, so "first judged names tomorrow
       morning" would be a straight lie — the verdicts exist within the minute.
       What is true instead is that this endpoint does not send them, and why. */
    var foot = live
      ? '<div class="p p--teal mt-5 scanfoot">' +
        '<span class="kick">Running now</span>' +
        '<h3>These are pulled, not picked.</h3>' +
        '<p>One model call proposed these names from the words you wrote, and the ladder is ' +
        'reading every one of them as you watch &mdash; the same ladder, against the same web, ' +
        'that a standing brief runs overnight. <b>Nothing has checked that a handle belongs to the ' +
        'person the model meant</b>, which is why every one of them is marked proposed and why ' +
        'no score is shown here.</p>' +
        '</div>'
      : '<div class="p p--teal mt-5 scanfoot">' +
        '<span class="kick">Scout keeps going</span>' +
        '<h3>These are pulled, not picked.</h3>' +
        '<p>They arrive in the order the queue reached them, so this is not a ranking &mdash; it is who ' +
        'Scout has opened so far. Each one still has to go all the way down the ladder, and that runs ' +
        'overnight. <b>First judged names tomorrow morning</b>, and every morning after until you ' +
        'pause it.</p></div>';

    return head + (chips || '') + meter + list + foot;
  }

  function dropView() {
    var b = brief(state.briefId);
    var list = dropList(b);
    var left = list.left || {};
    var done = list.length - remaining();

    /* THE JANUARY 2024 REWIND IS GONE. Signing in lands on today's drop.

       It was justified by decision 33 — a new member's scan takes overnight, so
       do not hand them an empty app. v3 deleted the wizard, decision 89 deleted
       the Scout/Spotter split, and the house brief now ships populated, so every
       premise it rested on had been removed underneath it and nobody pulled the
       feature back out. What finally decided it: nobody could tell what the
       screen was for. The "if Scout had existed two years ago" argument moves
       out of the product and into the pitch, where it does not have to be a
       mode. */
    var lens = '';

    /* v5.4 — MEASURED: 477px of chrome sat above the first card in a 676px
       content area, so the front door opened on no creators at all — seven
       tenths of the first screen was header. The second sentence went first
       because it was the least load-bearing thing in it: "enough on each card to
       kill it without opening" is a claim ABOUT the cards, made above the cards,
       to someone who can see the cards. */
    /* C — THE RUN JOINS THE COUNT ON ONE LINE. It was its own two-line banner
       under the tab note, which made three stacked blocks of standing context
       above a list of eight. The count and the run answer the same question —
       where did these eight come from — so they are one sentence, and only the
       clock time earns space on it. The rest (creators looked at, checks, minutes,
       spend, bar, cap, next run) goes behind the `?`, which is the receipts
       popover this product already uses everywhere else: those numbers ARE
       receipts, so they get the mechanism built for receipts rather than a new
       tooltip nobody else on the screen uses. */
    var lr = S.lastRun;
    /* v5.5 — THE DROP HEAD IS BACK TO WHITE (Alex, same day it went butter).
       The field version was semantically defensible — butter is attention and
       the unworked drop is the one queue in the product — but a full-width
       pigment slab is the single loudest object on the front door, and it was
       shouting a fact the h1 and the count already state calmly. The palette
       earns its place where it separates KINDS of claim from each other: the
       report's four bands, Admin's two knobs, counted-versus-judged on the
       outreach package. A page title has nothing to be distinguished from. */
    var head = '<header class="pagehead">' +
      '<h1>Today&rsquo;s drop</h1>' +
      /* `deck--wide`: the count and the run are ONE sentence on ONE line. `.deck`
         caps at 64ch, which is a measure tuned for the paragraph decks on Admin
         and the watchlist — here it broke a nine-word claim away from the
         timestamp that qualifies it, so the screen opened with two short lines
         that read as two separate statements. The cap is right for prose and
         wrong for a status line; this one is a status line. */
      /* The tracked tab gets its own sentence. "Cleared the bar" is a claim
         about a gate that deliberately did not run here, and printing it over
         a hand-picked list would be the one kind of lie this product cannot
         afford: a true-sounding sentence about how a name got on screen. */
      '<p class="deck deck--wide">' + (b.tracked
        ? U.plural(list.length, 'name') + ' you looked up yourself. No bar applied.'
        : list.length
        ? U.plural(list.length, 'creator') + ' cleared the bar for <b>' + esc(b.name) + '</b>.'
        : 'Nothing cleared the bar for <b>' + esc(b.name) + '</b> today.') +
      (lr ? '<span class="deck-run">' + U.icon('run') +
        'Last run ' + esc(U.clockZone(lr.finished)) + ', ' +
        esc(U.shortDate(lr.finished)) + U.rcp('lastrun', '', 'the last run') + '</span>' : '') +
      (list.length ? '<button class="keyhint" data-act="keys">Shortcuts</button>' : '') +
      '</p>' + '</header>';

    var chips = briefTabs(b);

    if (isPaused(b)) {
      return lens + head + chips + '<section class="p zero">' + ZEROMARK +
        '<h2>This brief is paused.</h2>' +
        '<p>Nothing new arrives while it is paused. Every decision you made under it is still here.</p>' +
        '<p><button class="btn btn--primary" data-act="resume" data-b="' + esc(b.id) + '">Resume this brief</button></p>' +
        '</section>';
    }

    if (b.fresh) {
      /* v5.6 — was a static "Scout is looking" with nothing looking. The
         promise it made survives verbatim inside scanView's footer; what
         changed is that the screen now shows the work it is describing.
         `chips` stays: the brief tabs are how you get back to the house drop
         while this one is still warming up. They are handed to scanView so it
         can put them under its own header, in the order every other drop uses. */
      return lens + scanView(b, chips);
    }

    if (!list.length) {
      /* "Scout found nothing worth your time today" is a feature. A fixed daily
         ten forces filler on thin days and quietly teaches you the list is
         arbitrary (§5.4). The argument attaches on the empty day (§6.11). */
      return lens + head + chips + '<section class="p zero">' + ZEROMARK +
        '<h2>Scout found nothing worth your time today.</h2>' +
        '<p>' + left.pool + ' people were looked at. ' +
        (left.wrongFit ? left.wrongFit + ' did not match the brief. ' : '') +
        (left.unjudged ? left.unjudged + ' could not be judged against it — no model ran. ' : '') +
        (left.fading ? left.fading + ' were fading, not rising. ' : '') +
        (left.below ? left.below + ' scored under ' + state.admin.threshold + '. ' : '') +
        (left.thin ? left.thin + ' were too thin to argue from. ' : '') +
        '</p>' +
        '</section>' +
        /* The empty day carries the same receipt as a full one: the names that
           went through the ladder and the gate that stopped each. Without it the
           screen asserts "nothing worth your time" with no evidence it looked. */
        whoElse(b);
    }

    /* v5.4 — THE DROP IS OUTPUT, NOT A PAGE. Every number here is measured (see
       S.lastRun). It sits above the progress strip because it is about how the
       list got here, and the strip is about what you have done with it since. */
    /* The clock time is stated as a DATE AND TIME, not as "this morning" —
       naming the part of the day is the reader's job, not a paraphrase this
       line gets to make, in the one place on the screen whose entire job is to
       be a verifiable fact about when the work happened. v5.7 finishes the
       thought: "11:50" was still half a fact, so the meridiem and the zone are
       printed with it (see U.clockZone). */
    /* v5.4 — THE WORKED STRIP IS GONE, and the bar and cap moved in here.

       Worked showed a filled track of decisions-made-out-of-eight. Alex could
       not say what it was for, which is the finding: the sidebar badge already
       counts what is left to decide, "Worked to zero" already fires when the
       list is finished, and a progress bar over eight rows measures something
       you can see by looking at the eight rows. A bar that fills as you work is
       a completion metaphor, and this product's whole argument is that a thin
       day is a good day — so rewarding you for emptying the list was arguing
       against the drop cap two lines below it.

       `bar at 25 · capped at 10` was the one thing in that strip worth keeping,
       and it belongs here rather than there: it is a fact about how the list was
       SELECTED, which is what this line is, not about what you have done since. */
    var runbar = '';
    var progress = '';

    var rows = list.map(function (c, i) {
      var d = decisionFor(c.id);
      return d ? decidedRow(c, d) : card(c, i + 1, b);
    }).join('');

    /* What the gates left out, stated rather than implied. Trajectory and the
       confidence floor are named too — they used to reject people silently,
       which made this line an incomplete account of the same arithmetic. */
    var leftParts = [
      left.below ? left.below + ' scored under ' + state.admin.threshold : '',
      left.wrongFit ? left.wrongFit + ' did not match the brief' : '',
      left.unjudged ? left.unjudged + ' could not be judged against it — no model ran' : '',
      left.fading ? left.fading + ' were fading, not rising' : '',
      left.thin ? left.thin + ' were too thin to argue from' : ''
    ].filter(Boolean);
    var below = leftParts.length ? '<p class="leftout">' +
      'Also looked at: ' + leftParts.join(', ') + '.</p>' : '';

    below += whoElse(b);

    /* v7 — THE END OF THE DAY GOES WHERE THE DAY STARTS. This panel sat under
       the list and under "Also looked at", so the moment the work was done it
       was a scroll away. It leads now, and says what the day came to and what
       is due next, so "done" has somewhere to go. */
    var done0 = '';
    if (list.length && remaining() === 0) {
      var tally = { promote: 0, watch: 0, pass: 0 };
      list.forEach(function (c) { var d = decisionFor(c.id); if (d) tally[d.verb]++; });
      var parts = [
        tally.promote ? tally.promote + ' promoted' : '',
        tally.watch ? tally.watch + ' watched' : '',
        tally.pass ? tally.pass + ' passed' : ''
      ].filter(Boolean);
      var due = watchlist().filter(function (c) {
        var a = S.V13[c.id] || {}, d = decisionFor(c.id);
        var win = (d && d.window) || a.window || '1 month';
        var span = win === '3 months' ? 90 : win === '2 months' ? 60 : 30;
        return span - U.daysBetween(c.watchedSince || asOf(), asOf()) <= 7;
      }).length;
      done0 = '<div class="p p--teal zero donepanel">' +
        '<h2>Worked to zero.</h2>' +
        '<p>' + esc(parts.join(', ')) + '. Next drop ' + U.clockZone(S.lastRun ? S.lastRun.next : '06:00') + '.</p>' +
        '<p class="doneacts">' +
        (tally.promote ? '<button class="btn btn--sm btn--out" data-act="view" data-view="promoted">Promoted</button>' : '') +
        (due ? '<button class="btn btn--sm btn--out" data-act="view" data-view="watchlist">' +
          U.plural(due, 'name') + ' due on the watchlist this week</button>' : '') +
        '</p></div>';
    }

    return lens + head + chips + runbar + progress + done0 +
      '<div class="listwrap">' + rows + '</div>' + below;
  }

  /* v5.9 — WHEN HALF THE DROP LEADS WITH AN ABSENCE, SAY WHOSE ABSENCE IT IS.
     Five of ten rows read "no purchase intent we could read" because Reddit is
     switched off in Admin, three clicks away, and nothing on this screen joined
     the two. The reader concludes the cohort is dry, or that Scout is. The line
     states the fact and points at the switch; it does not argue for itself. */
  function sourceGapNote(list) {
    var unread = (list || []).filter(function (c) {
      return S.claims(c).demand.unread;
    }).length;
    if (!unread) return '';
    var off = SOURCES.filter(function (s) {
      return !sourceOn(s) && /Demand/.test(s.costs || '');
    }).map(function (s) { return s.name; });
    if (!off.length) return '';
    return '<p class="srcgap">' + U.icon('sources') +
      '<span>' + esc(off.join(' and ')) + ' ' + (off.length > 1 ? 'are' : 'is') + ' off, so ' +
      'Demand could not be read for ' + unread + ' of these ' + list.length + '. ' +
      '<button class="lnk" data-act="view" data-view="admin">Turn it on in Admin</button></span></p>';
  }

  /* Briefs are tabs, and they are parallel: the house brief first, then each
     brief you have written, then + New brief. There is no All view — the
     population is the sum of every brief ever written, so "All" would be a pile
     whose contents are an accident of who wrote what, and Fit is per brief, so a
     creator outside any brief has no gate and no honest score (§6.1). */
  function briefTabs(b) {
    /* B + D — THE STANDING CONTEXT COLLAPSES BEHIND ONE ICON, NEXT TO THE TAB
       IT DESCRIBES.

       Two blocks sat permanently above the list: the brief's description (three
       lines) and the first-look caveat (two). Both are reference — true all day,
       identical every day, read once and then scanned past forever — and between
       them they pushed the first creator off the first screen. That is the wrong
       trade for a screen whose job is eight names.

       They are ONE block now, because they answer one question: what am I
       looking at. Default closed. The toggle sits immediately after the ACTIVE
       chip rather than at the end of the row, so it is adjacent to the thing it
       explains and it moves when you change tabs — in a row that scrolls, an
       icon parked at the end would scroll out of reach of the tab it belongs to.

       D asked whether the caveat needs to be here at all. It does, but not on
       the front door: decision 113's requirement is that a first look SAYS so,
       and it still does — on the report's trajectory row, on the card whenever
       the condition is not universal, and here, one click away. What decision
       113 forbids is a screen implying a trend it has not measured. Nothing here
       implies one; it simply no longer volunteers the disclaimer daily. */
    var info = state.briefInfo;
    /* The ⓘ read as a loose icon floating between two tabs. It is not a peer of
       the tabs — it belongs TO the active one — so it is now joined to it: one
       group, one outline, flat corners where they meet, and the icon inherits
       the active chip's ink. A split button rather than a neighbour. The two
       stay separate <button>s because a button inside a button is invalid and
       unreachable by keyboard; only the shape is shared. */
    var chips = allBriefs().map(function (x) {
      var on = state.briefId === x.id;
      /* Through dropList, not S.dropFor — the tracked tab is not gated and has
         no cohort in the seed, so asking the seed layer for its count returns
         the house brief's ten. A badge that disagrees with the list under it is
         the same defect class as the threshold's copies: both render perfectly
         and only one of them is true. */
      var n = isPaused(x) ? '' : String(dropList(x).length);
      var chip = '<button class="vchip' + (x.house ? ' vchip--house' : '') +
        (on ? ' vchip--joined' : '') +
        (isPaused(x) ? ' vchip--paused' : '') + '" data-act="brief" data-b="' + x.id +
        '" aria-pressed="' + on + '">' + esc(x.name) +
        (isPaused(x) ? '<span class="c">paused</span>' : '<span class="c">' + n + '</span>') +
        '</button>';
      if (!on) return chip;
      /* v5.5 — A CHEVRON, NOT AN ⓘ. Two problems with the info glyph and only
         one of them was contrast. An ⓘ says "there is an explanation here" and
         gives no clue what pressing it does — where a chevron is the one control
         everybody already reads as "this opens and it closes", and rotating it
         180° reports the state without needing a second treatment. Which is the
         other half of the fix: `on` used to darken an already-dark tile, so the
         active state was a barely-legible icon on ink. The rotation carries it
         now and the tile stops changing colour. */
      return '<span class="vgroup">' + chip +
        '<button class="briefinfo' + (info ? ' on' : '') + '" data-act="briefinfo"' +
        ' aria-expanded="' + info + '" aria-controls="tabnote"' +
        ' aria-label="What this brief is">' + U.icon('chev') + '</button></span>';
    }).join('');

    /* The row is cut off at the panel edge, and the FADE says so — driven by
       measured scroll position (`syncTabs`), so it never appears on a row that
       fits.

       v5.5 — THE TWO SCROLL ARROWS ARE GONE. They were added on the argument
       that the fade says "there is more" and an arrow says "you can do something
       about it", which is true and still cost more than it bought: two floating
       discs parked ON TOP of the first and last chip, overlapping the selected
       tab at the left edge, for a horizontal row every trackpad, wheel and touch
       surface already scrolls. They were `tabindex="-1"` precisely because a
       keyboard user does not need them — which is the tell that the affordance
       was for a problem the platform had already solved. */
    return '<div class="viewswrap" id="viewswrap">' +
      '<div class="views" id="views">' + chips +
      '<button class="vchip vchip--new" data-act="newbrief">' + U.icon('plus') + 'New brief</button>' +
      '</div>' +
      '</div>' +
      (info ? briefNote(b) : '');
  }

  function briefNote(b) {
    b = b || brief(state.briefId);
    return '<div class="tabnote" id="tabnote">' +
      /* v5.5c — a close, on the note itself. The chevron on the tab opens it and
         closes it, which is correct and is 500px away by the time you have read
         to the end — so the one place you are looking when you are done with it
         had no way to be done with it. Same `briefinfo` action, so there is one
         piece of state and the chevron stays in sync by construction. */
      '<button class="tabnote-x" data-act="briefinfo" aria-label="Hide what this brief is">' +
      U.icon('close') + '</button>' +
      /* The house brief's words were hardcoded HERE as well as in the brief
         record, so correcting the record left the old text on screen — a third
         copy of the sentence that caused §5.4c. It now reads its own brief like
         every other tab, and only the "nobody wrote it" clause is fixed copy. */
      /* v5.4 — the house tab reads `screenText`, not `description`. `description`
         is the judge's field and it states the GATE; printing it here explained a
         list of eight with the half of the definition that did not select them.
         The `?` is the third thing: worth the call was named on this screen and
         defined nowhere in the product, so a room formed its own idea of it and
         judged the eight names against that. Receipts, not a definition
         (decision 77) — it answers with this brief's own arithmetic. */
      /* The tracked tab has no description because nobody wrote one — it is
         not a brief, it is a list of choices. "See what it is made of" would
         offer to open a brief that does not exist. */
      (b.tracked
        ? '<p>' + esc(b.note) + '</p>'
        : b.house
        ? '<p>' +
          esc(b.screenText || b.description) +
          ' ' + U.rcp('worthacall', '', 'what worth a call means') + '</p>'
        : '<p>' + esc(b.description) +
          ' <button class="lnk" data-act="editbrief" data-b="' + esc(b.id) + '">See what it is made of</button></p>') +
      /* v6.3 — the note is just the brief now: the "first look, no trend yet"
         caveat moved off it. The Scout sits at the right, reading it. */
      '<img class="tabnote-fig" src="assets/scount_notes.png" alt="" aria-hidden="true" ' +
      'onerror="this.remove()">' +
      '</div>';
  }

  /* v5.3 — THE PLATFORM THE AUDIENCE NUMBER CAME FROM.
     The card used platforms[0], which is whichever surface the engine happened
     to read first. Brett Kollmann is 41k on TikTok and 459k on YouTube, and
     `audience.total` is 459k because the TikTok is marked `separate` and is not
     added in. So the lead card of the whole demo showed "TikTok profile · 41k"
     beside a score built on the 459k channel — the smaller of his two accounts,
     under a number derived from the other one.

     Picking the largest keeps the headline consistent with audience.total,
     which is the figure every gate and every sentence downstream already uses.
     A card whose count disagrees with its own score is worse than no count. */
  /* v5.3 — WHO PUT THIS NAME HERE.
     The engine tags a handle `proposed` when a model suggested it and nothing
     has checked that it belongs to the person the model meant — its own README
     calls person verification "the next wall and it is not built". Both live
     briefs are 100% machine-proposed. The record has carried this field all
     along and no screen printed it, which means the demo was silently claiming
     more than the engine does. It is a statement of provenance, so it sits with
     the handle rather than near the score. */
  /* v6.2 — WHERE A NAME CAME FROM IS A FACT ABOUT (PERSON, BRIEF), NOT ABOUT
     THE PERSON. The seed carries one record per pair and `source` is per pair,
     but the tracked tab has no seed record of its own: it re-uses whichever
     record the person already has, and for somebody the engine first met under
     a machine-proposed brief that record says `proposed`.

     So a handle typed in by hand came back onto the drop wearing the tag that
     exists to say a model, not a person, produced it — on the one tab where
     that is certainly untrue. The tab is the provenance here, and it does not
     need a tag: `b_tracked` is the list of names somebody typed. */
  function proposedTag(c, b) {
    if (c.source !== 'proposed') return '';
    if (b && b.tracked) return '';
    return '<span class="proposedtag" title="A model suggested this handle. ' +
      'Nothing has verified it belongs to the person the model meant.">proposed</span>';
  }

  function mainPlatform(c) {
    var list = (c.platforms || []).filter(function (p) { return p && p.followers; });
    if (!list.length) return { name: c.primaryPlatform, followers: (c.audience || {}).total };
    return list.reduce(function (best, p) { return p.followers > best.followers ? p : best; });
  }

  /* v5.3 — WHO ELSE WAS LOOKED AT, AND WHAT STOPPED THEM.
     The counts above say how many. This says who, and why each one — which is
     the difference between a claim and a receipt, and the reason the engine
     prints this same board on every run.

     THREE THINGS IT DELIBERATELY DOES NOT DO:

     · No avatars, no account links on these rows (Alex's call). The people who
       cleared are worth a face; the people who did not are a working record,
       and giving a rejected creator a portrait and a link makes the list read
       as a directory of people we are recommending against.
     · No colour on the score. These are not ranked candidates and a red number
       would read as a verdict on the person rather than on a gate.
     · The reason is the gate's OWN sentence, never a summary of it. Every time
       this product has restated a machine's words in its own voice it has
       drifted from them — the "we looked in N places" count did exactly that
       in v5.1 and the two disagreed for a week before anyone opened one. */
  function whoElse(b) {
    /* Nothing was rejected on the tracked tab, because nothing was gated. It
       was rendering the HOUSE brief's 66 rejects under a list of two names
       somebody typed — "who else was looked at" answered about a question this
       tab never asked. */
    if (b && b.tracked) return '';
    var rejected = S.rejectedFor(asOf(), b, state.admin.threshold);
    if (!rejected.length) return '';

    /* v5.9 — SAY IT ONCE. Every under-the-bar row printed the same fifteen-word
       sentence — 33 identical cells — which tripled the height of this table and
       buried the rows the subtitle promises are the interesting ones. The rule
       goes above the table; the cell carries only what is particular to the row.
       Gate rejections sort to the top for the same reason. */
    var barWords = /below the bar/i;
    var isBar = function (r) {
      var w = r.failed.length && r.failed[0].why ? r.failed[0].why : '';
      return r.failed.length === 1 && r.failed[0].key === 'score' && barWords.test(w);
    };
    rejected = rejected.slice().sort(function (x, y) {
      return (isBar(x) ? 1 : 0) - (isBar(y) ? 1 : 0);
    });

    var rows = rejected.map(function (r) {
      var c = r.creator;
      var plat = mainPlatform(c);
      /* An unreadable account has no follower count, and printing a bare 0
         claims we read it and found nobody. Say which it was. */
      var aud = plat && plat.followers
        ? U.followers(plat.followers)
        : '<span class="wex-none">couldn&rsquo;t read</span>';
      /* The bar sentence is now stated once above the table, so the cell takes
         the first failed gate that is NOT the score. A row that failed only the
         score says "under the bar" and nothing else. */
      var told = r.failed.filter(function (g) { return g.key !== 'score' && g.why; })[0];
      var why = told ? told.why : '';

      return '<tr>' +
        '<td class="wex-nm">' + esc(c.handle || c.name) + proposedTag(c) + '</td>' +
        '<td class="wex-num">' + r.score + '</td>' +
        '<td class="wex-num">' + Math.round((c.confidence || 0) * 100) + '%</td>' +
        '<td class="wex-num">' + aud + '</td>' +
        '<td class="wex-stop">' + (isBar(r) ? 'under the bar' : esc(r.words.join(', '))) +
        (why ? '<span class="wex-why">' + esc(why) + '</span>' : '') +
        '</td></tr>';
    }).join('');

    /* v5.4 — MEASURED: this board ran 1,817px to 6,329px on the drop page. The
       list of people Scout did NOT pick was 4.5x the size of the list it did,
       and it was reached by scrolling rather than by choosing — so the page's
       centre of gravity was its own rejections, and the eight names the product
       exists to deliver were a preamble to them.

       It is behind a disclosure now, not deleted and not moved: it is the most
       checkable thing in the product and the whole argument for trusting the
       eight. What changes is that opening it is a decision. The summary line
       above it still states the counts unprompted, so nothing is hidden — you
       are told what was rejected and offered the evidence, which is the same
       shape as every claim on the report. */
    return '<section class="whoelse">' +
      disclosure('whoelse', 'Who else was looked at, and what stopped them',
        U.plural(rejected.length, 'name') + ', with the gate&rsquo;s own words',
        '<p class="wex-sub">Every name that went through the full ladder for this brief. ' +
        'Unless a gate is named, the score was under the bar of ' + state.admin.threshold + '.</p>' +
        '<div class="wex-scroll"><table class="wex">' +
        '<thead><tr><th>Creator</th><th class="wex-num">Score</th><th class="wex-num">Confidence</th>' +
        '<th class="wex-num">Audience</th><th>What stopped them</th></tr></thead>' +
        '<tbody>' + rows + '</tbody></table></div>') +
      '</section>';
  }

  /* ------------------------------------------------------------- the card */
  /* Capitalises a fragment written to follow an em-dash. Deliberately only the
     first character — title-casing would wreck "@handle" and "YouTube". */
  function sentence(s) {
    s = String(s || '');
    return s.charAt(0).toUpperCase() + s.slice(1);
  }

  /* The measured cost of taking one creator through the full ladder:
     $4.7645 across 83 creators in engine/data/costs.jsonl, re-read 7 Aug 2026.
     Every price the interface quotes derives from this one number, so
     re-measuring the engine moves the brief estimate and the admin ledger
     together. */
  var PER_CREATOR = 0.0574;

  /* v5.4 — the signals half of the outreach package, built from the record when
     the seed carries none. Every line here is a sentence the card or the report
     already prints, so assembling them adds no claim that was not already made
     and checked. Absences first: they are what the call is about. */
  function signalBullets(c) {
    var cl = S.claims(c), out = [];
    var gone = (cl.missing.built || []).filter(function (r) { return r.state === S.STATES.A; });
    gone.slice(0, 4).forEach(function (r) {
      out.push({ state: S.STATES.A,
        text: 'No ' + String(r.item).toLowerCase() + ' \u2014 we looked in ' + S.lookedIn(c, r).places + ' places' });
    });
    if (!cl.demand.unread) out.push({ state: S.STATES.P, text: cl.demand.line + ', ' + cl.demand.window });
    (cl.pressure.lines || []).forEach(function (l) {
      if (l.kind !== 'none' && out.length < 7) {
        out.push({ state: S.STATES.P, text: l.text + (l.when ? ' (' + l.when + ')' : '') });
      }
    });
    var plat = mainPlatform(c);
    if (plat && plat.followers) {
      out.push({ state: S.STATES.P,
        text: U.followers(plat.followers) + ' on ' + String(plat.name).replace(/ (profile|channel)$/i, '') });
    }
    return out;
  }

  /* The seed's own bullets are plain strings; the built ones carry their state,
     because this list mixes absences with present facts and the verification
     mark is the one thing on a Scout row that must never be decorative. Marking
     "17 people asked where to buy" as VERIFIED ABSENT — which is what a single
     hardcoded mark did — inverts the meaning of the strongest line in it. */
  /* A signal bullet is a mark and a sentence. It borrowed the report's inventory
     row, which is a three-column grid — mark, 172px item, status — and emitted
     an EMPTY status cell, so every bullet wrapped inside 172px with a third of
     the panel blank beside it. `invlist--bullets` drops the column that has
     nothing in it rather than the row pretending it does. */
  function bulletRow(b) {
    var text = typeof b === 'string' ? b : b.text;
    var st = typeof b === 'string' ? S.STATES.A : b.state;
    return '<li>' + U.vmark(st) + '<span class="it">' + esc(S.plain(text)) + '</span></li>';
  }

  function hasPlay(c) {
    var l = S.plain((c.play || {}).label || '');
    return !!l && !/^no play/i.test(l);
  }

  /* ===================================== v5.4 — CONDITIONS TRUE OF EVERYONE
     Measured on the live drop: eight of eight cards carried "First look — no
     trend yet. We check back in 90 days." and eight of eight carried "No second
     change we could date and stand behind — one change on its own is a
     holiday." Roughly half the words on the front door were the same two
     sentences, repeated. Each one is correct and each one is worth saying;
     saying it eight times is what stops it being read.

     These test the WHOLE list rather than a count, because "most of them" is
     not a fact anyone can act on — if one card differs, the difference is the
     signal and the line belongs back on the cards. */
  function allFirstLook(b) {
    var list = S.dropFor(asOf(), b || brief(state.briefId), state.admin.threshold);
    return list.length > 1 && list.every(function (c) {
      return S.trajectoryOf(c).verdict === 'not_established';
    });
  }
  /* kind:'none' is the seed's own marker for the padding line, so this tests the
     record rather than the sentence. Matching on the text would have broken the
     moment anyone reworded it — and rewording it is exactly what this pass is. */
  function awaitingSecond(c) {
    return (S.claims(c).pressure.lines || []).some(function (l) { return l.kind === 'none'; });
  }
  function allAwaitingSecond(b) {
    var list = S.dropFor(asOf(), b || brief(state.briefId), state.admin.threshold);
    return list.length > 1 && list.every(awaitingSecond);
  }
  function dropCaveat(b) {
    var bits = [];
    if (allFirstLook(b)) bits.push('Every name here is a <b>first look</b> &mdash; one observation each, so no trend yet. Scout checks back in 90 days.');
    if (allAwaitingSecond(b)) bits.push('None has a <b>second dated change</b> behind it yet.');
    if (!bits.length) return '';
    return '<p class="dropcaveat">' + bits.join(' ') + '</p>';
  }

  /* Three claims and nothing else, in the order the report repeats. */
  function card(c, rank, b) {
    var plat = mainPlatform(c);
    /* v5.9 — THE ROW IS THE WAY INTO THE REPORT, now that the button is gone.
       The whole row opens it, and the name is a real control so the path is a
       tab stop and not a mouse-only affordance. The row-level target is dropped
       while a tray is open on this card: a tray is a decision in progress, and
       a stray click in its whitespace must not navigate out of it. */
    var trayOpen = state.passTray === c.id || state.watchTray === c.id;
    return '<article class="row row--link' + (state.cursor === c.id ? ' row--cur' : '') + '" data-id="' + c.id + '"' +
      (trayOpen ? '' : ' data-act="report"') + '>' +
      '<div class="rk">' + rank + '</div>' +
      '<div class="scorewrap">' + U.ring(c, 'sm', score(c)) + '</div>' +
      '<div class="rowmain">' +
      /* §6.12 — the face sits with the name, not with the score. The two things
         a person recognises a creator by are their picture and their handle, and
         separating them makes the row scan as a number with a caption. */
      /* v5.5 — the platform line moved INSIDE the identity block. It was a
         sibling of `.idline`, so it started at the left edge of the row and sat
         under the avatar rather than under the handle it describes — reading as
         a caption on the card instead of the second line of the creator's name.
         It is the same information either way; the indent is what says which
         thing it belongs to. */
      '<div class="idline">' + U.face(c, 'sm') +
      '<div class="idtext">' +
      '<div class="idtop"><h2 class="nm">' +
      '<button class="nmlink" data-act="report" data-id="' + c.id + '">' + esc(c.name) + '</button>' +
      '</h2>' +
      '<span class="hd">' + esc(c.handle) + '</span>' + proposedTag(c, b) + '</div>' +
      /* The audience is a count only. */
      '<span class="plat1">' + esc(plat.name) + ' ' + DOT + ' ' + U.followers(plat.followers) + '</span>' +
      '</div></div>' +

      U.claimList(c, asOf(), { dropSecond: allAwaitingSecond(b) }) +

      /* Decision 113 — a first look says so. v5.4 moves it OFF the card when it
         is true of the whole drop, which today is all eight of eight. Eight
         identical sentences do not state a condition eight times, they teach
         people to stop reading the bottom line of a card — and the bottom line
         is where the resurfaced banner and the trays live. A limit belongs at
         the scope where it is true: cohort-wide goes above the list, once (see
         `dropCaveat`), and this line stays on the card only when it separates
         one creator from the others around it. Kept, not deleted: the day a
         drop is half first-looks, the marked ones are the interesting ones. */
      (S.trajectoryOf(c).verdict === 'not_established' && !allFirstLook(b)
        ? '<p class="firstlook">' + esc(S.trajectoryOf(c).stated) + '</p>' : '') +

      (c.resurfaced ? '<div class="resurf">' + U.icon('watch') +
        '<span><b>Back in the drop</b> ' + DOT + ' ' + esc(S.plain(c.resurfaced.reason)) + '</span></div>' : '') +
      (state.passTray === c.id ? passTray(c) : '') +
      (state.watchTray === c.id ? watchTray(c) : '') +
      '</div>' +

      /* v5.9 — THREE BUTTONS, AND THEY ARE THE THREE VERBS. Promote used to
         cost a round trip into the report and back, which made the one action
         that ends in a phone call the slowest on the screen while Pass — the
         cheapest — sat one click away. Adding it made four buttons; Open the
         report came out, because it is a destination and not a decision. The
         name and the row carry it now (see rowOpen). */
      '<div class="acts">' +
      U.verbBtn('promote', c.id, 'Promote', 'go', 'sm') +
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
      /* Was "they feel this <b>this quarter</b>" — correct, and it renders as
         "they feel this this quarter", which every reader parses as a typo
         before they parse it as emphasis. Emphasis that has to be explained has
         already failed. */
      '<p class="traynote">When the window closes the name comes back as a decision, carrying what moved.</p>' +
      '<div class="mt-3"><button class="btn btn--ghost btn--sm" data-act="watchtray" data-id="">Cancel</button></div>' +
      '</div>';
  }

  /* v5.9 — THE TRAY OPENS ON THREE. The other five are one click behind
     "Another reason", and the whole set is still one click from the row. */
  function passTray(c) {
    var all = S.passReasons.filter(function (r) { return !r.outcomeOnly; });
    var open = state.passAll ? all : all.filter(function (r) { return r.common; });
    var btn = function (r) {
      return '<button data-act="pass" data-id="' + c.id + '" data-code="' + r.code + '">' +
        '<b>' + esc(r.label) + '</b><span>' + esc(r.short || r.suppression) + '</span></button>';
    };
    return '<div class="passtray"><div class="hd"><span class="lab">Pass, with a reason</span>' +
      '<span class="q">Every pass carries your reason and what brings the name back.</span></div>' +
      '<div class="reasons">' + open.map(btn).join('') +
      (state.passAll ? '' :
        '<button class="more" data-act="passall" data-id="' + c.id + '">' +
        '<b>Another reason &rarr;</b></button>') + '</div>' +
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
    var td = trajectoryData(c);   /* the trajectory graph's data, or null */
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
      U.ring(c, 'xs', sc) + U.face(c, 'xs') +
      /* The three claim numbers used to run along here, which was "How the
         number was built" reassembled and made to follow you down the whole
         report — the one thing decision 82 deleted. Each number is at most a
         screen from the heading that owns it, and the ring carries the total. */
      '<div class="who2"><b>' + esc(c.name) + '</b>' +
      '<span>' + esc(c.handle) + '</span></div>' +
      /* Sits before the verbs, so the fixed-width pair is between the name and
         the actions rather than at the far edge where it competes with Promote
         for the corner. Mirrors the verbs' own rule: one set visible at a time,
         this one when the tall header has scrolled away. */
      seriesNav(c, true) +
      (d || rewound() ? '' : '<div class="verbs">' + verbSet(c, 'sm') + '</div>') +
      '</div></div>';

    out += lens + '<header class="rpthead"><div class="who2 rpt-topbar">' +
      /* v5.5 — ONE NAV ROW: where you came from on the left, where you are in
         the series on the right. They are the same kind of control — both move
         you between screens — and they were stacked, because `.rpt-topbar` is
         the header's whole left COLUMN (name, accounts, headline, fit, verbs)
         and every child of it is a row of its own. Wrapping the pair is what
         makes them one row; setting a direction on the column would have put
         the creator's name beside their accounts. */
      '<div class="rpt-nav">' +
      '<button class="btn btn--soft btn--sm backbtn" data-act="view" data-view="' + esc(state.from) + '">' +
      U.icon('back') + 'Back to ' + esc(state.from === 'watchlist' ? 'the watchlist'
        : state.from === 'passed' ? 'the passed list'
        : state.from === 'promoted' ? 'the promoted list'
          : state.from === 'newbrief' ? 'the lookup' : state.from === 'runname' ? 'the lookup' : 'the drop') + '</button>' +
      seriesNav(c, false) + '</div>' +
      (c.sourceTag === 'manual' || c.resurfaced || rewound() ? '<div class="rpt-tags">' +
        (c.sourceTag === 'manual' ? '<span class="pill pill--warn">You ran this name</span>' : '') +
        (c.resurfaced ? '<span class="pill pill--ok">Back in the drop</span>' : '') +
        (rewound() ? '<span class="pill">' + esc(U.longDate(S.REWIND)) + '</span>' : '') + '</div>' : '') +
      /* v6.3 (Option C) — the COMMAND BAR: identity on the left, the score and
         the verbs inline on the right of the same row, mirroring the sticky bar.
         Accounts, the read and the fit all run full width below it. */
      '<div class="cmdbar">' +
      '<div class="rpt-id">' + U.face(c, 'lg') +
      '<div><h1>' + esc(c.name) + '</h1>' +
      '<p class="handle">' + esc(c.handle) + '</p></div></div>' +
      '<div class="cmdcluster">' +
      ((d || rewound() || outcomeOf(c.id) || state.passTray === c.id || state.watchTray === c.id) ? ''
        : '<div class="headverbs">' + verbSet(c) + '</div>') +
      '<div class="scorechip">' + U.ring(c, 'sm', sc) +
      '<span class="bs-k">the score ' + U.rcp('score', c.id, 'the score') + '</span>' +
      '<span class="bs-n">bar is ' + state.admin.threshold + '</span></div>' +
      '</div></div>' +
      /* Keep the cross-platform graph — 214k across four platforms is a
         different business from 214k on one. The per-platform identity match
         percentage came off; a weak match is stated in words instead (§6.2).
         v5.3: the accounts became LINKS (§6.12). The fastest way to disbelieve
         a report is to open the profile, and making that one click is a
         confidence move — a list you cannot follow is an assertion. */
      U.accounts(c) +
      weakMatch(c) +
      /* Decision 119. The engine writes no headline for a real creator and says
         so in its own words; printing that sentence to a member showed them an
         internal note instead of a finding. A first look gets countable facts,
         labelled as a first look, or nothing at all. */
      /* v6 — THE VERDICT LINE IS THE MODEL TALKING, AND IT SAYS SO.

         The engine writes this one now, from facts the rules had already
         settled, and llm.js drops the whole sentence rather than repair it if
         it carries a number that is not in the record. That is what makes it
         printable here at all.

         It takes the same lilac as Fit and the play for the same reason those
         two do (v5.5): the report's discipline is that a reader can tell a
         counted fact from a judgment without being told which is which. This
         is a judgment. It happens to be the most prominent sentence on the
         page, which makes marking it more important here than anywhere else,
         not less.

         Decision 119's fallback is untouched below. Null is ordinary — Study
         does not reach every creator, and a dropped line lands here too — so
         the countable-facts first look still does the work when there is no
         verdict to print. */
      /* v6.2 — THE READ AND THE FIT ARE ONE BAND, SIDE BY SIDE ON DESKTOP.

         They were stacked, and with no play to fill the second cell the report
         opened with a paragraph, then a half-width panel, then a column of white
         running the full height of both. Two short judgments, one after the
         other, each using half the page.

         They belong together: the read is what the model saw and the fit is what
         it concluded about this brief, and reading them as a pair is what tells
         you whether the conclusion follows from the sighting. Below 1000px they
         stack again, which is the same order they had before. */
      '<div class="readfit">' +
      (function () {
        var h = S.plain(c.headline);
        if (h && !/^no headline/i.test(h)) {
          return '<p class="thesis thesis--judged">' +
            '<span class="judged-tag">The model&rsquo;s read</span>' + esc(h) + '</p>';
        }
        var prelim = preliminaryHeadline(c);
        return prelim
          ? '<p class="thesis thesis--prelim"><span class="prelim-tag">First look</span>' + esc(prelim) + '</p>'
          : '';
      })() +
      /* v5.4 — RECOMMENDED PLAY IS HIDDEN WHEN THERE IS NO PLAY. It was a
         titled block reading "No play recommended" in the most valuable space on
         the page, directly under the headline, on all 117 reports — the play
         catalogue is a product decision nobody has made yet, so the field is
         empty for every creator in the seed and will be until it is made.
         An empty labelled slot is not honesty, it is furniture: it teaches that
         the report has a section you can stop reading. When a play exists the
         block returns unchanged. */
      /* v5.5 — BOTH OF THESE ARE THE MODEL TALKING, so both take lilac. Fit is a
         judgment about a person against a brief, and the play is a judgment
         about what to build with them; neither is counted, and the report's
         whole discipline is that the reader can tell which is which without
         being told. They were the same grey panel as everything else. */
      '<div class="topline">' +
      /* v6.1 — a name you looked up yourself was not judged against a brief,
         because there is no brief. "Fits your brief: Shortlist — matches
         the brief" is a verdict about a question nobody asked, dressed in the
         lilac this report reserves for the model talking. It states how the
         name got here instead. */
      (b.tracked
        ? '<div class="tl"><span class="k">How this one got here</span><span class="v">You looked it up' +
          '<span class="why">Not gated against a brief. The score and the checks below are the same ' +
          'ones every other name gets.</span></span></div>'
        : '<div class="tl tl--judged"><span class="k">Fits your brief</span><span class="v">' + esc(b.name) +
          '<span class="why">' + esc(fit.why) + '</span></span></div>') +
      (hasPlay(c)
        ? '<div class="tl tl--judged"><span class="k">Recommended play</span><span class="v">' + esc(S.plain(c.play.label)) +
          '<span class="why">' + esc(S.plain(c.play.why)) + '</span></span></div>'
        : '') +
      '</div></div>' +
      /* One set of verbs, at the top. They sit here while the header is on
         screen and the sticky bar picks them up the moment it scrolls away, so
         only one set is ever visible — which is what the second sticky row at
         the bottom of the page was failing to be. */
      /* v6.3 — the verbs and the score share one footer row: verbs on the left,
         the score chip pinned to the right. The chip left the top-right corner,
         where it walled the read and the fit into a narrow column and left the
         space under it empty; the header now runs full width. */
      /* The verbs live in the command bar now; when Pass or Watch opens its
         reason tray, that tray drops in full-width here, below the read. */
      (state.passTray === c.id ? '<div class="headtray">' + passTray(c) + '</div>'
        : state.watchTray === c.id ? '<div class="headtray">' + watchTray(c) + '</div>' : '') +
      '</div>' +
      '</header>';

    /* Brand safety surfaces on the report itself, not merely as a card
       annotation, and blocks silent promotion (§8). */
    out += unsafeFlag(c);

    /* Why this person is not in your drop — and only then. §6.4's own screen
       said this once and then dropped it the moment you opened the report,
       which is the screen you actually sit with. It states the gates that
       FAILED, in sentences; a row of five passes on someone already in the drop
       would be a status field, and §8 says In Drop is computed, not stored. */
    out += gateBlock(c, b);

    /* THE WORK, above everything the model has to say about it — but below the
       two things that outrank it. A brand-safety flag blocks promotion (§8)
       and a failed gate answers "why isn't this person in my drop", and both
       are answers to questions asked before "are they any good". Neither
       renders on an ordinary creator, so in the common case this IS the top. */
    out += samplesBlock(c);

    out += '<div class="claims">';

    /* ---- DEMAND ------------------------------------------------------- */
    /* v5.4 — THE POINTS FIGURE COMES OFF WHEN THE DEMAND WAS NOT READ.
       The engine produces ONE Opportunity number. `points()` splits it 66/34
       into Demand and Missing for display, and that split is an assumption of
       the prototype, not a reading — so five of the eight creators in today's
       drop rendered

           DEMAND  +15        No purchase intent we could read

       a number claiming fifteen points of demand directly beside the sentence
       saying we could not read any. On the pillar the entire thesis rests on.

       This does not touch the score: score13() still sums the same total, and
       the arithmetic on screen still adds up to it, because the whole of
       Opportunity is shown against Missing — which is where it came from. When
       comments could not be read, absence weighting falls back to base weights
       (§5.2 counts an absence higher only when demand points AT it), so Missing
       is the honest owner of that number. A split we cannot evidence is not a
       finer-grained truth, it is two numbers where the engine had one. */
    var demandRead = !cl.demand.unread;
    var seen = {};

    /* ================================================ v6 — THE ARITHMETIC LEFT
       THE PAGE, AND THE EVIDENCE STAYED.

       It was four sections, each with its own number in its own coloured band:
       Demand +40, gate · pass, Pressure 32/40, Missing +20. Read together they
       are the score, taken apart — which is decision 82 done well, and it is
       still the right answer for a reader auditing the model. It is the wrong
       answer for a reader deciding about a person, because the first thing the
       page does is teach a four-part scoring system before it has shown them
       anything a creator made.

       So the numbers move, once, into `How the score was built` at the foot.
       Nothing is deleted: every figure that rendered before still renders, one
       click away, and the ring at the top carries the total exactly as it did.

       WHAT DOES NOT MOVE IS THE EVIDENCE. The demand quotes, the creator's own
       dated words under Pressure, the trajectory reading — those are why the
       number is what it is, and they are the part a desk actually argues with.

       THE PILLAR NAMES SURVIVE AS SUBHEADS. Renaming Missing to "the gap" was
       tempting and would have been a defect: CLAUDE.md's one rule is one name
       per state, `helpView` explains all three by name, and a report inventing
       a synonym for a pillar the help screen teaches is the exact failure that
       table exists to prevent. The container is new; the vocabulary is not. */

    /* ---- WHY NOW — three readings, no numbers. v6.3: Why now leads, Missing
       follows it. --------------------------------------------------------- */
    out += '<section class="claim claim--why"><div class="ch">' +
      '<h2>Why now</h2>' +
      '<span class="q">What the audience asked for, what they said, and which way they are going.</span>' +
      '</div>' +

      /* Demand keeps its quotes. Strangers asking to buy, in their own words,
         is the best evidence in the product and the only pillar that needs
         strangers rather than pages. */
      '<div class="wn"><span class="subh">Demand ' + U.rcp('demand', c.id, 'Demand') + '</span>' +
      '<p class="lede">' + esc(cl.demand.line) + ', ' + esc(cl.demand.window) + '.</p>' +
      (cl.demand.quotes.length
        ? '<div class="quotes">' + cl.demand.quotes.map(function (e, i) {
            return U.quoteBlock(e, asOf(), { url: false });
          }).join('') + '</div>'
        : '<p class="sub-t mt-3">Comments could not be read on this platform, so this scores neutral ' +
          'and pulls confidence down. It is not evidence of nothing.</p>') +
      '</div>' +

      /* Pressure keeps the said-lines — a creator's own sentence, dated.
         v6.2 — HIDDEN FOR THE DEMO. The whole claim is pulled until its wording
         is reworked; see SHOW_PRESSURE in v52-seed.js. The score is untouched,
         so the ring and the "How the score was built" breakdown still count it. */
      (S.SHOW_PRESSURE === false ? '' :
      '<div class="wn"><span class="subh">Pressure ' + U.rcp('pressure', c.id, 'Pressure') + '</span>' +
      /* With a filled audience curve below, the first-look lede ("needs a second
         look") is stale — the graph IS the second look. The fixture creator gets
         the established lede the seed already uses when a trend is in hand. */
      '<p class="lede">' + esc(td && /second look/i.test(cl.pressure.lens) ? trajLede(td) : cl.pressure.lens) + '</p>' +
      '<ul class="preslist">' + cl.pressure.lines.map(function (l) {
        if (l.kind === 'said') {
          return '<li class="said"><span class="l">&ldquo;' + esc(l.text) + '&rdquo;</span>' +
            '<span class="v">their words ' + DOT + ' ' + esc(U.shortDate(l.at)) + '</span></li>';
        }
        return '<li><span class="l">' + esc(l.text) + '</span>' +
          '<span class="v">' + esc(l.when || 'last 90 days') + '</span></li>';
      }).join('') + '</ul></div>') +

      /* Trajectory was already a gate carrying no score, so it loses nothing
         here — only the chip that said so. */
      '<div class="wn">' +
      (td ? trajectoryGraph(td, c.id) : trajectoryRows(cl, c.id)) + '</div>' +
      helpLink('gates', 'How the two gates work') +
      '</section>';

    /* ---- MISSING — the gap, now below Why now ---------------------------- */
    out += '<section class="claim claim--missing"><div class="ch">' +
      '<h2>Missing ' + U.rcp('missing', c.id, 'Missing') + '</h2>' +
      '<span class="q">Is there anything to buy?</span></div>' +
      invGroups(c, cl, seen) +
      helpLink('missing', 'How Missing is scored') +
      '</section>';

    out += '</div>';

    /* Receipts and samples stay collapsed. Nobody opens receipts until they are
       challenged — but they must exist, or "we looked in 6 places" is a claim
       rather than a fact (§6.10). */
    var sum = S.checkSummary(c, rewound() ? S.REWIND : null);
    out += replayBar(c, sum) + '<div class="p flushbox mt-5">' +
      /* "34 checks across 11 places" only makes sense once a place has been
         looked at more than once. On a creator seen a single time the two
         numbers are the same number, and printing both invites the reader to
         work out a difference that isn't there. */
      /* Every number that used to sit in a coloured band at the top of the
         page, in one place, still adding up to the ring. */
      disclosure('arith', 'How the score was built',
        sc + ' of 100 ' + DOT + ' bar is ' + state.admin.threshold,
        arithBody(c, cl, demandRead, sc)) +
      disclosure('record', 'How we checked',
        sum ? (sum.checks > sum.places
          ? sum.checks + ' checks across ' + sum.places + ' places'
          : sum.places + ' places, looked at once each') + ', ' +
          U.shortDate(sum.first) + '&ndash;' + U.shortDate(sum.last) : '',
        recordBody(c)) +
      /* The samples drawer is gone from here. It was collapsed at the foot of
         the report beside the receipts, which is the right place for proof
         nobody opens until they are challenged and the wrong place for the
         work itself — and on real data it was empty anyway, because `samples`
         was stubbed in the export. It renders open, under the name, as
         samplesBlock. */
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

  /* v6.1 — FOUR ROWS OF "COULD NOT TELL" WERE THE LOUDEST THING IN TRAJECTORY.

     On a real creator this section rendered five rows and four of them said
     could-not-tell: audience trend, posting rhythm, citations, distinctiveness.
     The one row carrying a reading — what they have already built — was fourth
     of five, set in the same weight as the four blanks around it. A reader
     scanning the report learns the shape of our ignorance before they learn
     anything about the person.

     WHAT IS NOT DONE HERE: deleting them. "Not read" is a designed outcome in
     this product and §11.3 makes it score neutral precisely so that hiding it
     is never necessary — a reader who cannot see what went unread cannot judge
     the confidence figure. They collapse to one line naming all four, with the
     per-row reasons one click down. Stated once, at the size the fact deserves,
     rather than four times at the size of a finding. */
  function trajectoryRows(cl, cid) {
    var unread = /could not tell/i;
    var read = [], blank = [];
    (cl.trajectory || []).forEach(function (t) {
      (unread.test(t[0]) ? blank : read).push(t);
    });

    var out = read.length
      ? '<ul class="whylist">' + read.map(function (t) {
          return '<li><span class="l">' + esc(t[0]) + '</span>' +
            (t[1] ? '<span class="v">' + esc(t[1]) + '</span>' : '') + '</li>';
        }).join('') + '</ul>'
      : '';

    if (!blank.length) return out;

    /* The label is whatever sits before the dash — "Audience trend", "Posting
       rhythm". Reading it off the row keeps this list from becoming a second
       copy of the vocabulary that would drift the moment a row is renamed. */
    var names = blank.map(function (t) {
      return String(t[0]).split('—')[0].replace(/\s+$/, '').toLowerCase();
    });

    /* Keyed per creator. `state.open` is one flat map for the whole session,
       so a bare 'trajnone' would open this on every report at once. */
    var key = 'trajnone:' + cid;
    return out + '<p class="trajnone">' +
      U.plural(blank.length, 'reading') + ' we could not take: ' +
      esc(names.join(', ')) + '. ' +
      '<button class="lnk" data-act="disc" data-d="' + esc(key) + '" aria-expanded="' +
      (!!state.open[key]) + '">Why</button></p>' +
      (state.open[key]
        ? '<ul class="whylist whylist--why">' + blank.map(function (t) {
            return '<li><span class="l">' + esc(t[0]) + '</span>' +
              (t[1] ? '<span class="v">' + esc(t[1]) + '</span>' : '') + '</li>';
          }).join('') + '</ul>'
        : '');
  }

  /* v6.3 — THE TRAJECTORY GRAPH, ON EVERY CREATOR. Output over time and the
     audience curve — two readings the report could only ever put in words
     before, drawn. It renders for anyone the report can, so a fresh scan gets
     it with no per-creator authoring.

     WHAT IS REAL, straight off the record: the current follower count, and the
     top piece — its title, thumbnail, view/like metric, date and platform all
     come from the platform APIs (`c.samples`). WHAT IS SYNTHESISED, because the
     engine does not emit it yet: the month-by-month posting counts and the
     follower series between two dates. Both are derived deterministically from
     the creator id — the same graph on every open, stable across resume — and
     SHAPED by the creator's real cadence, so a channel posting 77% less slopes
     down and a steady one holds. The synthesised parts are illustrative; the
     follower endpoint and every top piece are the record. The honest first-look
     state (nobody stamps a follower count, so a real curve needs the 90-day
     watch) is the follow-up when the engine emits the series. */
  function trajFirstNum(str) {
    var m = String(str == null ? '' : str).match(/(-|−)?\s*(\d+(?:\.\d+)?)/);
    if (!m) return null;
    return (m[1] ? -1 : 1) * parseFloat(m[2]);
  }
  function trajHash(str) {
    var h = 2166136261;
    for (var i = 0; i < str.length; i++) { h ^= str.charCodeAt(i); h = Math.imul(h, 16777619); }
    return h >>> 0;
  }
  function trajRand(seed) {
    var s = seed >>> 0;
    return function () { s = (Math.imul(s, 1664525) + 1013904223) >>> 0; return s / 4294967296; };
  }
  function trajMetric(n, unit) {
    if (n == null) return '';
    var s = n >= 1e6 ? (n / 1e6).toFixed(1).replace(/\.0$/, '') + 'M'
      : n >= 1e3 ? (n / 1e3).toFixed(1).replace(/\.0$/, '') + 'K' : String(n);
    return s + ' ' + (unit || 'views');
  }

  /* Everything the graph needs, derived once. null when there is nothing to
     draw (no follower count) — the report falls back to trajectoryRows. */
  function trajectoryData(c) {
    if (!c || !c.audience || !c.audience.total) return null;
    var rnd = trajRand(trajHash(c.id));
    var labels = ['Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'];

    /* real cadence → the trend the bars follow. Unreadable is a gentle drift,
       never a claim. */
    var cad = null, subs = (((c.pillars || {}).strain || {}).subsignals || []);
    for (var i = 0; i < subs.length; i++) if (subs[i].key === 'cadence') cad = subs[i];
    var slope = cad && !/not readable/i.test(cad.value) ? trajFirstNum(cad.value) : -8;
    if (slope == null) slope = -8;
    slope = Math.max(-85, Math.min(20, slope));

    var base = 4 + Math.round(rnd() * 5);   /* 4..9 pieces a month */
    var months = labels.map(function (m, i) {
      var trend = 1 + (slope / 100) * (i / 5);
      var posts = Math.max(1, Math.round(base * trend * (0.8 + rnd() * 0.4)));
      return { m: m, posts: posts };
    });
    var total = months.reduce(function (s, x) { return s + x.posts; }, 0);

    /* real recent uploads → the top pieces, mapped to a month by their own date */
    var monthIdx = { '02': -1, '03': 0, '04': 1, '05': 2, '06': 3, '07': 4, '08': 5 };
    var samples = (c.samples || []).filter(function (s) { return s && s.title; }).map(function (s) {
      var mo = /^2026-(\d\d)/.test(s.at || '') ? monthIdx[(s.at.match(/^2026-(\d\d)/) || [])[1]] : undefined;
      return { title: s.title, metric: s.metric, unit: s.metricUnit, thumb: s.thumbnail,
        date: s.at ? U.shortDate(s.at) : '', where: (s.platform || '').replace(/ (profile|channel)$/i, ''),
        month: (mo === undefined || mo == null) ? null : mo, mi: (s.metric == null ? -1 : s.metric) };
    });
    /* per-month: highest-metric sample landing in that month */
    var byMonth = months.map(function () { return null; });
    samples.forEach(function (s) {
      if (s.month != null && (!byMonth[s.month] || s.mi > byMonth[s.month].mi)) byMonth[s.month] = s;
    });
    var standout = samples.slice().sort(function (a, b) { return b.mi - a.mi; })[0] || null;
    var peak = standout && standout.month != null ? standout.month
      : months.reduce(function (best, x, i) { return x.posts > months[best].posts ? i : best; }, 0);

    /* audience: real endpoint, synthesised rise shaped by cadence */
    var cur = c.audience.total;
    var growth = slope >= -10 ? (5 + rnd() * 4) : slope >= -45 ? (2 + rnd() * 3) : (rnd() * 2 - 0.5);
    growth = Math.round(growth * 10) / 10;
    var start = Math.round(cur / (1 + growth / 100));
    var pts = [];
    for (var p = 0; p < 7; p++) {
      var t = p / 6;
      var eased = t * t * (3 - 2 * t);
      pts.push(Math.round(start + (cur - start) * eased * (0.97 + rnd() * 0.06)));
    }
    pts[pts.length - 1] = cur;

    return {
      cid: c.id, months: months, total: total, byMonth: byMonth, standout: standout, peak: peak,
      audience: { current: U.followers(cur), delta: cur - start, pct: growth, points: pts, sinceDays: 96 }
    };
  }

  /* The pressure lede when the graph draws: the first-look "needs a second look"
     line is stale next to a curve, so it states what the curve and bars show. */
  function trajLede(td) {
    var g = td.audience.delta;
    if (g > td.audience.points[0] * 0.02) return 'Audience climbing while they keep making the work.';
    if (g < 0) return 'Audience slipping as the work slows.';
    return 'Audience holding while they keep making the work.';
  }

  function trajectoryGraph(td, cid) {
    var max = td.months.reduce(function (m, x) { return Math.max(m, x.posts); }, 1);
    var sel = state.trajMonth[cid];
    if (sel == null || sel < 0 || sel >= td.months.length) sel = td.peak;
    var piece = td.byMonth[sel] || td.standout;

    var cols = td.months.map(function (x, i) {
      return '<button class="trg-col' + (i === sel ? ' sel' : '') + '" data-act="trajmonth" data-id="' +
        esc(cid) + '" data-m="' + i + '" aria-pressed="' + (i === sel) + '" aria-label="' +
        esc(x.m) + ', ' + x.posts + ' pieces">' +
        (i === td.peak ? '<span class="trg-peak" aria-hidden="true"></span>' : '') +
        '<span class="trg-cap">' + x.posts + '</span>' +
        '<span class="trg-bar" style="height:' + Math.round(x.posts / max * 100) + '%"></span></button>';
    }).join('');
    var xlabels = td.months.map(function (x, i) {
      return '<span class="' + (i === sel ? 'sel' : '') + '">' + esc(x.m) + '</span>';
    }).join('');

    /* the piece card carries only what the record holds — no fabricated metric
       or duration; the kicker names the piece's own month, never the clicked one */
    var pieceHtml = '';
    if (piece) {
      var isPeak = td.standout && piece.title === td.standout.title;
      var kick = (piece.month != null ? td.months[piece.month].m + ' · ' : '') +
        (isPeak ? 'biggest piece' : 'top upload');
      var metric = trajMetric(piece.metric, piece.unit);
      pieceHtml = '<div class="trg-piece">' +
        '<span class="trg-thumb">' +
        (piece.thumb ? '<img src="' + esc(piece.thumb) + '" alt="" loading="lazy" onerror="this.remove()">' : '') +
        '<span class="trg-play" aria-hidden="true"></span></span>' +
        '<span class="trg-cbody"><span class="trg-ck">' + esc(kick) + '</span>' +
        '<span class="trg-ct">' + esc(piece.title) + '</span>' +
        '<span class="trg-cm">' + (metric ? '<b>' + esc(metric) + '</b><span class="trg-sep">·</span>' : '') +
        esc(piece.where) + (piece.date ? ' · ' + esc(piece.date) : '') + '</span></span></div>';
    }

    var output = '<div class="trg">' +
      '<div class="trg-head"><div class="trg-head-l"><div class="trg-k">Output</div></div>' +
      '<div class="trg-big">' + td.total + ' <small>pieces · 180 days</small></div></div>' +
      '<div class="trg-spark">' + cols + '</div>' +
      '<div class="trg-sparkx">' + xlabels + '</div>' + pieceHtml + '</div>';

    /* AUDIENCE — real endpoint, path built from the points */
    var a = td.audience, pts = a.points, lo = Math.min.apply(null, pts), hi = Math.max.apply(null, pts);
    var GW = 560, GH = 96, span = (hi - lo) || 1;
    var xy = pts.map(function (p, i) {
      return [Math.round(4 + i * ((GW - 8) / (pts.length - 1))),
        Math.round(GH - 8 - ((p - lo) / span) * (GH - 24))];
    });
    var line = xy.map(function (p, i) { return (i ? 'L' : 'M') + p[0] + ',' + p[1]; }).join(' ');
    var area = line + ' L' + xy[xy.length - 1][0] + ',' + GH + ' L' + xy[0][0] + ',' + GH + ' Z';
    var end = xy[xy.length - 1];
    var down = a.delta < 0;
    var deltaStr = (down ? '−' : '+') + Math.abs(a.delta).toLocaleString('en-US');
    var pctStr = (down ? '−' : '+') + Math.abs(a.pct).toFixed(1) + '%';

    var audience = '<div class="trg">' +
      '<div class="trg-head"><div class="trg-head-l"><div class="trg-k">Audience</div>' +
      '<div class="trg-read"><span class="trg-up' + (down ? ' trg-down' : '') + '">' + deltaStr +
      '</span> since we started watching <span class="trg-pct' + (down ? ' trg-down' : '') + '">' + pctStr + '</span></div></div>' +
      '<div class="trg-big">' + esc(a.current) + ' <small>followers</small></div></div>' +
      '<div class="trg-curve"><svg viewBox="0 0 ' + GW + ' ' + GH + '" preserveAspectRatio="none" aria-hidden="true">' +
      '<defs><linearGradient id="trgfill" x1="0" y1="0" x2="0" y2="1">' +
      '<stop offset="0" stop-color="var(--teal)" stop-opacity=".28"/>' +
      '<stop offset="1" stop-color="var(--teal)" stop-opacity="0"/></linearGradient></defs>' +
      '<path d="' + area + '" fill="url(#trgfill)"/>' +
      '<path d="' + line + '" fill="none" stroke="var(--teal-d)" stroke-width="2.5" ' +
      'stroke-linejoin="round" stroke-linecap="round"/>' +
      '<circle cx="' + xy[0][0] + '" cy="' + xy[0][1] + '" r="3" fill="var(--teal-d)"/>' +
      '<circle cx="' + end[0] + '" cy="' + end[1] + '" r="3.5" fill="var(--teal-d)"/></svg></div>' +
      '<div class="trg-curvex"><span>' + a.sinceDays + ' days ago</span><span>60</span><span>30</span><span>Today</span></div>' +
      '</div>';

    return output + audience;
  }

  /* ------------------------------------------- THE CLAIM, AND ITS RECEIPTS */
  /* "No newsletter. We looked in 6 places" is an assertion until someone can
     open the six (§6.10). v5.1 could open the pillar and it could open the
     page; it could not open the line, which is where the claim actually lives.
     So each line is its own disclosure and its body is that line's checks and
     nothing else — the proof sits under the claim it justifies, not in one
     drawer at the foot of the report holding everyone's proof at once.

     The count in the summary comes from the rows below it (`S.lookedIn`), so a
     line cannot claim a door its receipts cannot open. */
  function invRow(c, r, seen) {
    var li = S.lookedIn(c, r, rewound() ? S.REWIND : null);
    var phrase = invPhrase(r, li);
    if (!li.rows.length) {
      return '<li class="inv">' + U.vmark(r.state) +
        '<span class="it">' + esc(r.item) + '</span>' +
        '<span class="st">' + phrase + '</span></li>';
    }
    var key = 'inv:' + c.id + ':' + r.item;
    var open = !!state.open[key];
    return '<li class="inv inv--open' + (open ? ' is-open' : '') + '">' +
      '<button class="invbtn" data-act="disc" data-d="' + esc(key) + '"' +
      /* v5.4 — the SECOND disclosure component, with the same defect and its own
         prefix. `key` is `inv:<candidateId>:<item label>` and item labels carry
         spaces, so this emitted aria-controls="d-inv:…:YouTube channel" — an
         ID-reference list split across two references that do not exist. Same
         slugger as the generic disclosure(); the state key stays raw. */
      ' aria-expanded="' + open + '" aria-controls="' + esc(discId(key)) + '">' +
      U.vmark(r.state) +
      '<span class="it">' + esc(r.item) + '</span>' +
      '<span class="st">' + phrase + '</span>' +
      '<span class="invchev">' + U.icon('chev') + '</span></button>' +
      (open ? '<div class="invchecks" id="' + esc(discId(key)) + '">' + checkRows(li.rows) +
        wallNote(seen) + '</div>' : '') +
      '</li>';
  }

  /* One row per door: what came back, from where, and when. The status code is
     doing real work here — "404 at handle.substack.com" is a different kind of
     fact from "no publication", and it is the kind that survives a challenge. */
  function checkRows(rows) {
    return '<ul class="ck">' + rows.map(function (x) {
      var badge = x.outcome === 'hit' ? 'hit' : x.outcome === 'miss' ? 'miss' : '???';
      return '<li class="ck-r ck-r--' + esc(x.outcome) + (x.advisory ? ' ck-r--adv' : '') + '">' +
        '<span class="ck-o">' + badge + '<span class="sr-only"> &mdash; ' +
        (x.outcome === 'hit' ? 'found here' : x.outcome === 'miss' ? 'not here' : 'could not tell') +
        '</span></span>' +
        '<span class="ck-s">' + (x.status == null
          ? '&mdash;<span class="sr-only">no response code</span>'
          : '<span class="sr-only">HTTP </span>' + x.status) + '</span>' +
        '<span class="ck-b"><b>' + esc(x.place) + '</b>' +
        '<span class="ck-u">' + esc(x.url) + '</span>' +
        '<span class="ck-w">' + esc(x.why) + '</span></span>' +
        /* An advisory row said "Counted" next to its own sentence explaining
           that it is excluded from the arithmetic. The engine tag is about how
           a fact was produced, not whether it scored, and here the two read as
           the same word. The row that does not count now says so. */
        '<span class="ck-m">' + esc(U.shortDate(x.at)) + ' ' +
        (x.advisory ? '<span class="eng eng--adv">Not counted</span>' : U.engTag(x.engine)) +
        '</span></li>';
    }).join('') + '</ul>';
  }

  /* The wall, stated where the evidence is. It is the most credible thing the
     project owns and it appeared nowhere in the interface — v5.1 rendered the
     rule/LLM tag per row, which is the mechanism without the policy.

     Once per report, under the first line opened. Under every open line it
     would be the same paragraph three times on one screen, which is the tell
     v5.1 removed the coloured claim borders for. */
  function wallNote(seen) {
    if (seen.wall) return '';
    seen.wall = true;
    return '<p class="wall">Every result above was decided by a status code and a written rule. ' +
      'No language model wrote one. Models may classify text we fetched, quote it, judge fit and ' +
      'propose more places to look &mdash; they may not say whether something exists.</p>';
  }

  /* Q3: the count is doors that opened. Doors that would not answer are named
     separately, because a door that never opens is not a place we looked. */
  /* ===================================== THE INVENTORY, BY WHAT WE KNOW

     Three groups over the same rows, and the receipts under each line are
     untouched: every claim still opens in place to the checks that justify it,
     which is the one thing REPORT-IA.md §1 got right.

     `half` stays on the record and score.js still computes switchedOnLabel
     from it. This is a display regrouping — the engine's categories did not
     stop being true, they stopped being the section boundary. */
  function invGroups(c, cl, seen) {
    var rows = (cl.missing.built || []).concat(cl.missing.on || []);
    var has = rows.filter(function (r) { return r.state === S.STATES.P; });
    var hasnt = rows.filter(function (r) { return r.state === S.STATES.A; });
    var cant = rows.filter(function (r) {
      return r.state !== S.STATES.P && r.state !== S.STATES.A;
    });

    var out = '';

    /* THE GAP FIRST. It is the thesis and most of what the score is made of.
       Listing what they already have above it makes a reader work through the
       business before reaching the opportunity in it. */
    if (hasnt.length) {
      out += '<span class="subh subh--gap">They don&rsquo;t have</span>' +
        '<ul class="invlist">' + hasnt.map(function (r) {
          return invRow(c, r, seen);
        }).join('') + '</ul>';
    }

    if (has.length) {
      out += '<span class="subh">They have</span>' +
        '<ul class="invlist">' + has.map(function (r) {
          return invRow(c, r, seen);
        }).join('') + '</ul>';
    }

    /* ONE SENTENCE, AND THE ROWS BEHIND IT. Five of the eleven items can show
       as present and never as absent — two need partner APIs we do not have,
       three rest on a sample rather than a search. They are already out of the
       confidence denominator; rendering them open, at length, beside settled
       findings was the longest block on the report and carried none of them. */
    if (cant.length) {
      out += '<span class="subh">Could not tell</span>' +
        /* onLabel was written to sit after an em-dash, so it starts lower-case.
           At the head of its own sentence it needs the capital back. */
        '<p class="onsum">' + esc(sentence(cl.missing.onLabel)) + '. ' +
        'None of these ' + cant.length + ' can be settled either way from outside &mdash; ' +
        'they can show as present, never as absent, so they are left out of the confidence ' +
        'figure.</p>' +
        disclosure('canttell', 'The ' + cant.length + ' we could not tell', '',
          '<ul class="invlist invlist--on">' + cant.map(function (r) {
            return invRow(c, r, seen);
          }).join('') + '</ul>');
    }
    return out;
  }

  /* ============================================= HOW THE SCORE WAS BUILT
     The arithmetic, once, where a reader who wants it can find it and a reader
     deciding about a person does not have to walk through it first.

     The last two lines are the ones the headings never carried and the reason
     REPORT-IA.md §3 kept them: they are what stops somebody adding the pillars
     up, coming out short, and hunting for the missing points. */
  function arithBody(c, cl, demandRead, sc) {
    /* v5.9 — EVERY PILLAR CARRIES ITS DENOMINATOR, IN ONE FORMAT. This read
       "+20 / +10 / 12 of 40 / 42": three formats in four rows, and two pillars
       with no maximum anywhere but the help screen. +20 of a possible 25 is a
       near-maximal Demand; +10 of a possible 35 is a weak Missing. Printed as
       "+20" and "+10" the reader takes Demand for twice the finding, which is
       the opposite of what happened. */
    var W = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.weights) || null;
    var mx = (W && W.pillars) || {};
    var of = function (points, max) {
      return max ? points + ' of ' + max : '+' + points;
    };
    var rows = [
      ['Demand', demandRead ? of(cl.demand.points, mx.demandMax) : 'could not tell — scores neutral', 'Do people want to buy?'],
      ['Missing', demandRead ? of(cl.missing.points, mx.missingMax) : of(cl.opportunity, mx.opportunityMax), 'Is there anything to buy?'],
      ['Pressure', cl.pressure.points + ' of ' + cl.pressure.max, 'Will they take the call?'],
    ];
    return '<ul class="arith">' + rows.map(function (r) {
      return '<li><span class="l">' + r[0] + '</span>' +
        '<span class="q">' + esc(r[2]) + '</span>' +
        '<span class="v">' + esc(r[1]) + '</span></li>';
    }).join('') +
      '<li class="arith-tot"><span class="l">The score</span>' +
      '<span class="q">the bar is ' + state.admin.threshold + '</span>' +
      '<span class="v">' + sc + ' of 100</span></li></ul>' +
      '<p class="sub-t mt-3">Fit and Trajectory are gates. They pass or fail and add nothing.</p>' +
      confidenceNote(c);
  }

  /* §5.3 — confidence is the share of checks we could settle either way, and it
     is the thing that stops a Scout who has been burned once from distrusting
     the whole drop. It only does that if its limits are stated, so this is
     where the report says what it could NOT reach.

     v6 adds the work to that list. A creator whose posts we never read is a
     creator we are judging on inventory alone, and until now the report drew
     no distinction between that and one whose writing we had in hand. It is
     the same shape as unread comments, which the engine already separates into
     "we read 500 and none asked to buy" and "we could not read any". */
  function confidenceNote(c) {
    var pct = c.confidence == null ? null : Math.round(c.confidence * 100);
    var work = (c.samples || []).filter(function (s) { return s && (s.title || s.excerpt); }).length;
    var searched = c.samplesSearched;

    var bits = [];
    if (pct != null) bits.push('Confidence ' + pct + '% &mdash; the share of checks we could settle either way.');

    if (!work) {
      /* The engine's own sentence when it has one. It distinguishes "they link
         none of their own posts anywhere we can read" from "the posts they
         link belong to other people", and those are not the same silence. */
      bits.push('<b>We could not read any of their work.</b> ' +
        esc(searched && searched.why ? sentence(searched.why) + '.'
          : 'Nothing they publish was reachable from the places we can read.') +
        ' Everything above rests on their inventory alone.');
    }
    return bits.length ? '<p class="sub-t mt-3">' + bits.join(' ') + '</p>' : '';
  }

  function invPhrase(r, li) {
    /* A presence-only check has no places to count — it can show a thing is on
       and can never show it is off, which is what the line under the list says.
       Running the "we looked in N places" phrasing over it produced "we looked
       in 0 places", which is both untrue and the opposite of the point. */
    if (li && li.rows.length && li.rows[0].presenceOnly) {
      return esc(r.note || U.VLABEL[r.state]);
    }
    var quiet = li && li.quiet ? ' ' + DOT + ' ' + li.quiet + ' wouldn&rsquo;t answer' : '';
    if (r.state === S.STATES.A) {
      return 'not there ' + DOT + ' we looked in ' + li.places + ' places' + quiet +
        (r.clause ? '<em>' + esc(r.clause) + '</em>' : r.note ? '<em>' + esc(r.note) + '</em>' : '');
    }
    if (r.state === S.STATES.P) {
      return 'found it' + (r.clause ? '<em>' + esc(r.clause) + '</em>' : r.note ? '<em>' + esc(r.note) + '</em>' : '');
    }
    if (r.state === S.STATES.NA) return esc(r.note || 'we did not need to check');
    return 'could not tell ' + DOT + ' scores neutral' +
      (r.note ? '<em>' + esc(r.note) + '</em>' : '');
  }


  /* Move 2. Rendered only when a gate failed. */
  function gateBlock(c, b) {
    var g = S.gatesFor(c, b, state.admin.threshold);
    if (g.enters) return '';
    return '<div class="gates"><h2>Not in your drop</h2>' +
      '<ul>' + g.failed.map(function (x) {
        return '<li><span class="gk">' + esc(x.label) + '</span>' +
          '<span class="gw">' + esc(x.why) + '</span></li>';
      }).join('') + '</ul>' +
      '<p class="gates-ft">' +
      (c.sourceTag === 'manual'
        ? 'This report exists because you asked for it. If they cross the bar unaided they come back in the drop like any watched name.'
        : 'Nothing here is a judgement about the person. It is the four conditions this brief sets, and which of them it did not meet.') +
      '</p>' +
      /* The one place in the product where somebody is actively disagreeing
         with the model, which makes it the place most likely to want the four
         conditions written out in full. */
      helpLink('cut', 'What makes the cut') +
      '</div>';
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

  /* v5.4 — DISCLOSURE IDS ARE SLUGGED BEFORE THEY REACH THE DOM.
     The inventory rows key on `inv:<candidateId>:<item label>`, and item labels
     contain spaces — "YouTube channel", "Platform subscriptions". That produced
     `id="disc-inv:c_…:YouTube channel"` and the matching `aria-controls`, and
     **aria-controls is an ID-reference LIST**: a space splits it into two
     references, so every inventory disclosure on every report pointed at two
     ids that do not exist. Visually perfect, silently broken for anyone using a
     screen reader — and unaddressable by any selector, which is how the test
     that found it failed rather than the product.

     The state key is left alone on purpose: `state.open` is a plain object and
     colons and spaces are fine there. Only what reaches an id attribute is
     slugged, so nothing about which drawers are open changes. */
  function discId(id) {
    return 'disc-' + String(id).replace(/[^A-Za-z0-9_-]+/g, '-');
  }

  function disclosure(id, title, summary, body) {
    var open = !!state.open[id];
    return '<div class="disc' + (open ? ' open' : '') + '">' +
      '<button data-act="disc" data-d="' + id + '" aria-expanded="' + open +
      '" aria-controls="' + discId(id) + '">' +
      '<span class="t">' + title + '</span><span class="s">' + summary + '</span>' +
      '<span class="chev">' + U.icon('chev') + '</span></button>' +
      (open ? '<div class="disc-body" id="' + discId(id) + '">' + body + '</div>' : '') + '</div>';
  }

  /* ============================================== v5.4 — MOVING THROUGH A LIST
     The report was a dead end. You opened one, decided, and went Back to the
     drop — which re-rendered the list at the top and left you re-finding where
     you were, eight times a morning. The whole surface is designed for a desk
     working a short list in one sitting, and it had no way to say "next".

     `state.from` already records which list you arrived from, so the siblings
     are that list rather than a new concept. Run a name is deliberately excluded:
     its result is one creator, and inventing neighbours for it would imply a
     list nobody asked for.

     Position is stated ("3 of 8") because the two buttons alone cannot say how
     much is left, and how much is left is the thing that decides whether you
     keep going. Ends are disabled rather than wrapped — a list that loops has no
     end, and finishing the drop is a real event this product celebrates. */
  function siblings() {
    if (state.from === 'watchlist') return watchlist();
    if (state.from === 'passed') return passedList().map(function (r) { return r.c; });
    if (state.from === 'promoted') return promotedList().map(function (r) { return r.c; });
    if (state.from === 'drop') return dropList();
    return [];
  }
  function seriesOf(id) {
    var list = siblings();
    var i = -1;
    list.forEach(function (c, n) { if (c && c.id === id) i = n; });
    if (i === -1 || list.length < 2) return null;
    return { i: i, n: list.length, prev: i > 0 ? list[i - 1] : null,
      next: i < list.length - 1 ? list[i + 1] : null };
  }
  function seriesNav(c, compact) {
    var s = seriesOf(c.id);
    if (!s) return '';
    function btn(dir, target, label) {
      var on = !!target;
      return '<button class="serbtn" ' + (on
        ? 'data-act="report" data-id="' + esc(target.id) + '" data-from="' + esc(state.from) + '"'
        : 'disabled') + ' aria-label="' + esc(label) + '">' + U.icon(dir) + '</button>';
    }
    return '<div class="series' + (compact ? ' series--compact' : '') + '">' +
      btn('back', s.prev, 'Previous creator') +
      '<span class="ser-n">' + (s.i + 1) + ' of ' + s.n + '</span>' +
      btn('fwd', s.next, 'Next creator') + '</div>';
  }

  /* ================================================ v5.4 — WATCH THE CHECK
     Open question 21 asked whether the scan should be watchable, and parked it
     on two objections that are both about a LIVE scan: it would scroll faster
     than anyone can read, and a 403 flashing past reads as the product failing
     rather than as a fact about the web. §11.4 measured the real thing at ~85
     seconds for twenty creators with half of that the politeness delay between
     requests to one host — so it cannot honestly be sped up, and a log nobody
     can follow that merely FEELS thorough is the theatre §6.10 exists to avoid.

     This is not that. It is a REPLAY of the stored check record, at reading
     speed, in the order the checks actually happened — every row already on this
     page in a table nobody opens. Nothing is simulated and nothing is invented:
     the addresses, the outcomes, the dates and the count are the same rows
     `recordBody` prints, which is why the button sits on the same disclosure.

     It answers the second objection too, and this is the point: the rows that
     could not be read are shown, in their own mark, at the same speed as the
     rest. "Instagram — could not tell" going past is the product working. The
     failure mode was never showing people a 403; it was showing them a 403 with
     no way to tell it apart from an absence. */
  /* The three outcomes in the product's own words. "inconclusive" is the one
     that has to read as a fact about the page rather than as a fault. */
  var OUTCOME_WORD = { hit: 'found it', miss: 'not there', inconclusive: 'could not tell' };

  /* Where we looked, said so two rows are never the same sentence. Most rows
     carry a URL and the URL is the best possible answer — it is checkable. The
     presence-only items do not: they share the place "partner API — not
     available", so Platform subscriptions and Shopping tags rendered as two
     identical lines, which reads as the list stuttering rather than as two
     different things we could not see. Those get their item name in front. */
  function replayWhere(r) {
    if (r.url) return r.url;
    var item = r.item || '', place = r.place || '';
    if (!item) return place;
    if (!place || place.toLowerCase() === item.toLowerCase()) return item;
    return item + ' ' + DOT + ' ' + place;
  }

  function replayBar(c, sum) {
    if (!sum) return '';
    var on = state.replay && state.replay.id === c.id;
    var rows = S.recordFor(c, rewound() ? S.REWIND : null);
    if (!rows.length) return '';
    if (!on) {
      return '<div class="replay"><button class="btn btn--ghost" data-act="replay" data-id="' + c.id + '">' +
        U.icon('run') + 'Replay the check</button>' +
        '<span class="replay-n">' + rows.length + ' checks, replayed in the order they happened</span></div>';
    }
    var step = state.replay.step;
    var shown = rows.slice(0, step);
    var done = step >= rows.length;
    return '<div class="replay replay--on">' +
      '<div class="replay-h"><span class="lab">' +
      (done ? 'Checked ' + rows.length + ' places' : 'Checking&hellip; ' + step + ' of ' + rows.length) +
      '</span>' +
      '<button class="btn btn--ghost btn--sm" data-act="replaystop" data-id="' + c.id + '">' +
      (done ? 'Close' : 'Stop') + '</button></div>' +
      /* Last nine only. The list has to move without the page moving under the
         reader — growing it to 33 rows pushes the rest of the report down while
         someone is watching the top of it. */
      '<ul class="replay-l">' + shown.slice(-9).map(function (r) {
        return '<li><span class="rp-m rp-m--' + esc(r.outcome || 'none') + '"></span>' +
          '<span class="rp-w">' + esc(replayWhere(r)) + '</span>' +
          '<span class="rp-r">' + esc(OUTCOME_WORD[r.outcome] || r.outcome || '') + '</span></li>';
      }).join('') + '</ul>' +
      (done ? '<p class="replay-f">Every line above is a row in the check record, in the order it was ' +
        'written. Nothing here was re-run just now.</p>' : '') +
      '</div>';
  }

  function recordBody(c) {
    var rows = S.recordFor(c, rewound() ? S.REWIND : null);
    if (!rows.length) return '<p class="sub-t">No check record at this depth.</p>';
    var e = S.effortFor(c, asOf());
    /* The same rows the inventory lines open, in date order rather than grouped
       by claim. Two views of one record (§6.10) — and now literally one record,
       so the header total and the per-line totals are the same arithmetic. */
    /* The total here is larger than the numbers on the claim lines add up to,
       and that difference is worth one sentence rather than left for someone to
       find. A line states the doors that decided IT: the ones we opened, and
       separately the ones that would not answer. This table is every check on
       the creator — including the places behind a thing we found, and the
       study-depth reads that belong to Demand, Pressure and Fit rather than to
       any inventory line. */
    return '<p class="ledger-hd">Every check on this creator, in date order &mdash; the same rows ' +
      'each claim above opens, plus the reads behind Demand, Pressure and Fit, which belong to no ' +
      'single line. It totals more than the claim lines do: a line counts only the doors that ' +
      'settled it.</p>' +
      '<div class="wrapx"><table class="ct"><thead><tr>' +
      '<th>Claim</th><th>Where we looked</th><th>What came back</th><th>Source</th><th>When</th><th>Result</th><th>Depth</th>' +
      '</tr></thead><tbody>' + rows.map(function (r) {
        return '<tr' + (r.advisory ? ' class="adv"' : '') + '><td>' + esc(r.item || '&mdash;') + '</td>' +
          '<td><b>' + esc(r.place) + '</b></td>' +
          '<td>' + (r.status == null ? '' : '<span class="code">' + r.status + '</span> ') + esc(r.why) + '</td>' +
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

  /* ======================================================= WHAT THEY MAKE
     The report could tell you a creator had 340k followers, no newsletter and
     a falling posting rate, and never once show you a thing they had made.
     `samples` was stubbed in the export on every record the engine ever wrote,
     so the drawer that promised the work rendered empty on real data.

     It is not a drawer any more. The work is the first thing under the name,
     because "is this person any good" is the question a desk actually opens a
     report to answer, and no arrangement of four scored pillars answers it.

     THE ONE FACT PER ROW IS WHATEVER THAT SOURCE RETURNED, and the sources do
     not agree. YouTube gives views and a date. A feed gives a date. TikTok's
     open endpoint gives NEITHER — no view count, no likes, nothing. So a
     TikTok row carries a caption and nothing else, and that is the honest
     render: a row printing "0 views" would be a number the endpoint never
     gave us. `metricWhy` says which silence it is when a reader asks. */
  function sampleRow(sm) {
    var link = sm.url ? esc(sm.url) : '';
    var when = sm.at ? U.shortDate(sm.at) : '';
    var count = sm.metric == null ? '' :
      Number(sm.metric).toLocaleString() + ' ' + (sm.metricUnit || 'views');

    /* Written work leads with its own opening rather than a picture. It is a
       better sample of somebody who writes than any thumbnail, and for most of
       them there is no thumbnail to have. */
    var face = sm.thumbnail
      ? '<span class="sm-shot" style="background-image:url(' + esc(sm.thumbnail) + ')"></span>'
      : sm.excerpt
        ? '<span class="sm-quote">' + esc(sm.excerpt.slice(0, 180)) + '&hellip;</span>'
        : '<span class="sm-shot sm-shot--none" aria-hidden="true"></span>';

    var facts = [sm.publication || sm.platform, count, when].filter(Boolean);

    return (link ? '<a class="sm" href="' + link + '" target="_blank" rel="noopener noreferrer">' : '<div class="sm">') +
      face +
      '<span class="sm-t">' + esc(sm.title || 'Untitled') + '</span>' +
      '<span class="sm-m">' + facts.map(function (f, i) {
        return (i ? '<span class="sm-dot">' + DOT + '</span>' : '') + '<span>' + esc(f) + '</span>';
      }).join('') + '</span>' +
      (link ? '</a>' : '</div>');
  }

  /* §6.6 — NO EMPTY LABELLED SLOT. When nothing of theirs could be read the
     block does not render at all; the reason travels with confidence instead,
     where "how much of this did we actually settle" already lives. An empty
     titled box teaches that the report has a section you can stop reading —
     the same defect v5.4 deleted when it removed "No play recommended" from
     117 reports. */
  /* v6.3 — COVERS. The topics a creator actually works in, READ from their own
     titles, their site, and the model's read of them — never inferred. It is a
     read, not a count (same standing as the demand quotes), so it enriches the
     picture and, next, Fit — it does not add a fourth score. The lexicon matches
     the creator's own words; nothing is invented, and a creator with no match
     simply shows no strip. */
  var COVERS_LEX = [
    [/paint correction/i, 'Paint correction'],
    [/ceramic/i, 'Ceramic coating'],
    [/detailing|\bdetail\b/i, 'Car detailing'],
    [/machine shop|machining|\blathe\b|\bmill\b/i, 'Machine shop'],
    [/diagnostic/i, 'Diagnostics'],
    [/\bdiy\b/i, 'DIY repair'],
    [/repair|mechanic|wrench/i, 'Auto repair'],
    [/product (test|review)|\btested\b|\breviews?\b/i, 'Product reviews'],
    [/tutorial|how-?to|step-by-step|\bguide/i, 'Tutorials'],
    [/explainer/i, 'Explainers'],
    [/meet (and|&) greet/i, 'Meet & greets'],
    [/college football/i, 'College football'],
    [/mock draft|\bdraft\b/i, 'NFL draft'],
    [/football/i, 'Football'],
    [/\bfilm\b|breakdown|strategy/i, 'Film breakdowns'],
    [/true crime|misunderstood|\bcrime\b/i, 'True crime'],
    [/podcast/i, 'Podcasting'],
    [/gossip|celebrit/i, 'Celebrity gossip'],
    [/\bev\b|electric|aptera|slate|small truck/i, 'EVs'],
    [/recipe|cooking|kitchen/i, 'Cooking'],
    [/commentary/i, 'Commentary'],
    [/live show|daily live|\blive\b/i, 'Live shows'],
    [/\bclips?\b/i, 'Short clips'],
    [/\bcats?\b|vintage|\bhistory\b/i, 'History & archives']
  ];
  function coversFor(c) {
    /* Only the POSITIVE half of the read — everything before the monetization
       gap clause. The read ends "...but sells nothing: no store, no podcast,
       no newsletter", and matching that half tagged people with the very things
       they were found for NOT having. The titles are the honest signal; this
       clause just enriches them. */
    var head = S.plain(c.headline || '').split(/\bbut\b|\bhas no\b|\bhave no\b|\bwith no\b|sells nothing|, and (he|she|they) /i)[0];
    var blob = [head,
      (c.samples || []).map(function (s) { return (s.title || '') + ' ' + (s.excerpt || ''); }).join(' ')
    ].join(' ');
    var seenT = {}, out = [];
    COVERS_LEX.forEach(function (p) {
      if (seenT[p[1]]) return;
      var m = blob.match(new RegExp(p[0].source, 'gi'));
      if (m && m.length) { seenT[p[1]] = true; out.push({ label: p[1], n: m.length }); }
    });
    /* Most-covered first (stable sort keeps lexicon priority on ties). The count
       orders the read; it is not shown. */
    out.sort(function (a, b) { return b.n - a.n; });
    return out.slice(0, 12);
  }
  function coversStrip(c) {
    var t = coversFor(c);
    if (!t.length) return '';
    return '<div class="covers"><div class="covers-head">' +
      '<span class="covers-k">Type of content</span>' +
      '<span class="covers-src">read from their titles and site</span></div>' +
      '<div class="cover-tags">' +
      t.map(function (x) { return '<span class="cover-tag">' + esc(x.label) + '</span>'; }).join('') +
      '</div></div>';
  }

  function samplesBlock(c) {
    var list = (c.samples || []).filter(function (s) { return s && (s.title || s.excerpt); });
    if (!list.length) return '';
    return '<section class="work">' +
      '<div class="ch"><h2>What they make</h2>' +
      '<span class="q">' + esc(workLine(c, list)) + '</span></div>' +
      '<div class="samples">' + list.slice(0, 4).map(sampleRow).join('') + '</div>' +
      coversStrip(c) +
      '</section>';
  }

  /* Where the work came from, in one clause. A reader who wants to disbelieve
     a sample should be able to see how we came by it before they click it. */
  function workLine(c, list) {
    var places = [];
    list.forEach(function (s) {
      var p = s.platform || 'their pages';
      if (places.indexOf(p) < 0) places.push(p);
    });
    var n = list.length;
    return n + (n === 1 ? ' piece' : ' pieces') + ' of their own work, from ' +
      (places.length === 1 ? places[0].toLowerCase()
        : places.slice(0, -1).join(', ').toLowerCase() + ' and ' + places[places.length - 1].toLowerCase());
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
  /* v5.5 — WHAT A RE-CHECK ACTUALLY COSTS, read off the ledger.
     The cost strip at the bottom of this screen multiplied the list length by a
     hardcoded 4.2 and printed "$12.60 a month to keep watching" for three
     names. Admin, two clicks away, says the entire system has spent $4.76 —
     so the watchlist was quoting a figure nearly three times the whole bill to
     re-check three people, and it was invented rather than measured.

     This is the fifth instance of the same defect class in this product: a
     calibrated number typed as a literal beside the place that computes it. The
     Study row of the ledger IS the per-creator cost — §11.4's whole finding is
     that looking is free and the model calls are the bill — so it is divided
     here rather than restated. When the engine re-runs, this moves with it. */
  /* v5.5c — the ledger's work column, composed from the row's own counts. The
     numbers were embedded in a prose `note` and repeated by hand in the summary
     under the table; they are fields now and both renderings read the fields.
     Falls back to `note` verbatim when a row carries no count, so a re-exported
     seed that has not adopted the new shape still renders its own sentence. */
  /* ===================================== WHERE THE MONEY WENT — v6, derived.

     This was four rows typed into the seed by hand, and by 11 Aug 2026 it read
     83 creators, 1,244 calls and $4.76 against a real 218, ~5,000 and $25.35.
     It was accurate the day it was written, which is the whole problem: a
     maintained number is a snapshot that goes on presenting itself as a
     reading, and nothing on screen can tell you which it is.

     `S.admin.costs` is now read straight off the engine's cost log at export.

     THE SECOND TABLE IS THE NEW ONE, and it is the one an operator can act on.
     "Study cost $25" is not actionable. "judge_fit is $11.59 of it, at a penny
     a creator, because we send it every caption" points at the thing to
     change. It also answers the question the first table provokes and never
     addresses: why does one call cost twenty times another? Because you are
     billed for text, and the two token columns ARE the text. */
  function moneyTables(a) {
    var k = a.costs;
    if (!k) {
      /* An older seed, exported before costs travelled with it. Say so rather
         than rendering an empty table that looks like a bill of zero. */
      return '<p class="adfine mt-3">This seed was exported before the cost log travelled with it, ' +
        'so there is nothing to show. Re-export to fill it in.</p>';
    }

    var byPass = '<div class="wrapx"><table class="ct mt-3"><thead><tr>' +
      '<th>Depth</th><th>Fetches</th><th>Model calls</th><th>Cost</th></tr></thead><tbody>' +
      k.byPass.map(function (r) {
        return '<tr><td><b>' + esc(S.DEPTH[r.depth] ? S.DEPTH[r.depth].label || r.depth : r.depth) + '</b>' +
          '<br><span class="sub-t">' + esc(S.DEPTH[r.depth] ? S.DEPTH[r.depth].note : '') + '</span></td>' +
          '<td>' + U.num(r.fetches) + '</td>' +
          '<td>' + U.num(r.calls) + '</td>' +
          '<td><b>' + U.money(r.cost) + '</b></td></tr>';
      }).join('') + '</tbody></table></div>';

    var byCall = !k.byCall.length ? '' :
      '<span class="lab mt-5">What each kind of call costs</span>' +
      '<div class="wrapx"><table class="ct mt-3"><thead><tr>' +
      '<th>Call</th><th>What it asks</th><th>Calls</th><th>Each</th><th>Total</th>' +
      '<th>Text in / out</th></tr></thead><tbody>' +
      k.byCall.map(function (r) {
        return '<tr><td><b>' + esc(CALL_LABEL[r.label] ? CALL_LABEL[r.label][0] : r.label) + '</b></td>' +
          '<td class="sub-t">' + esc(CALL_LABEL[r.label] ? CALL_LABEL[r.label][1] : '') + '</td>' +
          '<td>' + U.num(r.calls) + (r.refused ? '<br><span class="sub-t">' + U.num(r.refused) + ' refused</span>' : '') + '</td>' +
          '<td class="sub-t">' + U.money(r.perCall) + '</td>' +
          '<td><b>' + U.money(r.cost) + '</b></td>' +
          '<td class="sub-t">' + U.num(r.avgIn) + ' / ' + U.num(r.avgOut) + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      '<p class="adfine"><b>You pay for text, not for difficulty.</b> Every call sends words and gets ' +
      'words back, and both are billed. The expensive ones are the ones we send the most to &mdash; ' +
      'judging fit reads every caption; reading their own words for pressure reads four lines.</p>';

    /* The date is not decoration. This screen is a static export, so it is
       true as of the moment it was written and not a second later. A ledger
       that will not say when it was taken is the defect this replaced. */
    var stamp = k.takenAt
      ? '<p class="adfine">Read off the engine’s cost log when this cohort was exported, ' +
        esc(U.longDate(k.takenAt.slice(0, 10))) + '. It moves when the cohort is re-exported, not while you read it.</p>'
      : '';

    return byPass + stamp + byCall;
  }

  /* Engine call labels, in the words an operator would use. Held here because
     the engine's own labels are function names and this screen is not for the
     person who wrote them. */
  var CALL_LABEL = {
    judge_fit: ['Fit', 'does this person match the brief?'],
    classify_demand: ['Demand', 'which of these comments ask to buy?'],
    classify_strain: ['Pressure', 'do their own words show strain?'],
    propose_places: ['More places', 'where else might their store be?'],
    propose_candidates: ['Discovery', 'give me names for this brief'],
    write_headline: ['Verdict line', 'one sentence on why they are worth a call'],
  };

  function ledgerWork(r) {
    if (r.fetches) return U.num(r.fetches) + ' fetches' + (r.note ? ', ' + r.note : '');
    if (r.calls) return U.num(r.calls) + ' model calls' + (r.note ? ' — ' + r.note : '');
    if (r.briefs) return U.plural(r.briefs, 'brief');
    return r.note || '';
  }
  function ledgerFetches(ledger) {
    return (ledger || []).reduce(function (n, r) { return n + (Number(r.fetches) || 0); }, 0);
  }

  /* v6 — derived from the exported cost log, with the hand-kept ledger as the
     fallback for a seed written before costs travelled with it. Study is the
     whole bill (§11.4), so the per-creator figure is Study's spend over the
     creators who reached it. */
  function perCreatorCost() {
    /* Counted at export from the creator stamped on every cost row, NOT the
       spend divided by the list on screen. That version read "44 cents each"
       against a true 12: the money was spent on 218 creators across a week of
       runs and this cohort is 58 of them, so the fraction had two unrelated
       numbers in it. */
    var k = S.admin.costs;
    if (k && k.perCreator != null) return k.perCreator;
    var study = null;
    (S.admin.ledger || []).forEach(function (r) { if (r.depth === 'study') study = r; });
    var m = study && Number(study.creators);
    if (!study || !m) return null;
    return study.cost / m;
  }

  function watchlistView() {
    var list = watchlist();
    /* v5.5 — the cost came off the bottom of the page and into the head.
       As a trailing strip it read as an afterthought bolted under the list, and
       it is the one standing fact about this screen: the watchlist is the only
       place in Scout where spend compounds, so what it costs belongs with what
       it is. The two paragraphs of argument that were here collapsed into one —
       the second was three clauses defending a design decision to someone who
       came to look at three names. */
    var per = perCreatorCost();
    var monthly = per == null ? null : per * list.length;
    var head = '<header class="pagehead"><h1>Watchlist</h1>' +
      '<p class="deck">Every name here has a date to check back. When the window closes it comes back ' +
      'as a decision, with what moved.</p>' +
      (list.length && monthly != null
        ? '<div class="headmeta">' +
          '<span class="hm-i"><b>' + U.plural(list.length, 'name') + '</b> being watched</span>' +
          '<span class="hm-i"><b>' + U.money(monthly) + '</b> a month to keep re-checking' +
          U.rcp('watchcost', '', 'what the watchlist costs') + '</span>' +
          '</div>'
        : '') +
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

      /* v5.9 — the same pattern as the drop: the name opens the report, the
         buttons are verbs. Watching had no exit from the list you were looking
         at — the only control on the row was the report. */
      /* v6 P0 — same row scaffold as the drop: score ring far left, the face
         beside the name, the verbs on the right. The watchlist used to mirror
         the drop rotated — ring on the right, no ring column — which read as a
         different screen. One row shape now, ranked or not. */
      return '<div class="wrow wrow--link" data-act="report" data-id="' + c.id + '" data-from="watchlist">' +
        '<div class="scorewrap">' + U.ring(c, 'sm', score(c)) + '</div>' +
        '<div class="rowmain">' +
        '<div class="idline">' + U.face(c, 'sm') +
        '<div class="idtext">' +
        '<div class="idtop"><h2 class="nm">' +
        '<button class="nmlink" data-act="report" data-id="' + c.id + '" data-from="watchlist">' + esc(c.name) + '</button>' +
        '</h2><span class="hd">' + esc(c.handle) + '</span></div>' +
        '<span class="plat1">kept ' + esc(U.longDate(since)) + ' ' + DOT + ' ' + esc(win) + ' window</span>' +
        '</div></div>' +
        /* What the watchlist watches is the trajectory block, because those are
           the lines that move. An alert quotes the trend, never the score
           delta — "score dropped 4 points" says nothing a person can act on. */
        '<ul class="trendlist">' + trend.map(function (t) {
          return '<li>' + esc(t) + '</li>';
        }).join('') + '</ul>' +
        due +
        (state.passTray === c.id ? passTray(c) : '') + '</div>' +
        '<div class="acts">' +
        U.verbBtn('promote', c.id, 'Promote', 'go', 'sm') +
        '<button class="vbtn vbtn--undo vbtn--sm" data-act="passtray" data-id="' + c.id + '">Stop watching</button>' +
        '</div></div>';
    }).join('');

    /* The trailing `.wcostbar` is gone; its number is in the head and its
       argument is behind the head's `?`, which is where every other receipt in
       this product lives. */
    return head + '<div class="listwrap">' + rows + '</div>';
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
      /* Decision 116 — one name for one action. This said "Read it again",
         which is a different door to the same room: a person who has learned
         "Open the report" on the drop has to learn it a second time here, and
         the two names imply the report differs by where you came from. It does
         not. Every synonym is deleted. */
      '<button class="btn btn--sm btn--out" data-act="report" data-id="' + c.id + '" data-from="watchlist">Open the report</button>' +
      '<button class="btn btn--sm btn--out" data-act="passtray" data-id="' + c.id + '">Stop watching</button>' +
      '</div></div>';
  }

  /* ========================================================= PROMOTED LIST */
  /* v7 — THE ONLY LIST THAT CAN PROVE THE MODEL RIGHT HAD NO SCREEN.
     promotedList() was built and never rendered, so a promoted name was reachable
     only from the day's drop — and gone from it the next morning, with "Any
     word?" still blank on a report nobody could find. Same row as the watchlist;
     the outcome takes the place of the trend. */
  function outcomeLine(c) {
    var o = outcomeOf(c.id);
    if (!o || !o.code) return 'No word yet';
    var hit = null;
    S.outcomes.forEach(function (x) { if (x.code === o.code) hit = x.label; });
    var why = o.code === 'declined' && o.declineCode ? declineLabel(o.declineCode) : null;
    return (hit || o.code) + ' ' + U.shortDate(o.at || asOf()) + (why ? ' ' + DOT + ' ' + why.toLowerCase() : '');
  }

  function promotedView() {
    var rows = promotedList();
    var head = '<header class="pagehead"><h1>Promoted</h1>' +
      '<p class="deck">Everyone promoted, and what they said.</p></header>';

    if (!rows.length) {
      return head + '<section class="p zero"><h2>Nobody promoted yet.</h2>' +
        '<p>Promote a creator from the drop and they are kept here with what they said.</p></section>';
    }

    return head + '<div class="listwrap">' + rows.map(function (r) {
      var c = r.c;
      var o = outcomeOf(c.id);
      return '<div class="wrow wrow--link" data-act="report" data-id="' + c.id + '" data-from="promoted">' +
        '<div class="scorewrap">' + U.ring(c, 'sm', score(c)) + '</div>' +
        '<div class="rowmain">' +
        '<div class="idline">' + U.face(c, 'sm') +
        '<div class="idtext">' +
        '<div class="idtop"><h2 class="nm">' +
        '<button class="nmlink" data-act="report" data-id="' + c.id + '" data-from="promoted">' + esc(c.name) + '</button>' +
        '</h2><span class="hd">' + esc(c.handle) + '</span></div>' +
        '<span class="plat1">promoted ' + esc(U.longDate(r.at)) + ' ' + DOT + ' ' + esc(r.by) + '</span>' +
        '</div></div>' +
        '<p class="oline' + (o && o.code ? '' : ' oline--none') + '">' + esc(outcomeLine(c)) + '</p>' +
        '</div>' +
        '<div class="acts">' +
        '<button class="btn btn--sm btn--out" data-act="report" data-id="' + c.id + '" data-from="promoted">Open the report</button>' +
        '<button class="btn btn--ghost btn--sm" data-act="outreach" data-id="' + c.id + '">Outreach package</button>' +
        '</div></div>';
    }).join('') + '</div>';
  }

  /* =========================================================== PASSED LIST */
  /* Passed creators go somewhere and it is visible. The reason and the trigger
     together are what make a Pass read as a decision rather than a deletion.
     Not a third holding state — that would be a fourth verb (§6.3.1). */
  function passedView() {
    var rows = passedList();
    var head = '<header class="pagehead"><h1>Passed</h1>' +
      '<p class="deck">Nobody vanishes. Every pass carries your reason and what would bring the name ' +
      'back.</p></header>';

    if (!rows.length) {
      return head + '<section class="p zero"><h2>Nothing passed yet.</h2>' +
        '<p>Pass a creator with a reason and they appear here with what would return them.</p></section>';
    }

    var misread = 0;
    rows.forEach(function (r) { if (r.code === 'not_asked') misread++; });

    var body = '<div class="listwrap">' + rows.map(function (r) {
      var reason = S.reasonFor(r.code) || { label: r.code };
      /* v5.9 — an un-pass on the list that owns the pass. "Nobody vanishes" was
         true of the record and not of the control: the row's only button was
         the report. */
      return '<div class="prow prow--link' + (r.fresh ? ' prow--fresh' : '') + '"' +
        ' data-act="report" data-id="' + r.c.id + '" data-from="passed">' +
        U.face(r.c, 'sm') +
        '<div class="pmain"><span class="pline"><b>' +
        '<button class="nmlink" data-act="report" data-id="' + r.c.id + '" data-from="passed">' + esc(r.c.name) + '</button>' +
        '</b>' +
        '<span class="sep">' + DOT + '</span>passed ' + esc(U.shortDate(r.at)) +
        /* Lower-case the first letter only, so the reason reads as part of the
           sentence without turning "Not what I asked for" into "i". */
        '<span class="sep">' + DOT + '</span><span class="rsn">' +
        esc(reason.label.charAt(0).toLowerCase() + reason.label.slice(1)) + '</span>' +
        '</span></div>' +
        '<button class="vbtn vbtn--undo vbtn--sm" data-act="unpass" data-id="' + r.c.id + '">Put back in the drop</button>' +
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
  /* Two ways of bringing somebody into Scout, stated as what they DO rather
     than as what they are. "Brief" and "Person" would name the objects; a
     member opening this sheet is choosing between going looking and going to
     one address. `.seg` is the same control the guardrails already use. */
  function briefModeToggle() {
    return '<div class="seg seg--inline briefmode">' +
      ['brief', 'person'].map(function (m) {
        return '<button data-act="briefmode" data-v="' + m + '" aria-pressed="' +
          (state.briefMode === m) + '">' +
          (m === 'brief' ? 'Go looking for people' : 'Look up names') + '</button>';
      }).join('') + '</div>';
  }

  function briefView() {
    var d = state.draft || { text: '', chips: [], bar: '', cap: 100, runs: '3 months' };

    /* v6.1 — ONE SHEET, TWO MODES. The toggle is above the heading copy
       because the two modes have different decks, and a control that changes
       the paragraph under it has to sit above the paragraph.

       The person half is the old Run a name screen, unchanged below the
       header — same parser, same four stages, same honest miss. */
    if (state.briefStage === 'write' && state.briefMode === 'person') {
      return '<header class="pagehead"><span class="kick pk">New brief</span><h1>Add to Scout</h1>' +
        briefModeToggle() +
        /* v6.2 — the old deck said "one person" and promised they stay in
           the Shortlist (then "Tracked by hand") afterwards. Both were true of the single-name screen
           and neither is true now: it takes a list, and where the list goes is
           a decision made on the results, not a thing that happens to you. */
        '<p class="deck">Handles or profile links, as many as you have. ' +
        'Same ladder, same verbs.</p></header>' +
        runNameBody();
    }

    if (state.briefStage === 'write') {
      return '<header class="pagehead"><span class="kick pk">New brief</span><h1>Add to Scout</h1>' +
        briefModeToggle() +
        '<p class="deck">A brief is the assignment: what we need, who we are looking for, where they ' +
        'post, and what good looks like. Write it the way you would say it out loud. This is not a ' +
        'search &mdash; a search returns results now, ranked by match, but a brief returns nobody ' +
        'today, reports tomorrow morning, and is allowed to find nothing.</p>' +
        '</header>' +
        '<div class="form">' +
        '<form data-act="briefsubmit">' +
        '<label class="lab" for="bdesc">What are you looking for?</label>' +
        /* The placeholder is one sentence now, not three. At three it filled the
           box, rendered as prose, and read as a filled field — which is how an
           empty submit went unnoticed. It also stops being an example anybody
           could accidentally demo as their own writing. */
        '<textarea class="inp inp--area" id="bdesc" rows="5" aria-describedby="bdescerr"' +
        (state.briefError ? ' aria-invalid="true"' : '') +
        ' placeholder="e.g. Insider access to Southern college football &mdash; beat writers and people close to local coaches."' +
        '>' + esc(d.text) + '</textarea>' +
        (state.briefError ? '<p class="fielderr" id="bdescerr" role="alert">' + esc(state.briefError) + '</p>'
          : '<p class="vh" id="bdescerr"></p>') +
        '<div class="formacts"><button class="btn btn--primary" type="submit">Read it back to me</button>' +
        '<button class="btn btn--ghost" type="button" data-act="view" data-view="drop">Cancel</button></div>' +
        '</form></div>' +

        /* v5.5c — THE SCOUT, bottom right, standing.
           This screen is the emptiest in the product: a title, two paragraphs
           and a box, with two thirds of the viewport blank underneath. The mark
           fills the corner without competing — it is behind the content in the
           stacking order, it takes no clicks, and it is `aria-hidden` because it
           states nothing the page has not already said.

           A WRAPPER, NOT A BARE IMAGE, because the shadow is a pseudo-element
           and replaced elements do not have any. `onerror` removes the whole
           wrapper rather than just the image — otherwise a missing file leaves
           an empty ellipse on the floor. */
        '<span class="floatmark floatmark--fig" aria-hidden="true">' +
        '<img src="assets/scount.png" alt="" ' +
        'onerror="this.parentNode.remove()">' +
        '</span>';
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
      '<p class="qualbar">' + esc(d.bar) + '</p>' +
      /* Stated here, under the chips, because this is where the reader is
         counting what Scout heard against what they wrote. */
      /* One line per platform, not one sentence about all of them. The reasons
         genuinely differ, and "neither is in this brief" followed by two
         different causes reads as one cause applied twice. */
      ((d.unread && d.unread.length)
        ? d.unread.map(function (p) {
            return '<p class="srcgap">' + U.icon('sources') + '<span>' +
              esc(p.name) + ' is not in this brief &mdash; ' + esc(p.why) + '.</span></p>';
          }).join('')
        : '') + '</div>' +

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
      /* v5.4 — PRICED OFF THE MEASURED RATE, NOT OFF A GUESS. `cap * 0.18 + 4`
         and `cap * 0.12` put a 100-person brief at $22 to start and $12/month;
         costs.jsonl puts a fully studied creator at $0.0396, so the real figures
         are about $4 and $2. Five-fold out, and out in the direction that makes
         the product look expensive — the opposite of the claim the admin panel
         now makes two clicks away. Same constant, one home: PER_CREATOR. */
      '<p class="gcost">Roughly <b>' + U.money(d.cap * PER_CREATOR) + '</b> to start, about <b>' +
      U.money(d.cap * PER_CREATOR * 0.6) + '/month</b> to keep watching. First names tomorrow morning.</p>' +
      '<p class="gnote">Narrow briefs are cheaper than broad ones. The cost driver is breadth, not ' +
      'specificity. The search is capped and will say so if it hits the cap.</p>' +
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
      '<p class="lifecycle">Delete does not exist. Every Promote, Watch and Pass under a brief is a ' +
      'training label, and deleting the brief orphans them. Pausing keeps the record.</p>' +
      '</div>';
  }

  /* ================================================================ SOURCES
     §6.13, decision 125. Every place Scout can read, what each one settles, and
     what switching it off costs.

     v5.5 — IT IS A SECTION OF ADMIN, not a screen. It had a permanent seat in
     the rail beside the four surfaces that are the morning's work, and it is a
     thing you set once and revisit when a credential lands. Admin is already
     the answer to "how is this configured"; the source catalogue is one more
     answer to that question, and putting it anywhere else was what let it drift
     from Admin's own duplicate of it in the first place (see adminView).

     IT IS NOT A PRICE LIST, and that was the hard part of the design. The
     obvious version shows a cost per platform and lets you switch off the
     expensive ones — but §11.4 measured a full run of twenty creators at 5,167
     fetches for $0.0000, with the entire bill in model judgment. A cost column
     would read $0.00 down its whole length and teach the opposite of the truth.

     What switching a source off actually does is lower what can be PROVEN, so
     that is the column. `costs` is written from the source's side: what stops
     being knowable, in the words the report would otherwise have used. */
  var SOURCES = [
    { id: 'ownsite', name: 'Their own site', kind: 'first-party', on: true, places: 5,
      proves: 'A store or a newsletter, on the most first-party surface there is',
      costs: 'Absence can no longer be earned for either — both fall back to "not found"' },
    { id: 'tiktok', name: 'TikTok profile', kind: 'first-party', on: true, places: 1,
      proves: 'Followers, bio, captions and their picture',
      costs: 'Most of the cohort loses its audience number entirely' },
    { id: 'youtube', name: 'YouTube channel', kind: 'first-party', on: true, places: 3,
      proves: 'Followers, bio, and whether a channel exists at all',
      costs: 'One tier-one inventory item stops resolving' },
    { id: 'ytapi', name: 'YouTube Data API', kind: 'api', on: true, places: 1,
      proves: 'Comments — the audience asking to buy — plus post dates and views',
      costs: 'Demand cannot be read, and most of Pressure with it' },
    { id: 'reddit', name: 'Reddit', kind: 'api', on: false, built: true, places: 1,
      proves: 'What strangers say when the creator is not in the room',
      costs: 'Demand loses its only source outside YouTube' },
    { id: 'bluesky', name: 'Bluesky', kind: 'api', on: true, places: 2,
      proves: 'Their posts with dates and likes, their followers, and the replies under them',
      costs: 'Writers with no YouTube lose their posting rate again, and their work stops being shown' },
    { id: 'newsletter', name: 'Newsletter platforms', kind: 'guess', on: true, places: 6,
      proves: 'Substack, beehiiv, Buttondown, Ghost — is there a list?',
      costs: 'Newsletter never reaches "verified absent"' },
    { id: 'store', name: 'Store platforms', kind: 'guess', on: true, places: 6,
      proves: 'Shopify, Gumroad, Ko-fi, Stan, Etsy — is there anything to buy?',
      costs: 'Store never reaches "verified absent"' },
    { id: 'membership', name: 'Membership platforms', kind: 'guess', on: true, places: 2,
      proves: 'Patreon, Buy Me a Coffee',
      costs: 'A tier-two item stops resolving' },
    { id: 'podcast', name: 'Apple Podcasts', kind: 'api', on: true, places: 1,
      proves: 'Whether they already have a show',
      costs: 'A tier-two item stops resolving' },
    { id: 'hubs', name: 'Link hubs', kind: 'guess', on: true, places: 2,
      proves: 'Linktree and Beacons — everything they point at',
      costs: 'Harvested links dry up, so fewer real places get checked' },
    { id: 'instagram', name: 'Instagram', kind: 'first-party', on: true, places: 1, weak: true,
      proves: 'Links only. It answers 200 for handles that do not exist, so it can never settle anything',
      costs: 'Nothing — which is worth seeing, and is why it is listed rather than hidden' }
  ];

  /* ---------------------------------------------- WHERE A BRIEF CAN LOOK

     v6.1 — THE BRIEF READ-BACK OFFERED PLATFORMS SCOUT CANNOT READ.

     `readBack` carried its own platform list — TikTok, Instagram, YouTube,
     Substack, Reddit, X — and fell back to `['TikTok', 'Instagram', 'YouTube']`
     when a brief named none. Two of those six are not sources. X has never been
     one. Instagram is in the catalogue below marked `weak` precisely because it
     answers 200 for handles that do not exist, so it can never settle anything
     — and it was being offered as a place a brief would go looking, on the one
     screen whose whole job is to show the member what Scout heard.

     A chip that names an unreadable platform is worse than a missing chip. The
     member corrects what they see; nobody deletes a chip that looks right, so
     the brief deploys carrying a promise about Instagram that every report
     under it will quietly break.

     SO THE LIST IS DERIVED, NOT AUTHORED. `src` points at the catalogue entry
     that would do the reading; a platform whose source is missing or `weak`
     never becomes a chip. That keeps the two from drifting the way the
     threshold's five copies did — switch a source off in Admin and this list
     still offers it (being off is a setting, not a capability), but delete or
     weaken a source and the chip goes with it. */
  var BRIEF_PLATFORMS = [
    { name: 'YouTube', src: 'youtube', re: /youtube|yt\b|vlog/ },
    { name: 'TikTok', src: 'tiktok', re: /tiktok/ },
    { name: 'Bluesky', src: 'bluesky', re: /bluesky|bsky/ },
    { name: 'Substack', src: 'newsletter', re: /substack|newsletter|beehiiv|ghost/ },
    { name: 'Reddit', src: 'reddit', re: /reddit|subreddit/ },
    { name: 'Podcasts', src: 'podcast', re: /podcast|episode|show\b/ }
  ];

  /* The default when a brief names nowhere. Not every readable platform — the
     two that carry a profile, an audience number and a picture for most of the
     cohort. Listing all six would read as a promise to sweep all six. */
  var BRIEF_PLATFORMS_DEFAULT = ['YouTube', 'TikTok'];

  /* NAMED, AND NOT READ. Dropping a platform the member typed is right; doing
     it silently is not. They wrote "Instagram" and the read-back is the one
     screen that promises to show them what Scout heard — a chip that quietly
     vanishes teaches that the read-back is decorative, and the brief deploys
     with a gap nobody agreed to.

     Each carries WHY, because the reasons are different and the difference is
     the product's whole claim. Instagram is reachable and useless; Twitch and
     Vimeo could not be reached from here at all and that is a fact about our
     network, not about them, so it is not stated as one. */
  var BRIEF_PLATFORMS_UNREAD = [
    { name: 'Instagram', re: /instagram|\binsta\b|\big\b/,
      why: 'it answers for handles that do not exist, so nothing it says can be trusted' },
    { name: 'X', re: /\bx\b|twitter|tweet/, why: 'it is closed to us' },
    { name: 'Facebook', re: /facebook|\bfb\b/, why: 'it is closed to us' },
    { name: 'Threads', re: /threads/, why: 'it is closed to us' },
    { name: 'Twitch', re: /twitch/, why: 'we have not been able to reach it' },
    { name: 'Vimeo', re: /vimeo/, why: 'we have not been able to reach it' },
    { name: 'Spotify', re: /spotify/, why: 'nothing on the report asks about music yet' },
    { name: 'LinkedIn', re: /linkedin/, why: 'it is closed to us' },
    { name: 'Pinterest', re: /pinterest/, why: 'it is closed to us' },
    { name: 'Snapchat', re: /snapchat/, why: 'it is closed to us' }
  ];

  function briefPlatforms() {
    return BRIEF_PLATFORMS.filter(function (p) {
      var s = SOURCES.filter(function (x) { return x.id === p.src; })[0];
      return s && !s.weak;
    });
  }

  function sourceOn(s) {
    if (state.sources[s.id] !== undefined) return !!state.sources[s.id];
    return !!s.on;
  }

  function sourcesSection() {
    var offNames = SOURCES.filter(function (s) { return !sourceOn(s); })
      .map(function (s) { return s.name; });
    var places = SOURCES.filter(sourceOn).reduce(function (n, s) { return n + s.places; }, 0);

    return '<section class="adsec" id="sources">' +
      '<h2 class="adsec-h">Where Scout looks</h2>' +
      '<p class="adsec-d">Every place Scout is allowed to read, and what each one can settle. ' +
      'Switching one off does not save money &mdash; fetching is free and the bill is judgment. ' +
      'It lowers what can be <b>proven</b>, which is what each row states.</p>' +

      '<div class="srcsum"><span class="k">Looking in</span><span class="v">' + places + ' places</span>' +
      (offNames.length
        ? '<span class="srcoff">' + offNames.length + ' source' + (offNames.length > 1 ? 's' : '') +
          ' off &mdash; every report says so on its face</span>'
        : '<span class="srcall">Everything available is on</span>') + '</div>' +

      '<ul class="srclist">' + SOURCES.map(function (s) {
        var on = sourceOn(s);
        return '<li class="src' + (on ? '' : ' src--off') + '">' +
          '<div class="src-h">' +
          '<button class="tgl" role="switch" aria-checked="' + on + '" data-act="srctoggle" data-id="' + s.id + '">' +
          '<span class="tgl-k"></span><span class="sr-only">' + esc(s.name) + '</span></button>' +
          '<div class="src-n"><b>' + esc(s.name) + '</b>' +
          '<span class="src-m">' + esc(s.kind) + ' ' + DOT + ' ' + s.places +
          ' place' + (s.places > 1 ? 's' : '') + '</span></div>' +
          (s.built && !on ? '<span class="src-tag">built, not connected</span>' : '') +
          (s.weak ? '<span class="src-tag src-tag--weak">never conclusive</span>' : '') +
          '</div>' +
          '<p class="src-p">' + esc(s.proves) + '</p>' +
          '<p class="src-c"><span class="k">Switched off</span> ' + esc(s.costs) + '</p>' +
          '</li>';
      }).join('') + '</ul>' +

      '<p class="adfine">Reddit is built and waiting on a credential. It is listed rather than hidden ' +
      'because a source we cannot read yet is a different thing from one that found nothing, and that ' +
      'distinction is the whole of how Scout reports absence.</p></section>';
  }

  /* ================================================= PRELIMINARY HEADLINE */
  /* Decision 119, and it is bounded by decision 99 without exception: Scout may
     quote and count, it may not diagnose. So this assembles COUNTABLE FACTS
     ONLY and joins them with full stops. There is no adjective in it, no causal
     clause, and no version of "they are ready for a call" — every one of those
     is the model explaining a person to you, which is the sentence §12.1 will
     not let a real creator's report carry.

     The engine legitimately writes no headline (it says so, in those words),
     and until now the report printed that sentence to the member: an internal
     note about the engine's remit, presented as if it were the finding.

     It returns NOTHING when nothing was readable. An empty headline is honest;
     a headline assembled from three unknowns is a sentence about our own
     ignorance dressed as a finding. */
  function preliminaryHeadline(c) {
    var bits = [];
    var plat = mainPlatform(c); /* v5.3 — was platforms[0]; see mainPlatform. */
    if (plat && plat.followers) {
      bits.push(U.followers(plat.followers) + ' on ' + String(plat.name).replace(/ (profile|channel)$/i, ''));
    }
    var cl = S.claims(c);
    var absent = (cl.missing && cl.missing.built ? cl.missing.built : [])
      .filter(function (x) { return x.state === S.STATES.A; });
    if (absent.length) {
      /* Lower-casing the item labels reads correctly mid-sentence and wrecks the
         one proper noun in the set — "no youtube channel" is a typo on a screen
         whose entire claim is care. Brands keep their capitals; everything else
         is an ordinary noun and takes the sentence's case. */
      var BRANDS = { youtube: 'YouTube', tiktok: 'TikTok', instagram: 'Instagram', patreon: 'Patreon' };
      var names = absent.map(function (x) {
        return String(x.item).toLowerCase().replace(/\b(youtube|tiktok|instagram|patreon)\b/g,
          function (m) { return BRANDS[m]; });
      });
      bits.push('No ' + (names.length > 1
        ? names.slice(0, -1).join(', ') + ' or ' + names[names.length - 1]
        : names[0]));
    }
    if (c.commentsRead != null) {
      bits.push(c.commentsRead
        ? c.commentsRead + ' comments read'
        : 'No comments we could read');
    }
    return bits.length ? bits.join('. ') + '.' : '';
  }

  /* ============================================================ RUN A NAME */
  /* Decision 118 — a handle OR a URL. A person who has just found someone has
     the profile open, and what is on their clipboard is the address bar, not a
     handle they have retyped. Refusing the URL makes them do the engine's job.
     Everything after the last slash, minus a query string and an @, is the
     handle on every platform Scout reads — which is not a parser so much as an
     observation about how these URLs are built. */
  var RUNHOSTS = [
    { re: /tiktok\.com/i, name: 'TikTok' },
    { re: /youtube\.com|youtu\.be/i, name: 'YouTube' },
    { re: /instagram\.com/i, name: 'Instagram' },
    /* bsky.app/profile/<handle>, where the handle is very often a domain —
       mkbhd.com, 404media.co. The last-segment rule already handles it, and
       the dot in the handle is why the trailing-slash test above matters. */
    { re: /bsky\.app/i, name: 'Bluesky' }
  ];
  function normalizeSubject(raw) {
    var s = String(raw || '').trim();
    if (!s) return { handle: '', platform: null, wasUrl: false };
    /* v5.4 — the domain half allowed ONE label before the suffix, so
       `instagram.com/handle` parsed as a URL and `www.instagram.com/handle` did
       not: it fell through to the handle branch, became
       `@www.instagram.com/motorcitymechanic/`, and missed. Copying a URL out of
       a browser's address bar is the most likely way this field gets used, and
       a leading `www.` is what a browser puts there.

       The trailing slash stays REQUIRED, and it is doing real work: it is the
       only thing separating a bare domain from a handle that contains a dot.
       `magic.maike` is a real creator in this cohort — without the slash test,
       loosening the domain half would swallow their handle as a hostname. */
    if (!/^https?:\/\//i.test(s) && !/^[a-z0-9.-]+\.[a-z]{2,}\//i.test(s)) {
      return { handle: s.charAt(0) === '@' ? s : '@' + s, platform: null, wasUrl: false };
    }
    var host = '', path = s;
    try {
      var u = new URL(/^https?:\/\//i.test(s) ? s : 'https://' + s);
      host = u.hostname; path = u.pathname;
    } catch (e) { /* not parseable as a URL — fall through and treat it as text */ }
    var seg = path.split('/').filter(Boolean);
    /* youtube.com/channel/UC… and /c/name both put the name last; a bare
       tiktok.com/@handle has it first. Last non-empty segment covers both. */
    var last = seg.length ? seg[seg.length - 1] : '';
    var plat = null;
    RUNHOSTS.forEach(function (h) { if (h.re.test(host)) plat = h.name; });
    return {
      handle: last ? (last.charAt(0) === '@' ? last : '@' + last) : s,
      platform: plat, wasUrl: true
    };
  }

  /* ============================================ v5.4 — RUN A NAME RESOLVES
     This screen read `W.runANameResult` — ONE hardcoded record — and rendered
     it whatever you typed. Typing an x.com URL for a creator Scout has never
     heard of returned @itshunterfriesen, score 39, with his face on it. It is
     the only live beat in the demo and it could not survive one question from
     the room.

     Resolution is a lookup against the records already in the seed, matched on
     the handle. Deliberately NOT fuzzy: "did you mean" on a name search is a
     guess, and a guess is what the wall exists to keep out of this product. An
     exact miss is answered with a true sentence instead — Scout has not looked
     at this one yet, and it goes into tonight's run, which is what a
     continuously-running product actually does with a name it does not know.

     Matching strips @ and the punctuation platforms allow in handles, because
     "@pant-he-organizer" and "pantheorganizer" are the same person typed by two
     people, and rejecting the second teaches nobody anything. */
  function runKey(s) {
    return String(s || '').toLowerCase().replace(/^@/, '').replace(/[^a-z0-9]/g, '');
  }
  var _runIndex = null;
  function runIndex() {
    if (_runIndex) return _runIndex;
    _runIndex = {};
    /* One record per creator. A creator under two briefs is two records with
       different Fit verdicts, so the choice matters — always take the house
       cohort's copy. It is the only one that exists for every name, and it is
       the brief a run-a-name result is measured against on the way out. Keying
       this off the tab in view instead would make the same search return two
       different reports depending on where you came from. */
    var houseCohort = (brief('b_house') || {}).cohortId;
    W.candidates.forEach(function (c) {
      var k = runKey(c.handle);
      if (!k) return;
      if (!_runIndex[k] || c.mandateId === houseCohort) _runIndex[k] = c;
    });
    return _runIndex;
  }
  function runCount() {
    var n = 0, k;
    for (k in runIndex()) if (Object.prototype.hasOwnProperty.call(runIndex(), k)) n++;
    return n;
  }

  /* v6.1 — the header split off so the body can be dropped into the [+] sheet,
     which now owns this. Nothing inside changed. */
  function runNameView() {
    /* Decision 118 — ONE line of copy. This carried a deck and two lifecycle
       paragraphs: 78 words of justification in front of a text field, arguing
       about pricing to someone who has not typed anything yet. The arguments
       are all true and all belong in the PRD, not on the screen. */
    return '<header class="pagehead"><h1>Run a name</h1>' +
      '<p class="deck">Handles or profile links, as many as you have. Same ladder, same verbs.</p></header>' +
      runNameBody();
  }

  /* "fit and the score and confidence" — three gates joined by `and` twice, which
     is how a list of two became a list of three without anybody reading it. */
  function andList(xs) {
    return xs.length > 1
      ? xs.slice(0, -1).join(', ') + ' and ' + xs[xs.length - 1]
      : (xs[0] || '');
  }

  /* Every name asked for, as a pill, in the order it was typed. `.chipbtn` is
     the control the brief read-back already uses for a removable token, so a
     handle here and a category there are visibly the same kind of thing. */
  function runPills(live) {
    var subs = state.run.subjects || [];
    if (!subs.length) return '';
    return '<div class="chips runpills">' + subs.map(function (s, i) {
      var h = normalizeSubject(s).handle;
      return live
        ? '<button class="chipbtn on" data-act="unpill" data-i="' + i + '" ' +
          'aria-label="Remove ' + esc(h) + '">' + esc(h) +
          ' <span class="x">' + U.icon('close') + '</span></button>'
        : '<span class="chipbtn on">' + esc(h) + '</span>';
    }).join('') + '</div>';
  }

  /* One row per name in the answer. Found or not, it appears — a name somebody
     typed and then cannot find on the results screen reads as a name that was
     dropped. */
  function runFoundRow(c) {
    var failed = S.gatesFor(c, brief(state.briefId), state.admin.threshold).failed;
    return '<div class="prow runrow">' + U.face(c, 'sm') +
      '<div class="pmain"><span class="pline">' +
      '<button class="lnk lnk--nm" data-act="report" data-id="' + c.id + '" data-from="newbrief">' +
      esc(c.name) + '</button>' +
      ' <span class="sep">' + DOT + '</span> ' + esc(c.handle) + '</span>' +
      '<span class="runrow-st">' + (failed.length
        ? esc(andList(failed.map(function (x) { return x.label.toLowerCase(); }))) + ' did not clear'
        : 'clears every gate for ' + esc(brief(state.briefId).name)) + '</span></div>' +
      '<span class="runrow-score">' + U.ring(c, 'sm', score(c)) + '</span></div>';
  }

  function runNameBody() {
    var body;
    var run = state.run;

    if (run.stage === 'idle') {
      /* The field keeps its own text while pills sit above it, so a half-typed
         handle is never silently eaten by a submit. Enter commits a pill; Enter
         on an empty field runs what is there. */
      /* v6.3 — NO PANEL, NO HINT. The field and its button are the screen; the
         card around them was a box drawn around one input. It sits in `.form`,
         the same 720px measure as the brief's "What are you looking for", so the
         two tabs line up. */
      body = '<div class="form">' +
        runPills(true) +
        '<form class="formacts' + ((run.subjects || []).length ? ' mt-3' : '') + '" data-act="runsubmit">' +
        '<label class="vh" for="runq">Handle or profile link</label>' +
        '<input class="inp" id="runq" type="text" value="' + esc(run.query) + '" ' +
        'placeholder="@handle or a profile link &mdash; Enter after each one" ' +
        'autocomplete="off" spellcheck="false">' +
        '<button class="btn btn--primary" type="submit">' +
        ((run.subjects || []).length ? 'Run ' + U.plural(run.subjects.length, 'name') : 'Run it') +
        '</button></form></div>' +
        /* v6.3 — THE SCOUT RETURNS TO THE LOOKUP. Same standing mark as the brief
           sheet: this screen is just as empty before a name is typed. */
        '<span class="floatmark floatmark--fig" aria-hidden="true">' +
        '<img src="assets/scount.png" alt="" onerror="this.parentNode.remove()"></span>';

    } else if (run.stage === 'scoring') {
      /* The replay runs against the FIRST name found, and the counter above it
         says how many the batch holds. Playing all six inventories in turn would
         be six times the wait for the same claim — that Scout reads before it
         answers — and the claim only has to be made once. */
      var lead = creator((run.found || [])[0]);
      var cl = lead ? S.claims(lead) : null;
      body = '<div class="p padbox">' +
        '<span class="lab">Looking for ' + U.plural((run.subjects || []).length, 'name') + '</span>' +
        runPills(false) +
        (cl ? '<ul class="invlist mt-4">' + cl.missing.built.map(function (x, i) {
          var done = i < run.step;
          return '<li>' + (done ? U.vmark(x.state) : '<span class="vmark vmark--wait"></span>') +
            '<span class="it">' + esc(x.item) + '</span><span class="st">' +
            (done ? (x.state === S.STATES.A ? 'not there ' + DOT + ' we looked in ' + S.lookedIn(lead, x).places + ' places'
              : x.state === S.STATES.P ? 'found it' : x.state === S.STATES.NA ? esc(x.note) : 'could not tell')
              : 'looking&hellip;') + '</span></li>';
        }).join('') + '</ul>' : '') +
        /* Every other stage of this screen offers a way out and this one did
           not, which is what turned a cleared timer into a dead end. A running
           scan is the state most likely to be interrupted, so it needs the
           escape more than the states that had one. */
        '<div class="formacts"><button class="btn btn--ghost" data-act="runreset">Cancel</button></div>' +
        '</div>';

    } else {
      /* THE ANSWER IS A SET, AND THE SET HAS ONE DESTINATION.

         v5.4 put a single result on this screen and added it to the tracked tab
         the moment it resolved, so nobody had to decide anything. A batch cannot
         work that way: six names looked up on somebody's behalf is not six
         decisions to keep them, and filing them all silently would make the tab
         a log of everything ever typed rather than a list somebody chose.

         So the keeping is now an act. Nothing here is filed until the button is
         pressed, and until it is, `runreset` throws the whole answer away — which
         is the honest reading of "I was checking".

         A name Scout has not reached is stated by name and is NOT an error
         state: it is the normal condition of a product still working through the
         web, and it is the same claim the drop makes every morning. */
      var found = (run.found || []).map(creator).filter(Boolean);
      var missed = run.missed || [];

      body = '<div class="p padbox">' +
        '<span class="lab">' +
        (found.length ? 'Found ' + U.plural(found.length, 'name') : 'Nothing found yet') +
        (missed.length ? ' of ' + (found.length + missed.length) : '') +
        '</span>' +

        (found.length ? '<div class="listwrap runlist mt-3">' +
          found.map(runFoundRow).join('') + '</div>' : '') +

        (missed.length
          ? '<p class="runmiss mt-4"><b>Scout hasn&rsquo;t looked at ' +
            (missed.length === 1 ? esc(normalizeSubject(missed[0]).handle) + ' yet.</b> It goes'
              : missed.map(function (m) { return esc(normalizeSubject(m).handle); }).join(', ') +
                ' yet.</b> They go') +
            ' into tonight&rsquo;s run, and anything that clears the bar will be in a drop ' +
            'tomorrow morning &mdash; under whichever brief it fits.</p>'
          : '') +

        (run.added
          ? '<p class="runnote mt-4">Kept in your <button class="lnk" data-act="viewtracked">' + TRACKED_TAB + '</button>' +
            ' &mdash; ' + U.plural(state.tracked.length, 'name') + ' so far.</p>' +
            '<div class="formacts">' +
            '<button class="btn btn--primary" data-act="viewtracked">Open the ' + TRACKED_TAB + '</button>' +
            '<button class="btn btn--ghost" data-act="runreset">Look up more</button></div>'
          : '<div class="formacts mt-4">' +
            (found.length
              ? '<button class="btn btn--primary" data-act="trackall">Track ' +
                U.plural(found.length, 'name') + '</button>' : '') +
            '<button class="btn btn--ghost" data-act="runreset">Look up more</button></div>' +
            (found.length
              ? '<p class="runnote">They go into your <b>' + TRACKED_TAB + '</b>, a tab of their own on the drop.</p>'
              : '')) +
        '</div>';
    }
    return body;
  }

  /* ============================================================== OUTREACH */
  function outreachView() {
    var c = creator(state.outreachId);
    if (!c) return '<p class="sub-t">Not found.</p>';
    var o = c.outreach, who = me(), cl = S.claims(c);
    /* v5.4 — EVERY REAL CREATOR HAS AN EMPTY OUTREACH OBJECT. The merged seed
       lists `outreach` in meta.generated and ships it as
       {subject:null, opener:null, bullets:[], close:null}, so the demo's closing
       beat — Promote, then the package — rendered an empty bullet list, the word
       "Subject:" with nothing after it, two blank paragraphs and a signature.

       Composing prose was the obvious fix and it is the wrong one. This is an
       email to a REAL, named creator, and §12.1 gates exactly that behind a
       named owner and legal review; the seed's nulls are that decision, not an
       oversight. So the screen states the decision instead of dressing it as an
       email nobody wrote.

       The SIGNALS half is real and stays — those are the same sentences the card
       and the report already carry, so building them from the record adds no
       claim. That is also §6.5's actual argument: everything a first contact
       needs was already in the report. The package is the signals; the draft is
       the one generated thing, and it is honest about not being wired yet. */
    var written = !!(o && (o.subject || o.opener || o.close));
    var bullets = (o && o.bullets && o.bullets.length) ? o.bullets : signalBullets(c);
    return '<header class="pagehead"><div class="rpt-tags">' +
      '<span class="pill pill--ok">Promoted</span></div>' +
      '<h1 class="mt-3">Outreach package: ' + esc(c.name) + '</h1>' +
      '<p class="deck">Everything a first contact needs was already in the report, so this costs nothing to ' +
      'assemble.</p></header>' +
      /* v5.5 — THE TWO HALVES OF THIS SCREEN ARE THE PRODUCT'S WHOLE ARGUMENT,
         and they were one white panel split by a gutter. Left is carried over:
         the same sentences the card and the report already made, which is why
         assembling it "costs nothing". Right is the only generated thing on the
         page — and for a real creator it is generated to say that it was not
         written. Counted on the left, judged on the right, and the grounds say
         so before the labels do. */
      '<div class="case mt-5">' +
      '<div class="p"><span class="lab">The signals, in plain language</span>' +
      '<ul class="invlist invlist--bullets mt-3">' + bullets.map(bulletRow).join('') + '</ul>' +
      /* onLabel already ends in "switched on", so appending it produced
         "…we couldn't tell what they've switched on switched on." Same echo the
         report's subhead had. The label is a clause now, not a fragment. */
      '<p class="invsum">' + esc(cl.demand.line) + ' ' + DOT + ' ' + esc(sentence(cl.missing.onLabel)) + '.</p></div>' +
      '<div class="p p--lilac"><span class="lab">Draft first contact</span>' +
      (written
        ? '<div class="invbox mt-3">' +
          '<p class="draft-subj">Subject: <b>' + esc(S.plain(o.subject)) + '</b></p>' +
          '<p class="draft-p">' + esc(S.plain(o.opener)) + '</p>' +
          '<p class="draft-p">' + esc(S.plain(o.close)) + '</p>' +
          '<p class="draft-sig">' + esc(who.name) + ' ' + DOT + ' Paradium</p></div>' +
          '<div class="formacts"><button class="btn btn--primary" data-act="copy" data-id="' + c.id + '">' +
          (state.copied ? 'Copied' : 'Copy the draft') + '</button>' +
          '<button class="btn btn--ghost" data-act="view" data-view="drop">Back to the drop</button></div>'
        : '<p class="draftnone mt-3"><b>Not written for this creator.</b> Scout does not draft a first contact ' +
          'to a real person until someone owns that decision. The signals above are the package; the ' +
          'words are yours.</p>' +
          '<div class="formacts">' +
          '<button class="btn btn--primary" data-act="copy" data-id="' + c.id + '">' +
          (state.copied ? 'Copied' : 'Copy the signals') + '</button>' +
          '<button class="btn btn--ghost" data-act="view" data-view="drop">Back to the drop</button></div>') +
      '<p class="lifecycle"><b>Scout never sends.</b> When you hear back, tell it &mdash; that answer ' +
      'is the only thing that says whether the machine was right.</p></div></div>';
  }

  /* ================================================================= ADMIN */
  /* FOUR controls: the spend, the bar, the seats, and where Scout looks. The
     thesis is not editable and there is no prompt editor — what makes a creator
     interesting is hard-coded, because it IS the product.

     v5.4 had a "Where Scout looks" card here and DELETED it, because it was a
     hand-kept second copy of the source catalogue that had already drifted from
     the Sources screen in four ways at once: it listed six platforms against
     Sources' eleven sources and twenty-eight places; it listed X, which no
     probe in the engine reads, so the product offered a switch for a capability
     that does not exist; it listed Substack as a first-class platform when it is
     one of six guess-places under Newsletter; and its note read "turning a
     platform off stops the spend on it" two clicks from Sources saying
     "switching one off does not save money — fetching is free". Two lists that
     must agree are a list that will not.

     v5.5 finishes that move: the real catalogue is now a SECTION of this screen
     rather than a screen of its own, so the two lists are one list and there is
     nothing left to drift. What was true about the deleted card is still true —
     the surviving list is the one derived from the same shape as the engine's
     config/probes.json, and it is the one that handles the two hard cases
     (Reddit built but not connected, Instagram never conclusive).

     The spend and the bar sit together at the top because they are the two
     knobs that change what arrives tomorrow. Seats and sources are standing
     configuration: read once, changed when something outside the product does. */
  /* ============================================== v5.6 — HOW A SCORE IS BUILT
     §5.1–5.4, written out for the person reading a report rather than for the
     person who wrote the engine.

     WHY IT IS A SCREEN AND NOT A TOOLTIP. The report already explains itself
     line by line: every claim carries its own points on its own heading, the
     receipts open under each one, and the inventory says how many places were
     checked. What none of that answers is the question a new Scout asks in
     their first week and an account director asks in the first meeting — *why
     is Missing worth more than Demand, and who decided 25 was the bar*. That
     is one explanation for the whole product, not one per creator, so it is one
     page and every pillar links to its own part of it.

     WHY IT IS NOT IN THE RAIL. The rail is the morning's work — four screens
     you move through with a decision at the end. This is a reference you open
     when a number surprises you, which is the same argument that moved Sources
     into Admin in v5.5, so it takes the same kind of seat: the account menu,
     plus a link at the foot of each claim where the question actually occurs.

     WHY IT IS NOT IN ADMIN. Admin is admin-only and gated on `who.admin`. The
     model is not an administrative detail — it is the thing every member is
     being asked to trust eight times a morning, so it cannot live behind a
     permission most of them do not have.

     EVERY FIGURE ON THIS PAGE IS READ FROM THE SEED. See v52-seed.js WEIGHTS.
     Typing them here would put a fifth copy of a calibrated constant in the
     codebase, on the one screen where being wrong is worst: a bad number on a
     report is a bad number, and a bad number here is a bad mental model that
     leaves the building inside whoever read it. */

  /* The engine's item keys, in English. The keys are the engine's names and
     have to stay keys — they are how the weight table joins to the inventory —
     but nobody outside this repo has ever said "platform_subscriptions". */
  var HELP_ITEM = {
    youtube_channel: 'A YouTube channel',
    newsletter: 'A newsletter',
    store: 'A store',
    representation: 'Representation',
    website: 'A website of their own',
    membership: 'A membership',
    podcast: 'A podcast',
    sponsorships: 'Sponsorships',
    affiliate_links: 'Affiliate links',
    shopping_tags: 'Shopping tags',
    platform_subscriptions: 'Platform subscriptions'
  };

  var HELP_PRESSURE = {
    cadence_decay: ['They are posting less', 'How often they post now against how often they posted over the past year.'],
    abandonment_markers: ['They tried something and it broke', 'Dead links they are still publishing — a store subdomain that no longer answers, a sign-up form that 404s.'],
    self_reported_strain: ['They have said so themselves', 'Their own words, in captions and posts. The rarest evidence and the strongest.'],
    unanswered_audience: ['Their audience is going unanswered', 'Questions arriving faster than replies going out, measured as a change.']
  };

  /* Named so the anchor and the link that jumps to it cannot drift apart. */
  function helpId(sec) { return 'h-' + sec; }

  /* The foot of a claim on the report. Deliberately quiet and deliberately at
     the BOTTOM: the reader who wants this has just finished the section and is
     still unsatisfied. Put at the top it would offer an explanation to somebody
     who has not yet met the thing being explained. */
  /* The label is the WHOLE phrase, not a noun slotted into "How ___ is scored".
     A template made the gate read "How this gate is scored", and a gate is the
     one thing on the report that is not scored — the sentence contradicted the
     section it was linking to. */
  function helpLink(sec, phrase) {
    return '<p class="helpjump"><button data-act="help" data-sec="' + esc(sec) + '">' +
      U.icon('info') + esc(phrase) + '</button></p>';
  }

  function helpView() {
    var W = S.WEIGHTS;
    var house = brief('b_house');

    var out = '<header class="pagehead">' +
      '<div class="rpt-nav"><button class="btn btn--soft btn--sm backbtn" data-act="view" data-view="' +
      esc(state.helpFrom || 'drop') + '">' + U.icon('back') + 'Back to ' +
      esc(state.helpFrom === 'watchlist' ? 'the watchlist'
        : state.helpFrom === 'passed' ? 'the passed list'
        : state.helpFrom === 'promoted' ? 'the promoted list'
          : state.helpFrom === 'report' ? 'the report'
            : state.helpFrom === 'admin' ? 'Admin'
              : state.helpFrom === 'newbrief' ? 'the lookup' : state.helpFrom === 'runname' ? 'the lookup' : 'the drop') + '</button></div>' +
      '<h1>How a score is built</h1>' +
      '<p class="deck"><b>Big audience, no business, under pressure.</b> The audience is the ' +
      'qualifier &mdash; everyone Scout looks at already has one. The score measures the other two. ' +
      'Two gates then ask what the score cannot, and either can stop a name on its own.</p></header>';

    /* An older seed predates the weights export. Say so and stop, rather than
       falling back to a table typed in this file — see the note in v52-seed.js.
       The parts that do not need the weights still render underneath, because
       the bar and the floor come from meta and have always been there. */
    if (!W) {
      out += '<div class="p p--butter mt-3"><span class="lab">Not available in this seed</span>' +
        '<p class="adnote mt-3">This board was exported before the engine shipped its weights, so the ' +
        'point values cannot be shown. Re-export the seed and this fills in.</p></div>';
    }

    /* ---- THE SHAPE ---------------------------------------------------- */
    out += '<section class="adsec"><h2 class="adsec-h">The shape of it</h2>' +
      '<p class="adsec-d">A score out of 100, made of two pillars. <b>Opportunity</b> is whether there ' +
      'is money on the table. <b>Pressure</b> is whether today is the day they would pick up. ' +
      'Neither gate contributes a point.</p>';

    if (W) {
      var P = W.pillars;
      out += '<div class="p helpshape">' +
        '<div class="hbar">' +
        '<span class="hseg hseg--teal" style="--w:' + P.demandMax + '"><b>Demand</b><i>' + P.demandMax + '</i></span>' +
        '<span class="hseg hseg--teal2" style="--w:' + P.missingMax + '"><b>Missing</b><i>' + P.missingMax + '</i></span>' +
        '<span class="hseg hseg--butter" style="--w:' + P.pressureMax + '"><b>Pressure</b><i>' + P.pressureMax + '</i></span>' +
        '</div>' +
        '<p class="hbar-k"><span class="hk hk--teal">Demand + Missing = Opportunity, ' + P.opportunityMax +
        '</span><span class="hk hk--butter">Pressure, ' + P.pressureMax + '</span></p>' +
        '<p class="adfine">The report uses these colours and they mean the same thing there. ' +
        '<b>Teal is counted:</b> we looked in a fixed list of places and wrote down what was there. ' +
        '<b>Butter is attention:</b> the timing, the part that makes it today. <b>Lilac is judged:</b> ' +
        'a model&rsquo;s opinion, never dressed as a count.</p></div>';
    }
    out += '</section>';

    /* ---- DEMAND -------------------------------------------------------- */
    out += '<section class="adsec" id="' + helpId('demand') + '"><h2 class="adsec-h">Demand' +
      (W ? ' <span class="hmax">' + W.pillars.demandMax + ' points</span>' : '') + '</h2>' +
      '<p class="adsec-d"><b>Do people want to buy?</b> Comments and threads where somebody is trying ' +
      'to give this creator money and cannot &mdash; <i>where do I buy this</i>, <i>drop a newsletter</i>, ' +
      '<i>is there a link</i>. Read from YouTube comments and from Reddit, where people talk about a ' +
      'creator when the creator is not in the room.</p>' +
      '<div class="p p--teal">' +
      '<span class="lab">It saturates &mdash; the first signals carry the most</span>';

    if (W) {
      var hp = W.demandHalfPoint, dmax = W.pillars.demandMax;
      var pts = function (n) { return Math.round(dmax * (n / (n + hp)) * 10) / 10; };
      out += '<div class="wrapx"><table class="ct mt-3"><thead><tr>' +
        '<th>People asking</th><th>Points</th><th>Share of the ' + dmax + '</th></tr></thead><tbody>' +
        [50, 200, hp, 1000, 1940].map(function (n) {
          return '<tr><td><b>' + U.num(n) + '</b></td><td>' + pts(n) + '</td>' +
            '<td>' + U.track((pts(n) / dmax) * 100) + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<p class="adfine"><b>' + U.num(hp) + ' asking is worth half the pillar</b>, and it takes ' +
        'thousands to approach the rest. Ten thousand people asking is not a hundred times better ' +
        'than a hundred asking; it is the same conclusion, more loudly.</p>';
    }
    out += '<p class="adfine"><b>Nothing readable scores zero, and zero is not a finding.</b> Most ' +
      'creators on short form have no comment section readable from outside. That scores neutral and ' +
      'pulls their confidence down. It never means &ldquo;nobody wants to buy&rdquo;, and every report ' +
      'says which of the two it is.</p></div></section>';

    /* ---- MISSING ------------------------------------------------------- */
    out += '<section class="adsec" id="' + helpId('missing') + '"><h2 class="adsec-h">Missing' +
      (W ? ' <span class="hmax">' + W.pillars.missingMax + ' points</span>' : '') + '</h2>' +
      '<p class="adsec-d"><b>Is there anything to buy?</b> The things they have not built. Weighted, ' +
      'not counted: nearly every creator lacks affiliate links, so counting them separates nobody.</p>';

    if (W) {
      var A = W.absence;
      var keys = Object.keys(A).sort(function (a, b) { return A[b] - A[a]; });
      var top = A[keys[0]];
      out += '<div class="p p--teal"><span class="lab">What each absence is worth</span>' +
        '<div class="wrapx"><table class="ct mt-3"><thead><tr>' +
        /* The third column is named rather than left blank. An empty `th` lets
           the column collapse to the width of its widest bar — which, since the
           bars are the comparison the table exists to make, is the one column
           that must not be allowed to shrink. Demand's equivalent table sizes
           correctly for exactly this reason. */
        '<th>Not there</th><th>Weight</th><th>Against the top weight</th></tr></thead><tbody>' +
        keys.map(function (k) {
          return '<tr><td><b>' + esc(HELP_ITEM[k] || k) + '</b></td>' +
            '<td>' + A[k] + '</td><td>' + U.track((A[k] / top) * 100) + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        '<p class="adfine">The pillar is the <b>share of the available weight</b> a creator is missing, ' +
        'scaled to ' + W.pillars.missingMax + '. Missing the big things scores far higher than missing ' +
        'many small ones. Anything that does not apply to them leaves both sides of the fraction.</p>' +
        '<p class="adfine"><b>No YouTube is the top line only against a large short-form audience.</b> ' +
        'Below ' + U.followers(W.shortFormAudienceFloor) + ' on short form it drops to a minor weight. ' +
        'The audience has to already exist; without it, a missing channel is just a channel nobody ' +
        'opened.</p>' +
        '<p class="adfine"><b>An absence is worth up to ' + W.demandAlignmentMax + '&times; more when ' +
        'the demand points straight at it.</b> No store is one thing. No store while two hundred ' +
        'comments ask where to buy is another.</p></div>';
    }

    out += '<div class="p mt-3"><span class="lab">Two rules that decide what counts</span>' +
      '<p class="adnote mt-3"><b>&ldquo;Could not tell&rdquo; earns nothing.</b> Points come only from ' +
      '<i>verified absent</i>: we looked in the places it would be, listed them, and it was not in any ' +
      'of them. Every report keeps the two apart on every row.</p>' +
      '<p class="adnote"><b>Missing everything is a label, not a number.</b> Missing even the trivial ' +
      'things means they have not started: a clean slate. Someone with shopping tags and affiliate ' +
      'links but no newsletter is already partway down a road. The report states which, and scores ' +
      'neither.</p></div></section>';

    /* ---- PRESSURE ------------------------------------------------------ */
    out += '<section class="adsec" id="' + helpId('pressure') + '"><h2 class="adsec-h">Pressure' +
      (W ? ' <span class="hmax">' + W.pillars.pressureMax + ' points</span>' : '') + '</h2>' +
      '<p class="adsec-d"><b>Will they take the call?</b> Four signals. The whole pillar is why this ' +
      'name is in front of you <i>today</i> and not in six months.</p>';

    if (W) {
      var PR = W.pressure;
      var pkeys = Object.keys(PR).sort(function (a, b) { return PR[b].max - PR[a].max; });
      var dark = 0;
      pkeys.forEach(function (k) { if (PR[k].needsHistory) dark += PR[k].max; });
      var ceiling = W.pillars.pressureMax - dark;

      out += '<div class="p p--butter"><span class="lab">The four signals</span>' +
        '<div class="wrapx"><table class="ct mt-3"><thead><tr>' +
        '<th>Signal</th><th>Max</th><th>On a first look</th></tr></thead><tbody>' +
        pkeys.map(function (k) {
          var m = HELP_PRESSURE[k] || [k, ''];
          return '<tr><td><b>' + esc(m[0]) + '</b><br><span class="sub-t">' + esc(m[1]) + '</span></td>' +
            '<td>' + PR[k].max + '</td><td>' + (PR[k].needsHistory
              ? '<span class="pill">needs a second look</span>'
              : '<span class="pill pill--ok">readable</span>') + '</td></tr>';
        }).join('') + '</tbody></table></div>' +
        (PR.cadence_decay ? '<p class="adfine"><b>Posting less has a floor and a ceiling.</b> Nothing ' +
          'scores until the rate is down ' + Math.round(PR.cadence_decay.declineFloor * 100) + '%, and ' +
          'full points land at ' + Math.round(PR.cadence_decay.declineFull * 100) + '% down. A quarter ' +
          'off is ordinary variance for a person who makes things. Four fifths off is a different ' +
          'sentence about their life.</p>' : '') +
        '<p class="adfine"><b>A first look reaches ' + ceiling + ' of ' + W.pillars.pressureMax +
        '.</b> An audience going unanswered only exists as a comparison, so it stays dark until Scout ' +
        'has seen them twice. Each report prints its own ceiling and the reason.</p></div>';
    }

    out += '<div class="p mt-3"><span class="lab">Why every line is a change and never a level</span>' +
      '<p class="adnote mt-3">Nobody knows whether <i>&ldquo;12% reply rate&rdquo;</i> is good. ' +
      '<i>&ldquo;Replies fell from 22% to 3%&rdquo;</i> is a fact. Undated is not pressure, so every ' +
      'Pressure line carries its window.</p>' +
      '<p class="adnote"><b>Two at once, or it is a holiday.</b> One behaviour change is somebody ' +
      'taking a week off. Two at the same time is a person going under, which is why the report always ' +
      'shows two lines and leads with their own words when there are any.</p></div></section>';

    /* ---- THE GATES ----------------------------------------------------- */
    out += '<section class="adsec" id="' + helpId('gates') + '"><h2 class="adsec-h">The two gates ' +
      '<span class="hmax">no points</span></h2>' +
      '<p class="adsec-d">Neither gate scores a point. Either can stop a name that topped the board.</p>' +
      '<div class="adgrid">' +

      '<section class="p p--lilac adcard"><span class="lab">Fit &mdash; can we build with them?</span>' +
      '<p class="adnote mt-3">Judged by a model against the brief. The house brief is: ' +
      '<b>&ldquo;' + esc(house && house.description ? house.description : S.plain(house && house.name) || 'anyone worth a call') +
      '&rdquo;</b></p>' +
      '<p class="adfine">What is deliberately <i>not</i> in that brief: audience size, whether they ' +
      'have built a business, whether they are under strain. The score already counts all three.</p>' +
      '</section>' +

      '<section class="p p--lilac adcard"><span class="lab">Trajectory &mdash; are they on the way up?</span>';

    if (W) {
      var T = W.trajectory;
      out += '<p class="adnote mt-3">Fails only when the audience is down more than ' +
        Math.abs(Math.round(T.yearDeclineFail * 100)) + '% across the year <b>and</b> still falling in ' +
        'the most recent stretch. Needs two looks at least ' + T.minObservationGapDays + ' days apart.</p>';
    }
    out += '<p class="adfine"><b>It tests the audience, never the posting rate.</b> Posting less is a ' +
      '<i>good</i> signal here &mdash; that is somebody drowning, which is the whole of Pressure. A ' +
      'shrinking audience is the bad one.</p>' +
      '<p class="adfine"><b>What it stops.</b> Every Pressure signal fires <i>harder</i> on someone ' +
      'quietly giving up than on someone overwhelmed by success. Without this gate, the highest scorer ' +
      'on the board is a person quitting.</p>' +
      '<p class="adfine"><b>No reading yet is not a failure.</b> A trend needs two looks, so a first ' +
      'look returns <i>could not tell</i>: neither a pass nor a fail, and it does not block.</p>' +
      '</section></div></section>';

    /* ---- CONFIDENCE ---------------------------------------------------- */
    out += '<section class="adsec" id="' + helpId('confidence') + '"><h2 class="adsec-h">Confidence</h2>' +
      '<p class="adsec-d">Not how sure we are that they are interesting. <b>How much of the check got ' +
      'done</b> &mdash; the share of the inventory we settled either way.</p>' +
      '<div class="adgrid">' +
      '<section class="p adcard"><span class="lab">The floor</span>' +
      '<div class="bigfig">' + Math.round(S.CONF_FLOOR * 100) + '<small>%</small></div>' +
      '<p class="adnote">A creator cannot enter the drop below it, however high they scored. Too much ' +
      'of the record is unread to argue from.</p>' +
      '<p class="adfine">The floor is on Opportunity, the pillar built out of checks. Pressure, Fit ' +
      'and Trajectory have none of their own.</p></section>' +
      '<section class="p adcard"><span class="lab">What is in the fraction</span>' +
      '<p class="adnote mt-3">Only checks that could come back <i>verified absent</i>. A few things ' +
      'can be seen when present but never proven missing from outside: shopping tags, platform ' +
      'subscriptions, sponsorships inside captions we cannot read in full.</p>' +
      '<p class="adfine">Those are named on the report instead of counted as gaps. <b>A weak identity ' +
      'match counts as unresolved</b> &mdash; &ldquo;there is a newsletter at a name that looks like ' +
      'hers&rdquo; is the state confidence exists to express.</p></section>' +
      '</div></section>';

    /* ---- WHAT MAKES THE CUT -------------------------------------------- */
    out += '<section class="adsec" id="' + helpId('cut') + '"><h2 class="adsec-h">What makes the cut</h2>' +
      '<p class="adsec-d">All four, together. Three of them and the name does not appear.</p>' +
      '<div class="p p--ink"><ol class="hcut">' +
      '<li><b>Score at or above ' + S.THRESHOLD + '</b><span>The bar. An admin setting, and it moves.</span></li>' +
      '<li><b>Confidence at or above ' + Math.round(S.CONF_FLOOR * 100) + '%</b><span>Enough of the check finished to argue from.</span></li>' +
      '<li><b>Fit passes</b><span>We could actually build something with them.</span></li>' +
      '<li><b>Trajectory is not a fail</b><span>Not established is fine. Fading is not.</span></li>' +
      '</ol>' +
      '<p class="adfine">Then the day is capped at about ' + S.CAP + ' names. <b>The cap protects ' +
      'attention; the bar protects trust.</b> Some days that is three names. Some days it is none, and ' +
      'the screen says so.</p></div></section>';

    /* ---- WHAT DOES NOT COUNT ------------------------------------------- */
    out += '<section class="adsec"><h2 class="adsec-h">What does not count</h2>' +
      '<p class="adsec-d">Half of explaining a model is saying what it ignores.</p>' +
      '<div class="p"><ul class="hnot">' +
      '<li><b>Follower count.</b> The audience is the qualifier, not the score. Everyone on the board already has one.</li>' +
      '<li><b>&ldquo;We could not find it.&rdquo;</b> Never earns a Missing point.</li>' +
      '<li><b>Posting less.</b> Not a demerit &mdash; it is Pressure.</li>' +
      '<li><b>Press mentions and citations.</b> A line on the report, never a veto. Strong for ' +
      'expertise-led creators, near zero for entertainment-led ones, so it separates nobody.</li>' +
      '<li><b>Being new.</b> No trend yet does not block anyone.</li>' +
      '<li><b>Anything the model wrote.</b> A quote not copied word for word from the source is ' +
      'thrown away before it reaches a report.</li>' +
      '</ul></div></section>';

    return out;
  }

  /* ====================================================================
     TRENDS — v5.8

     The standing read of everything scanned so far. Until now Scout could
     only answer "what is missing" one creator at a time; this is the same
     question asked of the whole record.

     THE CONSTRAINT THAT DESIGNED THIS SCREEN. A trend is a claim about
     time, and Scout refuses that claim everywhere else: the trajectory gate
     wants two looks 90 days apart, and every report today reads "no trend
     yet". The record is one day old. A screen called Trends is therefore the
     easiest place in this application to break its own rule — so it opens as
     a CENSUS that states its own age, and the one column that would carry a
     direction is visibly shut rather than filled with a number it has not
     earned. Nothing here is extrapolated, smoothed, or projected.

     THE MAP IS THE SCREEN AND THE TABLE IS ITS KEY, in that order. A table
     of six counts is six facts you could say out loud; it does not need a
     screen. The map is the same six counts with the names still attached, so
     a pattern in it is a call list rather than a statistic — which is the
     only reason an origination desk would open this instead of the drop.

     WHAT IS DELIBERATELY NOT HERE: the audience's own words. 232 comments
     were read and 116 of them are somebody asking for something that does
     not exist. That is a different question — what an audience wants, not
     what a market is missing — and it earns its own screen rather than a
     third of this one. The handoff at the bottom says so out loud instead
     of pretending the material does not exist.
     ==================================================================== */

  /* The record is derived, not stored, and every view of it re-derives from
     the same seed the reports read. Memoised because the map alone walks
     58 creators × 6 items on every render. */
  var _market = null;

  function market() {
    if (_market) return _market;

    /* One row per creator, not per candidacy. A creator sitting under the
       house brief and a category brief is two records in the seed and one
       person in the market — counting them twice would inflate every number
       on this screen by the size of the overlap. */
    var seen = {};
    var people = [];
    W.candidates.forEach(function (c) {
      if (seen[c.handle]) {
        /* keep the record that scored, so Fit and status read true */
        if (c.score > seen[c.handle].score) seen[c.handle].score = c.score;
        if (c.status === 'in_drop') seen[c.handle].inDrop = true;
        return;
      }
      var inv = {};
      var checks = 0;
      (c.inventory || []).forEach(function (i) {
        inv[i.item] = i.state;
        checks += i.surfacesChecked || 0;
      });
      var row = {
        id: c.id, name: c.name, handle: c.handle, score: c.score,
        inDrop: c.status === 'in_drop', inv: inv, checks: checks,
        platform: c.primaryPlatform,
        day: (c.inventory && c.inventory[0] && c.inventory[0].observedAt) || S.TODAY
      };
      seen[c.handle] = row;
      people.push(row);
    });

    /* An item counts only where the engine can settle it either way. The
       seed carries five more — sponsorships, shopping tags, affiliate links —
       that came back `not_found` on every single creator. Listing those as
       "missing on 58 of 58" would be the exact lie this screen exists to
       avoid: we did not find them, which is not the same as their not being
       there. */
    var items = [];
    var byLabel = {};
    people.forEach(function (p) {
      Object.keys(p.inv).forEach(function (label) {
        var it = byLabel[label];
        if (!it) { it = byLabel[label] = { label: label, present: 0, absent: 0, unknown: 0 }; items.push(it); }
        if (p.inv[label] === 'present') it.present++;
        else if (p.inv[label] === 'verified_absent') it.absent++;
        else it.unknown++;
      });
    });
    /* Settled on at least a quarter of the market, or it is not a row. The
       first cut was "settled on anyone at all", which let Representation and
       affiliate links through on two hits each and drew two rows that were
       56 hatched cells and a 0 — a row that says nothing except that we cannot
       see, printed at the same weight as one that says 37 of 58 have no way to
       join. The threshold is the difference between a finding and a shrug. */
    var floor = people.length * 0.25;
    items = items.filter(function (it) { return it.absent > 0 && it.present + it.absent >= floor; })
      .sort(function (a, b) { return b.absent - a.absent; });

    /* Creators ordered on the BIT PATTERN of what they are missing — the most
       absent item is the highest bit — so people missing the same combination
       land side by side and the map resolves into blocks. Ordering by a plain
       count instead drops someone who has the top item but nothing else into
       the middle of the people who have neither, and the map reads as noise. */
    function pattern(p) {
      return items.reduce(function (k, it, i) {
        return k + (p.inv[it.label] === 'verified_absent' ? Math.pow(2, items.length - 1 - i) : 0);
      }, 0);
    }
    var order = people.slice().sort(function (a, b) {
      return pattern(b) - pattern(a) || b.score - a.score;
    });

    var pairs = {};
    people.forEach(function (p) {
      var miss = items.filter(function (it) { return p.inv[it.label] === 'verified_absent'; });
      for (var i = 0; i < miss.length; i++)
        for (var j = i + 1; j < miss.length; j++) {
          var k = miss[i].label + ' + ' + miss[j].label;
          pairs[k] = (pairs[k] || 0) + 1;
        }
    });
    var pairList = Object.keys(pairs).map(function (k) { return [k, pairs[k]]; })
      .sort(function (a, b) { return b[1] - a[1]; });

    /* The asks, deduped the same way the people are: the same comment under
       the same handle in two briefs is one person asking once. */
    var qseen = {}, asks = 0, buying = 0, comments = 0;
    W.candidates.forEach(function (c) {
      (c.evidence || []).forEach(function (e) {
        if (e.kind !== 'comment') return;
        var k = c.handle + '|' + e.quote;
        if (qseen[k]) return;
        qseen[k] = 1;
        comments++;
        if (e.label && e.label !== 'unspecified') { asks++; if (e.label === 'store') buying++; }
      });
    });

    var days = {};
    people.forEach(function (p) { days[p.day] = 1; });

    _market = {
      people: people, order: order, items: items, pairs: pairList,
      days: Object.keys(days).sort(),
      checks: people.reduce(function (a, p) { return a + p.checks; }, 0),
      comments: comments, asks: asks, buying: buying,
      callable: order.filter(function (p) { return pattern(p) > 0; }).length,
      inDrop: people.filter(function (p) { return p.inDrop; }).length
    };
    return _market;
  }

  var TREND_GATE = 90;          /* the trajectory gate the reports enforce */

  function lockedChip(txt) {
    return '<span class="tlock">' + U.icon('lock') + esc(txt) + '</span>';
  }

  function trendsView() {
    var m = market();
    var days = m.days.length;
    var top = m.items[0];

    var head = '<header class="pagehead"><span class="kick pk">Trends</span><h1>Where the market is short</h1>' +
      '<p class="deck">' + U.plural(m.people.length, 'creator') + ' read. ' + m.callable +
      ' of them have at least one thing their audience has a name for and they have not built.</p>' +
      '<div class="tage">' +
      '<span class="tage-t"><b>Day ' + days + ' of ' + TREND_GATE + '.</b></span>' +
      '<span class="tage-bar" role="img" aria-label="' + days + ' of ' + TREND_GATE +
      ' days observed"><i style="width:' + (days / TREND_GATE * 100).toFixed(2) + '%"></i><u></u></span>' +
      '<span class="tage-t">' + U.num(m.checks) + ' checks ' + DOT + ' first look ' +
      esc(U.longDate(m.days[0])) + '</span></div>' +
      '</header>';

    return head + trendMap(m) + trendLedger(m, top) + trendPairs(m) + trendGate(m, days) + trendHandoff(m);
  }

  /* ---- the map: every creator, every gap, nothing aggregated away ------- */
  function trendMap(m) {
    var rows = m.items.map(function (it, ri) {
      var cells = m.order.map(function (p, ci) {
        var s = p.inv[it.label];
        var st = s === 'present' ? 'present' : s === 'verified_absent' ? 'absent' : 'unknown';
        var word = st === 'present' ? 'has it'
          : st === 'absent' ? 'no ' + it.label.toLowerCase()
            : 'could not tell';
        return '<span class="tcell" data-s="' + st + '" tabindex="-1" ' +
          'title="' + esc(p.handle + ' ' + DOT + ' ' + it.label + ' ' + DOT + ' ' + word) + '"></span>';
      }).join('');
      return '<div class="tmap-row">' +
        '<span class="tmap-l">' + esc(it.label) + '</span>' +
        '<span class="tmap-c">' + cells + '</span>' +
        '<span class="tmap-n"><b>' + it.absent + '</b> not there</span></div>';
    }).join('');

    return '<section class="tsec">' +
      '<h2 class="tsec-h">Every creator, every gap</h2>' +
      '<p class="tsec-s">Sorted on what each creator has not built. The wide left edge is the ' +
      'callable half.</p>' +
      trendKey() +
      '<div class="tpanel"><div class="tmap">' + rows +
      '<div class="tmap-ax"><span>&larr; most missing<em>fewest missing &rarr;</em></span></div>' +
      '</div>' +
      '<p class="traynote">' + m.people.length + ' columns ' + DOT + ' ' + m.items.length +
      ' rows ' + DOT + ' ' + U.num(m.people.length * m.items.length) + ' cells, each one a check that ' +
      'ran against a named place. A hatched cell is one we could not tell either way.</p>' +
      '</div></section>';
  }

  function trendKey() {
    return '<div class="tkey">' +
      '<span class="tk"><span class="tswatch tswatch--p"></span>Built</span>' +
      '<span class="tk"><span class="tswatch tswatch--a"></span>Not there</span>' +
      '<span class="tk"><span class="tswatch tswatch--u"></span>Could not tell</span></div>';
  }

  /* ---- the same map, counted. This is the map's key, not a second screen. */
  function trendLedger(m, top) {
    var rows = m.items.map(function (it) {
      var tot = it.present + it.absent + it.unknown;
      var w = function (v) { return (v / tot * 100).toFixed(2) + '%'; };
      return '<tr><td><span class="wex-nm">' + esc(it.label) + '</span>' +
        '<span class="wex-why">looked for on all ' + m.people.length + '</span></td>' +
        '<td class="wex-num">' + it.present + '</td>' +
        '<td class="wex-num"><b class="tbig">' + it.absent + '</b>' +
        '<span class="tof">/ ' + m.people.length + '</span></td>' +
        '<td class="wex-num">' + it.unknown + '</td>' +
        '<td><span class="tstack" role="img" aria-label="' + it.present + ' built, ' + it.absent +
        ' not there, ' + it.unknown + ' could not tell">' +
        '<i class="s-p" style="width:' + w(it.present) + '"></i>' +
        '<i class="s-a" style="width:' + w(it.absent) + '"></i>' +
        '<i class="s-u" style="width:' + w(it.unknown) + '"></i></span></td>' +
        '<td>' + lockedChip('day ' + m.days.length + ' of ' + TREND_GATE) + '</td></tr>';
    }).join('');

    return '<section class="tsec">' +
      '<h2 class="tsec-h">The same map, counted</h2>' +
      '<p class="tsec-s">The key to the picture above. <b>' + esc(top.label) +
      ' is the gap of the market:</b> ' + top.absent + ' of ' + m.people.length +
      ' confirmed without one, against ' + top.unknown + ' the engine could not tell either way.</p>' +
      '<div class="tpanel"><div class="wex-scroll"><table class="wex">' +
      '<thead><tr><th>What</th><th class="wex-num">Built</th><th class="wex-num">Not there</th>' +
      '<th class="wex-num">Could not tell</th><th>Across the ' + m.people.length + '</th>' +
      '<th>Movement</th></tr></thead><tbody>' + rows + '</tbody></table></div>' +
      '</div></section>';
  }

  /* ---- the pairs. One conversation, not two. --------------------------- */
  function trendPairs(m) {
    var max = m.pairs[0][1];
    var rows = m.pairs.slice(0, 7).map(function (p) {
      return '<div class="tpair" title="' + esc(p[0]) + ' — ' + p[1] + ' creators are missing both">' +
        '<span class="tpair-l">' + esc(p[0]) + '</span>' +
        '<span class="tpair-b"><i style="width:' + (p[1] / max * 100).toFixed(1) + '%"></i></span>' +
        '<span class="tpair-n"><b>' + p[1] + '</b></span></div>';
    }).join('');

    return '<section class="tsec">' +
      '<h2 class="tsec-h">Gaps that travel together</h2>' +
      '<p class="tsec-s">How often two things are missing off the same creator. <b>' +
      esc(m.pairs[0][0]) + '</b> is the pattern: ' + m.pairs[0][1] + ' of ' + m.people.length +
      ' have neither. That is one conversation, not two.</p>' +
      '<div class="tpanel"><div class="tpairs">' + rows + '</div>' +
      '<p class="traynote">Counted off confirmed absences only. A pair where either side could not ' +
      'be told is not counted, so these run lower than the column totals multiplied.</p></div></section>';
  }

  /* ---- why the one column that could move is shut ---------------------- */
  function trendGate(m, days) {
    return '<section class="tsec">' +
      '<h2 class="tsec-h">Movement &mdash; not yet</h2>' +
      '<div class="tgate"><span class="tgate-n">' + (TREND_GATE - days) + '</span>' +
      '<div class="tgate-b">' +
      '<p><b>days before this screen can call a direction.</b> Every report Scout writes today ' +
      'reads <i>&ldquo;no trend yet.&rdquo;</i> This screen holds to the same gate.</p>' +
      '<p>Until it opens, this is a census with a countdown on it. Nothing here is extrapolated, ' +
      'smoothed or projected.</p>' +
      '</div></div></section>';
  }

  /* ---- what this screen deliberately does not do ----------------------- */
  function trendHandoff(m) {
    return '<section class="tsec">' +
      '<div class="thand"><span class="thand-i">' + U.icon('ask') + '</span>' +
      '<div><h2 class="thand-h">' + m.asks + ' people asked for something that does not exist yet</h2>' +
      '<p>' + U.num(m.comments) + ' comments read, ' + m.buying + ' of them asking to buy. This screen ' +
      'is what the market is missing. What its audience wants is a different question, and it gets ' +
      'its own screen.</p></div></div></section>';
  }

  function adminView() {
    var a = S.admin, ad = state.admin;
    var house = brief('b_house');
    /* v5.4 — THE DENOMINATOR IS THE BRIEF'S POOL, NOT EVERY RECORD IN THE SEED.
       poolFor() unions every brief's candidates: on a five-brief seed that is 116
       records, of which 58 are the house cohort and the rest were never eligible.
       "8 of 116" and the drop screen's "8 + 27 stopped by score + 23 by fit" were
       two answers to the same question, 116 and 58, computed from the same data.
       dropFor + rejectedFor is exactly the brief's pool by construction — the two
       functions partition it — so it cannot drift from what the drop screen says. */
    /* v7 — and it leaves out the names a list already owns, as the drop does.
       Without standingExcluded() this read "10 of 65" beside a drop saying 9. */
    var clearingList = S.dropFor(asOf(), house, ad.threshold, standingExcluded());
    var clearing = clearingList.length;
    var pool = clearing + S.rejectedFor(asOf(), house, ad.threshold).length;

    return '<header class="pagehead"><h1>Admin</h1>' +
      '<p class="deck">The four things the organisation controls.</p></header>' +

      /* v5.5c — A STICKY JUMP BAR. Admin is four sections and about four
         screens tall, and the source catalogue at the bottom is eleven rows —
         so "switch Reddit on" was a scroll with no landmarks. The bar names the
         four and stays put.

         It is a jump list, not tabs: nothing is hidden and nothing is a mode.
         All four sections stay on the page and scrolling still works normally —
         pressing one moves you to it. Real tabs would have hidden three
         quarters of the screen to save a scroll, on the one screen where seeing
         the spend beside the bar is the point.

         Anchors, not buttons, so the browser's own scrolling does the work and
         a keyboard user gets it for free. */
      '<nav class="secnav" aria-label="Admin sections">' +
      /* The page title, in the bar, and only once the real one has gone. It is
         the report's compact-bar rule applied here: while the h1 is on screen a
         second copy of it is noise, and the moment it scrolls away the bar is
         the only thing left saying which screen this is. `aria-hidden` because
         the h1 is still the document's heading — this is the same words a
         second time, for the eye. */
      '<span class="secnav-t" aria-hidden="true">Admin</span>' +
      [['ad-spend', 'Spend and the bar'], ['ad-money', 'Where the money went'],
        ['ad-seats', 'Who is in'], ['sources', 'Where Scout looks']]
        .map(function (s) {
          /* No `data-act`. The global click handler catches everything carrying
             one and clears the receipts popover on the way past; these are plain
             anchors and the browser's own scrolling is the whole behaviour, so
             they have no business entering it. `data-to` is for bindSecNav. */
          return '<a class="secnav-i" href="#' + s[0] + '" data-to="' + s[0] + '">' +
            esc(s[1]) + '</a>';
        }).join('') + '</nav>' +

      '<section class="adsec" id="ad-spend"><h2 class="adsec-h">What it may spend, and where the bar sits</h2>' +
      '<p class="adsec-d">The two knobs that change what arrives tomorrow morning.</p>' +
      '<div class="adgrid">' +
      /* v5.5 — THE TWO KNOBS TAKE FIELDS, and the fields are the toolkit's, not
         decoration. Butter is attention (money being spent, now) and teal is
         counted (a threshold, read off a measured result). The two cards were
         identical white panels carrying two numbers that mean opposite kinds of
         thing, and the only way to tell them apart was to read the label. */
      '<section class="p p--butter adcard"><span class="lab">Budget ceiling</span>' +
      '<div class="bigfig">' + U.money(ad.ceiling) + '<small>/month</small></div>' +
      U.track((a.budget.spent / ad.ceiling) * 100, 'track--tall') +
      '<p class="adnote"><b>' + U.money(a.budget.spent) + ' spent</b> in ' + esc(a.budget.period) +
      ' ' + DOT + ' ' + esc(a.budget.trend) + '</p>' +
      '<div class="seg seg--inline mt-3">' + [50, 250, 1000].map(function (n) {
        return '<button data-act="ceiling" data-v="' + n + '" aria-pressed="' + (ad.ceiling === n) + '">' + U.money(n) + '</button>';
      }).join('') + '</div>' +
      '<p class="adfine">Per organisation, per month. There are no per-person quotas.</p>' +
      /* v5.5 — the count and the per-creator figure are DERIVED. They were typed
         here as "83 creators — about six cents each" beside a ledger that holds
         both numbers, which is how the same sentence read "86 creators — about
         four cents each" for a while after the seed re-ran. Same class as the
         watchlist's invented $4.20 and the four copies of the threshold. */
      (function () {
        var per = perCreatorCost();
        if (per == null) return '';
        var k = S.admin.costs;
        var n = (k && k.studiedCreators) || 0;
        return '<p class="adfine">That is what every run so far actually cost, across ' +
          U.num(n) + ' creators the model has read. About ' +
          (per < 0.01 ? 'a cent' : Math.round(per * 100) + ' cents') + ' each.</p>';
      })() + '</section>' +

      '<section class="p p--teal adcard"><span class="lab">The bar</span>' +
      '<div class="bigfig">' + ad.threshold + '</div>' +
      '<p class="adnote"><b>' + clearing + ' of ' + pool + '</b> clear it in the house brief today.</p>' +
      /* v5.4 — THE PRESETS ARE DERIVED FROM THE SEED'S BAR, NOT TYPED BESIDE IT.
         These read 70/74/78/82 while the live bar read 25, so no button was ever
         pressed and every one of them set the bar above the highest score in the
         cohort — one click emptied the drop. That is the worst version of this
         bug, because §6.1 designs an empty drop to look considered, so it fails
         without looking like a failure. The old 78 had already been found in four
         other places; typing a fifth copy here is what put it back. Deriving them
         means the next time the engine re-reads its bar, these move with it. */
      '<div class="seg seg--inline mt-3">' + [S.THRESHOLD - 5, S.THRESHOLD, S.THRESHOLD + 5, S.THRESHOLD + 10]
        .map(function (n) {
          return '<button data-act="thresh" data-v="' + n + '" aria-pressed="' + (ad.threshold === n) + '">' + n + '</button>';
        }).join('') + '</div>' +
      '<p class="adfine">Read off a result, not chosen: whatever produces five to ten names on a good ' +
      'day and zero on a thin one.</p>' +
      '<p class="adfine">Re-read it the first time a cohort has real demand. The cohort behind ' +
      S.THRESHOLD + ' had almost none that Scout could reach, so its ceiling was well under 100.</p>' +
      /* The admin moving this number is the person most owed the story of where
         it came from and what the score it gates is made of. */
      helpLink('cut', 'What makes the cut') + '</section>' +
      '</div>' +

      '<div class="p mt-3" id="ad-money"><span class="lab">Where the money went</span>' +
      moneyTables(a) +
      /* Summed from the rows above rather than typed beside them. It had already
         drifted once — the paragraph said 13,837 fetches and 881 model calls
         while the table said 16,912 and 1,244, and the paragraph is the sentence
         people quote. A total that is arithmetic cannot disagree with its own
         addends. */
      /* Read off the same derived block the tables above use, so the sentence
         people quote and the rows they check are one arithmetic. */
      (function () {
        var k = a.costs;
        if (!k || !k.fetches || !k.calls) return '';
        return '<p class="adfine"><b>Looking is free; judging is the bill.</b> ' +
          U.num(k.fetches) + ' fetches across Sweep and Probe cost nothing. The entire ' +
          U.money(k.spent) + ' is ' + U.num(k.calls) + ' model calls at Study depth. ' +
          'Switching a source off below does not save money; it lowers what can be proven.</p>';
      })() +
      '<p class="adfine"><b>No names at Sweep depth.</b> Names appear from Probe upward, where a ' +
      'judgment was made and a result was written down.</p>' +
      '<p class="adfine">Budget decides how many creators reach Probe and Study. It never decides how ' +
      'thoroughly one of them is examined: the confidence floor cannot be lowered to save money.</p></div>' +
      '</section>' +

      '<section class="adsec" id="ad-seats"><h2 class="adsec-h">Who is in</h2>' +
      '<p class="adsec-d">Every decision in Scout carries the name of the person who made it. One ' +
      'account, one person.</p>' +
      '<section class="p adcard adcard--wide">' +
      '<div class="bigfig">' + a.members.length + '<small>' +
      (a.members.length === 1 ? ' seat' : ' seats') + '</small></div>' +
      '<div class="wrapx"><table class="ct mt-3"><thead><tr><th>Member</th><th>Briefs</th><th>Last seen</th><th>Can spend</th></tr></thead><tbody>' +
      a.members.map(function (m) {
        return '<tr><td><b>' + esc(m.name) + '</b><br><span class="sub-t">' + esc(m.email) + '</span></td>' +
          '<td>' + m.briefs + '</td><td>' + esc(U.shortDate(m.lastSeen)) + '</td>' +
          '<td>' + (m.admin ? '<span class="pill pill--ok">Admin</span>' : '<span class="pill">Member</span>') + '</td></tr>';
      }).join('') + '</tbody></table></div>' +
      /* v5.5 — INVITE IS ON THE SCREEN AND IS NOT WIRED, and says which.
         The seat model is the product decision (one account now, more later);
         the button is where that decision becomes visible. Drawing it live and
         having it do nothing would be the "Continue with Google" defect again,
         one screen along — so it is drawn as the announcement it actually is. */
      '<div class="invite mt-4"><button class="btn btn--out btn--sm" disabled>' +
      U.icon('plus') + 'Invite a teammate</button>' +
      '<span class="invite-n">Not yet built</span></div>' +
      '<p class="adfine">One seat today. An invitation will create a member from a Paradium address, ' +
      'and Admin is a permission on a member, not a job title.</p></section></section>' +

      sourcesSection();
  }

  /* ================================================================== GATE */
  /* A utility gate. Wordmark, two fields, one button. No marketing copy, no
     product tour, no backtest teaser — building a landing page now is a second
     surface to maintain for an audience of one company (§6.8). */
  /* Decision 120, third shape. The history is worth keeping because each
     version failed differently and the current one is answering both failures.

     v4 was "Continue with Google": a button that LIED. It looked like an
     identity check and was a page transition, so the first thing the product
     did was pretend — and it made every decision in the app anonymous, which
     §8 cannot allow, because a Pass is a training label and a state is the past
     tense of a verb some particular human performed.

     v5.4 was PICK YOUR NAME from a list of four. That fixed attribution and
     broke the other half: it described a four-person workspace that does not
     exist, and it taught that identity in Scout is a preference rather than a
     credential. Nobody signs into a real product by clicking their own face.

     THIS IS EMAIL AND PASSWORD, ONE ACCOUNT, and it is deliberately not a
     security theatre. The credential is generated once in the seed and PRINTED
     ON THE SCREEN, because a demo that hides its own password is a demo you
     cannot get into — and because the honest claim is "this is what the door
     will look like", not "your data is protected in this prototype". Both
     fields arrive filled: the sign-in is one Return away, and the shape of the
     real thing is still on screen.

     Wrong credentials are refused, and refused GENERICALLY — never "no such
     account" versus "wrong password", which is the standard way a login form
     tells a stranger which half they got right.

     One seat, and the invite path is Admin's, not the gate's. A "request
     access" link here would be a promise to a queue nobody is reading. */
  function signInView() {
    var acct = S.account;
    var err = state.gateError;
    var vEmail = state.gateEmail == null ? acct.email : state.gateEmail;
    var vPass = state.gatePass == null ? acct.password : state.gatePass;
    /* v5.5c — THE REAL LOGO, WITH THE BUILT LOCKUP AS ITS FALLBACK.
       `assets/scout-logo.png` replaces the S disc, the wordmark and the strap
       line — one image doing the job of three elements, because it is the actual
       brand lockup and the three were a stand-in for it.

       ON LOAD, not on error. The obvious build shows the image and swaps in the
       fallback if it 404s, which flashes an empty header for as long as the
       request takes to fail — and on a slow connection that is the first thing
       anyone sees of the product. This is the other way round: the drawn lockup
       is what the markup renders, and a logo that arrives replaces it. If the
       file is missing the gate is exactly what it was, with no flash and no gap.

       Same shape as `U.face()`, one step further: that one removes a dead avatar
       and reveals the initials underneath, this one hides live type when a real
       image lands on top of it. */
    return '<div class="signin"><div class="signin-brand">' +
      '<img class="signin-logo" src="assets/Scout_Logo.png" alt="Scout &mdash; Paradium.AI" ' +
      'onload="this.parentNode.classList.add(\'has-logo\')" onerror="this.remove()">' +
      '<div class="signin-mark">S</div>' +
      '<h1 class="signin-wm">Scout</h1><p class="signin-sub">Origination desk</p>' +
      '</div>' +

      '<form class="signform" data-act="signinsubmit" novalidate>' +
      (err ? '<p class="gateerr" role="alert">' + esc(err) + '</p>' : '') +
      '<label class="fld"><span class="fld-l">Email</span>' +
      '<input class="fld-i" id="gate-email" type="email" name="email" autocomplete="username" ' +
      'spellcheck="false" value="' + esc(vEmail) + '"></label>' +
      '<label class="fld"><span class="fld-l">Password</span>' +
      '<span class="fld-wrap">' +
      '<input class="fld-i" id="gate-pass" type="' + (state.gateShow ? 'text' : 'password') + '" ' +
      'name="password" autocomplete="current-password" value="' + esc(vPass) + '">' +
      '<button type="button" class="fld-eye" data-act="gateshow" aria-pressed="' + !!state.gateShow + '">' +
      (state.gateShow ? 'Hide' : 'Show') + '</button></span></label>' +
      '<button class="btn btn--primary signin-go" type="submit">Sign in</button>' +
      '</form>' +

      /* v5.5b — ONE LINE. This was two paragraphs — the credential, why the
         credential is printed, what the credential is for, and where invitations
         come from — under a form whose fields are already filled in. Nobody
         reading a login screen is owed four sentences.

         The password stays, because both fields arrive filled and the only
         thing the fine print has to survive is somebody clearing one of them.
         Everything else it used to say belongs where it is acted on: the seat
         model is stated in Admin, next to the invite button. */
      '<p class="signin-fine">One seat &middot; password for this build is ' +
      '<code class="gatepw">' + esc(acct.password) + '</code></p>' +
      '</div>';
  }

  /* Whatever is in the two gate fields right now, into state. Called before any
     render that the gate survives. */
  function readGate() {
    var ge = document.getElementById('gate-email');
    var gp = document.getElementById('gate-pass');
    if (ge) state.gateEmail = ge.value;
    if (gp) state.gatePass = gp.value;
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

  /* v7 — EVERY VERB CAN BE TAKEN BACK FROM WHERE IT LANDS. Undo used to live
     only on the drop's decided row, so a Promote from the report went straight
     to the outreach package with no way back, and a Pass from the report
     dropped you on another screen with the name gone. The toast names what
     happened and holds the way back for eight seconds. Not persisted: after a
     reload the lists are the way back. */
  var toastTimer = null;
  function decided(id, msg) {
    announce(msg);
    /* The keyboard's place moves on with the decision, to the next name still
       open below it, so J is never spent stepping over what is already done. */
    if (state.cursor === id) {
      var all = dropList(), at = -1, next = null;
      all.forEach(function (c, n) { if (c.id === id) at = n; });
      all.forEach(function (c, n) { if (!next && n > at && !decisionFor(c.id)) next = c.id; });
      state.cursor = next;
    }
    var t = state.toast = { id: id, msg: msg,
      back: { view: state.view, from: state.from, reportId: state.reportId } };
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () {
      if (state.toast !== t) return;
      state.toast = null;
      var el = document.getElementById('toast');
      if (el) el.remove();
    }, 8000);
  }
  function toastHTML() {
    if (!state.toast) return '';
    return '<div class="toast" id="toast"><span>' + esc(state.toast.msg) + '</span>' +
      '<button class="toastbtn" data-act="toastundo">Undo</button></div>';
  }

  function render(viewChanged) {
    var fade = state.animate && !reduceMotion.matches ? ' viewfade' : '';
    state.animate = false;
    var key = focusKeyOf(document.activeElement);
    var html;

    /* Cleared before the body is built and re-set by scanView if this render
       actually draws one. Anything the scan does between renders reads this to
       decide whether it is allowed to repaint. */
    scanShown = null;

    if (state.phase === 'signedout') {
      html = '<div class="slab slab--solo slab--gate"><main class="main" id="main">' + signInView() + '</main></div>';
    } else {
      var body =
        state.view === 'report' ? reportView() :
          state.view === 'watchlist' ? watchlistView() :
            state.view === 'passed' ? passedView() :
            state.view === 'promoted' ? promotedView() :
              (state.view === 'runname' && SHOW_RUNNAME) ? runNameView() :
                state.view === 'outreach' ? outreachView() :
                  state.view === 'trends' ? trendsView() :
                  state.view === 'admin' ? adminView() :
                  state.view === 'help' ? helpView() :
                    state.view === 'briefdetail' ? briefDetailView() :
                      state.view === 'newbrief' ? briefView() : dropView();

      html = '<div class="slab slab--app' + (state.railWide ? '' : ' slab--rmini') + '">' + railHTML() +
        '<main class="main" id="main">' +
        '<div class="wrap' + fade + '">' + body + '</div></main></div>';
    }
    if (state.rcp) html += rcpPop();
    if (state.phase !== 'signedout') html += toastHTML() + keysHTML();

    /* render() replaces the whole DOM, which destroys the scroll container.
       Capture and restore; go() is the only thing that resets, because only a
       view change should. */
    var prev = 0;
    var old = document.getElementById('main');
    if (old) prev = old.scrollTop;
    var oldTabs = document.getElementById('views');
    if (oldTabs) tabScrollLeft = oldTabs.scrollLeft;

    document.getElementById('app').innerHTML = html;

    var main = document.getElementById('main');
    if (main && prev) main.scrollTop = prev;
    if (main) bindCompact(main);
    if (main) bindSecNav(main);
    bindTabs();
    restoreFocus(key, viewChanged);
    persist();
  }

  /* The fade and the arrows are driven by measurement, never by assumption: a
     row that fits shows neither, and each end hides its own affordance when
     there is nothing that way. `render()` replaces the DOM, so this re-binds
     each time and the horizontal offset is carried over with it — without that,
     choosing a brief snaps the row back to the left and the tab you just picked
     can jump out of view.

     The 1px slack on the right comparison is not superstition: scrollWidth and
     clientWidth are integers while the real layout is fractional, so a row that
     is scrolled fully right can land at scrollLeft 411 against a maximum of
     411.5 and never satisfy a strict test — leaving an arrow pointing at
     nothing, permanently, which is the exact failure this is here to prevent. */
  function bindTabs() {
    var wrap = document.getElementById('viewswrap');
    var row = document.getElementById('views');
    if (!wrap || !row) return;
    function sync() {
      var max = row.scrollWidth - row.clientWidth;
      wrap.classList.toggle('no-scroll', max <= 1);
      wrap.classList.toggle('at-start', row.scrollLeft <= 1);
      wrap.classList.toggle('at-end', row.scrollLeft >= max - 1);
    }
    row.addEventListener('scroll', sync);
    if (tabScrollLeft) row.scrollLeft = tabScrollLeft;
    sync();
    /* Fonts land after first paint and change every chip's width, so a row
       measured before they arrive reports the wrong maximum. */
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }
  var tabScrollLeft = 0;

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

  /* v5.5c — WHICH SECTION YOU ARE IN, marked on the jump bar.
     Without it the bar is four links that never respond, which reads as broken
     the first time you scroll past a heading and nothing moves.

     A scroll listener rather than IntersectionObserver, deliberately: render()
     replaces the whole DOM on every click, so an observer would have to be
     disconnected and rebuilt on each pass or it would hold references to nodes
     that no longer exist. The listener is rebound with the DOM it belongs to,
     which is the pattern bindTabs and bindCompact already use here.

     The threshold is the bar's own height plus a little: a section counts as
     current from the moment its heading clears the bar, so the mark changes at
     the same instant the heading becomes readable. Last one wins on the way
     down, and the final section stays lit at the bottom of the scroll — where
     no heading is at the top of the viewport at all, and an unlit bar would say
     you are nowhere. */
  function bindSecNav(main) {
    var nav = main.querySelector('.secnav');
    if (!nav) return;
    var links = [].slice.call(nav.querySelectorAll('.secnav-i'));
    var targets = links.map(function (a) {
      return document.getElementById(a.getAttribute('data-to'));
    });
    /* Measured on every call, not cached: at first paint the display font has
       not landed and the heading is a different height, so a threshold read once
       shows the title while the h1 is still on screen. Same reason bindCompact
       re-measures. */
    function sync() {
      var head = main.querySelector('.pagehead');
      nav.classList.toggle('stuck',
        !!head && main.scrollTop > head.offsetTop + head.offsetHeight - 40);

      var top = main.scrollTop + 72;
      var at = 0;
      targets.forEach(function (el, i) { if (el && el.offsetTop <= top) at = i; });
      /* Bottomed out: the last section is the one you are looking at, whatever
         is level with the bar. */
      if (main.scrollTop + main.clientHeight >= main.scrollHeight - 4) at = links.length - 1;
      links.forEach(function (a, i) {
        if (i === at) a.setAttribute('aria-current', 'true');
        else a.removeAttribute('aria-current');
      });
    }
    main.addEventListener('scroll', sync);
    sync();
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(sync);
  }

  /* The `?` returns receipts, not a definition. Same component that argues the
     creator teaches the pillar, so it is built once (§6.11). */
  /* v5.4 — WHAT "WORTH A CALL" MEANS, ANSWERED IN RECEIPTS.
     Decision 77's rule is that the `?` returns receipts and never a definition,
     because a definition is identical on every screen and every `?` after the
     first is a dead click. That rule was written for a term attached to a
     creator; this one is attached to the BRIEF, so the receipts are the brief's
     own arithmetic — today's list, counted, with which pillar actually carried
     it. It is also the honest answer to the question the phrase invites: not
     "what do we mean by worth a call" but "on what basis are these eight here".

     Every number is counted at render time from the same functions the drop
     uses, so this cannot drift from the screen it is explaining. */
  function worthACallReceipts(b) {
    var list = S.dropFor(asOf(), b, state.admin.threshold);
    var pool = list.length + S.rejectedFor(asOf(), b, state.admin.threshold).length;
    var withDemand = list.filter(function (c) { return !S.claims(c).demand.unread; }).length;
    var withPressure = list.filter(function (c) { return S.claims(c).pressure.points > 0; }).length;
    return { title: 'Worth a call', lines: [
      'Looked at ' + pool + ' creators for this brief. ' + list.length + ' are on the list.',
      'All ' + list.length + ' have an audience and nothing built to sell it.',
      'All ' + list.length + ' clear the format gate — something we could build on.',
      withDemand + ' of ' + list.length + ' have demand we could read in the comments.',
      withPressure + ' of ' + list.length + ' show a dated change in how they work.',
      'The last two are what ranks the list. The first two are what gets you on it.'
    ] };
  }

  /* C — everything that used to be on the run banner, as receipts. Same rule as
     every other `?` on the screen: countable facts, no adjectives, and the last
     line is the one that matters because it is the only claim here about the
     future rather than the past. */
  /* v6.1 — EVERY FIGURE HERE IS NOW THE ENGINE'S, scoped to the run this line
     names. It used to read off a block typed into v52-seed.js by hand, which
     had gone five days stale while claiming to be a fact about this morning.

     THE SPEND LINE HAS TWO NUMBERS BECAUSE THERE ARE TWO QUESTIONS. What this
     run cost is the receipt for the sentence above it. What the desk has spent
     to date is the number anyone actually wants when they ask "what is this
     costing us", and dividing a standing total by today's cohort — which is
     what the old Admin screen did — is not a per-creator cost, it is two
     unrelated numbers in a fraction.

     A ZERO IS EXPLAINED, NEVER PRINTED BARE. A no-model run genuinely costs
     nothing, and "$0.00" with no clause reads as either a free product or a
     broken meter. Sweep and Probe are HTTP and rules; Study is the whole bill.
     This is the same failure the engine hit at the CLI — a run that finished
     with every model call refused looked exactly like a run that found
     nothing. */
  function lastRunReceipts() {
    var lr = S.lastRun;
    if (!lr) return { title: 'Last run', lines: [] };
    var st = S.admin.costs;
    var lines = [
      /* The zone is stated once, on the second time, rather than twice on one
         line: both halves are the same clock and repeating ET reads as two
         different ones. */
      'Started ' + U.clock(lr.started) + ', finished ' +
        U.clockZone(lr.finished) + ' on ' + U.shortDate(lr.finished) + '.',
      U.plural(lr.creators, 'name') + ' went through the full ladder' +
        (lr.minutes ? ', in ' + (lr.minutes < 1.5
          ? Math.round(lr.minutes * 60) + ' seconds' : Math.round(lr.minutes) + ' minutes') : '') + '.',
      U.num(lr.checks) + ' checks across every source that was switched on.'
    ];

    lines.push(lr.cost
      ? U.money(lr.cost) + ' on this run, across ' + U.plural(lr.calls || 0, 'model call') + '.'
      : 'This run cost nothing: no model call was made. Sweep and Probe are HTTP and ' +
        'rules — Study is the whole bill.');

    if (st && st.spent) {
      lines.push(U.money(st.spent) + ' spent to date, over ' +
        U.plural(st.studiedCreators, 'name') + ' studied' +
        (st.perCreator ? ' — ' + U.money(st.perCreator) + ' each' : '') + '.');
    }

    lines.push('Bar at ' + state.admin.threshold + ', capped at ' + S.CAP + '.');
    lines.push('It runs again at ' + U.clockZone(lr.next) + ' whether anyone opens this or not.');
    return { title: 'Last run', lines: lines };
  }

  /* The argument that used to be printed under the cost strip, as receipts —
     plus the arithmetic, which the strip never showed and which is the only
     thing that makes the number checkable. */
  function watchCostReceipts() {
    var study = null;
    (S.admin.ledger || []).forEach(function (r) { if (r.depth === 'study') study = r; });
    var n = watchlist().length;
    var per = perCreatorCost();
    if (per == null) return { title: 'What this list costs', lines: [] };
    return { title: 'What this list costs', lines: [
      n + ' watched ' + (n === 1 ? 'name' : 'names') + ' at ' + U.money(per) +
        ' each, re-checked once a month.',
      U.money(study.cost) + ' across ' + study.creators + ' creators at Study depth is where that ' +
        'figure comes from. Measured, not projected.',
      'A re-check re-runs the model, which is the whole cost.',
      'Effort per creator sits on the report. Money sits here and in Admin.'
    ] };
  }

  function rcpPop() {
    if (state.rcp.key === 'lastrun') return rcpFrame(lastRunReceipts());
    if (state.rcp.key === 'watchcost') return rcpFrame(watchCostReceipts());
    if (state.rcp.key === 'worthacall') {
      var rb = worthACallReceipts(brief(state.briefId));
      return rcpFrame(rb);
    }
    var c = creator(state.rcp.id);
    if (!c) return '';
    var r = S.receipts(c, state.rcp.key);
    if (!r.lines.length) return '';
    return rcpFrame(r);
  }

  function rcpFrame(r) {
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
    /* v5.4 — CLEARING THE TIMERS MUST ALSO CLEAR WHAT THEY WERE DRIVING.
       clearTimers() kills every in-flight animation, but the state those
       animations were advancing was left claiming to be mid-flight. For Run a
       name that is a trap with no way out: start a search, click any nav item
       during the ~3s scan, come back, and the screen is frozen on "looking…"
       for every row — with no input, no Run another and no Cancel rendered at
       that stage, so the only escape is reloading the page. On the one beat of
       the demo that runs live.

       Reset rather than resume: the scan did not happen, and a screen that
       resumes from where a cleared timer left off is claiming work nobody did. */
    clearTimers();
    /* v6.2 — back to the field with THE NAMES STILL IN IT. The names were typed
       by hand and the interrupted thing is only the replay, so throwing the list
       away as well would charge the reader for our timer. */
    if (state.run && state.run.stage === 'scoring') {
      state.run.stage = 'idle';
      state.run.step = 0;
      state.run.found = [];
      state.run.missed = [];
      state.run.added = false;
    }
    stopReplay();
    /* v5.8 — the scan used to be stopped here, one line under stopReplay, for
       what looked like the same reason. It is not the same thing. A replay is a
       view animation and belongs to the screen it plays on; a scan is the
       machine working on something you asked for, and leaving the screen is not
       a reason for it to not have happened. It keeps running, off its own
       timers, and paints nothing until you are back. See startScan. */
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

    if (act === 'railtog') { state.railWide = !state.railWide; state.menu = false; render(); return; }
    if (act === 'menu') { state.menu = !state.menu; render(); return; }
    if (act === 'theme') { setTheme(el.getAttribute('data-set')); render(); return; }

    /* Reveal re-renders the field to swap its type, so whatever is in the two
       boxes has to be carried across first — otherwise "Show" reverts an edited
       password to the seeded one, which is the same class of silent correction
       the refusal path had. */
    if (act === 'gateshow') { readGate(); state.gateShow = !state.gateShow; render(); return; }
    if (act === 'resetdemo') {
      /* The true reset. Sign out only clears in-memory state, so a reload brings
         the persisted session back — which is exactly what a presenter does not
         want between runs. Wipe the store and reboot: the app comes up at the
         gate, re-probes the engine, and the drop is the seed's again. */
      try { sessionStorage.clear(); } catch (e) { /* private mode — nothing to clear */ }
      location.reload();
      return;
    }

    if (act === 'signout') {
      state.phase = 'signedout'; state.decisions = {}; state.outcomeState = {};
      state.userBriefs = []; state.briefId = 'b_house'; state.asOf = null; state.firstRun = false;
      state.open = {}; state.menu = false; state.animate = true;
      state.gateError = null; state.gateShow = false;
      state.gateEmail = null; state.gatePass = null; render(); return;
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
    /* v5.6 — the help screen, and the section of it the question came from.
       `helpFrom` is only set on the way IN, so pressing "How Missing is scored"
       from a report and then jumping between help sections still returns to the
       report rather than to the last thing pressed.

       The scroll is deferred one frame rather than done here: go() re-renders
       the whole DOM and then resets #main's scrollTop to 0, so anything that
       scrolls before that runs is immediately undone. */
    if (act === 'help') {
      if (state.view !== 'help') state.helpFrom = state.view;
      var hs = el.getAttribute('data-sec');
      go('help');
      if (hs) {
        later(function () {
          var t = document.getElementById(helpId(hs));
          if (!t) return;
          /* A section heading is not focusable by default, so without this a
             keyboard or a screen reader follows the link and lands back at the
             top of the document with the viewport somewhere else entirely. */
          t.setAttribute('tabindex', '-1');
          t.focus({ preventScroll: true });

          /* NOT scrollIntoView. It is the obvious call and it does not survive
             the line above it: focusing an element — even with preventScroll —
             cancels a smooth scroll Chrome has not started animating yet, so
             the pair silently did nothing and the link read as broken. Dropping
             the focus to keep scrollIntoView would have traded a working link
             for an inaccessible one.

             WHICH THING SCROLLS IS NOT A CONSTANT. #main is the scroller at
             desk widths, and below the layout's breakpoint the document is —
             so this finds the nearest ancestor that actually overflows rather
             than naming one and being right most of the time. Scrolling the
             container by hand is also the only version that can be correct
             about where to stop: `block: 'start'` knows nothing about the
             breathing room a heading wants above it. */
          /* INSTANT, not smooth, and this was measured rather than assumed.
             Chrome scales a smooth scroll's duration with its distance, and
             "What makes the cut" is about 4,400px down the page — so the link
             played a second and a half of the whole document flying past before
             it settled. Smooth scrolling says "you are still where you were,
             moving"; this link has just replaced the screen, so there is no
             continuity to preserve and the animation was decorating a cut. */
          var behavior = 'auto';
          var box = t.parentNode;
          while (box && box !== document.body) {
            var ov = getComputedStyle(box).overflowY;
            if ((ov === 'auto' || ov === 'scroll') && box.scrollHeight > box.clientHeight + 1) break;
            box = box.parentNode;
          }
          if (box && box !== document.body && box.nodeType === 1) {
            box.scrollTo({
              top: Math.max(0, t.getBoundingClientRect().top - box.getBoundingClientRect().top +
                box.scrollTop - 12),
              behavior: behavior
            });
          } else {
            window.scrollTo({
              top: Math.max(0, t.getBoundingClientRect().top + window.scrollY - 12),
              behavior: behavior
            });
          }
        }, 20);
      }
      return;
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
        cost: { start: d.cap * PER_CREATOR, monthly: d.cap * PER_CREATOR * 0.6 },
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
    if (act === 'trajmonth') { state.trajMonth[id] = +el.getAttribute('data-m'); render(); return; }

    if (act === 'report') {
      state.reportId = id;
      state.open = {};
      /* v5.4 — stepping to the next creator mid-replay leaves a timer ticking
         against a report nobody is looking at. The tick guards on the id so it
         would stop itself, but a live timer that only stops because its own
         first line disagrees with global state is a thing that breaks the day
         someone changes that line. */
      stopReplay();
      go('report', el.getAttribute('data-from') || (state.view === 'report' ? state.from : state.view));
      return;
    }

    if (act === 'passtray') {
      state.passTray = id || null; state.watchTray = null; state.passAll = false; render(); return;
    }
    if (act === 'passall') { state.passAll = true; render(); return; }
    if (act === 'keys') { toggleKeys(); return; }
    if (act === 'watchtray') {
      state.watchTray = id || null; state.passTray = null; state.watchWindow = null; render(); return;
    }
    if (act === 'watchwhy') { state.watchWindow = el.getAttribute('data-w'); render(); return; }
    if (act === 'pass') {
      state.decisions[id] = { verb: 'pass', reasonCode: el.getAttribute('data-code'), at: asOf() };
      state.passTray = null;
      decided(id, 'Passed ' + creator(id).name + '.');
      if (state.view === 'report') go(state.from || 'drop'); else render();
      return;
    }
    if (act === 'watch') {
      state.decisions[id] = { verb: 'watch', at: asOf(), window: el.getAttribute('data-w') || '1 month' };
      state.watchTray = null; state.watchWindow = null;
      decided(id, 'Watching ' + creator(id).name + ', checking back in ' + (el.getAttribute('data-w') || '1 month') + '.');
      if (state.view === 'report') go(state.from || 'drop'); else render();
      return;
    }
    if (act === 'promote') {
      state.decisions[id] = { verb: 'promote', at: asOf() };
      decided(id, 'Promoted ' + creator(id).name + '.');
      state.outreachId = id; go('outreach'); return;
    }
    if (act === 'outreach') { state.outreachId = id; go('outreach'); return; }
    if (act === 'undo') { delete state.decisions[id]; delete state.outcomeState[id]; render(); return; }
    if (act === 'toastundo') {
      var t = state.toast;
      if (!t) return;
      delete state.decisions[t.id]; delete state.outcomeState[t.id];
      state.toast = null;
      announce('Undone. ' + creator(t.id).name + ' is back where they were.');
      if (state.view === t.back.view && t.back.view !== 'report') { render(); return; }
      state.reportId = t.back.reportId;
      go(t.back.view, t.back.from);
      return;
    }
    /* v5.9 — the same clearing as `undo`, under the name the Passed list uses.
       One verb per surface: the button says what happens, not "undo". */
    if (act === 'unpass') {
      delete state.decisions[id]; delete state.outcomeState[id];
      state.unpassed[id] = true;
      announce('Back in the drop.');
      render(); return;
    }

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
    /* v5.4 — the `plat` handler went with the card it drove. Sources owns this
       now, through `srctoggle`, against the real catalogue. */

    if (act === 'briefinfo') { state.briefInfo = !state.briefInfo; render(); return; }
    /* v5.5 — `tabscroll` went with the two arrows it drove. `syncTabs` stays:
       it still measures the row and drives the edge fades. */
    if (act === 'replay') { startReplay(el.getAttribute('data-id')); return; }
    if (act === 'replaystop') { stopReplay(); render(); return; }

    if (act === 'srctoggle') {
      var sid = el.getAttribute('data-id');
      var cur = SOURCES.filter(function (x) { return x.id === sid; })[0];
      if (cur) state.sources[sid] = !sourceOn(cur);
      render(); return;
    }
    /* clearTimers() as well as resetting: cancelling mid-scan leaves a tick
       queued that would otherwise walk state.run.step forward on a screen that
       has already gone back to the empty field. */
    if (act === 'runreset') {
      clearTimers();
      state.run = runBlank();
      render(); focusRunq(); return;
    }

    /* v6.2 — one name out of the batch, before it is run. */
    if (act === 'unpill') {
      var pi = Number(el.getAttribute('data-i'));
      state.run.subjects.splice(pi, 1);
      render(); focusRunq(); return;
    }

    /* v6.2 — THE ACT OF KEEPING THEM. Everything the batch found goes into the
       tracked tab at once; the ones Scout has not reached are not filed, because
       there is nothing yet to file. */
    if (act === 'trackall') {
      (state.run.found || []).forEach(function (cid) {
        if (state.tracked.indexOf(cid) === -1) state.tracked.push(cid);
      });
      state.run.added = true;
      announce(U.plural(state.run.found.length, 'name') + ' kept in your ' + TRACKED_TAB + '.');
      render(); return;
    }

    /* Switching modes resets the other half. Carrying a half-typed brief back
       and forth behind a toggle is how a member ends up submitting text they
       wrote for a different question. */
    if (act === 'briefmode') {
      var m = el.getAttribute('data-v');
      if (m !== state.briefMode) {
        clearTimers();
        state.briefMode = m;
        state.briefError = null;
        state.run = runBlank();
      }
      render(); if (m === 'person') focusRunq(); return;
    }

    if (act === 'viewtracked') {
      state.briefId = 'b_tracked';
      state.run = runBlank();
      go('drop'); return;
    }

    if (act === 'copy') {
      /* Through the rename layer, like the view that renders it. v5.1 recorded
         this as fixed and it was not: the on-screen package calls S.plain() per
         field, the clipboard handler concatenated the raw seed, and the text you
         would actually paste into a creator's inbox still read "we checked 18
         surfaces". The screen sweep passes either way, which is exactly how it
         survived — so the sweep now reads the clipboard too. */
      /* v5.4 — AND IT SURVIVED AGAIN, one layer down. With a real creator's
         empty outreach object this concatenated three nulls, so the text landing
         in the clipboard read "Subject: null / null / null" while the screen
         above it looked merely blank. The rename layer was the fix last time and
         the nulls walked straight through it, because S.plain() renames words
         and has no opinion about whether there are any. Build the clipboard from
         the same two states the screen renders, never from the raw fields. */
      var c = creator(id), o = c.outreach || {}, who = me();
      var bullets = ((o.bullets && o.bullets.length) ? o.bullets : signalBullets(c))
        .map(function (b) { return typeof b === 'string' ? b : b.text; });
      var written = !!(o.subject || o.opener || o.close);
      var lines = [];
      if (written) {
        lines.push('Subject: ' + o.subject, '', o.opener, '');
        bullets.forEach(function (b) { lines.push('- ' + b); });
        lines.push('', o.close, '', who.name, 'Paradium');
      } else {
        lines.push(c.name + ' ' + c.handle, '');
        bullets.forEach(function (b) { lines.push('- ' + b); });
        lines.push('', 'Signals only \u2014 Scout has not drafted a first contact for this creator.');
      }
      copyText(S.plain(lines.filter(function (l) { return l !== null && l !== undefined; }).join('\n')));
      state.copied = true; announce(written ? 'Draft copied.' : 'Signals copied.'); render();
      later(function () { state.copied = false; if (state.view === 'outreach') render(); }, 2200);
      return;
    }
  });

  document.addEventListener('submit', function (e) {
    /* Sign-in lands on today's drop. The January 2024 rewind is removed. */
    var gate = e.target.closest ? e.target.closest('[data-act="signinsubmit"]') : null;
    if (gate) {
      e.preventDefault();
      readGate();
      var em = String(state.gateEmail || '').trim().toLowerCase();
      var pw = String(state.gatePass || '');
      /* ONE MESSAGE FOR BOTH HALVES. "No account with that email" and "wrong
         password" are two different sentences, and the difference between them
         tells anyone who types a guess which half of the guess landed. */
      if (em !== String(S.account.email).toLowerCase() || pw !== S.account.password) {
        state.gateError = 'That email and password do not match an account.';
        render();
        var back = document.getElementById(em ? 'gate-pass' : 'gate-email');
        if (back) { back.focus(); back.select && back.select(); }
        return;
      }
      /* Signing in is what puts a name on every later decision (§8) — so the
         account, not the session, is where the identity comes from. */
      S.me.name = S.members[0].name; S.me.initials = S.members[0].initials;
      S.me.email = S.account.email; S.me.admin = !!S.members[0].admin;
      state.gateError = null; state.gateShow = false;
      state.gateEmail = null; state.gatePass = null;
      state.phase = 'app'; state.asOf = null; state.firstRun = false;
      go('drop');
      return;
    }
    var run = e.target.closest ? e.target.closest('[data-act="runsubmit"]') : null;
    if (run) {
      e.preventDefault();
      /* Whatever is still in the box counts. Submitting with a handle typed and
         no Enter pressed used to run everything except the name in front of the
         cursor, which is the one the reader is looking at. */
      commitPill();
      if (!state.run.subjects.length) return;   /* an empty box is not a search */
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
      decided(id, 'Watching ' + creator(id).name + ' for ' + state.watchWindow + '.');
      state.watchTray = null; state.watchWindow = null;
      if (state.view === 'report') go(state.from || 'drop'); else render();
      return;
    }
    var bf = e.target.closest ? e.target.closest('[data-act="briefsubmit"]') : null;
    if (bf) {
      e.preventDefault();
      /* v5.4 — AN EMPTY FIELD FALLS BACK TO THE PLACEHOLDER, AND THE NEXT SCREEN
         PRINTS IT UNDER "YOU WROTE". Submitting nothing produced a fully-formed
         brief quoting three sentences the member had never typed, attributed to
         them, above six derived chips that all looked right. Same defect family
         as `(growth90d || 0)` — a falsy fallback substituting an invented value
         for a missing one — except this one lands in the single place the
         interface promises verbatim attribution. A product that will not let a
         model say a creator has no newsletter without checking six URLs cannot
         put words in its own user's mouth.

         Empty does not submit. The message is inline and the focus goes back to
         the field, because the only thing wrong is that it is empty. */
      var ta = document.getElementById('bdesc');
      var text = ta ? ta.value.trim() : '';
      if (!text) {
        state.briefError = 'Write what you are looking for first. Scout reads back your words, so there is nothing to read back yet.';
        render();
        var f = document.getElementById('bdesc');
        if (f) f.focus();
        return;
      }
      state.briefError = null;
      state.draft = readBack(text, state.draft);
      state.briefStage = 'read';
      go('newbrief');
    }
  });

  /* ------------------------------------------------- THE HANDLES, AS PILLS */
  /* render() replaces the whole DOM, so the field's value has to live in state
     or the first re-render eats a half-typed handle. Same defect the sign-in
     gate was fixed for. */
  document.addEventListener('input', function (e) {
    if (!e.target || e.target.id !== 'runq') return;
    state.run.query = e.target.value;
  });

  function runBlank() {
    return { stage: 'idle', query: '', step: 0, subjects: [], found: [], missed: [], added: false };
  }

  /* The whole DOM is replaced on render, so focus has to be put back by hand.
     A token field that loses the caret after every token is a field you cannot
     type a list into. */
  function focusRunq() {
    var i = document.getElementById('runq');
    if (i) { i.focus(); i.selectionStart = i.selectionEnd = i.value.length; }
  }

  /* Whatever is in the box becomes a pill. Splits on commas and spaces too: a
     list pasted out of a note arrives as one string and asking somebody to
     re-type it as six is the sort of thing that makes a person stop using a
     feature. Duplicates are dropped rather than refused — typing a name twice
     is a slip, not a question. */
  function commitPill() {
    var raw = String(state.run.query || '').trim();
    if (!raw) return false;
    var parts = raw.split(/[\s,]+/).filter(Boolean);
    var added = false;
    parts.forEach(function (p) {
      var k = runKey(normalizeSubject(p).handle);
      if (!k) return;
      var dup = state.run.subjects.some(function (s) {
        return runKey(normalizeSubject(s).handle) === k;
      });
      if (dup) return;
      state.run.subjects.push(p);
      added = true;
    });
    state.run.query = '';
    return added;
  }

  document.addEventListener('keydown', function (e) {
    if (!e.target || e.target.id !== 'runq' || state.run.stage !== 'idle') return;
    if (e.key === 'Enter') {
      /* Enter on a filled box makes a pill; Enter on an empty one runs the
         batch. One key, and it always does the thing there is to do. */
      if (String(e.target.value || '').trim()) {
        e.preventDefault();
        commitPill();
        render(); focusRunq();
      }
      return;
    }
    if (e.key === ',' || (e.key === 'Tab' && String(e.target.value || '').trim())) {
      e.preventDefault();
      commitPill();
      render(); focusRunq();
      return;
    }
    /* Backspace at the start of an empty box takes the last pill back into the
       box rather than deleting it outright — a typo in the fourth handle should
       cost four characters, not the whole handle. */
    if (e.key === 'Backspace' && !e.target.value && state.run.subjects.length) {
      e.preventDefault();
      state.run.query = state.run.subjects.pop();
      render(); focusRunq();
    }
  });

  /* ============================================================ KEYBOARD
     v7 — THE DAY IS "WORK THE DROP TO ZERO" (§3), and every decision was a
     mouse trip to the far column and back. Each key presses the button a click
     would, so the keyboard cannot drift from what the screen offers: a verb
     the report does not show (Watch on someone already watched) has no key. */
  function typing(t) {
    return !!t && (/^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName) || t.isContentEditable);
  }
  var KEYS = [
    ['J / K', 'Next and previous creator'],
    ['Enter', 'Open the report'],
    ['P', 'Promote'],
    ['W', 'Watch'],
    ['X', 'Pass'],
    ['Esc', 'Close, or back to the list'],
    ['?', 'This list']
  ];
  function keysHTML() {
    if (!state.keys) return '';
    return '<div class="keysheet" role="dialog" aria-modal="true" aria-label="Shortcuts">' +
      '<div class="keysbox"><div class="keyshd"><h2>Shortcuts</h2>' +
      '<button class="btn btn--ghost btn--sm" data-act="keys">Close</button></div>' +
      '<dl>' + KEYS.map(function (k) {
        return '<div><dt>' + k[0].split(' / ').map(function (x) { return '<kbd>' + esc(x) + '</kbd>'; }).join(' ') +
          '</dt><dd>' + esc(k[1]) + '</dd></div>';
      }).join('') + '</dl></div></div>';
  }
  /* Focus goes into the sheet when it opens and back to the page when it
     closes, so a keyboard user is never left behind the overlay. */
  function toggleKeys() {
    state.keys = !state.keys;
    render();
    var b = document.querySelector(state.keys ? '.keysheet button' : '.keyhint');
    if (b) b.focus();
  }
  function press(root, act) {
    var b = root && root.querySelector('[data-act="' + act + '"]');
    if (!b) return false;
    b.click();
    /* A tray is a choice in progress: put focus on its first option, so the
       next key is Enter or Tab and not a trip back to the mouse. */
    if (act === 'passtray' || act === 'watchtray') {
      var first = document.querySelector('.passtray button');
      if (first) first.focus();
    }
    return true;
  }
  function moveCursor(step) {
    var open = dropList().filter(function (c) { return !decisionFor(c.id); });
    if (!open.length) return;
    var i = -1;
    open.forEach(function (c, n) { if (c.id === state.cursor) i = n; });
    i = i === -1 ? (step > 0 ? 0 : open.length - 1) : Math.max(0, Math.min(open.length - 1, i + step));
    state.cursor = open[i].id;
    render();
    var row = document.querySelector('.row--cur');
    if (row) row.scrollIntoView({ block: 'nearest', behavior: reduceMotion.matches ? 'auto' : 'smooth' });
  }
  document.addEventListener('keydown', function (e) {
    if (state.phase === 'signedout' || e.metaKey || e.ctrlKey || e.altKey || typing(e.target)) return;
    if (state.passTray || state.watchTray || state.rcp || state.menu) return;
    var k = e.key;
    if (k === '?') { e.preventDefault(); toggleKeys(); return; }
    if (state.keys) return;
    var key = k.length === 1 ? k.toLowerCase() : k;

    if (state.view === 'drop') {
      if (key === 'j' || k === 'ArrowDown') { e.preventDefault(); moveCursor(1); return; }
      if (key === 'k' || k === 'ArrowUp') { e.preventDefault(); moveCursor(-1); return; }
      var row = state.cursor && document.querySelector('.row[data-id="' + state.cursor + '"]');
      if (!row) return;
      /* Enter on a focused button is that button's; only a bare Enter opens. */
      if (k === 'Enter' && e.target === document.body) { e.preventDefault(); row.click(); return; }
      var act = key === 'p' ? 'promote' : key === 'w' ? 'watchtray' : key === 'x' ? 'passtray' : null;
      if (act) { e.preventDefault(); press(row.querySelector('.acts'), act); }
      return;
    }

    if (state.view === 'report') {
      var s = seriesOf(state.reportId);
      var to = s && (key === 'j' ? s.next : key === 'k' ? s.prev : null);
      if (to) {
        e.preventDefault();
        var nb = document.querySelector('.rpt-nav .serbtn[data-id="' + to.id + '"]');
        if (nb) nb.click();
        return;
      }
      var head = document.querySelector('.headverbs');
      var ract = key === 'p' ? 'promote' : key === 'w' ? 'watchtray' : key === 'x' ? 'passtray' : null;
      if (ract && head) { e.preventDefault(); press(head, ract); }
    }
  });

  /* v5 checked only the popover and the menu, which taught you the key works
     and then dropped it two clicks later on a tray that looks the same. */
  document.addEventListener('keydown', function (e) {
    if (e.key !== 'Escape') return;
    if (state.keys) { state.keys = false; render(); return; }
    if (state.rcp || state.menu) { state.rcp = null; state.menu = false; render(); return; }
    if (state.passTray || state.watchTray || state.outcomeTray) {
      state.passTray = null; state.watchTray = null; state.outcomeTray = null; render();
      return;
    }
    if (state.view === 'report' && !typing(e.target)) go(state.from || 'drop');
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
      /* v5.6 — the seed holds a 20-creator NFL cohort and no rule reached it, so
         an NFL brief read back as "Any category" and the tab said so. Placed
         after college football on purpose: a brief about coaching staff is a
         CFB brief in this vocabulary and must not be captured by "football". */
      [/\bnfl\b|quarterback|pro football/, 'Sports › NFL'],
      /* v6.2 — same defect the NFL line above was written for, one cohort over.
         The seed holds a 12-creator car cohort the engine really ran, and no
         rule reached it: a detailing brief hit `restor` and `machin` and read
         back as Craft › Restoration, so the tab for a brief about cars said
         Restoration. Placed BEFORE restoration, because a brief about restoring
         cars is an automotive brief in this vocabulary and the general trade
         rule must not take it first. */
      [/detail|\bcars?\b|automotive|vehicle|garage|mechanic|\brepair/, 'Automotive › Detailing and repair'],
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

    /* Only platforms Scout can actually read — see BRIEF_PLATFORMS. A brief
       that says "Instagram" gets no Instagram chip, on purpose: the read-back
       is what Scout heard it can DO, not a transcription of the words. */
    var found = [];
    briefPlatforms().forEach(function (p) { if (p.re.test(t)) found.push(p.name); });
    var unread = BRIEF_PLATFORMS_UNREAD.filter(function (p) { return p.re.test(t); });
    if (!found.length) found = BRIEF_PLATFORMS_DEFAULT.slice();
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

    return { text: text, chips: chips, bar: bar, unread: unread,
      cap: (draft && draft.cap) || 100, runs: (draft && draft.runs) || '3 months' };
  }

  function briefName(d) {
    /* v6.2 — THE TAB IS THE CATEGORY ALONE. It used to append the audience band,
       so an entered brief read "Home cooking, 50k–2M" while the standing briefs
       beside it — Home Cooking, Writers and media, Anyone worth a call — carry
       no band in their names. One name in the row wearing a filter the others
       hide made an entered brief look like a different kind of object. The band
       is still a chip and still narrows the search; it is not the tab's name. */
    return (d.chips[0] || 'Any category').split('›').pop().trim();
  }

  /* 240ms a row. Fast enough to read as work, slow enough that the addresses are
     legible — which is the whole difference between this and a progress bar.
     Reduced motion gets the finished list immediately: the information is the
     rows, and the animation is only how they arrive. */
  function startReplay(id) {
    var c = creator(id);
    if (!c) return;
    var rows = S.recordFor(c, rewound() ? S.REWIND : null);
    if (!rows.length) return;
    stopReplay();
    if (reduceMotion.matches) {
      state.replay = { id: id, step: rows.length, timer: null }; render(); return;
    }
    state.replay = { id: id, step: 0, timer: null };
    var tick = function () {
      if (!state.replay || state.replay.id !== id) return;
      state.replay.step += 1;
      render();
      if (state.replay.step < rows.length) state.replay.timer = later(tick, 240);
    };
    state.replay.timer = later(tick, 200);
    render();
  }
  function stopReplay() {
    if (state.replay && state.replay.timer) clearTimeout(state.replay.timer);
    state.replay = null;
  }

  function startScoring() {
    /* v5.4 — resolve BEFORE animating. Running the check sequence and then
       producing a stranger is worse than not running it: the animation is the
       part that claims work was done.

       v6.2 — every name in the batch, in the order they were typed, split into
       what Scout holds and what it has not reached. Nothing is filed here: the
       answer is shown and the keeping is a separate act (see `trackall`).

       The `miss` stage is gone as a stage. It was the whole screen when a lookup
       was one name and there was nothing else to show; in a batch a miss is one
       line among the results, and a batch of nothing but misses is the same
       screen with an empty list above that line. One fewer state, and the answer
       always looks like the answer. */
    var idx = runIndex();
    var found = [], missed = [];
    state.run.subjects.forEach(function (s) {
      var c = idx[runKey(normalizeSubject(s).handle)];
      if (c && found.indexOf(c.id) === -1) found.push(c.id);
      else if (!c) missed.push(s);
    });
    state.run.found = found;
    state.run.missed = missed;
    state.run.added = false;

    if (!found.length) {
      state.run.stage = 'done'; state.run.step = 0;
      announce('Scout has not looked at ' + U.plural(missed.length, 'name') + ' yet.');
      render(); return;
    }

    var total = S.claims(creator(found[0])).missing.built.length;
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
  /* Asked once, now, while the tab is certainly in front of somebody — see
     askEngine. Nothing waits on it: the answer lands long before a brief has
     been written, and a scan started before it lands waits for it itself. */
  askEngine();
})();
