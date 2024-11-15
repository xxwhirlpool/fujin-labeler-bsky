import { Label } from './types.js';

export const DELETE = 'insert-rkey-of-delete-post-here';
export const LABEL_LIMIT = 1;
export const LABELS: Label[] = [
  {
    rkey: 'insert-rkey-here',
    identifier: 'slug',
    post: "🪱 Slug: A×B and only A×B (has a fixed OTP: a favorite ship, with no switching and no multishipping)",
    locales: [
      { lang: 'en', name: '🪱 Slug', description: 'A×B and only A×B'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'snake',
    post: "🐍 Snake: anyone × B (has a fixed uke: multiships, but their favorite can only bottom)",
    locales: [
      { lang: 'en', name: '🐍 Snake', description: 'Anyone × B'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'frog',
    post: "🐸 Frog: A×B & B×A but no A×C (has a reversible OTP: no multishipping, but can accept switching in their favorite ship)",
    locales: [
      { lang: 'en', name: '🐸 Frog', description: 'A×B & B×A but no A×C'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'gecko',
    post: "🦎 Gecko: A × anyone (\"seme freak\" who only wants their favorite to top)",
    locales: [
      { lang: 'en', name: '🦎 Gecko', description: 'A × anyone'},
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'snail',
    post: "🐌 Snail: anything × B (uses a mob character as seme for their favorite uke, either because there are no options in canon or because they only care about the one character; tentacles are also an option)",
    locales: [
      { lang: 'en', name: '🐌 Snail', description: 'anything × B'}
    ]
  },
  {
    rkey: 'insert-rkey-here',
    identifier: 'turtle',
    post: "🐢 Turtle: omnivore, will try anything (can accept any ship in any order)",
    locales: [
      { lang: 'en', name: '🐢 Turtle', description: 'anyone x anyone'}
    ]
  },
];
