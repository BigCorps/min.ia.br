import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
const read = (name) => readFileSync(new URL('../'+name, import.meta.url), 'utf8');
test('min.IA support is isolated to the public landing and opens its first-party help chat', () => {
  const home = read('client/src/pages/Home.tsx');
  const launcher = read('client/src/components/SupportLauncher.tsx');
  assert.match(home, /<SupportLauncher \/>/);
  assert.match(launcher, /href="https://www\.minhai\.app/minia/suporte"/);
  assert.match(launcher, /target="_blank"/);
  assert.match(launcher, /rel="noopener noreferrer"/);
  assert.match(launcher, /MessageCircle/);
  assert.match(launcher, /rounded-full/);
  assert.doesNotMatch(launcher, /localStorage|fetch\(|document\.cookie|token=/);
});
