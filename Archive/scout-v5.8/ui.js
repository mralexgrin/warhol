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
  /* A run time is a verifiable fact about when the work happened, and "11:50"
     is not one: it does not say morning or evening, and it does not say whose
     clock. Both halves of that are now printed. The seed carries a real offset
     (-04:00), so the wall-clock digits in the string ARE Eastern and the label
     names the zone they belong to rather than converting to the reader's — the
     product runs on one schedule and every reader should see the same one.
     `clock` also takes a bare HH:MM (the next-run time), which has no date to
     hang an offset on. */
  var ZONE = 'ET';
  function clock(d) {
    var s = String(d);
    var t = s.length > 5 ? s.slice(11, 16) : s;
    var h = Number(t.slice(0, 2));
    var h12 = h % 12;
    return (h12 === 0 ? 12 : h12) + ':' + t.slice(3, 5) + ' ' + (h < 12 ? 'AM' : 'PM');
  }
  function clockZone(d) { return clock(d) + ' ' + ZONE; }
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
  /* v5.4 — CENTS SURVIVE. This rounded to whole dollars, which was harmless
     while the figures were invented in the hundreds and destroys them now they
     are measured: the real bill for every run ever made is $3.41, and
     Math.round turns the most persuasive number in the product into "$3".
     Rounding is kept for whole values so a $250 ceiling does not read $250.00. */
  function money(n) {
    var v = Number(n) || 0;
    var s = Math.round(v) === v ? String(v) : v.toFixed(2);
    return '$' + s.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

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
     shown SEPARATELY — the follower counts are never silently added up, because
     214k across four platforms is a different business from 214k on one.

     v5.5 — THE SENTENCE SAYING SO IS GONE (`p.why`, rendered as `.sepwhy`).
     It read "nothing on either page links the TikTok to the YouTube, so it is
     not added in", on 34 of 146 platform rows in the seed, in exactly TWO
     variants — the same sentence with the platform names swapped. Three things
     wrong with it at once: it is boilerplate, which is the defect v5.4 already
     named on the drop card (a sentence identical on consecutive rows is texture,
     not information); it is a note about our own merge logic on a list whose job
     is to let someone go and check the creator; and the claim needs no defending,
     because NOTHING ON ANY SCREEN EVER SUMS THE COUNTS. Each row carries its own
     number and the absence of a total is the statement. `separate` still drives
     the layout — the rows stay apart, which is the part that was doing work. */
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
  /* v5.4 — THE SWEEP IS THE SCORE. It used to be confidence, with the score as
     the number inside: two variables in one mark, and nothing on the drop said
     so. Measured on the live board, that produced a dial that ranked the list
     backwards —

       @pantheorganizer      38   sweep 83%    (best on the board, not full)
       @missunderstoodpod    34   sweep 100%   (fourth best, full)
       @backseatcoach        27   sweep 100%   (fifth, full)

     — because confidence is n/6 falsifiable checks and takes exactly seven
     values across the whole cohort, so a six-step dial was being drawn as if it
     were continuous. A ring beside a ranked list is read as the rank. It has to
     draw the thing the list is ordered by or it argues with the order.

     SCORE_CEIL is the observed ceiling, not the theoretical 100. The model can
     award Demand 25 + Missing 35 + Pressure 40, but Demand is structurally
     unreachable for most of this cohort (YouTube and Reddit are its only two
     sources and Reddit is not connected), so nobody has ever scored above 39.
     Drawing 38/100 renders the best creator in the seed as a third-full ring,
     which is a truthful fraction of a number nobody can reach and a lie about
     where he sits on this board. Read from the seed so it moves when the engine
     does — the fifth copy of the threshold is a lesson, not an anecdote.

     Confidence keeps the colour band and the screen-reader line. It is a
     qualifier on the score, and a qualifier may tint a mark; it may not size it. */
  /* The third copy of this number, and the reason all three now read the seed:
     the drop's threshold drifted from 78 to 25 in the engine while the
     prototype kept its own 78, and nothing caught it because an empty drop is a
     designed state (§6.1). A calibrated constant gets exactly one home. */
  var CONF_FLOOR = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.coverageGate) || 0.70;
  /* v5.4 — ONE MARK, ONE VARIABLE. Making the sweep the score left the ring
     still dual-encoded: fill was the score and COLOUR was confidence. Invisible
     on the drop, where everyone clears the confidence floor and every ring is
     teal — and plainly wrong one screen over, where @watchweswork rendered on the
     watchlist as a RED ring at 55% fill, meaning "score 22, half the checks
     resolved" and reading as "bad score".

     Colour now bands on the same number the fill draws: at or above the bar, or
     below it. That is the only distinction the colour was ever asked to make on
     a list, and it is the one the drop is built on.

     Confidence is not lost, it is moved to where it can carry a sentence rather
     than a hue: the screen-reader line on every ring, its own column on the
     who-else board, and words on the watchlist row ("read too little of them to
     argue from — 50% of checks resolved"). A qualifier may tint a mark; once it
     tints the same mark a different variable is sizing, it is guessing.

     confBand keeps its name and signature — it is called in four places and one
     of them is a test of the old behaviour I would rather leave failing loudly
     than silently rename around. */
  function scoreBand(score) {
    var t = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.scoreThreshold) || 25;
    return (Number(score) || 0) >= t ? '' : ' ring--warn';
  }
  function confBand(conf) {
    if (conf >= 0.82) return '';
    if (conf >= CONF_FLOOR) return ' ring--warn';
    return ' ring--stop';
  }
  var SCORE_CEIL = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.scoreCeiling) || 40;
  function ring(c, size, score) {
    var s = score == null ? c.score : score;
    var fill = Math.max(0, Math.min(100, Math.round((Number(s) || 0) / SCORE_CEIL * 100)));
    /* The score is real text; confidence was only ever a sweep, a colour band and
       a title on a non-focusable div — which is to say, mouse-only. §5.3 makes
       confidence the thing that stops a burned Scout distrusting the drop, so it
       cannot be the one number two groups of people cannot read. */
    return '<div class="ring ring--' + (size || 'sm') + scoreBand(s) + '"' +
      ' style="--pct:' + fill + '%">' +
      '<span class="in"><b>' + s + '</b><span>score</span></span>' +
      '<span class="sr-only">Score ' + s + ' out of ' + SCORE_CEIL +
      (scoreBand(s) ? ', under the bar' : '') + '. Confidence ' + pct(c.confidence) +
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
  function claimRows(c, asOf, opts) {
    opts = opts || {};
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
       one of four sub-signals produces a quote.

       v5.4 — `opts.dropSecond` drops the kind:'none' padding line when the
       CALLER has established it is true of every card in the list and has said
       so once, above them. The rule stays "two lines, always" everywhere else,
       including the report; what changes is that a sentence identical on eight
       consecutive rows is not information, it is texture, and it was pushing the
       resurfaced banner and the verb trays below the fold. */
    var p = cl.pressure.lines.slice(0, 2);
    if (opts.dropSecond) p = p.filter(function (l) { return l.kind !== 'none'; });
    p.forEach(function (l, i) {
      var v = l.kind === 'said'
        ? '<span class="said">&ldquo;' + esc(l.text) + '&rdquo;</span>' +
          '<span class="qt"> &mdash; their words, ' + esc(ago(l.at, asOf)) + '</span>'
        : esc(l.text) + (l.when ? ' <span class="qt">' + DOT + ' ' + esc(l.when) + '</span>' : '');
      rows.push({ k: i === 0 ? 'Pressure' : '', mark: 'butter', v: v });
    });
    return rows;
  }

  function claimList(c, asOf, opts) {
    return '<div class="sigs">' + claimRows(c, asOf, opts).map(function (r) {
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
      /* v5.5c — AN INBOX, NOT A LIST. `drop` was three horizontal rules and
         `passed` was three horizontal rules with an x on them: at 18px in a
         44px tile they were the same glyph, and the two sit four pixels apart
         in the rail. They are also the two most-visited screens, so the pair
         that most needed telling apart was the pair that could not be.

         The drop is what arrived for you this morning — the oldest and most
         legible metaphor for that is a tray. Passed became an archive box
         (below), which is what it is: nothing is deleted, everything keeps its
         reason. Tray, box, eye, magnifier, gear: five silhouettes, no two alike. */
      drop: '<path d="M4 13h4l1.5 2.5h5L16 13h4"/>' +
        '<path d="M5.5 5h13a1.5 1.5 0 0 1 1.5 1.5V18a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V6.5A1.5 1.5 0 0 1 5.5 5Z"/>',
      up: '<path d="M12 19V5M5 12l7-7 7 7"/>',
      watch: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
      /* An archive box, and the word is exact: a Pass is not a delete. Every row
         keeps the reason it was passed and the thing that would bring it back,
         which is the whole of §8's argument for the screen — so the glyph is
         the one that means "filed", not the one that means "discarded". */
      passed: '<path d="M3.5 4h17a.5.5 0 0 1 .5.5V8H3V4.5a.5.5 0 0 1 .5-.5Z"/>' +
        '<path d="M5 8v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8"/><path d="M10 12h4"/>',
      run: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
      admin: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
      plus: '<path d="M12 5v14M5 12h14"/>',
      /* Head and shoulders. The account control carried the member's initials,
         which is an avatar stand-in — and Scout has exactly one member, so "AG"
         was a two-letter monogram identifying the only person who can be looking
         at it. A generic glyph says "this is you and your settings" without
         pretending to be a picture. */
      user: '<circle cx="12" cy="8.5" r="3.7"/><path d="M4.6 20a7.6 7.6 0 0 1 14.8 0"/>',
      /* Four columns on a baseline, uneven. Deliberately not a rising line —
         the screen it labels refuses to draw a direction until day 90, and an
         up-and-to-the-right arrow in the rail would promise one from the rail. */
      trends: '<path d="M3 20h18"/><path d="M6 20V11M11 20V5M16 20v-6M21 20v-9"/>',
      lock: '<rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>',
      /* A speech bubble, for the one place Scout counts what an audience said
         rather than what the engine found. */
      ask: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
      chev: '<path d="m6 9 6 6 6-6"/>',
      back: '<path d="M15 5l-7 7 7 7"/>',
      /* v5.4 — back's mirror. Drawn rather than rotated with a transform so the
         two chevrons carry identical stroke geometry; a rotated copy picks up a
         different pixel grid at 16px and the pair reads as slightly mismatched. */
      fwd: '<path d="M9 5l7 7-7 7"/>',
      /* Lower-case i in a ring. The dot is a separate 1px path rather than a
         stroked line so it stays round at 15px — a 2-unit vertical line with a
         round cap renders as a lozenge at this size, and a lozenge over a stem
         reads as an exclamation mark, which is a different word entirely. */
      info: '<circle cx="12" cy="12" r="9"/><path d="M12 11v5"/><path d="M12 8h.01"/>',
      check: '<path d="m5 12 5 5L19 7"/>',
      pause: '<path d="M10 4v16M14 4v16"/>',
      close: '<path d="M6 6l12 12M18 6 6 18"/>',
      /* Leaves the app — every account link carries it, so "this opens their
         profile" is legible before the click rather than after it. */
      out: '<path d="M14 4h6v6"/><path d="M20 4 10 14"/><path d="M18 14v5a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h5"/>',
      sources: '<path d="M12 3v18"/><path d="M5 7h14"/><circle cx="5" cy="7" r="2"/><circle cx="19" cy="7" r="2"/><circle cx="12" cy="18" r="2"/>',
      /* v5.5b — the rail's own width control. A panel outline with the divider
         drawn in, and a chevron pointing the way the panel is about to move:
         the shape says WHICH THING resizes, where a bare chevron on the edge of
         a sidebar is indistinguishable from "previous". */
      railopen: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/><path d="m13 10 2 2-2 2"/>',
      railclose: '<rect x="3" y="4" width="18" height="16" rx="2"/><path d="M9 4v16"/><path d="m17 10-2 2 2 2"/>'
    };
    return '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      (P[name] || '') + '</svg>';
  }

  window.UI = {
    esc: esc, shortDate: shortDate, longDate: longDate, monthYear: monthYear,
    clock: clock, clockZone: clockZone,
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
