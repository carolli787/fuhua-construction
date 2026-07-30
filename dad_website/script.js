// ============================================
//  TRANSLATIONS
//  Add or edit text here for both languages.
//  Each key maps to a data-key attribute in HTML.
// ============================================
const translations = {
  en: {
    // Nav
    nav_logo:         "Fu Hua Construction",
    nav_about:        "About",
    nav_services:     "Services",
    nav_portfolio:    "Portfolio",
    nav_testimonials: "Reviews",
    nav_quote:        "Get a Quote",
    nav_contact:      "Contact",

    // Hero
    hero_eyebrow:     "Independent Contractor · Licensed & Insured",
    hero_title:       "Built Right.\nBuilt to Last.",
    hero_bio:         "Hello I am Mr. Li. With nearly 20 years of experience in construction and home remodeling, I provide reliable, high-quality workmanship for residential projects of all sizes. My services include water and electrical installation, interior and exterior painting, kitchen cabinet installation, marble and tile installation, bathroom renovations, flooring, roof renovations, door and window replacement, and general home repairs. I take pride in delivering quality craftsmanship, attention to detail, and dependable service on every project.",
    hero_cta:         "Request a Quote",
    badge_insured:    "✔ Insured",
    badge_years:      "✔ Nearly 20 Years Experience",
    badge_area:       "✔ San Gabriel Valley & 626 Area",

    // Services
    services_eyebrow:  "What I Do",
    services_title:    "Services",
    service_1_title:   "Residential Renovation",
    service_1_desc:    "Full-scale home remodels, room additions, and structural improvements done with care.",
    service_2_title:   "Kitchen & Bath",
    service_2_desc:    "Cabinet installation, tile work, plumbing rough-in, priming, countertops, and complete kitchen or bathroom overhauls.",
    service_3_title:   "Doors & Windows",
    service_3_desc:    "Installation and replacement of interior and exterior doors, windows, and trim work.",
    service_4_title:   "Drywall & Framing",
    service_4_desc:    "New wall framing, drywall hanging, taping, mudding, and smooth finishing.",
    service_5_title:   "Painting",
    service_5_desc:    "Interior and exterior painting with clean prep work and long-lasting finishes.",
    service_6_title:   "General Repairs",
    service_6_desc:    "Handyman-level fixes to larger repair jobs: if something's broken, I can fix it.",

    // Portfolio
    portfolio_eyebrow: "Past Work",
    portfolio_title:   "Before & After",
    before_label:      "Before",
    after_label:       "After",
    project_1_title:   "Kitchen Remodel",
    project_2_title:   "Bathroom Renovation",
    project_3_title:   "Flooring & Tile Project",

    // Testimonials
    testimonials_eyebrow: "Client Reviews",
    testimonials_title:   "What People Say",
    t1_quote: '"My husband is really happy with it. He said everything turned out great and we love our new kitchen! Thank you all so much for your hard work!"',
    t2_quote: '"You\'re too kind! Thank you for putting up with all my nitpicking!  You also went above and beyond to clean up and keep things perfect. Thank you for being so dedicated and hardworking. We are so grateful that we found you."',
    t3_quote: '"Mr. Li went above and beyond on our remodel. He showed up on time every single day and left the place spotless when he was done. Hard to find that kind of care these days. We\'re already planning our next project with him."',

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
    form_disclaimer:     "⚠️ Quote submission is coming soon. For now, please reach out by email or phone directly.",

    // Footer
    footer_name:     "ChuangFu Li",
    footer_tagline:  "Independent Construction Contractor · San Gabriel Valley Area",
  },

  zh: {
    // Nav
    nav_logo:         "富华建筑",
    nav_about:        "关于我",
    nav_services:     "服务项目",
    nav_portfolio:    "工程案例",
    nav_testimonials: "客户评价",
    nav_quote:        "获取报价",
    nav_contact:      "联系方式",

    // Hero
    hero_eyebrow:     "独立承包商 · 持牌且投保",
    hero_title:       "做得对，\n经久耐用。",
    hero_bio:         "您好，我是李先生。我在建筑和房屋翻新领域拥有近20年的经验，为各种规模的住宅项目提供可靠、高质量的工艺。我的服务包括给排水和电气安装、室内外油漆、厨房橱柜安装、大理石和瓷砖安装、浴室翻新、地板铺设、屋顶翻新、门窗更换以及一般房屋维修。我以在每个项目中提供优质工艺、注重细节和可靠服务为荣。",
    hero_cta:         "申请报价",
    badge_insured:    "✔ 已投保",
    badge_years:      "✔ 近20年经验",
    badge_area:       "✔ 圣盖博谷 & 626地区",

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
    project_1_title:   "厨房翻新项目",
    project_2_title:   "浴室改造项目",
    project_3_title:   "地板与瓷砖工程",

    // Testimonials
    testimonials_eyebrow: "客户反馈",
    testimonials_title:   "大家怎么说",
    t1_quote: "「我老公好满意呀话整得好好！我们都好喜欢我们的新厨房！辛苦晒你哋！」",
    t2_quote: "「客气了，感谢你忍受我的吹毛求疵！你还额外用心把每个细节打扫得干干净净、保持完美。谢谢你尽心尽力的帮忙和辛勤付出，感恩遇见。」",
    t3_quote: "「李先生在我们的装修工程上非常用心，每天都准时到场，完工后现场收拾得干干净净。现在这样负责任的师傅真的不多见，我们已经在计划下一个项目找他了。」",

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
    form_disclaimer:     "⚠️ 在线报价功能即将上线，目前请直接通过电子邮件或电话联系我。",

    // Footer
    footer_name:     "李创富",
    footer_tagline:  "独立建筑承包商 · 圣盖博谷地区",
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
      ? "Thanks! Quote submission is coming soon. Please email fuhuaconstruction@gmail.com or call 626-297-3265 for now."
      : "感谢您！在线报价功能即将上线，目前请直接发送邮件至 fuhuaconstruction@gmail.com 或致电 626-297-3265。"
  );
}
