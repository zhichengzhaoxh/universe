const translations = {
  en: {
    brand: "Universe Explorer",
    homeLabel: "Universe Explorer home",
    eyebrow: "A hands-on journey through astronomy",
    title: "Explore the universe, one idea at a time",
    subtitle: "Learn astronomy through small, interactive experiences. Choose a module to begin.",
    collection: "YOUR EXPLORATION TOOLKIT",
    modulesTitle: "Choose a module",
    moduleCount: "3 available · 0 in progress",
    available: "AVAILABLE",
    moduleOne: "MODULE 01",
    moduleTwo: "MODULE 02",
    moduleThree: "MODULE 03",
    moonTitle: "Earth–Moon Explorer",
    moonDescription: "Explore the Moon's orbit, changing phases, and illuminated surface.",
    openExplorer: "Open explorer",
    transitTitle: "Exoplanet Transit Simulator",
    transitDescription: "See how a planet passing in front of a star creates a tiny dip in its brightness.",
    openModule: "Open simulator",
    openSolar: "Open explorer",
    inProgress: "IN PROGRESS",
    solarTitle: "Solar System Explorer",
    solarDescription: "Explore the planets and compare their sizes, distances from the Sun, and orbital periods.",
    comingSoon: "Coming soon",
    footer: "Curiosity is the beginning of every journey.",
    homeImageCredit: "Background image: NASA, ESA, and the Hubble XDF team.",
    changeLanguage: "Change language"
  },
  zh: {
    brand: "宇宙探索",
    homeLabel: "宇宙探索主页",
    eyebrow: "开启一段亲手探索天文学的旅程",
    title: "一次探索一个宇宙奥秘",
    subtitle: "通过简单的互动体验学习天文学。选择一个功能，开始探索。",
    collection: "你的宇宙探索工具箱",
    modulesTitle: "选择一个功能",
    moduleCount: "3 个可用 · 0 个制作中",
    available: "可以使用",
    moduleOne: "功能 01",
    moduleTwo: "功能 02",
    moduleThree: "功能 03",
    moonTitle: "地月系统探索器",
    moonDescription: "探索月球轨道、月相变化，以及月球受光区域。",
    openExplorer: "打开探索器",
    transitTitle: "系外行星凌星模拟器",
    transitDescription: "看看行星经过恒星前方时，恒星亮度如何产生微小变化。",
    openModule: "打开模拟器",
    openSolar: "打开探索器",
    inProgress: "制作中",
    solarTitle: "太阳系探索器",
    solarDescription: "认识太阳系行星，并比较它们的大小、日距和公转周期。",
    comingSoon: "即将推出",
    footer: "每一段探索，都始于好奇。",
    homeImageCredit: "背景图片：NASA、ESA 及 Hubble XDF 团队。",
    changeLanguage: "切换语言"
  }
};

const languageButton = document.getElementById("language-button");
const savedLanguage = localStorage.getItem("universe-language");
let currentLanguage = translations[savedLanguage] ? savedLanguage : "en";

function applyLanguage() {
  const text = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = text.brand;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });

  languageButton.textContent = currentLanguage === "en" ? "中文" : "English";
  languageButton.setAttribute("aria-label", text.changeLanguage);
  document.getElementById("home-brand").setAttribute("aria-label", text.homeLabel);
}

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});

applyLanguage();

