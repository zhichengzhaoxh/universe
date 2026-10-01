const SAVE_KEY = "silent-frontier-save-v1";
const GAME_PASSWORD = "2222";
const WORLDS = ["rhea", "vesper", "kepler", "talos"];
const WORLD_COORDINATES = {
  rhea: { x: 146, y: 91 },
  vesper: { x: 278, y: 78 },
  kepler: { x: 514, y: 91 },
  talos: { x: 622, y: 286 }
};
const translations = {
  en: {
    title: "Silent Frontier",
    subtitle: "A sci-fi RPG about civilization, survival, and the danger of being heard.",
    passwordEyebrow: "SECURE TRANSMISSION",
    passwordTitle: "Frontier access",
    passwordPrompt: "Enter the access code to open the campaign.",
    passwordLabel: "Access code",
    passwordSubmit: "Enter campaign",
    passwordError: "Incorrect code. Try again.",
    passwordBack: "← Back to modules",
    home: "← All modules",
    eyebrow: "A NEW STAR SYSTEM. A FRAGILE CIVILIZATION.",
    premiseTitle: "Every expansion leaves a trace.",
    premise: "Lead a small fleet of survivors into an uncharted system. Build a home, grow your crew, and face an insect-like swarm that adapts to the tactics you rely on. But mining, colonizing, and fighting all create signals that could attract something far more dangerous.",
    loopEyebrow: "THE GAME LOOP",
    loopTitle: "Explore. Develop. Survive.",
    loopDescription: "Scout planets for supplies, recruit and train specialists, establish outposts, then decide whether to fight, evade, or stay quiet. Each turn asks you to balance immediate survival against the risks of becoming more visible.",
    systemsEyebrow: "THREE CONNECTED SYSTEMS",
    systemsTitle: "Your choices reshape the frontier",
    growthTitle: "Crew growth",
    growthDescription: "Develop your officers and specialists to unlock new ways to explore, negotiate, and survive encounters.",
    swarmTitle: "An evolving swarm",
    swarmDescription: "The insect threat responds to repeated tactics, pushing you to adapt instead of relying on one winning strategy.",
    signalTitle: "The signal dilemma",
    signalDescription: "Expansion gives you more resources and options, but your growing footprint raises the chance that others will find you.",
    campaignEyebrow: "PLAYABLE PROTOTYPE · TURN-BASED CAMPAIGN",
    campaignTitle: "First Contact",
    newCampaign: "Restart campaign",
    objective: "Objective: establish 2 colonies and keep your fleet alive through 8 turns. Actions advance time; the swarm responds after every turn.",
    turnLabel: "Turn",
    suppliesLabel: "Supplies",
    hullLabel: "Fleet hull",
    crewLabel: "Crew rank",
    coloniesLabel: "Colonies",
    exposureLabel: "Signal exposure",
    pressureLabel: "Swarm pressure",
    mapTitle: "Nearby systems",
    mapDescription: "Select a planet to set it as your target. The fleet is in the center and the insect swarm is to the right.",
    mapHint: "Select a planet on the map or in the list to set your target.",
    selectedWorldLabel: "Target",
    commandTarget: "Commands for selected system",
    fleetMapLabel: "FLEET",
    swarmMapLabel: "SWARM",
    mapUnknown: "UNKNOWN",
    mapDiscovered: "MAPPED",
    mapColonized: "COLONY",
    mapWorldRhea: "RHEA",
    mapWorldVesper: "VESPER",
    mapWorldKepler: "KEPLER",
    mapWorldTalos: "TALOS",
    actionsTitle: "Choose one action",
    scoutAction: "Scout",
    scoutCost: "Find a world · gain supplies · +signal",
    colonizeAction: "Establish colony",
    colonizeCost: "Cost: 5 supplies · requires a discovered world",
    trainAction: "Train crew",
    trainCost: "Cost: 4 supplies · improves combat power",
    fightAction: "Engage swarm",
    fightCost: "Risky combat · victory lowers pressure",
    hideAction: "Go dark",
    hideCost: "Cost: 1 supply · lower exposure and pressure",
    logTitle: "Campaign log",
    autoSaved: "Auto-saved in this browser",
    saveUnavailable: "Browser storage unavailable",
    statusEyebrow: "PROTOTYPE NOTES",
    statusTitle: "A first playable build",
    statusDescription: "Progress is saved automatically in this browser. Restarting begins a new campaign.",
    changeLanguage: "Change language",
    unknownWorld: "Uncharted system",
    worldRhea: "Rhea · ice moon",
    worldVesper: "Vesper · rocky planet",
    worldKepler: "Kepler · ocean world",
    worldTalos: "Talos · desert planet",
    worldAvailable: "Discovered · available to settle",
    worldColonized: "Colony established",
    startLog: "The fleet enters the system. Find a home before the swarm closes in.",
    scoutLog: "Surveyed {world}; recovered {supplies} supplies.",
    colonizeLog: "A new colony is established on {world}. The fleet's signal grows louder.",
    trainLog: "Crew training complete. Rank increased to {crew}.",
    fightWinLog: "The swarm is driven back. Fleet hull damage: {damage}%.",
    fightLoseLog: "The swarm overwhelms your formation. Fleet hull damage: {damage}%.",
    hideLog: "The fleet goes dark. Signals fade, but the swarm keeps closing in.",
    adaptLog: "The swarm adapts to your repeated {action} tactics.",
    turnLog: "Turn {turn}: swarm pressure rises.",
    raidLog: "The swarm launches a raid. Fleet hull damage: {damage}%; pressure drops as it regroups.",
    destroyedLog: "Fleet hull integrity reached zero. The campaign is lost.",
    detectedLog: "Your signal reaches a hostile presence. The campaign is lost.",
    victoryLog: "Two colonies endure. Your civilization survives the frontier—for now.",
    defeatLog: "The fleet survived, but fewer than two colonies were established in time.",
    fightActionName: "combat",
    scoutActionName: "scouting",
    colonizeActionName: "colonization",
    trainActionName: "training",
    hideActionName: "going dark"
  },
  zh: {
    title: "静默边境",
    subtitle: "关于文明、生存，以及暴露自身危险的科幻角色扮演游戏。",
    passwordEyebrow: "安全通讯",
    passwordTitle: "边境访问验证",
    passwordPrompt: "请输入访问密码以进入战役。",
    passwordLabel: "访问密码",
    passwordSubmit: "进入战役",
    passwordError: "密码错误，请重试。",
    passwordBack: "← 返回模块列表",
    home: "← 返回所有功能",
    eyebrow: "陌生星系，脆弱文明",
    premiseTitle: "每一次扩张，都会留下痕迹。",
    premise: "带领一支幸存者舰队进入未探索的星系，建立家园、培养船员，并对抗会适应你常用战术的虫群。但采矿、殖民和战斗都会产生信号，可能引来更加危险的存在。",
    loopEyebrow: "核心循环",
    loopTitle: "探索、发展、生存",
    loopDescription: "侦察星球、搜集物资、招募并训练专长队员、建立据点，然后决定战斗、撤离还是保持静默。每个回合都要权衡眼前的生存需求与暴露风险。",
    systemsEyebrow: "相互关联的三套系统",
    systemsTitle: "你的选择会改变边境局势",
    growthTitle: "船员成长",
    growthDescription: "培养军官和专长队员，解锁探索、交涉与应对遭遇的新办法。",
    swarmTitle: "不断进化的虫群",
    swarmDescription: "虫群会针对重复战术作出反应，迫使你不断调整，而非依赖一种万能打法。",
    signalTitle: "信号困境",
    signalDescription: "扩张能带来更多资源和选择，但势力越大，被其他文明发现的风险也越高。",
    campaignEyebrow: "可玩原型 · 回合制战役",
    campaignTitle: "第一次接触",
    newCampaign: "重新开始战役",
    objective: "目标：在 8 回合内建立 2 个殖民地并保住舰队。每次行动都会推进时间，虫群也会在每回合后作出反应。",
    turnLabel: "回合",
    suppliesLabel: "物资",
    hullLabel: "舰体完整度",
    crewLabel: "船员等级",
    coloniesLabel: "殖民地",
    exposureLabel: "信号暴露度",
    pressureLabel: "虫群压力",
    mapTitle: "附近星系",
    mapDescription: "选择一颗行星作为目标。舰队位于地图中央，虫群在右侧。",
    mapHint: "点击星图或列表中的行星来指定目标。",
    selectedWorldLabel: "目标",
    commandTarget: "当前星系指令",
    fleetMapLabel: "舰队",
    swarmMapLabel: "虫群",
    mapUnknown: "未知",
    mapDiscovered: "已勘测",
    mapColonized: "殖民地",
    mapWorldRhea: "瑞亚",
    mapWorldVesper: "维斯珀",
    mapWorldKepler: "开普勒",
    mapWorldTalos: "塔罗斯",
    actionsTitle: "选择一项行动",
    scoutAction: "侦察",
    scoutCost: "发现星球 · 获得物资 · 增加信号",
    colonizeAction: "建立殖民地",
    colonizeCost: "消耗 5 物资 · 需要已发现的星球",
    trainAction: "训练船员",
    trainCost: "消耗 4 物资 · 提高战斗力",
    fightAction: "迎战虫群",
    fightCost: "高风险战斗 · 胜利可降低虫群压力",
    hideAction: "进入静默",
    hideCost: "消耗 1 物资 · 降低暴露度和虫群压力",
    logTitle: "战役记录",
    autoSaved: "已自动保存到此浏览器",
    saveUnavailable: "浏览器存储不可用",
    statusEyebrow: "原型说明",
    statusTitle: "首个可玩版本",
    statusDescription: "进度会自动保存在此浏览器中。重新开始将开启一场新战役。",
    changeLanguage: "切换语言",
    unknownWorld: "未探索星系",
    worldRhea: "瑞亚 · 冰卫星",
    worldVesper: "维斯珀 · 岩质行星",
    worldKepler: "开普勒 · 海洋行星",
    worldTalos: "塔罗斯 · 沙漠行星",
    worldAvailable: "已发现 · 可建立殖民地",
    worldColonized: "已建立殖民地",
    startLog: "舰队进入这个星系。趁虫群逼近前找到新家园。",
    scoutLog: "完成对{world}的勘测，回收了 {supplies} 单位物资。",
    colonizeLog: "在{world}建立了新殖民地。舰队信号变得更明显了。",
    trainLog: "船员训练完成，等级提升至 {crew}。",
    fightWinLog: "成功击退虫群。舰队舰体受损 {damage}%。",
    fightLoseLog: "虫群突破了舰队阵形。舰体受损 {damage}%。",
    hideLog: "舰队进入静默。信号减弱了，但虫群仍在逼近。",
    adaptLog: "虫群开始适应你反复使用的{action}战术。",
    turnLog: "第 {turn} 回合：虫群压力正在上升。",
    raidLog: "虫群发动袭击，舰体受损 {damage}%；它们暂时退回巢穴重整。",
    destroyedLog: "舰队舰体完整度降为零，战役失败。",
    detectedLog: "你的信号触及了敌对存在，战役失败。",
    victoryLog: "两个殖民地都存活下来。你的文明暂时在边境站稳了脚跟。",
    defeatLog: "舰队幸存了下来，但未能及时建立两个殖民地。",
    fightActionName: "战斗",
    scoutActionName: "侦察",
    colonizeActionName: "殖民扩张",
    trainActionName: "训练",
    hideActionName: "静默"
  }
};

const languageButton = document.getElementById("language-button");
const gateLanguageButton = document.getElementById("gate-language-button");
const passwordForm = document.getElementById("password-form");
const accessCodeInput = document.getElementById("access-code");
const passwordError = document.getElementById("password-error");
const newCampaignButton = document.getElementById("new-campaign");
const actionButtons = [...document.querySelectorAll("[data-action]")];
const mapNodes = [...document.querySelectorAll(".frontier-world-node")];
const mapFleet = document.getElementById("map-fleet");
const fleetMotion = document.getElementById("fleet-motion");
const mapSwarm = document.getElementById("map-swarm");
const swarmMotion = document.getElementById("swarm-motion");
const targetRoute = document.getElementById("target-route");
let displayedSwarmX = 670;
let displayedFleetPosition = { x: 382, y: 185 };
let fleetAnimationActive = false;
let swarmAnimationActive = false;
let fleetAnimationId = 0;
let swarmAnimationId = 0;
const savedLanguage = localStorage.getItem("universe-language");
let currentLanguage = translations[savedLanguage] ? savedLanguage : "en";
let state = loadCampaign();

function createCampaign() {
  return {
    version: 1,
    turn: 1,
    supplies: 8,
    hull: 100,
    crew: 1,
    colonies: 0,
    exposure: 12,
    pressure: 8,
    adaptation: 0,
    targetWorld: "rhea",
    lastAction: null,
    repeatCount: 0,
    worlds: WORLDS.map((id) => ({ id, discovered: false, colonized: false })),
    log: [{ key: "startLog", values: {} }],
    finished: false,
    result: null
  };
}

function loadCampaign() {
  try {
    const saved = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (
      saved?.version === 1 &&
      Array.isArray(saved.worlds) &&
      Array.isArray(saved.log) &&
      Number.isFinite(saved.turn) &&
      Number.isFinite(saved.supplies)
    ) {
      if (!WORLDS.includes(saved.targetWorld)) saved.targetWorld = WORLDS[0];
      return saved;
    }
  } catch (error) {
    console.warn("Could not load the Silent Frontier campaign.", error);
  }
  return createCampaign();
}

function saveCampaign() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(state));
    document.getElementById("save-status").textContent = translations[currentLanguage].autoSaved;
  } catch (error) {
    document.getElementById("save-status").textContent = translations[currentLanguage].saveUnavailable;
    console.warn("Could not save the Silent Frontier campaign.", error);
  }
}

function format(key, values = {}) {
  return Object.entries(values).reduce(
    (message, [name, value]) => message.replaceAll(`{${name}}`, value),
    translations[currentLanguage][key]
  );
}

function addLog(key, values = {}) {
  state.log.unshift({ key, values });
  state.log = state.log.slice(0, 12);
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
  gateLanguageButton.textContent = currentLanguage === "en" ? "中文" : "English";
  gateLanguageButton.setAttribute("aria-label", text.changeLanguage);
  renderCampaign();
}

function renderCampaign(visualAction) {
  const text = translations[currentLanguage];
  document.getElementById("turn-value").textContent = `${Math.min(state.turn, 8)} / 8`;
  document.getElementById("supplies-value").textContent = state.supplies;
  document.getElementById("hull-value").textContent = `${state.hull}%`;
  document.getElementById("crew-value").textContent = state.crew;
  document.getElementById("colonies-value").textContent = `${state.colonies} / 2`;
  document.getElementById("exposure-value").textContent = `${state.exposure}%`;
  document.getElementById("pressure-value").textContent = `${state.pressure}%`;
  document.getElementById("exposure-bar").style.width = `${state.exposure}%`;
  document.getElementById("pressure-bar").style.width = `${state.pressure}%`;
  const target = state.worlds.find((world) => world.id === state.targetWorld) || state.worlds[0];
  document.getElementById("selected-world-label").textContent = target.discovered
    ? text[`world${capitalize(target.id)}`]
    : text.unknownWorld;
  document.getElementById("command-target-name").textContent = target.discovered
    ? text[`world${capitalize(target.id)}`]
    : text.unknownWorld;
  renderTacticalMap(visualAction);

  mapNodes.forEach((node) => {
    const world = state.worlds.find((candidate) => candidate.id === node.dataset.world);
    const selected = world.id === target.id;
    node.classList.toggle("is-undiscovered", !world.discovered);
    node.classList.toggle("is-colonized", world.colonized);
    node.classList.toggle("is-selected", selected);
    node.setAttribute("aria-pressed", String(selected));
    const accessibleName = world.discovered ? text[`world${capitalize(world.id)}`] : text.unknownWorld;
    node.setAttribute("aria-label", `${accessibleName} · ${world.colonized ? text.mapColonized : world.discovered ? text.mapDiscovered : text.mapUnknown}`);
    document.getElementById(`map-name-${world.id}`).textContent = world.discovered
      ? text[`mapWorld${capitalize(world.id)}`]
      : "?";
    document.getElementById(`map-status-${world.id}`).textContent = world.colonized
      ? text.mapColonized
      : world.discovered
        ? text.mapDiscovered
        : text.mapUnknown;
  });

  const worldList = document.getElementById("world-list");
  worldList.replaceChildren();
  state.worlds.forEach((world) => {
    const item = document.createElement("li");
    const select = document.createElement("button");
    const name = document.createElement("strong");
    const status = document.createElement("span");
    const selected = world.id === target.id;
    name.textContent = world.discovered ? text[`world${capitalize(world.id)}`] : text.unknownWorld;
    status.textContent = world.colonized
      ? text.worldColonized
      : world.discovered
        ? text.worldAvailable
        : text.mapUnknown;
    select.type = "button";
    select.className = "frontier-world-select";
    select.setAttribute("aria-pressed", String(selected));
    select.append(name, status);
    select.addEventListener("click", () => selectWorld(world.id));
    item.append(select);
    item.classList.toggle("is-undiscovered", !world.discovered);
    item.classList.toggle("is-colonized", world.colonized);
    worldList.append(item);
  });

  document.getElementById("campaign-log").replaceChildren(
    ...state.log.map((entry) => {
      const item = document.createElement("li");
      item.textContent = format(entry.key, entry.values);
      return item;
    })
  );

  const outcome = document.getElementById("campaign-outcome");
  outcome.hidden = !state.finished;
  outcome.textContent = state.result ? text[state.result] : "";
  outcome.classList.toggle("is-victory", state.result === "victoryLog");
  actionButtons.forEach((button) => {
    button.disabled = state.finished || isActionUnavailable(button.dataset.action);
  });
}

function renderTacticalMap(visualAction) {
  const targetPosition = WORLD_COORDINATES[state.targetWorld] || WORLD_COORDINATES.rhea;
  const fleetPosition = {
    x: Math.round(382 + (targetPosition.x - 382) * 0.68),
    y: Math.round(185 + (targetPosition.y - 185) * 0.68)
  };
  const currentFleetAnimationId = ++fleetAnimationId;
  if (fleetAnimationActive) fleetMotion.endElement();
  fleetAnimationActive = false;
  mapFleet.setAttribute("transform", `translate(${displayedFleetPosition.x} ${displayedFleetPosition.y})`);

  const swarmX = Math.max(430, 670 - state.pressure * 0.85);
  const fleetDestination = visualAction === "fight"
    ? { x: Math.max(405, swarmX - 45), y: 185 }
    : fleetPosition;
  if (visualAction) {
    const deltaX = fleetDestination.x - displayedFleetPosition.x;
    const deltaY = fleetDestination.y - displayedFleetPosition.y;
    fleetMotion.setAttribute(
      "path",
      `M 0 0 Q ${deltaX * 0.45} ${deltaY * 0.45 - 24} ${deltaX} ${deltaY}`
    );
    displayedFleetPosition = fleetDestination;
    window.requestAnimationFrame(() => {
      if (currentFleetAnimationId !== fleetAnimationId) return;
      fleetAnimationActive = true;
      fleetMotion.beginElement();
      window.setTimeout(() => {
        if (currentFleetAnimationId !== fleetAnimationId) return;
        if (fleetAnimationActive) fleetMotion.endElement();
        fleetAnimationActive = false;
        mapFleet.setAttribute("transform", `translate(${fleetDestination.x} ${fleetDestination.y})`);
      }, 1200);
    });
  } else {
    mapFleet.setAttribute("transform", `translate(${fleetPosition.x} ${fleetPosition.y})`);
    displayedFleetPosition = fleetPosition;
  }

  const currentSwarmAnimationId = ++swarmAnimationId;
  if (swarmAnimationActive) swarmMotion.endElement();
  swarmAnimationActive = false;
  mapSwarm.setAttribute("transform", `translate(${displayedSwarmX} 185)`);
  if (visualAction) {
    const attackX = visualAction === "fight" ? Math.max(410, swarmX - 48) : swarmX;
    swarmMotion.setAttribute("from", `${displayedSwarmX} 185`);
    swarmMotion.setAttribute("to", `${attackX} 185`);
    window.requestAnimationFrame(() => {
      if (currentSwarmAnimationId !== swarmAnimationId) return;
      swarmAnimationActive = true;
      swarmMotion.beginElement();
      window.setTimeout(() => {
        if (currentSwarmAnimationId !== swarmAnimationId) return;
        if (swarmAnimationActive) swarmMotion.endElement();
        swarmAnimationActive = false;
        mapSwarm.setAttribute("transform", `translate(${swarmX} 185)`);
      }, 900);
    });
  } else {
    mapSwarm.setAttribute("transform", `translate(${swarmX} 185)`);
  }
  displayedSwarmX = swarmX;
  const controlX = (382 + swarmX) / 2;
  document.getElementById("swarm-route").setAttribute(
    "d",
    `M 411 185 Q ${controlX} 155 ${swarmX} 185`
  );
  if (visualAction === "fight") {
    mapSwarm.classList.add("is-attacking");
    window.setTimeout(() => {
      if (currentSwarmAnimationId !== swarmAnimationId) return;
      mapSwarm.classList.remove("is-attacking");
      if (swarmAnimationActive) swarmMotion.endElement();
      swarmAnimationActive = false;
      mapSwarm.setAttribute("transform", `translate(${swarmX} 185)`);
    }, 1100);
  } else {
    mapSwarm.classList.remove("is-attacking");
  }

  targetRoute.setAttribute(
    "d",
    `M 382 185 Q ${(382 + targetPosition.x) / 2} ${(185 + targetPosition.y) / 2 - 18} ${targetPosition.x} ${targetPosition.y}`
  );
}

function capitalize(value) {
  return value[0].toUpperCase() + value.slice(1);
}

function selectWorld(worldId) {
  if (!state.worlds.some((world) => world.id === worldId)) return;
  state.targetWorld = worldId;
  saveCampaign();
  renderCampaign("navigate");
}

function isActionUnavailable(action) {
  const target = state.worlds.find((world) => world.id === state.targetWorld);
  if (action === "scout") {
    return !target || target.discovered;
  }
  if (action === "colonize") {
    return state.supplies < 5 || !target?.discovered || target.colonized;
  }
  if (action === "train") {
    return state.supplies < 4 || state.crew >= 5;
  }
  if (action === "hide") {
    return state.supplies < 1;
  }
  return false;
}

function takeAction(action) {
  if (state.finished || isActionUnavailable(action)) return;

  if (state.lastAction === action) {
    state.repeatCount += 1;
  } else {
    state.lastAction = action;
    state.repeatCount = 1;
  }

  if (state.repeatCount === 3) {
    state.adaptation += 1;
    addLog("adaptLog", { action: translations[currentLanguage][`${action}ActionName`] });
  }

  if (action === "scout") scout();
  if (action === "colonize") colonize();
  if (action === "train") trainCrew();
  if (action === "fight") fightSwarm();
  if (action === "hide") goDark();

  state.pressure = Math.min(100, state.pressure + 1 + Math.floor(state.exposure / 40));
  addLog("turnLog", { turn: state.turn });
  resolveSwarmResponse();
  resolveTurn();
  saveCampaign();
  renderCampaign(action);
}

function scout() {
  const world = state.worlds.find((candidate) => candidate.id === state.targetWorld);
  if (!world) return;
  world.discovered = true;
  const recoveredSupplies = 2 + Math.floor(Math.random() * 3);
  state.supplies += recoveredSupplies;
  state.exposure = Math.min(100, state.exposure + 7);
  addLog("scoutLog", {
    world: translations[currentLanguage][`world${capitalize(world.id)}`],
    supplies: recoveredSupplies
  });
}

function colonize() {
  const world = state.worlds.find((candidate) => candidate.id === state.targetWorld);
  if (!world) return;
  world.colonized = true;
  state.supplies -= 5;
  state.colonies += 1;
  state.exposure = Math.min(100, state.exposure + 12);
  state.pressure = Math.min(100, state.pressure + 3);
  addLog("colonizeLog", { world: translations[currentLanguage][`world${capitalize(world.id)}`] });
}

function trainCrew() {
  state.supplies -= 4;
  state.crew += 1;
  state.exposure = Math.min(100, state.exposure + 2);
  addLog("trainLog", { crew: state.crew });
}

function fightSwarm() {
  const fleetPower = state.crew * 18 + Math.floor(Math.random() * 20);
  const swarmPower = 18 + Math.floor(state.pressure * 0.45) + state.adaptation * 5;
  if (fleetPower >= swarmPower) {
    const damage = Math.max(0, 6 - state.crew * 2);
    state.hull = Math.max(0, state.hull - damage);
    state.pressure = Math.max(0, state.pressure - 18);
    state.exposure = Math.min(100, state.exposure + 5);
    addLog("fightWinLog", { damage });
  } else {
    const damage = 16 + Math.floor(Math.random() * 15) + state.adaptation * 3;
    state.hull = Math.max(0, state.hull - damage);
    state.pressure = Math.min(100, state.pressure + 8);
    addLog("fightLoseLog", { damage });
  }
}

function goDark() {
  state.supplies -= 1;
  state.exposure = Math.max(0, state.exposure - 18);
  state.pressure = Math.max(0, state.pressure - 12);
  addLog("hideLog");
}

function resolveSwarmResponse() {
  if (state.pressure < 30) return;
  const damage = 6 + state.adaptation * 2 + Math.floor((state.pressure - 30) / 15) * 3;
  state.hull = Math.max(0, state.hull - damage);
  state.pressure = Math.max(0, state.pressure - 15);
  state.exposure = Math.min(100, state.exposure + 3);
  addLog("raidLog", { damage });
}

function resolveTurn() {
  if (state.hull <= 0) {
    finishCampaign("destroyedLog");
  } else if (state.exposure >= 100) {
    finishCampaign("detectedLog");
  } else if (state.turn >= 8) {
    finishCampaign(state.colonies >= 2 ? "victoryLog" : "defeatLog");
  } else {
    state.turn += 1;
  }
}

function finishCampaign(result) {
  state.finished = true;
  state.result = result;
  addLog(result);
}

mapNodes.forEach((node) => {
  node.addEventListener("click", () => selectWorld(node.dataset.world));
  node.addEventListener("keydown", (event) => {
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      selectWorld(node.dataset.world);
    }
  });
});

actionButtons.forEach((button) => {
  button.addEventListener("click", () => takeAction(button.dataset.action));
});

newCampaignButton.addEventListener("click", () => {
  state = createCampaign();
  saveCampaign();
  renderCampaign();
});

languageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});

gateLanguageButton.addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "zh" : "en";
  localStorage.setItem("universe-language", currentLanguage);
  applyLanguage();
});

passwordForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (accessCodeInput.value === GAME_PASSWORD) {
    document.getElementById("password-gate").hidden = true;
    document.getElementById("frontier-content").hidden = false;
    passwordError.hidden = true;
    accessCodeInput.value = "";
    actionButtons[0]?.focus();
    return;
  }

  passwordError.hidden = false;
  accessCodeInput.value = "";
  accessCodeInput.focus();
});

applyLanguage();
saveCampaign();

