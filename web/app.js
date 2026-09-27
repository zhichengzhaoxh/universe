const translations = {
  en: {
    title: "Universe Transit Simulator",
    home: "← All modules",
    subtitle: "Simulate the brightness change caused by an exoplanet transit.",
    starRadius: "Star radius (km)",
    planetRadius: "Planet radius (km)",
    noiseLevel: "Observation noise",
    observationCount: "Number of observations",
    observationError: "Please enter between 2 and 1000 observations",
    simulate: "Simulate Transit",
    simulationComplete: "Simulation complete",
    minimumBrightness: "Minimum ideal brightness",
    transitDepth: "Expected transit depth (from input radii)",
    fittedTransitDepth: "Transit depth fitted to noisy observations",
    estimatedRadius: "Planet radius estimated from noisy observations (km)",
    signalToNoise: "Approx. expected SNR (from input radii)",
    detection: "Planet transit detection difficulty",
    noDetection: "Not detectable",
    weakCandidate: "Weak candidate",
    tentative: "Tentative detection",
    clear: "Clear detection",
    strong: "Strong detection",
    veryStrong: "Very strong detection",
    inputError: "Please enter radii greater than zero.",
    brightness: "Relative brightness",
    idealCurve: "Ideal curve",
    observations: "Noisy observations",
    position: "Relative position (illustrative units)",
    resultsTitle: "Simulation results",
    interpretationLabel: "What this signal level suggests",
    noDetectionConclusion: "The simulated transit is buried in the noise; a planet could still be present.",
    weakConclusion: "This is a weak candidate signal. It may be a planet, but noise or other effects could also explain it.",
    tentativeConclusion: "There is a tentative transit-like signal, but more observations are needed to assess it.",
    clearConclusion: "The simulated transit stands out from the noise, but this alone does not confirm a planet.",
    strongConclusion: "The simulated transit is strong relative to the assumed noise; independent checks are still needed.",
    veryStrongConclusion: "The simulated transit is very prominent under these assumptions; real detections still need validation.",
    detectionCaveat: "Signal-to-noise is not the probability that a planet exists. Real detections require checking the data and ruling out false positives.",
    noiseError: "Enter a valid noise value between 0 and 500 ppm.",
    planetSizeError: "Planet radius cannot be larger than star radius.",
    modelTitle: "About this model",
    modelDepthLead: "The estimated transit depth uses",
    modelLimitations: "The curve uses a simplified center-crossing profile across relative positions −5 to +5. The estimated depth and planet radius are fitted to the simulated noisy points using that profile, so estimates can vary between runs. The displayed expected SNR is an approximation based on the input radii and assumed noise, not the fitted depth. This is an educational illustration, not a fit to real observations.",
    chartTitle: "Transit light curve",
    chartSummary: "The blue line is the ideal brightness curve; orange dots are simulated noisy measurements.",
    observationPoints: "Observation points",
    chartReady: "Set the parameters and run a simulation to see the light curve.",
    transitImageCredit: "Background illustration: NASA/Ames/JPL-Caltech (Kepler-9).",
    changeLanguage: "Change language"
  },

  zh: {
    title: "宇宙凌星模拟器",
    home: "← 返回主页",
    subtitle: "模拟系外行星凌星造成的恒星亮度变化。",
    starRadius: "恒星半径（公里 km）",
    planetRadius: "行星半径（公里 km）",
    noiseLevel: "观测噪声",
    observationCount: "观测次数",
    observationError: "请输入 2 到 1000 之间的观测次数",
    simulate: "开始模拟",
    simulationComplete: "模拟完成",
    minimumBrightness: "理论曲线最低亮度",
    transitDepth: "理论凌星深度（由输入半径计算）",
    fittedTransitDepth: "根据带噪声观测拟合的凌星深度",
    estimatedRadius: "根据带噪声观测估算的行星半径（公里）",
    signalToNoise: "预计信噪比（由输入半径估算）",
    detection: "行星凌星信号检测难度",
    noDetection: "暂时无法检测",
    weakCandidate: "微弱候选信号",
    tentative: "初步检测到信号",
    clear: "较清晰的检测",
    strong: "强检测信号",
    veryStrong: "非常强的检测信号",
    inputError: "请输入大于零的半径。",
    brightness: "相对亮度",
    idealCurve: "理论曲线",
    observations: "带噪声的观测数据",
    position: "相对位置（示意单位）",
    resultsTitle: "模拟结果",
    interpretationLabel: "这个信号强度意味着什么",
    noDetectionConclusion: "模拟中的凌星信号被噪声淹没；这并不能排除行星存在。",
    weakConclusion: "这是一个较弱的候选信号。它可能来自行星，也可能由噪声或其他因素造成。",
    tentativeConclusion: "出现了初步的凌星特征，但需要更多观测才能判断。",
    clearConclusion: "在模拟中，凌星信号明显高于噪声；但仅凭这一点还不能确认行星。",
    strongConclusion: "在当前假设下，凌星信号相对噪声较强；仍需要独立方法验证。",
    veryStrongConclusion: "在当前假设下，凌星信号非常明显；真实发现仍需进一步验证。",
    detectionCaveat: "信噪比不等于行星存在的概率。真实发现还需要检查观测数据并排除假阳性。",
    noiseError: "请输入 0 到 500 ppm 之间的有效噪声值。",
    planetSizeError: "行星半径不能大于恒星半径。",
    modelTitle: "模型说明",
    modelDepthLead: "凌星深度估算使用",
    modelLimitations: "曲线采用简化的中心穿越模型，位置范围为 −5 到 +5。程序使用该曲线形状拟合带噪声的模拟观测点，并据此估算凌星深度和行星半径，因此每次模拟结果可能略有不同。预计信噪比是根据输入半径和假设噪声计算的近似值，不是由拟合深度得出。本模拟用于教学演示，并非对真实观测数据的拟合。",
    chartTitle: "凌星亮度曲线",
    chartSummary: "蓝线表示理想亮度曲线；橙色圆点表示模拟的含噪声观测值。",
    observationPoints: "观测点数",
    chartReady: "调整参数并开始模拟，即可查看亮度曲线。",
    transitImageCredit: "背景插图：NASA/Ames/JPL-Caltech（开普勒-9）。",
    changeLanguage: "切换语言"
  }
};

const savedLanguage = localStorage.getItem("universe-language");
let currentLanguage = translations[savedLanguage] ? savedLanguage : "en";
let lastSimulation = null;
let lastErrorKey = null;

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
const chartSummary = document.getElementById("chart-summary");

simulateButton.addEventListener("click", simulateTransit);

noiseLevelInput.addEventListener("input", () => {
  noiseNumberInput.value = noiseLevelInput.value;
});

noiseNumberInput.addEventListener("input", () => {
  if (noiseNumberInput.value.trim() === "") {
    return;
  }

  let noisePpm = Number(noiseNumberInput.value);
  if (!Number.isFinite(noisePpm)) {
    return;
  }

  noisePpm = Math.round(Math.max(0, Math.min(500, noisePpm)));
  noiseNumberInput.value = noisePpm;
  noiseLevelInput.value = noisePpm;
});

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});

function showInputError(errorKey) {
  lastSimulation = null;
  lastErrorKey = errorKey;
  simulationStatus.textContent = "";
  results.textContent = translations[currentLanguage][errorKey];
  chartSummary.textContent = "";
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
  languageButton.setAttribute("aria-label", text.changeLanguage);

  if (lastSimulation) {
    renderSimulationResults(lastSimulation);
    chartSummary.textContent =
      `${text.chartSummary} ${text.observationPoints}: ${lastSimulation.observationCount}. ` +
      `${text.transitDepth}: ${(lastSimulation.transitDepth * 100).toFixed(4)}%.`;
    drawLightCurve(
      lastSimulation.idealBrightnessValues,
      lastSimulation.observedBrightnessValues,
      lastSimulation.transitDepth
    );
  } else if (lastErrorKey) {
    results.textContent = text[lastErrorKey];
  } else {
    chartSummary.textContent = text.chartReady;
  }
}

function simulateTransit() {
  const text = translations[currentLanguage];
  const starRadius = Number(starRadiusInput.value);
  const planetRadius = Number(planetRadiusInput.value);
  const rawNoisePpm = noiseNumberInput.value.trim() === ""
    ? NaN
    : Number(noiseNumberInput.value);
  const observationCount = Number(observationCountInput.value);

  if (
    !Number.isFinite(starRadius) ||
    !Number.isFinite(planetRadius) ||
    starRadius <= 0 ||
    planetRadius <= 0
  ) {
    showInputError("inputError");
    return;
  }

  if (planetRadius > starRadius) {
    showInputError("planetSizeError");
    return;
  }

  if (!Number.isFinite(rawNoisePpm)) {
    showInputError("noiseError");
    return;
  }

  if (
    !Number.isInteger(observationCount) ||
    observationCount < 2 ||
    observationCount > 1000
  ) {
    showInputError("observationError");
    return;
  }

  observationCountInput.value = observationCount;

  const noisePpm = Math.round(Math.max(0, Math.min(500, rawNoisePpm)));
  noiseNumberInput.value = noisePpm;
  noiseLevelInput.value = noisePpm;

  const radiusRatio = planetRadius / starRadius;
  const transitDepth = radiusRatio * radiusRatio;

  const noiseStandardDeviation = noisePpm * 0.000001;
  const idealBrightnessValues = [];
  const observedBrightnessValues = [];
  const transitShapeValues = [];

  let minimumBrightness = 1;
  let inTransitMeasurements = 0;

  for (let index = 0; index < observationCount; index++) {
    const position = -5 + (index / (observationCount - 1)) * 10;
    const distanceFromCenter = Math.abs(position);
    let brightness = 1;
    let transitShape = 0;

    if (distanceFromCenter <= 3) {
      transitShape = Math.sqrt(
        1 - Math.pow(distanceFromCenter / 3, 2)
      );

      brightness = 1 - transitDepth * transitShape;
      inTransitMeasurements++;
    }

    const observedBrightness =
      brightness + randomGaussian() * noiseStandardDeviation;

    idealBrightnessValues.push(brightness);
    observedBrightnessValues.push(observedBrightness);
    transitShapeValues.push(transitShape);
    minimumBrightness = Math.min(minimumBrightness, brightness);
  }

  let fittedDepthNumerator = 0;
  let fittedDepthDenominator = 0;
  transitShapeValues.forEach((shape, index) => {
    fittedDepthNumerator += shape * (1 - observedBrightnessValues[index]);
    fittedDepthDenominator += shape * shape;
  });

  const fittedTransitDepth = fittedDepthDenominator === 0
    ? 0
    : Math.max(0, Math.min(1, fittedDepthNumerator / fittedDepthDenominator));
  const estimatedPlanetRadius = starRadius * Math.sqrt(fittedTransitDepth);

  const signalToNoise =
    noiseStandardDeviation === 0
      ? Infinity
      : (transitDepth * Math.sqrt(inTransitMeasurements)) / noiseStandardDeviation;

  lastErrorKey = null;
  lastSimulation = {
    idealBrightnessValues,
    observedBrightnessValues,
    transitDepth,
    fittedTransitDepth,
    estimatedPlanetRadius,
    signalToNoise,
    minimumBrightness,
    observationCount,
  };
  simulationStatus.textContent = text.simulationComplete;
  renderSimulationResults(lastSimulation);
  chartSummary.textContent =
    `${text.chartSummary} ${text.observationPoints}: ${observationCount}. ` +
    `${text.transitDepth}: ${(transitDepth * 100).toFixed(4)}%.`;

  drawLightCurve(
    idealBrightnessValues,
    observedBrightnessValues,
    transitDepth
  );
}

function renderSimulationResults(simulation) {
  const text = translations[currentLanguage];
  const detectionText = getDetectionLevel(simulation.signalToNoise);
  const detectionConclusion = getDetectionConclusion(simulation.signalToNoise);

  simulationStatus.textContent = text.simulationComplete;
  results.innerHTML = `
    ${text.minimumBrightness}: ${simulation.minimumBrightness.toFixed(8)}<br>
    ${text.transitDepth}: ${simulation.transitDepth.toFixed(8)}
    (${(simulation.transitDepth * 100).toFixed(4)}%)<br>
    ${text.fittedTransitDepth}: ${simulation.fittedTransitDepth.toFixed(8)}
    (${(simulation.fittedTransitDepth * 100).toFixed(4)}%)<br>
    ${text.estimatedRadius}: ${simulation.estimatedPlanetRadius.toFixed(2)} km<br>
    ${text.signalToNoise}: ${
      simulation.signalToNoise === Infinity ? "∞" : simulation.signalToNoise.toFixed(2)
    }<br>
    ${text.detection}: ${detectionText}<br>
    <strong>${text.interpretationLabel}:</strong>
    <span class="result-interpretation">${detectionConclusion}</span>
    <p class="result-caveat">${text.detectionCaveat}</p>
  `;
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

function getDetectionConclusion(signalToNoise) {
  const text = translations[currentLanguage];

  if (signalToNoise < 3) {
    return text.noDetectionConclusion;
  }

  if (signalToNoise < 5) {
    return text.weakConclusion;
  }

  if (signalToNoise < 7) {
    return text.tentativeConclusion;
  }

  if (signalToNoise < 10) {
    return text.clearConclusion;
  }

  if (signalToNoise < 20) {
    return text.strongConclusion;
  }

  return text.veryStrongConclusion;
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
  transitDepth
) {
  const text = translations[currentLanguage];
  const width = canvas.width;
  const height = canvas.height;
  const left = 70;
  const right = 30;
  const top = 35;
  const bottom = 100;

  context.clearRect(0, 0, width, height);

  const graphWidth = width - left - right;
  const graphHeight = height - top - bottom;

  const minimumObservedBrightness = observedValues.reduce(
    (minimum, brightness) => Math.min(minimum, brightness),
    1 - transitDepth
  );
  const maximumObservedBrightness = observedValues.reduce(
    (maximum, brightness) => Math.max(maximum, brightness),
    1
  );
  const brightnessSpan = maximumObservedBrightness - minimumObservedBrightness;
  const brightnessPadding = Math.max(brightnessSpan * 0.08, 0.00005);
  const upperBrightness = maximumObservedBrightness + brightnessPadding;
  const lowerBrightness = minimumObservedBrightness - brightnessPadding;
  const brightnessRange = upperBrightness - lowerBrightness;

  function getX(index) {
    return left + (index / (idealValues.length - 1)) * graphWidth;
  }

  function getY(brightness) {
    return top + ((upperBrightness - brightness) / brightnessRange) * graphHeight;
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
  const positionLabelX =
    left + (graphWidth - context.measureText(text.position).width) / 2;
  context.fillText(text.position, positionLabelX, height - 44);
  const tickLabelY = height - bottom + 32;
  context.fillText("−5", left - context.measureText("−5").width / 2, tickLabelY);
  context.fillText("0", left + graphWidth / 2 - context.measureText("0").width / 2, tickLabelY);
  context.fillText("+5", width - right - context.measureText("+5").width / 2, tickLabelY);
  context.fillText(upperBrightness.toFixed(6), 25, top + 5);
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