import type { Accessory, Coat, Expression } from '../components/Pug.astro';

// Invented executives. `alt` describes the portrait for screen readers.
export interface Executive {
  name: string;
  title: string;
  bio: string;
  coat: Coat;
  expression: Expression;
  accessories: Accessory[];
  alt: string;
}

export const executives: Executive[] = [
  {
    name: 'Sir Reginald Wrinkles',
    title: 'Chief Executive Pug',
    bio: 'Founded Pugalarity Labs after observing that the most capable intelligence in any household is already asleep on the couch. Previously led a series of long, productive stares.',
    coat: 'fawn',
    expression: 'smile',
    accessories: ['tie', 'crown'],
    alt: 'Portrait of Sir Reginald Wrinkles, a smiling fawn pug in a navy suit, orange tie, and gold crown.',
  },
  {
    name: 'Dr. Biscuit Snortsworth',
    title: 'Chief Scientist',
    bio: 'Holds a PhD (Pretty Huge Dog) in scaling laws. Authored the foundational result that more treats produce more intelligence, up to a point that has not yet been reached.',
    coat: 'black',
    expression: 'neutral',
    accessories: ['glasses', 'cap'],
    alt: 'Portrait of Dr. Biscuit Snortsworth, a black pug wearing round glasses and a graduation cap.',
  },
  {
    name: 'Noodle',
    title: 'Chief Nap Officer',
    bio: 'Responsible for organization-wide rest, recovery, and uptime. Noodle’s decisions are reviewed asynchronously, usually the following afternoon.',
    coat: 'silver',
    expression: 'sleepy',
    accessories: [],
    alt: 'Portrait of Noodle, a silver pug with eyes closed.',
  },
  {
    name: 'Waffles',
    title: 'VP, Alignment',
    bio: 'Leads the team that keeps model objectives and snack availability in agreement. Waffles has never once been misaligned about dinner.',
    coat: 'fawn',
    expression: 'neutral',
    accessories: ['glasses', 'tie'],
    alt: 'Portrait of Waffles, a fawn pug in a navy suit and tie, wearing round glasses.',
  },
  {
    name: 'Pancake',
    title: 'Head of Compute',
    bio: 'Oversees our 11,000-couch training cluster, and has personally sat on most of it. Pancake’s uptime record is unmatched in the industry.',
    coat: 'black',
    expression: 'smile',
    accessories: ['headset'],
    alt: 'Portrait of Pancake, a smiling black pug wearing a headset with a microphone.',
  },
  {
    name: 'Meatball',
    title: 'General Counsel',
    bio: 'Reviews every contract, policy, and sandwich. Meatball has never lost a negotiation involving a sandwich.',
    coat: 'silver',
    expression: 'neutral',
    accessories: ['tie'],
    alt: 'Portrait of Meatball, a silver pug in a navy suit and orange tie.',
  },
];
