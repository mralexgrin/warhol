# PRODUCT.md — Warhol Scout

Scoped to this prototype directory. Source of truth: `../../PRD-WARHOL-SCOUT.md` (28 locked decisions).

## What it is

A listening application for Paradium, a B2B media incubator. It scans the public web for creators
whose audience is worth many times what they extract from it, and delivers a small, ranked,
evidence-backed shortlist every morning.

## Unique mechanism

It reads the **absence**. Every competitor ranks creators by metrics that exist — followers, views,
engagement. Warhol scores what is *missing*: no newsletter across six checked surfaces, no store,
no sponsorship, next to 1,940 comments asking where to buy. The persuasive unit is a quoted comment
begging to buy something, sitting beside an empty monetization inventory. A metric-ranking tool is
structurally blind to it.

## User and job

The Scout. A 1–3 person origination desk. Opens the app in the morning, works the drop to zero,
closes it. Their job: produce the names worth a conversation this week, and enough evidence to
defend each one in a room. Secondary consumer: the exec room, who never touch the app and receive
generated output.

## Mode

Operate. Daily driver, desktop, dense reading, three verbs. Once a quarter it also has to survive
being demoed to a funding room, which the evidence rendering — not the chrome — has to carry.

## Non-negotiable product truths

- Two scored pillars: Monetization Gap (60) + Operator Strain (40). Format Fit is a pass/fail
  **gate contributing zero points**.
- Absence resolves to three states: Present / Verified absent / Not found. Only Verified absent
  scores. Not found is inconclusive and drags confidence.
- Confidence is displayed **alongside** the score, never folded into it.
- Every sub-signal declares its engine: rule (countable) or LLM (judgment).
- Provenance on every fact: source, observed-at, engine. Stale facts read as stale.
- "As of [date]" is first-class; nothing observed after `as_of` is visible when rewound.
- Zero-result days are a feature, not an error state.
- Three verbs: Promote / Watch / Pass. Pass takes a reason; the reason is a suppression rule.
- One Recommended Play from a fixed catalog. **No revenue estimates, ever.**
- Warhol never sends outreach. It drafts; the Scout sends.

## Brand commitments

None inherited. Paradium is a media incubator; Warhol is the internal codename. All creators in the
data are fictional and must stay so.

## Constraints

`file://`, classic scripts only, no build step, no framework, no CDN, no remote images.
Desktop-first. Fidelity bar: high-fidelity clickable concept, not production.
