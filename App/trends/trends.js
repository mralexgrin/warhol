/* ============================================================
   TRENDS — the recommended tab, plus the four directions it came from.

   Every number on every screen is counted off the real scan record in
   engine/data. Nothing is simulated except the one panel in direction D
   that says, on screen, that it is a sample.

   The thesis all of them share: a trend is a claim about time, and Scout's
   own reports refuse to call one before 90 days ("not_established — our
   two looks are 1 day apart, the trend needs 90"). The tab named Trends
   cannot be the one screen in the application that forgets that. So it
   opens as a census that states its own age, and the time-shaped claims
   are visibly unearned rather than drawn through two points.

   THE RECOMMENDATION (view ●) is operator-first and map-led: the age
   meter as standing header, the map as the hero, the ledger directly
   beneath it as the map's own key, the pairs that travel together, and
   the countdown last. A is not the tab — A is B with the names thrown
   away. C is not in the tab at all: it answers a different question and
   is stronger as its own Demand screen.
   ============================================================ */
(function () {
  'use strict';

  var T = window.TRENDS;
  var GATE = 90;                       /* engine/lib/score.js trajectory gate */
  var DAYS = T.days.length;

  /* ------------------------------------------------------------- helpers */
  function esc(s) {
    return String(s == null ? '' : s).replace(/[&<>"']/g, function (c) {
      return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c];
    });
  }
  function n(x) { return Number(x).toLocaleString('en-US'); }

  /* Same signature as ui.js's U.icon — including the explicit 18×18, without
     which an inline SVG defaults to 300×150 and shoves the rail label out. */
  function icon(p, size) {
    var s = size || 18;
    return '<svg width="' + s + '" height="' + s + '" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" ' +
      'aria-hidden="true">' + p + '</svg>';
  }
  var I = {
    drop: '<path d="M4 5h16M4 12h16M4 19h10"/>',
    watch: '<path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>',
    passed: '<path d="M3 6h18M3 12h18M3 18h10"/><path d="m16 16 5 5M21 16l-5 5"/>',
    run: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
    admin: '<path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/><path d="M19.4 15a1.6 1.6 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.6 1.6 0 0 0-1.8-.3 1.6 1.6 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1A1.6 1.6 0 0 0 9 19.4a1.6 1.6 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.6 1.6 0 0 0 .3-1.8 1.6 1.6 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1A1.6 1.6 0 0 0 4.6 9a1.6 1.6 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.6 1.6 0 0 0 1.8.3H9a1.6 1.6 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.6 1.6 0 0 0 1 1.5 1.6 1.6 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.6 1.6 0 0 0-.3 1.8V9a1.6 1.6 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.6 1.6 0 0 0-1.5 1Z"/>',
    trends: '<path d="M3 20h18"/><path d="M6 20V11M11 20V5M16 20v-6M21 20v-9"/>',
    ask: '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z"/>',
    lock: '<rect x="4.5" y="10.5" width="15" height="9.5" rx="2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/>'
  };

  /* Human labels. The engine's `points_at` keys are internal; the screen
     says what a person asked for, in the words the product already uses. */
  var ASK_LABEL = {
    store: 'Somewhere to buy',
    membership: 'A way to join',
    youtube_channel: 'More of it, longer',
    unspecified: 'Wanted something — we could not tell what'
  };

  /* Read a points_at count by name rather than by rank — the ordering of
     T.demandPointsAt is data, and an index would silently relabel itself the
     first morning a different ask leads. */
  function asked(key) {
    var hit = T.demandPointsAt.filter(function (d) { return d[0] === key; })[0];
    return hit ? hit[1] : 0;
  }

  /* --------------------------------------------------------------- rail */
  document.getElementById('rail').innerHTML = [
    ['drop', "Today's drop", '8'], ['watch', 'Watchlist', '3'],
    ['passed', 'Passed', '5'], ['run', 'Run a name', '']
  ].map(function (r) {
    return '<button class="rnav" type="button" disabled><span class="ic">' + icon(I[r[0]]) +
      '</span><span class="tx">' + r[1] + '</span>' +
      (r[2] ? '<span class="pill">' + r[2] + '</span>' : '') + '</button>';
  }).join('') +
    '<button class="rnav" type="button" aria-current="page"><span class="ic">' + icon(I.trends) +
    '</span><span class="tx">Trends</span></button>' +
    '<button class="rnav" type="button" disabled><span class="ic">' + icon(I.admin) +
    '</span><span class="tx">Admin</span></button>';

  /* --------------------------------------------------- shared computation */
  /* Items ordered by how often they are confirmed absent, and creators ordered
     on the bit-pattern of what they are missing — the top item is the highest
     bit, so creators missing the same combination land next to each other and
     the map resolves into blocks. A plain count-sort scatters a creator who
     has the top item but nothing else into the middle of those who have
     neither. Computed once: both the map and the ledger read the same order. */
  var ITEMS = T.inventory.slice().sort(function (a, b) { return b.absent - a.absent; });
  function pattern(c) {
    return ITEMS.reduce(function (k, it, i) {
      return k + (c.inv[it.label] === 'verified_absent' ? Math.pow(2, ITEMS.length - 1 - i) : 0);
    }, 0);
  }
  var ORDER = T.rows.slice().sort(function (a, b) {
    return pattern(b) - pattern(a) || b.score - a.score;
  });

  /* ------------------------------------------------ shared page furniture */
  function head(h1, lede, thesis) {
    var pct = Math.min(100, DAYS / GATE * 100);
    return '<header class="tr-head">' +
      '<h1 class="tr-h1">' + h1 + '</h1>' +
      '<p class="tr-lede">' + lede + '</p>' +
      '<p class="tr-thesis">' + thesis + '</p>' +
      '<div class="age">' +
      '<div class="age-tx"><b>Day ' + DAYS + ' of ' + GATE + '.</b></div>' +
      '<div class="age-bar" role="img" aria-label="' + DAYS + ' of ' + GATE + ' days observed">' +
      '<i style="width:' + pct.toFixed(2) + '%"></i><u></u></div>' +
      '<div class="age-tx">' + n(T.creators) + ' creators read · ' + n(T.totals.checks) +
      ' checks · first look ' + T.days[0][0] + '</div>' +
      '</div></header>';
  }

  function legend(items) {
    return '<div class="legend">' + items.map(function (it) {
      return '<span class="lg"><span class="sw sw--' + it[0] + '"></span>' + esc(it[1]) + '</span>';
    }).join('') + '</div>';
  }

  function lockedChip(txt) {
    return '<span class="locked">' + icon(I.lock, 12) + esc(txt) + '</span>';
  }

  function stack(it, tot) {
    var p = it.present / tot * 100, a = it.absent / tot * 100, u = it.unknown / tot * 100;
    return '<span class="stack" role="img" aria-label="' + it.present + ' built, ' + it.absent +
      ' missing, ' + it.unknown + ' unreadable">' +
      '<i class="s-p" style="width:' + p.toFixed(2) + '%" data-tip="Built|' + it.present + ' of ' + tot + '"></i>' +
      '<i class="s-a" style="width:' + a.toFixed(2) + '%" data-tip="Confirmed missing|' + it.absent + ' of ' + tot + '"></i>' +
      '<i class="s-u" style="width:' + u.toFixed(2) + '%" data-tip="Could not tell|' + it.unknown + ' of ' + tot + '"></i>' +
      '</span>';
  }

  /* ===================================================== SECTIONS ======= */

  /* --- the map: every creator, every gap, nothing aggregated away -------- */
  function secMap(heading, sub) {
    var rows = ITEMS.map(function (it, ri) {
      var cells = ORDER.map(function (c, ci) {
        var s = c.inv[it.label] || 'none';
        var st = s === 'present' ? 'present' : s === 'verified_absent' ? 'absent' :
          s === 'not_found' ? 'unknown' : 'none';
        var word = st === 'present' ? 'has it' : st === 'absent' ? 'no ' + it.label.toLowerCase() :
          st === 'unknown' ? 'could not tell' : 'not looked for';
        return '<span class="map-c" data-s="' + st + '" style="--i:' + (ri * 6 + ci * 0.4) + '" ' +
          'data-tip="@' + esc(c.id) + '|' + esc(it.label) + ' — ' + word + '"></span>';
      }).join('');
      return '<div class="map-row">' +
        '<span class="map-lbl">' + esc(it.label) + '</span>' +
        '<span class="map-cells">' + cells + '</span>' +
        '<span class="map-n"><b>' + it.absent + '</b> missing</span>' +
        '</div>';
    }).join('');

    return '<section class="sec">' +
      '<h2 class="sec-h">' + heading + '</h2>' +
      '<p class="sec-s">' + sub + '</p>' +
      legend([['c1', 'Built'], ['c2', 'Confirmed missing'], ['unk', 'Could not tell']]) +
      '<div class="panelbox"><div class="scrollx"><div class="map">' + rows +
      '<div class="map-axis"><span>← most missing' +
      '<span style="float:right">fewest missing →</span></span></div>' +
      '</div></div>' +
      '<p class="tnote">' + T.creators + ' columns · ' + ITEMS.length + ' rows · ' +
      n(T.creators * ITEMS.length) + ' cells, each one a check that ran against a named place. ' +
      'A hatched cell is a place that would not answer, and it is drawn differently from an absence ' +
      'because it is a different fact.</p>' +
      '<div class="tbl-tog"><button class="btn btn--soft" type="button" data-tbl="map">Read it as a table</button></div>' +
      '<div id="map-tbl" hidden></div>' +
      '</div></section>';
  }

  /* --- the ledger: the same data, counted. In the tab this is the map's key */
  function secLedger(heading, sub) {
    var rows = ITEMS.map(function (it, i) {
      var tot = it.present + it.absent + it.unknown;
      return '<tr style="--i:' + i + '">' +
        '<td><span class="led-nm">' + esc(it.label) +
        '<span class="led-why">looked for on every one of the ' + T.creators + '</span></span></td>' +
        '<td class="n">' + it.present + '</td>' +
        '<td class="n"><span class="led-big">' + it.absent + '</span>' +
        '<span class="led-of">/ ' + T.creators + '</span></td>' +
        '<td class="n">' + it.unknown + '</td>' +
        '<td>' + stack(it, tot) + '</td>' +
        '<td>' + lockedChip('day ' + DAYS + ' of ' + GATE) + '</td>' +
        '</tr>';
    }).join('');

    return '<section class="sec">' +
      '<h2 class="sec-h">' + heading + '</h2>' +
      '<p class="sec-s">' + sub + '</p>' +
      '<div class="panelbox"><div class="scrollx"><table class="led">' +
      '<thead><tr><th>What</th><th class="n">Built</th><th class="n">Missing</th>' +
      '<th class="n">Could not tell</th><th>Across the ' + T.creators + '</th><th>Movement</th></tr></thead>' +
      '<tbody>' + rows + '</tbody></table></div>' +
      '<p class="tnote">Movement stays shut until the record is old enough to move. ' +
      'Scout will not print a direction off ' + DAYS + ' days; the trajectory gate in the reports is ' + GATE +
      '. On day ' + GATE + ' this column starts carrying a real change, and until then it says which day it is.</p>' +
      '</div></section>';
  }

  /* --- gaps that travel together ---------------------------------------- */
  function secPairs() {
    var topPair = T.pairs[0];
    var maxPair = T.pairs[0][1];
    var pairs = T.pairs.slice(0, 7).map(function (p, i) {
      return '<div class="pair" style="--i:' + i + '" data-tip="' + esc(p[0]) + '|' + p[1] +
        ' creators are missing both">' +
        '<span class="pair-l">' + esc(p[0]) + '</span>' +
        '<span class="pair-b"><i style="width:' + (p[1] / maxPair * 100).toFixed(1) + '%"></i></span>' +
        '<span class="pair-n"><b>' + p[1] + '</b></span></div>';
    }).join('');

    return '<section class="sec">' +
      '<h2 class="sec-h">Gaps that travel together</h2>' +
      '<p class="sec-s">How often two things are missing off the same creator. ' +
      '<b>' + esc(topPair[0]) + '</b> is the pattern: ' + topPair[1] + ' of ' + T.creators +
      ' have neither, which is one conversation, not two.</p>' +
      '<div class="panelbox"><div class="pairs">' + pairs + '</div>' +
      '<p class="tnote">Counted off confirmed absences only. A pair where either side was unreadable ' +
      'is not counted, which is why these run lower than multiplying the two column totals would suggest.</p>' +
      '</div></section>';
  }

  /* --- the countdown ---------------------------------------------------- */
  function secGate() {
    return '<section class="sec">' +
      '<h2 class="sec-h">Why Movement is shut</h2>' +
      '<div class="gate">' +
      '<span class="gate-n">' + (GATE - DAYS) + '</span>' +
      '<div class="gate-b">' +
      '<p><b>days before this screen can call a direction.</b> Scout already refuses this on every ' +
      'report it writes — ' + (T.trajectory.not_established || 0) + ' of ' + T.creators +
      ' currently read <i>“no trend yet — our two looks are ' + (DAYS - 1) +
      (DAYS - 1 === 1 ? ' day' : ' days') + ' apart, the trend needs ' + GATE + '.”</i></p>' +
      '<p>A Trends tab that drew a line through two points would be the first screen in the ' +
      'application to claim something the engine would not sign. Until the gate opens, this ' +
      'is a census with a countdown on it — and every day it fills in one column, in public, ' +
      'which is its own kind of proof that the thing is running.</p>' +
      '</div></div></section>';
  }

  function secUnlocks() {
    return '<section class="sec">' +
      '<h2 class="sec-h">What day ' + GATE + ' unlocks</h2>' +
      '<p class="sec-s">Named here so the empty column is a promise rather than an absence.</p>' +
      '<div class="panelbox"><div class="scrollx"><table class="led">' +
      '<thead><tr><th>The claim</th><th>What it needs</th><th>Status</th></tr></thead><tbody>' +
      [['Is a gap opening or closing?', 'the same creator, read ' + GATE + ' days apart'],
      ['Are audiences asking for more, or less?', 'ask counts on a stable creator set'],
      ['Is the market moving off a platform?', 'surface presence, re-read over time'],
      ['Is the engine finding more than it used to?', 'escalation rate, day over day']]
        .map(function (r, i) {
          return '<tr style="--i:' + i + '"><td><span class="led-nm">' + r[0] + '</span></td>' +
            '<td><span class="led-why">' + r[1] + '</span></td>' +
            '<td>' + lockedChip('opens day ' + GATE) + '</td></tr>';
        }).join('') +
      '</tbody></table></div></div></section>';
  }

  /* --- the read, and what it cost --------------------------------------- */
  function secCost() {
    return '<section class="sec">' +
      '<h2 class="sec-h">And what it cost to know that</h2>' +
      '<p class="sec-s">The read itself, so the numbers above carry their own provenance.</p>' +
      '<div class="panelbox"><div class="scrollx"><table class="led">' +
      '<thead><tr><th>Measure</th><th class="n">Count</th><th>What it means</th></tr></thead><tbody>' +
      [['Observations', T.totals.observations, 'individual things read off a page'],
      ['Checks', T.totals.checks, 'a named place, asked whether a thing was there'],
      ['Comments read', T.totals.comments, 'audience writing, read in full'],
      ['Escalated', T.totals.escalated, 'worth a closer look, out of ' + T.creators],
      ['Entered a drop', T.totals.drop, 'cleared score, confidence and fit']]
        .map(function (r, i) {
          return '<tr style="--i:' + i + '"><td><span class="led-nm">' + r[0] + '</span></td>' +
            '<td class="n"><span class="led-big">' + n(r[1]) + '</span></td>' +
            '<td><span class="led-why">' + r[2] + '</span></td></tr>';
        }).join('') +
      '</tbody></table></div></div></section>';
  }

  /* --- the demand material, held out of the tab -------------------------- */
  function askOrder() {
    /* Round-robin across what the ask points at. Sorted by count, the wall is
       thirteen consecutive store asks and the legend names two colours that
       never appear — the mix is the finding, so the mix has to be visible. */
    var byKind = {};
    T.asks.forEach(function (a) {
      if (a.at === 'unspecified') return;
      (byKind[a.at] = byKind[a.at] || []).push(a);
    });
    var queues = Object.keys(byKind).sort(function (x, y) { return byKind[y].length - byKind[x].length; });
    var out = [], guard = 0;
    while (queues.some(function (k) { return byKind[k].length; }) && guard++ < 200) {
      queues.forEach(function (k) { if (byKind[k].length) out.push(byKind[k].shift()); });
    }
    return out;
  }

  function card(a, i, isHero) {
    var sw = a.at === 'store' ? 'c1' : a.at === 'membership' ? 'c2' : 'c3';
    var q = a.q.length > (isHero ? 210 : 160) ? a.q.slice(0, isHero ? 210 : 160).trim() + '…' : a.q;
    return '<figure class="ask' + (isHero ? ' ask--hero' : '') + '" style="--i:' + i + '">' +
      '<blockquote class="ask-q">“' + esc(q) + '”</blockquote>' +
      '<figcaption class="ask-f">' +
      '<span class="ask-tag"><span class="sw sw--' + sw + '"></span>' + esc(ASK_LABEL[a.at] || a.at) + '</span>' +
      '<span class="ask-h">under @' + esc(a.id) + '</span></figcaption></figure>';
  }

  function secFunnel() {
    /* Four counts three orders of magnitude apart. Drawing them as four bars on
       one scale makes the last two invisible; drawing them as four equal blocks
       is a lie about magnitude. So the bar encodes the only thing that is both
       true and legible at every step — what survived from the step above it. */
    var steps = [
      ['Things read off their pages', T.totals.observations, 'posts, links, captions, bios', 'seq3'],
      ['Comments read in full', T.totals.comments, 'their audience, writing', 'seq4'],
      ['Somebody asking for something', T.askCount, 'and it does not exist yet', 'c2'],
      ['Asking to buy', asked('store'), 'a store, a part, a thing to own', 'c1']
    ];
    var funnel = steps.map(function (s, i) {
      var prev = i ? steps[i - 1][1] : 0;
      var share = i ? s[1] / prev * 100 : 100;
      var lbl = i ? (share < 1 ? share.toFixed(1) : Math.round(share)) + '% of the line above' : 'everything read';
      return '<div class="fn" style="--i:' + i + '">' +
        '<span class="fn-t">' + esc(s[0]) + '<span>' + esc(s[2]) + '</span></span>' +
        '<span class="fn-bar"><i class="fn-' + s[3] + '" style="width:' +
        Math.max(share, 0.6).toFixed(2) + '%"></i></span>' +
        '<span class="fn-s">' + lbl + '</span>' +
        '<span class="fn-n">' + n(s[1]) + '</span></div>';
    }).join('');

    return '<section class="sec">' +
      '<h2 class="sec-h">From ' + n(T.totals.observations) + ' things read, ' + T.askCount + ' asks</h2>' +
      '<p class="sec-s">Each step is a real count off the same ' + T.creators + ' creators. ' +
      'The drop from the second bar to the third is the filter that matters: ' +
      '<b>most comments are not a request.</b></p>' +
      '<div class="funnel">' + funnel + '</div></section>';
  }

  function secWall() {
    var asks = askOrder();
    return '<section class="sec">' +
      '<h2 class="sec-h">In their own words</h2>' +
      '<p class="sec-s">Sorted by what the ask points at. ' +
      'These are the sentences that turn a missing store from a checkbox into a reason to call.</p>' +
      legend([['c1', ASK_LABEL.store], ['c2', ASK_LABEL.membership], ['c3', ASK_LABEL.youtube_channel]]) +
      '<div class="askgrid">' + card(asks[0], 0, true) +
      asks.slice(1, 13).map(function (a, i) { return card(a, i + 1, false); }).join('') + '</div>' +
      '<p class="tnote">' + T.askCount + ' asks total across the record. ' +
      asked('unspecified') + ' of them read as wanting something the engine could not name, ' +
      'and those are counted but not quoted — an unattributable want is not evidence.</p>' +
      '</section>';
  }

  /* --- the 90-day field -------------------------------------------------- */
  var previewing = false;

  function secDriftChart() {
    var real = T.days.map(function (d) {
      var day = d[0];
      var set = T.rows.filter(function (r) { return r.day === day; });
      return {
        day: day, scanned: set.length,
        esc: set.filter(function (r) { return r.escalated; }).length,
        drop: set.filter(function (r) { return r.drop; }).length
      };
    });

    var cols = [];
    for (var i = 0; i < GATE; i++) {
      if (i < real.length) cols.push(real[i]);
      else if (previewing) cols.push(sample(i, real));
      else cols.push(null);
    }
    var max = cols.reduce(function (m, c) { return c ? Math.max(m, c.scanned) : m; }, 1);

    var bars = cols.map(function (c, i) {
      if (!c) return '<span class="dcol is-void" style="--i:' + i + '" ' +
        'data-tip="Day ' + (i + 1) + '|not observed yet"></span>';
      var h = function (v) { return (v / max * 100).toFixed(1) + '%'; };
      return '<span class="dcol" style="--i:' + i + '" data-tip="' + esc(c.day) + '|' +
        c.scanned + ' read · ' + c.esc + ' escalated · ' + c.drop + ' into a drop">' +
        '<i class="d-scan" style="height:' + h(c.scanned - c.esc) + '"></i>' +
        '<i class="d-esc" style="height:' + h(c.esc - c.drop) + '"></i>' +
        '<i class="d-drop" style="height:' + h(c.drop) + '"></i></span>';
    }).join('');

    return '<section class="sec">' +
      '<h2 class="sec-h">Every day the engine has run</h2>' +
      '<p class="sec-s">' + real.map(function (r) {
        return r.day + ': ' + r.scanned + ' read, ' + r.esc + ' escalated, ' + r.drop + ' into a drop';
      }).join(' · ') + '.</p>' +
      legend([['c1', 'Into a drop'], ['c2', 'Escalated'], ['unk', 'Not observed yet']]) +
      (previewing ? '<div class="unsafe" style="margin:0 0 var(--s4)"><b>Sample, not data.</b> ' +
        'Days 3–' + GATE + ' below are drawn to show the shape a filled record takes. ' +
        'They are not measurements and would never ship inside Scout.</div>' : '') +
      '<div class="panelbox"><div class="scrollx">' +
      '<div class="drift">' + bars + '</div>' +
      '<div class="drift-x"><span>' + T.days[0][0] + ' · first look</span>' +
      '<span>day ' + GATE + ' · the gate opens</span></div></div>' +
      '<div class="tbl-tog"><button class="btn btn--soft" type="button" data-preview>' +
      (previewing ? 'Hide the sample' : 'Show the shape a full record takes') + '</button></div>' +
      '</div></section>';
  }

  /* The one simulated thing on the board, and it is labelled on screen every
     time it renders. Deterministic — no randomness, so two people looking at
     the board see the same picture. */
  function sample(i, real) {
    var base = real[real.length - 1];
    var ramp = 0.85 + (i / GATE) * 0.7;                  /* the desk gets faster */
    var week = 1 + Math.sin(i * 2 * Math.PI / 7) * 0.14; /* weekends are lighter */
    var slow = 1 + Math.sin(i / 17) * 0.11;
    var scanned = Math.max(8, Math.round(base.scanned * ramp * week * slow));
    var e = Math.round(scanned * (0.62 + Math.sin(i / 13) * 0.06));
    return { day: 'day ' + (i + 1), scanned: scanned, esc: e, drop: Math.round(e * 0.28) };
  }

  /* ================================================ ● THE RECOMMENDATION = */
  function tab() {
    var top = ITEMS[0];
    var callable = ORDER.filter(function (c) { return pattern(c) > 0; }).length;

    return head(
      'Where the market is short',
      'One column per creator, one row per thing they could have built, and the count underneath it. ' +
      T.creators + ' creators read so far; ' + callable + ' of them are confirmed missing at least one thing ' +
      'the audience has a name for.',
      '<b>The map is the screen and the table is its key.</b> Every cell is one creator and one ' +
      'check that ran against a named place — hover any of them and it says whose it is, so a ' +
      'pattern up here is a call list down there, not a statistic.'
    ) +

      secMap(
        'Every creator, every gap',
        'Sorted on what each creator is missing, so the market resolves into blocks rather than a scatter. ' +
        'The wide left edge is the callable half.'
      ) +

      secLedger(
        'The same map, counted',
        'Read this as the key to the picture above. ' +
        '<b>' + esc(top.label) + ' is the gap of the market:</b> ' + top.absent + ' of ' + T.creators +
        ' confirmed without one, against ' + top.unknown + ' the engine could not read either way — ' +
        'and “could not tell” is not “does not have.”'
      ) +

      secPairs() +
      secGate() +

      /* The demand material is deliberately not here. It answers a different
         question and it is stronger as its own screen — saying so on the tab
         is more useful than hiding the decision. */
      '<section class="sec">' +
      '<div class="handoff">' +
      '<span class="handoff-ic">' + icon(I.ask, 20) + '</span>' +
      '<div class="handoff-b">' +
      '<h2 class="handoff-h">' + T.askCount + ' people asked for something that does not exist yet</h2>' +
      '<p>' + n(T.totals.comments) + ' comments read, ' + asked('store') +
      ' of them asking to buy. That is the other half of this record and it does not belong on ' +
      'this screen: this tab is about what the market is missing, and those quotes are about what ' +
      'its audience wants. They deserve their own tab.</p>' +
      '<button class="btn btn--soft" type="button" data-d="3">See it as its own screen →</button>' +
      '</div></div></section>';
  }

  /* ===================================== the four it was assembled from == */
  function ledger() {
    var top = ITEMS[0];
    var askRows = T.demandPointsAt.map(function (d, i) {
      var pct = Math.round(d[1] / T.askCount * 100);
      return '<tr style="--i:' + (i + 8) + '">' +
        '<td><span class="led-nm">' + esc(ASK_LABEL[d[0]] || d[0]) + '</span></td>' +
        '<td class="n">' + d[1] + '</td>' +
        '<td class="n">' + pct + '%</td>' +
        '<td>' + lockedChip('day ' + DAYS + ' of ' + GATE) + '</td></tr>';
    }).join('');

    return head(
      'What the record says today',
      T.inventory.length + ' things a creator can have built. Scout looked for every one of them on every one of the ' +
      T.creators + ' creators it has read, and wrote down which it could confirm, which it confirmed were not there, ' +
      'and which it could not see either way.',
      '<b>The third column is the honest one.</b> “Could not tell” is not “does not have.” ' +
      'Scout only counts a thing missing when it looked in a named place and the place answered.'
    ) +
      secLedger('Built, missing, unreadable',
        'Sorted by how often the thing is confirmed absent. ' +
        '<b>' + esc(top.label) + ' is the gap of the market:</b> ' + top.absent + ' of ' + T.creators +
        ' were confirmed without one, against ' + top.unknown + ' the engine could not read either way.') +

      '<section class="sec">' +
      '<h2 class="sec-h">What the audience asked for</h2>' +
      '<p class="sec-s">' + n(T.totals.comments) + ' comments read across the ' + T.creators +
      '. ' + T.askCount + ' of them were somebody asking for something that does not exist yet. ' +
      '<b>' + asked('store') + ' asked to buy.</b></p>' +
      '<div class="panelbox"><div class="scrollx"><table class="led">' +
      '<thead><tr><th>The ask</th><th class="n">Times</th><th class="n">Share</th><th>Movement</th></tr></thead>' +
      '<tbody>' + askRows + '</tbody></table></div></div></section>' +

      secCost();
  }

  function gapmap() {
    return head(
      'The shape of the gap',
      'One column per creator, one row per thing they could have built. ' +
      T.creators + ' columns wide, sorted so the creators with the most missing sit on the left.',
      '<b>Read the left edge.</b> Nothing here is aggregated away — every cell is one creator ' +
      'and one confirmed check, and hovering a cell says whose it is.'
    ) +
      secMap('Every creator, every gap',
        'The staircase down the middle is the market: it thins to the right, ' +
        'and the creators worth calling are the ones stacked at the wide end.') +
      secPairs();
  }

  function theAsk() {
    return head(
      'What people are asking for',
      'Scout reads the comments to decide whether a gap is wanted. Those comments are the only place ' +
      'in the record where the market speaks in its own words — so this direction leads with them ' +
      'instead of with our count of them.',
      '<b>Every quote is verbatim and attributed.</b> Nothing is paraphrased, clustered into a theme, ' +
      'or summarised by a model; the grouping is the engine’s own <code>points_at</code>, which is ' +
      'the thing the comment named.'
    ) + secFunnel() + secWall();
  }

  function drift() {
    return head(
      'The record, over time',
      'One column per day the engine ran, from the first look to the day a trend becomes sayable. ' +
      'Two columns are drawn. Eighty-eight are not.',
      '<b>This is the direction designed for month six, and it says so on day two.</b> ' +
      'The empty field is not a loading state and not an error — it is the size of what Scout ' +
      'does not yet know, drawn at the same scale as what it does.'
    ) + secDriftChart() + secGate() + secUnlocks();
  }

  /* ================================================== board plumbing === */
  var DIRECTIONS = [
    { k: '●', name: 'The tab', render: tab, rec: true },
    { k: 'A', name: 'The ledger', render: ledger },
    { k: 'B', name: 'The gap map', render: gapmap },
    { k: 'C', name: 'The ask', render: theAsk },
    { k: 'D', name: 'The drift', render: drift }
  ];
  var current = 0;

  document.querySelector('.dirs').innerHTML = DIRECTIONS.map(function (d, i) {
    return '<button class="dir' + (d.rec ? ' dir--rec' : '') + '" type="button" data-d="' + i +
      '" aria-pressed="' + (i === 0) + '"' + (d.rec ? ' title="The recommendation"' : '') + '>' +
      '<b>' + d.k + '</b>' + esc(d.name) + '</button>';
  }).join('');
  document.querySelector('.board-src').textContent =
    T.creators + ' creators · ' + n(T.totals.checks) + ' checks · real scan output';

  var main = document.getElementById('main');

  function paint(i, announce) {
    current = i;
    main.innerHTML = DIRECTIONS[i].render();
    main.scrollTop = 0;
    Array.prototype.forEach.call(document.querySelectorAll('.dirs .dir'), function (b) {
      b.setAttribute('aria-pressed', String(+b.dataset.d === i));
    });
    main.classList.remove('is-entering');
    void main.offsetWidth;
    main.classList.add('is-entering');
    if (announce) document.getElementById('status').textContent =
      DIRECTIONS[i].name + ' — ' + DIRECTIONS[i].k;
  }

  document.addEventListener('click', function (e) {
    var d = e.target.closest('[data-d]');
    if (d) { paint(+d.dataset.d, true); return; }

    var p = e.target.closest('[data-preview]');
    if (p) { previewing = !previewing; paint(current, false); return; }

    var t = e.target.closest('[data-tbl]');
    if (t) {
      var box = document.getElementById('map-tbl');
      if (!box.innerHTML) box.innerHTML = mapTable();
      box.hidden = !box.hidden;
      t.textContent = box.hidden ? 'Read it as a table' : 'Hide the table';
      return;
    }

    var th = e.target.closest('[data-theme-toggle]');
    if (th) {
      var dark = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', dark ? 'light' : 'dark');
      th.textContent = dark ? 'Dark' : 'Light';
    }
  });

  function mapTable() {
    return '<table class="tbl"><caption class="sr-only">Inventory state per item</caption>' +
      '<thead><tr><th>Item</th><th class="n">Built</th><th class="n">Confirmed missing</th>' +
      '<th class="n">Could not tell</th></tr></thead><tbody>' +
      ITEMS.map(function (it) {
        return '<tr><td>' + esc(it.label) + '</td><td class="n">' + it.present +
          '</td><td class="n">' + it.absent + '</td><td class="n">' + it.unknown + '</td></tr>';
      }).join('') + '</tbody></table>';
  }

  /* ---- hover layer. Every mark that carries a number can be asked what it is. */
  var tip = document.getElementById('tip');
  document.addEventListener('pointerover', function (e) {
    var el = e.target.closest('[data-tip]');
    if (!el) return;
    var parts = el.dataset.tip.split('|');
    tip.innerHTML = '<b>' + esc(parts[0]) + '</b><span>' + esc(parts[1] || '') + '</span>';
    tip.classList.add('on');
    tip.setAttribute('aria-hidden', 'false');
    move(e);
  });
  document.addEventListener('pointermove', function (e) {
    if (tip.classList.contains('on')) move(e);
  });
  document.addEventListener('pointerout', function (e) {
    if (e.target.closest('[data-tip]')) {
      tip.classList.remove('on');
      tip.setAttribute('aria-hidden', 'true');
    }
  });
  function move(e) {
    var w = tip.offsetWidth, h = tip.offsetHeight;
    var x = Math.min(window.innerWidth - w - 12, e.clientX + 14);
    var y = e.clientY - h - 12;
    tip.style.left = Math.max(8, x) + 'px';
    tip.style.top = (y < 8 ? e.clientY + 18 : y) + 'px';
  }

  /* left/right arrows move between views when the toggle row has focus */
  document.addEventListener('keydown', function (e) {
    if (!e.target.closest('.dirs')) return;
    var last = DIRECTIONS.length;
    if (e.key === 'ArrowRight') { paint((current + 1) % last, true); document.querySelector('.dirs [data-d="' + current + '"]').focus(); }
    if (e.key === 'ArrowLeft') { paint((current + last - 1) % last, true); document.querySelector('.dirs [data-d="' + current + '"]').focus(); }
  });

  paint(0, false);
})();
