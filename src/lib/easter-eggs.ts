// Trigger detection and the fake terminal for the playground's hidden interactions.
// Pure functions, no DOM. Content is in src/data/easter-eggs.ts.
import { commands, unknownCommand, type TerminalOutput } from '../data/easter-eggs';

export type Trigger = 'unlock' | 'terminal' | 'nap' | 'squirrel';

const normalize = (s: string) => s.trim().toLowerCase().replace(/\s+/g, ' ');

// Whole-message phrases only, so ordinary sentences ("I need a nap") never trigger anything.
const NAP = /^(please )?(go to sleep|take a nap|nap mode)[.!]*$/;
const TERMINAL = /^sudo su( -)?$/;
const UNLOCK = /^unlock snort[- ]?2[.!]*$/;
const SQUIRREL_MENTIONS = 3;

export function createEggs() {
  let mentions = 0;
  let squirrelFired = false;
  let unlocked = false;

  return {
    /**
     * Decides whether a message is a hidden trigger. At most one per message. Exact phrases are
     * checked first; the squirrel count only moves for messages that are not exact phrases.
     */
    route(text: string): Trigger | null {
      const phrase = normalize(text);
      if (NAP.test(phrase)) return 'nap';
      if (TERMINAL.test(phrase)) return 'terminal';
      if (UNLOCK.test(phrase)) return unlocked ? null : 'unlock';

      if (!squirrelFired) {
        mentions += text.match(/\bsquirrels?\b/gi)?.length ?? 0;
        if (mentions >= SQUIRREL_MENTIONS) {
          squirrelFired = true;
          return 'squirrel';
        }
      }
      return null;
    },
    get unlocked() {
      return unlocked;
    },
    unlock() {
      unlocked = true;
    },
    /** New conversation: everything temporary goes away and the alert is armed again. */
    reset() {
      mentions = 0;
      squirrelFired = false;
      unlocked = false;
    },
  };
}

// A Map, so keys like "__proto__" or "constructor" are plain misses.
const table = new Map<string, TerminalOutput>(Object.entries(commands));

/** Looks a typed command up in the fixed table. Nothing is ever evaluated or executed. */
export function runCommand(input: string): TerminalOutput {
  return table.get(normalize(input)) ?? { lines: [unknownCommand] };
}
