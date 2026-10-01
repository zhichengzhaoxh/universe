const translations = {
  en: {
    home: "← All modules", changeLanguage: "Change language",
    title: "Binary & Triple Star Systems",
    subtitle: "Explore how multiple stars move under their mutual gravity.",
    eyebrow: "GRAVITY IN A STELLAR FAMILY",
    introTitle: "Every star moves — around a shared center of mass",
    intro: "Choose a two-star or three-star system, then watch gravity shape its paths. In a binary, both stars orbit their barycenter; in a triple, their combined motion can become far less predictable.",
    simulationEyebrow: "NEWTONIAN N-BODY PLAYGROUND", simulationTitle: "Set the stars in motion",
    scaleNote: "Paths and star sizes are illustrative, not to scale. Distance, mass, and time use normalized units with G = 1.",
    pause: "Pause", play: "Play", reset: "Reset", systemLabel: "System",
    binaryOption: "Binary (2 stars)", tripleOption: "Triple (3 stars)",
    presetLabel: "Starting arrangement", speedLabel: "Simulation speed",
    massControlTitle: "Adjust star masses",
    massControlNote: "Change a mass while the simulation runs; motion continues from the current positions and velocities under the updated gravity. Reset restores preset masses.",
    massUnitNote: "Normalized mass · G = 1", starMassLabel: "Mass",
    gravityVectorsLabel: "Show gravitational acceleration",
    gravityVectorsNote: "Arrow direction shows each star's net acceleration from the others; length is illustrative and the display does not change the simulation.",
    equalBinary: "Equal-mass circular binary", unequalBinary: "Unequal-mass circular binary",
    figureEight: "Figure-eight choreography", hierarchicalTriple: "Hierarchical triple",
    star: "Star", elapsedLabel: "Simulation time", massLabel: "Total mass",
    starLegendLabel: "Stars in this system",
    barycenterLabel: "Center of mass", barycenterValue: "Shown as a cross",
    canvasBinary: "Two stars orbit their shared center of mass.",
    canvasTriple: "Three stars interact gravitationally around their shared center of mass.",
    ideaEyebrow: "THE KEY IDEA", ideaTitle: "The barycenter is the system's balance point",
    ideaText: "Gravity pulls every star toward every other star. Their motions respond to the whole group, so even the more massive star moves around the shared center of mass. With three stars, small differences in starting conditions can lead to very different paths.",
    modelTitle: "About this model",
    modelText: "This educational animation numerically integrates softened Newtonian gravity for point masses with a fixed-step, fourth-order Runge–Kutta method. Distances, masses, and time are normalized; these presets are not fits to observed stars. The hierarchical triple starts with a circular inner pair and an eccentric outer orbit; because all three stars interact, that outer orbit is only an approximate Kepler ellipse. Numerical error accumulates over time. Real systems can also be affected by stellar size and relativistic effects. The three-body problem has no general closed-form solution.",
    footerNote: "Educational simulation — not an ephemeris or a long-term stability prediction."
  },
  zh: {
    home: "← 返回所有模块", changeLanguage: "切换语言",
    title: "双星与三星系统", subtitle: "探索多颗恒星如何在彼此引力作用下运动。",
    eyebrow: "恒星家族中的引力", introTitle: "每颗恒星都在运动——围绕共同质心",
    intro: "选择双星或三星系统，观察引力如何塑造它们的轨迹。在双星系统中，两颗恒星都绕共同质心运行；三星系统的整体运动则复杂得多。",
    simulationEyebrow: "牛顿多体引力实验场", simulationTitle: "让恒星动起来",
    scaleNote: "轨迹和恒星大小均为示意图，并非按比例绘制。距离、质量和时间使用 G = 1 的归一化单位。",
    pause: "暂停", play: "播放", reset: "重置", systemLabel: "系统类型",
    binaryOption: "双星（2 颗恒星）", tripleOption: "三星（3 颗恒星）",
    presetLabel: "初始构型", speedLabel: "模拟速度",
    massControlTitle: "调整恒星质量",
    massControlNote: "模拟运行时调整质量，系统会保留当前的位置和速度，并按更新后的引力继续运行。点击重置可恢复预设质量。",
    massUnitNote: "归一化质量 · G = 1", starMassLabel: "质量",
    gravityVectorsLabel: "显示引力加速度",
    gravityVectorsNote: "箭头方向表示其他恒星产生的合加速度，长度仅供示意；显示开关不会改变模拟结果。",
    equalBinary: "等质量圆轨道双星", unequalBinary: "不等质量圆轨道双星",
    figureEight: "“8”字形轨道三星", hierarchicalTriple: "层级三星系统",
    star: "恒星", elapsedLabel: "模拟时间", massLabel: "总质量",
    starLegendLabel: "系统中的恒星",
    barycenterLabel: "质心位置", barycenterValue: "以十字标记",
    canvasBinary: "两颗恒星围绕共同质心运行。",
    canvasTriple: "三颗恒星在引力作用下围绕共同质心相互运动。",
    ideaEyebrow: "核心概念", ideaTitle: "质心是系统的平衡点",
    ideaText: "每颗恒星都受到其他恒星的引力。它们的运动取决于整个系统，因此即使质量较大的恒星也会绕共同质心运动。三星系统中，初始条件的微小差异就可能导致截然不同的轨迹。",
    modelTitle: "关于此模型", modelText: "本教学动画采用固定步长的四阶 Runge–Kutta 方法，对经过软化处理的点质量牛顿引力进行数值积分。距离、质量和时间均为归一化单位；预设并非对真实观测恒星的拟合。层级三星由圆轨道内双星和偏心外轨道组成；由于三颗恒星彼此作用，外轨道只是近似的开普勒椭圆。数值误差会随时间累积。真实系统还会受到恒星大小和相对论效应等影响。三体问题不存在适用于一般情况的闭式解析解。",
    footerNote: "教学模拟——并非星历或长期轨道稳定性预测。"
  }
};

const presets = {
  binary: [
    { id: "equalBinary", masses: [1, 1], separation: 1.4 },
    { id: "unequalBinary", masses: [1.4, 0.45], separation: 1.6 }
  ],
  triple: [
    { id: "figureEight", masses: [1, 1, 1], figureEight: true },
    { id: "hierarchicalTriple", masses: [1, 0.8, 0.35], hierarchical: true }
  ]
};
const colors = ["#ffd166", "#72c7ff", "#ff8c9a"];
const canvas = document.getElementById("star-canvas");
const context = canvas.getContext("2d");
const languageButton = document.getElementById("language-button");
const systemSelect = document.getElementById("system-type");
const presetSelect = document.getElementById("system-preset");
const playButton = document.getElementById("play-toggle");
const resetButton = document.getElementById("reset-button");
const speedControl = document.getElementById("speed-control");
const speedValue = document.getElementById("speed-value");
const gravityVectorsToggle = document.getElementById("show-gravity-vectors");
const massControls = document.getElementById("mass-controls");
const savedLanguage = localStorage.getItem("universe-language");
let currentLanguage = translations[savedLanguage] ? savedLanguage : "en";
let stars = [];
let trails = [];
let elapsed = 0;
let paused = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let previousFrame = 0;
let descriptionTimer = 0;

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
  renderPresetOptions();
  renderMassControls();
  renderLegend();
  updateStats();
  updateControls();
  updateCanvasDescription();
}

function renderPresetOptions() {
  const text = translations[currentLanguage];
  const options = presets[systemSelect.value];
  const selectedPreset = options.some((preset) => preset.id === presetSelect.value)
    ? presetSelect.value
    : options[0].id;
  presetSelect.innerHTML = options.map((preset) =>
    `<option value="${preset.id}">${text[preset.id]}</option>`
  ).join("");
  presetSelect.value = selectedPreset;
}

function makeStars(preset) {
  const masses = preset.masses;
  if (preset.figureEight) {
    return [
      { x: -0.97000436, y: 0.24308753, vx: 0.466203685, vy: 0.43236573 },
      { x: 0.97000436, y: -0.24308753, vx: 0.466203685, vy: 0.43236573 },
      { x: 0, y: 0, vx: -0.93240737, vy: -0.86473146 }
    ].map((star, index) => ({ ...star, mass: masses[index], color: colors[index] }));
  }

  if (preset.hierarchical) {
    const innerMass = masses[0] + masses[1];
    const outerMass = masses[2];
    const outerPericenter = 1.75;
    const outerEccentricity = 0.22;
    const innerCenterX = -outerMass * outerPericenter / (innerMass + outerMass);
    const outerX = innerMass * outerPericenter / (innerMass + outerMass);
    const innerSeparation = 0.72;
    const innerSpeed = Math.sqrt(innerMass / innerSeparation);
    const outerSpeed = Math.sqrt((innerMass + outerMass) * (1 + outerEccentricity) / outerPericenter);
    const innerCenterVelocityY = -outerMass * outerSpeed / (innerMass + outerMass);
    const outerVelocityY = innerMass * outerSpeed / (innerMass + outerMass);
    return [
      { x: innerCenterX - masses[1] * innerSeparation / innerMass, y: 0, vx: 0, vy: innerCenterVelocityY - masses[1] * innerSpeed / innerMass },
      { x: innerCenterX + masses[0] * innerSeparation / innerMass, y: 0, vx: 0, vy: innerCenterVelocityY + masses[0] * innerSpeed / innerMass },
      { x: outerX, y: 0, vx: 0, vy: outerVelocityY }
    ].map((star, index) => ({ ...star, mass: masses[index], color: colors[index] }));
  }

  const separation = preset.separation;
  const totalMass = masses[0] + masses[1];
  const relativeSpeed = Math.sqrt(totalMass / separation);
  return [
    { x: -masses[1] * separation / totalMass, y: 0, vx: 0, vy: -masses[1] * relativeSpeed / totalMass },
    { x: masses[0] * separation / totalMass, y: 0, vx: 0, vy: masses[0] * relativeSpeed / totalMass }
  ].map((star, index) => ({ ...star, mass: masses[index], color: colors[index] }));
}

function resetSimulation() {
  const preset = presets[systemSelect.value].find((item) => item.id === presetSelect.value);
  stars = makeStars(preset);
  trails = stars.map(() => []);
  elapsed = 0;
  renderMassControls();
  renderLegend();
  updateStats();
  updateCanvasDescription();
  draw(true);
}

function renderMassControls() {
  const text = translations[currentLanguage];
  massControls.innerHTML = stars.map((star, index) => `
    <label class="mass-control" for="mass-slider-${index}">
      <span class="mass-control-label"><i style="--star-color:${star.color}" aria-hidden="true"></i>${text.star} ${index + 1} <output id="mass-value-${index}" for="mass-slider-${index}">${star.mass.toFixed(2)} M</output></span>
      <input id="mass-slider-${index}" data-star-index="${index}" type="range" min="0.10" max="2.50" step="0.05" value="${star.mass}" aria-label="${text.star} ${index + 1} ${text.starMassLabel}">
    </label>
  `).join("");
}

function calculateAccelerations(state) {
  const acceleration = state.map(() => ({ x: 0, y: 0 }));
  for (let i = 0; i < state.length; i += 1) {
    for (let j = i + 1; j < state.length; j += 1) {
      const dx = state[j].x - state[i].x;
      const dy = state[j].y - state[i].y;
      const distanceSquared = dx * dx + dy * dy + 0.0001;
      const inverseDistanceCubed = 1 / (distanceSquared * Math.sqrt(distanceSquared));
      acceleration[i].x += state[j].mass * dx * inverseDistanceCubed;
      acceleration[i].y += state[j].mass * dy * inverseDistanceCubed;
      acceleration[j].x -= state[i].mass * dx * inverseDistanceCubed;
      acceleration[j].y -= state[i].mass * dy * inverseDistanceCubed;
    }
  }
  return acceleration;
}

function derivative(state) {
  const acceleration = calculateAccelerations(state);
  return state.map((star, index) => ({
    x: star.vx, y: star.vy,
    vx: acceleration[index].x, vy: acceleration[index].y
  }));
}

function offsetState(state, change, amount) {
  return state.map((star, index) => ({
    ...star,
    x: star.x + change[index].x * amount,
    y: star.y + change[index].y * amount,
    vx: star.vx + change[index].vx * amount,
    vy: star.vy + change[index].vy * amount
  }));
}

function advance(dt) {
  const k1 = derivative(stars);
  const k2 = derivative(offsetState(stars, k1, dt / 2));
  const k3 = derivative(offsetState(stars, k2, dt / 2));
  const k4 = derivative(offsetState(stars, k3, dt));
  stars = stars.map((star, index) => ({
    ...star,
    x: star.x + dt * (k1[index].x + 2 * k2[index].x + 2 * k3[index].x + k4[index].x) / 6,
    y: star.y + dt * (k1[index].y + 2 * k2[index].y + 2 * k3[index].y + k4[index].y) / 6,
    vx: star.vx + dt * (k1[index].vx + 2 * k2[index].vx + 2 * k3[index].vx + k4[index].vx) / 6,
    vy: star.vy + dt * (k1[index].vy + 2 * k2[index].vy + 2 * k3[index].vy + k4[index].vy) / 6
  }));
  elapsed += dt;
}

function draw(recordTrail = false) {
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (!width || !height || !stars.length) return;
  const pixelRatio = window.devicePixelRatio || 1;
  const targetWidth = Math.round(width * pixelRatio);
  const targetHeight = Math.round(height * pixelRatio);
  if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
    canvas.width = targetWidth;
    canvas.height = targetHeight;
  }
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  context.clearRect(0, 0, width, height);

  const scale = Math.min(width / 5.2, height / 3.4);
  const centerX = width / 2;
  const centerY = height / 2;
  const barycenter = stars.reduce((sum, star) => ({
    x: sum.x + star.x * star.mass,
    y: sum.y + star.y * star.mass
  }), { x: 0, y: 0 });
  barycenter.x /= stars.reduce((sum, star) => sum + star.mass, 0);
  barycenter.y /= stars.reduce((sum, star) => sum + star.mass, 0);

  trails.forEach((trail, index) => {
    const star = stars[index];
    if (recordTrail) trail.push({ x: star.x, y: star.y });
    if (trail.length > 650) trail.shift();
    if (trail.length < 2) return;
    context.beginPath();
    trail.forEach((point, pointIndex) => {
      const x = centerX + (point.x - barycenter.x) * scale;
      const y = centerY - (point.y - barycenter.y) * scale;
      if (pointIndex === 0) context.moveTo(x, y);
      else context.lineTo(x, y);
    });
    context.strokeStyle = `${star.color}78`;
    context.lineWidth = 1.5;
    context.stroke();
  });

  if (gravityVectorsToggle.checked) {
    const accelerations = calculateAccelerations(stars);
    accelerations.forEach((acceleration, index) => {
      const star = stars[index];
      const magnitude = Math.hypot(acceleration.x, acceleration.y);
      if (!magnitude) return;
      const arrowLength = Math.min(42, Math.max(12, Math.log1p(magnitude) * 24));
      const startX = centerX + (star.x - barycenter.x) * scale;
      const startY = centerY - (star.y - barycenter.y) * scale;
      const directionX = acceleration.x / magnitude;
      const directionY = -acceleration.y / magnitude;
      const endX = startX + directionX * arrowLength;
      const endY = startY + directionY * arrowLength;
      const headLength = 8;

      context.save();
      context.strokeStyle = `${star.color}dd`;
      context.fillStyle = star.color;
      context.lineWidth = 2;
      context.beginPath();
      context.moveTo(startX, startY);
      context.lineTo(endX, endY);
      context.stroke();
      context.beginPath();
      context.moveTo(endX, endY);
      context.lineTo(endX - directionX * headLength - directionY * headLength * 0.55,
        endY - directionY * headLength + directionX * headLength * 0.55);
      context.lineTo(endX - directionX * headLength + directionY * headLength * 0.55,
        endY - directionY * headLength - directionX * headLength * 0.55);
      context.closePath();
      context.fill();
      context.restore();
    });
  }

  context.save();
  context.translate(centerX + (barycenter.x - barycenter.x) * scale, centerY);
  context.strokeStyle = "rgba(236, 245, 255, 0.9)";
  context.lineWidth = 1.5;
  context.beginPath();
  context.moveTo(-7, 0); context.lineTo(7, 0);
  context.moveTo(0, -7); context.lineTo(0, 7);
  context.stroke();
  context.restore();

  stars.forEach((star, index) => {
    const x = centerX + (star.x - barycenter.x) * scale;
    const y = centerY - (star.y - barycenter.y) * scale;
    const radius = 7 + Math.min(7, Math.sqrt(star.mass) * 3);
    const glow = context.createRadialGradient(x, y, 1, x, y, radius * 3.2);
    glow.addColorStop(0, `${star.color}cc`);
    glow.addColorStop(1, `${star.color}00`);
    context.fillStyle = glow;
    context.beginPath(); context.arc(x, y, radius * 3.2, 0, Math.PI * 2); context.fill();
    context.fillStyle = star.color;
    context.beginPath(); context.arc(x, y, radius, 0, Math.PI * 2); context.fill();
    context.fillStyle = "#07111f";
    context.font = "bold 10px Arial, sans-serif";
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.fillText(String(index + 1), x, y);
  });
}

function renderLegend() {
  const text = translations[currentLanguage];
  document.getElementById("star-legend").innerHTML = stars.map((star, index) =>
    `<span class="star-legend-item"><i style="--star-color:${star.color}" aria-hidden="true"></i>${text.star} ${index + 1}<strong>${star.mass.toFixed(2)} M</strong></span>`
  ).join("");
}

function updateStats() {
  const locale = currentLanguage === "zh" ? "zh-CN" : "en-US";
  document.getElementById("elapsed-time").textContent = elapsed.toLocaleString(locale, { maximumFractionDigits: 2 });
  document.getElementById("total-mass").textContent = stars.reduce((sum, star) => sum + star.mass, 0).toLocaleString(locale, { maximumFractionDigits: 2 });
}

function updateCanvasDescription() {
  if (!stars.length) return;
  const text = translations[currentLanguage];
  document.getElementById("canvas-description").textContent =
    stars.length === 2 ? text.canvasBinary : text.canvasTriple;
}

function updateControls() {
  const text = translations[currentLanguage];
  playButton.textContent = paused ? text.play : text.pause;
  playButton.setAttribute("aria-pressed", String(paused));
  speedValue.textContent = `${Number(speedControl.value).toFixed(2).replace(/0$/, "")}×`;
}

function frame(timestamp) {
  const frameSeconds = previousFrame ? Math.min((timestamp - previousFrame) / 1000, 0.05) : 0;
  previousFrame = timestamp;
  if (!paused && frameSeconds > 0) {
    const step = frameSeconds * Number(speedControl.value) * 0.48;
    const substeps = Math.max(1, Math.ceil(step / 0.004));
    for (let index = 0; index < substeps; index += 1) advance(step / substeps);
    draw(true);
    if (timestamp - descriptionTimer > 500) {
      updateStats();
      descriptionTimer = timestamp;
    }
  }
  window.requestAnimationFrame(frame);
}

systemSelect.addEventListener("change", () => {
  renderPresetOptions();
  resetSimulation();
});
presetSelect.addEventListener("change", resetSimulation);
playButton.addEventListener("click", () => {
  paused = !paused;
  updateControls();
});
resetButton.addEventListener("click", resetSimulation);
speedControl.addEventListener("input", updateControls);
languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});
window.addEventListener("resize", draw);
gravityVectorsToggle.addEventListener("change", () => draw());
massControls.addEventListener("input", (event) => {
  const slider = event.target.closest("input[data-star-index]");
  if (!slider) return;
  const starIndex = Number(slider.dataset.starIndex);
  stars[starIndex].mass = Number(slider.value);
  document.getElementById(`mass-value-${starIndex}`).textContent = `${stars[starIndex].mass.toFixed(2)} M`;
  updateStats();
  renderLegend();
  draw();
});

systemSelect.value = "binary";
renderPresetOptions();
presetSelect.value = "equalBinary";
resetSimulation();
applyLanguage();
updateControls();
window.requestAnimationFrame(frame);



