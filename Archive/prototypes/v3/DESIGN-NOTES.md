# Warhol Scout v3 — design notes

v3 is v2 after a UX grooming session. Same PRD, same frozen 24-creator cohort, same Alloy toolkit —
a different model of what the product *is*. v1 and v2 are untouched.

## The inversion

**v2 treated a mandate as the primary object.** You configured one before the app would open, and a
drop was that mandate's output. That is faithful to §6.9, and it asks a first-time user to configure
a system they have never seen — they don't know what a brief produces, so they can't judge whether
their answers are good.

**v3 treats the drop as the primary object.** You sign in and you are looking at today's creators. A
**brief** is a free saved filter over one standing scan, created later, from the rail. It costs
nothing, changes nothing about what Warhol scans, and can never leave you with an empty application.

§6.9's premise — no mandate, no drop, an app that does nothing — is true for a cold multi-tenant
product. It is false for this one, which ships with running briefs and real drops. The overlap
prompt already conceded the point: if *join theirs* is usually right, discovering that shouldn't cost
a three-step wizard first.

## What that deleted

The mandate wizard · first-run state · the wire band · the rewound band · the lens disclosure · the
global as-of control · the hint queue and its priority logic · the overlap prompt · the roster ·
brief membership · Desk Activity · the watchlist's currency.

Two files went with them (`onboarding.js`, `hints.js`), and the top bar went from **seven controls
to two**.

## Measured changes

| | v2 | v3 |
|---|---|---|
| Card height | 796px | ~320px |
| Cards per screen | 0.86 | 2.9 |
| Chrome above the first card, first run | 1,023px (1.11 screens) | ~250px |
| Top-bar controls | 7 | 2 |
| Numbers on a card | 4 | 1 |
| Inline styles in `app.js` | 0 | 1 (the popover's computed position) |

## Colour has a job

v2 lost Alloy's energy by putting everything in plain `.p` containers with near-black ink buttons —
an audit found **zero** uses of `btn--teal`, `arrowbtn`, `ringwrap`, `cvchip` or `tile`, and the
grooming cuts removed most of the remaining coloured panels.

The fix is not sprinkling colour back. It is giving each field one meaning and using it every time
that meaning appears — a field that means something cannot be decoration and cannot be applied
inconsistently:

- **teal** — the gap is real (verified absence, the buy signal)
- **butter** — the timing (operator strain)
- **lilac** — Warhol speaking about itself (definitions, the dated lens)
- **ink** — weight and summary (the score, decided states)

The payoff is more than visual: on the card, gap and strain stop being numbers buried on the report
and become **the two coloured facts**. A first-time user learns what the two pillars are without
reading a definition.

**The primary button is none of the four.** It inverts the surface — ink on light, cream on dark — so
it can be the loudest thing on screen without borrowing a field's meaning. This also fixes v2, where
an ink button on a dark panel was *darker than the panel it sat on*.

## Other decisions worth knowing

**The drop's lifecycle is stated.** v2 never said what became of an undecided name; searching every
rendered string, the words *tomorrow*, *carry over* and *next drop* appeared nowhere. v3 says it on
the drop: today's is today's, undecided names expire tonight and return tomorrow if they still clear.
Nothing piles up, nothing is lost, and it never becomes the second inbox the watchlist promises it
won't be.

**There is no global rewind.** A date picker in the chrome implies you switch it daily; nobody does.
Instead the rewind attaches to a *creator*: **Track record** lists every past call, and opening one
shows that creator's report as it stood on the day the call was made, with what happened next
underneath. Hits *and* the miss — a page with no misses reads as marketing, and the creator Warhol
ranked fifth of six who stayed fifth of six is the most credible thing on it.

**Guidance sits beside the term it explains.** A small `?` next to Confidence, Verified absent,
Monetization gap and Scan depth opens a definition in place. No queue, no priority ordering, no
243px panel arriving before you asked a question.

**Confidence is one number again.** v2 showed `92%` and `94%` on the same card, 300px apart, both
labelled *Confidence* — a collision introduced by renaming "coverage gate" mechanically. Here it is
the ring's sweep on the report and nowhere else.

**The watchlist shows no money.** Pruning argues from movement: *four months tracked, the score has
moved two points*. That is a complete case, and it keeps a cost widget off a list of people.

**Referral status follows the creator**, so a Spotter learns whether their judgment was any good
without a fourth destination. The passed case carries *why* — the only version that improves anyone's
judgment.

## Structure

`alloy.css` is vendored verbatim and never edited; its contract is 56/56 measured WCAG pairs.
`warhol-seed.js` is byte-identical to `_shared/` and never mutated — `v3-seed.js` layers over it.
Classic scripts, no modules, no fetch, runs from `file://`.

Three traps carried forward from v2 and documented at the top of the stylesheet, because each cost
real time:

1. Alloy's `.p` is `flex-direction: column` — a row layout must say so or its children silently stack.
2. Alloy's `.sub .k` is dark ink for use *inside* a colour field; standalone on a dark panel it is invisible.
3. `--page` is a backdrop, not a content surface — body text tokens are tuned to `--slab`.

## Running it

Open `v3/index.html` directly, or serve the parent folder and open `/v3/`.

Demo path: sign in → today's drop → open a report → open *How it scored* → **Track record** → read a
call → see what happened next. Flip to Spotter in the account menu to see *Refer to desk* in the
position Promote occupies.

All creators, scores and figures are synthetic, and the creators are **deliberately fictional** —
fabricating evidence quotes about real accounts is a real risk once a deck gets forwarded.
