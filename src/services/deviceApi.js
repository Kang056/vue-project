import axios from 'axios';
import { getDevicesFromStorage, saveDevicesToStorage } from './apiTest';

const API_BASE_URL = `${window.location.origin}/api/devices`;
const apiLatency = 200; // 模擬 API 延遲

export const getDevices = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(getDevicesFromStorage());
    }, apiLatency);
  });
  const { data } = await axios.get(API_BASE_URL);
  return data;
};

export const addDevice = async (device) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const devices = getDevicesFromStorage();
      device.id = Date.now();
      devices.push(device);
      saveDevicesToStorage(devices);
      resolve(device);
    }, apiLatency);
  });
  const { data } = await axios.post(API_BASE_URL, device);
  return data;
};

export const updateDevice = async (updateddevice) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let devices = getDevicesFromStorage();
      devices = devices.map(s => s.id === updateddevice.id ? updateddevice : s);
      saveDevicesToStorage(devices);
      resolve(updateddevice);
    }, apiLatency);
  });
  const { data } = await axios.put(`${API_BASE_URL}/${updateddevice.id}`, updateddevice);
  return data;
};

export const deleteDeviceById = async (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let devices = getDevicesFromStorage();
      devices = devices.filter(s => s.id !== id);
      saveDevicesToStorage(devices);
      resolve({ success: true });
    }, apiLatency);
  });
  const { data } = await axios.delete(`${API_BASE_URL}/${id}`);
  return data;
};