import { isCloudflarePagesPreviewHost, PREVIEW_ROBOTS_HEADER } from '../src/config/previewHost.mjs';

/**
 * Cloudflare Pages edge middleware: block indexing on *.pages.dev only.
 * Does not alter HTML, canonicals, or production rust-cheat.org responses.
 */
export async function onRequest(context) {
  const response = await context.next();
  const hostname = new URL(context.request.url).hostname;

  if (!isCloudflarePagesPreviewHost(hostname)) {
    return response;
  }

  const headers = new Headers(response.headers);
  headers.set('X-Robots-Tag', PREVIEW_ROBOTS_HEADER);

  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers,
  });
}
