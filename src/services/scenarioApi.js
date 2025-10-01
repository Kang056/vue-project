import axios from 'axios';
import { getScenariosFromStorage, saveScenariosToStorage } from './apiTest';

const API_BASE_URL = `${window.location.origin}/api/scenarios`;
const apiLatency = 200; // 模擬 API 延遲

export const getScenarios = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getScenariosFromStorage());
    }, apiLatency);
  });
  const { data } = await axios.get(API_BASE_URL);
  return data;
};

export const addScenario = async (scenario) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const scenarios = getScenariosFromStorage();
      scenario.id = Date.now();
      scenarios.push(scenario);
      saveScenariosToStorage(scenarios);
      resolve(scenario);
    }, apiLatency);
  });
  const { data } = await axios.post(API_BASE_URL, scenario);
  return data;
};

export const updateScenario = async (updatedScenario) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.map(s => s.id === updatedScenario.id ? updatedScenario : s);
      saveScenariosToStorage(scenarios);
      resolve(updatedScenario);
    }, apiLatency);
  });
  const { data } = await axios.put(`${API_BASE_URL}/${updatedScenario.id}`, updatedScenario);
  return data;
};

export const deleteScenarioById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.filter(s => s.id !== id);
      saveScenariosToStorage(scenarios);
      resolve({ success: true });
    }, apiLatency);
  });
  const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
  return data;
};