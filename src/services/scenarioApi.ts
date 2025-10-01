import axios from 'axios';
import { getScenariosFromStorage, saveScenariosToStorage } from './apiTest';
import type { Scenario } from './types';

const API_BASE_URL = `${window.location.origin}/api/scenarios`;
const apiLatency = 200; // 模擬 API 延遲

export const getScenarios = async (): Promise<Scenario[]> => {
  return new Promise<Scenario[]>((resolve) => {
    setTimeout(() => {
      resolve(getScenariosFromStorage());
    }, apiLatency);
  });
  // const { data } = await axios.get<Scenario[]>(API_BASE_URL);
  // return data;
};

export const addScenario = async (scenario: Omit<Scenario, 'id'>): Promise<Scenario> => {
  return new Promise<Scenario>((resolve) => {
    setTimeout(() => {
      const scenarios = getScenariosFromStorage();
      const newScenario = { ...scenario, id: Date.now() };
      scenarios.push(newScenario);
      saveScenariosToStorage(scenarios);
      resolve(newScenario);
    }, apiLatency);
  });
  // const { data } = await axios.post<Scenario>(API_BASE_URL, scenario);
  // return data;
};

export const updateScenario = async (updatedScenario: Scenario): Promise<Scenario> => {
  return new Promise<Scenario>((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.map(s => s.id === updatedScenario.id ? updatedScenario : s);
      saveScenariosToStorage(scenarios);
      resolve(updatedScenario);
    }, apiLatency);
  });
  // const { data } = await axios.put<Scenario>(`${API_BASE_URL}/${updatedScenario.id}`, updatedScenario);
  // return data;
};

export const deleteScenarioById = async (id: number): Promise<{ success: boolean }> => {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      let scenarios = getScenariosFromStorage();
      scenarios = scenarios.filter(s => s.id !== id);
      saveScenariosToStorage(scenarios);
      resolve({ success: true });
    }, apiLatency);
  });
  // const { data } = await axios.delete<{ success: boolean }>(`${API_BASE_URL}/${id}`);
  // return data;
};