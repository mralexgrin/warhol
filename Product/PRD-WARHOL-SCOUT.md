# Scout — PRD v1.6

**Phase One of Warhol: the listening application (Tier 1)**

**Status:** Draft v1.6 — the pre-demo review pass
**Author:** Alex Grinshpoon
**Date:** July 2026 · revised 6 August 2026

> **v1.6 records the review of the PRD, the engine and the v5.3 build the night
> before the demo, and what building v5.4 fixed.** Its one PRD-level addition is
> **§4.2a — what "worth a call" means**, because the phrase was named on the front
> door and defined nowhere, and the two sentences being used as its definition
> disagreed. Everything else v5.4 changed is a build note
> (`App/scout/DESIGN-NOTES.md`) rather than a decision, with one exception
> worth reading here: **all 58 house-cohort records carry a Fit verdict copied
> from another brief and none was judged against the house brief's own words**, so
> the house drop is currently gated by four other briefs' Fit tests. The screen
> says so; the fix is an engine re-run and needs a key.
>
> **§7 and §13 are still the January-2024 versions and are still wrong.** The
> rewind is cut from the product and §13's demo order is built on it. That belongs
> to the reconciliation session, which has to happen in one piece or not at all.

> **v1.4 was the UAT revision.** It records what happened when the engine was
> pointed at real creators for the first time (§5.4a), and specifies the surface
> changes that came out of reviewing v5.2. **It deliberately does not touch the
> January 2024 rewind (§7)** — that cut and everything it invalidates belongs to
> the reconciliation session, which has to happen in one piece or not at all.
>
> **v1.5 adds what building it found.** Three things, all measured rather than
> reasoned: the **Fit gate was a second copy of the score** and was removing the
> two best creators on the board (§5.4c, decision 123); **Reddit's keyless access
> is gone**, which turns a quarter of the scoring model into something that needs
> a credential nobody has yet (§11.3, question 22); and the proposed per-source
> spend control is **the wrong axis** — sources are free, judgment is not — so it
> becomes the **Sources** screen, a coverage control (§6.13, decision 125).
**Companion doc:** [WARHOL-PROPOSAL.md](WARHOL-PROPOSAL.md) — strategy, ladder, business case

---

## 1. What this is

**Warhol is the engine. Scout is the product.**

Scout is a web application that looks for creators with a **large gap between what their audience is worth and what they're extracting from it**, and delivers a small, ranked, evidence-backed shortlist to a human whose job is to decide who's worth a conversation.

Warhol is the platform underneath — the scanning, scoring and observation machinery. It appears in strategy documents and in a footer. **The interface says Scout.** *"Scout found six people today."* Nobody using the product has to learn two names.

It is not a discovery tool and not a follower leaderboard. It is the sourcing function for an origination pipeline: the machine finds and argues, a human decides, and the decision is captured so the machine gets better.

**Phase One ends at the handoff.** When a creator is promoted, Scout produces an outreach package and a record for the Phase Two app. Everything after that — onboarding, tooling, development — is Phase Two, with one exception: Scout records **what the creator said** (§8), because that outcome is the only thing that validates the signal model.

---

## 2. The users and the job

**One kind of user.** Anyone at Paradium with a sign-in gets the same application with the same powers. They write briefs, read what Scout found, keep people, pass people, promote people.

Their job, in one sentence:

> **Produce the names worth a conversation this week, and enough evidence to defend each one in a room.**

There is no second role. The earlier Scout/Spotter split was two synonyms carrying one real difference — *may you spend the company's money* — and everything else it governed turned out to be either already handled or not worth a vocabulary item:

| The split was doing | Why it isn't needed |
|---|---|
| Keeping casual labels out of the training set | Everyone in the app is the desk. There is one kind of judgment. |
| Stopping one person's Pass from deleting a name for everyone | State is already per person (§10.5). A Pass never removed anyone else's card. |
| **Capping spend on the expensive pass** | **Real.** Replaced by a budget ceiling, below. |

**Admin is a permission, not a role.** It is a switch on a person, and it grants exactly four things:

| Admin controls | |
|---|---|
| **Budget ceiling** | The monthly spend cap. When it's hit, deep looks stop and the panel says so. |
| **Who's in** | Add, deactivate, toggle admin |
| **Platforms** | Which sources Scout listens to |
| **Threshold** | The score floor for entering the drop |

The ceiling replaces role-based spend control. It fails in the right direction — Scout gets less thorough rather than unavailable — and it puts the constraint on the organisation rather than making each person ration their own hunches, which §6.4 argues is how you stop people entering hunches at all.

**In the interface, nobody is a noun.** The admin panel is a list of people with a switch. There is no word for "everyone else." In this document, *member*.

**Secondary consumer: the exec / investment room.** They never work the app. They receive its output as a generated briefing. Designing for them directly would produce a beautiful report nobody could work in.

---

## 3. Core loop

```
   BRIEF ──► FIND ──► CHECK ──► DROP ──► DECIDE ──► HANDOFF
     │                  ▲                   │
     │                  │                   ├─ Promote ──► outreach package + outcome (§8)
     └──────────────────┘                   ├─ Watch ─────► watchlist (re-checked continuously)
       a brief adds people                  └─ Pass ──────► suppressed per reason
       to the population                                    │
                          decisions captured as labels ◄─────┘
```

The day: open Scout, work the drop to zero, close Scout. Everything else in the app exists to serve that.

**Scout does not watch the internet. It watches a population, and briefs are what put people in it.** The population is cumulative — everything every brief has ever asked for stays in it and keeps being re-checked. So a brief written into territory somebody already covers returns people immediately, and a brief written into new territory sends Scout looking and reports the next day. Same object; the difference is experienced as waiting, not as a concept anyone has to learn.

---

## 4. Vocabulary

This is the canonical glossary. If a term isn't here, it isn't a product term — and several things that sound like product terms deliberately aren't (see §4.6).

**Governing rule: the interface speaks plain English.** Not slang, not jargon, no abbreviations. Anyone should understand a screen in seconds without being taught a vocabulary first. Where a term needs explaining, the label has failed — fix the label, not the help text (§6.11).

### 4.1 People

| Term | Definition |
|---|---|
| **Creator** | The human being evaluated. **The word the interface uses.** |
| **Member** | Anyone with a sign-in. Document vocabulary only; the interface never names a user type. |
| **Admin** | A permission on a member, not a role. Four controls (§2). |

### 4.2 Objects

| Term | Definition |
|---|---|
| **Brief** | The assignment. What we need, who we're looking for, where they post, what good looks like. Written as a description; Scout derives the structure and shows it back (§6.7). |
| **House brief** | The default, *"Anyone worth a call."* Nobody wrote it, nobody can edit it, everyone has it. **Two halves, and they are not interchangeable — see §4.2a.** |
| **Drop** | The day's surfaced creators for one brief, for one member. Threshold-gated, capped. |
| **Report** | The full case for one creator. Not "Scout Report" — Scout is the product, so the surname is noise. |
| **Watchlist** | Creators you kept. Re-checked continuously; can resurface into the drop. |
| **Passed list** | Creators you rejected, with the reason and what would bring them back (§6.3). |
| **Outreach package** | Generated on Promote. One creator, for first contact. |
| **Briefing** | Generated export. Many creators, for the funding room. |
| **Check record** | What Scout checked, when, where, and what it found (§6.10). Formerly "the Ledger." |

### 4.2a What "worth a call" means — decision 127, 6 August 2026

Two sentences were both being used as the definition of the house brief, and they
disagreed:

| Where | Words | What it actually is |
|---|---|---|
| §4.2, §6.1 | *big audience, no business, under pressure* | **the score** — Demand 25 + Missing 35 + Pressure 40 |
| `weights.json` `houseBrief`, after §5.4c | *clippable, in a format they can repeat, in a category people actually want* | **the Fit gate** |

**They are not competitors. They are the two halves of one machine, and §5.4c already
settled which is which:** a gate must test what the score does not. The bug was that
the product showed only the gate half while ranking by the score half — the tab
explained a list of eight with the sentence that had not selected any of them.

**The definition, and it is one sentence in two clauses:**

> **Worth the call** — an audience already there, nothing built to sell it, and work we
> could build on. The ones who move up the list are where we can hear the audience
> asking, or see something change in how they work.

**The order is measured, not rhetorical.** Across the drop of 6 August: **Missing true
of 8 of 8, Fit 8 of 8, Pressure 4 of 8, Demand 3 of 8.** So the first clause is the
**qualifier** — every name on the board clears it — and Demand and Pressure are named as
what **ranks** them, which is the job they actually do. Leading on *"their audience is
asking to buy"* would have been contradicted by five of the eight cards underneath it,
and §11.3 makes that permanent for any cohort without YouTube or Reddit.

**Worth the call means worth *Paradium's* call.** It is a monetization-gap judgment, not
an assessment of whether someone is good. Every argument about a name on the board comes
from someone reading it the second way, so it is stated here and said out loud first.

**Two fields, not one — this is load-bearing.** The sentence a person reads and the text
handed to `judgeFit` must be stored separately (`screenText` and `description`). With one
field, the next person to improve the on-screen wording by mentioning audience or pressure
re-creates §5.4c: the judge starts failing creators for facts Missing and Pressure have
already counted, and the two highest scorers fall off the board. **The judge's text names
format and category only, permanently.**

### 4.3 Scoring

The score answers three questions. The interface asks them in words; the formal names below exist for this document and the data model only.

| Interface says | It asks | Formal name | Weight |
|---|---|---|---|
| **Demand** | Do people want to buy? | Unmet demand | part of Opportunity |
| **Missing** | Is there anything to buy? | Monetization Gap | part of Opportunity |
| **Pressure** | Will they take the call? | Operator Strain | 40 |
| **Fit** | Can we build it, for this brief? | Format Fit → the brief | gate |
| **Trajectory** | Are they on the way up? | — | gate |

**Opportunity** = Demand + Missing, weight 60. The word appears only where a single number is needed — the ring, the sort, the compact bar. On the report you never say it; you show its two halves.

| Term | Definition |
|---|---|
| **Score** | 0–100. Nothing else in the app assigns numbers, so it needs no surname. |
| **Confidence** | Share of absence checks resolved. Shown on lists, where the detail isn't visible. Not shown on the report, where it is. |
| **Threshold** | Score floor for entering the drop. Default 70, tunable by an admin. |
| **Present** | We found it. |
| **Verified absent** | We looked in the places it would be and it isn't there. **Only this scores as a gap.** Interface wording: *"not there · we looked in 6 places."* |
| **Not found** | Inconclusive. Scores neutral, reduces confidence. |
| **Doesn't apply** | A **relevance flag, not a verification state.** Means *we didn't need to check* — no podcast is not a gap for someone who never talks to camera. Leaves both numerator and denominator, so it doesn't distort confidence. |
| **Recommended play** | The one business we'd build with this creator, from a fixed catalog. |

### 4.4 Verbs and states

Three verbs. **Every state is the past tense of a verb a human performed** — which is why the list of states costs no new vocabulary.

| Verb | State it produces |
|---|---|
| **Promote** | `Promoted` — then carries an outcome (§8) |
| **Watch** | `Watched` |
| **Pass** | `Passed`, with a reason that drives suppression |

**Run a Name** is a screen, not a verb in the decide loop (§6.4).

### 4.5 Time and cost

| Term | Definition |
|---|---|
| **As of [date]** | The rewind. Attaches to one creator's report, not to the whole app. |
| **What happened next** | What actually happened to a creator since a rewound date. |
| **Scan depth** | How much Scout spends resolving one creator. Four passes, below. |
| **Discovery** | Per *brief*, not per creator. Goes and finds candidates that aren't in the population yet (§5.7, §11). |
| **Sweep** | Cheapest, broadest. Rules only, no LLM. |
| **Probe** | Resolves the monetization inventory, citations and audience history. Where *verified absent* is earned. |
| **Study** | LLM analysis — brief fit, pressure classification, unmet demand. The expensive pass. |

### 4.6 Deliberately not product terms

Words that exist in the strategy but must never appear in the interface, because using them would either confuse the model or contradict a decision:

| Term | Why not |
|---|---|
| **Warhol** | The engine. Strategy documents and a footer. The product is **Scout** (§1). |
| **Spotter, Scout (as a role), Mandate** | Deleted in v1.3. One user type, and the object is a **brief**. |
| **Monetization Gap, Operator Strain, Format Fit** | Formal names. The interface says Demand / Missing / Pressure / Fit. *"Operator Strain"* needs a paragraph; *"Will they take the call?"* needs nothing. |
| **Surfaces checked** | Our word, not a normal person's. Say *"we looked in 6 places."* |
| **Tier 1–4, The Factory, Superstars** | The talent ladder from the proposal. Phase One *is* Tier 1; the app never displays the others. |
| **Backtest** | §7 insists the rewind is not a separate mode. Naming it as one is how it becomes one. Keep the word for the deck. |
| **Coverage gate** | Redundant with Confidence, which already means *share of checks resolved*. |
| **Candidate, sub-signal, engine, `observed_at`** | Internal and data-model vocabulary. The interface says **creator**. |
| **Prune** | Not a fourth verb. It's a Pass reason — *no longer worth tracking* (§5.8, §8). |
| **In Drop** | Computed, not stored. You're in the drop if you cleared the gates and nobody has decided yet. |

---

## 5. The scoring model

### 5.1 Structure

Two weighted pillars and **two** gates.

| | Role | Weight | Engine |
|---|---|---|---|
| **Opportunity** (Demand + Missing) | The buy signal | 60 | Rules |
| **Pressure** | The timing trigger | 40 | Rules (+ LLM text classification) |
| **Fit** — does this creator match this brief | The qualifier | **Gate — pass/fail** | LLM |
| **Trajectory** — are they on the way up | The qualifier | **Gate — pass/fail** | Rules |

Neither gate contributes points. A creator who fails either does not enter the drop no matter how strong the pillars are.

**Fit is the brief** (§6.7). The old global Format Fit — clippability, repeatable format, category demand, distinctiveness — was a brief hard-coded as a constant, which is why writing a brief used to feel empty: its content was already spent. Per-brief Fit gives the object its job back and adds no vocabulary. It survives as a global only inside the **house brief**, which is where those four judgments still live.

**Trajectory exists because the model otherwise rewards decline.** Every Pressure signal — posting less, replies collapsing, dead links, abandoned projects — fires *harder* on someone quietly giving up than on someone overwhelmed by success. Combined with "nothing built," the highest-scoring creator in an ungated system is a person quitting. Trajectory is the gate that stops that, and it is also the lens that makes Pressure readable at all:

| Signal | Audience growing | Audience shrinking |
|---|---|---|
| Posting 40% less | Overwhelmed. **Call her.** | Losing interest. Walk away. |
| Replies fell 22% → 3% | Can't keep up with demand | Nobody's asking any more |
| Dead link in bio | Tried something, it broke | Gave up |

Without trajectory, Pressure is ambiguous. With it, Pressure is the strongest signal in the product.

**Every pillar and sub-signal declares which engine produced it.** Countable facts stay countable, because that's what makes them defensible. Judgment is labelled as judgment.

### 5.2 Sub-signals

**Demand** — *do people want to buy?*

| Sub-signal | Engine | What it measures |
|---|---|---|
| Unmet demand | LLM classify → rule count | Comments expressing purchase or subscribe intent: *"where can I buy this"*, *"do you have a newsletter"* |

**Missing** — *is there anything to buy?* Two halves, same three verification states in each (§6.2).

| Half | Sub-signal | Engine |
|---|---|---|
| **What they've built** | Newsletter, website, store, membership, podcast, **YouTube channel**, **representation / management / network** | Rule |
| **What they've switched on** | YouTube monetization, platform subscriptions, shopping tags, affiliate links, sponsorship disclosures | Rule |

Three things this fixes. **YouTube absence is the highest-value line in the inventory** — short-form barely pays, YouTube does, and clip-first distribution is something Paradium already sells; a large short-form audience with no YouTube channel is the biggest unbuilt business we are best placed to build. **Representation was never checked** — you could run the whole ladder, write the report, promote her, and discover on the call that an agency signed her in 2024. And **"switched on" is a different question from "built"** — a dormant channel is two lines, not a fourth verification state: *channel: present*, *monetization: verified absent*.

**Absences are weighted by money on the table, not counted.** Nearly every creator lacks affiliate links and shopping tags, so counting them inflates the whole cohort and separates nobody.

**The rule that does most of the work: an absence counts more when the demand points straight at it.** *No newsletter* is worth a great deal when 1,900 people asked for a newsletter, and very little when nobody did.

On top of that, three tiers:

| Tier | Items | Share of Missing |
|---|---|---|
| **Worth the most** | No YouTube channel against a large short-form audience; no store or newsletter against named demand | ~2/3 |
| **Worth something** | Website, membership, podcast, sponsorships | ~1/3 |
| **Worth almost nothing** | Affiliate links, shopping tags, platform subscriptions | a rounding error |

The bottom row still appears on the report — it is part of the picture — it just barely moves the number.

**The bottom row carries a different kind of information, and it is a label rather than a number.** Missing *everything*, including the trivial things, means they haven't started at all: clean slate, nothing half-built to untangle. Someone with shopping tags and affiliate links but no newsletter has already begun monetizing and is partway down a road. The report states it as a heading — *"What she's switched on — nothing, anywhere"* versus *"a few things, none of them earning"* — and computes nothing.

**This is deliberately not called confidence.** Confidence already means *did we actually check, or did we fail to find out*, and that meaning is what makes "we looked in six places" a claim rather than a guess. Overloading the word would break it.

**Weight is expressed as order**, highest first, with a clause on the top line only, so there is no badge or number to decode.

**Pressure** — *will they take the call?*

| Sub-signal | Engine | What it measures |
|---|---|---|
| Cadence decay | Rule | Posting frequency over 90 days vs their own prior baseline |
| Abandonment markers | Rule | Dead links in bio, projects launched then dormant |
| Self-reported strain | LLM | Caption/post text: *"sorry I've been quiet"*, *"I can't keep up"* |
| Unanswered audience | Rule | Reply rate against comment volume, as a change over time |

Two rules govern how Pressure is presented:

1. **Every Pressure signal is a change, never a level.** *"12% reply rate"* is unreadable — nobody knows whether 12% is good. *"Replies fell from 22% to 3%"* is a fact. Undated is not pressure.
2. **Pressure shows two lines, always.** One behaviour change is a holiday. Two at once is a person going under. The creator's own words are the strongest evidence and the rarest — only one of four sub-signals produces a quote — so the display order is: her own words, then a visible break, then a change in her own behaviour, then the audience going unanswered.

**Abandonment markers are reinterpreted.** A dead Shopify link is not merely a symptom of strain — it is evidence she *wanted to build a store and couldn't run one alone*. That is a stated intention with a failure attached, and it is the single most qualifying fact in the model. It reads as *"she tried, it broke."*

**Trajectory** — *are they any good, and on the way up?* (gate)

| Sub-signal | Engine | What it measures |
|---|---|---|
| Audience trend, 12 months | Rule | Growing with nothing built is a rocket. Shrinking is a sunset. |
| Reliability | Rule | Median performance, not best post. One viral hit is not a business. |
| **Citations and links** | Rule (third-party data) | How many sites cite, link or embed their work, and the trend |
| Evidence they tried | Rule | Dead store link, abandoned Patreon, 404 in bio |
| Distinctiveness | LLM | Something only they have — access, expertise, a point of view. *Moved here from Format Fit.* |

**Citations are the one signal that can't be bought.** Followers can, engagement can, views can. A hundred sites linking to someone's work means the wider web treats them as a source — which, for a publisher, is the difference between an audience and a business that can carry a website. It applies to video more than it appears to: you are measuring links *to the work*, wherever it lives.

Trajectory carries **no score of its own** — a fourth number is a fourth thing to learn, and this group is not a reason to buy, it's the reason to believe the other two. Every line carries a **trend** instead, which is what the watchlist actually watches (§6.3).

**How the gate is set.** The test is the **audience**, never the posting rate. Posting less is a *good* signal — it's someone drowning. Audience shrinking is the bad one. Confusing the two inverts the model, which is the whole reason this gate exists.

> Fail when the audience is down over the last **12 months** *and* still falling over the last **3**. Both, not either.

One window alone is noise: a dip last summer that recovered should pass, and one bad month should pass. Flat passes. Growing passes. Only a real, continuing slide fails. Starting figure: **down more than 10% across the year and still going down**, tuned once real data flows.

Accepted cost: this occasionally drops someone genuinely worth having who is mid-rebuild or switching platforms. The alternative is a daily list full of people on their way out.

**Citations are never a gate.** A zero means *this doesn't tell us much here*, not *reject*. The signal is strong for expertise-led creators — sports insiders, news, anyone quoted in articles — and near zero across the board for entertainment-led ones, where it separates nobody. It is strong exactly where Arena hunts, which is why it earns a line and not a veto.

### 5.3 Absence must be verified, not assumed

The core signal is an **absence**, which makes "we didn't find it" the single most dangerous failure mode in the product. A Scout burned twice by *"they've had a newsletter for two years"* stops trusting the drop permanently.

Every absence-based check resolves to one of three states:

- **Present** — found it
- **Verified absent** — checked the surfaces where it would be and it isn't there
- **Not found** — inconclusive

**Only `Verified absent` scores as a gap.** `Not found` scores neutral and reduces confidence.

**Confidence** = share of checks resolved (Present or Verified absent) against total checks. Displayed alongside the score, never folded into it.

**Minimum confidence:** a creator cannot enter the drop until their Opportunity confidence clears a floor. Pressure, Fit and Trajectory have no floor.

This used to be called the *coverage gate*, which was a second name for a thing already named. Confidence **is** coverage — the share of checks resolved — so the rule is a floor on a number the Scout already reads, not a separate mechanism they have to learn. It also makes the whole entry condition one sentence: *score ≥ 70, confidence ≥ floor, Fit = pass.*

**A fourth reading exists and is not a verification state.** *Doesn't apply* means we didn't need to check — no podcast is not a gap for someone who never talks to camera. It leaves both the numerator and the denominator, so it distorts neither the score nor confidence, and it reads on screen as an ordinary sentence (*"she doesn't talk to camera"*) rather than as a state anyone has to learn.

**Discovery may be a language model. Verification may not.** Finding people is a reasoning-over-public-text task and an LLM is good at it (§11). Deciding whether a newsletter exists is not: *"we looked in six places and it isn't there"* is the product's entire credibility, and a model that concludes "probably no newsletter" destroys it silently and irreversibly. Absence checks are deterministic — real URLs, real responses, recorded. This wall is load-bearing.

This produces the report's most convincing line, which the interface states in plain words: **"No newsletter. We looked in 6 places."**

*"Surfaces checked"* is our vocabulary, not a reader's. The longer sentence survives being read aloud to a GM, which the shorter one does not. It supersedes the phrasing used in the proposal and the deck.

### 5.4 Drop selection

A creator enters the drop when **all** of:

1. Score ≥ threshold (default 70, tunable by an admin)
2. **Fit = pass** — they match this brief
3. **Trajectory = pass** — they are rising or stable, not fading
4. Opportunity confidence ≥ minimum
5. Not currently suppressed by a pass rule

**The threshold is read off a result, not chosen.** The bar is whatever produces roughly 5–10 names on a good day and zero on a thin one. Since the inventory roughly doubled (§5.2), 70 would now pass about half the cohort. **Start at 78 and tune against the seed until about a quarter clear it**, then re-check monthly once real data flows. It is an admin setting, so nobody has to be right on day one.

The drop is **threshold-gated with a cap** (~10). Some days three names, some days zero.

> **"Warhol found nothing worth your time today" is a feature.** A fixed daily ten forces filler on thin days and quietly teaches the Scout the list is arbitrary. The cap protects attention; the threshold protects trust. No competitor's feed will ever say it.

### 5.4a What real data actually does to the gates

**Measured 6 August 2026, not predicted.** The engine was run over twenty real US
food and drink brands and, separately, over a sample of the real creator list
intended for the demo. `warhol drop us-food-drink-brands` returns:

> **WARHOL FOUND NOTHING WORTH YOUR TIME TODAY**
> 20 creators went through the full ladder and none of them cleared every gate.

Not one creator cleared. The highest score in the cohort was **32 against a
threshold of 78**, and every single one failed on `score, fit, trajectory`. Four
creators sampled from the demo handle list scored 0, 14, 20 and 28. This is not a
data-loading problem and no amount of populating fixes it. Three separate causes,
and they have to be separated because only one of them is a bug:

| | What it is | Status |
|---|---|---|
| **Trajectory is unwinnable on day one** | The gate requires two observations **at least 90 days apart** (decision 104, §5.2). A cohort first looked at today has one observation. `not_established` blocks the drop exactly as `fail` does. **Every creator in any new cohort fails this gate, permanently, until 90 days have passed.** | **Structural. Needs a decision.** |
| **Fit reads `not_judged`** | Fit is a model judgment and the model pass had no key. `not_judged` is not a pass and blocks the drop. | **Configuration.** Set the key. |
| **The threshold was tuned against fiction** | Decision 101 set 78 by reading it off *the seed* — and the seed was 24 invented creators built to demonstrate the model. Real creators score 0–32 because Demand (25 pts) needs readable comments and Pressure (40) needs captions and cadence. | **Calibration. Needs a re-read against real numbers.** |

**The trajectory finding is the load-bearing one, and it is not a defect —
the gate is doing precisely what decision 104 built it to do.** It exists to stop
Scout inventing a trend from a single point, which is the failure §5.3 is written
to prevent. But it was specified for a *running* product, where every creator has
history, and it was never tested against **day one**, where nobody does. The
consequence is that a correct gate makes the product's front door structurally
empty for its first quarter of life.

**The rule that resolves it, and it is the same rule as everywhere else in this
document: say what you know, and say what you don't.**

> A creator with one observation has **no trajectory**, and a gate cannot be
> passed or failed on a fact that does not exist yet. `not_established` stops
> being a blocking value and becomes a **stated condition on the card**: *"first
> look — no trend yet, we check back in 90 days."* The other three gates still
> bind. A creator enters the drop on Demand, Missing, Pressure and Fit, and
> carries the fact that the fourth reading is not in yet.

This is not relaxing the gate. It is refusing to report a judgment nobody has the
evidence to make — which is the position §5.3 already takes on absence, and the
position §6.2 already takes on a weak identity match. **A gate with three values
was rejected for Fit (Q20) because the third value was an artefact of a CLI flag.
Trajectory's third value is not an artefact: it is a real and common state of the
world, and it deserves to be shown rather than silently counted as a failure.**

Once a cohort has two looks 90 days apart the gate binds normally, and a creator
who is genuinely fading is blocked as designed.

**The demo cohort, measured 6 August 2026.** Twenty real creators — ten Southern
college football, ten entertainment — run through the deterministic passes with
no API keys set:

| | |
|---|---|
| Score range | **0–28**, median 14 |
| Readable at all | **17 of 20** |
| TikTok profile read successfully | **16 of 20** |
| Readable YouTube channel | **6 of 20** |
| Entering the drop | **0**, blocked on Fit (`not_judged`, no model) |

**This corrects a pessimistic first read.** A single early sample —
`@sidelineexposure`, whose TikTok returns 200 with an empty rehydration blob —
suggested TikTok was broadly unreadable. It is not: sixteen of twenty profiles
read fine, including follower counts of 311k, 284k and 256k. **Three creators are
genuinely unreadable and score 0**, and they should be treated as a data-quality
finding about those three accounts rather than as evidence about the platform.

**The YouTube figure is the one that matters for calibration.** Only six of twenty
have a readable YouTube channel, and YouTube is the only place comments can be
legitimately read (decision 110). So for **fourteen of twenty, Demand's 25 points
are unreachable no matter what keys are set** — not because the pass failed, but
because there is no readable comment section anywhere. That is §5.2's strongest
signal reading `not found` for 70% of the cohort, and it is the substance behind
open question 18.

**Those scores were a floor, not a result** — Missing-only, with the model pass
unavailable. The full measurement below supersedes them.

### 5.4b The threshold, measured — and the failure that nearly hid it

**Run 6 August 2026, both keys set, full ladder over all twenty.** Distribution
**0–34, median 19**. A bar of **25 lets five through — 25%**, which is decision
101's *"about a quarter clear it"* read off real people for the first time.
**The threshold moves 78 → 25.**

**78 was not merely high, it was unreachable.** With no readable comments the
ceiling for this cohort is Missing 35 + Pressure 34 = **69**. No creator could
have entered the drop at 78 regardless of merit.

**Demand scored 0 for all twenty, with a signal count of zero.** That is now a
confirmed result rather than an assumption — and confirming it took two runs,
because of this:

> **The first measurement was invalid and looked perfect.** The classify job had
> just moved to a cheaper model, and that model **rejects the `effort`
> parameter**. Every `classifyDemand`, `classifyStrain` and `proposePlaces` call
> returned HTTP 400. The run completed. Scores printed. Demand read 0 across all
> twenty — **which is exactly what the honest "no readable comments" outcome
> looks like.** A threshold was read off that run before anyone checked the error
> rows.
>
> **The general lesson, which is worth more than the fix:** §11.3 makes *"we
> looked and found nothing"* a legitimate, designed outcome that scores neutral.
> That is the right behaviour — and it means **a model call that fails silently
> is indistinguishable from a model call that succeeded and found nothing.** The
> failure wears the costume of a feature. Anything that can fail into that state
> has to be verified against the error log, not against whether the run finished.
>
> The re-run moved scores by 5–7 points **in both directions** — `proposePlaces`
> started working, more places got checked, and creators who looked like they
> were missing things turned out to have them. The corrected figures are the ones
> above.

**What still binds after the threshold moves.** Fit, not score, is now the
limiting gate: of the seven creators clearing 25, several fail the brief. That is
the system working — the bar was measuring the calendar and the config, and now
it measures the creator.

**The threshold is a separate question and must be re-read, not adjusted to
taste.** Decision 101's method stands — *read it off a result* — but it has to be
read off *real* results now. That means running the twenty-creator measurement
§11.4 already calls for, then setting the bar where roughly a quarter of a real
cohort clears it. **Moving 78 down until the demo looks full is the one thing
that must not happen**: it converts the threshold from a claim about creators
into a claim about the demo, and §5.4's entire argument is that the number is
honest because nothing is downstream of wanting the list to be long.

> **Until that measurement exists, an empty drop over real data is the correct
> screen and it should be demoed as one.** It is the product's most distinctive
> claim, it is already designed (§6.1), and showing it against twenty real,
> nameable brands is a stronger demo beat than a full list nobody can defend.

### 5.4c A gate must test what the score does not

The threshold measurement in §5.4b left Fit as the binding constraint — five
creators cleared the bar on score and only two entered the drop. That looked
like a calibration question and it was not. It was a structural fault, and it had
been in the engine since the house brief was first run against real people.

**The house brief was being handed to the Fit judge as the brief.** §6.1 names it
*"Anyone worth a call"* and describes it as *big audience, no business, under
pressure* — and that description is not a brief, it is **a plain-English summary
of the score**. Missing is 35 points of *no business*. Pressure is 40 points of
*under pressure*. Handing those words to the gate asked a model to re-decide, by
eye, the same facts the model had already counted arithmetically.

The verdicts say it plainly. Every failure was a score restated:

> *"12k followers isn't the big audience the brief calls for"*
> *"under 5,000 followers — doesn't come close"*
> *"no sign of pressure or of anything to build on"*

**The proof is at the top of the board: the two highest-scoring creators, 34 and
32, both failed Fit.** A gate that removes your best candidates is not filtering
the score, it is overruling it — and overruling it with an eyeballed *"5k feels
small"* in place of weights that were calibrated against a measurement.

Two harms, and the second is worse than the first. One fact is **counted twice**,
once numerically and once again as a veto. And the veto is **unweighted** — the
score can say a creator is 34 of a possible 69 while the gate says *too small*
with no scale behind the word.

**What belongs in the gate is §5.1's original Format Fit** — *clippability, a
repeatable format, category demand*. Those are things the score does not measure
and cannot infer, which is exactly the property a gate needs. Distinctiveness is
deliberately excluded: §5.2 moved it into Trajectory, and putting it back would
reproduce the same bug one signal over.

The fix is in two places and neither is code that decides anything. The house
brief's words changed. And the judge is now told to **judge only what the brief
asks for** — never to fail a creator on audience size, existing revenue or
pressure unless the brief itself raises it. That last clause matters: a member
may legitimately write *"modest following is fine, but their stuff has to land"*,
and when they do, size is theirs to judge, because they asked.

**Measured on the same twenty:** the drop went **2 → 4**, Fit failures **6 → 3**,
and all three survivors are genuine format failures — creators with no readable
content at all. Score is the binding gate again, which is the arrangement §5.1
describes and the one the weights were calibrated for.

> The general rule, worth keeping past this instance: **a gate that can be
> predicted from the score is not a gate.** If Fit fails everyone the score would
> have failed anyway, it is costing an Opus call to add nothing; if it fails
> people the score liked, it is silently outranking the model. Neither is what a
> qualifier is for.

### 5.5 Recommended Play

Alongside the score, Warhol names **one** play from a fixed catalog of what Paradium actually runs:

- Newsletter + sponsorship slate
- Storefront / commerce (Encore)
- Standalone site + O&O ads
- Clip-first distribution
- Membership / community

One play, not a ranked set — the point is conviction, and multiple options reintroduce the choice problem the drop exists to remove. Fixed catalog, not free generation — it keeps the recommendation tied to capabilities that actually exist.

**No revenue estimates.** Fabricated precision is the easiest thing in the room to shoot at.

### 5.6 Learning, honestly

v1 does not retrain. Scoring is transparent heuristics plus declared LLM judgment.

What v1 **must** do is capture every decision with structured reasons, so the training set is real when there's enough of it. The defensible claim is *"the loop is instrumented from day one,"* not *"it learns."*

**One user type means one kind of judgment**, so v1.3 has no label partition to maintain. The earlier concern — casual users out-labelling a three-person desk and teaching a model organisational taste rather than origination judgment — was a consequence of the second role, and it goes with it.

What survives is the discipline underneath it. §10.3 carries `actor` on every decision event and §10.4 stamps anything mutable about that actor at write time, so if the population of users ever splits again the labels remain separable without a migration. **And the disagreement rows are still the most valuable ones** — two members reaching opposite calls on the same creator — which is why §6.7 keeps personal briefs and personal queues rather than one shared pile.

**The outcome field is the label that actually validates the model** (§8). Everything else in the decision log records what a human found interesting; only *signed* or *declined* records whether the machine was right.

### 5.7 Scan depth — what it costs to listen

Listening is not free, and Warhol should say so. §11 names continuous scanning as the largest engineering unknown in Phase One; the answer isn't "we'll figure out the crawler," it's **a machine that spends progressively, in proportion to evidence.**

Four passes. A creator only reaches the next one by earning it.

| Pass | What runs | Engine | Volume | Cost |
|---|---|---|---|---|
| **Discovery** | Goes and finds candidates that aren't in the population yet | LLM + search | **Per brief, not per creator** | Real, and it scales with how many briefs exist |
| **Sweep** | Audience band, cadence, bio, link presence | Rules | Thousands | Fractions of a cent, one-off |
| **Probe** | Monetization inventory, citations and links, audience history | Rules + third-party data | Hundreds | Cheap, one-off. **Where *verified absent* is earned** |
| **Study** | Brief fit, self-reported pressure, unmet-demand comments | LLM | Tens | Expensive, one-off |

**Discovery is new in v1.3 and it is the only pass that is not per-creator.** It runs when a brief is written into territory the population doesn't cover (§3, §11), and its cost scales with the number of briefs rather than the number of creators — which is what makes a ceiling on active briefs matter again (§6.7).

Watching a creator over time is a **recurring** cost, and the only one that compounds. It's what `Watched` means (§8), and it's why §5.8 exists.

**The scoring model already assumed this.** Format Fit is a pass/fail gate rather than a weighted pillar — justified in §5.1 as modelling hygiene, but it is equally a spend rule: you don't pay for the expensive LLM pass until Gap and Strain say the creator is worth it. Minimum confidence says the same thing from the other side — we won't surface someone we haven't paid to verify. The architecture was right before the cost argument existed for it.

> **The guardrail on the guardrail: budget constrains breadth, never depth.**
>
> Scout's most convincing line is *"no newsletter — we looked in six places."* If cost pressure ever makes that four places, confidence falls, the claim weakens, and the thing separating Scout from a follower leaderboard erodes invisibly and irreversibly.
>
> Budget decides **how many** creators reach Probe and Study. It never decides **how thoroughly** one of them is examined. The minimum-confidence floor is not tunable downward to save money.

### 5.8 Budget and pruning

Spend is visible, and managing it is part of the Scout's job rather than a finance exercise happening elsewhere.

**Where cost surfaces:**

| Scope | Shown as |
|---|---|
| Organisation | Currency. Budget, consumption, trend. Admin surface. |
| Brief | Currency. What this brief costs to run per month, **including its discovery pass** (§5.7). |
| Creator | **Effort, not currency** — places we looked, days tracked, passes run |

Per-creator spend is deliberately not shown in money. *"We've spent £4.20 learning about this person"* is both grim and the wrong optimisation target — it invites Scouts to make judgments about people on cost grounds. Effort tells them what they need (how hard we looked) without pricing a human being on screen.

**Watching has a window, set when you watch.** Watching compounds, so the watchlist needs an exit that isn't a rejection — and the exit is a date chosen up front rather than a rule that fires much later:

```
[ Watch ]  →  for  ( 1 month )   2 months   3 months
```

Default one month; longer only with a reason. **A six-month window contradicts the product's own claim** — the whole pitch is *they feel the pain this quarter*, and watching for half a year means we stopped believing our own timing signal.

This makes Watch **a hypothesis with a date**: *something changes here within a month*. When the window closes the creator returns as a decision, never as a silent expiry, carrying what moved:

> *"You watched Marisol a month ago. Audience up 6%. Still no newsletter. Posting picked back up."* — Keep watching / Promote / Pass

Two things this fixes at once: the watchlist stops being a pile that only grows and becomes **a queue of dated check-backs**; and the old six-month prune recommendation disappears, because nothing sits that long unexamined.

Pruning survives as **a Pass reason, not a fourth verb** — *no longer worth tracking*, with its own suppression rule (§8) — for the case where a check-back arrives and the answer is *stop spending on this one*. Reason codes are already structured and stored (§10.3), so it stays distinguishable from *already monetized*, and decision #4 survives intact.

**Scout recommends; a human decides.** Nothing leaves the watchlist without a person choosing it. §10.3 requires every decision to be an attributed event, and an automatic drop is a state change nobody chose — it throws away the label and creates names that vanished without an author.

---

## 6. Surfaces

### 6.1 Today's Drop — the front door

The only screen with a default. No search box.

**Briefs are tabs, and they are parallel.** A row of chips across the top: the house brief first, then each brief the member has written, then *+ New brief*.

```
[ Anyone worth a call ]  [ Southern CFB insiders ]  [ Home cooks, no store ]  [ + New brief ]
   house brief               yours                     yours
   nobody wrote it           editable, pausable        editable, pausable
   nobody can edit it
```

**There is no "All" view.** It was coherent when one standing scan existed and briefs narrowed it; it is incoherent now, for two reasons. The population is the sum of every brief ever written, so "All" would be a pile whose contents are an accident of who wrote what. And Fit is per brief (§5.1), so a creator outside any brief has no gate and therefore no honest score to put on a card.

The **house brief** replaces it. *"Anyone worth a call"* — defined in full at **§4.2a**, and note that the "big audience, no business, under pressure" phrasing this section used to carry is only half of it — is the wildcard brief §6.7 previously described as an option nobody would pick. Made the default it does three jobs: it gives the first tab a real gate, it preserves the old global Format Fit as its qualifier, and it means a member with zero briefs lands on a populated screen with no wizard, which is what §6.9 previously needed three steps to achieve.

**What that costs, accepted knowingly:** nothing shows everything across your briefs at once. Someone the CFB brief found may not appear in the house tab, because a beat writer with insider access isn't necessarily clippable. Three tabs are three different questions, so checking three is correct — but it is a real loss.

**The house brief has to show its brief.** UAT found the default tab presenting a
list with no visible assignment behind it, which makes the most important tab in
the product the only one that cannot explain why anybody on it is there. Every
other tab opens to a brief a member wrote and can read back; the house tab opens
to a gate nobody has ever seen. **It carries the same brief treatment as any
other** — the description in plain words, the derived chips, the quality bar —
with two differences that follow from what it is:

- **Nobody wrote it, so it is not editable and does not offer to be.** No *Rewrite
  it*, no version number, no pause. The brief screen for the house brief is a
  reading surface.
- **It states that it is the default and that everyone has it.** *"This one is
  always on. It is the standard Scout applies when nobody has narrowed it."*

This is also the answer to *what does a brief look like* for a member who has
never written one — which is currently taught by an empty form.

The rest of the screen:

- N creator cards, ranked
- **Pass** is available inline, one click, with a reason
- **Promote** requires opening the report
- Resurfaced creators appear inline, tagged with the reason they came back
- Empty state is a real state, designed as such
- The rewind lives on a creator's report, not here (§7)

**The card is three claims and nothing else**, in the order the report repeats:

```
┌──────────────────────────────────────────────────────────┐
│ (78)  Marisol Vega                        @marisolcooks  │
│       Instagram · 214k                                   │
│  ● Demand    1,940 people asked where to buy             │
│  ○ Missing   No newsletter, site or store — 6 places     │
│  ● Pressure  "honestly I can't keep up" — her, 6 days ago│
│  ●           Posting 40% less than she used to           │
│                         [Promote] [Watch] [Pass]         │
└──────────────────────────────────────────────────────────┘
```

Enough evidence to kill without opening; not enough to promote. **The audience is strongest as a number, the creator is strongest as a quote** — 1,940 people is a fact, one cherry-picked comment is anecdote, and one sentence in her own voice is the whole Pressure signal with no count that beats it. The card previously did the reverse.

**A brief is not a search.** The difference is the contract, not the input: a search returns results now, ranked by match; a brief returns nobody today, starts a standing job, reports tomorrow, stays threshold-gated and capped, and is allowed to find nothing. There is no query box anywhere in the product. Decision #11 holds in substance — what changes in v1.3 is that a brief *may* send Scout somewhere new (§3), which the old "a brief never adds names" wording forbade.

### 6.2 The report — the case

Full depth for one creator. **Evidence-forward**, not metrics-forward: the argument in words first, with content samples and metrics supporting it.

**The report is the card, expanded.** Same three claims, same order, same words, each carrying its own number and its own proof. The previous structure reorganised into Case / Quotes / Inventory / four drawers one click after promising three things on the card — a continuity break, which is what made it hard to follow. Volume was never the problem.

```
Marisol Vega  @marisolcooks · Instagram 214k · TikTok 61k          (78)
Sitting on a food audience that wants to buy, with nothing to sell them.
Fits your brief: Home cooks, no store
Recommended play: Newsletter + sponsorship slate
───────────────────────────────────────────────────────────────────────
DEMAND · Do people want to buy?                                     +32
1,940 people asked where to buy, in the last 90 days.
  "where can I buy this spice blend??"            2.1k likes · Mar 4
  "please tell me you have a newsletter"            890 likes · Mar 11

WHY SHE'S ON THIS LIST
  Audience up 38% this year                        214k → 296k
  Her posts land reliably                          median 180k, not one spike
  41 sites have cited or linked her work           up 12 this quarter
  She tried to build a store                       Shopify link, dead since Feb
  Nobody else does Oaxacan home cooking at this level

PRESSURE · Will she take the call?                                31/40
Audience up 38% this year — she's growing faster than she can handle.
  "honestly I can't keep up with this"             her · Mar 28
  Posting 40% less than she used to                last 90 days
  Store link dead since February — she tried, it broke

MISSING · Is there anything to buy?                                 +15
WHAT SHE'S BUILT
  ✗ YouTube channel     nothing at all — her clips are the whole business
                        and none of them earn
  ✗ Newsletter          not there · we looked in 6 places
  ✗ Store               not there · we looked in 5 places
  ✗ Representation      not there · we looked in 4 places
  ✗ Podcast             doesn't apply — she doesn't talk to camera
WHAT SHE'S SWITCHED ON
  ✗ Instagram subscriptions   off
  ✗ Shopping tags             off
  ✗ Affiliate links           none in 90 days
  ✓ Sponsored posts           2, last one Jan 2024
───────────────────────────────────────────────────────────────────────
⌄ How we checked · 34 checks across 11 places, Mar 4–29
⌄ What her work looks like · 4 samples
              [ Promote ]      [ Watch ]      [ Pass ]
```

Four things doing work in that order:

- **Pressure sits above Missing.** Demand and Pressure make you lean in; the inventory is the proof you check second. A ten-row list in the middle buried the strongest line on the page.
- **Trajectory reads as *"why she's on this list"*** — the answer to *why did the machine pick this person*, which nothing previously stated.
- **Weight is order, not a badge.** Highest-value absence first, with a clause on that line only.
- **"How it scored" is gone as a drawer.** The arithmetic is attached to the claim it belongs to.

Also present: **provenance and freshness on every fact** — source link, observed-at date, engine (rule vs LLM), with stale facts visibly stale; the **check record** (§6.10); and **what happened next**, when rewound (§7).

**Two things removed from the report**, both instances of summarising something the page already states:

- **Per-platform identity match percentage.** Nobody acts on `id match 87%`. Keep the cross-platform graph — 214k across four platforms is a different business from 214k on one — but say it in words only when the match is *weak*: *"we're not certain the TikTok account is the same person."*
- **Confidence as a number.** It is the share of checks resolved, and every Missing line now says *"we looked in 6 places."* Keep the number on lists, where the detail isn't visible. Drop it here, where it is.

**Content types, settled.** Only two things are evidence: **the audience's words** prove demand, and **the creator's words** prove pressure. Content samples prove Fit and stay collapsed — you check them after you're already interested. **Newsletters, blogs and emails are not evidence at all**; they are inventory, and can only ever appear as a *Present* line arguing against the case.

**Samples play in-app, without hosting anything.** Store the thumbnail, caption, counts, date and source URL — kilobytes. Click opens a modal running the platform's own embed player. Downloading and hosting video is expensive and carries the ToS and copyright exposure §11 already flags; embedding does not. Instagram's embed needs an approved app token, so YouTube and TikTok land first and Instagram may link out initially. **An embed always plays *now* while a report is often dated**, so stored thumbnails and counts are *as of the check* and the embed is labelled **current** — the same discipline as visibly stale facts.

### 6.3 Watchlist

Everything kept. Re-scored continuously.

The listening phase is defined as *"hundreds, we monitor"* — so monitoring has to actually do something. When a watched name crosses a threshold it is **re-injected into the drop**, tagged with why it came back. One inbox, not two.

This is what makes *"pressure is a timing trigger"* real rather than rhetorical: the machine tells you **when**, not just **who**.

**What the watchlist actually watches is the Trajectory block** (§5.2), because those are the lines that move. An alert quotes the trend, never the score delta — *"score dropped 4 points"* says nothing a person can act on, while this says exactly what is going wrong:

```
Audience down 8% this quarter          296k → 272k
No new citations in 60 days
Posting reliability falling
```

**Nothing leaves the watchlist automatically.** §5.8 holds: Scout recommends who to stop watching, a human decides, and an unauthored state change throws away the label. **Undecided cards in the drop do expire** — that is a different mechanism, described below — and the doc previously left the two easy to conflate.

**There is exactly one name for opening a report, and it is "Open the report."**
UAT found the closed-window state offering *Keep watching · Read it again · Stop
watching*, where *Read it again* is the same action as the *Open the report*
button sitting on the same row, wearing a second name because the copy was
written for the emotional moment rather than for the action. Two names for one
action is how a person learns the two do different things.

The rule, applied everywhere a report can be reached — drop, watchlist, passed
list, run-a-name, closed window:

| | |
|---|---|
| **The report has one door and one label** | *Open the report.* Never *Read it again*, *View report*, *See the case*, or any other synonym. It never changes because the reader has been here before. |
| **A decision control is never a door** | *Keep watching* and *Stop watching* change state. *Open the report* does not. They are different tiers and must not sit in one undifferentiated row of identical buttons — which is what the closed-window state currently does. |
| **The closed window offers the decision, plus the door** | Two verbs — *Keep watching* / *Stop watching* — presented as the decision they are, with the single *Open the report* link beside the row rather than inside it. |
| **The report's own verbs do not change by where you came from** | Promote / Watch / Pass behave identically on a report opened from a drop, a watchlist, a closed window or a search. Their availability follows the creator's state, never the referring screen. |

Third-party creators do not get a different set of controls because of which list
they are sitting in. **The state is a property of the creator, not of the route.**

### 6.3.1 The passed list

Passed creators go somewhere and it is visible.

The suppression logic already exists (§8) — every Pass reason carries a cooldown and a resurface trigger, so nobody actually vanishes. What was missing was a place to see them, which is why it *felt* like they vanished. One row states both halves:

```
Ramona Diaz · passed Mar 4 · too small · returns at 25k followers
```

The reason and the trigger together are what make a Pass read as a decision rather than a deletion. The real need is not *"I want to park people"* — Watch already means that — but *"I passed someone in March and now I can't find them."*

**Not a third holding state.** A parking lot between Watch and Pass would be a fourth verb, which decision #4 killed once and §5.8 killed again by making pruning a Pass reason. It would also be the third thing on screen competing for *"I'm not sure yet."*

**The watchlist is also the only place spend compounds** (§5.7). Every name here is monitored indefinitely until somebody decides otherwise, so the watchlist carries what it costs to run and Warhol's recommendations for what to stop watching (§5.8). Keeping a name is a real commitment, and the interface should say what that commitment is.

**Coming back after time away.** A member who hasn't opened Warhol in three weeks has roughly twenty-one capped drops of undecided cards behind them. Showing all of them as though they're fresh is dishonest, because an un-worked drop is stale by construction — the strain signal that surfaced a name three weeks ago may have resolved itself since.

So on return, **everything undecided is re-scored before it's shown.** Names still above threshold appear as live, dated when they first surfaced. Names that fell below are archived **with the reason**: *"38 dropped off — since monetized."*

This costs almost nothing (it's a Probe-depth operation) and it reuses machinery that already exists — the watchlist re-scores continuously anyway. It also turns the ugliest state in the product into a demonstration of its central claim: those 38 aren't a loss, they're evidence Warhol was right about them, sitting in the archive.

### 6.4 Run a Name — manual entry

Paste a handle or URL. Scout runs **the same ladder it runs automatically** (§5.7) and builds a report. From there the verbs behave identically.

- Manual adds are **source-tagged** so machine-found and human-found stay distinguishable in the label data. This is what later answers the only question that matters: *does Warhol find things humans miss?*
- If a manually-added creator later crosses the threshold on their own, they resurface in the drop like any watched name — the moment the machine agrees is how a Scout learns to trust the score.

**No cost confirmation before running.** Putting a price in front of a hunch reintroduces exactly the friction decision #22 was written to remove — *making them argue with the machine kills the entry point* — and it's fake friction anyway, because nobody has a basis to judge whether £0.40 is worth it. Everyone clicks yes and the dialog is ceremony.

Instead, **the ladder decides when to spend.** Sweep and Probe run immediately and cheaply. If the gap looks real, it escalates to Study. If it doesn't, Warhol stops and says so:

> *"We looked in six places — they've had a newsletter since 2023. We didn't go further."*

That's a better outcome than a report, and it's the same rule governing the automated pipeline, which keeps manual and machine-found names comparable.

**Anyone can run any depth, up to the organisation's budget ceiling** (§2).

**The screen is a search box, and it should look like one.** UAT found this
surface carrying three paragraphs of explanation above a single input — including
the entire *no price in front of a hunch* argument, which is a rationale for a
decision, not something a person needs read to them before typing a name. **The
argument stays in this document; it comes off the screen.** One line of orienting
copy, the field, the button. The reasoning is available behind the `?` (§6.11)
like every other explanation in the product.

**The input takes a handle or a URL, and says so by example.** The engine already
accepts both — `lib/resolve.js` harvests from published links either way — but
the field advertises only `@handle`, so a pasted profile URL reads as unsupported
to a person about to paste one. That is the single most likely first action on
this screen.

| Entered | Read as |
|---|---|
| `@handle` or `handle` | A handle, checked across every platform in the catalogue |
| A profile URL on a known platform | That platform, that handle — the handle is extracted and the platform is treated as confirmed-first-party, not guessed |
| A bare domain or a personal site | The creator's own site, which §5.3 counts as the most first-party surface there is |
| Anything unrecognised | Say so before spending. Not an error state — a question |

**After it runs, what you searched for stays on screen.** The results state
currently replaces the query with a verdict, so the one thing the person typed —
and the only thing anchoring them to what they are looking at — disappears at the
moment the answer arrives. The subject persists: **avatar, name, handle, the
platforms found** (§6.12), at the top, above everything the run concluded.

**The primary action after a run is `Open the report`**, and it is the only
primary on the screen. Everything the run produced is *in* the report; the
results screen is a landing, not a summary, and every fact it repeats is a fact
that can drift from the report's version of it.

**"Not in your drop" is a footnote, not a headline.** It currently occupies a
full-width block with its own heading and a paragraph of gate explanation, which
makes the dominant message of a successful search a statement about absence. It
is one line under the name, in the demoted register, and the gates in full are on
the report — which is the screen you sit with. **A search that returns somebody
is a success even when they do not clear the bar**; the screen should not read as
a rejection notice.

**A freshly-searched creator gets a preliminary headline.** A report reached from
a drop carries a headline because the ladder wrote one; a report on a name typed
thirty seconds ago has none, and opens on a blank where the argument should be.
Scout writes a provisional one from whatever is already settled.

> **The headline is bound by §12.1 without exception: Scout may quote and count,
> it may not diagnose.** A preliminary headline is composed only of countable
> facts already on the record and, where one exists, the creator's own words
> quoted and dated. *"1.2m on TikTok, no newsletter, no store, no site we could
> find"* is a headline. *"Overwhelmed operator with an untapped audience"* is a
> diagnosis, and it is exactly the sentence a machine writing under time pressure
> produces. The rule is not relaxed because the headline is preliminary — **a
> provisional diagnosis is a worse artefact than a confirmed one**, because
> nothing downstream marks it as provisional once it has been read.

It is **labelled as a first look** and it names what is still missing — *"first
look — no trend yet, comments not readable"* — which is the same disclosure
§5.4a puts on the card. When the ladder later produces a real headline, it
replaces this one and the report says it was replaced.

**If nothing was readable, there is no headline and the screen says why.** The
engine already produces this outcome honestly (*"we couldn't read a single one of
their own pages, so there is nothing solid to build on"*) and it is a better
answer than a sentence assembled out of nothing.

This is decision #22 restated in the terms that actually govern it, and then restated again in v1.3. "Manual adds bypass the score threshold, flagged as a Scout override" became "a Scout can authorize the spend"; with one user type it becomes **the ceiling authorizes the spend**. Same intent, and the constraint now sits where the money is rather than on a job title.

**Referrals are deleted along with the second role.** They existed so a Spotter could ask the desk to pay for a Study. There is no second role and no per-person spend gate, so a referral is now just a Promote, a Watch, or a Pass.

### 6.5 Outreach Package — generated on Promote

The report already contains everything a first-contact message needs, so generating it is nearly free:

- The signals, in plain language
- The recommended play
- A draft first-contact message

**The Scout sends it manually.** Warhol does not own outreach — that inherits deliverability and relationship problems that belong to a human, and turns a listening tool into a CRM.

Promote also creates the record in the Phase Two app.

### 6.6 Briefing export

A generated document — promoted names plus their reports — for the funding conversation. The Tier 3 decision happens in a room, not in the app. A shareable read-only link to a single report falls out of the same mechanism, **carrying the case and not the profile** (§12.1): demand, inventory and the play, without the Pressure block or the score.

This is also the proof surface that replaces the Track record screen (§12). *"Does this actually work"* is a question asked in a room, and it is answered with a document rather than a menu item.

Generate-a-document feature, not a new surface.

### 6.7 Briefs

**A brief is the assignment.** What we need, who we're looking for, where they post, and what good looks like. It is the only place a human tells Scout what to hunt.

Written as a description, in the member's own words:

> *"Someone to fill our gap in Southern college football. Insider access — beat writers, people close to local coaches and recruits. Modest following is fine, but their stuff has to land consistently."*

**Scout reads it back as editable structure.** Category, geography, platforms, audience band and the quality bar return as chips the member can delete or correct before saving:

```
Warhol read that as:
[Sports › College Football ×] [US South ×] [TikTok ×] [YouTube ×] [Reddit ×] [5k–75k ×]
Consistent engagement, not audience size
```

Three reasons the derived structure has to be visible rather than internal: it is what the overlap check compares, it is what estimates the brief's cost, and it is the only way a member can tell that Scout heard *"Southern"* as a genre. Description-only means a misread is silent and surfaces three weeks later as a wrong drop.

This supersedes the old wizard. §6.9's logic was right — *"platforms, audience band and geo are derived and shown as an editable summary"* — the input was wrong. Three dropdowns cannot express *"insider access to local coaches,"* and the old brief form asked for exactly the mechanics §6.9 argued a GM cannot answer cold.

**Free text is safe here** because §6.1's contract holds: the brief resolves tomorrow, gated and capped, never on keystroke. It is not decision #11's search wearing a costume. The one exposure is that brief creation now makes a model call — less dangerous than when it gated app entry, but the derived fields must remain a fallback path rather than an error if the call fails.

**The brief screen states which kind of brief was just written**, because discovery speed differs by an order of magnitude (§5.7):

```
312 people already match. Scout will start checking them now —
first drop within the hour.
```
```
This is a narrow one — nobody in Scout matches it yet.
We'll go looking tonight and have first names for you tomorrow.
```

**And it carries guardrails before it deploys**, since a brief is a standing job that spends every day:

```
This brief will look for up to [ 100 ] people
and run for [ 3 months ] before checking in with you.

Roughly $18 to start, about $12/month to keep watching.
First names tomorrow morning.
                                    [ Save and start ]
```

**The controls are in human units, with money shown as the consequence.** Nobody knows whether $40 a month is right; everyone knows whether *"look for up to 100 people"* is right. Both fields carry defaults, so nothing has to be decided to get going — a guardrail you may adjust, not a question you must answer.

**This applies to briefs and not to running a single name.** A brief is a standing commitment worth a number; pasting one handle is a hunch, and putting a price in front of a hunch teaches people to stop having them (§6.4).

**Narrow briefs are cheaper than broad ones**, which is backwards from the intuition. *"Southern college football insiders with coach access"* is a handful of searches against people who are written about and cross-referenced. *"Food creators, 10k–100k"* has no natural stopping point. The cost driver is **breadth, not specificity** — which is fortunate, because the niche briefs are both the differentiated ones and the cheap ones. Each brief's search is capped, and a brief that hits its cap says so rather than quietly stopping.

**Editing makes a version.** Decisions stay attached to the version they were made under; the drop rebuilds from the new version tomorrow. Two reasons it is versioned rather than in-place: §10 already stores the score snapshot at the moment of each decision and `actor_role` at write time, so the data model is already built on *a decision means what it meant when it was made*; and without versioning the labels rot, because a Pass in October was a judgment about October's question.

> **Editing a brief never removes anyone from your watchlist.** Once you kept someone, that is your call, not the brief's. A brief governs what *arrives*, never what you have already chosen to hold.

The edit screen says what it is about to do — *"this changes tomorrow's drop. Your 4 watched and 9 passed creators are unaffected."* Without that line, versioning looks like nothing happened.

**Pause yes, delete never.**

| | House brief | A member's brief |
|---|---|---|
| See what it's made of | Yes | Yes |
| Edit | No | Yes — makes a version |
| Pause | No | Yes |
| Delete | No | No — archive only |

**Pause matters most**, because a brief is a standing job costing money every day it runs (§5.7): Scout stops looking, the tab greys, every decision stays, one click resumes. **Delete must not exist** — every Promote, Watch and Pass under a brief is a training label, and §5.6 says those labels are the only asset v1 is actually building. Delete orphans them; archive hides the tab and keeps the record.

**Overlap check on creation, extended to paused and archived briefs.** Scout compares a new brief against existing ones and offers to join — and against retired ones and offers to resume:

> *"This looks like 'SEC recruiting insiders,' paused in March. It found 34 people — 6 promoted. Resume it, or start fresh?"*

Resuming beats creating on both axes: the population already exists, so results are immediate rather than tomorrow; and the preview is **the actual people it found**, not a description. Nobody can preview a search that hasn't run; you can preview one that already has.

**Anything resumed is re-checked before it is shown.** A brief paused in March carries March's facts, and a stale drop presented as fresh is the exact trust failure §5.3 exists to prevent. §6.3 already has this machinery for members returning after absence.

Overlap remains an **exact category match that never blocks** — joining is offered, so a missed overlap is a weak suggestion rather than a blocked user. The prompt carries the spend it saves (§5.8): *"Joining saves the discovery and probe spend on roughly 4,000 creators."*

**Brief lifecycle.** Two rules keep standing jobs from accumulating unowned:

- **Inactivity** — a brief nobody has opened in 60 days is paused and its author emailed. Paused, not deleted; resuming is one click.
- **Ceiling** — a cap on simultaneously active briefs. This binds harder in v1.3 than it did before, because **discovery cost scales with the number of briefs rather than the number of creators** (§5.7).

**Briefs are personal; the population is shared.** Each member has their own briefs, their own drop and their own decisions. Two members writing similar briefs share the same underlying pool of creators and the same checks, so the second one costs almost nothing — which is what the overlap prompt is selling.

> The entire reason to put a GM on outdoor gear is that they would judge those creators differently. A shared queue where one person's Pass deletes the card for everyone erases precisely that difference — and the disagreement is the most valuable label in the set (§5.6).

**Every decision is attributed.** Non-negotiable; it's what makes the labels auditable.

**When Scout misreads a brief**, passing twenty people one at a time is not a repair. A Pass reason points at the brief rather than the person — *"not what I asked for"* — and after three of them Scout offers to re-read the brief with the member. Without it, a misread brief has no recovery except abandoning it.

### 6.8 Sign-in

Access is required. There is no anonymous view of the application.

- **Google SSO, domain-gated to Paradium.** The domain is the gate, so there is no allowlist to maintain. Identity comes with the session, which is what makes "every decision is attributed" real rather than an honour system.
- **First sign-in creates a member.** An admin can switch the admin permission on; nothing else distinguishes anyone.
- **The login screen is a utility gate** — wordmark, one button. No marketing copy, no product tour, no backtest teaser. If Warhol ever becomes a public product it earns a landing page then; building one now is a second surface to maintain for an audience of one company.
- **The only unauthenticated surfaces** are the signed, expiring links from §6.6, scoped to a single report or a single briefing. They never grant access to the app, a brief, or a drop.

**Real accounts replace the mocked sign-in.** Every prototype through v5.2 treats
*Continue with Google* as a button that sets `state.phase = 'app'`. That was
correct while nothing behind it depended on who you were — but §5.6 makes every
Promote, Watch and Pass a **training label attributed to a person**, and an
attribution to a session that anyone can start is not an attribution. The
mocked gate has to go before the first real decision is recorded, not before the
first real creator is.

What has to exist, in order, and no more than this:

| | |
|---|---|
| **A member record** | Email, display name, admin flag, created-at. Nothing else — §2 says nobody is a noun. |
| **A way to create one and grant access** | Admin adds an email; that email can sign in. This is §2's *who's in* knob, which is already specified and not yet built. |
| **A real session** | Sign-in produces a session bound to a member. Every decision written to the log carries that member's id, which is what §5.6 has always assumed. |
| **Deactivate, never delete** | Same reasoning as briefs (§6.7): a deleted member orphans every label they wrote. |

**Google SSO stays the target and stays domain-gated to Paradium** (decision 30).
The domain is the gate, which is why there is no allowlist to maintain.

**Local storage is acceptable for now, and it is a sequencing decision rather than
an architectural one.** Nothing is hosted yet, so there is no callback URL for
Google to return to and no server to hold a session — which makes real SSO
blocked on hosting rather than on design. Until then a local member store with a
real session is enough to make attribution honest, and it is the same data shape
SSO will write into.

> **The one thing local storage must not become is a password.** Scout is not in
> the business of storing credentials, and a hand-rolled password field on a
> prototype is how a demo acquires a security surface nobody scoped. Local mode
> is **pick your name from the member list** — honest about being a stand-in,
> attributable, and impossible to mistake for authentication. It is replaced
> wholesale by SSO the day there is a host, and it never ships outside Paradium.

### 6.9 First run

**There is no wizard and no gate.** The premise that once justified one — *no mandate, no drop, an application that does nothing* — is false now that the **house brief** is the default tab (§6.1). A new member signs in and lands on today's drop, populated, with people on it. Writing a brief is something they do when they want to narrow, not something they must survive to enter.

If a brief is narrow enough to return nothing, that is a **legitimate outcome, not a failure** (§5.4), and the designed empty state carries it. The guarantee is that the screen is real and honest, not that it is full.

**The rewound cohort is a first-run moment, not a menu item.** A new member sees January 2024 once, on day one, where calibration actually matters — the machine being right about names nobody had heard of. It does not become a permanent destination, for the reason given in §12.

### 6.11 Explanation

**No help page, no glossary, no destination.** Nobody reads a dictionary while making a quick decision, and a reference page is a second explanation system that drifts from the first within a month.

Four rules:

1. **The label does the work.** A hint that explains a label is a label that failed. *"Is there a business here?"* needs no hint; *"Operator Strain"* needed a paragraph. This is why §4.3's rename comes first — the rest of this section depends on it.
2. **Every explainable term carries a persistent `?` at the term.** Two sentences, opens in place, never navigates away.
3. **Dismissed is not deleted.** The old hints fired once and were gone forever — you dismiss it in week one and need it in week six, after you have stopped being new but before you have stopped being unsure. A hint fires once unprompted, then lives on as the `?`.
4. **Arguments attach where they bite.** *"Scout found nothing worth your time today"* explains the empty day on the empty day. Not on a page about empty days.

**The `?` returns receipts, not a definition.** Clicking `?` on Demand does not say *"measures whether the audience is worth more than they earn"* — it says *"No newsletter. No store. No sponsored posts. 1,940 people asked where to buy. We looked in 6 places."*

A definition is identical on every screen, so after the first read every future `?` is a dead click, which is how a help system teaches people to stop using it. Receipts differ every time, so the `?` stays worth pressing — and the component that explains the pillar is the same component that argues the creator, so it is built once. The cost is that someone who genuinely doesn't know what Demand means gets four facts and has to infer the concept, which is exactly why rule 1 is first.

### 6.10 The Ledger

Everything Warhol checked, when, at what depth, and what it cost. **Two views of one record**, at different scopes:

**Per creator — on the report**, labelled *"How we checked."* The receipts behind the argument: these places, looked at on these dates, here are the URLs, resolved to these verification states. This is close to free to build, because §10.1 already requires every fact to be stored as `{value, source_url, observed_at, verification_state, engine}` and §7's rewind is impossible without it. The check record is a read view over data that must exist.

It stays collapsed. Nobody opens receipts until they are challenged — but they must exist, or *"we looked in 6 places"* is a claim rather than a fact.

It is also the proof behind the product's single most convincing line. *"No newsletter. We looked in six places"* is an assertion until someone can open the six.

In the demo it does something better: showing the check record **as it stood in January 2024** is what proves the rewind wasn't retro-fitted. The rewind claims the machine would have found these people; the check record is the evidence.

**Org-wide — an admin surface.** What was scanned, at what depth, at what cost, trending. This answers *is the machine working* and *where is the money going* — operations questions, not sourcing questions. A Scout does not need to scroll four thousand swept creators.

> **No names at Sweep depth.** A stored, browsable list of thousands of creators evaluated and silently discarded is a liability the moment it leaves the building, and noise to everyone inside it. Sweep shows counts and cost. Names appear from Probe upward, where an actual judgment was made and a verification state was written.

### 6.12 The creator's identity on screen

Every surface that names a creator has been showing initials in a coloured tile
and a single handle. That was right while the cohort was fictional — there is no
avatar for a person who does not exist — and it stops being right the moment real
people are on the list, because the two things a human uses to recognise a
creator are **their face and the account they are known by**, and Scout currently
shows neither.

**An avatar, at least one, wherever a creator is named.** Card, report, watchlist,
passed list, run-a-name result. Sourced from a profile the engine already
confirmed is theirs, so the picture and the evidence come from the same place.

- **Link, do not copy.** The image is referenced from the platform that serves it.
  Scout does not hold a library of photographs of people who never consented —
  §12.1's whole argument is about how much of a stranger we are storing, and a
  face is the most identifying thing on the screen.
- **Initials remain the fallback and are never a failure state.** Not every
  profile is readable — Instagram is closed, TikTok is increasingly gated — and a
  broken image is worse than no image. The tile that exists today stays as the
  fallback, unchanged.

> **What "link, do not copy" costs, measured 6 August 2026.** TikTok serves
> avatars from a signed CDN and the signature carries an expiry. On a live
> profile the window is about **48 hours**. YouTube's `googleusercontent` URLs
> are unsigned and do not expire.
>
> So a linked TikTok avatar is not a stable asset — **it is a fact with a death
> date**, and the rule has to account for that rather than pretend otherwise:
>
> | | |
> |---|---|
> | **The expiry is stored with the URL, never separately** | A link nobody can tell is dead shows a broken image to a room. The record carries `avatar.expires`, and staleness is computed once against the record rather than by each surface that draws a face. |
> | **Stale falls back to initials before it breaks, not after** | This is what makes initials a permanent state rather than an error path. |
> | **The face comes only from a surface we actually read** | An avatar taken from a guessed URL is a photograph of somebody we never confirmed is them — the `mkbhd.substack.com` failure (Q9(d)) with a human face on it. |
> | **Prefer a link that survives over a link that is bigger** | An unsigned YouTube avatar beats a TikTok one expiring Saturday, even when TikTok is the larger account. |
>
> **The consequence for the demo is concrete and worth stating plainly: an
> exported seed is a snapshot, so every TikTok avatar in it is dead within two
> days of the export.** Fourteen of the twenty demo creators have no YouTube
> channel, so for most of the cohort the face is live only if the seed was
> exported that week. **Re-export before demoing, or expect initials.** In the
> live product this is a non-issue — the drop re-checks daily and the URL
> refreshes with each observation. It is only exports that go stale.
>
> **What this does not license is caching the image to make the demo easier.**
> That trades a two-day-old picture for a permanent store of photographs of
> people who never consented, which is the exact exposure §12.1 exists to limit.
> The demo is the weaker interest.
- **Choosing between avatars is a nice-to-have and explicitly not v1.** A creator
  with four confirmed profiles has four pictures, and picking among them is a
  preference control on a surface that has no preferences. If it is ever built,
  it belongs to the report, not the card.

**The accounts, named and clickable.** The engine already records every surface it
confirmed — platform, URL, follower count, and whether it was read — in
`surfaces[]`. That data reaches the seed and is then not shown. Displaying it is
close to free and it does three things at once:

| | |
|---|---|
| **It lets a person check the work** | The fastest way to disbelieve a Scout report is to open the profile. Making that one click is a confidence move, not a convenience. |
| **It carries §6.2's identity claim in public** | Where two platforms could not be merged into one audience total (Q11(b)), the accounts are listed **separately and said to be separate**. The list is where that honesty becomes visible instead of a sentence nobody reads. |
| **It distinguishes confirmed from guessed** | A surface confirmed first-party and a surface merely found at a matching handle are not the same claim, and the interface has to say which is which — this is the `mkbhd.substack.com` failure (Q9(d)) rendered on screen. **A guessed surface is never presented as theirs.** |

Links open in a new tab and carry `rel="noopener noreferrer"`. Follower counts sit
beside each account rather than as one merged number, wherever merging was refused.

### 6.13 Sources — where Scout is allowed to look

A settings surface listing every place Scout can read, what each one can
establish, and whether it is switched on. It exists because the product's
credibility claim is *"we looked in 28 places"* (§6.10) and until now the only
way to know which places was to read the code.

**It is a coverage control, not a spend control, and the difference is
load-bearing.** The intuition when this was proposed was a price list per
platform — see what each source costs, switch off the expensive ones. §11.4's
measurement kills that framing: across a full run of twenty creators, **5,167
fetches cost $0.0000** and every cent of the bill was model judgment. A per-source
price column would read `$0.00` down its entire length and teach the wrong lesson
about where the money goes.

What switching a source off *actually* does is **lower what Scout can prove**:

| Source | What it establishes | Switching it off |
|---|---|---|
| Their own site | store, newsletter — the strongest single read | Absence can no longer be earned for either (§5.3) |
| YouTube Data API | comments → Demand, post dates → cadence | Demand and most of Pressure go unreadable |
| Reddit | comments → Demand, from outside their audience | Demand loses its only non-YouTube source |
| Newsletter / store / membership guesses | is there one? | `requiredPlaces` unmet → `not_found`, never `verified_absent` |
| Apple Podcasts | is there a show? | one tier-2 item unreadable |
| Instagram | links only — *can never decide* | nothing, which is itself worth showing |

So each row shows **what it proves and what it costs you in confidence**, and
switching one off moves the confidence figure on screen. That is a control a
member can reason about. A price column is not.

**Three jobs beyond the toggle.** It makes the *"we looked in N places"* claim
inspectable rather than asserted. It gives a member a legitimate way to exclude a
source on policy grounds — a desk that will not put Reddit hearsay in a record can
say so once, rather than discounting it by hand forever. And it is where a source
that exists but is not wired up is **stated as such**: Reddit currently reads
*built, not connected*, which is more honest than omitting it and more useful than
a roadmap slide, because it names the exact thing standing in the way.

> **A source that is off must never look like a source that found nothing.** This
> is §11.3's distinction moved onto a settings screen, and it is the one way this
> surface could do real damage — a member who switches Reddit off and then reads
> *"no purchase intent found"* has been told something false by omission. Any
> report produced while a source was off says which sources were off.

---

## 7. Time travel and the rewind

> **⚠️ This section is under an unapplied cut.** The January 2024 rewind was cut
> as a user-facing feature on 6 August 2026 and **that cut has not been applied
> here or in any prototype.** What survives — and specifically whether the
> `as_of` / append-only-observations *data* requirement outlives the screen, since
> it also underwrites freshness, stale-fact display and the check record — is the
> subject of the reconciliation session. v1.4 does not touch it, because the cut
> invalidates decisions 33 and 45, §6.9's first run, the report's *what happened
> next*, and §13's opening demo beat, and unpicking those one at a time is how a
> document ends up contradicting itself in four places. **Read this section as
> historical until that session runs.**

**"As of [date]" is a first-class concept in the application**, not a separate proof screen.

The demo beat is *"same screen, different date."* Credibility comes from it being the same machine, rewound — not from a special exhibit built to impress.

**Requirement this imposes:** every observation carries an `observed_at` timestamp, and every query takes an `as_of` parameter. Nothing observed after `as_of` is visible when rewound. This is the only honest way to backtest, and it is a real engineering constraint — it means the data layer is append-only observations, not mutable creator records.

**Briefs are questions, not observations, and are exempt from `as_of`.** §6.9 rewinds a new member to January 2024 through a brief written today — which, read strictly, filters a historical cohort by something that did not exist at the time. The exemption is correct but it has to be stated, because the rule it bends is the one the entire proof rests on:

> A brief expresses **what we are looking for**. An observation records **what was true**. Rewinding must hide everything Scout learned after the date; it must not hide the question being asked, or there is no question. The claim is *"with this brief, on this evidence, Scout would have surfaced these names"* — and the brief is necessarily ours, now.

The line to hold: a brief may narrow a rewound view, never populate it. Nothing enters a rewound drop that wasn't observable at `as_of`.

**And the disclosure goes on screen, not in a footnote.** Someone in the investment room will ask *"did you build that filter already knowing who won?"* — so the rewound view carries one line stating plainly that the brief is today's and the evidence is January's. Pre-empting the question converts the weakest moment of the demo into a credibility beat, and §14's threshold-calibration problem is the same class of honesty and should be handled the same way.

**Outcome reveal.** When rewound, each card can reveal what actually happened to that creator since — followers now, what they built, what they're worth. The rewind earns credibility; the reveal converts it.

---

## 8. Lifecycle and states

**Every state is the past tense of a verb a human performed.** That's the whole list, and it costs no vocabulary beyond the three verbs:

| State | Produced by | Meaning |
|---|---|---|
| **Watched** | Watch | Kept, re-checked continuously, resurfaceable |
| **Promoted** | Promote | Outreach package generated — then carries an outcome, below |
| **Passed** | Pass | Suppressed per reason rule |

Three former states are gone as product terms. *In Drop* was computed, not stored — you're in the drop if you cleared the gates and nobody has decided yet. *Candidate* meaning "scored but not surfaced" is a machine state, so it stays in the data model and out of the interface, where the word is **creator**. *Referred* went with the second role (§2, §6.4).

The test that produced this list: if nobody performed it, it isn't a state a user needs a name for.

### The outcome on a promoted creator

**Promote is not the end of the record.** Previously a promoted creator sat in `Promoted` forever while the record was handed to a Phase Two app that does not exist — so the system learned that a human found her interesting and never learned whether the call worked. That is taste, captured. The label that would actually validate the signal model is *she said yes*, and nothing collected it.

One field, four states, a date, and a reason on decline:

| Outcome | |
|---|---|
| **Contacted** | Package sent |
| **Replied** | She engaged |
| **Signed** | The only outcome that validates the whole model |
| **Declined** | With a reason — see below |

This does not cross §6.5's line. **Recording an outcome is not managing a relationship**; there are no notes, no next steps, no reminders, no pipeline. Warhol still does not own outreach.

The decline reasons matter because each invalidates a different part of the model:

| She said no because… | What it teaches |
|---|---|
| Already with an agency | The **Missing** check failed — representation wasn't in the inventory (§5.2) |
| Doesn't want to commercialise it | **Fit** failure. Real signal, learnable |
| Bad timing, ask next year | **Pressure** was wrong — she isn't feeling it yet |
| Never replied | Not a no. A different failure, and the most common one |

**The prompt is the load-bearing part, not the field.** Outcome fields sit empty in every product that has ever shipped one. So it rides in the digest — *"You promoted Marisol 9 days ago. Any word?"* — answerable from the email in one click. If it requires someone to remember to update a record, it will be blank in a month.

A declined creator gets a suppression rule like any Pass reason, so nobody promotes her again in April for want of knowing about February.

**State is held per member, not per creator.** The same creator can be Watched by one member, Passed by another, and still sitting undecided in a third member's drop. This is intended (§6.7) — the creator is shared, the judgment is not.

### Pass reasons drive suppression

The pass-reason taxonomy earns its keep twice — as training labels **and** as suppression logic. It also kills the most irritating failure mode: the name you rejected at 900 followers reappearing at 900 followers next month.

| Reason | Suppression rule |
|---|---|
| Already monetized | Permanent unless the monetization inventory changes |
| Too small | Revisit at audience threshold |
| Wrong category | Permanent for that brief only |
| Brand-unsafe | Permanent, global |
| Not distinctive | Cooldown 180d |
| No pressure / not ready | Cooldown 90d; resurface on a pressure trigger |
| **No longer worth tracking** | Stops the recurring watch cost. Cooldown 180d; resurface on any material inventory or pressure change |
| **Not what I asked for** | **Points at the brief, not the creator.** Suppresses for that brief only; three of them and Scout offers to re-read the brief with you (§6.7) |
| **Declined** | Set by the outcome field, not chosen inline. Permanent unless the decline reason has a stated revisit date |

That last reason is what would otherwise have been a fourth verb. **Pruning is a Pass with a reason**, which keeps decision #4 intact and loses nothing: reason codes are already structured, stored, and used as both training labels and suppression logic (§10.3), so *no longer worth tracking* stays perfectly distinguishable from *already monetized*. It differs from every other reason in one way worth noting — it's a judgment about **our spend**, not about the creator, which is why it resurfaces on any change rather than requiring one.

**Suppression is per member by default**, because state is per member (§10.5). Your Pass removes the creator from your queue, not anyone else's.

**Brand safety is the one exception, and it escalates.** More eyes are genuinely better here, and a colleague may know something nobody else does. A brand-unsafe flag:

- Still suppresses only in the flagger's own queue — nobody can delete a name for everyone
- **Surfaces on the report itself**, not merely as a card annotation
- **Blocks silent promotion** — promoting a flagged creator requires acknowledging the flag first

The decision stays with whoever is promoting. They just don't get to not know.

---

## 9. Notifications

- **Digest email** covering every brief a member has: *"Your drop is ready — 8 new, 2 resurfaced."* This is the product's heartbeat and the reason it's a *daily* drop.
- **Immediate alert** for acute triggers on watched names. "They'll take the call this quarter" means some windows close overnight.
- **Outcome prompt** — *"You promoted Marisol 9 days ago. Any word?"*, answerable in one click from the email (§8). This is the mechanism that makes the outcome field non-empty.
- **Browser push** opt-in.

Email is the default channel: it works when the app is closed, and it's forwardable to an exec.

**Cadence is a setting, not a role.** With one user type there is no role to key it off, but the underlying tension is real: §5.4 makes zero-result days a virtue, and for someone working the desk daily they are exactly that. For someone checking in occasionally, a run of *"Scout found nothing worth your time today"* emails reads as a dead product, and they unsubscribe once and never return.

| Setting | |
|---|---|
| **Daily, including empty days** | Default for anyone who opens Scout most days. The empty day is the signal. |
| **Weekly, suppressed when empty** | Plus immediate alerts on names they personally watch |

Scout can suggest the switch based on how often someone actually opens it, but it never changes it silently. These are **defaults, changeable in settings — not asked at first run**, which no longer has a wizard to put them in (§6.9).

---

## 10. Data model implications

Three constraints fall out of decisions above and should be honoured from the first line of code:

1. **Append-only observations.** Every fact is `{value, source_url, observed_at, verification_state, engine}`. Creator records are projections over observations at a point in time, not mutable rows. Required by §7.
2. **Verification state is not nullable.** Every absence-based check resolves to Present / Verified absent / Not found. *Doesn't apply* is a separate relevance flag, not a fourth value (§5.3).
3. **Every decision is a labelled event** — actor, timestamp, verb, reason code, and the score snapshot at the time of the decision. Required by §5.6.
4. **The actor's permissions are recorded on the event, not looked up from the user.** Roles are gone, but the principle survives: anything about the actor that could change later must be stamped at write time, or every past decision silently acquires today's meaning.
5. **Briefs are versioned, and queue state is keyed on the version.** Per-member state (`in_drop`, `watched`, `passed`) is keyed on `(brief_version, member, creator)`, not on the creator. Editing a brief creates a version; decisions stay attached to the version they were made under. Required by §6.7 and §7.
6. **Absences are weighted, and the weight is data.** Score is a weighted sum over inventory items, not a count (§5.2). The weights are configuration, because §5.4's recalibration will change them.
7. **A promoted creator carries an outcome** — state, date, reason code — as an event, not a mutable field. Required by §8.
8. **Observations on passed creators have a retention window.** A suppression that lasts 180 days does not justify holding the observations forever (§10.9).
9. **Data on real people is subject to a stated retention and access policy** with a named owner, gating the first real creator record — not the prototype, not the hackathon. See §12.

---

## 11. v1 sourcing — what we're actually committing to

The crawler is deliberately out of scope for hackathon week. The PRD should not let the demo imply that infrastructure is solved.

**What v1 ships:**
- A **curated seed cohort** (~200 creators) with real, manually-verified observations across a small number of briefs
- A working **on-demand path** for manual entry (§6.4) that genuinely fetches and scores a named creator
- The full scoring, drop, report, and decision machinery running on that data

**What v1 defers, named as risk:**
- Discovery at scale. This is the largest engineering unknown in Phase One and it belongs in the ask, not hidden in the demo.

The insight is the signal model. The pipeline is engineering. Prove the first, scope the second.

### 11.1 How discovery works — the decision

**Not a bought index.** Creator-discovery vendors hold millions of profiles with handles, audience size, category and platform links, and subscribing would delete the largest engineering unknown for a monthly bill. It was rejected for a better reason than cost: **the index is good at exactly the use case this product deleted.** It answers *"all food creators, 10k–100k"* — broad category browsing, which is what the search box would have been. It has no field for *"beat writers with access to Southern college coaches."* The brief-shaped product wants search-led discovery; the index was the wrong tool. It also skews toward creators who already monetize, since it exists to serve brand-sponsorship matching — the inverse of the thesis.

**Discovery is LLM plus search, per brief.** Three constraints that should govern the build rather than be rediscovered in it:

1. **It is strong exactly where the product needs it and weak where it doesn't.** An LLM can find named, written-about, cross-referenced people — beat writers, insiders, experts — because that is reasoning over public text. It cannot enumerate every account between 10k and 100k; that is a database query with no database. The niche briefs are the differentiated ones, so this is the right trade.
2. **It is a per-brief cost that scales with the number of briefs**, not the number of creators (§5.7). This is what makes the brief ceiling in §6.7 bind.
3. **Discovery and verification sit on opposite sides of a wall.** Finding people may be a model guessing well. Deciding whether a newsletter exists may not (§5.3).

**Building the Warhol discovery service is a separate piece of work** — data engineering, not product design — and is scoped in its own session.

### 11.2 Citations — don't buy the data yet

A proper backlink provider (Ahrefs, Semrush, DataForSEO) would be a new external dependency with a monthly bill. **Skip it for now.** The people-finding step is already reading the web, so *"has anyone written about this person"* falls out of it for free — coarser than a real backlink tool and probably enough to tell an insider from an entertainer. Buy the real data only if the free version turns out to matter and turns out not to be enough.

### 11.3 Comments — what we can actually collect

Unmet demand is the strongest single signal in the model and the hardest to source legitimately. It splits by platform:

| | |
|---|---|
| **Clean** | **YouTube** and **Reddit** — official APIs return comments. Rate-limited, no problem. |
| **Hard** | **TikTok** — the API that returns comments is gated to approved researchers; commercial access is limited. |
| **Effectively closed** | **Instagram** — comments are readable only on accounts you manage, not other people's. |

**Reddit turned out to cost a credential, and the table above understated it.**
Verified 6 August 2026: the keyless JSON endpoints this row assumed —
`www.reddit.com/*.json`, `old.reddit.com`, `api.reddit.com` — now answer **403**
to every client, browser user-agent or not. The row is still true, but "official
API" now means the documented **OAuth app-only grant**, which is free and
unmetered in any way that matters and requires a registered app. It is *clean*;
it is no longer *free of setup*.

**The reader is built and not connected.** It reads Reddit as a **second** demand
source rather than a fallback, because the two answer different questions: a
comment section is *their audience*, and a Reddit thread is *everyone else* —
unmoderated by the person being discussed, which arguably makes it the better
evidence. Without the credential it reports itself unreadable, and the check
record says so in those words rather than recording a zero. That distinction is
this section's whole argument and it survives the source being switched off.

> **The risk Reddit adds that YouTube does not: attribution.** A comment under
> someone's video is unambiguously about them. A Reddit search returns posts that
> merely *contain the word*, and counting a stranger's conversation as this
> creator's demand would put a fabricated quote on a real report — arriving
> through a door neither §5.3's wall nor the verbatim-quote check watches, because
> both of those police *what was said*, not *who it was said about*. Presence
> therefore requires a name match on a word boundary, enforced after the search
> returns, and handles too short to match on confidently are refused outright.
> **An unread creator scores neutral; a misread one scores somebody else's
> audience**, so refusing is the cheap error.

**Don't fight it.** Where comments can't be read, demand resolves to *not found*, which already scores neutral and lowers confidence (§5.3). The model was built for exactly this: a creator whose comments we cannot see is honestly a less certain call, and the report says so.

Two things soften it. **Creators quote their own demand** — *"so many of you asked about the spice blend"* is in her caption, readable, and it's her saying it, which is arguably better evidence than a comment. And it biases toward YouTube-present creators, where everything is visible — which is also where the money is, so the bias points the right way.

**No scraping.** It breaks terms of service, it breaks constantly, and a listening product caught scraping is a story.

### 11.4 What the passes cost — a measurement, not a decision

§5.7 asserts a cost gradient with no figures behind it, and the figures cannot be reasoned out in a room.

**What matters is the ratio, not the absolute.** If a deep look costs 50× a quick look, tens of them are affordable. At 5,000× the whole ladder changes shape.

**The answer is to run twenty creators end to end and read the bill.** Half a day's work once the finding service exists, and it settles three open questions at once: the cost gradient, the brief ceiling, and when a check-back is worth repeating. Until then, no budget figure in §5.8 means anything, and the PRD should say so rather than publish a guess.

**The brief ceiling then falls out of arithmetic** — monthly budget divided by what one brief costs to keep running — rather than being chosen (§6.7).

**And answer the cost question before it's asked.** "How much does it cost to run this?" is the question the funding room will actually ask about a machine that listens to the whole internet, and the honest answer isn't a crawler roadmap — it's §5.7. Warhol spends progressively, in proportion to evidence: thousands swept for fractions of a cent, hundreds probed, tens studied. That is an architecture, and it's a better answer than a vendor contract.

**What v1 ships of that model:**
- The three passes and the prune reason are real in the PRD and visible in the prototype, running on **representative** figures
- The Ledger (§6.10) shows real check records, because those exist on the seed cohort

**What v1 defers:**
- Actual cost metering. The demo runs on a curated cohort of fictional creators, so metered figures would measure nothing.

Say it and show it now; meter it later. The architecture is cheap to state today and expensive to retrofit — the instrumentation is the reverse.

**Which model does which job — decided 6 August 2026.** The Study pass makes
three model calls per creator, and this document had never said what they should
run on. It was a single constant in a config file, which meant the most expensive
recurring decision in the product was the one nobody had made.

The split is the same line the wall is drawn on:

| Job | Runs on | Why |
|---|---|---|
| **Classify** — pull the comments that ask where to buy, pull the lines where they say they can't keep up | **The cheap model** | This is extraction, not judgment. Every quote is checked against the source text and anything not copied verbatim is discarded, so a weaker model **cannot smuggle in a fabrication — it can only miss one.** A missed signal scores neutral and lowers confidence, which is precisely what §11.3 already specifies for a signal we could not read. |
| **Judge** — does this person match this brief | **The strongest model** | Fit is a **gate** (§5.4). A wrong verdict here does not lower confidence; it silently admits or excludes somebody, and nothing downstream marks it as uncertain. Proposing candidates (§11.1) is the same shape. |

**The asymmetry is the whole argument, and it is worth stating plainly: the
failure mode of a cheap classifier is a false negative, and the failure mode of a
cheap judge is a false positive that looks exactly like a real one.** This
product's entire credibility claim rests on the second kind not happening.

**Measured consequence:** twenty creators × three calls is roughly **$1–3.50 per
run** on one strong model, against **well under a dollar** on the split — and a
threshold read (decision 114) needs several runs before it converges. The demand
input cap came down from 60,000 characters to 20,000 at the same time, because
fourteen of twenty real creators have no readable comment section at all and the
cap was buying headroom nobody used. **Both trims are logged**, so the day a
cohort actually hits one is visible rather than guessed at.

**This is the first real entry in the cost measurement §11.4 has been asking for
since v1.2** — not the full gradient, but the model half of it, priced from
config rather than asserted.

---

## 12. Out of scope for Phase One

- Phase Two (cultivation) — separate app, separate PRD
- Outreach sending, reply tracking, deal management
- Revenue or valuation estimates
- The Factory (Tier 3), Superstars (Tier 4)
- Model retraining
- Full multi-platform coverage
- **External tenants** — an independent publisher running their own desk on Warhol. That's data isolation, billing, and a decision about whether Paradium wants to arm other people's origination. A business-model question, not an onboarding one; parked deliberately.
- **Public marketing site.** Revisit if Warhol becomes a product sold outside Paradium.
- **Passwords, self-serve signup outside the Paradium domain, email verification, password recovery** — all deleted by the SSO decision in §6.8, and named here so nobody rebuilds them.
- **Real cost metering.** The depth model and prune recommendations ship on representative figures (§11). Live per-pass accounting is v2.
- **Track record as a screen.** A standalone list of past calls graded by reality only works on rewound data — the outcomes for anyone flagged this week don't exist for a year. It is rich for one historical cohort and blank for the live one until 2027, which makes it a proof artifact rather than a daily tool. The proof need is already served by §6.6's briefing export, which is a document you can send to an exec. Two cheaper things survive: **what happened next on a single creator's report** (§7), and the **rewound cohort as a first-run moment** (§6.9). Build the screen when a year of real calls sits behind it; it's a read view over data being stored anyway, so waiting costs nothing.
- **A trends screen.** What Alex actually wants in that slot: hits and misses month over month, and which kinds of creator convert versus which to stay away from. Deliberately not designed yet — but note for whoever picks it up that **there are two kinds of trend and only one is available on day one.** Decision patterns — which briefs produce promotes, which pass reasons dominate, where the desk and the machine disagree — are measurable in week two. Outcome patterns need a year. The month-over-month screen is mostly the first kind, which is why it is buildable far sooner than Track record was.
- **Diagnosing empty days.** Five quiet days could mean a well-set threshold, a bad brief, or a broken scan, and nothing currently tells them apart. **§5.4a raises the stakes on this considerably** — a real cohort now produces empty days by default, so *"nothing cleared"* and *"something is wrong"* look identical on screen at exactly the moment the product is least able to afford the ambiguity.
- **A feedback loop for the product itself.** Members submit feedback; it is summarised into candidate features; a released feature notifies whoever asked for it; they rate it; the ratings are tracked. Post-MVP by Alex's own placement, and worth saying why it is a genuinely good idea deferred rather than a bad one rejected: **it is the same machine as §5.6, pointed at Scout instead of at creators** — an observation, a decision, and a closed loop that reports whether the decision was right. That symmetry is the argument for building it eventually and also the argument for not building it now, because §5.6's version has to work first on the thing the product is actually for. Two things to carry to whoever picks it up: the notify-on-release step is the load-bearing one (it is what makes submitting feedback feel non-futile), and a rating is only meaningful if the feature can be identified as the thing that was asked for — which means feedback and release have to be linked at submission, not reconstructed later.

**Named as a gap, not a decision:**

- **A mobile experience.** The person most likely to check a drop casually is doing it on a phone, and nothing in this document addresses that. **The target is a simplified mobile layout, explicitly not parity.** Full responsive equivalence would mean answering how the report's inventory table, the check record and the brief guardrails behave at 375px — three hard problems for a surface nobody has yet used on a phone. The simplified version answers a smaller question: *can I read today's drop and open a report?* Read, not decide. Promote, Watch and Pass carry reasons, windows and consequences, and a decision that changes a training label should not be one thumb away on a screen that cannot show the evidence behind it. **Low priority and correctly so** — but the reduced scope is what makes it low priority rather than merely deferred.

**A minimal admin panel is now in scope**, moved out of this list. Previously deferred on the grounds that a console for three users is theatre — but with roles deleted (§2), the panel is where *who can spend money* becomes visible, which is the only way the budget ceiling is legible as a guardrail. One screen: people with an admin switch, budget ceiling, platforms, threshold.

### 12.1 Real creators — what has to exist first

Not a design problem to solve today, but it has to be written down before the first real name enters the system.

Scout builds dated dossiers on people who never consented, containing a claim about their finances and a claim about their state of mind, and §6.6 makes reports shareable by link **by design**. A leaked report would not be embarrassing because it's wrong. It would be embarrassing because it's right.

**Scope, as decided:** public information only, internal to Paradium, US creators. That removes most of the exposure. Two residuals it does not remove — California's rules cover *inferences drawn from* public information even where the source data is exempt, and a lot of creators live there; and "internal only" is a policy while §6.6's expiring links are a mechanism that sends reports outside.

**The content rule, which holds regardless:**

> **Scout may quote and count. It may not diagnose.**

*"She wrote 'honestly I can't keep up' on March 28"* is her public words, quoted, dated — defensible anywhere, including to her face. *"Subject exhibits capacity strain"* is a clinical judgment about a stranger's mental state, made by a machine and stored with a date.

This is not a constraint imposed on the design; it is the direction the design already moved. Every language decision in v1.3 — plain words, her own quotes, changes rather than levels — happens to also be the defensible version. **The readable version and the safe version are the same version.**

Three mechanisms behind it:

| | |
|---|---|
| **Shared links carry the case, not the profile** | The §6.6 link keeps demand, inventory and the play. It drops the Pressure block and the score — those are for the desk. |
| **Passed creators age out** | A 180-day suppression does not justify holding observations forever. Retention window, then delete (§10.8). |
| **Somebody can answer "what do you have on me"** | One named owner, one documented path. |

**Retention, in one rule: keep the decisions, drop the evidence.** Decisions are tiny, they are the thing being built, and they are about *us* — who we looked at and what we concluded. Evidence is bulky, it is about *them*, and it goes stale anyway.

| Where they are | What we keep |
|---|---|
| In a drop, watched, or promoted | Everything, while they're active |
| Passed | The decision and the reason forever. The evidence goes when the suppression expires |
| Declined after outreach | The decision and the reason. Not the dossier |
| Looked at briefly, never surfaced | Already nothing — no names are stored at the cheapest pass (§6.10) |

The training set stays intact and we are not sitting on dated psychological profiles of people we passed on two years ago.

**A named owner and a legal review gate the first real creator record.** One person, not a team — someone who can answer *"what do you have on me"* and who signs off before the first real name goes in. Not the hackathon, not the prototype. The first real name.

---

## 13. Prototype scope — hackathon demo

**Screens built:**
1. Today's Drop — with the brief tab row
2. The report — including what-happened-next when rewound
3. Watchlist — showing at least one resurfaced name with its trigger
4. Run a Name — live, on stage
5. Outreach Package — generated on Promote

**Shown but static:** brief list (read-only), digest email (as an artifact), briefing export (as an artifact).

**Demo order — proof, then promise:**
1. **Warhol, as of January 2024.** Ten unknowns with their signal breakdowns. Then the reveal. *Ninety seconds; the only part that must be flawless.*
2. **Warhol, as of this week.** Same screen, today's unknowns.
3. **"And here's how we develop them."** Promote → outreach package → handoff to Phase Two.

Beat 1 first, always. A room has no way to judge a list of unknowns; the backtest is the only mechanism that lends the second list credibility.

**Fidelity:** high-fidelity clickable prototype on curated data — not production code. *Confirm before design starts.*

### 13.1 Prototype v2 — access and onboarding

v1 shipped as two independent directions on the same PRD (`Archive/prototypes/v1-a-trade-tip-sheet`, `Archive/prototypes/v1-b-case-file`). **v2 builds on the `design-taste` direction** — the side-panel navigation structure and the grouped card treatment — and adds the surfaces in this revision.

**New screens:**

1. **Sign-in** — wordmark, one SSO button (§6.8)
2. **Mandate wizard** — three prompts plus optional free text, ending in the derived-mandate summary (§6.9)
3. **Overlap prompt** — *join theirs, or make your own?*, carrying the spend it saves — fired at wizard step 2 (§6.7)
4. **First-run drop** — Spotter path (live, filtered) and Scout path (rewound to January 2024)
5. **Just-in-time hints** — the five in §6.9, dismissible, re-armable
6. **Ledger, per creator** — the check record behind one Scout Report (§6.10)

**Changed screens:** drop cards carry member annotations and the Refer verb; the Scout Report's action row is role-dependent and carries per-creator effort plus the Ledger; the watchlist shows what it costs to run and Warhol's prune recommendations; the shell carries a signed-in identity and a `?`.

**Priority note.** If v2 gets tight, ship the **overlap prompt** and defer **per-member queues with cross-member annotations**. The overlap prompt delivers nearly all the value on its own — it's the part that saves the scan spend and stops duplicate work — while per-member queues are the most machinery added in this revision for the least demo value. Correct rather than necessary.

**Demo consequence:** the §13 running order now starts one screen earlier. Sign in, run the wizard, land in January 2024 — the rewind stops being something a presenter switches into and becomes the first thing the product does for you.

> **§13.1 is superseded by v1.3.** The mandate wizard, the overlap prompt at wizard step 2, the role-dependent action row and the five just-in-time hints no longer exist. Kept as the record of what v2 built.

### 13.2 Prototype v5 — the v1.3 build

v4 is the current build (`prototypes/v4/`). v5 is the next one, and it is a rewrite of two components plus a set of renames rather than new screens.

**Changed — the card** (`ui.js: signalsFor`, `signalRows`):
- Three claims become **Demand / Missing / Pressure**, with Pressure carrying **two** lines
- Every Pressure value becomes a change, not a level — `12% reply rate` is a defect, `replies fell 22% → 3%` is the fix
- The creator's quote moves onto the card; the audience becomes a count only
- The expand collapses away — nothing left behind it worth hiding

**Changed — the report** (`app.js: reportView`):
- Restructured to mirror the card: Demand → *why she's on this list* → Pressure → Missing
- `How it scored` disappears as a drawer; its arithmetic attaches to each claim
- Recommended play and Fit promote out of drawers onto the open page
- Monetization inventory splits into *what she's built* / *what she's switched on*, ordered by weight
- Per-platform `id match %` and report-level confidence come off

**New:** the brief screen (description in, chips back), the house-brief tab row, the passed list, the admin panel, the outcome control on a promoted creator.

**Removed:** Track record as a screen (§12), everything role-dependent, the `?`-as-definition behaviour in favour of `?`-as-receipts.

**Renames throughout:** Warhol Scout → Scout · Scout Report → the report · Warhol Score → the score · Monetization Gap → Demand + Missing · Operator Strain → Pressure · Format Fit → Fit · Ledger → check record · *surfaces checked* → *we looked in N places* · *purchase-intent comments* → *people asked where to buy* · *capacity strain* → deleted.

**Fidelity:** unchanged from §13 — high-fidelity clickable prototype on curated data, not production code. Alloy (`alloy.css`) stays vendored verbatim and unedited; its 56/56 contrast audit is the reason.

### 13.3 Prototype v5.3 — real data and the UAT pass

v5.2 (`prototypes/v5.2/`) is the current build. v5.3 is the demo build: **real
creators, real evidence, and the surface fixes UAT found.** It is deliberately
split into three sessions that do not depend on each other's outcomes — see the
sequencing note below, which exists because the first session can invalidate work
done in the other two if they run first.

**Session A — data and calibration.** The blocking one, because §5.4a says the
front door is currently empty over real data and no amount of interface work
changes that. Set the two API keys, resolve the trajectory gate, re-read the
threshold off real numbers, run the real cohort, export the seed.

**Session B — the report and the creator.** Avatars and clickable accounts
(§6.12), the unified report CTA (§6.3), the applicant action treatment.

**Session C — search and access.** Run-a-name rework (§6.4) and real member
accounts (§6.8). Grouped because they are the two surfaces a demo watcher touches
directly and neither depends on the cohort.

**The demo brief roster changes.** *Hong Kong noodle store* and *Restoration and
workshop* come out — both are inventions written to exercise the model, and both
sit one tab away from real people once the cohort is real, which is the exact
adjacency §12.1 warns about. Two replace them, matching the handle lists the demo
actually pulls from:

| Brief | The assignment |
|---|---|
| **Southern college football** | Insider access — beat writers, people close to local coaches and recruits. Modest following is fine; it has to land consistently. This text already exists in the product as the brief-writing placeholder, which is a good sign it reads correctly, and a bad sign that the one brief the interface teaches by example is one nobody can open. |
| **Primetime streaming shows** | **People who cover** Netflix and Prime Video's biggest shows — recaps, theories, casting news, the discourse around a season while it airs. Confirmed 6 August: the brief hunts commentators, not the shows and not their talent. Scout finds people with a monetization gap; a distributor is not a candidate, and on-screen talent usually has representation already switched on, which is the Missing pillar reading zero. |

Both are written from scratch and both need the same thing the existing ones have:
a description in the member's own voice, derived chips, and a quality bar that is
a judgment rather than a filter.

**Also changed — the applicant action controls.** *View report · Reject · Add to
watchlist* is three buttons of equal weight expressing three different kinds of
act, and two of them are the wrong words. The report door is *Open the report*
(§6.3). The verbs are **Promote / Watch / Pass** — §4.4's canonical set, past
tense of something a human did — and *Reject* is not among them; it is harsher
than Pass, it implies the creator was asking for something, and it loses the
reason that makes a Pass a decision. The visual treatment follows v4's settled
rule: green Promote, amber Watch, outlined Pass, deliberately outside the four
field colours, with the report door in a lower tier than all three.

> **Sequencing, and it matters more than it looks.** Session A can change what a
> card has to show — if the trajectory reading becomes a stated condition (§5.4a)
> then every card grows a line, and if the threshold moves then the cohort on
> screen changes entirely. Doing B or C first means designing against a list that
> Session A may empty. **A first.**

**Not in v5.3, deliberately:** the January 2024 rewind and everything downstream
of cutting it. That is the reconciliation session, it is the largest open
decision in the document, and it cannot be done piecemeal.

---

## 14. Open questions

1. **Phase Two naming.** "Warhol Studio" collides with Paradium's existing Cutter Studio. Unresolved.
2. **Comment access at scale.** Unmet demand is the strongest single signal in the model and the hardest to source legitimately. Needs a sourcing answer before it can be a production pillar.
3. **Identity resolution confidence.** Cross-platform matching is probabilistic. How much confidence is required before Warhol asserts "these five accounts are one person"?
4. **Threshold calibration.** 70 is a placeholder. The backtest is what sets it — and the backtest is also the proof, so the tuning must be disclosed rather than fitted silently.
5. Inherited from the proposal: operator appetite, cold-start provisioning, deal structure.

Added with the access and cost model:

6. **What the passes actually cost.** §5.7 asserts a cost gradient — fractions of a cent to sweep, expensive to study — without numbers behind it. The ratios drive everything downstream: how many creators reach Study, what a brief costs per month, when a prune recommendation fires. Needs real figures from a pilot before any budget in §5.8 means anything.
7. ~~**What the budget is set against.**~~ Closed in v1.3: **per organisation, per month** (§2). The ceiling is an org-level cap because there are no roles left to key it to, and per-person quotas would make everyone ration their own hunches — which §6.4 argues is how you stop them entering hunches at all.
8. **Where the prune recommendation threshold sits.** *"Cost-to-date against score movement"* is the right shape, not a rule. Flat for how long, at what spend, before Warhol says stop watching.
9. **Identity resolution and the check record.** §6.10 shows the check record per creator, and §14.3 says cross-platform matching is probabilistic. If Scout asserts five accounts are one person and the check record exposes the checks, it also exposes the inference — which is either the most honest surface in the product or the most fragile, and which one depends on presentation. v1.3 narrows it: the percentage comes off the report and a weak match is stated in words (§6.2), but the underlying question stands.
10. ~~**Does the desk actually want Spotters?**~~ Moot — the second role is deleted (§2).

Added with briefs, plain language and discovery:

11. **What discovery actually costs per brief.** §5.7 adds it as a pass and §11.1 commits to LLM-plus-search, with no figure behind it. It is the only cost that scales with briefs rather than creators, so it sets the brief ceiling — and the ceiling is currently a number nobody has computed.
12. **Where the recalibrated threshold lands.** §5.4 says 70 no longer means what it meant now the inventory has roughly doubled. The pass is scoped; the answer isn't known.
13. **What the absence weights actually are.** §5.2 says weight by money on the table and gives the shape — high for YouTube at scale, low for affiliate links — not the numbers.
14. **How Trajectory's gate is set.** *Rising or stable* needs a definition: over what window, and how much decline is a fail. Too tight and it removes creators who took a summer off; too loose and the gate does nothing.
15. **Whether citations mean anything for short-form-native creators.** §5.2 argues you measure links to the work wherever it lives. Untested. If a TikTok-native cohort has near-zero citations across the board, the signal doesn't discriminate and the §11.2 dependency isn't worth buying.
16. **Who owns the creator-data policy** (§12.1), and what the retention window is.

Added by the v5.2 UAT pass, 6 August 2026:

17. **Where the threshold lands against real creators.** §5.4a measured it: twenty real brands scored 0–32 against a bar of 78, and decision 101's method — *read it off a result* — was applied to a seed of invented people. The method survives; the number does not. **This is question 12 reopened with data behind it.** Decision 114 settles *how* it gets answered — the §11.4 measurement first, both keys set — but not *what the answer is*, which nobody knows until the run happens.
18. **Whether Demand can carry 25 points for a short-form-native cohort.** Decision 110 already concedes TikTok is hard and Instagram is closed. §5.4a is what that concession costs: for a cohort with no YouTube presence, the single strongest signal in the model reads *not found* for everybody, and a pillar that is constant across a cohort does not discriminate within it. **This is question 15's problem arriving a signal earlier than expected** — it was asked about citations and the answer turns out to apply to comments.
19. **What a first look is allowed to say.** §5.4a resolves the trajectory gate by making *no reading yet* a stated condition rather than a failure, and §6.4 lets a fresh report carry a preliminary headline. Both are the same underlying question: how much may Scout assert on one observation? The rule proposed in both places is *only what is countable, plus their own words* — consistent with §12.1, and worth checking is consistent everywhere else before it is relied on twice.
20. **Whether the demo cohort should be TikTok-first at all.** The supplied handle lists are almost entirely TikTok, which is the platform the engine reads least well — §5.4a found one profile returning 200 with nothing in it, and follower counts unavailable. A cohort chosen for how well it demonstrates the thesis and a cohort chosen for how readable it is are not the same cohort, and the gap between them is itself a finding about the product.

Added by the v5.3 build, 6 August 2026:

21. **Whether the scan should be watchable.** Proposed as a demo beat and worth more than that: a brief is written, and instead of a spinner the member watches the ladder work — *checking substack.com/@handle… reading their own site… 3 comments from 4 videos*. It would make §5.7's three passes legible in a way no diagram has managed, and it turns the most boring part of the product into the part that proves it is doing something. Two things are unresolved. **Is it honest at speed?** The lines would scroll faster than anyone can read, and a log nobody can follow that *feels* thorough is theatre, which is the failure §6.10 exists to avoid. And **what does it show when a place is unreadable** — a 403 flashing past reads as a failure of the product rather than a fact about the web, and §11.3 spends its whole length insisting those are different. Measured shape of the thing, from §11.4: ~85 seconds for twenty creators, **half of it the politeness delay between requests to one host**, so the pacing is set by manners rather than by work and cannot be sped up honestly.
22. **Whether Demand is reachable at all for this cohort.** Question 18 asked whether Demand could carry 25 points for a short-form-native cohort; §11.3's Reddit finding narrows it to a fact. Demand has exactly **two** legitimate sources. YouTube reaches 6 of 20 real creators. Reddit reaches the rest and now requires a credential nobody has yet set up. Until one of those changes, **Demand reads zero for the entire cohort and the reachable ceiling is 69 of 100** (§5.4b) — which means a quarter of the model is not merely uncertain, it is structurally inert, and the drop is being selected on Missing and Pressure alone. That is a live claim about the scoring model, not a demo inconvenience.

**Closed in v1.3:** the brief/mandate contradiction (§3, decision 69); what a brief may change (§6.7, decision 71); brief editing semantics (§6.7, decision 79); where passed creators go (§6.3.1, decision 87); the Scout/Spotter distinction (§2, decision 89); the inventory's blind spot on social video (§5.2, decision 92); the model rewarding decline (§5.1, decision 93); what happens after Promote (§8, decision 96); index versus LLM discovery (§11.1, decision 98).

**Closed in v1.2:** re-entry after absence (§6.3 — re-score on return); the admin surface (§2, §12 — a permission on a Scout, minimal screen when self-serve opens); scan-cost ceiling and orphaned mandates (§6.7 — inactivity pause plus a ceiling on Scout mandates only); referral SLA (§6.4 — visible age, digest persistence, decision receipt, no auto-escalation); overlap definition (§6.7 — exact category match, non-blocking).

---

## Appendix — Decision log

Locked in the grilling session of 30 July 2026. Treat as settled.

| # | Decision |
|---|---|
| 1 | Warhol Scout is a web app; core loop is scan → score → daily shortlist |
| 2 | Primary user is the Scout (1–3 person desk); execs consume generated output, never the app |
| 3 | Daily drop is the front door; watchlist is a second surface behind it |
| 4 | Three verbs only: Promote / Watch / Pass |
| 5 | Composite score **plus** exposed pillar breakdown |
| 6 | Two-level scorecard: 3 pillars, each backed by named sub-signals |
| 7 | One Recommended Play per candidate, from a fixed catalog; no revenue estimates |
| 8 | Two-level IA: shortlist summary → Scout Report; report is evidence-forward |
| 9 | Pass from the list; Promote requires opening the report |
| 10 | The detail view is called a **Scout Report** |
| 11 | Mandates steer the scan; no global auto-feed, no free search |
| 12 | "As of [date]" is first-class, plus outcome reveal |
| 13 | Watchlist re-scores continuously and resurfaces into the drop with a stated reason |
| 14 | Daily digest email + immediate alerts for acute triggers |
| 15 | Promote generates an outreach package **and** creates the Phase Two record |
| 16 | Phase One is **Warhol Scout**; Phase Two name unresolved |
| 17 | Hybrid scoring engine, declared per pillar: rules for countable, LLM for judgment |
| 18 | Threshold-gated drop with a cap; zero-result days are legitimate |
| 19 | Absence requires verification state; only *Verified absent* scores as a gap |
| 20 | Gap (60) + Strain (40) weighted; Format Fit is a pass/fail qualifier gate |
| 21 | Manual entry supported and source-tagged |
| 22 | Manual adds bypass threshold, flagged as Scout override |
| 23 | Pass reasons drive suppression rules |
| 24 | Multi-user with mandate ownership; every decision attributed |
| 25 | Briefing export + shareable report link |
| 26 | Provenance and freshness on every fact |
| 27 | v1 runs on a curated seed cohort; scanning at scale is named as deferred risk |
| 28 | Prototype = 5 built screens, high-fidelity clickable, demo in proof-then-promise order |

### Access and onboarding — locked 4 August 2026

| # | Decision |
|---|---|
| 29 | Two roles: **Scout** (provisioned, defines the scan surface, can Promote) and **Spotter** (self-serve, filters the existing index, Refer / Watch / Pass) |
| 30 | Google SSO domain-gated to Paradium; first sign-in auto-creates a Spotter, an admin flips the Scout bit |
| 31 | No guest access to the app; signed expiring links for a single report or briefing are the only unauthenticated surface |
| 32 | Onboarding = **mandate wizard, then just-in-time hints**. No upfront product tour |
| 33 | The wizard never hands over an empty app: Spotter → live filtered drop immediately; Scout → rewound January 2024 drop until their scan lands |
| 34 | The wizard is outcome-first — creator type → niche/opportunity → outcome to cultivate. It never asks about mechanics; platforms, audience band and geo are derived and shown editable |
| 35 | Structured choices plus **one optional free-text field**, folded in as a Format Fit hint. Not a chatbot |
| 36 | Spotters must name a category; only Scouts may open a wildcard mandate |
| 37 | **Overlap check at wizard step 2** — join an existing mandate rather than duplicate it. Joining is the default affordance |
| 38 | Joined mandates share the candidate pool, not the queue. Other members' decisions appear as annotations and never remove your card |
| 39 | The login screen is a utility gate — wordmark and one button. Marketing page deferred to a public product |
| 40 | Five just-in-time hints, individually dismissible, re-armable from `?`: verification state, confidence vs. score, engine tag, as-of control, why Promote requires the report |
| 41 | Prototype v2 builds on the **design-taste** direction — side-panel navigation, grouped cards |

### Consequences of the access model — 4 August 2026

Not asked in the session; these fell out of 29–41 and were resolved in-document rather than left as holes.

| # | Decision | Where |
|---|---|---|
| 42 | A Spotter's manual add does not bypass anything. #22 is restated as **a Scout can authorize the spend** | §6.4 |
| 43 | Suppression reach follows role — **except brand safety, which escalates**: a Spotter's flag surfaces on the Scout Report and blocks silent promotion | §8 |
| 44 | Training labels are **partitioned by role**, never pooled; `actor_role` is stored at write time, not resolved at query time | §5.6, §10.4 |
| 45 | Mandates are lenses, exempt from `as_of` — they may narrow a rewound view, never populate it — **and the exemption is disclosed on screen** | §7 |
| 46 | Spotters get a weekly digest suppressed when empty; Scouts get daily including zero-result days. **Defaults in settings, not asked in the wizard** | §9 |
| 47 | **Referred** is a state, and queue state is keyed on `(mandate, member, creator)` rather than on the creator | §8, §10.5 |

### Cost, depth and vocabulary — 4 August 2026

| # | Decision |
|---|---|
| 48 | Listening is **tiered by evidence**: three passes — **Sweep** (rules, thousands), **Probe** (monetization inventory, hundreds), **Study** (LLM, tens). Called *scan depth*, never "tiers" — that word belongs to the talent ladder |
| 49 | **Budget constrains breadth, never depth.** It decides how many creators reach Probe and Study; it never decides how thoroughly one is examined. The minimum-confidence floor is not tunable downward to save money |
| 50 | Cost is visible: **currency at organisation and mandate scope, effort at creator scope.** No per-creator price tags |
| 51 | **Warhol recommends prunes; a human decides.** Nothing leaves the watchlist unauthored |
| 52 | **Pruning is a Pass reason** — *no longer worth tracking* — not a fourth verb. Decision #4 holds |
| 53 | **No cost confirmation on manual entry.** The ladder decides when to spend; if the gap isn't there, Warhol stops and says what it checked |
| 54 | **Anyone can Sweep and Probe. Only a Scout can authorize a Study.** A referral *is* the request to spend — which rate-limits referrals without a quota |
| 55 | The **Ledger** is one record at two scopes: per creator on the Scout Report, org-wide for the admin. **No names at Sweep depth** |
| 56 | Referrals: **visible age, digest persistence, decision receipt to the Spotter, no auto-escalation** |
| 57 | Overlap is an **exact category match and never blocks** — joining is offered, so a missed overlap is a weak suggestion rather than a blocked user |
| 58 | On return from absence, **undecided cards are re-scored before they're shown**, and the ones that fell away are archived with a reason |
| 59 | Mandate lifecycle: **60-day inactivity pause**, and a ceiling on active **Scout** mandates only |
| 60 | **Admin is a permission on a Scout, not a third role.** No console until self-serve opens |
| 61 | Depth model and prune recommendations ship in v2 on **representative figures**; real metering is deferred and named |

### Vocabulary — 4 August 2026

| # | Decision |
|---|---|
| 62 | **Watcher → Spotter.** Watcher/Watch/Watchlist/Watched/Track was five terms from two roots that didn't nest, and everyone watches, so it never described the role |
| 63 | The interface says **creator**. *Candidate* is data-model vocabulary |
| 64 | **Every state is the past tense of a verb a human performed.** `In Drop` and `Candidate` are machine states and get no user-facing name |
| 65 | **Coverage gate → minimum confidence.** Confidence already means share of checks resolved; the gate is a floor on it, not a second concept |
| 66 | **Backtest** is not a product word. §7 says the rewind isn't a mode; naming it as one is how it becomes one |
| 67 | **Tier 1–4, The Factory, Superstars** are strategy vocabulary and never appear in the interface |
| 68 | §4 is the canonical glossary, including §4.6 — the list of terms that deliberately aren't product terms |

**Superseded by the above:** #2 (the Scout is no longer the only user — see §2), #22 (threshold bypass restated as spend authorization — see §6.4).

### Briefs, plain language and discovery — locked 5 August 2026

Grilling session covering brief creation and editing, the report's evidence structure, watchlist lifecycle, the role split, the monetization inventory, and remaining gaps.

| # | Decision |
|---|---|
| 69 | **Scout does not watch the internet — it watches a population, and briefs put people in it.** The population is cumulative. Replaces both of the contradictory statements the doc previously carried (§6.7's "defines a scan surface" and v3's "a brief never adds names") |
| 70 | **The thesis is not editable and there is no prompt editor.** What makes a creator interesting is hard-coded; it *is* the product. Admin gets four knobs: budget ceiling, who's in, platforms, threshold |
| 71 | **Fit becomes the brief.** Per-brief pass/fail gate, replacing global Format Fit — which survives only as the house brief's qualifier. Four stored LLM judgments per creator collapse to one. Scores stop being comparable across briefs, accepted |
| 72 | **The interface says Demand / Missing / Pressure / Fit**, each with its question underneath. Monetization Gap, Operator Strain and Format Fit are formal names for this document and the data model only |
| 73 | **Demand and Missing ask different questions** — *do people want to buy?* and *is there anything to buy?* Read together they state the monetization gap without a definition |
| 74 | **"Operator Strain" → "Pressure."** Timing named the thing from our side while sitting on evidence about theirs |
| 75 | **A minimal admin panel is in scope**, showing who is in the system and who can spend |
| 76 | **No help page and no glossary.** Persistent `?` at each term, hints fire once then persist as the `?`, arguments attach where they bite |
| 77 | **The `?` returns receipts, not a definition** — the same component that argues the creator teaches the pillar |
| 78 | **A brief is a description in, editable derived structure back.** Supersedes the three-dropdown form and the wizard. The brief screen states whether results come in an hour or tomorrow |
| 79 | **Editing a brief makes a version; pause yes; delete never.** Editing never removes anyone from a watchlist |
| 80 | **The house brief "Anyone worth a call" is the default tab. There is no "All" view** — briefs are parallel, not nested. Nothing shows everything across briefs at once, accepted |
| 81 | **Paused and archived briefs are offered for resume** when a similar one is written, previewing the actual people it found. Anything resumed is re-checked before it is shown |
| 82 | **The report is the card expanded** — same three claims, same order, same words, each with its own number and proof. "How it scored" disappears as a drawer |
| 83 | **The audience is a number; the creator is a quote.** Pressure gets two lines, because one behaviour change is a holiday and two is a person going under. Every pressure signal is a change, never a level, and always dated |
| 84 | **Recommended play and Fit are promoted out of drawers**; check record and samples stay collapsed. Per-platform identity match % and report-level confidence are removed as summaries of what the page already states |
| 85 | **"6 surfaces checked" → "we looked in 6 places."** Supersedes the phrasing in the proposal and the deck |
| 86 | **Samples play in-app via the platform's own embed player**; store thumbnail, caption, counts, date and URL. Never host media. Stored facts are as-of; the embed is labelled current |
| 87 | **Passed creators get a visible list** with the reason and the trigger that returns them. Not a third holding state — that would be a fourth verb |
| 88 | **Track record is cut as a screen** (§12). What survives: what-happened-next on one creator's report, and the rewound cohort as a first-run moment. A trends screen is the intended replacement, deliberately not designed yet |
| 89 | **One user type.** Spotter deleted, along with referrals. Admin is a permission, four knobs. In the interface nobody is a noun |
| 90 | **The budget ceiling replaces role-based spend control** — the constraint sits on the organisation, not on each person's hunches |
| 91 | **Warhol is the engine; Scout is the product.** The interface says Scout. "Scout Report" → the report; "Warhol Score" → the score |
| 92 | **The monetization inventory gains YouTube, platform monetization, commerce, affiliates and representation**, split into *what they've built* and *what they've switched on*. Absences are weighted by money on the table, expressed as order rather than a badge. The threshold needs recalibrating as a consequence |
| 93 | **Trajectory is a second gate and the lens on Pressure.** Without it the model rewards decline. It carries trends, not a score — a fourth number would be a fourth thing to learn |
| 94 | **Citations and links join the model** as the one signal that can't be bought. New third-party data dependency, named in §11.2 |
| 95 | **Abandonment markers are reinterpreted** — a dead store link is evidence she wanted to build and couldn't alone, not merely a symptom |
| 96 | **A promoted creator carries an outcome**: contacted / replied / signed / declined, with a reason. The digest prompt is the load-bearing part, not the field |
| 97 | **"Not what I asked for" is a Pass reason pointing at the brief**, not the creator. Three of them and Scout offers to re-read the brief |
| 98 | **Discovery is LLM plus search, per brief — not a bought index.** The index answers the use case this product deleted. Discovery and verification stay on opposite sides of a wall |
| 99 | **"Scout may quote and count. It may not diagnose."** Public information, internal, US creators. A named owner and a legal review gate the first real creator record |
| 100 | **The interface speaks plain English** — no jargon, no abbreviations, understood in seconds without being taught |

### Calibration and sourcing — locked 5 August 2026, same session

Answers to the nine questions v1.3 opened.

| # | Decision |
|---|---|
| 101 | **The threshold is read off a result, not chosen.** Start at 78, tune until about a quarter of the seed clears it, re-check monthly |
| 102 | **An absence counts more when the demand points straight at it.** Plus three tiers, roughly 2/3 · 1/3 · rounding error |
| 103 | **Missing everything, including the trivial things, is a label — not a number and not "confidence."** *"Nothing, anywhere"* vs *"a few things, none of them earning."* Confidence keeps its existing meaning |
| 104 | **The trajectory gate tests the audience, never the posting rate.** Fail when down over 12 months *and* still falling over 3. Starting figure: −10% across the year and still going down |
| 105 | **Citations are never a gate.** Zero means *tells us little here*, not *reject* |
| 106 | **A brief carries guardrails before it deploys** — how many people to look for, how long to run — in human units, with money shown as the consequence. Defaults pre-filled. Briefs only, never a single name |
| 107 | **Narrow briefs are cheaper than broad ones.** Cost scales with breadth, not specificity. Each brief's search is capped and says so when it hits the cap |
| 108 | **The watch window is set when you watch** — default 1 month, options 2 or 3. Six months contradicts *"they feel the pain this quarter."* The window closes as a decision with a diff, never a silent expiry. The watchlist becomes a queue of dated check-backs |
| 109 | **Don't buy backlink data yet.** *Has anyone written about this person* falls out of the finding step for free. Removes the only new vendor dependency in v1.3 |
| 110 | **Comments: YouTube and Reddit are clean, TikTok is hard, Instagram is closed.** Unreadable comments resolve to *not found* — neutral, lower confidence, stated on the report. Creators quoting their own demand is a legitimate substitute. **No scraping** |
| 111 | **The cost gradient is a measurement, not a decision.** Run twenty creators end to end and read the bill. The brief ceiling then falls out of arithmetic |
| 112 | **Retention: keep the decisions, drop the evidence.** One named owner signs off before the first real creator record |

**Superseded by the above:** #10 (the detail view is *the report*), #11 (a brief may send Scout somewhere new; the no-search-box rule holds in substance), #16 (Phase One is **Scout**), #20 (Format Fit is now the brief, and Trajectory is a second gate), #29–#47 in every part that depends on the Scout/Spotter split, #32–#35 and #37 (the wizard is replaced by §6.7's brief), #40 (the five hints are replaced by §6.11), #54 (spend is capped by ceiling, not role), #56 (referrals deleted), #62 (Spotter deleted outright).

### Real data and the UAT pass — 6 August 2026

Decisions 113–120 came out of pointing the engine at real creators for the first
time and reviewing v5.2 against it. **All locked 6 August 2026.**

| # | Decision |
|---|---|
| 113 | **`not_established` stops blocking the drop and becomes a stated condition on the card.** A gate cannot be passed or failed on a fact that does not exist. Trajectory binds normally once a creator has two looks 90 days apart; before that the card says *"first look — no trend yet."* Without this, no creator in any new cohort can ever enter the drop for the first 90 days (§5.4a). **Explicitly rejected: backdating a second observation** so the gate can compute — that is fabricated evidence, and decision 99 exists to prevent exactly it |
| 114 | **The threshold is re-read against real creators, by decision 101's method, not adjusted to fill the demo.** ✅ **Done 6 Aug 2026: 78 → 25.** Twenty real creators, full ladder, distribution 0–34, median 19; a bar of 25 lets five through (25%). 78 was unreachable — the no-Demand ceiling is 69 (§5.4b) |
| 115 | **An empty drop over real data is the correct screen and should be demoed as one.** It is the product's most distinctive claim and it is already designed. A full list that cannot be defended is worse than a short one that can |
| 116 | **One name for one action: *Open the report*, everywhere.** *Read it again*, *View report* and every other synonym are deleted. A decision control is never a door, and the report's verbs never change by referring screen (§6.3) |
| 117 | **Creators get a face and their accounts.** At least one avatar wherever a creator is named, **linked and never copied**, initials as a permanent fallback. Confirmed accounts are listed and clickable, guessed ones are never presented as theirs, and platforms that could not be merged are shown separately and said to be separate (§6.12). **Measured after locking: TikTok avatar links expire in ~48 hours**, so the expiry is stored with the URL and stale falls back to initials before it breaks. Caching the image to dodge this is rejected — it trades a stale picture for a permanent store of photographs of non-consenting people (§12.1) |
| 118 | **Run a name is a search box.** One line of copy, a field that takes a handle **or a URL**, and a button. What you searched for stays on screen after it runs, *Open the report* is the only primary, and *not in your drop* is a footnote (§6.4) |
| 119 | **A freshly-searched creator gets a preliminary headline, bound by decision 99 without exception.** Countable facts and their own quoted words only. Labelled a first look, names what is still missing, replaced when the ladder writes a real one. **No headline at all when nothing was readable** (§6.4) |
| 120 | **Real member accounts replace the mocked sign-in before the first real decision is recorded**, not before the first real creator. Local mode is *pick your name from the member list* — never a password. Google SSO stays the target and is blocked on hosting, not on design (§6.8) |
| 123 | **A gate must test something the score does not.** The house brief's *"big audience, no business, under pressure"* was being handed to the Fit judge as a brief — but those words are a plain-English summary of Missing and Pressure, so one fact was counted twice and then vetoed by eye. **The two highest scorers on the board both failed Fit.** The house brief now carries §5.1's original Format Fit — *clippable, repeatable format, category demand* — and the judge is instructed to judge only what the brief asks, never failing on size, revenue or pressure unless the brief raises it itself. Distinctiveness stays out; decision 93 moved it to Trajectory. Measured: drop 2 → 4, Fit failures 6 → 3 (§5.4c) |
| 124 | **Reddit is a second demand source, not a fallback, and it costs a credential.** The keyless JSON endpoints decision 110 assumed now 403 every client; the open door is the documented OAuth app-only grant. **The reader ships built and not connected** — without the credential it reports itself unreadable and never records a zero. Its distinctive risk is *attribution*, not access: a search returns posts that merely contain the word, so presence requires a word-boundary name match enforced after the search, and short handles are refused. **An unread creator scores neutral; a misread one scores somebody else's audience** (§11.3) |
| 125 | **The Sources screen is a coverage control, not a spend control.** §11.4 measured 5,167 fetches at $0.0000 against a bill that was entirely model judgment, so a per-source price column would read `$0.00` down its length and misdirect. Each source instead states what it can establish and what switching it off costs in confidence. **Any report produced while a source was off says which sources were off** — a source that is off must never look like a source that found nothing (§6.13) |
| 130 | **A pillar figure is never shown for a pillar that was not read.** `points()` split the engine's single Opportunity number 66/34 into Demand and Missing for display, so five of eight cards printed `DEMAND +15` beside *"No purchase intent we could read"* — a number claiming demand next to the sentence saying none was found, on the pillar the thesis rests on. Where Demand is unread the figure reads **not read** and Missing carries the whole of Opportunity, which is where it came from (§5.2 weights an absence higher only when demand points *at* it). **The three figures on a report must always sum to the ring** (§6.2) |
| 129 | **One mark carries one variable.** The ring drew the score as its number and **confidence** as its sweep and colour, so the highest scorer on the board rendered emptier than the fourth, and a watchlist row showed a red ring at 55% fill meaning *score 22, half the checks resolved*. Fill and colour now both read the score, banded at the bar. **Confidence is not lost — it moves to text**, where it can carry a sentence instead of a hue: the screen-reader line, its own column on the who-else board, and words on the watchlist row |
| 128 | **A condition true of every creator in a drop is stated once, above the drop.** Eight of eight cards carried *"First look — no trend yet"* and eight of eight carried *"No second change we could date and stand behind"* — roughly half the words on the front door were the same two sentences. The test is **every** card, not most: the day one card differs, the difference is the signal and the line goes back on the cards |
| 127 | **"Worth a call" has one definition and it has two clauses — §4.2a.** Two sentences were both in use as the definition and they disagreed; they are the gate half and the score half of one machine, and §5.4c already settled which is which. **The sentence a person reads and the text handed to `judgeFit` are stored as separate fields**, permanently: with one field, improving the on-screen wording by naming audience or pressure re-creates §5.4c and removes the two best creators on the board. The judge's text names format and category only |
| 126 | **Two operational constraints on any live demo, both measured rather than assumed.** A live brief run is **~85 seconds for twenty creators and half of that is the per-host politeness delay**, which cannot be parallelised away — so a brief run on stage is capped at 5–8 names. And **the seed must be re-exported the same day**: TikTok avatar URLs are signed and expire in ~48 hours (decision 117), so a seed built earlier in the week demos as initials |
| 122 | **A model call that fails silently is indistinguishable from one that found nothing**, because §11.3 makes "found nothing" a designed outcome that scores neutral. The first threshold measurement was read off a run where every classify call was 400ing on an unsupported parameter, and it looked like a clean result. **Verify against the error rows, never against whether the run finished.** Every configured model now needs an explicit stated position on the parameter, so adding one is a decision rather than an assumption (§5.4b) |
| 121 | **Extraction runs on the cheap model; judgment runs on the strongest one.** Classify can only miss a signal — the verbatim-quote check makes fabrication structurally impossible and §11.3 already scores a missed signal neutral. Fit is a gate, and a wrong gate verdict is a false positive that looks exactly like a real one. Demand input capped 60,000 → 20,000 chars at the same time; both trims logged. **Do not collapse the two models back to one to simplify the config** (§11.4) |
| — | **Demo brief roster:** Hong Kong noodle store and Restoration and workshop are removed; **Southern college football** and **primetime streaming shows** are written from scratch. The house brief becomes readable — same treatment as any brief, not editable, states that everyone has it (§6.1) |
| — | **Applicant controls are Promote / Watch / Pass**, never *Reject*. Pass carries a reason; Reject implies the creator was asking for something and loses it (§13.3) |
| — | **Mobile is a simplified read layout, not parity** — read the drop, open a report. Decisions stay on desktop, because a Pass carries a reason and a Watch carries a window (§12) |
| — | **The feedback loop is post-MVP.** It is §5.6's machine pointed at Scout instead of at creators, which is both why it is worth building and why §5.6's version has to work first (§12) |
