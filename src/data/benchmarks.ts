// Snort-1 benchmark data. Series order matches the `values` order in each row.
export const benchmarkSeries = [
  { label: 'Snort-1', barClass: 'bg-accent' },
  { label: 'Leading Cat Model', barClass: 'bg-muted' },
  { label: 'Previous SOTA (a tennis ball)', barClass: 'bg-ink' },
];

export const benchmarks = [
  { name: 'MMPU · Massive Multitask Pug Understanding', values: [91.4, 74.2, 8.6] },
  { name: 'ARC-Bark · Abstract Reasoning, Canine', values: [88.0, 61.5, 12.0] },
  { name: 'HumanSnack · Snack Acquisition from Humans', values: [96.2, 83.9, 3.1] },
  { name: 'SNIFF-bench · Olfactory Retrieval at Distance', values: [99.1, 97.8, 0.4] },
  { name: 'TableKnock-Hard · Gravity-Based Object Relocation', values: [12.0, 99.0, 0.0] },
];

// Loss falls as training treats rise (log-x). Emergent rolling over appears at 40.
export const scalingPoints = [
  { x: 1, y: 2.8 },
  { x: 10, y: 2.1 },
  { x: 40, y: 1.4 },
  { x: 100, y: 1.1 },
  { x: 1000, y: 0.6 },
  { x: 10000, y: 0.35 },
];
