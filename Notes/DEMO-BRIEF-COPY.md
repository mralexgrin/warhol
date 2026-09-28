# Brief copy for the demo — now live

The prototype is wired to the engine. A brief typed into **New brief** starts a
real run: one model call proposes names from those exact words, the real ladder
checks every one over real HTTP, and the screen watches it happen.

## Start it like this

```bash
node Warhol/engine/bin/serve-live.js 8140
```

Then open **http://localhost:8140/v5.4/**

The server must be started from a shell that has `ANTHROPIC_API_KEY` — a normal
terminal does; a launcher that skips your shell profile does not. Check before
you present:

```bash
curl -s http://localhost:8140/api/health
```

`{"live":true,"model":true,...}` means the live scan will run. **`"model":false`
means it will silently fall back to the seeded list** and nobody will be able to
tell from the screen. That fallback exists so nothing can break on stage — which
also means it will not warn you.

Roughly **60 seconds and $0.15** per brief. Nine names.

---

## Brief 1 — the opener

> Car detailing, DIY repair and restoration — creators who work on a machine on
> camera, name the specific part or product they are using, and repeat the
> format every video.

Headline: **Restoration, 50k–2M** · bar *"Named demand in the comments, not
audience size."*

A live run returned: chrisfix 11M, mightycarmods 4.3M, mymechanics 3.6M,
vicegripgarage 2.6M, junkyarddigs 1.3M, southmainautorepairllc, rainmanraysrepairs
665k, thedetailgeek 4M, ammonyc — 286 places checked.

Names change between runs, because it is a fresh model call every time. The
category holds.

## Brief 2 — the proof it is listening

> Home cooking — people who cook one dish start to finish on camera, in a
> kitchen, in a format they repeat every video.

Headline: **Home cooking, 50k–2M**

A live run returned: joshuaweissman 11M, maangchi 6.5M, junskitchen 5.2M,
chefjeanpierre 2.5M, ethanchlebowski 2.4M, brianlagerstrom 1.8M,
chinesecookingdemystified, prohomecooks, aaronandclaire — 195 places checked.

Nine completely different names, sixty seconds later, from the same machine. The
line to say: *nothing about this list overlaps the last one, and neither list
existed before I typed.*

---

## What to say while it runs

The first ~15 seconds are one model call and the screen says so —
*"asking who might match"*. Then all nine appear at once, because one call
produced them at once, and the ladder starts reading them. The meter carries two
numbers: **9 pulled · 3 read**. That gap is the live part.

The honest framing, if anyone asks what they are looking at:

> A model proposed these names from what I typed. **Nothing has checked that any
> of these handles belongs to the person the model meant** — that is why every
> one says proposed and why there is not a single score on this screen. What is
> real is the reading: 286 places, right now, while we talk.

---

## The NFL brief is out

It was in the previous version of this document. Run live it returns
patmcafeeshow 24, danorlovsky7 1k, kylebrandt 16, and three people with no
readable audience at all. Those are honest numbers — NFL media careers live on X
and on television, where the engine can read almost nothing — but they are not
numbers to project.

**The rule:** live briefs want people whose whole business is a YouTube channel
under their own name. Car people and cooking people are perfect. Anyone whose
audience is on X, or on TV, reads as a rounding error however famous they are.

---

## Two things that are still true

**The handles are unverified.** The model proposes them; nothing confirms the
handle belongs to the person it meant. Every row says `proposed` for that
reason, and person verification is the next wall (§11, open question 6).

**Every run costs money and writes to the log.** Each brief you type on stage
appends to `briefs.jsonl` and the observation log, exactly as the CLI would.
Practising three times before the room arrives is three real runs.

---

## If the live server will not start

Nothing needs to change. Serve the prototype the old way and the seeded scan
runs exactly as it did this morning — same screen, same nine names, no badge, no
message. The only visible difference is the small `LIVE` chip in the meter,
which is absent.
