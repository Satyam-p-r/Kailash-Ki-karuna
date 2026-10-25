"use strict";

/* =========================================================
   Kailash ki Karuna
   Application entry point
   ========================================================= */
"use strict";

/* =========================================================
   Kailash ki Karuna
   Application entry point
   ========================================================= */

/**
 * All user-facing copy lives here for now.
 * Future structure:
 * locales/
 *   en.json
 *   hi.json
 */
const translations = {
  en: {
    skipLink: "Skip to content",
    navHome: "Home",
    navStory: "Our Story",
    navEquipment: "Equipment",
    navImpact: "Social Services",
    navAchievements: "Achievements",
    navContact: "Contact Us",

    heroEyebrow: "Compassion in action",
    heroTagline:
      "Medical equipment when you need it. Compassion when it matters.",
    heroDescription:
      "Access essential home-care medical equipment with a fully refundable security deposit, subject to our terms.",
    heroCta: "Get home-care equipment",
    heroSecondary: "Discover our mission",
    trustNote: "Care with dignity. Support with transparency.",

    storyEyebrow: "Who we are",
    storyTitle: "Care should never be out of reach.",
    storyDescription:
      "A little support can make recovery at home easier for an entire family.",
    storyCard1Title: "The heart behind our work",
    storyCard1Text:
      "Our mission begins with a simple belief: everyone deserves access to essential care.",
    storyCard2Title: "Support for families",
    storyCard2Text:
      "We help families access equipment they need for recovery and care at home.",
    storyCard3Title: "Service with dignity",
    storyCard3Text:
      "We aim to make support more accessible while treating every person with respect.",
    pauseCarousel: "Pause",

    equipmentEyebrow: "Home-care essentials",
    equipmentTitle: "Equipment for better recovery.",
    equipmentDescription:
      "Practical support for patients and caregivers at home.",
    viewAll: "View all equipment →",
    learnMore: "Learn more",

    wheelchairTitle: "Wheelchairs",
    wheelchairText: "Support for safe, more comfortable mobility.",
    bedTitle: "Hospital beds",
    bedText: "Home-care support for rest and recovery.",
    oxygenTitle: "Oxygen concentrators",
    oxygenText: "Equipment for prescribed oxygen support.",
    nebulizerTitle: "Nebulizers",
    nebulizerText: "Respiratory-care equipment for home use.",
    walkerTitle: "Walkers",
    walkerText: "Extra stability and support while walking.",
    mattressTitle: "Medical air mattresses",
    mattressText: "Pressure-relief support for suitable home-care needs.",

    impactEyebrow: "Why it matters",
    impactTitle: "Care that supports the whole family.",
    impactText:
      "Access to appropriate medical equipment can make caring for a loved one at home more manageable. We work to reduce barriers and offer practical support with dignity.",
    impactCta: "Connect with us",
    impact1Title: "Accessible support",
    impact1Text:
      "Essential equipment made available through our support model.",
    impact2Title: "Transparent process",
    impact2Text: "Clear information about deposits, eligibility, and returns.",
    impact3Title: "Community first",
    impact3Text: "Support shaped around the needs of patients and caregivers.",

    achievementsEyebrow: "Our commitment",
    achievementsTitle: "Every act of care counts.",
    achievementsText:
      "Our impact is built through the people we serve, the families we support, and the community that stands with us.",
    achievementsLink: "Discover our achievements →",

    footerDescription: "Compassionate support for better care at home.",
    footerExplore: "Explore",
    footerConnect: "Get in touch",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    copyright: "Kailash ki Karuna. All rights reserved.",
    footerNote: "Equipment availability and deposit terms apply.",
  },

  hi: {
    skipLink: "मुख्य सामग्री पर जाएँ",
    navHome: "होम",
    navStory: "हमारी कहानी",
    navEquipment: "चिकित्सा उपकरण",
    navImpact: "समाज सेवा",
    navAchievements: "उपलब्धियाँ",
    navContact: "संपर्क करें",

    heroEyebrow: "करुणा से सेवा",
    heroTagline: "ज़रूरत के समय चिकित्सा उपकरण, हर कदम पर संवेदनशील सहयोग।",
    heroDescription:
      "नियमों और शर्तों के अधीन, पूरी तरह वापसी योग्य सुरक्षा जमा राशि पर आवश्यक घरेलू चिकित्सा उपकरण प्राप्त करें।",
    heroCta: "घरेलू चिकित्सा उपकरण प्राप्त करें",
    heroSecondary: "हमारे उद्देश्य को जानें",
    trustNote: "सम्मान के साथ देखभाल। पारदर्शिता के साथ सहयोग।",

    storyEyebrow: "हम कौन हैं",
    storyTitle: "देखभाल हर किसी की पहुँच में होनी चाहिए।",
    storyDescription:
      "थोड़ा-सा सहयोग पूरे परिवार के लिए घर पर स्वास्थ्य लाभ को आसान बना सकता है।",
    storyCard1Title: "हमारे कार्य के पीछे की भावना",
    storyCard1Text:
      "हमारा उद्देश्य इस विश्वास से शुरू होता है कि हर व्यक्ति को आवश्यक देखभाल मिलनी चाहिए।",
    storyCard2Title: "परिवारों के लिए सहयोग",
    storyCard2Text:
      "हम परिवारों को घर पर देखभाल और स्वास्थ्य लाभ के लिए आवश्यक उपकरण उपलब्ध कराने में सहायता करते हैं।",
    storyCard3Title: "सम्मान के साथ सेवा",
    storyCard3Text:
      "हम हर व्यक्ति के सम्मान को बनाए रखते हुए सहायता को अधिक सुलभ बनाने का प्रयास करते हैं।",
    pauseCarousel: "रोकें",

    equipmentEyebrow: "घरेलू देखभाल के उपकरण",
    equipmentTitle: "बेहतर स्वास्थ्य लाभ के लिए उपकरण।",
    equipmentDescription:
      "मरीज़ों और उनकी देखभाल करने वालों के लिए उपयोगी सहयोग।",
    viewAll: "सभी उपकरण देखें →",
    learnMore: "और जानें",

    wheelchairTitle: "व्हीलचेयर",
    wheelchairText: "सुरक्षित और सुविधाजनक आवागमन में सहयोग।",
    bedTitle: "अस्पताल के बेड",
    bedText: "आराम और स्वास्थ्य लाभ के लिए घरेलू देखभाल।",
    oxygenTitle: "ऑक्सीजन कंसंट्रेटर",
    oxygenText: "चिकित्सकीय सलाह के अनुसार ऑक्सीजन सहायता।",
    nebulizerTitle: "नेब्युलाइज़र",
    nebulizerText: "घर पर श्वसन देखभाल के लिए उपकरण।",
    walkerTitle: "वॉकर",
    walkerText: "चलते समय अतिरिक्त सहारा और स्थिरता।",
    mattressTitle: "मेडिकल एयर मैट्रेस",
    mattressText: "उपयुक्त घरेलू देखभाल में दबाव कम करने के लिए सहायक उपकरण।",

    impactEyebrow: "यह क्यों महत्वपूर्ण है",
    impactTitle: "पूरे परिवार को सहारा देने वाली देखभाल।",
    impactText:
      "उपयुक्त चिकित्सा उपकरण घर पर अपने प्रियजन की देखभाल को आसान बना सकते हैं। हम बाधाओं को कम करने और सम्मान के साथ व्यावहारिक सहायता देने का प्रयास करते हैं।",
    impactCta: "हमसे संपर्क करें",
    impact1Title: "सुलभ सहायता",
    impact1Text:
      "हमारी सहायता व्यवस्था के माध्यम से आवश्यक उपकरण उपलब्ध कराने का प्रयास।",
    impact2Title: "पारदर्शी प्रक्रिया",
    impact2Text:
      "सुरक्षा जमा राशि, पात्रता और वापसी के बारे में स्पष्ट जानकारी।",
    impact3Title: "समुदाय सर्वोपरि",
    impact3Text:
      "मरीज़ों और उनकी देखभाल करने वालों की ज़रूरतों के अनुरूप सहायता।",

    achievementsEyebrow: "हमारी प्रतिबद्धता",
    achievementsTitle: "सेवा का हर प्रयास मायने रखता है।",
    achievementsText:
      "हमारा प्रभाव उन लोगों, परिवारों और समुदाय के सहयोग से बनता है जिनके साथ हम काम करते हैं।",
    achievementsLink: "हमारी उपलब्धियाँ देखें →",

    footerDescription: "घर पर बेहतर देखभाल के लिए संवेदनशील सहयोग।",
    footerExplore: "जानकारी",
    footerConnect: "संपर्क करें",
    footerPrivacy: "गोपनीयता नीति",
    footerTerms: "नियम एवं शर्तें",
    copyright: "कैलाश की करुणा। सर्वाधिकार सुरक्षित।",
    footerNote: "उपकरणों की उपलब्धता और जमा राशि की शर्तें लागू हैं।",
  },
};

/* =========================================================
   DOM utilities
   ========================================================= */

const select = (selector, root = document) => root.querySelector(selector);

const selectAll = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

/* =========================================================
   Navigation
   ========================================================= */

function initNavigation() {
  const menuButton = select(".menu-toggle");
  const navigation = select("#site-navigation");

  if (!menuButton || !navigation) return;

  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  selectAll("a", navigation).forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") === "true" &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });
}

/* ========================================
   Internationalisation (i18n)
======================================== */

const supportedLanguages = ["en", "hi"];
const translationCache = {};

let currentLanguage = "en";

/**
 * Load and cache a language's JSON dictionary.
 */
async function loadTranslations(language) {
  if (!supportedLanguages.includes(language)) {
    language = "en";
  }

  if (translationCache[language]) {
    return translationCache[language];
  }

  const response = await fetch(`locales/${language}.json`);

  if (!response.ok) {
    throw new Error(`Could not load locales/${language}.json`);
  }

  const dictionary = await response.json();
  translationCache[language] = dictionary;

  return dictionary;
}

/**
 * Apply translations to the page.
 *
 * HTML text:
 *   data-i18n="heroTitle"
 *
 * HTML attributes:
 *   data-i18n-attr="aria-label:menuLabel"
 */
async function setLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    language = "en";
  }

  try {
    const dictionary = await loadTranslations(language);

    // Translate regular text content.
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    // Translate HTML attributes.
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = element.dataset.i18nAttr.split(",");

      mappings.forEach((mapping) => {
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

    // Update document language and current state.
    document.documentElement.lang = language;
    currentLanguage = language;

    // Update the toggle to show the language the user can switch TO.
    const toggle = document.querySelector("#language-toggle");

    if (toggle) {
      const nextLanguage = language === "en" ? "hi" : "en";

      toggle.textContent = nextLanguage === "hi" ? "हिन्दी" : "English";

      toggle.setAttribute(
        "aria-label",
        nextLanguage === "hi"
          ? "Switch language to Hindi"
          : "Switch language to English",
      );

      toggle.setAttribute("aria-pressed", String(language === "hi"));
    }

    // Remember the user's choice.
    try {
      localStorage.setItem("kkk-language", language);
    } catch {
      // Translation still works if storage is unavailable.
    }

    return true;
  } catch (error) {
    console.error("Language change failed:", error);
    return false;
  }
}

/**
 * Initialise language toggle and restore saved language.
 */
function initInternationalization() {
  const toggle = document.querySelector("#language-toggle");

  let savedLanguage = "en";

  try {
    const storedLanguage = localStorage.getItem("kkk-language");

    if (supportedLanguages.includes(storedLanguage)) {
      savedLanguage = storedLanguage;
    }
  } catch {
    // Default to English if storage is unavailable.
  }

  if (toggle) {
    toggle.addEventListener("click", async () => {
      const nextLanguage = currentLanguage === "en" ? "hi" : "en";

      toggle.disabled = true;

      try {
        await setLanguage(nextLanguage);
      } finally {
        toggle.disabled = false;
      }
    });
  }

  // Apply the saved language on page load.
  setLanguage(savedLanguage);
}

/* =========================================================
   Story carousel
   ========================================================= */

function initCarousel(carousel) {
  const track = select("[data-carousel-track]", carousel);
  const previousButton = select("[data-carousel-prev]", carousel);
  const nextButton = select("[data-carousel-next]", carousel);
  const dotsContainer = select("[data-carousel-dots]", carousel);
  const pauseButton = select("[data-carousel-pause]", carousel);

  if (
    !track ||
    !previousButton ||
    !nextButton ||
    !dotsContainer ||
    !pauseButton
  ) {
    return;
  }

  const slides = selectAll(".story-card", track);

  if (slides.length < 2) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const state = {
    index: 0,
    paused: reducedMotion.matches,
    timer: null,
  };

  function getVisibleCount() {
    if (window.innerWidth <= 520) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, slides.length - getVisibleCount());
  }

  function getGap() {
    return parseFloat(getComputedStyle(track).gap) || 0;
  }

  function renderDots() {
    dotsContainer.replaceChildren();

    slides.forEach((slide, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "carousel-dot";
      button.setAttribute("aria-label", `Show story ${index + 1}`);

      button.addEventListener("click", () => {
        state.index = Math.min(index, getMaxIndex());
        render();
        restartTimer();
      });

      dotsContainer.append(button);
    });
  }

  function render() {
    state.index = Math.max(0, Math.min(state.index, getMaxIndex()));

    const firstSlide = slides[0];
    const distance = firstSlide.getBoundingClientRect().width + getGap();

    track.style.transform = `translateX(-${state.index * distance}px)`;

    selectAll(".carousel-dot", dotsContainer).forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === state.index));
    });

    previousButton.disabled = state.index === 0;
    nextButton.disabled = state.index === getMaxIndex();
  }

  function stopTimer() {
    if (state.timer !== null) {
      window.clearInterval(state.timer);
      state.timer = null;
    }
  }

  function startTimer() {
    stopTimer();

    if (state.paused || document.hidden) return;

    state.timer = window.setInterval(() => {
      if (state.index >= getMaxIndex()) {
        state.index = 0;
      } else {
        state.index += 1;
      }

      render();
    }, 5000);
  }

  function restartTimer() {
    startTimer();
  }

  function updatePauseButton() {
    pauseButton.textContent = state.paused ? "Play" : "Pause";
    pauseButton.setAttribute("aria-pressed", String(state.paused));
  }

  previousButton.addEventListener("click", () => {
    state.index = Math.max(0, state.index - 1);
    render();
    restartTimer();
  });

  nextButton.addEventListener("click", () => {
    state.index = state.index >= getMaxIndex() ? 0 : state.index + 1;

    render();
    restartTimer();
  });

  pauseButton.addEventListener("click", () => {
    state.paused = !state.paused;
    updatePauseButton();
    startTimer();
  });

  document.addEventListener("visibilitychange", startTimer);

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      state.paused = true;
      updatePauseButton();
      stopTimer();
    }
  });

  let resizeFrame = null;

  window.addEventListener("resize", () => {
    if (resizeFrame !== null) {
      window.cancelAnimationFrame(resizeFrame);
    }

    resizeFrame = window.requestAnimationFrame(() => {
      renderDots();
      render();
      resizeFrame = null;
    });
  });

  renderDots();
  render();
  updatePauseButton();
  startTimer();
}

function initCarousels() {
  selectAll("[data-carousel]").forEach(initCarousel);
}

/* =========================================================
   Footer
   ========================================================= */

function initFooter() {
  const yearElement = select("#current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* =========================================================
   Application bootstrap
   ========================================================= */

function initApp() {
  initInternationalization();
  initNavigation();
  initCarousels();
  initFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, {
    once: true,
  });
} else {
  initApp();
}

("use strict");

/* =========================================================
   Kailash ki Karuna - Equipment catalogue
   ========================================================= */

/**
 * Replace sample deposits with your approved amounts.
 *
 * Later, this array can be moved into equipment.json or
 * retrieved from your backend without changing the UI.
 */
const EQUIPMENT = [
  {
    id: "wheelchair",
    name: "Wheelchair",
    image: "images/wheelchair.jpg",
    deposit: null,
    description: "Mobility support for suitable home-care needs.",
  },
  {
    id: "Water-bed",
    name: "Water Bed",
    image: "images/water-bed.jpg",
    deposit: null,
    description: "Support for comfortable rest and recovery at home.",
  },
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator",
    image: "images/oxygen-concentrator.jpg",
    deposit: null,
    description: "Oxygen-support equipment when medically prescribed.",
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    image: "images/nebulizer.jpg",
    deposit: null,
    description: "Equipment for prescribed respiratory care.",
  },
  {
    id: "walker",
    name: "Walker",
    image: "images/walker.jpg",
    deposit: null,
    description: "Additional stability and support while walking.",
  },
  {
    id: "air-mattress",
    name: "Medical Air Mattress",
    image: "images/air-mattress.jpg",
    deposit: null,
    description: "Pressure-relief support for suitable care needs.",
  },
];

/**
 * Contact configuration.
 *
 * WhatsApp number: international digits only, including country code.
 * Example format for India: 91 followed by the 10-digit mobile number.
 *
 * Do not include +, spaces, brackets, or hyphens.
 */
const CONTACT_CONFIG = {
  web3formsAccessKey: "60733148-9061-4b9b-934f-6ab2b7700deb",
  whatsappNumber: "91XXXXXXXXXX",
};

/* =========================================================
   DOM references
   ========================================================= */

const equipmentGrid = document.querySelector("#equipment-grid");
const searchInput = document.querySelector("#equipment-search");
const clearSearchButton = document.querySelector("#clear-search");
const resultCount = document.querySelector("#result-count");
const emptyResults = document.querySelector("#empty-results");
const resetSearchButton = document.querySelector("#reset-search");

const requestDialog = document.querySelector("#request-dialog");
const requestForm = document.querySelector("#request-form");
const requestTitle = document.querySelector("#request-title");
const selectedEquipment = document.querySelector("#selected-equipment");
const closeDialogButton = document.querySelector("#close-dialog");
const acceptTermsCheckbox = document.querySelector("#accept-terms");
const submitRequestButton = document.querySelector("#submit-request");
const formStatus = document.querySelector("#form-status");

const contactDialog = document.querySelector("#contact-dialog");
const closeContactDialogButton = document.querySelector(
  "#close-contact-dialog",
);
const sendWhatsAppButton = document.querySelector("#send-whatsapp");
const sendEmailButton = document.querySelector("#send-email");

let selectedItem = null;
let preparedMessage = "";
let lastFocusedElement = null;

/* =========================================================
   Formatting
   ========================================================= */

function formatDeposit(amount) {
  if (!Number.isFinite(amount) || amount < 0) {
    return "Confirm with our team";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* =========================================================
   Render equipment cards
   ========================================================= */

function createEquipmentCard(item) {
  const article = document.createElement("article");
  article.className = "catalogue-card";

  const imageLink = document.createElement("a");
  imageLink.className = "catalogue-card-image";
  imageLink.href = `#request-${item.id}`;
  imageLink.setAttribute("aria-label", `Request ${item.name}`);

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
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
  placeholder.textContent = "Equipment image";

  imageLink.append(image, placeholder);

  const body = document.createElement("div");
  body.className = "catalogue-card-body";

  const heading = document.createElement("h3");
  heading.textContent = item.name;

  const priceLabel = document.createElement("p");
  priceLabel.className = "catalogue-card-price-label";
  priceLabel.textContent = "Refundable security deposit";

  const price = document.createElement("p");
  price.className = "catalogue-card-price";
  price.textContent = formatDeposit(item.deposit);

  const priceNote = document.createElement("small");
  priceNote.textContent =
    item.deposit === null
      ? " · confirm amount"
      : " · refundable, subject to terms";

  price.append(priceNote);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-primary";
  button.textContent = "Check availability now";

  button.addEventListener("click", () => openRequestDialog(item));

  body.append(heading, priceLabel, price, button);
  article.append(imageLink, body);

  return article;
}

function renderEquipment(items) {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    fragment.append(createEquipmentCard(item));
  });

  equipmentGrid.replaceChildren(fragment);

  const hasResults = items.length > 0;

  emptyResults.hidden = hasResults;
  equipmentGrid.hidden = !hasResults;

  resultCount.textContent = hasResults
    ? `${items.length} ${items.length === 1 ? "item" : "items"} found`
    : "No items found";
}

/* =========================================================
   Live search
   ========================================================= */

/**
 * Prefix search:
 * "w"       -> Wheelchair, Walker
 * "wheel"   -> Wheelchair
 * "oxygen"  -> Oxygen Concentrator
 * ""        -> all equipment
 *
 * Search is case-insensitive.
 */
function filterEquipment(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase("en");

  if (!normalizedQuery) {
    return EQUIPMENT;
  }

  return EQUIPMENT.filter((item) =>
    item.name.toLocaleLowerCase("en").startsWith(normalizedQuery),
  );
}

function initSearch() {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;

    clearSearchButton.hidden = query.length === 0;
    renderEquipment(filterEquipment(query));
  });

  clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchButton.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });

  resetSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchButton.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });
}

/* =========================================================
   Request form and date validation
   ========================================================= */

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  date.setDate(date.getDate() + days);

  return getLocalDateString(date);
}

function getFormValues() {
  const data = new FormData(requestForm);

  return {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    recipient: String(data.get("recipient") || "").trim(),
    startDate: String(data.get("startDate") || ""),
    endDate: String(data.get("endDate") || ""),
    address: String(data.get("address") || "").trim(),
    acceptedTerms: acceptTermsCheckbox.checked,
  };
}

function validateRequest(values) {
  const today = getLocalDateString();

  if (
    !values.name ||
    !values.email ||
    !values.recipient ||
    !values.startDate ||
    !values.endDate ||
    !values.address
  ) {
    return "Please complete all required fields.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return "Please enter a valid email address.";
  }

  if (values.startDate < today) {
    return "The requested start date cannot be in the past.";
  }

  if (values.endDate < values.startDate) {
    return "The return date must be on or after the start date.";
  }

  // Calendar-day duration, inclusive of the start date.
  const [startYear, startMonth, startDay] = values.startDate
    .split("-")
    .map(Number);

  const [endYear, endMonth, endDay] = values.endDate.split("-").map(Number);

  const start = Date.UTC(startYear, startMonth - 1, startDay);
  const end = Date.UTC(endYear, endMonth - 1, endDay);

  const durationDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;

  if (durationDays > 30) {
    return "The standard maximum request period is 30 calendar days.";
  }

  if (!values.acceptedTerms) {
    return "Please confirm that you have read the terms.";
  }

  return "";
}

function updateDateConstraints() {
  const startInput = requestForm.elements.startDate;
  const endInput = requestForm.elements.endDate;

  const today = getLocalDateString();

  startInput.min = today;

  if (!startInput.value || startInput.value < today) {
    endInput.min = today;
  } else {
    endInput.min = startInput.value;
  }

  endInput.max = startInput.value
    ? addDays(startInput.value, 29)
    : addDays(today, 29);

  if (endInput.value && endInput.value < endInput.min) {
    endInput.value = "";
  }

  if (endInput.value && endInput.value > endInput.max) {
    endInput.value = "";
  }
}

function updateSubmitButton() {
  updateDateConstraints();

  const values = getFormValues();
  const validationError = validateRequest(values);

  submitRequestButton.disabled =
    Boolean(validationError) || !requestForm.checkValidity();

  formStatus.textContent = validationError;
}

/* =========================================================
   Request dialog
   ========================================================= */

function openRequestDialog(item) {
  selectedItem = item;
  lastFocusedElement = document.activeElement;

  requestForm.reset();

  selectedEquipment.textContent = item.name;
  requestTitle.textContent = `Request ${item.name.toLowerCase()}`;

  formStatus.textContent = "";

  updateDateConstraints();
  updateSubmitButton();

  if (!requestDialog.open) {
    requestDialog.showModal();
  }

  requestForm.elements.name.focus();
}

function closeRequestDialog() {
  if (requestDialog.open) {
    requestDialog.close();
  }

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

closeDialogButton.addEventListener("click", closeRequestDialog);

requestDialog.addEventListener("click", (event) => {
  if (event.target === requestDialog) {
    closeRequestDialog();
  }
});

requestForm.addEventListener("input", updateSubmitButton);
requestForm.addEventListener("change", updateSubmitButton);

requestForm.elements.startDate.addEventListener("change", updateSubmitButton);

/* =========================================================
   Request message
   ========================================================= */

function formatDisplayDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function buildRequestMessage(values, item) {
  return [
    "Kailash ki Karuna - Equipment Availability Request",
    "",
    `Item: ${item.name}`,
    `Security deposit: ${formatDeposit(item.deposit)}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Equipment for: ${values.recipient}`,
    `Address: ${values.address}`,
    `Required from: ${formatDisplayDate(values.startDate)}`,
    `Intended return: ${formatDisplayDate(values.endDate)}`,
    "Terms and conditions: Accepted by requester",
    "",
    "Please confirm availability, the applicable security deposit,",
    "eligibility requirements, and the next steps for collection.",
    "",
    "This is an availability request, not a confirmed booking.",
  ].join("\n");
}

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  updateSubmitButton();

  if (!requestForm.reportValidity()) return;

  const values = getFormValues();
  const error = validateRequest(values);

  if (error || !selectedItem) {
    formStatus.textContent = error || "Please select an equipment item.";
    return;
  }

  if (
    !CONTACT_CONFIG.web3formsAccessKey ||
    CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
  ) {
    formStatus.textContent =
      "The email service is not configured yet. Please contact us directly.";
    return;
  }

  const message = buildRequestMessage(values, selectedItem);

  // Prepare the email submission for the NGO.

  const payload = {
    access_key: CONTACT_CONFIG.web3formsAccessKey,
    subject: `[KKK EQUIPMENT REQUEST] ${selectedItem.id}`,
    from_name: "Kailash ki Karuna Website",

    // Customer's email: lets you reply to the requester.
    email: values.email,
    replyto: values.email,

    botcheck: "",
    equipment_id: selectedItem.id,
    equipment_name: selectedItem.name,
    request_status: "REQUESTED_NOT_CONFIRMED",
    message,
  };

  const originalButtonText = submitRequestButton.textContent;

  submitRequestButton.disabled = true;
  submitRequestButton.textContent = "Submitting request...";
  formStatus.textContent = "Sending your request...";

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
      throw new Error(result.message || "The request could not be submitted.");
    }

    // Keep the message for the WhatsApp handoff.
    preparedMessage = message;

    requestDialog.close();

    // The email has been accepted by the form service.
    // WhatsApp still requires the visitor to tap Send.
    contactDialog.showModal();
  } catch (error) {
    console.error("Equipment request submission failed:", error);

    formStatus.textContent =
      "We couldn't submit your request by email. Please try again.";

    submitRequestButton.disabled = false;
    submitRequestButton.textContent = originalButtonText;
  }
});

/* =========================================================
   WhatsApp and email handoff
   ========================================================= */

/**
 * These actions open a prefilled message for the user.
 * They do not send messages automatically.
 */
sendWhatsAppButton.addEventListener("click", () => {
  if (!CONTACT_CONFIG.whatsappNumber || !preparedMessage) {
    return;
  }

  const url =
    `https://wa.me/${CONTACT_CONFIG.whatsappNumber}` +
    `?text=${encodeURIComponent(preparedMessage)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

sendEmailButton.addEventListener("click", () => {
  const email = CONTACT_CONFIG.emailAddress.trim();

  if (!email) {
    window.alert(
      "Email is not configured yet. Add the NGO's email address in js/equipment.js.",
    );
    return;
  }

  const subject = `Equipment availability request - ${
    selectedItem ? selectedItem.name : "Medical equipment"
  }`;

  const mailto = new URL(`mailto:${email}`);
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", preparedMessage);

  window.location.href = mailto.href;
});

closeContactDialogButton.addEventListener("click", () => {
  contactDialog.close();
});

contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) {
    contactDialog.close();
  }
});

/* =========================================================
   Page initialization
   ========================================================= */

function initEquipmentPage() {
  if (!equipmentGrid || !searchInput || !requestForm) return;

  renderEquipment(EQUIPMENT);
  initSearch();
  updateDateConstraints();
  updateSubmitButton();

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEquipmentPage, {
    once: true,
  });
} else {
  initEquipmentPage();
}

/* ========================================
   OUR STORY — DATA-DRIVEN STORY GALLERY
======================================== */

(() => {
  const grid = document.querySelector("#story-grid");
  const count = document.querySelector("#story-count");
  const dialog = document.querySelector("#story-dialog");
  const closeButton = document.querySelector("#story-dialog-close");

  if (!grid || !dialog || !closeButton) return;

  const categoryElement = document.querySelector("#story-dialog-category");
  const titleElement = document.querySelector("#story-dialog-title");
  const dateElement = document.querySelector("#story-dialog-date");
  const mediaElement = document.querySelector("#story-dialog-media");
  const bodyElement = document.querySelector("#story-dialog-body");

  let activeDictionary = null;
  let activeLanguage = document.documentElement.lang || "en";
  let lastFocusedElement = null;

  function text(value) {
    return typeof value === "string" ? value : "";
  }

  function makeElement(tag, className, content) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;

    return element;
  }

  function addImageFallback(container, label) {
    const fallback = makeElement(
      "span",
      "story-card-media-fallback",
      label || "Image unavailable",
    );

    container.replaceChildren(fallback);
  }

  function makeCardMedia(story) {
    const button = makeElement("button", "story-card-media-button");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `${text(story.title)} — ${text(activeDictionary.readStoryLabel)}`,
    );

    const image = document.createElement("img");
    image.className = "story-card-media";
    image.loading = "lazy";
    image.alt = text(story.alt);
    image.src = story.type === "video" ? text(story.poster) : text(story.image);

    image.addEventListener(
      "error",
      () => {
        addImageFallback(button, text(activeDictionary.imageUnavailable));
      },
      { once: true },
    );

    button.append(image);

    if (story.type === "video") {
      button.append(
        makeElement(
          "span",
          "story-media-badge",
          `▶ ${text(activeDictionary.videoLabel)}`,
        ),
      );
    }

    button.addEventListener("click", () => openStory(story, button));

    return button;
  }

  function makeCard(story, index) {
    const article = makeElement("article", "story-card");
    const mediaButton = makeCardMedia(story);
    const copy = makeElement("div", "story-card-copy");

    copy.append(makeElement("p", "story-card-category", text(story.category)));

    if (text(story.date)) {
      copy.append(makeElement("p", "story-card-date", text(story.date)));
    }

    copy.append(
      makeElement("h3", "", text(story.title)),
      makeElement("p", "", text(story.excerpt)),
    );

    const readButton = makeElement(
      "button",
      "story-read-button",
      `${text(activeDictionary.readStoryLabel)} →`,
    );

    readButton.type = "button";
    readButton.addEventListener("click", () => openStory(story, readButton));

    copy.append(readButton);
    article.append(mediaButton, copy);

    article.style.setProperty("--story-index", String(index));

    return article;
  }

  function renderStories(dictionary, language) {
    activeDictionary = dictionary;
    activeLanguage = language;

    const stories = Array.isArray(dictionary.stories) ? dictionary.stories : [];

    grid.replaceChildren();

    if (count) {
      count.textContent = `${stories.length} ${text(dictionary.storiesCountLabel)}`;
    }

    if (stories.length === 0) {
      grid.append(
        makeElement("p", "story-empty", text(dictionary.storiesEmptyMessage)),
      );
      grid.setAttribute("aria-busy", "false");
      return;
    }

    const fragment = document.createDocumentFragment();

    stories.forEach((story, index) => {
      fragment.append(makeCard(story, index));
    });

    grid.append(fragment);
    grid.setAttribute("aria-busy", "false");
  }

  function addStoryParagraphs(story) {
    bodyElement.replaceChildren();

    const paragraphs = Array.isArray(story.content)
      ? story.content
      : [text(story.content)];

    paragraphs.forEach((paragraph) => {
      if (!text(paragraph).trim()) return;

      bodyElement.append(makeElement("p", "", paragraph));
    });
  }

  function openStory(story, triggerElement) {
    if (!activeDictionary) return;

    lastFocusedElement = triggerElement || document.activeElement;

    categoryElement.textContent = text(story.category);
    titleElement.textContent = text(story.title);
    dateElement.textContent = text(story.date);
    dateElement.hidden = !text(story.date);

    mediaElement.replaceChildren();

    if (story.type === "video" && text(story.video)) {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = text(story.poster);

      const source = document.createElement("source");
      source.src = text(story.video);
      source.type = "video/mp4";

      video.append(source);
      mediaElement.append(video);
    } else if (text(story.image)) {
      const image = document.createElement("img");
      image.src = text(story.image);
      image.alt = text(story.alt);
      image.loading = "eager";

      image.addEventListener(
        "error",
        () => {
          addImageFallback(
            mediaElement,
            text(activeDictionary.imageUnavailable),
          );
        },
        { once: true },
      );

      mediaElement.append(image);
    }

    addStoryParagraphs(story);

    if (!dialog.open) {
      dialog.showModal();
    }

    closeButton.focus();
  }

  function closeStory() {
    if (dialog.open) dialog.close();
  }

  closeButton.addEventListener("click", closeStory);

  // Clicking the backdrop closes the dialog.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeStory();
    }
  });

  // Stop any story video and restore focus when the dialog closes.
  dialog.addEventListener("close", () => {
    mediaElement.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.removeAttribute("src");

      video.querySelectorAll("source").forEach((source) => {
        source.removeAttribute("src");
      });

      video.load();
    });

    if (lastFocusedElement && lastFocusedElement.isConnected) {
      lastFocusedElement.focus();
    }
  });

  // app.js dispatches this event after applying the language dictionary.
  window.addEventListener("kkk:language-changed", (event) => {
    const detail = event.detail || {};

    if (!detail.dictionary) return;

    if (dialog.open) closeStory();

    renderStories(detail.dictionary, detail.language || "en");
  });

  // Fallback in case app.js initialised before this listener was registered.
  async function initialiseStories() {
    if (activeDictionary) return;

    try {
      const language = document.documentElement.lang || "en";
      const response = await fetch(`locales/${language}.json`);

      if (!response.ok) {
        throw new Error(`Could not load locales/${language}.json`);
      }

      const dictionary = await response.json();
      renderStories(dictionary, language);
    } catch (error) {
      console.error("Could not load story data:", error);
      grid.replaceChildren(
        makeElement(
          "p",
          "story-error",
          "Stories could not be loaded. Please refresh the page.",
        ),
      );
      grid.setAttribute("aria-busy", "false");
    }
  }

  initialiseStories();
})();

/**
 * All user-facing copy lives here for now.
 * Future structure:
 * locales/
 *   en.json
 *   hi.json
 */
const translations = {
  en: {
    skipLink: "Skip to content",
    navHome: "Home",
    navStory: "Our Story",
    navEquipment: "Equipment",
    navImpact: "Social Services",
    navAchievements: "Achievements",
    navContact: "Contact Us",

    heroEyebrow: "Compassion in action",
    heroTagline:
      "Medical equipment when you need it. Compassion when it matters.",
    heroDescription:
      "Access essential home-care medical equipment with a fully refundable security deposit, subject to our terms.",
    heroCta: "Get home-care equipment",
    heroSecondary: "Discover our mission",
    trustNote: "Care with dignity. Support with transparency.",

    storyEyebrow: "Who we are",
    storyTitle: "Care should never be out of reach.",
    storyDescription:
      "A little support can make recovery at home easier for an entire family.",
    storyCard1Title: "The heart behind our work",
    storyCard1Text:
      "Our mission begins with a simple belief: everyone deserves access to essential care.",
    storyCard2Title: "Support for families",
    storyCard2Text:
      "We help families access equipment they need for recovery and care at home.",
    storyCard3Title: "Service with dignity",
    storyCard3Text:
      "We aim to make support more accessible while treating every person with respect.",
    pauseCarousel: "Pause",

    equipmentEyebrow: "Home-care essentials",
    equipmentTitle: "Equipment for better recovery.",
    equipmentDescription:
      "Practical support for patients and caregivers at home.",
    viewAll: "View all equipment →",
    learnMore: "Learn more",

    wheelchairTitle: "Wheelchairs",
    wheelchairText: "Support for safe, more comfortable mobility.",
    bedTitle: "Hospital beds",
    bedText: "Home-care support for rest and recovery.",
    oxygenTitle: "Oxygen concentrators",
    oxygenText: "Equipment for prescribed oxygen support.",
    nebulizerTitle: "Nebulizers",
    nebulizerText: "Respiratory-care equipment for home use.",
    walkerTitle: "Walkers",
    walkerText: "Extra stability and support while walking.",
    mattressTitle: "Medical air mattresses",
    mattressText: "Pressure-relief support for suitable home-care needs.",

    impactEyebrow: "Why it matters",
    impactTitle: "Care that supports the whole family.",
    impactText:
      "Access to appropriate medical equipment can make caring for a loved one at home more manageable. We work to reduce barriers and offer practical support with dignity.",
    impactCta: "Connect with us",
    impact1Title: "Accessible support",
    impact1Text:
      "Essential equipment made available through our support model.",
    impact2Title: "Transparent process",
    impact2Text: "Clear information about deposits, eligibility, and returns.",
    impact3Title: "Community first",
    impact3Text: "Support shaped around the needs of patients and caregivers.",

    achievementsEyebrow: "Our commitment",
    achievementsTitle: "Every act of care counts.",
    achievementsText:
      "Our impact is built through the people we serve, the families we support, and the community that stands with us.",
    achievementsLink: "Discover our achievements →",

    footerDescription: "Compassionate support for better care at home.",
    footerExplore: "Explore",
    footerConnect: "Get in touch",
    footerPrivacy: "Privacy Policy",
    footerTerms: "Terms & Conditions",
    copyright: "Kailash ki Karuna. All rights reserved.",
    footerNote: "Equipment availability and deposit terms apply.",
  },

  hi: {
    skipLink: "मुख्य सामग्री पर जाएँ",
    navHome: "होम",
    navStory: "हमारी कहानी",
    navEquipment: "चिकित्सा उपकरण",
    navImpact: "समाज सेवा",
    navAchievements: "उपलब्धियाँ",
    navContact: "संपर्क करें",

    heroEyebrow: "करुणा से सेवा",
    heroTagline: "ज़रूरत के समय चिकित्सा उपकरण, हर कदम पर संवेदनशील सहयोग।",
    heroDescription:
      "नियमों और शर्तों के अधीन, पूरी तरह वापसी योग्य सुरक्षा जमा राशि पर आवश्यक घरेलू चिकित्सा उपकरण प्राप्त करें।",
    heroCta: "घरेलू चिकित्सा उपकरण प्राप्त करें",
    heroSecondary: "हमारे उद्देश्य को जानें",
    trustNote: "सम्मान के साथ देखभाल। पारदर्शिता के साथ सहयोग।",

    storyEyebrow: "हम कौन हैं",
    storyTitle: "देखभाल हर किसी की पहुँच में होनी चाहिए।",
    storyDescription:
      "थोड़ा-सा सहयोग पूरे परिवार के लिए घर पर स्वास्थ्य लाभ को आसान बना सकता है।",
    storyCard1Title: "हमारे कार्य के पीछे की भावना",
    storyCard1Text:
      "हमारा उद्देश्य इस विश्वास से शुरू होता है कि हर व्यक्ति को आवश्यक देखभाल मिलनी चाहिए।",
    storyCard2Title: "परिवारों के लिए सहयोग",
    storyCard2Text:
      "हम परिवारों को घर पर देखभाल और स्वास्थ्य लाभ के लिए आवश्यक उपकरण उपलब्ध कराने में सहायता करते हैं।",
    storyCard3Title: "सम्मान के साथ सेवा",
    storyCard3Text:
      "हम हर व्यक्ति के सम्मान को बनाए रखते हुए सहायता को अधिक सुलभ बनाने का प्रयास करते हैं।",
    pauseCarousel: "रोकें",

    equipmentEyebrow: "घरेलू देखभाल के उपकरण",
    equipmentTitle: "बेहतर स्वास्थ्य लाभ के लिए उपकरण।",
    equipmentDescription:
      "मरीज़ों और उनकी देखभाल करने वालों के लिए उपयोगी सहयोग।",
    viewAll: "सभी उपकरण देखें →",
    learnMore: "और जानें",

    wheelchairTitle: "व्हीलचेयर",
    wheelchairText: "सुरक्षित और सुविधाजनक आवागमन में सहयोग।",
    bedTitle: "अस्पताल के बेड",
    bedText: "आराम और स्वास्थ्य लाभ के लिए घरेलू देखभाल।",
    oxygenTitle: "ऑक्सीजन कंसंट्रेटर",
    oxygenText: "चिकित्सकीय सलाह के अनुसार ऑक्सीजन सहायता।",
    nebulizerTitle: "नेब्युलाइज़र",
    nebulizerText: "घर पर श्वसन देखभाल के लिए उपकरण।",
    walkerTitle: "वॉकर",
    walkerText: "चलते समय अतिरिक्त सहारा और स्थिरता।",
    mattressTitle: "मेडिकल एयर मैट्रेस",
    mattressText: "उपयुक्त घरेलू देखभाल में दबाव कम करने के लिए सहायक उपकरण।",

    impactEyebrow: "यह क्यों महत्वपूर्ण है",
    impactTitle: "पूरे परिवार को सहारा देने वाली देखभाल।",
    impactText:
      "उपयुक्त चिकित्सा उपकरण घर पर अपने प्रियजन की देखभाल को आसान बना सकते हैं। हम बाधाओं को कम करने और सम्मान के साथ व्यावहारिक सहायता देने का प्रयास करते हैं।",
    impactCta: "हमसे संपर्क करें",
    impact1Title: "सुलभ सहायता",
    impact1Text:
      "हमारी सहायता व्यवस्था के माध्यम से आवश्यक उपकरण उपलब्ध कराने का प्रयास।",
    impact2Title: "पारदर्शी प्रक्रिया",
    impact2Text:
      "सुरक्षा जमा राशि, पात्रता और वापसी के बारे में स्पष्ट जानकारी।",
    impact3Title: "समुदाय सर्वोपरि",
    impact3Text:
      "मरीज़ों और उनकी देखभाल करने वालों की ज़रूरतों के अनुरूप सहायता।",

    achievementsEyebrow: "हमारी प्रतिबद्धता",
    achievementsTitle: "सेवा का हर प्रयास मायने रखता है।",
    achievementsText:
      "हमारा प्रभाव उन लोगों, परिवारों और समुदाय के सहयोग से बनता है जिनके साथ हम काम करते हैं।",
    achievementsLink: "हमारी उपलब्धियाँ देखें →",

    footerDescription: "घर पर बेहतर देखभाल के लिए संवेदनशील सहयोग।",
    footerExplore: "जानकारी",
    footerConnect: "संपर्क करें",
    footerPrivacy: "गोपनीयता नीति",
    footerTerms: "नियम एवं शर्तें",
    copyright: "कैलाश की करुणा। सर्वाधिकार सुरक्षित।",
    footerNote: "उपकरणों की उपलब्धता और जमा राशि की शर्तें लागू हैं।",
  },
};

/* =========================================================
   DOM utilities
   ========================================================= */

const select = (selector, root = document) => root.querySelector(selector);

const selectAll = (selector, root = document) =>
  Array.from(root.querySelectorAll(selector));

/* =========================================================
   Navigation
   ========================================================= */

function initNavigation() {
  const menuButton = select(".menu-toggle");
  const navigation = select("#site-navigation");

  if (!menuButton || !navigation) return;

  function setMenuOpen(isOpen) {
    menuButton.setAttribute("aria-expanded", String(isOpen));

    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu",
    );

    navigation.classList.toggle("is-open", isOpen);
    document.body.classList.toggle("menu-open", isOpen);
  }

  menuButton.addEventListener("click", () => {
    const isOpen = menuButton.getAttribute("aria-expanded") === "true";
    setMenuOpen(!isOpen);
  });

  selectAll("a", navigation).forEach((link) => {
    link.addEventListener("click", () => setMenuOpen(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      setMenuOpen(false);
      menuButton.focus();
    }
  });

  document.addEventListener("click", (event) => {
    if (
      menuButton.getAttribute("aria-expanded") === "true" &&
      !navigation.contains(event.target) &&
      !menuButton.contains(event.target)
    ) {
      setMenuOpen(false);
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 760) {
      setMenuOpen(false);
    }
  });
}

/* ========================================
   Internationalisation (i18n)
======================================== */

const supportedLanguages = ["en", "hi"];
const translationCache = {};

let currentLanguage = "en";

/**
 * Load and cache a language's JSON dictionary.
 */
async function loadTranslations(language) {
  if (!supportedLanguages.includes(language)) {
    language = "en";
  }

  if (translationCache[language]) {
    return translationCache[language];
  }

  const response = await fetch(`locales/${language}.json`);

  if (!response.ok) {
    throw new Error(`Could not load locales/${language}.json`);
  }

  const dictionary = await response.json();
  translationCache[language] = dictionary;

  return dictionary;
}

/**
 * Apply translations to the page.
 *
 * HTML text:
 *   data-i18n="heroTitle"
 *
 * HTML attributes:
 *   data-i18n-attr="aria-label:menuLabel"
 */
async function setLanguage(language) {
  if (!supportedLanguages.includes(language)) {
    language = "en";
  }

  try {
    const dictionary = await loadTranslations(language);

    // Translate regular text content.
    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;

      if (Object.prototype.hasOwnProperty.call(dictionary, key)) {
        element.textContent = dictionary[key];
      }
    });

    // Translate HTML attributes.
    document.querySelectorAll("[data-i18n-attr]").forEach((element) => {
      const mappings = element.dataset.i18nAttr.split(",");

      mappings.forEach((mapping) => {
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

    // Update document language and current state.
    document.documentElement.lang = language;
    currentLanguage = language;

    // Update the toggle to show the language the user can switch TO.
    const toggle = document.querySelector("#language-toggle");

    if (toggle) {
      const nextLanguage = language === "en" ? "hi" : "en";

      toggle.textContent = nextLanguage === "hi" ? "हिन्दी" : "English";

      toggle.setAttribute(
        "aria-label",
        nextLanguage === "hi"
          ? "Switch language to Hindi"
          : "Switch language to English",
      );

      toggle.setAttribute("aria-pressed", String(language === "hi"));
    }

    // Remember the user's choice.
    try {
      localStorage.setItem("kkk-language", language);
    } catch {
      // Translation still works if storage is unavailable.
    }

    return true;
  } catch (error) {
    console.error("Language change failed:", error);
    return false;
  }
}

/**
 * Initialise language toggle and restore saved language.
 */
function initInternationalization() {
  const toggle = document.querySelector("#language-toggle");

  let savedLanguage = "en";

  try {
    const storedLanguage = localStorage.getItem("kkk-language");

    if (supportedLanguages.includes(storedLanguage)) {
      savedLanguage = storedLanguage;
    }
  } catch {
    // Default to English if storage is unavailable.
  }

  if (toggle) {
    toggle.addEventListener("click", async () => {
      const nextLanguage = currentLanguage === "en" ? "hi" : "en";

      toggle.disabled = true;

      try {
        await setLanguage(nextLanguage);
      } finally {
        toggle.disabled = false;
      }
    });
  }

  // Apply the saved language on page load.
  setLanguage(savedLanguage);
}

/* =========================================================
   Story carousel
   ========================================================= */

function initCarousel(carousel) {
  const track = select("[data-carousel-track]", carousel);
  const previousButton = select("[data-carousel-prev]", carousel);
  const nextButton = select("[data-carousel-next]", carousel);
  const dotsContainer = select("[data-carousel-dots]", carousel);
  const pauseButton = select("[data-carousel-pause]", carousel);

  if (
    !track ||
    !previousButton ||
    !nextButton ||
    !dotsContainer ||
    !pauseButton
  ) {
    return;
  }

  const slides = selectAll(".story-card", track);

  if (slides.length < 2) return;

  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  const state = {
    index: 0,
    paused: reducedMotion.matches,
    timer: null,
  };

  function getVisibleCount() {
    if (window.innerWidth <= 520) return 1;
    if (window.innerWidth <= 960) return 2;
    return 3;
  }

  function getMaxIndex() {
    return Math.max(0, slides.length - getVisibleCount());
  }

  function getGap() {
    return parseFloat(getComputedStyle(track).gap) || 0;
  }

  function renderDots() {
    dotsContainer.replaceChildren();

    slides.forEach((slide, index) => {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "carousel-dot";
      button.setAttribute("aria-label", `Show story ${index + 1}`);

      button.addEventListener("click", () => {
        state.index = Math.min(index, getMaxIndex());
        render();
        restartTimer();
      });

      dotsContainer.append(button);
    });
  }

  function render() {
    state.index = Math.max(0, Math.min(state.index, getMaxIndex()));

    const firstSlide = slides[0];
    const distance = firstSlide.getBoundingClientRect().width + getGap();

    track.style.transform = `translateX(-${state.index * distance}px)`;

    selectAll(".carousel-dot", dotsContainer).forEach((dot, index) => {
      dot.setAttribute("aria-current", String(index === state.index));
    });

    previousButton.disabled = state.index === 0;
    nextButton.disabled = state.index === getMaxIndex();
  }

  function stopTimer() {
    if (state.timer !== null) {
      window.clearInterval(state.timer);
      state.timer = null;
    }
  }

  function startTimer() {
    stopTimer();

    if (state.paused || document.hidden) return;

    state.timer = window.setInterval(() => {
      if (state.index >= getMaxIndex()) {
        state.index = 0;
      } else {
        state.index += 1;
      }

      render();
    }, 5000);
  }

  function restartTimer() {
    startTimer();
  }

  function updatePauseButton() {
    pauseButton.textContent = state.paused ? "Play" : "Pause";
    pauseButton.setAttribute("aria-pressed", String(state.paused));
  }

  previousButton.addEventListener("click", () => {
    state.index = Math.max(0, state.index - 1);
    render();
    restartTimer();
  });

  nextButton.addEventListener("click", () => {
    state.index = state.index >= getMaxIndex() ? 0 : state.index + 1;

    render();
    restartTimer();
  });

  pauseButton.addEventListener("click", () => {
    state.paused = !state.paused;
    updatePauseButton();
    startTimer();
  });

  document.addEventListener("visibilitychange", startTimer);

  reducedMotion.addEventListener("change", (event) => {
    if (event.matches) {
      state.paused = true;
      updatePauseButton();
      stopTimer();
    }
  });

  let resizeFrame = null;

  window.addEventListener("resize", () => {
    if (resizeFrame !== null) {
      window.cancelAnimationFrame(resizeFrame);
    }

    resizeFrame = window.requestAnimationFrame(() => {
      renderDots();
      render();
      resizeFrame = null;
    });
  });

  renderDots();
  render();
  updatePauseButton();
  startTimer();
}

function initCarousels() {
  selectAll("[data-carousel]").forEach(initCarousel);
}

/* =========================================================
   Footer
   ========================================================= */

function initFooter() {
  const yearElement = select("#current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

/* =========================================================
   Application bootstrap
   ========================================================= */

function initApp() {
  initInternationalization();
  initNavigation();
  initCarousels();
  initFooter();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp, {
    once: true,
  });
} else {
  initApp();
}

("use strict");

/* =========================================================
   Kailash ki Karuna - Equipment catalogue
   ========================================================= */

/**
 * Replace sample deposits with your approved amounts.
 *
 * Later, this array can be moved into equipment.json or
 * retrieved from your backend without changing the UI.
 */
const EQUIPMENT = [
  {
    id: "wheelchair",
    name: "Wheelchair",
    image: "images/wheelchair.jpg",
    deposit: null,
    description: "Mobility support for suitable home-care needs.",
  },
  {
    id: "Water-bed",
    name: "Water Bed",
    image: "images/water-bed.jpg",
    deposit: null,
    description: "Support for comfortable rest and recovery at home.",
  },
  {
    id: "oxygen-concentrator",
    name: "Oxygen Concentrator",
    image: "images/oxygen-concentrator.jpg",
    deposit: null,
    description: "Oxygen-support equipment when medically prescribed.",
  },
  {
    id: "nebulizer",
    name: "Nebulizer",
    image: "images/nebulizer.jpg",
    deposit: null,
    description: "Equipment for prescribed respiratory care.",
  },
  {
    id: "walker",
    name: "Walker",
    image: "images/walker.jpg",
    deposit: null,
    description: "Additional stability and support while walking.",
  },
  {
    id: "air-mattress",
    name: "Medical Air Mattress",
    image: "images/air-mattress.jpg",
    deposit: null,
    description: "Pressure-relief support for suitable care needs.",
  },
];

/**
 * Contact configuration.
 *
 * WhatsApp number: international digits only, including country code.
 * Example format for India: 91 followed by the 10-digit mobile number.
 *
 * Do not include +, spaces, brackets, or hyphens.
 */
const CONTACT_CONFIG = {
  web3formsAccessKey: "60733148-9061-4b9b-934f-6ab2b7700deb",
  whatsappNumber: "91XXXXXXXXXX",
};

/* =========================================================
   DOM references
   ========================================================= */

const equipmentGrid = document.querySelector("#equipment-grid");
const searchInput = document.querySelector("#equipment-search");
const clearSearchButton = document.querySelector("#clear-search");
const resultCount = document.querySelector("#result-count");
const emptyResults = document.querySelector("#empty-results");
const resetSearchButton = document.querySelector("#reset-search");

const requestDialog = document.querySelector("#request-dialog");
const requestForm = document.querySelector("#request-form");
const requestTitle = document.querySelector("#request-title");
const selectedEquipment = document.querySelector("#selected-equipment");
const closeDialogButton = document.querySelector("#close-dialog");
const acceptTermsCheckbox = document.querySelector("#accept-terms");
const submitRequestButton = document.querySelector("#submit-request");
const formStatus = document.querySelector("#form-status");

const contactDialog = document.querySelector("#contact-dialog");
const closeContactDialogButton = document.querySelector(
  "#close-contact-dialog",
);
const sendWhatsAppButton = document.querySelector("#send-whatsapp");
const sendEmailButton = document.querySelector("#send-email");

let selectedItem = null;
let preparedMessage = "";
let lastFocusedElement = null;

/* =========================================================
   Formatting
   ========================================================= */

function formatDeposit(amount) {
  if (!Number.isFinite(amount) || amount < 0) {
    return "Confirm with our team";
  }

  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/* =========================================================
   Render equipment cards
   ========================================================= */

function createEquipmentCard(item) {
  const article = document.createElement("article");
  article.className = "catalogue-card";

  const imageLink = document.createElement("a");
  imageLink.className = "catalogue-card-image";
  imageLink.href = `#request-${item.id}`;
  imageLink.setAttribute("aria-label", `Request ${item.name}`);

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = item.name;
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
  placeholder.textContent = "Equipment image";

  imageLink.append(image, placeholder);

  const body = document.createElement("div");
  body.className = "catalogue-card-body";

  const heading = document.createElement("h3");
  heading.textContent = item.name;

  const priceLabel = document.createElement("p");
  priceLabel.className = "catalogue-card-price-label";
  priceLabel.textContent = "Refundable security deposit";

  const price = document.createElement("p");
  price.className = "catalogue-card-price";
  price.textContent = formatDeposit(item.deposit);

  const priceNote = document.createElement("small");
  priceNote.textContent =
    item.deposit === null
      ? " · confirm amount"
      : " · refundable, subject to terms";

  price.append(priceNote);

  const button = document.createElement("button");
  button.type = "button";
  button.className = "button button-primary";
  button.textContent = "Check availability now";

  button.addEventListener("click", () => openRequestDialog(item));

  body.append(heading, priceLabel, price, button);
  article.append(imageLink, body);

  return article;
}

function renderEquipment(items) {
  const fragment = document.createDocumentFragment();

  items.forEach((item) => {
    fragment.append(createEquipmentCard(item));
  });

  equipmentGrid.replaceChildren(fragment);

  const hasResults = items.length > 0;

  emptyResults.hidden = hasResults;
  equipmentGrid.hidden = !hasResults;

  resultCount.textContent = hasResults
    ? `${items.length} ${items.length === 1 ? "item" : "items"} found`
    : "No items found";
}

/* =========================================================
   Live search
   ========================================================= */

/**
 * Prefix search:
 * "w"       -> Wheelchair, Walker
 * "wheel"   -> Wheelchair
 * "oxygen"  -> Oxygen Concentrator
 * ""        -> all equipment
 *
 * Search is case-insensitive.
 */
function filterEquipment(query) {
  const normalizedQuery = query.trim().toLocaleLowerCase("en");

  if (!normalizedQuery) {
    return EQUIPMENT;
  }

  return EQUIPMENT.filter((item) =>
    item.name.toLocaleLowerCase("en").startsWith(normalizedQuery),
  );
}

function initSearch() {
  searchInput.addEventListener("input", () => {
    const query = searchInput.value;

    clearSearchButton.hidden = query.length === 0;
    renderEquipment(filterEquipment(query));
  });

  clearSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchButton.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });

  resetSearchButton.addEventListener("click", () => {
    searchInput.value = "";
    clearSearchButton.hidden = true;
    renderEquipment(EQUIPMENT);
    searchInput.focus();
  });
}

/* =========================================================
   Request form and date validation
   ========================================================= */

function getLocalDateString(date = new Date()) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function addDays(dateString, days) {
  const [year, month, day] = dateString.split("-").map(Number);
  const date = new Date(year, month - 1, day);

  date.setDate(date.getDate() + days);

  return getLocalDateString(date);
}

function getFormValues() {
  const data = new FormData(requestForm);

  return {
    name: String(data.get("name") || "").trim(),
    email: String(data.get("email") || "").trim(),
    recipient: String(data.get("recipient") || "").trim(),
    startDate: String(data.get("startDate") || ""),
    endDate: String(data.get("endDate") || ""),
    address: String(data.get("address") || "").trim(),
    acceptedTerms: acceptTermsCheckbox.checked,
  };
}

function validateRequest(values) {
  const today = getLocalDateString();

  if (
    !values.name ||
    !values.email ||
    !values.recipient ||
    !values.startDate ||
    !values.endDate ||
    !values.address
  ) {
    return "Please complete all required fields.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
    return "Please enter a valid email address.";
  }

  if (values.startDate < today) {
    return "The requested start date cannot be in the past.";
  }

  if (values.endDate < values.startDate) {
    return "The return date must be on or after the start date.";
  }

  // Calendar-day duration, inclusive of the start date.
  const [startYear, startMonth, startDay] = values.startDate
    .split("-")
    .map(Number);

  const [endYear, endMonth, endDay] = values.endDate.split("-").map(Number);

  const start = Date.UTC(startYear, startMonth - 1, startDay);
  const end = Date.UTC(endYear, endMonth - 1, endDay);

  const durationDays = Math.floor((end - start) / (24 * 60 * 60 * 1000)) + 1;

  if (durationDays > 30) {
    return "The standard maximum request period is 30 calendar days.";
  }

  if (!values.acceptedTerms) {
    return "Please confirm that you have read the terms.";
  }

  return "";
}

function updateDateConstraints() {
  const startInput = requestForm.elements.startDate;
  const endInput = requestForm.elements.endDate;

  const today = getLocalDateString();

  startInput.min = today;

  if (!startInput.value || startInput.value < today) {
    endInput.min = today;
  } else {
    endInput.min = startInput.value;
  }

  endInput.max = startInput.value
    ? addDays(startInput.value, 29)
    : addDays(today, 29);

  if (endInput.value && endInput.value < endInput.min) {
    endInput.value = "";
  }

  if (endInput.value && endInput.value > endInput.max) {
    endInput.value = "";
  }
}

function updateSubmitButton() {
  updateDateConstraints();

  const values = getFormValues();
  const validationError = validateRequest(values);

  submitRequestButton.disabled =
    Boolean(validationError) || !requestForm.checkValidity();

  formStatus.textContent = validationError;
}

/* =========================================================
   Request dialog
   ========================================================= */

function openRequestDialog(item) {
  selectedItem = item;
  lastFocusedElement = document.activeElement;

  requestForm.reset();

  selectedEquipment.textContent = item.name;
  requestTitle.textContent = `Request ${item.name.toLowerCase()}`;

  formStatus.textContent = "";

  updateDateConstraints();
  updateSubmitButton();

  if (!requestDialog.open) {
    requestDialog.showModal();
  }

  requestForm.elements.name.focus();
}

function closeRequestDialog() {
  if (requestDialog.open) {
    requestDialog.close();
  }

  if (lastFocusedElement instanceof HTMLElement) {
    lastFocusedElement.focus();
  }
}

closeDialogButton.addEventListener("click", closeRequestDialog);

requestDialog.addEventListener("click", (event) => {
  if (event.target === requestDialog) {
    closeRequestDialog();
  }
});

requestForm.addEventListener("input", updateSubmitButton);
requestForm.addEventListener("change", updateSubmitButton);

requestForm.elements.startDate.addEventListener("change", updateSubmitButton);

/* =========================================================
   Request message
   ========================================================= */

function formatDisplayDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);

  return new Intl.DateTimeFormat("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(Date.UTC(year, month - 1, day)));
}

function buildRequestMessage(values, item) {
  return [
    "Kailash ki Karuna - Equipment Availability Request",
    "",
    `Item: ${item.name}`,
    `Security deposit: ${formatDeposit(item.deposit)}`,
    `Name: ${values.name}`,
    `Email: ${values.email}`,
    `Equipment for: ${values.recipient}`,
    `Address: ${values.address}`,
    `Required from: ${formatDisplayDate(values.startDate)}`,
    `Intended return: ${formatDisplayDate(values.endDate)}`,
    "Terms and conditions: Accepted by requester",
    "",
    "Please confirm availability, the applicable security deposit,",
    "eligibility requirements, and the next steps for collection.",
    "",
    "This is an availability request, not a confirmed booking.",
  ].join("\n");
}

requestForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  updateSubmitButton();

  if (!requestForm.reportValidity()) return;

  const values = getFormValues();
  const error = validateRequest(values);

  if (error || !selectedItem) {
    formStatus.textContent = error || "Please select an equipment item.";
    return;
  }

  if (
    !CONTACT_CONFIG.web3formsAccessKey ||
    CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
  ) {
    formStatus.textContent =
      "The email service is not configured yet. Please contact us directly.";
    return;
  }

  const message = buildRequestMessage(values, selectedItem);

  // Prepare the email submission for the NGO.

  const payload = {
    access_key: CONTACT_CONFIG.web3formsAccessKey,
    subject: `[KKK EQUIPMENT REQUEST] ${selectedItem.id}`,
    from_name: "Kailash ki Karuna Website",

    // Customer's email: lets you reply to the requester.
    email: values.email,
    replyto: values.email,

    botcheck: "",
    equipment_id: selectedItem.id,
    equipment_name: selectedItem.name,
    request_status: "REQUESTED_NOT_CONFIRMED",
    message,
  };

  const originalButtonText = submitRequestButton.textContent;

  submitRequestButton.disabled = true;
  submitRequestButton.textContent = "Submitting request...";
  formStatus.textContent = "Sending your request...";

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
      throw new Error(result.message || "The request could not be submitted.");
    }

    // Keep the message for the WhatsApp handoff.
    preparedMessage = message;

    requestDialog.close();

    // The email has been accepted by the form service.
    // WhatsApp still requires the visitor to tap Send.
    contactDialog.showModal();
  } catch (error) {
    console.error("Equipment request submission failed:", error);

    formStatus.textContent =
      "We couldn't submit your request by email. Please try again.";

    submitRequestButton.disabled = false;
    submitRequestButton.textContent = originalButtonText;
  }
});

/* =========================================================
   WhatsApp and email handoff
   ========================================================= */

/**
 * These actions open a prefilled message for the user.
 * They do not send messages automatically.
 */
sendWhatsAppButton.addEventListener("click", () => {
  if (!CONTACT_CONFIG.whatsappNumber || !preparedMessage) {
    return;
  }

  const url =
    `https://wa.me/${CONTACT_CONFIG.whatsappNumber}` +
    `?text=${encodeURIComponent(preparedMessage)}`;

  window.open(url, "_blank", "noopener,noreferrer");
});

sendEmailButton.addEventListener("click", () => {
  const email = CONTACT_CONFIG.emailAddress.trim();

  if (!email) {
    window.alert(
      "Email is not configured yet. Add the NGO's email address in js/equipment.js.",
    );
    return;
  }

  const subject = `Equipment availability request - ${
    selectedItem ? selectedItem.name : "Medical equipment"
  }`;

  const mailto = new URL(`mailto:${email}`);
  mailto.searchParams.set("subject", subject);
  mailto.searchParams.set("body", preparedMessage);

  window.location.href = mailto.href;
});

closeContactDialogButton.addEventListener("click", () => {
  contactDialog.close();
});

contactDialog.addEventListener("click", (event) => {
  if (event.target === contactDialog) {
    contactDialog.close();
  }
});

/* =========================================================
   Page initialization
   ========================================================= */

function initEquipmentPage() {
  if (!equipmentGrid || !searchInput || !requestForm) return;

  renderEquipment(EQUIPMENT);
  initSearch();
  updateDateConstraints();
  updateSubmitButton();

  const yearElement = document.querySelector("#current-year");

  if (yearElement) {
    yearElement.textContent = String(new Date().getFullYear());
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initEquipmentPage, {
    once: true,
  });
} else {
  initEquipmentPage();
}

/* ========================================
   OUR STORY — DATA-DRIVEN STORY GALLERY
======================================== */

(() => {
  const grid = document.querySelector("#story-grid");
  const count = document.querySelector("#story-count");
  const dialog = document.querySelector("#story-dialog");
  const closeButton = document.querySelector("#story-dialog-close");

  if (!grid || !dialog || !closeButton) return;

  const categoryElement = document.querySelector("#story-dialog-category");
  const titleElement = document.querySelector("#story-dialog-title");
  const dateElement = document.querySelector("#story-dialog-date");
  const mediaElement = document.querySelector("#story-dialog-media");
  const bodyElement = document.querySelector("#story-dialog-body");

  let activeDictionary = null;
  let activeLanguage = document.documentElement.lang || "en";
  let lastFocusedElement = null;

  function text(value) {
    return typeof value === "string" ? value : "";
  }

  function makeElement(tag, className, content) {
    const element = document.createElement(tag);

    if (className) element.className = className;
    if (content !== undefined) element.textContent = content;

    return element;
  }

  function addImageFallback(container, label) {
    const fallback = makeElement(
      "span",
      "story-card-media-fallback",
      label || "Image unavailable",
    );

    container.replaceChildren(fallback);
  }

  function makeCardMedia(story) {
    const button = makeElement("button", "story-card-media-button");
    button.type = "button";
    button.setAttribute(
      "aria-label",
      `${text(story.title)} — ${text(activeDictionary.readStoryLabel)}`,
    );

    const image = document.createElement("img");
    image.className = "story-card-media";
    image.loading = "lazy";
    image.alt = text(story.alt);
    image.src = story.type === "video" ? text(story.poster) : text(story.image);

    image.addEventListener(
      "error",
      () => {
        addImageFallback(button, text(activeDictionary.imageUnavailable));
      },
      { once: true },
    );

    button.append(image);

    if (story.type === "video") {
      button.append(
        makeElement(
          "span",
          "story-media-badge",
          `▶ ${text(activeDictionary.videoLabel)}`,
        ),
      );
    }

    button.addEventListener("click", () => openStory(story, button));

    return button;
  }

  function makeCard(story, index) {
    const article = makeElement("article", "story-card");
    const mediaButton = makeCardMedia(story);
    const copy = makeElement("div", "story-card-copy");

    copy.append(makeElement("p", "story-card-category", text(story.category)));

    if (text(story.date)) {
      copy.append(makeElement("p", "story-card-date", text(story.date)));
    }

    copy.append(
      makeElement("h3", "", text(story.title)),
      makeElement("p", "", text(story.excerpt)),
    );

    const readButton = makeElement(
      "button",
      "story-read-button",
      `${text(activeDictionary.readStoryLabel)} →`,
    );

    readButton.type = "button";
    readButton.addEventListener("click", () => openStory(story, readButton));

    copy.append(readButton);
    article.append(mediaButton, copy);

    article.style.setProperty("--story-index", String(index));

    return article;
  }

  function renderStories(dictionary, language) {
    activeDictionary = dictionary;
    activeLanguage = language;

    const stories = Array.isArray(dictionary.stories) ? dictionary.stories : [];

    grid.replaceChildren();

    if (count) {
      count.textContent = `${stories.length} ${text(dictionary.storiesCountLabel)}`;
    }

    if (stories.length === 0) {
      grid.append(
        makeElement("p", "story-empty", text(dictionary.storiesEmptyMessage)),
      );
      grid.setAttribute("aria-busy", "false");
      return;
    }

    const fragment = document.createDocumentFragment();

    stories.forEach((story, index) => {
      fragment.append(makeCard(story, index));
    });

    grid.append(fragment);
    grid.setAttribute("aria-busy", "false");
  }

  function addStoryParagraphs(story) {
    bodyElement.replaceChildren();

    const paragraphs = Array.isArray(story.content)
      ? story.content
      : [text(story.content)];

    paragraphs.forEach((paragraph) => {
      if (!text(paragraph).trim()) return;

      bodyElement.append(makeElement("p", "", paragraph));
    });
  }

  function openStory(story, triggerElement) {
    if (!activeDictionary) return;

    lastFocusedElement = triggerElement || document.activeElement;

    categoryElement.textContent = text(story.category);
    titleElement.textContent = text(story.title);
    dateElement.textContent = text(story.date);
    dateElement.hidden = !text(story.date);

    mediaElement.replaceChildren();

    if (story.type === "video" && text(story.video)) {
      const video = document.createElement("video");
      video.controls = true;
      video.playsInline = true;
      video.preload = "metadata";
      video.poster = text(story.poster);

      const source = document.createElement("source");
      source.src = text(story.video);
      source.type = "video/mp4";

      video.append(source);
      mediaElement.append(video);
    } else if (text(story.image)) {
      const image = document.createElement("img");
      image.src = text(story.image);
      image.alt = text(story.alt);
      image.loading = "eager";

      image.addEventListener(
        "error",
        () => {
          addImageFallback(
            mediaElement,
            text(activeDictionary.imageUnavailable),
          );
        },
        { once: true },
      );

      mediaElement.append(image);
    }

    addStoryParagraphs(story);

    if (!dialog.open) {
      dialog.showModal();
    }

    closeButton.focus();
  }

  function closeStory() {
    if (dialog.open) dialog.close();
  }

  closeButton.addEventListener("click", closeStory);

  // Clicking the backdrop closes the dialog.
  dialog.addEventListener("click", (event) => {
    if (event.target === dialog) {
      closeStory();
    }
  });

  // Stop any story video and restore focus when the dialog closes.
  dialog.addEventListener("close", () => {
    mediaElement.querySelectorAll("video").forEach((video) => {
      video.pause();
      video.removeAttribute("src");

      video.querySelectorAll("source").forEach((source) => {
        source.removeAttribute("src");
      });

      video.load();
    });

    if (lastFocusedElement && lastFocusedElement.isConnected) {
      lastFocusedElement.focus();
    }
  });

  // app.js dispatches this event after applying the language dictionary.
  window.addEventListener("kkk:language-changed", (event) => {
    const detail = event.detail || {};

    if (!detail.dictionary) return;

    if (dialog.open) closeStory();

    renderStories(detail.dictionary, detail.language || "en");
  });

  // Fallback in case app.js initialised before this listener was registered.
  async function initialiseStories() {
    if (activeDictionary) return;

    try {
      const language = document.documentElement.lang || "en";
      const response = await fetch(`locales/${language}.json`);

      if (!response.ok) {
        throw new Error(`Could not load locales/${language}.json`);
      }

      const dictionary = await response.json();
      renderStories(dictionary, language);
    } catch (error) {
      console.error("Could not load story data:", error);
      grid.replaceChildren(
        makeElement(
          "p",
          "story-error",
          "Stories could not be loaded. Please refresh the page.",
        ),
      );
      grid.setAttribute("aria-busy", "false");
    }
  }

  initialiseStories();
})();
