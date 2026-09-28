# Warhol Scout — design notes

## Direction

**An origination desk publishes a trade tip sheet.** Warhol Scout is an A&R desk for creators, so it
is built as the thing an A&R desk reads: the two-ink weekly trade paper — *Cash Box*, *CMJ*, *The
Gavin Report* — that told a few professionals who was about to break, before the public knew. The
drop is a **chart**: ranked positions, momentum bullets, re-entry flags. The Scout Report is a
**one-sheet**. The backtest is a **back issue** on aged stock, with its own date in the masthead.

This refuses the two things the category ships: the analytics dashboard (sidebar, KPI tiles,
sparklines, confidence rings) and the elegant broadsheet. A trade sheet is cheap, loud and
functional — heavy black rules, condensed gothic caps, tabular figures, quoted reaction set in a
text roman. Press black plus one trade red on cool newsprint; red means *momentum*, never danger.

## Load-bearing decisions

**1. The card is the argument, not the summary.** Every chart entry puts the strongest quoted
purchase-intent comment beside the monetization inventory and its three verification marks, with the
strain quote — the timing — directly under it. That adjacency *is* the product, so it appears at
every altitude, and the Scout can kill a name without opening it. The Scout Report leads with **The
Case** in prose assembled only from observed facts; metrics follow in a rail.

**2. Verification state is notation, not colour.** Three drawn marks — solid square (verified
absent), hollow-with-dot (present), diagonal hatch (not found) — always paired with the word, plus a
printed key atop every chart. Confidence prints beside the score as a ten-tick scale reading "not
part of the score". Format Fit is a stamp *below* the rule that sums the arithmetic, labelled as
contributing nothing. Engine is declared per line: rule roman, LLM italic serif, plus a tag.

**3. The rewind is honest, and says so.** The back issue changes the paper, the volume number and the
section title; Watchlist, Promoted counts and Run a Name are withheld rather than projected
backwards, each with a written reason. Decisions are read-only when rewound.

## Left out

Mandate editing, briefing export, user switching, browser push, and persistence — decisions live in
a session overlay, so the demo resets on reload. Mobile below tablet is unstyled beyond not
breaking. Seed data is byte-identical to `_shared`.
