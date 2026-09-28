# Scout — Voice and Tone

Audit of `App/scout/` (v5.8 build) · 7 Aug 2026
Measured against the running app at 1440×900, signed in, house brief.

---

## The finding

**The copy is not AI slop. It has a real voice and it should be kept.** Nothing here reads
as generated. The problem is the opposite one: it is *over-written by someone who cared*.

Scout does three jobs in the same paragraph:

| Tier | Job | Belongs |
|------|-----|---------|
| **1. State** | The fact. "No newsletter, store or membership · we looked in 6 places." | The UI |
| **2. Explain** | How the model works. "1,940 asking is worth half the pillar." | The help page |
| **3. Argue** | Why the screen is built this way. "…which is exactly what the three-verb rule exists to prevent." | `DESIGN-NOTES.md` |

Right now all three run on almost every screen. Tier 3 is the whole problem — Scout keeps
defending itself against objections the reader has not made. The design notes (107KB of
them, and they are excellent) have leaked into the product.

**One rule fixes most of this: the UI states, the help explains, the notes argue.**

### Measured

| Screen | Words | Screens tall | Verdict |
|--------|------:|-------------:|---------|
| Sign-in | 24 | 1 | Right |
| Passed | 176 | 1.0 | Trim tier 3 |
| Watchlist | 224 | 1.1 | Trim tier 3 |
| Report | 445 | 3.3 | **Right — this is the model** |
| Drop | 556 | 2.3 | Trim tier 3 |
| Trends | 650 | 3.0 | Same claim 3× |
| Admin | 912 | 4.0 | Trim tier 2+3 |
| **Help** | **2,003** | **6.9** | **Three documents in one** |

Total visible copy: ~6,700 words. The report at 445 words over 3.3 screens is the target
density for the whole product — dense with *facts*, thin on commentary.

### The tics, counted

| Pattern | Count | Note |
|---------|------:|------|
| Em-dash aside | 85 | One per ~79 words. Should be rare enough to land. |
| `"X, not Y"` negation | 20 | Genuine voice move, fired until it stopped being emphasis |
| `which is` / `which is what` | 16 | Almost always opens a tier-3 clause |
| `rather than` | 14 | Same |
| `, so ` | 20 | Chains a justification onto a fact |
| `is not a` / `is not the` | 9 | Arguing with a reader who has not spoken |

Target: em-dashes under 30, negation pairs under 8, `which is` under 5.

### Three names for one thing

The single most concrete defect. Scout invented separate vocabularies per screen for the
two states its whole thesis rests on:

| State | Terms in use | Pick |
|-------|--------------|------|
| We proved it is absent | `verified absent` (5) · `confirmed missing` (2) · `not there` (4) | **not there** in UI, **verified absent** in help only |
| We could not determine | `could not tell` (4) · `could not resolve` (3) · `could not read` (2) · `could not find` (2) · `unreadable` (5) | **could not tell** everywhere |
| The score gate | `the bar` (36) · `threshold` (33) | **the bar** in UI, `threshold` in code only |

Five words for "we could not determine" on a product whose argument is that it tells you
exactly what it knows.

---

## Voice attributes

Four. Each with the failure mode it guards against.

| Attribute | This | Not that |
|-----------|------|----------|
| **Evidential** | Names what was checked and where. "We looked in 6 places." | Hedging. Confidence theatre. "May indicate potential opportunity." |
| **Plain** | Short Anglo words, present tense, one clause. "32 people asked where to buy." | Telegraphic. Dropping the words that carry meaning to hit a word count. |
| **Unhurried** | Says a thing once, at full size, in the one place that owns it. | Repeating the same claim on three screens for emphasis. |
| **Unapologetic** | An empty day is stated and left alone. "Scout found nothing worth your time today." | Defensive. Explaining why the screen is right. Pre-empting objections. |

**Unapologetic is the one being broken.** Every tier-3 sentence in the app is Scout
flinching — anticipating that you will think it got something wrong, and answering first.
A product that shows its receipts does not also need to plead.

---

## Tone by context

| Context | Feel | Now | Should be |
|---------|------|-----|-----------|
| **Drop, populated** | Flat, factual | Right | — |
| **Drop, empty** | Matter-of-fact, no reassurance | "…and that is the machine working rather than the scan failing." | "Empty days are the bar working." |
| **Report** | Evidential, dense | Right | — |
| **Watchlist / Passed** | Custodial — nothing was lost | Two paragraphs of policy | One sentence of fact |
| **Trends** | Honest about its own age | Says "90 days" three times | Says it once, in the block that owns it |
| **Admin** | Consequential — these knobs cost money | Defends each default | States each default |
| **Help** | Teaching | An essay with a changelog in it | The model, and only the model |
| **Scan / loading** | Brief, present tense | Right | — |
| **Error / gate** | Calm, no blame | Right (one line) | — |

---

## Vocabulary

| Always | Never |
|--------|-------|
| the bar | the threshold, the cutoff |
| the drop | the feed, the queue, results |
| not there · we looked in *n* places | verified absent, confirmed missing, no data |
| could not tell | could not resolve / read / find, unreadable, unknown, N/A |
| Open the report | Read it again, View details, Learn more |
| kept · passed · promoted | saved, archived, rejected, dismissed |
| people asked where to buy | purchase intent signals, demand indicators |
| posting less | cadence decay *(engine term — keep it in the engine)* |
| we looked / we could not | the system, Scout was unable to |
| Sweep · Probe · Study | depth 1/2/3 |

Reading level target: **grade 8–10.** Professional tool, non-technical reader (an
origination desk, not an ML team). The report currently sits about there. The help page
sits at 12+, mostly from clause-stacking rather than vocabulary.

---

## Before / after

### 1. Passed — cut the policy layer

**Before** (43 words, two blocks)
> Nobody vanishes. Every pass carries the reason you gave and the thing that would bring the name back — which is what makes it a decision rather than a deletion.
>
> This is not a third place to put someone you are unsure about. Watch already means that, and a fourth verb is exactly what the three-verb rule exists to prevent.

**After** (13 words)
> Nobody vanishes. Every pass carries your reason and what would bring the name back.

The second block is internal design rationale — "the three-verb rule" is a phrase from the
PRD, not a thing the reader knows. `.lifecycle` is a CSS class that exists to hold tier-3
copy; it should be deleted from the codebase, not just emptied.

### 2. Watchlist — the money already says it

**Before** (51 words)
> Kept, not killed. Every name here has a date to check back, and when the window closes it comes back as a decision carrying what moved.
>
> This is the only place spend compounds — and nothing leaves it without a person choosing, because a state change nobody authored throws away the label.

**After** (20 words)
> Every name here has a date to check back. When the window closes it comes back as a decision, with what moved.

"Kept, not killed" is redundant beside an h1 reading *Watchlist*. "The only place spend
compounds" is stated more forcefully by the **$X a month** figure directly above it.

### 3. Empty drop — state it, then stop

**Before** (63 words)
> Scout found nothing worth your time today.
> 58 people were looked at for this brief. 27 scored under 25. 23 did not match it. 4 had too little resolved to argue from. The bar protects your trust and the cap protects your attention — so some days this is empty, and that is the machine working rather than the scan failing.

**After** (33 words)
> Scout found nothing worth your time today.
> 58 people were looked at. 27 scored under 25, 23 did not match the brief, 4 were too thin to argue from. Empty days are the bar working.

The h1 already refuses to apologise. The closing clause takes it back. Keep *"the bar
protects trust, the cap protects attention"* — it is a strong line — but it belongs in
help, where it currently also appears. Say it once.

### 4. Drop — the leftovers line

**Before** (41 words)
> Scout also looked at 27 who scored under 25, 23 who did not match this brief and 4 we had read too little of to argue from. They are not gone — they are just not worth your morning.

**After** (18 words)
> Also looked at: 27 scored under 25, 23 did not match the brief, 4 too thin to argue from.

Third reassurance on one screen. The counts being visible is itself the proof nobody was
thrown away.

### 5. Trends — one claim, one place

The 90-day gate is currently stated **three times**: in the `.lifecycle` line under the
deck, in the ledger's *Movement* note, and in the **Why Movement is shut** block that
exists to state it.

**Before** — deck + age strip + lifecycle line, ~85 words before any data.

**After** — deck and age strip only:
> 24 creators read. 13 are confirmed missing at least one thing their audience has a name for.
> **Day 1 of 90** · 232 checks · first look 6 Aug 2026

Delete the `.lifecycle` line. **Why Movement is shut** already owns that argument and makes
it better.

### 6. Admin — the deck repeats the nav

**Before** (37 words)
> Four things: what the organisation may spend, where the bar sits, who is in, and where Scout is allowed to look. Everything else about what makes a creator interesting is the product, not a setting.

**After** (8 words)
> The four things the organisation controls.

The section nav directly beneath already lists all four by name. The second sentence
defends the absence of settings nobody went looking for.

### 7. Worked to zero

**Before**
> Every name has a decision and an owner. Close Scout; it will have the next one at 6:00 AM ET.

**After**
> Every name has a decision. Next drop 6:00 AM ET.

One seat, so "and an owner" is noise. Telling someone to close the app is a strange note to
end a good day on.

### 8. Help — split three documents

2,003 words, 6.9 screens. Target **~750 words, 2.5 screens**. Nothing is cut for being
wrong; it is cut for being in the wrong document.

**Stays** (the model): the shape bar · Demand / Missing / Pressure tables · the two gates ·
Confidence · What makes the cut · What does not count.

**Moves to Admin**, behind the `?` beside the bar — Admin already links here for it:
> **Where the bar came from** (~180 words). It was 78, read off invented creators, re-read against real ones, now 25. That is a changelog. It belongs next to the control it explains.

**Moves to `DESIGN-NOTES.md`** — rationale for choices already made:
> "Weighting it linearly would have let one viral comment section outrank everything else in the model."
> "Leaving them in the denominator once capped every creator below the floor, so nobody could ever clear it; dropping them silently would have been hiding them."
> "Two things worth saying out loud when you explain this…"
> "…which is the exact failure the gate is here to prevent."

Each is a good sentence about a decision, written for whoever maintains the model. None is
for someone trying to read a score.

**Rewritten in place** — the section decks currently argue before they teach:

> *Before:* A gate must test something the score does not, or it is not a gate — it is the score, eyeballed a second time. Neither of these adds or removes a single point, and either can stop a name that scored at the top of the board.
>
> *After:* Neither gate scores a point. Either can stop a name that topped the board.

---

## Scope of the edit

Roughly **1,900 words out of 6,700 removed (~28%)**, concentrated in help and the
`.lifecycle` class. No screen loses a fact. No number changes.

| # | Change | Files | Risk |
|---|--------|-------|------|
| 1 | Unify the three/five-way vocabulary split | `app.js`, `v52-seed.js` | Low — mechanical, but touches seed strings |
| 2 | Delete `.lifecycle` copy on Passed, Watchlist, Trends | `app.js`, `scout-v52.css` | None |
| 3 | Trim tier-3 clauses on Drop, empty Drop, Admin, Worked-to-zero | `app.js` | None |
| 4 | Trends: cut the duplicated 90-day claim | `app.js` | None |
| 5 | Help: move *Where the bar came from* → Admin receipt | `app.js` | Low — Admin already links to it |
| 6 | Help: move design rationale → `DESIGN-NOTES.md` | `app.js`, `DESIGN-NOTES.md` | None |
| 7 | Help: rewrite five section decks | `app.js` | None |
| 8 | Thin em-dashes 85 → ~30, negation pairs 20 → ~8 | `app.js` | Low — judgement per line |

Items 2–4 and 7 are pure deletion and can go in one pass. Item 1 is the one worth a
second read, because a few of those strings come out of the seed rather than the view.

---

## Audit checklist

- [ ] One name per state, everywhere — no screen invents a synonym
- [ ] No sentence explains why a screen is designed the way it is
- [ ] Each claim appears on exactly one screen
- [ ] Em-dash asides rare enough to land
- [ ] Empty and zero states state the fact and stop
- [ ] Help teaches the model; it does not record its own history
- [ ] Every button label is the same verb the product uses elsewhere
- [ ] Reads correctly aloud — no clause-stacking that needs a second pass
