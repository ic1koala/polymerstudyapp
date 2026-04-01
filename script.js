/* ========================================================
   Polymer Learning App — script.js
   Tab switching · Accordion · Quiz (CSV) · Progress
   ======================================================== */

/* ── Inline fallback quiz data (used when CSV fetch fails e.g. file://) ── */
const FALLBACK_QUESTIONS = [
  { id:'1', question:'ポリマー（polymer）という言葉の語源として正しいものはどれですか？', choice1:'poly（多い）＋ mer（部分）', choice2:'poly（重い）＋ mer（分子）', choice3:'poly（強い）＋ mer（結合）', choice4:'poly（硬い）＋ mer（素材）', answer:'1', explanation:'ポリマーはギリシャ語の「poly（多い）」と「mer（部分・単位）」が語源です。つまり「多くの繰り返し単位からできたもの」という意味で、モノマーが多数結合した高分子化合物のことです。' },
  { id:'2', question:'アクリル樹脂の原料となるモノマーは次のうちどれですか？', choice1:'スチレン', choice2:'アクリル酸メチル（メチルアクリレート）', choice3:'エチレン', choice4:'プロピレン', answer:'2', explanation:'アクリル樹脂はアクリル酸エステル（アクリル酸メチル等）やメタクリル酸エステル（MMA）を原料とするモノマーが重合して作られます。MMAから作られるPMMAは透明度が高く「有機ガラス」とも呼ばれます。' },
  { id:'3', question:'ラジカル重合において、連鎖反応を開始させる役割を担う化学種はどれですか？', choice1:'カチオン（陽イオン）', choice2:'アニオン（陰イオン）', choice3:'ラジカル（フリーラジカル）', choice4:'金属触媒', answer:'3', explanation:'ラジカル重合では、熱や光などのエネルギーによって開始剤が分解し、不対電子を持つ「ラジカル」が生成します。このラジカルがモノマーと反応して連鎖的に重合が進みます。' },
  { id:'4', question:'縮合重合（縮重合）の特徴として正しいものはどれですか？', choice1:'モノマーが次々と連鎖して成長する', choice2:'副生成物（水など）を生成しながら結合する', choice3:'ラジカルが連鎖担体となる', choice4:'酸素が必要', answer:'2', explanation:'縮合重合では、2つの官能基（例：-OHと-COOH）が反応するたびに水やアルコールなどの小分子（副生成物）が生成します。ナイロンやポリエステルがこの方法で作られます。' },
  { id:'5', question:'PMMAが「有機ガラス」とも呼ばれる主な理由はどれですか？', choice1:'電気を通しやすいため', choice2:'ガラスよりも硬いため', choice3:'透明度が非常に高く、ガラスの代替として使えるため', choice4:'水に溶けないため', answer:'3', explanation:'PMMA（ポリメタクリル酸メチル）は光線透過率が約92%とガラスに匹敵する透明度を持ちます。また軽量で割れにくいため、水槽・看板・光学レンズなどガラス代替品として広く使われ「有機ガラス」と呼ばれます。' },
  { id:'6', question:'付加重合（addition polymerization）とはどんな反応ですか？', choice1:'モノマー同士が縮合して水を放出しながら結合する', choice2:'二重結合や三重結合を持つモノマーが開環・付加して鎖状に結合する反応', choice3:'金属イオンを介して結合する反応', choice4:'高温高圧でのみ起こる反応', answer:'2', explanation:'付加重合は炭素-炭素二重結合が開いてモノマー同士が次々と付加的に結合していく反応です。副生成物は生成されず、モノマーの分子量がそのままポリマーに活かされます。PE、PP、PSなどが代表例です。' },
  { id:'7', question:'熱可塑性樹脂（thermoplastic）の最大の特徴はどれですか？', choice1:'加熱すると硬化し、再溶融できない', choice2:'加熱すると軟化・溶融し、冷却すると再び固まる', choice3:'水に溶ける', choice4:'電気を通す', answer:'2', explanation:'熱可塑性樹脂は加熱することで軟化・溶融し、冷却すると再度固化します。この特性はリサイクルしやすい利点があります。PE、PP、PETなどが代表例です。' },
  { id:'8', question:'熱硬化性樹脂（thermosetting resin）の説明として正しいものはどれですか？', choice1:'加熱すると溶け、成形が容易', choice2:'加熱によって三次元架橋構造を形成し、再溶融できない', choice3:'常温でも液体のまま', choice4:'水に溶けやすい', answer:'2', explanation:'熱硬化性樹脂は加熱によってモノマーや低分子量ポリマーが三次元的に架橋し、硬化します。一度硬化すると再融解しないため成形加工は一度限りですが、耐熱性・耐薬品性に優れます。エポキシ・フェノール樹脂などが代表例です。' },
  { id:'9', question:'アクリル系塗料が自動車や建築外装に広く使われる主な理由はどれですか？', choice1:'価格が非常に安価なため', choice2:'耐候性・耐紫外線性が高く、光沢が長持ちするため', choice3:'水に溶けず施工が難しいため', choice4:'重量が軽いため', answer:'2', explanation:'アクリル系塗料はアクリル樹脂を主成分とし、紫外線や雨風に対する耐候性が非常に高いのが特徴です。また色相の安定性・光沢保持性も優れているため、自動車のトップコートや建築外壁塗装に広く使われています。' },
  { id:'10', question:'重合度（degree of polymerization）とは何を表す指標ですか？', choice1:'ポリマーの硬さの指標', choice2:'1本のポリマー鎖に含まれるモノマー単位の繰り返し数', choice3:'ポリマーの溶融温度', choice4:'ポリマーの密度', answer:'2', explanation:'重合度はポリマー1分子中に含まれるモノマー単位（繰り返し単位）の数です。重合度が大きいほど分子量が高く、強度・粘度などの物性に影響します。' }
];

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

/* ── Load CSV (with inline fallback for file:// access) ── */
async function loadQuestions() {
  try {
    // Fetch will fail under file:// due to CORS — catch and use fallback
    if (location.protocol === 'file:') throw new Error('file protocol');
    const res = await fetch('./data/test.csv');
    if (!res.ok) throw new Error('fetch failed');
    const text = await res.text();
    allQuestions = parseCSV(text);
  } catch (e) {
    console.info('CSV fetch skipped, using inline fallback:', e.message);
    allQuestions = FALLBACK_QUESTIONS;
  }
  initQuiz();
}

/* ── Quiz ── */
function initQuiz() {
  document.getElementById('quiz-loading').style.display = 'none';
  document.getElementById('quiz-main').style.display = 'block';
  startQuizSession();
}

function startQuizSession(count = 10) {
  currentSession.questions = shuffle(allQuestions).slice(0, Math.min(count, allQuestions.length));
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

/* ── Init ── */
document.addEventListener('DOMContentLoaded', () => {
  initTabs();
  initAccordion();
  loadQuestions();
  renderProgress();

  // Next button
  document.getElementById('quiz-next-btn')?.addEventListener('click', nextQuestion);
  // Retry button
  document.getElementById('quiz-retry-btn')?.addEventListener('click', () => startQuizSession(10));
  // Reset
  document.getElementById('reset-btn')?.addEventListener('click', resetAllData);
});
