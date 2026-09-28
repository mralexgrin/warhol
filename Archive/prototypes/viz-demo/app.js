/* ==========================================================================
   SCOUT — data-layer demo
   --------------------------------------------------------------------------
   Four surfaces, the marks applied in situ, on the frozen 24-creator cohort.

   THE TOGGLE IS THE POINT. "Marks on / Marks off" strips every graphic from
   the page. Nothing should disappear except the graphics — if a fact leaves
   with them, that mark was the only carrier of a fact and it is wrong.

   The one place the page genuinely changes shape is the fork: marks off and
   §6.2's Pressure lede sentence comes back. That is the whole argument for
   the only block in the layer — it replaces prose rather than adding to it.
   ========================================================================== */
(function () {
  'use strict';

  var W = window.WARHOL, V = window.VIZ, M = window.MARKS;
  var app = document.getElementById('app');

  var state = {
    view: 'report',
    creator: 'c_marguerite',
    watched: 'w_soren',
    marks: true
  };

  /* ------------------------------------------------------------- helpers */
  function h(tag, cls, text) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (text != null) n.textContent = text;
    return n;
  }
  function add(parent) {
    for (var i = 1; i < arguments.length; i++)
      if (arguments[i]) parent.appendChild(arguments[i]);
    return parent;
  }
  /* Every mark goes through here. One switch, one place. */
  function mk(fn) { return state.marks ? fn() : null; }

  function fmtSigned(p) {
    return (p > 0 ? '+' : p < 0 ? '−' : '') + Math.abs(Math.round(p)) + '%';
  }

  /* A row: label left, then value · mark · value right. When marks are off
     the values are untouched, which is the contract. */
  function row(host, label, from, mark, to, softTo) {
    var r = h('div', 'r');
    add(r, h('span', 'lbl', label));
    var v = h('span', 'val');
    if (from) add(v, h('span', 'n', from));
    if (mark) add(v, mark);
    /* The slope IS the connector between the two numbers. Strip it and the
       pair reads as "19% 2.1%" — two levels, not a change, which is exactly
       what §5.2 forbids. So the arrow takes over when the mark is gone. */
    else if (from && to) add(v, h('span', 'arw', '→'));
    if (to) add(v, h('span', 'n', to));
    if (softTo) add(v, h('span', 'soft', softTo));
    add(r, v);
    return add(host, r);
  }
  function plural(n, word) { return n + ' ' + word + (n === 1 ? '' : 's'); }

  function invRow(host, rec, showTally) {
    var g = h('div', 'iv');
    var m = mk(function () { return M.state(rec.state); });
    add(g, m || h('span'));
    add(g, h('span', 'it', rec.item));
    add(g, h('span', 'nt', rec.note));
    /* NO MARK IS EVER THE ONLY CARRIER OF A FACT. With marks off — which is
       also what the email sees — the tally reverts to the words it stands
       for. Building this is what caught it: the first version simply dropped
       the check count, which made the tally load-bearing and broke the rule
       the whole layer rests on. */
    var tk = h('span', 'tk');
    if (showTally && rec.checked) {
      var t = mk(function () { return M.tally(rec.checked); });
      if (t) add(tk, t);
      else tk.textContent = '· ' + plural(rec.checked, 'place');
    }
    add(g, tk);
    return add(host, g);
  }

  function quote(host, text, who, kind) {
    var q = h('div', 'q' + (kind === 'demand' ? ' dm' : ''));
    q.appendChild(document.createTextNode('“' + text + '”'));
    add(q, h('span', 'who', who));
    return add(host, q);
  }

  function sub(c, pillar, key) {
    return (((c.pillars || {})[pillar] || {}).subsignals || [])
      .filter(function (s) { return s.key === key; })[0] || null;
  }
  function ev(c, label) {
    return (c.evidence || []).filter(function (e) { return e.label === label; });
  }

  /* ===================================================== SURFACE 1 — report */
  function reportView() {
    var c = W.byId[state.creator];
    var t = V.traj(c.id);
    var inv = V.inv(c.id);
    var wrap = h('div');

    /* picker */
    var ph = h('div', 'ph');
    add(ph, h('h1', null, 'The report'));
    add(ph, h('p', null,
      'Same structure as §6.2 — Demand → why she\'s on this list → Pressure → Missing, ' +
      'same words, same order. Only the value column changes, plus the fork.'));
    add(wrap, ph);

    var pick = h('div', 'pick');
    V.cast.forEach(function (id) {
      var b = h('button', null, W.byId[id].name);
      b.setAttribute('aria-pressed', id === state.creator);
      b.onclick = function () { state.creator = id; render(); };
      add(pick, b);
    });
    add(wrap, pick);

    var card = h('div', 'panelcard');

    /* header */
    var hd = h('div', 'hd');
    var left = h('div');
    add(left, h('h2', null, c.name));
    add(left, h('p', 'sig', c.handle + ' · ' + c.platforms.map(function (p) {
      return p.name + ' ' + V.fmt(p.followers);
    }).join(' · ')));
    add(hd, left);
    var ring = h('div', 'ring');
    add(ring, h('div', 'n', String(c.score)));
    add(ring, h('div', 'l', 'score'));
    add(hd, ring);
    add(card, hd);

    var meta = h('div', 'meta');
    meta.innerHTML = 'Fits your brief: <b>Food &amp; Home Craft</b> &nbsp;·&nbsp; ' +
      'Recommended play: <b>' + c.play.label + '</b>';
    add(card, meta);
    add(card, h('p', 'thesis', c.headline));

    /* The Trajectory gate, when it fails. Direction is not valence: posting
       less is the BUY signal when the audience is rising and the walk-away
       when it is falling. This is the only place the product asserts
       good/bad about a creator's own trend. */
    if (t && t.gate === 'fail') {
      var gf = h('div', 'gatefail');
      add(gf, h('b', null, 'Not in your drop — Trajectory'));
      gf.appendChild(document.createTextNode(t.gateWhy));
      add(card, gf);
    }

    /* ---- DEMAND. No mark: a count with two quotes, and a graphic for a
       single number is a one-bar bar chart. */
    var d = sub(c, 'gap', 'demand');
    var b1 = h('div', 'blk');
    var bh1 = h('div', 'bh');
    var t1 = h('h3', null, 'Demand');
    add(t1, h('em', null, 'Do people want to buy?'));
    add(bh1, t1);
    add(bh1, h('span', 'pts', '+' + Math.round(c.pillars.gap.score * 0.58)));
    add(b1, bh1);
    if (d) {
      add(b1, h('p', 'claim', d.value.replace('purchase-intent comments',
        'people asked where to buy') + ', in the last 90 days.'));
      ev(c, 'subscribe intent').concat(ev(c, 'purchase intent'))
        .slice(0, 2).forEach(function (e) {
          quote(b1, e.quote, e.platform + ' · ' + e.observedAt, 'demand');
        });
    } else {
      /* §11.3 — comments unreadable resolves to not found: neutral, lowers
         confidence, and stated on the report. Not a zero. */
      add(b1, h('p', 'claim',
        'We could not read the comments on this platform, so we do not know. ' +
        'This lowers confidence; it does not count against her.'));
    }
    add(card, b1);

    /* ---- WHY SHE'S ON THIS LIST. Trajectory: five lines, two marks.
       Reliability is a distribution, "she tried" is an event, and
       distinctiveness is a judgment — none of the three is two dated
       observations, so none of them is a slope. */
    if (t) {
      var b2 = h('div', 'blk');
      var bh2 = h('div', 'bh');
      /* The heading answers "why did the machine pick this person." When the
         gate stopped her it did not pick her, so the heading cannot claim it. */
      add(bh2, h('h3', null, t.gate === 'fail' ? 'What we found' : "Why she's on this list"));
      add(bh2, h('span', 'pts', 'no score'));
      add(b2, bh2);

      var a = t.audience;
      var apct = (a.to - a.from) / a.from * 100;
      row(b2, 'Audience ' + (apct >= 0 ? 'up ' : 'down ') +
          Math.abs(Math.round(apct)) + '% this year',
        V.fmt(a.from), mk(function () { return M.slope(apct, 'trajectory'); }), V.fmt(a.to));

      if (t.citations) {
        row(b2, t.citations.to + ' sites have cited or linked her work',
          String(t.citations.from),
          mk(function () {
            return M.slope((t.citations.to - t.citations.from) / t.citations.from * 100, 'trajectory');
          }),
          String(t.citations.to));
      } else {
        /* #105 — zero is "tells us little here", not "reject". A sentence,
           never a zero-height mark. */
        row(b2, 'Citations and links', null, null, null, 'tells us little here');
      }
      row(b2, 'Her posts land reliably', null, null, null, t.reliability);
      if (t.tried) row(b2, 'She tried to build something', null, null, null, t.tried);
      if (t.distinct) row(b2, t.distinct, null, null, null, 'judgment');
      add(card, b2);
    }

    /* ---- PRESSURE. The fork, or the sentence it replaces. */
    var b3 = h('div', 'blk');
    var bh3 = h('div', 'bh');
    var t3 = h('h3', null, 'Pressure');
    add(t3, h('em', null, 'Will she take the call?'));
    add(bh3, t3);
    add(bh3, h('span', 'pts', c.pillars.strain.score + '/40'));
    add(b3, bh3);

    var f = V.forkFor(c);
    var reading = f && f.audience > 0 && f.posting < 0
      ? 'She is growing faster than she can serve it.'
      : f && f.audience < 0
        ? 'Both are falling. This is someone stepping away, not someone drowning.'
        : 'She is keeping up.';

    if (f && state.marks) {
      var fw = h('div', 'forkwrap');
      add(fw, M.fork(f.audience, f.posting));
      add(fw, h('div', 'read', reading));
      add(b3, fw);
    } else if (f) {
      /* Marks off: §6.2's lede sentence returns. The page loses no fact and
         gains a line of prose. That trade is the whole case for the fork. */
      var fl = h('p', 'forkline');
      fl.textContent = 'Audience ' + fmtSigned(f.audience) + ' this year against posting ' +
        fmtSigned(f.posting) + ' — ' + reading.charAt(0).toLowerCase() + reading.slice(1);
      add(b3, fl);
    }

    var strainQ = ev(c, 'capacity strain')[0];
    if (strainQ) quote(b3, strainQ.quote, 'her · ' + strainQ.observedAt);

    var cad = sub(c, 'strain', 'cadence');
    if (cad) {
      var p = V.postingPct(c);
      var m = String(cad.detail).match(/([\d.]+) posts\/wk trailing.*?([\d.]+) posts\/wk/);
      row(b3, 'Posting ' + Math.abs(Math.round(p)) + '% less than she used to',
        m ? m[2] + '/wk' : null,
        mk(function () { return M.slope(p, 'pressure'); }),
        m ? m[1] + '/wk' : cad.value);
    }
    var rp = V.replies(c);
    if (rp) {
      row(b3, 'Replies fell to almost nothing', rp.from + '%',
        mk(function () { return M.slope((rp.to - rp.from) / rp.from * 100, 'pressure'); }),
        rp.to + '%');
    }
    var ab = ev(c, 'abandonment')[0];
    if (ab) row(b3, 'She tried, it broke', null, null, null, ab.quote);
    add(card, b3);

    /* ---- MISSING. State marks + the tally, taught once per block. */
    var b4 = h('div', 'blk');
    var bh4 = h('div', 'bh');
    var t4 = h('h3', null, 'Missing');
    add(t4, h('em', null, 'Is there anything to buy?'));
    add(bh4, t4);
    add(bh4, h('span', 'pts', '+' + Math.round(c.pillars.gap.score * 0.42)));
    add(b4, bh4);

    if (inv) {
      add(b4, h('div', 'sh', "What she's built"));
      inv.built.forEach(function (rec, i) {
        /* The first row that would use a tally states it in words instead —
           §5.2's move for weight, a clause on the top line only. Ticks below
           are then decoding nothing. */
        if (i === 1) rec = Object.assign({}, rec, { note: rec.note + ' · we looked in ' + rec.checked + ' places' });
        invRow(b4, rec, i > 1);
      });

      var lbl = h('div', 'sh');
      lbl.appendChild(document.createTextNode("What she's switched on — "));
      add(lbl, h('span', null, V.switchedOnLabel(c.id)));
      add(b4, lbl);
      inv.on.forEach(function (rec) { invRow(b4, rec, true); });

      /* Doesn't-apply is NOT a verification state, so it does not get a row
         in a marked list — a blank in the mark column reads as a rendering
         bug. §5.3 asked for an ordinary sentence; here it is. */
      inv.na.forEach(function (n) {
        add(b4, h('p', 'naline',
          'We did not look for a ' + n.item.toLowerCase() + ' — ' + n.why + '.'));
      });
    }
    add(card, b4);

    var vb = h('div', 'verbs');
    ['Promote', 'Watch', 'Pass'].forEach(function (v) { add(vb, h('span', 'vb', v)); });
    add(card, vb);
    add(wrap, card);

    add(wrap, note(
      '<b>Four marks on this page.</b> Toggle them off and read it again — every number, ' +
      'quote and check count stays exactly where it was. The only thing that changes shape ' +
      'is the fork, which turns back into the sentence it replaced. That is the trade: ' +
      'one line of prose out, one graphic in, no facts moved.'));
    return wrap;
  }

  /* ================================================== SURFACE 2 — watchlist */
  function watchlistView() {
    var wrap = h('div');
    var ph = h('div', 'ph');
    add(ph, h('h1', null, 'Watchlist'));
    add(ph, h('p', null,
      'The slope\'s strongest home, and it is not the report. A column of slopes is the ' +
      'only thing that lets you see who is moving without reading every row. §6.3: an ' +
      'alert quotes the trend, never the score delta.'));
    add(wrap, ph);

    var list = h('div', 'wl');
    var head = h('div', 'wlhead');
    add(head, h('span', null, 'Creator'));
    add(head, h('span', null, 'Since you watched'));
    add(head, h('span', null, 'Check-back'));
    add(list, head);

    V.watched.forEach(function (id) {
      var c = W.byId[id], r = V.ROWS[id];
      var rw = h('div', 'wrow');
      var who = h('div', 'who2');
      add(who, h('b', null, c.name));
      add(who, h('span', null, c.handle + ' · ' + V.fmt(c.audience.total)));
      add(rw, who);

      /* A month of movement, so the month scale. At the year scale +6%, +7%
         and flat are three identical lines. */
      var mkcell = h('div', 'mk');
      var s = mk(function () { return M.slope(r.move, r.field, M.CLAMP_MONTH); });
      if (s) add(mkcell, s);
      add(rw, mkcell);
      add(rw, h('div', 'mv', r.moveLabel));

      var due = h('div', 'due' + (/today|overdue/.test(r.due) ? ' now' : ''), r.due);
      add(rw, due);

      rw.style.cursor = 'pointer';
      rw.onclick = function () { state.watched = id; state.view = 'checkback'; render(); };
      add(list, rw);
    });
    add(wrap, list);

    add(wrap, note(
      '<b>Gus has a flat slope and it is the most useful row here.</b> Nothing moved in a ' +
      'month, which is the check-back that produces a prune recommendation. A score-delta ' +
      'column would have said “−1” and told you nothing you could act on.'));
    return wrap;
  }

  /* ================================================= SURFACE 3 — check-back */
  function checkbackView() {
    var c = W.byId[state.watched], k = V.WATCH[state.watched];
    var wrap = h('div');
    var ph = h('div', 'ph');
    add(ph, h('h1', null, 'The check-back'));
    add(ph, h('p', null,
      'Watch is a hypothesis with a date (§5.8), so the check-back grades the bet. It is ' +
      'also the only surface where Scout has a real series — which makes it the only place ' +
      'a sparkline is legal.'));
    add(wrap, ph);

    var pick = h('div', 'pick');
    V.watched.forEach(function (id) {
      var b = h('button', null, W.byId[id].name);
      b.setAttribute('aria-pressed', id === state.watched);
      b.onclick = function () { state.watched = id; render(); };
      add(pick, b);
    });
    add(wrap, pick);

    var card = h('div', 'panelcard');
    var hd = h('div', 'hd');
    var left = h('div');
    add(left, h('h2', null, c.name));
    add(left, h('p', 'sig', 'watched ' + k.since + ', for one month · score ' +
      k.scoreFrom + ' → ' + k.scoreTo));
    add(hd, left);
    add(card, hd);
    add(card, h('p', 'bet', 'Your bet: ' + k.bet + '.'));

    var strip = mk(function () {
      return M.checkStrip(k.days, k.checks, k.since, k.until);
    });
    if (strip) add(card, strip);
    else add(card, h('p', 'bet', 'Scout checked ' + k.checks.length + ' times between ' +
      k.since + ' and ' + k.until + '.'));

    /* WHAT MOVED */
    var l1 = h('div', 'lane');
    add(l1, h('div', 'lh', 'What moved'));
    if (!k.moved.length) {
      var nm = h('p', 'nomove');
      add(nm, h('b', null, 'Nothing did.'));
      nm.appendChild(document.createTextNode(
        ' Five checks over the month and not one of them found a change.'));
      add(l1, nm);
    } else {
      k.moved.forEach(function (m) {
        var mark = mk(function () {
          /* Many observations → a sparkline. Two → a slope. The form says
             how well we know it. Month scale here too — this is one watch
             window, not a year. */
          return m.series ? M.spark(m.series, m.field)
                          : M.slope(m.pct, m.field, M.CLAMP_MONTH);
        });
        row(l1, m.label, m.from, mark, m.to + (m.tail ? '  ' + m.tail : ''));
      });
    }
    add(card, l1);

    /* WHAT HELD — not the weaker lane. "Still no newsletter" after a month
       is not absence of news, it is the hypothesis surviving. Capped at four
       rows; never collapsed by default, because collapsing is how it becomes
       the weaker lane again. */
    var l2 = h('div', 'lane held');
    add(l2, h('div', 'lh', 'What held'));
    k.held.slice(0, 4).forEach(function (rec, i) {
      invRow(l2, {
        item: rec.item, note: rec.note,
        state: rec.checked ? 'verified_absent' : 'present',
        checked: rec.checked
      }, i > 0);
    });
    if (k.held.length > 4)
      add(l2, h('p', 'naline', 'and ' + (k.held.length - 4) + ' more'));
    add(card, l2);

    if (k.flat) {
      var fl = h('div', 'gatefail');
      add(fl, h('b', null, 'A flat month'));
      fl.appendChild(document.createTextNode(k.flat));
      add(card, fl);
    }

    var vb = h('div', 'verbs');
    ['Keep watching', 'Promote', 'Pass'].forEach(function (v) { add(vb, h('span', 'vb', v)); });
    add(card, vb);
    add(wrap, card);

    add(wrap, note(
      '<b>This surface also rides in email (§9), and email gets none of this.</b> ' +
      'Gmail and Outlook strip inline SVG, so the digest carries the sentences and a link. ' +
      'Which is exactly why no mark here is the only carrier of a fact — toggle them off ' +
      'and you are reading the email.'));
    return wrap;
  }

  /* ================================================== SURFACE 4 — decisions */
  function decisionsView() {
    var D = V.DECISIONS;
    var D1 = 'var(--viz-d1)', D2 = 'var(--viz-d2)', D3 = 'var(--viz-d3)';
    var wrap = h('div');
    var ph = h('div', 'ph');
    add(ph, h('h1', null, 'Decisions'));
    add(ph, h('p', null,
      '§12\'s trends screen, reframed as the monthly re-check §5.4 already demands — ' +
      '“the threshold is read off a result, not chosen.” An instrument, not a scoreboard. ' +
      'This is week two, which is why half of it says “not enough yet.”'));
    add(wrap, ph);

    /* 1 — what happened */
    var m1 = h('div', 'mod');
    add(m1, h('h3', null, '1 · What happened'));
    add(m1, h('p', 'why',
      'Zero-result days are counted as quiet days, never plotted as a dip — §5.4 says ' +
      'they are a feature, and a chart that reads them as failure teaches the desk the ' +
      'opposite of the doc. Expired-undecided is drawn hollow, because it is not a decision.'));
    var mx = Math.max.apply(null, D.months.map(function (r) { return r.p + r.w + r.x + r.e; }));
    D.months.forEach(function (r) {
      var cr = h('div', 'crow');
      add(cr, h('span', 'k', r.m));
      var mid = h('span');
      var st = mk(function () {
        return M.stack([{ v: r.p, c: D1 }, { v: r.w, c: D2 },
          { v: r.x, c: D3 }, { v: r.e, c: D3, hollow: true }], mx, 420);
      });
      if (st) add(mid, st);
      else mid.textContent = r.p + ' promoted · ' + r.w + ' watched · ' + r.x +
        ' passed · ' + r.e + ' expired';
      add(cr, mid);
      add(cr, h('span', 't', (r.p + r.w + r.x + r.e) + ' · ' + r.quiet + ' quiet days'));
      add(m1, cr);
    });
    if (state.marks) {
      var lg = h('div', 'lg');
      [[D1, 'Promoted'], [D2, 'Watched'], [D3, 'Passed'], [null, 'Expired undecided']]
        .forEach(function (s) {
          var e = h('span');
          e.innerHTML = '<i style="background:' + (s[0] || 'transparent') +
            (s[0] ? '' : ';border:1.5px solid ' + D3) + '"></i>' + s[1];
          add(lg, e);
        });
      add(m1, lg);
    }
    add(wrap, m1);

    /* 2 — is the bar right */
    var m2 = h('div', 'mod');
    add(m2, h('h3', null, '2 · Is the bar right'));
    add(m2, h('p', 'why',
      'Score band against what the desk did. This is the only module serving a commitment ' +
      'the PRD already made, so it ships first. The knob itself stays on the admin panel — ' +
      'a slider beside this chart would turn a monthly discipline into a daily habit.'));
    var bmx = Math.max.apply(null, D.bands.map(function (r) { return r.p + r.w + r.x; }));
    D.bands.forEach(function (r) {
      var cr = h('div', 'crow');
      add(cr, h('span', 'k', r.b));
      var mid = h('span');
      var st = mk(function () {
        return M.stack([{ v: r.p, c: D1 }, { v: r.w, c: D2 }, { v: r.x, c: D3 }], bmx, 420);
      });
      if (st) add(mid, st);
      else mid.textContent = r.p + ' promoted · ' + r.w + ' watched · ' + r.x + ' passed';
      add(cr, mid);
      add(cr, h('span', 't', Math.round(r.x / (r.p + r.w + r.x) * 100) + '% passed'));
      add(m2, cr);
    });
    add(m2, h('p', 'hint',
      'The desk passes 88% of the 78–82 band. Read: the bar is a point or two low.'));
    add(wrap, m2);

    /* 3 — why they said no */
    var m3 = h('div', 'mod');
    add(m3, h('h3', null, '3 · Why they said no'));
    add(m3, h('p', 'why', 'Pass-reason mix, ranked. One series, so no legend.'));
    var rmx = D.reasons[0][1];
    D.reasons.forEach(function (r) {
      var cr = h('div', 'crow');
      cr.style.gridTemplateColumns = '168px 1fr auto';
      var k = h('span', 'k', r[0]);
      k.style.textAlign = 'left';
      add(cr, k);
      var mid = h('span');
      var st = mk(function () { return M.stack([{ v: r[1], c: D2 }], rmx, 300); });
      if (st) add(mid, st);
      add(cr, mid);
      add(cr, h('span', 't', String(r[1])));
      add(m3, cr);
    });
    add(m3, h('p', 'hint', D.reasonNote));
    add(wrap, m3);

    /* 4 — the outcome band */
    var o = D.outcomes;
    var m4 = h('div', 'mod');
    add(m4, h('h3', null, '4 · Outcomes'));
    add(m4, h('p', 'why',
      'Outcomes need a year. Rather than hide that, the screen carries its own ' +
      'incompleteness as a designed state — the same ethic as “Scout found nothing worth ' +
      'your time today.” It fills in as calls land.'));
    var ost = mk(function () {
      return M.stack([{ v: o.contacted, c: D1 }, { v: o.replied, c: D2 },
        { v: o.signed, c: D3 }, { v: o.pending, c: D3, hollow: true }],
        o.contacted + o.replied + o.signed + o.pending, 420);
    });
    if (ost) add(m4, ost);
    add(m4, h('p', 'hint', o.contacted + ' contacted · ' + o.replied + ' replied · ' +
      o.signed + ' signed. Outcomes take about a year.'));
    add(wrap, m4);

    /* held back */
    var m5 = h('div', 'mod waiting');
    add(m5, h('h3', null, 'Held back until there is enough'));
    add(m5, h('p', 'why',
      'No cut is drawn below its minimum n. A 100% keep-rate on n = 2 is the analytics ' +
      'version of a fabricated absence, so the screen says what it is waiting for instead.'));
    var tb = document.createElement('table');
    var tr = document.createElement('tr');
    ['Module', 'Answers', 'Status'].forEach(function (x) {
      var th = document.createElement('th');
      th.textContent = x;
      tr.appendChild(th);
    });
    tb.appendChild(tr);
    D.notEnough.forEach(function (r) {
      var t2 = document.createElement('tr');
      var c1 = document.createElement('td');
      c1.innerHTML = '<b>' + r.module + '</b>';
      var c2 = document.createElement('td');
      c2.textContent = r.answers;
      var c3 = document.createElement('td');
      c3.className = 'st';
      c3.textContent = r.status;
      t2.appendChild(c1); t2.appendChild(c2); t2.appendChild(c3);
      tb.appendChild(t2);
    });
    m5.appendChild(tb);
    add(wrap, m5);

    add(wrap, note(
      '<b>This screen ships after the hackathon.</b> On a curated cohort with no decision ' +
      'history it would be a chart of invented numbers presented as evidence the machine ' +
      'works — the one thing §7\'s disclosure discipline exists to prevent. The empty state ' +
      'is worth drawing now, because it is what a real week-two user sees.'));
    return wrap;
  }

  function note(html) {
    var n = h('div', 'note');
    n.innerHTML = html;
    return n;
  }

  /* --------------------------------------------------------------- shell */
  var VIEWS = {
    report:    { label: 'The report',   fn: reportView },
    watchlist: { label: 'Watchlist',    fn: watchlistView },
    checkback: { label: 'Check-back',   fn: checkbackView },
    decisions: { label: 'Decisions',    fn: decisionsView }
  };

  function render() {
    var scrollY = window.scrollY;
    app.textContent = '';

    var bar = h('div', 'bar');
    var inbar = h('div', 'in');
    var wm = h('div', 'wm', 'Scout');
    add(wm, h('span', null, 'data layer'));
    add(inbar, wm);

    var nav = document.createElement('nav');
    Object.keys(VIEWS).forEach(function (k) {
      var b = h('button', null, VIEWS[k].label);
      if (k === state.view) b.setAttribute('aria-current', 'page');
      b.onclick = function () { state.view = k; window.scrollTo(0, 0); render(); };
      add(nav, b);
    });
    add(inbar, nav);
    add(inbar, h('div', 'spacer'));

    var mt = h('button', 'tgl');
    mt.innerHTML = '<span class="dotlead"></span>' + (state.marks ? 'Marks on' : 'Marks off');
    mt.setAttribute('aria-pressed', state.marks);
    mt.title = 'Strip every graphic. Nothing but the graphics should disappear.';
    mt.onclick = function () { M.enabled = state.marks = !state.marks; render(); };
    add(inbar, mt);

    var th = h('button', 'tgl', 'Dark');
    th.onclick = function () {
      var d = document.documentElement.getAttribute('data-theme') === 'dark';
      document.documentElement.setAttribute('data-theme', d ? 'light' : 'dark');
      render();
    };
    th.textContent = document.documentElement.getAttribute('data-theme') === 'dark'
      ? 'Light' : 'Dark';
    add(inbar, th);

    add(bar, inbar);
    add(app, bar);

    var main = document.createElement('main');
    main.id = 'main';
    add(main, VIEWS[state.view].fn());
    add(app, main);

    window.scrollTo(0, scrollY);
  }

  render();
})();
