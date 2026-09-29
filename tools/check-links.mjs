#!/usr/bin/env node
/* Fails if a relative link in the published docs points at nothing.
   Covers every tracked Markdown file outside Archive/ (Archive is kept as it was),
   plus the landing page and the folder indexes. A read.html?f=X link is checked as X.
     node tools/check-links.mjs */
import { execFileSync } from 'node:child_process';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { dirname, join, normalize } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
process.chdir(ROOT);

const md = execFileSync('git', ['ls-files', '*.md'], { encoding: 'utf8' }).split('\n')
  .filter((f) => f && !f.startsWith('Archive/') && !f.includes('node_modules'));
const html = ['index.html', 'Notes/index.html', 'Product/index.html', 'Archive/index.html'];

let total = 0;
const broken = [];
function check(from, href) {
  if (/^([a-z]+:|#)/i.test(href)) return;
  /* read.html sits at the root, so its f= is a root-relative path. */
  const reader = href.match(/(?:^|\/)read\.html\?f=([^#]+)/);
  const path = decodeURIComponent((reader ? reader[1] : href).split('#')[0].split('?')[0]);
  if (!path) return;
  total += 1;
  const target = normalize(reader ? path : join(dirname(from), path));
  const ok = existsSync(target) && (!statSync(target).isDirectory() || existsSync(join(target, 'index.html')));
  if (!ok) broken.push(`${from} -> ${href}`);
}

for (const f of md) {
  const text = readFileSync(f, 'utf8').replace(/```[\s\S]*?```/g, '');
  for (const m of text.matchAll(/\]\(([^)\s]+)(?:\s+"[^"]*")?\)/g)) check(f, m[1]);
}
for (const f of html) {
  if (!existsSync(f)) { broken.push(`${f} is missing (run node tools/build-indexes.mjs)`); continue; }
  for (const m of readFileSync(f, 'utf8').matchAll(/href="([^"]+)"/g)) check(f, m[1].replace(/&amp;/g, '&'));
}

console.log(`${total} relative links checked, ${broken.length} broken`);
for (const b of broken) console.log(`  ${b}`);
process.exit(broken.length ? 1 : 0);
