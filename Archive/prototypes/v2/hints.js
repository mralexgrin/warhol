/* ==========================================================================
   WARHOL SCOUT v2 — just-in-time hints (PRD §6.9, step 3).
   Classic script. Sets window.HINTS.

   INVARIANT: this file owns no state and installs no listeners. It exports
   pure (state) -> htmlString renderers plus act(). Only app.js calls render()
   and addEventListener. Breaking this gives you double renders and the
   "first click does nothing" bug.

   No upfront tour. Each hint fires the first time the user actually reaches
   the thing it explains, is dismissible individually, and is re-armable from
   the ? in the top bar. Exactly five concepts earn a hint, and only five.
   ========================================================================== */
(function () {
  'use strict';

  var U = window.UI;

  /* Priority order matters: three of the five fire on the Scout Report, and a
     naive implementation stacks all three on first open — which is the upfront
     tour §6.9 refuses, rebuilt by accident. One per render, highest first. */
  var HINTS = [
    {
      key: 'h_asof',
      title: 'The same machine, rewound',
      body: 'Set a date and every screen answers as of that morning. Nothing observed later is visible — not a score, not a quote, not a decision. It is not a separate mode and there is nothing to switch back out of; the date is just a control, like the mandate.',
      anchor: 'asof'
    },
    {
      key: 'h_verification',
      title: 'Verified absent is not the same as not found',
      body: '“No newsletter — 6 surfaces checked” means Warhol looked in the six places a newsletter would be and it was in none of them. That is evidence, and only that scores as a gap. “Not found” means the check did not resolve: it scores neutral and pulls confidence down instead of quietly pretending to be a gap.',
      anchor: 'verification'
    },
    {
      key: 'h_confidence',
      title: 'Confidence sits beside the score, never inside it',
      body: 'The score says how strong the opportunity is. Confidence says how much of the checking actually resolved. Folding them together would let a thin, well-checked case and a strong, half-checked one land on the same number — and you would have no way to tell which one you were looking at.',
      anchor: 'confidence'
    },
    {
      key: 'h_engine',
      title: 'Which facts are counted and which are judged',
      body: 'Every line declares what produced it. <b>Rule</b> means counted — surfaces crawled, posts scanned, links resolved. <b>LLM</b> means classified by a language model, and it is set in a different voice so you never mistake a judgment for a measurement.',
      anchor: 'engine'
    },
    {
      key: 'h_report_required',
      title: 'Killing is cheap. Backing is not.',
      body: 'You can Pass from the list in one click, because a wrong Pass costs a cooldown. Promoting commits the desk to a person, so it requires opening the report and reading the case first. The asymmetry is deliberate.',
      anchor: 'decide'
    }
  ];

  var BY_KEY = {};
  HINTS.forEach(function (h) { BY_KEY[h.key] = h; });

  /* A hint is ARMED by a view while it composes itself, which is what makes
     "fires the first time you reach the thing" true regardless of how you got
     there. reportView() is reachable from three origins. */
  var armed = {};
  function arm(key) { armed[key] = true; }
  function clearArmed() { armed = {}; }

  /* One key per render, priority-ordered, never two at once. */
  function pick(state) {
    if (state.hints.open && armed[state.hints.open]) return state.hints.open;
    var found = null;
    HINTS.forEach(function (h) {
      if (found) return;
      if (!armed[h.key]) return;
      if (state.hints.seen[h.key] || state.hints.dismissed[h.key]) return;
      found = h.key;
    });
    return found;
  }

  function remaining(state) {
    var n = 0;
    HINTS.forEach(function (h) { if (!state.hints.seen[h.key]) n += 1; });
    return n;
  }

  /* The bubble is lilac, the field that consistently means "a statement about
     the machine itself" — the same field the rewind disclosure uses. */
  function bubble(key) {
    var h = BY_KEY[key];
    if (!h) return '';
    return '<aside class="hint p p--lilac" role="note" data-hint="' + h.key + '">' +
      '<div class="hint-hd">' +
      '<span class="kick">A note, once</span>' +
      '<button class="hint-x" data-act="hintclose" data-k="' + h.key + '" aria-label="Dismiss this note">' +
      U.icon('close') + '</button>' +
      '</div>' +
      '<h4>' + U.esc(h.title) + '</h4>' +
      '<p class="note">' + h.body + '</p>' +
      '<div class="hint-ft">' +
      '<button class="ipill" data-act="hintclose" data-k="' + h.key + '">Got it</button>' +
      '<span class="sub-t">Bring these back any time from the <b>?</b> above.</span>' +
      '</div></aside>';
  }

  /* Renders the bubble if this anchor is the one that won this render. */
  function at(state, anchor) {
    if (!state.hints.open) return '';
    var h = BY_KEY[state.hints.open];
    if (!h || h.anchor !== anchor) return '';
    return bubble(state.hints.open);
  }

  function act(verb, el, state) {
    if (verb === 'hintclose') {
      var k = el.getAttribute('data-k');
      state.hints.dismissed[k] = true;
      state.hints.seen[k] = true;
      if (state.hints.open === k) state.hints.open = null;
      return true;
    }
    if (verb === 'hintrearm') {
      state.hints.seen = {};
      state.hints.dismissed = {};
      state.hints.open = null;
      return true;
    }
    return false;
  }

  window.HINTS = {
    list: HINTS,
    arm: arm,
    clearArmed: clearArmed,
    pick: pick,
    at: at,
    remaining: remaining,
    act: act
  };
})();
