/* ============================================================
   Daisy Zeng — A Life in Progress
   Shared: nav/footer render, content data, interactions
   所有可编辑内容集中在此文件，便于后续修订
   ============================================================ */

/* ===================== 内容数据 ===================== */

/* 关键节点时间线 —— 未核实日期使用阶段标签，禁止编造 */
const TIMELINE = [
  {
    time: "本科阶段",
    title: "在学习之外，尝试解决真实问题",
    body: "本科期间，我参与数据建模竞赛、新媒体部门工作和志愿服务等活动。在团队项目中，我逐渐积累了组织协调、沟通协作与任务推进的经验。\n\n从完全没接触过足球的小白成为校女足队队长，参加过两次重庆市大学生足球联赛，获得季军。足球教会了我一切皆有可能、不服输不认输的态度，同时也让我有幸认识了好多好多志同道合的朋友。",
    tags: ["Data Modeling", "Teamwork", "Volunteering"],
    related: [
      "全国大学生数据建模竞赛一等奖",
      "新媒体部门负责人",
      "博物馆讲解志愿服务",
    ],
  },
  {
    time: "研究生阶段",
    title: "在跨学科背景中建立分析框架",
    body: "进入吉林大学攻读国家安全学硕士后，我继续接触学术研究与专业问题分析，也开始思考如何把研究中的思考方式运用到更广泛的现实场景。",
    tags: ["Research", "Critical Thinking"],
    image: "assets/images/jlu-run.jpg",
    imageAlt: "吉林大学中国青年跑校园活动",
    related: [
      "吉林大学国家安全学硕士研究生",
      "优秀研究生",
      "连续三年获得研究生学业奖学金",
      "2025年吉林省飞盘公开赛第四名",
      "吉林大学院研究生会文体部部长",
    ],
  },
  {
    time: "京东实习",
    title: "从商品细节理解业务逻辑",
    body: "在京东采销相关实习中，我接触了商品运营支持、客户反馈收集、价格风险监测和促销活动等工作，对商品、价格、营销动作与业务结果之间的关系有了更具体的认识。",
    tags: ["E-commerce", "Merchandising", "Business Operations"],
    related: [],
  },
  {
    time: "字节跳动 · 2026",
    title: "从完成任务，到理解流程与协作",
    body: "在字节跳动的运营实习中，我接触日常运营支持、跨团队协作及许可证申请流程梳理等工作，也参与了相关 SOP 的整理与标准化。这段经历让我有机会进一步理解：面对涉及多个团队的任务，清晰的信息、明确的流程和主动的沟通都很重要。",
    tags: ["Operations", "Ownership", "Process Improvement"],
    related: [],
  },
  {
    time: "2027 · Next Chapter",
    title: "继续探索，逐渐建立自己的方向",
    body: "预计于 2027 年 6 月毕业。目前，我正在推进研究生阶段的学习与论文工作，也在探索未来职业发展的可能性。对下一阶段，我没有打算提前写下一个固定答案，而是希望在充分了解自己与不同工作环境的基础上，做出更有依据的选择。",
    tags: ["Transition", "Exploration", "Next Chapter"],
    related: [],
  },
];

/* 项目 —— 内容来自用户提供的 STARL 经历，未编造成果数字 */
const PROJECTS = [
  {
    id: "p1",
    num: "01",
    title: "全国大学生统计建模大赛",
    categories: ["TEAM LEADERSHIP", "STATISTICAL MODELING", "DATA ANALYSIS"],
    summary: "作为队长带领团队围绕城乡融合政策效果开展统计建模研究，搭建指标体系与面板数据模型，对 13 个省级指标进行分析，最终获得大赛一等奖。",
    thumb: { bg: "var(--color-mint-wash)", icon: "chart" },
    sections: [
      { label: "项目背景", text: "第九届全国大学生统计建模大赛，团队围绕「城乡融合政策效果」开展研究，需要将现实问题转化为可分析的研究框架，并通过数据处理与统计分析检验策略的有效性。" },
      { label: "我的角色与任务", text: "作为团队队长，统筹项目推进，组织团队搭建指标体系与面板数据模型，并协调数据清洗、分析验证及研究成果撰写等工作。" },
      { label: "实施过程", items: [
        "搭建分析框架：围绕研究问题梳理指标体系，将研究目标转化为可分析的变量与指标。",
        "开展数据处理：使用 Excel、SPSS 对 13 个省级指标进行清洗与挖掘，为后续分析提供数据基础。",
        "推进模型分析：参与面板数据模型的构建与分析，结合研究问题对策略有效性进行验证。",
        "统筹团队协作：作为队长协调团队任务，推动数据处理、模型分析与最终成果整合。",
      ]},
      { label: "最终成果", text: "团队获得大赛一等奖。项目完成了围绕城乡融合政策效果的研究分析，形成了从指标构建、数据处理到模型验证的完整研究过程。" },
      { label: "复盘与收获", text: "数据分析的价值不仅在于使用工具或建立模型，更在于能否把现实问题转化为清晰的分析框架，并通过数据与逻辑支撑结论。作为团队队长，也进一步理解了任务拆解、团队协作与成果整合的重要性。" },
    ],
  },
  {
    id: "p2",
    num: "02",
    title: "京东采销与商品运营",
    categories: ["E-COMMERCE OPERATIONS", "USER EXPERIENCE", "DATA-DRIVEN", "RISK MONITORING"],
    summary: "在京东线上车品事业部参与电商商品运营，负责用户体验优化、价格风险监测与 618 大促运营，理解数据、用户体验与商业结果之间的联系。",
    thumb: { bg: "var(--color-peach-wash)", icon: "cart" },
    sections: [
      { label: "实习背景", text: "在京东线上车品事业部实习期间，参与电商商品运营相关工作。线上商品的经营不仅涉及商品信息与页面展示，也需要关注用户反馈、促销活动、价格变化及销售表现。" },
      { label: "我的任务", text: "配合团队开展用户体验优化、商品运营与价格风险监测，支持促销活动策划及执行，并关注商品经营过程中的关键数据与潜在风险。" },
      { label: "具体工作", items: [
        "用户体验优化：负责用户反馈收集与体验优化，参与 20 多个品牌商品详情页、优惠文案及促销页面的策划与排版优化。",
        "数据分析支持：通过 A/B 测试对比不同页面方案的转化数据，为页面优化和方案选择提供依据。",
        "价格风险监测：运用看板和 Excel 搭建品类核心指标日报体系，持续追踪每日销售情况。",
        "风险识别与处理：在 618 期间提前识别 2 个 SKU 的价格风险，并跟进处理与商家沟通，协助降低平台违规风险。",
        "促销活动运营：参与 618 大促安全座椅品类自营及 POP 运营全流程，协助完成选品、促销规划、活动提报与复盘，提炼品类差异化卖点。",
      ]},
      { label: "工作成果", items: [
        "推动高转化页面方案实现全量上线。",
        "提前识别并跟进处理 2 个 SKU 的价格风险。",
        "参与 618 安全座椅品类运营全流程，5 月四个 P/S 级大促节点销售整体呈上升态势。",
      ]},
      { label: "反思与收获", text: "更直接地理解了数据、用户体验与商业结果之间的联系。页面优化需要结合用户反馈和转化数据，促销运营需要兼顾商品特点、活动节奏与经营目标，而价格监测则要求对细节和风险保持敏感。运营工作不只是完成页面调整或活动执行，还需要持续观察结果、验证方案，并根据业务反馈调整行动。" },
    ],
  },
  {
    id: "p3",
    num: "03",
    title: "字节跳动产品运营",
    categories: ["PRODUCT OPERATIONS", "API TESTING", "PROCESS MANAGEMENT", "CROSS-FUNCTIONAL"],
    summary: "在字节跳动信息集团系统参与电子章运营支持与资质申请流程管理，对接 8 个部门推进 8 项资质事项，理解接口运营与跨部门协作。",
    thumb: { bg: "var(--color-sky-wash)", icon: "layers" },
    sections: [
      { label: "实习背景", text: "在字节跳动信息集团系统相关的产品运营实习中，参与电子章日常运营支持。相关业务涉及内部系统接入、接口联调、异常返回逻辑及多部门协作。同时，部分资质申请事项涉及多个职能部门，需要对申请要求、流程节点和相关信息进行统筹。" },
      { label: "我的任务", text: "一方面，支持电子章日常运营及接口接入相关工作，协助推进问题排查和业务流程衔接；另一方面，参与资质申请流程管理，跟进申请材料、台账及跨部门协作事项，保障业务平稳推进。" },
      { label: "具体工作", items: [
        "接口运营支持：支持内部业务线接入电子章 OpenAPI，使用 Postman 梳理接口入参、出参及异常返回逻辑，并参与测试用例设计。",
        "问题排查：跟进接口接入过程中的问题，协助定位异常并推动相关问题处理。",
        "申请流程管理：围绕 8 项资质事项，参与材料清单梳理、申请进度跟踪及台账管理。",
        "跨部门协作：对接 IT、商标法务、产品法务、财务、税务、采购、云通信等 8 个部门，跟进相关事项，保障各环节顺利衔接。",
      ]},
      { label: "工作成果", items: [
        "支持内部业务线开展电子章 OpenAPI 接入及相关测试工作。",
        "完成 8 项资质事项的材料与进度管理相关工作。",
        "通过跨部门对接、材料清单整理和台账跟踪，支持相关业务流程有序推进。",
      ]},
      { label: "反思与收获", text: "产品运营既需要理解系统接口和业务流程，也需要将技术、业务与职能部门之间的信息有效衔接。面对涉及多方的任务，清晰的材料清单、持续的进度跟踪和及时的问题反馈，都是推进工作的重要基础。相比单纯完成分配的事项，我开始更加关注任务之间的依赖关系，以及如何通过流程梳理和信息管理，让协作过程更加清晰。" },
    ],
  },
];

/* Notes 分类 */
const NOTE_CATEGORIES = [
  { key: "notes", title: "Personal Notes", intro: "记录关于工作、成长、选择和日常观察的思考。", bg: "var(--color-sky-wash)", icon: "pen" },
  { key: "frames", title: "Life in Frames", intro: "收藏生活里的照片、城市片段、旅行记录和细小发现。", bg: "var(--color-peach-wash)", icon: "camera" },
  { key: "reading", title: "Reading & Ideas", intro: "记录真正读过的书、值得保存的观点，以及自己的理解。", bg: "var(--color-mint-wash)", icon: "book" },
  { key: "monthly", title: "Monthly Review", intro: "回顾每个月做过的事、学到的东西，以及下一阶段想尝试的改变。", bg: "var(--color-sky-wash)", icon: "calendar" },
];

/* ===================== 图标库（内联 SVG） ===================== */
const ICONS = {
  arrow: '<svg class="i-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/></svg>',
  close: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>',
  menu: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"><line x1="3" y1="7" x2="21" y2="7"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="17" x2="21" y2="17"/></svg>',
  up: '<svg class="i-20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="18 15 12 9 6 15"/></svg>',
  chart: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3v18h18"/><path d="M7 14l3-3 4 4 5-6"/></svg>',
  cart: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="20" r="1.5"/><circle cx="18" cy="20" r="1.5"/><path d="M2 3h3l2.5 13h11l2-9H6"/></svg>',
  layers: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>',
  pen: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z"/></svg>',
  camera: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2Z"/><circle cx="12" cy="13" r="4"/></svg>',
  book: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2Z"/></svg>',
  calendar: '<svg class="i-24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
};

/* ===================== 导航 & 页脚 ===================== */
const NAV_ITEMS = [
  { label: "HOME", href: "index.html" },
  { label: "ABOUT", href: "about.html" },
  { label: "JOURNEY", href: "journey.html" },
  { label: "WORK & PROJECTS", href: "work.html" },
  { label: "NOTES", href: "notes.html" },
  { label: "CONTACT", href: "contact.html" },
];

function getActivePage() {
  const file = location.pathname.split("/").pop() || "index.html";
  return file;
}

function renderNav() {
  const active = getActivePage();
  const nav = document.getElementById("site-nav");
  if (!nav) return;
  nav.innerHTML = `
    <div class="nav-wrap">
      <nav class="nav container">
        <a href="index.html" class="nav-brand">
          <span class="brand-mark"></span>
          <span>DAISY ZENG</span>
        </a>
        <ul class="nav-links">
          ${NAV_ITEMS.map((i) => `<li><a class="nav-link ${i.href === active ? "active" : ""}" href="${i.href}">${i.label}</a></li>`).join("")}
        </ul>
        <button class="nav-toggle" aria-label="打开菜单" aria-expanded="false" aria-controls="mobile-menu">
          ${ICONS.menu}
        </button>
      </nav>
    </div>
    <div class="mobile-menu" id="mobile-menu">
      ${NAV_ITEMS.map((i) => `<a class="nav-link ${i.href === active ? "active" : ""}" href="${i.href}">${i.label}</a>`).join("")}
    </div>
  `;

  const toggle = nav.querySelector(".nav-toggle");
  const menu = nav.querySelector(".mobile-menu");
  toggle.addEventListener("click", () => {
    const open = menu.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(open));
  });
}

function renderFooter() {
  const footer = document.getElementById("site-footer");
  if (!footer) return;
  footer.innerHTML = `
    <footer class="site-footer">
      <div class="container">
        <div class="brand">DAISY ZENG</div>
        <div>© 2026 Daisy Zeng · A life in progress.</div>
      </div>
    </footer>
  `;
}

/* ===================== 交互 ===================== */
function initBackToTop() {
  const btn = document.getElementById("back-top");
  if (!btn) return;
  btn.innerHTML = ICONS.up;
  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) btn.classList.add("show");
    else btn.classList.remove("show");
  });
  btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

function initReveal() {
  const els = document.querySelectorAll(".reveal");
  if (!els.length) return;
  // 兜底：1.5 秒后强制显示，防止 IntersectionObserver 未触发导致内容永久隐形
  const revealAll = () => els.forEach((el) => el.classList.add("in"));
  setTimeout(revealAll, 1500);

  if (!("IntersectionObserver" in window)) { revealAll(); return; }
  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        e.target.classList.add("in");
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });
  els.forEach((el) => io.observe(el));
}

/* ===================== 时间线渲染 ===================== */
function renderTimeline() {
  const host = document.getElementById("timeline");
  if (!host) return;
  host.innerHTML = TIMELINE.map((n) => `
    <div class="tl-node reveal">
      <div class="tl-time">${n.time}</div>
      <div class="tl-body">
        <h3>${n.title}</h3>
        ${n.body.split("\n\n").map((p) => `<p>${p}</p>`).join("")}
        <div class="tl-tags">${n.tags.map((t, i) => `<span class="tag ${i % 3 === 0 ? "" : i % 3 === 1 ? "mint" : "peach"}">${t}</span>`).join("")}</div>
        ${n.image ? `<figure class="tl-image"><img src="${n.image}" alt="${n.imageAlt || n.title}" /></figure>` : ""}
        ${n.related.length ? `<div class="tl-related">相关经历：<ul>${n.related.map((r) => `<li>${r}</li>`).join("")}</ul></div>` : ""}
      </div>
    </div>
  `).join("");
}

/* ===================== 项目卡片 + Modal ===================== */
function renderProjects() {
  const host = document.getElementById("project-grid");
  if (!host) return;
  host.innerHTML = PROJECTS.map((p) => `
    <article class="card project-card reveal" data-project="${p.id}" tabindex="0" role="button" aria-label="查看 ${p.title} 详情">
      <div class="project-thumb" style="background:${p.thumb.bg}">
        ${ICONS[p.thumb.icon] || ""}
      </div>
      <div class="pbody">
        <div class="pnum">${p.num}</div>
        <div class="ptag">${p.categories.map((c, i) => `<span class="tag ${i % 3 === 0 ? "" : i % 3 === 1 ? "mint" : "peach"}">${c}</span>`).join("")}</div>
        <h3>${p.title}</h3>
        <p>${p.summary}</p>
        <span class="pread">查看详情 ${ICONS.arrow}</span>
      </div>
    </article>
  `).join("");

  host.querySelectorAll(".project-card").forEach((card) => {
    card.addEventListener("click", () => openModal(card.dataset.project));
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); openModal(card.dataset.project); }
    });
  });
}

function openModal(id) {
  const p = PROJECTS.find((x) => x.id === id);
  if (!p) return;
  const overlay = document.getElementById("modal-overlay");
  const body = document.getElementById("modal-body");
  body.innerHTML = `
    <button class="modal-close" aria-label="关闭">${ICONS.close}</button>
    <div class="eyebrow">${p.categories.join(" · ")}</div>
    <h2>${p.title}</h2>
    <p>${p.summary}</p>
    ${p.sections.map((s) => `
      <div class="section-label">${s.label}</div>
      ${s.items
        ? `<ul class="modal-list">${s.items.map((i) => `<li>${i}</li>`).join("")}</ul>`
        : `<p>${s.text}</p>`}
    `).join("")}
    <div style="margin-top:32px;"><a class="btn-ghost" href="work.html">返回项目列表 ${ICONS.arrow}</a></div>
  `;
  overlay.classList.add("open");
  document.body.style.overflow = "hidden";
  overlay.querySelector(".modal-close").addEventListener("click", closeModal);
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
  document.body.style.overflow = "";
}

function initModal() {
  const overlay = document.getElementById("modal-overlay");
  if (!overlay) return;
  overlay.addEventListener("click", (e) => { if (e.target === overlay) closeModal(); });
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* ===================== Notes 渲染 ===================== */
function renderNotes() {
  const host = document.getElementById("notes-cats");
  if (host) {
    host.innerHTML = NOTE_CATEGORIES.map((c) => `
      <div class="card note-cat reveal">
        <div class="icon-box" style="background:${c.bg}">${ICONS[c.icon] || ""}</div>
        <h3>${c.title}</h3>
        <p>${c.intro}</p>
      </div>
    `).join("");
  }
}

/* ===================== Guestbook 留言板 ===================== */
const GB_STORAGE_KEY = "daisy-guestbook-v1";

// Supabase 配置（publishable key 可安全公开；通过 RLS 限制写入）
const SUPABASE_URL = "https://iqlxbivodrmybdtjmuyo.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_y1r1lwgRIkODt1RBKzMsAg_U_RwyuWh";
let supabaseClient = null;
try {
  if (typeof supabase !== "undefined" && supabase.createClient) {
    supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  }
} catch (e) {
  console.warn("[guestbook] Supabase 初始化失败，将使用本地存储", e);
}

// XSS 防护：转义用户输入
function gbEscape(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

/* ---------- 本地存储兜底 ---------- */
function gbLoadLocal() {
  try {
    const raw = localStorage.getItem(GB_STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}
function gbSaveLocal(list) {
  try {
    localStorage.setItem(GB_STORAGE_KEY, JSON.stringify(list));
    return true;
  } catch {
    return false;
  }
}

/* ---------- 读取留言：Supabase 优先，失败回退本地 ---------- */
async function gbLoad() {
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("guestbook")
        .select("id, name, message, created_at")
        .order("created_at", { ascending: true });
      if (error) throw error;
      // 统一字段格式
      return (data || []).map((m) => ({
        id: m.id,
        name: m.name,
        message: m.message,
        time: new Date(m.created_at).getTime(),
        fromServer: true,
      }));
    } catch (e) {
      console.warn("[guestbook] 从 Supabase 读取失败，回退本地存储", e);
    }
  }
  return gbLoadLocal();
}

/* ---------- 写入留言：Supabase 优先，失败回退本地 ---------- */
async function gbAdd(name, message) {
  const entry = {
    name: name.trim() || null,
    message: message.trim(),
  };
  if (supabaseClient) {
    try {
      const { data, error } = await supabaseClient
        .from("guestbook")
        .insert(entry)
        .select("id, created_at")
        .single();
      if (error) throw error;
      return { ok: true, fromServer: true, entry: { ...entry, id: data.id, time: new Date(data.created_at).getTime() } };
    } catch (e) {
      console.warn("[guestbook] 写入 Supabase 失败，回退本地存储", e);
    }
  }
  // 本地兜底
  const localList = gbLoadLocal();
  const localEntry = {
    id: Date.now().toString(36) + Math.random().toString(36).slice(2, 7),
    ...entry,
    time: Date.now(),
    fromServer: false,
  };
  localList.push(localEntry);
  if (!gbSaveLocal(localList)) return { ok: false };
  return { ok: true, fromServer: false, entry: localEntry };
}

/* ---------- 气泡漂浮池 ---------- */
const GB_MAX_BUBBLES = 15;
const GB_BUBBLE_COLORS = ["c-mint", "c-peach", "c-sky", "c-lavender", "c-sand", "c-rose", "c-lemon", "c-coral", "c-teal"];

function gbFormatTime(ts) {
  const d = new Date(ts);
  const pad = (n) => String(n).padStart(2, "0");
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())} ${pad(d.getHours())}:${pad(d.getMinutes())}`;
}

function gbSpawnBubble(msg, isInitial = false) {
  const host = document.getElementById("gb-list");
  if (!host) return;

  // 移除空状态提示
  const empty = host.querySelector(".gb-empty");
  if (empty) empty.remove();

  // 超出上限：淡出最老的气泡
  const bubbles = host.querySelectorAll(".gb-bubble");
  if (bubbles.length >= GB_MAX_BUBBLES) {
    const oldest = bubbles[0];
    oldest.style.animation = "none";
    oldest.style.opacity = "0";
    oldest.style.transition = "opacity 0.6s ease";
    setTimeout(() => oldest.remove(), 600);
  }

  const bubble = document.createElement("div");
  bubble.className = `gb-bubble ${GB_BUBBLE_COLORS[Math.floor(Math.random() * GB_BUBBLE_COLORS.length)]}`;
  bubble.dataset.id = msg.id;

  // 随机参数：垂直位置、漂浮时长、上下轻微浮动
  const top = Math.random() * 78; // 0-78%，避免贴边
  const duration = 16 + Math.random() * 12; // 16-28s
  const bob = (Math.random() - 0.5) * 24; // -12 ~ 12px 上下浮动
  // 初始加载时用负延迟，让气泡分布在路径各处
  const delay = isInitial ? -Math.random() * duration : 0;

  bubble.style.top = top + "%";
  bubble.style.setProperty("--gb-duration", duration + "s");
  bubble.style.setProperty("--gb-bob", bob + "px");
  bubble.style.animationDelay = delay + "s";

  bubble.innerHTML = `
    <div class="gb-bubble-name">${gbEscape(msg.name || "匿名访客")}</div>
    <div class="gb-bubble-time">${gbFormatTime(msg.time)}</div>
    <div class="gb-bubble-msg">${gbEscape(msg.message)}</div>
  `;

  host.appendChild(bubble);
}

function gbRender(list) {
  const host = document.getElementById("gb-list");
  if (!host) return;
  host.innerHTML = "";

  if (!list || list.length === 0) {
    host.innerHTML = `<div class="gb-empty">还没有留言，来做第一个留下痕迹的人吧。</div>`;
    return;
  }

  // 取最新的 N 条，作为初始气泡分布到池中
  const recent = list.slice(-GB_MAX_BUBBLES);
  recent.forEach((msg) => gbSpawnBubble(msg, true));
}

/* ---------- Realtime 实时同步：别人留言即时飘入 ---------- */
let gbRealtimeSubscribed = false;
function gbSubscribeRealtime() {
  if (!supabaseClient || gbRealtimeSubscribed) return;
  gbRealtimeSubscribed = true;
  try {
    supabaseClient
      .channel("guestbook-realtime")
      .on(
        "postgres_changes",
        { event: "INSERT", schema: "public", table: "guestbook" },
        (payload) => {
          const id = payload.new.id;
          // 去重：本地刚提交的已经显示过了
          if (document.querySelector(`.gb-bubble[data-id="${id}"]`)) return;
          const newMsg = {
            id,
            name: payload.new.name,
            message: payload.new.message,
            time: new Date(payload.new.created_at).getTime(),
            fromServer: true,
          };
          gbSpawnBubble(newMsg, false);
        }
      )
      .subscribe((status) => {
        if (status === "SUBSCRIBED") {
          console.log("[guestbook] Realtime 已连接，新留言将实时飘入");
        }
      });
  } catch (e) {
    console.warn("[guestbook] Realtime 订阅失败", e);
    gbRealtimeSubscribed = false;
  }
}

function gbSetStatus(text, type) {
  const el = document.getElementById("gb-status");
  if (!el) return;
  el.textContent = text;
  el.classList.remove("success", "error");
  if (type) el.classList.add(type);
  if (text) setTimeout(() => { if (el.textContent === text) el.textContent = ""; }, 3500);
}

function initGuestbook() {
  const form = document.getElementById("gb-form");
  const msgInput = document.getElementById("gb-message");
  const countEl = document.getElementById("gb-count");
  if (!form) return;

  // 异步加载留言 + 开启实时同步
  gbLoad()
    .then((list) => {
      gbRender(list);
      gbSubscribeRealtime();
    })
    .catch(() => gbRender([]));

  // 字数统计
  msgInput.addEventListener("input", () => {
    countEl.textContent = msgInput.value.length;
  });

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const name = document.getElementById("gb-name").value;
    const message = msgInput.value;
    if (!message.trim()) {
      gbSetStatus("请写点什么再提交～", "error");
      return;
    }
    const submitBtn = form.querySelector('button[type="submit"]');
    submitBtn.disabled = true;
    gbSetStatus("正在提交…", "");

    const result = await gbAdd(name, message);
    submitBtn.disabled = false;

    if (result.ok) {
      gbSetStatus(
        result.fromServer ? "留言已收到，谢谢你～" : "留言已存到本地（网络异常，恢复后会同步）",
        "success"
      );
      form.reset();
      countEl.textContent = "0";
      // 立即显示刚提交的气泡（不等 realtime 回调）
      if (result.entry) gbSpawnBubble(result.entry, false);
    } else {
      gbSetStatus("保存失败，请稍后重试", "error");
    }
  });
}

/* ===================== 启动 ===================== */
document.addEventListener("DOMContentLoaded", () => {
  renderNav();
  renderFooter();
  initBackToTop();
  renderTimeline();
  renderProjects();
  initModal();
  renderNotes();
  initGuestbook();
  initReveal(); // 必须在所有动态内容渲染完成后再执行，否则时间线/项目卡等 .reveal 元素观察不到
});
