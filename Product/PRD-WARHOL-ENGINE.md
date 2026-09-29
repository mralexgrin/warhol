# Warhol — the engine

**The service that finds creators and checks them. Scout is the interface to it.**

**Status:** v0.1 — designed, built, and running on the single-creator path
**Author:** Alex Grinshpoon
**Date:** 5 August 2026
**Companion docs:** [PRD-WARHOL-SCOUT.md](PRD-WARHOL-SCOUT.md) · [WARHOL-PROPOSAL.md](WARHOL-PROPOSAL.md)
**Code:** [`engine/`](../App/engine/README.md) — runs today, `node bin/warhol.js check <handle>`

---

## 1. What this is

Scout says *"no newsletter — we looked in six places."* This document is about the
thing that goes and looks.

It is deliberately narrow. It does one creator at a time: you paste a handle, it
goes out to real URLs, records what came back, and returns a report. That is the
path that proves the thesis. Discovery at scale is a different problem and a demo
does not need it (§10).

Everything here follows from one line in the Scout PRD, §5.3:

> **Discovery may be a language model. Verification may not.**

The rest of this document is what that sentence costs and what it buys.

---

## 2. Core principles

**One. Finding is guessing. Deciding is not.**
An LLM is genuinely good at *"who are the beat writers close to Southern college
football programmes"* — that is reasoning over public text. It is catastrophic at
*"does she have a newsletter,"* because it will answer confidently either way and
be wrong invisibly. So the engine has two halves with a hard interface between
them, and the hard interface is enforced in code rather than in a code review
(§3).

**Two. The model proposes places; it never reports what is at them.**
This is the move that keeps the model useful without letting it near a verdict. A
model knows that a food creator's newsletter is probably on Substack or beehiiv,
and can read her bio and guess three more URLs. Excellent — that is a *hypothesis
generator*. Something else then opens those URLs and reads the status codes.

**Three. A 200 is not a hit.**
This is not pedantry, it is the single most common way an engine like this lies.
Verified on live endpoints while building:

| What we asked for | What came back | What a naive engine reports |
|---|---|---|
| `substack.com/@nobody` | 200, redirected to a search page | a newsletter |
| `stan.store/<handle>` | 200, redirected to stan.store's front page | a store |
| `patreon.com/<handle>` | 200, redirected to a generic profile shell | a membership |
| `<handle>.co` for NASA | 200, a GoDaddy "this domain is for sale" page | their website |
| TikTok, real account | body contains "Couldn't find this account" | account does not exist |

That last one is the worst, and it is the one I got wrong first. The string
*"Couldn't find this account"* ships in TikTok's localisation bundle on **every**
profile page, real or not. I had tested the signature against a fake handle, seen
it fire, and shipped it — and it silently marked every real creator as
nonexistent. **A signature tested in one direction is not tested.** Every one now
has a positive control and a negative control, and both are in the test suite.

**Four. Absence is earned, not defaulted to.**
"We didn't find it" and "it isn't there" are different sentences and the engine
must never confuse them (§4).

**Five. Nothing is stored; everything is recorded.**
There is no creator record to update. There is an append-only log of observations,
and a report is computed from it. This makes the rewind free instead of impossible
(§6) — and §7 of the Scout PRD is unbuildable any other way.

**Six. Failing honestly beats failing quietly.**
When a door won't open — a 403, a bot wall, a robots.txt that says no — the check
resolves *not found*, lowers confidence, and says why on the report. The model
already handles this: not found scores neutral. The alternative is an engine that
gets more confident the more it is blocked.

---

## 3. The wall, as a runtime rule

The wall is not a convention or a comment. It is five lines in the storage layer:

```js
if (obs.engine === 'llm' && obs.verification_state != null) {
  throw new Error('WALL VIOLATION: an LLM-produced observation tried to write a
                   verification state.');
}
```

Every fact the engine learns is written through one function, and that function
refuses to record a model-authored verdict. Nobody can quietly weaken this later
without deleting a test that says, in English, *"a model may not write a
verification state."*

What the model **is** allowed to do, all of it on text the engine already
fetched:

| Allowed | Forbidden |
|---|---|
| Classify a comment as purchase intent | Say whether a store exists |
| Quote the creator's own words | Invent a quote |
| Judge fit against a brief (a gate) | Score a pillar |
| Propose more URLs to check | Say what is at them |

**Quotes get a second guard.** Every quote a model returns is checked against the
text it was given. Anything that is not a literal substring is dropped and
counted. It is eight lines, it costs nothing, and it is the difference between
evidence and plausible-sounding fiction — which matters more here than in most
products, because §12.1 of the Scout PRD says the reports are shareable and about
real people.

**It runs with no model at all.** With no API key, Sweep and Probe run in full and
Study is skipped and marked as skipped. That is not a degraded mode. It is the
demonstration that the credible half of the product does not need a model —
everything I have run so far, including every number in §7, cost **$0.00 in model
spend**.

---

## 4. How "verified absent" is earned

The rule, in full. Three conditions, all required.

```
1. REACHABILITY   at most a third of the places were inconclusive.
                  If half the doors wouldn't open, we did not conduct a search.

2. COVERAGE       at least N places came back empty (N is per item, config),
                  AND we successfully read at least one of the creator's OWN
                  pages.

3. NO HIT         nowhere, including in the links they publish themselves.
```

Condition 2's second half is the strict one and it is the one I would defend
hardest. Guessing at platform URLs without ever reading what the creator says
about themselves is not looking; it is assuming. A newsletter that exists is
almost always announced by its owner — so reading the bio is the difference
between *"we looked in the usual places"* and *"we looked where she points."*

It will produce more *not found* days than a looser rule. That is the correct
direction of failure. §5.3 says a Scout burned twice stops trusting the drop
permanently; the cost of an honest "we couldn't tell" is one quiet line.

**Two refinements that came out of running it:**

**Advisory places.** Ko-fi and Etsy sit behind bot walls and answer 403 to
everyone. Left in the arithmetic they made *store* — one of the highest-value
gaps in the model — permanently unverifiable. They are now marked advisory: still
asked, because a hit there kills a false gap; excluded from the ratio, because a
door that never opens is not a place we looked. They stay visible in the check
record.

**Corroboration.** `mkbhd.substack.com` is a real, live Substack. It belongs to
someone called Bharath. Reported as a bare "found it," that kills a genuine lead
over a stranger's newsletter. So a hit on a *guessed* URL now reads **"something
at X — not confirmed as theirs,"** while a hit on a link they publish themselves,
or on their own platform page, reads "found it." This is §14.3's identity-
resolution problem showing up inside the inventory, and stating it in words is
§6.2's own answer to it.

**What "verified absent" does and does not claim.** It means: absent from the
places named in the check record, on that date. It has never meant absent from the
internet. Chipotle's store is on chipotle.com, not on any of the five platforms
the engine checks — so the engine says *store: not there, we looked in 3 places*
and lists them. The claim is exactly as strong as the list, which is why the list
is one click away and why "we looked in N places" is better wording than "verified
absent." Widening the list is a v2 job (§10).

---

## 5. The four passes, and the rule that stops spending

| Pass | What runs | Engine | Cost |
|---|---|---|---|
| **Discovery** | finds people not in the population | LLM + search | per brief — **not built** (§10) |
| **Sweep** | who they are, how big, what they link to | rules + HTTP | ~5 requests, ~1s |
| **Probe** | the inventory; where absence is earned | rules + HTTP | ~18 requests, ~6s |
| **Study** | demand, their own words, fit | LLM | the only line with a dollar figure |

**The gate between Probe and Study is the spend rule**, and it is also §6.4's best
outcome. Run against MKBHD, the engine printed:

> **Stopped before the expensive pass.**
> we looked in 16 places — they already have a youtube channel and newsletter.
> We didn't go further.

That is not a failure. It is a better result than a report, it cost nothing, and
it is the same rule governing the automated pipeline — which is what keeps
manually-added and machine-found names comparable.

---

## 6. The rewind is free, or it is impossible

Every observation carries `observed_at`. A report is a pure function of
`(observations, as_of)`. Rewinding is not a mode; it is the absence of rows.

Demonstrated on a live run — same command, same code path, one extra argument:

```
warhol report chipotle --as-of <mid-run timestamp>   →  score 0,  confidence 100% (1 of 1)
warhol report chipotle                               →  score 8,  confidence 55%  (6 of 11)
```

The check record (§6.10) is the same rows filtered differently, which is why it is
close to free to build — and it is what turns *"we looked in six places"* from a
claim into a fact, because you can open the six.

**This is the thing that must be right from the first line of code.** Everything
else in this document could be rewritten in a week. An engine that stores mutable
creator rows cannot be rewound later without being rebuilt.

---

## 7. What it actually does today

Real runs, real URLs, on 5 August 2026. No fixtures.

```
  pass      requests   wall time   blocked   errors   model $
  sweep     5          1.0s        2         0        $0.0000
  probe     18         5.6s        0         1        $0.0000
```

- Reads TikTok and YouTube profiles: audience, bio, posts, and the links the
  creator publishes. **Instagram is blocked by its own robots.txt and the engine
  obeys it** — which is exactly what §11.3 predicts, arriving as a fact rather
  than an assumption.
- Checks 11 pieces of inventory across ~18 real URLs, split into *what they've
  built* and *what they've switched on*.
- Earns *verified absent* when the rule is satisfied, and says why when it is not.
- Weighs absences rather than counting them, and weighs them more when demand
  points at them.
- Escalates to the model pass only when a top-tier gap is real.
- Writes an append-only log; projects reports from it at any date.
- Prints a check record: every place, status code, and one sentence on what it
  meant.
- Emits a self-contained HTML page of the same thing — `--html`, opens by
  double-click, no server.
- Reads the YouTube Data API for the three things one key unlocks: comments as
  a demand source, publish dates as a posting rate, view counts as evidence on
  the line. Metered in quota units — at most 14 of the free tier's 10,000/day
  per creator — and counted in `warhol cost` beside the model spend.
- 66 tests, all passing, each one an assertion the product makes out loud.

**Test subjects.** I ran it against organisations and public media handles, not
private individuals — and no strain profile was generated for anyone. §12.1 gates
the first real creator record behind a named owner and a legal review, and that
gate is upstream of this engine, not inside it.

---

## 8. What it cannot do, and why that is in the design rather than hidden

**Trajectory cannot fire on a first look.** The gate needs two observations at
least 90 days apart. One data point is not a trend, and manufacturing one is the
precise failure §5.3 exists to prevent. So a first run returns
`not_established` — which is neither a pass nor a fail. The report says so in
words. The consequence is real and worth arguing about: **on day one, nothing can
clear the drop gates**, because Trajectory is a required pass. The resolution I
built: the gate governs *drop entry*, not *report generation*. Run a Name is
explicitly a human's hunch (§6.4), so it produces a report regardless. But a
population seeded today produces its first honest drop in about three months.

**Pressure is capped at 34 of 40 on a first look — 22 without a YouTube
channel.** ~~Two~~ One of its four signals is a change over time we cannot see
in a single visit: unanswered audience. Cadence decay used to be the second, and
Q6 (6 Aug 2026) moved it. YouTube stamps every upload with the date it went
public, so a posting rate over time is legible in one visit — the change is
already in the data. Nobody stamps a follower count, which is why unanswered
audience stays dark and Trajectory still needs two looks.

The ceiling on a report is a fact about that creator, not about the engine: a
creator with no YouTube we can find has no posting history to read, so their
report says 22 of 40 and names the reason. Quoting 34 at them would be
describing a measurement we did not take.

**Comments are readable on YouTube and nowhere else.** §11.3 called it, and the
Data API is now wired: top-level comments on recent videos, the creator's own
excluded, fed to the same classifier the captions go through. TikTok is gated,
Instagram is closed, Reddit is next. So Demand has stopped being purely a
substitute — captions are the creator quoting their own demand; comments are
strangers asking. Where no comment section will give us its text, the report
distinguishes *"we read 500 and none of them asked to buy"* from *"we could not
read any"*, which §11.3 spends a paragraph insisting are different sentences.

**Representation can be found but never ruled out.** A bio that mentions
management proves representation. A silent bio proves nothing. So this check
resolves *present* or *not found* and never *verified absent* — which is why §8's
decline reason *"already with an agency"* remains the failure the Missing check
structurally cannot catch. Worth saying out loud rather than pretending a weight
fixes it.

**Sample-based checks can prove presence, never absence.** Forty recent captions
with no `#ad` in them is not evidence that nobody sponsors her. Sponsorships and
affiliate links therefore resolve *present* or *not found*, never *verified
absent*. §5.2's example line — *"affiliate links: none in 90 days"* — needs 90
days of posts, which we do not have.

**Shopping tags and platform subscriptions need partner APIs we do not have.**
They resolve not found and say that, rather than quietly counting as gaps.

---

## 9. What this settles about cost (§11.4)

§11.4 asks for a measurement rather than an assertion. The first half of the
answer is already in:

> **Sweep and Probe cost $0 in model spend.** They are HTTP and rules. The entire
> per-creator model bill sits in Study, and Study only runs when Probe found a
> real gap.

That is the gradient, and it is a stronger answer to *"how much does it cost to
run this"* than a crawler roadmap. Wall clock is ~7 seconds per creator; the
binding constraint is politeness delay, not compute.

The half still missing is the absolute Study figure, which needs an API key and
twenty creators end to end. The instrumentation to produce it is already in — every
request and every model call writes a cost row, `warhol cost` prints the table.
That is the "half a day's work once the finding service exists" §11.4 describes,
and it is now closer to half an hour.

---

## 10. Deliberately not built

- **Discovery at scale.** Named as the largest engineering unknown in Phase One,
  and it stays named. The engine has the shape for it — Discovery is a pass with
  no per-creator cost — but building it now would hide the thing the demo is
  supposed to prove.
- **The population, briefs, drops, watchlists, decisions.** All Scout. The engine
  returns one report about one creator; everything about queues and judgment sits
  above it.
- **YouTube and Reddit comment APIs.** Clean and legitimate, need keys. The
  cleanest first upgrade, and it directly raises confidence on the strongest
  pillar.
- **First-party site crawling.** Would let *store* and *newsletter* resolve
  against a creator's own domain instead of five platforms. Probably the single
  biggest accuracy win available, and the check record already shows exactly why.
- **Backlink data.** §11.2 says don't buy it yet. Agreed — the reading of the web
  that discovery does gives a coarse version for free.

---

## 11. What I want to argue about

1. **The first-party read requirement.** It is the strictest rule in the engine
   and it will cause quiet days. Is that the right trade, or does it need a
   relaxation for creators whose platforms are all blocked?
2. **Day one has no Trajectory.** A population seeded today produces its first
   honest drop in three months. Is that acceptable, or does the demo need a
   seeded history — and if it does, is the seeded history honest?
3. **Uncorroborated presence.** Right now an unconfirmed hit blocks a gap. That
   fails safe against embarrassment and fails open against missed leads. Which
   failure do we actually prefer?
4. **"Verified absent" is a promise about a list.** Is the check record enough to
   make that honest, or does the wording need to change again?
5. **The user agent.** The engine identifies itself as a bot and obeys robots.txt.
   A browser user agent would unblock Instagram and raise confidence. That is a
   policy decision, not an engineering one, and it belongs to whoever owns §12.1.
6. **Where Discovery's output enters.** A model proposes names; nothing verifies
   the *person* the way it verifies the inventory. That is the next wall to build.

---

## Appendix — running it

```bash
cd Warhol/engine
npm install                       # optional — only the model pass needs it

node bin/warhol.js check @chipotle          # go and look, print the report
node bin/warhol.js checks chipotle          # every place, every status code
node bin/warhol.js report chipotle --html   # the same thing as a page
node bin/warhol.js report chipotle --as-of 2026-01-15
node bin/warhol.js cost                     # what the passes cost
node test.js                                # 19 assertions the product makes
```

Set `ANTHROPIC_API_KEY` to enable the Study pass. Without it, everything above
still runs; Study is skipped and says so.

Two files hold everything tunable, and neither is code:
`engine/config/probes.json` — the places, and the rule for reading each response.
`engine/config/weights.json` — the weights, thresholds and gates (§10.6).
