const SITE_STORAGE_KEY = "automationStudioContent";

const DEFAULT_SITE_CONTENT = {
  admin: {
    phone: "201142437585",
    password: "Elzain2023@#",
  },
  hero: {
    kicker: "حلول رقمية تبيع وترد وتتابع بدل فريق كامل",
    title: "ابني نظام مبيعات ذكي لمتجرك أو شركتك",
    description: "أوتوميشن Shopify، ماسنجر، واتساب، Email Funnels، شات بوت AI، ومواقع احترافية مصممة عشان تحوّل الزوار لعملاء.",
    ctaMessage: "مرحباً، أريد البدء في مشروع أوتوميشن أو موقع احترافي.",
  },
  services: [
    {
      icon: "S",
      title: "Shopify Automation",
      description: "أتمتة الطلبات، رسائل السلات المتروكة، متابعة العملاء، وإشعارات الشحن والدفع.",
      features: ["ربط Shopify مع واتساب", "تذكير السلات المتروكة", "تقارير مبيعات تلقائية"],
      message: "مرحباً، أريد شراء خدمة Shopify Automation.",
      featured: false,
    },
    {
      icon: "W",
      title: "WhatsApp & Messenger Automation",
      description: "ردود تلقائية، تأهيل العملاء، حجز مواعيد، وإرسال عروض بناءً على اهتمام العميل.",
      features: ["سيناريوهات محادثة ذكية", "رسائل متابعة تلقائية", "تحويل العميل لفريق المبيعات"],
      message: "مرحباً، أريد شراء خدمة WhatsApp & Messenger Automation.",
      featured: true,
    },
    {
      icon: "AI",
      title: "AI Chatbots",
      description: "بوت ذكي يرد على أسئلة العملاء، يرشح المنتجات، ويجمع بيانات التواصل بدقة.",
      features: ["ردود مبنية على بياناتك", "لغة عربية وإنجليزية", "تسليم محادثات لفريقك"],
      message: "مرحباً، أريد شراء خدمة AI Chatbots.",
      featured: false,
    },
    {
      icon: "M",
      title: "Marketing Automation",
      description: "نظام متابعة العملاء من أول زيارة حتى الشراء، مع تقسيم شرائح ورسائل مخصصة.",
      features: ["Lead scoring", "حملات تلقائية", "متابعة بعد الشراء"],
      message: "مرحباً، أريد شراء خدمة Marketing Automation.",
      featured: false,
    },
    {
      icon: "E",
      title: "Email Funnels",
      description: "سلاسل إيميلات احترافية للترحيب، البيع، استعادة العملاء، ورفع متوسط قيمة الطلب.",
      features: ["Welcome sequence", "Abandoned checkout", "Upsell campaigns"],
      message: "مرحباً، أريد شراء خدمة Email Funnels.",
      featured: false,
    },
    {
      icon: "Web",
      title: "Professional Websites",
      description: "مواقع شركات، صفحات بيع، Landing Pages، ومواقع خدمات بتصميم عصري سريع ومتجاوب.",
      features: ["تصميم SaaS حديث", "متوافق مع الموبايل", "SEO أساسي وسرعة عالية"],
      message: "مرحباً، أريد شراء خدمة إنشاء موقع إلكتروني محترف.",
      featured: false,
    },
  ],
  portfolio: [
    {
      tag: "Shopify Store",
      title: "نظام متابعة الطلبات والسلات المتروكة",
      description: "ربط المتجر برسائل واتساب تلقائية لتأكيد الطلب واستعادة العملاء قبل الخروج.",
      style: "shopify",
    },
    {
      tag: "AI Bot",
      title: "بوت مبيعات لخدمة العملاء",
      description: "بوت يجاوب على الأسئلة المتكررة، يجمع بيانات العميل، ويرسل الطلب لفريق المبيعات.",
      style: "chatbot",
    },
    {
      tag: "Website",
      title: "Landing Page لخدمة B2B",
      description: "صفحة بيع سريعة ومتجاوبة مع CTA واضح وربط مباشر بواتساب لتلقي الطلبات.",
      style: "website",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$50",
      description: "للبداية السريعة وتجربة أول أوتوميشن.",
      features: ["سيناريو أوتوميشن واحد", "ربط واتساب أو ماسنجر", "رسائل جاهزة ومخصصة", "دعم لمدة 3 أيام"],
      message: "مرحباً، أريد شراء باقة Starter بسعر 50$.",
      popular: false,
    },
    {
      name: "Pro",
      price: "$150",
      description: "للمتاجر والشركات التي تحتاج نظام مبيعات كامل.",
      features: ["3 سيناريوهات أوتوميشن", "WhatsApp + Messenger", "Email Funnel أساسي", "لوحة متابعة بسيطة", "دعم لمدة 7 أيام"],
      message: "مرحباً، أريد شراء باقة Pro بسعر 150$.",
      popular: true,
    },
    {
      name: "Advanced",
      price: "$300",
      description: "للربط الحقيقي المتقدم مع واتساب API وأنظمة البيع.",
      features: ["ربط حقيقي بالواتساب API", "AI Chatbot مخصص", "Shopify أو CRM integration", "تقارير وWebhook flows", "دعم لمدة 14 يوم"],
      message: "مرحباً، أريد شراء باقة Advanced بسعر 300$ مع ربط واتساب API.",
      popular: false,
    },
  ],
};

const EN_SITE_CONTENT = {
  admin: DEFAULT_SITE_CONTENT.admin,
  hero: {
    kicker: "Digital systems that sell, reply, and follow up around the clock",
    title: "Build a smart sales system for your store or business",
    description: "Shopify automation, Messenger, WhatsApp, email funnels, AI chatbots, and professional websites built to turn visitors into paying customers.",
    ctaMessage: "Hello, I want to start an automation or professional website project.",
  },
  services: [
    {
      icon: "S",
      title: "Shopify Automation",
      description: "Automate orders, abandoned carts, customer follow-up, shipping updates, and payment notifications.",
      features: ["Shopify to WhatsApp workflows", "Abandoned cart reminders", "Automated sales reports"],
      message: "Hello, I want to buy the Shopify Automation service.",
      featured: false,
    },
    {
      icon: "W",
      title: "WhatsApp & Messenger Automation",
      description: "Auto replies, lead qualification, booking flows, and personalized offers based on customer intent.",
      features: ["Smart conversation flows", "Automated follow-up messages", "Sales team handoff"],
      message: "Hello, I want to buy WhatsApp & Messenger Automation.",
      featured: true,
    },
    {
      icon: "AI",
      title: "AI Chatbots",
      description: "An intelligent bot that answers questions, recommends products, and collects customer details accurately.",
      features: ["Answers based on your data", "Arabic and English support", "Conversation handoff to your team"],
      message: "Hello, I want to buy the AI Chatbots service.",
      featured: false,
    },
    {
      icon: "M",
      title: "Marketing Automation",
      description: "A customer follow-up system from first visit to purchase, with segmentation and personalized messaging.",
      features: ["Lead scoring", "Automated campaigns", "Post-purchase follow-up"],
      message: "Hello, I want to buy Marketing Automation.",
      featured: false,
    },
    {
      icon: "E",
      title: "Email Funnels",
      description: "Professional email sequences for welcome journeys, sales, customer recovery, and higher order value.",
      features: ["Welcome sequence", "Abandoned checkout", "Upsell campaigns"],
      message: "Hello, I want to buy Email Funnels.",
      featured: false,
    },
    {
      icon: "Web",
      title: "Professional Websites",
      description: "Business websites, landing pages, and service sites with a modern, fast, responsive SaaS-style design.",
      features: ["Modern SaaS design", "Mobile responsive", "Basic SEO and high speed"],
      message: "Hello, I want to buy a professional website service.",
      featured: false,
    },
  ],
  portfolio: [
    {
      tag: "Shopify Store",
      title: "Order and abandoned cart automation system",
      description: "Connected the store to automated WhatsApp messages for order confirmation and cart recovery.",
      style: "shopify",
    },
    {
      tag: "AI Bot",
      title: "Sales chatbot for customer support",
      description: "A chatbot that answers FAQs, collects customer data, and sends qualified requests to the sales team.",
      style: "chatbot",
    },
    {
      tag: "Website",
      title: "B2B service landing page",
      description: "A fast responsive sales page with a clear CTA and direct WhatsApp lead capture.",
      style: "website",
    },
  ],
  pricing: [
    {
      name: "Starter",
      price: "$50",
      description: "For a quick start and your first automation flow.",
      features: ["One automation scenario", "WhatsApp or Messenger connection", "Custom ready-to-send messages", "3 days support"],
      message: "Hello, I want to buy the Starter package for $50.",
      popular: false,
    },
    {
      name: "Pro",
      price: "$150",
      description: "For stores and businesses that need a complete sales system.",
      features: ["3 automation scenarios", "WhatsApp + Messenger", "Basic email funnel", "Simple tracking dashboard", "7 days support"],
      message: "Hello, I want to buy the Pro package for $150.",
      popular: true,
    },
    {
      name: "Advanced",
      price: "$300",
      description: "For advanced WhatsApp API and sales system integrations.",
      features: ["Real WhatsApp API integration", "Custom AI chatbot", "Shopify or CRM integration", "Reports and webhook flows", "14 days support"],
      message: "Hello, I want to buy the Advanced package for $300 with WhatsApp API integration.",
      popular: false,
    },
  ],
};

const UI_TEXT = {
  ar: {
    direction: "rtl",
    lang: "ar",
    navServices: "الخدمات",
    navPortfolio: "الأعمال",
    navPricing: "الأسعار",
    navContact: "تواصل",
    navConsult: "استشارة مجانية",
    languageButton: "English",
    heroSecondary: "شاهد الأعمال",
    stats: [
      ["24/7", "رد تلقائي"],
      ["+40%", "تحسين متابعة العملاء"],
      ["7 أيام", "تسليم سريع"],
    ],
    metricsMonth: "+32% هذا الشهر",
    metricsLeads: "رسائل مؤهلة تلقائياً",
    flow: ["عميل جديد", "رسالة واتساب", "عرض مناسب", "طلب مدفوع"],
    messagePreview: "أهلاً بك، تم تجهيز عرض خاص حسب المنتج الذي اخترته.",
    messageButton: "إرسال تلقائي",
    servicesEyebrow: "الخدمات",
    servicesTitle: "خدمات جاهزة للبيع ومصممة للنمو",
    servicesText: "اختر الخدمة المناسبة، وزر Buy Now هيفتح واتساب برسالة جاهزة فيها اسم الخدمة.",
    portfolioTitle: "نماذج أعمال يمكنك استبدالها بشغلك الحقيقي",
    portfolioText: "ضع أسماء العملاء والنتائج الفعلية هنا. هذا القسم مهم جداً لبناء الثقة وجذب العملاء.",
    pricingTitle: "باقات واضحة تبدأ من 50$",
    pricingText: "كل باقة قابلة للتخصيص حسب حجم المشروع وعدد القنوات المطلوبة.",
    popular: "الأكثر طلباً",
    ctaEyebrow: "جاهز تبدأ؟",
    ctaTitle: "خلّي الردود والمتابعة والبيع يشتغلوا تلقائياً",
    ctaText: "اضغط وتواصل على واتساب، وابعت تفاصيل مشروعك أو الخدمة اللي حابب تبدأ بها.",
    ctaButton: "تواصل على واتساب",
    footer: "Automation Studio - خدمات أوتوميشن، مواقع، وربط واتساب API",
    defaultMessage: "مرحباً، أريد معرفة تفاصيل خدماتك.",
    consultMessage: "مرحباً، أريد استشارة مجانية بخصوص خدمات الأوتوميشن والمواقع.",
    ctaMessage: "مرحباً، أريد مناقشة مشروع أوتوميشن أو موقع جديد.",
  },
  en: {
    direction: "ltr",
    lang: "en",
    navServices: "Services",
    navPortfolio: "Portfolio",
    navPricing: "Pricing",
    navContact: "Contact",
    navConsult: "Free Consultation",
    languageButton: "العربية",
    heroSecondary: "View Portfolio",
    stats: [
      ["24/7", "Auto replies"],
      ["+40%", "Better follow-up"],
      ["7 days", "Fast delivery"],
    ],
    metricsMonth: "+32% this month",
    metricsLeads: "Qualified automated messages",
    flow: ["New lead", "WhatsApp message", "Right offer", "Paid order"],
    messagePreview: "Hi, your custom offer is ready based on the product you selected.",
    messageButton: "Send automatically",
    servicesEyebrow: "Services",
    servicesTitle: "Services built to sell and scale",
    servicesText: "Pick the right service and Buy Now will open WhatsApp with a ready message.",
    portfolioTitle: "Portfolio examples you can replace with real work",
    portfolioText: "Add real clients and results here. This section is key for trust and conversions.",
    pricingTitle: "Clear packages starting at $50",
    pricingText: "Every package can be customized based on project size and required channels.",
    popular: "Most popular",
    ctaEyebrow: "Ready to start?",
    ctaTitle: "Let replies, follow-up, and sales run automatically",
    ctaText: "Contact me on WhatsApp and send your project details or the service you want to start with.",
    ctaButton: "Contact on WhatsApp",
    footer: "Automation Studio - Automation, websites, and WhatsApp API solutions",
    defaultMessage: "Hello, I want to know more about your services.",
    consultMessage: "Hello, I want a free consultation about automation and websites.",
    ctaMessage: "Hello, I want to discuss a new automation or website project.",
  },
};

function getSiteContent() {
  try {
    const saved = localStorage.getItem(SITE_STORAGE_KEY);
    if (!saved || saved.includes("ط§")) {
      return DEFAULT_SITE_CONTENT;
    }
    return JSON.parse(saved);
  } catch (error) {
    return DEFAULT_SITE_CONTENT;
  }
}

function saveSiteContent(content) {
  localStorage.setItem(SITE_STORAGE_KEY, JSON.stringify(content));
}
