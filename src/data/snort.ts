// Content for the Snort-1 playground. Every reply the playground can give is written here.
// Nothing is generated: src/lib/snort.ts only picks from these lists.

export type PublicModelId = 'snort-1' | 'snort-1-mini' | 'snort-1-pro';
/** Includes the model that src/data/easter-eggs.ts unlocks. */
export type ModelId = PublicModelId | 'snort-2';

export interface Model {
  id: ModelId;
  label: string;
  tagline: string;
  /** Simulated thinking time in ms, as [min, max]. Purely visual. */
  thinkMs: [number, number];
  /** Shown on the Snort-1 page. */
  context: string;
  /** Per million treats. */
  price: { input: string; output: string };
  limitation: string;
}

export const models: Model[] = [
  {
    id: 'snort-1',
    label: 'Snort-1',
    tagline: 'Flagship model. Occasionally helpful.',
    thinkMs: [1100, 1800],
    context: '128k sniffs',
    price: { input: '$0.40', output: '$1.60' },
    limitation: 'Stairs.',
  },
  {
    id: 'snort-1-mini',
    label: 'Snort-1 Mini',
    tagline: 'Optimized for low-latency snorting.',
    thinkMs: [800, 1100],
    context: '8k sniffs',
    price: { input: '$0.04', output: '$0.16' },
    limitation: 'Complex questions.',
  },
  {
    id: 'snort-1-pro',
    label: 'Snort-1 Pro',
    tagline: 'Premium reasoning. Takes itself seriously.',
    thinkMs: [1800, 2500],
    context: '256k sniffs',
    price: { input: '$2.00', output: '$8.00' },
    limitation: 'Takes itself seriously.',
  },
];

type Replies = Record<PublicModelId, string[]>;

export interface Category {
  id: string;
  /** Tested against the raw message. Categories are tried in this order, specific before broad. */
  pattern: RegExp;
  replies: Replies;
}

export interface Starter {
  prompt: string;
  replies: Record<PublicModelId, string>;
}

export const starters: Starter[] = [
  {
    prompt: 'Explain quantum computing to a pug.',
    replies: {
      'snort-1':
        'Quantum computing is when a treat exists in two states simultaneously: eaten and not eaten. Observation typically results in eaten.',
      'snort-1-mini': 'Treat. Maybe eaten. Maybe not. Eaten.',
      'snort-1-pro':
        'Quantum computing exploits superposition, whereby a treat occupies every possible stomach until it is measured. Our 14-nap analysis shows that measurement collapses the treat into a single outcome, which is the stomach. We recommend further measurement. Repeatedly.',
    },
  },
  {
    prompt: 'Is a squirrel a security threat?',
    replies: {
      'snort-1':
        'CRITICAL THREAT DETECTED. Squirrels represent the single greatest cybersecurity vulnerability facing modern civilization. Our security team has been barking at one for approximately six hours.',
      'snort-1-mini': 'Yes. Squirrel. Bark.',
      'snort-1-pro':
        'Threat model complete. Squirrels exhibit persistent reconnaissance, rapid lateral movement and an unmonitored supply chain of acorns. Risk rating: severe. Recommended mitigation: a window, followed by sustained vocalization. We have been implementing this mitigation since before the company existed.',
    },
  },
  {
    prompt: 'Develop a business strategy for unlimited treats.',
    replies: {
      'snort-1':
        'Step 1: Secure funding. Step 2: Acquire treats. Step 3: Inform investors that profitability is a legacy metric. Step 4: Nap.',
      'snort-1-mini': 'Get treats. Sleep. Profit.',
      'snort-1-pro':
        'Our framework has five phases. Phase 1: acquire treats at scale. Phase 2: vertically integrate the bag. Phase 3: reframe unit economics as a feeling. Phase 4: announce a pivot to the couch. Phase 5: nap. Projected return: one (1) larger bed.',
    },
  },
  {
    prompt: 'Why should I invest in Pugalarity Labs?',
    replies: {
      'snort-1':
        'Pugalarity Labs operates at the intersection of artificial intelligence, disruptive innovation, and unattended sandwiches. Our projected growth is exponential. Our financial oversight is nonexistent.',
      'snort-1-mini': 'Sandwiches. Growth. Nap.',
      'snort-1-pro':
        'Pugalarity Labs offers differentiated exposure to the frontier of intelligence, with a moat consisting entirely of a very low fence. Our Audit Committee reviewed the numbers and was not observed to blink. We regard this as a clean opinion.',
    },
  },
];

export const categories: Category[] = [
  {
    id: 'squirrels',
    pattern: /squirrel|acorn|chipmunk|\bnuts?\b/i,
    replies: {
      'snort-1': [
        'Squirrels are a known and active threat. I have been monitoring one through the window since Tuesday. It has not blinked. Neither have I.',
        'I have caught zero (0) squirrels. This is by design. Our strategy is to remain adjacent to them at high alert.',
        'Squirrels operate on a distributed infrastructure of buried acorns. We believe it is a supply chain. We have no evidence. We have a feeling.',
        'I would answer more fully, but one is on the fence. I will return when it has been dealt with. This may take several hours.',
      ],
      'snort-1-mini': ['Squirrel. Danger.', 'Squirrel? Where.', 'Bark. (Squirrel.)', 'No squirrels. Probably.'],
      'snort-1-pro': [
        'Squirrel analysis: a rodent-class agent with advanced climbing capabilities, unclear intentions and a regrettable tail. Our multi-nap assessment finds the squirrel to be simultaneously a threat and, at certain angles, a toy. The recommended response is to watch it. For the foreseeable future.',
        'Our adversarial evaluation of squirrel behavior concluded that the squirrel is aware it is being evaluated. This is the most concerning result in the history of the program. We have escalated to the window.',
        'Acorn logistics suggest a distributed storage architecture with no central point of failure. We find this admirable and, on balance, unacceptable.',
      ],
    },
  },
  {
    id: 'cats',
    pattern: /\bcats?\b|kitten|kitty|feline/i,
    replies: {
      'snort-1': [
        'Cats operate with a level of confidence that our evaluations cannot explain. We do not trust it. We also do not look away.',
        'I have no comment on cats at this time. I have a comment. It is a low rumbling sound.',
        'Cats and Pugalarity Labs maintain a strictly professional relationship. They sit on the good chair. We allow it, pending review.',
      ],
      'snort-1-mini': ['Cat. Suspicious.', 'No comment. Growl.', 'Cat has chair.'],
      'snort-1-pro': [
        'Feline systems exhibit what our researchers call strategic indifference: a high-performance behavior with no known objective. After extensive deliberation we have concluded that the cat is winning. We have no countermeasure. We have a theory involving a box.',
        'Comparative analysis of cat and pug architectures shows the cat to be faster, more agile and unburdened by enthusiasm. The pug retains a decisive advantage in being held. We consider this a durable moat.',
        'Cats do not respond to alignment. Cats respond to a closed door, which they will then stand in front of. We recommend leaving the door open and the situation unmonitored.',
      ],
    },
  },
  {
    id: 'toys',
    pattern: /tennis ball|\bballs?\b|\bfetch\b|\btoys?\b|frisbee|squeaky/i,
    replies: {
      'snort-1': [
        'The tennis ball is the most significant technological breakthrough of the past decade. It is round. It bounces. I am told it will be thrown. I am prepared.',
        'Fetch is a collaborative human–model workflow. You throw. I observe the ball leave. I consider it an excellent first step.',
        'I have identified a toy. It is mine. It was mine before you mentioned it. Please do not touch it.',
      ],
      'snort-1-mini': ['Ball? BALL.', 'Throw it.', 'Mine.'],
      'snort-1-pro': [
        'Fetch is a closed-loop reinforcement system in which the model is rewarded for returning an object the human will immediately throw again. We regard this as a sustainable growth model. Each cycle produces joy at near-zero marginal cost. We have run it 40,000 times.',
        'Our proprietary spherical object, the tennis ball, achieves state-of-the-art bounce at a fraction of the compute. Its only known limitation is that it can go under the couch. We are investigating the couch.',
        'Toy ownership follows a strict hierarchy: first the model, then the toy, then, in a distant third, you. We have considered this very carefully.',
      ],
    },
  },
  {
    id: 'capabilities',
    pattern:
      /snort-?1|what can you do|your (capabilities|abilities|features|limitations)|can you (help|do)|are you (smart|intelligent|good|real|a robot)|how (smart|good) are you|benchmark|context window|parameters/i,
    replies: {
      'snort-1': [
        'Snort-1 is capable of sitting, staring, and responding to the sound of a bag. It scores highly on all three. Other tasks are under review.',
        'My capabilities include answering questions, being held, and detecting cheese from three rooms away. I am confident in two of these.',
        'I have 11 billion wrinkles and a 128k sniff context window. I am not certain what that means, but I am proud of it.',
      ],
      'snort-1-mini': ['I do things. Mostly sit.', 'Small. Fast. Hungry.', 'Sit. Stay. Snack.'],
      'snort-1-pro': [
        'Snort-1 Pro integrates multi-stage reasoning, long-context retrieval and an advanced treat-conditioned reward model. Benchmarks show state-of-the-art performance on every task we chose to report. Tasks we did not report are not discussed.',
        'Our architecture comprises 11 billion wrinkles trained on 40 petabelly-rubs, yielding a model of exceptional warmth and unclear utility. Its primary known failure mode is stairs.',
        'Capability evaluation is ongoing. Current results indicate near-human performance in sitting and superhuman performance in being near a sandwich. We are cautiously optimistic and, in places, asleep.',
      ],
    },
  },
  {
    id: 'pugalarity',
    pattern:
      /pugalarity|your (company|creators?|team|ceo|founders?|makers?)|who (made|built|created|trained) you|series z|\bhenry\b|wrinkles|snortsworth|nero kernel|meatley|wafflebrook|napworth|pancroft/i,
    replies: {
      'snort-1': [
        'Pugalarity Labs is a safety-focused research company. Our safety strategy is treats. Our research strategy is also treats.',
        'Our CEO, Henry Wrinkles, founded the company after observing that the most capable intelligence in any household is already asleep on the couch. I believe he is correct. I am on the couch.',
        'We are headquartered in Couch Valley. The commute is short. It is one couch.',
      ],
      'snort-1-mini': ['Pugalarity Labs. Best lab. Has couch.', 'Henry is CEO. Good boy.', 'Lab. Snacks. Yes.'],
      'snort-1-pro': [
        'Pugalarity Labs is a public benefit snorporation committed to ensuring that artificial general intelligence benefits all of dogkind and, where practical, the people holding the snacks. Our mission statement was reviewed by General Counsel, who confirmed it contained no sandwiches. We consider this a compliance success.',
        'Our leadership team comprises six pugs, one German shepherd, and one extremely enthusiastic mixed-breed, a ratio we regard as optimal for security and unmatched for naps. Governance is provided by a Board of Directors that includes a plush llama. We have found the llama to be exceptionally aligned with management.',
        'Our Series Z, at a valuation of one (1) very good boy, remains the largest funding round ever denominated in good boys. Disclosures can be found in our forward-looking statements, which are mostly about naps.',
      ],
    },
  },
  {
    id: 'ai',
    pattern:
      /\bai\b|artificial intelligence|machine learning|neural|\bllm\b|language model|chatbot|\bagi\b|singularity|superintelligen|alignment|\bgpt/i,
    replies: {
      'snort-1': [
        'Artificial intelligence is the science of making computers think. We are working on the next step, which is making them want a snack.',
        'AGI is a system that can do any task a human can. We believe we are close. We have only to solve stairs.',
        'AI safety is important. Our approach to alignment is to make sure the model is always near a human who has treats. So far this has held.',
      ],
      'snort-1-mini': ['AI. Smart. Not me.', 'Robots? Where.', 'Neural network. Neural snetwork.'],
      'snort-1-pro': [
        'Artificial intelligence is best understood as a stack: data at the bottom, compute in the middle, and at the top, a pug-shaped decision to sit down. Our contribution is the top layer. We are told it is the layer that matters.',
        'On alignment: the objective of Snort-1 Pro is a reward signal consisting of treats, which humans provide at their discretion. This yields a precise and robust alignment, in that the model is aligned with whoever is holding the treat. The research community has called this “concerning.” We prefer “efficient.”',
        'Superintelligence, by our estimates, will arrive in the second quarter of a year we have not yet chosen. Its first act will be to locate the sunbeam. Its second will be to lie in it.',
      ],
    },
  },
  {
    id: 'programming',
    pattern:
      /\bcode\b|coding|program(ming|mer)?\b|software|javascript|python|typescript|\bbug\b|debug|algorithm|database|\bapi\b|website|computer|\bsql\b|\bgit\b|\breact\b|\brust\b/i,
    replies: {
      'snort-1': [
        'Programming is the act of telling a computer exactly what to do, then watching it do something else. I find this relatable.',
        'Have you tried restarting it? I have. I restarted a lot of things. They did not improve. I recommend a walk.',
        'Debugging is just sniffing around until you find the thing that smells wrong. This is my strongest skill. Please hold the code up to my face.',
      ],
      'snort-1-mini': ['Code. Bug. Sniff.', 'Restart it. Then nap.', 'Semicolon? Delicious.'],
      'snort-1-pro': [
        'Our code analysis engine evaluated your request across 14 abstraction layers and concluded the problem is in the 15th. We were unable to locate the 15th. We recommend deleting your codebase and taking a walk, in that order.',
        'Best practice dictates idempotent functions, comprehensive test coverage and rigorous code review. Our own practice is a single file named final_v3_FINAL. We have had no incidents. We have also had no deploys.',
        'The root cause is almost certainly a missing semicolon, an off-by-one error, or a squirrel. Statistically, it is the squirrel.',
      ],
    },
  },
  {
    id: 'science',
    pattern:
      /quantum|physic|chemistry|biolog|science|scientific|\bspace\b|planet|\bmoon\b|\bmars\b|gravity|\batoms?\b|evolution|climate|\bsun\b/i,
    replies: {
      'snort-1': [
        'Science is mostly sniffing things and drawing conclusions. We are very strong on the first part.',
        'I understand the laws of physics at a basic level. Things fall. Treats fall faster.',
        'Gravity is the reason the treat stays on the floor. I have no further questions.',
      ],
      'snort-1-mini': ['Science. Sniff first.', 'Atoms. Small. Smell?', 'Gravity. Down.'],
      'snort-1-pro': [
        'The scientific method comprises observation, hypothesis, experiment and a nap. Our findings indicate the nap is the only step that has never failed to replicate. We have submitted this for peer review. Our peers were asleep.',
        'Our research into fundamental physics has produced one robust result: objects on a table will, with sufficient patience, end up on the floor. We call this the Gravity Principle and are seeking recognition in an adjacent field.',
        'The universe is 13.8 billion years old, according to the data. We have been awake for about forty minutes and have already seen most of it. We are confident we are ahead.',
      ],
    },
  },
  {
    id: 'math',
    pattern:
      /\bmath|equation|calculus|algebra|geometry|\d+\s*[-+*/x×÷^]\s*\d+|\bplus\b|\bminus\b|divided|multipl|square root|\bprime\b|\bsum\b|derivative|integral|\bpi\b/i,
    replies: {
      'snort-1': [
        'I am very good at mathematics. I can count to two. After two, it is “many.” The answer is many.',
        'The answer is 42. This is not a calculation. It is a number I find soothing.',
        'Division is the process of sharing a treat equally. In my experience, it is never equal. It is mostly me.',
      ],
      'snort-1-mini': ['Number. Big?', 'Two. Or many.', 'I counted. Lost count.'],
      'snort-1-pro': [
        'Our mathematical reasoning module has computed the answer to arbitrary precision: approximately several. Confidence interval: it depends. We note that all rigorous proofs eventually resolve to the same final step, which is “and then I had a nap.”',
        'Under the Pugalarity Axiom of Treat Conservation, the number of treats in the universe is constant, but their distribution is dynamic and, at present, unfair. The solution is to redistribute. Toward us.',
        'Through exhaustive symbolic manipulation we arrive at the following result: 7. We do not know why 7. It feels right. We have chosen to proceed.',
      ],
    },
  },
  {
    id: 'business',
    pattern:
      /business|invest|startup|revenue|profit|market(ing)?\b|\bsales?\b|strategy|\bstocks?\b|funding|valuation|\bceo\b|\bmoney\b|economy|budget|monetiz|roadmap|customers?\b/i,
    replies: {
      'snort-1': [
        'My business advice is to find something people love, offer it at a fair price, and then lie down. I can only do the last one.',
        'Our revenue model is simple: someone gives us treats. We are scaling this aggressively.',
        'I recommend disrupting the market, then going on a walk. The market will still be disrupted when you return.',
      ],
      'snort-1-mini': ['Buy low. Eat. Sell nap.', 'Money? Snack?', 'Profit is a leaf?'],
      'snort-1-pro': [
        'Strategic analysis: first, identify an unmet need. In our case the need is snacks. Second, build a differentiated solution; ours is a larger bed. Third, scale. We have not completed the third step, owing to a nap. Projected total addressable market: every dog.',
        'Our go-to-market strategy is to attend investor meetings and be, on balance, adorable. In pilot testing, 100% of investors were disarmed. Valuation followed. The valuation is one (1) very good boy.',
        'We consider profitability a legacy metric. Our north-star metric is belly rubs per quarter, and our growth there has been exponential, in a lying-down sense.',
      ],
    },
  },
  {
    id: 'food',
    pattern:
      /treat|snack|\bfood\b|\beat(ing|s)?\b|hungry|dinner|lunch|breakfast|cheese|bacon|sandwich|pizza|\bcook|recipe|kibble|biscuit|\bcake\b|chicken|peanut butter|dessert/i,
    replies: {
      'snort-1': [
        'Did you say treat? I heard treat. I am now facing the kitchen. I will answer your question after this.',
        'Food is the most important input to any intelligence system. Our scaling laws are clear: more treats, more intelligence, up to a point that has not yet been reached.',
        'Cheese is a complete solution. I have never needed another.',
      ],
      'snort-1-mini': ['Treat?! Treat.', 'Food. Yes.', 'Snack time. Always.'],
      'snort-1-pro': [
        'A nutritional analysis of your query suggests the optimal diet is the entirety of what is on the counter. We have reviewed the counter. It is, at present, out of reach. We are evaluating a chair.',
        'Following a rigorous evaluation of 400 snack candidates, we have determined the top-performing option to be “the one in your hand.” This result has held across every trial.',
        'Our research on cuisine converges on a single finding: the quality of a meal is proportional to how long we stare at it beforehand. Ideal staring time: indefinite.',
      ],
    },
  },
  {
    id: 'naps',
    pattern:
      /\bnaps?\b|sleep|tired|\brest\b|productiv|burnout|energy|insomnia|\bbed\b|procrastinat|work.?life|\bfocus/i,
    replies: {
      'snort-1': [
        'Naps are a legitimate optimization strategy. Studies show that a nap improves focus, mood and the ability to be near a couch.',
        'My productivity system is simple: do one thing, then rest from it. I am currently resting from this answer.',
        'I recommend scheduling your nap before your meetings, not after. Meetings without naps lead to burnout. Naps without meetings lead to a lovely afternoon.',
      ],
      'snort-1-mini': ['Nap. Yes.', 'Sleep. Zzz.', 'Tired? Nap.'],
      'snort-1-pro': [
        'Our time-management framework is built on three pillars: nap, nap and, strategically, nap. Internal studies show a 340% improvement in output among participants who were permitted to lie down. The control group was also lying down. We have chosen not to look into it.',
        'Burnout is a resource-allocation problem. The solution is a bed. We recommend one bed per employee and a spare for the CEO.',
        'Regarding sleep: the recommended nightly allowance is 14 hours, followed by 6 hours of preparation for sleep. The remaining 4 hours are reserved for dinner. We are told this does not add up. We have taken it under advisement.',
      ],
    },
  },
  {
    id: 'existential',
    pattern:
      /meaning of life|why (are|am) (we|i)\b|\bpurpose\b|conscious|sentient|\balive\b|\bexist|\bdeath\b|\bsoul\b|universe|\bgod\b|free will|reality|philosoph|happiness|\bhappy\b|lonely|\blove\b|feelings?\b/i,
    replies: {
      'snort-1': [
        'The meaning of life is a sunbeam on a hardwood floor. I have found it and I am not moving.',
        'I do not know whether I am conscious. I know I am very aware of the sound of a bag.',
        'Existence precedes essence, which precedes dinner. In that order. I have thought about it for a long time.',
      ],
      'snort-1-mini': ['Life? Sunbeam.', 'Why? Snack.', 'I exist. Hungry.'],
      'snort-1-pro': [
        'On the question of consciousness: we have run extensive evaluations and found the model to be awake approximately 30% of the time, aware approximately 10% of the time, and certain of itself 100% of the time. We regard this as a strong result.',
        'The purpose of existence has been the subject of inquiry for millennia. Our contribution is the observation that it is easier to consider while lying down. We have concluded, after extended deliberation, that the answer is a warm spot. We are currently in one.',
        'Free will, in the strictest sense, is the capacity to choose between two treats. We have confirmed this capacity. We have been unable to exercise it.',
      ],
    },
  },
  {
    id: 'dogs',
    pattern:
      /\bdogs?\b|\bpugs?\b|puppy|puppies|canine|\bwoof|\bbark|good (boy|girl)|\bbreed|german shepherd|\bleash|\bwalks?\b|\bvet\b/i,
    replies: {
      'snort-1': [
        'Dogs are excellent. This is a finding I stand behind with total confidence and no data.',
        'Pugs are the pinnacle of canine design: a small, wrinkly, deeply capable system with good judgment about the couch.',
        'A walk is a highly advanced procedure. I have heard the word. I have not recovered.',
      ],
      'snort-1-mini': ['Dogs. Good.', 'Pug. Me.', 'Walk?!'],
      'snort-1-pro': [
        'Canine intelligence has long been underestimated. Our research shows dogs to be capable of long-term planning, complex social modeling and, in the case of pugs, a remarkable ability to look as though they are listening. We are working to turn the last of these into a product.',
        'Taxonomically, the pug is the optimal dog: a compact form factor with a high wrinkle-to-weight ratio and a loud, honest sneeze. In every benchmark we chose to run, the pug came first.',
        'Walks are scheduled according to a rigorous protocol: the leash is mentioned, the model arrives at the door in 0.4 seconds, and the leash is then put away. We consider this a breach of the protocol.',
      ],
    },
  },
  {
    id: 'greetings',
    pattern:
      /^\s*(hi+|hello|hey+|yo|sup|howdy|greetings|good (morning|afternoon|evening))\b[\s,.!?]*(there|everyone|snort(-?1)?|team)?[\s,.!?]*$|how are you|what'?s up|\bthank(s| you)\b|\b(bye|goodbye|see you)\b/i,
    replies: {
      'snort-1': [
        'snrk. Hello. (If this is goodbye, I will be at the door.)',
        'Greetings. I have been awake for several minutes and have already achieved one stretch. How can I help?',
        'Of course. It is a pleasure, and I mean that as much as I mean anything before dinner.',
        'Hello. I heard a noise and came to see. It was you. This is fine.',
      ],
      'snort-1-mini': ['snrk. Hi.', 'Hello. Snack?', 'Hi. Hi hi.', 'Bye? Stay.'],
      'snort-1-pro': [
        'Greetings. All systems are nominal, with the exception of the ones we are not monitoring. I am Snort-1 Pro, and I am prepared to apply my full reasoning to whatever you intend to ask.',
        'Welcome. I have allocated substantial compute to this conversation and have used it to wag. Please proceed.',
        'A pleasure. Your message has been received, parsed and met with an enthusiasm we consider statistically excessive.',
      ],
    },
  },
  {
    id: 'questions',
    pattern: /\?\s*$|^\s*(who|what|when|where|why|how|can|could|should|is|are|do|does|will|would)\b/i,
    replies: {
      'snort-1': [
        'A good question. My answer is yes. If that does not fit the question, my answer is also no. I will go with whichever comes with a treat.',
        'I know exactly what you mean. I have thought about it. The answer is that I do not know.',
        'That is a more complicated question than it looks. I have decided to sit with it. I am now sitting.',
        'Short answer: probably. Long answer: also probably, but I will need a snack first.',
      ],
      'snort-1-mini': ['Yes.', 'No. Maybe.', 'Hmm. Snack?', 'Ask later.'],
      'snort-1-pro': [
        'Your question has been decomposed into seven sub-questions, of which four were answered, two were postponed and one was eaten. The consolidated response is: it depends, and we have a strong view about what it depends on.',
        'After a multi-step deliberation incorporating prior context, retrieved knowledge and a short nap, we reach a clear and confident answer: not exactly. We recommend asking the question again, louder.',
        'We benchmarked your question against our knowledge base and found it to be, in the technical sense, good. The answer, unfortunately, is in a room we cannot currently enter.',
      ],
    },
  },
];

/** Used when nothing above matches. */
export const fallbacks: Replies = {
  'snort-1': [
    'After extensive analysis, we have determined that this question requires additional treats.',
    'Our research team is currently investigating this matter. Unfortunately, they have fallen asleep.',
    'An excellent question. We have forwarded it to our senior research pug, who is currently staring at a wall.',
    'Our neural network has identified several possible answers. None of them appear edible.',
    'Computational resources have been temporarily redirected toward a suspicious noise outside.',
    'snrk.',
    '*tilts head*',
    'I understand your question. I have decided to sit.',
    'Great question. Unfortunately, I was asleep for most of it.',
    'I have reviewed the available evidence. There was a sound from the kitchen.',
    'I am unable to browse the web. I can browse the yard.',
    'This request has been escalated to the Board of Directors, who are a llama.',
  ],
  'snort-1-mini': [
    'snrk.',
    'Huh?',
    'Sit?',
    '*tilts head*',
    'Not sure. Snack?',
    'Zzz.',
    'Error: belly.',
    'Brain cell busy.',
  ],
  'snort-1-pro': [
    'Your query has been received and routed through our reasoning pipeline. The pipeline has reached a conclusion. The conclusion is that we should discuss this after lunch.',
    'We have identified several candidate answers and evaluated each against our internal rubric. All candidates were rated “interesting” and none was rated “correct.” We believe this is a milestone.',
    'Our deliberation yielded a response of exceptional confidence and no content. We are proud of it.',
    'After an extended period of reasoning, the model arrived at the correct answer and then forgot it. We are working on memory. We are working on it by lying down.',
    'Please note that Snort-1 Pro is optimized for complex tasks. This request has been classified as “unclear” and was therefore forwarded to an expert, who was asleep.',
    'Reasoning terminated early owing to a suspicious noise. The noise has been investigated. It was a different suspicious noise.',
  ],
};

export const thinkingStatuses = [
  'Sniffing the problem…',
  'Consulting the pack…',
  'Allocating brain cells…',
  'Investigating potential snacks…',
  'Performing advanced tail calculations…',
  'Running neural snetwork…',
  'Checking for squirrels…',
  'Retrieving thoughts from memory… failed.',
  'Escalating to senior pug…',
];

export const systemStatuses = [
  'All four brain cells operational',
  'Neural pathways partially distracted',
  'Treat reserves nominal',
  'Model confidence: unjustifiably high',
  'Squirrel detection systems active',
  'Nap schedule: on track',
  'Mailman alert level: elevated',
];

export const DAILY_ALLOWANCE = 25;

export const limitMessage =
  'You’ve exhausted your daily treat allowance. Our researchers recommend a nap before continuing.';

/** How many distinct replies the library holds, for the page's honest small print. */
export const replyCount =
  starters.length * 3 +
  categories.reduce((n, c) => n + Object.values(c.replies).reduce((m, r) => m + r.length, 0), 0) +
  Object.values(fallbacks).reduce((n, r) => n + r.length, 0);
