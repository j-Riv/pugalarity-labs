import ceo from '../assets/team/chief-executive-pug.jpg';
import scientist from '../assets/team/chief-scientist.jpg';
import nap from '../assets/team/chief-nap-officer.jpg';
import alignment from '../assets/team/vp-alignment.jpg';
import compute from '../assets/team/head-of-compute.jpg';
import counsel from '../assets/team/general-counsel.jpg';
import security from '../assets/team/cyber-security.jpg';

// Invented executives. `alt` describes the portrait for screen readers.
export interface Executive {
  name: string;
  title: string;
  bio: string;
  photo: ImageMetadata;
  alt: string;
}

export const executives: Executive[] = [
  {
    name: 'Henry Wrinkles',
    title: 'Chief Executive Pug',
    bio: 'Founded Pugalarity Labs after observing that the most capable intelligence in any household is already asleep on the couch. Previously led a series of long, productive stares.',
    photo: ceo,
    alt: 'Henry Wrinkles, Chief Executive Pug, a pug in round wire glasses and a black turtleneck, looking slightly off camera.',
  },
  {
    name: 'Dr. John Snortsworth',
    title: 'Chief Scientist',
    bio: 'Holds a PhD (Pretty Huge Dog) in scaling laws. Authored the foundational result that more treats produce more intelligence, up to a point that has not yet been reached.',
    photo: scientist,
    alt: 'Dr. John Snortsworth, Chief Scientist, a pug in round gold glasses and a white lab coat over a blue shirt, head tilted.',
  },
  {
    name: 'Liam Napworth',
    title: 'Chief Nap Officer',
    bio: 'Responsible for organization-wide rest, recovery, and uptime. Liam’s decisions are reviewed asynchronously, usually the following afternoon.',
    photo: nap,
    alt: 'Liam Napworth, Chief Nap Officer, a pug with eyes closed and tongue slightly out, a gray sleep mask pushed up on the forehead, wearing a cream cardigan over a blue shirt.',
  },
  {
    name: 'Walter Wafflebrook',
    title: 'VP, Alignment',
    bio: 'Leads the team that keeps model objectives and snack availability in agreement. Walter has never once been misaligned about dinner.',
    photo: alignment,
    alt: 'Walter Wafflebrook, VP Alignment, a pug in round glasses and a navy blazer, mouth open in a wide smile, wearing a lanyard with a blank badge.',
  },
  {
    name: 'Lucas Pancroft',
    title: 'Head of Compute',
    bio: 'Oversees our 11,000-couch training cluster, and has personally sat on most of it. Lucas’s uptime record is unmatched in the industry.',
    photo: compute,
    alt: 'Lucas Pancroft, Head of Compute, a black pug in a black hoodie wearing a headset with a microphone, chin raised.',
  },
  {
    name: 'Nero Kernel',
    title: 'Head of Cybersecurity',
    bio: 'Leads a security organization of one. Monitors every door, window, and doorbell around the clock, and has treated the mailman as a persistent threat since before the company was founded.',
    photo: security,
    alt: 'Nero Kernel, Head of Cybersecurity, a German shepherd with upright ears in a black hoodie, over-ear headphones around the neck and a security key on a lanyard, looking to the right.',
  },
  {
    name: 'Marcus Meatley',
    title: 'General Counsel',
    bio: 'Reviews every contract, policy, and sandwich. Marcus has never lost a negotiation involving a sandwich.',
    photo: counsel,
    alt: 'Marcus Meatley, General Counsel, a pug in a gray pinstripe suit with a burgundy tie and pocket square, a small crumb near the mouth.',
  },
];
