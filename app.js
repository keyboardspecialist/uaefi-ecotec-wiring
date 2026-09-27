const STORAGE_KEY = "l61-wiring-bench-v1";

const UAEFI_CONNECTORS = {
  A: {
    label: "Connector A",
    description: "Power and DBW",
    layout: [
      ["A8", "A7", "A6", "A5"],
      ["A4", "A3", "A2", "A1"],
    ],
  },
  B: {
    label: "Connector B",
    description: "Injector, ignition, and low-side outputs",
    layout: [
      ["B18", "B17", "B16", "B15", "B14", "B13", "B12", "B11", "B10"],
      ["B9", "B8", "B7", "B6", "B5", "B4", "B3", "B2", "B1"],
    ],
  },
  C: {
    label: "Connector C",
    description: "Trigger, auxiliary, and sensor inputs",
    layout: [
      ["C20", "C19", "C18", "C17", "C16", "C15", "C14", "C13", "C12", "C11"],
      ["C10", "C9", "C8", "C7", "C6", "C5", "C4", "C3", "C2", "C1"],
    ],
  },
  D: {
    label: "Connector D",
    description: "Primary engine sensors",
    layout: [
      ["D16", "D15", "D14", "D13", "D12", "D11", "D10", "D9"],
      ["D8", "D7", "D6", "D5", "D4", "D3", "D2", "D1"],
    ],
  },
};

const UAEFI_PIN_INFO = {
  A1: ["DC1- / H-Bridge 1", "white"],
  A5: ["DC1+ / H-Bridge 1", "blue"],
  B5: ["Injector output 2", "white"],
  B6: ["Injector output 1", "green"],
  B8: ["Fan relay weak low-side output 2 (no flyback)", "red"],
  B14: ["Smart ignition coil 2", "white"],
  B15: ["Smart ignition coil 1", "green"],
  C5: ["Hall input 1", "green"],
  C2: ["Sensor +5 V power feed", "red"],
  C4: ["Suggested PPS 2 input", "orange/brown"],
  C12: ["Sensor ground", "black"],
  C13: ["Sensor ground", "black"],
  C14: ["Suggested TPS 2 input", "blue"],
  C18: ["VR1+ discrete low-count trigger", "blue"],
  C19: ["VR1- discrete low-count trigger", "white"],
  D3: ["Sensor +5 V power feed", "red"],
  D4: ["Sensor +5 V power feed", "red"],
  D6: ["Suggested PPS 1 input", "white"],
  D9: ["Suggested MAP input", "yellow"],
  D11: ["Sensor ground", "black"],
  D12: ["Sensor ground", "black"],
  D13: ["Suggested TPS 1 input", "green"],
  D14: ["Knock input", "yellow"],
  D15: ["IAT sensor input", "blue"],
  D16: ["CLT coolant sensor input", "grey"],
};

const UAEFI_ROUTE_PINS = {
  "Crank VR +": "C18",
  "Crank VR -": "C19",
  "Knock sensor +": "D14",
  "Knock sensor -": "D12",
  "5 V reference": "D3",
  "Sensor ground": "D11",
  "MAP signal": "D9",
  "IAT signal": "D15",
  "CLT signal": "D16",
  "TPS 1 signal": "D13",
  "TPS 2 signal": "C14",
  "DBW motor +": "A5",
  "DBW motor -": "A1",
  "Injector bank A": "B6",
  "Injector bank B": "B5",
  "Ignition control A": "B15",
  "Ignition control B": "B14",
  "Compression sense": "C5",
  "Fan relay control": "B8",
};

const THROTTLE_ACTUATOR_PINS = [
  { pin: "A", wire: "D-GN", circuitNumber: "485", function: "TPS 1 signal", routeId: "route-10-tps-1-signal" },
  { pin: "B", wire: "TN/WH", circuitNumber: "1704", function: "Low reference", routeId: "route-6-sensor-ground" },
  { pin: "C", wire: "GY", circuitNumber: "2701", function: "5 V reference", routeId: "route-5-5-v-reference" },
  { pin: "D", wire: "PU", circuitNumber: "486", function: "TPS 2 signal", routeId: "route-11-tps-2-signal" },
  { pin: "E", wire: "BN", circuitNumber: "582", function: "Motor control 2", routeId: "route-13-dbw-motor" },
  { pin: "F", wire: "YE", circuitNumber: "581", function: "Motor control 1", routeId: "route-12-dbw-motor" },
  { pin: "G", wire: "TN", circuitNumber: "2752", function: "Low reference", routeId: "route-6-sensor-ground" },
  { pin: "H", wire: "L-BU/BK", circuitNumber: "1688", function: "5 V reference", routeId: "route-5-5-v-reference" },
];

const SIGNAL_CAVITY_IDS = [
  "a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "p",
  "r", "s", "t", "u", "v", "w", "aa", "bb", "cc", "dd", "ee", "ff", "gg", "hh",
];

const BULKHEAD_CAVITIES = [
  { id: "1", x: 36.2, y: 36.7, size: "large" },
  { id: "2", x: 60.8, y: 36.7, size: "large" },
  { id: "3", x: 60.8, y: 66.6, size: "large" },
  { id: "4", x: 36.2, y: 66.6, size: "large" },
  { id: "aa", x: 44.7, y: 31.8 },
  { id: "bb", x: 51.8, y: 31.8 },
  { id: "a", x: 44.7, y: 39.2 },
  { id: "b", x: 52.0, y: 39.2 },
  { id: "hh", x: 26.6, y: 45.0 },
  { id: "c", x: 33.8, y: 45.0 },
  { id: "d", x: 41.1, y: 45.0 },
  { id: "e", x: 48.4, y: 45.0 },
  { id: "f", x: 55.6, y: 45.0 },
  { id: "g", x: 62.9, y: 45.0 },
  { id: "cc", x: 70.3, y: 45.0 },
  { id: "h", x: 30.0, y: 52.0 },
  { id: "i", x: 37.4, y: 52.0 },
  { id: "k", x: 44.7, y: 52.0 },
  { id: "l", x: 52.0, y: 52.0 },
  { id: "m", x: 59.2, y: 52.0 },
  { id: "n", x: 66.6, y: 52.0 },
  { id: "gg", x: 26.5, y: 58.8 },
  { id: "p", x: 33.8, y: 58.8 },
  { id: "r", x: 41.1, y: 58.8 },
  { id: "s", x: 48.4, y: 58.8 },
  { id: "t", x: 55.6, y: 58.8 },
  { id: "u", x: 62.9, y: 58.8 },
  { id: "dd", x: 70.4, y: 58.8 },
  { id: "v", x: 44.7, y: 64.8 },
  { id: "w", x: 52.0, y: 64.8 },
  { id: "ff", x: 44.7, y: 72.1 },
  { id: "ee", x: 52.0, y: 72.1 },
];

const LEGACY_CAVITY_MAP = Object.fromEntries([
  ...SIGNAL_CAVITY_IDS.map((id, index) => [index + 1, id]),
  [29, "1"],
  [30, "2"],
  [31, "3"],
  [32, "4"],
]);

const BULKHEAD_CAVITY_IDS = new Set(BULKHEAD_CAVITIES.map((cavity) => cavity.id));

const seededCircuits = [
  route(1, "Crank VR +", "uaEFI", "C18", "Crank position sensor", "TBD", "Sensor", "#f4d35e", "C18 is uaEFI VR1+ for low-count wheels. Twisted pair with bulkhead cavity 2; confirm L61 polarity and trigger configuration."),
  route(2, "Crank VR -", "uaEFI", "C19", "Crank position sensor", "TBD", "Sensor", "#f4d35e", "C19 is uaEFI VR1- for low-count wheels. Twisted pair with bulkhead cavity 1."),
  route(3, "Knock sensor +", "uaEFI", "D14", "Knock sensor", "TBD", "Sensor", "#79c7ff", "D14 is the uaEFI knock input. Confirm the installed sensor and calibration."),
  route(4, "Knock sensor -", "uaEFI", "D12", "Knock sensor", "TBD", "Sensor", "#79c7ff", "The uaEFI pinout directs the other knock-sensor lead to sensor/analog ground; D12 is selected here."),
  route(5, "5 V reference", "uaEFI", "D3", "MAP / TPS splice", "SPLICE", "Sensor", "#f28e2b", "D3 is a uaEFI sensor +5 V feed. Use a 20 AWG trunk to a sealed engine-harness splice and 22 AWG branches."),
  route(6, "Sensor ground", "uaEFI", "D11", "Sensor return splice", "SPLICE", "Sensor", "#b8b8b8", "D11 is uaEFI sensor ground. Never connect this circuit to engine or chassis ground."),
  route(7, "MAP signal", "uaEFI", "D9", "MAP sensor", "TBD", "Sensor", "#59a14f", "D9 is the documented suggested MAP input. Shares cavity 5 reference and cavity 6 sensor ground engine-side."),
  route(8, "IAT signal", "uaEFI", "D15", "Intake air temp sensor", "TBD", "Sensor", "#76b7b2", "D15 is the dedicated IAT sensor input. Sensor return branches from the cavity 6 splice."),
  route(9, "CLT signal", "uaEFI", "D16", "Coolant temp sensor", "TBD", "Sensor", "#4e79a7", "D16 is the dedicated CLT coolant sensor input. Sensor return branches from the cavity 6 splice."),
  route(10, "TPS 1 signal", "uaEFI", "D13", "DBW throttle body", "TBD", "DBW", "#edc949", "D13 is the documented suggested TPS 1 input. Confirm throttle-body cavity."),
  route(11, "TPS 2 signal", "uaEFI", "C14", "DBW throttle body", "TBD", "DBW", "#af7aa1", "C14 is the documented suggested TPS 2 input. Confirm throttle-body cavity."),
  route(12, "DBW motor +", "uaEFI", "A5", "DBW throttle motor", "TBD", "DBW", "#ff9da7", "A5 is DC1+ / H-Bridge 1. Use one contact and confirm polarity during DBW setup."),
  route(13, "DBW motor -", "uaEFI", "A1", "DBW throttle motor", "TBD", "DBW", "#ff9da7", "A1 is DC1- / H-Bridge 1. Route beside cavity 12 and away from VR/analog wiring."),
  route(14, "Injector bank A", "uaEFI", "B6", "Injectors bank A", "TBD", "Injection", "#e15759", "B6 is injector output 1. Batch-fire low-side control; confirm bank grouping in configuration."),
  route(15, "Injector bank B", "uaEFI", "B5", "Injectors bank B", "TBD", "Injection", "#e15759", "B5 is injector output 2. Batch-fire low-side control; confirm bank grouping in configuration."),
  route(16, "Injector switched +12 V", "Engine power relay", "TBD", "Injector power splice", "SPLICE", "Power", "#d62728", "Confirm current, fuse, contact rating, and whether power distribution moves underhood.", "18 AWG"),
  route(17, "Ignition control A", "uaEFI", "B15", "ICM / cassette", "White - cavity TBD", "Ignition", "#f5f5f5", "B15 is smart ignition output 1. The stock ICM control wire was identified as white; verify logic compatibility and continuity."),
  route(18, "Ignition control B", "uaEFI", "B14", "ICM / cassette", "Orange - cavity TBD", "Ignition", "#ff9f40", "B14 is smart ignition output 2. The stock ICM control wire was identified as orange; verify logic compatibility and continuity."),
  route(19, "ICM switched +12 V - 1", "Engine power relay", "TBD", "ICM / cassette", "TBD", "Power", "#d62728", "Proposed first of two parallel contacts. Verify the connector maker permits paralleling."),
  route(20, "ICM switched +12 V - 2", "Engine power relay", "TBD", "ICM / cassette", "TBD", "Power", "#d62728", "Proposed second parallel contact. A single correctly rated feed may be preferable."),
  route(21, "Compression sense", "uaEFI", "C5", "ICM / cassette", "Brown/White - cavity TBD", "Ignition", "#9c755f", "C5 Hall input 1 is selected for the optional ICM-derived phase signal. Confirm voltage behavior before connection."),
  route(22, "Alternator excite", "Charge / ignition circuit", "TBD", "Alternator", "TBD", "Control", "#bab0ac", "Confirm the exact alternator terminal and required lamp/resistor behavior."),
  route(23, "Oil pressure", "Gauge / warning input", "TBD", "Oil pressure sender", "TBD", "Sensor", "#499894", "Decide whether this is the stock switch, an analog sender, or both."),
  route(24, "Fan relay control", "uaEFI", "B8", "Fan relay terminal 85", "85", "Control", "#86bc86", "Bulkhead cavity 24 was inferred in the earlier layout. B8 is a weak low-side output with no onboard flyback; add external suppression unless the relay includes it.", "18-20 AWG"),
  cabinRoute("pedal-1", "APP 5 V reference 2", "C2", "1", "BN/RD", "1274", "#8b5a3c", "B107 pin 1 is Accelerator Pedal Position 5 V Reference 2."),
  cabinRoute("pedal-2", "APP signal 2", "C4", "2", "GN/WH", "1162", "#59a14f", "B107 pin 2 is Accelerator Pedal Position Signal 2; C4 is uaEFI's suggested PPS2 input."),
  cabinRoute("pedal-3", "APP low reference 2", "C13", "3", "BK/VT", "1272", "#7a5a8f", "B107 pin 3 is Accelerator Pedal Position Low Reference 2."),
  cabinRoute("pedal-4", "APP low reference 1", "C12", "4", "BK/BU", "1271", "#4e79a7", "B107 pin 4 is Accelerator Pedal Position Low Reference 1."),
  cabinRoute("pedal-5", "APP signal 1", "D6", "5", "YE/WH", "1161", "#edc949", "B107 pin 5 is Accelerator Pedal Position Signal 1; D6 is uaEFI's suggested PPS1 input."),
  cabinRoute("pedal-6", "APP 5 V reference 1", "D4", "6", "WH/RD", "1164", "#f2d4d4", "B107 pin 6 is Accelerator Pedal Position 5 V Reference 1."),
];

function cabinRoute(id, name, uaefiPin, pedalPin, wireColor, circuitNumber, color, notes) {
  return {
    id: `cabin-${id}`,
    name,
    category: "DBW",
    scope: "cabin",
    bulkheadPin: null,
    color,
    colorName: wireColor,
    gauge: "0.35 mm2",
    notes: `${notes} GM circuit ${circuitNumber}; wire ${wireColor}. Verify uaEFI assignment and pedal continuity before DBW setup.`,
    complete: false,
    source: { component: "uaEFI", pin: uaefiPin, verified: false },
    engine: { component: "B107 accelerator pedal", pin: pedalPin, verified: false },
  };
}

function route(bulkheadPin, name, sourceComponent, sourcePin, engineComponent, enginePin, category, color, notes, gauge = "20-22 AWG", sourceVerified = false) {
  return {
    id: `route-${bulkheadPin}-${slug(name)}`,
    name,
    category,
    bulkheadPin: LEGACY_CAVITY_MAP[bulkheadPin] ?? bulkheadPin,
    color,
    colorName: "Unassigned",
    gauge,
    notes,
    complete: false,
    source: { component: sourceComponent, pin: sourcePin, verified: sourceVerified },
    engine: { component: engineComponent, pin: enginePin, verified: false },
  };
}

function slug(value) {
  return value.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
}

const defaultProject = {
  version: 5,
  name: "L61 Wiring Bench",
  connector: { name: "Round 32-pin", pinCount: 32, largePins: ["1", "2", "3", "4"] },
  noteDismissed: false,
  circuits: seededCircuits,
};

let state = loadProject();
let activeFilter = "all";
let searchTerm = "";
let selectedCircuitId = null;
let selectedPin = null;
let dragState = null;
let toastTimer = null;

const elements = {
  board: document.querySelector("#board"),
  boardScroller: document.querySelector("#board-scroller"),
  wireLayer: document.querySelector("#wire-layer"),
  wirePaths: document.querySelector("#wire-paths"),
  dragPath: document.querySelector("#drag-path"),
  sourceList: document.querySelector("#source-list"),
  engineList: document.querySelector("#engine-list"),
  pinGrid: document.querySelector("#pin-grid"),
  connectorTitle: document.querySelector("#connector-title"),
  connectorAlert: document.querySelector("#connector-alert"),
  cabinCount: document.querySelector("#cabin-count"),
  cabinRouteList: document.querySelector("#cabin-route-list"),
  pedalPins: document.querySelector("#pedal-pins"),
  throttleRouteList: document.querySelector("#throttle-route-list"),
  metrics: document.querySelector("#metrics"),
  projectTitle: document.querySelector("#project-title"),
  sourceCount: document.querySelector("#source-count"),
  engineCount: document.querySelector("#engine-count"),
  searchInput: document.querySelector("#search-input"),
  selectionBanner: document.querySelector("#selection-banner"),
  selectionCopy: document.querySelector("#selection-copy"),
  clearPinButton: document.querySelector("#clear-pin-button"),
  saveState: document.querySelector("#save-state"),
  editorDialog: document.querySelector("#editor-dialog"),
  editorForm: document.querySelector("#editor-form"),
  checklistDialog: document.querySelector("#checklist-dialog"),
  checklistProgress: document.querySelector("#checklist-progress"),
  checklistList: document.querySelector("#checklist-list"),
  toast: document.querySelector("#toast"),
};

function loadProject() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY));
    const originalVersion = parsed?.version;
    const saved = migrateProject(parsed);
    if (isValidProject(saved)) {
      if (originalVersion !== saved.version) localStorage.setItem(STORAGE_KEY, JSON.stringify(saved));
      return saved;
    }
  } catch (error) {
    console.warn("Could not load saved wiring project", error);
  }
  return structuredClone(defaultProject);
}

function migrateProject(project) {
  if (!project || !Array.isArray(project.circuits)) return project;

  if (project.version === 1) {
    for (const circuit of project.circuits) {
      const defaultCircuit = seededCircuits.find((item) => item.id === circuit.id);
      const plannedPin = UAEFI_ROUTE_PINS[defaultCircuit?.name ?? circuit.name];
      if (plannedPin && circuit.source?.component === "uaEFI" && (!circuit.source.pin || circuit.source.pin === "TBD" || circuit.source.pin === "B8")) {
        circuit.source.pin = plannedPin;
      }
    }
    project.version = 2;
  }

  if (project.version === 2) {
    project.connector = project.connector ?? {};
    if (!project.connector.name || project.connector.name === "P48") project.connector.name = "Round 32-pin";
    project.connector.pinCount = 32;
    project.connector.largePins = ["1", "2", "3", "4"];
    project.version = 3;
  }

  if (project.version === 3) {
    for (const circuit of seededCircuits.filter((item) => item.scope === "cabin")) {
      if (!project.circuits.some((item) => item.id === circuit.id)) project.circuits.push(structuredClone(circuit));
    }
    project.version = 4;
  }

  if (project.version === 4) {
    for (const circuit of project.circuits) {
      if (typeof circuit.bulkheadPin === "number") {
        circuit.bulkheadPin = LEGACY_CAVITY_MAP[circuit.bulkheadPin] ?? null;
      }
    }
    project.connector.largePins = ["1", "2", "3", "4"];
    project.version = 5;
  }
  return project;
}

function isValidProject(project) {
  if (
    !project ||
    project.version !== 5 ||
    typeof project.name !== "string" ||
    project.connector?.pinCount !== 32 ||
    !Array.isArray(project.circuits)
  ) {
    return false;
  }

  const assignedPins = new Set();
  return project.circuits.every((circuit) => {
    if (
      !circuit ||
      typeof circuit.id !== "string" ||
      typeof circuit.name !== "string" ||
      typeof circuit.source !== "object" ||
      typeof circuit.engine !== "object"
    ) {
      return false;
    }
    if (circuit.bulkheadPin == null) return true;
    if (typeof circuit.bulkheadPin !== "string" || !BULKHEAD_CAVITY_IDS.has(circuit.bulkheadPin)) return false;
    if (assignedPins.has(circuit.bulkheadPin)) return false;
    assignedPins.add(circuit.bulkheadPin);
    return true;
  });
}

function saveProject() {
  elements.saveState.textContent = "Saving...";
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.setTimeout(() => {
      elements.saveState.textContent = "Saved locally";
    }, 180);
  } catch (error) {
    console.warn("Could not save wiring project", error);
    elements.saveState.textContent = "Storage unavailable";
    showToast("Browser storage is unavailable. Export JSON to keep your changes.");
  }
}

function visibleCircuits() {
  return state.circuits
    .filter((circuit) => circuit.scope !== "cabin")
    .filter((circuit) => {
      if (activeFilter === "open" && circuit.complete) return false;
      if (activeFilter === "complete" && !circuit.complete) return false;
      if (activeFilter === "unassigned" && circuit.bulkheadPin != null) return false;
      if (!searchTerm) return true;
      const haystack = [
        circuit.name,
        circuit.category,
        circuit.source.component,
        circuit.source.pin,
        UAEFI_PIN_INFO[String(circuit.source.pin).toUpperCase()]?.join(" "),
        circuit.engine.component,
        circuit.engine.pin,
        circuit.notes,
        circuit.bulkheadPin,
      ]
        .join(" ")
        .toLowerCase();
      return haystack.includes(searchTerm);
    })
    .sort((a, b) => cavitySortIndex(a.bulkheadPin) - cavitySortIndex(b.bulkheadPin) || a.name.localeCompare(b.name));
}

function cavitySortIndex(pin) {
  if (pin == null) return 999;
  const signalIndex = SIGNAL_CAVITY_IDS.indexOf(String(pin));
  if (signalIndex >= 0) return signalIndex;
  const largeIndex = ["1", "2", "3", "4"].indexOf(String(pin));
  return largeIndex >= 0 ? 100 + largeIndex : 999;
}

function visibleCabinCircuits() {
  if (activeFilter === "unassigned") return [];
  return state.circuits
    .filter((circuit) => circuit.scope === "cabin")
    .filter((circuit) => {
      if (activeFilter === "open" && circuit.complete) return false;
      if (activeFilter === "complete" && !circuit.complete) return false;
      if (!searchTerm) return true;
      return [
        circuit.name,
        circuit.source.pin,
        UAEFI_PIN_INFO[String(circuit.source.pin).toUpperCase()]?.join(" "),
        circuit.engine.pin,
        circuit.colorName,
        circuit.notes,
      ]
        .join(" ")
        .toLowerCase()
        .includes(searchTerm);
    })
    .sort((a, b) => Number(a.engine.pin) - Number(b.engine.pin));
}

function render() {
  const circuits = visibleCircuits();
  const ecuCount = circuits.filter((circuit) => uaefiConnectorForPin(circuit.source.pin)).length;
  elements.projectTitle.textContent = state.name;
  elements.connectorTitle.textContent = `${state.connector.name} / ${state.connector.pinCount} position`;
  elements.sourceCount.textContent = `${ecuCount} ECU / ${circuits.length - ecuCount} CABIN`;
  elements.engineCount.textContent = `${circuits.length} CIRCUITS`;
  renderMetrics();
  renderSourceGroups(circuits);
  renderRouteList(elements.engineList, circuits, "engine");
  renderPins();
  renderConnectorAlert();
  renderCabinPanel();
  renderSelection();
  renderChecklist();
  window.requestAnimationFrame(drawWires);
}

function renderMetrics() {
  const assigned = state.circuits.filter((circuit) => circuit.bulkheadPin != null).length;
  const complete = state.circuits.filter((circuit) => circuit.complete).length;
  const verifiedSides = state.circuits.reduce(
    (sum, circuit) => sum + Number(circuit.source.verified) + Number(circuit.engine.verified),
    0,
  );
  const totalSides = state.circuits.length * 2;
  const metrics = [
    [assigned, "Pins used"],
    [state.connector.pinCount - assigned, "Spare"],
    [`${complete}/${state.circuits.length}`, "Checked"],
    [`${verifiedSides}/${totalSides}`, "Ends verified"],
  ];
  elements.metrics.innerHTML = metrics
    .map(
      ([value, label]) =>
        `<div class="metric"><span class="metric-value">${escapeHtml(String(value))}</span><span class="metric-label">${label}</span></div>`,
    )
    .join("");
}

function renderRouteList(container, circuits, side) {
  if (!circuits.length) {
    container.innerHTML = '<div class="empty-state">No circuits match this view.</div>';
    return;
  }

  container.innerHTML = circuits.map((circuit) => renderRouteCard(circuit, side)).join("");
}

function renderSourceGroups(circuits) {
  if (!circuits.length) {
    elements.sourceList.innerHTML = '<div class="empty-state">No circuits match this view.</div>';
    return;
  }

  const groups = Object.keys(UAEFI_CONNECTORS).map((connectorId) => ({
    connectorId,
    circuits: circuits.filter((circuit) => uaefiConnectorForPin(circuit.source.pin) === connectorId),
  }));
  const external = circuits.filter((circuit) => !uaefiConnectorForPin(circuit.source.pin));

  elements.sourceList.innerHTML = [
    ...groups.filter((group) => group.circuits.length).map((group) => renderUaefiGroup(group.connectorId, group.circuits)),
    external.length ? renderExternalGroup(external) : "",
  ].join("");
}

function renderUaefiGroup(connectorId, circuits) {
  const connector = UAEFI_CONNECTORS[connectorId];
  const assigned = new Map(circuits.map((circuit) => [String(circuit.source.pin).toUpperCase(), circuit]));
  const rows = connector.layout
    .map(
      (row) => `
        <div class="uaefi-pin-row" style="--cavity-columns:${row.length}">
          ${row.map((pin) => renderUaefiCavity(pin, assigned.get(pin))).join("")}
        </div>`,
    )
    .join("");
  return `
    <section class="uaefi-group" data-connector="${connectorId}">
      <div class="uaefi-group-heading">
        <div><strong>${connector.label}</strong><span>${connector.description}</span></div>
        <span>${circuits.length} LINKED</span>
      </div>
      <div class="uaefi-shell" aria-label="${connector.label} cavity view">
        <div class="uaefi-orientation"><i></i>CAVITY VIEW</div>
        ${rows}
      </div>
      <div class="uaefi-routes">${circuits.map((circuit) => renderRouteCard(circuit, "source")).join("")}</div>
    </section>`;
}

function renderUaefiCavity(pin, circuit) {
  const [pinFunction = "See official uaEFI pinout", pigtailColor = "unknown"] = UAEFI_PIN_INFO[pin] ?? [];
  const linked = circuit ? " linked" : "";
  const selected = circuit?.id === selectedCircuitId ? " selected" : "";
  const title = circuit
    ? `${pin}: ${pinFunction}; uaEFI pigtail ${pigtailColor}; linked to ${circuit.name}`
    : `${pin}: ${pinFunction}; not used in this project`;
  const routeAttribute = circuit ? ` data-ecu-route="${circuit.id}"` : "";
  const color = circuit ? safeColor(circuit.color) : "#555c53";
  return `
    <button class="uaefi-cavity${linked}${selected}" style="--route-color:${color}"${routeAttribute} title="${escapeHtml(title)}" type="button">
      <span>${pin}</span>${circuit ? '<i aria-hidden="true"></i>' : ""}
    </button>`;
}

function renderExternalGroup(circuits) {
  return `
    <section class="uaefi-group external-group">
      <div class="uaefi-group-heading">
        <div><strong>Cabin circuits</strong><span>Relay, gauge, and charge wiring</span></div>
        <span>${circuits.length} ROUTES</span>
      </div>
      <div class="uaefi-routes">${circuits.map((circuit) => renderRouteCard(circuit, "source")).join("")}</div>
    </section>`;
}

function renderRouteCard(circuit, side) {
  const endpoint = circuit[side];
  const selected = circuit.id === selectedCircuitId ? " selected" : "";
  const complete = circuit.complete ? " complete" : "";
  const verification = endpoint.verified
    ? '<span class="verified-flag">VERIFIED</span>'
    : '<span class="verify-flag">VERIFY</span>';
  const title = `${circuit.name} - ${circuit.notes}`;
  const pinInfo = side === "source" ? UAEFI_PIN_INFO[String(endpoint.pin).toUpperCase()] : null;
  const documentedFunction = pinInfo
    ? `<div class="route-pin-function">${escapeHtml(pinInfo[0])} / ${escapeHtml(pinInfo[1])} pigtail</div>`
    : "";
  const content = `
    <input class="route-check" type="checkbox" data-action="complete" data-id="${circuit.id}" ${circuit.complete ? "checked" : ""} aria-label="Check off ${escapeHtml(circuit.name)}" />
    <div class="route-copy">
      <button class="route-name" data-action="edit" data-id="${circuit.id}" title="${escapeHtml(title)}">${escapeHtml(circuit.name)}</button>
      <div class="route-meta">
        <span class="pin-label">${escapeHtml(endpoint.pin || "TBD")}</span>
        <span class="component-name">${escapeHtml(endpoint.component || "Unnamed")}</span>
        <span class="bulkhead-route-label">CAV ${escapeHtml(circuit.bulkheadPin ?? "-")}</span>
        ${verification}
      </div>
      ${documentedFunction}
    </div>
    <button class="terminal" style="--wire-color:${safeColor(circuit.color)}" data-terminal="${side}" data-id="${circuit.id}" aria-label="Connect ${escapeHtml(circuit.name)} to a bulkhead cavity"></button>`;
  return `<article class="route-card${selected}${complete}" data-route-id="${circuit.id}" title="${escapeHtml(circuit.notes)}">${content}</article>`;
}

function uaefiConnectorForPin(pin) {
  const match = String(pin ?? "").toUpperCase().match(/^([ABCD])\d+$/);
  return match && UAEFI_CONNECTORS[match[1]] ? match[1] : null;
}

function renderPins() {
  const assignedByPin = new Map(state.circuits.map((circuit) => [circuit.bulkheadPin, circuit]));
  const largePins = new Set(state.connector.largePins ?? []);
  elements.pinGrid.innerHTML = BULKHEAD_CAVITIES.map((cavity) => {
    const circuit = assignedByPin.get(cavity.id);
    const assigned = circuit ? " assigned" : "";
    const large = largePins.has(cavity.id) ? " power-contact" : "";
    const selected = cavity.id === selectedPin ? " selected" : "";
    const color = circuit ? safeColor(circuit.color) : "#596057";
    const contactType = largePins.has(cavity.id) ? "large contact" : "signal contact";
    const title = circuit ? `Cavity ${cavity.id} (${contactType}): ${circuit.name}` : `Cavity ${cavity.id} (${contactType}): spare`;
    return `
      <button class="p48-pin physical-pin${assigned}${large}${selected}" style="--pin-color:${color};--pin-x:${cavity.x}%;--pin-y:${cavity.y}%" data-pin="${cavity.id}" title="${escapeHtml(title)}" type="button">
        <span class="p48-number">${cavity.id}</span>
        <span class="p48-route">${circuit ? escapeHtml(circuit.name) : "SPARE"}</span>
      </button>`;
  }).join("");
  elements.clearPinButton.disabled = selectedPin == null || !assignedByPin.has(selectedPin);
}

function renderConnectorAlert() {
  const assignments = (state.connector.largePins ?? [])
    .map((pin) => {
      const circuit = state.circuits.find((item) => item.bulkheadPin === pin);
      return circuit ? `${pin}: ${circuit.name}` : `${pin}: spare`;
    })
    .join(" / ");
  elements.connectorAlert.innerHTML = `<strong>Large cavities 1-4</strong><span>${escapeHtml(assignments)}</span><small>Legacy routes were moved onto named signal cavities. Allocate these large contacts deliberately after confirming their wire-size and current ratings.</small>`;
}

function renderCabinPanel() {
  const circuits = visibleCabinCircuits();
  const allPedalCircuits = state.circuits.filter((circuit) => circuit.scope === "cabin");
  elements.cabinCount.textContent = `${allPedalCircuits.length} APP CIRCUITS / 0 BULKHEAD`;
  elements.pedalPins.innerHTML = [6, 5, 4, 3, 2, 1]
    .map((pin) => {
      const circuit = allPedalCircuits.find((item) => Number(item.engine.pin) === pin);
      const selected = circuit?.id === selectedCircuitId ? " selected" : "";
      return `<button class="pedal-pin${selected}" style="--route-color:${safeColor(circuit?.color)}" data-cabin-select="${circuit?.id ?? ""}" title="${circuit ? escapeHtml(`${circuit.name} - ${circuit.colorName}`) : `B107 pin ${pin}`}" type="button">${pin}</button>`;
    })
    .join("");
  renderThrottleRoutes();

  if (!circuits.length) {
    elements.cabinRouteList.innerHTML = '<div class="empty-state">No pedal circuits match this view.</div>';
    return;
  }

  elements.cabinRouteList.innerHTML = circuits
    .map((circuit) => {
      const pinInfo = UAEFI_PIN_INFO[String(circuit.source.pin).toUpperCase()] ?? ["uaEFI input", "unknown"];
      return `
        <article class="cabin-route${circuit.complete ? " complete" : ""}${circuit.id === selectedCircuitId ? " selected" : ""}">
          <input class="route-check" type="checkbox" data-cabin-complete="${circuit.id}" ${circuit.complete ? "checked" : ""} aria-label="Check off ${escapeHtml(circuit.name)}" />
          <span class="cabin-ecu-pin"><small>uaEFI</small>${escapeHtml(circuit.source.pin)}</span>
          <div class="cabin-wire" style="--route-color:${safeColor(circuit.color)}"><i></i><span>${escapeHtml(circuit.colorName)}</span></div>
          <span class="cabin-pedal-pin"><small>APP</small>B107-${escapeHtml(circuit.engine.pin)}</span>
          <div class="cabin-route-copy">
            <strong>${escapeHtml(circuit.name)}</strong>
            <span>${escapeHtml(pinInfo[0])}</span>
          </div>
          <button class="checklist-edit" data-cabin-edit="${circuit.id}" type="button">EDIT</button>
        </article>`;
    })
    .join("");
}

function renderThrottleRoutes() {
  elements.throttleRouteList.innerHTML = THROTTLE_ACTUATOR_PINS.map((actuatorPin) => {
    const circuit = state.circuits.find((item) => item.id === actuatorPin.routeId);
    const selected = circuit?.id === selectedCircuitId ? " selected" : "";
    const assignment = circuit
      ? `uaEFI ${circuit.source.pin || "TBD"} / ${circuit.bulkheadPin == null ? "unassigned" : `CAV ${circuit.bulkheadPin}`}`
      : "Route not found";
    const routeAttribute = circuit ? ` data-throttle-select="${circuit.id}"` : "";
    return `
      <button class="throttle-route${selected}"${routeAttribute} type="button">
        <span class="throttle-pin">${actuatorPin.pin}</span>
        <span class="throttle-wire">${actuatorPin.wire}<small>GM ${actuatorPin.circuitNumber}</small></span>
        <span class="throttle-function"><strong>${actuatorPin.function}</strong><small>${escapeHtml(assignment)}</small></span>
      </button>`;
  }).join("");
}

function renderSelection() {
  const circuit = getCircuit(selectedCircuitId);
  if (!circuit) {
    elements.selectionBanner.hidden = true;
    return;
  }
  elements.selectionBanner.hidden = false;
  elements.selectionCopy.innerHTML = circuit.scope === "cabin"
    ? `<strong>${escapeHtml(circuit.name)}</strong> selected. This route stays inside the cabin and does not use a bulkhead cavity.`
    : `<strong>${escapeHtml(circuit.name)}</strong> selected. Click an empty bulkhead cavity to assign it, or click the name to edit details.`;
}

function renderChecklist() {
  const sorted = [...state.circuits].sort(
    (a, b) => Number(a.complete) - Number(b.complete) || cavitySortIndex(a.bulkheadPin) - cavitySortIndex(b.bulkheadPin),
  );
  const complete = state.circuits.filter((circuit) => circuit.complete).length;
  const percent = state.circuits.length ? Math.round((complete / state.circuits.length) * 100) : 0;
  elements.checklistProgress.innerHTML = `
    <div class="progress-copy"><span>${complete} of ${state.circuits.length} routes checked</span><strong>${percent}%</strong></div>
    <div class="progress-track"><div class="progress-fill" style="width:${percent}%"></div></div>`;
  elements.checklistList.innerHTML = sorted
    .map(
      (circuit) => `
        <div class="checklist-item">
          <input class="route-check" type="checkbox" data-checklist-complete="${circuit.id}" ${circuit.complete ? "checked" : ""} aria-label="Check off ${escapeHtml(circuit.name)}" />
          <span class="checklist-pin">${circuit.scope === "cabin" ? "CAB" : circuit.bulkheadPin == null ? "-" : `C:${circuit.bulkheadPin}`}</span>
          <div>
            <div class="checklist-name">${escapeHtml(circuit.name)}</div>
            <div class="checklist-detail">${escapeHtml(circuit.source.pin || "TBD")} &rarr; ${escapeHtml(circuit.engine.pin || "TBD")}</div>
          </div>
          <button class="checklist-edit" data-checklist-edit="${circuit.id}" type="button">EDIT</button>
        </div>`,
    )
    .join("");
}

function drawWires() {
  const boardRect = elements.board.getBoundingClientRect();
  const svgWidth = elements.board.scrollWidth;
  const svgHeight = elements.board.scrollHeight;
  elements.wireLayer.setAttribute("viewBox", `0 0 ${svgWidth} ${svgHeight}`);
  elements.wireLayer.setAttribute("width", svgWidth);
  elements.wireLayer.setAttribute("height", svgHeight);

  const paths = [];
  for (const circuit of visibleCircuits()) {
    if (circuit.bulkheadPin == null) continue;
    const pin = elements.pinGrid.querySelector(`[data-pin="${circuit.bulkheadPin}"]`);
    if (!pin) continue;
    const source = elements.sourceList.querySelector(`[data-terminal="source"][data-id="${circuit.id}"]`);
    const engine = elements.engineList.querySelector(`[data-terminal="engine"][data-id="${circuit.id}"]`);
    const pinRect = pin.getBoundingClientRect();
    const pinLeft = { x: pinRect.left - boardRect.left, y: pinRect.top + pinRect.height / 2 - boardRect.top };
    const pinRight = { x: pinRect.right - boardRect.left, y: pinRect.top + pinRect.height / 2 - boardRect.top };
    const classes = `wire-path${circuit.complete ? " complete" : ""}${circuit.id === selectedCircuitId ? " selected" : ""}`;
    if (source) {
      paths.push(pathMarkup(circuit, source, pinLeft, boardRect, classes, "source"));
    }
    if (engine) {
      paths.push(pathMarkup(circuit, engine, pinRight, boardRect, classes, "engine"));
    }
  }
  elements.wirePaths.innerHTML = paths.join("");
}

function pathMarkup(circuit, terminal, pinPoint, boardRect, classes, side) {
  const terminalRect = terminal.getBoundingClientRect();
  const start = {
    x: terminalRect.left + terminalRect.width / 2 - boardRect.left,
    y: terminalRect.top + terminalRect.height / 2 - boardRect.top,
  };
  const d = curvedPath(start, pinPoint, side === "source" ? 1 : -1);
  return `<path class="${classes}" stroke="${safeColor(circuit.color)}" d="${d}" />`;
}

function curvedPath(start, end, direction) {
  const distance = Math.max(28, Math.abs(end.x - start.x) * 0.48);
  return `M ${start.x} ${start.y} C ${start.x + distance * direction} ${start.y}, ${end.x - distance * direction} ${end.y}, ${end.x} ${end.y}`;
}

function selectCircuit(id) {
  selectedCircuitId = selectedCircuitId === id ? null : id;
  selectedPin = selectedCircuitId ? getCircuit(selectedCircuitId)?.bulkheadPin ?? null : null;
  render();
}

function assignPin(circuitId, pin) {
  const circuit = getCircuit(circuitId);
  if (!circuit) return;
  if (circuit.scope === "cabin") {
    showToast(`${circuit.name} is cabin-only and does not use the bulkhead connector.`);
    return;
  }
  const occupant = state.circuits.find((item) => item.bulkheadPin === pin && item.id !== circuitId);
  if (occupant) {
    showToast(`Cavity ${pin} is already assigned to ${occupant.name}. Clear it first.`);
    return;
  }
  circuit.bulkheadPin = pin;
  selectedCircuitId = circuitId;
  selectedPin = pin;
  saveProject();
  render();
  showToast(`${circuit.name} assigned to cavity ${pin}.`);
}

function clearSelectedPin() {
  const circuit = state.circuits.find((item) => item.bulkheadPin === selectedPin);
  if (!circuit) return;
  circuit.bulkheadPin = null;
  selectedPin = null;
  saveProject();
  render();
  showToast(`${circuit.name} is now unassigned.`);
}

function toggleComplete(id, checked) {
  const circuit = getCircuit(id);
  if (!circuit) return;
  circuit.complete = checked;
  saveProject();
  render();
}

function openEditor(id = null) {
  const circuit = getCircuit(id);
  document.querySelector("#dialog-eyebrow").textContent = circuit ? "Edit route" : "New route";
  document.querySelector("#dialog-title").textContent = circuit ? circuit.name : "Add circuit";
  document.querySelector("#circuit-id").value = circuit?.id ?? "";
  document.querySelector("#circuit-name").value = circuit?.name ?? "";
  document.querySelector("#circuit-category").value = circuit?.category ?? "Sensor";
  document.querySelector("#source-component").value = circuit?.source.component ?? "uaEFI";
  document.querySelector("#source-pin").value = circuit?.source.pin ?? "TBD";
  document.querySelector("#engine-component").value = circuit?.engine.component ?? "";
  document.querySelector("#engine-pin").value = circuit?.engine.pin ?? "TBD";
  document.querySelector("#wire-color").value = safeColor(circuit?.color ?? "#d7ff3f");
  document.querySelector("#wire-color-name").value = circuit?.colorName ?? "";
  document.querySelector("#wire-gauge").value = circuit?.gauge ?? "20-22 AWG";
  document.querySelector("#circuit-notes").value = circuit?.notes ?? "";
  document.querySelector("#source-verified").checked = circuit?.source.verified ?? false;
  document.querySelector("#engine-verified").checked = circuit?.engine.verified ?? false;
  document.querySelector("#circuit-complete").checked = circuit?.complete ?? false;
  document.querySelector("#delete-button").hidden = !circuit;
  populatePinSelect(circuit?.bulkheadPin ?? null, circuit?.id ?? null);
  document.querySelector("#circuit-pin").disabled = circuit?.scope === "cabin";
  elements.editorDialog.showModal();
  window.setTimeout(() => document.querySelector("#circuit-name").focus(), 0);
}

function populatePinSelect(currentPin, circuitId) {
  const occupied = new Set(
    state.circuits.filter((circuit) => circuit.id !== circuitId && circuit.bulkheadPin != null).map((circuit) => circuit.bulkheadPin),
  );
  const options = ['<option value="">Unassigned</option>'];
  for (const pin of ["1", "2", "3", "4", ...SIGNAL_CAVITY_IDS]) {
    const disabled = occupied.has(pin) ? " disabled" : "";
    const selected = pin === currentPin ? " selected" : "";
    const occupant = state.circuits.find((circuit) => circuit.bulkheadPin === pin && circuit.id !== circuitId);
    options.push(`<option value="${pin}"${disabled}${selected}>Cavity ${pin}${occupant ? ` - ${escapeHtml(occupant.name)}` : ""}</option>`);
  }
  document.querySelector("#circuit-pin").innerHTML = options.join("");
}

function saveEditor(event) {
  event.preventDefault();
  const existingId = document.querySelector("#circuit-id").value;
  const existing = getCircuit(existingId);
  const name = document.querySelector("#circuit-name").value.trim();
  if (!name) return;

  const circuit = existing ?? {
    id: `route-${Date.now()}-${slug(name)}`,
    source: {},
    engine: {},
  };
  circuit.name = name;
  circuit.category = document.querySelector("#circuit-category").value;
  circuit.bulkheadPin = valueOrNull(document.querySelector("#circuit-pin").value);
  circuit.color = document.querySelector("#wire-color").value;
  circuit.colorName = document.querySelector("#wire-color-name").value.trim();
  circuit.gauge = document.querySelector("#wire-gauge").value.trim();
  circuit.notes = document.querySelector("#circuit-notes").value.trim();
  circuit.complete = document.querySelector("#circuit-complete").checked;
  circuit.source = {
    component: document.querySelector("#source-component").value.trim(),
    pin: document.querySelector("#source-pin").value.trim(),
    verified: document.querySelector("#source-verified").checked,
  };
  circuit.engine = {
    component: document.querySelector("#engine-component").value.trim(),
    pin: document.querySelector("#engine-pin").value.trim(),
    verified: document.querySelector("#engine-verified").checked,
  };
  if (!existing) state.circuits.push(circuit);
  selectedCircuitId = circuit.id;
  selectedPin = circuit.bulkheadPin;
  saveProject();
  elements.editorDialog.close();
  render();
  showToast(existing ? "Route updated." : "Circuit added.");
}

function deleteCurrentCircuit() {
  const id = document.querySelector("#circuit-id").value;
  const circuit = getCircuit(id);
  if (!circuit || !window.confirm(`Delete "${circuit.name}"? This cannot be undone.`)) return;
  state.circuits = state.circuits.filter((item) => item.id !== id);
  selectedCircuitId = null;
  selectedPin = null;
  saveProject();
  elements.editorDialog.close();
  render();
  showToast("Circuit deleted.");
}

function beginDrag(event) {
  const terminal = event.target.closest("[data-terminal]");
  if (!terminal) return;
  event.preventDefault();
  const circuit = getCircuit(terminal.dataset.id);
  if (!circuit) return;
  selectedCircuitId = circuit.id;
  selectedPin = circuit.bulkheadPin;
  const boardRect = elements.board.getBoundingClientRect();
  const terminalRect = terminal.getBoundingClientRect();
  dragState = {
    pointerId: event.pointerId,
    circuitId: circuit.id,
    terminal,
    side: terminal.dataset.terminal,
    start: {
      x: terminalRect.left + terminalRect.width / 2 - boardRect.left,
      y: terminalRect.top + terminalRect.height / 2 - boardRect.top,
    },
  };
  terminal.setPointerCapture(event.pointerId);
  terminal.closest(".route-card")?.classList.add("dragging");
  elements.dragPath.hidden = false;
  updateDrag(event);
  renderSelection();
}

function updateDrag(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const boardRect = elements.board.getBoundingClientRect();
  const end = { x: event.clientX - boardRect.left, y: event.clientY - boardRect.top };
  elements.dragPath.setAttribute("d", curvedPath(dragState.start, end, dragState.side === "source" ? 1 : -1));
  document.querySelectorAll(".p48-pin.drop-target").forEach((pin) => pin.classList.remove("drop-target"));
  document.elementFromPoint(event.clientX, event.clientY)?.closest(".p48-pin")?.classList.add("drop-target");
}

function endDrag(event) {
  if (!dragState || event.pointerId !== dragState.pointerId) return;
  const target = document.elementFromPoint(event.clientX, event.clientY)?.closest(".p48-pin");
  dragState.terminal.closest(".route-card")?.classList.remove("dragging");
  document.querySelectorAll(".p48-pin.drop-target").forEach((pin) => pin.classList.remove("drop-target"));
  elements.dragPath.hidden = true;
  elements.dragPath.setAttribute("d", "");
  const circuitId = dragState.circuitId;
  dragState = null;
  if (target) assignPin(circuitId, target.dataset.pin);
  else render();
}

function exportProject() {
  const payload = JSON.stringify(state, null, 2);
  const blob = new Blob([payload], { type: "application/json" });
  const link = document.createElement("a");
  link.href = URL.createObjectURL(blob);
  link.download = `${slug(state.name) || "wiring-project"}.json`;
  link.click();
  URL.revokeObjectURL(link.href);
  showToast("Project exported as JSON.");
}

async function importProject(event) {
  const [file] = event.target.files;
  event.target.value = "";
  if (!file) return;
  try {
    const project = migrateProject(JSON.parse(await file.text()));
    if (!isValidProject(project)) throw new Error("Unsupported wiring project format");
    state = project;
    selectedCircuitId = null;
    selectedPin = null;
    saveProject();
    render();
    showToast("Project imported.");
  } catch (error) {
    showToast(`Import failed: ${error.message}`);
  }
}

function renameProject() {
  const nextName = window.prompt("Project name", state.name)?.trim();
  if (!nextName || nextName === state.name) return;
  state.name = nextName;
  saveProject();
  render();
}

function getCircuit(id) {
  return state.circuits.find((circuit) => circuit.id === id);
}

function valueOrNull(value) {
  return value === "" ? null : value;
}

function safeColor(value) {
  return /^#[0-9a-f]{6}$/i.test(value || "") ? value : "#d7ff3f";
}

function escapeHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function showToast(message) {
  elements.toast.textContent = message;
  elements.toast.classList.add("visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => elements.toast.classList.remove("visible"), 2600);
}

document.querySelector("#add-button").addEventListener("click", () => openEditor());
document.querySelector("#export-button").addEventListener("click", exportProject);
document.querySelector("#import-button").addEventListener("click", () => document.querySelector("#import-input").click());
document.querySelector("#import-input").addEventListener("change", importProject);
document.querySelector("#project-title").addEventListener("click", renameProject);
document.querySelector("#clear-pin-button").addEventListener("click", clearSelectedPin);
document.querySelector("#cancel-selection").addEventListener("click", () => {
  selectedCircuitId = null;
  selectedPin = null;
  render();
});
document.querySelector("#dismiss-note").addEventListener("click", () => {
  document.querySelector(".safety-note").hidden = true;
  state.noteDismissed = true;
  saveProject();
});
document.querySelector("#reset-view-button").addEventListener("click", () => {
  searchTerm = "";
  activeFilter = "all";
  elements.searchInput.value = "";
  document.querySelectorAll(".filter-button").forEach((button) => button.classList.toggle("active", button.dataset.filter === "all"));
  render();
});
document.querySelector("#checklist-button").addEventListener("click", () => elements.checklistDialog.showModal());
document.querySelector("#close-checklist").addEventListener("click", () => elements.checklistDialog.close());
document.querySelector("#cancel-dialog").addEventListener("click", () => elements.editorDialog.close());
document.querySelector("#delete-button").addEventListener("click", deleteCurrentCircuit);
elements.editorForm.addEventListener("submit", saveEditor);

elements.searchInput.addEventListener("input", (event) => {
  searchTerm = event.target.value.trim().toLowerCase();
  render();
});

document.querySelector(".filter-group").addEventListener("click", (event) => {
  const button = event.target.closest("[data-filter]");
  if (!button) return;
  activeFilter = button.dataset.filter;
  document.querySelectorAll(".filter-button").forEach((item) => item.classList.toggle("active", item === button));
  render();
});

elements.board.addEventListener("click", (event) => {
  const edit = event.target.closest('[data-action="edit"]');
  if (edit) {
    openEditor(edit.dataset.id);
    return;
  }
  const check = event.target.closest('[data-action="complete"]');
  if (check) {
    toggleComplete(check.dataset.id, check.checked);
    return;
  }
  const ecuCavity = event.target.closest("[data-ecu-route]");
  if (ecuCavity) {
    selectCircuit(ecuCavity.dataset.ecuRoute);
    return;
  }
  const pin = event.target.closest(".p48-pin");
  if (pin) {
    const pinNumber = pin.dataset.pin;
    if (selectedCircuitId) assignPin(selectedCircuitId, pinNumber);
    else {
      selectedPin = selectedPin === pinNumber ? null : pinNumber;
      const occupant = state.circuits.find((circuit) => circuit.bulkheadPin === selectedPin);
      selectedCircuitId = occupant?.id ?? null;
      render();
    }
    return;
  }
  const card = event.target.closest(".route-card");
  if (card && !event.target.closest(".terminal")) selectCircuit(card.dataset.routeId);
});

elements.board.addEventListener("pointerdown", beginDrag);
elements.board.addEventListener("pointermove", updateDrag);
elements.board.addEventListener("pointerup", endDrag);
elements.board.addEventListener("pointercancel", endDrag);

elements.checklistList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-checklist-complete]");
  if (checkbox) toggleComplete(checkbox.dataset.checklistComplete, checkbox.checked);
});

elements.checklistList.addEventListener("click", (event) => {
  const edit = event.target.closest("[data-checklist-edit]");
  if (!edit) return;
  elements.checklistDialog.close();
  openEditor(edit.dataset.checklistEdit);
});

elements.cabinRouteList.addEventListener("change", (event) => {
  const checkbox = event.target.closest("[data-cabin-complete]");
  if (checkbox) toggleComplete(checkbox.dataset.cabinComplete, checkbox.checked);
});

elements.cabinRouteList.addEventListener("click", (event) => {
  const edit = event.target.closest("[data-cabin-edit]");
  if (edit) openEditor(edit.dataset.cabinEdit);
});

elements.pedalPins.addEventListener("click", (event) => {
  const pin = event.target.closest("[data-cabin-select]");
  if (pin?.dataset.cabinSelect) selectCircuit(pin.dataset.cabinSelect);
});

elements.throttleRouteList.addEventListener("click", (event) => {
  const route = event.target.closest("[data-throttle-select]");
  if (route) selectCircuit(route.dataset.throttleSelect);
});

elements.boardScroller.addEventListener("scroll", () => window.requestAnimationFrame(drawWires));
window.addEventListener("resize", () => window.requestAnimationFrame(drawWires));
new ResizeObserver(() => window.requestAnimationFrame(drawWires)).observe(elements.board);

if (state.noteDismissed) document.querySelector(".safety-note").hidden = true;
render();
