/* ==========================================================================
   WARHOL SCOUT v4 — rendering helpers. Classic script, sets window.UI.

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

  /* ============================================================== THE SCORE */
  /* One mark, three sizes, everywhere: the number is the score, the sweep is
     confidence. Two independent quantities in one shape with no legend — and it
     puts confidence on every list, which in v3 only appeared once you had
     already committed to opening a report.

     The sweep is banded on the minimum-confidence floor the product already
     enforces, so the colour marks a real threshold rather than an invented one.
     Today's drop reads uniformly teal because clearing that floor is why those
     names are in it; the colour earns its keep on the watchlist, Track record
     and Run-a-name, where thin evidence actually lives. */
  var CONF_FLOOR = 0.75;
  function confBand(conf) {
    if (conf >= CONF_FLOOR) return '';
    if (conf >= 0.5) return ' ring--warn';
    return ' ring--stop';
  }
  function ring(c, size) {
    return '<div class="ring ring--' + (size || 'sm') + confBand(c.confidence) + '"' +
      ' style="--pct:' + Math.round(c.confidence * 100) + '%"' +
      ' title="Score ' + c.score + ' of 100 \u00b7 ' + pct(c.confidence) + ' of checks resolved">' +
      '<span class="in"><b>' + c.score + '</b><span>score</span></span></div>';
  }
  /* The report's version: the same ring, plus the arithmetic in words. The
     gap/strain split lives here rather than on the row, because a split is
     detail and detail belongs where you are reading the case. */
  function scoreRing(c) {
    var g = c.pillars.gap, s = c.pillars.strain;
    return '<div class="scoreblock">' + ring(c, 'lg') +
      '<div class="ringcap">' +
      '<div class="rc-conf">' + pct(c.confidence) + ' of checks resolved ' + def('confidence') + '</div>' +
      '<div class="rc-sum">gap <b class="t-gap">' + g.score + '</b>/60 \u00b7 strain <b class="t-strain">' + s.score + '</b>/40</div>' +
      '</div></div>';
  }

  /* ============================================================ THE SIGNALS */
  /* Three named facts, taken verbatim from the subsignals rather than
     summarised. v3 computed "5 of 6 lines absent", which is an abstraction of
     data that already reads perfectly well in the record: the seed says
     "No newsletter, no site, no store".

     Demand and Missing are both inside the Monetization Gap pillar, so both are
     teal — but Missing is an ABSENCE, so its mark is hollow. That is the same
     logic the verification marks use, where absence is a shape and not a colour. */
  function sub(list, key) {
    var hit = null;
    (list || []).forEach(function (x) { if (x.key === key) hit = x; });
    return hit;
  }
  function signalsFor(c) {
    var g = (c.pillars.gap || {}).subsignals, s = (c.pillars.strain || {}).subsignals;
    var demand = sub(g, 'demand'), owned = sub(g, 'owned'), sponsor = sub(g, 'sponsor');
    var self = sub(s, 'selfreport'), cadence = sub(s, 'cadence'), unans = sub(s, 'unanswered');
    var out = [];
    if (demand) out.push({ k: 'Demand', v: demand.value, mark: 'fill' });
    if (owned) out.push({ k: 'Missing', v: owned.value, mark: 'hollow' });
    else if (sponsor) out.push({ k: 'Missing', v: sponsor.value, mark: 'hollow' });
    if (self && String(self.value).indexOf('0 ') !== 0) {
      out.push({ k: 'Timing', v: self.value + ' of capacity strain', mark: 'butter' });
    } else if (cadence) {
      out.push({ k: 'Timing', v: 'Posting ' + cadence.value, mark: 'butter' });
    } else if (unans) {
      out.push({ k: 'Timing', v: unans.value + ' reply rate', mark: 'butter' });
    }
    return out;
  }
  function signalRows(c) {
    var rows = signalsFor(c);
    if (!rows.length) return '';
    return '<div class="sigs">' + rows.map(function (r) {
      return '<div class="sig3"><span class="k k--' + r.mark + '">' +
        '<i class="dot dot--' + r.mark + '"></i>' + esc(r.k) + '</span>' +
        '<span class="v">' + esc(r.v) + '</span></div>';
    }).join('') + '</div>';
  }

  /* ============================================================== THE VERBS */
  /* Green go, amber hold, outlined no — with an icon each, and no ellipsis.
     These sit outside the four field jobs on purpose: an action is not a piece
     of evidence, and reusing teal for Promote would say "the gap is real" about
     a button. */
  function verbBtn(act, id, label, kind, size) {
    var ic = kind === 'go' ? 'up' : kind === 'hold' ? 'watch' : 'close';
    return '<button class="vbtn vbtn--' + kind + (size ? ' vbtn--' + size : '') + '"' +
      ' data-act="' + act + '" data-id="' + id + '">' + icon(ic) + esc(label) + '</button>';
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
      up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
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
    ring: ring, scoreRing: scoreRing, confBand: confBand, CONF_FLOOR: CONF_FLOOR,
    signalsFor: signalsFor, signalRows: signalRows, verbBtn: verbBtn,
    STALE_DAYS: STALE_DAYS
  };
})();
