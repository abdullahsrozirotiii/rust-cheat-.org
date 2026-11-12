import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const postsPath = path.join(root, 'src/data/blog/posts.ts');
const enPath = path.join(root, 'src/i18n/en.ts');
const incomingDir = path.join(root, '_incoming/rust-27/rust-27-images');
const blogDir = path.join(root, 'public/images/blog');
const widths = [320, 400, 512, 640, 960];

const postsSrc = fs.readFileSync(postsPath, 'utf8');
const slugMatches = [...postsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);
const incoming = fs.existsSync(incomingDir)
  ? fs.readdirSync(incomingDir).filter((f) => f.endsWith('.webp')).sort((a, b) => a.localeCompare(b))
  : [];

fs.mkdirSync(blogDir, { recursive: true });

function randomDate(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const start = new Date('2025-06-01').getTime();
  const end = new Date('2026-10-30').getTime();
  const t = start + (h % (end - start));
  const d = new Date(t);
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  return `${months[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

for (let i = 0; i < slugMatches.length; i++) {
  const slug = slugMatches[i];
  if (!incoming[i]) continue;
  const input = path.join(incomingDir, incoming[i]);
  for (const width of widths) {
    const output = path.join(blogDir, `${slug}-${width}.webp`);
    await sharp(input)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(output);
  }
  console.log(`Blog images: ${slug} <= ${incoming[i]}`);
}

let updatedPosts = postsSrc;
for (const slug of slugMatches) {
  const imageBase = `/images/blog/${slug}`;
  const date = randomDate(slug);
  updatedPosts = updatedPosts.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*)""`),
    `$1"${imageBase}"`,
  );
  updatedPosts = updatedPosts.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?date:\\s*)"[^"]+"`),
    `$1"${date}"`,
  );
}
fs.writeFileSync(postsPath, updatedPosts);

let en = fs.readFileSync(enPath, 'utf8');
for (const slug of slugMatches) {
  const imageBase = `/images/blog/${slug}`;
  const date = randomDate(slug);
  en = en.replace(
    new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?image:\\s*)''`),
    `$1'${imageBase}'`,
  );
  en = en.replace(
    new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?date:\\s*)'[^']+'`),
    `$1'${date}'`,
  );
}
fs.writeFileSync(enPath, en);

console.log(`Patched ${slugMatches.length} posts with images and random dates.`);
