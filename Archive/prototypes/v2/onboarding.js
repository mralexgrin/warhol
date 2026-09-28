/* ==========================================================================
   WARHOL SCOUT v2 — access and onboarding (PRD §6.7, §6.8, §6.9).
   Classic script. Sets window.ONBOARD.

   INVARIANT: this file owns no state and installs no listeners. It exports
   pure (state) -> htmlString renderers plus act(verb, el, state) -> bool.
   Only app.js calls render() and addEventListener.

   The shape of onboarding, in order: give them a mandate, put something real
   on the screen, then explain what they are looking at. A new user's problem
   is not that they do not understand the interface — it is that they have no
   mandate, and therefore no drop, and therefore an application that does
   nothing.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL;
  var V2 = window.WARHOL_V2;
  var U = window.UI;
  var esc = U.esc;

  /* ==================================================================== gate */
  /* A utility gate: wordmark, one button. No marketing copy, no product tour,
     no teaser. If Warhol ever becomes a public product it earns a landing page
     then; building one now is a second surface to maintain for an audience of
     one company. */
  function signIn() {
    return '<div class="signin">' +
      '<div class="signin-mark">' + esc(String.fromCharCode(87)) + '</div>' +
      '<h1 class="signin-wm">Warhol Scout</h1>' +
      '<p class="signin-sub">Origination desk</p>' +

      '<button class="btn signin-sso" data-act="signin" data-role="scout">' +
      '<span class="g-g" aria-hidden="true">G</span>Continue with Google</button>' +

      '<p class="signin-fine">Paradium accounts only.</p>' +

      /* Demo affordance, deliberately outside the product frame. The gate above
         is what ships; this is how a presenter drives both roles on stage. */
      '<div class="signin-demo">' +
      '<span class="kick">Prototype</span>' +
      '<p class="sub-t">One SSO button is the real screen. For the demo, choose which account it signs in as.</p>' +
      '<div class="signin-roles">' +
      '<button class="ipill" data-act="signin" data-role="scout">Scout — Alex Grinshpoon</button>' +
      '<button class="ipill" data-act="signin" data-role="spotter">Spotter — Dana Okonkwo-Reyes</button>' +
      '</div></div>' +
      '</div>';
  }

  /* ================================================================== wizard */
  var STEPS = [
    { n: 1, q: 'What kind of creator are you looking to source?', help: 'Pick the shape of the person, not their numbers. Warhol works out the numbers.' },
    { n: 2, q: 'What niche or category?', help: 'The business opportunity. This is the one thing Warhol will not guess for you.' },
    { n: 3, q: 'What outcome are you trying to cultivate?', help: 'What you would want to build with them if the call went well.' }
  ];

  function progress(step) {
    return '<div class="wiz-prog" aria-hidden="true">' +
      STEPS.map(function (s, i) {
        return '<span class="wiz-dot" data-on="' + (i <= step) + '"></span>';
      }).join('') +
      '<span class="wiz-dot" data-on="' + (step >= 3) + '"></span>' +
      '</div>';
  }

  function wizHead(state) {
    var step = state.wizard.step;
    var s = STEPS[step];
    var who = V2.people[state.session.userId];
    return '<div class="top">' +
      '<div class="crumb"><b>Warhol Scout</b><span>/</span>' +
      (step >= 3 ? 'Your brief' : 'Step ' + s.n + ' of 3') + '</div>' +
      '<div class="r">' +
      '<span class="pill">' + esc(who.name) + ' · ' + (who.role === 'scout' ? 'Scout' : 'Spotter') + '</span>' +
      themeSwitch() +
      '</div></div>';
  }

  function themeSwitch() {
    var dark = document.documentElement.getAttribute('data-theme') === 'dark';
    return '<div class="tsw" role="group" aria-label="Colour theme">' +
      '<button data-act="theme" data-set="light" aria-pressed="' + (!dark) + '">Light</button>' +
      '<button data-act="theme" data-set="dark" aria-pressed="' + dark + '">Dark</button>' +
      '</div>';
  }

  function wizard(state) {
    var step = state.wizard.step;
    if (step >= 3) return wizHead(state) + summary(state);

    var s = STEPS[step];
    var body =
      step === 0 ? stepArchetype(state) :
        step === 1 ? stepCategory(state) :
          stepOutcome(state);

    var picked =
      step === 0 ? state.wizard.archetype :
        step === 1 ? (state.wizard.category || state.wizard.wildcard) :
          state.wizard.outcome;

    return wizHead(state) +
      '<div class="wiz">' +
      progress(step) +
      '<h1 class="wiz-q">' + esc(s.q) + '</h1>' +
      '<p class="wiz-help">' + esc(s.help) + '</p>' +
      body +
      '<div class="wiz-acts">' +
      (step > 0
        ? '<button class="btn btn--out" data-act="wizstep" data-step="' + (step - 1) + '">Back</button>'
        : '') +
      '<span class="spacer"></span>' +
      (step === 2
        ? '<button class="btn" data-act="wizstep" data-step="3"' + (picked ? '' : ' disabled') + '>See your brief</button>'
        : '<button class="btn" data-act="wizstep" data-step="' + (step + 1) + '"' + (picked ? '' : ' disabled') + '>Continue</button>') +
      '</div></div>';
  }

  function stepArchetype(state) {
    return '<div class="wiz-opts">' + V2.archetypes.map(function (a) {
      var on = state.wizard.archetype === a.id;
      return '<button class="wiz-opt" data-act="wizpick" data-field="archetype" data-val="' + a.id + '"' +
        ' aria-pressed="' + on + '">' +
        '<span class="wiz-opt-l">' + esc(a.label) + '</span>' +
        '<span class="wiz-opt-b">' + esc(a.blurb) + '</span>' +
        '</button>';
    }).join('') + '</div>';
  }

  /* Step 2 is where the overlap check fires. The panel renders BENEATH the
     grid and Continue stays enabled the entire time — the prompt never blocks,
     so a missed overlap is a mediocre suggestion rather than a blocked user. */
  function stepCategory(state) {
    var isScout = state.session.role === 'scout';
    var grid = '<div class="wiz-opts wiz-opts--grid">' + V2.categories.map(function (c) {
      var on = state.wizard.category === c.label;
      var r = V2.rosterFor(c.label);
      return '<button class="wiz-opt" data-act="wizpick" data-field="category" data-val="' + esc(c.label) + '"' +
        ' aria-pressed="' + on + '">' +
        '<span class="wiz-opt-l">' + esc(c.label) + '</span>' +
        '<span class="wiz-opt-b">' + esc(c.note) + '</span>' +
        (r ? '<span class="wiz-opt-n">' + U.plural(r.members.length, 'person', 'people') + ' already watching</span>' : '') +
        '</button>';
    }).join('') + '</div>';

    /* A Scout's mandate defines a scan surface and may be a wildcard. A
       Spotter's mandate is a lens over the existing index and must name a
       category — twenty wildcards return twenty copies of the same top ten,
       and the personalisation is a fiction. */
    var wild = isScout
      ? '<button class="wiz-wild" data-act="wizwild" aria-pressed="' + (!!state.wizard.wildcard) + '">' +
      '<span class="wiz-opt-l">No category — score everything</span>' +
      '<span class="wiz-opt-b">Ranked purely on gap and strain across everything Warhol watches. Scouts only.</span>' +
      '</button>'
      : '';

    return grid + wild + overlapPanel(state);
  }

  function overlapPanel(state) {
    var o = state.wizard.overlap;
    if (!o.mandateId || o.dismissed || o.joined) return '';
    var r = null;
    V2.roster.forEach(function (x) { if (x.id === o.mandateId) r = x; });
    if (!r) return '';

    /* Composed from roster fields, so the sentence and the data cannot drift.
       Now that spend is visible, the prompt carries the number — a figure
       persuades where a nudge does not. */
    var n = r.members.length;
    var cat = V2.categoryFor(r.category);
    var headline = U.plural(n, 'person', 'people') + ' already ' +
      (n === 1 ? 'watches' : 'watch') + ' ' + ((cat && cat.spoken) || r.category.toLowerCase()) +
      ' — join theirs, or make your own?';

    return '<aside class="overlap p p--butter" role="note">' +
      '<div class="overlap-hd">' +
      '<span class="kick">Already being watched</span>' +
      '<span class="stack">' + r.members.map(function (m) {
        return '<span class="avatar avatar--ini">' + esc(m.initials) + '</span>';
      }).join('') + '</span>' +
      '</div>' +
      '<h3>' + esc(headline) + '</h3>' +
      '<p class="note"><b>Joining saves the Sweep and Probe spend on roughly ' +
      U.num(r.savedScanCreators) + ' creators.</b> You would share the same pool of names as ' +
      esc(r.owner) + '&rsquo;s brief, but keep your own queue — your decisions stay yours, and theirs show up on the card as notes, never as removals.</p>' +
      '<div class="overlap-acts">' +
      '<button class="btn" data-act="wizjoin" data-m="' + r.id + '">Join ' + esc(r.name) + '</button>' +
      '<button class="ipill" data-act="wizown">Make my own anyway</button>' +
      '</div></aside>';
  }

  function stepOutcome(state) {
    return '<div class="wiz-opts wiz-opts--grid">' + V2.outcomes.map(function (o) {
      var on = state.wizard.outcome === o.id;
      return '<button class="wiz-opt" data-act="wizpick" data-field="outcome" data-val="' + o.id + '"' +
        ' aria-pressed="' + on + '">' +
        '<span class="wiz-opt-l">' + esc(o.label) + '</span>' +
        '<span class="wiz-opt-b">' + esc(o.play) + '</span>' +
        '</button>';
    }).join('') +
      '</div>' +
      '<div class="wiz-free">' +
      '<label class="lab" for="wizfree">Anything else about the kind of creator you want?</label>' +
      '<input class="inp" id="wizfree" type="text" value="' + esc(state.wizard.freeText) + '"' +
      ' placeholder="Optional. A sentence in your own words." autocomplete="off">' +
      '<p class="sub-t">Optional, and it never blocks. Warhol folds it in as a hint about fit and distinctiveness.</p>' +
      '</div>';
  }

  /* The wizard asks about outcomes and business goals, never mechanics.
     Platforms, audience band and geo are DERIVED and shown here, editable —
     a wizard that produces a mandate, not a form that collects one. */
  function summary(state) {
    var d = state.wizard.derived || V2.derive(state.wizard);
    var joined = state.wizard.overlap.joined;

    /* Joining means adopting THEIR brief, not creating a parallel one. The
       shared thing is the candidate pool, so the mechanics are theirs and are
       not yours to edit — what stays yours is the queue and the decisions. */
    var existing = null;
    if (joined) {
      W.mandates.forEach(function (m) { if (m.id === state.wizard.overlap.mandateId) existing = m; });
    }
    var src = existing || d;
    var e = state.wizard.edits;
    var val = function (k) { return (!joined && e[k] !== undefined) ? e[k] : src[k]; };

    var rows = [
      { k: 'platforms', label: 'Platforms', v: [].concat(val('platforms')).join(', ') },
      { k: 'audienceBand', label: 'Audience band', v: val('audienceBand') },
      { k: 'geo', label: 'Geo', v: val('geo') },
      { k: 'language', label: 'Language', v: val('language') }
    ];

    return '<div class="wiz wiz--sum">' +
      progress(3) +
      '<h1 class="wiz-q">' + (joined ? 'You joined an existing brief.' : 'Here is the brief Warhol built.') + '</h1>' +
      '<p class="wiz-help">' + (joined
        ? esc(src.owner) + ' owns this one and it is already running, so there is nothing to spin up and nothing to change. ' +
        'You share the pool of names; your queue and your calls are your own.'
        : 'You answered three questions about outcomes. Everything below was worked out from them — change anything that looks wrong.') +
      '</p>' +

      '<div class="sumcard p">' +
      '<div class="sum-hd">' +
      '<div><span class="kick">' + (joined ? 'Joined' : 'The brief') + '</span><h2>' + esc(src.name) + '</h2></div>' +
      (src.wildcard ? '<span class="pill pill--warn">Wildcard — no category</span>' : '<span class="pill">' + esc(src.category) + '</span>') +
      '</div>' +

      '<div class="sum-said">' +
      '<div><span class="lab">You said you want</span><p>' + esc(d.archetype ? d.archetype.label : '—') + '</p></div>' +
      '<div><span class="lab">So that you can build</span><p>' + esc(d.outcome ? d.outcome.play : '—') + '</p></div>' +
      (d.freeText ? '<div><span class="lab">In your words</span><p class="sum-free">&ldquo;' + esc(d.freeText) + '&rdquo;</p></div>' : '') +
      '</div>' +

      '<div class="sum-derived">' +
      '<span class="lab">' + (joined ? 'How ' + esc(src.owner.split(' ')[0]) + '&rsquo;s brief is set up' : 'Warhol worked out the rest') + '</span>' +
      '<div class="sum-rows">' + rows.map(function (r) {
        var editing = !joined && state.wizard.editing === r.k;
        return '<div class="sum-row">' +
          '<span class="k">' + esc(r.label) + '</span>' +
          (joined
            ? '<span class="sum-fixed">' + esc(r.v) + '</span>'
            : editing
              ? '<input class="inp inp--sm" id="sumedit" data-k="' + r.k + '" type="text" value="' + esc(r.v) + '" autocomplete="off">'
              : '<button class="selector" data-act="wizedit" data-field="' + r.k + '">' +
              '<span class="cv">' + esc(r.v) + '</span>' + U.icon('arrow') + '</button>') +
          '</div>';
      }).join('') + '</div>' +
      '</div></div>' +

      '<div class="wiz-acts">' +
      '<button class="btn btn--out" data-act="wizstep" data-step="2">Back</button>' +
      '<span class="spacer"></span>' +
      '<button class="btn" data-act="wizcreate">' +
      (joined ? 'Open the drop' : 'Create this brief') + '</button>' +
      '</div></div>';
  }

  /* ================================================================= actions */
  function act(verb, el, state) {
    if (verb === 'signin') {
      var role = el.getAttribute('data-role');
      state.session.phase = 'onboarding';
      state.session.role = role;
      state.session.userId = role === 'scout' ? 's_alex' : 'p_dana';
      state.wizard = freshWizard();
      return true;
    }

    if (verb === 'wizpick') {
      var f = el.getAttribute('data-field');
      var v = el.getAttribute('data-val');
      if (f === 'category') {
        state.wizard.category = v;
        state.wizard.wildcard = false;
        var hit = V2.overlapFor(v);
        state.wizard.overlap = {
          mandateId: hit ? hit.id : null,
          dismissed: false,
          joined: false
        };
      } else {
        state.wizard[f] = v;
      }
      return true;
    }

    if (verb === 'wizwild') {
      state.wizard.wildcard = !state.wizard.wildcard;
      if (state.wizard.wildcard) {
        state.wizard.category = null;
        state.wizard.overlap = { mandateId: null, dismissed: false, joined: false };
      }
      return true;
    }

    if (verb === 'wizjoin') {
      state.wizard.overlap.joined = true;
      state.wizard.overlap.mandateId = el.getAttribute('data-m');
      return true;
    }

    if (verb === 'wizown') {
      state.wizard.overlap.dismissed = true;
      return true;
    }

    if (verb === 'wizstep') {
      captureFreeText(state);
      captureEdit(state);
      var next = Number(el.getAttribute('data-step'));
      state.wizard.editing = null;
      if (next >= 3) state.wizard.derived = V2.derive(state.wizard);
      state.wizard.step = next;
      return true;
    }

    if (verb === 'wizedit') {
      captureEdit(state);
      state.wizard.editing = el.getAttribute('data-field');
      return true;
    }

    return false;
  }

  function captureFreeText(state) {
    var i = document.getElementById('wizfree');
    if (i) state.wizard.freeText = i.value.trim();
  }
  function captureEdit(state) {
    var i = document.getElementById('sumedit');
    if (!i) return;
    var k = i.getAttribute('data-k');
    var v = i.value.trim();
    if (!v) return;
    state.wizard.edits[k] = k === 'platforms'
      ? v.split(',').map(function (s) { return s.trim(); }).filter(Boolean)
      : v;
  }

  function freshWizard() {
    return {
      step: 0, archetype: null, category: null, wildcard: false, outcome: null,
      freeText: '', editing: null, edits: {}, derived: null,
      overlap: { mandateId: null, dismissed: false, joined: false }
    };
  }

  /* The mandate the wizard produces. A joined mandate is the existing one; a
     new one carries the derived brief and reads the cohort its category maps
     to, since a brand-new scan surface has no drop of its own yet. */
  function mandateFrom(state) {
    var wiz = state.wizard;
    if (wiz.overlap.joined) {
      var r = null;
      V2.roster.forEach(function (x) { if (x.id === wiz.overlap.mandateId) r = x; });
      var seeded = null;
      W.mandates.forEach(function (m) { if (r && m.id === r.id) seeded = m; });
      return { mandate: seeded, isNew: false };
    }
    var d = wiz.derived || V2.derive(wiz);
    var e = wiz.edits;
    var who = V2.people[state.session.userId];
    return {
      mandate: {
        id: 'm_user_' + (wiz.category ? wiz.category.replace(/\W+/g, '') : 'wild').toLowerCase(),
        name: d.name,
        category: d.category,
        platforms: e.platforms || d.platforms,
        audienceBand: e.audienceBand || d.audienceBand,
        geo: e.geo || d.geo,
        language: e.language || d.language,
        owner: who.name,
        ownerInitials: who.initials,
        wildcard: d.wildcard,
        userMade: true
      },
      isNew: true
    };
  }

  window.ONBOARD = {
    signIn: signIn,
    wizard: wizard,
    themeSwitch: themeSwitch,
    freshWizard: freshWizard,
    mandateFrom: mandateFrom,
    act: act
  };
})();
