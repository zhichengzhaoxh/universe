const translations = {
  en: {
    title: "Universe Transit Simulator",
    subtitle: "Simulate the brightness change caused by an exoplanet transit.",
    starRadius: "Star radius (km)",
    planetRadius: "Planet radius (km)",
    noiseLevel: "Observation noise",
    observationCount: "Number of observations",
    observationError: "Please enter between 2 and 1000 observations",
    simulate: "Simulate Transit",
    simulationComplete: "Simulation complete",
    minimumBrightness: "Minimum brightness",
    transitDepth: "Transit depth",
    estimatedRadius: "Estimated planet radius (km)",
    signalToNoise: "Approximate detection SNR",
    detection: "Planet transit detection difficulty",
    noDetection: "Not detectable",
    weakCandidate: "Weak candidate",
    tentative: "Tentative detection",
    clear: "Clear detection",
    strong: "Strong detection",
    veryStrong: "Very strong detection",
    inputError: "Please enter radii greater than zero.",
    brightness: "Relative brightness",
    time: "Time",
    idealCurve: "Ideal curve",
    observations: "Noisy observations"
  },

  zh: {
    title: "宇宙凌星模拟器",
    subtitle: "模拟系外行星凌星造成的恒星亮度变化。",
    starRadius: "恒星半径（公里 km）",
    planetRadius: "行星半径（公里 km）",
    noiseLevel: "观测噪声",
    observationCount: "观测次数",
    observationError: "请输入 2 到 1000 之间的观测次数",
    simulate: "开始模拟",
    simulationComplete: "模拟完成",
    minimumBrightness: "最低亮度",
    transitDepth: "凌星深度",
    estimatedRadius: "推算行星半径（公里 km）",
    signalToNoise: "约略检测信噪比",
    detection: "行星凌星信号检测难度",
    noDetection: "暂时无法检测",
    weakCandidate: "微弱候选信号",
    tentative: "初步检测到信号",
    clear: "较清晰的检测",
    strong: "强检测信号",
    veryStrong: "非常强的检测信号",
    inputError: "请输入大于零的半径。",
    brightness: "相对亮度",
    time: "时间",
    idealCurve: "理论曲线",
    observations: "带噪声的观测数据"
  }
};

let currentLanguage =
  localStorage.getItem("universe-language") || "en";

const starRadiusInput = document.getElementById("star-radius");
const planetRadiusInput = document.getElementById("planet-radius");
const noiseLevelInput = document.getElementById("noise-level");
const noiseNumberInput = document.getElementById("noise-number");
const observationCountInput = document.getElementById("observation-count");
const simulateButton = document.getElementById("simulate-button");
const simulationStatus = document.getElementById("simulation-status");
const languageButton = document.getElementById("language-button");
const results = document.getElementById("results");
const canvas = document.getElementById("light-curve");
const context = canvas.getContext("2d");

simulateButton.addEventListener("click", simulateTransit);

noiseLevelInput.addEventListener("input", () => {
  noiseNumberInput.value = noiseLevelInput.value;
});

noiseNumberInput.addEventListener("input", () => {
  let noisePpm = Number(noiseNumberInput.value);

  noisePpm = Math.max(0, Math.min(500, noisePpm));
  noiseNumberInput.value = noisePpm;
  noiseLevelInput.value = noisePpm;
});

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
  resetSimulation();
});

function resetSimulation() {
  starRadiusInput.value = 695700;
  planetRadiusInput.value = 6371;
  noiseLevelInput.value = 50;
  noiseNumberInput.value = 50;
  observationCountInput.value = 101;
  simulationStatus.textContent = "";
  results.innerHTML = "";
  context.clearRect(0, 0, canvas.width, canvas.height);
}

function applyLanguage() {
  const text = translations[currentLanguage];

  document.documentElement.lang = currentLanguage;
  document.title = text.title;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    element.textContent = text[element.dataset.i18n];
  });

  languageButton.textContent = currentLanguage === "en" ? "中文" : "English";
}

function simulateTransit() {
  const text = translations[currentLanguage];
  const starRadius = Number(starRadiusInput.value);
  const planetRadius = Number(planetRadiusInput.value);
  const noisePpm = Math.max(0, Math.min(500, Number(noiseNumberInput.value)));
  const observationCount = Math.round(Number(observationCountInput.value));

  if (starRadius <= 0 || planetRadius <= 0) {
    simulationStatus.textContent = "";
    results.textContent = text.inputError;
    return;
  }

  if (!Number.isFinite(observationCount) || observationCount < 2 || observationCount > 1000) {
    simulationStatus.textContent = "";
    results.textContent = text.observationError;
    return;
  }

  observationCountInput.value = observationCount;

  const transitDepth =
    (planetRadius * planetRadius) / (starRadius * starRadius);

  const noiseStandardDeviation = noisePpm * 0.000001;
  const idealBrightnessValues = [];
  const observedBrightnessValues = [];

  let minimumBrightness = 1;
  let inTransitMeasurements = 0;

  for (let index = 0; index < observationCount; index++) {
    const position = -5 + (index / (observationCount - 1)) * 10;
    const distanceFromCenter = Math.abs(position);
    let brightness = 1;

    if (distanceFromCenter <= 3) {
      const transitAmount = Math.sqrt(
        1 - Math.pow(distanceFromCenter / 3, 2)
      );

      brightness = 1 - transitDepth * transitAmount;
      inTransitMeasurements++;
    }

    const observedBrightness =
      brightness + randomGaussian() * noiseStandardDeviation;

    idealBrightnessValues.push(brightness);
    observedBrightnessValues.push(observedBrightness);
    minimumBrightness = Math.min(minimumBrightness, brightness);
  }

    const estimatedPlanetRadius =
        starRadius * Math.sqrt(transitDepth);

    const signalToNoise =
        noiseStandardDeviation === 0
        ? Infinity
        : (transitDepth * Math.sqrt(inTransitMeasurements)) /
            noiseStandardDeviation;

    const detectionText = getDetectionLevel(signalToNoise);

  simulationStatus.textContent = text.simulationComplete;

  results.innerHTML = `
    ${text.minimumBrightness}: ${minimumBrightness.toFixed(8)}<br>
    ${text.transitDepth}: ${transitDepth.toFixed(8)}
    (${(transitDepth * 100).toFixed(4)}%)<br>
    ${text.estimatedRadius}: ${estimatedPlanetRadius.toFixed(2)} km<br>
    ${text.signalToNoise}: ${
      signalToNoise === Infinity ? "∞" : signalToNoise.toFixed(2)
    }<br>
    ${text.detection}: ${detectionText}
  `;

  drawLightCurve(
    idealBrightnessValues,
    observedBrightnessValues,
    transitDepth,
    noiseStandardDeviation
  );
}

function getDetectionLevel(signalToNoise) {
  const text = translations[currentLanguage];

  if (signalToNoise < 3) {
    return text.noDetection;
  }

  if (signalToNoise < 5) {
    return text.weakCandidate;
  }

  if (signalToNoise < 7) {
    return text.tentative;
  }

  if (signalToNoise < 10) {
    return text.clear;
  }

  if (signalToNoise < 20) {
    return text.strong;
  }

  return text.veryStrong;
}

function randomGaussian() {
  let firstRandom = 0;
  let secondRandom = 0;

  while (firstRandom === 0) {
    firstRandom = Math.random();
  }

  while (secondRandom === 0) {
    secondRandom = Math.random();
  }

  return Math.sqrt(-2 * Math.log(firstRandom))
    * Math.cos(2 * Math.PI * secondRandom);
}

function drawLightCurve(
  idealValues,
  observedValues,
  transitDepth,
  noiseStandardDeviation
) {
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

  const brightnessRange = Math.max(
    0.0002,
    transitDepth + noiseStandardDeviation * 6 + 0.0001
  );

  const lowerBrightness = 1 - brightnessRange;

  function getX(index) {
    return left + (index / (idealValues.length - 1)) * graphWidth;
  }

  function getY(brightness) {
    return top + ((1 - brightness) / brightnessRange) * graphHeight;
  }

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
  context.fillText(lowerBrightness.toFixed(6), 5, height - bottom + 5);

  context.strokeStyle = "#1677c8";
  context.lineWidth = 3;
  context.beginPath();

  idealValues.forEach((brightness, index) => {
    if (index === 0) {
      context.moveTo(getX(index), getY(brightness));
    } else {
      context.lineTo(getX(index), getY(brightness));
    }
  });

  context.stroke();

  context.fillStyle = "#f28c28";

  observedValues.forEach((brightness, index) => {
    context.beginPath();
    context.arc(getX(index), getY(brightness), 3, 0, Math.PI * 2);
    context.fill();
  });

  drawLegend();
}

function drawLegend() {
  const text = translations[currentLanguage];
  const legendY = canvas.height - 20;

  context.font = "14px Arial";

  context.strokeStyle = "#1677c8";
  context.lineWidth = 3;
  context.beginPath();
  context.moveTo(75, legendY);
  context.lineTo(103, legendY);
  context.stroke();

  context.fillStyle = "#26384c";
  context.fillText(text.idealCurve, 110, legendY + 5);

  context.fillStyle = "#f28c28";
  context.beginPath();
  context.arc(225, legendY, 4, 0, Math.PI * 2);
  context.fill();

  context.fillStyle = "#26384c";
  context.fillText(text.observations, 235, legendY + 5);
}

applyLanguage();
noiseNumberInput.value = noiseLevelInput.value;