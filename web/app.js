const translations = {
  en: {
    title: "Universe Transit Simulator",
    subtitle: "Simulate the brightness change caused by an exoplanet transit.",
    starRadius: "Star radius (km)",
    planetRadius: "Planet radius (km)",
    simulate: "Simulate Transit",
    simulationComplete: "Simulation complete",
    minimumBrightness: "Minimum brightness",
    transitDepth: "Transit depth",
    estimatedRadius: "Estimated planet radius (km)",
    inputError: "Please enter radii greater than zero.",
    brightness: "Brightness",
    time: "Time"
  },

  zh: {
    title: "宇宙凌星模拟器",
    subtitle: "模拟系外行星凌星造成的恒星亮度变化。",
    starRadius: "恒星半径（公里 km）",
    planetRadius: "行星半径（公里 km）",
    simulate: "开始模拟",
    simulationComplete: "模拟完成",
    minimumBrightness: "最低亮度",
    transitDepth: "凌星深度",
    estimatedRadius: "推算行星半径（公里 km）",
    inputError: "请输入大于零的半径。",
    brightness: "亮度",
    time: "时间"
  }
};

let currentLanguage = "en";
let latestBrightnessValues = [];
let latestTransitDepth = 0;

const starRadiusInput = document.getElementById("star-radius");
const planetRadiusInput = document.getElementById("planet-radius");
const simulateButton = document.getElementById("simulate-button");
const languageButton = document.getElementById("language-button");
const results = document.getElementById("results");
const canvas = document.getElementById("light-curve");
const context = canvas.getContext("2d");

simulateButton.addEventListener("click", simulateTransit);

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  applyLanguage();
  simulateTransit();
});

function applyLanguage() {
  const text = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    element.textContent = text[key];
  });

  languageButton.textContent = currentLanguage === "en" ? "中文" : "English";
  document.title = text.title;
}

function simulateTransit() {
  const text = translations[currentLanguage];
  const starRadius = Number(starRadiusInput.value);
  const planetRadius = Number(planetRadiusInput.value);

  if (starRadius <= 0 || planetRadius <= 0) {
    results.textContent = text.inputError;
    return;
  }

  const maxBrightnessDrop =
    (planetRadius * planetRadius) / (starRadius * starRadius);

  const brightnessValues = [];
  let minimumBrightness = 1;

  for (let time = 0; time <= 100; time++) {
    const position = (time - 50) / 10;
    const distanceFromCenter = Math.abs(position);
    let brightness = 1;

    if (distanceFromCenter <= 3) {
      const transitAmount = Math.sqrt(
        1 - Math.pow(distanceFromCenter / 3, 2)
      );

      brightness = 1 - maxBrightnessDrop * transitAmount;
    }

    brightnessValues.push(brightness);
    minimumBrightness = Math.min(minimumBrightness, brightness);
  }

  const transitDepth = 1 - minimumBrightness;
  const estimatedPlanetRadius = starRadius * Math.sqrt(transitDepth);

  results.innerHTML = `
    <strong>${text.simulationComplete}</strong><br>
    ${text.minimumBrightness}: ${minimumBrightness.toFixed(8)}<br>
    ${text.transitDepth}: ${transitDepth.toFixed(8)}
    (${(transitDepth * 100).toFixed(4)}%)<br>
    ${text.estimatedRadius}: ${estimatedPlanetRadius.toFixed(8)}
  `;

  latestBrightnessValues = brightnessValues;
  latestTransitDepth = transitDepth;

  drawLightCurve(brightnessValues, transitDepth);
}

function drawLightCurve(values, transitDepth) {
  const text = translations[currentLanguage];
  const width = canvas.width;
  const height = canvas.height;
  const left = 70;
  const right = 30;
  const top = 35;
  const bottom = 55;

  context.clearRect(0, 0, width, height);

  const graphWidth = width - left - right;
  const graphHeight = height - top - bottom;

  const brightnessRange = Math.max(0.002, transitDepth + 0.001);
  const lowerBrightness = 1 - brightnessRange;

  context.strokeStyle = "#26384c";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(left, top);
  context.lineTo(left, height - bottom);
  context.lineTo(width - right, height - bottom);
  context.stroke();

  context.fillStyle = "#26384c";
  context.font = "16px Arial";
  context.fillText(text.brightness, 10, 22);
  context.fillText(text.time, width - 65, height - 18);
  context.fillText("1.0", 25, top + 5);
  context.fillText(lowerBrightness.toFixed(4), 10, height - bottom + 5);

  context.strokeStyle = "#1677c8";
  context.lineWidth = 3;
  context.beginPath();

  values.forEach((brightness, index) => {
    const x = left + (index / (values.length - 1)) * graphWidth;
    const y =
      top +
      ((1 - brightness) / brightnessRange) * graphHeight;

    if (index === 0) {
      context.moveTo(x, y);
    } else {
      context.lineTo(x, y);
    }
  });

  context.stroke();
}

applyLanguage();
simulateTransit();