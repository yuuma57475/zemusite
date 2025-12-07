const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
if (navToggle && navMenu) {
  navToggle.addEventListener('click', () => {
    const open = navMenu.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', String(open));
  });
}

const i18n = {
  ja: {
    'mast.playNow': 'プレイする',
    'mast.copyIp': 'IPをコピー',
    'mast.discord': 'Discord',
    'mast.joinNow': '参加する',
    'mast.subtitle': 'PVP特化ネットワーク',
    'nav.home': 'ホーム',
    'nav.news': 'お知らせ',
    'nav.join': '参加方法',
    'nav.rules': 'ルール',
    'nav.community': 'コミュニティ',
    'nav.faq': 'FAQ',
    'nav.gamemodes': 'ゲームモード',
    'nav.leaderboards': 'ランキング',
    'nav.credits': 'クレジット',
    'tab.home': 'ホーム',
    'tab.forums': 'フォーラム',
    'tab.store': 'ストア',
    'tab.wiki': 'ウィキ',
    'tab.support': 'サポート',
    'hero.title': 'Eaglercraftでも快適に遊べる',
    'hero.lead': 'Eaglercraftでも公平に楽しむことができるサーバー',
    'badge.pvp': 'PVP MAIN',
    'label.ip': 'IP',
    'label.version': '対応バージョン',
    'label.status': '現在の状態',
    'cta.joinNow': '今すぐ参加する',
    'cta.joinDiscord': 'Discord に参加',
    'section.news': 'お知らせ',
    'section.join': '参加方法',
    'section.rules': 'ルール',
    'section.community': 'コミュニティ',
    'section.gamemodes': 'ゲームモード',
    'section.leaderboards': 'ランキング',
    'section.credits': 'クレジット',
    'section.faq': 'FAQ',
    'join.eagler': 'Eaglercraft',
    'join.java': 'Java版',
    'join.eg.s1': 'ブラウザ版クライアントを起動',
    'join.eg.s2': 'サーバー一覧で ws://star.ssnetwork.io:51026 を追加',
    'join.eg.s3': '選択して接続',
    'join.java.s1': 'ゲームを 1.21.x に設定',
    'join.java.s2': 'マルチプレイで s1.ssnetwork.io:46322 を追加',
    'join.java.s3': '一覧から選んで接続',
    'status.online': 'オンライン',
    'status.offline': 'オフライン',
    'status.unknown': '不明',
    'status.maintenance': '現在メンテナンス中です',
    'button.copy': 'コピー',
    'button.copied': 'コピー済み'
    ,'page.preparing': '準備中'
    ,'page.preparing.desc': '公開まで今しばらくお待ちください。'
  },
  en: {
    'mast.playNow': 'Play Now',
    'mast.copyIp': 'Copy IP',
    'mast.discord': 'Discord',
    'mast.joinNow': 'Join Now',
    'mast.subtitle': 'PvP-focused network',
    'nav.home': 'Home',
    'nav.news': 'News',
    'nav.join': 'Join',
    'nav.rules': 'Rules',
    'nav.community': 'Community',
    'nav.faq': 'FAQ',
    'nav.gamemodes': 'Gamemodes',
    'nav.leaderboards': 'Leaderboards',
    'nav.credits': 'Credits',
    'tab.home': 'Home',
    'tab.forums': 'Forums',
    'tab.store': 'Store',
    'tab.wiki': 'Wiki',
    'tab.support': 'Support',
    'hero.title': 'PvP-focused network',
    'hero.lead': 'Fast and stable server tailored for combat',
    'badge.pvp': 'PVP MAIN',
    'label.ip': 'IP',
    'label.version': 'Version',
    'label.status': 'Status',
    'cta.joinNow': 'Join Now',
    'cta.joinDiscord': 'Join Discord',
    'section.news': 'News',
    'section.join': 'How to Join',
    'section.rules': 'Rules',
    'section.community': 'Community',
    'section.gamemodes': 'Gamemodes',
    'section.leaderboards': 'Leaderboards',
    'section.credits': 'Credits',
    'section.faq': 'FAQ',
    'join.eagler': 'Eaglercraft',
    'join.java': 'Java',
    'join.eg.s1': 'Open browser client',
    'join.eg.s2': 'Add ws://star.ssnetwork.io:51026 in server list',
    'join.eg.s3': 'Select and connect',
    'join.java.s1': 'Set game to 1.21.x',
    'join.java.s2': 'Add s1.ssnetwork.io:46322 in Multiplayer',
    'join.java.s3': 'Select and connect',
    'status.online': 'Online',
    'status.offline': 'Offline',
    'status.unknown': 'Unknown',
    'status.maintenance': 'Currently under maintenance',
    'button.copy': 'Copy',
    'button.copied': 'Copied'
    ,'page.preparing': 'Preparing'
    ,'page.preparing.desc': 'Please wait while we prepare the content.'
  },
  zh: {
    'mast.playNow': '开始游戏',
    'mast.copyIp': '复制IP',
    'mast.discord': 'Discord',
    'mast.joinNow': '立即加入',
    'mast.subtitle': '专注 PvP 的网络',
    'nav.home': '首页',
    'nav.news': '公告',
    'nav.join': '加入',
    'nav.rules': '规则',
    'nav.community': '社区',
    'nav.faq': '常见问题',
    'nav.gamemodes': '游戏模式',
    'nav.leaderboards': '排行榜',
    'nav.credits': '积分',
    'tab.home': '首页',
    'tab.forums': '论坛',
    'tab.store': '商店',
    'tab.wiki': '百科',
    'tab.support': '支持',
    'hero.title': 'PVP 主服务器',
    'hero.lead': '专注对战，快速稳定的服务器',
    'badge.pvp': 'PVP MAIN',
    'label.ip': 'IP',
    'label.version': '版本',
    'label.status': '状态',
    'cta.joinNow': '立即加入',
    'cta.joinDiscord': '加入 Discord',
    'section.news': '公告',
    'section.join': '加入方法',
    'section.rules': '规则',
    'section.community': '社区',
    'section.gamemodes': '游戏模式',
    'section.leaderboards': '排行榜',
    'section.credits': '积分',
    'section.faq': '常见问题',
    'join.eagler': 'Eaglercraft',
    'join.java': 'Java版',
    'join.eg.s1': '打开浏览器客户端',
    'join.eg.s2': '在服务器列表添加 ws://star.ssnetwork.io:51026',
    'join.eg.s3': '选择并连接',
    'join.java.s1': '将游戏设置为 1.21.x',
    'join.java.s2': '在多人游戏添加 s1.ssnetwork.io:46322',
    'join.java.s3': '选择并连接',
    'status.online': '在线',
    'status.offline': '离线',
    'status.unknown': '未知',
    'status.maintenance': '维护中',
    'button.copy': '复制',
    'button.copied': '已复制'
    ,'page.preparing': '准备中'
    ,'page.preparing.desc': '内容正在准备中，请稍候。'
  },
  ko: {
    'mast.playNow': '지금 플레이',
    'mast.copyIp': 'IP 복사',
    'mast.discord': '디스코드',
    'mast.joinNow': '참가',
    'mast.subtitle': 'PvP 중심 네트워크',
    'nav.home': '홈',
    'nav.news': '공지',
    'nav.join': '참가',
    'nav.rules': '규칙',
    'nav.community': '커뮤니티',
    'nav.faq': 'FAQ',
    'nav.gamemodes': '게임 모드',
    'nav.leaderboards': '리더보드',
    'nav.credits': '크레딧',
    'tab.home': '홈',
    'tab.forums': '포럼',
    'tab.store': '스토어',
    'tab.wiki': '위키',
    'tab.support': '지원',
    'hero.title': 'PVP 중심 네트워크',
    'hero.lead': '대전에 특화된 빠르고 안정적인 서버',
    'badge.pvp': 'PVP MAIN',
    'label.ip': 'IP',
    'label.version': '버전',
    'label.status': '상태',
    'cta.joinNow': '지금 참가',
    'cta.joinDiscord': '디스코드 참가',
    'section.news': '공지',
    'section.join': '참가 방법',
    'section.rules': '규칙',
    'section.community': '커뮤니티',
    'section.gamemodes': '게임 모드',
    'section.leaderboards': '리더보드',
    'section.credits': '크레딧',
    'section.faq': 'FAQ',
    'join.eagler': 'Eaglercraft',
    'join.java': 'Java',
    'join.eg.s1': '브라우저 클라이언트를 실행',
    'join.eg.s2': '서버 목록에 ws://star.ssnetwork.io:51026 추가',
    'join.eg.s3': '선택 후 접속',
    'join.java.s1': '게임을 1.21.x로 설정',
    'join.java.s2': '멀티플레이에 s1.ssnetwork.io:46322 추가',
    'join.java.s3': '목록에서 선택 후 접속',
    'status.online': '온라인',
    'status.offline': '오프라인',
    'status.unknown': '알 수 없음',
    'status.maintenance': '현재 점검 중',
    'button.copy': '복사',
    'button.copied': '복사됨'
    ,'page.preparing': '준비 중'
    ,'page.preparing.desc': '콘텐츠 준비 중입니다. 잠시만 기다려 주세요.'
  },
  ar: {
    'mast.playNow': 'البدء الآن',
    'mast.copyIp': 'نسخ IP',
    'mast.discord': 'ديسكورد',
    'mast.joinNow': 'انضم الآن',
    'mast.subtitle': 'شبكة تركز على PvP',
    'nav.home': 'الصفحة الرئيسية',
    'nav.news': 'الإعلانات',
    'nav.join': 'الانضمام',
    'nav.rules': 'القواعد',
    'nav.community': 'المجتمع',
    'nav.faq': 'الأسئلة الشائعة',
    'nav.gamemodes': 'أوضاع اللعب',
    'nav.leaderboards': 'الترتيب',
    'nav.credits': 'الائتمانات',
    'tab.home': 'الرئيسية',
    'tab.forums': 'المنتدى',
    'tab.store': 'المتجر',
    'tab.wiki': 'ويكي',
    'tab.support': 'الدعم',
    'hero.title': 'شبكة تركز على PvP',
    'hero.lead': 'خادم سريع ومستقر مخصص للقتال',
    'badge.pvp': 'PVP MAIN',
    'label.ip': 'IP',
    'label.version': 'الإصدار',
    'label.status': 'الحالة',
    'cta.joinNow': 'انضم الآن',
    'cta.joinDiscord': 'انضم إلى Discord',
    'section.news': 'الإعلانات',
    'section.join': 'طريقة الانضمام',
    'section.rules': 'القواعد',
    'section.community': 'المجتمع',
    'section.gamemodes': 'أوضاع اللعب',
    'section.leaderboards': 'الترتيب',
    'section.credits': 'الائتمانات',
    'section.faq': 'الأسئلة الشائعة',
    'join.eagler': 'Eaglercraft',
    'join.java': 'إصدار جافا',
    'join.eg.s1': 'افتح عميل المتصفح',
    'join.eg.s2': 'أضف ws://star.ssnetwork.io:51026 إلى قائمة الخوادم',
    'join.eg.s3': 'اختر واتصل',
    'join.java.s1': 'اضبط اللعبة على 1.21.x',
    'join.java.s2': 'أضف s1.ssnetwork.io:46322 في تعدد اللاعبين',
    'join.java.s3': 'اختر واتصل',
    'status.online': 'متصل',
    'status.offline': 'غير متصل',
    'status.unknown': 'غير معروف',
    'status.maintenance': 'قيد الصيانة حاليًا',
    'button.copy': 'نسخ',
    'button.copied': 'تم النسخ'
    ,'page.preparing': 'قيد التحضير'
    ,'page.preparing.desc': 'يرجى الانتظار بينما نُحضّر المحتوى.'
  }
};

function t(key) {
  const lang = document.documentElement.lang || 'ja';
  const dict = i18n[lang] || i18n.ja;
  return dict[key] || key;
}

const langSelect = document.getElementById('langSelect');
function applyLang(lang) {
  const dict = i18n[lang] || i18n.ja;
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    const key = el.getAttribute('data-i18n');
    const text = dict[key];
    if (typeof text === 'string') el.textContent = text;
  });
  if (langSelect) langSelect.value = lang;
}
const savedLang = localStorage.getItem('lang') || 'ja';
applyLang(savedLang);
if (langSelect) {
  langSelect.addEventListener('change', (e) => {
    const lang = e.target.value;
    localStorage.setItem('lang', lang);
    applyLang(lang);
  });
}

let audioCtx;
function playClickSound() {
  try {
    if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    audioCtx.resume();
    const o = audioCtx.createOscillator();
    const g = audioCtx.createGain();
    const f = audioCtx.createBiquadFilter();
    o.type = 'triangle';
    o.frequency.value = 640;
    f.type = 'lowpass';
    f.frequency.value = 1200;
    o.connect(f);
    f.connect(g);
    g.connect(audioCtx.destination);
    const now = audioCtx.currentTime;
    g.gain.setValueAtTime(0, now);
    g.gain.linearRampToValueAtTime(0.18, now + 0.01);
    g.gain.exponentialRampToValueAtTime(0.0001, now + 0.08);
    o.start(now);
    o.stop(now + 0.12);
  } catch {}
}

async function copyText(str) {
  try {
    await navigator.clipboard.writeText(str);
    return true;
  } catch {
    try {
      const ta = document.createElement('textarea');
      ta.value = str;
      ta.style.position = 'fixed';
      ta.style.opacity = '0';
      ta.style.left = '0';
      ta.style.top = '0';
      document.body.appendChild(ta);
      ta.focus();
      ta.select();
      let ok = false;
      try { ok = document.execCommand('copy'); } catch {}
      document.body.removeChild(ta);
      return ok;
    } catch {
      return false;
    }
  }
}

let particleLayer = document.querySelector('.particle-layer');
if (!particleLayer) {
  particleLayer = document.createElement('div');
  particleLayer.className = 'particle-layer';
  document.body.appendChild(particleLayer);
}
let particles = [];
let particlesRunning = false;
let lastTime = 0;
function createSeeds(x, y, count) {
  const seeds = [];
  for (let i = 0; i < count; i++) {
    const shard = i % 5 === 0;
    const size = shard ? 6 + Math.random() * 8 : 4 + Math.random() * 8;
    const vx = (Math.random() * 140 - 70);
    const vy = -(140 + Math.random() * 200);
    seeds.push({ x, y, vx, vy, rot: Math.random() * 360, vr: (Math.random() * 120 - 60), life: 1, shard, w: size, h: shard ? size * 0.5 : size });
  }
  return seeds;
}
function spawnSeeds(seeds) {
  seeds.forEach((s) => {
    const el = document.createElement('i');
    el.className = s.shard ? 'particle-shard' : 'particle-dot';
    el.style.width = s.w + 'px';
    el.style.height = s.h + 'px';
    el.style.transform = `translate3d(${s.x}px, ${s.y}px, 0)`;
    particleLayer.appendChild(el);
    particles.push({ el, x: s.x, y: s.y, vx: s.vx, vy: s.vy, rot: s.rot, vr: s.vr, life: s.life, shard: s.shard });
  });
  if (!particlesRunning) {
    particlesRunning = true;
    lastTime = performance.now();
    requestAnimationFrame(stepParticles);
  }
}
function spawnParticlesAt(x, y) {
  const count = 18;
  for (let i = 0; i < count; i++) {
    const shard = i % 5 === 0;
    const el = document.createElement('i');
    el.className = shard ? 'particle-shard' : 'particle-dot';
    const size = shard ? 6 + Math.random() * 8 : 4 + Math.random() * 8;
    el.style.width = size + 'px';
    el.style.height = (shard ? size * 0.5 : size) + 'px';
    el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    particleLayer.appendChild(el);
    const vx = (Math.random() * 140 - 70);
    const vy = -(140 + Math.random() * 200);
    particles.push({ el, x, y, vx, vy, rot: Math.random() * 360, vr: (Math.random() * 120 - 60), life: 1, shard });
  }
  if (!particlesRunning) {
    particlesRunning = true;
    lastTime = performance.now();
    requestAnimationFrame(stepParticles);
  }
}
function stepParticles(now) {
  const dt = Math.min(0.033, (now - lastTime) / 1000);
  lastTime = now;
  const g = 1600;
  for (let i = particles.length - 1; i >= 0; i--) {
    const p = particles[i];
    p.vy += g * dt;
    p.vx *= 0.996;
    p.x += p.vx * dt;
    p.y += p.vy * dt;
    p.rot += p.vr * dt;
    p.life -= dt * 0.9;
    if (p.y > window.innerHeight || p.life <= 0) {
      p.el.remove();
      particles.splice(i, 1);
    } else {
      p.el.style.opacity = String(Math.max(0, p.life));
      p.el.style.transform = `translate3d(${p.x}px, ${p.y}px, 0) rotate(${p.shard ? p.rot : 0}deg)`;
    }
  }
  if (particles.length) {
    requestAnimationFrame(stepParticles);
  } else {
    particlesRunning = false;
  }
}
document.addEventListener('pointerdown', (e) => {
  const el = e.target.closest('a, button, .btn, .nav-toggle, .tabs a, .pill-link, [data-copy], summary');
  if (!el) return;
  playClickSound();
  const x = e.clientX, y = e.clientY;
  spawnParticlesAt(x, y);
  const href = el.tagName === 'A' ? el.getAttribute('href') : null;
  const tgt = el.tagName === 'A' ? el.getAttribute('target') : null;
  if (href && tgt !== '_blank') {
    try {
      const seeds = createSeeds(x, y, 18);
      sessionStorage.setItem('pendingParticles', JSON.stringify({ t: Date.now(), seeds }));
    } catch {}
  }
});

document.addEventListener('click', (e) => {
  const el = e.target.closest('.btn, .pill-link, .tabs a, .nav-toggle, [data-copy]');
  if (!el) return;
});

try {
  const saved = sessionStorage.getItem('pendingParticles');
  if (saved) {
    const obj = JSON.parse(saved);
    if (obj && Array.isArray(obj.seeds)) {
      spawnSeeds(obj.seeds);
    }
    sessionStorage.removeItem('pendingParticles');
  }
} catch {}

[
  '.server-card',
  '.stats .stat-card',
  '.cards .card',
  '.mode-card',
  '.news-item',
  'details',
  '.section',
  '.cta'
].forEach((sel) => {
  document.querySelectorAll(sel).forEach((el) => el.classList.add('animate-fade-up'));
});
document.querySelectorAll('.animate-fade-up').forEach((el) => {
  el.classList.remove('animate-in');
});
const io = new IntersectionObserver((ents) => {
  ents.forEach((ent) => {
    if (ent.isIntersecting) {
      ent.target.classList.add('animate-in');
    } else {
      ent.target.classList.remove('animate-in');
    }
  });
}, { threshold: 0, rootMargin: '-15% 0px -15% 0px' });
document.querySelectorAll('.animate-fade-up').forEach((el) => io.observe(el));
// 初期表示で既にビューポート内の要素にも発火させる
function inView(el) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}
document.querySelectorAll('.animate-fade-up').forEach((el) => {
  if (inView(el)) {
    requestAnimationFrame(() => el.classList.add('animate-in'));
  }
});
const copyBtn = document.getElementById('copyIp');
const ipEl = document.getElementById('serverIp');
if (copyBtn && ipEl) {
  copyBtn.addEventListener('click', async () => {
    try {
      await copyText(ipEl.textContent.trim());
      copyBtn.textContent = 'コピー済み';
      setTimeout(() => (copyBtn.textContent = 'コピー'), 2000);
    } catch {}
  });
}

const copyTop = document.getElementById('copyIpTop');
if (copyTop) {
  copyTop.addEventListener('click', async () => {
    try {
      const javaCard = document.querySelector('.server-card[data-protocol="minecraft"]');
      const javaIp = javaCard ? javaCard.querySelector('.ip')?.textContent?.trim() : '';
      if (javaIp) await copyText(javaIp);
    } catch {}
  });
}

document.querySelectorAll('[data-copy]').forEach((btn) => {
  btn.addEventListener('click', async () => {
    try {
      const card = btn.closest('.server-card');
      const ip = card ? card.querySelector('.ip')?.textContent?.trim() : '';
      if (ip) await copyText(ip);
      btn.textContent = t('button.copied');
      setTimeout(() => (btn.textContent = t('button.copy')), 2000);
    } catch {}
  });
});

document.querySelectorAll('.server-card').forEach((card) => {
  const protocol = card.getAttribute('data-protocol');
  const host = card.getAttribute('data-host');
  const statusEl = card.querySelector('.status-pill');
  if (!statusEl || !host) return;

  if (protocol === 'minecraft') {
    const url = `https://api.mcsrvstat.us/3/${host}`;
    const started = performance.now();
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const verStr = typeof data.version === 'string' ? data.version : '';
        const isMaint = /maintenance/i.test(verStr);
        const online = Boolean(data.online);
        if (isMaint) {
          statusEl.textContent = t('status.maintenance');
          statusEl.classList.remove('status-online', 'status-offline');
          statusEl.classList.add('status-maintenance');
        } else {
          statusEl.textContent = online ? t('status.online') : t('status.offline');
          statusEl.classList.remove('status-online', 'status-offline', 'status-maintenance');
          statusEl.classList.add(online ? 'status-online' : 'status-offline');
          if (online && data.players && typeof data.players.online === 'number') {
            statusEl.textContent = `${t('status.online')} (${data.players.online})`;
          }
        }

        const statPlayers = document.getElementById('statPlayers');
        const statVersion = document.getElementById('statVersion');
        const statIp = document.getElementById('statIp');
        const statPing = document.getElementById('statPing');
        const playCount = document.getElementById('playCount');
        if (statPlayers && data.players && typeof data.players.online === 'number') {
          statPlayers.textContent = String(data.players.online);
        }
        if (playCount && data.players && typeof data.players.online === 'number') {
          playCount.textContent = String(data.players.online);
        }
        if (statVersion && typeof data.version === 'string') {
          statVersion.textContent = data.version;
        }
        if (statIp) {
          const javaIpEl = card.querySelector('.ip');
          if (javaIpEl) statIp.textContent = javaIpEl.textContent.trim();
        }
        if (statPing) {
          const ms = Math.max(1, Math.round(performance.now() - started));
          statPing.textContent = `${ms} ms`;
        }
      })
      .catch(() => {
        statusEl.textContent = t('status.unknown');
        const statPing = document.getElementById('statPing');
        if (statPing) statPing.textContent = '—';
      });
  } else if (protocol === 'eagler') {
    let done = false;
    try {
      const ws = new WebSocket(host);
      const timer = setTimeout(() => {
        if (!done) statusEl.textContent = '不明';
      }, 3000);
      ws.onopen = () => {
        done = true;
        statusEl.textContent = t('status.online');
        statusEl.classList.remove('status-online', 'status-offline');
        statusEl.classList.add('status-online');
        ws.close();
        clearTimeout(timer);
      };
      ws.onerror = () => {
        if (done) return;
        statusEl.textContent = t('status.offline');
        statusEl.classList.remove('status-online', 'status-offline');
        statusEl.classList.add('status-offline');
      };
    } catch {
      statusEl.textContent = t('status.unknown');
    }
  }
});

async function updateDiscordCount() {
  try {
    const el = document.getElementById('discordCount');
    if (!el) return;
    el.textContent = '—';
    const url = 'https://discord.com/api/v10/invites/GqxKuRmTPw?with_counts=true&with_expiration=true';
    const res = await fetch(url, { headers: { 'Accept': 'application/json' } });
    if (!res.ok) return;
    const data = await res.json();
    const n = data?.approximate_member_count || data?.guild?.approximate_member_count;
    if (typeof n === 'number' && n > 0) el.textContent = String(n);
  } catch {}
}

updateDiscordCount();

const cookieBar = document.getElementById('cookieBar');
const cookieAccept = document.getElementById('cookieAccept');
if (cookieBar && cookieAccept) {
  const key = 'zemunet_cookie_ok';
  if (localStorage.getItem(key)) {
    cookieBar.style.display = 'none';
  }
  cookieAccept.addEventListener('click', () => {
    localStorage.setItem(key, '1');
    cookieBar.style.display = 'none';
  });
}

function initPay() {
  const form = document.getElementById('payForm');
  if (!form) return;
  const qs = new URLSearchParams(location.search);
  const prod = document.getElementById('payProduct');
  const price = document.getElementById('payPrice');
  const method = document.getElementById('payMethod');
  const code = document.getElementById('amazonCode');
  const contact = document.getElementById('contact');
  const note = document.getElementById('note');
  const submit = document.getElementById('paySubmit');
  const status = document.getElementById('payStatus');
  if (prod) prod.value = qs.get('p') || '';
  if (price) price.value = qs.get('price') || '';
  submit?.addEventListener('click', (e) => {
    e.preventDefault();
    const c = code?.value?.trim() || '';
    if (!c || c.length < 8) { if (status) status.textContent = 'コードを入力してください'; return; }
    const to = 'keinoz274@gmail.com';
    const subj = `Amazon Gift Code - ${prod?.value || ''}`.trim();
    const body = [
      `Product: ${prod?.value || ''}`,
      `Price: ${price?.value || ''}`,
      `Method: Amazon Gift Card`,
      `Code: ${c}`,
      `Contact: ${contact?.value || ''}`,
      `Note: ${note?.value || ''}`,
      `Time: ${new Date().toISOString()}`
    ].join('\n');
    try { navigator.clipboard.writeText(c); } catch {}
    const g = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(to)}&su=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    window.open(g, '_blank', 'noopener');
    const m = `mailto:${to}?subject=${encodeURIComponent(subj)}&body=${encodeURIComponent(body)}`;
    setTimeout(() => { window.location.href = m; }, 600);
    if (status) status.textContent = 'メール作成画面を開きました。送信を完了してください。';
  });
}

initPay();
