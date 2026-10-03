import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = fileURLToPath(new URL('.', import.meta.url));
const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.svg': 'image/svg+xml',
};
const cache = { expiresAt: 0, posts: [] };
const privateFiles = ['/server.js', '/package.json'];

async function loadLocalEnv() {
  try {
    const content = await readFile(resolve(root, '.env'), 'utf8');
    for (const line of content.split(/\r?\n/)) {
      const match = line.match(/^\s*([A-Z_][A-Z0-9_]*)\s*=\s*(.*?)\s*$/);
      if (!match || process.env[match[1]] !== undefined) continue;
      const value = match[2].replace(/^(["'])(.*)\1$/, '$2');
      process.env[match[1]] = value;
    }
  } catch (error) {
    if (error.code !== 'ENOENT') throw error;
  }
}

function sendJson(response, status, data) {
  response.writeHead(status, {
    'Content-Type': 'application/json; charset=utf-8',
    'Cache-Control': 'no-store',
    'X-Content-Type-Options': 'nosniff',
  });
  response.end(JSON.stringify(data));
}

function getMediaUrl(post) {
  if (post.media_type === 'VIDEO') {
    return post.thumbnail_url || '';
  }

  if (post.media_type !== 'CAROUSEL_ALBUM') {
    return post.media_url || post.thumbnail_url || '';
  }

  const children = post.children ? post.children.data || [] : [];
  for (const child of children) {
    if (child.media_type === 'IMAGE') {
      return child.media_url || child.thumbnail_url || '';
    }
  }

  if (children.length > 0) {
    return children[0].thumbnail_url || children[0].media_url || '';
  }

  return post.media_url || '';
}

async function handleInstagram(requestUrl, response) {
  const token = process.env.IG_ACCESS_TOKEN;
  const userId = process.env.IG_USER_ID;
  if (!token || !/^\d+$/.test(userId || '')) {
    sendJson(response, 503, { error: 'Kanał nowości nie jest jeszcze skonfigurowany.' });
    return;
  }

  let limit = Number.parseInt(requestUrl.searchParams.get('limit'), 10);
  if (!limit) limit = 9;
  if (limit < 1) limit = 1;
  if (limit > 25) limit = 25;
  if (cache.expiresAt > Date.now()) {
    sendJson(response, 200, {
      posts: cache.posts.slice(0, limit),
      profileUrl: process.env.IG_PROFILE_URL || '',
    });
    return;
  }

  let version = 'v25.0';
  if (/^v\d+\.\d+$/.test(process.env.IG_GRAPH_VERSION || '')) {
    version = process.env.IG_GRAPH_VERSION;
  }
  const url = new URL(`https://graph.facebook.com/${version}/${userId}/media`);
  url.searchParams.set('fields', 'id,caption,media_type,media_url,permalink,timestamp,username,thumbnail_url,children{media_type,media_url,thumbnail_url}');
  url.searchParams.set('limit', '25');
  url.searchParams.set('access_token', token);

  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 10000);
  try {
    const upstream = await fetch(url, { signal: controller.signal });
    const result = await upstream.json();
    if (!upstream.ok) {
      console.error(`Instagram Graph API zwróciło status ${upstream.status}.`);
      sendJson(response, 502, { error: 'Nie udało się pobrać wpisów z Instagrama.' });
      return;
    }

    cache.posts = [];
    const posts = Array.isArray(result.data) ? result.data : [];
    for (const post of posts) {
      cache.posts.push({
        id: post.id,
        caption: post.caption || '',
        mediaType: post.media_type || '',
        mediaUrl: getMediaUrl(post),
        permalink: post.permalink || '',
        timestamp: post.timestamp || '',
        username: post.username || '',
      });
    }
    cache.expiresAt = Date.now() + 3 * 60 * 1000;
    sendJson(response, 200, {
      posts: cache.posts.slice(0, limit),
      profileUrl: process.env.IG_PROFILE_URL || '',
    });
  } catch (error) {
    const timedOut = error.name === 'AbortError';
    console.error(timedOut ? 'Przekroczono czas odpowiedzi Instagrama.' : 'Nie udało się połączyć z Instagram Graph API.');
    sendJson(response, timedOut ? 504 : 502, {
      error: timedOut ? 'Instagram odpowiada zbyt długo. Spróbuj ponownie za chwilę.' : 'Nie udało się połączyć z Instagramem.',
    });
  } finally {
    clearTimeout(timeout);
  }
}

await loadLocalEnv();

const server = createServer(async (request, response) => {
  const requestUrl = new URL(request.url, 'http://localhost');
  if (request.method !== 'GET') {
    sendJson(response, 405, { error: 'Ta metoda nie jest obsługiwana.' });
    return;
  }

  if (requestUrl.pathname === '/api/instagram/posts') {
    await handleInstagram(requestUrl, response);
    return;
  }

  let decodedPath;
  try {
    decodedPath = decodeURIComponent(requestUrl.pathname);
  } catch {
    sendJson(response, 400, { error: 'Nieprawidłowy adres.' });
    return;
  }
  const pathParts = decodedPath.split('/');
  const containsHiddenFile = pathParts.some((part) => part.startsWith('.'));
  if (containsHiddenFile || privateFiles.includes(decodedPath)) {
    sendJson(response, 404, { error: 'Nie znaleziono pliku.' });
    return;
  }

  const filePath = resolve(root, `.${decodedPath === '/' ? '/index.html' : decodedPath}`);
  if (!filePath.startsWith(`${root}${sep}`)) {
    sendJson(response, 403, { error: 'Brak dostępu.' });
    return;
  }

  try {
    const content = await readFile(filePath);
    response.writeHead(200, {
      'Content-Type': mimeTypes[extname(filePath)] || 'application/octet-stream',
      'X-Content-Type-Options': 'nosniff',
    });
    response.end(content);
  } catch (error) {
    sendJson(response, error.code === 'ENOENT' ? 404 : 500, { error: 'Nie znaleziono pliku.' });
  }
});

const port = Number(process.env.PORT) || 4173;
server.listen(port, '127.0.0.1', () => {
  console.log(`Hayate Judo działa pod adresem http://127.0.0.1:${port}`);
});