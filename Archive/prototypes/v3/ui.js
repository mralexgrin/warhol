/* ==========================================================================
   WARHOL SCOUT v3 — rendering helpers. Classic script, sets window.UI.

   Colour has a job, and the job decides the colour:
     teal   — the gap is real (verified absence, the buy signal)
     butter — the timing (operator strain)
     lilac  — Warhol speaking about itself (definitions, provenance)
     ink    — weight and summary (the score, decided states)
   The primary button is none of these: it inverts the surface, so it can be
   the loudest thing on screen without stealing a field's meaning.
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
  function daysBetween(a, b) { return Math.round((parseISO(b) - parseISO(a)) / 86400000); }

  var STALE_DAYS = 21;
  function ageOf(observedAt, asOf) {
    var n = daysBetween(observedAt, asOf);
    return { days: n, stale: n > STALE_DAYS };
  }

  function num(n) { return n == null ? '' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function followers(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(n >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'K';
    return String(n);
  }
  function pct(f) { return Math.round(f * 100) + '%'; }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }

  /* ------------------------------------------------------ identity marks */
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
    if (h < 105 || h >= 320) return 'butter';
    if (h < 200) return 'teal';
    return 'lilac';
  }
  function sampleField(tone) {
    if (tone < 0.34) return 'gr-veil';
    if (tone < 0.67) return 'gr-duo';
    return 'gr-mesh';
  }
  function initials(c, size) {
    return '<span class="ini ini--' + fieldFor(c) + (size ? ' ini--' + size : '') + '">' +
      esc(c.initials) + '</span>';
  }

  /* ------------------------------------------------------------- engine */
  function engineKind(e) {
    var s = String(e || '').toLowerCase();
    if (s.indexOf('+') > -1) return 'mixed';
    if (s.indexOf('llm') > -1) return 'llm';
    return 'rule';
  }
  function engineLabel(e) {
    var k = engineKind(e);
    return k === 'rule' ? 'Rule' : k === 'llm' ? 'LLM' : 'Rule + LLM';
  }
  function engTag(e) {
    var k = engineKind(e);
    return '<span class="eng" data-e="' + k + '">' + esc(engineLabel(e)) + '</span>';
  }

  /* ------------------------------------------------- verification marks */
  var VLABEL = { verified_absent: 'Verified absent', present: 'Present', not_found: 'Not found' };
  var VNOTE = {
    verified_absent: 'Checked the surfaces where it would be. It is not there. Scores as a gap.',
    present: 'It exists. No gap on this line.',
    not_found: 'Inconclusive. Scores neutral and drags confidence.'
  };
  function vmark(state) {
    return '<span class="vmark" data-s="' + esc(state) + '" title="' + esc(VLABEL[state] + '. ' + VNOTE[state]) + '"></span>';
  }
  function vstate(state) {
    return '<span class="vstate" data-s="' + esc(state) + '">' + vmark(state) +
      '<span class="txt">' + esc(VLABEL[state]) + '</span></span>';
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

  /* --------------------------------------------------------- definitions */
  /* Guidance sits beside the term it explains. No queue, no priority logic,
     no dismissal state — available everywhere, interrupts nowhere. */
  function def(key) {
    return '<button class="deft" data-act="def" data-k="' + key + '" aria-label="What this means">?</button>';
  }

  /* ---------------------------------------------------------- the score */
  /* Card: an ink field carrying the number and the split that produced it.
     Report: a ring whose sweep is confidence, with the arithmetic beneath. */
  function scoreField(c) {
    var g = c.pillars.gap, s = c.pillars.strain;
    var rest = 100 - g.score - s.score;
    return '<div class="scorefield">' +
      '<div class="n">' + c.score + '<small>/100</small></div>' +
      '<div class="d">Warhol score</div>' +
      '<div class="bits" aria-hidden="true">' +
      '<span class="bit bit--gap" style="--f:' + g.score + '"></span>' +
      '<span class="bit bit--strain" style="--f:' + s.score + '"></span>' +
      '<span class="bit bit--rest" style="--f:' + Math.max(0, rest) + '"></span>' +
      '</div></div>';
  }

  function scoreRing(c) {
    var g = c.pillars.gap, s = c.pillars.strain;
    return '<div class="scoreblock">' +
      '<div class="ringwrap" style="--pct:' + Math.round(c.confidence * 100) + '%">' +
      '<div class="ringnum"><b>' + c.score + '</b><span>score</span></div></div>' +
      '<div class="ringcap">' +
      '<div class="rc-conf">' + pct(c.confidence) + ' of checks resolved ' + def('confidence') + '</div>' +
      '<div class="rc-sum">gap <b class="t-gap">' + g.score + '</b>/60 · strain <b class="t-strain">' + s.score + '</b>/40</div>' +
      '</div></div>';
  }

  /* ------------------------------------------------------- the two facts */
  /* Gap and strain stop being numbers on a report and become the two coloured
     facts on the card — which is how a first-time user learns what the pillars
     are without reading a definition. */
  function gapFact(c) {
    var t = inventoryTally(c.inventory);
    var lead = t.verified_absent === t.total && t.total ? 'Nothing owned'
      : t.verified_absent ? t.verified_absent + ' of ' + t.total + ' lines absent'
        : 'Inventory partly present';
    return '<span class="fact fact--gap">' + esc(lead) +
      ' · <b>' + plural(t.surfaces, 'surface') + ' checked</b></span>';
  }
  function strainFactChip(c, V3) {
    var f = V3.strainFact(c);
    if (!f) return '';
    if (f.quote) {
      /* Truncate on a word boundary — cutting mid-word reads as a rendering
         bug rather than an ellipsis. */
      var q = f.quote;
      if (q.length > 46) {
        var cut = q.slice(0, 45);
        var sp = cut.lastIndexOf(' ');
        q = (sp > 24 ? cut.slice(0, sp) : cut).replace(/[,;:—-]$/, '') + '…';
      }
      return '<span class="fact fact--strain">“' + esc(q) + '” · <b>said ' + esc(shortDate(f.at)) + '</b></span>';
    }
    return '<span class="fact fact--strain">' + esc(f.value) + '</span>';
  }

  /* -------------------------------------------------------------- quotes */
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
      return '<div class="obs"><span class="lab">Machine observation</span>' +
        '<p>' + esc(ev.quote) + '</p>' + src + '</div>';
    }
    return '<blockquote class="q"><p>“' + esc(ev.quote) + '”</p>' + src + '</blockquote>';
  }

  function provLine(source, observedAt, engine, asOf) {
    var age = ageOf(observedAt, asOf);
    return '<div class="prov"><span class="m">' + esc(source) + '</span>' +
      '<span class="m">observed ' + esc(shortDate(observedAt)) + '</span>' +
      (engine ? engTag(engine) : '') +
      (age.stale ? '<span class="stale">stale ' + age.days + 'd</span>' : '') + '</div>';
  }

  function argument(c) {
    var t = inventoryTally(c.inventory);
    var demand = null, strain = null;
    (c.pillars.gap.subsignals || []).forEach(function (s) { if (s.key === 'demand') demand = s; });
    (c.pillars.strain.subsignals || []).forEach(function (s) { if (s.key === 'selfreport' && !strain) strain = s; });
    var parts = ['An audience of ' + followers(c.audience.total) + ' is asking to buy something that does not exist.'];
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

  /* Emits a 0–1 fraction, not a percentage: the fill is a full-width bar that
     gets scaled, so growth animates on transform rather than on width. */
  function track(pctFilled, cls) {
    var f = Math.max(0, Math.min(100, pctFilled)) / 100;
    return '<div class="track' + (cls ? ' ' + cls : '') + '">' +
      '<i style="--f:' + f.toFixed(4) + '"></i></div>';
  }

  /* Down-chevron, not the circular ↗ — this opens in place, it does not
     send you elsewhere. Rotates when the section is open. */
  function icon(name) {
    var P = {
      drop: '<path d="M4 5h16M4 12h16M4 19h10"/>',
      watch: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      record: '<path d="M4 19V5M4 19h16"/><path d="M8 15l4-5 3 3 4-6"/>',
      run: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      chev: '<path d="m6 9 6 6 6-6"/>',
      back: '<path d="M15 5l-7 7 7 7"/>',
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
    fieldFor: fieldFor, sampleField: sampleField, initials: initials,
    engineKind: engineKind, engineLabel: engineLabel, engTag: engTag,
    VLABEL: VLABEL, VNOTE: VNOTE, vmark: vmark, vstate: vstate,
    inventoryTally: inventoryTally, quoteBlock: quoteBlock, provLine: provLine,
    argument: argument, track: track, icon: icon, def: def,
    scoreField: scoreField, scoreRing: scoreRing,
    gapFact: gapFact, strainFactChip: strainFactChip,
    STALE_DAYS: STALE_DAYS
  };
})();
