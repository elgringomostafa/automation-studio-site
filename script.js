let currentContent = getSiteContent();

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
  const phone = cleanPhone(currentContent.admin.phone);
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
        <a class="btn ${service.featured ? "btn-primary" : "btn-dark"} w-100 whatsapp-link" href="#" data-message="${escapeHtml(service.message)}">Buy Now</a>
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

  grid.innerHTML = pricing.map((plan) => `
    <div class="col-lg-4">
      <article class="pricing-card ${plan.popular ? "popular" : ""}">
        ${plan.popular ? '<div class="popular-badge">الأكثر طلباً</div>' : ""}
        <h3>${escapeHtml(plan.name)}</h3>
        <p>${escapeHtml(plan.description)}</p>
        <div class="price">${escapeHtml(plan.price)}</div>
        <ul>${listItems(plan.features)}</ul>
        <a class="btn ${plan.popular ? "btn-primary" : "btn-outline-dark"} w-100 whatsapp-link" href="#" data-message="${escapeHtml(plan.message)}">Buy Now</a>
      </article>
    </div>
  `).join("");
}

function bindWhatsAppButtons() {
  document.querySelectorAll(".whatsapp-link").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const message = link.dataset.message || "مرحباً، أريد معرفة تفاصيل خدماتك.";
      window.open(buildWhatsAppUrl(message), "_blank", "noopener,noreferrer");
    });
  });
}

function renderSite() {
  currentContent = getSiteContent();

  document.querySelector("#heroKicker").textContent = currentContent.hero.kicker;
  document.querySelector("#heroTitle").textContent = currentContent.hero.title;
  document.querySelector("#heroDescription").textContent = currentContent.hero.description;
  document.querySelector("#heroBuyButton").dataset.message = currentContent.hero.ctaMessage;

  renderServices(currentContent.services);
  renderPortfolio(currentContent.portfolio);
  renderPricing(currentContent.pricing);

  const footerPhone = document.querySelector("#footerPhone");
  footerPhone.href = `tel:+${cleanPhone(currentContent.admin.phone)}`;
  footerPhone.textContent = displayPhone(currentContent.admin.phone);

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

renderSite();
