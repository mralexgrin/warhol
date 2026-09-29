#!/usr/bin/env node
/* Runs smoke.html in headless Chrome and reports what it found. No dependencies:
   a tiny static server for the repo, Chrome's --dump-dom, and the JSON the page
   writes into #result.

     node App/scout/test/run.mjs            run, print failures, exit 1 if any
     node App/scout/test/run.mjs --all      print every check
     CHROME=/path/to/chrome node ...        use a different browser binary

   Exit codes: 0 all passed · 1 a check failed · 2 the tests did not run
   (no browser, or the page never finished). "Did not run" is never reported as a pass. */
import { createServer } from 'node:http';
import { spawn } from 'node:child_process';
import { readFile, stat, mkdtemp, rm } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { dirname, join, extname, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const REPO = join(dirname(fileURLToPath(import.meta.url)), '..', '..', '..');
const TYPES = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.woff2': 'font/woff2', '.md': 'text/markdown; charset=utf-8'
};

const CANDIDATES = [
  process.env.CHROME,
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/Applications/Brave Browser.app/Contents/MacOS/Brave Browser',
  '/usr/bin/google-chrome', '/usr/bin/chromium', '/usr/bin/chromium-browser'
].filter(Boolean);
const chrome = CANDIDATES.find((p) => existsSync(p));
if (!chrome) {
  console.error('DID NOT RUN: no Chrome or Chromium found. Set CHROME=/path/to/binary.');
  process.exit(2);
}

const server = createServer(async (req, res) => {
  const path = normalize(decodeURIComponent(new URL(req.url, 'http://x').pathname)).replace(/^(\.\.[/\\])+/, '');
  let file = join(REPO, path);
  try {
    if ((await stat(file)).isDirectory()) file = join(file, 'index.html');
    const body = await readFile(file);
    res.writeHead(200, { 'content-type': TYPES[extname(file)] || 'application/octet-stream' });
    res.end(body);
  } catch {
    res.writeHead(404); res.end('not found');
  }
});
await new Promise((r) => server.listen(0, '127.0.0.1', r));
const url = `http://127.0.0.1:${server.address().port}/App/scout/test/smoke.html`;

const profile = await mkdtemp(join(tmpdir(), 'scout-smoke-'));
const args = [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  `--user-data-dir=${profile}`, '--window-size=1600,1000',
  /* Virtual time runs the page's timers without waiting on the wall clock. */
  '--virtual-time-budget=180000', '--dump-dom', url
];

const dom = await new Promise((resolve) => {
  const p = spawn(chrome, args, { stdio: ['ignore', 'pipe', 'ignore'] });
  let out = '';
  /* Headless Chrome can linger after printing the DOM; the page is all we need. */
  p.stdout.on('data', (d) => { out += d; if (out.includes('</html>')) p.kill('SIGKILL'); });
  const guard = setTimeout(() => { p.kill('SIGKILL'); }, 240000);
  p.on('close', () => { clearTimeout(guard); resolve(out); });
});
server.close();
await rm(profile, { recursive: true, force: true });

const m = dom.match(/<pre id="result">([\s\S]*?)<\/pre>/);
const raw = m && m[1].replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&quot;/g, '"').replace(/&amp;/g, '&');
if (!raw) {
  console.error('DID NOT RUN: the smoke page never wrote its result. Open it from the local server to watch:');
  console.error('  node Archive/prototypes/serve.js  →  http://localhost:4321/App/scout/test/smoke.html');
  process.exit(2);
}

const report = JSON.parse(raw);
const all = process.argv.includes('--all');
for (const r of report.results) {
  if (all || !r.ok) console.log(`${r.ok ? '  ok  ' : '  FAIL'} ${r.name}${r.ok ? '' : `\n         ${r.detail}`}`);
}
console.log(`\n${report.total - report.failed} passed, ${report.failed} failed (${report.total} checks)`);
process.exit(report.failed ? 1 : 0);
