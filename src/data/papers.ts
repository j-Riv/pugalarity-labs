// Invented research papers. IDs are made up and link nowhere.
export interface Paper {
  id: string;
  title: string;
  authors: string;
  date: string;
  isoDate: string;
  abstract: string;
  tags: string[];
}

export const papers: Paper[] = [
  {
    id: 'pugXiv:2610.00417',
    title: 'Snacks Are All You Need',
    authors: 'B. Snortsworth, R. Wrinkles, Waffles',
    date: 'October 2026',
    isoDate: '2026-10',
    abstract:
      'We show that a single, well-timed snack suffices to elicit the full range of behaviors previously attributed to complex, multi-stage training. We discuss implications for scaling, and for dinner.',
    tags: ['Scaling', 'Foundations'],
  },
  {
    id: 'pugXiv:2609.00288',
    title: 'Chain-of-Sniff Prompting Elicits Reasoning in Large Pug Models',
    authors: 'B. Snortsworth, Pancake',
    date: 'September 2026',
    isoDate: '2026-09',
    abstract:
      'We introduce Chain-of-Sniff, a prompting method in which the model investigates each intermediate step before proceeding. Performance improves on multi-step tasks, at a cost of roughly four minutes per lamp post.',
    tags: ['Reasoning', 'Prompting'],
  },
  {
    id: 'pugXiv:2608.00153',
    title: 'Sparse Autoencoders Reveal the Belly-Rub Feature',
    authors: 'Waffles, B. Snortsworth',
    date: 'August 2026',
    isoDate: '2026-08',
    abstract:
      'Using sparse dictionary learning, we identify a monosemantic feature that activates on belly-rub contexts. Ablating the feature reduces rolling over by 94% and increases looking at us in a disappointed way by 100%.',
    tags: ['Interpretability'],
  },
  {
    id: 'pugXiv:2606.00091',
    title: 'On the Emergence of Sitting in Scaled Systems',
    authors: 'B. Snortsworth, Noodle',
    date: 'June 2026',
    isoDate: '2026-06',
    abstract:
      'We observe that sitting emerges abruptly at approximately 40 training treats and persists across model scales. The behavior is not explicitly trained for and is not reliably controllable, which we consider a promising direction.',
    tags: ['Scaling', 'Emergence'],
  },
  {
    id: 'pugXiv:2604.00036',
    title: 'Constitutional Napping: Alignment Through Scheduled Rest',
    authors: 'Noodle, Waffles, Meatball',
    date: 'April 2026',
    isoDate: '2026-04',
    abstract:
      'We propose a training procedure in which models are given a written constitution and a mandatory afternoon nap. Models trained this way refuse a greater share of harmful requests, primarily by being asleep.',
    tags: ['Alignment', 'Safety'],
  },
];
