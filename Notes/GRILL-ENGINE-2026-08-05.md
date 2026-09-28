# Warhol engine — grilling, resolved for review

Run independently 5 Aug 2026 against [PRD-WARHOL-ENGINE.md](../Product/PRD-WARHOL-ENGINE.md).
24 questions, dependency-ordered. Every one has options and a recommendation.
Nothing here is applied to the code — this is for you to strike through.

**Three answers are load-bearing and everything downstream hangs off them:**
Q2 (first-party read), Q9 (fail safe or fail open), Q12 (day-one drop entry).

---

## Branch A — two gates are currently unreachable

*Found by arithmetic, not by opinion. Resolve these before anything else — they
make the other branches moot.*

### Q1. Confidence can never reach its own floor. Fix which end?

Max achievable confidence is **0.545**; the floor is **0.60**. Five of eleven
inventory items are presence-only — they can return *present* or *not found* and
never *verified absent* — so they permanently sit unresolved in the denominator.
No creator can ever clear the gate.

| | |
|---|---|
| a | Drop the floor to 0.5 |
| b | Compute confidence over **falsifiable checks only**; list the rest as "we can't see this" |
| c | Buy/wire the APIs that make the other five falsifiable |
| d | Mark them *doesn't apply* |

**→ (b).** Confidence means *share of checks resolved*; a check we cannot perform
is not a check we ran. Denominator becomes the six items where absence is
structurally possible (YouTube, newsletter, store, membership, podcast, website),
max returns to 1.0, and the floor means something again. **(d) is wrong** — §4.3
defines *doesn't apply* as "we didn't need to check," and overloading it to mean
"we couldn't" breaks the one word carrying that distinction. **(a) is a plaster**
on a denominator that is miscounting.

*Cost:* the report must name the presence-only checks explicitly, or dropping them
from confidence looks like hiding them.

### Q2. ⚑ The first-party read requirement — keep it strict?

Today: no item can be *verified absent* unless we successfully read one of the
creator's own pages. Instagram is robots-blocked, so a creator who is
Instagram-only produces nothing.

| | |
|---|---|
| a | Keep strict |
| b | Relax to "any two independent surfaces read" |
| c | Tier it: strict for tier-1 absences, relaxed for tier-2/3 |
| d | Drop it; rely on the reachability ratio alone |

**→ (a), keep strict.** It is the rule that makes *"we looked where she points"*
different from *"we looked in the usual places,"* and it is the cheapest possible
insurance against the failure §5.3 says is unrecoverable. **(c) is the tempting
one and I'd argue against it** — the tier-1 absences are precisely the ones that
carry the report, so relaxing anywhere else buys little and muddies one rule into
two.

*If you overrule to (c):* the relaxed tier must still print "we did not read any
of their own pages" on the line, or the report silently gets weaker.

### Q3. Should "we looked in N places" count doors that opened, or all doors asked?

Advisory endpoints (Ko-fi, Etsy — 403 to everyone) are excluded from the maths.

| | |
|---|---|
| a | Count only doors that opened (today) |
| b | Count all doors asked |
| c | Count opened, and append "· 2 wouldn't answer" to the line |

**→ (c).** (a) is honest but omits something a GM would want to know; (b)
overstates. The extra clause costs six words and pre-empts the only good question
someone can ask about that line.

### Q4. Is "verified absent" still the right internal name?

The claim is *absent from these named places, on this date* — never *absent from
the internet*. Chipotle's store is on chipotle.com; the engine says "not there, we
looked in 3 places" and is right about the 3.

| | |
|---|---|
| a | Keep `verified_absent` as the data-model name (interface already says "not there · we looked in N places") |
| b | Rename to `absent_from_checked` |

**→ (a).** §4.6 already puts verification states in the data model and out of the
interface, and the interface wording is doing the honest work. A rename buys
precision nobody reads.

---

## Branch B — widening the search

*Depends on Q2. All of these raise the ceiling on how often absence can be earned.*

### Q5. Add first-party site crawling to the probe set?

Today the engine checks five store platforms and five newsletter platforms. It
never looks at the creator's own domain, where most real stores and newsletters
actually live.

| | |
|---|---|
| a | Yes — fetch their site, look for cart/subscribe/checkout markers |
| b | No — platform probes only |
| c | Yes, but presence-only (can confirm a store, never used to deny one) |

**→ (a), and it is the single biggest accuracy win available.** It is one fetch of
a page they publish themselves — the most first-party surface there is. It
converts the largest current source of false *not found* into real answers.

*Consequence:* raises the requiredPlaces bar for store/newsletter, because "we
looked in 4 places including her own site" is a much stronger claim than 4
platform guesses.

### Q6. Wire the YouTube Data API next?

Keyed, official, free tier. Gives comments (§11.3's clean source), per-video
publish dates, and view counts.

| | |
|---|---|
| a | Yes, next build |
| b | Later — after discovery |
| c | Skip; captions are enough |

**→ (a), and it is more urgent than it looks.** I assumed posting cadence could be
derived from a single profile fetch. **Checked: it cannot** — both TikTok and
YouTube hydrate their video grids by XHR after load, so a static fetch returns
zero timestamps. The YouTube API is therefore the only legitimate route to
cadence-over-time on a first look, which makes it the unlock for Q12 as well as
for Demand.

### Q7. Reddit API too?

**→ Yes, but after YouTube.** Same cleanliness, much lower coverage for the
creators Paradium hunts. Cheap once the pattern exists.

### Q8. Buy Socialblade-class audience history?

Trajectory needs a 12-month audience trend the engine cannot observe on day one.

| | |
|---|---|
| a | Buy it |
| b | Wait — accumulate our own history |
| c | Approximate from platform totals (YouTube total views ÷ channel age) |

**→ (b), consistent with §11.2's "don't buy the data yet."** **(c) is actively
dangerous** — a ratio of lifetime totals is not a trend, and dressing it as one
manufactures exactly the signal §5.3 forbids. Revisit only if Q12 is answered in a
way that makes waiting intolerable.

---

## Branch C — presence, identity, and which way to fail

### Q9. ⚑ An unconfirmed hit blocks a gap. Fail safe or fail open?

`mkbhd.substack.com` is a live Substack belonging to a stranger. Today that blocks
the newsletter gap, so a real lead dies quietly.

| | |
|---|---|
| a | Keep blocking (fail safe — never claim a gap that isn't one) |
| b | Don't block (fail open — score the gap, flag the doubt) |
| c | Block, but surface it as a decision: "we found a Substack at her handle. Hers?" |
| d | Resolve it: check whether the thing links back to her |

**→ (d) first, then (a) as the fallback.** Most of this is mechanically
resolvable: fetch the candidate and look for a link back to a platform we already
confirmed is hers. That converts a guess into a check, which is the whole method.
Where it stays ambiguous, keep blocking — a false gap is unrecoverable per §5.3, a
missed lead costs one name.

**(c) is wrong for a different reason:** it puts a verification question in front
of a Scout, and §6.1 says the card is for deciding about a creator, not for
adjudicating our plumbing.

### Q10. Should an unconfirmed hit lower confidence?

**→ Yes.** It is exactly the state confidence exists to express. Currently it does
not, which overstates certainty on the one line most likely to be wrong.

### Q11. How much confidence before asserting "these accounts are one person"?

§14.3 and §14.9, unresolved in the Scout PRD, and the engine currently just merges
platforms by matching handle string.

| | |
|---|---|
| a | Handle match only (today) |
| b | Handle match **plus** a link between the two surfaces |
| c | Probabilistic score with a threshold |

**→ (b).** Deterministic, cheap, defensible, and states itself in words the way
§6.2 wants. **(c) reintroduces the percentage §6.2 deliberately removed.** Where
(b) fails, do not merge — report the platforms separately and say so.

*Consequence:* audience totals get smaller and more honest. Some creators will
stop looking large.

---

## Branch D — the day-one problem

*Depends on Q6. This is the branch I'd most like you to overrule me on.*

### Q12. ⚑ Nothing can enter the drop on a first look. Accept it?

Two independent blockers: Trajectory returns `not_established` (needs two looks 90
days apart), and day-one max score is **82 against a threshold of 78** — so a
creator needs 95% of everything available.

| | |
|---|---|
| a | Accept — the drop is for creators we've seen twice; first look produces a report only |
| b | Make Trajectory a soft gate for the first 90 days |
| c | Seed history from a vendor (see Q8) |
| d | Score Pressure out of what is knowable and scale it to 40 |
| e | Maturity-aware threshold: lower bar on first look |

**→ (a), with the re-check cadence in Q13 as the price.** It is the only option
that does not invent a signal. **(d) is the seductive wrong answer** — scaling 22
up to 40 asserts that the two signals we cannot see would have looked like the two
we can, which is a fabricated trend wearing a normalisation.

**But I hold this weakly, and here is the honest cost:** a population seeded today
produces its first drop in three months, and that is a real problem for a demo
whose first beat is a rewound January 2024 cohort. Two mitigations that do not
compromise the model:

1. **Q6 removes half the problem.** With the YouTube API, cadence decay becomes
   computable on a first look, lifting the day-one Pressure ceiling from 22 to 34
   and the day-one max from 82 to 94. The threshold becomes reachable. Only
   Trajectory still needs two looks.
2. **The rewound cohort has history by construction.** The demo's proof beat is
   unaffected — this only constrains the live list.

*If you overrule to (e):* the lower first-look bar must be visible on the card, or
we are quietly running two thresholds and calling both 78.

### Q13. If Q12 = (a), when is the second look?

| | |
|---|---|
| a | 90 days (the minimum the gate needs) |
| b | 30 days, accumulating toward 90 |
| c | Weekly |

**→ (b).** Cheap (Probe-depth), builds the series earlier, and matches §5.8's
one-month watch window so the machinery is shared rather than duplicated.

### Q14. Does the threshold need recalibrating against live data?

§5.4 says start at 78 and tune until ~a quarter of the seed clears it — but that
was calibrated on a seed cohort with full history.

**→ Yes, and it cannot be done until Q6 and Q12 land.** Until then 78 is a number
calibrated against data of a different shape. Flagging it rather than quietly
changing it.

---

## Branch E — access policy

*Not engineering decisions. These belong to whoever owns §12.1.*

### Q15. User agent: identify as a bot, or send a browser string?

Today: identifies honestly, obeys robots.txt, and is therefore blocked from
Instagram entirely.

| | |
|---|---|
| a | Keep honest (today) |
| b | Browser UA |
| c | Honest by default, browser UA behind an admin switch |

**→ (a).** §11.3's "no scraping" is not only about ToS — the reputational argument
in the PRD is that *a listening product caught scraping is a story*, and a
truthful UA is what makes the rest of the claim credible. **(c) is worse than (b)**
because it creates a switch someone flips under deadline pressure with no record.

*Cost, accepted:* Instagram-only creators are invisible. §11.3 already predicted
this; it now has a number attached.

### Q16. Obey robots.txt everywhere, including public profile pages?

**→ Yes, everywhere, no exceptions.** The moment there is one exception there is a
judgment call in the fetch layer, and the value of the rule is that there isn't.

### Q17. Who owns the creator-data policy?

§14.16 open; §12.1 requires a named owner before the first real creator record.
The engine is now capable of producing that record, so this is no longer
theoretical.

**→ Needs a name before the engine points at a private individual.** Everything run
so far was organisations and public media handles, and no strain profile was
generated for anyone. That was deliberate and it should stay true until there is
an owner.

### Q18. Retention of observations for creators never surfaced?

§12.1: keep the decisions, drop the evidence.

**→ Implement now, while the log is small.** The engine writes an append-only log
with dates; a retention sweep is ~20 lines today and a migration later.

---

## Branch F — the model half

### Q19. Study has never run live. What validates it first?

| | |
|---|---|
| a | The fabrication guard — feed it captions, confirm invented quotes are dropped |
| b | Cost per creator |
| c | Fit-gate agreement with a human on 10 creators |

**→ (a) first, then (c), then (b).** (a) is the wall's second guard and the only
one not yet exercised against a live model. (b) falls out of running (a) and (c).

### Q20. With no brief, Fit returns `unknown` and blocks the drop. Right?

**→ No — change it.** The house brief (§6.1) is *"anyone worth a call"* and always
exists, so there is never a creator without a brief in the real product. The
engine should require a brief and refuse to score without one, rather than
inventing a third gate value that only exists because the CLI allows it.

### Q21. Should model-proposed URLs be remembered?

**→ Yes, cheap and compounding.** A proposal that resolved to a hit is a pattern
worth reusing; one that 404s across fifty creators should be retired. This is the
honest version of "the loop is instrumented from day one" (§5.6) — no retraining,
just a hit-rate table.

### Q22. Effort levels: classify=low, judge=medium. Keep?

**→ Keep, revisit after Q19(b).** Untunable without a bill. Named so it is not
mistaken for a considered choice.

---

## Branch G — where this plugs in

### Q23. Does the engine emit the prototype's schema?

Checked: **no.** `prototypes/v4/warhol-seed.js` uses `pillars {gap, strain, fit}`
— the pre-v1.3 vocabulary. The engine emits v1.3 natively: demand / missing /
pressure / fit / trajectory.

| | |
|---|---|
| a | Engine emits v1.3; a thin adapter maps to whatever the prototype needs |
| b | Engine emits the v4 seed shape |

**→ (a).** The prototype is mid-rename (§13.2 is the v5 rename build); bending the
engine to a shape the PRD has already superseded would bake in vocabulary
decision 72 explicitly killed.

### Q24. What is the next build?

| | |
|---|---|
| a | YouTube Data API — comments + cadence |
| b | First-party site crawling |
| c | Discovery at scale |
| d | Scout integration |

**→ (a), then (b).** (a) unblocks Demand (the strongest pillar), Pressure's
cadence signal, and therefore Q12's day-one problem — three things with one key.
(b) is the biggest single accuracy win after it. **(c) stays deferred and named as
risk**, exactly as §11 says. (d) waits until the numbers it displays are ones we
trust.

---

## If you only overrule three things

1. **Q12** — if the three-month wait is unacceptable, say so and I will build (e),
   the maturity-aware threshold, with the lower bar visible on the card.
2. **Q9** — if you would rather lose a name than risk a false gap, we skip (d)
   entirely and keep blocking. Cheaper, slightly dumber.
3. **Q2** — if Instagram-only creators matter more than I think, (c) is the
   defensible relaxation and I will hold my nose.

## Applied without asking, if you don't object

Q1 (b) confidence over falsifiable checks — it is a live bug, the gate is
unreachable as written. Everything else waits for you.
