import fs from 'node:fs';
import path from 'node:path';
import sharp from 'sharp';

const root = process.cwd();
const publicDir = path.join(root, 'public');
const logoPath = path.join(publicDir, 'images/brand/rust-logo.webp');
const logoInput = fs.existsSync(logoPath) ? logoPath : path.join(publicDir, 'logo.svg');

await sharp(logoInput).resize(180, 180).png().toFile(path.join(publicDir, 'apple-touch-icon.png'));
await sharp(logoInput).resize(32, 32).png().toFile(path.join(publicDir, 'favicon-32.png'));
await sharp(logoInput).resize(16, 16).png().toFile(path.join(publicDir, 'favicon-16.png'));
await sharp(logoInput).resize(32, 32).png().toFile(path.join(publicDir, 'favicon.ico'));

console.log('Brand icons generated: apple-touch-icon.png, favicon.ico, favicon-16/32.png');
