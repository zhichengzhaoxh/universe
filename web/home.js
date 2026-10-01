const translations = {
  en: {
    brand: "Universe Explorer",
    homeLabel: "Universe Explorer home",
    eyebrow: "A hands-on journey through astronomy",
    title: "Explore the universe, one idea at a time",
    subtitle: "Learn astronomy through small, interactive experiences. Choose a module to begin.",
    collection: "YOUR EXPLORATION TOOLKIT",
    modulesTitle: "Choose a module",
    moduleCount: "5 available · 3 in progress",
    available: "AVAILABLE",
    moduleOne: "MODULE 01",
    moduleTwo: "MODULE 02",
    moduleThree: "MODULE 03",
    moduleFour: "MODULE 04",
    moduleFive: "MODULE 05",
    moduleSix: "MODULE 06",
    moduleSeven: "MODULE 07",
    moduleEight: "MODULE 08",
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
    starEvolutionTitle: "Stellar Evolution Explorer",
    starEvolutionDescription: "Explore how a star's mass shapes its life cycle, from nebula to its final state.",
    gravityTitle: "Gravity & Escape Velocity",
    gravityDescription: "Compare the pull of worlds and find out how fast an object must travel to escape.",
    spectraTitle: "Spectra & Planetary Atmospheres",
    spectraDescription: "Read the patterns in starlight to explore what distant planet atmospheres may contain.",
    frontierTitle: "Silent Frontier",
    frontierDescription: "Lead a growing star-faring civilization, outwit an evolving swarm, and choose how much risk expansion is worth.",
    playPrototype: "Play prototype",
    binaryTripleTitle: "Binary & Triple Star Systems",
    binaryTripleDescription: "Watch stars dance around their shared center of mass in a gravitational n-body simulation.",
    openBinary: "Open simulator",
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
    moduleCount: "5 个可用 · 3 个制作中",
    available: "可以使用",
    moduleOne: "功能 01",
    moduleTwo: "功能 02",
    moduleThree: "功能 03",
    moduleFour: "功能 04",
    moduleFive: "功能 05",
    moduleSix: "功能 06",
    moduleSeven: "功能 07",
    moduleEight: "功能 08",
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
    starEvolutionTitle: "恒星演化探索器",
    starEvolutionDescription: "探索恒星质量如何决定它从星云诞生到最终阶段的演化历程。",
    gravityTitle: "引力与逃逸速度",
    gravityDescription: "比较不同天体的引力，并了解物体需要多快才能摆脱其引力束缚。",
    spectraTitle: "光谱与行星大气",
    spectraDescription: "从星光的光谱特征中，探索遥远行星大气可能包含哪些成分。",
    frontierTitle: "静默边境",
    frontierDescription: "带领不断扩张的星际文明，对抗持续进化的虫群，并决定扩张值得冒多大风险。",
    playPrototype: "开始试玩",
    binaryTripleTitle: "双星与三星系统",
    binaryTripleDescription: "通过多体引力模拟，观察恒星如何围绕共同质心运行。",
    openBinary: "打开模拟器",
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

