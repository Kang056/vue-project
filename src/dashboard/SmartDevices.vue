<template>
  <div class="page-container">
    <h1>{{ t('smartDevices.pageTitle') }}</h1>

    <div class="toolbar">
      <input type="text" v-model="searchQuery" :placeholder="t('smartDevices.searchPlaceholder')" class="search-bar" />
      <button @click="openAddForm" class="action-button add-button">{{ t('smartDevices.addButton') }}</button>
    </div>

    <!-- 新增/修改表單 -->
    <div v-if="showForm" class="form-overlay">
      <div class="form-card">
        <h2>{{ isEditing ? t('smartDevices.editTitle') : t('smartDevices.addTitle') }}</h2>
        <form @submit.prevent="saveDevice">
          <div class="form-group">
            <label for="deviceName">{{ t('smartDevices.nameLabel') }}</label>
            <input id="deviceName" v-model="currentDevice.name" required />
          </div>
          <div class="form-group">
            <label for="deviceDesc">{{ t('smartDevices.descriptionLabel') }}</label>
            <textarea id="deviceDesc" v-model="currentDevice.description" rows="4" required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="action-button">{{ isEditing ? t('saveChanges') : t('add') }}</button>
            <button type="button" @click="closeForm" class="action-button cancel-button">{{ t('cancel') }}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 裝置列表 -->
    <div class="card-list">
      <div v-for="device in filteredDevices" :key="device.id" class="card">
        <div class="card-content">
          <h2>{{ device.name }}</h2>
          <p>{{ device.description }}</p>
        </div>
        <div class="card-actions">
          <button @click="openEditForm(device)" class="action-button edit-button">{{ t('edit') }}</button>
          <button @click="deleteDevice(device.id)" class="action-button delete-button">{{ t('delete') }}</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted } from 'vue';
import { useI18n } from 'vue-i18n';
import { getDevices, addDevice, updateDevice, deleteDeviceById } from '@/services/deviceApi';
import { Device } from '@/services/types';

const { t } = useI18n();

const devices = ref<Device[]>([]);
const isLoading = ref<boolean>(false);

const searchQuery = ref<string>('');
const showForm = ref<boolean>(false);
const currentDevice = ref<Device>({ id: null, name: '', description: '' });
const isEditing = ref<boolean>(false);

const filteredDevices = computed<Device[]>(() => {
  if (!searchQuery.value) {
    return devices.value;
  }
  return devices.value.filter(device =>
    device.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    device.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const fetchDevices = async (): Promise<void> => {
  isLoading.value = true;
  devices.value = await getDevices();
  isLoading.value = false;
};

const openAddForm = (): void => {
  isEditing.value = false;
  currentDevice.value = { id: null, name: '', description: '' };
  showForm.value = true;
};

const openEditForm = (device: Device): void => {
  isEditing.value = true;
  currentDevice.value = { ...device };
  showForm.value = true;
};

const closeForm = (): void => {
  showForm.value = false;
};

const saveDevice = async (): Promise<void> => {
  if (isEditing.value) {
    await updateDevice({ ...currentDevice.value });
  } else {
    await addDevice({ ...currentDevice.value });
  }
  closeForm();
  await fetchDevices();
};

const deleteDevice = async (id: number | null): Promise<void> => {
  if (confirm(t('smartDevices.deleteConfirm'))) {
    await deleteDeviceById(id);
    await fetchDevices();
  }
};
onMounted(fetchDevices);
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-color);
}

h1 {
  color: var(--primary-accent);
  border-bottom: 1px solid var(--secondary-accent);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.toolbar {
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
}

.search-bar {
  width: 50%;
  padding: 0.5rem;
  background-color: var(--secondary-accent);
  border: 1px solid var(--primary-accent);
  border-radius: 4px;
  color: var(--text-color);
}

.card-list {
  display: grid;
  gap: 1.5rem;
}

.card {
  background: var(--container-bg);
  border: 1px solid var(--secondary-accent);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  transition: all 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 20px rgba(83, 114, 240, 0.1);
  border-color: var(--primary-accent);
}

.card h2 {
  color: var(--primary-accent);
  margin-top: 0;
}

.card p {
  line-height: 1.6;
  color: var(--hint-color);
}

.card-actions {
  margin-top: 1rem;
  display: flex;
  gap: 0.5rem;
  justify-content: flex-end;
}

.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
}

.add-button {
  background-color: var(--primary-accent);
  color: #fff;
}

.edit-button {
  background-color: var(--primary-accent);
  color: #fff;
}

.delete-button {
  background-color: var(--error-color);
  color: #fff;
}

.cancel-button {
  background-color: #6c757d;
  color: white;
}

.action-button:hover {
  opacity: 0.9;
}

/* 表單樣式 */
.form-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.form-card {
  background: var(--dark-bg);
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  border: 1px solid var(--primary-accent);
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 0.5rem;
  background-color: var(--secondary-accent);
  border: 1px solid var(--primary-accent);
  border-radius: 4px;
  color: var(--text-color);
  box-sizing: border-box;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 1.5rem;
}

@media (max-width: 768px) {
  .toolbar {
    flex-direction: column;
    gap: 1rem;
  }
  .search-bar {
    width: 100%;
  }
}
</style>