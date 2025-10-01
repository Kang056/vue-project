import axios from 'axios';
import { getDevicesFromStorage, saveDevicesToStorage } from './apiTest';
import type { Device } from './types';

const API_BASE_URL = `${window.location.origin}/api/devices`;
const apiLatency = 200; // 模擬 API 延遲

export const getDevices = async (): Promise<Device[]> => {
  return new Promise<Device[]>((resolve) => {
    setTimeout(() => {
      resolve(getDevicesFromStorage());
    }, apiLatency);
  });
  // const { data } = await axios.get<Device[]>(API_BASE_URL);
  // return data;
};

export const addDevice = async (device: Omit<Device, 'id'>): Promise<Device> => {
  return new Promise<Device>((resolve) => {
    setTimeout(() => {
      const devices = getDevicesFromStorage();
      const newDevice = { ...device, id: Date.now() };
      devices.push(newDevice);
      saveDevicesToStorage(devices);
      resolve(newDevice);
    }, apiLatency);
  });
  // const { data } = await axios.post<Device>(API_BASE_URL, device);
  // return data;
};

export const updateDevice = async (updateddevice: Device): Promise<Device> => {
  return new Promise<Device>((resolve) => {
    setTimeout(() => {
      let devices = getDevicesFromStorage();
      devices = devices.map(s => s.id === updateddevice.id ? updateddevice : s);
      saveDevicesToStorage(devices);
      resolve(updateddevice);
    }, apiLatency);
  });
  // const { data } = await axios.put<Device>(`${API_BASE_URL}/${updateddevice.id}`, updateddevice);
  // return data;
};

export const deleteDeviceById = async (id: number): Promise<{ success: boolean }> => {
  return new Promise<{ success: boolean }>((resolve) => {
    setTimeout(() => {
      let devices = getDevicesFromStorage();
      devices = devices.filter(s => s.id !== id);
      saveDevicesToStorage(devices);
      resolve({ success: true });
    }, apiLatency);
  });
  // const { data } = await axios.delete<{ success: boolean }>(`${API_BASE_URL}/${id}`);
  // return data;
};