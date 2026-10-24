/* Sagemeet 智遇 · v0.6.1 — nav: 小知·聊天·遇见·经历; Web top / mobile bottom (interaction only) */
const U = (id, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=80&auto=format&fit=crop`;

const PHOTOS = [
  'photo-1534528741775-53994a69daeb',
  'photo-1494790108377-be9c29b29330',
  'photo-1507003211169-0a1dd7228f2d',
  'photo-1517841905240-472988babdf9',
  'photo-1529626455594-4ff0802cfb7e',
  'photo-1544005313-94ddf0286df2',
  'photo-1500648767791-00dcc994a43e',
  'photo-1438761681033-6461ffad8d80',
  'photo-1506794778202-cad84cf45f1d',
  'photo-1539571696357-5a69c17a67c6',
  'photo-1488426862026-3ee34a7d66df',
  'photo-1472099645785-5658abf4ff4e',
  'photo-1469334031218-e382a71b716b',
];
const EDITORIAL = 'photo-1529156069898-49953e39b3ac';

/* Virtual persona palettes — finished illustrated characters */
const VIRT = [
  { skin:'#F0C9A8', blush:'#E8A088', hair:'#2C1A0E', shirt:'#D86848', accent:'#7A8A5A', bg1:'#F8E0D8', bg2:'#E8D0C0', scene:'#E8C8B0' },
  { skin:'#E8B898', blush:'#D88878', hair:'#1A1210', shirt:'#5E7A68', accent:'#D86848', bg1:'#E0E8E0', bg2:'#D0D8D0', scene:'#C8D4C8' },
  { skin:'#F5D0B0', blush:'#E8A090', hair:'#4A3020', shirt:'#C4A060', accent:'#789880', bg1:'#F5E8D8', bg2:'#E8D8C0', scene:'#E0D0B8' },
  { skin:'#E0B090', blush:'#D08070', hair:'#0E0A08', shirt:'#4A5A6A', accent:'#D86848', bg1:'#D8E0E8', bg2:'#C8D0D8', scene:'#B8C4D0' },
  { skin:'#F2C8A8', blush:'#E89888', hair:'#3D2818', shirt:'#E8A0B0', accent:'#7A8A5A', bg1:'#F8E0E8', bg2:'#E8D0D8', scene:'#E0C8D0' },
  { skin:'#E8C0A0', blush:'#D89880', hair:'#5A4030', shirt:'#6888A0', accent:'#D86848', bg1:'#D8E4F0', bg2:'#C8D4E0', scene:'#B8C8D8' },
  { skin:'#F0C8A0', blush:'#E09078', hair:'#1C1410', shirt:'#A87858', accent:'#789880', bg1:'#F0E4D0', bg2:'#E0D4C0', scene:'#D8C8B0' },
  { skin:'#E8B898', blush:'#D88880', hair:'#6A4838', shirt:'#889870', accent:'#D86848', bg1:'#E8F0E0', bg2:'#D8E0D0', scene:'#C8D8C0' },
  { skin:'#F5D4B8', blush:'#E8A898', hair:'#2A1C14', shirt:'#B85848', accent:'#7A8A5A', bg1:'#F8D8D0', bg2:'#E8C8C0', scene:'#E0C0B8' },
  { skin:'#E0B090', blush:'#C87868', hair:'#0A0806', shirt:'#586878', accent:'#D86848', bg1:'#D0D8E0', bg2:'#C0C8D0', scene:'#B0BCC8' },
  { skin:'#F0C8A8', blush:'#E89880', hair:'#4A3828', shirt:'#E8C060', accent:'#789880', bg1:'#F8F0D8', bg2:'#E8E0C8', scene:'#E0D8B8' },
  { skin:'#E8BC9C', blush:'#D88870', hair:'#1E1410', shirt:'#708878', accent:'#D86848', bg1:'#D8E8E0', bg2:'#C8D8D0', scene:'#B8CCC0' },
  { skin:'#F2CCB0', blush:'#E8A090', hair:'#3A2818', shirt:'#9878A8', accent:'#7A8A5A', bg1:'#E8E0F0', bg2:'#D8D0E0', scene:'#C8C0D8' },
];

/* [name, age, city, bio, tags[], photoIndex] */
const people = [
  ['阿禾', '26', '杭州', '周末常在山上走走，最近在读《瓦尔登湖》。', ['独处充电', '山野', '慢热'], 0],
  ['林一', '28', '上海', '做纪录片剪辑，喜欢收集陌生人的小故事。', ['真实', '好奇心', '深度连接'], 1],
  ['小鹿', '24', '成都', '在学做陶，手很笨但很快乐。', ['慢热', '温柔', '手作'], 2],
  ['周屿', '27', '苏州', '喜欢清晨骑车和记录生活里的小事。', ['自然爱好者', '细节控', '真诚'], 3],
  ['晚晚', '25', '南京', '在独立书店工作，相信好奇心会带人去很远的地方。', ['阅读', '温和好奇', '慢慢熟悉'], 4],
  ['阿澄', '29', '厦门', '下班后做饭，也喜欢沿海边散步。', ['生活观察', '松弛感', '倾听'], 5],
  ['北北', '23', '北京', '喜欢逛展和城市漫步，最近开始学胶片摄影。', ['好奇心', '摄影', '慢热'], 6],
  ['小满', '26', '广州', '养了两盆快被养死的植物，仍然乐此不疲。', ['温柔', '植物', '认真生活'], 7],
  ['知遥', '30', '青岛', '周末会去海边跑步，偶尔写很长的信。', ['海边', '表达', '真诚'], 8],
  ['简宁', '24', '武汉', '喜欢旧电影和收集好听的歌。', ['电影', '音乐', '细腻'], 9],
  ['行之', '28', '长沙', '在学做面包，觉得分享食物很浪漫。', ['手作', '热爱生活', '分享'], 10],
  ['栗子', '27', '无锡', '喜欢骑行去郊外，看鸟，也看云。', ['自然', '独处充电', '观察力'], 11],
  ['晴子', '25', '天津', '常去小剧场，想认识愿意认真聊天的人。', ['戏剧', '深度连接', '好奇'], 12],
];

const INTERESTS = [
  '读书', '电影', '徒步', '做饭', '音乐现场', '摄影', '心理学', '旅行',
  '猫猫狗狗', '手作', '播客', '跑步', '展览', '咖啡', '写作', '游戏',
];
const MOODS = [
  ['在慢慢找方向', '有些想法，还没完全成形'],
  ['忙碌但充实', '日子满满的，偶尔想喘口气'],
  ['想认识新朋友', '希望身边多一些聊得来的人'],
  ['有点需要被理解', '心里有些话，想找人说说'],
];
const AGES = ['18-22', '23-27', '28-35', '35+'];
const GENDERS = ['男', '女'];
const HEAT_UNLOCK = 5; /* messages to unlock real photo */
/* Persistent match % per person index — high but varied (never low) */
const MATCH_PCT = [92, 88, 84, 81, 79, 76, 91, 86, 83, 78, 90, 85, 74];

const CHAPTERS = [
  { id: 1, label: '1. 基础信息' },
  { id: 2, label: '2. Agent 交流' },
  { id: 3, label: '3. 我的标签' },
  { id: 4, label: '4. 分析报告' },
  { id: 5, label: '5. 知音推荐' },
  { id: 6, label: '6. 聊天' },
];

const s = {
  mode: 'new', /* new | returning */
  page: 0, name: '', gender: '', age: '23-27', mood: '在慢慢找方向',
  interests: ['徒步', '读书', '展览'],
  tags: [
    ['独处充电', '一个人去爬山，到山顶突然觉得很轻松'],
    ['说真话的人', '我不太想装，宁愿少说也要说真的'],
    ['慢热但长情', '熟了以后我会很愿意付出'],
    ['山野爱好者', '风很大的时候，好像什么都不重要了'],
  ],
  active: [0, 1, 2], p: 0, friend: 0, sent: 0, unlocks: [],
  messages: [], /* agent-only thread */
  xzChat: false, /* chat page shows the 小知 thread instead of a friend */
  threadsByFriend: {}, /* friendIndex -> messages[] */
  modal: '', unbind: 0,
  /* returning tab: xiaozhi | chat | recommend(遇见) | jingli(经历) */
  tab: 'xiaozhi',
  /* 经历: home | tags | insight | detail */
  jingliView: 'home',
  jingliInsight: 0,
  jingliDetail: '',
  matchTags: ['独处充电', '说真话的人', '慢热但长情', '山野爱好者'],
  focusTags: ['独处充电', '说真话的人'],
  /* treehole (小知): home | chat | compose */
  treeholeView: 'home',
  composeKind: '', /* diary | daily | secret */
  composeDraft: '',
  entries: [
    { id: 1, kind: 'diary', title: '山顶的风', body: '上周末一个人爬山，到山顶突然觉得很轻松。', at: '昨天' },
    { id: 2, kind: 'daily', title: '地铁里的一段旋律', body: '下班路上耳机里忽然响起熟悉的歌，嘴角自己翘起来了。', at: '前天' },
    { id: 3, kind: 'secret', title: '没说出口的一句', body: '其实有时候也希望有人陪着看风景，只是还不敢说。', at: '3 天前' },
  ],
  /* call */
  callPhase: '', /* '' | connecting | active */
  callSeconds: 0,
  heatByFriend: {}, /* friendIndex -> message count */
};

let callTimer = null;

const app = document.querySelector('#app');
const who = () => (s.name && String(s.name).trim()) || '你';
const photo = (p, w = 800) => U(PHOTOS[p[5] % PHOTOS.length], w);
const virtOf = (p) => VIRT[p[5] % VIRT.length];
const heatOf = (idx) => s.heatByFriend[idx] || 0;

function defaultThread(p) {
  const topic = (p[4] && p[4][0]) || '真实';
  return [
    { from: 'them', text: `嗨～看到你也喜欢「${topic}」，最近去了哪里？` },
    { from: 'me', text: '最近还不错，想慢慢认识聊得来的人。' },
  ];
}
function threadOf(fi) {
  const key = String(fi);
  if (!s.threadsByFriend[key] || !s.threadsByFriend[key].length) {
    const p = people[fi % people.length];
    s.threadsByFriend[key] = defaultThread(p);
  }
  return s.threadsByFriend[key];
}
function xiaozhiThread() {
  if (!s.messages.length) {
    s.messages = [
      { from: 'agent', text: '你好，我是小知，会一直在这里听你说。最近一次让你觉得「这一刻真好」的时候，是在做什么？' },
      { from: 'me', text: '上周末一个人去爬山，到山顶的时候风很大，突然觉得很轻松。' },
      { from: 'agent', text: '那是一个属于你自己的时刻。你更喜欢一个人享受安静，还是也希望有人一起看？' },
    ];
  }
  return s.messages;
}
function ensureActiveFriend() {
  if (!s.active.length) return;
  if (!s.active.includes(s.friend)) s.friend = s.active[0];
}
const isUnlocked = (idx) => heatOf(idx) >= HEAT_UNLOCK || s.unlocks.includes('photo:' + idx);
const matchPctOf = (idx) => MATCH_PCT[((idx % MATCH_PCT.length) + MATCH_PCT.length) % MATCH_PCT.length];
/** Overlap user tags/interests with person tags; pad to 2–3 openers */
function sharedTagsFor(p) {
  const userBits = [
    ...s.tags.map((t) => t[0]),
    ...s.interests,
  ];
  const theirs = p[4] || [];
  const hit = [];
  for (const t of theirs) {
    if (userBits.some((u) => u === t || u.includes(t) || t.includes(u))) hit.push(t);
  }
  for (const t of theirs) {
    if (hit.length >= 3) break;
    if (!hit.includes(t)) hit.push(t);
  }
  return hit.slice(0, 3);
}
const btn = (t, a, c = '') =>
  `<button type="button" class="btn ${c}" data-a="${a}">${t}</button>`;
const link = (t, a) =>
  `<button type="button" class="link" data-a="${a}">${t}</button>`;
const tag = (t) => `<i class="tag">#${t}</i>`;

/* ——— Illustrated virtual persona (SVG composition) ——— */
function virtSVG(p, opts = {}) {
  const v = virtOf(p);
  const { mini = false, bust = false } = opts;
  const id = 'v' + (p[5] % 100) + (mini ? 'm' : '') + (bust ? 'b' : '');
  /* Soft editorial figure with hair, clothes, contact shadow, scene wash */
  if (bust || mini) {
    return `<svg class="virt-scene" viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <defs>
        <radialGradient id="${id}bg" cx="50%" cy="40%" r="60%">
          <stop offset="0%" stop-color="${v.bg1}"/>
          <stop offset="100%" stop-color="${v.bg2}"/>
        </radialGradient>
        <linearGradient id="${id}skin" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stop-color="${v.skin}"/>
          <stop offset="100%" stop-color="${v.blush}"/>
        </linearGradient>
      </defs>
      <circle cx="60" cy="60" r="60" fill="url(#${id}bg)"/>
      <!-- shoulders -->
      <ellipse cx="60" cy="118" rx="42" ry="28" fill="${v.shirt}"/>
      <ellipse cx="60" cy="112" rx="38" ry="10" fill="${v.accent}" opacity=".25"/>
      <!-- neck -->
      <rect x="52" y="78" width="16" height="18" rx="4" fill="url(#${id}skin)"/>
      <!-- head -->
      <ellipse cx="60" cy="52" rx="28" ry="32" fill="url(#${id}skin)"/>
      <!-- hair back -->
      <path d="M32 48 Q30 18 60 14 Q90 18 88 48 Q86 28 60 24 Q34 28 32 48Z" fill="${v.hair}"/>
      <!-- hair front -->
      <path d="M34 42 Q40 28 52 30 Q48 44 42 52Z" fill="${v.hair}"/>
      <path d="M86 42 Q80 28 68 30 Q72 44 78 52Z" fill="${v.hair}"/>
      <!-- eyes -->
      <ellipse cx="50" cy="52" rx="3.2" ry="3.6" fill="#2A1810"/>
      <ellipse cx="70" cy="52" rx="3.2" ry="3.6" fill="#2A1810"/>
      <circle cx="51" cy="51" r="1" fill="#fff" opacity=".7"/>
      <circle cx="71" cy="51" r="1" fill="#fff" opacity=".7"/>
      <!-- blush -->
      <ellipse cx="44" cy="60" rx="5" ry="3" fill="${v.blush}" opacity=".45"/>
      <ellipse cx="76" cy="60" rx="5" ry="3" fill="${v.blush}" opacity=".45"/>
      <!-- smile -->
      <path d="M54 66 Q60 72 66 66" fill="none" stroke="#C07060" stroke-width="1.6" stroke-linecap="round"/>
    </svg>`;
  }

  /* Full-body editorial scene */
  return `<svg class="virt-scene" viewBox="0 0 300 400" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <defs>
      <linearGradient id="${id}sky" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${v.bg1}"/>
        <stop offset="55%" stop-color="${v.bg2}"/>
        <stop offset="100%" stop-color="${v.scene}"/>
      </linearGradient>
      <linearGradient id="${id}skin" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="${v.skin}"/>
        <stop offset="100%" stop-color="${v.blush}"/>
      </linearGradient>
      <radialGradient id="${id}glow" cx="50%" cy="35%" r="45%">
        <stop offset="0%" stop-color="#fff" stop-opacity=".35"/>
        <stop offset="100%" stop-color="#fff" stop-opacity="0"/>
      </radialGradient>
    </defs>
    <rect width="300" height="400" fill="url(#${id}sky)"/>
    <ellipse cx="150" cy="120" rx="110" ry="90" fill="url(#${id}glow)"/>
    <!-- soft foliage / scene accents -->
    <circle cx="40" cy="300" r="50" fill="${v.accent}" opacity=".18"/>
    <circle cx="270" cy="280" r="60" fill="${v.shirt}" opacity=".12"/>
    <circle cx="20" cy="200" r="30" fill="${v.accent}" opacity=".12"/>
    <!-- ground contact shadow -->
    <ellipse cx="150" cy="368" rx="70" ry="10" fill="rgba(40,24,16,.14)"/>
    <!-- legs -->
    <rect x="118" y="290" width="22" height="70" rx="10" fill="${v.shirt}" opacity=".85"/>
    <rect x="160" y="290" width="22" height="70" rx="10" fill="${v.shirt}" opacity=".85"/>
    <ellipse cx="129" cy="358" rx="14" ry="6" fill="#2A1810" opacity=".55"/>
    <ellipse cx="171" cy="358" rx="14" ry="6" fill="#2A1810" opacity=".55"/>
    <!-- torso -->
    <path d="M100 180 Q100 160 150 155 Q200 160 200 180 L210 295 Q150 310 90 295 Z" fill="${v.shirt}"/>
    <path d="M120 175 Q150 195 180 175" fill="none" stroke="${v.accent}" stroke-width="3" opacity=".35"/>
    <!-- arms -->
    <path d="M100 185 Q70 220 78 270" fill="none" stroke="url(#${id}skin)" stroke-width="18" stroke-linecap="round"/>
    <path d="M200 185 Q230 220 222 270" fill="none" stroke="url(#${id}skin)" stroke-width="18" stroke-linecap="round"/>
    <!-- neck -->
    <rect x="138" y="128" width="24" height="36" rx="6" fill="url(#${id}skin)"/>
    <!-- head -->
    <ellipse cx="150" cy="95" rx="42" ry="48" fill="url(#${id}skin)"/>
    <!-- hair back -->
    <path d="M108 90 Q105 40 150 32 Q195 40 192 90 Q188 55 150 48 Q112 55 108 90Z" fill="${v.hair}"/>
    <!-- bangs -->
    <path d="M112 78 Q125 55 145 58 Q138 82 128 95Z" fill="${v.hair}"/>
    <path d="M188 78 Q175 55 155 58 Q162 82 172 95Z" fill="${v.hair}"/>
    <path d="M150 48 Q160 70 155 88 Q150 70 145 88 Q140 70 150 48Z" fill="${v.hair}" opacity=".85"/>
    <!-- ears -->
    <ellipse cx="108" cy="98" rx="8" ry="11" fill="${v.skin}"/>
    <ellipse cx="192" cy="98" rx="8" ry="11" fill="${v.skin}"/>
    <!-- eyes -->
    <ellipse cx="135" cy="95" rx="5" ry="5.5" fill="#2A1810"/>
    <ellipse cx="165" cy="95" rx="5" ry="5.5" fill="#2A1810"/>
    <circle cx="136.5" cy="93.5" r="1.6" fill="#fff" opacity=".75"/>
    <circle cx="166.5" cy="93.5" r="1.6" fill="#fff" opacity=".75"/>
    <!-- brows -->
    <path d="M126 84 Q135 80 144 84" fill="none" stroke="${v.hair}" stroke-width="2" stroke-linecap="round"/>
    <path d="M156 84 Q165 80 174 84" fill="none" stroke="${v.hair}" stroke-width="2" stroke-linecap="round"/>
    <!-- blush -->
    <ellipse cx="122" cy="108" rx="9" ry="5" fill="${v.blush}" opacity=".4"/>
    <ellipse cx="178" cy="108" rx="9" ry="5" fill="${v.blush}" opacity=".4"/>
    <!-- nose + smile -->
    <path d="M150 98 L148 108 Q150 110 152 108Z" fill="${v.blush}" opacity=".5"/>
    <path d="M140 118 Q150 128 160 118" fill="none" stroke="#C07060" stroke-width="2.2" stroke-linecap="round"/>
    <!-- small heart accent -->
    <path d="M230 70 C230 62 242 62 242 70 C242 78 230 86 230 86 C230 86 218 78 218 70 C218 62 230 62 230 70Z" fill="${v.shirt}" opacity=".35"/>
  </svg>`;
}

/* Hand-drawn portrait (assets/people/pN.jpg) layered over the SVG figure;
   the img removes itself on error, so people without a portrait keep the SVG */
function portraitFrame(p, opts = {}) {
  return `<span class="portrait-frame">${virtSVG(p, opts)}<img src="assets/people/p${p[5]}.jpg" alt="${p[0]}" loading="lazy" onerror="this.remove()"></span>`;
}

function avatar(p, size = 40) {
  return `<span class="friend-avatar" style="width:${size}px;height:${size}px">
    <span class="virt-mini">${virtSVG(p, { mini: true })}</span>
    <img class="avatar-img" src="assets/people/p${p[5]}.jpg" alt="" loading="lazy" onerror="this.remove()">
  </span>`;
}

/* The illustration (assets/report/plane-meet.jpg) already contains the eight
   portraits; each seat is an invisible hit area laid over one window, and its
   position lives in CSS (.plane-seat:nth-child) next to the measured coordinates. */
function planeWindow(p, i) {
  const pct = matchPctOf(i);
  return `<button type="button" class="plane-seat" data-a="meet-person" data-i="${i}"
      aria-label="${p[0]}，${p[2]}，${p[1]} 岁，匹配度 ${pct}%">
    <em class="plane-pct">${pct}%</em>
    <span class="plane-name">${p[0]} · ${p[2]}</span>
  </button>`;
}

const ICON_MIC = `<svg class="ico-svg" viewBox="0 0 162 237" aria-hidden="true" fill="currentColor"><rect x="36" y="0" width="90" height="150" rx="45"/><path d="M10 100a71 71 0 0 0 142 0M81 171v54M45 228h72" fill="none" stroke="currentColor" stroke-width="16" stroke-linecap="round"/></svg>`;
const ICON_CALL = `<svg class="ico-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 2h6v6M22 2l-7 7"/><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1.9.4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8.1 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z"/></svg>`;
const ICON_SEND = `<svg class="ico-svg" viewBox="0 0 24 24" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 2 11 13"/><path d="M22 2 15 22l-4-9-9-4z"/></svg>`;
const ICON_PHONE = `<svg class="ico-svg" viewBox="0 0 200 200" aria-hidden="true" fill="currentColor"><circle cx="48" cy="44" r="36"/><circle cx="156" cy="152" r="36"/><path d="M40 60C40 120 80 160 140 160" fill="none" stroke="currentColor" stroke-width="46" stroke-linecap="round"/></svg>`;

function planeRow(list) {
  return `<div class="plane">
    <div class="plane-scene">
      <img src="assets/report/plane-meet.jpg" alt="" width="1942" height="809" loading="lazy">
      ${list}
    </div>
  </div>`;
}

/* "S" brand mark: one swoosh, the second is the same path turned 180°. */
const BRAND_LOGO = `<svg class="brand-logo" viewBox="0 0 100 110" aria-hidden="true">
  <defs>
    <linearGradient id="logo-p" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#bca6f8"/><stop offset="1" stop-color="#7a59e0"/></linearGradient>
    <linearGradient id="logo-g" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#4fa57c"/><stop offset="1" stop-color="#a9e5c6"/></linearGradient>
  </defs>
  <path fill="url(#logo-p)" d="M44 60C18 56 6 28 30 12C52 -2 92 2 95 24C97 38 86 45 77 41C69 37 64 31 54 31C40 31 33 46 44 60Z"/>
  <path fill="url(#logo-g)" transform="rotate(180 50 55)" d="M44 60C18 56 6 28 30 12C52 -2 92 2 95 24C97 38 86 45 77 41C69 37 64 31 54 31C40 31 33 46 44 60Z"/>
</svg>`;

function uiIcon(name) {
  const paths = {
    arrow: '<path d="M4 12h15m-6-6 6 6-6 6"/>',
    clock: '<circle cx="12" cy="12" r="8"/><path d="M12 7v5l3 2"/>',
    chat: '<path d="M20 11.5a7.5 7.5 0 0 1-7.5 7.5H5l-3 3V12a8 8 0 0 1 16-1"/><path d="M7 10h6m-6 4h9"/>',
    leaf: '<path d="M5 18C0 6 13 3 21 3c0 11-4 17-12 16M4 21 15 10"/>',
    heart: '<path d="M20 5c-3-3-7-1-8 1-1-2-5-4-8-1-4 4 1 9 8 15 7-6 12-11 8-15Z"/>',
  };
  return `<svg class="ui-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${paths[name] || paths.leaf}</svg>`;
}

function modeToggle() {
  return `<div class="mode-toggle" role="group" aria-label="演示模式">
    <span>演示</span>
    <button type="button" class="${s.mode === 'new' ? 'on' : ''}" data-a="mode-new">新客</button>
    <button type="button" class="${s.mode === 'returning' ? 'on' : ''}" data-a="mode-returning">老客</button>
  </div>`;
}

/* ——— Chrome ——— */
function chrome(activeId) {
  if (s.mode === 'returning') return '';
  const nav = CHAPTERS.map((c) => {
    const on = c.id === activeId ? ' on' : '';
    return `<button type="button" class="${on.trim()}" data-a="goto" data-page="${c.id}">${c.label}</button>`;
  }).join('');
  return `<header class="chrome">
    <div class="brand-lockup">
      <span class="mark mark-sm" aria-hidden="true"></span>
      智遇 <small>SAGEMEET</small>
    </div>
    <nav class="chapter-nav" aria-label="章节">${nav}</nav>
    <div class="chrome-right">
      <button type="button" class="cap" data-a="friends">好友 ${s.active.length}/10</button>
    </div>
  </header>`;
}

const RETURNING_TABS = [
  ['xiaozhi', '✦', '小知'],
  ['chat', '◎', '聊天'],
  ['recommend', '○', '遇见'],
  ['jingli', '◇', '经历'],
];

function tabbar() {
  if (s.mode !== 'returning') return '';
  return `<nav class="tabbar" aria-label="主站导航">
    ${RETURNING_TABS.map(([id, ico, label]) =>
      `<button type="button" class="${s.tab === id ? 'on' : ''}" data-a="tab" data-tab="${id}">
        <span class="tab-ico">${ico}</span>${label}
      </button>`
    ).join('')}
  </nav>`;
}

function returningChrome() {
  if (s.mode !== 'returning' || s.page === 0) return '';
  const initial = (who()[0] || '我');
  const nav = RETURNING_TABS.map(([id, , label]) =>
    `<button type="button" class="${s.tab === id ? 'on' : ''}" data-a="tab" data-tab="${id}">${label}</button>`
  ).join('');
  return `<header class="chrome returning-chrome" aria-label="顶栏">
    <div class="brand-lockup">
      <span class="mark mark-sm" aria-hidden="true"></span>
      智遇 <small>SAGEMEET</small>
    </div>
    <nav class="chapter-nav returning-topnav" aria-label="主站导航">${nav}</nav>
    <div class="chrome-right">
      <button type="button" class="cap me-entry" data-a="me" aria-label="我的账号">
        <span class="me-avatar" aria-hidden="true">${initial}</span>我
      </button>
    </div>
  </header>`;
}

function wrap(body, chapterId) {
  const pad = s.mode === 'returning' ? ' returning-pad' : '';
  return modeToggle() +
    (s.mode === 'returning' ? returningChrome() : (chapterId ? chrome(chapterId) : '')) +
    `<main class="${pad.trim()}">${body}</main>` +
    tabbar() +
    (s.callPhase ? callUI() : '') +
    (s.modal && !s.callPhase ? modal() : '');
}

/* ——— Splash ——— */
function splash() {
  return wrap(`<div class="welcome-page">
    <header class="welcome-header">
      <a class="brand-lockup" href="#" aria-label="智遇首页">${BRAND_LOGO}智遇 <small>SAGEMEET</small></a>
      <nav class="welcome-nav" aria-label="了解智遇"><a href="#how-it-works">怎样遇见</a><button type="button" data-a="mode-returning">回到我的树洞 ${uiIcon('arrow')}</button></nav>
    </header>
    <section class="welcome-hero" aria-labelledby="welcome-title">
      <div class="welcome-copy">
        <h1 id="welcome-title">用真实的人生经历，<br>遇见<span>同频的你。</span></h1>
        <p class="welcome-intro">先聊经历，再遇见人。<br>和小知聊聊天，让每一次靠近，<br class="mobile-break">都从被理解开始。</p>
        <button type="button" class="btn welcome-cta" data-a="start">和小知聊聊 ${uiIcon('arrow')}</button>
        <p class="welcome-note">${uiIcon('clock')} 大约 8 分钟，从一个小故事开始</p>
        <div class="welcome-detail"><span class="detail-line"></span> 小知 · 聊天 · 遇见 · 经历</div>
      </div>
      <div class="welcome-art">
        <div class="welcome-orbit" aria-hidden="true"></div>
        <div class="sf-bg"><img class="welcome-mascot" src="assets/mascot/xiaozhi.jpg" alt="抱着爱心的小知玩偶" width="900" height="900"></div>
        <div class="welcome-dialogue"><span class="dialogue-dot" aria-hidden="true"></span><span>你好呀，我是小知<small>你的倾听伙伴</small></span></div>
        <img class="welcome-garden" src="assets/garden/botanical-garden.webp" alt="" width="1400" height="934" aria-hidden="true">
        <div class="welcome-caption">慢慢说，我在听。${uiIcon('heart')}</div>
      </div>
    </section>
    <section class="welcome-journey" id="how-it-works" aria-labelledby="journey-title">
      <div class="journey-heading"><h2 id="journey-title">让相遇，自然发生。</h2><p>从认识自己，到认识聊得来的人。</p></div>
      <ol class="journey-steps">
        <li><span class="journey-icon lavender">${uiIcon('chat')}</span><div><h3>先和小知聊一聊</h3><p>从日常和经历里，慢慢认识自己。</p></div></li>
        <li><span class="journey-icon sage">${uiIcon('leaf')}</span><div><h3>看见独一无二的你</h3><p>整理你的标签，读一封个人分析信。</p></div></li>
        <li><span class="journey-icon peach">${uiIcon('heart')}</span><div><h3>遇见，慢慢熟悉</h3><p>从共同点开场，让关系慢慢生长。</p></div></li>
      </ol>
    </section>
    <footer class="welcome-footer"><span>智遇 · SAGEMEET</span><span>先聊经历，再遇见人</span><small>交互演示 · 内容为示例</small></footer>
  </div>`, 0);
}

/* Splash video: on desktop the cursor picks the frame whose recorded pupils
   point at it; on mobile the clip simply loops. Rows are [angle, time] measured
   from the clip's first eye orbit, so the mapping is deliberately non-linear. */
const GAZE_FRAMES = [
  [0.037186, 2.54167], [0.130722, 2.58333], [0.234912, 2.625], [0.321399, 2.66667],
  [0.419378, 2.70833], [0.493296, 2.75], [0.597784, 2.79167], [0.763067, 2.83333],
  [0.778708, 2.875], [0.878749, 2.91667], [0.993308, 2.95833], [1.262791, 3.0],
  [1.388902, 3.04167], [1.466609, 0.25], [1.473318, 0.29167], [1.520011, 3.08333],
  [1.53824, 0.33333], [1.6056, 0.375], [1.640696, 3.125], [1.691747, 0.41667],
  [1.779194, 0.45833], [1.869867, 0.5], [1.984485, 0.54167], [2.07265, 0.58333],
  [2.183915, 0.625], [2.267155, 0.66667], [2.36138, 0.70833], [2.44749, 0.75],
  [2.517676, 0.79167], [2.605329, 0.83333], [2.670889, 0.875], [2.809991, 0.91667],
  [2.918365, 0.95833], [3.134177, 1.0], [3.240289, 1.04167], [3.35949, 1.08333],
  [3.464119, 1.125], [3.549317, 1.16667], [3.663539, 1.20833], [3.78152, 1.25],
  [3.878742, 1.29167], [3.989446, 1.33333], [4.066996, 1.375], [4.225574, 1.45833],
  [4.260255, 1.41667], [4.276468, 1.5], [4.404025, 1.54167], [4.487075, 1.58333],
  [4.552949, 1.625], [4.628837, 1.66667], [4.701131, 1.70833], [4.773675, 1.75],
  [4.833089, 1.79167], [4.894145, 1.83333], [4.962593, 1.875], [5.028737, 1.91667],
  [5.090028, 1.95833], [5.212041, 2.0], [5.28302, 2.04167], [5.349352, 2.08333],
  [5.412121, 2.125], [5.473636, 2.16667], [5.573871, 2.20833], [5.656364, 2.25],
  [5.759153, 2.29167], [5.85261, 2.33333], [5.938647, 2.375], [6.048453, 2.41667],
  [6.153327, 2.45833], [6.222603, 2.5],
];
const TAU = Math.PI * 2;
let unmountSplashVideo = null;

function timeForAngle(angle) {
  const target = (angle % TAU + TAU) % TAU;
  let nearestTime = GAZE_FRAMES[0][1];
  let nearestDistance = Infinity;
  for (const [sampleAngle, time] of GAZE_FRAMES) {
    const difference = Math.abs(target - sampleAngle);
    const distance = Math.min(difference, TAU - difference);
    if (distance < nearestDistance) {
      nearestDistance = distance;
      nearestTime = time;
    }
  }
  return nearestTime + 1 / 240;
}

function mountSplashVideo(video) {
  let frame = 0;
  let desiredTime = 0;
  let pointer = null;
  let disposed = false;
  const mobile = window.matchMedia('(max-width: 700px)');
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');

  const seek = () => {
    frame = 0;
    if (disposed || mobile.matches || video.readyState < 2 || video.seeking) return;
    if (Math.abs(video.currentTime - desiredTime) > 1 / 48) {
      video.currentTime = Math.min(desiredTime, video.duration - 1 / 24);
    }
  };
  const schedule = () => {
    if (!frame) frame = requestAnimationFrame(seek);
  };
  const updateTarget = () => {
    if (mobile.matches || !pointer) return;
    const rect = video.getBoundingClientRect();
    const scale = Math.max(rect.width / 1920, rect.height / 1080);
    // eye midpoint (948,418) in the 1920×1080 source, mapped through object-fit: cover
    const eyeX = rect.left + rect.width / 2 + (948 - 960) * scale;
    const eyeY = rect.top + rect.height / 2 + (418 - 540) * scale;
    const dx = pointer.x - eyeX;
    const dy = pointer.y - eyeY;
    // angles are unstable right between the eyes
    if (Math.hypot(dx, dy) > 8) {
      desiredTime = timeForAngle(Math.atan2(dy, dx));
      schedule();
    }
  };
  const move = (event) => {
    pointer = { x: event.clientX, y: event.clientY };
    updateTarget();
  };
  const ready = () => {
    video.loop = mobile.matches;
    if (mobile.matches && !reducedMotion.matches) {
      video.play().catch(() => { /* keep the current frame if autoplay is blocked */ });
    } else {
      video.pause();
      if (!mobile.matches) { updateTarget(); schedule(); }
    }
  };
  // While a frame decodes, keep only the latest target; seeked applies it.
  video.addEventListener('seeked', schedule);
  video.addEventListener('loadeddata', ready);
  mobile.addEventListener('change', ready);
  reducedMotion.addEventListener('change', ready);
  window.addEventListener('pointermove', move, { passive: true });
  window.addEventListener('resize', updateTarget);
  window.addEventListener('scroll', updateTarget, { passive: true });
  if (video.readyState >= 2) ready();

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    video.removeEventListener('seeked', schedule);
    video.removeEventListener('loadeddata', ready);
    mobile.removeEventListener('change', ready);
    reducedMotion.removeEventListener('change', ready);
    window.removeEventListener('pointermove', move);
    window.removeEventListener('resize', updateTarget);
    window.removeEventListener('scroll', updateTarget);
  };
}

/* ——— Onboarding ——— */
function onboarding() {
  /* every chip tap re-renders; only animate when first arriving on this page */
  const anim = document.querySelector('.onboard-shell') ? '' : ' fade-up';
  const done = [s.gender, s.age, s.mood].filter(Boolean).length;
  return wrap(
    `<section class="onboard-shell${anim}">
      <header class="onboard-head">
        <p class="eyebrow">基础信息 · 已选 ${done} / 3</p>
        <h1>先简单认识一下你</h1>
        <p class="lede">三个小问题，选最接近的就好，之后都可以改。</p>
      </header>
      <div class="card-grid">
        <section class="profile-card panel">
          <h2>你的性别是？</h2>
          <p class="meta">选一个即可，之后可以改。</p>
          <div class="chips seg">${GENDERS.map((x) =>
            `<button type="button" class="chip ${s.gender === x ? 'selected' : ''}" data-gender="${x}">${x}</button>`
          ).join('')}</div>
        </section>
        <section class="profile-card panel">
          <h2>你的年龄段</h2>
          <p class="meta">选一个最接近的就好。</p>
          <div class="chips seg">${AGES.map((x) =>
            `<button type="button" class="chip ${s.age === x ? 'selected' : ''}" data-age="${x}">${x}</button>`
          ).join('')}</div>
        </section>
        <section class="profile-card panel span-all">
          <h2>最近的你，更像哪一种状态？</h2>
          <p class="meta">选一个最接近的，没有对错。</p>
          <div class="moods">${MOODS.map(([title, sub]) =>
            `<button type="button" class="option ${s.mood === title ? 'selected' : ''}" data-mood="${title}">
              <span class="radio">${s.mood === title ? '✓' : ''}</span>
              <span><b>${title}</b><small>${sub}</small></span>
            </button>`
          ).join('')}</div>
        </section>
      </div>
      <div class="page-cta">
        ${btn('‹ 上一步', 'oback', 'secondary')}
        ${btn('去和 Agent 聊聊', 'onext')}
      </div>
    </section>`,
    1
  );
}


/* ——— Treehole (小知 home) ——— */
const ENTRY_KIND = {
  diary: { label: '小日记', prompt: '写下一则只属于你的小日记…', opener: '想把今天写进日记里吗？我在听。' },
  daily: { label: '日常', prompt: '记一件今天的小事…', opener: '随便聊聊今天发生的一件小事吧。' },
  secret: { label: '小秘密', prompt: '说一个还没跟别人讲过的小秘密…', opener: '这里很安全。你想放一个小秘密吗？' },
};

function entryKindLabel(k) {
  return (ENTRY_KIND[k] && ENTRY_KIND[k].label) || '随笔';
}

function treeholeHome() {
  const name = who();
  const entries = (s.entries || []).slice().reverse();
  const actions = [
    ['diary', '写小日记', '把心情慢慢写下来'],
    ['daily', '记一件日常', '今天的小事也值得留住'],
    ['secret', '说一个小秘密', '只存在树洞里，等你愿意再分享'],
    ['chat', '继续和树洞聊聊', '打电话 / 语音 / 打字都行'],
  ];
  return wrap(
    `<section class="treehole fade-up">
      <header class="treehole-head">
        <p class="eyebrow">小知 · 你的树洞</p>
        <h1>${name}，把心里话放这里</h1>
        <p class="lede">日记、日常、小秘密都会被小知记得，帮你更准地被理解；等亲密度够了，再挑选一段去交换。</p>
      </header>
      <div class="treehole-actions moods">
        ${actions.map(([id, title, sub]) =>
          `<button type="button" class="option" data-a="treehole-${id}">
            <span class="radio" aria-hidden="true"></span>
            <span><b>${title}</b><small>${sub}</small></span>
          </button>`
        ).join('')}
      </div>
      <section class="treehole-list panel">
        <div class="treehole-list-head">
          <h2>内心世界</h2>
          <span class="meta">${entries.length} 则</span>
        </div>
        ${entries.length
          ? `<ul class="treehole-entries">${entries.map((e) =>
              `<li>
                <span class="entry-kind">${entryKindLabel(e.kind)}</span>
                <div>
                  <b>${e.title}</b>
                  <p>${e.body}</p>
                  <small class="meta">${e.at}</small>
                </div>
              </li>`
            ).join('')}</ul>`
          : `<p class="meta treehole-empty">还没有记录。写一则日记，或跟小知随便聊聊吧。</p>`}
      </section>
    </section>`,
    2
  );
}

function treeholeCompose() {
  const kind = s.composeKind || 'diary';
  const meta = ENTRY_KIND[kind] || ENTRY_KIND.diary;
  return wrap(
    `<section class="treehole-compose fade-up">
      <header class="treehole-head">
        <button type="button" class="link treehole-back" data-a="treehole-home">‹ 返回树洞</button>
        <p class="eyebrow">小知 · ${meta.label}</p>
        <h1>${meta.label === '小秘密' ? '说一个小秘密' : meta.label === '日常' ? '记一件日常' : '写一则小日记'}</h1>
        <p class="lede">写好后会收进你的内心世界，小知会帮你记得。</p>
      </header>
      <form id="treehole-compose" class="treehole-form panel">
        <label class="field-label" for="th-title">标题（可选）</label>
        <input class="field" id="th-title" name="title" maxlength="40" placeholder="给它起个名字…" autocomplete="off">
        <label class="field-label" for="th-body">内容</label>
        <textarea class="field" id="th-body" name="body" rows="6" required placeholder="${meta.prompt}"></textarea>
        <div class="treehole-form-actions">
          <button type="button" class="btn secondary" data-a="treehole-home">取消</button>
          <button type="submit" class="btn">收进树洞</button>
        </div>
      </form>
      <p class="meta treehole-alt">也可以 ${'<button type="button" class="link" data-a="treehole-chat">直接和小知聊聊这件事 →</button>'}</p>
    </section>`,
    2
  );
}

/* ——— Agent ——— */
function agent() {
  const m = xiaozhiThread();
  const sideMeta = s.mode === 'returning'
    ? '你的小树洞 · 随笔与秘密会记在这里'
    : '你的倾听伙伴 · 已聊 12 分钟';
  const sideCta = s.mode === 'returning'
    ? `<button type="button" class="btn" data-a="treehole-home">回树洞首页</button>`
    : btn('整理我的标签', 'tags');
  return wrap(
    `<section class="layout fade-up">
      <section class="conversation panel">
        <div class="friendhead">
          <span class="mark mark-sm" aria-hidden="true"></span>
          <div>
            <b>小知</b>
            <span class="meta">${sideMeta}</span>
          </div>
        </div>
        <div class="messages">${m.map((x) => `<p class="bubble ${x.from}">${x.text}</p>`).join('')}</div>
        <div class="suggest">${['我其实两种都想要', '想聊聊最近的困扰', '换个轻松的话题']
          .map((x) => `<button type="button" data-send="${x}">${x}</button>`).join('')}</div>
        <form id="chat">
          <button type="button" aria-label="更多">＋</button>
          <input name="message" placeholder="想到什么就说什么…" autocomplete="off">
          <button type="button" data-a="voice" aria-label="语音">${ICON_MIC}</button>
          <button type="button" class="composer-call" data-a="call">
            <span class="composer-call-ico">${ICON_CALL}</span>通话
          </button>
          <button type="submit" class="composer-send">${ICON_SEND}发送</button>
        </form>
      </section>
      <aside class="side panel">
        <p class="field-label">小知听见的关键词</p>
        <div class="tag-row">${['独处充电', '山野', '真实', '慢热'].map(tag).join('')}</div>
        <div class="side-foot">${sideCta}</div>
      </aside>
    </section>`,
    2
  );
}

/* ——— Tags ——— */
function tags() {
  return wrap(
    `<section class="content fade-up">
      <p class="eyebrow">根据你的表达生成</p>
      <h1>这些是你口中的自己</h1>
      <p class="lede">可以修改、删除或补充。标签会进入后面的分析信。</p>
      <div class="taggrid">${s.tags
        .map(
          (x, i) =>
            `<article>
              <b>#${x[0]}</b>
              <p>「${x[1]}」</p>
              <button type="button" data-edit="${i}" aria-label="编辑">✎</button>
              <button type="button" data-del="${i}" aria-label="删除">×</button>
            </article>`
        )
        .join('')}
        <form id="newtag">
          <input name="tag" placeholder="添加一个标签" autocomplete="off">
          <button type="submit" aria-label="添加">＋</button>
        </form>
      </div>
      <div class="page-cta">${btn('确认标签，生成我的分析', 'next')}</div>
    </section>`,
    3
  );
}

/* ——— Report/* ——— Report ——— */
function report() {
  const name = who();
  return wrap(
    `<article class="report-letter fade-up">
      <header class="report-open" id="report-letter">
        <p class="kicker eyebrow">基于你的表达整理 · 不是诊断</p>
        <h1>${name}的个人画像</h1>
        <p class="lede">一个在安静里积蓄温度的人。你重视真诚，也愿意把靠近的节奏交给时间。</p>
        <div class="report-tags">${s.tags.map((x) => tag(x[0])).join('')}</div>
      </header>
      <div class="card-grid">
        <section class="profile-card panel report-card">
          <h2 id="report-values">你重视什么<span class="paren">(01)</span></h2>
          <div class="values-typo">
            <b>真实坦诚</b><b>内心自由</b><b>深度连接</b><b>自然与身体</b><b>新鲜体验</b>
          </div>
          <p class="pull-quote">对你来说，一段关系里最珍贵的，可能是可以放心做自己的感觉。</p>
          <p>这些词不是分数，而是你反复提到的主题。越靠前的，越像你说话时会自然停住的地方。</p>
          <p class="footnote">¹ 由对话关键词与兴趣选择整理，演示数据。</p>
        </section>
        <section class="profile-card panel report-card">
          <h2 id="report-connect">你如何与人建立连接<span class="paren">(02)</span></h2>
          <p>你像是慢慢升温的人。一开始话不多，但一旦觉得安全，会给出很多真诚和耐心。</p>
          <p>初识时你观察多于表达；熟悉之后，你会记得对方随口说过的细节，并把它们变成下一次见面的温暖。</p>
          <p class="footnote">² 连接用文字呈现，而非仪表盘。</p>
        </section>
        <section class="profile-card panel report-card">
          <h2>你可能欣赏怎样的人<span class="paren">(03)</span></h2>
          <ul class="num-list">
            <li><span class="big">一</span><span>愿意认真听你说完一句话</span></li>
            <li><span class="big">二</span><span>有自己热爱的小事</span></li>
            <li><span class="big">三</span><span>能一起安静，也能一起笑</span></li>
          </ul>
          <p class="footnote">³ 欣赏不等于筛选标准，只是方向。</p>
        </section>
        <section class="profile-card panel report-card">
          <h2 id="report-energy">你的能量从哪里来<span class="paren">(04)</span></h2>
          <div class="energy-cloud">
            <b>山顶的风</b><span>一个人的周末</span><b>好的对话</b>
            <span>旧书店</span><span>热汤</span><b>被记住的细节</b>
          </div>
          <p>这些是你亲口说出的生活片段。它们比标签更接近真实的你。</p>
          <p class="footnote">⁴ 能量来源会随季节变化。</p>
        </section>
      </div>
      <div class="page-cta">${btn('去遇见可能懂你的人', 'next')}</div>
    </article>`,
    4
  );
}

/* ——— Match with virtual + heat + polaroid ——— */
function matchFeature(p, idx) {
  const heat = heatOf(idx);
  const unlocked = isUnlocked(idx);
  const heatPct = Math.min(100, Math.round((heat / HEAT_UNLOCK) * 100));
  const score = matchPctOf(idx);
  const shared = sharedTagsFor(p);
  const why = '你们都重视真诚、慢慢熟悉，也期待舒服自然的关系。';
  const sharedChips = shared.map((t) => `<i class="tag shared-tag">#${t}</i>`).join('');
  return `
    <div class="match-feature">
      <article class="photo-card">
        ${portraitFrame(p)}
        <div class="scrim"></div>
        <div class="meta-top">
          <div class="meta-stack">
            <span class="pill">${p[2]} · ${p[1]} 岁</span>
            <span class="match-pct" aria-label="匹配度 ${score}%">
              <em>匹配度</em>
              <b>${score}%</b>
            </span>
          </div>
        </div>
        <div class="heat-tile" title="聊天热度">
          <div class="heat-rings" aria-hidden="true"><span></span><span></span><span></span></div>
          <div class="heat-num">${heat}</div>
          <div class="heat-label">热度</div>
          <div class="heat-bar"><i style="width:${heatPct}%"></i></div>
        </div>
        <div class="polaroid ${unlocked ? 'unlocked' : 'locked'}">
          <div class="polaroid-frame">
            <img src="${photo(p, 320)}" alt="${p[0]} 真实照片"
              onerror="this.style.background='var(--blush-soft)'">
            ${unlocked ? '' : `<div class="lock-cap">🔒<br>聊 ${HEAT_UNLOCK} 句<br>解锁真照</div>`}
          </div>
          <div class="polaroid-label">${unlocked ? '已解锁' : '真实照片'}</div>
        </div>
        <div class="hero-copy">
          <h2>${p[0]}</h2>
          <p>${why}</p>
          <div class="hero-shared">
            <span class="hero-shared-label">共同标签</span>
            <div class="hero-shared-tags">${sharedChips}</div>
          </div>
        </div>
      </article>
      <aside class="match-note panel">
        <p class="note-label">纸笺 · 为什么遇见</p>
        <div class="note-score">
          <span class="note-score-label">匹配度</span>
          <span class="note-score-num">${score}<small>%</small></span>
        </div>
        <h3>${p[0]}</h3>
        <p>${p[3]}</p>
        <div class="shared-block">
          <p class="shared-kicker">可以这样开场</p>
          <p class="shared-hint">共同标签 · 你们已经有话题了</p>
          <div class="shared-tags">${sharedChips}</div>
        </div>
        <p>${why}</p>
        <p class="meta">${unlocked
          ? '✦ 真实照片已解锁 — 你们聊得够热了'
          : `虚拟形象相遇中 · 再聊 ${Math.max(0, HEAT_UNLOCK - heat)} 句可解锁真照`}</p>
        <div class="note-actions">
          ${btn(s.active.length >= 10 ? '管理好友' : '想认识', s.active.length >= 10 ? 'friends' : 'bind')}
          <div class="note-links">${link('资料', 'profile')}${link('换一个', 'another')}</div>
        </div>
      </aside>
    </div>`;
}

function match() {
  const full = s.active.length >= 10;
  const p = people[s.p % people.length];
  return wrap(
    `<section class="match-stage fade-up">
      <div class="match-head">
        <div>
          <h1>遇见同频的人</h1>
          <p class="lede">轻量发现 · 匹配度与共同标签帮你开场；先看见虚拟形象，聊到热了再解锁真照。</p>
        </div>
        <button type="button" class="cap link" data-a="friends">♥ ${s.active.length}/10</button>
      </div>
      ${full ? `<p class="notice">名额已满。${link('管理好友', 'friends')}</p>` : ''}
      ${matchFeature(p, s.p)}
      <section class="profile-card panel report-card match-plane">
        <h2>接下来，也许你会想见他们</h2>
        ${planeRow(people.slice(0, 8).map((x, i) => planeWindow(x, i)).join(''))}
      </section>
    </section>`,
    5
  );
}

/* ——— Friends ——— */
function friends() {
  return wrap(
    `<section class="content friends-page fade-up">
      <div class="friends-heading">
        <div>
          <h1>我的知音好友</h1>
          <p class="lede">最多同时绑定 10 位。解除绑定会释放名额。</p>
        </div>
        <div class="capacity meta">已绑定 <b>${s.active.length} / 10</b></div>
      </div>
      <div class="friend-list">${Array.from({ length: 10 }, (_, i) => {
        const idx = s.active[i];
        const p = idx === undefined ? null : people[idx % people.length];
        const unlocked = p ? isUnlocked(idx) : false;
        return `<article class="friend">
          ${p ? avatar(p, 44) : '<span class="empty-slot">＋</span>'}
          <span class="friend-copy">
            <b>${p ? p[0] : '空余名额'}</b>
            <small class="meta">${p ? (unlocked ? '真照已解锁 · ' : '虚拟形象 · ') + p[4][0] + ' · 热度 ' + heatOf(idx) : '可以再认识一位朋友'}</small>
          </span>
          ${p
            ? `<button type="button" class="link" data-unbind="${i}">解除</button>`
            : '<span class="meta">未绑定</span>'}
        </article>`;
      }).join('')}</div>
      <p class="meta friends-footnote">解除后可以重新认识对方；演示版不会发送通知。</p>
      <div class="page-cta">${btn(s.mode === 'returning' ? '回到遇见' : '继续遇见', s.mode === 'returning' ? 'tab-recommend' : 'back-match')}</div>
    </section>`,
    5
  );
}


function chatPage() {
  ensureActiveFriend();
  if (!s.active.length) {
    return wrap(
      `<section class="content fade-up">
        <p class="eyebrow">聊天</p>
        <h1>还没有知音好友</h1>
        <p class="lede">去「遇见」里认识一位，绑定后会出现在这里。</p>
        <div class="page-cta">${btn(s.mode === 'returning' ? '去遇见' : '去遇见', s.mode === 'returning' ? 'tab-recommend' : 'back-match')}</div>
      </section>`,
      6
    );
  }
  const fi = s.friend % people.length;
  const p = people[fi];
  const heat = heatOf(fi);
  const unlocked = isUnlocked(fi);
  const u = [
    ['新话题', '你人生中最难忘的一次日出？', 1],
    ['共同标签', '都在找一个能说真话的地方', 3],
    ['真实照片', '对方的真实照片已解锁', HEAT_UNLOCK],
  ];
  const msgs = threadOf(fi);
  const friendRail = s.active.map((idx) => {
    const person = people[idx % people.length];
    const on = !s.xzChat && idx === s.friend;
    const h = heatOf(idx);
    const open = isUnlocked(idx);
    const preview = (threadOf(idx).slice().reverse().find((m) => m.from !== 'me') || threadOf(idx).slice(-1)[0] || {}).text || '';
    const short = preview.length > 28 ? preview.slice(0, 28) + '…' : preview;
    return `<button type="button" class="chat-friend ${on ? 'is-active' : ''}" data-open-friend="${idx}" aria-current="${on ? 'true' : 'false'}">
      ${avatar(person, 44)}
      <span class="chat-friend-copy">
        <b>${person[0]}</b>
        <small class="meta">${open ? '✦ 真照' : '虚拟 · 热度 ' + h}/${HEAT_UNLOCK} · ${short}</small>
      </span>
      ${on ? '<span class="chat-friend-dot" aria-hidden="true"></span>' : ''}
    </button>`;
  }).join('');
  const xzLast = (xiaozhiThread().slice().reverse().find((m) => m.from === 'agent') || {}).text || '';
  const xzShort = xzLast.length > 28 ? xzLast.slice(0, 28) + '…' : xzLast;
  const strip = `<div class="chat-friend-strip" aria-label="切换会话">
    <button type="button" class="chat-pill ${s.xzChat ? 'is-active' : ''}" data-a="chat-xiaozhi"><span class="mark mark-sm" aria-hidden="true"></span><span>小知</span></button>
    ${s.active.map((idx) => {
      const person = people[idx % people.length];
      const on = !s.xzChat && idx === s.friend;
      return `<button type="button" class="chat-pill ${on ? 'is-active' : ''}" data-open-friend="${idx}">${avatar(person, 28)}<span>${person[0]}</span></button>`;
    }).join('')}</div>`;

  return wrap(
    `<section class="chat-shell fade-up">
      <aside class="chat-rail panel" aria-label="好友列表">
        <div class="chat-rail-head">
          <div>
            <p class="eyebrow">知音会话</p>
            <h2 class="chat-rail-title">聊天</h2>
          </div>
          <span class="capacity meta">♥ ${s.active.length}/10</span>
        </div>
        <div class="chat-friend-list">
          <button type="button" class="chat-friend chat-friend-pin ${s.xzChat ? 'is-active' : ''}" data-a="chat-xiaozhi" aria-current="${s.xzChat ? 'true' : 'false'}">
            <span class="mark mark-sm" aria-hidden="true"></span>
            <span class="chat-friend-copy">
              <b>小知</b>
              <small class="meta">${xzShort}</small>
            </span>
            <span class="chat-pin-badge" aria-hidden="true">置顶</span>
          </button>
          ${friendRail}
        </div>
        <div class="chat-rail-foot">${link('好友管理', 'friends')}</div>
      </aside>
      ${s.xzChat ? xzConversation(strip) : `<section class="conversation panel">
        <div class="friendhead">
          ${avatar(p, 44)}
          <div>
            <b>${p[0]}</b>
            <small class="meta">${unlocked ? '✦ 真照已解锁' : '虚拟形象 · 热度 ' + heat + '/' + HEAT_UNLOCK}</small>
          </div>
          <button type="button" class="link friendhead-action" data-a="friends">管理</button>
        </div>
        ${strip}
        <div class="messages">
          ${msgs.map((x) => `<p class="bubble ${x.from === 'them' ? 'them' : x.from}">${x.text}</p>`).join('')}
          ${u
            .filter((x) => heat >= x[2] || s.unlocks.includes(x[2]))
            .map(
              (x) =>
                `<article class="unlock"><b>解锁：${x[0]}</b><button type="button">${x[1]}</button></article>`
            )
            .join('')}
        </div>
        <form id="chat">
          <button type="button" aria-label="更多">＋</button>
          <input name="message" placeholder="和 ${p[0]} 说点什么…" autocomplete="off">
          <button type="button" data-a="voice" aria-label="语音">${ICON_MIC}</button>
          <button type="submit" class="composer-send">${ICON_SEND}发送</button>
        </form>
      </section>
      <aside class="side panel chat-side">
        <div class="side-head">
          ${avatar(p, 56)}
          <h2>${p[0]}</h2>
        </div>
        <div class="heat-card">
          <div class="heat-rings heat-card-ring" aria-hidden="true">
            <span></span><span></span><span></span>
            <div class="heat-card-num">${heat}</div>
          </div>
          <div class="heat-card-copy">
            <div class="heat-card-label">聊天热度</div>
            <div class="meta">${unlocked ? '真实照片已解锁' : '再聊 ' + Math.max(0, HEAT_UNLOCK - heat) + ' 句解锁真照'}</div>
            <div class="heat-bar"><i style="width:${Math.min(100, (heat / HEAT_UNLOCK) * 100)}%"></i></div>
          </div>
        </div>
        ${unlocked ? `<div class="polaroid unlocked polaroid-inline">
          <div class="polaroid-frame"><img src="${photo(p, 320)}" alt=""></div>
          <div class="polaroid-label">真实照片</div>
        </div>` : ''}
        <p class="field-label">你们的共同点</p>
        <div class="tag-row">${p[4].map(tag).join('')}</div>
        <p class="field-label">匹配度</p>
        <div class="match-badge">${matchPctOf(fi)}% 同频</div>
        <div class="side-foot">${btn('好友管理', 'friends')}</div>
      </aside>`}
    </section>`,
    6
  );
}

function xzConversation(strip) {
  const toHome = s.mode === 'returning'
    ? '<button type="button" class="link friendhead-action" data-a="tab" data-tab="xiaozhi">树洞首页</button>'
    : '';
  return `<section class="conversation panel">
      <div class="friendhead">
        <span class="mark mark-sm" aria-hidden="true"></span>
        <div>
          <b>小知</b>
          <small class="meta">你的倾听伙伴 · 一直在</small>
        </div>
        ${toHome}
      </div>
      ${strip}
      <div class="messages">${xiaozhiThread().map((x) => `<p class="bubble ${x.from}">${x.text}</p>`).join('')}</div>
      <div class="suggest">${['今天有点累', '想聊聊刚认识的人', '换个轻松的话题']
        .map((x) => `<button type="button" data-send="${x}">${x}</button>`).join('')}</div>
      <form id="chat">
        <button type="button" aria-label="更多">＋</button>
        <input name="message" placeholder="和小知说点什么…" autocomplete="off">
        <button type="button" data-a="voice" aria-label="语音">${ICON_MIC}</button>
        <button type="button" class="composer-call" data-a="call">
          <span class="composer-call-ico">${ICON_CALL}</span>通话
        </button>
        <button type="submit" class="composer-send">${ICON_SEND}发送</button>
      </form>
    </section>
    <aside class="side panel chat-side">
      <div class="side-head">
        <span class="mark" aria-hidden="true"></span>
        <h2>小知</h2>
      </div>
      <p class="field-label">小知听见的关键词</p>
      <div class="tag-row">${['独处充电', '山野', '真实', '慢热'].map(tag).join('')}</div>
      <p class="meta">你和好友聊天时的心情，也可以随时回来跟小知说。</p>
    </aside>`;
}

/* ——— Returning: 经历 ——— */
const JINGLI_INSIGHTS = [
  { t: '生活节奏', p: '周末更倾向山野与独处，工作日偏安静收束。小知从你的日记里读到「山顶的风」。', detail: '你提到的「山顶的风」「一个人的周末」反复出现。工作日你更像把能量收起来，周末才愿意把空间打开。适合你的节奏不是天天热闹，而是有一块不被打扰的空白。' },
  { t: '连接方式', p: '慢热，但一旦信任建立会愿意深度交流；秘密里藏着「其实也想有人陪着看风景」。', detail: '初识时你观察多于表达；熟悉之后，你会记得对方随口说过的细节。你不是不需要陪伴，只是需要安全感先落地——然后再把真实的一面慢慢交出去。' },
  { t: '在意的事', p: '比起热闹，你更在意真诚与倾听；日常里常被一段旋律、一处小风景打动。', detail: '对话里你停得最久的词是真诚、倾听、被理解。外在热闹对你来说可以有，但不是必需；一段能让你放心说话的关系，比一桌热闹更值钱。' },
  { t: '能量来源', p: '独处充电后，再把真实的一面慢慢交给值得的人。', detail: '充电方式偏内向：山野、旧书店、好的对话、被记住的细节。你先把自己填满，再有余力靠近别人——这不是冷淡，是保护连接质量的方式。' },
  { t: '匹配线索', p: '看重同频的经历感，多于外在标签重合。', detail: '小知观察到：你更会被「我们也走过类似的路」打动，而不是标签清单对得整整齐齐。共同经历、相似节奏，会比表面兴趣重合更能打开你。' },
];

const JINGLI_TAG_POOL = [
  '独处充电', '说真话的人', '慢热但长情', '山野爱好者',
  '深度连接', '真实坦诚', '温柔', '好奇心',
  '自然爱好者', '倾听', '手作', '阅读',
  '表达', '松弛感', '认真生活', '细腻',
];

const JINGLI_GRID = [
  ['letter', 'report', '画像信', '开篇长信'],
  ['persona', 'detail', '人格侧写', '气质与倾向'],
  ['rhythm', 'report', '生活节奏', '作息与收束'],
  ['connect', 'report', '连接方式', '如何慢慢靠近'],
  ['values', 'report', '价值偏好', '在意与雷区'],
  ['full', 'report', '完整报告', '一次看全'],
];

const JINGLI_DETAILS = {
  persona: {
    title: '人格侧写',
    body: '演示：偏内敛、重真诚的「慢热观察者」。你习惯先感受再表达，安全感建立后会展现很高的忠诚与耐心。这不是测验分数，而是小知从你的日记与秘密里读到的气质轮廓。',
  },
};

function allJingliTags() {
  const fromUser = s.tags.map((x) => x[0]);
  const set = [];
  for (const t of [...fromUser, ...JINGLI_TAG_POOL, ...s.interests]) {
    if (t && !set.includes(t)) set.push(t);
  }
  return set;
}

function jingliHome() {
  const name = who();
  const genderBit = s.gender ? `${s.gender} · ` : '';
  const showTags = (s.matchTags && s.matchTags.length ? s.matchTags : s.tags.map((x) => x[0]));
  return wrap(
    `<section class="content fade-up">
      <p class="eyebrow">经历 · 越聊越具象的你</p>
      <h1>${name}的经历</h1>
      <p class="lede">小知把你写下的日记、秘密和聊天，收成一份越来越像你的画像。</p>

      <div class="card-grid">
      <div class="profile-card panel span-all">
        <h2>此刻的我</h2>
        <p class="meta">${genderBit}${s.mood} · ${s.age}</p>
        <p class="meta">点标签可编辑 · 勾选用于匹配 / 更侧重</p>
        <div class="chips">
          ${showTags.map((t) => {
            const focus = (s.focusTags || []).includes(t);
            return `<button type="button" class="chip ${focus ? 'interest selected' : 'selected'}" data-a="jingli-tags">${t}${focus ? ' · 侧重' : ''}</button>`;
          }).join('')}
          <button type="button" class="chip" data-a="jingli-tags">编辑标签</button>
        </div>
      </div>

      <div class="profile-card panel">
        <h2>小知读懂的你</h2>
        <p class="meta">来自日记 · 秘密 · 对话的总结 · 点开看详情</p>
        <div class="insight-list">
          ${JINGLI_INSIGHTS.map((x, i) =>
            `<article data-a="jingli-insight" data-insight="${i}" role="button" tabindex="0">
              <b>${x.t}</b>
              <p>${x.p}</p>
            </article>`
          ).join('')}
        </div>
      </div>

      <div class="profile-card panel">
        <h2>研究报告</h2>
        <p class="meta">金刚区入口 · 点一块进去看</p>
        <div class="jingli-grid">
          ${JINGLI_GRID.map(([id, kind, title, sub]) =>
            kind === 'report'
              ? `<button type="button" class="option" data-a="open-report" data-report="${id === 'rhythm' ? 'energy' : id}">
                  <b>${title}</b><small>${sub}</small>
                </button>`
              : `<button type="button" class="option" data-a="jingli-detail" data-detail="${id}">
                  <b>${title}</b><small>${sub}</small>
                </button>`
          ).join('')}
        </div>
      </div>
      </div>
    </section>`,
    0
  );
}

function jingliTags() {
  const all = allJingliTags();
  return wrap(
    `<section class="content fade-up">
      <button type="button" class="link treehole-back" data-a="jingli-home">‹ 返回经历</button>
      <p class="eyebrow">此刻的我 · 标签</p>
      <h1>选择用于匹配的标签</h1>
      <p class="lede">勾选你想用于匹配的标签；再点一次「更侧重」里的，表示更想被看到的一面。</p>

      <div class="card-grid">
      <div class="profile-card panel">
        <h2>用于匹配</h2>
        <p class="meta">至少选 1 个（演示）</p>
        <div class="chips">
          ${all.map((t) => {
            const on = (s.matchTags || []).includes(t);
            return `<button type="button" class="chip ${on ? 'selected' : ''}" data-a="toggle-match-tag" data-tag="${t}">${t}</button>`;
          }).join('')}
        </div>
        <p class="selected-count">已选 ${(s.matchTags || []).length} 个</p>
      </div>

      <div class="profile-card panel">
        <h2>更侧重</h2>
        <p class="meta">从已选匹配标签里再勾，匹配时优先露出</p>
        <div class="chips">
          ${(s.matchTags || []).length
            ? (s.matchTags || []).map((t) => {
                const on = (s.focusTags || []).includes(t);
                return `<button type="button" class="chip interest ${on ? 'selected' : ''}" data-a="toggle-focus-tag" data-tag="${t}">${t}</button>`;
              }).join('')
            : '<p class="meta">先在上面勾选用于匹配的标签</p>'}
        </div>
      </div>
      </div>

      <div class="page-cta">${btn('完成', 'jingli-home')}</div>
    </section>`,
    0
  );
}

function jingliInsight() {
  const x = JINGLI_INSIGHTS[s.jingliInsight] || JINGLI_INSIGHTS[0];
  return wrap(
    `<section class="content fade-up">
      <button type="button" class="link treehole-back" data-a="jingli-home">‹ 返回经历</button>
      <p class="eyebrow">小知读懂的你</p>
      <h1>${x.t}</h1>
      <div class="card-grid">
      <div class="profile-card panel">
        <p class="meta">摘要</p>
        <p class="card-text">${x.p}</p>
      </div>
      <div class="profile-card panel">
        <p class="meta">详情</p>
        <p class="card-text">${x.detail}</p>
      </div>
      </div>
      <div class="page-cta">${btn('返回经历', 'jingli-home', 'secondary')}</div>
    </section>`,
    0
  );
}

function jingliDetail() {
  const d = JINGLI_DETAILS[s.jingliDetail] || { title: '详情', body: '演示内容。' };
  return wrap(
    `<section class="content fade-up">
      <button type="button" class="link treehole-back" data-a="jingli-home">‹ 返回经历</button>
      <p class="eyebrow">研究报告</p>
      <h1>${d.title}</h1>
      <div class="profile-card panel">
        <p class="card-text">${d.body}</p>
      </div>
      <div class="page-cta">
        ${btn('看完整报告', 'open-report-full')}
        ${btn('返回经历', 'jingli-home', 'secondary')}
      </div>
    </section>`,
    0
  );
}

/* ——— Fake call ——— */
function fmtTime(sec) {
  const m = String(Math.floor(sec / 60)).padStart(2, '0');
  const ss = String(sec % 60).padStart(2, '0');
  return `${m}:${ss}`;
}

function callUI() {
  const agentPersona = {
    0: '小知', 1: '26', 2: '智遇', 3: '', 4: ['倾听'], 5: 4,
  };
  const phase = s.callPhase;
  const status =
    phase === 'connecting'
      ? `正在接通<em>.</em><em>.</em><em>.</em>`
      : '通话中';
  return `<div class="call-screen fade-up" role="dialog" aria-label="与小知通话">
    <div class="call-top">
      <p class="call-brand">SAGEMEET · 语音</p>
      <h2 class="call-name">小知</h2>
      <p class="call-status connecting-status">${status}</p>
      ${phase === 'active' ? `<p class="call-timer">${fmtTime(s.callSeconds)}</p>` : ''}
    </div>
    <div class="call-hero">
      <div class="call-rings" aria-hidden="true"><span></span><span></span><span></span></div>
      <div class="call-avatar ${phase === 'active' ? 'call-portrait-live' : ''}">${virtSVG(agentPersona, { bust: true })}</div>
    </div>
    <div class="call-controls">
      <button type="button" class="call-ctrl" data-a="call-mute" aria-label="静音"><span class="ico">🔇</span>静音</button>
      <button type="button" class="call-ctrl hang" data-a="hangup" aria-label="挂断"><span class="ico ico-hang">${ICON_PHONE}</span></button>
      <button type="button" class="call-ctrl" data-a="call-speaker" aria-label="免提"><span class="ico">🔊</span>免提</button>
    </div>
  </div>`;
}

function startCall() {
  stopCallTimer();
  s.callPhase = 'connecting';
  s.callSeconds = 0;
  s.modal = '';
  render();
  setTimeout(() => {
    if (s.callPhase !== 'connecting') return;
    s.callPhase = 'active';
    render();
    callTimer = setInterval(() => {
      s.callSeconds++;
      const el = document.querySelector('.call-timer');
      if (el) el.textContent = fmtTime(s.callSeconds);
      else render();
    }, 1000);
  }, 1800);
}

function stopCallTimer() {
  if (callTimer) {
    clearInterval(callTimer);
    callTimer = null;
  }
}

function endCall() {
  stopCallTimer();
  s.callPhase = '';
  s.callSeconds = 0;
}

function modal() {
  if (s.modal === 'me') {
    const name = who();
    return `<div class="overlay"><article class="modal">
      <button type="button" data-a="close" aria-label="关闭">×</button>
      <h2>我</h2>
      <p class="lede">账号与设置（轻量入口，演示）</p>
      <div class="inset-card">
        <div class="info-row"><p class="meta">昵称</p><b>${name}</b></div>
        <div class="info-row"><p class="meta">性别 · 年龄 · 状态</p><b>${s.gender || '未选'} · ${s.age} · ${s.mood}</b></div>
      </div>
      <div class="modal-actions">
        ${btn('关闭', 'close', 'wide')}
      </div>
    </article></div>`;
  }
  const title =
    s.modal === 'unbind'
      ? '解除这位好友的绑定？'
      : '个人资料';
  const body =
    s.modal === 'unbind'
      ? '解除后名额会释放，你之后仍可重新认识对方。'
      : '演示资料卡：虚拟形象相遇，聊到热度后解锁真实照片。';
  return `<div class="overlay"><article class="modal">
    <button type="button" data-a="close" aria-label="关闭">×</button>
    <h2>${title}</h2>
    <p class="lede">${body}</p>
    ${btn(s.modal === 'unbind' ? '确认解除' : '关闭', s.modal === 'unbind' ? 'confirm' : 'close')}
  </article></div>`;
}

function bumpHeat(friendIdx) {
  s.heatByFriend[friendIdx] = (s.heatByFriend[friendIdx] || 0) + 1;
  if (s.heatByFriend[friendIdx] >= HEAT_UNLOCK && !s.unlocks.includes('photo:' + friendIdx)) {
    s.unlocks.push('photo:' + friendIdx);
  }
}

function render() {
  if (s.mode === 'returning') {
    let body;
    if (s.page === 7) body = friends();
    else if (s.page === 0 && s.tab === undefined) body = splash();
    else if (s.tab === 'xiaozhi') {
      if (s.treeholeView === 'chat') body = agent();
      else if (s.treeholeView === 'compose') body = treeholeCompose();
      else body = treeholeHome();
    }
    else if (s.page === 4) body = report();
    else if (s.tab === 'chat' || s.page === 6) body = chatPage();
    else if (s.tab === 'jingli') {
      if (s.jingliView === 'tags') body = jingliTags();
      else if (s.jingliView === 'insight') body = jingliInsight();
      else if (s.jingliView === 'detail') body = jingliDetail();
      else body = jingliHome();
    }
    else body = match();
    app.innerHTML = body;
  } else {
    const pages = [splash, onboarding, agent, tags, report, match, chatPage, friends];
    app.innerHTML = pages[s.page]();
  }
  if (s.keepScroll) s.keepScroll = false;
  else window.scrollTo(0, 0);
  if (unmountSplashVideo) unmountSplashVideo();
  unmountSplashVideo = null;
  const splashVideo = app.querySelector('.sf-bg video');
  if (splashVideo) {
    splashVideo.muted = true;
    unmountSplashVideo = mountSplashVideo(splashVideo);
  }
}

app.addEventListener('keydown', (e) => {
  if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('sf-footer')) {
    e.preventDefault();
    e.target.click();
  }
});

app.addEventListener('click', (e) => {
  const x = e.target.closest(
    '[data-a],[data-page],[data-age],[data-gender],[data-mood],[data-interest],[data-send],[data-person],[data-del],[data-edit],[data-unbind],[data-tab],[data-open-friend],[data-insight],[data-detail],[data-tag]'
  );
  if (!x) return;

  /* Primary nav actions first — avoid being shadowed by other data-* */
  if (x.dataset.a === 'tags') {
    s.page = 3;
    render();
    return;
  }
  if (x.dataset.a === 'open-report') {
    const sec = x.dataset.report || 'full';
    s.page = 4;
    s.reportAnchor = sec;
    render();
    requestAnimationFrame(() => {
      const map = { letter: 'report-letter', energy: 'report-energy', connect: 'report-connect', values: 'report-values', full: null };
      const id = map[s.reportAnchor];
      const el = id ? document.getElementById(id) : null;
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      else window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    return;
  }

  if (x.dataset.a === 'jingli-home') {
    s.tab = 'jingli';
    s.page = 8;
    s.jingliView = 'home';
    render();
    return;
  }
  if (x.dataset.a === 'jingli-tags') {
    s.tab = 'jingli';
    s.page = 8;
    s.jingliView = 'tags';
    render();
    return;
  }
  if (x.dataset.a === 'jingli-insight') {
    s.tab = 'jingli';
    s.page = 8;
    s.jingliView = 'insight';
    s.jingliInsight = +(x.dataset.insight || 0);
    render();
    return;
  }
  if (x.dataset.a === 'jingli-detail') {
    s.tab = 'jingli';
    s.page = 8;
    s.jingliView = 'detail';
    s.jingliDetail = x.dataset.detail || 'persona';
    render();
    return;
  }
  if (x.dataset.a === 'open-report-full') {
    s.page = 4;
    s.reportAnchor = 'full';
    render();
    requestAnimationFrame(() => window.scrollTo({ top: 0, behavior: 'smooth' }));
    return;
  }
  if (x.dataset.a === 'toggle-match-tag') {
    const t = x.dataset.tag;
    if (!t) return;
    if (!s.matchTags) s.matchTags = [];
    if (s.matchTags.includes(t)) {
      s.matchTags = s.matchTags.filter((i) => i !== t);
      s.focusTags = (s.focusTags || []).filter((i) => i !== t);
    } else {
      s.matchTags = [...s.matchTags, t];
    }
    render();
    return;
  }
  if (x.dataset.a === 'toggle-focus-tag') {
    const t = x.dataset.tag;
    if (!t) return;
    if (!s.focusTags) s.focusTags = [];
    if (s.focusTags.includes(t)) s.focusTags = s.focusTags.filter((i) => i !== t);
    else s.focusTags = [...s.focusTags, t];
    render();
    return;
  }
  if (x.dataset.a === 'next') {
    if (s.mode === 'returning' && s.page === 4) {
      s.tab = 'recommend';
      s.page = 5;
      render();
      return;
    }
    s.page++;
    if (s.page === 2) s.messages = [];
    render();
    return;
  }

  if (x.dataset.tab !== undefined || x.dataset.a === 'tab') {
    const t = x.dataset.tab;
    if (t) {
      s.tab = t;
      if (t === 'chat') { s.page = 6; s.xzChat = false; ensureActiveFriend(); if (s.active.length) threadOf(s.friend); }
      else if (t === 'xiaozhi') { s.page = 2; s.treeholeView = 'home'; }
      else if (t === 'jingli') { s.page = 8; s.jingliView = 'home'; }
      else { s.page = 5; }
      render();
      return;
    }
  }

  if (x.dataset.page !== undefined && x.dataset.a === 'goto') {
    if (s.mode === 'returning') return; /* chapter nav hidden anyway */
    const n = +x.dataset.page;
    if (n >= 1 && n <= 6) {
      s.page = n;
      if (n === 6) { s.xzChat = false; ensureActiveFriend(); if (s.active.length) threadOf(s.friend); }
    }
  } else if (x.dataset.age) { s.age = x.dataset.age; s.keepScroll = true; }
  else if (x.dataset.gender) { s.gender = x.dataset.gender; s.keepScroll = true; }
  else if (x.dataset.mood) { s.mood = x.dataset.mood; s.keepScroll = true; }
  else if (x.dataset.interest) {
    s.interests.includes(x.dataset.interest)
      ? (s.interests = s.interests.filter((i) => i !== x.dataset.interest))
      : s.interests.push(x.dataset.interest);
  } else if (x.dataset.person !== undefined) s.p = +x.dataset.person;
  else if (x.dataset.del) s.tags.splice(+x.dataset.del, 1);
  else if (x.dataset.edit) {
    const v = prompt('修改标签', s.tags[x.dataset.edit][0]);
    if (v) s.tags[x.dataset.edit][0] = v;
  } else if (x.dataset.send) {
    s.messages.push(
      { from: 'me', text: x.dataset.send },
      { from: 'agent', text: '谢谢你愿意说这些，可以多讲一点吗？' }
    );
  } else if (x.dataset.openFriend !== undefined) {
    s.friend = +x.dataset.openFriend;
    s.xzChat = false;
    ensureActiveFriend();
    threadOf(s.friend);
    if (s.mode === 'returning') { s.tab = 'chat'; s.page = 6; }
    else s.page = 6;
    render();
    return;
  } else if (x.dataset.unbind !== undefined) {
    s.unbind = +x.dataset.unbind;
    s.modal = 'unbind';
  } else
    switch (x.dataset.a) {
      case 'chat-xiaozhi':
        s.xzChat = true;
        s.page = 6;
        if (s.mode === 'returning') s.tab = 'chat';
        break;
      case 'mode-new':
        endCall();
        s.mode = 'new';
        s.page = 0;
        s.tab = 'xiaozhi';
        s.treeholeView = 'home';
        break;
      case 'mode-returning':
        endCall();
        s.mode = 'returning';
        s.page = 2;
        s.tab = 'xiaozhi';
        s.treeholeView = 'home';
        s.name = s.name || '小满';
        if (!s.active.length) s.active = [0, 1, 2];
        break;
      case 'enter-returning':
        s.mode = 'returning';
        s.page = 2;
        s.tab = 'xiaozhi';
        s.treeholeView = 'home';
        s.name = s.name || '小满';
        break;
      case 'treehole-home':
        s.tab = 'xiaozhi';
        s.page = 2;
        s.treeholeView = 'home';
        break;
      case 'treehole-chat':
        s.tab = 'xiaozhi';
        s.page = 2;
        s.treeholeView = 'chat';
        break;
      case 'treehole-diary':
      case 'treehole-daily':
      case 'treehole-secret':
        s.tab = 'xiaozhi';
        s.page = 2;
        s.treeholeView = 'compose';
        s.composeKind = x.dataset.a.replace('treehole-', '');
        s.composeDraft = '';
        break;
      case 'tab-recommend':
        s.tab = 'recommend';
        s.page = 5;
        break;
      case 'start':
        s.mode = 'new';
        s.page = 1;
        break;
      case 'onext':
        s.page = 2;
        s.messages = [];
        break;
      case 'oback':
        s.page = 0;
        break;
      case 'back':
        s.page = Math.max(0, s.page - 1);
        break;
      case 'back-match':
        s.page = 5;
        break;
      case 'meet-person':
        s.p = +x.dataset.i;
        s.page = 5;
        if (s.mode === 'returning') s.tab = 'recommend';
        break;
      case 'next':
        s.page++;
        if (s.page === 2) s.messages = [];
        break;
      case 'tags':
        s.page = 3;
        break;
      case 'call':
        startCall();
        return; /* startCall renders */
      case 'hangup':
        endCall();
        break;
      case 'call-mute':
      case 'call-speaker':
        /* decorative */
        return;
      case 'close':
        s.modal = '';
        break;
      case 'me':
        s.modal = 'me';
        break;
      case 'profile':
        s.modal = 'profile';
        break;
      case 'another':
        s.p = (s.p + 1) % people.length;
        break;
      case 'bind':
        if (s.active.length >= 10) {
          alert('好友名额已满，请先解除一位好友绑定。');
          break;
        }
        if (!s.active.includes(s.p)) s.active.push(s.p);
        s.friend = s.p;
        threadOf(s.friend); /* ensure conversation exists */
        s.sent = 0;
        if (s.mode === 'returning') {
          s.tab = 'chat';
          s.page = 6;
        } else {
          s.page = 6;
        }
        break;
      case 'friends':
        s.page = 7;
        break;
      case 'confirm': {
        const removed = s.active[s.unbind];
        s.active.splice(s.unbind, 1);
        if (removed === s.friend) ensureActiveFriend();
        s.modal = '';
        break;
      }
      case 'voice': {
        const inFriendChat = !s.xzChat && (s.page === 6 || (s.mode === 'returning' && s.tab === 'chat'));
        const line = { from: 'me', text: `${ICON_MIC} 语音消息 · 00:08` };
        if (inFriendChat) {
          ensureActiveFriend();
          threadOf(s.friend).push(line);
          bumpHeat(s.friend);
          s.sent++;
        } else {
          s.messages.push(line);
        }
        break;
      }
    }
  render();
});

app.addEventListener('submit', (e) => {
  e.preventDefault();
  if (e.target.id === 'chat') {
    const v = e.target.message.value.trim();
    if (!v) return;
    const inFriendChat = !s.xzChat && (s.page === 6 || (s.mode === 'returning' && s.tab === 'chat'));
    if (inFriendChat) {
      ensureActiveFriend();
      const t = threadOf(s.friend);
      t.push({ from: 'me', text: v });
      s.sent++;
      bumpHeat(s.friend);
      [1, 3, HEAT_UNLOCK].forEach((n) => {
        if (heatOf(s.friend) >= n && !s.unlocks.includes(n)) s.unlocks.push(n);
      });
      t.push({ from: 'them', text: '感觉和你聊天很放松。' });
    } else {
      s.messages.push({ from: 'me', text: v });
      s.messages.push({ from: 'agent', text: '谢谢你愿意分享。我在认真听。' });
    }
  }
  if (e.target.id === 'newtag') {
    const v = new FormData(e.target).get('tag')?.trim();
    if (v) s.tags.push([v, '补充的自我描述']);
  }
  if (e.target.id === 'treehole-compose') {
    const fd = new FormData(e.target);
    const body = (fd.get('body') || '').toString().trim();
    if (!body) return;
    const kind = s.composeKind || 'diary';
    const title = (fd.get('title') || '').toString().trim()
      || (body.length > 12 ? body.slice(0, 12) + '…' : body);
    s.entries = s.entries || [];
    s.entries.push({
      id: Date.now(),
      kind,
      title,
      body,
      at: '刚刚',
    });
    /* also nudge agent memory with a soft line */
    s.messages.push(
      { from: 'me', text: `【${entryKindLabel(kind)}】${title}：${body}` },
      { from: 'agent', text: '我记下了。它会收在你的树洞里；等你愿意，我们再一起看看要不要分享出去。' }
    );
    s.treeholeView = 'home';
    s.composeKind = '';
  }
  render();
});


  /* seed distinct demo threads for bound friends */
  if (!Object.keys(s.threadsByFriend).length) {
    s.threadsByFriend['0'] = [
      { from: 'them', text: '嗨～看到你也喜欢爬山，最近去了哪里？' },
      { from: 'me', text: '上周去了一座小山，山顶风很大，很舒服。' },
    ];
    s.threadsByFriend['1'] = [
      { from: 'them', text: '你也在做纪录片相关的事吗？想听你讲讲。' },
      { from: 'me', text: '我只是爱好，但很喜欢收集小故事。' },
    ];
    s.threadsByFriend['2'] = [
      { from: 'them', text: '最近在学做陶，手很笨但挺快乐的。' },
      { from: 'me', text: '听起来很治愈，有机会想看看你的作品。' },
    ];
  }

render();

(() => {
  const q = new URLSearchParams(window.location.search);
  if (q.get('mode') === 'returning') {
    s.mode = 'returning';
    s.page = 2;
    s.tab = 'xiaozhi';
    s.treeholeView = 'home';
    s.name = s.name || '小满';
    if (!s.active.length) s.active = [0, 1, 2];
  }
  if (q.get('tab') === 'chat' || q.get('tab') === 'jingli' || q.get('tab') === 'profile' || q.get('tab') === 'recommend' || q.get('tab') === 'xiaozhi') {
    s.tab = q.get('tab') === 'profile' ? 'jingli' : q.get('tab');
    if (s.tab === 'chat') { s.page = 6; }
    else if (s.tab === 'xiaozhi') { s.page = 2; s.treeholeView = q.get('view') === 'chat' ? 'chat' : 'home'; }
    else if (s.tab === 'jingli') { s.page = 8; }
    else { s.page = 5; }
  }
  if (!q.has('page') && !q.has('mode') && !q.has('call') && !q.has('heat')) return;
  if (q.has('page')) {
    const n = +q.get('page');
    if (Number.isFinite(n) && n >= 0 && n <= 7) s.page = n;
  }
  if (q.get('name')) s.name = q.get('name');
  if (q.get('heat')) {
    const h = +q.get('heat');
    s.heatByFriend[s.p] = h;
    s.heatByFriend[s.friend] = h;
  }
  if (q.get('call') === '1' || q.get('call') === 'connecting') {
    s.page = 2;
    s.callPhase = 'connecting';
  }
  if (q.get('call') === 'active') {
    s.page = 2;
    s.callPhase = 'active';
    s.callSeconds = 42;
  }
  render();
})();
