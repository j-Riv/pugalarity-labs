// The Snort-1 "model": a keyword matcher over the prewritten replies in src/data/snort.ts.
// It never composes text. It picks an entry, and avoids repeating the one it just gave.
import { categories, fallbacks, models, starters, thinkingStatuses, type ModelId } from '../data/snort';

export interface Reply {
  text: string;
  /** 'starter', a category id, or 'fallback'. Handy for tests. */
  source: string;
}

const normalize = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s]/gu, ' ')
    .replace(/\s+/g, ' ')
    .trim();

export function createEngine(rng: () => number = Math.random) {
  const lastByPool = new Map<string, string>();
  let lastAny = '';

  // Prefer something other than the previous reply, both within this pool and overall.
  const pick = (key: string, pool: readonly string[]) => {
    const last = lastByPool.get(key);
    let options = pool.filter((p) => p !== last && p !== lastAny);
    if (options.length === 0) options = pool.filter((p) => p !== lastAny);
    if (options.length === 0) options = [...pool];
    const choice = options[Math.floor(rng() * options.length)];
    lastByPool.set(key, choice);
    lastAny = choice;
    return choice;
  };

  const reply = (input: string, model: ModelId): Reply => {
    const wanted = normalize(input);
    const starter = starters.find((s) => normalize(s.prompt) === wanted);
    if (starter) {
      const text = starter.replies[model];
      lastAny = text;
      return { text, source: 'starter' };
    }
    for (const category of categories) {
      if (category.pattern.test(input)) {
        return { text: pick(`${category.id}:${model}`, category.replies[model]), source: category.id };
      }
    }
    return { text: pick(`fallback:${model}`, fallbacks[model]), source: 'fallback' };
  };

  return { reply };
}

/** Simulated thinking time for a model, in ms. */
export function thinkDelay(model: ModelId, rng: () => number = Math.random) {
  const [min, max] = models.find((m) => m.id === model)?.thinkMs ?? [1000, 1500];
  return Math.round(min + rng() * (max - min));
}

export function thinkingStatus(rng: () => number = Math.random) {
  return thinkingStatuses[Math.floor(rng() * thinkingStatuses.length)];
}
