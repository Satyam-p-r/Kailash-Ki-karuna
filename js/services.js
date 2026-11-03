"use strict";

/* =========================================================
   KAILASH KI KARUNA — SERVICE REQUESTS
   Requires shared app.js to load before this file.
   ========================================================= "use strict";

/* =========================================================
   KAILASH KI KARUNA — SERVICE REQUESTS
   Requires shared app.js to load before this file.
   ========================================================= */

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  const form = $("#service-form");
  if (!form) return;

  const serviceType = $("#service-type");
  const nameInput = $("#service-name");
  const dateInput = $("#service-date");

  const pickupSection = $("#pickup-section");
  const ambulanceDropSection = $("#ambulance-drop-section");
  const deadBodyDestinationSection = $("#dead-body-destination-section");
  const serviceLocationSection = $("#service-location-section");
  const termsSection = $("#service-terms");

  const pickupAddress = $("#pickup-address");
  const ambulanceDrop = $("#ambulance-drop");
  const deadBodyDestination = $("#dead-body-destination");
  const serviceLocation = $("#service-location");

  const getLocationButton = $("#get-location");
  const locationStatus = $("#location-status");
  const locationResult = $("#location-result");
  const locationCoordinates = $("#location-coordinates");
  const locationMapLink = $("#location-map-link");
  const latitudeInput = $("#pickup-latitude");
  const longitudeInput = $("#pickup-longitude");

  const acceptTerms = $("#accept-service-terms");
  const submitButton = $("#service-submit");
  const statusMessage = $("#service-status");

  const termPanels = {
    ambulance: $("#terms-ambulance"),
    "dead-body": $("#terms-dead-body"),
    fogging: $("#terms-fogging"),
    hypo: $("#terms-hypo"),
  };

  const whatsappOption = $("#service-whatsapp-option");
  const whatsappLink = $("#service-whatsapp-link");

  let currentLatitude = "";
  let currentLongitude = "";

  const SERVICE_NAMES = {
    ambulance: "Ambulance",
    "dead-body": "Deceased-person transportation",
    fogging: "Fogging",
    hypo: "Hypo spray",
  };

  const TERMS_TEXT = {
    ambulance:
      "Ambulance request is subject to availability and confirmation. Arrival may be delayed or the service may not be possible due to vehicle availability, traffic, weather or other operational reasons. Do not delay contacting emergency services while waiting for a response.",

    "dead-body":
      "Transportation is subject to availability, route conditions and confirmation by our team. Delays or inability to complete the journey may occur due to circumstances beyond our control. The family or requester is responsible for required documents and applicable permissions.",

    fogging:
      "The fogging machine will be provided by the organization. Diesel and the required chemical must be arranged by the requester. The service is subject to availability and confirmation.",

    hypo: "The spraying machine will be provided by the organization. Diesel and the required chemical must be arranged by the requester. The service is subject to availability and confirmation.",
  };

  function setStatus(message, type = "") {
    statusMessage.textContent = message;
    statusMessage.className = `service-status-message ${type}`.trim();
  }

  function localDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function resetLocation() {
    currentLatitude = "";
    currentLongitude = "";

    latitudeInput.value = "";
    longitudeInput.value = "";

    locationResult.hidden = true;

    locationStatus.textContent =
      "Allow location access when your browser asks. You can also enter the service address manually.";
  }

  function showSection(section, visible) {
    if (!section) return;

    section.hidden = !visible;

    section.querySelectorAll("input, select, textarea").forEach((field) => {
      field.disabled = !visible;
    });
  }

  function updateServiceFields() {
    const selected = serviceType.value;

    // All four services require a location.
    const needsLiveLocation = [
      "ambulance",
      "dead-body",
      "fogging",
      "hypo",
    ].includes(selected);

    showSection(pickupSection, needsLiveLocation);

    showSection(ambulanceDropSection, selected === "ambulance");

    showSection(deadBodyDestinationSection, selected === "dead-body");

    showSection(
      serviceLocationSection,
      selected === "fogging" || selected === "hypo",
    );

    showSection(termsSection, Boolean(selected));

    Object.entries(termPanels).forEach(([key, panel]) => {
      if (panel) panel.hidden = key !== selected;
    });

    // GPS OR manual address is accepted for all services.
    pickupAddress.required = false;

    ambulanceDrop.required = selected === "ambulance";

    deadBodyDestination.required = selected === "dead-body";

    // Fogging and Hypo can use GPS instead of manual address.
    serviceLocation.required = false;

    acceptTerms.checked = false;

    resetLocation();
    setStatus("");
    updateSubmitButton();
  }

  function hasGPSLocation() {
    return Boolean(currentLatitude && currentLongitude);
  }

  function hasManualLocation() {
    const selected = serviceType.value;

    if (selected === "ambulance" || selected === "dead-body") {
      return Boolean(pickupAddress.value.trim());
    }

    if (selected === "fogging" || selected === "hypo") {
      return Boolean(serviceLocation.value.trim());
    }

    return false;
  }

  function locationIsValid() {
    return hasGPSLocation() || hasManualLocation();
  }

  function validateForm() {
    const selected = serviceType.value;

    if (!selected) return "Please select a service.";

    if (!nameInput.value.trim()) {
      return "Please enter your name.";
    }

    if (!dateInput.value) {
      return "Please select the service date.";
    }

    if (dateInput.value < localDate()) {
      return "The service date cannot be in the past.";
    }

    if (!locationIsValid()) {
      return "Please capture your current location or enter the service address.";
    }

    if (selected === "ambulance" && !ambulanceDrop.value.trim()) {
      return "Please enter the drop location.";
    }

    if (selected === "dead-body" && !deadBodyDestination.value) {
      return "Please select a destination.";
    }

    if (!acceptTerms.checked) {
      return "Please accept the service conditions.";
    }

    return "";
  }

  function updateSubmitButton() {
    const error = validateForm();

    submitButton.disabled = Boolean(error) || !form.checkValidity();
  }

  function captureCurrentLocation() {
    if (!navigator.geolocation) {
      locationStatus.textContent =
        "Location is not supported by this browser. Please enter the service address manually.";
      return;
    }

    getLocationButton.disabled = true;
    getLocationButton.textContent = "Getting your location…";

    locationStatus.textContent =
      "Please allow location access in your browser.";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLatitude = position.coords.latitude.toFixed(6);
        currentLongitude = position.coords.longitude.toFixed(6);

        latitudeInput.value = currentLatitude;
        longitudeInput.value = currentLongitude;

        locationCoordinates.textContent = `${currentLatitude}, ${currentLongitude}`;

        const mapUrl = `https://www.google.com/maps?q=${currentLatitude},${currentLongitude}`;

        locationMapLink.href = mapUrl;
        locationResult.hidden = false;

        locationStatus.textContent =
          "Your current location has been captured successfully.";

        getLocationButton.disabled = false;

        getLocationButton.innerHTML =
          '<span aria-hidden="true">⌖</span><span>Update my location</span>';

        updateSubmitButton();
      },

      (error) => {
        const messages = {
          1: "Location permission was denied. Please allow location access or enter the service address manually.",
          2: "Your location could not be determined. Please try again or enter the address manually.",
          3: "Location request timed out. Please try again or enter the address manually.",
        };

        locationStatus.textContent =
          messages[error.code] ||
          "Unable to get your location. Please enter the service address manually.";

        getLocationButton.disabled = false;

        getLocationButton.innerHTML =
          '<span aria-hidden="true">⌖</span><span>Try current location again</span>';

        updateSubmitButton();
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  }

  function getFormData() {
    const selected = serviceType.value;

    return {
      service: SERVICE_NAMES[selected],
      serviceId: selected,

      name: nameInput.value.trim(),
      date: dateInput.value,

      pickupAddress: pickupAddress.value.trim(),

      pickupLatitude: currentLatitude,
      pickupLongitude: currentLongitude,

      ambulanceDrop: ambulanceDrop.value.trim(),
      deadBodyDestination: deadBodyDestination.value,

      serviceLocation: serviceLocation.value.trim(),

      termsAccepted: acceptTerms.checked,
      termsText: TERMS_TEXT[selected] || "",
    };
  }

  function formatDate(value) {
    if (!value) return "";

    const [year, month, day] = value.split("-");

    return `${day}/${month}/${year}`;
  }

  function buildEmailMessage(data) {
    const lines = [
      "KAILASH KI KARUNA — SERVICE REQUEST",
      "-----------------------------------",
      "",
      `Service: ${data.service}`,
      `Name: ${data.name}`,
      `Service date: ${formatDate(data.date)}`,
      "",
      "SERVICE LOCATION",
    ];

    if (data.pickupLatitude && data.pickupLongitude) {
      lines.push(
        `Latitude: ${data.pickupLatitude}`,
        `Longitude: ${data.pickupLongitude}`,
        `Google Maps: https://www.google.com/maps?q=${data.pickupLatitude},${data.pickupLongitude}`,
      );
    }

    if (data.serviceId === "ambulance" || data.serviceId === "dead-body") {
      if (data.pickupAddress) {
        lines.push(`Pickup address / landmark: ${data.pickupAddress}`);
      }
    }

    if (data.serviceId === "fogging" || data.serviceId === "hypo") {
      if (data.serviceLocation) {
        lines.push(`Service address / landmark: ${data.serviceLocation}`);
      }
    }

    if (!data.pickupLatitude && !data.serviceLocation && !data.pickupAddress) {
      lines.push("Location: Not provided");
    }

    lines.push("");

    if (data.serviceId === "ambulance") {
      lines.push(`Drop location: ${data.ambulanceDrop}`);
    }

    if (data.serviceId === "dead-body") {
      lines.push(`Selected destination: ${data.deadBodyDestination}`);
    }

    lines.push(
      "",
      "SERVICE CONDITIONS ACCEPTED",
      data.termsText,
      "",
      "Requester accepted the displayed service conditions: Yes",
      "",
      "This is a service request only. It is not a confirmed booking.",
      "Please contact the requester to confirm availability and arrangements.",
    );

    return lines.join("\n");
  }

  function buildWhatsAppMessage(data) {
    const lines = [
      "Namaste Kailash ki Karuna 🙏",
      "",
      "I have submitted a service request through your website.",
      "",
      "SERVICE DETAILS",
      `Service: ${data.service}`,
      `Name: ${data.name}`,
      `Date: ${formatDate(data.date)}`,
      "",
      "LOCATION DETAILS",
    ];

    if (data.pickupLatitude && data.pickupLongitude) {
      const mapUrl = `https://www.google.com/maps?q=${data.pickupLatitude},${data.pickupLongitude}`;

      lines.push(
        `GPS Coordinates: ${data.pickupLatitude}, ${data.pickupLongitude}`,
        `Google Maps Location: ${mapUrl}`,
      );
    }

    if (data.pickupAddress) {
      lines.push(`Pickup Address: ${data.pickupAddress}`);
    }

    if (data.serviceLocation) {
      lines.push(`Service Address: ${data.serviceLocation}`);
    }

    if (data.serviceId === "ambulance") {
      lines.push("", `Drop Location: ${data.ambulanceDrop}`);
    }

    if (data.serviceId === "dead-body") {
      lines.push("", `Destination: ${data.deadBodyDestination}`);
    }

    lines.push(
      "",
      "I would like to discuss the availability and arrangements.",
      "Please contact me regarding this request.",
      "",
      "Thank you.",
    );

    return lines.join("\n");
  }

  async function submitServiceRequest(event) {
    event.preventDefault();

    const error = validateForm();

    if (error || !form.reportValidity()) {
      setStatus(error || "Please check the required fields.", "error");
      return;
    }

    if (
      typeof CONTACT_CONFIG === "undefined" ||
      !CONTACT_CONFIG.web3formsAccessKey ||
      CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      setStatus(
        "Email service is not configured. Please contact the organization directly.",
        "error",
      );
      return;
    }

    const data = getFormData();
    const message = buildEmailMessage(data);

    // Prepare WhatsApp message using the same submitted form data.
    const whatsappMessage = buildWhatsAppMessage(data);

    const payload = {
      access_key: CONTACT_CONFIG.web3formsAccessKey,
      subject: `[KKK SERVICE REQUEST] ${data.service}`,
      from_name: "Kailash ki Karuna Website",
      service_type: data.service,
      requester_name: data.name,
      service_date: data.date,
      message,
      botcheck: "",
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending request…";

    setStatus("Please wait while your request is being sent.");

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

      const whatsappNumber = String(
        CONTACT_CONFIG.whatsappNumber || "",
      ).replace(/\D/g, "");

      if (/^[1-9]\d{9,14}$/.test(whatsappNumber)) {
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        whatsappOption.hidden = false;
      } else {
        whatsappOption.hidden = true;
        console.error(
          "Invalid WhatsApp number. Check CONTACT_CONFIG.whatsappNumber.",
        );
      }

      form.reset();
      updateServiceFields();

      setStatus(
        "Your request has been sent successfully. Our team will contact you after checking availability.",
        "success",
      );

      window.scrollTo({
        top: statusMessage.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Service request error:", error);

      setStatus(
        "We could not send your request. Please try again or contact our team directly.",
        "error",
      );
    } finally {
      submitButton.textContent = "Send service request →";
      updateSubmitButton();
    }
  }

  // Set minimum service date to today.
  dateInput.min = localDate();

  serviceType.addEventListener("change", updateServiceFields);

  getLocationButton.addEventListener("click", captureCurrentLocation);

  form.addEventListener("input", updateSubmitButton);
  form.addEventListener("change", updateSubmitButton);
  form.addEventListener("submit", submitServiceRequest);

  updateServiceFields();
})();
*/

(() => {
  const $ = (selector, root = document) => root.querySelector(selector);

  const form = $("#service-form");
  if (!form) return;

  const serviceType = $("#service-type");
  const nameInput = $("#service-name");
  const dateInput = $("#service-date");

  const pickupSection = $("#pickup-section");
  const ambulanceDropSection = $("#ambulance-drop-section");
  const deadBodyDestinationSection = $("#dead-body-destination-section");
  const serviceLocationSection = $("#service-location-section");
  const termsSection = $("#service-terms");

  const pickupAddress = $("#pickup-address");
  const ambulanceDrop = $("#ambulance-drop");
  const deadBodyDestination = $("#dead-body-destination");
  const serviceLocation = $("#service-location");

  const getLocationButton = $("#get-location");
  const locationStatus = $("#location-status");
  const locationResult = $("#location-result");
  const locationCoordinates = $("#location-coordinates");
  const locationMapLink = $("#location-map-link");
  const latitudeInput = $("#pickup-latitude");
  const longitudeInput = $("#pickup-longitude");

  const acceptTerms = $("#accept-service-terms");
  const submitButton = $("#service-submit");
  const statusMessage = $("#service-status");

  const termPanels = {
    ambulance: $("#terms-ambulance"),
    "dead-body": $("#terms-dead-body"),
    fogging: $("#terms-fogging"),
    hypo: $("#terms-hypo"),
  };

  const whatsappOption = $("#service-whatsapp-option");
  const whatsappLink = $("#service-whatsapp-link");

  let currentLatitude = "";
  let currentLongitude = "";

  const SERVICE_NAMES = {
    ambulance: "Ambulance",
    "dead-body": "Deceased-person transportation",
    fogging: "Fogging",
    hypo: "Hypo spray",
  };

  const TERMS_TEXT = {
    ambulance:
      "Ambulance request is subject to availability and confirmation. Arrival may be delayed or the service may not be possible due to vehicle availability, traffic, weather or other operational reasons. Do not delay contacting emergency services while waiting for a response.",

    "dead-body":
      "Transportation is subject to availability, route conditions and confirmation by our team. Delays or inability to complete the journey may occur due to circumstances beyond our control. The family or requester is responsible for required documents and applicable permissions.",

    fogging:
      "The fogging machine will be provided by the organization. Diesel and the required chemical must be arranged by the requester. The service is subject to availability and confirmation.",

    hypo: "The spraying machine will be provided by the organization. Diesel and the required chemical must be arranged by the requester. The service is subject to availability and confirmation.",
  };

  function setStatus(message, type = "") {
    statusMessage.textContent = message;
    statusMessage.className = `service-status-message ${type}`.trim();
  }

  function localDate() {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, "0");
    const day = String(now.getDate()).padStart(2, "0");

    return `${year}-${month}-${day}`;
  }

  function resetLocation() {
    currentLatitude = "";
    currentLongitude = "";

    latitudeInput.value = "";
    longitudeInput.value = "";

    locationResult.hidden = true;

    locationStatus.textContent =
      "Allow location access when your browser asks. You can also enter the service address manually.";
  }

  function showSection(section, visible) {
    if (!section) return;

    section.hidden = !visible;

    section.querySelectorAll("input, select, textarea").forEach((field) => {
      field.disabled = !visible;
    });
  }

  function updateServiceFields() {
    const selected = serviceType.value;

    // All four services require a location.
    const needsLiveLocation = [
      "ambulance",
      "dead-body",
      "fogging",
      "hypo",
    ].includes(selected);

    showSection(pickupSection, needsLiveLocation);

    showSection(ambulanceDropSection, selected === "ambulance");

    showSection(deadBodyDestinationSection, selected === "dead-body");

    showSection(
      serviceLocationSection,
      selected === "fogging" || selected === "hypo",
    );

    showSection(termsSection, Boolean(selected));

    Object.entries(termPanels).forEach(([key, panel]) => {
      if (panel) panel.hidden = key !== selected;
    });

    // GPS OR manual address is accepted for all services.
    pickupAddress.required = false;

    ambulanceDrop.required = selected === "ambulance";

    deadBodyDestination.required = selected === "dead-body";

    // Fogging and Hypo can use GPS instead of manual address.
    serviceLocation.required = false;

    acceptTerms.checked = false;

    resetLocation();
    setStatus("");
    updateSubmitButton();
  }

  function hasGPSLocation() {
    return Boolean(currentLatitude && currentLongitude);
  }

  function hasManualLocation() {
    const selected = serviceType.value;

    if (selected === "ambulance" || selected === "dead-body") {
      return Boolean(pickupAddress.value.trim());
    }

    if (selected === "fogging" || selected === "hypo") {
      return Boolean(serviceLocation.value.trim());
    }

    return false;
  }

  function locationIsValid() {
    return hasGPSLocation() || hasManualLocation();
  }

  function validateForm() {
    const selected = serviceType.value;

    if (!selected) return "Please select a service.";

    if (!nameInput.value.trim()) {
      return "Please enter your name.";
    }

    if (!dateInput.value) {
      return "Please select the service date.";
    }

    if (dateInput.value < localDate()) {
      return "The service date cannot be in the past.";
    }

    if (!locationIsValid()) {
      return "Please capture your current location or enter the service address.";
    }

    if (selected === "ambulance" && !ambulanceDrop.value.trim()) {
      return "Please enter the drop location.";
    }

    if (selected === "dead-body" && !deadBodyDestination.value) {
      return "Please select a destination.";
    }

    if (!acceptTerms.checked) {
      return "Please accept the service conditions.";
    }

    return "";
  }

  function updateSubmitButton() {
    const error = validateForm();

    submitButton.disabled = Boolean(error) || !form.checkValidity();
  }

  function captureCurrentLocation() {
    if (!navigator.geolocation) {
      locationStatus.textContent =
        "Location is not supported by this browser. Please enter the service address manually.";
      return;
    }

    getLocationButton.disabled = true;
    getLocationButton.textContent = "Getting your location…";

    locationStatus.textContent =
      "Please allow location access in your browser.";

    navigator.geolocation.getCurrentPosition(
      (position) => {
        currentLatitude = position.coords.latitude.toFixed(6);
        currentLongitude = position.coords.longitude.toFixed(6);

        latitudeInput.value = currentLatitude;
        longitudeInput.value = currentLongitude;

        locationCoordinates.textContent = `${currentLatitude}, ${currentLongitude}`;

        const mapUrl = `https://www.google.com/maps?q=${currentLatitude},${currentLongitude}`;

        locationMapLink.href = mapUrl;
        locationResult.hidden = false;

        locationStatus.textContent =
          "Your current location has been captured successfully.";

        getLocationButton.disabled = false;

        getLocationButton.innerHTML =
          '<span aria-hidden="true">⌖</span><span>Update my location</span>';

        updateSubmitButton();
      },

      (error) => {
        const messages = {
          1: "Location permission was denied. Please allow location access or enter the service address manually.",
          2: "Your location could not be determined. Please try again or enter the address manually.",
          3: "Location request timed out. Please try again or enter the address manually.",
        };

        locationStatus.textContent =
          messages[error.code] ||
          "Unable to get your location. Please enter the service address manually.";

        getLocationButton.disabled = false;

        getLocationButton.innerHTML =
          '<span aria-hidden="true">⌖</span><span>Try current location again</span>';

        updateSubmitButton();
      },

      {
        enableHighAccuracy: true,
        timeout: 15000,
        maximumAge: 0,
      },
    );
  }

  function getFormData() {
    const selected = serviceType.value;

    return {
      service: SERVICE_NAMES[selected],
      serviceId: selected,

      name: nameInput.value.trim(),
      date: dateInput.value,

      pickupAddress: pickupAddress.value.trim(),

      pickupLatitude: currentLatitude,
      pickupLongitude: currentLongitude,

      ambulanceDrop: ambulanceDrop.value.trim(),
      deadBodyDestination: deadBodyDestination.value,

      serviceLocation: serviceLocation.value.trim(),

      termsAccepted: acceptTerms.checked,
      termsText: TERMS_TEXT[selected] || "",
    };
  }

  function formatDate(value) {
    if (!value) return "";

    const [year, month, day] = value.split("-");

    return `${day}/${month}/${year}`;
  }

  function buildEmailMessage(data) {
    const lines = [
      "KAILASH KI KARUNA — SERVICE REQUEST",
      "-----------------------------------",
      "",
      `Service: ${data.service}`,
      `Name: ${data.name}`,
      `Service date: ${formatDate(data.date)}`,
      "",
      "SERVICE LOCATION",
    ];

    if (data.pickupLatitude && data.pickupLongitude) {
      lines.push(
        `Latitude: ${data.pickupLatitude}`,
        `Longitude: ${data.pickupLongitude}`,
        `Google Maps: https://www.google.com/maps?q=${data.pickupLatitude},${data.pickupLongitude}`,
      );
    }

    if (data.serviceId === "ambulance" || data.serviceId === "dead-body") {
      if (data.pickupAddress) {
        lines.push(`Pickup address / landmark: ${data.pickupAddress}`);
      }
    }

    if (data.serviceId === "fogging" || data.serviceId === "hypo") {
      if (data.serviceLocation) {
        lines.push(`Service address / landmark: ${data.serviceLocation}`);
      }
    }

    if (!data.pickupLatitude && !data.serviceLocation && !data.pickupAddress) {
      lines.push("Location: Not provided");
    }

    lines.push("");

    if (data.serviceId === "ambulance") {
      lines.push(`Drop location: ${data.ambulanceDrop}`);
    }

    if (data.serviceId === "dead-body") {
      lines.push(`Selected destination: ${data.deadBodyDestination}`);
    }

    lines.push(
      "",
      "SERVICE CONDITIONS ACCEPTED",
      data.termsText,
      "",
      "Requester accepted the displayed service conditions: Yes",
      "",
      "This is a service request only. It is not a confirmed booking.",
      "Please contact the requester to confirm availability and arrangements.",
    );

    return lines.join("\n");
  }

  function buildWhatsAppMessage(data) {
    const lines = [
      "Namaste Kailash ki Karuna 🙏",
      "",
      "I have submitted a service request through your website.",
      "",
      "SERVICE DETAILS",
      `Service: ${data.service}`,
      `Name: ${data.name}`,
      `Date: ${formatDate(data.date)}`,
      "",
      "LOCATION DETAILS",
    ];

    if (data.pickupLatitude && data.pickupLongitude) {
      const mapUrl = `https://www.google.com/maps?q=${data.pickupLatitude},${data.pickupLongitude}`;

      lines.push(
        `GPS Coordinates: ${data.pickupLatitude}, ${data.pickupLongitude}`,
        `Google Maps Location: ${mapUrl}`,
      );
    }

    if (data.pickupAddress) {
      lines.push(`Pickup Address: ${data.pickupAddress}`);
    }

    if (data.serviceLocation) {
      lines.push(`Service Address: ${data.serviceLocation}`);
    }

    if (data.serviceId === "ambulance") {
      lines.push("", `Drop Location: ${data.ambulanceDrop}`);
    }

    if (data.serviceId === "dead-body") {
      lines.push("", `Destination: ${data.deadBodyDestination}`);
    }

    lines.push(
      "",
      "I would like to discuss the availability and arrangements.",
      "Please contact me regarding this request.",
      "",
      "Thank you.",
    );

    return lines.join("\n");
  }

  async function submitServiceRequest(event) {
    event.preventDefault();

    const error = validateForm();

    if (error || !form.reportValidity()) {
      setStatus(error || "Please check the required fields.", "error");
      return;
    }

    if (
      typeof CONTACT_CONFIG === "undefined" ||
      !CONTACT_CONFIG.web3formsAccessKey ||
      CONTACT_CONFIG.web3formsAccessKey === "YOUR_WEB3FORMS_ACCESS_KEY"
    ) {
      setStatus(
        "Email service is not configured. Please contact the organization directly.",
        "error",
      );
      return;
    }

    const data = getFormData();
    const message = buildEmailMessage(data);

    // Prepare WhatsApp message using the same submitted form data.
    const whatsappMessage = buildWhatsAppMessage(data);

    const payload = {
      access_key: CONTACT_CONFIG.web3formsAccessKey,
      subject: `[KKK SERVICE REQUEST] ${data.service}`,
      from_name: "Kailash ki Karuna Website",
      service_type: data.service,
      requester_name: data.name,
      service_date: data.date,
      message,
      botcheck: "",
    };

    submitButton.disabled = true;
    submitButton.textContent = "Sending request…";

    setStatus("Please wait while your request is being sent.");

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

      const whatsappNumber = String(
        CONTACT_CONFIG.whatsappNumber || "",
      ).replace(/\D/g, "");

      if (/^[1-9]\d{9,14}$/.test(whatsappNumber)) {
        whatsappLink.href = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;

        whatsappOption.hidden = false;
      } else {
        whatsappOption.hidden = true;
        console.error(
          "Invalid WhatsApp number. Check CONTACT_CONFIG.whatsappNumber.",
        );
      }

      form.reset();
      updateServiceFields();

      setStatus(
        "Your request has been sent successfully. Our team will contact you after checking availability.",
        "success",
      );

      window.scrollTo({
        top: statusMessage.getBoundingClientRect().top + window.scrollY - 120,
        behavior: "smooth",
      });
    } catch (error) {
      console.error("Service request error:", error);

      setStatus(
        "We could not send your request. Please try again or contact our team directly.",
        "error",
      );
    } finally {
      submitButton.textContent = "Send service request →";
      updateSubmitButton();
    }
  }

  // Set minimum service date to today.
  dateInput.min = localDate();

  serviceType.addEventListener("change", updateServiceFields);

  getLocationButton.addEventListener("click", captureCurrentLocation);

  form.addEventListener("input", updateSubmitButton);
  form.addEventListener("change", updateSubmitButton);
  form.addEventListener("submit", submitServiceRequest);

  updateServiceFields();
})();
