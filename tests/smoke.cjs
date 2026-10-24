const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const source = fs.readFileSync(path.join(__dirname, '../app.js'), 'utf8');
function load(search = '') {
  const handlers = {};
  const app = { innerHTML: '', children: [], querySelector: () => null, querySelectorAll: () => [], contains: () => false, addEventListener: (type, fn) => handlers[type] = fn };
  const context = vm.createContext({ console, URLSearchParams, FormData, setTimeout, clearTimeout, setInterval, clearInterval,
    requestAnimationFrame: fn => fn(), document: { activeElement: null, body: { style: {} }, querySelector: selector => selector === '#app' ? app : null },
    window: { location: { search }, scrollX: 0, scrollY: 0, scrollTo: () => {} }, alert: () => {}, prompt: () => null });
  vm.runInContext(source, context);
  return { app, handlers, run: script => vm.runInContext(script, context) };
}
for (const query of ['', '?page=1', '?page=2', '?page=3', '?page=4', '?page=5', '?page=6', '?page=7', '?mode=returning', '?tab=chat', '?tab=jingli', '?tab=profile', '?tab=recommend', '?tab=xiaozhi&view=chat', '?mode=new&tab=jingli', '?page=1.2', '?page=99', '?heat=NaN', '?heat=Infinity', '?heat=-1', '?call=active']) {
  assert.doesNotThrow(() => load(query), query);
}
assert.match(load('?tab=chat').app.innerHTML, /chat-shell/);
assert.match(load('?mode=new&tab=jingli').app.innerHTML, /小满的经历/);
assert.match(load('?mode=returning&page=4').app.innerHTML, /小满的个人画像/);
let t = load('?mode=returning&name=' + encodeURIComponent('<em id="injected">A & B</em>'));
assert(!t.app.innerHTML.includes('<em id="injected">'));
assert(t.app.innerHTML.includes('&lt;em id=&quot;injected&quot;&gt;A &amp; B&lt;/em&gt;'));
const raw = '<em id="injected">A & B</em>';
t = load('?page=2');
t.run(`s.messages.push({from:'me', text:${JSON.stringify(raw)}});render()`);
assert(!t.app.innerHTML.includes(raw));
assert(t.app.innerHTML.includes('&lt;em id=&quot;injected&quot;&gt;A &amp; B&lt;/em&gt;'));
t.run('render()');
assert(!t.app.innerHTML.includes('&amp;lt;em'));
t.run(`s.messages.push({from:'me', kind:'voice',text:'语音消息 · 00:08（演示）'});render()`);
assert(t.app.innerHTML.includes('语音消息 · 00:08（演示）'));
assert(t.app.innerHTML.includes('class="ico-svg"'));
t = load('?mode=returning');
t.run(`s.entries.push({kind:'diary',title:${JSON.stringify(raw)},body:${JSON.stringify(raw)},at:'刚刚'});render()`);
assert(!t.app.innerHTML.includes(raw));
t = load('?page=3');
t.run(`s.tags.push([${JSON.stringify(raw)},${JSON.stringify(raw)}]);render()`);
assert(!t.app.innerHTML.includes(raw));
t.run(`s.mode='returning';s.tab='jingli';s.page=8;s.jingliView='tags';render()`);
assert(t.app.innerHTML.includes('data-tag="&lt;em id=&quot;injected&quot;&gt;A &amp; B&lt;/em&gt;"'));
t = load('?page=6');
t.run('s.heatByFriend[0]=5;s.unlocks=[1,3,5];s.friend=1;render()');
assert(!t.app.innerHTML.includes('<b>解锁：真实照片</b>'));
t.run('s.friend=0;render()');
assert(t.app.innerHTML.includes('<b>解锁：真实照片</b>'));
assert(!t.app.innerHTML.includes('<button type="button">对方的真实照片已解锁</button>'));
console.log('Node VM: 21 query variants; escaped name/message/diary/tag; no double encoding; voice rendering; per-friend unlocks — passed.');

