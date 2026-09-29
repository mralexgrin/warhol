#!/bin/sh
# Every automated check in the repo, in one command. Exits non-zero on the first failure.
#   sh tools/check.sh
set -e
cd "$(dirname "$0")/.."

printf 'engine tests      '
if out=$(cd App/engine && node test.js 2>&1); then echo "$out" | tail -1 | sed 's/^ *//'; else echo "$out"; exit 1; fi

printf 'folder indexes    '
if node tools/build-indexes.mjs --check; then echo 'up to date'; else exit 1; fi

printf 'doc links         '
node tools/check-links.mjs

printf 'scout smoke       '
if out=$(node App/scout/test/run.mjs 2>&1); then echo "$out" | tail -1; else echo "$out"; exit 1; fi
