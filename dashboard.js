let draft = structuredClone(getSiteContent());

const loginPanel = document.querySelector("#loginPanel");
const adminPanel = document.querySelector("#adminPanel");
const loginForm = document.querySelector("#loginForm");
const loginError = document.querySelector("#loginError");
const saveAlert = document.querySelector("#saveAlert");

function cleanPhone(phone) {
  return String(phone || "").replace(/\D/g, "");
}

function showAdmin() {
  loginPanel.classList.add("d-none");
  adminPanel.classList.remove("d-none");
  fillForm();
}

function showLogin() {
  adminPanel.classList.add("d-none");
  loginPanel.classList.remove("d-none");
}

function textToLines(value) {
  return String(value || "")
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

function linesToText(items) {
  return (items || []).join("\n");
}

function escapeHtml(value) {
  return String(value || "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function field(name, value, type = "text") {
  if (type === "textarea") {
    return `<textarea data-field="${name}" rows="3">${escapeHtml(value)}</textarea>`;
  }
  return `<input data-field="${name}" type="${type}" value="${escapeHtml(value)}">`;
}

function renderServicesEditor() {
  const editor = document.querySelector("#servicesEditor");
  editor.innerHTML = draft.services.map((service, index) => `
    <article class="repeater-item" data-type="services" data-index="${index}">
      <div class="repeater-title">
        <strong>خدمة ${index + 1}</strong>
        <button class="remove-button" type="button" data-remove="services" data-index="${index}">حذف</button>
      </div>
      <div class="row g-3">
        <div class="col-md-3"><label>Icon</label>${field("icon", service.icon)}</div>
        <div class="col-md-6"><label>اسم الخدمة</label>${field("title", service.title)}</div>
        <div class="col-md-3 checkbox-cell"><label><input data-field="featured" type="checkbox" ${service.featured ? "checked" : ""}> مميزة</label></div>
        <div class="col-12"><label>الوصف</label>${field("description", service.description, "textarea")}</div>
        <div class="col-md-6"><label>المميزات، كل سطر ميزة</label>${field("features", linesToText(service.features), "textarea")}</div>
        <div class="col-md-6"><label>رسالة واتساب</label>${field("message", service.message, "textarea")}</div>
      </div>
    </article>
  `).join("");
}

function renderPortfolioEditor() {
  const editor = document.querySelector("#portfolioEditor");
  editor.innerHTML = draft.portfolio.map((project, index) => `
    <article class="repeater-item" data-type="portfolio" data-index="${index}">
      <div class="repeater-title">
        <strong>عمل ${index + 1}</strong>
        <button class="remove-button" type="button" data-remove="portfolio" data-index="${index}">حذف</button>
      </div>
      <div class="row g-3">
        <div class="col-md-4"><label>التصنيف</label>${field("tag", project.tag)}</div>
        <div class="col-md-4"><label>العنوان</label>${field("title", project.title)}</div>
        <div class="col-md-4">
          <label>شكل الصورة</label>
          <select data-field="style">
            <option value="shopify" ${project.style === "shopify" ? "selected" : ""}>Shopify</option>
            <option value="chatbot" ${project.style === "chatbot" ? "selected" : ""}>Chatbot</option>
            <option value="website" ${project.style === "website" ? "selected" : ""}>Website</option>
          </select>
        </div>
        <div class="col-12"><label>الوصف</label>${field("description", project.description, "textarea")}</div>
      </div>
    </article>
  `).join("");
}

function renderPricingEditor() {
  const editor = document.querySelector("#pricingEditor");
  editor.innerHTML = draft.pricing.map((plan, index) => `
    <article class="repeater-item" data-type="pricing" data-index="${index}">
      <div class="repeater-title">
        <strong>باقة ${index + 1}</strong>
        <button class="remove-button" type="button" data-remove="pricing" data-index="${index}">حذف</button>
      </div>
      <div class="row g-3">
        <div class="col-md-4"><label>اسم الباقة</label>${field("name", plan.name)}</div>
        <div class="col-md-4"><label>السعر</label>${field("price", plan.price)}</div>
        <div class="col-md-4 checkbox-cell"><label><input data-field="popular" type="checkbox" ${plan.popular ? "checked" : ""}> الأكثر طلباً</label></div>
        <div class="col-12"><label>الوصف</label>${field("description", plan.description, "textarea")}</div>
        <div class="col-md-6"><label>المميزات، كل سطر ميزة</label>${field("features", linesToText(plan.features), "textarea")}</div>
        <div class="col-md-6"><label>رسالة واتساب</label>${field("message", plan.message, "textarea")}</div>
      </div>
    </article>
  `).join("");
}

function fillForm() {
  document.querySelector("#adminPhone").value = draft.admin.phone;
  document.querySelector("#adminPassword").value = draft.admin.password;
  document.querySelector("#heroKickerInput").value = draft.hero.kicker;
  document.querySelector("#heroTitleInput").value = draft.hero.title;
  document.querySelector("#heroDescriptionInput").value = draft.hero.description;
  document.querySelector("#heroMessageInput").value = draft.hero.ctaMessage;

  renderServicesEditor();
  renderPortfolioEditor();
  renderPricingEditor();
}

function collectRepeaters(type) {
  return [...document.querySelectorAll(`[data-type="${type}"]`)].map((item) => {
    const result = {};
    item.querySelectorAll("[data-field]").forEach((input) => {
      const name = input.dataset.field;
      if (input.type === "checkbox") {
        result[name] = input.checked;
      } else if (name === "features") {
        result[name] = textToLines(input.value);
      } else {
        result[name] = input.value.trim();
      }
    });
    return result;
  });
}

function collectForm() {
  draft.admin.phone = cleanPhone(document.querySelector("#adminPhone").value);
  draft.admin.password = document.querySelector("#adminPassword").value;
  draft.hero.kicker = document.querySelector("#heroKickerInput").value.trim();
  draft.hero.title = document.querySelector("#heroTitleInput").value.trim();
  draft.hero.description = document.querySelector("#heroDescriptionInput").value.trim();
  draft.hero.ctaMessage = document.querySelector("#heroMessageInput").value.trim();
  draft.services = collectRepeaters("services");
  draft.portfolio = collectRepeaters("portfolio");
  draft.pricing = collectRepeaters("pricing");
}

function flashSaved() {
  saveAlert.classList.add("show");
  setTimeout(() => saveAlert.classList.remove("show"), 2600);
}

loginForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const content = getSiteContent();
  const phoneOk = cleanPhone(document.querySelector("#loginPhone").value) === cleanPhone(content.admin.phone);
  const passwordOk = document.querySelector("#loginPassword").value === content.admin.password;

  if (!phoneOk || !passwordOk) {
    loginError.textContent = "رقم التليفون أو كلمة السر غير صحيحة.";
    return;
  }

  sessionStorage.setItem("dashboardLoggedIn", "true");
  loginError.textContent = "";
  showAdmin();
});

document.querySelector("#saveButton").addEventListener("click", () => {
  collectForm();
  saveSiteContent(draft);
  flashSaved();
});

document.querySelector("#resetButton").addEventListener("click", () => {
  const confirmed = confirm("هل تريد رجوع كل محتوى الموقع للإعدادات الأصلية؟");
  if (!confirmed) return;
  draft = structuredClone(DEFAULT_SITE_CONTENT);
  saveSiteContent(draft);
  fillForm();
  flashSaved();
});

document.querySelector("#logoutButton").addEventListener("click", () => {
  sessionStorage.removeItem("dashboardLoggedIn");
  showLogin();
});

document.querySelectorAll(".tab-button").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelectorAll(".tab-button").forEach((item) => item.classList.remove("active"));
    document.querySelectorAll(".dashboard-tab").forEach((item) => item.classList.remove("active"));
    button.classList.add("active");
    document.querySelector(`#${button.dataset.tab}`).classList.add("active");
  });
});

document.querySelector("#addServiceButton").addEventListener("click", () => {
  collectForm();
  draft.services.push({
    icon: "New",
    title: "خدمة جديدة",
    description: "اكتب وصف الخدمة هنا.",
    features: ["ميزة 1", "ميزة 2", "ميزة 3"],
    message: "مرحباً، أريد شراء الخدمة الجديدة.",
    featured: false,
  });
  renderServicesEditor();
});

document.querySelector("#addPortfolioButton").addEventListener("click", () => {
  collectForm();
  draft.portfolio.push({
    tag: "Project",
    title: "اسم العمل",
    description: "اكتب وصف مختصر للعمل والنتيجة.",
    style: "website",
  });
  renderPortfolioEditor();
});

document.querySelector("#addPricingButton").addEventListener("click", () => {
  collectForm();
  draft.pricing.push({
    name: "New Plan",
    price: "$100",
    description: "اكتب وصف الباقة هنا.",
    features: ["ميزة 1", "ميزة 2", "ميزة 3"],
    message: "مرحباً، أريد شراء هذه الباقة.",
    popular: false,
  });
  renderPricingEditor();
});

document.addEventListener("click", (event) => {
  const removeButton = event.target.closest("[data-remove]");
  if (!removeButton) return;
  collectForm();
  const type = removeButton.dataset.remove;
  const index = Number(removeButton.dataset.index);
  draft[type].splice(index, 1);
  if (type === "services") renderServicesEditor();
  if (type === "portfolio") renderPortfolioEditor();
  if (type === "pricing") renderPricingEditor();
});

if (sessionStorage.getItem("dashboardLoggedIn") === "true") {
  showAdmin();
} else {
  showLogin();
}
