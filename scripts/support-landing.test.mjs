import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (name) => readFileSync(new URL('../'+name, import.meta.url), 'utf8');
test('min.IA support is isolated to the public landing and opens its first-party help chat', () => {
  const home = read('client/src/pages/Home.tsx');
  const launcher = read('client/src/components/SupportLauncher.tsx');
  assert.match(home, /<SupportLauncher \/>/);
  assert.match(launcher, /bigcorps-support-embed\\.js/);
  assert.match(launcher, /product: 'minia'/);
  assert.match(launcher, /api\(\)\?\.destroy\(\)/);
  assert.doesNotMatch(launcher, /localStorage|fetch\(|document\.cookie|token=|window\.open/);
});
