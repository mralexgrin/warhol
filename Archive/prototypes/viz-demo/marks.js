/* ==========================================================================
   SCOUT — THE MARK VOCABULARY
   --------------------------------------------------------------------------
   Classic script. Sets window.MARKS. No modules, no fetch. Runs from file://.

   Six marks. Every one emits STATIC SVG — no runtime, no hover dependency,
   nothing that only exists on :hover.

   IN-APP ONLY. Gmail and Outlook strip inline SVG, so §9's digest and
   check-back emails carry the sentence and a link. The governing rule that
   falls out of that, and the one that matters most here:

       NO MARK IS EVER THE ONLY CARRIER OF A FACT.

   Which is why every render function below takes the sentence too, and why
   MARKS.enabled = false makes the whole layer disappear without losing a
   single fact from the page. That toggle is the honest test of whether any
   of this earns its place.

   THE READING RULE — form declares evidence resolution:
       one observation   → a mark      (dot)
       two observations  → a slope     (slope, fork)
       many observations → a sparkline (spark)  ← watched creators only

   A GRAPHIC ONLY EVER DRAWS A FACT. not-found, doesn't-apply and
   tells-us-little-here are sentences. Never a zero-height mark, because a
   zero bar claims "we measured zero," which is a different claim.

   COLOUR — the v4 field jobs, unchanged:
       teal   the gap is real   → Demand, Missing
       butter the timing        → Pressure
       text   (not a field)     → Trajectory. It carries no score and is not
                                  a pillar; a field colour would promote it.
       lilac  Scout about itself → the Decisions ramp
   ========================================================================== */
(function () {
  'use strict';

  var NS = 'http://www.w3.org/2000/svg';

  function el(t, a) {
    var n = document.createElementNS(NS, t);
    for (var k in a) n.setAttribute(k, a[k]);
    return n;
  }
  function svg(w, h) {
    var s = el('svg', { width: w, height: h, viewBox: '0 0 ' + w + ' ' + h,
      'aria-hidden': 'true', focusable: 'false' });
    s.style.overflow = 'visible';
    s.style.flex = '0 0 auto';
    return s;
  }
  function clamp(v, lo, hi) { return Math.max(lo, Math.min(hi, v)); }

  /* ---------------------------------------------------------------- fields */
  var FIELD = {
    demand:     'var(--viz-teal)',
    missing:    'var(--viz-teal)',
    pressure:   'var(--viz-butter)',
    trajectory: 'var(--viz-ink)'
  };

  /* ------------------------------------------------------- D6 · the slope */
  /* Two dots and a connector. Hollow left is the past, filled right is now,
     so direction survives greyscale, print and forced-colors. The rise
     encodes sign and rough size, CLAMPED — past the clamp the mark stops
     encoding and the number beside it takes over. Clamped slopes are visibly
     identical rather than subtly different, which is what keeps it honest.

     THE CLAMP IS A PROPERTY OF THE QUESTION, NOT THE ROW.
       ±60% — a year of change. "Audience up 38% this year."
       ±15% — a month of change. "Audience +6% since you watched."
     Building the watchlist is what forced this: at the year scale, +6%, +7%
     and flat render as three identical near-horizontal lines, on the exact
     surface where a column of slopes was supposed to earn its place.

     It is NEVER normalised against the other rows on screen. That would make
     the mark change when the list changes, which is the recolour-on-filter
     mistake in another channel. The cost of two scales is that the same angle
     means different things on different surfaces — mitigated because the
     number is always beside the mark, so the mark is never the unit. */
  var CLAMP = 60;          /* a year  */
  var CLAMP_MONTH = 15;    /* a month */

  function slope(pct, field, scale) {
    var W = 48, H = 26, x1 = 7, x2 = 41, cy = 13;
    var rise = clamp(pct / (scale || CLAMP), -1, 1) * 10;
    var y1 = cy + rise / 2, y2 = cy - rise / 2;
    var s = svg(W, H);
    s.style.color = FIELD[field] || FIELD.trajectory;
    s.appendChild(el('line', { x1: x1, y1: y1, x2: x2, y2: y2, stroke: 'currentColor',
      'stroke-width': 2, 'stroke-linecap': 'round' }));
    s.appendChild(el('circle', { cx: x1, cy: y1, r: 3.5, fill: 'var(--panel)',
      stroke: 'currentColor', 'stroke-width': 2 }));
    s.appendChild(el('circle', { cx: x2, cy: y2, r: 3.5, fill: 'currentColor' }));
    return s;
  }

  /* ------------------------------------------------ D1 · the single mark */
  function dot(field) {
    var s = svg(48, 26);
    s.style.color = FIELD[field] || FIELD.trajectory;
    s.appendChild(el('circle', { cx: 24, cy: 13, r: 3.5, fill: 'currentColor' }));
    return s;
  }

  /* ------------------------------------------------- D13 · the sparkline */
  /* LEGAL ONLY ON A WATCHED CREATOR. The dots are the point — they are the
     checks Scout actually ran. Never extended past the last observation. */
  function spark(vals, field) {
    var W = 64, H = 26, pad = 4;
    var lo = Math.min.apply(null, vals), hi = Math.max.apply(null, vals);
    var span = (hi - lo) || 1;
    var pts = vals.map(function (v, i) {
      return [pad + i * (W - pad * 2) / (vals.length - 1),
              H - pad - (v - lo) / span * (H - pad * 2)];
    });
    var s = svg(W, H);
    s.style.color = FIELD[field] || FIELD.trajectory;
    s.appendChild(el('polyline', {
      points: pts.map(function (p) { return p[0] + ',' + p[1]; }).join(' '),
      fill: 'none', stroke: 'currentColor', 'stroke-width': 2,
      'stroke-linejoin': 'round', 'stroke-linecap': 'round' }));
    pts.forEach(function (p, i) {
      var last = i === pts.length - 1;
      s.appendChild(el('circle', { cx: p[0], cy: p[1], r: last ? 3 : 2,
        fill: last ? 'currentColor' : 'var(--panel)',
        stroke: 'currentColor', 'stroke-width': 1.5 }));
    });
    return s;
  }

  /* ------------------------------------------------------ D7 · the fork */
  /* Two slopes in one frame, both indexed to the creator's OWN prior
     baseline = 100 — already how §5.2 defines cadence decay, so the shared
     unit is the model's and no second axis is needed.

     It replaces §6.2's Pressure lede ("Audience up 38% this year — she's
     growing faster than she can handle") rather than adding to the page.
     That is what earns it the only block in the layer.

     BOTH LIMBS REQUIRED. A one-limbed fork claims a relationship it cannot
     see — caller falls back to the sentence. See app.js. */
  function fork(audiencePct, postingPct) {
    var W = 250, H = 76, x1 = 10, x2 = 118, cy = 34, SC = 24;
    var ay = cy - clamp(audiencePct / CLAMP, -1, 1) * SC;
    var oy = cy - clamp(postingPct / CLAMP, -1, 1) * SC;

    /* De-collide the labels without moving the data. When the limbs converge
       the labels are the only thing that gives; the dots stay where the
       numbers put them and a hairline leader reconnects the pair. */
    var MIN = 15, lay = ay, loy = oy, nudged = false;
    if (Math.abs(lay - loy) < MIN) {
      var mid = (lay + loy) / 2, aUp = lay <= loy;
      lay = mid + (aUp ? -MIN / 2 : MIN / 2);
      loy = mid + (aUp ? MIN / 2 : -MIN / 2);
      nudged = true;
    }
    lay = clamp(lay, 10, H - 8);
    loy = clamp(loy, 10, H - 8);

    var s = svg(W, H);
    s.appendChild(el('line', { x1: x1, y1: cy, x2: x2 + 5, y2: cy,
      stroke: 'var(--viz-grid)', 'stroke-width': 1 }));

    function limb(y, ly, colour, label, val) {
      s.appendChild(el('line', { x1: x1, y1: cy, x2: x2, y2: y, stroke: colour,
        'stroke-width': 2, 'stroke-linecap': 'round' }));
      s.appendChild(el('circle', { cx: x2, cy: y, r: 3.5, fill: colour }));
      if (nudged)
        s.appendChild(el('line', { x1: x2 + 4, y1: y, x2: x2 + 9, y2: ly - 3.5,
          stroke: colour, 'stroke-width': 1, opacity: 0.55 }));
      var t = el('text', { x: x2 + 12, y: ly, fill: colour, 'font-size': 11.5,
        'font-weight': 600, 'font-family': 'var(--ui)' });
      t.textContent = val + ' ' + label;
      s.appendChild(t);
    }
    function pct(v) {
      return (v > 0 ? '+' : v < 0 ? '−' : '') + Math.abs(Math.round(v)) + '%';
    }
    /* "posting", never "output" — §6.2's word. Decision #100. */
    limb(ay, lay + 4, FIELD.trajectory, 'audience', pct(audiencePct));
    limb(oy, loy + 4, FIELD.pressure,   'posting',  pct(postingPct));

    s.appendChild(el('circle', { cx: x1, cy: cy, r: 2.5, fill: 'var(--viz-grid)' }));
    var b = el('text', { x: x1 - 3, y: H - 6, fill: 'var(--text-3)',
      'font-size': 10, 'font-family': 'var(--ui)' });
    b.textContent = 'her own baseline';
    s.appendChild(b);
    return s;
  }

  /* ----------------------------------------------------- D8 · the tally */
  /* N ticks for "we looked in N places." Each tick is a real check with a URL
     behind it in the check record. Taught in words once per block, on the
     first row that would use one — §5.2's move for weight, a clause on the
     top line only. Past 12 nobody counts, so it reverts to the number. */
  var TALLY_MAX = 12;

  function tally(n) {
    if (!n) return null;
    if (n > TALLY_MAX) return null;          /* caller writes the words */
    var s = svg(n * 5, 11);
    s.style.color = FIELD.missing;
    for (var i = 0; i < n; i++)
      s.appendChild(el('rect', { x: i * 5, y: 1, width: 2, height: 9, rx: 1,
        fill: 'currentColor' }));
    return s;
  }

  /* ----------------------------------------------- D9 · the state marks */
  /* Three shapes, ONE SIZE, so nothing implies weight (#92 — weight is
     order). 'na' returns null: doesn't-apply gets no mark, and the row it
     belongs to is lifted out of the list entirely (see app.js), because a
     blank in a marked column reads as a rendering bug and §5.3 asked for an
     ordinary sentence. */
  function state(kind) {
    if (kind === 'na') return null;
    var s = svg(13, 13);
    s.style.color = FIELD.missing;
    if (kind === 'present')
      s.appendChild(el('circle', { cx: 6.5, cy: 6.5, r: 4.5, fill: 'currentColor' }));
    else if (kind === 'verified_absent')
      s.appendChild(el('circle', { cx: 6.5, cy: 6.5, r: 4, fill: 'none',
        stroke: 'currentColor', 'stroke-width': 2 }));
    else
      s.appendChild(el('circle', { cx: 6.5, cy: 6.5, r: 4, fill: 'none',
        stroke: 'currentColor', 'stroke-width': 2, 'stroke-dasharray': '2.4 2.4' }));
    return s;
  }

  /* --------------------------------------------- the check strip (watch) */
  /* The dots are the days Scout actually looked. "We watched" is a claim
     until you can see the checks — the check record's argument, applied to
     time. In-app only. */
  function checkStrip(days, marks, from, to) {
    var W = 320, H = 30, x1 = 6, x2 = W - 6, cy = 13;
    var s = svg(W, H);
    /* Scales down UNIFORMLY inside a narrow column — no preserveAspectRatio
       "none" here, because that would stretch the check dots into ellipses
       and the dots are the whole point of this mark. */
    s.removeAttribute('width');
    s.removeAttribute('height');
    s.style.width = '100%';
    s.style.maxWidth = W + 'px';
    s.style.height = 'auto';
    s.appendChild(el('line', { x1: x1, y1: cy, x2: x2, y2: cy,
      stroke: 'var(--viz-grid)', 'stroke-width': 1 }));
    marks.forEach(function (d) {
      s.appendChild(el('circle', { cx: x1 + (d / days) * (x2 - x1), cy: cy, r: 3,
        fill: FIELD.trajectory }));
    });
    [[x1, from, 'start'], [x2, to, 'end']].forEach(function (p) {
      s.appendChild(el('line', { x1: p[0], y1: cy - 5, x2: p[0], y2: cy + 5,
        stroke: 'var(--viz-grid)', 'stroke-width': 1 }));
      var t = el('text', { x: p[0], y: cy + 17, fill: 'var(--text-3)',
        'font-size': 10, 'font-family': 'var(--ui)', 'text-anchor': p[2] });
      t.textContent = p[1];
      s.appendChild(t);
    });
    return s;
  }

  /* ------------------------------------------ D15/16 · the decision bar */
  /* Promote > Watch > Pass is ORDERED BY CONVICTION, so it is one hue
     stepping against the surface, not three identities. That also dodges a
     real collision: --ok and --teal are byte-identical #63C4AF in Alloy
     dark, so a chart using v4's green Promote would be saying "the gap is
     real" about a decision.

     Steps validated with the palette validator against both surfaces; the
     light end had to be darkened twice to clear the 2:1 floor on white.
     The rule the reader learns is stable across themes:
         MOST CONVICTION = MOST CONTRAST AGAINST THE SURFACE.

     Expired-undecided is drawn HOLLOW — D10, hollow always means "this
     didn't happen." Same treatment as an absent inventory item. */
  function stack(segs, total, width) {
    var H = 16, GAP = 2, x = 0;
    var s = svg(width, H);
    s.removeAttribute('width');
    s.setAttribute('preserveAspectRatio', 'none');
    s.style.width = '100%';
    s.style.maxWidth = width + 'px';
    s.style.height = H + 'px';
    segs.forEach(function (seg) {
      var w = (seg.v / total) * width - GAP;
      if (w > 0.5) {
        var r = el('rect', { x: x, y: 0, width: w, height: H, rx: 3 });
        if (seg.hollow) {
          r.setAttribute('fill', 'var(--panel)');
          r.setAttribute('stroke', seg.c);
          r.setAttribute('stroke-width', 1.5);
        } else r.setAttribute('fill', seg.c);
        s.appendChild(r);
      }
      x += (seg.v / total) * width;
    });
    return s;
  }

  window.MARKS = {
    enabled: true,          /* the honest test — flip it and read the page */
    FIELD: FIELD,
    CLAMP: CLAMP,
    CLAMP_MONTH: CLAMP_MONTH,
    TALLY_MAX: TALLY_MAX,
    slope: slope,
    dot: dot,
    spark: spark,
    fork: fork,
    tally: tally,
    state: state,
    checkStrip: checkStrip,
    stack: stack
  };
})();
