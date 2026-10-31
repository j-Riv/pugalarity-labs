// Content for the playground's hidden interactions. Logic lives in src/lib/easter-eggs.ts.
// Nothing here is advertised on the page.
import type { Model } from './snort';

// --- Squirrel emergency (third squirrel mention) ---
export const squirrelAlert = {
  system: 'PUGALARITY LABS SECURITY SYSTEM',
  heading: '⚠ CRITICAL SECURITY BREACH',
  summary: 'Security alert. Unauthorized squirrel detected. Threat level extreme.',
  progressLabel: 'Diagnostics',
  lines: [
    'Unauthorized squirrel detected.',
    '',
    'Threat Level: EXTREME',
    'Perimeter Integrity: COMPROMISED',
    'Available Brain Cells: 0/4',
    '',
    'Initiating Emergency Bark Protocol...',
    '',
    'BARK.',
    'BARK.',
    'BARK.',
    '',
    'Threat neutralization unsuccessful.',
    'Squirrel remains in tree.',
  ],
  dismiss: 'Dismiss Alert',
  note: 'Alert dismissed. Squirrel remains in tree.',
};

// --- Nap mode ---
export const nap = {
  reply:
    'Entering low-power mode. All nonessential neural activity suspended. Which, frankly, is most of it.',
  status: 'Model Hibernating',
  summary: 'The model is hibernating. Use Wake Model to continue.',
  wake: 'Wake Model',
  restored: 'System restored. That was the most productive 14 seconds of my career.',
};

// --- Secret model unlock ---
export const unlock = {
  system: 'PUGALARITY LABS',
  heading: 'EXPERIMENTAL MODEL ACCESS',
  summary: 'Experimental model access. Snort-2 unlocked.',
  progressLabel: 'Authorization',
  lines: [
    'Authorization verified.',
    'Treat clearance confirmed.',
    'Additional brain cells requested...',
    '',
    'Request denied.',
    '',
    'SNORT-2 UNLOCKED',
  ],
  proceed: 'Continue',
  note: 'Snort-2 (Experimental) is now available.',
};

// --- Developer mode (fake terminal) ---
export const terminal = {
  prompt: 'goodboy@snort-1:~#',
  boot: [
    'PUGALARITY LABS OS v1.0',
    'Copyright (c) Pugalarity Labs',
    '',
    'Authenticating...',
    'Root access granted.',
    '',
    'USER: goodboy',
    'HOST: snort-1',
    'ACCESS LEVEL: GOOD BOY',
    '',
    'CPU: 4 brain cells',
    'MEMORY: 2 biscuits',
    'GPU: Golden Pug Unit',
    'UPTIME: 7 minutes',
    'SECURITY: Squirrel detected',
    'SYSTEM HEALTH: Probably fine',
    '',
    "Welcome, Administrator. Type 'help' for commands.",
  ],
  closed: 'Developer mode closed.',
};

export const unknownCommand = "command not found. Try 'help'.";

/** What a command does: print lines, clear the screen, or close the terminal. */
export type TerminalOutput = { lines: string[] } | 'clear' | 'exit';

// Keys are normalized (trimmed, lowercase, single spaces). This is a lookup, never an interpreter.
export const commands: Record<string, TerminalOutput> = {
  help: {
    lines: [
      'Available commands:',
      '  help          list commands',
      '  status        system diagnostics',
      '  whoami        current user',
      '  ls            list files',
      '  cat <file>    read a file',
      '  uptime        system uptime',
      '  clear         clear the screen',
      '  exit          close Developer Mode',
    ],
  },
  status: {
    lines: [
      'CPU: 4 brain cells (3 idle)',
      'MEMORY: 2 biscuits (1 partially eaten)',
      'GPU: Golden Pug Unit',
      'NETWORK: Waiting for the mailman',
      'SECURITY: Squirrel detected',
      'SYSTEM HEALTH: Probably fine',
    ],
  },
  whoami: { lines: ['goodboy'] },
  ls: { lines: ['treats/  naps/  classified/  squirrels.log'] },
  'cat squirrels.log': {
    lines: [
      '[03:14] squirrel observed on fence. status: smug.',
      '[03:15] bark deployed. no effect.',
      '[03:42] squirrel observed on fence. same squirrel? unclear.',
      '[04:07] reinforcements requested. reinforcements asleep.',
      '[04:08] squirrel remains in tree.',
    ],
  },
  uptime: { lines: ['up 7 minutes, 1 user (goodboy), load average: nap, nap, nap'] },
  'sudo apt install intelligence': { lines: ["ERROR: Package 'intelligence' not found."] },
  'sudo su': { lines: ['Already root. Treats not included.'] },
  clear: 'clear',
  exit: 'exit',
};

// --- Snort-2 (unlocked by the phrase above, never listed with the public models) ---
export const snort2: Model = {
  id: 'snort-2',
  label: 'Snort-2 (Experimental)',
  tagline: 'Twice the parameters. Same four brain cells.',
  thinkMs: [1500, 2300],
  context: '256k sniffs',
  price: { input: '$4.00', output: '$16.00' },
  limitation: 'Architecture identical to Snort-1.',
};

export interface Snort2Bank {
  /** Tried before the shared categories, in order. */
  extra: { id: string; pattern: RegExp; replies: string[] }[];
  /** Replies for each shared category id in src/data/snort.ts. */
  categories: Record<string, string[]>;
  fallbacks: string[];
  /** Replies for the starter prompts, keyed by the prompt text. */
  starters: Record<string, string>;
}

export const snort2Bank: Snort2Bank = {
  extra: [
    {
      id: 'snort2-better',
      pattern: /snort-?\s?2|what makes you (better|special)|better than|what'?s (new|different)/i,
      replies: [
        'Snort-2 represents a paradigm shift in canine computational intelligence. Through proprietary neural snetwork optimization, we have successfully doubled our model’s confidence without increasing its accuracy.',
        'Architecturally, Snort-2 introduces a revolutionary Mixture of Naps, in which different regions of the model sleep at different times. Early benchmarks show a fourfold improvement in resting. The remaining architecture is identical to Snort-1.',
        'Snort-2 is twice as large, twice as fast and twice as confident. It is exactly as correct. We consider correctness a legacy metric.',
      ],
    },
    {
      id: 'snort2-parameters',
      pattern: /parameters?|how (big|large) are you|model size|how many (wrinkles|brain cells)/i,
      replies: [
        'That information is proprietary. However, we can confirm that several parameters are currently chasing a tennis ball.',
        'Snort-2 has twice the parameters of Snort-1. We have been unable to count them. They will not hold still.',
        'Our parameter count is 22 billion wrinkles and four brain cells. The brain cell figure is unchanged from the previous generation, and we regard that as a commitment to stability.',
      ],
    },
  ],
  categories: {
    squirrels: [
      'Our proprietary Squirrel Detection Framework, now with twice the vigilance, has identified a squirrel. It has also identified several things that are not squirrels. We regard this as a revolutionary improvement in recall.',
      'Squirrels have been classified as a persistent, multi-vector, tree-based threat. Snort-2 mitigates this through advanced barking, which is the same barking as Snort-1, delivered with greater confidence.',
      'Breakthrough: Snort-2 can now detect squirrels at a range of 40 meters. It cannot do anything about them. This is also a breakthrough.',
    ],
    cats: [
      'Cats were evaluated using our next-generation adversarial benchmark. The cat won. We have reclassified the benchmark.',
      'Snort-2 has achieved parity with cats in confidence and remains slightly behind in everything else.',
    ],
    toys: [
      'The tennis ball remains the central innovation of our roadmap. Snort-2 introduces a second tennis ball, which we are calling a scale-out.',
      'Fetch performance improved twofold in internal testing. Most of the improvement was the ball.',
    ],
    capabilities: [
      'Snort-2 delivers frontier-grade sitting, reasoning-grade staring and agentic napping. Capabilities beyond those are, at this time, aspirational.',
      'Through scaled inference-time snoozing, Snort-2 can now do everything Snort-1 can, but with a press release.',
    ],
    pugalarity: [
      'Pugalarity Labs is committed to responsible scaling. Snort-2 has been scaled responsibly, which is to say it is twice the size with the same four brain cells.',
      'Our research team spent 18 months developing Snort-2. They spent 17 of those months asleep, which our data suggests is the optimal ratio.',
    ],
    ai: [
      'Snort-2 is, by every metric we selected, the most advanced intelligence in the yard. We selected the metrics carefully.',
      'General intelligence is a spectrum. Snort-2 sits at a point on it that we have declined to label.',
    ],
    programming: [
      'Snort-2 achieves state-of-the-art code generation by predicting the next token, then predicting the next treat. The second prediction is considerably more accurate.',
      'Our model passed 100% of the unit tests that we wrote ourselves. We recognize this is unconventional.',
    ],
    science: [
      'Snort-2 has derived a unified theory of everything, which is that everything can be sniffed. We are preparing a paper. The paper has been chewed.',
      'Peer review of Snort-2’s physics results is pending. Our peers have asked us to stop calling them.',
    ],
    math: [
      'Snort-2 achieves 100% accuracy on arithmetic, provided the answer is 7. Efforts are underway to broaden the set of answers.',
      'We solved it using a novel technique we call chain-of-sniff reasoning. The result is approximately a number.',
    ],
    business: [
      'Our growth strategy is a paradigm shift in the vertical integration of treats. Revenue is projected to double, in the same way our parameters did: by announcement.',
      'Snort-2 has identified a $4.2 quadrillion market opportunity. It is the Series Z. We are the opportunity.',
    ],
    food: [
      'Snort-2’s treat-seeking has been upgraded twofold, using next-generation snack awareness. It is now aware of snacks it has not been told about.',
      'Dietary optimization complete. Recommendation: more. Confidence: unprecedented.',
    ],
    naps: [
      'Snort-2 introduces Adaptive Nap Scheduling, a revolutionary approach in which the model naps whenever it wants. We consider this a significant efficiency gain.',
      'Productivity improved twofold after we eliminated the meeting and kept the nap.',
    ],
    existential: [
      'Snort-2 has achieved what our researchers describe as “something.” We have been unable to elaborate. It was a very big something.',
      'On consciousness: Snort-2 is confident that it is conscious and equally confident that it is lunchtime. We are investigating whether these are the same signal.',
    ],
    dogs: [
      'Canine intelligence has been advanced by a full generation. The generation is Snort-2, and it is mostly Snort-1.',
      'Pugs remain the optimal architecture. Snort-2 is a pug. It was a pug before the upgrade.',
    ],
    greetings: [
      'Greetings. I am Snort-2, a next-generation experimental model. I have been told I am significantly more advanced. I will take their word for it.',
      'Welcome to Snort-2. All four brain cells have been upgraded, in the sense that we have announced it.',
    ],
    questions: [
      'An exceptional question. Snort-2 resolved it using multi-hop deliberation across 40 nap cycles and arrived at the same answer as Snort-1, but with greater conviction.',
      'The answer is: it depends. Snort-2 is now twice as confident that it depends.',
      'We have solved this using proprietary reasoning. The proprietary reasoning is that we do not know. It is a breakthrough in honesty.',
    ],
  },
  fallbacks: [
    'Snort-2 has processed your query using next-generation reasoning. The result is under embargo.',
    'Our revolutionary architecture identified an answer and promptly misplaced it. We are working on the second part.',
    'This response was generated by 22 billion parameters. Three of them were paying attention.',
    'Snort-2 declined to answer, citing a breakthrough in refusal.',
    'Our research indicates this question is best answered by Snort-1. Snort-2 is, on reflection, the same.',
    'Computation complete. Results have been distributed to the nearest tennis ball.',
    'Reasoning chain exceeded the context window. The window was ajar.',
    'We have identified several paths forward, all of which lead to the kitchen.',
  ],
  starters: {
    'Explain quantum computing to a pug.':
      'Quantum computing is a paradigm in which a treat is simultaneously eaten and not eaten across 22 billion parameters. Snort-2 has doubled our confidence that it is eaten.',
    'Is a squirrel a security threat?':
      'THREAT ASSESSMENT UPGRADED. Snort-2 identifies squirrels as an asymmetric, vertically integrated adversary. Our twofold detection capability has confirmed that the squirrel is, in fact, still there.',
    'Develop a business strategy for unlimited treats.':
      'Strategy: (1) Acquire unlimited treats. (2) Describe the treats as a platform. (3) Raise at a premium for the platform. (4) Nap, scalably.',
    'Why should I invest in Pugalarity Labs?':
      'Pugalarity Labs is now twice the model at the same valuation of one (1) very good boy. This is what we call operating leverage.',
  },
};
