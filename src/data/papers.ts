// Invented research papers. IDs are made up. Each renders at /research/<slug>/.
export interface Section {
  heading: string;
  body: string[];
  /** Optional bullet list shown after the paragraphs. */
  list?: string[];
}

interface BarFigure {
  kind: 'bar';
  title: string;
  caption?: string;
  series: { label: string; barClass: string }[];
  groups: { name: string; values: number[] }[];
}

interface LineFigure {
  kind: 'line';
  title: string;
  desc: string;
  xLabel: string;
  yLabel: string;
  xTicks: number[];
  yTicks: number[];
  points: { x: number; y: number }[];
  annotation?: { x: number; text: string };
}

export type Figure = (BarFigure | LineFigure) & {
  /** The figure appears after the section at this index. */
  after: number;
};

export interface Paper {
  id: string;
  slug: string;
  title: string;
  authors: string;
  date: string;
  isoDate: string;
  abstract: string;
  tags: string[];
  sections: Section[];
  figure: Figure;
}

export const papers: Paper[] = [
  {
    id: 'pugXiv:2610.00417',
    slug: 'snacks-are-all-you-need',
    title: 'Snacks Are All You Need',
    authors: 'J. Snortsworth, H. Wrinkles, W. Wafflebrook',
    date: 'October 2026',
    isoDate: '2026-10',
    abstract:
      'We show that a single, well-timed snack suffices to elicit the full range of behaviors previously attributed to complex, multi-stage training. We discuss implications for scaling, and for dinner.',
    tags: ['Scaling', 'Foundations'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Modern pug training pipelines are elaborate. A typical curriculum spans four stages, nine specialists, and a clicker, and still fails when the dog notices that the person holding the clicker is also holding a phone. We ask whether the pipeline is necessary, or whether it is the snack doing the work.',
          'Prior work has treated the snack as a reward signal. We treat it as the whole signal.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'We introduce Single-Snack Training (SST). The model receives one snack, delivered inside a 0.4-second window that begins when the desired behavior is first approximated and ends when the model loses interest. No other supervision is provided. The curriculum baseline received the standard four-stage program over six weeks.',
        ],
        list: [
          'Delivery window: 0.4 seconds, measured by a witness who was also hungry.',
          'Snack: one (1), unbroken, of a size the model could identify from across the room.',
          'Evaluation: Sit, Stay, Paw, and Come, each requested once, in a quiet room, with the door closed.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'SST matched or exceeded the curriculum baseline on all four tasks. The largest gain was on Come, where the baseline lost most of its trials to a squirrel that was not part of the experimental design. SST was unaffected, because SST had already received the snack.',
          'We call the remaining gap the Dinner Bottleneck. In every condition, performance dropped sharply within an hour of the evening meal, regardless of training method. We were unable to remove the bottleneck, and we are not certain we want to.',
        ],
      },
      {
        heading: 'Limitations',
        body: [
          'The snack was eaten. This makes the experiment impossible to reproduce without a second snack, and a second snack is a different experiment. We encourage replication, and we encourage it to be funded in snacks.',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'A single, well-timed snack is sufficient to elicit the full range of behaviors we measured. We discuss implications for scaling, which are large, and for dinner, which is at six.',
        ],
      },
    ],
    figure: {
      kind: 'bar',
      after: 2,
      title: 'Task success by training method',
      caption: 'Higher is better. Percent of trials completed on the first request.',
      series: [
        { label: 'Four-stage curriculum', barClass: 'bg-muted' },
        { label: 'Single snack (SST)', barClass: 'bg-accent' },
      ],
      groups: [
        { name: 'Sit', values: [92, 95] },
        { name: 'Stay', values: [61, 66] },
        { name: 'Paw', values: [78, 84] },
        { name: 'Come', values: [43, 89] },
      ],
    },
  },
  {
    id: 'pugXiv:2609.00288',
    slug: 'chain-of-sniff',
    title: 'Chain-of-Sniff Prompting Elicits Reasoning in Large Pug Models',
    authors: 'J. Snortsworth, L. Pancroft',
    date: 'September 2026',
    isoDate: '2026-09',
    abstract:
      'We introduce Chain-of-Sniff, a prompting method in which the model investigates each intermediate step before proceeding. Performance improves on multi-step tasks, at a cost of roughly four minutes per lamp post.',
    tags: ['Reasoning', 'Prompting'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Chain-of-thought prompting improves reasoning by asking a model to write out its steps. This assumes the model has a place to write. Pug models do not, but they do have a nose. We ask whether intermediate steps can be investigated instead of narrated.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'In Chain-of-Sniff (CoS), the model is prompted to investigate each intermediate step before proceeding to the next. A step is complete when the model has sniffed it to its satisfaction, which we define operationally as when it moves on.',
          'We evaluate on multi-step tasks of two to five steps, such as locating a dropped treat behind a sofa, behind a different sofa, and under a rug that has been moved.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'CoS improves accuracy on every multi-step task we tested, with the largest gains on tasks of four or more steps. Cost is roughly four minutes per lamp post, which we consider acceptable for a lamp post.',
        ],
      },
      {
        heading: 'Failure modes',
        body: [
          'We identified two failure modes. The first is the sniff loop, in which the model re-investigates a completed step indefinitely. The second is the hydrant attractor, in which the chain terminates at the nearest fire hydrant regardless of the task. Mitigations are discussed in Appendix A, which is a leash.',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'Reasoning in large pug models is elicited by investigation, not narration. We leave open whether the approach generalizes to models that are not interested in the lamp post.',
        ],
      },
    ],
    figure: {
      kind: 'bar',
      after: 2,
      title: 'Accuracy on multi-step tasks',
      caption: 'Higher is better. Percent of tasks completed correctly.',
      series: [
        { label: 'Standard prompting', barClass: 'bg-muted' },
        { label: 'Chain-of-Sniff', barClass: 'bg-accent' },
      ],
      groups: [
        { name: 'Two steps', values: [71, 78] },
        { name: 'Three steps', values: [48, 69] },
        { name: 'Four steps', values: [27, 62] },
        { name: 'Five steps', values: [9, 54] },
      ],
    },
  },
  {
    id: 'pugXiv:2608.00153',
    slug: 'belly-rub-feature',
    title: 'Sparse Autoencoders Reveal the Belly-Rub Feature',
    authors: 'W. Wafflebrook, J. Snortsworth',
    date: 'August 2026',
    isoDate: '2026-08',
    abstract:
      'Using sparse dictionary learning, we identify a monosemantic feature that activates on belly-rub contexts. Ablating the feature reduces rolling over by 94% and increases looking at us in a disappointed way by 100%.',
    tags: ['Interpretability'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Individual neurons in large models are polysemantic: a single unit may respond to unrelated inputs. Sparse autoencoders can separate these into cleaner features. We apply the method to Snort-1 and look for a feature that corresponds to the belly rub.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'We train a sparse autoencoder with a dictionary of 16,384 features on Snort-1 activations collected during 40 hours of ordinary sofa-based interaction. We label features by inspecting their strongest activating contexts. Most features were labeled “dinner.”',
        ],
      },
      {
        heading: 'Results',
        body: [
          'Feature 4471 activates sharply on belly-rub contexts and on very little else. Ablating it reduces rolling over by 94% and increases looking at us in a disappointed way by 100%. Clamping the feature to a high value produces rolling over in situations the model was not trained for, including a board meeting.',
          'We also report several other features of interest:',
        ],
        list: [
          'The doorbell feature, which fires before the doorbell has been rung.',
          'A polysemantic vacuum feature, which responds to fear and to rage.',
          'A feature we have been unable to label, which activates only when we are not looking at it.',
        ],
      },
      {
        heading: 'Limitations',
        body: [
          'Feature 4471 is monosemantic with respect to our dataset. We cannot rule out that it also responds to ear scratches, which were not sampled.',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'Belly rubs are represented in Snort-1 by a single, interpretable feature. The model appears to know exactly what it wants. We note that this was already suspected.',
        ],
      },
    ],
    figure: {
      kind: 'bar',
      after: 2,
      title: 'Behavior before and after ablating feature 4471',
      caption: 'Percent of trials in which the behavior occurred.',
      series: [
        { label: 'Baseline', barClass: 'bg-muted' },
        { label: 'Feature 4471 ablated', barClass: 'bg-accent' },
      ],
      groups: [
        { name: 'Rolling over', values: [88, 5.3] },
        { name: 'Looking at us in a disappointed way', values: [30, 60] },
      ],
    },
  },
  {
    id: 'pugXiv:2606.00091',
    slug: 'emergence-of-sitting',
    title: 'On the Emergence of Sitting in Scaled Systems',
    authors: 'J. Snortsworth, L. Napworth',
    date: 'June 2026',
    isoDate: '2026-06',
    abstract:
      'We observe that sitting emerges abruptly at approximately 40 training treats and persists across model scales. The behavior is not explicitly trained for and is not reliably controllable, which we consider a promising direction.',
    tags: ['Scaling', 'Emergence'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Some capabilities appear to emerge abruptly as models are scaled. We study one of the most consequential: sitting. We ask at what scale it appears, whether it persists, and whether anyone asked for it.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'We evaluate a family of models trained on between 1 and 1,000 training treats. Sitting is scored when the model’s hindquarters make contact with the floor and remain there for at least two seconds. Models were not explicitly trained to sit.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'Sitting emerges abruptly at approximately 40 training treats. Below that threshold, models stand, hover, or lean. Above it, sitting persists across every scale we tested. The transition is sharp: a model at 30 treats sat in 4% of trials, and a model at 50 treats sat in 86%.',
          'Sitting is not reliably controllable. Models sit when asked, when not asked, and, in one case, during a fire drill.',
        ],
      },
      {
        heading: 'Discussion',
        body: [
          'It has been argued that emergence is an artifact of the metric, and that a smoother score would show a smoother curve. We tried. The smoother score was “almost sitting,” and models at 30 treats did not receive it.',
          'We consider the lack of controllability a promising direction.',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'Sitting emerges at a predictable scale and then does not leave. We recommend that practitioners plan for it.',
        ],
      },
    ],
    figure: {
      kind: 'line',
      after: 2,
      title: 'Sitting rate as a function of training treats',
      desc: 'Line chart on a log scale. The percent of trials in which the model sits stays near 4% until 30 treats, jumps to 41% at 40 treats and 86% at 50 treats, then levels off near 94% at 1,000 treats.',
      xLabel: 'Training treats (log scale)',
      yLabel: 'Sit rate (%)',
      xTicks: [1, 10, 100, 1000],
      yTicks: [0, 25, 50, 75, 100],
      points: [
        { x: 1, y: 2 },
        { x: 10, y: 3 },
        { x: 30, y: 4 },
        { x: 40, y: 41 },
        { x: 50, y: 86 },
        { x: 100, y: 92 },
        { x: 1000, y: 94 },
      ],
      annotation: { x: 40, text: 'Sitting emerges' },
    },
  },
  {
    id: 'pugXiv:2604.00036',
    slug: 'constitutional-napping',
    title: 'Constitutional Napping: Alignment Through Scheduled Rest',
    authors: 'L. Napworth, W. Wafflebrook, M. Meatley',
    date: 'April 2026',
    isoDate: '2026-04',
    abstract:
      'We propose a training procedure in which models are given a written constitution and a mandatory afternoon nap. Models trained this way refuse a greater share of harmful requests, primarily by being asleep.',
    tags: ['Alignment', 'Safety'],
    sections: [
      {
        heading: 'Introduction',
        body: [
          'Constitutional training gives a model a written set of principles to follow. We extend the approach with a second ingredient: a mandatory afternoon nap. We ask whether rest improves alignment, and what, precisely, is aligned.',
        ],
      },
      {
        heading: 'Method',
        body: [
          'Models were given a short written constitution and a scheduled rest period. The constitution contained three principles, excerpted here:',
        ],
        list: [
          'Be helpful.',
          'Be harmless.',
          'Be asleep between 1 and 4 p.m.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'Models trained with Constitutional Napping refused a greater share of harmful requests than the baseline. We attribute most of the improvement to the models being asleep. Requests received during the rest period were not answered, whatever their content.',
          'We also report an alignment tax: the same models refused a larger share of harmless requests, for the same reason.',
        ],
      },
      {
        heading: 'Legal review',
        body: [
          'The constitution was reviewed by M. Meatley, who confirmed that it contained no sandwiches and approved the nap.',
        ],
      },
      {
        heading: 'Conclusion',
        body: [
          'Alignment through scheduled rest is simple, cheap, and effective on a schedule. We recommend that future work investigate shorter naps, and that it be done in the morning, when the models are awake.',
        ],
      },
    ],
    figure: {
      kind: 'bar',
      after: 2,
      title: 'Requests refused, by type',
      caption: 'Percent of requests refused. Higher is better for harmful, lower is better for harmless.',
      series: [
        { label: 'Baseline', barClass: 'bg-muted' },
        { label: 'Constitutional Napping', barClass: 'bg-accent' },
      ],
      groups: [
        { name: 'Harmful requests refused', values: [61, 93] },
        { name: 'Harmless requests refused', values: [4, 38] },
      ],
    },
  },
];
