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

  /* ------------------------------------------------------------- the face */
  /* §6.12, decision 117. A creator gets their picture wherever they are named,
     and the picture is LINKED, never copied — we point at the platform's own
     CDN and store nothing.

     THE FALLBACK CANNOT BE ALLOWED TO FAIL, and this is why it is built the way
     it is rather than the obvious way. TikTok avatar URLs are signed and expire
     in about 48 hours, so a seed exported on Monday is serving dead links by
     Wednesday — during a demo, silently, with no error anyone would notice
     until a row of broken-image icons appears on stage.

     So the initials are ALWAYS rendered, underneath, as the resting state. The
     image is layered over them and removes itself if it fails to load. Nothing
     has to detect the expiry, no JavaScript has to run first, and a dead link
     degrades to exactly what this surface looked like before avatars existed.
     `avatarStale` (computed against the stored expiry) skips the attempt
     altogether, so a known-dead URL is never even requested. */
  function face(c, size) {
    var known = c && (c.avatar || ((c.platforms || [])[0] || {}).avatar);
    var stale = !!(c && (c.avatarStale
      || ((c.platforms || []).filter(function (p) { return p.avatar === known; })[0] || {}).avatarStale));

    var ini = initials(c, size);
    if (!known || stale) return '<span class="face' + (size ? ' face--' + size : '') + '">' + ini + '</span>';

    return '<span class="face' + (size ? ' face--' + size : '') + '">' + ini +
      /* Deliberately NOT lazy. There are at most ten faces on a screen and they
         are the first thing a person looks at; lazy-loading them means the top
         of the drop renders as blank tiles and fills in a beat later, which on
         a projector reads as the app being broken. */
      '<img class="face-img" src="' + esc(known) + '" alt="" decoding="async" ' +
      'referrerpolicy="no-referrer" onerror="this.remove()">' +
      '</span>';
  }

  /* --------------------------------------------------------- the accounts */
  /* §6.12: the accounts are how a person checks the work, so every one of them
     is a link out. Two things this must not blur.

     A surface read FIRST-PARTY and a surface merely found at a matching handle
     are different claims (the mkbhd.substack.com failure). A guessed account is
     labelled as a guess and never presented as theirs.

     And where two platforms could not be merged into one audience, they are
     shown SEPARATELY and said to be separate — the follower counts are never
     silently added up, because 214k across four platforms is a different
     business from 214k on one. */
  function accounts(c) {
    var list = (c && c.platforms) || [];
    if (!list.length) return '';
    return '<ul class="accts">' + list.map(function (p) {
      var confirmed = p.matchConfidence === 1;
      var inner = '<span class="n">' + esc(p.name) + '</span>' +
        (p.handle ? '<span class="h">' + esc(p.handle) + '</span>' : '') +
        '<span class="f">' + followers(p.followers) + '</span>' +
        (confirmed ? '' : '<span class="guess" title="Found at a matching handle. Not confirmed as theirs.">unconfirmed</span>');

      return '<li class="acct' + (confirmed ? '' : ' acct--guess') + (p.separate ? ' acct--sep' : '') + '">' +
        (p.url
          ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + inner +
            icon('out') + '</a>'
          : '<span>' + inner + '</span>') +
        (p.separate && p.why ? '<span class="sepwhy">' + esc(p.why) + '</span>' : '') +
        '</li>';
    }).join('') + '</ul>';
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
  /* The alternative belongs to the component, not to the caller. Every current
     call site happens to sit beside descriptive text, so nothing is lost today —
     but nothing enforces that, and the next call site that forgets would fail
     silently. Some callers now say it twice; that is the cheaper mistake. */
  function vmark(state) {
    return '<span class="vmark" data-s="' + esc(state) + '">' +
      '<span class="sr-only">' + esc(VLABEL[state] || state) + '</span></span>';
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
  /* Five of these sit on one report. Pulling up a button list and hearing
     "Show the receipts" five times is the same as hearing nothing. */
  function rcp(key, id, label) {
    return '<button class="deft" data-act="rcp" data-k="' + esc(key) + '" data-id="' + esc(id || '') +
      '" aria-label="Show the receipts for ' + esc(label || key) + '">?</button>';
  }

  /* ============================================================== THE SCORE */
  /* One mark, three sizes, on every list: the number is the score, the sweep is
     confidence. Confidence stays on lists, where the detail is not visible, and
     comes off the report, where it is (§6.2). */
  /* The third copy of this number, and the reason all three now read the seed:
     the drop's threshold drifted from 78 to 25 in the engine while the
     prototype kept its own 78, and nothing caught it because an empty drop is a
     designed state (§6.1). A calibrated constant gets exactly one home. */
  var CONF_FLOOR = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.coverageGate) || 0.70;
  function confBand(conf) {
    if (conf >= 0.82) return '';
    if (conf >= CONF_FLOOR) return ' ring--warn';
    return ' ring--stop';
  }
  function ring(c, size, score) {
    var s = score == null ? c.score : score;
    /* The score is real text; confidence was only ever a sweep, a colour band and
       a title on a non-focusable div — which is to say, mouse-only. §5.3 makes
       confidence the thing that stops a burned Scout distrusting the drop, so it
       cannot be the one number two groups of people cannot read. */
    return '<div class="ring ring--' + (size || 'sm') + confBand(c.confidence) + '"' +
      ' style="--pct:' + Math.round(c.confidence * 100) + '%">' +
      '<span class="in"><b>' + s + '</b><span>score</span></span>' +
      '<span class="sr-only">Score ' + s + '. Confidence ' + pct(c.confidence) +
      ' of checks resolved' + (confBand(c.confidence) ? ', under the usual bar' : '') +
      '.</span></div>';
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
      /* The second Pressure line has no visible label — it reads as Pressure
         because it sits under the first one in the same colour. Linearised for a
         screen reader, that relationship disappears entirely. */
      return '<div class="sig3"><span class="k k--' + r.mark + '">' +
        '<i class="dot dot--' + r.mark + '"></i>' +
        (r.k ? esc(r.k) : '<span class="sr-only">Pressure, continued</span>') + '</span>' +
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
      close: '<path d="M6 6l12 12M18 6 6 18"/>',
      /* Leaves the app — every account link carries it, so "this opens their
         profile" is legible before the click rather than after it. */
      out: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
      sources: '<path d="M12 3v18"/><path d="M5 7h14"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="12" cy="18" r="2"/>'
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
    face: face, accounts: accounts,
    engineKind: engineKind, engineLabel: engineLabel, engTag: engTag,
    VLABEL: VLABEL, vmark: vmark, vstate: vstate,
    quoteBlock: quoteBlock, track: track, icon: icon, rcp: rcp,
    ring: ring, confBand: confBand, CONF_FLOOR: CONF_FLOOR,
    claimRows: claimRows, claimList: claimList, verbBtn: verbBtn,
    STALE_DAYS: STALE_DAYS
  };
})();
