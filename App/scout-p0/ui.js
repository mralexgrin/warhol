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
  /* v6.1 — A MISSING COUNT PRINTED THE WORD `null`. TikTok hydrates its
     follower number by XHR, so a profile that resolves can still carry no
     count, and `String(null)` put the literal text on the report — under a
     confirmed account, in the slot reserved for the audience number, on the
     one screen the desk is asked to argue from.

     Nothing is rendered instead. An absent number is not a claim, and the row
     still names the platform, the handle and the link; a placeholder there
     would have to say could-not-tell, which is already the phrase this row
     uses for an unconfirmed match and would then mean two things at once.
     Zero still prints — a real zero is a reading. */
  function followers(n) {
    if (n === null || n === undefined || n === '' || (typeof n === 'number' && isNaN(n))) return '';
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
  /* v6.2 — EVERY PLACE OF THEIRS, NOT ONLY THE ONES WITH A FOLLOWER COUNT.

     This read `platforms`, which is the accounts — the things with an audience.
     So a creator whose podcast Scout found, whose episodes Scout read and whose
     site Scout confirmed showed one chip reading TikTok, directly above a
     model's read that discussed the podcast and the site by name. Scout plainly
     knew about them and offered no way to open one.

     `places` is the full set and carries `followers: null` where there is no
     count. A place with no audience figure prints NO figure — not a zero, not
     "unknown". The count is a fact about an account; its absence is a fact
     about the place, and neither needs a sentence. `platforms` stays as the
     fallback for a seed exported before places existed. */
  function accounts(c) {
    var list = (c && c.places && c.places.length) ? c.places : ((c && c.platforms) || []);
    if (!list.length) return '';
    return '<ul class="accts">' + list.map(function (p) {
      /* Only an ACCOUNT can be mis-matched to a person — that is what the
         handle probe does. A podcast feed or a site reached from their own
         links was not guessed at, so it takes no doubt marker. */
      var counted = p.followers != null;
      var confirmed = !counted || p.matchConfidence === 1 || p.matchConfidence === undefined;
      var mark = '<span class="acct-brand">' + brandIcon(placeBrand(p), { size: 15 }) + '</span>';
      var inner = '<span class="n">' + esc(p.name) + '</span>' +
        (p.handle ? '<span class="h">' + esc(p.handle) + '</span>' : '') +
        (counted ? '<span class="f">' + followers(p.followers) + '</span>' : '') +
        (confirmed ? '' : '<span class="guess" title="Found at a matching handle. Not confirmed as theirs.">could not tell</span>');

      return '<li class="acct' + (confirmed ? '' : ' acct--guess') + (p.separate ? ' acct--sep' : '') + '">' +
        (p.url
          ? '<a href="' + esc(p.url) + '" target="_blank" rel="noopener noreferrer">' + mark + inner +
            icon('out') + '</a>'
          : '<span>' + mark + inner + '</span>') +
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

     v5.9 — THE DENOMINATOR IS 100 AGAIN, AND THE BAR IS DRAWN ON THE RING.
     It used to be the observed ceiling (40, since Demand is structurally
     unreachable while Reddit is disconnected), which made 42 a full ring and 39
     a 98% one — the top two names in a ranked list rendered as the same picture,
     and the same constant told the screen reader "42 out of 40". A tick at the
     bar answers "is this good?" without spending the ring's whole range on it,
     and it survives Reddit landing: when someone scores 71, no historical drop
     silently redraws. The bar is still read from the seed so it moves when the
     engine does.

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
  /* v5.9 — THE RING IS DRAWN AGAINST 100, NOT AGAINST WHAT TODAY HAPPENED TO
     SCORE. The old ceiling was the highest score in the seed (40, because Reddit
     is not connected), so 42 filled the ring and 39 filled 98% of it — the top
     two names in a ranked list were the same picture, and the screen reader was
     told "Score 42 out of 40". The bar rides along as --bar so the ring can mark
     it; that is what makes a 42 legible without opening anything. */
  var SCORE_MAX = 100;
  function ring(c, size, score) {
    var s = score == null ? c.score : score;
    var bar = (window.WARHOL && window.WARHOL.meta && window.WARHOL.meta.scoreThreshold) || 25;
    var fill = Math.max(0, Math.min(100, Math.round((Number(s) || 0) / SCORE_MAX * 100)));
    /* The score is real text; confidence was only ever a sweep, a colour band and
       a title on a non-focusable div — which is to say, mouse-only. §5.3 makes
       confidence the thing that stops a burned Scout distrusting the drop, so it
       cannot be the one number two groups of people cannot read. */
    return '<div class="ring ring--' + (size || 'sm') + scoreBand(s) + '"' +
      ' style="--pct:' + fill + '%;--bar:' + bar + '%">' +
      '<span class="in"><b>' + s + '</b><span>score</span></span>' +
      '<span class="sr-only">Score ' + s + ' out of ' + SCORE_MAX +
      (scoreBand(s) ? ', under the bar of ' + bar : ', the bar is ' + bar) + '. Confidence ' + pct(c.confidence) +
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
    /* v6.2 — Pressure hidden for the demo. See SHOW_PRESSURE in v52-seed.js. The
       card falls back to two claims, Demand and Missing, which it already does
       for a creator whose pressure lines are all empty. */
    var p = S.SHOW_PRESSURE === false ? [] : cl.pressure.lines.slice(0, 2);
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
      /* A counter-clockwise loop with its own tail arrow — the "start over"
         glyph. Not the two-arrow sync symbol, which reads as "refreshing" (in
         progress) rather than "reset" (put it back). */
      reset: '<path d="M4 4v5h5"/><path d="M4.5 9a8 8 0 1 1-1 4"/>',
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

  /* Brand marks for the platforms a creator posts on. Paths are Simple Icons
     (simpleicons.org), CC0 — inlined, never fetched, so a row of source links
     never depends on a CDN and never breaks into missing-image boxes on stage
     the way avatars can. These are FILLED silhouettes, unlike icon()'s outline
     set: a brand reads by its solid shape — the note, the play button, the
     alien — not its outline. Fill is currentColor by default, so each mark
     takes the theme's ink; pass {color:true} for the platform's own accent
     (BRAND_COLORS), or {color:'#hex'} for a literal one. `website` is the one
     non-brand: a plain globe (Lucide, ISC) for a creator's own site, and the
     fallback for any source we don't have a mark for. */
  var BRAND_PATHS = {
    youtube: '<path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>',
    tiktok: '<path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>',
    soundcloud: '<path d="M23.999 14.165c-.052 1.796-1.612 3.169-3.4 3.169h-8.18a.68.68 0 0 1-.675-.683V7.862a.747.747 0 0 1 .452-.724s.75-.513 2.333-.513a5.364 5.364 0 0 1 2.763.755 5.433 5.433 0 0 1 2.57 3.54c.282-.08.574-.121.868-.12.884 0 1.73.358 2.347.992s.948 1.49.922 2.373ZM10.721 8.421c.247 2.98.427 5.697 0 8.672a.264.264 0 0 1-.53 0c-.395-2.946-.22-5.718 0-8.672a.264.264 0 0 1 .53 0ZM9.072 9.448c.285 2.659.37 4.986-.006 7.655a.277.277 0 0 1-.55 0c-.331-2.63-.256-5.02 0-7.655a.277.277 0 0 1 .556 0Zm-1.663-.257c.27 2.726.39 5.171 0 7.904a.266.266 0 0 1-.532 0c-.38-2.69-.257-5.21 0-7.904a.266.266 0 0 1 .532 0Zm-1.647.77a26.108 26.108 0 0 1-.008 7.147.272.272 0 0 1-.542 0 27.955 27.955 0 0 1 0-7.147.275.275 0 0 1 .55 0Zm-1.67 1.769c.421 1.865.228 3.5-.029 5.388a.257.257 0 0 1-.514 0c-.21-1.858-.398-3.549 0-5.389a.272.272 0 0 1 .543 0Zm-1.655-.273c.388 1.897.26 3.508-.01 5.412-.026.28-.514.283-.54 0-.244-1.878-.347-3.54-.01-5.412a.283.283 0 0 1 .56 0Zm-1.668.911c.4 1.268.257 2.292-.026 3.572a.257.257 0 0 1-.514 0c-.241-1.262-.354-2.312-.023-3.572a.283.283 0 0 1 .563 0Z"/>',
    reddit: '<path d="M12 0C5.373 0 0 5.373 0 12c0 3.314 1.343 6.314 3.515 8.485l-2.286 2.286C.775 23.225 1.097 24 1.738 24H12c6.627 0 12-5.373 12-12S18.627 0 12 0Zm4.388 3.199c1.104 0 1.999.895 1.999 1.999 0 1.105-.895 2-1.999 2-.946 0-1.739-.657-1.947-1.539v.002c-1.147.162-2.032 1.15-2.032 2.341v.007c1.776.067 3.4.567 4.686 1.363.473-.363 1.064-.58 1.707-.58 1.547 0 2.802 1.254 2.802 2.802 0 1.117-.655 2.081-1.601 2.531-.088 3.256-3.637 5.876-7.997 5.876-4.361 0-7.905-2.617-7.998-5.87-.954-.447-1.614-1.415-1.614-2.538 0-1.548 1.255-2.802 2.803-2.802.645 0 1.239.218 1.712.585 1.275-.79 2.881-1.291 4.64-1.365v-.01c0-1.663 1.263-3.034 2.88-3.207.188-.911.993-1.595 1.959-1.595Zm-8.085 8.376c-.784 0-1.459.78-1.506 1.797-.047 1.016.64 1.429 1.426 1.429.786 0 1.371-.369 1.418-1.385.047-1.017-.553-1.841-1.338-1.841Zm7.406 0c-.786 0-1.385.824-1.338 1.841.047 1.017.634 1.385 1.418 1.385.785 0 1.473-.413 1.426-1.429-.046-1.017-.721-1.797-1.506-1.797Zm-3.703 4.013c-.974 0-1.907.048-2.77.135-.147.015-.241.168-.183.305.483 1.154 1.622 1.964 2.953 1.964 1.33 0 2.47-.81 2.953-1.964.057-.137-.037-.29-.184-.305-.863-.087-1.795-.135-2.769-.135Z"/>',
    instagram: '<path d="M7.0301.084c-1.2768.0602-2.1487.264-2.911.5634-.7888.3075-1.4575.72-2.1228 1.3877-.6652.6677-1.075 1.3368-1.3802 2.127-.2954.7638-.4956 1.6365-.552 2.914-.0564 1.2775-.0689 1.6882-.0626 4.947.0062 3.2586.0206 3.6671.0825 4.9473.061 1.2765.264 2.1482.5635 2.9107.308.7889.72 1.4573 1.388 2.1228.6679.6655 1.3365 1.0743 2.1285 1.38.7632.295 1.6361.4961 2.9134.552 1.2773.056 1.6884.069 4.9462.0627 3.2578-.0062 3.668-.0207 4.9478-.0814 1.28-.0607 2.147-.2652 2.9098-.5633.7889-.3086 1.4578-.72 2.1228-1.3881.665-.6682 1.0745-1.3378 1.3795-2.1284.2957-.7632.4966-1.636.552-2.9124.056-1.2809.0692-1.6898.063-4.948-.0063-3.2583-.021-3.6668-.0817-4.9465-.0607-1.2797-.264-2.1487-.5633-2.9117-.3084-.7889-.72-1.4568-1.3876-2.1228C21.2982 1.33 20.628.9208 19.8378.6165 19.074.321 18.2017.1197 16.9244.0645 15.6471.0093 15.236-.005 11.977.0014 8.718.0076 8.31.0215 7.0301.0839m.1402 21.6932c-1.17-.0509-1.8053-.2453-2.2287-.408-.5606-.216-.96-.4771-1.3819-.895-.422-.4178-.6811-.8186-.9-1.378-.1644-.4234-.3624-1.058-.4171-2.228-.0595-1.2645-.072-1.6442-.079-4.848-.007-3.2037.0053-3.583.0607-4.848.05-1.169.2456-1.805.408-2.2282.216-.5613.4762-.96.895-1.3816.4188-.4217.8184-.6814 1.3783-.9003.423-.1651 1.0575-.3614 2.227-.4171 1.2655-.06 1.6447-.072 4.848-.079 3.2033-.007 3.5835.005 4.8495.0608 1.169.0508 1.8053.2445 2.228.408.5608.216.96.4754 1.3816.895.4217.4194.6816.8176.9005 1.3787.1653.4217.3617 1.056.4169 2.2263.0602 1.2655.0739 1.645.0796 4.848.0058 3.203-.0055 3.5834-.061 4.848-.051 1.17-.245 1.8055-.408 2.2294-.216.5604-.4763.96-.8954 1.3814-.419.4215-.8181.6811-1.3783.9-.4224.1649-1.0577.3617-2.2262.4174-1.2656.0595-1.6448.072-4.8493.079-3.2045.007-3.5825-.006-4.848-.0608M16.953 5.5864A1.44 1.44 0 1 0 18.39 4.144a1.44 1.44 0 0 0-1.437 1.4424M5.8385 12.012c.0067 3.4032 2.7706 6.1557 6.173 6.1493 3.4026-.0065 6.157-2.7701 6.1506-6.1733-.0065-3.4032-2.771-6.1565-6.174-6.1498-3.403.0067-6.156 2.771-6.1496 6.1738M8 12.0077a4 4 0 1 1 4.008 3.9921A3.9996 3.9996 0 0 1 8 12.0077"/>',
    spotify: '<path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>',
    twitch: '<path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714Z"/>',
    vimeo: '<path d="M23.9765 6.4168c-.105 2.338-1.739 5.5429-4.894 9.6088-3.2679 4.247-6.0258 6.3699-8.2898 6.3699-1.409 0-2.578-1.294-3.553-3.881l-1.9179-7.1138c-.719-2.584-1.488-3.878-2.312-3.878-.179 0-.806.378-1.8809 1.132l-1.129-1.457a315.06 315.06 0 003.501-3.1279c1.579-1.368 2.765-2.085 3.5539-2.159 1.867-.18 3.016 1.1 3.447 3.838.465 2.953.789 4.789.971 5.5069.5389 2.45 1.1309 3.674 1.7759 3.674.502 0 1.256-.796 2.265-2.385 1.004-1.589 1.54-2.797 1.612-3.628.144-1.371-.395-2.061-1.614-2.061-.574 0-1.167.121-1.777.391 1.186-3.8679 3.434-5.7568 6.7619-5.6368 2.4729.06 3.6279 1.664 3.4929 4.7969z"/>',
    bluesky: '<path d="M5.202 2.857C7.954 4.922 10.913 9.11 12 11.358c1.087-2.247 4.046-6.436 6.798-8.501C20.783 1.366 24 .213 24 3.883c0 .732-.42 6.156-.667 7.037-.856 3.061-3.978 3.842-6.755 3.37 4.854.826 6.089 3.562 3.422 6.299-5.065 5.196-7.28-1.304-7.847-2.97-.104-.305-.152-.448-.153-.327 0-.121-.05.022-.153.327-.568 1.666-2.782 8.166-7.847 2.97-2.667-2.737-1.432-5.473 3.422-6.3-2.777.473-5.899-.308-6.755-3.369C.42 10.04 0 4.615 0 3.883c0-3.67 3.217-2.517 5.202-1.026"/>',
    threads: '<path d="M18.263 11.097c-.03-3.486-1.92-5.586-5.111-5.586-2.13 0-3.922.963-4.863 2.499l2.062 1.438c.535-.843 1.272-1.543 2.628-1.543 1.528 0 2.318.85 2.544 2.431a15 15 0 0 0-2.236-.173c-4.125 0-6.068 1.867-6.068 4.336s1.943 3.99 4.804 3.99c3.139 0 5.013-2.115 5.781-4.735.798.361 1.348 1.204 1.348 2.47 0 3.387-3.907 5.232-7.22 5.232-4.885 0-8.077-3.207-8.077-8.424 0-6.392 4.223-10.487 9.9-10.487 3.808 0 5.69 1.671 6.97 3.914l2.108-1.475C21.44 2.078 18.331 0 13.663 0 6.227 0 1.168 5.277 1.168 12.934c0 7 4.953 11.066 10.856 11.066 4.878 0 9.809-2.846 9.809-7.716 0-2.545-1.46-4.231-3.569-5.187m-6.33 4.855c-1.077 0-2.026-.512-2.026-1.453 0-1.483 1.822-1.934 3.606-1.934.678 0 1.34.045 1.927.173-.422 1.927-1.671 3.215-3.508 3.214Z"/>',
    substack: '<path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>',
    patreon: '<path d="M22.957 7.21c-.004-3.064-2.391-5.576-5.191-6.482-3.478-1.125-8.064-.962-11.384.604C2.357 3.231 1.093 7.391 1.046 11.54c-.039 3.411.302 12.396 5.369 12.46 3.765.047 4.326-4.804 6.068-7.141 1.24-1.662 2.836-2.132 4.801-2.618 3.376-.836 5.678-3.501 5.673-7.031Z"/>',
    x: '<path d="M14.234 10.162 22.977 0h-2.072l-7.591 8.824L7.251 0H.258l9.168 13.343L.258 24H2.33l8.016-9.318L16.749 24h6.993zm-2.837 3.299-.929-1.329L3.076 1.56h3.182l5.965 8.532.929 1.329 7.754 11.09h-3.182z"/>'
  };

  /* Official single-colour accents (Simple Icons). Only used when a caller
     opts in with {color:true}; default rendering inherits the theme's ink. The
     four true-black marks (tiktok, threads, x, patreon) have no useful accent
     in a monochrome UI, so they fall back to currentColor. */
  var BRAND_COLORS = {
    youtube: '#FF0000', tiktok: '', soundcloud: '#FF5500', reddit: '#FF4500',
    instagram: '#E4405F', spotify: '#1DB954', twitch: '#9146FF', vimeo: '#1AB7EA',
    bluesky: '#0285FF', threads: '', substack: '#FF6719', patreon: '', x: '',
    website: ''
  };

  /* Every spelling a source arrives under, normalised to a mark. Keys are
     already stripped to [a-z0-9], the same form brandKey() produces. */
  var BRAND_ALIAS = {
    yt: 'youtube', tt: 'tiktok', sc: 'soundcloud', ig: 'instagram',
    insta: 'instagram', bsky: 'bluesky', twitter: 'x', xcom: 'x',
    web: 'website', site: 'website', personal: 'website', personalsite: 'website',
    homepage: 'website', home: 'website', blog: 'website', link: 'website',
    url: 'website', other: 'website'
  };

  function brandKey(name) {
    var k = String(name == null ? '' : name).toLowerCase().replace(/[^a-z0-9]/g, '');
    return BRAND_ALIAS[k] || k;
  }

  /* One accessor for every source mark. brandIcon('soundcloud'),
     brandIcon('tiktok', {size: 20}), brandIcon('youtube', {color: true}).
     Unknown or 'website' → a globe. aria-hidden like icon(): the mark is
     decorative, the platform name lives in the adjacent text. */
  function brandIcon(name, opts) {
    opts = opts || {};
    var key = brandKey(name);
    var size = opts.size || 18;
    var col = opts.color === true ? (BRAND_COLORS[key] || '') : (opts.color || '');
    var style = col ? ' style="color:' + col + '"' : '';
    if (!BRAND_PATHS[key]) {
      return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
        'fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
        'stroke-linejoin="round" aria-hidden="true"' + style + '>' +
        '<circle cx="12" cy="12" r="9"/><path d="M3 12h18"/>' +
        '<path d="M12 3a15 15 0 0 1 0 18 15 15 0 0 1 0-18Z"/></svg>';
    }
    return '<svg width="' + size + '" height="' + size + '" viewBox="0 0 24 24" ' +
      'fill="currentColor" aria-hidden="true"' + style + '>' + BRAND_PATHS[key] + '</svg>';
  }

  /* Which mark a place wears. The URL host is the honest signal — a place
     names itself "YouTube channel" or a podcast title, but its link always
     points home. Host wins; a clean platform name is the fallback; anything
     else — a personal site, a link hub, a podcast host — takes the globe.
     Matched on the host's tail, so m.youtube.com, samhartman.substack.com and
     podcasters.spotify.com resolve the same as the bare domain. */
  var HOST_BRAND = [
    ['youtube.com', 'youtube'], ['youtu.be', 'youtube'],
    ['tiktok.com', 'tiktok'], ['soundcloud.com', 'soundcloud'],
    ['reddit.com', 'reddit'], ['instagram.com', 'instagram'],
    ['spotify.com', 'spotify'], ['twitch.tv', 'twitch'], ['vimeo.com', 'vimeo'],
    ['bsky.app', 'bluesky'], ['threads.net', 'threads'], ['threads.com', 'threads'],
    ['substack.com', 'substack'], ['patreon.com', 'patreon'],
    ['x.com', 'x'], ['twitter.com', 'x']
  ];
  function brandFromUrl(url) {
    var h = String(url == null ? '' : url)
      .replace(/^[a-z]+:\/\//i, '').replace(/^www\./i, '').split(/[\/?#]/)[0].toLowerCase();
    if (!h) return '';
    for (var i = 0; i < HOST_BRAND.length; i++) {
      var d = HOST_BRAND[i][0];
      if (h === d || h.slice(-(d.length + 1)) === '.' + d) return HOST_BRAND[i][1];
    }
    return '';
  }
  /* A place → its mark key. Reused wherever a source needs a face. */
  function placeBrand(p) {
    if (!p) return 'website';
    var k = brandFromUrl(p.url);
    if (k) return k;
    k = brandKey(p.name);
    return BRAND_PATHS[k] ? k : 'website';
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
    quoteBlock: quoteBlock, track: track, icon: icon, brandIcon: brandIcon,
    brandKey: brandKey, brandFromUrl: brandFromUrl, placeBrand: placeBrand,
    BRAND_COLORS: BRAND_COLORS, rcp: rcp,
    ring: ring, confBand: confBand, CONF_FLOOR: CONF_FLOOR,
    claimRows: claimRows, claimList: claimList, verbBtn: verbBtn,
    STALE_DAYS: STALE_DAYS
  };
})();
