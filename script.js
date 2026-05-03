const LANGUAGE_STORAGE_KEY = "automationStudioLanguage";

let currentLanguage = localStorage.getItem(LANGUAGE_STORAGE_KEY) || "ar";
let currentContent = getContentForLanguage(currentLanguage);

function getContentForLanguage(language) {
  if (language === "en") {
    return EN_SITE_CONTENT;
  }
  return getSiteContent();
}

function getUiText() {
  return UI_TEXT[currentLanguage];
}

function cleanPhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function displayPhone(phone) {
  const cleaned = cleanPhone(phone);
  if (cleaned.startsWith("20") && cleaned.length >= 12) {
    return `+${cleaned.slice(0, 2)} ${cleaned.slice(2, 5)} ${cleaned.slice(5, 8)} ${cleaned.slice(8)}`;
  }
  return `+${cleaned}`;
}

function buildWhatsAppUrl(message) {
  const phone = cleanPhone(getSiteContent().admin.phone);
  const text = encodeURIComponent(message);
  return `https://wa.me/${phone}?text=${text}`;
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function listItems(items) {
  return items.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
}

function buyLabel() {
  return currentLanguage === "ar" ? "اشتري الآن" : "Buy Now";
}

function renderServices(services) {
  const grid = document.querySelector("#servicesGrid");
  if (!grid) return;

  grid.innerHTML = services.map((service) => `
    <div class="col-md-6 col-xl-4">
      <article class="service-card ${service.featured ? "featured" : ""}">
        <div class="service-icon">${escapeHtml(service.icon)}</div>
        <h3>${escapeHtml(service.title)}</h3>
        <p>${escapeHtml(service.description)}</p>
        <ul>${listItems(service.features)}</ul>
        <a class="btn ${service.featured ? "btn-primary" : "btn-dark"} w-100 whatsapp-link" href="#" data-message="${escapeHtml(service.message)}">${buyLabel()}</a>
      </article>
    </div>
  `).join("");
}

function renderPortfolio(portfolio) {
  const grid = document.querySelector("#portfolioGrid");
  if (!grid) return;

  grid.innerHTML = portfolio.map((project) => `
    <div class="col-md-6 col-lg-4">
      <article class="portfolio-card">
        <div class="portfolio-visual ${project.style || "website"}"></div>
        <div class="portfolio-body">
          <span>${escapeHtml(project.tag)}</span>
          <h3>${escapeHtml(project.title)}</h3>
          <p>${escapeHtml(project.description)}</p>
        </div>
      </article>
    </div>
  `).join("");
}

function renderPricing(pricing) {
  const grid = document.querySelector("#pricingGrid");
  if (!grid) return;
  const ui = getUiText();

  grid.innerHTML = pricing.map((plan) => `
    <div class="col-lg-4">
      <article class="pricing-card ${plan.popular ? "popular" : ""}">
        ${plan.popular ? `<div class="popular-badge">${escapeHtml(ui.popular)}</div>` : ""}
        <h3>${escapeHtml(plan.name)}</h3>
        <p>${escapeHtml(plan.description)}</p>
        <div class="price">${escapeHtml(plan.price)}</div>
        <ul>${listItems(plan.features)}</ul>
        <a class="btn ${plan.popular ? "btn-primary" : "btn-outline-dark"} w-100 whatsapp-link" href="#" data-message="${escapeHtml(plan.message)}">${buyLabel()}</a>
      </article>
    </div>
  `).join("");
}

function setText(selector, value) {
  const element = document.querySelector(selector);
  if (element) {
    element.textContent = value;
    element.hidden = value === "";
  }
}

function applyStaticText() {
  const ui = getUiText();
  document.documentElement.lang = ui.lang;
  document.documentElement.dir = ui.direction;

  setText('.nav-link[href="#services"]', ui.navServices);
  setText('.nav-link[href="#portfolio"]', ui.navPortfolio);
  setText('.nav-link[href="#pricing"]', ui.navPricing);
  setText('.nav-link[href="#contact"]', ui.navContact);

  const consultButton = document.querySelector(".btn-nav.whatsapp-link");
  if (consultButton) {
    consultButton.textContent = ui.navConsult;
    consultButton.dataset.message = ui.consultMessage;
  }

  const languageToggle = document.querySelector("#languageToggle");
  if (languageToggle) {
    languageToggle.textContent = ui.languageButton;
  }

  setText(".hero-actions .btn-outline-light", ui.heroSecondary);

  document.querySelectorAll(".hero-stats div").forEach((item, index) => {
    const stat = ui.stats[index];
    if (!stat) return;
    item.querySelector("strong").textContent = stat[0];
    item.querySelector("span").textContent = stat[1];
  });

  setText(".metric-card small", ui.metricsMonth);
  setText(".metric-card.accent small", ui.metricsLeads);
  document.querySelectorAll(".flow-step").forEach((item, index) => {
    if (ui.flow[index]) item.textContent = ui.flow[index];
  });
  setText(".message-card p", ui.messagePreview);
  setText(".message-card button", ui.messageButton);

  setText("#services .section-heading span", ui.servicesEyebrow);
  setText("#services .section-heading h2", ui.servicesTitle);
  setText("#services .section-heading p", ui.servicesText);
  setText("#portfolio .section-heading h2", ui.portfolioTitle);
  setText("#portfolio .section-heading p", ui.portfolioText);
  setText("#pricing .section-heading h2", ui.pricingTitle);
  setText("#pricing .section-heading p", ui.pricingText);

  setText("#contact .cta-panel span", ui.ctaEyebrow);
  setText("#contact .cta-panel h2", ui.ctaTitle);
  setText("#contact .cta-panel p", ui.ctaText);
  const ctaButton = document.querySelector("#contact .whatsapp-link");
  if (ctaButton) {
    ctaButton.textContent = ui.ctaButton;
    ctaButton.dataset.message = ui.ctaMessage;
  }

  setText(".site-footer p", ui.footer);
}

function bindWhatsAppButtons() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.onclick = (event) => {
      event.preventDefault();
      const message = link.dataset.message || getUiText().defaultMessage;
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    };
  });
}

function renderSite() {
  currentContent = getContentForLanguage(currentLanguage);

  applyStaticText();

  document.querySelector("#heroKicker").textContent = currentContent.hero.kicker;
  document.querySelector("#heroTitle").textContent = currentContent.hero.title;
  document.querySelector("#heroDescription").textContent = currentContent.hero.description;
  const heroBuyButton = document.querySelector("#heroBuyButton");
  heroBuyButton.dataset.message = currentContent.hero.ctaMessage;
  heroBuyButton.textContent = buyLabel();

  renderServices(currentContent.services);
  renderPortfolio(currentContent.portfolio);
  renderPricing(currentContent.pricing);

  const footerPhone = document.querySelector("#footerPhone");
  const phone = getSiteContent().admin.phone;
  footerPhone.href = `tel:+${cleanPhone(phone)}`;
  footerPhone.textContent = displayPhone(phone);

  bindWhatsAppButtons();
}

document.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    const nav = document.querySelector(".navbar-collapse.show");
    if (nav && window.bootstrap) {
      bootstrap.Collapse.getOrCreateInstance(nav).hide();
    }
  });
});

document.querySelector("#languageToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "ar" ? "en" : "ar";
  localStorage.setItem(LANGUAGE_STORAGE_KEY, currentLanguage);
  renderSite();
});

renderSite();
