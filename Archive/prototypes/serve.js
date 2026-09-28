// Serves every Warhol Scout build from one origin so index.html can toggle
// between them in place.  node serve.js  →  http://localhost:4321
// ROOT is the Warhol folder, because the current build lives in App/scout/
// and the superseded ones live here in Archive/prototypes/.
const http = require('http'), fs = require('fs'), path = require('path');

const ROOT = path.resolve(__dirname, '..', '..');
const PORT = Number(process.argv[2]) || 4321;
const TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.md': 'text/plain; charset=utf-8',
  '.svg': 'image/svg+xml'
};

http.createServer((req, res) => {
  const rel = decodeURIComponent(req.url.split('?')[0]);
  let file = path.normalize(path.join(ROOT, rel));
  if (!file.startsWith(ROOT)) { res.writeHead(403); return res.end('403'); }
  try { if (fs.statSync(file).isDirectory()) file = path.join(file, 'index.html'); } catch (e) {}
  if (!fs.existsSync(file)) { res.writeHead(404); return res.end('404 ' + rel); }
  res.writeHead(200, {
    'Content-Type': TYPES[path.extname(file)] || 'application/octet-stream',
    'Cache-Control': 'no-store'
  });
  res.end(fs.readFileSync(file));
}).listen(PORT, () => console.log('Warhol Scout prototypes → http://localhost:' + PORT));
