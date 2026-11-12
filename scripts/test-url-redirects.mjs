/**
 * Verify 301 redirects from scripts/redirects.mjs against dist output.
 */
import fs from 'node:fs';
import path from 'node:path';
import http from 'node:http';
import { spawn } from 'node:child_process';
import { buildSlugRedirectPairs } from '../src/config/urlRedirects.mjs';
import { resolvePathRedirect } from './redirects.mjs';

const root = path.resolve(import.meta.dirname, '..');
const distDir = path.join(root, 'dist');
const port = 3456;

const legacyPairs = buildSlugRedirectPairs();

function checkDistRedirectHtml(fromPath, toPath) {
  const file = path.join(distDir, fromPath.replace(/^\//, ''), 'index.html');
  if (!fs.existsSync(file)) {
    return { ok: false, reason: 'missing redirect HTML in dist' };
  }
  const html = fs.readFileSync(file, 'utf8');
  if (!html.includes(`url=${toPath}`) && !html.includes(`href="${toPath}"`)) {
    return { ok: false, reason: 'redirect target not found in HTML' };
  }
  if (!html.includes(`href="https://rust-cheat.org${toPath}"`)) {
    return { ok: false, reason: 'canonical to new URL missing' };
  }
  return { ok: true };
}

function waitForServer(ms = 1500) {
  return new Promise((r) => setTimeout(r, ms));
}

async function httpRedirect(pathname) {
  return new Promise((resolve, reject) => {
    http
      .get(`http://127.0.0.1:${port}${pathname}`, (res) => {
        resolve({ status: res.statusCode, location: res.headers.location });
        res.resume();
      })
      .on('error', reject);
  });
}

const distResults = legacyPairs.map(([from, to]) => ({
  from,
  to,
  dist: checkDistRedirectHtml(from, to),
  serve: null,
}));

const server = spawn(process.execPath, ['scripts/serve.mjs'], {
  cwd: root,
  env: { ...process.env, PORT: String(port) },
  stdio: 'ignore',
});

await waitForServer(2000);

try {
  for (const row of distResults) {
    const resolved = resolvePathRedirect(row.from.replace(/\/$/, ''));
    if (resolved !== row.to) {
      row.serve = { ok: false, reason: `resolvePathRedirect got ${resolved}` };
      continue;
    }
    const res = await httpRedirect(row.from);
    row.serve = {
      ok: res.status === 301 && res.location === row.from,
      status: res.status,
      location: res.location,
    };
    // serve returns 301 to same path when file exists - actually serve checks redirect BEFORE file
    // For old paths, redirect should fire before serving redirect html
    if (res.status === 301 && res.location === row.to) {
      row.serve = { ok: true, status: res.status, location: res.location };
    }
  }
} finally {
  server.kill();
}

const failed = distResults.filter((r) => !r.dist.ok || !r.serve?.ok);
console.log(`Checked ${distResults.length} slug redirects. Failed: ${failed.length}.`);
if (failed.length) {
  console.log(JSON.stringify(failed, null, 2));
}
process.exit(failed.length ? 1 : 0);
