import type { Investor } from '../components/InvestorLogo.astro';

// Invented firms. `firm` selects the wordmark drawn by InvestorLogo.
export const investors: { firm: Investor; name: string }[] = [
  { firm: 'kibble', name: 'Kibble Capital' },
  { firm: 'lapdog', name: 'Lapdog Ventures' },
  { firm: 'sunbeam', name: 'Sunbeam Sovereign Fund' },
  { firm: 'squeak', name: 'Squeak & Partners' },
  { firm: 'brunch', name: 'Late Brunch Partners' },
];
