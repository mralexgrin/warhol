/* ==========================================================================
   WARHOL SCOUT v2 — rendering helpers and shared components.
   Classic script. Sets window.UI. No modules, no fetch. Runs from file://.

   Changed from v1: the two contrast solvers are gone. v1 let the data pick
   arbitrary accent colours and then solved for legibility at render time.
   Alloy's palette is closed and measured, so a creator's accent now SELECTS
   an audited field rather than becoming one.
   ========================================================================== */
(function () {
  'use strict';

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];

  function esc(s) {
    return String(s == null ? '' : s)
      .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;').replace(/'/g, '&#39;');
  }

  function parseISO(d) {
    var p = String(d).slice(0, 10).split('-');
    return new Date(Number(p[0]), Number(p[1]) - 1, Number(p[2]));
  }
  function shortDate(d) {
    var t = parseISO(d);
    return t.getDate() + ' ' + MONTHS[t.getMonth()] + ' ' + String(t.getFullYear()).slice(2);
  }
  function longDate(d) {
    var t = parseISO(d);
    return t.getDate() + ' ' + MONTHS_LONG[t.getMonth()] + ' ' + t.getFullYear();
  }
  function monthYear(d) {
    var t = parseISO(d);
    return MONTHS_LONG[t.getMonth()] + ' ' + t.getFullYear();
  }
  function daysBetween(a, b) {
    return Math.round((parseISO(b) - parseISO(a)) / 86400000);
  }

  /* A fact is stale when it was observed long enough ago that a Scout should
     re-check before picking up the phone. 21 days, tuned to the drop cadence. */
  var STALE_DAYS = 21;
  function ageOf(observedAt, asOf) {
    var n = daysBetween(observedAt, asOf);
    return { days: n, stale: n > STALE_DAYS };
  }

  function num(n) {
    if (n == null) return '';
    return String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  function followers(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(n >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return String(n);
  }
  function pct(f) { return Math.round(f * 100) + '%'; }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

  /* ----------------------------------------------------------------- field */
  /* A creator's identity mark is one of four audited fields, chosen by the hue
     of their seed accent so warm creators stay warm. Four across twenty-four is
     enough to tell them apart down a list, and every one is in-palette. */
  var FIELDS = ['butter', 'teal', 'lilac', 'ink'];
  function hueOf(hex) {
    var h = String(hex).replace('#', '');
    var r = parseInt(h.slice(0, 2), 16) / 255,
      g = parseInt(h.slice(2, 4), 16) / 255,
      b = parseInt(h.slice(4, 6), 16) / 255;
    var mx = Math.max(r, g, b), mn = Math.min(r, g, b), d = mx - mn;
    if (!d) return 0;
    var x = mx === r ? ((g - b) / d) % 6 : mx === g ? (b - r) / d + 2 : (r - g) / d + 4;
    return (Math.round(x * 60) + 360) % 360;
  }
  function fieldFor(c) {
    if (!c || !c.accent) return 'lilac';
    var h = hueOf(c.accent);
    if (h < 45 || h >= 320) return 'butter';   /* reds and oranges */
    if (h < 105) return 'butter';              /* yellows */
    if (h < 200) return 'teal';                /* greens and cyans */
    return 'lilac';                            /* blues and violets */
  }
  /* Sample swatches are an explicit abstraction of a piece of content, driven
     by the data's `tone` float. Not a fake screenshot, not a fake player.
     Under Alloy the float selects one of three measured gradients. */
  function sampleField(tone) {
    if (tone < 0.34) return 'gr-veil';
    if (tone < 0.67) return 'gr-duo';
    return 'gr-mesh';
  }

  /* ---------------------------------------------------------------- engine */
  function engineKind(e) {
    var s = String(e || '').toLowerCase();
    if (s.indexOf('+') > -1) return 'mixed';
    if (s.indexOf('llm') > -1) return 'llm';
    return 'rule';
  }
  function engineLabel(e) {
    var k = engineKind(e);
    if (k === 'rule') return 'Rule';
    if (k === 'llm') return 'LLM';
    return 'Rule + LLM';
  }
  function engTag(e, title) {
    var k = engineKind(e);
    var t = title || (k === 'rule' ? 'Counted by rule. Countable fact.'
      : k === 'llm' ? 'Classified by a language model. Judgment, labelled as judgment.'
        : 'Counted by rule, classified by a language model.');
    return '<span class="eng" data-e="' + k + '" title="' + esc(t) + '">' + esc(engineLabel(e)) + '</span>';
  }

  /* ------------------------------------------------------- verification UI */
  var VLABEL = {
    verified_absent: 'Verified absent',
    present: 'Present',
    not_found: 'Not found'
  };
  var VNOTE = {
    verified_absent: 'Checked the surfaces where it would be. It is not there. Scores as a gap.',
    present: 'It exists. No gap on this line.',
    not_found: 'Inconclusive. Scores neutral and drags confidence.'
  };
  function vmark(state) {
    return '<span class="vmark" data-s="' + esc(state) + '" title="' + esc(VLABEL[state] + '. ' + VNOTE[state]) + '"></span>';
  }
  function vstate(state) {
    return '<span class="vstate" data-s="' + esc(state) + '" title="' + esc(VNOTE[state]) + '">' +
      vmark(state) + '<span class="txt">' + esc(VLABEL[state]) + '</span></span>';
  }

  function inventoryTally(inv) {
    var t = { present: 0, verified_absent: 0, not_found: 0, surfaces: 0 };
    (inv || []).forEach(function (r) {
      t[r.state] = (t[r.state] || 0) + 1;
      t.surfaces += r.surfacesChecked || 0;
    });
    t.total = (inv || []).length;
    t.resolved = t.present + t.verified_absent;
    return t;
  }

  /* -------------------------------------------------------------- quotes  */
  /* Human speech gets the display face, italic, at reading size. A crawler
     observation is NOT a voice: it keeps the interface face, loses the
     quotation marks, and is labelled. v1 carried this on a third typeface;
     Alloy has two, so the distinction is weight, italic and field instead. */
  function quoteBlock(ev, asOf, opts) {
    opts = opts || {};
    var age = ageOf(ev.observedAt, asOf);
    var src = '<div class="src">' +
      '<span class="pill">' + esc(ev.label) + '</span>' +
      '<span class="m">' + esc(ev.platform) + '</span>' +
      '<span class="m">' + esc(shortDate(ev.observedAt)) + '</span>' +
      (opts.url !== false && ev.url ? '<span class="m">' + esc(ev.url) + '</span>' : '') +
      engTag(ev.engine) +
      (age.stale ? '<span class="stale">stale ' + age.days + 'd</span>' : '') +
      '</div>';

    if (ev.kind === 'signal') {
      return '<div class="obs">' +
        '<span class="lab">Machine observation</span>' +
        '<p>' + esc(ev.quote) + '</p>' + src + '</div>';
    }
    return '<blockquote class="q"><p>“' + esc(ev.quote) + '”</p>' + src + '</blockquote>';
  }

  function provLine(source, observedAt, engine, asOf) {
    var age = ageOf(observedAt, asOf);
    return '<div class="prov">' +
      '<span class="m">' + esc(source) + '</span>' +
      '<span class="m">observed ' + esc(shortDate(observedAt)) + '</span>' +
      (engine ? engTag(engine) : '') +
      (age.stale ? '<span class="stale">stale ' + age.days + 'd</span>' : '') +
      '</div>';
  }

  function initials(c, size) {
    return '<span class="ini ini--' + fieldFor(c) + (size === 'sm' ? ' ini--sm' : '') + '">' +
      esc(c.initials) + '</span>';
  }

  /* score + confidence, side by side, never merged into one number */
  function scoreBox(c) {
    var d = c.scoreDelta;
    var delta = d == null ? 'first scoring'
      : (d > 0 ? '↑ ' + d + ' since last run' : d < 0 ? '↓ ' + Math.abs(d) + ' since last run' : 'no change');
    return '<div class="scorebox" data-low="' + (c.confidence < 0.75) + '">' +
      '<div class="sub"><span class="k">Warhol score</span><span class="v">' + c.score + '</span>' +
      '<span class="dl" data-d="' + (d > 0 ? 'up' : 'flat') + '">' + esc(delta) + '</span></div>' +
      '<div class="sub conf"><span class="k">Confidence</span><span class="v">' + pct(c.confidence) + '</span>' +
      '<span class="dl">checks resolved</span></div>' +
      '</div>';
  }

  /* Every creator gets an argument in words before any number is read.
     Composed from the data, never invented. */
  function argument(c) {
    var t = inventoryTally(c.inventory);
    var demand = null, strain = null;
    (c.pillars.gap.subsignals || []).forEach(function (s) { if (s.key === 'demand') demand = s; });
    (c.pillars.strain.subsignals || []).forEach(function (s) {
      if (s.key === 'selfreport' && !strain) strain = s;
    });
    var parts = [];
    parts.push('An audience of ' + followers(c.audience.total) + ' is asking to buy something that does not exist.');
    if (demand) parts.push('Warhol counted <b>' + esc(demand.value) + '</b> in the sampled window.');
    if (t.verified_absent) {
      parts.push('Against that, ' + t.verified_absent + ' of ' + t.total +
        ' monetization lines came back verified absent across ' + t.surfaces + ' surfaces' +
        (t.not_found ? ', with ' + t.not_found + ' still inconclusive' : '') + '.');
    }
    if (strain && String(strain.value).indexOf('0 ') !== 0) {
      parts.push('The timing signal is ' + esc(String(strain.value).toLowerCase()) + ' of self-reported capacity strain.');
    }
    return parts.join(' ');
  }

  /* A track bar. Computed width is the one thing that stays on the element,
     as a custom property, matching how Alloy drives its rings. */
  function track(pctFilled, cls) {
    return '<div class="track' + (cls ? ' ' + cls : '') + '">' +
      '<i style="--w:' + Math.max(0, Math.min(100, pctFilled)) + '%"></i></div>';
  }

  function icon(name) {
    var P = {
      drop: '<path d="M4 5h16M4 12h16M4 19h10"/>',
      watch: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      run: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      ledger: '<path d="M5 4h11l3 3v13H5z"/><path d="M9 10h7M9 14h7"/>',
      help: '<circle cx="12" cy="12" r="9"/><path d="M9.5 9.5a2.5 2.5 0 1 1 3 2.45V14"/><path d="M12 17.2v.2"/>',
      back: '<path d="M15 5l-7 7 7 7"/>',
      arrow: '<path d="M7 17 17 7M9 7h8v8"/>',
      check: '<path d="m5 12 5 5L19 7"/>',
      close: '<path d="M6 6l12 12M18 6 6 18"/>'
    };
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (P[name] || '') + '</svg>';
  }

  window.UI = {
    esc: esc, shortDate: shortDate, longDate: longDate, monthYear: monthYear,
    daysBetween: daysBetween, ageOf: ageOf, num: num, followers: followers,
    pct: pct, plural: plural,
    fieldFor: fieldFor, sampleField: sampleField,
    engineKind: engineKind, engineLabel: engineLabel, engTag: engTag,
    VLABEL: VLABEL, VNOTE: VNOTE, vmark: vmark, vstate: vstate,
    inventoryTally: inventoryTally, quoteBlock: quoteBlock, provLine: provLine,
    initials: initials, scoreBox: scoreBox, argument: argument,
    track: track, icon: icon,
    STALE_DAYS: STALE_DAYS
  };
})();
