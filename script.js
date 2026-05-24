/* ========================================================
   Polymer Learning App — script.js
   Tab switching · Accordion · Quiz (CSV) · Progress
   ======================================================== */

// Global expanded databases loaded from quiz-data.js and polymer-db.js
// window.QUIZ_DATA (100 questions)
// window.POLYMER_DB (30 polymers with SVGs)

'use strict';

/* ── Constants ── */
const LS_KEY_STATS    = 'polymer_stats';
const LS_KEY_ACTIVITY = 'polymer_activity';

/* ── State ── */
let allQuestions = [];
let currentSession = { questions: [], index: 0, correct: 0, answered: false };

/* ── Utility: Local Storage helpers ── */
function loadStats() {
  try {
    return JSON.parse(localStorage.getItem(LS_KEY_STATS)) || {
      totalCorrect: 0,
      totalAttempts: 0,
      sessions: 0,
      streak: 0,
      lastDate: null,
      studiedDays: []
    };
  } catch { return { totalCorrect:0, totalAttempts:0, sessions:0, streak:0, lastDate:null, studiedDays:[] }; }
}
function saveStats(s) { localStorage.setItem(LS_KEY_STATS, JSON.stringify(s)); }

function todayStr() { return new Date().toISOString().slice(0, 10); }

function recordStudyDay() {
  const stats = loadStats();
  const today = todayStr();
  if (!stats.studiedDays.includes(today)) stats.studiedDays.push(today);
  // Streak calc
  const yesterday = new Date(); yesterday.setDate(yesterday.getDate() - 1);
  const yStr = yesterday.toISOString().slice(0, 10);
  if (stats.lastDate === today) { /* already counted */ }
  else if (stats.lastDate === yStr) { stats.streak += 1; }
  else if (stats.lastDate !== today) { stats.streak = 1; }
  stats.lastDate = today;
  stats.sessions += 1;
  saveStats(stats);
}

/* ── Toast ── */
function showToast(msg, duration = 2200) {
  const el = document.getElementById('toast');
  if (!el) return;
  el.textContent = msg;
  el.classList.add('show');
  clearTimeout(el._t);
  el._t = setTimeout(() => el.classList.remove('show'), duration);
}

/* ══════════════════════════════════════════════
   Interactive Collapsible Tree
   ══════════════════════════════════════════════ */

/* Tree data — full hierarchy to product leaves */
const TREE_DATA = {
  id: 'root', type: 'root', icon: '🏭',
  name: '樹脂・ポリマー製造', sub: 'Polymer Manufacturing',
  children: [
    {
      id: 'A', type: 'cat', icon: '⚡',
      name: '付加重合', sub: 'Addition Polymerization',
      children: [
        {
          id: 'A1', type: 'sub', icon: '🔴',
          name: 'ラジカル重合', sub: 'Radical Polymerization',
          children: [
            {
              id: 'A1a', type: 'method', icon: '🧊',
              name: 'バルク重合', sub: 'Bulk Polymerization',
              children: [
                { id:'P1', type:'product', icon:'🪟', name:'PMMA（ポリメタクリル酸メチル）',
                  usage:'アクリル板・看板・水槽・光ファイバー・コンタクトレンズ',
                  feat:'透明度92%・耐候性・軽量（ガラスの1/2）',
                  makers:'三菱ケミカル（デルペット）・住友化学（スミペックス）・Röhm（PLEXIGLAS）' },
                { id:'P2', type:'product', icon:'🔵', name:'PS（ポリスチレン）',
                  usage:'食品容器・OA機器・発泡スチロール断熱材',
                  feat:'透明・剛性・電気絶縁性・低コスト',
                  makers:'DIC・PSジャパン・INEOS Styrolution' }
              ]
            },
            {
              id: 'A1b', type: 'method', icon: '💧',
              name: '溶液重合', sub: 'Solution Polymerization',
              children: [
                { id:'P3', type:'product', icon:'🎨', name:'アクリル塗料・接着剤',
                  usage:'自動車外装塗料・建築外壁・木工接着剤',
                  feat:'耐候性・速乾性・低VOC化対応',
                  makers:'関西ペイント・日本ペイント・BASF Coatings' },
                { id:'P4', type:'product', icon:'🖊️', name:'PAN（ポリアクリロニトリル）',
                  usage:'炭素繊維前駆体・アクリル繊維（衣料）',
                  feat:'高強度・耐薬品・炭素繊維原料として戦略的素材',
                  makers:'東レ・帝人・三菱ケミカル' }
              ]
            },
            {
              id: 'A1c', type: 'method', icon: '🫧',
              name: '乳化重合', sub: 'Emulsion Polymerization',
              children: [
                { id:'P5', type:'product', icon:'🚗', name:'SBR（スチレン-ブタジエンゴム）',
                  usage:'自動車タイヤ・ベルトコンベア・靴底',
                  feat:'耐摩耗性・高グリップ力・天然ゴムの代替',
                  makers:'JSR・LANXESS・Arlanxeo' },
                { id:'P6', type:'product', icon:'🧪', name:'NBR（ニトリルゴム）',
                  usage:'ガスケット・Oリング・ニトリルグローブ',
                  feat:'耐油性・耐溶剤性・弾性',
                  makers:'日本ゼオン・Zeon Chemicals・LANXESS' },
                { id:'P7', type:'product', icon:'🏠', name:'合成ラテックス（VAE）',
                  usage:'水性塗料・紙加工・カーペット裏打ち',
                  feat:'環境負荷低減・速乾・VOC少',
                  makers:'住友化学・Celanese・Wacker' }
              ]
            },
            {
              id: 'A1d', type: 'method', icon: '⚗️',
              name: '懸濁重合', sub: 'Suspension Polymerization',
              children: [
                { id:'P8', type:'product', icon:'💊', name:'GPPS・HIPS（スチレン系）',
                  usage:'食品容器・家電ハウジング・断熱発泡材',
                  feat:'成形性・低コスト・着色自由度',
                  makers:'PSジャパン・台湾化成・Ineos Styrolution' },
                { id:'P9', type:'product', icon:'🔧', name:'PVC（ポリ塩化ビニル）',
                  usage:'パイプ・電線被覆・窓枠・シート',
                  feat:'耐薬品・難燃性・コスト競争力',
                  makers:'信越化学・東ソー・Shin-Etsu Vinyl' }
              ]
            },
            {
              id: 'A1e', type: 'method', icon: '🎛️',
              name: 'リビングラジカル重合', sub: 'RAFT / ATRP / NMP',
              children: [
                { id:'P10', type:'product', icon:'🔬', name:'ブロック共重合体・機能性ポリマー',
                  usage:'ドラッグデリバリー・スマートコーティング・感光性樹脂',
                  feat:'分子量精密制御・末端官能基導入・単分散性',
                  makers:'Arkema・CSIRO・大学・研究機関（商業化进展中）' }
              ]
            }
          ]
        },
        {
          id: 'A2', type: 'sub', icon: '➕',
          name: 'カチオン重合', sub: 'Cationic Polymerization',
          children: [
            { id:'P11', type:'product', icon:'🧲', name:'PIB（ポリイソブチレン）',
              usage:'タイヤインナーライナー・粘着剤・チューインガム基材',
              feat:'気体不透過性・耐候性・低温柔軟性',
              makers:'BASF・ExxonMobil・Daelim' },
            { id:'P12', type:'product', icon:'🏺', name:'IIR（ブチルゴム）',
              usage:'タイヤチューブ・防振材・医薬容器ゴム栓',
              feat:'空気透過性極小・制振性',
              makers:'LANXESS・ExxonMobil Chemical・日本ブチル' }
          ]
        },
        {
          id: 'A3', type: 'sub', icon: '➖',
          name: 'アニオン重合', sub: 'Anionic Polymerization',
          children: [
            { id:'P13', type:'product', icon:'🧱', name:'SBS・SIS（スチレン系TPE）',
              usage:'ホットメルト接着剤・アスファルト改質・靴底',
              feat:'ブロック共重合・弾性・熱可塑性（加硫不要）',
              makers:'クレイトン・日本エラストマー・LCY' },
            { id:'P14', type:'product', icon:'🔩', name:'ABSエンジニアリング樹脂',
              usage:'自動車内装・家電・LEGO（一部）・3Dプリンタ材料',
              feat:'耐衝撃・耐熱・成形性のバランス',
              makers:'東レ・テクノUMG・LG Chem' }
          ]
        },
        {
          id: 'A4', type: 'sub', icon: '🏆',
          name: '配位重合', sub: 'Coordination Polymerization',
          children: [
            { id:'P15', type:'product', icon:'🛢️', name:'HDPE（高密度ポリエチレン）',
              usage:'タンク・パイプ・ボトル・コンテナ',
              feat:'高結晶性・高強度・化学耐性',
              makers:'三井化学・LyondellBasell・SABIC' },
            { id:'P16', type:'product', icon:'📦', name:'LLDPE・LDPE（低密度PE）',
              usage:'包装フィルム・電線被覆・农業フィルム',
              feat:'柔軟・透明・シール性',
              makers:'住友化学・Dow・ExxonMobil' },
            { id:'P17', type:'product', icon:'🥄', name:'PP（ポリプロピレン）',
              usage:'食品容器・自動車バンパー・医療用シリンジ・マスク不織布',
              feat:'軽量・耐熱（〜120℃）・繰り返し成形可',
              makers:'プライムポリマー・Borealis・LyondellBasell' }
          ]
        }
      ]
    },
    {
      id: 'B', type: 'cat', icon: '💧',
      name: '縮合重合', sub: 'Condensation Polymerization',
      children: [
        {
          id: 'B1', type: 'sub', icon: '♻️',
          name: 'ポリエステル', sub: 'Polyester',
          children: [
            { id:'P18', type:'product', icon:'🍶', name:'PET（ポリエチレンテレフタレート）',
              usage:'ペットボトル・ポリエステル繊維・食品トレー・磁気テープ',
              feat:'透明・強靭・ガスバリア性・リサイクル性',
              makers:'東洋紡・三菱ケミカル・Indorama Ventures' },
            { id:'P19', type:'product', icon:'⚙️', name:'PBT（ポリブチレンテレフタレート）',
              usage:'電気コネクタ・自動車ECU筐体・スイッチ部品',
              feat:'寸法安定性・耐薬品・高速成形',
              makers:'東レ・ポリプラスチックス・BASF' },
            { id:'P20', type:'product', icon:'🌡️', name:'PCT / PEN（高性能ポリエステル）',
              usage:'耐熱コネクタ・フレキシブル基板・高性能フィルム',
              feat:'耐熱性PETの2倍以上・低吸湿',
              makers:'Eastman Chemical・帝人・三菱ケミカル' }
          ]
        },
        {
          id: 'B2', type: 'sub', icon: '🧵',
          name: 'ポリアミド（ナイロン）', sub: 'Polyamide',
          children: [
            { id:'P21', type:'product', icon:'⚙️', name:'Nylon 6,6（ポリアミド66）',
              usage:'自動車エンジン周辺部品・産業用ギア・歯ブラシ毛',
              feat:'高融点（260℃）・耐摩耗・高強度',
              makers:'BASF・Dupont（Zytel）・東レ' },
            { id:'P22', type:'product', icon:'👗', name:'Nylon 6（ポリアミド6）',
              usage:'衣料用繊維・漁網・ロープ・産業部品',
              feat:'弾性・染色性・吸湿性（フィラメント用途に最適）',
              makers:'ユニチカ・Honeywell・DSM' },
            { id:'P23', type:'product', icon:'🚀', name:'PA12 / PA11（特殊ナイロン）',
              usage:'燃料チューブ・油圧ホース・3Dプリンタ粉末',
              feat:'低吸湿・低温柔軟性・耐薬品',
              makers:'Arkema（Rilsan）・Evonik（Vestamid）' }
          ]
        },
        {
          id: 'B3', type: 'sub', icon: '🛋️',
          name: 'ポリウレタン', sub: 'Polyurethane',
          children: [
            { id:'P24', type:'product', icon:'🛏️', name:'軟質PUフォーム',
              usage:'マットレス・ソファ・自動車シート・吸音材',
              feat:'圧縮復元性・クッション性・成形自由度',
              makers:'東ソー・住化コベストロウレタン・Covestro' },
            { id:'P25', type:'product', icon:'🏗️', name:'硬質PUフォーム',
              usage:'断熱パネル・冷凍庫断熱・建設断熱材',
              feat:'断熱性能（λ=0.022〜0.028W/mK）・軽量',
              makers:'BASF・Huntsman・旭化成建材' },
            { id:'P26', type:'product', icon:'👟', name:'PU系靴底・エラストマー',
              usage:'スポーツシューズ・車輪・キャスター・産業ロール',
              feat:'耐摩耗・高反発・軽量',
              makers:'DIC・三洋化成・BASF' }
          ]
        },
        {
          id: 'B4', type: 'sub', icon: '💿',
          name: 'ポリカーボネート', sub: 'Polycarbonate',
          children: [
            { id:'P27', type:'product', icon:'🕶️', name:'PC光学グレード',
              usage:'眼鏡レンズ・DVDディスク・一眼レフマウント・スマホレンズ',
              feat:'光透過率89%・耐衝撃・成形精度',
              makers:'帝人（パンライト）・コベストロ（マクロロン）・三菱エンジ' },
            { id:'P28', type:'product', icon:'🪟', name:'PCシート・グレージング',
              usage:'防弾ガラス・温室パネル・スタジアム屋根',
              feat:'衝撃強度はガラスの250倍・軽量・UVカット可',
              makers:'旭硝子（AGC）・住友ベークライト・Sabic' },
            { id:'P29', type:'product', icon:'🔌', name:'PC/ABSアロイ',
              usage:'ノートPC筐体・自動車インパネ・スマートフォン背面',
              feat:'耐衝撃＋成形性の最適バランス',
              makers:'三菱エンジニアリングプラ・コベストロ・LG Chem' }
          ]
        },
        {
          id: 'B5', type: 'sub', icon: '🦠',
          name: 'その他縮合系', sub: 'Other Condensation',
          children: [
            { id:'P30', type:'product', icon:'🔗', name:'PPS（ポリフェニレンサルファイド）',
              usage:'自動車エンジン部品・電子コネクタ・化学ポンプ',
              feat:'耐熱280℃・耐薬品・難燃・寸法精度',
              makers:'東レ・DIC・チェブロンフィリップス' },
            { id:'P31', type:'product', icon:'✈️', name:'PEEK（ポリエーテルエーテルケトン）',
              usage:'航空宇宙部品・医療インプラント・半導体治具',
              feat:'超高耐熱（連続使用240℃）・高強度・生体適合',
              makers:'Victrex・ソルベイ・中国生産増加中' }
          ]
        }
      ]
    },
    {
      id: 'C', type: 'cat', icon: '🔄',
      name: '開環重合', sub: 'Ring-Opening Polymerization',
      children: [
        {
          id: 'C1', type: 'sub', icon: '⭕',
          name: 'ε-カプロラクタム系', sub: 'Caprolactam-based',
          children: [
            { id:'P32', type:'product', icon:'⚙️', name:'Nylon 6（ε-カプロラクタム由来）',
              usage:'産業用ロープ・エアバッグ布・ベルト・歯車',
              feat:'柔軟性・耐油性・耐摩耗性',
              makers:'ユニチカ・宇部興産・AdvanSix' }
          ]
        },
        {
          id: 'C2', type: 'sub', icon: '🔐',
          name: 'エポキシ開環', sub: 'Epoxide Ring-Opening',
          children: [
            { id:'P33', type:'product', icon:'🖥️', name:'エポキシ樹脂（基板・複合材料）',
              usage:'プリント基板・炭素繊維複合材・高圧タンク・半導体封止剤',
              feat:'高接着・寸法安定・耐薬品・電気絶縁',
              makers:'三菱ケミカル・DIC・Westlake Epoxy（旧Hexion）' },
            { id:'P34', type:'product', icon:'🚀', name:'エポキシCFRP（炭素繊維強化樹脂）',
              usage:'航空機胴体・自動車ルーフ・スポーツ用品・風力発電ブレード',
              feat:'比強度がアルミの7倍・軽量化に直結',
              makers:'東レ・帝人・三菱ケミカル（マトリクス樹脂）' }
          ]
        },
        {
          id: 'C3', type: 'sub', icon: '🌿',
          name: 'ラクチド系（バイオ系）', sub: 'Lactide-based (Bio)',
          children: [
            { id:'P35', type:'product', icon:'♻️', name:'PLA（ポリ乳酸）',
              usage:'食品容器・使い捨てカトラリー・医療用縫合糸・3Dプリンタ',
              feat:'植物由来・生分解性・コンポスト可能',
              makers:'NatureWorks・Corbion・豊田通商（供給拡大中）' }
          ]
        }
      ]
    }
  ]
};

/* Build interactive tree DOM */
let treeBuilt = false;

function buildTree() {
  if (treeBuilt) return;
  treeBuilt = true;
  const mount = document.getElementById('itree-mount');
  if (!mount) return;
  mount.innerHTML = '';
  mount.appendChild(createNode(TREE_DATA, true));
}

function createNode(node, isRoot = false) {
  const wrapper = document.createElement('div');
  wrapper.className = 'itree-node';

  // Row
  const row = document.createElement('div');
  row.className = `itree-row type-${node.type}`;
  row.id = `itree-row-${node.id}`;

  const hasChildren = node.children && node.children.length > 0;
  const isProduct = node.type === 'product';

  row.innerHTML = `
    <span class="itree-icon">${node.icon}</span>
    <span class="itree-label">
      <div class="itree-name">${node.name}</div>
      ${node.sub ? `<div class="itree-sub-name">${node.sub}</div>` : ''}
    </span>
    ${hasChildren ? `<span class="itree-count-badge">${node.children.length}</span><span class="itree-chevron">›</span>` : ''}
    ${isProduct ? '<span class="itree-chevron">›</span>' : ''}
  `;

  wrapper.appendChild(row);

  if (hasChildren) {
    // Child container
    const childWrap = document.createElement('div');
    childWrap.className = 'itree-children';
    childWrap.id = `itree-children-${node.id}`;
    node.children.forEach(child => {
      childWrap.appendChild(createNode(child));
    });
    wrapper.appendChild(childWrap);

    row.addEventListener('click', () => toggleNode(row, childWrap));

    // Auto-expand root
    if (isRoot) {
      row.classList.add('expanded');
      childWrap.classList.add('open');
    }
  }

  if (isProduct) {
    // Product detail card
    const detail = document.createElement('div');
    detail.className = 'itree-product-detail';
    detail.id = `itree-detail-${node.id}`;
    detail.innerHTML = `
      <div class="product-card">
        <div class="product-row">
          <span class="product-row-label">📌 用途</span>
          <span>${node.usage}</span>
        </div>
        <div class="product-row">
          <span class="product-row-label">✨ 特徴</span>
          <span>${node.feat}</span>
        </div>
        <div class="product-row">
          <span class="product-row-label">🏭 主要メーカー</span>
          <span>${node.makers}</span>
        </div>
      </div>
    `;
    wrapper.appendChild(detail);
    row.addEventListener('click', () => toggleNode(row, detail));
  }

  return wrapper;
}

function toggleNode(row, container) {
  const isOpen = container.classList.contains('open');
  row.classList.toggle('expanded', !isOpen);
  container.classList.toggle('open', !isOpen);
}

/* ── Tab Navigation ── */
function initTabs() {
  const navBtns = document.querySelectorAll('.nav-btn');
  const panels  = document.querySelectorAll('.tab-panel');

  navBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const target = btn.dataset.tab;
      navBtns.forEach(b => b.classList.toggle('active', b === btn));
      panels.forEach(p => {
        const isMatch = p.id === `tab-${target}`;
        p.classList.toggle('active', isMatch);
      });
      if (target === 'tree')     buildTree();
      if (target === 'db')       initDB();
      if (target === 'progress') renderProgress();
    });
  });
}

/* ── Learn Tab — Accordion ── */
function initAccordion() {
  document.querySelectorAll('.learn-step-header').forEach(header => {
    header.addEventListener('click', () => {
      const card = header.closest('.learn-step-card');
      const isOpen = card.classList.contains('open');
      // Close all
      document.querySelectorAll('.learn-step-card.open').forEach(c => c.classList.remove('open'));
      if (!isOpen) card.classList.add('open');
    });
  });
  // Open first by default
  const first = document.querySelector('.learn-step-card');
  if (first) first.classList.add('open');
}

/* ── CSV Parser ── */
function parseCSV(text) {
  const lines = text.trim().split('\n');
  const headers = lines[0].split(',').map(h => h.trim());
  return lines.slice(1).map(line => {
    // Handle quoted fields
    const cols = [];
    let cur = '', inQ = false;
    for (let i = 0; i < line.length; i++) {
      const c = line[i];
      if (c === '"') { inQ = !inQ; }
      else if (c === ',' && !inQ) { cols.push(cur.trim()); cur = ''; }
      else { cur += c; }
    }
    cols.push(cur.trim());
    const obj = {};
    headers.forEach((h, i) => obj[h] = cols[i] ?? '');
    return obj;
  }).filter(r => r.id);
}

/* ── Shuffle ── */
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* ── Load expanded quiz data ── */
function loadQuestions() {
  allQuestions = window.QUIZ_DATA || [];
  initQuizSetup();
}

/* ── Quiz Setup & Initializer ── */
let selectedCategory = 'all';
let selectedCount = '10';

function initQuizSetup() {
  document.getElementById('quiz-loading').style.display = 'none';
  document.getElementById('quiz-setup').style.display = 'block';
  document.getElementById('quiz-main').style.display = 'none';

  // Setup category selection buttons click listeners
  const catBtns = document.querySelectorAll('#quiz-cat-selector .filter-chip');
  catBtns.forEach(btn => {
    btn.removeEventListener('click', handleCatClick);
    btn.addEventListener('click', handleCatClick);
  });

  // Setup count selection buttons click listeners
  const countBtns = document.querySelectorAll('#quiz-count-selector .filter-chip');
  countBtns.forEach(btn => {
    btn.removeEventListener('click', handleCountClick);
    btn.addEventListener('click', handleCountClick);
  });

  // Start button listener (bind only once)
  const startBtn = document.getElementById('quiz-start-btn');
  if (startBtn && !startBtn._bound) {
    startBtn._bound = true;
    startBtn.addEventListener('click', () => {
      document.getElementById('quiz-setup').style.display = 'none';
      document.getElementById('quiz-main').style.display = 'block';
      startCustomQuizSession(selectedCategory, selectedCount);
    });
  }
}

function handleCatClick(e) {
  const catBtns = document.querySelectorAll('#quiz-cat-selector .filter-chip');
  catBtns.forEach(b => b.classList.remove('active'));
  e.currentTarget.classList.add('active');
  selectedCategory = e.currentTarget.dataset.cat;
}

function handleCountClick(e) {
  const countBtns = document.querySelectorAll('#quiz-count-selector .filter-chip');
  countBtns.forEach(b => b.classList.remove('active'));
  e.currentTarget.classList.add('active');
  selectedCount = e.currentTarget.dataset.count;
}

function startCustomQuizSession(category, count) {
  // Filter by category
  let filtered = allQuestions;
  if (category !== 'all') {
    filtered = allQuestions.filter(q => q.cat === category);
  }

  // Slice by count
  let actualCount = filtered.length;
  if (count !== 'all') {
    actualCount = Math.min(parseInt(count), filtered.length);
  }

  currentSession.questions = shuffle(filtered).slice(0, actualCount);
  currentSession.index = 0;
  currentSession.correct = 0;
  currentSession.answered = false;

  document.getElementById('quiz-score-summary').classList.remove('show');
  document.getElementById('quiz-question-area').style.display = 'block';
  renderQuestion();
}

function renderQuestion() {
  const { questions, index } = currentSession;
  const q = questions[index];
  const total = questions.length;

  // Progress bar
  document.getElementById('quiz-progress-bar').style.width = `${(index / total) * 100}%`;
  document.getElementById('quiz-count').textContent = `Q${index + 1} / ${total}`;
  const catEl = document.getElementById('quiz-q-category');
  if (catEl) catEl.textContent = `Q${index + 1} / ${total} • [${q.cat}]`;

  // Question text
  document.getElementById('quiz-q-text').textContent = q.question;

  // Choices
  const choicesEl = document.getElementById('quiz-choices');
  const letters = ['A', 'B', 'C', 'D'];
  const choices = [q.choice1, q.choice2, q.choice3, q.choice4];
  choicesEl.innerHTML = '';
  choices.forEach((text, i) => {
    const btn = document.createElement('button');
    btn.className = 'choice-btn';
    btn.dataset.idx = i + 1;
    btn.innerHTML = `<span class="choice-letter">${letters[i]}</span><span>${text}</span>`;
    btn.addEventListener('click', () => handleChoice(btn, i + 1));
    choicesEl.appendChild(btn);
  });

  // Hide feedback
  const fb = document.getElementById('quiz-feedback');
  fb.classList.remove('show', 'correct-fb', 'wrong-fb');
  document.getElementById('quiz-next-btn').style.display = 'none';
  currentSession.answered = false;
}

function handleChoice(btn, chosenIdx) {
  if (currentSession.answered) return;
  currentSession.answered = true;

  const q = currentSession.questions[currentSession.index];
  const correctIdx = parseInt(q.answer);
  const isCorrect = chosenIdx === correctIdx;

  // Disable all choices
  const allBtns = document.querySelectorAll('.choice-btn');
  allBtns.forEach(b => {
    b.disabled = true;
    const idx = parseInt(b.dataset.idx);
    if (idx === correctIdx && !isCorrect) b.classList.add('highlight-correct');
  });

  if (isCorrect) {
    btn.classList.add('correct');
    currentSession.correct++;
  } else {
    btn.classList.add('wrong');
  }

  // Feedback
  const fb = document.getElementById('quiz-feedback');
  const fbTitle = document.getElementById('feedback-title');
  const fbExp   = document.getElementById('feedback-explanation');
  fb.classList.add('show', isCorrect ? 'correct-fb' : 'wrong-fb');
  fbTitle.textContent = isCorrect ? '✅ 正解！' : '❌ 不正解';
  fbExp.textContent = q.explanation;

  // Show next button
  document.getElementById('quiz-next-btn').style.display = 'block';
}

function nextQuestion() {
  currentSession.index++;
  if (currentSession.index >= currentSession.questions.length) {
    showQuizResult();
  } else {
    renderQuestion();
  }
}

function showQuizResult() {
  const { correct, questions } = currentSession;
  const total = questions.length;
  const pct = Math.round((correct / total) * 100);

  document.getElementById('quiz-question-area').style.display = 'none';
  const summary = document.getElementById('quiz-score-summary');
  summary.classList.add('show');

  document.getElementById('result-correct').textContent = correct;
  document.getElementById('result-total').textContent = total;
  document.getElementById('result-pct').textContent = `${pct}%`;

  // Conic gradient
  const circle = document.getElementById('score-circle');
  circle.style.setProperty('--pct', `${pct}%`);

  let msg = '', sub = '';
  if (pct >= 90) { msg = '🎉 素晴らしい！'; sub = '完璧な理解です！'; }
  else if (pct >= 70) { msg = '👍 よくできました！'; sub = 'あと少しで完璧！'; }
  else if (pct >= 50) { msg = '📚 まだ伸びしろあり'; sub = '解説を確認して復習しましょう。'; }
  else { msg = '💪 まずは基礎から！'; sub = 'Learnタブで基礎を学び直そう。'; }

  document.getElementById('result-msg').textContent = msg;
  document.getElementById('result-sub').textContent = sub;

  // Save stats
  const stats = loadStats();
  stats.totalCorrect += correct;
  stats.totalAttempts += total;
  saveStats(stats);
  recordStudyDay();
}

/* ── Progress Tab ── */
function renderProgress() {
  const stats = loadStats();
  const today = todayStr();
  const studied = stats.studiedDays || [];

  // Streak
  document.getElementById('streak-num').textContent = stats.streak || 0;

  // Stats
  document.getElementById('stat-total-q').textContent  = stats.totalAttempts || 0;
  document.getElementById('stat-correct').textContent  = stats.totalCorrect || 0;
  document.getElementById('stat-sessions').textContent = stats.sessions || 0;
  const acc = stats.totalAttempts > 0 ? Math.round((stats.totalCorrect / stats.totalAttempts) * 100) : 0;
  document.getElementById('stat-acc').textContent = `${acc}%`;

  // 100-day grid
  const dayStart = new Date('2025-01-01'); // reference start
  const grid = document.getElementById('days-grid');
  grid.innerHTML = '';
  for (let i = 0; i < 100; i++) {
    const d = new Date(dayStart);
    d.setDate(d.getDate() + i);
    const ds = d.toISOString().slice(0, 10);
    const dot = document.createElement('div');
    dot.className = 'day-dot' + (ds === today ? ' today' : studied.includes(ds) ? ' done' : '');
    dot.title = ds;
    grid.appendChild(dot);
  }

  // Study progress bar
  const daysPct = Math.min((studied.length / 100) * 100, 100);
  document.getElementById('days-progress-bar').style.width = `${daysPct}%`;
  document.getElementById('days-progress-label').textContent = `${studied.length} / 100日`;
}

/* ── Reset Data ── */
function resetAllData() {
  if (!confirm('すべての学習データをリセットしますか？この操作は取り消せません。')) return;
  localStorage.removeItem(LS_KEY_STATS);
  localStorage.removeItem(LS_KEY_ACTIVITY);
  renderProgress();
  showToast('🗑️ データをリセットしました');
}

/* ── Chemistry Database Tab ── */
let dbActiveCategory = 'all';
let dbSearchQuery = '';

function initDB() {
  // Render grid for the first time
  filterDB();

  // Search input event
  const searchInput = document.getElementById('db-search');
  const clearBtn = document.getElementById('db-search-clear');
  
  if (searchInput && !searchInput._bound) {
    searchInput._bound = true;
    searchInput.addEventListener('input', (e) => {
      dbSearchQuery = e.target.value.toLowerCase().trim();
      if (clearBtn) clearBtn.classList.toggle('hidden', dbSearchQuery === '');
      filterDB();
    });
  }

  if (clearBtn && !clearBtn._bound) {
    clearBtn._bound = true;
    clearBtn.addEventListener('click', () => {
      if (searchInput) searchInput.value = '';
      clearBtn.classList.add('hidden');
      dbSearchQuery = '';
      filterDB();
    });
  }

  // Filter chips click delegation
  const chipsContainer = document.getElementById('db-filter-chips');
  if (chipsContainer && !chipsContainer._bound) {
    chipsContainer._bound = true;
    chipsContainer.addEventListener('click', (e) => {
      const chip = e.target.closest('.filter-chip');
      if (chip) {
        document.querySelectorAll('#db-filter-chips .filter-chip').forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        dbActiveCategory = chip.dataset.cat;
        filterDB();
      }
    });
  }

  // Grid click delegation to open modal
  const grid = document.getElementById('db-grid');
  if (grid && !grid._bound) {
    grid._bound = true;
    grid.addEventListener('click', (e) => {
      const card = e.target.closest('.db-card');
      if (card) {
        openPolymerDetail(card.dataset.id);
      }
    });
  }

  // Modal close handlers
  const closeBtn = document.getElementById('modal-close');
  if (closeBtn && !closeBtn._bound) {
    closeBtn._bound = true;
    closeBtn.addEventListener('click', closePolymerModal);
  }

  const modal = document.getElementById('db-modal');
  if (modal && !modal._bound) {
    modal._bound = true;
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        closePolymerModal();
      }
    });
  }
}

function filterDB() {
  const db = window.POLYMER_DB || [];
  
  const filtered = db.filter(p => {
    // Category match
    const matchesCat = dbActiveCategory === 'all' || p.category === dbActiveCategory;
    
    // Search match
    const textToSearch = [
      p.name, p.fullName, p.formula, p.monomer, p.polymerization, p.category, 
      p.trend, ...p.usage, ...p.makers, ...p.tags
    ].join(' ').toLowerCase();
    const matchesSearch = dbSearchQuery === '' || textToSearch.includes(dbSearchQuery);
    
    return matchesCat && matchesSearch;
  });

  renderDBGrid(filtered);
}

function renderDBGrid(data) {
  const grid = document.getElementById('db-grid');
  const empty = document.getElementById('db-empty');
  if (!grid) return;
  
  grid.innerHTML = '';
  
  if (data.length === 0) {
    grid.classList.add('hidden');
    if (empty) empty.classList.remove('hidden');
    return;
  }
  
  if (empty) empty.classList.add('hidden');
  grid.classList.remove('hidden');

  data.forEach(p => {
    const card = document.createElement('div');
    card.className = 'db-card animate-in';
    card.dataset.id = p.id;
    card.innerHTML = `
      <div>
        <div class="db-card-title">${p.name}</div>
        <div class="db-card-fullname">${p.fullName}</div>
      </div>
      <div class="db-card-footer">
        <span class="db-card-cat">${p.category}</span>
        <span class="db-card-arrow">▶</span>
      </div>
    `;
    grid.appendChild(card);
  });
}

function openPolymerDetail(id) {
  const db = window.POLYMER_DB || [];
  const p = db.find(x => x.id === id);
  if (!p) return;

  document.getElementById('modal-title').textContent = p.name;
  document.getElementById('modal-badge').textContent = p.category;
  document.getElementById('modal-fullname').textContent = p.fullName;
  document.getElementById('modal-formula').textContent = p.formula;
  document.getElementById('modal-svg').innerHTML = p.svg;
  
  document.getElementById('prop-density').textContent = p.properties.density;
  document.getElementById('prop-tg').textContent = p.properties.Tg;
  document.getElementById('prop-tm').textContent = p.properties.Tm;
  document.getElementById('prop-tensile').textContent = p.properties.tensile;
  document.getElementById('prop-transparency').textContent = p.properties.transparency;
  document.getElementById('prop-heat').textContent = p.properties.heatResist;
  
  document.getElementById('modal-monomer').textContent = p.monomer;
  document.getElementById('modal-polymerization').textContent = p.polymerization;
  
  const usageList = document.getElementById('modal-usage');
  usageList.innerHTML = p.usage.map(u => `<li>${u}</li>`).join('');
  
  const makersList = document.getElementById('modal-makers');
  makersList.innerHTML = p.makers.map(m => `<li>${m}</li>`).join('');
  
  document.getElementById('modal-trend').innerHTML = `📌 <strong>業界トレンド・環境対応:</strong><br>${p.trend}`;
  
  const tagsContainer = document.getElementById('modal-tags');
  tagsContainer.innerHTML = p.tags.map(t => `<span class="keyword-chip" style="background:rgba(6,182,212,0.15);border-color:rgba(6,182,212,0.3);color:#67e8f9">${t}</span>`).join('');

  document.getElementById('db-modal').classList.remove('hidden');
}

function closePolymerModal() {
  document.getElementById('db-modal').classList.add('hidden');
}

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initAccordion();
  loadQuestions();
  renderProgress();

  // Next button
  document.getElementById('quiz-next-btn')?.addEventListener('click', nextQuestion);
  
  // Retry button (shows Setup Screen)
  document.getElementById('quiz-retry-btn')?.addEventListener('click', () => {
    document.getElementById('quiz-setup').style.display = 'block';
    document.getElementById('quiz-main').style.display = 'none';
  });
  
  // Reset
  document.getElementById('reset-btn')?.addEventListener('click', resetAllData);
});
