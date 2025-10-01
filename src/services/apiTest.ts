import type { Scenario, Device } from './types';

const SCENARIOS_STORAGE_KEY: string = 'vue-smart-home-scenarios';
const defaultScenarios: Scenario[] = [
  { id: 1, name: 'Home Mode', description: 'When the smart lock detects you arriving home, it triggers a series of actions: the entryway light turns on, the living room air conditioner adjusts to a comfortable temperature, the smart speaker plays your favorite music, and the security system is disarmed.' },
  { id: 2, name: 'Movie Mode', description: 'With a simple "Hey Siri, turn on movie mode," the main living room lights dim, accent light strips turn on, the TV automatically turns on and switches to Netflix, and the curtains slowly close, immersing you in the cinematic world instantly.' },
  { id: 3, name: 'Sleep Mode', description: 'When bedtime arrives or via a voice command, all non-essential lights will turn off, the bedroom night light will turn on, the air conditioner will enter sleep mode, and it will confirm all doors and windows are locked.' },
  { id: 4, name: 'Away Mode', description: 'When you leave home, the system automatically turns off all specified appliances and lights, starts the robot vacuum, and activates the security alert mode to ensure home safety and energy savings.' },
];
// 模擬 call api 獲取資料
export const getScenariosFromStorage = (): Scenario[] => {
  const stored = localStorage.getItem(SCENARIOS_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(SCENARIOS_STORAGE_KEY, JSON.stringify(defaultScenarios));
    return defaultScenarios;
  }
  return JSON.parse(stored) as Scenario[];
}
// 模擬 call api 調整資料
export const saveScenariosToStorage = (scenarios: Scenario[]): void => {
  localStorage.setItem(SCENARIOS_STORAGE_KEY, JSON.stringify(scenarios));
}

const DEVICES_STORAGE_KEY: string = 'vue-smart-home-devices';
const defaultDevices: Device[] = [
  { id: 1, name: 'Smart Lighting', description: 'Users can remotely control lights, adjust brightness and color temperature, and even set schedules. Smart bulbs and light strips are among the most popular products for starting a smart home.' },
  { id: 2, name: 'Smart Thermostat', description: 'Smart thermostats (like Nest) learn your habits and automatically adjust the indoor temperature to balance comfort and energy savings.' },
  { id: 3, name: 'Smart Speaker', description: 'As the hub of the home, smart speakers (like Google Nest, Amazon Echo, Apple HomePod) not only play music but also control other smart devices via voice commands.' },
  { id: 4, name: 'Smart Security', description: 'Includes smart locks, surveillance cameras, door/window sensors, etc., providing remote monitoring, abnormal activity detection, and alarm functions to enhance home security.' },
];
// 模擬 call api 獲取資料
export const getDevicesFromStorage = (): Device[] => {
  const stored = localStorage.getItem(DEVICES_STORAGE_KEY);
  if (!stored) {
    localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(defaultDevices));
    return defaultDevices;
  }
  return JSON.parse(stored) as Device[];
}
// 模擬 call api 調整資料
export const saveDevicesToStorage = (devices: Device[]): void => {
  localStorage.setItem(DEVICES_STORAGE_KEY, JSON.stringify(devices));
}