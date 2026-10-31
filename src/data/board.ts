import llama from '../assets/board/plush-llama.jpg';
import bulldog from '../assets/board/bulldog.jpg';
import pelican from '../assets/board/pelican.jpg';
import sphynx from '../assets/board/sphynx.jpg';
import sloth from '../assets/board/sloth.jpg';
import squirrel from '../assets/board/squirrel.jpg';
import basset from '../assets/board/basset.jpg';

// Invented directors. `alt` describes the portrait for screen readers.
export interface BoardMember {
  name: string;
  title: string;
  bio: string;
  photo: ImageMetadata;
  alt: string;
  /** Small label shown on the card, for members who need one. */
  badge?: string;
}

export const board: BoardMember[] = [
  {
    name: 'Lord Fluffington',
    title: 'Chair of the Board',
    bio: 'A plush llama and the favorite toy of Chief Executive Pug Henry Wrinkles, who has brought him to every board meeting since the company was founded. Has never voted against management and has never been observed to move.',
    photo: llama,
    alt: 'Lord Fluffington, Chair of the Board, a plush llama toy with shaggy cream fabric fur, black bead eyes and a stitched smile, wearing a navy blazer and a burgundy bow tie.',
    badge: 'Plush · The CEO’s favorite toy',
  },
  {
    name: 'Sir Humphrey Jowls',
    title: 'Director, Chair of the Audit Committee',
    bio: 'Reviewed the Series Z valuation of one (1) very good boy and found it reasonable. Has not been observed to blink during a review.',
    photo: bulldog,
    alt: 'Sir Humphrey Jowls, Director, a bulldog in a navy pinstripe suit and dark tie, chin raised, two lower teeth showing.',
  },
  {
    name: 'Dame Pelagia Billsworth',
    title: 'Director, Chair of the Finance Committee',
    bio: 'Oversees capital allocation, including the 10% earmarked for a larger bed. Presents the quarterly bill in person.',
    photo: pelican,
    alt: 'Dame Pelagia Billsworth, Director, a pelican with a very long bill, in a navy jacket and a burgundy velvet bow tie, in profile.',
  },
  {
    name: 'Lady Truffle Pearlington',
    title: 'Independent Director, Compensation Committee',
    bio: 'Approves all compensation, which is paid in kibble. Has never approved a raise and has never been asked twice.',
    photo: sphynx,
    alt: 'Lady Truffle Pearlington, Independent Director, a hairless sphynx cat with large ears and a stern sideways glare, wearing a pearl necklace and a black coat with a high collar.',
  },
  {
    name: 'Professor Sylvester Slowe',
    title: 'Independent Director, Chair of Long-Term Planning',
    bio: 'Joined the Board several fiscal years ago and is expected to complete his first agenda item next quarter. The committee he chairs has a generous planning horizon.',
    photo: sloth,
    alt: 'Professor Sylvester Slowe, Independent Director, a sloth with a gentle smile and round tortoiseshell glasses, head tilted, in a mustard cardigan over a striped shirt.',
  },
  {
    name: 'Chester Hazelnutt',
    title: 'Independent Director, Squirrel Affairs',
    bio: 'Joined the Board following publication of the company’s squirrel metrics and has declined to comment. Cheeks are reported to be full.',
    photo: squirrel,
    alt: 'Chester Hazelnutt, Independent Director, a squirrel with wide dark eyes and very full cheeks, in a gray blazer and a lanyard with a blank badge.',
  },
  {
    name: 'Professor Barnaby Droop',
    title: 'Director, Chair of the Risk Committee',
    bio: 'Has reviewed every risk the company faces and found each of them to be about what he expected.',
    photo: basset,
    alt: 'Professor Barnaby Droop, Director, a basset hound with very long ears and a weary, upward glance, wearing rectangular gold glasses low on the nose and a gray knit cardigan.',
  },
];
