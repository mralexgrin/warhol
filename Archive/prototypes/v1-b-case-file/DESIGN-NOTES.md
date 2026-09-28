# Warhol Scout - design notes

**Direction: a case file, not a dashboard.** Every metric-ranking competitor already
owns the dashboard aesthetic, and the thesis is that those tools are blind to this
signal. So the interface is built around the quoted comment, not the number. The
reference is a wire desk: hairlines, no chrome, one argument per screen.

## Load-bearing decisions

**1. Three type registers, and the type *is* the engine label.** Quoted human speech is
set in a reading serif at 19 to 20px. Chrome is IBM Plex Sans. Every number, provenance
line and engine tag is IBM Plex Mono. A crawler observation (`kind:'signal'`) therefore
drops out of quotation marks entirely and renders as mono under a "Machine observation"
label, because it is not a voice. Sub-signal values follow the same rule: rule outputs
are mono, LLM judgments are serif italic. That encodes rule-vs-LLM before the reader
reaches the badge. Fallback is Georgia / system-ui / Menlo, which keeps the three roles
offline.

**2. Every card is "quote beside empty inventory," literally.** The drop card is a
two-column split: strongest purchase-intent comment and a capacity-strain caption on
the left, monetization inventory on the right. That is the persuasive unit rendered as
a layout rather than described in copy. Score sits in a small mono block paired with
confidence in an adjacent cell that is never merged with it.

**3. Verification state is three shapes, not three colours.** Filled block = verified
absent, outline = present, hatched amber = not found. Colour alone collapses under a
projector; shape does not. The card summary is composed from the tally and always names
the inconclusive lines as the reason confidence is not 100%.

**4. Rewinding changes the whole machine, not one screen.** At `2024-01-15` the paper
cools, a persistent band appears, the watchlist empties, desk activity says so out
loud, and Run a Name switches itself off because there is no honest way to fetch a
creator as they were. Format Fit sits in a dashed container with no bar and the words
"Contributes 0 points" so it cannot read as a third pillar.

## Left out deliberately

Briefing export and the digest email (artifacts, not surfaces). A mandates CRUD screen: the brief renders read-only in the drop header instead. No icon library: the no-CDN
rule blocks one and hand-rolled SVG is worse than none, so marks are CSS shapes.
Decisions are session-only.

Verified: `node --check` clean, zero console errors, zero WCAG AA text failures across
nine view/theme combinations, and confirmed executing from `file://` in headless Chrome.
