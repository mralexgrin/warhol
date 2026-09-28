# How the Scout score works — the plain version

One sentence: **big audience, no business, under pressure.** The score measures those last two, and two gates decide whether the name is even eligible.

---

## 1. The score is 0–100, made of two pillars

| Pillar | The question it answers | Points |
|---|---|---|
| **Opportunity** = Demand + Missing | Is there money on the table? | **60** |
| **Pressure** | Will they take the call? | **40** |

### Demand — 25 pts — *do people want to buy?*
Counts people asking to give this creator money: "where do I buy this", "drop a newsletter", "is there a merch link". Read from YouTube comments and Reddit threads.

It **saturates** — the first signals matter most. Roughly: 50 signals ≈ 14% of the points, 200 ≈ 40%, 300 ≈ half, 2,000 ≈ 87%. Ten thousand people asking is not 100× better than a hundred; it's the same conclusion, more loudly.

### Missing — 35 pts — *is there anything to buy?*
A **weighted** list of things they haven't built, not a headcount. Nearly everyone lacks affiliate links, so counting them separates nobody.

| Weight | Absence |
|---|---|
| 14 | No YouTube channel (only if their short-form audience is 50k+; below that it's worth 4) |
| 10 | No newsletter |
| 9 | No store |
| 4 | No representation / no website |
| 3 | No membership / podcast / sponsorships |
| 0.5 | No affiliate links, shopping tags, platform subscriptions |

Two rules that matter:
- **"We couldn't find it" earns nothing.** Points only come from *verified absent* — we looked in the places it would be and it isn't there. Not-found is an unfinished check, not a finding.
- **An absence counts up to 1.75× more when the demand points straight at it.** No store is worth more when 200 comments are asking where to buy.

There's also a one-line label, not a number: *"nothing, anywhere"* vs *"a few things, none of them earning."* Missing everything means a clean slate. Half-built means they're already partway down someone else's road.

### Pressure — 40 pts — *will they take the call?*

| Points | Signal |
|---|---|
| 12 | **Posting rate falling** — nothing until it's down 25%, full points at 80% down |
| 12 | **Abandoned things** — dead links they still publish; they tried, it broke |
| 10 | **They've said it themselves** — a real quote about not keeping up |
| 6 | **Audience asking, unanswered** — needs a second look |

**Every Pressure signal is a change, never a level.** "12% reply rate" tells you nothing; "replies fell from 22% to 3%" is a fact. Undated is not pressure.

On a first look the audience-trend signal can't be read, so **the day-one Pressure ceiling is 34, not 40** — and 22 for someone with no findable YouTube, because there's no posting history to read. The report says which one applies and why, rather than quoting a ceiling we didn't measure.

---

## 2. Two gates — no points, but they can stop the name

| Gate | Test |
|---|---|
| **Fit** | Do they match the brief? House brief: *clippable, in a format they can repeat, in a category people actually want.* |
| **Trajectory** | Is the **audience** still growing? Fails only if down >10% over the year **and** still falling in the last quarter. |

Two things people get wrong here:

- **Fit must test something the score doesn't.** When it was fed "big audience, no business, under pressure," it just re-failed people for the exact facts the score had already counted — the top two scorers both failed. A gate that copies the score isn't a gate.
- **Trajectory tests the audience, never the posting rate.** Posting less is a *good* signal — that's someone drowning. Audience shrinking is the bad one. Mixing them up inverts the whole model.

A trend needs two looks at least **90 days apart**. On day one there is no reading, so Trajectory returns **"not established"** — which is neither pass nor fail and does **not** block. Faking a trend from one data point is the exact failure this gate exists to prevent.

---

## 3. Confidence — how much of the check actually got done

Confidence = **the share of checks we resolved**, 0 to 1. A creator needs **0.6** to enter the drop.

Only checks that can actually come back "verified absent" count in the denominator — a check we can't perform isn't a check we ran. Those get named on the report instead of quietly dropped. And "there's a Substack at a name that looks like hers" counts as *unresolved*, not settled.

---

## 4. So what makes the cut?

All four, together:

1. **Score ≥ 25** (the threshold — an admin setting)
2. **Confidence ≥ 0.6**
3. **Fit = pass**
4. **Trajectory ≠ fail** (*not established* is fine)

Then the day's drop is capped at about **10 names**. The cap protects attention; the threshold protects trust.

**"Warhol found nothing worth your time today" is a feature.** A fixed daily ten forces filler on thin days and teaches the Scout the list is arbitrary.

### Why the bar is 25 and not 78

78 was set by reading it off the **seed** — 24 invented creators written to demonstrate the model, so they scored like its best case. Against 20 real creators the range was 0–34, median 19. A bar of 25 lets about a quarter through, which is the intent.

Two caveats worth saying out loud when you explain it:

- That cohort scored **zero Demand across the board** — 14 of 20 had no readable comment section anywhere — so their ceiling was 69, not 100. 78 wasn't merely high, it was unreachable.
- The first attempt read the bar at 27 off a run where every classifier call was silently failing. **Re-read the bar the first time a cohort has real Demand**; 25 is not a universal number.

---

## 5. What does *not* count

- **Follower count.** Big audience is the qualifier, not the score. Everyone on the board already has one.
- **"We couldn't find it."** Never earns Missing points.
- **Posting less.** Not a demerit — it's Pressure.
- **Citations / press mentions.** A line on the report, never a veto. Strong for expertise-led creators, near zero for entertainment ones.
- **Being new.** No trend yet doesn't block you.
- **A quote the model wrote.** Anything not copied verbatim out of the source text is thrown away before it can reach a report.

---

## The 30-second version

> We start with people who already have an audience. Then we score two things: **how much money is sitting on the table** — people asking to buy, and nothing there to buy — and **how much pressure they're under**, measured as changes in behaviour, not snapshots. That's the 0–100. Two separate gates then ask *can we actually build with them* and *is their audience still growing* — a fading creator scores high on pressure for the wrong reason, and that gate is what stops us calling someone who's quitting. A name has to clear the bar, be a check we actually finished, pass Fit, and not be fading. Some days that's three names. Some days it's zero, and we say so.
