import assert from 'node:assert/strict';
import {
  isCloudflarePagesPreviewHost,
  PREVIEW_ROBOTS_HEADER,
  previewRobotsHeadersForHost,
} from '../src/config/previewHost.mjs';

const cases = [
  ['rust-cheat.org', false],
  ['www.rust-cheat.org', false],
  ['RUST-CHEAT.ORG', false],
  ['rust-cheat-org.pages.dev', true],
  ['a1b2c3d4.rust-cheat-org.pages.dev', true],
  ['project.pages.dev', true],
  ['pages.dev', true],
  ['localhost', false],
  ['127.0.0.1', false],
  ['evil-pages.dev.attacker.com', false],
];

for (const [host, expected] of cases) {
  assert.equal(
    isCloudflarePagesPreviewHost(host),
    expected,
    `isCloudflarePagesPreviewHost(${JSON.stringify(host)})`,
  );
}

const prodHeaders = previewRobotsHeadersForHost('rust-cheat.org', { 'Content-Type': 'text/html' });
assert.equal(prodHeaders.get('X-Robots-Tag'), null, 'production must not set X-Robots-Tag');

const previewHeaders = previewRobotsHeadersForHost('abc123.rust-cheat-org.pages.dev', {
  'Content-Type': 'text/html',
});
assert.equal(previewHeaders.get('X-Robots-Tag'), PREVIEW_ROBOTS_HEADER);

console.log(`preview-host-noindex: ${cases.length} hostname cases OK`);
console.log('preview-host-noindex: header injection OK (production unchanged, preview noindex)');

const { onRequest } = await import('../functions/_middleware.js');

async function testPagesMiddleware() {
  const next = () =>
    Promise.resolve(new Response('ok', { headers: { 'Content-Type': 'text/html; charset=utf-8' } }));

  const production = await onRequest({
    request: new Request('https://rust-cheat.org/'),
    next,
  });
  assert.equal(production.headers.get('X-Robots-Tag'), null, 'middleware: rust-cheat.org');

  const preview = await onRequest({
    request: new Request('https://307db17.rust-cheat-org.pages.dev/'),
    next,
  });
  assert.equal(preview.headers.get('X-Robots-Tag'), PREVIEW_ROBOTS_HEADER, 'middleware: pages.dev');

  const local = await onRequest({
    request: new Request('http://127.0.0.1:8788/'),
    next,
  });
  assert.equal(local.headers.get('X-Robots-Tag'), null, 'middleware: localhost');
}

await testPagesMiddleware();
console.log('preview-host-noindex: Pages _middleware integration OK');
