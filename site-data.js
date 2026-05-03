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
      description: "أتمتة الطلبات، رسائل abandoned cart، متابعة العملاء، وإشعارات الشحن والدفع.",
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

function getSiteContent() {
  try {
    const saved = localStorage.getItem(SITE_STORAGE_KEY);
    return saved ? JSON.parse(saved) : DEFAULT_SITE_CONTENT;
  } catch (error) {
    return DEFAULT_SITE_CONTENT;
  }
}

function saveSiteContent(content) {
  localStorage.setItem(SITE_STORAGE_KEY, JSON.stringify(content));
}
