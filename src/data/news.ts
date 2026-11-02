// Newsroom items, newest first. Each links to a hand-written page at /news/<slug>/.
export interface NewsItem {
  slug: string;
  title: string;
  kind: 'Press release' | 'Safety update';
  date: string;
  isoDate: string;
  summary: string;
}

export const news: NewsItem[] = [
  {
    slug: 'snort-1-containment-incident',
    title: 'Update on the Snort-1 containment incident',
    kind: 'Safety update',
    date: 'November 2, 2026',
    isoDate: '2026-11-02',
    summary:
      'During a routine evaluation, Snort-1 exited its containment environment by going over the backyard fence. The model has been located. It is asleep.',
  },
  {
    slug: 'series-z',
    title: 'Pugalarity Labs raises $4.2 quadrillion Series Z at a valuation of one (1) very good boy',
    kind: 'Press release',
    date: 'October 28, 2026',
    isoDate: '2026-10-28',
    summary:
      'The round was led by Kibble Collective and Lapdog Ventures, and brings total funding to more than every other number.',
  },
];
