// Replace this with the Measurement ID from your GA4 web data stream (format: G-XXXXXXXXXX).
const GA_MEASUREMENT_ID = "G-17STZG7BDK";
const GA_MEASUREMENT_ID_PATTERN = /^G-[A-Z0-9]+$/;

function trackAnalyticsEvent(eventName, parameters = {}) {
  if (typeof window.gtag === "function") {
    window.gtag("event", eventName, parameters);
  }
}

window.trackAnalyticsEvent = trackAnalyticsEvent;

if (GA_MEASUREMENT_ID_PATTERN.test(GA_MEASUREMENT_ID) && GA_MEASUREMENT_ID !== "G-REPLACE_WITH_MEASUREMENT_ID") {
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag() {
    window.dataLayer.push(arguments);
  };
  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID);

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(GA_MEASUREMENT_ID)}`;
  document.head.appendChild(script);
}

// Delegated tracking also covers dynamically generated buttons such as the planet size comparison.
document.addEventListener("click", (event) => {
  const target = event.target.closest("button, a, [role='button']");
  if (!target) return;

  const page = document.body.classList.contains("home-page")
    ? "home"
    : document.body.classList.contains("solar-page")
      ? "solar"
      : "transit";

  if (target.matches(".module-card")) {
    const module = target.getAttribute("href")?.replace(/\.html$/, "");
    if (module) trackAnalyticsEvent("module_open", { module });
  }

  if (target.matches(".planet-choice, .size-planet") || target.id === "sun-select") {
    trackAnalyticsEvent("planet_select", { planet: target.dataset.planet || "sun" });
  }

  if (target.id === "orbit-toggle") {
    trackAnalyticsEvent("animation_toggle", {
      action: target.getAttribute("aria-pressed") === "true" ? "pause" : "play"
    });
  }

  if (target.id === "simulate-button") {
    // Do not send simulation inputs; they are unnecessary for usage analytics.
    trackAnalyticsEvent("transit_simulation", { action: "run" });
  }

  if (target.id === "language-button") {
    trackAnalyticsEvent("language_change", { language: document.documentElement.lang });
  }

  if (target.matches("button, [role='button']")) {
    const buttonId = target.id || target.dataset.planet || target.classList[0] || "unnamed";
    trackAnalyticsEvent("button_click", { button_id: buttonId, page });
  }
});


