/* ==========================================================================
   WARHOL SCOUT — rendering helpers and shared components.
   Classic script. Sets window.UI. No modules, no fetch.
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

  /* --------------------------------------------------------------- colour */
  function hexToRgb(hex) {
    var h = hex.replace('#', '');
    return [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
  }
  function mix(hex, toward, amt) {
    var a = hexToRgb(hex), b = hexToRgb(toward);
    var o = a.map(function (v, i) { return Math.round(v + (b[i] - v) * amt); });
    return 'rgb(' + o.join(',') + ')';
  }
  /* Sample swatches are an explicit abstraction of a piece of content, driven
     by the data's `tone` float. Not a fake screenshot, not a fake player. */
  function toneSwatch(accent, tone) {
    var top = mix(accent, '#FFFFFF', 0.06 + tone * 0.74);
    var bot = mix(accent, '#0B0E12', 0.58 - tone * 0.52);
    return 'background:linear-gradient(' + Math.round(120 + tone * 110) + 'deg,' + top + ' 0%,' + bot + ' 100%)';
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
  /* Typographic quotes, hanging opening mark. The voice of the audience is
     the persuasive unit, so it gets the reading face and the size.
     A crawler observation is NOT a voice: it drops to mono and loses the
     quotation marks, because the type register is the engine distinction. */
  function quoteBlock(ev, asOf, opts) {
    opts = opts || {};
    var age = ageOf(ev.observedAt, asOf);
    if (ev.kind === 'signal') {
      return '<div class="obs">' +
        '<div class="lbl">Machine observation</div>' +
        '<p class="mono">' + esc(ev.quote) + '</p>' +
        '<div class="src">' +
        '<span class="chip" data-t="quiet">' + esc(ev.label) + '</span>' +
        '<span class="m">' + esc(ev.platform) + '</span>' +
        '<span class="m">' + esc(shortDate(ev.observedAt)) + '</span>' +
        (opts.url !== false && ev.url ? '<span class="m">' + esc(ev.url) + '</span>' : '') +
        engTag(ev.engine) +
        (age.stale ? '<span class="stale">stale ' + age.days + 'd</span>' : '') +
        '</div></div>';
    }
    return '<blockquote class="q">' +
      '<p>“' + esc(ev.quote) + '”</p>' +
      '<div class="src">' +
      '<span class="chip" data-t="quiet">' + esc(ev.label) + '</span>' +
      '<span class="m">' + esc(ev.platform) + '</span>' +
      '<span class="m">' + esc(shortDate(ev.observedAt)) + '</span>' +
      (opts.url !== false && ev.url ? '<span class="m">' + esc(ev.url) + '</span>' : '') +
      engTag(ev.engine) +
      (age.stale ? '<span class="stale">stale ' + age.days + 'd</span>' : '') +
      '</div></blockquote>';
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

  /* The accent comes from the data and some of them sit at a mid luminance
     where neither white nor black clears AA. Rather than override the brand
     colour, deepen it until white is safe. Hue identity survives, contrast is
     guaranteed, and the tiles gain a consistent weight down the list. */
  function relLum(rgb) {
    var c = rgb.map(function (v) {
      v /= 255;
      return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
    });
    return 0.2126 * c[0] + 0.7152 * c[1] + 0.0722 * c[2];
  }
  function deepenForWhite(hex) {
    var base = hexToRgb(hex), rgb = base, k = 0;
    while (1.05 / (relLum(rgb) + 0.05) < 4.6 && k < 12) {
      k += 1;
      rgb = base.map(function (v) { return Math.round(v + (11 - v) * (k * 0.07)); });
    }
    return 'rgb(' + rgb.join(',') + ')';
  }

  function initials(c) {
    return '<span class="ini" style="background:' + deepenForWhite(c.accent) + '">' +
      esc(c.initials) + '</span>';
  }

  /* score + confidence, side by side, never merged into one number */
  function scoreBox(c) {
    var d = c.scoreDelta;
    var delta = d == null ? 'first scoring'
      : (d > 0 ? '↑ ' + d + ' since last run' : d < 0 ? '↓ ' + Math.abs(d) + ' since last run' : 'no change');
    return '<div class="scorebox" data-low="' + (c.confidence < 0.75) + '">' +
      '<div><span class="v mono">' + c.score + '</span><span class="k">Warhol score</span>' +
      '<span class="delta mono" data-d="' + (d > 0 ? 'up' : 'flat') + '">' + esc(delta) + '</span></div>' +
      '<div class="conf"><span class="v mono">' + pct(c.confidence) + '</span><span class="k">Confidence</span>' +
      '<span class="delta mono">checks resolved</span></div>' +
      '</div>';
  }

  /* Every candidate gets an argument in words before any number is read.
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

  window.UI = {
    esc: esc, shortDate: shortDate, longDate: longDate, daysBetween: daysBetween,
    ageOf: ageOf, num: num, followers: followers, pct: pct,
    mix: mix, toneSwatch: toneSwatch,
    engineKind: engineKind, engineLabel: engineLabel, engTag: engTag,
    VLABEL: VLABEL, VNOTE: VNOTE, vmark: vmark, vstate: vstate,
    inventoryTally: inventoryTally, quoteBlock: quoteBlock, provLine: provLine,
    initials: initials, scoreBox: scoreBox, argument: argument,
    STALE_DAYS: STALE_DAYS
  };
})();
