const STORAGE_KEY = 'vue-smart-home-scenarios';

const defaultScenarios = [
  { id: 1, name: 'Home Mode', description: 'When the smart lock detects you arriving home, it triggers a series of actions: the entryway light turns on, the living room air conditioner adjusts to a comfortable temperature, the smart speaker plays your favorite music, and the security system is disarmed.' },
  { id: 2, name: 'Movie Mode', description: 'With a simple "Hey Siri, turn on movie mode," the main living room lights dim, accent light strips turn on, the TV automatically turns on and switches to Netflix, and the curtains slowly close, immersing you in the cinematic world instantly.' },
  { id: 3, name: 'Sleep Mode', description: 'When bedtime arrives or via a voice command, all non-essential lights will turn off, the bedroom night light will turn on, the air conditioner will enter sleep mode, and it will confirm all doors and windows are locked.' },
  { id: 4, name: 'Away Mode', description: 'When you leave home, the system automatically turns off all specified appliances and lights, starts the robot vacuum, and activates the security alert mode to ensure home safety and energy savings.' },
];

// 模擬 API 延遲
const apiLatency = 200;

function getScenariosFromStorage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(defaultScenarios));
    return defaultScenarios;
  }
  return JSON.parse(stored);
}

function saveScenariosToStorage(scenarios) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(scenarios));
}

export const getScenarios = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getScenariosFromStorage());
    }, apiLatency);
  });
};

export const addScenario = (scenario) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const scenarios = getScenariosFromStorage();
      scenario.id = Date.now();
      scenarios.push(scenario);
      saveScenariosToStorage(scenarios);
      resolve(scenario);
    }, apiLatency);
  });
};

export const updateScenario = (updatedScenario) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.map(s => s.id === updatedScenario.id ? updatedScenario : s);
      saveScenariosToStorage(scenarios);
      resolve(updatedScenario);
    }, apiLatency);
  });
};

export const deleteScenarioById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.filter(s => s.id !== id);
      saveScenariosToStorage(scenarios);
      resolve({ success: true });
    }, apiLatency);
  });
};