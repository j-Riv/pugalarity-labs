// Open roles. Every role is absurd; none is real.
export interface Role {
  title: string;
  team: string;
  location: string;
  summary: string;
  requirements: string[];
}

export const roles: Role[] = [
  {
    title: 'Senior Snack Alignment Engineer',
    team: 'Alignment',
    location: 'On-site (kitchen)',
    summary:
      'Own the pipeline that connects model objectives to snack delivery. You will define what “a snack” means at scale and ensure it arrives on schedule.',
    requirements: ['5+ years working near snacks', 'Strong opinions about portion size', 'Comfortable with ambiguity, and with crumbs'],
  },
  {
    title: 'Staff Belly-Rub Researcher',
    team: 'Research',
    location: 'Hybrid (lap)',
    summary:
      'Advance the frontier of belly-rub science. You will design experiments, run ablations on pressure and tempo, and publish results.',
    requirements: ['PhD or equivalent time on a sofa', 'Publication record in tactile affection', 'Gentle hands'],
  },
  {
    title: 'Prompt Engineer',
    team: 'Applied',
    location: 'Remote (couch)',
    summary:
      'Craft inputs that reliably elicit useful behavior from Snort-1. Must be able to say “walk” convincingly, and also to not say it.',
    requirements: ['Excellent command of the word “treat”', 'Ability to spell W-A-L-K under pressure', 'Calm demeanor around leashes'],
  },
  {
    title: 'Head of Sofa Infrastructure',
    team: 'Infrastructure',
    location: 'Remote (couch)',
    summary:
      'Lead reliability for our 11,000-couch training cluster. You will own capacity planning, cushion lifecycle management, and the sunbeam roadmap.',
    requirements: ['Experience operating upholstery at scale', '99.99% uptime mindset', 'On-call rotation (it is mostly naps)'],
  },
  {
    title: 'Red Team: Mailman Specialist',
    team: 'Safety',
    location: 'On-site (front window)',
    summary:
      'Probe our systems’ response to the daily mailman incident. Document the failure modes, escalate vocalizations, and recommend mitigations.',
    requirements: ['Proven track record of window-based vigilance', 'Loud, reproducible outputs', 'Fearless disposition'],
  },
  {
    title: 'Founding Squirrel Detection Lead',
    team: 'Applied',
    location: 'On-site (backyard)',
    summary:
      'Build our squirrel detection program from zero. Our current squirrels-caught metric is 0 by design, and we need someone to define what that means.',
    requirements: ['Deep experience with fences', 'Ability to stare at a tree for hours', 'Optimistic about eventual success'],
  },
];

export const benefits = [
  ['Unlimited naps', 'No approval required. Naps are tracked for uptime reporting only.'],
  ['Equity in kibble', 'Vests over four years with a one-year cliff. The cliff is supervised.'],
  ['Four-day work week', 'Applies to dogs. Humans remain on call.'],
  ['Relocation to any sunbeam', 'We will move you to wherever the light is best.'],
  ['Puppy leave', 'Generous, and non-negotiable.'],
];
