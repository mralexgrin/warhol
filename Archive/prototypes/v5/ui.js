/* ==========================================================================
   SCOUT v5 — rendering helpers. Classic script, sets window.UI.

   Colour has a job, and the job decides the colour:
     teal   — the opportunity is real (Demand, Missing, verified absence)
     butter — the timing (Pressure)
     lilac  — Scout speaking about itself (receipts, provenance)
     ink    — weight and summary (the score, decided states)
   The verbs sit outside that system: an action is not a piece of evidence, and
   reusing teal for Promote would say "the gap is real" about a button.

   What v5 rewrote (§13.2):
   · signalsFor / signalRows — three claims become Demand / Missing / Pressure,
     Pressure carries two lines, every Pressure value is a CHANGE, and the
     creator's quote moved onto the card.
   · The expand collapsed away. Nothing was left behind it worth hiding.
   · def() became receipt() — the `?` returns receipts, not a definition.
   ========================================================================== */
(function () {
  'use strict';

  var MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  var MONTHS_LONG = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
    'August', 'September', 'October', 'November', 'December'];
  var DOT = String.fromCharCode(183);

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

  /* Pressure is only pressure if it is dated (§5.2). On the card that date is
     relative, because "6 days ago" is a fact you feel and "28 Mar" is one you
     have to work out. */
  function ago(d, asOf) {
    var n = daysBetween(d, asOf);
    if (n <= 0) return 'today';
    if (n === 1) return 'yesterday';
    if (n < 31) return n + ' days ago';
    if (n < 365) return Math.round(n / 30) + ' months ago';
    return Math.round(n / 365) + ' years ago';
  }

  var STALE_DAYS = 21;
  function ageOf(observedAt, asOf) {
    var n = daysBetween(observedAt, asOf);
    return { days: n, stale: n > STALE_DAYS };
  }

  function num(n) { return n == null ? '' : String(n).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }
  function followers(n) {
    if (n >= 1000000) return (n / 1000000).toFixed(n >= 10000000 ? 0 : 1).replace(/\.0$/, '') + 'M';
    if (n >= 1000) return Math.round(n / 1000) + 'k';
    return String(n);
  }
  function pct(f) { return Math.round(f * 100) + '%'; }
  function plural(n, one, many) { return n + ' ' + (n === 1 ? one : (many || one + 's')); }
  function money(n) { return '$' + String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, ','); }

  /* ------------------------------------------------------ identity marks */
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
  /* Countable facts stay countable, because that is what makes them
     defensible. Judgment is labelled as judgment (§5.1). */
  function engineKind(e) {
    var s = String(e || '').toLowerCase();
    if (s.indexOf('+') > -1) return 'mixed';
    if (s.indexOf('llm') > -1) return 'llm';
    return 'rule';
  }
  function engineLabel(e) {
    var k = engineKind(e);
    return k === 'rule' ? 'Counted' : k === 'llm' ? 'Read' : 'Counted + read';
  }
  function engTag(e) {
    var k = engineKind(e);
    return '<span class="eng" data-e="' + k + '">' + esc(engineLabel(e)) + '</span>';
  }

  /* ------------------------------------------------- verification marks */
  /* "Doesn't apply" is a relevance flag, not a fourth state — it leaves both
     numerator and denominator, so it distorts neither the score nor
     confidence, and it reads on screen as an ordinary sentence (§5.3). */
  var VLABEL = {
    verified_absent: 'Not there', present: 'Found it',
    not_found: 'Could not resolve', 'n/a': "Doesn't apply"
  };
  function vmark(state) {
    return '<span class="vmark" data-s="' + esc(state) + '"></span>';
  }
  function vstate(state) {
    return '<span class="vstate" data-s="' + esc(state) + '">' + vmark(state) +
      '<span class="txt">' + esc(VLABEL[state] || state) + '</span></span>';
  }

  /* --------------------------------------------------------- the receipt */
  /* Clicking `?` on Demand does not say "measures whether the audience is worth
     more than they earn". It says "1,940 people asked where to buy. No
     newsletter. No store. We looked in 6 places." A definition is identical on
     every screen, so after the first read every future `?` is a dead click.
     Receipts differ every time, so the `?` stays worth pressing (§6.11). */
  function rcp(key, id) {
    return '<button class="deft" data-act="rcp" data-k="' + esc(key) + '" data-id="' + esc(id || '') +
      '" aria-label="Show the receipts">?</button>';
  }

  /* ============================================================== THE SCORE */
  /* One mark, three sizes, on every list: the number is the score, the sweep is
     confidence. Confidence stays on lists, where the detail is not visible, and
     comes off the report, where it is (§6.2). */
  var CONF_FLOOR = 0.70;
  function confBand(conf) {
    if (conf >= 0.82) return '';
    if (conf >= CONF_FLOOR) return ' ring--warn';
    return ' ring--stop';
  }
  function ring(c, size, score) {
    var s = score == null ? c.score : score;
    return '<div class="ring ring--' + (size || 'sm') + confBand(c.confidence) + '"' +
      ' style="--pct:' + Math.round(c.confidence * 100) + '%"' +
      ' title="Score ' + s + ' ' + DOT + ' ' + pct(c.confidence) + ' of checks resolved">' +
      '<span class="in"><b>' + s + '</b><span>score</span></span></div>';
  }

  /* ============================================================ THE CLAIMS */
  /* Three claims and nothing else, in the order the report repeats. Enough
     evidence to kill without opening; not enough to promote (§6.1).

     The audience is strongest as a number and the creator is strongest as a
     quote — 1,940 people is a fact, one cherry-picked comment is anecdote, and
     one sentence in their own voice is the whole Pressure signal with no count
     that beats it. The card used to do the reverse. */
  function claimRows(c, asOf) {
    var S = window.SCOUT;
    var cl = S.claims(c);
    var ml = S.missingLine(c);
    var rows = [];

    rows.push({ k: 'Demand', mark: 'fill', v: esc(cl.demand.line) });
    rows.push({ k: 'Missing', mark: 'hollow',
      v: esc(ml.text) + (ml.places ? ' <span class="qt">' + DOT + ' we looked in ' +
        ml.places + ' places</span>' : '') });

    /* Pressure shows two lines, always. One behaviour change is a holiday; two
       at once is a person going under (§5.2). Their own words lead, because only
       one of four sub-signals produces a quote. */
    var p = cl.pressure.lines.slice(0, 2);
    p.forEach(function (l, i) {
      var v = l.kind === 'said'
        ? '<span class="said">&ldquo;' + esc(l.text) + '&rdquo;</span>' +
          '<span class="qt"> &mdash; their words, ' + esc(ago(l.at, asOf)) + '</span>'
        : esc(l.text) + (l.when ? ' <span class="qt">' + DOT + ' ' + esc(l.when) + '</span>' : '');
      rows.push({ k: i === 0 ? 'Pressure' : '', mark: 'butter', v: v });
    });
    return rows;
  }

  function claimList(c, asOf) {
    return '<div class="sigs">' + claimRows(c, asOf).map(function (r) {
      return '<div class="sig3"><span class="k k--' + r.mark + '">' +
        '<i class="dot dot--' + r.mark + '"></i>' + esc(r.k) + '</span>' +
        '<span class="v">' + r.v + '</span></div>';
    }).join('') + '</div>';
  }

  /* ============================================================== THE VERBS */
  function verbBtn(act, id, label, kind, size) {
    var ic = kind === 'go' ? 'up' : kind === 'hold' ? 'watch' : 'close';
    return '<button class="vbtn vbtn--' + kind + (size ? ' vbtn--' + size : '') + '"' +
      ' data-act="' + act + '" data-id="' + id + '">' + icon(ic) + esc(label) + '</button>';
  }

  /* -------------------------------------------------------------- quotes */
  /* Only two things are evidence: the audience's words prove demand, and the
     creator's words prove pressure (§6.2). */
  function quoteBlock(ev, asOf, opts) {
    opts = opts || {};
    var age = ageOf(ev.observedAt, asOf);
    var src = '<div class="src">' +
      (opts.likes ? '<span class="m">' + esc(opts.likes) + '</span>' : '') +
      '<span class="m">' + esc(ev.platform) + '</span>' +
      '<span class="m">' + esc(shortDate(ev.observedAt)) + '</span>' +
      (opts.url !== false && ev.url ? '<span class="m">' + esc(ev.url) + '</span>' : '') +
      engTag(ev.engine) +
      (age.stale ? '<span class="stale">' + age.days + 'd old</span>' : '') +
      '</div>';
    return '<blockquote class="q"><p>&ldquo;' + esc(ev.quote) + '&rdquo;</p>' + src + '</blockquote>';
  }

  /* Emits a 0–1 fraction, not a percentage: the fill is a full-width bar that
     gets scaled, so growth animates on transform rather than on width. */
  function track(pctFilled, cls) {
    var f = Math.max(0, Math.min(100, pctFilled)) / 100;
    return '<div class="track' + (cls ? ' ' + cls : '') + '">' +
      '<i style="--f:' + f.toFixed(4) + '"></i></div>';
  }

  function icon(name) {
    var P = {
      drop: '<path d="M4 5h16M4 12h16M4 19h10"/>',
      up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
      watch: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      passed: '<path d="M3 6h18M3 12h18M3 18h10"/><path d="m16 16 5 5M21 16l-5 5"/>',
      run: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      admin: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      chev: '<path d="m6 9 6 6 6-6"/>',
      back: '<path d="M15 5l-7 7 7 7"/>',
      check: '<path d="m5 12 5 5L19 7"/>',
      pause: '<path d="M10 4v16M14 4v16"/>',
      close: '<path d="M6 6l12 12M18 6 6 18"/>'
    };
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (P[name] || '') + '</svg>';
  }

  window.UI = {
    esc: esc, shortDate: shortDate, longDate: longDate, monthYear: monthYear,
    daysBetween: daysBetween, ago: ago, ageOf: ageOf, num: num, followers: followers,
    pct: pct, plural: plural, money: money, DOT: DOT,
    fieldFor: fieldFor, sampleField: sampleField, initials: initials,
    engineKind: engineKind, engineLabel: engineLabel, engTag: engTag,
    VLABEL: VLABEL, vmark: vmark, vstate: vstate,
    quoteBlock: quoteBlock, track: track, icon: icon, rcp: rcp,
    ring: ring, confBand: confBand, CONF_FLOOR: CONF_FLOOR,
    claimRows: claimRows, claimList: claimList, verbBtn: verbBtn,
    STALE_DAYS: STALE_DAYS
  };
})();
