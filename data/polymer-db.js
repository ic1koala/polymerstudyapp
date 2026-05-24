/* ================================================================
   polymer-db.js  —  Polymer Academy 30種ポリマーデータベース
   全データ・手書き構造式SVGをインラインJS定義、fetch不要、ラグゼロ
   ================================================================ */

const POLYMER_DB = [
  {
    id: 'pmma',
    name: 'PMMA',
    fullName: 'ポリメタクリル酸メチル（アクリル樹脂）',
    formula: '(C₅H₈O₂)ₙ',
    monomer: 'メタクリル酸メチル（MMA）',
    polymerization: 'ラジカル重合（付加重合）',
    category: 'アクリル系',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain -->
      <path d="M 20,60 L 180,60" stroke="#06b6d4" stroke-width="2.5" stroke-dasharray="none" fill="none" />
      <!-- Side groups -->
      <path d="M 100,60 L 100,30" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <path d="M 100,60 L 100,90" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <path d="M 100,90 L 130,90" stroke="#06b6d4" stroke-width="2" fill="none" />
      <!-- Labels -->
      <text x="100" y="22" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <text x="100" y="104" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">C=O</text>
      <text x="145" y="94" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">OCH₃</text>
      <!-- Brackets -->
      <path d="M 50,20 L 40,20 L 40,100 L 50,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,20 L 160,20 L 160,100 L 150,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.19 g/cm³', Tg: '105℃', Tm: 'なし（非晶性）',
      tensile: '72 MPa', transparency: '92%（有機ガラス最高峰）', heatResist: '80℃（連続使用）'
    },
    usage: ['有機ガラス板・看板', '自動車テールランプ', '水族館の大型水槽', '光ファイバー', '歯科材料・医療用レンズ'],
    makers: ['三菱ケミカル（デルペット）', '住友化学（スミペックス）', '旭化成（デルパウダー）', 'Röhm（PLEXIGLAS）'],
    trend: 'バイオマスMMA（植物由来原料）の商用化や、熱分解によるモノマー回収率95%以上のケミカルリサイクル技術の実証が進んでいます。',
    tags: ['超高透明', '耐候性', '光学レンズ', '易成形']
  },
  {
    id: 'hdpe',
    name: 'HDPE',
    fullName: '高密度ポリエチレン',
    formula: '(C₂H₄)ₙ',
    monomer: 'エチレン',
    polymerization: '配位重合（チーグラー・ナッタ触媒/メタロセン触媒）',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain zigzag -->
      <path d="M 30,70 L 65,40 L 100,70 L 135,40 L 170,70" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" fill="none" />
      <!-- Labels -->
      <text x="65" y="30" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">CH₂</text>
      <text x="135" y="30" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">CH₂</text>
      <text x="100" y="86" font-family="sans-serif" font-size="10" fill="#94a3b8" text-anchor="middle">CH₂</text>
      <!-- Brackets -->
      <path d="M 45,25 L 35,25 L 35,95 L 45,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 155,25 L 165,25 L 165,95 L 155,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="171" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '0.94〜0.97 g/cm³', Tg: '-120℃', Tm: '130〜140℃（結晶性）',
      tensile: '25〜35 MPa', transparency: '半透明〜不透明', heatResist: '90〜100℃'
    },
    usage: ['灯油缶・洗剤ボトル', 'シャンプー容器', '水道パイプ・ガス管', 'レジ袋・ブルーシート'],
    makers: ['プライムポリマー', '日本ポリエチレン', 'ダウ・ケミカル', 'LyondellBasell'],
    trend: '単一素材化（モノマテリアル）によるリサイクル性向上を狙い、従来多層フィルムだった包材をすべてHDPEにする動きが急速に進んでいます。',
    tags: ['耐薬品性', '高剛性', '耐衝撃性', '低吸水']
  },
  {
    id: 'ldpe',
    name: 'LDPE',
    fullName: '低密度ポリエチレン',
    formula: '(C₂H₄)ₙ',
    monomer: 'エチレン',
    polymerization: '高圧ラジカル重合',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain zigzag with a long branch -->
      <path d="M 30,55 L 65,35 L 100,55 L 135,35 L 170,55" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round" stroke-linecap="round" fill="none" />
      <path d="M 100,55 L 100,85 L 125,100" stroke="#3b82f6" stroke-width="2" stroke-linejoin="round" stroke-linecap="round" fill="none" />
      <!-- Label -->
      <text x="135" y="105" font-family="sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Branch</text>
      <!-- Brackets -->
      <path d="M 45,20 L 35,20 L 35,110 L 45,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 155,20 L 165,20 L 165,110 L 155,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="171" y="112" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '0.91〜0.93 g/cm³', Tg: '-110℃', Tm: '105〜115℃（結晶性低い）',
      tensile: '10〜20 MPa', transparency: '良好な半透明', heatResist: '70〜80℃'
    },
    usage: ['ゴミ袋・食品ラップ', '農業用マルチフィルム', '紙パックの内面ラミネートコート', 'マヨネーズ等の絞り出し容器'],
    makers: ['日本ポリエチレン', 'プライムポリマー', '住友化学', 'ExxonMobil'],
    trend: '生分解性樹脂とのブレンドや、使用済みフィルムの高度選別回収によるクローズドループリサイクルの導入が進められています。',
    tags: ['柔軟性', '高透明', '易熱シール', 'ラミネート']
  },
  {
    id: 'pp',
    name: 'PP',
    fullName: 'ポリプロピレン',
    formula: '(C₃H₆)ₙ',
    monomer: 'プロピレン',
    polymerization: '配位重合（チーグラー・ナッタ触媒/メタロセン触媒）',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Zigzag -->
      <path d="M 30,70 L 65,40 L 100,70 L 135,40 L 170,70" stroke="#3b82f6" stroke-width="2.5" stroke-linejoin="round" fill="none" />
      <!-- Methyl branch -->
      <path d="M 65,40 L 65,15" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <path d="M 135,40 L 135,15" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <!-- Labels -->
      <text x="65" y="10" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <text x="135" y="10" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <!-- Brackets -->
      <path d="M 45,25 L 35,25 L 35,95 L 45,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 155,25 L 165,25 L 165,95 L 155,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="171" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '0.90〜0.92 g/cm³（最軽量クラス）', Tg: '-10℃', Tm: '160〜170℃（結晶性）',
      tensile: '30〜40 MPa', transparency: '半透明', heatResist: '120〜130℃'
    },
    usage: ['自動車バンパー・内装材', '食品保存容器・タッパー', '家電筐体', '使い捨て注射器・医療用キャップ', '不織布マスク'],
    makers: ['プライムポリマー', 'サンアロマー', '日本ポリプロ', 'LyondellBasell'],
    trend: 'ヒンジ構造パーツなど金型成形性を活かした軽量化材料としてEV採用が増大。ケミカルリサイクルによる食品包装向け再資源化の動きが本格化。',
    tags: ['最軽量', '耐熱ヒンジ', '耐薬品性', '高剛性']
  },
  {
    id: 'ps',
    name: 'PS',
    fullName: 'ポリスチレン',
    formula: '(C₈H₈)ₙ',
    monomer: 'スチレン',
    polymerization: 'ラジカル重合（バルク重合/懸濁重合）',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain -->
      <path d="M 20,45 L 180,45" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <!-- Benzene link -->
      <path d="M 100,45 L 100,65" stroke="#3b82f6" stroke-width="2" fill="none" />
      <!-- Benzene ring -->
      <polygon points="100,65 120,75 120,95 100,105 80,95 80,75" stroke="#3b82f6" stroke-width="2" fill="none" />
      <!-- Inner double bonds for benzene -->
      <line x1="100" y1="69" x2="116" y2="77" stroke="#3b82f6" stroke-width="1.5" />
      <line x1="116" y1="93" x2="100" y2="101" stroke="#3b82f6" stroke-width="1.5" />
      <line x1="84" y1="93" x2="84" y2="77" stroke="#3b82f6" stroke-width="1.5" />
      <!-- Brackets -->
      <path d="M 50,20 L 40,20 L 40,110 L 50,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,20 L 160,20 L 160,110 L 150,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="112" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.05 g/cm³', Tg: '100℃', Tm: 'なし（非晶性）',
      tensile: '35〜50 MPa（硬くて脆い）', transparency: '90%（GPPSグレード）', heatResist: '70〜80℃'
    },
    usage: ['使い捨てコップ・プラスチックカトラリー', 'カップ麺容器・発泡スチロール（EPS）', 'テレビや冷蔵庫の内装品', 'プラモデルの部品'],
    makers: ['PSジャパン', 'DIC', '東洋スチレン', 'INEOS Styrolution'],
    trend: '発泡スチロールのリサイクル回収率は約90%と高く、これを熱分解してスチレンモノマーに戻し、新品のPSを再生産するケミカルリサイクルが商用開始。',
    tags: ['高透明', '高剛性', '発泡軽量', '易成形']
  },
  {
    id: 'pvc',
    name: 'PVC',
    fullName: 'ポリ塩化ビニル',
    formula: '(C₂H₃Cl)ₙ',
    monomer: '塩化ビニルモノマー（VCM）',
    polymerization: '懸濁重合/乳化重合',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain -->
      <path d="M 20,60 L 180,60" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <!-- Chlorine bond -->
      <path d="M 100,60 L 100,90" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <!-- Chlorine Text -->
      <text x="100" y="104" font-family="sans-serif" font-weight="bold" font-size="13" fill="#f1f5f9" text-anchor="middle">Cl</text>
      <!-- Brackets -->
      <path d="M 50,25 L 40,25 L 40,105 L 50,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,25 L 160,25 L 160,105 L 150,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.35〜1.45 g/cm³', Tg: '80℃', Tm: 'なし（非晶性）',
      tensile: '50〜80 MPa（硬質）', transparency: '透明〜不透明（配合による）', heatResist: '60〜70℃'
    },
    usage: ['水道用塩ビ管・雨樋', '電線被覆（シース）', '窓枠（サッシ）', 'ビニールハウス用フィルム', '人工皮革・血液バッグ'],
    makers: ['信越化学工業（世界首位）', 'カネカ', '大洋塩ビ', '西大（Westlake Chemical）'],
    trend: 'フタル酸系可塑剤を忌避する動きから、安全な非フタル酸系可塑剤やバイオ由来可塑剤への転換が進み、環境負荷低減を図っています。',
    tags: ['難燃性', '耐薬品性', '耐候性', '安価']
  },
  {
    id: 'abs',
    name: 'ABS',
    fullName: 'アクリロニトリル・ブタジエン・スチレン共重合樹脂',
    formula: '[(C₃H₃N)ₓ·(C₄H₆)y·(C₈H₈)z]ₙ',
    monomer: 'アクリロニトリル（A）、ブタジエン（B）、スチレン（S）',
    polymerization: 'グラフト共重合（主に乳化重合）',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Graft structure schematic -->
      <path d="M 20,40 L 180,40" stroke="#3b82f6" stroke-width="2.5" fill="none" />
      <path d="M 60,40 L 60,70" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 120,40 L 120,70" stroke="#22c55e" stroke-width="2" fill="none" />
      <!-- Labels -->
      <text x="35" y="30" font-family="sans-serif" font-size="10" font-weight="bold" fill="#3b82f6" text-anchor="middle">Styrene</text>
      <text x="60" y="85" font-family="sans-serif" font-size="10" font-weight="bold" fill="#a855f7" text-anchor="middle">Acrylo</text>
      <text x="135" y="85" font-family="sans-serif" font-size="10" font-weight="bold" fill="#22c55e" text-anchor="middle">Butadiene</text>
      <!-- Visual representation -->
      <circle cx="60" cy="40" r="4" fill="#ef4444" />
      <circle cx="120" cy="40" r="4" fill="#ef4444" />
    </svg>`,
    properties: {
      density: '1.04〜1.07 g/cm³', Tg: '105℃', Tm: 'なし（非晶性）',
      tensile: '40〜50 MPa', transparency: '不透明（通常は乳白色）', heatResist: '80〜90℃'
    },
    usage: ['家電製品の筐体（エアコン・掃除機）', '自動車内装部品（インパネ）', 'スーツケース', '3Dプリンタ用フィラメント', 'LEGOブロック'],
    makers: ['テクノUMG', '日本エイアンドエル', '奇美実業（Chimei、世界最大）', 'Sabic'],
    trend: '高衝撃性と金性・塗装性の良さから、使用済み家電からの水平リサイクル（クローズドループ）が最も確立されている樹脂の一つです。',
    tags: ['耐衝撃性', '良光沢', '塗装性', '剛性バランス']
  },
  {
    id: 'pet',
    name: 'PET',
    fullName: 'ポリエチレンテレフタレート',
    formula: '(C₁₀H₈O₄)ₙ',
    monomer: 'テレフタル酸（TPA）、エチレングリコール（EG）',
    polymerization: '縮合重合（直接重縮合またはエステル交換）',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main structure with benzene ring inside -->
      <path d="M 15,60 L 30,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="60,60 75,70 95,70 110,60 95,50 75,50" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 110,60 L 130,60 L 140,80 L 165,80 L 185,60" stroke="#a855f7" stroke-width="2" stroke-linejoin="round" fill="none" />
      <!-- Ester and link details -->
      <path d="M 30,60 L 40,40" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="43" y="38" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9">O</text>
      <!-- Brackets -->
      <path d="M 22,25 L 12,25 L 12,95 L 22,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 175,25 L 185,25 L 185,95 L 175,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="190" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.34〜1.38 g/cm³', Tg: '75℃（非晶部）', Tm: '255〜260℃（結晶性）',
      tensile: '60〜80 MPa', transparency: 'ボトルは極めて高い透明度', heatResist: '120℃（延伸）'
    },
    usage: ['飲料用ペットボトル', 'ポリエステル繊維（衣類フリース）', '包装用フィルム', '電気絶縁テープ', 'X線フィルム'],
    makers: ['東洋紡', '帝人', '三井化学', 'Indorama Ventures'],
    trend: 'ボトルからボトルへの「ボトルtoボトル」リサイクル（メカニカルおよびケミカル）が本格普及し、再生PET比率100%のボトルも増加しています。',
    tags: ['ガスバリア', '強靭', '高透明', 'リサイクル率高']
  },
  {
    id: 'pa6',
    name: 'Nylon 6',
    fullName: 'ポリアミド6（ナイロン6）',
    formula: '(C₆H₁₁NO)ₙ',
    monomer: 'ε-カプロラクタム',
    polymerization: '開環重合',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Chain with amide bond -->
      <path d="M 20,60 L 50,40 L 80,60 L 110,40 L 140,60 L 160,60" stroke="#a855f7" stroke-width="2" stroke-linejoin="round" fill="none" />
      <!-- Amide double bond O -->
      <path d="M 110,40 L 110,20" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="110" y="16" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Amide NH -->
      <text x="140" y="76" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">NH</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,95 L 30,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 165,25 L 175,25 L 175,95 L 165,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="180" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.13 g/cm³', Tg: '47℃', Tm: '220〜225℃（結晶性）',
      tensile: '70〜80 MPa', transparency: '半透明〜乳白不透明', heatResist: '100〜120℃'
    },
    usage: ['衣料用合成繊維（ストッキング・アパレル）', '漁網・ロープ', '自動車アンダーフード部品', '包装用バリアフィルム', '結束バンド'],
    makers: ['東レ', '宇部興産', '旭化成', 'BASF'],
    trend: '廃棄された漁網や繊維屑をケミカルリサイクルによりカプロラクタムに戻し、バージン材と同等の高品質ナイロン6として再利用する動きが広がっています。',
    tags: ['耐摩耗性', '強靭', '吸湿性', '自己潤滑']
  },
  {
    id: 'pa66',
    name: 'Nylon 6,6',
    fullName: 'ポリアミド6,6（ナイロン6,6）',
    formula: '(C₁₂H₂₂N₂O₂)ₙ',
    monomer: 'ヘキサメチレンジアミン、アジピン酸',
    polymerization: '縮合重合（ジアミンとジカルボン酸の塩の脱水重縮合）',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Repeating structure showing amide bonds and aliphatic segments -->
      <path d="M 15,50 L 40,50 L 60,70 L 100,70 L 120,50 L 155,50" stroke="#a855f7" stroke-width="2" stroke-linejoin="round" fill="none" />
      <!-- Amide 1 -->
      <text x="40" y="44" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">NH</text>
      <!-- Amide 2 C=O -->
      <path d="M 120,50 L 120,30" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="120" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="100" y="82" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">NH</text>
      <!-- Brackets -->
      <path d="M 22,25 L 12,25 L 12,95 L 22,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 160,25 L 170,25 L 170,95 L 160,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="175" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.14 g/cm³', Tg: '57℃', Tm: '260〜265℃（高融点結晶性）',
      tensile: '80〜90 MPa', transparency: '半透明〜不透明', heatResist: '120〜140℃'
    },
    usage: ['自動車エンジンカバー・吸気マニホールド', '電子コネクタ・スイッチ', 'エアバッグ用原糸', '電動工具のハウジング'],
    makers: ['デュポン（現Celanese）', '旭化成', '東レ', 'Invista'],
    trend: '高融点（265℃）を活かして自動車のエンジン周辺の過酷な熱環境で金属代替として活躍。リサイクル原材料比率を高めた製品開発が競争軸となっています。',
    tags: ['超強靭', '高耐熱', '耐油性', '金属代替']
  },
  {
    id: 'pc',
    name: 'PC',
    fullName: 'ポリカーボネート',
    formula: '(C₁₆H₁₄O₃)ₙ',
    monomer: 'ビスフェノールA（BPA）、ホスゲン（または炭酸ジフェニル）',
    polymerization: '縮合重合（界面重縮合またはエステル交換）',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain with BPA and Carbonate -->
      <path d="M 10,60 L 30,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Benzene 1 -->
      <polygon points="30,60 45,70 65,70 75,60 65,50 45,50" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <!-- Isopropylidene bridge -->
      <path d="M 75,60 L 85,60 M 85,60 L 85,45 M 85,60 L 85,75" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Benzene 2 -->
      <polygon points="95,60 110,70 130,70 140,60 130,50 110,50" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <!-- Carbonate linkage -->
      <path d="M 140,60 L 155,60 L 165,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 155,60 L 155,75" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Carbonate labels -->
      <text x="155" y="87" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Brackets -->
      <path d="M 18,25 L 8,25 L 8,95 L 18,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 175,25 L 185,25 L 185,95 L 175,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="190" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.20 g/cm³', Tg: '147℃', Tm: 'なし（非晶性）',
      tensile: '60〜70 MPa', transparency: '88〜90%（高い透明性）', heatResist: '120〜130℃'
    },
    usage: ['防弾ガラス・ヘルメットバイザー', 'スマートフォンの筐体', 'カメラレンズ・メガネレンズ', '自動車ヘッドランプカバー', 'CD/DVD（斜陽用途）'],
    makers: ['三菱ガス化学', '帝人', '出光興産', 'Sabic（LEXAN）'],
    trend: 'ビスフェノールA（BPA）の環境ホルモン懸念から、非BPAタイプの開発や、原料に植物由来のイソソルビドを使用するバイオポリカーボネートへの展開が進んでいます。',
    tags: ['耐衝撃性最高', '高透明', '高耐熱', '自己消火性']
  },
  {
    id: 'pom',
    name: 'POM',
    fullName: 'ポリアセタール（ポリオキシメチレン）',
    formula: '(CH₂O)ₙ',
    monomer: 'ホルムアルデヒド、トリオキサン',
    polymerization: '開環重合/アニオン重合',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Simple alternating C and O chain -->
      <path d="M 20,60 L 50,45 L 80,60 L 110,45 L 140,60 L 170,45" stroke="#a855f7" stroke-width="2.5" stroke-linejoin="round" fill="none" />
      <!-- Labels -->
      <text x="50" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="110" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="170" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="80" y="74" font-family="sans-serif" font-size="10" font-weight="bold" fill="#94a3b8" text-anchor="middle">CH₂</text>
      <!-- Brackets -->
      <path d="M 35,25 L 25,25 L 25,95 L 35,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 145,25 L 155,25 L 155,95 L 145,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="160" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.41〜1.43 g/cm³（高い比重）', Tg: '-60℃', Tm: '165〜175℃（高結晶性）',
      tensile: '60〜70 MPa', transparency: '不透明（不透明な白色）', heatResist: '100〜110℃'
    },
    usage: ['精密ギア・歯車', 'ベアリング・摺動部品', 'シートベルトバックル', 'ファスナー（YKK等）', 'インクペンの樹脂部品'],
    makers: ['ポリプラスチックス（ジュラコン®、世界首位）', '旭化成（テナック®）', '三菱ケミカル', 'Celanese'],
    trend: '耐摺動摩耗性をさらに高めるため、フッ素樹脂やシリカ微粒子をコンパウンドした高摺動グレードや、再生可能資源から作られたバイオPOMが上市されています。',
    tags: ['自己潤滑', '耐摩耗性', '高剛性', '疲労特性']
  },
  {
    id: 'pbt',
    name: 'PBT',
    fullName: 'ポリブチレンテレフタレート',
    formula: '(C₁₂H₁₂O₄)ₙ',
    monomer: 'テレフタル酸（TPA）、1,4-ブタンジオール（1,4-BG）',
    polymerization: '縮合重合',
    category: 'エンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Similar to PET but longer aliphatic chain -->
      <path d="M 15,60 L 30,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="60,60 75,70 95,70 110,60 95,50 75,50" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Aliphatic chain -CH2-CH2-CH2-CH2- -->
      <path d="M 110,60 L 125,60 L 135,75 L 145,60 L 155,75 L 165,60" stroke="#a855f7" stroke-width="2" stroke-linejoin="round" fill="none" />
      <text x="145" y="92" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">(CH₂)₄</text>
      <!-- Brackets -->
      <path d="M 22,25 L 12,25 L 12,95 L 22,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 170,25 L 180,25 L 180,95 L 170,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="185" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.30〜1.32 g/cm³', Tg: '40℃', Tm: '224℃（中結晶性）',
      tensile: '55〜65 MPa', transparency: '半透明〜不透明', heatResist: '120〜140℃（ガラス繊維強化で200℃超）'
    },
    usage: ['自動車電子制御ユニット（ECU）筐体', '車載電気コネクタ', 'リレーハウジング', 'キーボードのキーキャップ（高級モデル）'],
    makers: ['ポリプラスチックス', '東レ', '帝人', 'Sabic'],
    trend: '電気自動車（EV）の高電圧バッテリー周辺部品において、オレンジ色の安全指示カラーを着色した難燃高電圧対応PBTの需要が急増しています。',
    tags: ['高速成形', '電気絶縁性', '寸法安定性', '耐熱コンパウンド']
  },
  {
    id: 'peek',
    name: 'PEEK',
    fullName: 'ポリエーテルエーテルケトン',
    formula: '(C₁₉H₁₂O₃)ₙ',
    monomer: '4,4\'-ジフルオロベンゾフェノン、ハイドロキノン',
    polymerization: '縮合重合（求核置換による高温溶液重合）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- High complex cyclic chain -->
      <polygon points="20,60 30,68 45,68 55,60 45,52 30,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <circle cx="65" cy="60" r="4" fill="#a855f7" />
      <polygon points="75,60 85,68 100,68 110,60 100,52 85,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <circle cx="120" cy="60" r="4" fill="#a855f7" />
      <polygon points="130,60 140,68 155,68 165,60 155,52 140,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <!-- Labels for Ether / Ketone -->
      <text x="65" y="74" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="120" y="74" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Brackets -->
      <path d="M 15,25 L 8,25 L 8,95 L 15,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 172,25 L 180,25 L 180,95 L 172,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="185" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.30〜1.32 g/cm³', Tg: '143℃', Tm: '343℃（極めて高融点、結晶性）',
      tensile: '95〜100 MPa（高硬度）', transparency: '不透明（茶褐色〜ベージュ）', heatResist: '240℃（連続使用最高峰）'
    },
    usage: ['航空機の内装・構造用ブラケット', '半導体製造装置用ウエハキャリア', '医療用インプラント（人工骨・脊椎ケージ）', '石油採掘掘削用パッキン'],
    makers: ['ビクトレックス（Victrex、世界パイオニア）', 'ソルベイ', 'エボニック'],
    trend: '生体適合性が極めて高くX線を透過するため、金属に代わる整形外科用インプラント素材としての利用が進み、3DプリンティングPEEKの用途開発が盛んです。',
    tags: ['超高耐熱', '超高強度', '難燃性', '生体適合性']
  },
  {
    id: 'pps',
    name: 'PPS',
    fullName: 'ポリフェニレンスルフィド',
    formula: '(C₆H₄S)ₙ',
    monomer: 'p-dichlorobenzene（p-DCB）、硫化ナトリウム',
    polymerization: '縮合重合（極性溶媒中での高温脱塩縮合）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Benzene and Sulfur -->
      <path d="M 15,60 L 35,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="35,60 50,72 70,72 85,60 70,48 50,48" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 85,60 L 115,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Sulfur atom label -->
      <text x="125" y="65" font-family="sans-serif" font-size="14" font-weight="bold" fill="#f1f5f9" text-anchor="middle">S</text>
      <path d="M 135,60 L 180,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Brackets -->
      <path d="M 22,25 L 12,25 L 12,95 L 22,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 160,25 L 170,25 L 170,95 L 160,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="175" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.34〜1.40 g/cm³（フィラー充填で1.6超）', Tg: '90℃', Tm: '280〜285℃（結晶性）',
      tensile: '70〜85 MPa（脆い、GF強化で150超）', transparency: '不透明（暗褐色）', heatResist: '200〜220℃'
    },
    usage: ['自動車ウォーターポンプインペラ', 'ハイブリッド車パワーモジュール樹脂部品', '給湯器配管バルブ・継手', 'SMT対応電子コネクタ'],
    makers: ['東レ', 'DIC（ポリフェニレンスルフィド世界大手）', 'ソルベイ', 'Celanese'],
    trend: 'EV熱管理システム向けの高温LLC（冷却液）耐性グレードの重要性が急増。耐衝撃性を弱点とするため、エラストマーブレンド技術の向上が進んでいます。',
    tags: ['耐薬品性最高', '高耐熱', '寸法安定性', '高結晶']
  },
  {
    id: 'ptfe',
    name: 'PTFE',
    fullName: 'ポリテトラフルオロエチレン（フッ素樹脂・テフロン）',
    formula: '(C₂F₄)ₙ',
    monomer: 'テトラフルオロエチレン（TFE）',
    polymerization: 'ラジカル懸濁重合/乳化重合',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Carbon chain and Fluorine -->
      <path d="M 25,60 L 175,60" stroke="#a855f7" stroke-width="3" fill="none" />
      <!-- Fluorine bonds -->
      <path d="M 60,60 L 60,30 M 60,60 L 60,90" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 130,60 L 130,30 M 130,60 L 130,90" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Fluorine labels -->
      <text x="60" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="60" y="104" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="130" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="130" y="104" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <!-- Brackets -->
      <path d="M 35,20 L 25,20 L 25,100 L 35,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 155,20 L 165,20 L 165,100 L 155,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="170" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '2.14〜2.20 g/cm³（最重プラスチック）', Tg: '115℃', Tm: '327℃（超高融点、融解時流動性なし）',
      tensile: '20〜35 MPa（極めて柔軟）', transparency: '不透明（白色・ワックス状）', heatResist: '260℃'
    },
    usage: ['フライパンのテフロンコーティング', '半導体超純水製造配管バルブ・シール', '建築用膜構造屋根（東京ドーム等）', '医療用人工血管（Gore-Tex®）'],
    makers: ['ダイキン工業（世界首位級）', 'ケマーズ（Chemours）', 'AGC', 'Solvay'],
    trend: '流動粘度が極めて高く射出成形できないため、焼結圧縮成形が基本。PFAS（有機フッ素化合物）の国際的排出・製造規制強化への対応に業界は揺れています。',
    tags: ['非粘着・防汚', '耐熱耐寒性', '超低摩擦', '耐薬品性最高']
  },
  {
    id: 'lcp',
    name: 'LCP',
    fullName: '液晶ポリマー',
    formula: '(C₁₄H₈O₄)ₙ等（多重芳香族エステル）',
    monomer: 'p-ヒドロキシ安息香酸（HBA）、ビフェノール、テレフタル酸',
    polymerization: '縮合重合（溶融重縮合）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Highly aligned rigid aromatic chain -->
      <polygon points="20,60 30,68 45,68 55,60 45,52 30,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <path d="M 55,60 L 70,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="70,60 80,68 95,68 105,60 95,52 80,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <path d="M 105,60 L 125,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="125,60 135,68 150,68 160,60 150,52 135,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <!-- Oriented lines inside for alignment -->
      <line x1="25" y1="35" x2="155" y2="35" stroke="#22c55e" stroke-width="1" stroke-dasharray="4,4" />
      <text x="90" y="28" font-family="sans-serif" font-size="8" fill="#22c55e" text-anchor="middle">Liquid Crystal Domain</text>
      <!-- Brackets -->
      <path d="M 15,25 L 8,25 L 8,95 L 15,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 165,25 L 173,25 L 173,95 L 165,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="178" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.40〜1.45 g/cm³', Tg: 'なし（液晶ドメイン形成）', Tm: '280〜350℃（液晶転移）',
      tensile: '120〜150 MPa（極めて強靭）', transparency: '不透明（暗ベージュ）', heatResist: '250〜340℃'
    },
    usage: ['5G高速通信スマートフォンアンテナ基板（LCPフィルム）', '超微細電気コネクタ', '光ディスクドライブ光ピックアップ', '電子基板部品'],
    makers: ['ポリプラスチックス（ラペロス®、世界大手）', '住友化学', 'エネオス', 'Celanese'],
    trend: '高周波（ミリ波）通信での誘電損失（電気ロス）が極めて少ないため、5G・6G対応モバイル端末向けフレキシブル回路板の最重要コア材料として需要爆発。',
    tags: ['高周波低ロス', '超微細成形', '高強度', '低線膨張']
  },
  {
    id: 'pi',
    name: 'PI',
    fullName: 'ポリイミド',
    formula: '(C₂₂H₁₀N₂O₅)ₙ（カプトン等）',
    monomer: 'ピロメリット酸二無水物（PMDA）、オキシジアニリン（ODA）',
    polymerization: '縮合重合（二段階重合：ポリアミド酸合成 → 熱イミド化）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Imide ring representation -->
      <polygon points="30,60 50,35 90,35 110,60 90,85 50,85" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 60,35 L 60,15 M 80,35 L 80,15" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="60" y="10" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="80" y="10" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="70" y="65" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">N</text>
      <path d="M 110,60 L 160,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- Brackets -->
      <path d="M 22,20 L 12,20 L 12,100 L 22,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 165,20 L 175,20 L 175,100 L 165,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="180" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.42〜1.45 g/cm³', Tg: '360〜410℃（極めて高耐熱）', Tm: '融点なし（非融解性）',
      tensile: '130〜150 MPa（極めて強靭）', transparency: '不透明（琥珀色・オレンジ透明）', heatResist: '300℃（連続使用、宇宙環境対応）'
    },
    usage: ['宇宙飛行士宇宙服外層・宇宙船断熱材', 'フレキシブルプリント配線板（FPC）', '半導体パッシベーション保護膜', '超高耐熱シールベアリング'],
    makers: ['デュポン・東レ（カプトン®）', 'カネカ（アピカル®）', '宇部興産（ユピレックス®）', '荒川化学'],
    trend: '不溶非融解のため通常はフィルムや塗布剤（ポリアミド酸溶液）で供給。近年、透明性を高めた「無色透明ポリイミド（CPI）」が折りたたみスマホのカバー窓に採用中。',
    tags: ['熱安定性極限', '宇宙材料', '超高電気絶縁', '琥珀色フィルム']
  },
  {
    id: 'pes',
    name: 'PES',
    fullName: 'ポリエーテルスルホン',
    formula: '(C₁₂H₈O₃S)ₙ',
    monomer: '4,4\'-ジクロロジフェニルスルホン、ビスフェノールS',
    polymerization: '縮合重合（芳香族求核置換反応）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Benzene - SO2 - Benzene - O -->
      <polygon points="15,60 25,68 40,68 50,60 40,52 25,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <path d="M 50,60 L 70,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="80" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">SO₂</text>
      <path d="M 90,60 L 110,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="110,60 120,68 135,68 145,60 135,52 120,52" stroke="#a855f7" stroke-width="1.8" fill="none" />
      <path d="M 145,60 L 175,60" stroke="#a855f7" stroke-width="2" fill="none" />
      <circle cx="160" cy="60" r="4" fill="#a855f7" />
      <text x="160" y="73" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Brackets -->
      <path d="M 10,25 L 4,25 L 4,95 L 10,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 168,25 L 175,25 L 175,95 L 168,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="180" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.37 g/cm³', Tg: '220℃', Tm: 'なし（非晶性）',
      tensile: '80 MPa', transparency: '透明（琥珀色透明、光線透過率85%）', heatResist: '180℃'
    },
    usage: ['透析用中空糸膜（人工腎臓フィルター）', 'コーヒーメーカー耐熱タンク', '航空機用防火天井パネル', 'スチーム洗浄耐熱部品'],
    makers: ['住友化学（スミカエクセル®）', 'ソルベイ', 'BASF（ウルトラゾン®）'],
    trend: '医療用人工透析の中空糸膜用ポリマーとしてデファクトスタンダード。難燃性が極めて高く、燃焼時に有毒ガス（一酸化炭素以外）をほぼ出さない特徴があります。',
    tags: ['琥珀色透明', '透析中空糸', '耐加水分解', '極めて難燃']
  },
  {
    id: 'pvdf',
    name: 'PVDF',
    fullName: 'ポリフッ化ビニリデン',
    formula: '(C₂H₂F₂)ₙ',
    monomer: 'フッ化ビニリデン（VDF）',
    polymerization: 'ラジカル重合（懸濁または乳化）',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain alternating CH2 and CF2 -->
      <path d="M 20,60 L 180,60" stroke="#a855f7" stroke-width="2.5" fill="none" />
      <!-- Fluorine -->
      <path d="M 100,60 L 100,30 M 100,60 L 100,90" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="100" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="100" y="104" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <!-- Brackets -->
      <path d="M 50,25 L 40,25 L 40,100 L 50,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,25 L 160,25 L 160,100 L 150,100" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.78 g/cm³', Tg: '-35℃', Tm: '172℃（結晶性）',
      tensile: '40〜50 MPa', transparency: '半透明', heatResist: '140〜150℃'
    },
    usage: ['リチウムイオン二次電池正極バインダー（電極接着剤）', '太陽電池バックシート保護フィルム', '圧電素子センサーフィルム', '高級釣り糸（フロロカーボンライン）'],
    makers: ['クレハ（世界高シェア）', 'ソルベイ', 'アルケマ（Kynar®）'],
    trend: 'リチウムイオン電池の電極粉末をアルミ箔に密着させる正極バインダーとして事実上独占。EV市場成長に伴い、世界的な大増産が続いています。',
    tags: ['電池バインダー', '強接着', '耐薬品性', '圧電・電歪効果']
  },
  {
    id: 'pla',
    name: 'PLA',
    fullName: 'ポリ乳酸',
    formula: '(C₃H₄O₂)ₙ',
    monomer: '乳酸（L-乳酸・D-乳酸）、ラクチド',
    polymerization: '縮合重合（乳酸の直接重縮合）または開環重合（ラクチド経由）',
    category: '生分解・バイオ系',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Poly L-lactic acid chain -->
      <path d="M 20,60 L 50,45 L 80,60 L 110,45 L 140,60 L 160,60" stroke="#22c55e" stroke-width="2.5" stroke-linejoin="round" fill="none" />
      <!-- Side groups -->
      <path d="M 80,60 L 80,85" stroke="#22c55e" stroke-width="2" fill="none" />
      <text x="80" y="99" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <!-- Ester link -->
      <text x="50" y="38" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <path d="M 110,45 L 110,25" stroke="#22c55e" stroke-width="2.5" fill="none" />
      <text x="110" y="20" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,105 L 30,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,25 L 160,25 L 160,105 L 150,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.24〜1.26 g/cm³', Tg: '55〜60℃', Tm: '170〜180℃（結晶性）',
      tensile: '50〜60 MPa（硬くて脆い）', transparency: '透明度良好', heatResist: '55℃（変形温度低い）'
    },
    usage: ['生分解性レジ袋・ストロー・紙コップ内面コート', '3DプリンタPLAフィラメント', '食品トレイ・農業用マルチシート', '医療用縫合糸'],
    makers: ['ネイチャーワークス（NatureWorks、米国世界最大手）', 'トタル・コービオン（Total Corbion）', 'ユニチカ'],
    trend: '100%植物由来（トウモロコシ等）かつ土壌・コンポスト中で水とCO₂に完全分解。低い耐熱性をステレオコンプレックス（L体とD体のブレンド）で120℃まで向上させる技術が確立。',
    tags: ['生分解性', '100%植物原料', '3Dプリンタ', 'カーボンニュートラル']
  },
  {
    id: 'pha',
    name: 'PHA',
    fullName: 'ポリヒドロキシアルカン酸（PHBH等）',
    formula: '(C₄H₆O₂)ₙ等',
    monomer: 'ヒドロキシ酪酸、ヒドロキシヘキサン酸',
    polymerization: '微生物発酵重合（微生物が糖や植物油を食べて体内に蓄積する天然高分子）',
    category: '生分解・バイオ系',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Biosynthetic polymer chain -->
      <path d="M 20,50 L 50,50 L 70,70 L 100,70 L 120,50 L 150,50" stroke="#22c55e" stroke-width="2.5" stroke-linejoin="round" fill="none" />
      <text x="50" y="44" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="120" y="44" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <circle cx="85" cy="70" r="16" stroke="#22c55e" stroke-width="1.2" stroke-dasharray="2,2" fill="none" />
      <text x="85" y="74" font-family="sans-serif" font-size="7" fill="#22c55e" text-anchor="middle">Bacteria</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,95 L 30,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 140,25 L 150,25 L 150,95 L 140,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="156" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.20 g/cm³', Tg: '0℃', Tm: '120〜150℃（結晶性）',
      tensile: '20〜40 MPa', transparency: '半透明', heatResist: '70〜90℃'
    },
    usage: ['海洋生分解性資材（釣り具・養殖用ネット）', '海水用ストロー', '化粧品ボトル・包装袋'],
    makers: ['カネカ（PHBH®、世界開発リード）', 'Danimer Scientific'],
    trend: '従来の生分解樹脂が分解しにくい「冷たい海水（海洋環境）」の中でも完全分解する画期的な特長を持ち、海洋プラ汚染問題の切り札として最も注目されています。',
    tags: ['海洋生分解性', '微生物合成', '海水分解', '超サステナブル']
  },
  {
    id: 'pbs',
    name: 'PBS',
    fullName: 'ポリブチレンサクシネート',
    formula: '(C₈H₁₂O₄)ₙ',
    monomer: 'コハク酸、1,4-ブタンジオール',
    polymerization: '縮合重合',
    category: '生分解・バイオ系',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Polybutylene succinate chain -->
      <path d="M 20,60 L 50,45 L 75,60 L 105,45 L 130,60 L 160,45" stroke="#22c55e" stroke-width="2" stroke-linejoin="round" fill="none" />
      <text x="50" y="38" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="105" y="38" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Succinic segment -->
      <text x="75" y="74" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">Succinate</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,95 L 30,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 145,25 L 155,25 L 155,95 L 145,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="160" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.26 g/cm³', Tg: '-32℃（柔軟性高い）', Tm: '114℃',
      tensile: '35 MPa', transparency: '半透明', heatResist: '70℃'
    },
    usage: ['マルチフィルム（農業）', '生分解性紙コップのラミネート膜', '堆肥（コンポスト）袋', '使い捨て食器'],
    makers: ['昭和電工（現レゾナック、開発撤退済）', '三菱ケミカル（BioPBS™、タイPTEGと合弁）', 'BASF（Ecoflex®）'],
    trend: 'PBSの原料（コハク酸、BG）を石油由来から植物発酵由来（バイオコハク酸）へと切り替え、100%バイオベースかつ100%生分解性を有するBioPBS™への移行が進んでいます。',
    tags: ['柔軟生分解', '農業マルチ', 'コンポスト対応', 'バイオソース可']
  },
  {
    id: 'ep',
    name: 'EP',
    fullName: 'エポキシ樹脂（熱硬化性）',
    formula: 'ネットワーク架橋構造（高分子網目）',
    monomer: 'ビスフェノールA、エピクロルヒドリン、アミン（硬化剤）',
    polymerization: '付加反応・開環架橋（エポキシ基とアミンの三次元付加重合）',
    category: '熱硬化性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- 3D Crosslinked network mesh -->
      <path d="M 30,30 L 100,50 L 170,30" stroke="#a855f7" stroke-width="2.5" fill="none" />
      <path d="M 100,50 L 100,100" stroke="#a855f7" stroke-width="2.5" fill="none" />
      <path d="M 50,75 L 100,50 L 150,75" stroke="#ef4444" stroke-width="2" fill="none" />
      <!-- Ring oxygen -->
      <polygon points="100,100 115,112 85,112" stroke="#a855f7" stroke-width="2" fill="none" />
      <circle cx="100" cy="100" r="3" fill="#ef4444" />
      <!-- Label -->
      <text x="100" y="44" font-family="sans-serif" font-size="9" fill="#ef4444" text-anchor="middle">Amine Crosslink</text>
    </svg>`,
    properties: {
      density: '1.15〜1.20 g/cm³', Tg: '120〜180℃（硬化後）', Tm: 'なし（加熱で分解架橋）',
      tensile: '60〜90 MPa（強固・接着力抜群）', transparency: '透明〜琥珀色透明', heatResist: '150〜200℃'
    },
    usage: ['プリント配線板（FR-4基板ガラスエポキシ）', '航空機CFRP（炭素繊維複合材）マトリクス樹脂', 'LED封止材・ICパッケージモールド', '強力2液混合接着剤・防錆塗料'],
    makers: ['三菱ケミカル（jER®）', 'DIC（エピクロン®）', 'ADEKA', '日鉄ケミカル&マテリアル'],
    trend: '風力発電ブレードや航空機CFRP向けに、廃棄時に分解可能な「可逆的共有結合（ビトリマー）」を導入した、解体可能なリサイクル対応エポキシが注目されています。',
    tags: ['最強接着力', '三次元架橋', 'FR-4電子基板', 'CFRP母材']
  },
  {
    id: 'pur',
    name: 'PUR',
    fullName: 'ポリウレタン',
    formula: '[(C₃H₄O₂)·(C₁₀H₁₂N₂O₄)]ₙ等（ウレタン結合）',
    monomer: 'ジイソシアネート（MDI/TDI等）、ポリオール',
    polymerization: '段階重合（付加縮合的な重付加）',
    category: 'エラストマー・合成ゴム',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Urethane group structure -->
      <path d="M 20,60 L 50,60 L 65,45 L 85,45 L 100,60 L 130,60 M 130,60 L 140,80 L 160,80 M 160,80 L 180,60" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round" fill="none" />
      <text x="50" y="52" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">NH</text>
      <!-- Carbonyl -->
      <path d="M 75,45 L 75,25" stroke="#f59e0b" stroke-width="2" fill="none" />
      <text x="75" y="20" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="95" y="52" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,95 L 30,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 165,25 L 175,25 L 175,95 L 165,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="180" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.10〜1.25 g/cm³（発泡体は0.03〜）', Tg: '-50〜-70℃（ソフトセグメント）', Tm: 'なし（ブロックポリマー）',
      tensile: '20〜50 MPa（ゴム弾性）', transparency: '不透明発泡または透明ゴム', heatResist: '80〜100℃'
    },
    usage: ['クッション・ソファウレタンマット（軟質発泡）', '冷蔵庫・住宅用断熱材（硬質発泡）', 'ストレッチ衣類（スパンデックス繊維）', '自動車塗料・シーリング材・人工芝下層'],
    makers: ['三井化学SKCポリウレタン', '東ソー', 'Covestro', 'BASF'],
    trend: '有害性が指摘されるイソシアネート化合物を使用しない「ノンイソシアネートポリウレタン（NIPU）」の合成技術およびバイオポリオールの導入が進んでいます。',
    tags: ['クッション発泡', '高弾性繊維', '優れた断熱性', '二液塗料']
  },
  {
    id: 'sil',
    name: 'SIL',
    fullName: 'シリコーンゴム（ポリシロキサン）',
    formula: '(R₂SiO)ₙ',
    monomer: 'ジクロロジメチルシラン（有機ケイ素化合物）',
    polymerization: '縮合重合（加水分解縮合・三次元架橋）',
    category: 'エラストマー・合成ゴム',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Silicon-Oxygen backbone -->
      <path d="M 20,60 L 50,45 L 80,60 L 110,45 L 140,60 L 170,45" stroke="#f59e0b" stroke-width="2.5" stroke-linejoin="round" fill="none" />
      <!-- Methyl groups on Si -->
      <path d="M 80,60 L 80,85 M 80,60 L 80,35" stroke="#f59e0b" stroke-width="2.5" fill="none" />
      <text x="80" y="99" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <text x="80" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₃</text>
      <!-- Backbone labels -->
      <text x="50" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">Si</text>
      <text x="110" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">Si</text>
      <text x="170" y="38" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9" text-anchor="middle">Si</text>
      <text x="25" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9">O</text>
      <text x="135" y="74" font-family="sans-serif" font-size="12" font-weight="bold" fill="#f1f5f9">O</text>
      <!-- Brackets -->
      <path d="M 38,20 L 30,20 L 30,105 L 38,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 152,20 L 160,20 L 160,105 L 152,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.10〜1.20 g/cm³', Tg: '-120℃（極低温対応）', Tm: 'なし（架橋）',
      tensile: '5〜10 MPa（伸び率良好）', transparency: '透明〜乳白色ゴム', heatResist: '-100〜250℃（最高級の耐熱・耐寒）'
    },
    usage: ['キッチン用耐熱シリコンツール', '医療用点滴チューブ・哺乳瓶乳首', 'スマホ保護カバーケース', '建築用コーキング・シーラント剤'],
    makers: ['信越化学工業（国内首位・世界大手）', '東レ・ダウコーニング', 'モメンティブ'],
    trend: 'シリカ主鎖であるため石炭・原油に直接依存しないエシカル材料としても選定。電気自動車（EV）用バッテリーパックの放熱パッドや難燃防火シートに採用が激増しています。',
    tags: ['広範囲温度対応', '無毒・生理不活性', '抜群の撥水性', '耐候性']
  },
  {
    id: 'pan',
    name: 'PAN',
    fullName: 'ポリアクリロニトリル',
    formula: '(C₃H₃N)ₙ',
    monomer: 'アクリロニトリル（AN）',
    polymerization: 'ラジカル重合（溶液重合/水系懸濁重合）',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain and Nitrile -->
      <path d="M 20,60 L 180,60" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <path d="M 100,60 L 100,90" stroke="#06b6d4" stroke-width="2" fill="none" />
      <!-- Nitrile Triple bond notation -->
      <text x="100" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#f1f5f9" text-anchor="middle">C≡N</text>
      <!-- Brackets -->
      <path d="M 50,25 L 40,25 L 40,105 L 50,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,25 L 160,25 L 160,105 L 150,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.18 g/cm³', Tg: '85℃', Tm: '317℃（熱分解する）',
      tensile: 'アクリル繊維として極めてタフ', transparency: '不透明（繊維化して使用）', heatResist: '150℃（耐炎化）'
    },
    usage: ['炭素繊維（CFRP用PAN系カーボンファイバー）前駆体', 'アクリル衣類繊維（毛糸・ジャージ）', '超透水性水処理膜'],
    makers: ['東レ（炭素繊維世界最大手）', '帝人', '三菱ケミカル'],
    trend: '炭素繊維「プレカーサー（前駆体繊維）」としての用途が中核。200〜300℃の空気中で「耐炎化反応」を行い、さらに1000℃以上で焼き炭化させて超高強度カーボンファイバーを製造します。',
    tags: ['炭素繊維原料', '高弾性繊維', '耐炎化反応', '耐候性良好']
  },
  {
    id: 'pva',
    name: 'PVA',
    fullName: 'ポリビニルアルコール',
    formula: '(C₂H₄O)ₙ',
    monomer: '酢酸ビニル（PVAc重合後、ケン化してPVAを合成）',
    polymerization: 'ラジカル重合（酢酸ビニル重合）＋ケン化反応（エステル加水分解）',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Alternating CH2 and CH(OH) -->
      <path d="M 20,60 L 180,60" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <!-- Alcohol bond -->
      <path d="M 100,60 L 100,90" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <text x="100" y="104" font-family="sans-serif" font-size="13" font-weight="bold" fill="#f1f5f9" text-anchor="middle">OH</text>
      <!-- Brackets -->
      <path d="M 50,25 L 40,25 L 40,105 L 50,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 150,25 L 160,25 L 160,105 L 150,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="166" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.19〜1.27 g/cm³', Tg: '85℃', Tm: '230℃（結晶性、高水溶性）',
      tensile: '高皮膜強度（乾燥時）', transparency: '水溶液は無色透明', heatResist: '100℃'
    },
    usage: ['洗濯のり・工作用液体糊', '液晶ディスプレイ偏光板（光学用PVAフィルム）', 'ビニロン繊維（作業服・補強繊維）', '水溶性農薬パッケージ包材（水に溶ける袋）'],
    makers: ['クラレ（PVA・ポバール世界圧倒的シェア）', '日本合成化学', 'デンカ'],
    trend: '液晶ディスプレイに不可欠な偏光フィルムの基材（ヨウ素を配向吸着させる）としてクラレが世界シェアの約8割を独占。水溶性と生分解性を併せ持つ環境対応素材としても評価が再燃。',
    tags: ['水溶性樹脂', '偏光フィルム基材', 'ビニロン原料', 'ガスバリア性']
  },
  {
    id: 'sbr',
    name: 'SBR',
    fullName: 'スチレン・ブタジエンゴム',
    formula: '[(C₈H₈)ₓ·(C₄H₆)y]ₙ',
    monomer: 'スチレン、1,3-ブタジエン',
    polymerization: '乳化重合（E-SBR）または溶液重合（S-SBR、精密制御）',
    category: 'エラストマー・合成ゴム',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Copolymer skeleton with benzene ring and double bonds -->
      <path d="M 15,50 L 50,50 L 70,30 L 100,30 L 120,50 L 150,50 L 180,50" stroke="#f59e0b" stroke-width="2" stroke-linejoin="round" fill="none" />
      <polygon points="120,50 135,58 135,78 120,86 105,78 105,58" stroke="#f59e0b" stroke-width="1.5" fill="none" />
      <!-- Double bond for butadiene -->
      <line x1="74" y1="34" x2="96" y2="34" stroke="#f59e0b" stroke-width="1.8" />
      <!-- Text label -->
      <text x="85" y="24" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">Butadiene</text>
      <text x="145" y="65" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">Styrene</text>
      <!-- Brackets -->
      <path d="M 30,15 L 20,15 L 20,105 L 30,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 165,15 L 175,15 L 175,105 L 165,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="180" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '0.94 g/cm³', Tg: '-50℃（高粘弾性）', Tm: 'なし（無定形エラストマー）',
      tensile: '加硫により高引張強度・高耐摩耗性', transparency: '不透明黒（カーボンブラック混入）', heatResist: '80〜90℃'
    },
    usage: ['自動車用タイヤ（トレッドゴム）', 'ゴムホース・コンベヤベルト', '靴底素材（ラバーソール）'],
    makers: ['JSR（合成ゴム大手）', '日本ゼオン', '旭化成', 'Lanxess'],
    trend: 'EV（電気自動車）はトルクが高く車重が重いため、タイヤ耐摩耗性と転がり抵抗の超低減（電費向上）を両立させる、シリカ表面修飾された末端変性S-SBRの開発競争が極めて活発です。',
    tags: ['自動車タイヤ', '抜群の耐摩耗', '転がり抵抗低減', '合成ゴム主流']
  },
  {
    id: 'eva',
    name: 'EVA',
    fullName: 'エチレン・酢酸ビニル共重合体',
    formula: '[(C₂H₄)ₓ·(C₄H₆O₂)y]ₙ',
    monomer: 'エチレン、酢酸ビニル（VA）',
    polymerization: '高圧ラジカル共重合',
    category: 'エラストマー・合成ゴム',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Repeating skeleton -->
      <path d="M 20,60 L 180,60" stroke="#f59e0b" stroke-width="2.5" fill="none" />
      <!-- Vinyl acetate side group -->
      <path d="M 100,60 L 100,85" stroke="#f59e0b" stroke-width="2.5" fill="none" />
      <text x="100" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">O-CO-CH₃</text>
      <!-- Labels -->
      <text x="50" y="50" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">Ethylene</text>
      <text x="150" y="50" font-family="sans-serif" font-size="8" fill="#94a3b8" text-anchor="middle">VA</text>
      <!-- Brackets -->
      <path d="M 30,25 L 20,25 L 20,105 L 30,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 160,25 L 170,25 L 170,105 L 160,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="175" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '0.92〜0.95 g/cm³', Tg: '-20〜-40℃', Tm: '60〜100℃（VA含量による）',
      tensile: '15〜25 MPa（高柔軟性）', transparency: '透明度極めて高（VA比率による）', heatResist: '60〜70℃'
    },
    usage: ['太陽電池モジュールのガラス封止シート（EVAフィルム）', 'サンダル（クロックス等）のクッションソール', 'ホットメルト（熱溶融型）接着剤', '防音・制振シート'],
    makers: ['三井・デュポンポリケミカル', '住友化学', '日本ポリエチレン', 'ExxonMobil'],
    trend: '太陽光パネルの30年長期信頼性を支える封止材（EVAシート）として市場が爆発拡大中。酢酸によるセル腐食を防ぐため、架橋剤や代替ポリマー（POE）のブレンドが研究されています。',
    tags: ['太陽光封止材', '高柔軟・高透明', 'ホットメルト', 'サンダル素材']
  },
  {
    id: 'ptfe_alt',
    name: 'PFA',
    fullName: 'テトラフルオロエチレン・パーフルオロアルキルビニルエーテル共重合体',
    formula: '[(C₂F₄)ₓ·(C₅F₁₀O)y]ₙ',
    monomer: 'テトラフルオロエチレン（TFE）、パーフルオロアルキルビニルエーテル（PAVE）',
    polymerization: '共重合（ラジカル重合）',
    category: 'スーパーエンプラ',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Main chain, F atoms, PAVE chain -->
      <path d="M 20,60 L 180,60" stroke="#a855f7" stroke-width="2.5" fill="none" />
      <path d="M 60,60 L 60,35 M 60,60 L 60,85" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 120,60 L 120,85" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="60" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="60" y="98" font-family="sans-serif" font-size="11" font-weight="bold" fill="#f1f5f9" text-anchor="middle">F</text>
      <text x="120" y="98" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">OC₃F₇</text>
      <!-- Brackets -->
      <path d="M 30,20 L 20,20 L 20,105 L 30,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 155,20 L 165,20 L 165,105 L 155,105" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="170" y="109" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '2.12〜2.17 g/cm³', Tg: '90℃', Tm: '300〜310℃（熱可塑可融フッ素）',
      tensile: '25〜30 MPa', transparency: '透明〜半透明（PTFEより良好）', heatResist: '260℃'
    },
    usage: ['半導体製造用の超高純度薬品配管・フィッティング', 'ウエハキャリア・化学反応容器', '熱収縮フッ素チューブ'],
    makers: ['ダイキン工業', 'ケマーズ', 'AGC（フルオン®）'],
    trend: 'PTFEと同等の耐熱・耐薬品性を持ちながら、唯一「溶融射出成形が可能」であるため、半導体製造ラインのクリーン配管市場で圧倒的な地位を確立しています。',
    tags: ['射出成形フッ素', '超高純度クリーン', '半導体配管', '耐薬品性最高']
  },
  {
    id: 'pan_carbon',
    name: 'CFRP',
    fullName: '炭素繊維強化プラスチック（カーボンFRP）',
    formula: 'マトリクス樹脂＋炭素繊維（C）の複合複合材料',
    monomer: '炭素（C）繊維、エポキシ/PP樹脂',
    polymerization: '熱硬化積層成形（オートクレーブ等）、射出成形（CFRTP）',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Carbon Fibers in Resin Matrix -->
      <rect x="15" y="15" width="170" height="90" rx="10" stroke="#06b6d4" stroke-width="1.5" fill="rgba(6,182,212,0.05)" />
      <!-- Fibers -->
      <line x1="30" y1="30" x2="170" y2="30" stroke="#f1f5f9" stroke-width="3" />
      <line x1="30" y1="50" x2="170" y2="50" stroke="#f1f5f9" stroke-width="3" />
      <line x1="30" y1="70" x2="170" y2="70" stroke="#f1f5f9" stroke-width="3" />
      <line x1="30" y1="90" x2="170" y2="90" stroke="#f1f5f9" stroke-width="3" />
      <!-- Matrix background dots -->
      <circle cx="50" cy="40" r="1.5" fill="#3b82f6" />
      <circle cx="100" cy="40" r="1.5" fill="#3b82f6" />
      <circle cx="150" cy="40" r="1.5" fill="#3b82f6" />
      <circle cx="70" cy="60" r="1.5" fill="#3b82f6" />
      <circle cx="130" cy="60" r="1.5" fill="#3b82f6" />
      <circle cx="50" cy="80" r="1.5" fill="#3b82f6" />
      <circle cx="110" cy="80" r="1.5" fill="#3b82f6" />
      <!-- Text label -->
      <text x="100" y="100" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">Carbon Fiber + Resin Matrix</text>
    </svg>`,
    properties: {
      density: '1.50〜1.60 g/cm³（鉄の1/5）', Tg: '120〜200℃（マトリクス依存）', Tm: 'なし（複合材料）',
      tensile: '600〜1200 MPa（鉄の数倍、比強度は圧倒的）', transparency: '不透明（黒色・カーボン織目模様）', heatResist: '150〜200℃'
    },
    usage: ['航空機主翼・胴体（Boeing787など）', '自動車モノコック・ボンネット', '高級スポーツ用品（テニスラケット・ロードバイク）', '風力発電大型ブレード'],
    makers: ['東レ（炭素繊維最大手）', 'テイジン（東邦テナックス）', '三菱ケミカル'],
    trend: '従来のエポキシマトリクス（熱硬化）は成形時間が長く、リサイクル困難という問題があり、近年は熱可塑性樹脂をマトリクスとする「CFRTP」の自動車量産採用が盛んに研究されています。',
    tags: ['超軽量', '超高強度', '異方性材料', '航空宇宙・レーシング']
  },
  {
    id: 'pva_s',
    name: 'PVB',
    fullName: 'ポリビニルブチラール',
    formula: '(C₈H₁₄O₂)ₙ（部分アセタール化）',
    monomer: 'PVAとブチルアルデヒドの縮合アセタール化',
    polymerization: '酢酸ビニル重合 → ケン化(PVA) → ブチラール化(PVB)',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Acetal ring structure linked to PVA chain -->
      <path d="M 20,40 L 180,40" stroke="#06b6d4" stroke-width="2.5" fill="none" />
      <!-- Ring -->
      <polygon points="70,40 85,55 85,80 55,80 55,55" stroke="#06b6d4" stroke-width="2" fill="none" />
      <!-- Butyl tail -->
      <path d="M 70,80 L 70,105 M 70,105 L 100,105" stroke="#06b6d4" stroke-width="2" fill="none" />
      <!-- Ring oxygen -->
      <text x="55" y="53" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">O</text>
      <text x="85" y="53" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">O</text>
      <!-- Tail CH -->
      <text x="70" y="87" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">CH</text>
      <text x="115" y="109" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f1f5f9" text-anchor="middle">C₃H₇</text>
      <!-- Brackets -->
      <path d="M 40,20 L 30,20 L 30,110 L 40,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 140,20 L 150,20 L 150,110 L 140,110" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="156" y="112" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.08〜1.10 g/cm³', Tg: '60〜70℃（可塑剤添加で大幅低下）', Tm: 'なし（非晶性）',
      tensile: '引裂強度およびガラス接着力に優れる', transparency: '90%以上（極めて高透明）', heatResist: '60℃'
    },
    usage: ['自動車合わせガラス用中間膜', '建築用防犯・防災合わせガラス中間膜', '太陽電池封止材'],
    makers: ['積水化学工業（世界高シェア）', 'クラレ（モビタール®）', 'イーストマン'],
    trend: '自動車のフロントガラスに挟み込まれる中間膜（PVBシート）のデファクト。衝突時の飛散防止・遮音性向上に加え、最近はHUD（ヘッドアップディスプレイ）投影反射機能付き中間膜の普及が進んでいます。',
    tags: ['合わせガラス中間膜', '飛散防止', '超高接着力', '遮音遮熱']
  },
  {
    id: 'ep_novolac',
    name: 'PF',
    fullName: 'フェノール樹脂（ベークライト・熱硬化性）',
    formula: '三次元縮合架橋メチレン架橋構造',
    monomer: 'フェノール、ホルムアルデヒド',
    polymerization: '縮合重合（酸触媒＝ノボラック、塩基触媒＝レゾール）',
    category: '熱硬化性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Interconnected Phenol rings with -CH2- -->
      <polygon points="50,45 65,53 65,73 50,81 35,73 35,53" stroke="#a855f7" stroke-width="2" fill="none" />
      <polygon points="130,45 145,53 145,73 130,81 115,73 115,53" stroke="#a855f7" stroke-width="2" fill="none" />
      <!-- CH2 bridge -->
      <path d="M 65,63 L 115,63" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="90" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">CH₂</text>
      <!-- Phenol OH -->
      <path d="M 50,45 L 50,30 M 130,45 L 130,30" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="50" y="24" font-family="sans-serif" font-size="10" fill="#f1f5f9" text-anchor="middle">OH</text>
      <text x="130" y="24" font-family="sans-serif" font-size="10" fill="#f1f5f9" text-anchor="middle">OH</text>
      <!-- 3D connectivity lines -->
      <line x1="35" y1="63" x2="20" y2="63" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3" />
      <line x1="145" y1="63" x2="160" y2="63" stroke="#a855f7" stroke-width="2" stroke-dasharray="3,3" />
    </svg>`,
    properties: {
      density: '1.25〜1.30 g/cm³', Tg: 'なし（硬化後三次元）', Tm: 'なし（熱分解）',
      tensile: '40〜60 MPa（硬くて脆い、耐熱抜群）', transparency: '不透明（暗褐色〜黒）', heatResist: '150〜200℃（瞬間300℃超）'
    },
    usage: ['鍋の持ち手・つまみ', 'プリント基板紙フェノール（低コスト基板）', '自動車ブレーキパッド・摩擦材結合', '配電盤・重電機器ハウジング'],
    makers: ['住友ベークライト（世界大手）', '昭和電工マテリアルズ（現レゾナック）', 'アイカ工業'],
    trend: '世界最古の合成プラスチック（1907年ベークランド開発）。電気自動車のインパネ骨格など、炭素繊維やガラスバルーンを充填した高強度・超軽量かつ難燃な耐熱構造材として再評価されています。',
    tags: ['最古のプラスチック', '高耐熱・難燃', '電気絶縁抜群', 'フェノール臭']
  },
  {
    id: 'uf',
    name: 'UF',
    fullName: '尿素樹脂（ユリア樹脂・熱硬化性）',
    formula: '尿素・ホルムアルデヒド架橋高分子',
    monomer: '尿素、ホルムアルデヒド',
    polymerization: '縮合重合（メチロール化、脱水縮合）',
    category: '熱硬化性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Urea segments crosslinked -->
      <path d="M 30,50 L 70,50 L 100,70 L 130,50 L 170,50" stroke="#a855f7" stroke-width="2" stroke-linejoin="round" fill="none" />
      <path d="M 100,70 L 100,95" stroke="#a855f7" stroke-width="2" fill="none" />
      <text x="50" y="44" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">NH</text>
      <text x="150" y="44" font-family="sans-serif" font-size="9" fill="#f1f5f9" text-anchor="middle">NH</text>
      <text x="100" y="107" font-family="sans-serif" font-size="9" font-weight="bold" fill="#f1f5f9" text-anchor="middle">C=O</text>
      <!-- N branch -->
      <text x="100" y="65" font-family="sans-serif" font-size="10" font-weight="bold" fill="#f1f5f9" text-anchor="middle">N</text>
      <line x1="100" y1="56" x2="100" y2="40" stroke="#a855f7" stroke-width="1.8" stroke-dasharray="3,3" />
    </svg>`,
    properties: {
      density: '1.45〜1.50 g/cm³', Tg: 'なし', Tm: 'なし',
      tensile: '40〜50 MPa（表面硬度が非常に高い）', transparency: '半透明〜不透明（美しい着色可能）', heatResist: '80〜90℃'
    },
    usage: ['麻雀牌・サイコロ', '配線器具カバー（コンセントプレート）', '木材接着剤（合板用パーティクルボード接着）', '食器用（メラミン代替）'],
    makers: ['昭和電工マテリアルズ（現レゾナック）', 'アイカ工業', 'DIC'],
    trend: 'フェノール樹脂より安価で、明るい着色ができるため汎用化粧板や家庭用雑品に活躍。合板接着剤用途では残留ホルムアルデヒドの放散規制（F☆☆☆☆）への対応が進んでいます。',
    tags: ['美しい着色', '表面高硬度', '合板接着剤', '安価熱硬化']
  },
  {
    id: 'sil_gel',
    name: 'SI',
    fullName: 'シリコーンゲル・オイル（ポリシロキサン）',
    formula: '(R₂SiO)ₙ（低架橋・オリゴマー）',
    monomer: '有機シラン化合物',
    polymerization: '縮合・加水分解（直鎖状に低分子量で停止させた流体）',
    category: '機能性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Short siloxane chains and droplets -->
      <path d="M 20,40 L 40,30 L 60,40 L 80,30" stroke="#f59e0b" stroke-width="2" fill="none" />
      <path d="M 110,80 L 130,70 L 150,80 L 170,70" stroke="#f59e0b" stroke-width="2" fill="none" />
      <!-- Fluid symbols (waves / droplets) -->
      <path d="M 40,65 Q 55,55 70,65 T 100,65" stroke="#3b82f6" stroke-width="1.5" fill="none" />
      <path d="M 100,75 Q 115,65 130,75 T 160,75" stroke="#3b82f6" stroke-width="1.5" fill="none" />
      <!-- Label -->
      <text x="100" y="53" font-family="sans-serif" font-size="9" fill="#f59e0b" text-anchor="middle">Low Mw Siloxane Fluid</text>
    </svg>`,
    properties: {
      density: '0.96〜0.98 g/cm³', Tg: '-100℃以下', Tm: '流体〜ゲル（融点なし）',
      tensile: '強度はほぼなし（流動性、優れた緩衝性）', transparency: '水のように極めて透明', heatResist: '200℃（高温安定性抜群）'
    },
    usage: ['衝撃吸収ゲル（αGEL®など、卵を落としても割れない）', 'シャンプーのツヤ・滑り添加剤', '消泡剤（食品・工業）', '化粧品ファンデーション基剤', 'ダンパー減衰オイル'],
    makers: ['信越化学工業（世界大手）', '東レ・ダウコーニング', 'モメンティブ'],
    trend: 'シリコーンゲルの類い希なる「衝撃緩衝能」を活かして、スポーツシューズソール・精密電子部品の保護緩衝材、スマートフォンの放熱ゲルとして採用が増加しています。',
    tags: ['衝撃吸収', '撥水・潤滑', '消泡効果', 'シロキサンオイル']
  },
  {
    id: 'bio_pet',
    name: 'Bio-PET',
    fullName: 'バイオポリエチレンテレフタレート',
    formula: '(C₁₀H₈O₄)ₙ（植物由来部分共重合）',
    monomer: 'バイオエチレングリコール（バイオEG）＋ 石油由来テレフタル酸',
    polymerization: '縮合重合',
    category: '生分解・バイオ系',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- PET structure with Leaf representation -->
      <path d="M 15,60 L 30,60" stroke="#22c55e" stroke-width="2" fill="none" />
      <polygon points="60,60 75,70 95,70 110,60 95,50 75,50" stroke="#a855f7" stroke-width="2" fill="none" />
      <path d="M 110,60 L 130,60 L 140,80 L 165,80 L 185,60" stroke="#22c55e" stroke-width="2" fill="none" />
      <!-- Leaf icon in Bio-EG segment -->
      <path d="M 148,88 Q 155,75 160,88 T 172,88" stroke="#22c55e" stroke-width="1" fill="none" />
      <text x="145" y="98" font-family="sans-serif" font-size="8" fill="#22c55e" text-anchor="middle">Bio-EG segment</text>
      <!-- Brackets -->
      <path d="M 22,25 L 12,25 L 12,95 L 22,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <path d="M 175,25 L 185,25 L 185,95 L 175,95" stroke="#94a3b8" stroke-width="1.5" fill="none" />
      <text x="190" y="99" font-family="sans-serif" font-size="13" font-weight="bold" fill="#94a3b8">n</text>
    </svg>`,
    properties: {
      density: '1.34〜1.38 g/cm³', Tg: '75℃', Tm: '255〜260℃',
      tensile: '60〜80 MPa（通常のPETと全く同じ物性）', transparency: '極めて高透明', heatResist: '120℃'
    },
    usage: ['サステナブル仕様コカ・コーラプラントボトル', '環境対応アパレル繊維（フリース）', '飲料用ボトル'],
    makers: ['サントリー（共同開発）', '東レ（バイオ100%PET試験製造）', '豊田通商'],
    trend: '原料の「エチレングリコール（EG、全体の30%）」をサトウキビの搾りかす等からバイオ合成することでCO₂排出を削減。近年、テレフタル酸も100%バイオ化する実証プラントが稼働しました。',
    tags: ['ドロップイン（代替容易）', '植物由来30%〜', 'ペットボトル', 'CO2削減']
  },
  {
    id: 'uhmwpe',
    name: 'UHMWPE',
    fullName: '超高分子量ポリエチレン',
    formula: '(C₂H₄)ₙ（分子量100万以上）',
    monomer: 'エチレン',
    polymerization: '配位重合（特殊触媒による超低圧スラリー重合）',
    category: '汎用熱可塑性',
    svg: `<svg viewBox="0 0 200 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
      <!-- Very long linear chain -->
      <path d="M 15,60 L 185,60" stroke="#3b82f6" stroke-width="4.5" fill="none" />
      <path d="M 15,30 L 185,30" stroke="#3b82f6" stroke-width="4.5" fill="none" />
      <path d="M 15,90 L 185,90" stroke="#3b82f6" stroke-width="4.5" fill="none" />
      <!-- Visual indicator of molecular packing -->
      <line x1="30" y1="30" x2="30" y2="90" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="2,2" />
      <line x1="100" y1="30" x2="100" y2="90" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="2,2" />
      <line x1="170" y1="30" x2="170" y2="90" stroke="#22c55e" stroke-width="1.5" stroke-dasharray="2,2" />
      <!-- Label -->
      <text x="100" y="20" font-family="sans-serif" font-size="8" fill="#f1f5f9" text-anchor="middle">Ultra-long highly packed chains</text>
    </svg>`,
    properties: {
      density: '0.94 g/cm³', Tg: '-120℃', Tm: '135〜140℃（高結晶）',
      tensile: '40〜50 MPa（繊維化時3 GPa超：スチールの数倍）', transparency: '不透明白色（超高粘度）', heatResist: '90℃'
    },
    usage: ['人工股関節のライナー（軟骨代替ライナー）', '高強度繊維（ダイニーマ®/イザナス®、防弾ベスト）', '食品搬送ライン滑りガイド・チョッパー'],
    makers: ['三井化学（ハイゼックス・ミリオン®）', '東洋紡（ダイニーマ®繊維）', 'セラニーズ'],
    trend: '平均分子量が100万〜700万に達し、抜群の耐摩耗性と自己潤滑性を誇ります。溶融粘度が高すぎて射出成形できず、ラム押出成形や焼結切削加工で成形します。',
    tags: ['耐摩耗性最高', '防弾繊維', '医療用インプラント', '超高分子量']
  }
];

// exportするためにwindowオブジェクトへ格納（file://環境でES Modules非対応対策としてグローバル化）
window.POLYMER_DB = POLYMER_DB;
