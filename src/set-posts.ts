import { Bot } from '@skyware/bot';

import { BSKY_IDENTIFIER, BSKY_PASSWORD } from './config.js';
import { LABELS } from './constants.js';

const bot = new Bot();

try {
  await bot.login({
    identifier: BSKY_IDENTIFIER,
    password: BSKY_PASSWORD,
  });
} catch (error) {
  console.error('Error logging in: ', error);
  process.exit(1);
}

process.stdout.write('WARNING: This will delete all posts in your profile. Are you sure you want to continue? (y/n) ');

const answer = await new Promise((resolve) => {
  process.stdin.once('data', (data) => {
    resolve(data.toString().trim().toLowerCase());
  });
});

if (answer === 'y') {
  const postsToDelete = await bot.profile.getPosts();
  for (const post of postsToDelete.posts) {
    await post.delete();
  }
  console.log('All posts have been deleted.');
} else {
  console.log('Operation cancelled.');
  process.exit(0);
}

const post = await bot.post({
  text: 'Like the replies to this post to choose what kind of fujin you are!',
  threadgate: { allowLists: [] },
});

const labelNames = LABELS.map((label) => label.post);
const labelRkeys: Record<string, string> = {};
let replyToPost = post;
for (const labelName of labelNames) {
  const labelPost = await replyToPost.reply({ text: labelName });
  replyToPost = labelPost;
  labelRkeys[labelName] = labelPost.uri.split('/').pop()!;
}

console.log('Label rkeys:');
for (const [name, rkey] of Object.entries(labelRkeys)) {
  console.log(`    name: '${name}',`);
  console.log(`    rkey: '${rkey}',`);
}

const deletePost = await replyToPost.reply({ text: 'Like this post to delete all labels assigned to you.' });
const deletePostRkey = deletePost.uri.split('/').pop()!;
console.log('Delete post rkey:');
console.log(`export const DELETE = '${deletePostRkey}';`);

process.exit(0);
