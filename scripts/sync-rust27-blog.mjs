import fs from 'node:fs';
import path from 'node:path';
import { execSync } from 'node:child_process';
import sharp from 'sharp';

const root = process.cwd();
const zipPath = 'C:\\Users\\najee\\Downloads\\rust-27-images.zip';
const extractDir = path.join(root, '_incoming', 'rust-27-full');
const outDir = path.join(root, 'public', 'images', 'blog', 'rust-27');
const postsPath = path.join(root, 'src', 'data', 'blog', 'posts.ts');
const enPath = path.join(root, 'src', 'i18n', 'en.ts');
const manifestPath = path.join(root, 'src', 'data', 'blog', 'rust27Images.ts');
const widths = [320, 400, 512, 640, 960];

if (fs.existsSync(zipPath)) {
  fs.mkdirSync(path.dirname(extractDir), { recursive: true });
  if (fs.existsSync(extractDir)) fs.rmSync(extractDir, { recursive: true, force: true });
  execSync(
    `powershell -NoProfile -Command "Expand-Archive -Force -Path '${zipPath.replace(/'/g, "''")}' -DestinationPath '${extractDir.replace(/'/g, "''")}'"`,
    { stdio: 'inherit' },
  );
}

function findWebps(dir) {
  const out = [];
  if (!fs.existsSync(dir)) return out;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findWebps(full));
    else if (/\.webp$/i.test(entry.name)) out.push(full);
  }
  return out.sort((a, b) => a.localeCompare(b));
}

function randomDate(seed) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) h = (h * 31 + seed.charCodeAt(i)) >>> 0;
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const year = 2024 + (h % 3);
  const month = h % 12;
  const day = 1 + ((h >>> 5) % 28);
  return `${months[month]} ${day}, ${year}`;
}

const sources = findWebps(extractDir);
if (!sources.length) {
  console.error('No webp files found. Place rust-27-images.zip in Downloads or _incoming.');
  process.exit(1);
}

fs.mkdirSync(outDir, { recursive: true });

const bases = [];
for (let i = 0; i < sources.length; i++) {
  const id = String(i + 1).padStart(2, '0');
  const base = `rust-27-${id}`;
  bases.push(`/images/blog/rust-27/${base}`);
  for (const width of widths) {
    await sharp(sources[i])
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 4 })
      .toFile(path.join(outDir, `${base}-${width}.webp`));
  }
  console.log(`Wrote ${base} (${path.basename(sources[i])})`);
}

fs.writeFileSync(
  manifestPath,
  `/** Auto-generated from rust-27-images.zip — ${bases.length} assets */\nexport const RUST27_BLOG_IMAGES = ${JSON.stringify(bases, null, 2)} as const;\n`,
);

const postsSrc = fs.readFileSync(postsPath, 'utf8');
const slugMatches = [...postsSrc.matchAll(/slug:\s*"([^"]+)"/g)].map((m) => m[1]);

let updatedPosts = postsSrc;
slugMatches.forEach((slug, index) => {
  const imageBase = bases[index % bases.length];
  const date = randomDate(`${slug}-${index}`);
  updatedPosts = updatedPosts.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?image:\\s*)"[^"]+"`),
    `$1"${imageBase}"`,
  );
  updatedPosts = updatedPosts.replace(
    new RegExp(`(slug:\\s*"${slug}"[\\s\\S]*?date:\\s*)"[^"]+"`),
    `$1"${date}"`,
  );
});
fs.writeFileSync(postsPath, updatedPosts);

let en = fs.readFileSync(enPath, 'utf8');
slugMatches.forEach((slug, index) => {
  const imageBase = bases[index % bases.length];
  const date = randomDate(`${slug}-${index}`);
  en = en.replace(
    new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?image:\\s*)'[^']+'`),
    `$1'${imageBase}'`,
  );
  en = en.replace(
    new RegExp(`(slug:\\s*'${slug}'[\\s\\S]*?date:\\s*)'[^']+'`),
    `$1'${date}'`,
  );
});
fs.writeFileSync(enPath, en);

console.log(`Synced ${bases.length} rust-27 images; ${slugMatches.length} blog posts updated.`);
