const translations = {
  en: {
    title: "Earth–Moon Explorer",
    subtitle: "Explore how the Moon moves around Earth and why its appearance changes.",
    home: "← All modules",
    changeLanguage: "Change language",
    eyebrow: "OUR NEAREST CELESTIAL NEIGHBOR",
    exploreTitle: "One orbit, many lunar phases",
    intro: "Move through a lunar month to see the Moon's position around Earth and the changing sunlit portion we see from home.",
    orbitEyebrow: "THE MOON AROUND EARTH",
    orbitTitle: "Explore the lunar orbit",
    dayLabel: "Lunar day",
    orbitNote: "The orbit and sizes are simplified and not to scale. The Moon's phase is caused by sunlight illuminating different portions of the side facing Earth.",
    orbitSvgTitle: "Diagram of the Moon orbiting Earth",
    orbitSvgDescription: "The Sun is to the left. Earth is at the center and the Moon moves around it as the lunar day slider changes.",
    sunLabel: "Sunlight",
    earthLabel: "Earth",
    orbitDiagramNote: "Illustrative orbit — not to scale",
    seenFromEarth: "SEEN FROM EARTH",
    illuminatedLabel: "Illuminated",
    timeControl: "Move through the lunar month",
    newMoon: "New Moon",
    fullMoon: "Full Moon",
    nextNewMoon: "Next New Moon",
    sliderHelp: "Drag the slider or use the arrow keys to move in time. One complete phase cycle takes about 29.53 days.",
    factsEyebrow: "A FEW LUNAR FACTS",
    factsTitle: "Earth and Moon by the numbers",
    meanDistance: "Average distance from Earth",
    moonDiameter: "Moon's mean diameter",
    siderealMonth: "Orbit relative to distant stars",
    synodicMonth: "Phase cycle",
    phaseExplanation: "The Moon does not make its own light: sunlight illuminates half of it at all times. As it orbits Earth, we see different fractions of that sunlit half. A lunar phase is not Earth's shadow; Earth's shadow causes a lunar eclipse only when the bodies align closely enough.",
    scaleNote: "Educational diagram. Orbit and body sizes are not to scale.",
    phases: ["New Moon", "Waxing Crescent", "First Quarter", "Waxing Gibbous", "Full Moon", "Waning Gibbous", "Last Quarter", "Waning Crescent"]
  },
  zh: {
    title: "地月系统探索器",
    subtitle: "探索月球如何绕地球运行，以及月球外观为何会变化。",
    home: "← 返回主页",
    changeLanguage: "切换语言",
    eyebrow: "离我们最近的天体邻居",
    exploreTitle: "一次绕行，经历多种月相",
    intro: "沿着一个朔望月移动，观察月球绕地球的位置，以及我们从地球上看到的受光部分如何变化。",
    orbitEyebrow: "月球绕地球运行",
    orbitTitle: "探索月球轨道",
    dayLabel: "月球周期日",
    orbitNote: "轨道和天体大小均为简化示意，并非按比例绘制。月相变化是因为阳光照亮月球朝向地球一侧的不同部分。",
    orbitSvgTitle: "月球绕地球运行示意图",
    orbitSvgDescription: "太阳光从左侧照来，地球位于中心；拖动滑块可观察月球沿轨道运行。",
    sunLabel: "阳光",
    earthLabel: "地球",
    orbitDiagramNote: "轨道示意图 — 非真实比例",
    seenFromEarth: "从地球上看",
    illuminatedLabel: "受光比例",
    timeControl: "沿月相周期移动",
    newMoon: "新月",
    fullMoon: "满月",
    nextNewMoon: "下一个新月",
    sliderHelp: "拖动滑块或使用方向键来移动时间。一个完整月相周期约为 29.53 天。",
    factsEyebrow: "月球小知识",
    factsTitle: "地球与月球的数据",
    meanDistance: "与地球的平均距离",
    moonDiameter: "月球平均直径",
    siderealMonth: "相对于遥远恒星的公转周期",
    synodicMonth: "月相周期",
    phaseExplanation: "月球本身不会发光：阳光始终照亮月球的一半。月球绕地球运行时，我们看到的受光部分比例随之变化。月相不是地球的影子；只有日、地、月接近成一直线时，地球影子才会造成月食。",
    scaleNote: "教学示意图；轨道和天体大小均未按比例绘制。",
    phases: ["新月", "娥眉月（渐盈）", "上弦月", "盈凸月", "满月", "亏凸月", "下弦月", "残月（渐亏）"]
  }
};

const SYNODIC_MONTH_DAYS = 29.53;
const ORBIT_CENTER = { x: 340, y: 195 };
const ORBIT_RADII = { x: 190, y: 145 };
const ORBITING_MOON_RADIUS = 16;
const PHASE_DISC_RADIUS = 48;
const languageButton = document.getElementById("language-button");
const lunarDaySlider = document.getElementById("lunar-day-slider");
const savedLanguage = localStorage.getItem("universe-language");
let currentLanguage = translations[savedLanguage] ? savedLanguage : "en";

function applyLanguage() {
  const text = translations[currentLanguage];
  document.documentElement.lang = currentLanguage;
  document.title = text.title;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });
  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    element.setAttribute("aria-label", text[element.dataset.i18nAriaLabel]);
  });
  languageButton.textContent = currentLanguage === "en" ? "中文" : "English";
  languageButton.setAttribute("aria-label", text.changeLanguage);
  updateMoon(lunarDaySlider.value);
}

function updateMoon(dayValue) {
  const day = Number(dayValue);
  const phaseAngle = (day / SYNODIC_MONTH_DAYS) * Math.PI * 2;
  const orbitAngle = Math.PI + phaseAngle;
  const moonX = ORBIT_CENTER.x + ORBIT_RADII.x * Math.cos(orbitAngle);
  const moonY = ORBIT_CENTER.y + ORBIT_RADII.y * Math.sin(orbitAngle);
  const illuminatedFraction = (1 - Math.cos(phaseAngle)) / 2;
  const phaseIndex = Math.round((day / SYNODIC_MONTH_DAYS) * 8) % 8;
  const waxingDirection = phaseAngle <= Math.PI ? 1 : -1;
  const shadowOffset = waxingDirection * 2 * PHASE_DISC_RADIUS * illuminatedFraction;
  const orbitShadowOffset = 0.5 * ORBITING_MOON_RADIUS;

  document.getElementById("orbiting-moon").setAttribute("transform", `translate(${moonX} ${moonY})`);
  document.getElementById("orbit-moon-shadow").setAttribute("cx", String(orbitShadowOffset));
  document.getElementById("phase-shadow").setAttribute("cx", String(60 + shadowOffset));
  document.getElementById("lunar-day").textContent = day.toFixed(1);
  document.getElementById("phase-name").textContent = translations[currentLanguage].phases[phaseIndex];
  document.getElementById("illumination-percent").textContent = `${Math.round(illuminatedFraction * 100)}%`;
  lunarDaySlider.setAttribute(
    "aria-valuetext",
    `${translations[currentLanguage].dayLabel} ${day.toFixed(1)}, ${translations[currentLanguage].phases[phaseIndex]}`
  );
}

lunarDaySlider.addEventListener("input", () => updateMoon(lunarDaySlider.value));

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});

applyLanguage();




