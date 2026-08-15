const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5180;
const ROOT = path.join(__dirname, 'docs/.vitepress/dist');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
  '.webp': 'image/webp'
};

function tryFile(fp) {
  try {
    const stat = fs.statSync(fp);
    if (stat.isFile()) return fp;
    if (stat.isDirectory()) {
      const idx = path.join(fp, 'index.html');
      if (fs.existsSync(idx)) return idx;
    }
  } catch {}
  return null;
}

const server = http.createServer((req, res) => {
  let urlPath = decodeURIComponent(req.url.split('?')[0].split('#')[0]);
  if (urlPath === '/') urlPath = '/index.html';

  let filePath = path.join(ROOT, urlPath);
  const ext = path.extname(filePath).toLowerCase();

  // Try 1: exact file
  let found = tryFile(filePath);

  // Try 2: add .html for clean URLs (no extension)
  if (!found && !ext) {
    found = tryFile(filePath + '.html');
  }

  // Try 3: directory index
  if (!found) {
    const asDir = filePath.endsWith(path.sep) ? filePath : filePath + path.sep;
    found = tryFile(path.join(asDir, 'index.html'));
  }

  if (!found) {
    res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
    res.end('404 Not Found: ' + urlPath);
    return;
  }

  const foundExt = path.extname(found).toLowerCase();
  fs.readFile(found, (err, data) => {
    if (err) {
      res.writeHead(500);
      res.end('Server Error');
      return;
    }
    res.writeHead(200, { 'Content-Type': MIME[foundExt] || 'application/octet-stream' });
    res.end(data);
  });
});

server.listen(PORT, '0.0.0.0', () => {
  console.log(`Static server running at http://localhost:${PORT}/`);
  console.log(`Serving from: ${ROOT}`);
});
