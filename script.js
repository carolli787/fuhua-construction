// ============================================
//  TRANSLATIONS
//  Add or edit text here for both languages.
//  Each key maps to a data-key attribute in HTML.
// ============================================
const translations = {
  en: {
    // Nav
    nav_logo:         "Wei Construction",
    nav_about:        "About",
    nav_services:     "Services",
    nav_portfolio:    "Portfolio",
    nav_testimonials: "Reviews",
    nav_quote:        "Get a Quote",
    nav_contact:      "Contact",

    // Hero
    hero_eyebrow:     "Independent Contractor · Licensed & Insured",
    hero_title:       "Built Right.\nBuilt to Last.",
    hero_bio:         "Hi, I'm David Wei — a licensed independent construction contractor based in the DMV area with over 15 years of hands-on experience. I specialize in residential renovations, kitchen and bathroom remodels, and general contracting. I take pride in doing things right the first time, staying on schedule, and treating every home like it's my own.",
    hero_cta:         "Request a Quote",
    badge_licensed:   "✔ Licensed",
    badge_insured:    "✔ Insured",
    badge_years:      "✔ 15+ Years Experience",

    // Services
    services_eyebrow:  "What I Do",
    services_title:    "Services",
    service_1_title:   "Residential Renovation",
    service_1_desc:    "Full-scale home remodels, room additions, and structural improvements done with care.",
    service_2_title:   "Kitchen & Bath",
    service_2_desc:    "Cabinet installation, tile work, plumbing rough-in, countertops, and complete kitchen or bathroom overhauls.",
    service_3_title:   "Doors & Windows",
    service_3_desc:    "Installation and replacement of interior and exterior doors, windows, and trim work.",
    service_4_title:   "Drywall & Framing",
    service_4_desc:    "New wall framing, drywall hanging, taping, mudding, and smooth finishing.",
    service_5_title:   "Painting",
    service_5_desc:    "Interior and exterior painting with clean prep work and long-lasting finishes.",
    service_6_title:   "General Repairs",
    service_6_desc:    "Handyman-level fixes to larger repair jobs — if something's broken, I can fix it.",

    // Portfolio
    portfolio_eyebrow: "Past Work",
    portfolio_title:   "Before & After",
    before_label:      "Before",
    after_label:       "After",
    project_1_title:   "Kitchen Remodel — Bethesda, MD",
    project_2_title:   "Bathroom Renovation — Arlington, VA",
    project_3_title:   "Basement Finishing — Alexandria, VA",

    // Testimonials
    testimonials_eyebrow: "Client Reviews",
    testimonials_title:   "What People Say",
    t1_quote: '"David completely transformed our kitchen. He was professional, kept the site clean every day, and finished on time. We\'ve already hired him again for our bathroom."',
    t2_quote: '"Very detail-oriented and honest about costs upfront. No surprise charges. Our basement went from unfinished to a real living space in 6 weeks."',
    t3_quote: '"I\'ve used many contractors over the years — David is the best. He communicates well, shows up when he says he will, and the quality is excellent."',

    // Quote form
    quote_eyebrow:       "Let's Talk",
    quote_title:         "Request a Quote",
    quote_note:          "Fill out the form and I'll get back to you within 1–2 business days.",
    form_name:           "Full Name",
    form_email:          "Email",
    form_phone:          "Phone (optional)",
    form_service:        "Type of Work",
    form_service_opt1:   "Kitchen / Bathroom",
    form_service_opt2:   "Renovation / Addition",
    form_service_opt3:   "Drywall / Framing",
    form_service_opt4:   "Painting",
    form_service_opt5:   "Other / Not Sure",
    form_desc:           "Project Description",
    form_submit:         "Submit Request",
    form_disclaimer:     "⚠️ Quote submission is coming soon. For now, please reach out by email directly.",

    // Footer
    footer_name:     "David Wei",
    footer_tagline:  "Independent Construction Contractor · DMV Area",
    footer_license:  "License #: MD-XXXXXXX · Fully Insured",
  },

  zh: {
    // Nav
    nav_logo:         "魏氏建筑",
    nav_about:        "关于我",
    nav_services:     "服务项目",
    nav_portfolio:    "工程案例",
    nav_testimonials: "客户评价",
    nav_quote:        "获取报价",
    nav_contact:      "联系方式",

    // Hero
    hero_eyebrow:     "独立承包商 · 持牌且投保",
    hero_title:       "做得对，\n经久耐用。",
    hero_bio:         "您好，我是魏大卫 — 持牌独立建筑承包商，扎根于大华盛顿地区，拥有超过15年的实操经验。专注于住宅翻新、厨房与浴室改造及综合承包服务。我以第一次就把事情做对为荣，严格按时完工，用心对待每一个家。",
    hero_cta:         "申请报价",
    badge_licensed:   "✔ 持牌",
    badge_insured:    "✔ 已投保",
    badge_years:      "✔ 15年以上经验",

    // Services
    services_eyebrow:  "我的专长",
    services_title:    "服务项目",
    service_1_title:   "住宅翻新",
    service_1_desc:    "全面的家居改造、房间扩建及结构性改进，用心完成每一个项目。",
    service_2_title:   "厨房与浴室",
    service_2_desc:    "橱柜安装、瓷砖铺设、管道预埋、台面安装，以及厨卫全面翻新。",
    service_3_title:   "门窗安装",
    service_3_desc:    "室内外门窗的安装与更换，以及装饰线条施工。",
    service_4_title:   "石膏板与框架",
    service_4_desc:    "新墙框架搭建、石膏板安装、刮腻子、打磨及光滑收面。",
    service_5_title:   "油漆涂装",
    service_5_desc:    "室内外刷漆，精细基层处理，耐久涂装效果。",
    service_6_title:   "综合维修",
    service_6_desc:    "小修小补到较大维修工程，有问题我来解决。",

    // Portfolio
    portfolio_eyebrow: "过往工程",
    portfolio_title:   "改造前后对比",
    before_label:      "改造前",
    after_label:       "改造后",
    project_1_title:   "厨房翻新 — 马里兰州贝塞斯达",
    project_2_title:   "浴室改造 — 弗吉尼亚州阿灵顿",
    project_3_title:   "地下室精装 — 弗吉尼亚州亚历山大",

    // Testimonials
    testimonials_eyebrow: "客户反馈",
    testimonials_title:   "大家怎么说",
    t1_quote: "「大卫彻底改变了我们的厨房。他非常专业，每天保持工地整洁，并按时完工。我们已经再次聘请他改造浴室了。」",
    t2_quote: "「非常注重细节，报价诚实透明，没有任何隐藏费用。我们的地下室在6周内从毛坯变成了真正的生活空间。」",
    t3_quote: "「我用过很多承包商，大卫是最好的。他沟通顺畅，说到做到，工程质量非常出色。」",

    // Quote form
    quote_eyebrow:       "开始合作",
    quote_title:         "申请报价",
    quote_note:          "填写表格后，我将在1至2个工作日内回复您。",
    form_name:           "姓名",
    form_email:          "电子邮件",
    form_phone:          "电话（可选）",
    form_service:        "工程类型",
    form_service_opt1:   "厨房 / 浴室",
    form_service_opt2:   "翻新 / 扩建",
    form_service_opt3:   "石膏板 / 框架",
    form_service_opt4:   "油漆",
    form_service_opt5:   "其他 / 不确定",
    form_desc:           "项目说明",
    form_submit:         "提交申请",
    form_disclaimer:     "⚠️ 在线报价功能即将上线，目前请直接通过电子邮件联系我。",

    // Footer
    footer_name:     "魏大卫",
    footer_tagline:  "独立建筑承包商 · 大华盛顿地区",
    footer_license:  "执照号：MD-XXXXXXX · 已全面投保",
  }
};

// ============================================
//  LANGUAGE TOGGLE
// ============================================
let currentLang = 'en';

function toggleLanguage() {
  currentLang = currentLang === 'en' ? 'zh' : 'en';
  applyLanguage(currentLang);

  const btn = document.getElementById('langToggle');
  btn.textContent = currentLang === 'en' ? '中文' : 'EN';

  document.documentElement.lang = currentLang === 'en' ? 'en' : 'zh';
}

function applyLanguage(lang) {
  const t = translations[lang];

  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.dataset.key;
    if (t[key] !== undefined) {
      // Use innerText to respect \n line breaks in hero title
      el.innerText = t[key];
    }
  });
}

// ============================================
//  QUOTE FORM (placeholder — backend coming soon)
//  When you build your backend, replace the body
//  of this function with a real fetch() POST call.
// ============================================
function handleQuoteSubmit(event) {
  event.preventDefault(); // prevent page reload

  // TODO: replace with real backend call, e.g.:
  // const formData = new FormData(event.target);
  // const payload = Object.fromEntries(formData.entries());
  // const response = await fetch('/api/quote', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload)
  // });

  alert(
    currentLang === 'en'
      ? "Thanks! Quote submission is coming soon. Please email david@weiconstruction.com directly for now."
      : "感谢您！在线报价功能即将上线，目前请直接发送邮件至 david@weiconstruction.com。"
  );
}
