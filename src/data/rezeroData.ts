export type CharacterId =
  | 'subaru_envy'
  | 'emilia'
  | 'rem'
  | 'ram'
  | 'beatrice'
  | 'roswaal'
  | 'garfiel'
  | 'otto'
  | 'frederica'
  | 'petra'
  | 'puck'
  | 'meili'
  | 'shaula'
  | 'reinhard'
  | 'felt'
  | 'crusch'
  | 'ferris'
  | 'wilhelm'
  | 'theresia'
  | 'anastasia'
  | 'julius'
  | 'priscilla'
  | 'aldebaran'
  | 'echidna'
  | 'satella'
  | 'pandora'
  | 'minerva'
  | 'regulus'
  | 'petelgeuse'
  | 'capella'
  | 'elsa'
  | 'subaru_pride'
  | 'subaru_greed'
  | 'subaru_wrath'
  | 'subaru_sloth'
  | 'subaru_gluttony';

export type RouteCategory = 'emilia_camp' | 'royal_camps' | 'witches_cult' | 'if_route';

export interface SoulDimensions {
  obsession: number;     // 死磕指数
  sanity: number;        // 精神稳定
  ruthlessness: number;  // 发疯狠度
  empathy: number;       // 护短浓度
  wit: number;           // 嘴硬整活
}

export interface ChibiVisualStyle {
  hairColor: string;
  hairStyle: 'spiky' | 'long' | 'bob_right' | 'bob_left' | 'drills' | 'ponytail' | 'sleek_long' | 'bowl' | 'short_neat' | 'helmet';
  eyeColor: string;
  eyeExpression: 'normal' | 'sanpaku' | 'gentle' | 'tsundere' | 'smug' | 'crazy' | 'tired' | 'closed_smile';
  outfitColor: string;
  accentColor: string;
  accessory?: 'rose' | 'maid_band' | 'crown' | 'butterfly' | 'cat_ears' | 'hat_green' | 'top_hat' | 'veil' | 'fan' | 'sword' | 'flail' | 'book' | 'tea' | 'coin' | 'bag' | 'scar';
}

export interface ReZeroCharacter {
  id: CharacterId;
  sbtiCode: string;
  name: string;
  routeCategory: RouteCategory;
  routeTag: string;
  title: string;
  themeColor: string;
  oneLiner: string;
  shortRoast: string;
  tags: [string, string, string];
  dimensions: SoulDimensions;
  visual: ChibiVisualStyle;
}

export interface QuizChoice {
  index: number;
  label: string;
  roastTag: string;
  dimensionDelta: Partial<SoulDimensions>;
  characterWeights: Partial<Record<CharacterId, number>>;
}

export interface QuizQuestion {
  id: number;
  question: string;
  choices: QuizChoice[];
}

export const DIMENSION_LABELS: Record<keyof SoulDimensions, string> = {
  obsession: '死磕指数',
  sanity: '精神稳定',
  ruthlessness: '发疯狠度',
  empathy: '护短浓度',
  wit: '嘴硬整活',
};

export const CHARACTERS: Record<CharacterId, ReZeroCharacter> = {
  // ==================== 1. 艾米莉亚阵营 & 宅邸 (11位) ====================
  subaru_envy: {
    id: 'subaru_envy',
    sbtiCode: 'SUBA',
    name: '菜月昴（本篇）',
    routeCategory: 'emilia_camp',
    routeTag: '艾米莉亚阵营',
    title: '死磕到底的嘴碎骑士',
    themeColor: '#EA580C',
    oneLiner: '嘴上喊着要摆烂，结果每次烂摊子全是你咬着牙兜底。',
    shortRoast:
      '全村最能硬撑的散装英雄。平时看着没个正形、到处接梗耍宝，其实比谁都怕被抛下。遇到事嘴上骂骂咧咧，身体却诚实地冲在第一个，属于“自己碎成渣也要把朋友捞回来”的死心眼体质。',
    tags: ['死要面子活受罪', '社交牛逼症晚期', '绝境死磕王'],
    dimensions: { obsession: 84, sanity: 60, ruthlessness: 26, empathy: 95, wit: 94 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'spiky',
      eyeColor: '#27272A',
      eyeExpression: 'sanpaku',
      outfitColor: '#1E293B',
      accentColor: '#F97316',
      accessory: 'bag',
    },
  },
  emilia: {
    id: 'emilia',
    sbtiCode: 'EMIL',
    name: '艾米莉亚',
    routeCategory: 'emilia_camp',
    routeTag: '艾米莉亚阵营',
    title: '心软但底线极硬的直球派',
    themeColor: '#7C3AED',
    oneLiner: '骗子给你打电话，你都怕挂太快伤到对方自尊心。',
    shortRoast:
      '互联网濒危的“纯天然老实人”。听不懂阴阳怪气，也不爱玩心眼子，别人对你好一分你能记一辈子。但千万别把你当软柿子捏——一旦触碰到原则底线，你翻脸冻人的速度比谁都快。',
    tags: ['反矫情直球选手', '吃软不吃硬', '顶级老好人'],
    dimensions: { obsession: 56, sanity: 90, ruthlessness: 15, empathy: 96, wit: 40 },
    visual: {
      hairColor: '#F1F5F9',
      hairStyle: 'long',
      eyeColor: '#7C3AED',
      eyeExpression: 'gentle',
      outfitColor: '#FFFFFF',
      accentColor: '#7C3AED',
      accessory: 'rose',
    },
  },
  rem: {
    id: 'rem',
    sbtiCode: 'REMM',
    name: '雷姆',
    routeCategory: 'emilia_camp',
    routeTag: '罗兹瓦尔宅邸',
    title: '拎着流星锤的护短战神',
    themeColor: '#2563EB',
    oneLiner: '不在乎的人死活勿扰，在乎的人掉根头发你都能把地球掀了。',
    shortRoast:
      '你的感情字典里没有“中庸”两个字。对外人你是礼貌疏离的效率机器，一旦认定一个人，你就是毫无保留的护犊子狂魔。世界毁不毁灭你根本不关心，你只想守着自己的小圈子过安稳日子。',
    tags: ['顶级双标护短', '家务战斗双修', '纯爱重锤出击'],
    dimensions: { obsession: 92, sanity: 74, ruthlessness: 68, empathy: 90, wit: 48 },
    visual: {
      hairColor: '#38BDF8',
      hairStyle: 'bob_right',
      eyeColor: '#2563EB',
      eyeExpression: 'gentle',
      outfitColor: '#18181B',
      accentColor: '#F472B6',
      accessory: 'flail',
    },
  },
  ram: {
    id: 'ram',
    sbtiCode: 'RAMM',
    name: '拉姆',
    routeCategory: 'emilia_camp',
    routeTag: '罗兹瓦尔宅邸',
    title: '嘴毒心热的摸鱼毒舌女王',
    themeColor: '#EC4899',
    oneLiner: '干活是不可能干活的，但吐槽你我能连说三天三夜不重样。',
    shortRoast:
      '带薪摸鱼界的祖师爷，全身上下嘴最硬。平时能坐着绝不站着，开口就是精准降维打击的毒舌金句；但真到了自家地盘出事的时候，你比谁都拎得清大局，属于“嘴上嫌弃死你、背地里帮你兜底”的傲慢大姐头。',
    tags: ['带薪摸鱼天花板', '毒舌十级学者', '关键时刻极稳'],
    dimensions: { obsession: 72, sanity: 82, ruthlessness: 70, empathy: 62, wit: 92 },
    visual: {
      hairColor: '#F472B6',
      hairStyle: 'bob_left',
      eyeColor: '#DB2777',
      eyeExpression: 'smug',
      outfitColor: '#18181B',
      accentColor: '#EC4899',
      accessory: 'maid_band',
    },
  },
  beatrice: {
    id: 'beatrice',
    sbtiCode: 'BEAK',
    name: '碧翠丝',
    routeCategory: 'emilia_camp',
    routeTag: '禁书库管理员',
    title: '把门反锁的死傲娇守望者',
    themeColor: '#DB2777',
    oneLiner: '嘴上让人滚远点，其实耳朵竖得比谁都高，就等人来哄。',
    shortRoast:
      '重度防御型死傲娇。因为害怕期待落空，干脆把自己锁在房间里当蘑菇，谁来搭话都先怼一句。但凡有个人能顶住你的毒舌、坚定地选你当第一顺位，你当场就能把掏心掏肺四个字焊在脑门上。',
    tags: ['口嫌体正直冠军', '社交电量常年1%', '需要被坚定选择'],
    dimensions: { obsession: 80, sanity: 78, ruthlessness: 46, empathy: 78, wit: 72 },
    visual: {
      hairColor: '#FDE047',
      hairStyle: 'drills',
      eyeColor: '#0284C7',
      eyeExpression: 'tsundere',
      outfitColor: '#9D174D',
      accentColor: '#F472B6',
      accessory: 'crown',
    },
  },
  roswaal: {
    id: 'roswaal',
    sbtiCode: 'ROSW',
    name: '罗兹瓦尔',
    routeCategory: 'emilia_camp',
    routeTag: '边境伯爵',
    title: '笑着掀桌的极致赌徒小丑',
    themeColor: '#7E22CE',
    oneLiner: '脸上笑得像个吉祥物，心里已经把所有人当成筹码押上赌桌了。',
    shortRoast:
      '你是个表面嘻嘻哈哈、实则内心偏执到可怕的狠人。为了达成心底唯一认定的执念，你可以蛰伏很久，连自己都能当成棋子献祭。你最讨厌半途而废的妥协，信奉“要么全赢、要么全输”的极端赌徒美学。',
    tags: ['笑面幕后黑手', '孤注一掷赌徒', '绝不接受平局'],
    dimensions: { obsession: 96, sanity: 42, ruthlessness: 92, empathy: 24, wit: 88 },
    visual: {
      hairColor: '#312E81',
      hairStyle: 'sleek_long',
      eyeColor: '#F59E0B',
      eyeExpression: 'smug',
      outfitColor: '#4C1D95',
      accentColor: '#FBBF24',
      accessory: 'top_hat',
    },
  },
  garfiel: {
    id: 'garfiel',
    sbtiCode: 'GARF',
    name: '加菲尔',
    routeCategory: 'emilia_camp',
    routeTag: '圣域之盾',
    title: '嘴硬护家的暴躁纯情猛虎',
    themeColor: '#D97706',
    oneLiner: '放最狠的狠话，挨最毒的打，红最快的耳根。',
    shortRoast:
      '典型的“纸老虎式暴躁老哥”。为了保护身边人和自己的小地盘，整天把獠牙露在外面装凶，其实内心纯情又敏感，稍微被喜欢的人夸一句或者摸一下头就会当场大脑宕机。',
    tags: ['外凶内怂大猫', '重度护家狂魔', '一夸就脸红'],
    dimensions: { obsession: 74, sanity: 58, ruthlessness: 66, empathy: 86, wit: 62 },
    visual: {
      hairColor: '#FACC15',
      hairStyle: 'spiky',
      eyeColor: '#16A34A',
      eyeExpression: 'tsundere',
      outfitColor: '#78350F',
      accentColor: '#F59E0B',
      accessory: 'scar',
    },
  },
  otto: {
    id: 'otto',
    sbtiCode: 'OTTO',
    name: '奥托',
    routeCategory: 'emilia_camp',
    routeTag: '艾米莉亚阵营内政官',
    title: '满脸苦相的劳碌命总管',
    themeColor: '#059669',
    oneLiner: '全世界都在发疯搞事，只有你在熬夜算账擦屁股。',
    shortRoast:
      '天选打工人、朋友圈里的终极大冤种。你明明只想安安静静赚钱过日子，却总因为心软和重义气，被一群不省心的朋友拉上贼船。一边崩溃叹气说“不管你们了”，一边通宵把所有漏洞补得严严实实。',
    tags: ['全自动擦屁股机', '嘴上抱怨身体诚实', '人间清醒社畜'],
    dimensions: { obsession: 52, sanity: 84, ruthlessness: 34, empathy: 84, wit: 82 },
    visual: {
      hairColor: '#CBD5E1',
      hairStyle: 'short_neat',
      eyeColor: '#059669',
      eyeExpression: 'tired',
      outfitColor: '#065F46',
      accentColor: '#34D399',
      accessory: 'hat_green',
    },
  },
  frederica: {
    id: 'frederica',
    sbtiCode: 'FRED',
    name: '法兰黛莉卡',
    routeCategory: 'emilia_camp',
    routeTag: '罗兹瓦尔宅邸女仆长',
    title: '微笑露獠牙的操心大姐头',
    themeColor: '#CA8A04',
    oneLiner: '平时是温柔靠谱的知心大姐姐，急眼了直接物理教育。',
    shortRoast:
      '团队里的定海神针型大家长。你习惯把所有人的生活起居和情绪照顾得妥妥帖帖，行事稳重得体；但如果有人敢欺负你罩着的小辈，你会微笑着亮出獠牙，让对方知道什么叫大姐头的铁拳。',
    tags: ['操心命大家长', '温柔但不好惹', '极致可靠后盾'],
    dimensions: { obsession: 60, sanity: 88, ruthlessness: 50, empathy: 90, wit: 56 },
    visual: {
      hairColor: '#FDE047',
      hairStyle: 'long',
      eyeColor: '#15803D',
      eyeExpression: 'gentle',
      outfitColor: '#18181B',
      accentColor: '#FACC15',
      accessory: 'maid_band',
    },
  },
  petra: {
    id: 'petra',
    sbtiCode: 'PETR',
    name: '佩特拉',
    routeCategory: 'emilia_camp',
    routeTag: '罗兹瓦尔宅邸女仆',
    title: '表面乖巧的早熟白切黑能手',
    themeColor: '#E11D48',
    oneLiner: '睁着最无辜的大眼睛，说着最扎心的大实话。',
    shortRoast:
      '别看你平时乖巧懂事、人畜无害，其实心里跟明镜似的，看人比谁都准。你学东西极快、目标感极强，对喜欢的人甜甜撒娇，对看不顺眼的人能用最软的语气刺出最痛的一刀。',
    tags: ['隐藏白切黑潜力股', '看人极准', '双标小机灵鬼'],
    dimensions: { obsession: 68, sanity: 80, ruthlessness: 54, empathy: 74, wit: 78 },
    visual: {
      hairColor: '#FB923C',
      hairStyle: 'short_neat',
      eyeColor: '#2563EB',
      eyeExpression: 'gentle',
      outfitColor: '#18181B',
      accentColor: '#F43F5E',
      accessory: 'maid_band',
    },
  },
  puck: {
    id: 'puck',
    sbtiCode: 'PUCK',
    name: '帕克',
    routeCategory: 'emilia_camp',
    routeTag: '终焉之兽 · 大精灵',
    title: '朝九晚五准点下班的猫大爷',
    themeColor: '#64748B',
    oneLiner: '只要到点下班，就算天塌下来也别想让我加班一秒钟。',
    shortRoast:
      '整顿异世界职场的摸鱼老祖。平时揣着明白装糊涂，到点就钻回水晶里睡觉，谁喊都不好使；但唯独对你最核心在乎的那个人护短到极致——如果TA受了委屈，你真能掀桌子拉全世界陪葬。',
    tags: ['准点下班第一名', '平时卖萌关键掀桌', '终极护犊子'],
    dimensions: { obsession: 86, sanity: 76, ruthlessness: 82, empathy: 50, wit: 88 },
    visual: {
      hairColor: '#94A3B8',
      hairStyle: 'short_neat',
      eyeColor: '#1E293B',
      eyeExpression: 'smug',
      outfitColor: '#64748B',
      accentColor: '#F472B6',
      accessory: 'cat_ears',
    },
  },
  meili: {
    id: 'meili',
    sbtiCode: 'MEIL',
    name: '梅莉',
    routeCategory: 'emilia_camp',
    routeTag: '监视塔远征队 · 魔兽使',
    title: '嘴硬缺爱的傲娇小孩姐',
    themeColor: '#6366F1',
    oneLiner: '别拿我当小孩子哄！……不过你要是非要陪我玩，我也勉强答应啦。',
    shortRoast:
      '浑身写满“生人勿近”的早熟小孩姐。因为吃过苦头，你习惯用冷漠、嫌弃和老气横秋的毒舌把自己包起来；但只要遇到真正不抛弃你的靠谱哥哥姐姐，你立刻就会暴露怕黑、怕孤单、渴望被摸头的本性。',
    tags: ['傲娇小孩姐', '嘴上嫌弃身体诚实', '毛茸茸控场王'],
    dimensions: { obsession: 66, sanity: 64, ruthlessness: 74, empathy: 62, wit: 84 },
    visual: {
      hairColor: '#3B82F6',
      hairStyle: 'drills',
      eyeColor: '#D97706',
      eyeExpression: 'tsundere',
      outfitColor: '#312E81',
      accentColor: '#F472B6',
    },
  },
  shaula: {
    id: 'shaula',
    sbtiCode: 'SHAU',
    name: '夏乌拉',
    routeCategory: 'emilia_camp',
    routeTag: '普勒阿得斯监视塔 · 看守',
    title: '苦等四百年的阳光黏人精',
    themeColor: '#EA580C',
    oneLiner: '师父！师父！不管过几百年，我最最最喜欢师父啦！！',
    shortRoast:
      '热情似火、零防备心的超级自来熟犬系（蝎系）人格！你根本学不会什么欲擒故纵和高冷拉扯，喜欢一个人就会满眼星星地扑上去挂在TA身上。虽然平时脑回路简单粗暴，但你的忠诚度是跨越百年都不掉线的满分。',
    tags: ['直球扑人冠军', '零心机阳光大狗狗', '死忠师父吹'],
    dimensions: { obsession: 98, sanity: 58, ruthlessness: 78, empathy: 82, wit: 88 },
    visual: {
      hairColor: '#78350F',
      hairStyle: 'ponytail',
      eyeColor: '#16A34A',
      eyeExpression: 'gentle',
      outfitColor: '#EA580C',
      accentColor: '#FACC15',
    },
  },

  // ==================== 2. 王选各阵营候补与骑士 (10位) ====================
  reinhard: {
    id: 'reinhard',
    sbtiCode: 'REIN',
    name: '莱茵哈鲁特',
    routeCategory: 'royal_camps',
    routeTag: '菲鲁特阵营 · 剑圣',
    title: '被迫满分的背锅老实人',
    themeColor: '#DC2626',
    oneLiner: '大家都默认你无所不能，却没人问过你累不累。',
    shortRoast:
      '朋友眼里的全能大腿、生活里的终极救火队长。因为你表现得太情绪稳定、太靠谱，所有人都理所当然地把重担往你身上甩。你永远挂着礼貌微笑把事办妥，只有深夜独处时才觉得自己像个孤独的外人。',
    tags: ['满分讨好型枷锁', '全自动兜底机器', '高处不胜寒'],
    dimensions: { obsession: 60, sanity: 94, ruthlessness: 40, empathy: 86, wit: 38 },
    visual: {
      hairColor: '#EF4444',
      hairStyle: 'spiky',
      eyeColor: '#0284C7',
      eyeExpression: 'gentle',
      outfitColor: '#FFFFFF',
      accentColor: '#F59E0B',
      accessory: 'sword',
    },
  },
  felt: {
    id: 'felt',
    sbtiCode: 'FELT',
    name: '菲鲁特',
    routeCategory: 'royal_camps',
    routeTag: '菲鲁特阵营候补',
    title: '掀翻规矩的野生反骨女王',
    themeColor: '#F59E0B',
    oneLiner: '少拿那套破规矩压我，看不爽的排场我当场就给它砸了！',
    shortRoast:
      '浑身长满反骨的野生行动派。你最烦虚伪的客套、繁文缛节和画大饼，信奉“靠谁都不如靠自己跑得快”。虽然嘴上说着只认钱和实际利益，但对真正跟自己混的底层伙伴极其讲义气。',
    tags: ['反骨含量100%', '专治假正经老登', '重义气野路子'],
    dimensions: { obsession: 62, sanity: 76, ruthlessness: 60, empathy: 70, wit: 86 },
    visual: {
      hairColor: '#FDE047',
      hairStyle: 'spiky',
      eyeColor: '#DC2626',
      eyeExpression: 'smug',
      outfitColor: '#78350F',
      accentColor: '#EF4444',
    },
  },
  crusch: {
    id: 'crusch',
    sbtiCode: 'CRUS',
    name: '库珥修',
    routeCategory: 'royal_camps',
    routeTag: '库珥修阵营候补',
    title: '绝不画饼的铁血霸总女武神',
    themeColor: '#15803D',
    oneLiner: '别跟我谈虚无的运气，我只信自己手里的剑和硬实力。',
    shortRoast:
      '天生的大女主、人形测谎仪。你讨厌依附别人，做事雷厉风行、干脆利落，从不搞模棱两可的暧昧话术。哪怕前路再难，你也永远挺直腰杆走在最前面，自带让人心服口服的领袖气场。',
    tags: ['大女主清醒发言', '从不甩锅画饼', '铁血行动派'],
    dimensions: { obsession: 78, sanity: 92, ruthlessness: 68, empathy: 72, wit: 44 },
    visual: {
      hairColor: '#15803D',
      hairStyle: 'ponytail',
      eyeColor: '#D97706',
      eyeExpression: 'normal',
      outfitColor: '#1E293B',
      accentColor: '#16A34A',
      accessory: 'sword',
    },
  },
  ferris: {
    id: 'ferris',
    sbtiCode: 'FERR',
    name: '菲利斯',
    routeCategory: 'royal_camps',
    routeTag: '库珥修阵营 · 青色治愈师',
    title: '猫耳毒舌的粘人精奶妈',
    themeColor: '#0284C7',
    oneLiner: '一边用最甜的声音喊喵喵，一边专挑你最痛的软肋扎刀子。',
    shortRoast:
      '甜妹外皮下的顶级毒舌乐子人。平时最爱撒娇卖萌、逗老实人玩，看着没心没肺；实际上对认定的主君/挚友有着近乎偏执的保护欲，谁要是敢让你在乎的人涉险，你会第一个跳出来翻脸。',
    tags: ['卖萌与扎心同步', '重度粘人精', '护主第一名'],
    dimensions: { obsession: 82, sanity: 68, ruthlessness: 62, empathy: 76, wit: 90 },
    visual: {
      hairColor: '#FDE68A',
      hairStyle: 'bob_right',
      eyeColor: '#D97706',
      eyeExpression: 'smug',
      outfitColor: '#0284C7',
      accentColor: '#BAE6FD',
      accessory: 'cat_ears',
    },
  },
  wilhelm: {
    id: 'wilhelm',
    sbtiCode: 'WILH',
    name: '威尔海姆',
    routeCategory: 'royal_camps',
    routeTag: '库珥修阵营 · 剑鬼',
    title: '砍穿白鲸的纯爱老剑鬼',
    themeColor: '#334155',
    oneLiner: '不擅长说漂亮情话，但为了你我可以练一辈子剑。',
    shortRoast:
      '老派纯爱战神的天花板。你是个典型的闷骚死心眼，不爱表达情绪，所有的深情和执念全都化成了死磕到底的行动。哪怕过去十年二十年，你认准的那个人、那件事也绝对不会变质。',
    tags: ['闷骚纯爱战神', '死磕几十年不改', '人狠话不多'],
    dimensions: { obsession: 96, sanity: 80, ruthlessness: 76, empathy: 70, wit: 28 },
    visual: {
      hairColor: '#CBD5E1',
      hairStyle: 'ponytail',
      eyeColor: '#334155',
      eyeExpression: 'normal',
      outfitColor: '#1E293B',
      accentColor: '#94A3B8',
      accessory: 'sword',
    },
  },
  theresia: {
    id: 'theresia',
    sbtiCode: 'THER',
    name: '特蕾西亚',
    routeCategory: 'royal_camps',
    routeTag: '阿斯特雷亚家族 · 前代剑圣',
    title: '只想看花躺平的满级战神',
    themeColor: '#F43F5E',
    oneLiner: '你喜欢花吗？其实我比起拿剑，更想安安静静晒太阳啊。',
    shortRoast:
      '典型的“明明只想岁月静好，却因为业务能力太强被迫扛起全村KPI”的温柔天花板。你骨子里讨厌争强好胜和内卷厮杀，喜欢一切浪漫治愈的小确幸；但为了不让在乎的人流血，你还是会叹着气拔出剑横扫全场。',
    tags: ['被迫营业的满级大佬', '温柔浪漫主义', '为爱拔剑第一人'],
    dimensions: { obsession: 74, sanity: 90, ruthlessness: 44, empathy: 96, wit: 52 },
    visual: {
      hairColor: '#EF4444',
      hairStyle: 'long',
      eyeColor: '#0284C7',
      eyeExpression: 'gentle',
      outfitColor: '#FFF1F2',
      accentColor: '#F43F5E',
      accessory: 'rose',
    },
  },
  anastasia: {
    id: 'anastasia',
    sbtiCode: 'ANAS',
    name: '安娜塔西亚',
    routeCategory: 'royal_camps',
    routeTag: '安娜塔西亚阵营候补',
    title: '算盘打穿异世界的搞钱教母',
    themeColor: '#9333EA',
    oneLiner: '谈感情伤钱，但只要成了自己人，我包你连本带利一起赚！',
    shortRoast:
      '搞钱才是你的第一生产力！你永远清醒、永远务实，最擅长评估风险与收益，任何画大饼的忽悠在你面前都过不了三秒。虽然嘴上把“强欲”挂在嘴边，但对真正入伙的自己人比谁都大方护短。',
    tags: ['搞钱人间清醒', '算盘珠子崩脸上', '护短好老板'],
    dimensions: { obsession: 84, sanity: 88, ruthlessness: 72, empathy: 68, wit: 86 },
    visual: {
      hairColor: '#C084FC',
      hairStyle: 'drills',
      eyeColor: '#0D9488',
      eyeExpression: 'smug',
      outfitColor: '#FFFFFF',
      accentColor: '#9333EA',
      accessory: 'coin',
    },
  },
  julius: {
    id: 'julius',
    sbtiCode: 'JULI',
    name: '尤里乌斯',
    routeCategory: 'royal_camps',
    routeTag: '安娜塔西亚阵营 · 最优骑士',
    title: '死要面子的完美偶像派骑士',
    themeColor: '#6366F1',
    oneLiner: '哪怕天塌下来，我翻刘海的姿势也必须保持优雅满分。',
    shortRoast:
      '重度偶包持有者，讲究体面与仪式感的细节控。为了顾全大局和保护朋友，你经常宁可自己背黑锅扮恶人也不解释一句，结果老是被人误会成装逼犯——其实私底下是个极度重情义的老实人。',
    tags: ['偶像包袱十吨重', '背锅不解释大师', '讲究人本精'],
    dimensions: { obsession: 70, sanity: 86, ruthlessness: 48, empathy: 82, wit: 58 },
    visual: {
      hairColor: '#7C3AED',
      hairStyle: 'short_neat',
      eyeColor: '#EAB308',
      eyeExpression: 'normal',
      outfitColor: '#FFFFFF',
      accentColor: '#6366F1',
      accessory: 'sword',
    },
  },
  priscilla: {
    id: 'priscilla',
    sbtiCode: 'PRIS',
    name: '普莉希拉',
    routeCategory: 'royal_camps',
    routeTag: '普莉希拉阵营候补',
    title: '唯我独尊的太阳暴君女王',
    themeColor: '#DC2626',
    oneLiner: '全世界的运转本来就是为了讨妾身欢心，你有什么意见吗？',
    shortRoast:
      '精神内耗？那是什么东西？你的字典里从来只有“我永远是对的”！极度自信、极度张扬，从不委屈自己迎合任何人。神奇的是，正因为你活得太通透太霸道，反而拥有一眼看穿虚伪的顶级直觉。',
    tags: ['零内耗女王心态', '普信但真有实力', '全场唯一真神'],
    dimensions: { obsession: 88, sanity: 86, ruthlessness: 86, empathy: 30, wit: 80 },
    visual: {
      hairColor: '#F97316',
      hairStyle: 'long',
      eyeColor: '#DC2626',
      eyeExpression: 'smug',
      outfitColor: '#DC2626',
      accentColor: '#FBBF24',
      accessory: 'fan',
    },
  },
  aldebaran: {
    id: 'aldebaran',
    sbtiCode: 'ALDE',
    name: '阿尔（阿尔迪巴兰）',
    routeCategory: 'royal_camps',
    routeTag: '普莉希拉阵营骑士',
    title: '戴着头盔混日子的老油条同乡',
    themeColor: '#52525B',
    oneLiner: '别当什么英雄了兄弟，听哥一句劝，活着比啥都强。',
    shortRoast:
      '看透一切却选择装傻混日子的老油条。你早就吃够了硬刚的苦头，所以平时总是吊儿郎当、能躲就躲，劝大家别太较真；但真到了逃无可逃的赌局上，你其实藏着不输给任何人的狠劲。',
    tags: ['混子界精神导师', '劝人躺平第一名', '深藏不露老油条'],
    dimensions: { obsession: 76, sanity: 56, ruthlessness: 74, empathy: 58, wit: 90 },
    visual: {
      hairColor: '#27272A',
      hairStyle: 'helmet',
      eyeColor: '#18181B',
      eyeExpression: 'tired',
      outfitColor: '#3F3F46',
      accentColor: '#D97706',
      accessory: 'sword',
    },
  },

  // ==================== 3. 魔女与大罪司教/暗夜 (5位) ====================
  echidna: {
    id: 'echidna',
    sbtiCode: 'DONA',
    name: '艾姬多娜',
    routeCategory: 'witches_cult',
    routeTag: '强欲之魔女',
    title: '看热闹不嫌事大的吃瓜魔女',
    themeColor: '#18181B',
    oneLiner: '别人在修罗场里哭得死去活来，你在旁边端着茶记笔记。',
    shortRoast:
      '你不是冷血，你只是好奇心压倒了道德感。大家都在为情绪内耗时，你的脑子已经自动切换到上帝视角开始分析局势了。天塌下来先吃口瓜，只要能搞懂真相，让你输出一万字小作文你都不带喘气的。',
    tags: ['人间清醒乐子人', '八卦情报中心', '逻辑怪本怪'],
    dimensions: { obsession: 86, sanity: 88, ruthlessness: 85, empathy: 22, wit: 96 },
    visual: {
      hairColor: '#FFFFFF',
      hairStyle: 'sleek_long',
      eyeColor: '#18181B',
      eyeExpression: 'smug',
      outfitColor: '#18181B',
      accentColor: '#A855F7',
      accessory: 'tea',
    },
  },
  satella: {
    id: 'satella',
    sbtiCode: 'SATE',
    name: '莎缇拉',
    routeCategory: 'witches_cult',
    routeTag: '嫉妒之魔女',
    title: '跨越两千年的窒息级重女',
    themeColor: '#4C1D95',
    oneLiner: '我爱你、我爱你、我爱你……所以你也只能看着我一个人。',
    shortRoast:
      '重度深情与占有欲的终极结合体。平时沉默寡言、存在感像影子一样低，但内心藏着惊涛骇浪般的情感浓度。你不在乎全世界怎么骂你，你只希望自己认定的那个人能好好爱惜TA自己。',
    tags: ['异世界第一重女', '深情到让人窒息', '全世界只看一人'],
    dimensions: { obsession: 100, sanity: 18, ruthlessness: 88, empathy: 65, wit: 15 },
    visual: {
      hairColor: '#E2E8F0',
      hairStyle: 'long',
      eyeColor: '#6D28D9',
      eyeExpression: 'gentle',
      outfitColor: '#1E1B4B',
      accentColor: '#8B5CF6',
      accessory: 'veil',
    },
  },
  pandora: {
    id: 'pandora',
    sbtiCode: 'PAND',
    name: '潘多拉',
    routeCategory: 'witches_cult',
    routeTag: '虚饰之魔女',
    title: '把黑的说成白的顶级PUA大师',
    themeColor: '#6366F1',
    oneLiner: '你的眼睛看错了哦，这件事从一开始就没有发生过呢。',
    shortRoast:
      '精神控制与心理博弈的终极魔王。你永远保持着轻声细语、悲天悯人的圣母微笑，但实际上最擅长篡改叙事、颠倒黑白。吵架时你从不急眼，而是用最温柔的语气把对方绕进逻辑闭环，让对方主动怀疑人生。',
    tags: ['温柔一刀PUA大师', '从不急眼的控场王', '颠倒黑白第一名'],
    dimensions: { obsession: 90, sanity: 82, ruthlessness: 95, empathy: 16, wit: 92 },
    visual: {
      hairColor: '#F8FAFC',
      hairStyle: 'sleek_long',
      eyeColor: '#2563EB',
      eyeExpression: 'closed_smile',
      outfitColor: '#EEF2FF',
      accentColor: '#6366F1',
    },
  },
  minerva: {
    id: 'minerva',
    sbtiCode: 'MINE',
    name: '密涅瓦',
    routeCategory: 'witches_cult',
    routeTag: '愤怒之魔女',
    title: '一拳把你奶满的暴躁护短妈',
    themeColor: '#EC4899',
    oneLiner: '谁准你糟蹋自己身体的？！给我站住，看我不一拳把你治好！',
    shortRoast:
      '刀子嘴豆腐心的究极形态！你最看不得身边的人受委屈或者自我内耗，一旦发现朋友状态不对，你会一边气鼓鼓地骂TA是个笨蛋，一边火速冲上去帮TA把所有窟窿补好，属于“用最凶的语气干最暖的事”的典型代表。',
    tags: ['物理治愈暴躁奶妈', '看不得朋友受委屈', '刀子嘴豆腐心天花板'],
    dimensions: { obsession: 88, sanity: 54, ruthlessness: 34, empathy: 98, wit: 72 },
    visual: {
      hairColor: '#FDE047',
      hairStyle: 'ponytail',
      eyeColor: '#0284C7',
      eyeExpression: 'tsundere',
      outfitColor: '#FDF2F8',
      accentColor: '#EC4899',
    },
  },
  regulus: {
    id: 'regulus',
    sbtiCode: 'REGU',
    name: '雷古勒斯',
    routeCategory: 'witches_cult',
    routeTag: '强欲大罪司教',
    title: '满嘴“侵犯我权利”的破防懂王',
    themeColor: '#0F766E',
    oneLiner: '我只是想安安静静过日子，你们一个个都是在侵犯我的权利吧？！',
    shortRoast:
      '网络对线十级学者、小作文输出机器。你最讲究“个人边界”和“先来后到”，别人稍微反驳你一句或者没回你消息，你就能从宇宙起源开始论证是对方不懂礼貌，属于典型的嘴强王者加玻璃心。',
    tags: ['懂王小作文之神', '一点就着玻璃心', '死活不认错'],
    dimensions: { obsession: 82, sanity: 30, ruthlessness: 84, empathy: 12, wit: 86 },
    visual: {
      hairColor: '#F8FAFC',
      hairStyle: 'short_neat',
      eyeColor: '#D97706',
      eyeExpression: 'tsundere',
      outfitColor: '#FFFFFF',
      accentColor: '#F59E0B',
    },
  },
  petelgeuse: {
    id: 'petelgeuse',
    sbtiCode: 'BETE',
    name: '培提尔其乌斯',
    routeCategory: 'witches_cult',
    routeTag: '怠惰大罪司教',
    title: '精神状态全面失控的狂热卷王',
    themeColor: '#15803D',
    oneLiner: '大脑在颤抖！！你怎么敢在赶DDL的时候这么怠惰呢？！',
    shortRoast:
      '顶着“怠惰”的名号，干着全世界最卷最疯的活！你的精神状态早已突破人类极限，一旦投入某件事就会进入昼夜颠倒的狂热模式，不仅自己卷到咬手指，看别人摸鱼还会急得当场表演颜艺。',
    tags: ['大脑在颤抖本尊', '以怠惰之名死卷', '精神状态极美'],
    dimensions: { obsession: 98, sanity: 8, ruthlessness: 90, empathy: 20, wit: 82 },
    visual: {
      hairColor: '#166534',
      hairStyle: 'bowl',
      eyeColor: '#DC2626',
      eyeExpression: 'crazy',
      outfitColor: '#18181B',
      accentColor: '#22C55E',
      accessory: 'book',
    },
  },
  capella: {
    id: 'capella',
    sbtiCode: 'CAPE',
    name: '卡佩拉',
    routeCategory: 'witches_cult',
    routeTag: '色欲大罪司教',
    title: '专戳人性痛点的恶趣味千面妖',
    themeColor: '#DB2777',
    oneLiner: '嘴上说着看重内在，其实你们全都是肤浅的外貌协会吧？咯哈哈！',
    shortRoast:
      '看透人性虚伪的毒舌整蛊狂魔！你天生拥有千人千面的社交伪装能力，见人说人话、见鬼说鬼话，最喜欢戳破别人假正经的面具看对方破防。虽然行事风格极其嚣张恶趣味，但你看人看事往往一针见血。',
    tags: ['千人千面社交怪', '专拆假正经台子', '恶趣味乐子人'],
    dimensions: { obsession: 86, sanity: 24, ruthlessness: 94, empathy: 14, wit: 96 },
    visual: {
      hairColor: '#F9A8D4',
      hairStyle: 'drills',
      eyeColor: '#BE185D',
      eyeExpression: 'crazy',
      outfitColor: '#18181B',
      accentColor: '#EC4899',
      accessory: 'crown',
    },
  },
  elsa: {
    id: 'elsa',
    sbtiCode: 'ELSA',
    name: '艾尔莎',
    routeCategory: 'witches_cult',
    routeTag: '猎肠者',
    title: '只对危险事物兴奋的优雅疯批',
    themeColor: '#9F1239',
    oneLiner: '平淡的日子太无聊了，还是刺激的修罗场最让人心跳加速呢。',
    shortRoast:
      '优雅礼貌的疯批美学代表。你对按部就班的安稳生活毫无兴趣，越是高难度、高风险的修罗场，你的多巴胺分泌得越旺盛。行事全凭个人喜好，从不受道德绑架，是个危险又迷人的狠角色。',
    tags: ['反差感优雅疯批', '越危险越兴奋', '从不走寻常路'],
    dimensions: { obsession: 84, sanity: 28, ruthlessness: 96, empathy: 18, wit: 74 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'sleek_long',
      eyeColor: '#9F1239',
      eyeExpression: 'smug',
      outfitColor: '#4C0519',
      accentColor: '#E11D48',
    },
  },

  // ==================== 4. 隐藏大罪 IF 线形态 (5位) ====================
  subaru_pride: {
    id: 'subaru_pride',
    sbtiCode: 'PRID',
    name: '菜月昴（傲慢IF）',
    routeCategory: 'if_route',
    routeTag: '傲慢IF线',
    title: '一条道走到黑的疯批偏执狂',
    themeColor: '#E11D48',
    oneLiner: '只要能达成我认定的结局，把全世界全扬了又怎样？',
    shortRoast:
      '警告，你测出了隐藏的《傲慢IF》疯批剧本！你根本不在乎世俗的好人卡，一旦认准一个目标或一个人，你能狠到拿自己当耗材、拿全世界当垫脚石。极致的浪漫混着极致的狠劲，属于千万别惹的狠角色。',
    tags: ['纯爱疯批天花板', '记仇且当场报复', '结果导向狠人'],
    dimensions: { obsession: 99, sanity: 14, ruthlessness: 98, empathy: 30, wit: 88 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'spiky',
      eyeColor: '#E11D48',
      eyeExpression: 'crazy',
      outfitColor: '#18181B',
      accentColor: '#E11D48',
    },
  },
  subaru_greed: {
    id: 'subaru_greed',
    sbtiCode: 'GRED',
    name: '菜月昴（强欲IF）',
    routeCategory: 'if_route',
    routeTag: '强欲IF线',
    title: '连明天天气都要算准的卷王机器',
    themeColor: '#4F46E5',
    oneLiner: '为了拿100分标准答案，你已经把自己卷成没有感情的AI了。',
    shortRoast:
      '你触发了《强欲IF》路线！重度完美主义加控制欲晚期，绝不允许计划出现1%的失控。为了照顾好所有人、做到表面上的滴水不漏，你习惯把自己的委屈全部静音，挂着最标准微笑扛下所有消耗。',
    tags: ['零失误强迫症', '情绪自动静音', '自我消耗大师'],
    dimensions: { obsession: 96, sanity: 22, ruthlessness: 80, empathy: 62, wit: 74 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'spiky',
      eyeColor: '#312E81',
      eyeExpression: 'closed_smile',
      outfitColor: '#0F172A',
      accentColor: '#F8FAFC',
      accessory: 'butterfly',
    },
  },
  subaru_wrath: {
    id: 'subaru_wrath',
    sbtiCode: 'WRAT',
    name: '菜月昴（愤怒IF）',
    routeCategory: 'if_route',
    routeTag: '愤怒IF · 肃清王',
    title: '看谁都像害你的防备心刺猬',
    themeColor: '#475569',
    oneLiner: '只要我先一步把所有人都防死，就没人能背刺我。',
    shortRoast:
      '你触发了《愤怒IF·肃清王》路线！极度缺乏安全感，吃过一次亏就永远把防弹衣焊在身上。看起来冷酷多疑、谁都不信，其实骨子里是个极度怕痛、只要有人给一点点真心就会偷偷记住的敏感鬼。',
    tags: ['被害妄想满级', '外冷内怂刺猬', '防御塔焊死'],
    dimensions: { obsession: 88, sanity: 26, ruthlessness: 94, empathy: 24, wit: 64 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'spiky',
      eyeColor: '#475569',
      eyeExpression: 'tired',
      outfitColor: '#27272A',
      accentColor: '#FBBF24',
      accessory: 'coin',
    },
  },
  subaru_sloth: {
    id: 'subaru_sloth',
    sbtiCode: 'SLOT',
    name: '菜月昴（怠惰IF）',
    routeCategory: 'if_route',
    routeTag: '怠惰IF · 卡拉拉基线',
    title: '放弃当英雄的居家宠妻狂魔',
    themeColor: '#0EA5E9',
    oneLiner: '拯救世界关我屁事，老婆孩子热炕头才是人生的终极答案！',
    shortRoast:
      '恭喜你解锁了全书最温馨的《怠惰IF》结局！你彻底想通了：与其在外面死去活来当大冤种英雄，不如带着最在乎的人逃去远方过普通小日子。虽然偶尔还会做噩梦愧疚，但你把眼前的烟火气经营得满分幸福。',
    tags: ['反内卷急先锋', '老婆孩子热炕头', '知足常乐第一名'],
    dimensions: { obsession: 64, sanity: 88, ruthlessness: 20, empathy: 94, wit: 80 },
    visual: {
      hairColor: '#18181B',
      hairStyle: 'ponytail',
      eyeColor: '#27272A',
      eyeExpression: 'gentle',
      outfitColor: '#0284C7',
      accentColor: '#E0F2FE',
    },
  },
  subaru_gluttony: {
    id: 'subaru_gluttony',
    sbtiCode: 'GLUT',
    name: '菜月昴（暴食IF）',
    routeCategory: 'if_route',
    routeTag: '暴食IF · 拼凑者',
    title: '把过去当拼图收集的执念疯子',
    themeColor: '#BE123C',
    oneLiner: '只要把大家脑子里最完美的我拼起来，我就能变回那个英雄了吧？',
    shortRoast:
      '你触发了极具宿命感的《暴食IF》路线！你极度害怕失去曾经拥有的羁绊和美好记忆，一旦觉得自己变差了、配不上大家的期待，就会陷入疯狂的自我怀疑，甚至不惜一切代价想要找回“曾经那个完美的自己”。',
    tags: ['重度怀旧执念狂', '完美人设焦虑症', '温文尔雅疯批'],
    dimensions: { obsession: 96, sanity: 18, ruthlessness: 92, empathy: 40, wit: 78 },
    visual: {
      hairColor: '#F8FAFC',
      hairStyle: 'spiky',
      eyeColor: '#BE123C',
      eyeExpression: 'gentle',
      outfitColor: '#18181B',
      accentColor: '#F43F5E',
      accessory: 'book',
    },
  },
};

export const CHARACTER_LIST: ReZeroCharacter[] = Object.values(CHARACTERS);

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    question: '原定的周末聚会突然取消了，你的第一反应是：',
    choices: [
      {
        index: 0,
        label: '暗自松口气，正好在家躺平独处',
        roastTag: '宅家充电模式',
        dimensionDelta: { obsession: -8, sanity: 6, empathy: -4, wit: 8 },
        characterWeights: { beatrice: 20, puck: 22, ram: 18, aldebaran: 18 },
      },
      {
        index: 1,
        label: '趁机把攒着的正事或杂活清理掉',
        roastTag: '踏实自律派',
        dimensionDelta: { obsession: 8, sanity: 8, empathy: 12 },
        characterWeights: { emilia: 20, reinhard: 20, subaru_envy: 16, wilhelm: 16, crusch: 16 },
      },
      {
        index: 2,
        label: '改约最熟的一两个好友出来小聚',
        roastTag: '重感情行动派',
        dimensionDelta: { obsession: 14, ruthlessness: 6, empathy: 8 },
        characterWeights: { rem: 22, satella: 22, shaula: 24, subaru_sloth: 18 },
      },
      {
        index: 3,
        label: '按原定时间，自己一个人出门逛',
        roastTag: '独立行动派',
        dimensionDelta: { obsession: 10, sanity: -2, ruthlessness: 8 },
        characterWeights: { subaru_greed: 20, otto: 20, anastasia: 18, roswaal: 18, julius: 16 },
      },
    ],
  },
  {
    id: 2,
    question: '买手机、家电这类大件商品时，你通常会：',
    choices: [
      {
        index: 0,
        label: '看重颜值或新功能，喜欢就果断买',
        roastTag: '直觉尝鲜派',
        dimensionDelta: { obsession: 6, empathy: 6, wit: 14 },
        characterWeights: { subaru_envy: 24, garfiel: 20, felt: 18, priscilla: 16 },
      },
      {
        index: 1,
        label: '直接问懂行的朋友，按推荐闭眼入',
        roastTag: '省心抄作业派',
        dimensionDelta: { sanity: 10, ruthlessness: -6, wit: 8 },
        characterWeights: { puck: 20, aldebaran: 22, subaru_sloth: 20, theresia: 18 },
      },
      {
        index: 2,
        label: '全网对比参数测评，选性价比最高',
        roastTag: '硬核做功课派',
        dimensionDelta: { sanity: 8, ruthlessness: 8, empathy: -4, wit: 10 },
        characterWeights: { anastasia: 24, otto: 20, echidna: 20, petra: 18 },
      },
      {
        index: 3,
        label: '优先选自己用惯的熟牌子，懒得换',
        roastTag: '长情认准派',
        dimensionDelta: { obsession: 8, sanity: -10, ruthlessness: 14, empathy: -8 },
        characterWeights: { subaru_wrath: 24, elsa: 20, meili: 20, regulus: 16 },
      },
    ],
  },
  {
    id: 3,
    question: '上手新软件或拼装复杂物品时，你的习惯是：',
    choices: [
      {
        index: 0,
        label: '不看说明，凭直觉直接动手摸索',
        roastTag: '直觉实干派',
        dimensionDelta: { obsession: 8, empathy: 14, wit: 6 },
        characterWeights: { subaru_envy: 24, rem: 18, garfiel: 18, minerva: 18 },
      },
      {
        index: 1,
        label: '先搜高阶攻略，找最省力的捷径',
        roastTag: '效率至上派',
        dimensionDelta: { obsession: 16, sanity: -14, ruthlessness: 18, empathy: -8 },
        characterWeights: { subaru_pride: 26, elsa: 22, subaru_wrath: 18, roswaal: 18 },
      },
      {
        index: 2,
        label: '严格对照说明书，按步骤一步步来',
        roastTag: '严谨细节控',
        dimensionDelta: { obsession: 16, sanity: -12, ruthlessness: 10 },
        characterWeights: { subaru_greed: 26, subaru_gluttony: 24, petelgeuse: 20, julius: 16 },
      },
      {
        index: 3,
        label: '摸清基础功能够用就行，懒得折腾',
        roastTag: '实用极简派',
        dimensionDelta: { obsession: -8, sanity: 10, ruthlessness: -8 },
        characterWeights: { aldebaran: 24, puck: 20, subaru_sloth: 20, meili: 18 },
      },
    ],
  },
  {
    id: 4,
    question: '约好见面的朋友迟到了半小时，你会：',
    choices: [
      {
        index: 0,
        label: '直接发消息催，问清到底几点能到',
        roastTag: '直率急性子',
        dimensionDelta: { obsession: 8, sanity: -8, ruthlessness: 10, wit: 12 },
        characterWeights: { regulus: 26, garfiel: 18, felt: 18, minerva: 18 },
      },
      {
        index: 1,
        label: '见面先开玩笑损两句，翻篇去玩',
        roastTag: '熟人吐槽役',
        dimensionDelta: { sanity: 6, ruthlessness: 10, wit: 16 },
        characterWeights: { ram: 24, ferris: 24, petra: 20, capella: 20 },
      },
      {
        index: 2,
        label: '嘴上不多说，但心里会扣掉印象分',
        roastTag: '表面不动声色',
        dimensionDelta: { obsession: 12, sanity: 6, ruthlessness: 16, wit: 14 },
        characterWeights: { pandora: 28, roswaal: 20, echidna: 18, subaru_wrath: 16 },
      },
      {
        index: 3,
        label: '完全不介意，正好自己刷会儿手机',
        roastTag: '佛系好心态',
        dimensionDelta: { obsession: 4, sanity: 12, ruthlessness: -4, empathy: 8 },
        characterWeights: { crusch: 24, reinhard: 20, wilhelm: 20, julius: 20, frederica: 18 },
      },
    ],
  },
  {
    id: 5,
    question: '如果可以自由选择，你最向往哪种生活：',
    choices: [
      {
        index: 0,
        label: '清闲自在，有大把自由独处的时间',
        roastTag: '向往自由日常',
        dimensionDelta: { obsession: 4, sanity: 12, ruthlessness: -10, empathy: 14 },
        characterWeights: { subaru_sloth: 26, theresia: 24, rem: 22, aldebaran: 16 },
      },
      {
        index: 1,
        label: '四处闯荡，去见识广阔未知的世界',
        roastTag: '热血探索派',
        dimensionDelta: { obsession: 8, empathy: 14, wit: 4 },
        characterWeights: { subaru_envy: 22, emilia: 22, otto: 20, reinhard: 18, frederica: 18 },
      },
      {
        index: 2,
        label: '事业有成，手握足够的财富与地位',
        roastTag: '目标清晰进取',
        dimensionDelta: { obsession: 10, sanity: 6, ruthlessness: 10 },
        characterWeights: { anastasia: 24, subaru_wrath: 20, petra: 18, felt: 16 },
      },
      {
        index: 3,
        label: '和最重要的人相伴，去哪里都行',
        roastTag: '纯粹羁绊派',
        dimensionDelta: { obsession: 18, sanity: -16, ruthlessness: 18 },
        characterWeights: { satella: 28, subaru_pride: 24, shaula: 20, petelgeuse: 18 },
      },
    ],
  },
  {
    id: 6,
    question: '去参加一个大多数人都不熟的聚会，你会：',
    choices: [
      {
        index: 0,
        label: '主动破冰，找顺眼的人搭话聊天',
        roastTag: '热情社牛派',
        dimensionDelta: { obsession: 14, empathy: 12, wit: 10 },
        characterWeights: { shaula: 28, ferris: 20, rem: 18, subaru_envy: 16 },
      },
      {
        index: 1,
        label: '跟着认识的熟人走，在熟人圈里聊',
        roastTag: '认准熟人圈',
        dimensionDelta: { obsession: 6, sanity: 4, wit: 12 },
        characterWeights: { beatrice: 26, meili: 26, ram: 20, garfiel: 18 },
      },
      {
        index: 2,
        label: '安静待在一旁吃东西，有人聊再应',
        roastTag: '温和慢热派',
        dimensionDelta: { sanity: 12, empathy: 8, wit: 4 },
        characterWeights: { julius: 26, emilia: 18, reinhard: 18, crusch: 16 },
      },
      {
        index: 3,
        label: '礼貌露个面打完招呼，找机会早退',
        roastTag: '极简社交派',
        dimensionDelta: { obsession: 14, sanity: -8, ruthlessness: 10 },
        characterWeights: { satella: 22, subaru_wrath: 20, subaru_gluttony: 20, pandora: 18 },
      },
    ],
  },
  {
    id: 7,
    question: '朋友心情不好找你倾诉时，你的本能反应是：',
    choices: [
      {
        index: 0,
        label: '拉TA出门吃顿好的或玩一通散散心',
        roastTag: '行动派治愈',
        dimensionDelta: { obsession: 10, empathy: 16, wit: 8 },
        characterWeights: { minerva: 28, frederica: 22, garfiel: 20, otto: 18 },
      },
      {
        index: 1,
        label: '安静当好听众，顺着TA的情绪安慰',
        roastTag: '温柔倾听者',
        dimensionDelta: { sanity: 12, ruthlessness: -10, empathy: 16 },
        characterWeights: { emilia: 24, theresia: 24, rem: 20, reinhard: 18 },
      },
      {
        index: 2,
        label: '帮TA客观复盘，分析问题出在哪里',
        roastTag: '理性分析派',
        dimensionDelta: { ruthlessness: 12, empathy: -6, wit: 14 },
        characterWeights: { ram: 24, capella: 24, priscilla: 20, echidna: 18 },
      },
      {
        index: 3,
        label: '比TA还生气，无条件站队帮TA骂',
        roastTag: '坚定护短派',
        dimensionDelta: { obsession: 14, ruthlessness: 16, empathy: 6 },
        characterWeights: { puck: 22, subaru_pride: 22, wilhelm: 20, shaula: 18 },
      },
    ],
  },
  {
    id: 8,
    question: '别人找你帮一个有点费事的忙，你通常会：',
    choices: [
      {
        index: 0,
        label: '只要能帮上，再麻烦也会尽力答应',
        roastTag: '热心可靠派',
        dimensionDelta: { obsession: 8, sanity: 8, empathy: 14, wit: -6 },
        characterWeights: { julius: 26, reinhard: 24, emilia: 20, wilhelm: 18 },
      },
      {
        index: 1,
        label: '嘴上嫌麻烦，最后还是出手帮了',
        roastTag: '嘴硬心软派',
        dimensionDelta: { sanity: -6, ruthlessness: 12, wit: 12 },
        characterWeights: { meili: 28, felt: 20, ferris: 18, beatrice: 16 },
      },
      {
        index: 2,
        label: '不想打乱自己节奏，干脆利落拒绝',
        roastTag: '边界感分明',
        dimensionDelta: { obsession: 12, sanity: -14, ruthlessness: 12, wit: 10 },
        characterWeights: { regulus: 28, petelgeuse: 22, subaru_wrath: 18 },
      },
      {
        index: 3,
        label: '先衡量一下交情和利弊再做决定',
        roastTag: '清醒务实派',
        dimensionDelta: { sanity: 6, ruthlessness: 14, empathy: -8, wit: 16 },
        characterWeights: { pandora: 24, petra: 24, roswaal: 22, capella: 20 },
      },
    ],
  },
  {
    id: 9,
    question: '几个人组队出门旅行或做项目，你常扮演：',
    choices: [
      {
        index: 0,
        label: '省心配合大家，不挑剔也不抢主意',
        roastTag: '随和省心派',
        dimensionDelta: { sanity: 10, ruthlessness: -8, empathy: 12 },
        characterWeights: { theresia: 28, puck: 22, reinhard: 20, aldebaran: 18 },
      },
      {
        index: 1,
        label: '操心后勤细节，把攻略账目安排妥',
        roastTag: '细致大管家',
        dimensionDelta: { sanity: 10, empathy: 10, wit: 8 },
        characterWeights: { otto: 28, frederica: 24, anastasia: 18, ram: 16 },
      },
      {
        index: 2,
        label: '提供情绪价值，负责活跃一路气氛',
        roastTag: '快乐气氛组',
        dimensionDelta: { sanity: -8, ruthlessness: 14, empathy: -10, wit: 16 },
        characterWeights: { capella: 26, elsa: 24, felt: 20, priscilla: 20 },
      },
      {
        index: 3,
        label: '拍板拿主意，负责定大方向和决断',
        roastTag: '控场主心骨',
        dimensionDelta: { obsession: 16, sanity: -12, empathy: 8 },
        characterWeights: { subaru_gluttony: 26, subaru_envy: 22, meili: 20, rem: 18 },
      },
    ],
  },
  {
    id: 10,
    question: '用心准备的事没达到预期结果，你会：',
    choices: [
      {
        index: 0,
        label: '不服输，立刻重整旗鼓再来一次',
        roastTag: '死磕不服输',
        dimensionDelta: { obsession: 8, sanity: 8, empathy: 8, wit: 12 },
        characterWeights: { subaru_envy: 22, garfiel: 22, felt: 18, minerva: 16 },
      },
      {
        index: 1,
        label: '找信任的朋友倾诉吐槽，求个安慰',
        roastTag: '熟人治愈系',
        dimensionDelta: { obsession: 8, sanity: 4, empathy: 8 },
        characterWeights: { beatrice: 26, meili: 22, ferris: 18, satella: 16 },
      },
      {
        index: 2,
        label: '独自冷静复盘，把失误原因查清楚',
        roastTag: '认真复盘派',
        dimensionDelta: { obsession: 16, sanity: -12, ruthlessness: 12 },
        characterWeights: { subaru_greed: 26, subaru_gluttony: 24, roswaal: 20 },
      },
      {
        index: 3,
        label: '不想内耗，先睡一觉或换件事做',
        roastTag: '洒脱不内耗',
        dimensionDelta: { sanity: 6, ruthlessness: 14, empathy: -12, wit: 12 },
        characterWeights: { priscilla: 26, regulus: 24, capella: 18 },
      },
    ],
  },
  {
    id: 11,
    question: '当死板的规矩与现实情况冲突时，你会：',
    choices: [
      {
        index: 0,
        label: '讨厌条条框框束缚，直接按自己心意来',
        roastTag: '自在随心派',
        dimensionDelta: { sanity: 8, empathy: 8, wit: 6 },
        characterWeights: { meili: 26, otto: 20, puck: 20, emilia: 16 },
      },
      {
        index: 1,
        label: '人情比死规矩重要，优先护住身边人',
        roastTag: '看重同伴感受',
        dimensionDelta: { obsession: 16, empathy: 12 },
        characterWeights: { shaula: 26, rem: 24, ferris: 22, satella: 20 },
      },
      {
        index: 2,
        label: '规矩就是规矩，按既定标准走最稳妥',
        roastTag: '稳妥守序派',
        dimensionDelta: { obsession: -6, sanity: 14, ruthlessness: -8, empathy: 10 },
        characterWeights: { theresia: 26, subaru_sloth: 22, beatrice: 18, aldebaran: 18 },
      },
      {
        index: 3,
        label: '表面照章办事，私下灵活变通走捷径',
        roastTag: '灵活变通派',
        dimensionDelta: { obsession: 10, sanity: 8, ruthlessness: 8, wit: 14 },
        characterWeights: { echidna: 26, anastasia: 20, roswaal: 18, subaru_greed: 16 },
      },
    ],
  },
  {
    id: 12,
    question: '去一座没去过的城市旅游，你的游玩风格是：',
    choices: [
      {
        index: 0,
        label: '专门探索小众秘境，追求未知惊喜',
        roastTag: '敢闯敢试',
        dimensionDelta: { obsession: 16, sanity: -12, ruthlessness: 12 },
        characterWeights: { subaru_greed: 26, roswaal: 24, subaru_pride: 18, petelgeuse: 18 },
      },
      {
        index: 1,
        label: '提前做足攻略路线，精确掌控行程',
        roastTag: '精明理性派',
        dimensionDelta: { sanity: 8, ruthlessness: 8, empathy: -6, wit: 16 },
        characterWeights: { echidna: 26, anastasia: 22, petra: 20, pandora: 18 },
      },
      {
        index: 2,
        label: '打卡经典必去地标，稳妥绝不踩雷',
        roastTag: '偏爱确定感',
        dimensionDelta: { sanity: 12, ruthlessness: -8, empathy: 10 },
        characterWeights: { wilhelm: 26, crusch: 24, garfiel: 18, subaru_envy: 16 },
      },
      {
        index: 3,
        label: '不做计划不赶景点，全凭心情闲逛',
        roastTag: '直觉本能派',
        dimensionDelta: { sanity: -6, ruthlessness: 14, empathy: -6 },
        characterWeights: { subaru_wrath: 24, elsa: 22, felt: 18, minerva: 16 },
      },
    ],
  },
  {
    id: 13,
    question: '讨论问题时，别人提出了和你完全相反的看法：',
    choices: [
      {
        index: 0,
        label: '直接摆出理由，当面据理力争说服TA',
        roastTag: '态度鲜明',
        dimensionDelta: { ruthlessness: 14, empathy: -10, wit: 16 },
        characterWeights: { capella: 28, ram: 22, priscilla: 20, felt: 18 },
      },
      {
        index: 1,
        label: '表面笑笑不争辩，转头按自己的想法做',
        roastTag: '外圆内方',
        dimensionDelta: { sanity: 10, ruthlessness: 10, wit: 14 },
        characterWeights: { pandora: 26, anastasia: 20, petra: 20, echidna: 18 },
      },
      {
        index: 2,
        label: '不想争执伤和气，温和退一步迁就',
        roastTag: '温和重感情',
        dimensionDelta: { empathy: 16, ruthlessness: -8 },
        characterWeights: { minerva: 26, theresia: 22, subaru_envy: 20, beatrice: 18 },
      },
      {
        index: 3,
        label: '认真对比双方逻辑，谁有道理就听谁的',
        roastTag: '认理不认人',
        dimensionDelta: { obsession: 16, ruthlessness: 12, empathy: -4 },
        characterWeights: { shaula: 26, satella: 24, rem: 20, subaru_pride: 20 },
      },
    ],
  },
  {
    id: 14,
    question: '在人际交往中，你的熟络速度与边界感通常是：',
    choices: [
      {
        index: 0,
        label: '温和有礼，对谁都周到但保持分寸',
        roastTag: '温和有分寸',
        dimensionDelta: { sanity: 10, empathy: 14 },
        characterWeights: { frederica: 26, julius: 22, crusch: 20, otto: 18 },
      },
      {
        index: 1,
        label: '慢热内敛，只对认准的熟人敞开心扉',
        roastTag: '慢热重内圈',
        dimensionDelta: { ruthlessness: 12, wit: 16 },
        characterWeights: { petra: 26, ferris: 24, puck: 20, meili: 18 },
      },
      {
        index: 2,
        label: '独来独往，不喜欢凑热闹和无效社交',
        roastTag: '高冷独行派',
        dimensionDelta: { obsession: 12, sanity: -12, ruthlessness: 18 },
        characterWeights: { elsa: 28, roswaal: 22, pandora: 20, subaru_gluttony: 18 },
      },
      {
        index: 3,
        label: '自来熟体质，很快能跟大家打成一片',
        roastTag: '自来熟气氛组',
        dimensionDelta: { empathy: 10, wit: 10 },
        characterWeights: { garfiel: 26, felt: 22, meili: 20, minerva: 18 },
      },
    ],
  },
  {
    id: 15,
    question: '对真正在乎的人好，你最习惯的表达方式是：',
    choices: [
      {
        index: 0,
        label: '少说多做，直接帮TA把实际难题摆平',
        roastTag: '务实行动派',
        dimensionDelta: { obsession: 14, sanity: 8, empathy: 10, wit: -8 },
        characterWeights: { wilhelm: 28, rem: 22, reinhard: 18, crusch: 16 },
      },
      {
        index: 1,
        label: '直球表达，常把夸奖和关心挂在嘴边',
        roastTag: '真诚直球派',
        dimensionDelta: { obsession: 16, empathy: 10, wit: 12 },
        characterWeights: { shaula: 26, petelgeuse: 24, subaru_envy: 18, ferris: 18 },
      },
      {
        index: 2,
        label: '嘴上爱损两句，私下把好东西留给TA',
        roastTag: '口嫌体正直',
        dimensionDelta: { obsession: 8, wit: 12 },
        characterWeights: { beatrice: 24, ram: 22, priscilla: 20, julius: 18 },
      },
      {
        index: 3,
        label: '默默记下TA的喜好，在细节里照顾',
        roastTag: '心思细腻派',
        dimensionDelta: { obsession: 16, sanity: -10, ruthlessness: 14, wit: 12 },
        characterWeights: { roswaal: 28, echidna: 22, pandora: 20, subaru_greed: 18 },
      },
    ],
  },
  {
    id: 16,
    question: '团队遇到危机或卡壳时，你最擅长的位置是：',
    choices: [
      {
        index: 0,
        label: '协调各方资源，串联大家默契配合',
        roastTag: '懂得借力合作',
        dimensionDelta: { ruthlessness: 8, wit: 12 },
        characterWeights: { meili: 26, otto: 22, puck: 18, beatrice: 16 },
      },
      {
        index: 1,
        label: '守好后方底线，帮团队做好兜底补漏',
        roastTag: '满级安全感后盾',
        dimensionDelta: { empathy: 16, ruthlessness: -6 },
        characterWeights: { minerva: 28, ferris: 22, emilia: 18, frederica: 18 },
      },
      {
        index: 2,
        label: '坐镇指挥战术，冷静分析局势翻盘',
        roastTag: '全局指挥官',
        dimensionDelta: { sanity: -10, ruthlessness: 14, wit: 16 },
        characterWeights: { capella: 28, pandora: 22, elsa: 18, subaru_gluttony: 18 },
      },
      {
        index: 3,
        label: '自己冲在最前面，硬扛压力正面破局',
        roastTag: '正面破局先锋',
        dimensionDelta: { obsession: 10, sanity: 10, ruthlessness: 8 },
        characterWeights: { reinhard: 24, wilhelm: 24, theresia: 24, crusch: 22 },
      },
    ],
  },
  {
    id: 17,
    question: '取得好成绩被大家当众表扬时，你的真实反应是：',
    choices: [
      {
        index: 0,
        label: '有些不好意思，赶紧谦虚说是运气好',
        roastTag: '谦逊低调派',
        dimensionDelta: { sanity: 8, empathy: 14, wit: -4 },
        characterWeights: { emilia: 26, reinhard: 22, subaru_envy: 18, theresia: 18 },
      },
      {
        index: 1,
        label: '对夸奖无感，只想赶紧结束客套话',
        roastTag: '务实不吃画饼',
        dimensionDelta: { sanity: 8, ruthlessness: 6, wit: 14 },
        characterWeights: { anastasia: 26, felt: 24, otto: 20, aldebaran: 18 },
      },
      {
        index: 2,
        label: '表面淡定致谢，心里其实很有成就感',
        roastTag: '内敛暗爽派',
        dimensionDelta: { obsession: 12, sanity: -8, ruthlessness: 14 },
        characterWeights: { petra: 26, subaru_wrath: 22, subaru_pride: 20, meili: 18 },
      },
      {
        index: 3,
        label: '坦然大方收下，觉得这本就是实力所得',
        roastTag: '自信坦荡派',
        dimensionDelta: { obsession: 8, ruthlessness: 10, empathy: -8, wit: 12 },
        characterWeights: { priscilla: 26, ram: 22, regulus: 22, beatrice: 18 },
      },
    ],
  },
  {
    id: 18,
    question: '晚上躺下准备入睡前的半小时，你通常：',
    choices: [
      {
        index: 0,
        label: '脑子停不下来，复盘今天或规划明天',
        roastTag: '睡前规划派',
        dimensionDelta: { obsession: 14, sanity: -10 },
        characterWeights: { subaru_gluttony: 26, subaru_greed: 24, julius: 18, otto: 16 },
      },
      {
        index: 1,
        label: '刷会儿喜欢的视频或小说，放松解压',
        roastTag: '睡前惬意时光',
        dimensionDelta: { obsession: 14, empathy: 12 },
        characterWeights: { rem: 24, subaru_sloth: 24, shaula: 22, satella: 22 },
      },
      {
        index: 2,
        label: '思绪天马行空，脑补各种奇妙剧情',
        roastTag: '灵感夜猫子',
        dimensionDelta: { sanity: 6, wit: 14 },
        characterWeights: { echidna: 26, roswaal: 20, pandora: 18, capella: 16 },
      },
      {
        index: 3,
        label: '沾枕头就困，放下手机很快睡着',
        roastTag: '秒睡好睡眠',
        dimensionDelta: { obsession: -8, sanity: 14 },
        characterWeights: { puck: 24, priscilla: 20, garfiel: 18, aldebaran: 18 },
      },
    ],
  },
  {
    id: 19,
    question: '如果穿进异世界，你最想拥有哪种核心能力：',
    choices: [
      {
        index: 0,
        label: '治愈与结界，护住身边人平安无虞',
        roastTag: '温柔守护者',
        dimensionDelta: { obsession: -4, sanity: 14, ruthlessness: -10, empathy: 14 },
        characterWeights: { subaru_sloth: 26, theresia: 24, frederica: 20, rem: 18 },
      },
      {
        index: 1,
        label: '一力降十会，正面无敌的绝对武力',
        roastTag: '正面破局派',
        dimensionDelta: { obsession: 12, empathy: 10, wit: 10 },
        characterWeights: { subaru_envy: 24, crusch: 22, garfiel: 22, wilhelm: 20 },
      },
      {
        index: 2,
        label: '无视常理，随心改写规则的绝对自由',
        roastTag: '打破规则派',
        dimensionDelta: { obsession: 16, sanity: -10, ruthlessness: 18, wit: 14 },
        characterWeights: { pandora: 24, roswaal: 22, subaru_pride: 22, capella: 20, elsa: 20 },
      },
      {
        index: 3,
        label: '洞察先机，掌握全局情报与未知知识',
        roastTag: '全知谋略派',
        dimensionDelta: { sanity: 10, ruthlessness: 8, wit: 14 },
        characterWeights: { anastasia: 24, echidna: 22, felt: 18, petra: 18 },
      },
    ],
  },
  {
    id: 20,
    question: '熟人最常用来形容你的性格特点是：',
    choices: [
      {
        index: 0,
        label: '嘴硬心软，熟了才知道有多护短',
        roastTag: '刀子嘴豆腐心',
        dimensionDelta: { obsession: 6, empathy: 12, wit: 12 },
        characterWeights: {
          meili: 22,
          beatrice: 22,
          ram: 20,
          minerva: 22,
          ferris: 20,
          otto: 18,
          julius: 18,
        },
      },
      {
        index: 1,
        label: '温和靠谱，有你在身边就很安心',
        roastTag: '可靠定海神针',
        dimensionDelta: { obsession: 18, empathy: 12 },
        characterWeights: {
          shaula: 24,
          wilhelm: 22,
          rem: 20,
          satella: 22,
          theresia: 20,
          emilia: 18,
          reinhard: 18,
        },
      },
      {
        index: 2,
        label: '思维跳脱，做事从不按常理出牌',
        roastTag: '洒脱真性情',
        dimensionDelta: { obsession: 12, sanity: -12, ruthlessness: 16, wit: 12 },
        characterWeights: {
          capella: 22,
          regulus: 22,
          petelgeuse: 24,
          priscilla: 20,
          elsa: 20,
          pandora: 20,
        },
      },
      {
        index: 3,
        label: '执念极深，认准的事一定会死磕到底',
        roastTag: '极致死磕派',
        dimensionDelta: { obsession: 18, sanity: -10, ruthlessness: 14 },
        characterWeights: {
          subaru_envy: 20,
          subaru_pride: 22,
          subaru_greed: 22,
          subaru_wrath: 22,
          subaru_gluttony: 22,
          roswaal: 18,
          crusch: 18,
        },
      },
    ],
  },
];

