import kibble from '../assets/investors/kibble-collective.png';
import lapdog from '../assets/investors/lapdog-ventures.png';
import sunbeam from '../assets/investors/sunbeam-sovereign-fund.png';
import squeak from '../assets/investors/squeak-and-partners.png';
import brunch from '../assets/investors/late-brunch-partners.png';

// Invented firms. The name is rendered as live text next to the logo (see InvestorRow).
export const investors: { name: string; logo: ImageMetadata }[] = [
  { name: 'Kibble Collective', logo: kibble },
  { name: 'Lapdog Ventures', logo: lapdog },
  { name: 'Sunbeam Sovereign Fund', logo: sunbeam },
  { name: 'Squeak & Partners', logo: squeak },
  { name: 'Late Brunch Partners', logo: brunch },
];
