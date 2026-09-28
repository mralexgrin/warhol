'use strict';
/* ============================================================================
   THE MODEL CALL — the left side of the wall.

   What the model is allowed to do here:
     - read text WE fetched and classify it (is this comment purchase intent?)
     - quote from text WE fetched (which sentence shows strain?)
     - judge fit against a brief
     - propose MORE PLACES TO LOOK

   What it is structurally prevented from doing:
     - writing a verification state (store.js throws — see THE WALL)
     - inventing a quote. Every quote it returns is checked against the source
       text it was given. Anything that isn't a literal substring is dropped
       and logged as a fabrication. That check is eight lines and it is the
       difference between evidence and plausible-sounding fiction.

   If there is no API key, this module reports unavailable and the engine runs
   the whole deterministic half without it. That is not a degraded mode; it is
   a demonstration that the credible half of the product needs no model at all.
   ========================================================================== */

const { appendCost } = require('./store');

let Anthropic = null;
try { Anthropic = require('@anthropic-ai/sdk'); } catch { /* optional */ }

let client = null;
let unavailableReason = null;

function available() {
  if (client) return true;
  if (unavailableReason) return false;
  if (!Anthropic) { unavailableReason = 'the @anthropic-ai/sdk package is not installed (run: npm install in engine/)'; return false; }
  if (!process.env.ANTHROPIC_API_KEY && !process.env.ANTHROPIC_AUTH_TOKEN) {
    unavailableReason = 'no ANTHROPIC_API_KEY in the environment';
    return false;
  }
  const Ctor = Anthropic.default || Anthropic;
  client = new Ctor();
  return true;
}

function reason() { return unavailableReason; }

/**
 * Which model does this job, and what does it cost.
 *
 * `job` is 'classify' or 'judge' — the same two names the effort setting already
 * used, because it is the same distinction: extraction versus judgment. The
 * price table is keyed by MODEL rather than by job, so a cost row stays correct
 * if two jobs ever share a model, and `warhol cost` can break spend down by
 * model without being told the mapping.
 *
 * Throws rather than defaulting on an unknown model. A missing price would
 * silently record $0.00 and §11.4's whole point is that the bill is measured.
 */
function resolveJob(cfg, job) {
  const model = (cfg.models || {})[job];
  if (!model) throw new Error(`no model configured for the "${job}" job — see config/weights.json llm.models`);
  const price = (cfg.pricing || {})[model];
  if (!price) throw new Error(`no price for "${model}" — add it to config/weights.json llm.pricing, or the bill silently reads $0.00`);
  // Sending `effort` to a model that does not take it is a 400, and a 400 here
  // scores neutral and reads exactly like "we looked and found nothing". Opt in
  // per model rather than out — an unlisted model gets no effort parameter and
  // works, instead of failing in the one way this codebase cannot see.
  const supportsEffort = !!(cfg.effortSupported || {})[model];
  return { model, price, effort: supportsEffort ? ((cfg.effort || {})[job] || 'low') : null };
}

/** One structured call. Returns { ok, data } or { ok:false, why }. */
async function ask({ system, prompt, schema, job, cfg, label }) {
  if (!available()) return { ok: false, why: reason() };

  let model, price, effort;
  try { ({ model, price, effort } = resolveJob(cfg, job)); }
  catch (e) { return { ok: false, why: e.message }; }

  try {
    const res = await client.messages.create({
      model,
      max_tokens: 8000,
      output_config: {
        ...(effort ? { effort } : {}),
        format: { type: 'json_schema', schema },
      },
      system,
      messages: [{ role: 'user', content: prompt }],
    });

    if (res.stop_reason === 'refusal') {
      return { ok: false, why: 'the model declined this request' };
    }

    const usage = res.usage || {};
    const inTok = (usage.input_tokens || 0) + (usage.cache_read_input_tokens || 0) + (usage.cache_creation_input_tokens || 0);
    const outTok = usage.output_tokens || 0;
    const usd = (inTok / 1e6) * price.input + (outTok / 1e6) * price.output;
    appendCost({ kind: 'llm', pass: 'study', label, job, model, effort, input_tokens: inTok, output_tokens: outTok, usd });

    const text = (res.content || []).filter((b) => b.type === 'text').map((b) => b.text).join('');
    return { ok: true, data: JSON.parse(text), usd };
  } catch (e) {
    appendCost({ kind: 'llm', pass: 'study', label, error: e.message });
    return { ok: false, why: `${e.name || 'error'}: ${e.message}` };
  }
}

/** Anti-fabrication: a quote must appear verbatim in the text we supplied. */
function keepOnlyRealQuotes(items, sourceText, quoteField = 'quote') {
  const hay = (sourceText || '').replace(/\s+/g, ' ').toLowerCase();
  const kept = [];
  const fabricated = [];
  for (const it of items || []) {
    const q = (it && it[quoteField] ? String(it[quoteField]) : '').replace(/\s+/g, ' ').trim();
    if (q && hay.includes(q.toLowerCase())) kept.push(it);
    else fabricated.push(q);
  }
  return { kept, fabricated };
}

/* ---------------------------------------------------------------------------
   1. Demand — classify text we already have.
   ------------------------------------------------------------------------- */
const DEMAND_SCHEMA = {
  type: 'object',
  properties: {
    signals: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          quote: { type: 'string' },
          intent: { type: 'string', enum: ['buy', 'subscribe', 'none'] },
          points_at: { type: 'string', enum: ['store', 'newsletter', 'youtube_channel', 'membership', 'podcast', 'website', 'unspecified'] },
        },
        required: ['quote', 'intent', 'points_at'],
        additionalProperties: false,
      },
    },
  },
  required: ['signals'],
  additionalProperties: false,
};

async function classifyDemand(texts, cfg) {
  const source = texts.join('\n');
  if (!source.trim()) return { ok: false, why: 'no readable text to classify' };
  const r = await ask({
    label: 'classify_demand',
    job: 'classify',
    cfg,
    schema: DEMAND_SCHEMA,
    system:
      'You classify text that has already been collected. You never invent text. ' +
      'Every quote you return must be copied character-for-character from the input. ' +
      'You are not deciding whether anything exists — only what the words say.',
    prompt:
      'Below are captions and comments written about or by one creator. Return every line that ' +
      'expresses intent to buy something or subscribe to something, and say what it points at. ' +
      'A line asking where to buy points at a store. A line asking for a newsletter points at a ' +
      'newsletter. Ignore compliments and general praise.\n\n' + source,
  });
  if (!r.ok) return r;
  const { kept, fabricated } = keepOnlyRealQuotes(r.data.signals, source);
  return { ok: true, signals: kept.filter((s) => s.intent !== 'none'), fabricated, usd: r.usd };
}

/* ---------------------------------------------------------------------------
   2. Pressure — the creator's own words. Rarest and strongest evidence.
   ------------------------------------------------------------------------- */
const STRAIN_SCHEMA = {
  type: 'object',
  properties: {
    quotes: {
      type: 'array',
      items: {
        type: 'object',
        properties: { quote: { type: 'string' }, reading: { type: 'string' } },
        required: ['quote', 'reading'],
        additionalProperties: false,
      },
    },
  },
  required: ['quotes'],
  additionalProperties: false,
};

async function classifyStrain(captions, cfg) {
  const source = captions.join('\n');
  if (!source.trim()) return { ok: false, why: 'no readable captions' };
  const r = await ask({
    label: 'classify_strain',
    job: 'classify',
    cfg,
    schema: STRAIN_SCHEMA,
    system:
      'You quote and you count. You do not diagnose. Return the creator\'s own words verbatim ' +
      'and a short plain-English reading of what those words say — never a claim about their ' +
      'mental state. "She wrote that she cannot keep up" is a reading. "She is burned out" is a ' +
      'diagnosis and is forbidden.',
    prompt:
      'Below are captions written by one creator. Return any in which they say, in their own words, ' +
      'that they are struggling to keep up, falling behind, overwhelmed, apologising for being quiet, ' +
      'or doing this alone. Copy each quote exactly.\n\n' + source,
  });
  if (!r.ok) return r;
  const { kept, fabricated } = keepOnlyRealQuotes(r.data.quotes, source);
  return { ok: true, quotes: kept, fabricated, usd: r.usd };
}

/* ---------------------------------------------------------------------------
   3. Fit — the gate. Per brief. PRD §5.1.
   ------------------------------------------------------------------------- */
const FIT_SCHEMA = {
  type: 'object',
  properties: {
    verdict: { type: 'string', enum: ['pass', 'fail'] },
    because: { type: 'string' },
    distinctive: { type: 'string' },
  },
  required: ['verdict', 'because', 'distinctive'],
  additionalProperties: false,
};

async function judgeFit(brief, dossier, cfg) {
  const r = await ask({
    label: 'judge_fit',
    job: 'judge',
    cfg,
    schema: FIT_SCHEMA,
    system:
      'You judge whether one creator matches one brief. You are a gate, not a scorer. ' +
      'Say pass or fail and why, in one plain sentence a person could read aloud. ' +
      'You have no access to whether they have a newsletter or a store — that is settled elsewhere ' +
      'and is not your question. ' +
      // 6 Aug 2026 — judge the brief in front of you and nothing else. Run against
      // real people, this judge failed creators for "only 12k followers" and "no
      // sign of pressure" when the brief never asked about either. Audience size,
      // whether they already earn, and how much trouble they are in are worth 75 of
      // the 100 points scored elsewhere; re-deciding them here counts one fact twice
      // and lets an eyeballed "5k feels small" overrule calibrated weights. A brief
      // MAY name a size or a business — "modest following is fine" is a real brief —
      // and then it is yours to judge, because the brief asked.
      'Judge only what this brief actually asks for. Do not add criteria it does not state. ' +
      'In particular, never fail someone over audience size, whether they already make money, ' +
      'or how much pressure they are under unless the brief itself raises it — those are scored ' +
      'separately, and failing on them here counts the same fact twice. ' +
      // 6 Aug 2026, second pass. A brief that states a hard requirement ("main
      // channel must be YouTube") was making this judge fail creators for facts
      // it could not READ rather than facts that disqualified them —
      // forensicdetailingchannel was failed with "the content fits the brief,
      // but there's no visible YouTube subscriber count". That inverts §11.3:
      // "we could not read it" must never become a verdict about the person. It
      // was a side door around the rule, opened by prose in a brief.
      // Fit is a two-value gate (Q20) so "unknown" is not available here — and
      // it does not need to be. Confidence already exists to carry how much went
      // unread, and it drops on its own. Judging what IS visible is therefore
      // the honest answer, not a lenient one.
      'Judge on what you can actually see. If the brief states a requirement and the evidence ' +
      'in front of you cannot confirm or deny it, that is not a fail — say it is unconfirmed and ' +
      'decide on what is visible. Fail only when something you can see is genuinely wrong for ' +
      'this brief.',
    prompt:
      `THE BRIEF\n${brief}\n\nTHE CREATOR\n` +
      `handle: ${dossier.handle}\n` +
      `platforms: ${dossier.surfaces.map((s) => `${s.platform} ${s.followers || '?'}`).join(', ')}\n` +
      `bio: ${dossier.surfaces.map((s) => s.bio).filter(Boolean).join(' | ') || '(unreadable)'}\n` +
      `recent posts: ${dossier.surfaces.flatMap((s) => s.captions || []).slice(0, 25).join(' / ') || '(unreadable)'}\n\n` +
      'Also give one short line on what only they have — access, expertise, a point of view — or say ' +
      'plainly that nothing stands out.',
  });
  if (!r.ok) return r;
  return { ok: true, ...r.data, usd: r.usd };
}

/* ---------------------------------------------------------------------------
   3b. THE VERDICT LINE — one sentence at the top of the report. 11 Aug 2026.

   WHY THIS IS ALLOWED AT ALL, stated before the code because it is the only
   question that matters here. §5.3 forbids a model deciding whether a thing
   EXISTS. This sentence decides nothing: every fact in it was settled by an
   HTTP status code and a written rule before the model was called, and the row
   it is written to is engine 'llm', which store.js makes structurally
   incapable of carrying a verification state. It is the same class of act as
   judgeFit — a judgment about facts already verified — and it sits in the same
   lilac treatment on the report, so a reader can see it is the model talking.

   WHY IT IS WORTH DOING NOW AND WAS NOT BEFORE. Until samples existed, a model
   writing this had nothing but the inventory to work from, so the sentence
   would have been the score in prose. It can now read what the creator
   actually published, which is the difference between "1.1M subscribers and no
   store" and a sentence about what they make.

   THE CITATION RULE, MADE MECHANICAL. A verdict line is the most prominent
   sentence on the page and the one a reader is least likely to check, so
   "every clause must trace to a verified fact" cannot be a hope in a prompt.
   Every numeric token the model writes must appear in the facts we handed it.
   One that does not fails the whole sentence — we do not repair it, because a
   half-trusted sentence in that position is worse than the countable-facts
   fallback the report already has.
   ------------------------------------------------------------------------- */
const HEADLINE_SCHEMA = {
  type: 'object',
  properties: {
    sentence: { type: 'string' },
    rests_on: { type: 'array', items: { type: 'string' } },
  },
  required: ['sentence', 'rests_on'],
  additionalProperties: false,
};

/**
 * Numeric tokens as NUMBERS. "1.1M" -> 1100000, "43k" -> 43000, "5,978" -> 5978.
 *
 * String matching was the first attempt and it was wrong in the direction that
 * matters: it rejected "1.1M on YouTube" against a fact reading 1,100,000,
 * which is the correct abbreviation of it. A guard that fails good sentences
 * teaches you to switch the guard off.
 */
function numericValues(s) {
  const out = [];
  for (const m of String(s || '').matchAll(/(\d[\d,]*(?:\.\d+)?)\s*([kmb])?\b/gi)) {
    const n = Number(m[1].replace(/,/g, ''));
    if (!Number.isFinite(n)) continue;
    const mult = { k: 1e3, m: 1e6, b: 1e9 }[(m[2] || '').toLowerCase()] || 1;
    out.push({ raw: m[0].trim(), value: n * mult });
  }
  return out;
}

/**
 * Every number in the sentence has to have come from us.
 *
 * Deliberately one-directional: it checks the SENTENCE against the FACTS, never
 * the reverse. The model is free to leave facts out — a good sentence will —
 * and not free to introduce one.
 *
 * The 2% tolerance is for honest abbreviation, not for slack. "1.1M" is a fair
 * way to say 1,148,000 and an unfair way to say 1,400,000. Anything the model
 * invented outright — a follower count nobody measured, a number of years, a
 * percentage — lands nowhere near a fact we supplied and is caught.
 */
const WORD_NUMBERS = {
  one: 1, two: 2, three: 3, four: 4, five: 5, six: 6, seven: 7, eight: 8, nine: 9, ten: 10,
  eleven: 11, twelve: 12, dozen: 12, twenty: 20, thirty: 30, forty: 40, fifty: 50, hundred: 100,
  thousand: 1e3, million: 1e6,
};

/* A spelled-out number counts as a number, but only when it is measuring
   something. "five years of videos" is a claim about their history that nobody
   verified; "one clause where one will do" is prose. The unit noun is what
   separates them, so the pattern requires one rather than flagging every
   numeral word and rejecting good sentences for saying "one". */
const COUNTED_THING = /(years?|months?|weeks?|days?|videos?|posts?|episodes?|uploads?|platforms?|channels?|followers?|subscribers?|viewers?|times)/;

function spelledNumbers(s) {
  const words = Object.keys(WORD_NUMBERS).join('|');
  const re = new RegExp(`\\b(${words})\\s+(?:\\w+\\s+){0,2}?${COUNTED_THING.source}\\b`, 'gi');
  return [...String(s || '').matchAll(re)].map((m) => ({ raw: m[0], value: WORD_NUMBERS[m[1].toLowerCase()] }));
}

function numbersAreOurs(sentence, factText) {
  const facts = numericValues(factText);
  const near = (t) => facts.some((f) => {
    if (f.value === t.value) return true;
    const scale = Math.max(Math.abs(f.value), 1);
    return Math.abs(f.value - t.value) / scale <= 0.02;
  });

  const invented = [...numericValues(sentence), ...spelledNumbers(sentence)]
    .filter((t) => !near(t))
    .map((t) => t.raw);

  return { ok: invented.length === 0, invented };
}

async function writeHeadline(dossier, probed, samples, cfg) {
  const present = probed.inventory.filter((i) => i.state === 'present');
  const absent = probed.inventory.filter((i) => i.state === 'verified_absent');

  /* ONLY SETTLED FACTS GO IN. Items that resolved "not found" are excluded
     outright: they are the ones we could not settle, and a sentence built on
     them would be the model guessing in the report's most valuable slot. */
  const facts = [
    `handle: ${dossier.handle}`,
    `audience: ${dossier.surfaces.filter((s) => s.read && s.followers)
      .map((s) => `${s.followers.toLocaleString()} on ${s.platform}`).join(', ') || 'not readable'}`,
    `they have: ${present.map((i) => i.label).join(', ') || 'nothing we could confirm'}`,
    `they do not have: ${absent.map((i) => i.label).join(', ') || 'nothing verified absent'}`,
    `posting rate: ${dossier.cadence && dossier.cadence.computable ? dossier.cadence.line : 'not readable'}`,
    `their recent work: ${(samples || []).slice(0, 5)
      .map((s) => `"${s.title}"${s.metric != null ? ` (${s.metric.toLocaleString()} ${s.metricUnit || 'views'})` : ''}`)
      .join('; ') || 'we could not read any of their work'}`,
  ].join('\n');

  const r = await ask({
    label: 'write_headline',
    job: 'judge',
    cfg,
    schema: HEADLINE_SCHEMA,
    system:
      'You write ONE sentence that tells an origination desk why a creator is worth a call. ' +
      'Everything below has already been verified by rules and HTTP status codes. You are not ' +
      'deciding whether anything exists — that is settled, and contradicting it is the one ' +
      'unforgivable error. ' +
      'Use only facts given to you. Never introduce a number that is not in the input. ' +
      'Never write an adjective you cannot point at a fact for: not "talented", not "engaging", ' +
      'not "impressive". Say what they make and what they have not built. ' +
      'Plain words, present tense, one clause where one will do. Grade 8-10 reading level. ' +
      'No em-dashes. Do not name the score, the bar, or any points.',
    prompt:
      `${facts}\n\n` +
      'Write the sentence. Then list, in rests_on, each fact above that the sentence depends on, ' +
      'copied as given. If the facts are too thin to say anything a desk could act on, return an ' +
      'empty sentence rather than padding it out.',
  });
  if (!r.ok) return r;

  const sentence = String(r.data.sentence || '').trim();
  if (!sentence) return { ok: false, why: 'the facts were too thin to write a line from' };

  const check = numbersAreOurs(sentence, facts);
  if (!check.ok) {
    return {
      ok: false,
      fabricated: check.invented,
      why: `the line carried ${check.invented.length} number(s) that are not in the record (${check.invented.join(', ')}) — dropped rather than corrected`,
    };
  }
  return { ok: true, sentence, restsOn: r.data.rests_on || [], usd: r.usd };
}

/* ---------------------------------------------------------------------------
   4. Where else to look — the model proposing PLACES, never verdicts.
   ------------------------------------------------------------------------- */
const PLACES_SCHEMA = {
  type: 'object',
  properties: {
    urls: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          url: { type: 'string' },
          item: { type: 'string', enum: ['newsletter', 'store', 'website', 'membership', 'podcast', 'youtube_channel'] },
          why: { type: 'string' },
        },
        required: ['url', 'item', 'why'],
        additionalProperties: false,
      },
    },
  },
  required: ['urls'],
  additionalProperties: false,
};

async function proposePlaces(dossier, cfg) {
  const r = await ask({
    label: 'propose_places',
    job: 'classify',
    cfg,
    schema: PLACES_SCHEMA,
    system:
      'You propose URLs worth checking. You never state what is at them — something else goes and ' +
      'looks. Propose only URLs a real creator of this kind plausibly owns, derived from their ' +
      'handle, display name, or the links they already publish.',
    prompt:
      `handle: ${dossier.handle}\nname: ${dossier.displayName || '(unknown)'}\n` +
      `bio: ${dossier.surfaces.map((s) => s.bio).filter(Boolean).join(' | ')}\n` +
      `links they publish: ${dossier.links.join(', ') || '(none found)'}\n\n` +
      'Give up to 8 additional URLs worth checking, and which piece of inventory each would settle.',
  });
  if (!r.ok) return r;
  return { ok: true, urls: (r.data.urls || []).slice(0, 8), usd: r.usd };
}

/* ---------------------------------------------------------------------------
   5. Who to look at — the model proposing PEOPLE. Task 4, §11.1.

   This is the left side of the wall doing the job it is actually good at.
   §11.1: an LLM can find named, written-about, cross-referenced people because
   that is reasoning over public text; it cannot enumerate every account between
   10k and 100k, because that is a database query with no database. So it gets
   the brief and returns names, and something else goes and looks.

   It proposes a HANDLE and a REASON and nothing else. No audience figure, no
   platform inventory, no "she doesn't have a newsletter" — those are settled by
   Sweep and Probe or not at all. The wall in store.js already makes a verdict
   unwritable; the schema here makes it unaskable.

   ON THE PERSON NOT BEING VERIFIED — decided 6 Aug 2026. Nothing checks that
   the handle belongs to the person the model meant. Most of the risk is already
   absorbed, because a hallucinated handle still has to survive Sweep and comes
   out as an empty report rather than a false one. The residual — a real person
   who is not the intended one — is real, and the guard is that every name from
   here is tagged `source: "proposed"` all the way to the report. Person
   verification is the next wall and it is a separate piece of work.
   ------------------------------------------------------------------------- */
const CANDIDATES_SCHEMA = {
  type: 'object',
  properties: {
    candidates: {
      type: 'array',
      items: {
        type: 'object',
        properties: {
          handle: { type: 'string' },
          why: { type: 'string' },
        },
        required: ['handle', 'why'],
        additionalProperties: false,
      },
    },
  },
  required: ['candidates'],
  additionalProperties: false,
};

async function proposeCandidates(brief, limit, cfg) {
  const r = await ask({
    label: 'propose_candidates',
    job: 'judge',
    cfg,
    schema: CANDIDATES_SCHEMA,
    system:
      'You read an assignment and return the handles of people or organisations who might match it. ' +
      'You are a hypothesis generator, not a source of fact. Something else will go and check every ' +
      'name you give, so a wrong guess costs a wasted look and nothing worse.\n\n' +
      'Return the handle as it is actually written on the platform, without the @. One short reason ' +
      'each, in plain English, saying why this person fits the assignment.\n\n' +
      'You may not say anything about what they have built or sell — whether they have a newsletter, ' +
      'a store, a site, an audience size. You do not know, nobody is asking you, and a guess there ' +
      'would be recorded as if it were checked. Say who they are and why they fit. That is all.',
    prompt:
      `THE ASSIGNMENT\n${brief}\n\n` +
      `Give up to ${limit} handles worth looking at. Prefer people who are written about and ` +
      'cross-referenced in public — the ones you can actually be right about — over trying to ' +
      'enumerate a category. Do not repeat a handle.',
  });
  if (!r.ok) return r;
  const seen = new Set();
  const candidates = [];
  for (const c of r.data.candidates || []) {
    const h = String(c.handle || '').replace(/^@/, '').trim().toLowerCase();
    if (!h || seen.has(h)) continue;
    seen.add(h);
    candidates.push({ handle: h, why: c.why });
    if (candidates.length >= limit) break;
  }
  return { ok: true, candidates, usd: r.usd };
}

module.exports = {
  available, reason, classifyDemand, classifyStrain, judgeFit, proposePlaces, proposeCandidates,
  writeHeadline, numbersAreOurs,
};
