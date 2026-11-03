"use strict";

/* =========================================================
   KAILASH KI KARUNA — MAIN APP
   ========================================================= */

/* ---------- Configuration ---------- */

const CONTACT_CONFIG = {
  web3formsAccessKey: "60733148-9061-4b9b-934f-6ab2b7700deb",
  whatsappNumber: "919829097424",
  emailAddress: "YOUR_NGO_EMAIL@example.com",
};

/* ---------- Utilities ---------- */

const select = (selector, root = document) => root.querySelector(selector);

const selectAll = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

/* =========================================================
   1. LANGUAGE SYSTEM
   ========================================================= */

const supportedLanguages = ["en", "hi"];
const translationCache = {};

let currentLanguage = "en";
let activeDictionary = {};

function t(key, fallback = "") {
  return activeDictionary[key] || fallback;
}

async function loadTranslations(language) {
  if (!supportedLanguages.includes(language)) language = "en";

  if (translationCache[language]) {
    return translationCache[language];
  }

  const response = await fetch(`locales/${language}.json`);

  if (!response.ok) {
    throw new Error(`Unable to load locales/${language}.json`);
  }

  const dictionary = await response.json();
  translationCache[language] = dictionary;

  return dictionary;
}

async function setLanguage(language) {
  if (!supportedLanguages.includes(language)) language = "en";

  try {
    const dictionary = await loadTranslations(language);

    activeDictionary = dictionary;
    currentLanguage = language;

    // Set language before updating content.
    document.documentElement.lang = language;

    // Translate text.
    selectAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    // Translate placeholders, aria-labels, titles, etc.
    selectAll("[data-i18n-attr]").forEach((element) => {
      element.dataset.i18nAttr.split(",").forEach((mapping) => {
        const [attribute, key] = mapping.trim().split(":");

        if (
          attribute &&
          key &&
          Object.prototype.hasOwnProperty.call(dictionary, key)
        ) {
          element.setAttribute(attribute.trim(), dictionary[key]);
        }
      });
    });

    // Language toggle.
    const toggle = select("#language-toggle");

    if (toggle) {
      toggle.textContent =
        language === "en" ? "हिंदी में पढ़ें" : "Read in English";

      toggle.setAttribute(
        "aria-label",
        language === "en"
          ? "Switch language to Hindi"
          : "Switch language to English",
      );
    }

    try {
      localStorage.setItem("kkk-language", language);
    } catch {
      // Continue without local storage.
    }

    // Update dynamic content.
    window.dispatchEvent(
      new CustomEvent("kkk:language-changed", {
        detail: { dictionary, language },
      }),
    );

    return true;
  } catch (error) {
    console.error("Language change failed:", error);
    return false;
  }
}

function initInternationalization() {
  const toggle = select("#language-toggle");

  let savedLanguage = "en";

  try {
    const saved = localStorage.getItem("kkk-language");
    if (supportedLanguages.includes(saved)) savedLanguage = saved;
  } catch {
    // English fallback.
  }

  if (toggle) {
    toggle.addEventListener("click", async () => {
      toggle.disabled = true;

      try {
        await setLanguage(currentLanguage === "en" ? "hi" : "en");
      } finally {
        toggle.disabled = false;
      }
    });
  }

  setLanguage(savedLanguage);
}

/* =========================================================
   2. NAVIGATION
   ========================================================= */

function initNavigation() {
  const button = select(".menu-toggle");
  const navigation = select("#site-navigation");

  if (!button || !navigation) return;

  function setOpen(open) {
    button.setAttribute("aria-expanded", String(open));
    button.setAttribute(
      "aria-label",
      open ? "Close navigation menu" : "Open navigation menu",
    );

    navigation.classList.toggle("is-open", open);
    document.body.classList.toggle("menu-open", open);
  }

  button.addEventListener("click", () => {
    setOpen(button.getAttribute("aria-expanded") !== "true");
  });

  selectAll("a", navigation).forEach((link) => {
    link.addEventListener("click", () => setOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setOpen(false);
  });

  document.addEventListener("click", (event) => {
    if (
      button.getAttribute("aria-expanded") === "true" &&
      !navigation.contains(event.target) &&
      !button.contains(event.target)
    ) {
      setOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) setOpen(false);
  });
}

/* =========================================================
   3. CAROUSEL
   ========================================================= */

function initCarousel(carousel) {
  const track = select("[data-carousel-track]", carousel);
  const previous = select("[data-carousel-prev]", carousel);
  const next = select("[data-carousel-next]", carousel);
  const dots = select("[data-carousel-dots]", carousel);
  const pause = select("[data-carousel-pause]", carousel);

  if (!track || !previous || !next || !dots || !pause) return;

  const slides = selectAll(".story-card", track);
  if (slides.length < 2) return;

  const state = {
    index: 0,
    paused: window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    timer: null,
  };

  function visibleCount() {
    if (window.innerWidth <= 520) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  }

  function maxIndex() {
    return Math.max(0, slides.length - visibleCount());
  }

  function renderDots() {
    dots.replaceChildren();

    slides.forEach((slide, index) => {
      const dot = document.createElement("button");
      dot.type = "button";
      dot.className = "carousel-dot";
      dot.setAttribute("aria-label", `Show story ${index + 1}`);

      dot.addEventListener("click", () => {
        state.index = Math.min(index, maxIndex());
        render();
        startTimer();
      });

      dots.append(dot);
    });
  }

  function render() {
    state.index = Math.max(0, Math.min(state.index, maxIndex()));

    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    const width = slides[0].getBoundingClientRect().width;

    track.style.transform = `translateX(-${state.index * (width + gap)}px)`;

    selectAll(".carousel-dot", dots).forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === state.index));
    });

    previous.disabled = state.index === 0;
    next.disabled = state.index === maxIndex();
  }

  function stopTimer() {
    if (state.timer !== null) {
      clearInterval(state.timer);
      state.timer = null;
    }
  }

  function startTimer() {
    stopTimer();

    if (state.paused || document.hidden) return;

    state.timer = setInterval(() => {
      state.index = state.index >= maxIndex() ? 0 : state.index + 1;
      render();
    }, 5000);
  }

  function updatePause() {
    pause.textContent = state.paused ? "Play" : "Pause";
    pause.setAttribute("aria-pressed", String(state.paused));
  }

  previous.addEventListener("click", () => {
    state.index--;
    render();
    startTimer();
  });

  next.addEventListener("click", () => {
    state.index = state.index >= maxIndex() ? 0 : state.index + 1;
    render();
    startTimer();
  });

  pause.addEventListener("click", () => {
    state.paused = !state.paused;
    updatePause();
    startTimer();
  });

  document.addEventListener("visibilitychange", startTimer);

  window.addEventListener("resize", () => {
    renderDots();
    render();
  });

  renderDots();
  render();
  updatePause();
  startTimer();
}

/* =========================================================
   4. FOOTER
   ========================================================= */

function initFooter() {
  const year = select("#current-year");
  if (year) year.textContent = new Date().getFullYear();
}

/* =========================================================
   5. EQUIPMENT DATA
   ========================================================= */

const EQUIPMENT = [
  {
    id: "wheelchair",
    name: "Wheelchair",
    nameKey: "eqWheelchair",
    image: "images/wheelchair.jpg",
    deposit: null,
    description: "Mobility support for suitable home-care needs.",
    descriptionKey: "eqWheelchairDescription",
  },
  {
    id: "water-bed",
    name: "Water Bed",
    nameKey: "eqWaterBed",
    image: "images/water-bed.jpg",
    deposit: null,
    description: "Support for comfortable rest and recovery at home.",
    descriptionKey: "eqWaterBedDescription",
  },
  {
    id: "oxygen-cylinder",
    name: "Oxygen Cylinder",
    nameKey: "eqOxygen",
    image: "images/o2cylinder.jpeg",
    deposit: null,
    description: "Oxygen-support equipment when medically prescribed.",
    descriptionKey: "eqOxygenDescription",
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    nameKey: "eqNebulizer",
    image: "images/nebulizer.jpg",
    deposit: null,
    description: "Equipment for prescribed respiratory care.",
    descriptionKey: "eqNebulizerDescription",
  },
  {
    id: "walker",
    name: "Walker",
    nameKey: "eqWalker",
    image: "images/walker.jpg",
    deposit: 600,
    description: "Additional stability and support while walking.",
    descriptionKey: "eqWalkerDescription",
  },
  {
    id: "air-mattress",
    name: "Medical Air Mattress",
    nameKey: "eqAirMattress",
    image: "images/air-mattress.jpg",
    deposit: null,
    description: "Pressure-relief support for suitable care needs.",
    descriptionKey: "eqAirMattressDescription",
  },
  {
    id: "dead-body-freezer",
    name: "Dead Body Freezer",
    nameKey: "eqDeadBodyFreezer",
    image: "images/Dead-Body-Freezer-Box.jpg",
    deposit: null,
    description:
      "Freezer facility for temporary preservation of deceased persons.",
    descriptionKey: "eqDeadBodyFreezerDescription",
  },
  {
    id: "commode-chair",
    name: "Commode Chair",
    nameKey: "eqCommodeChair",
    image: "images/commode-chair.webp",
    deposit: null,
    description: "Toilet assistance for people with limited mobility.",
    descriptionKey: "eqCommodeChairDescription",
  },
  {
    id: "suction-machine",
    name: "Suction Machine",
    nameKey: "eqSuctionMachine",
    image: "images/suction-machine.avif",
    deposit: null,
    description: "Medical suction equipment for prescribed care.",
    descriptionKey: "eqSuctionMachineDescription",
  },
  {
    id: "stretcher",
    name: "Stretcher",
    nameKey: "eqStretcher",
    image: "images/stretcher.jpg",
    deposit: null,
    description: "Support for patient transfer and transportation.",
    descriptionKey: "eqStretcherDescription",
  },
  {
    id: "surgical-bed",
    name: "Surgical Bed",
    nameKey: "eqSurgicalBed",
    image: "images/surgical-bed.jpg",
    deposit: null,
    description: "Adjustable bed support for patient care and recovery.",
    descriptionKey: "eqSurgicalBedDescription",
  },
];

function equipmentName(item) {
  return t(item.nameKey, item.name);
}

function equipmentDescription(item) {
  return t(item.descriptionKey, item.description);
}

function formatDeposit(amount) {
  if (amount === null || !Number.isFinite(amount)) {
    return t("eqConfirmDeposit", "Confirm with our team");
  }

  return new Intl.NumberFormat(currentLanguage === "hi" ? "hi-IN" : "en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* =========================================================
   6. EQUIPMENT PAGE ELEMENTS
   ========================================================= */

const equipmentGrid = select("#equipment-grid");
const searchInput = select("#equipment-search");
const clearSearch = select("#clear-search");
const resultCount = select("#result-count");
const emptyResults = select("#empty-results");
const resetSearch = select("#reset-search");

const requestDialog = select("#request-dialog");
const requestForm = select("#request-form");
const requestTitle = select("#request-title");
const selectedEquipment = select("#selected-equipment");
const closeDialog = select("#close-dialog");
const acceptTerms = select("#accept-terms");
const submitButton = select("#submit-request");
const formStatus = select("#form-status");

const contactDialog = select("#contact-dialog");
const closeContactDialog = select("#close-contact-dialog");
const sendWhatsApp = select("#send-whatsapp");
const sendEmail = select("#send-email");

let selectedItem = null;
let preparedMessage = "";
let lastFocusedElement = null;

/* =========================================================
   7. EQUIPMENT CARDS
   ========================================================= */

function createEquipmentCard(item) {
  const article = document.createElement("article");
  article.className = "catalogue-card";

  const imageLink = document.createElement("a");
  imageLink.className = "catalogue-card-image";
  imageLink.href = `#request-${item.id}`;
  imageLink.setAttribute(
    "aria-label",
    `${t("eqCheckAvailability", "Check availability")}: ${equipmentName(item)}`,
  );

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = equipmentName(item);
  image.loading = "lazy";
  image.decoding = "async";

  image.addEventListener(
    "error",
    () => {
      imageLink.classList.add("image-missing");
    },
    { once: true },
  );

  const placeholder = document.createElement("span");
  placeholder.className = "image-placeholder-label";
  placeholder.textContent = t("eqImageLabel", "Equipment image");

  imageLink.append(image, placeholder);

  const body = document.createElement("div");
  body.className = "catalogue-card-body";

  const heading = document.createElement("h3");
  heading.textContent = equipmentName(item);

  const description = document.createElement("p");
  description.textContent = equipmentDescription(item);

  const priceLabel = document.createElement("p");
  priceLabel.className = "catalogue-card-price-label";
  priceLabel.textContent = t("eqDepositLabel", "Refundable security deposit");

  const price = document.createElement("p");
  price.className = "catalogue-card-price";
  price.textContent = formatDeposit(item.deposit);

  const note = document.createElement("small");
  note.textContent =
    item.deposit === null
      ? t("eqDepositConfirmNote", " · confirm amount")
      : t("eqDepositRefundNote", " · refundable, subject to terms");

  price.append(note);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-primary";
  button.textContent = t("eqCheckAvailability", "Check availability now");

  button.addEventListener("click", () => openRequestDialog(item));

  body.append(heading, description, priceLabel, price, button);
  article.append(imageLink, body);

  return article;
}

function renderEquipment(items) {
  if (!equipmentGrid) return;

  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    fragment.append(createEquipmentCard(item));
  });

  equipmentGrid.replaceChildren(fragment);

  const found = items.length > 0;

  equipmentGrid.hidden = !found;
  if (emptyResults) emptyResults.hidden = found;

  if (resultCount) {
    const label =
      items.length === 1
        ? t("eqOneResult", "item found")
        : t("eqManyResults", "items found");

    resultCount.textContent = found
      ? `${items.length} ${label}`
      : t("eqNoItems", "No items found");
  }
}

/* =========================================================
   8. SEARCH — ENGLISH + HINDI
   ========================================================= */

function filterEquipment(query) {
  const q = query.trim().toLocaleLowerCase();

  if (!q) return EQUIPMENT;

  return EQUIPMENT.filter((item) => {
    const values = [
      item.name,
      equipmentName(item),
      item.description,
      equipmentDescription(item),
    ];

    return values.some((value) => value.toLocaleLowerCase().includes(q));
  });
}

function initEquipmentSearch() {
  if (!searchInput) return;

  searchInput.addEventListener("input", () => {
    if (clearSearch) clearSearch.hidden = !searchInput.value;
    renderEquipment(filterEquipment(searchInput.value));
  });

  clearSearch?.addEventListener("click", () => {
    searchInput.value = "";
    clearSearch.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });

  resetSearch?.addEventListener("click", () => {
    searchInput.value = "";
    if (clearSearch) clearSearch.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });
}

/* =========================================================
   9. FORM REPLY METHOD
   ========================================================= */

function updateReplyFields() {
  if (!requestForm) return;

  const method =
    requestForm.querySelector('input[name="replyMethod"]:checked')?.value ||
    "email";

  const emailField = select("#email-field");
  const phoneField = select("#phone-field");
  const emailInput = select("#request-email");
  const phoneInput = select("#request-phone");

  if (!emailField || !phoneField || !emailInput || !phoneInput) {
    return;
  }

  const emailSelected = method === "email";

  emailField.hidden = !emailSelected;
  phoneField.hidden = emailSelected;

  emailInput.disabled = !emailSelected;
  phoneInput.disabled = emailSelected;

  emailInput.required = emailSelected;
  phoneInput.required = !emailSelected;
}

/* =========================================================
   10. FORM DATES
   ========================================================= */

function localDate(date = new Date()) {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

function addDays(dateString, days) {
  const [y, m, d] = dateString.split("-").map(Number);
  const date = new Date(y, m - 1, d);
  date.setDate(date.getDate() + days);
  return localDate(date);
}

function updateDateConstraints() {
  if (!requestForm) return;

  const start = requestForm.elements.startDate;
  const end = requestForm.elements.endDate;

  if (!start || !end) return;

  const today = localDate();

  start.min = today;
  end.min = start.value && start.value >= today ? start.value : today;

  end.max = start.value ? addDays(start.value, 29) : addDays(today, 29);

  if (end.value && (end.value < end.min || end.value > end.max)) {
    end.value = "";
  }
}

/* =========================================================
   11. FORM VALUES + VALIDATION
   ========================================================= */

function getFormValues() {
  const data = new FormData(requestForm);

  return {
    name: String(data.get("name") || "").trim(),
    replyMethod: String(data.get("replyMethod") || "email"),
    email: String(data.get("email") || "").trim(),
    phone: String(data.get("phone") || "").trim(),
    recipient: String(data.get("recipient") || "").trim(),
    startDate: String(data.get("startDate") || ""),
    endDate: String(data.get("endDate") || ""),
    address: String(data.get("address") || "").trim(),
    acceptedTerms: Boolean(acceptTerms?.checked),
  };
}

function validateRequest(values) {
  if (
    !values.name ||
    !values.recipient ||
    !values.startDate ||
    !values.endDate ||
    !values.address
  ) {
    return t("eqErrorRequired", "Please complete all required fields.");
  }

  if (values.replyMethod === "email") {
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      return t("eqErrorEmail", "Please enter a valid email address.");
    }
  } else if (values.replyMethod === "phone") {
    const digits = values.phone.replace(/\D/g, "");

    if (digits.length < 10 || digits.length > 15) {
      return t("eqErrorPhone", "Please enter a valid phone number.");
    }
  } else {
    return t("eqErrorReplyMethod", "Please select a reply method.");
  }

  const today = localDate();

  if (values.startDate < today) {
    return t("eqErrorPastDate", "The start date cannot be in the past.");
  }

  if (values.endDate < values.startDate) {
    return t(
      "eqErrorDateOrder",
      "The return date must be after the start date.",
    );
  }

  const start = new Date(`${values.startDate}T00:00:00Z`);
  const end = new Date(`${values.endDate}T00:00:00Z`);

  const days = Math.round((end - start) / 86400000) + 1;

  if (days > 30) {
    return t("eqErrorMaxPeriod", "The maximum request period is 30 days.");
  }

  if (!values.acceptedTerms) {
    return t("eqErrorTerms", "Please accept the terms and conditions.");
  }

  return "";
}

function updateSubmitButton() {
  if (!requestForm || !submitButton) return;

  updateReplyFields();
  updateDateConstraints();

  const error = validateRequest(getFormValues());

  submitButton.disabled = Boolean(error) || !requestForm.checkValidity();

  if (formStatus) formStatus.textContent = error;
}

/* =========================================================
   12. REQUEST DIALOG
   ========================================================= */

function openRequestDialog(item) {
  if (!requestDialog || !requestForm) return;

  selectedItem = item;
  lastFocusedElement = document.activeElement;

  requestForm.reset();
  updateReplyFields();

  if (selectedEquipment) {
    selectedEquipment.textContent = equipmentName(item);
  }

  if (requestTitle) {
    requestTitle.textContent = `${t("eqRequestTitle", "Request availability")}: ${equipmentName(item)}`;
  }

  if (formStatus) formStatus.textContent = "";

  updateDateConstraints();
  updateSubmitButton();

  if (!requestDialog.open) requestDialog.showModal();

  select("#request-name")?.focus();
}

function closeRequestForm() {
  if (requestDialog?.open) requestDialog.close();
  if (lastFocusedElement?.isConnected) lastFocusedElement.focus();
}

/* =========================================================
   13. REQUEST MESSAGE
   ========================================================= */

function displayDate(value) {
  const [y, m, d] = value.split("-").map(Number);

  return new Intl.DateTimeFormat(currentLanguage === "hi" ? "hi-IN" : "en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(y, m - 1, d)));
}

function buildRequestMessage(values, item) {
  const contact =
    values.replyMethod === "email"
      ? `Preferred reply: Email\nEmail: ${values.email}`
      : `Preferred reply: Phone call / SMS\nPhone: ${values.phone}`;

  return [
    "Kailash ki Karuna - Equipment Availability Request",
    "",
    `Equipment: ${item.name}`,
    `Security deposit: ${formatDeposit(item.deposit)}`,
    `Name: ${values.name}`,
    contact,
    `Equipment for: ${values.recipient}`,
    `Address: ${values.address}`,
    `Required from: ${displayDate(values.startDate)}`,
    `Return date: ${displayDate(values.endDate)}`,
    "Terms accepted: Yes",
    "",
    "Please confirm availability and applicable deposit.",
    "This is a request, not a confirmed booking.",
  ].join("\n");
}

/* =========================================================
   14. WEB3FORMS
   ========================================================= */

async function handleRequestSubmit(event) {
  event.preventDefault();

  updateSubmitButton();

  if (!requestForm.reportValidity()) return;

  const values = getFormValues();
  const error = validateRequest(values);

  if (error || !selectedItem) {
    if (formStatus) {
      formStatus.textContent =
        error || t("eqErrorSelectEquipment", "Please select equipment.");
    }
    return;
  }

  if (
    !CONTACT_CONFIG.web3formsAccessKey ||
    CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
  ) {
    formStatus.textContent = t(
      "eqErrorService",
      "Email service is not configured.",
    );
    return;
  }

  const message = buildRequestMessage(values, selectedItem);

  const payload = {
    access_key: CONTACT_CONFIG.web3formsAccessKey,
    subject: `[KKK EQUIPMENT REQUEST] ${selectedItem.id}`,
    from_name: "Kailash ki Karuna Website",

    // Do not use a phone number as an email reply-to.
    email: values.replyMethod === "email" ? values.email : "",
    replyto: values.replyMethod === "email" ? values.email : "",

    reply_method: values.replyMethod,
    reply_phone: values.replyMethod === "phone" ? values.phone : "",
    reply_email: values.replyMethod === "email" ? values.email : "",

    equipment_id: selectedItem.id,
    equipment_name: selectedItem.name,
    request_status: "REQUESTED_NOT_CONFIRMED",
    message,
    botcheck: "",
  };

  const oldText = submitButton.textContent;

  submitButton.disabled = true;
  submitButton.setAttribute("aria-busy", "true");
  submitButton.textContent = "Sending request...";
  if (formStatus) {
    formStatus.textContent = t("eqSendingStatus", "Please wait...");
  }

  try {
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json();

    if (!response.ok || !result.success) {
      throw new Error(result.message || "Submission failed.");
    }

    preparedMessage = message;

    // Restore button state
    submitButton.removeAttribute("aria-busy");
    submitButton.disabled = false;

    // Reset form
    requestForm.reset();
    updateReplyFields();
    updateSubmitButton();

    // Close request form and show success dialog
    requestDialog.close();
    contactDialog?.showModal();
  } catch (error) {
    console.error("Web3Forms error:", error);

    if (formStatus) {
      formStatus.textContent = t(
        "eqErrorSubmit",
        "Unable to send your request. Please try again.",
      );
    }
    submitButton.disabled = false;
    submitButton.removeAttribute("aria-busy");
    submitButton.textContent = oldText;
  }
}

/* =========================================================
   15. CONTACT HANDOFF
   ========================================================= */

function handleWhatsApp() {
  const number = CONTACT_CONFIG.whatsappNumber;

  if (!number || number.includes("X") || !preparedMessage) {
    window.alert("Please configure the NGO WhatsApp number.");
    return;
  }

  const url = `https://wa.me/${number}?text=${encodeURIComponent(preparedMessage)}`;

  window.open(url, "_blank", "noopener,noreferrer");
}

function handleEmail() {
  const email = CONTACT_CONFIG.emailAddress;

  if (!email || email.includes("YOUR_NGO_EMAIL")) {
    window.alert("Please configure the NGO email address.");
    return;
  }

  const subject = `Equipment request - ${
    selectedItem?.name || "Medical equipment"
  }`;

  const url = new URL(`mailto:${email}`);
  url.searchParams.set("subject", subject);
  url.searchParams.set("body", preparedMessage);

  window.location.href = url.href;
}

/* =========================================================
   16. EQUIPMENT PAGE INITIALISATION
   ========================================================= */

function initEquipmentPage() {
  if (!equipmentGrid || !requestForm || !searchInput) return;

  renderEquipment(EQUIPMENT);
  initEquipmentSearch();

  closeDialog?.addEventListener("click", closeRequestForm);

  requestDialog?.addEventListener("click", (event) => {
    if (event.target === requestDialog) closeRequestForm();
  });

  requestForm.addEventListener("input", updateSubmitButton);
  requestForm.addEventListener("change", updateSubmitButton);
  requestForm.addEventListener("submit", handleRequestSubmit);

  requestForm.querySelectorAll('input[name="replyMethod"]').forEach((radio) => {
    radio.addEventListener("change", () => {
      updateReplyFields();
      updateSubmitButton();
    });
  });

  requestForm.elements.startDate?.addEventListener(
    "change",
    updateSubmitButton,
  );

  sendWhatsApp?.addEventListener("click", handleWhatsApp);
  sendEmail?.addEventListener("click", handleEmail);

  closeContactDialog?.addEventListener("click", () => {
    contactDialog.close();
  });

  contactDialog?.addEventListener("click", (event) => {
    if (event.target === contactDialog) contactDialog.close();
  });

  updateReplyFields();
  updateDateConstraints();
  updateSubmitButton();
}

/* =========================================================
   17. LANGUAGE CHANGE: DYNAMIC EQUIPMENT
   ========================================================= */

window.addEventListener("kkk:language-changed", () => {
  if (!equipmentGrid) return;

  renderEquipment(filterEquipment(searchInput?.value || ""));

  updateReplyFields();
  updateSubmitButton();

  if (selectedItem && selectedEquipment) {
    selectedEquipment.textContent = equipmentName(selectedItem);
  }

  if (requestTitle && selectedItem) {
    requestTitle.textContent = `${t("eqRequestTitle", "Request availability")}: ${equipmentName(selectedItem)}`;
  }
});

/* =========================================================
   18. STORY GALLERY
   ========================================================= */

function initStoryGallery() {
  const grid = select("#story-grid");
  const count = select("#story-count");
  const dialog = select("#story-dialog");
  const closeButton = select("#story-dialog-close");

  if (!grid || !dialog || !closeButton) return;

  const categoryElement = select("#story-dialog-category");
  const titleElement = select("#story-dialog-title");
  const dateElement = select("#story-dialog-date");
  const mediaElement = select("#story-dialog-media");
  const bodyElement = select("#story-dialog-body");

  let dictionary = null;
  let lastFocus = null;

  function element(tag, className, text = "") {
    const node = document.createElement(tag);
    if (className) node.className = className;
    node.textContent = text;
    return node;
  }

  function openStory(story, trigger) {
    if (!dictionary) return;

    lastFocus = trigger || document.activeElement;

    categoryElement.textContent = story.category || "";
    titleElement.textContent = story.title || "";
    dateElement.textContent = story.date || "";
    dateElement.hidden = !story.date;

    mediaElement.replaceChildren();

    if (story.type === "video" && story.video) {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";

      if (story.poster) video.poster = story.poster;

      const source = document.createElement("source");
      source.src = story.video;
      source.type = "video/mp4";

      video.append(source);
      mediaElement.append(video);
    } else if (story.image) {
      const image = document.createElement("img");
      image.src = story.image;
      image.alt = story.alt || story.title || "";

      image.addEventListener(
        "error",
        () => {
          mediaElement.replaceChildren(
            element(
              "span",
              "story-card-media-fallback",
              dictionary.imageUnavailable || "Image unavailable",
            ),
          );
        },
        { once: true },
      );

      mediaElement.append(image);
    }

    bodyElement.replaceChildren();

    const paragraphs = Array.isArray(story.content)
      ? story.content
      : [story.content || ""];

    paragraphs.forEach((paragraph) => {
      if (paragraph.trim()) {
        bodyElement.append(element("p", "", paragraph));
      }
    });

    if (!dialog.open) dialog.showModal();
    closeButton.focus();
  }

  function renderStories(nextDictionary) {
    dictionary = nextDictionary;

    const stories = Array.isArray(dictionary.stories) ? dictionary.stories : [];

    grid.replaceChildren();

    if (count) {
      count.textContent = `${stories.length} ${dictionary.storiesCountLabel || "stories"}`;
    }

    if (!stories.length) {
      grid.append(
        element(
          "p",
          "story-empty",
          dictionary.storiesEmptyMessage || "No stories available.",
        ),
      );

      grid.setAttribute("aria-busy", "false");
      return;
    }

    stories.forEach((story, index) => {
      const article = element("article", "story-card");
      const mediaButton = element("button", "story-card-media-button");

      mediaButton.type = "button";

      const image = document.createElement("img");
      image.className = "story-card-media";
      image.loading = "lazy";
      image.alt = story.alt || story.title || "";
      image.src =
        story.type === "video" ? story.poster || "" : story.image || "";

      image.addEventListener(
        "error",
        () => {
          mediaButton.replaceChildren(
            element(
              "span",
              "story-card-media-fallback",
              dictionary.imageUnavailable || "Image unavailable",
            ),
          );
        },
        { once: true },
      );

      mediaButton.append(image);

      if (story.type === "video") {
        mediaButton.append(
          element(
            "span",
            "story-media-badge",
            `▶ ${dictionary.videoLabel || "Video"}`,
          ),
        );
      }

      mediaButton.addEventListener("click", () => {
        openStory(story, mediaButton);
      });

      const copy = element("div", "story-card-copy");

      copy.append(element("p", "story-card-category", story.category || ""));

      if (story.date) {
        copy.append(element("p", "story-card-date", story.date));
      }

      copy.append(
        element("h3", "", story.title || ""),
        element("p", "", story.excerpt || ""),
      );

      const readButton = element(
        "button",
        "story-read-button",
        `${dictionary.readStoryLabel || "Read story"} →`,
      );

      readButton.type = "button";
      readButton.addEventListener("click", () => {
        openStory(story, readButton);
      });

      copy.append(readButton);
      article.append(mediaButton, copy);

      article.style.setProperty("--story-index", String(index));

      grid.append(article);
    });

    grid.setAttribute("aria-busy", "false");
  }

  closeButton.addEventListener("click", () => dialog.close());

  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener("close", () => {
    mediaElement.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.querySelectorAll("source").forEach((source) => {
        source.removeAttribute("src");
      });
      video.load();
    });

    if (lastFocus?.isConnected) lastFocus.focus();
  });

  window.addEventListener("kkk:language-changed", (event) => {
    if (!event.detail?.dictionary) return;

    if (dialog.open) dialog.close();

    renderStories(event.detail.dictionary);
  });

  loadTranslations(currentLanguage)
    .then((data) => {
      if (!dictionary) renderStories(data);
    })
    .catch((error) => {
      console.error("Story gallery error:", error);
      grid.textContent = "Stories could not be loaded.";
      grid.setAttribute("aria-busy", "false");
    });
}

/* =========================================================
   19. START APPLICATION
   ========================================================= */

function initApp() {
  initInternationalization();
  initNavigation();
  selectAll("[data-carousel]").forEach(initCarousel);
  initFooter();
  initEquipmentPage();
  initStoryGallery();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, {
    once: true,
  });
} else {
  initApp();
}
