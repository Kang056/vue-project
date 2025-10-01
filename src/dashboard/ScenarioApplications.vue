<template>
  <div class="page-container">
    <h1>{{ t('scenarioApps.pageTitle') }}</h1>

    <div class="toolbar">
      <input type="text" v-model="searchQuery" :placeholder="t('scenarioApps.searchPlaceholder')" class="search-bar" />
      <button @click="openAddForm" class="action-button add-button">{{ t('scenarioApps.addButton') }}</button>
    </div>

    <!-- 新增/修改表單 -->
    <div v-if="showForm" class="form-overlay">
      <div class="form-card">
        <h2>{{ isEditing ? t('scenarioApps.editTitle') : t('scenarioApps.addTitle') }}</h2>
        <form @submit.prevent="saveScenario">
          <div class="form-group">
            <label for="scenarioName">{{ t('scenarioApps.nameLabel') }}</label>
            <input id="scenarioName" v-model="currentScenario.name" required />
          </div>
          <div class="form-group">
            <label for="scenarioDesc">{{ t('scenarioApps.descriptionLabel') }}</label>
            <textarea id="scenarioDesc" v-model="currentScenario.description" rows="4" required></textarea>
          </div>
          <div class="form-actions">
            <button type="submit" class="action-button">{{ isEditing ? t('saveChanges') : t('add') }}</button>
            <button type="button" @click="closeForm" class="action-button cancel-button">{{ t('cancel') }}</button>
          </div>
        </form>
      </div>
    </div>

    <!-- 情境列表 -->
    <div class="card-list">
      <div v-for="scenario in filteredScenarios" :key="scenario.id" class="card">
        <div class="card-content">
          <h2>{{ scenario.name }}</h2>
          <p>{{ scenario.description }}</p>
        </div>
        <div class="card-actions">
          <button @click="openEditForm(scenario)" class="action-button edit-button">{{ t('edit') }}</button>
          <button @click="deleteScenario(scenario.id)" class="action-button delete-button">{{ t('delete') }}</button>
        </div>
      </div>
    </div>

  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const scenarios = ref([
  { id: 1, name: 'Home Mode', description: 'When the smart lock detects you arriving home, it triggers a series of actions: the entryway light turns on, the living room air conditioner adjusts to a comfortable temperature, the smart speaker plays your favorite music, and the security system is disarmed.' },
  { id: 2, name: 'Movie Mode', description: 'With a simple "Hey Siri, turn on movie mode," the main living room lights dim, accent light strips turn on, the TV automatically turns on and switches to Netflix, and the curtains slowly close, immersing you in the cinematic world instantly.' },
  { id: 3, name: 'Sleep Mode', description: 'When bedtime arrives or via a voice command, all non-essential lights will turn off, the bedroom night light will turn on, the air conditioner will enter sleep mode, and it will confirm all doors and windows are locked.' },
  { id: 4, name: 'Away Mode', description: 'When you leave home, the system automatically turns off all specified appliances and lights, starts the robot vacuum, and activates the security alert mode to ensure home safety and energy savings.' },
]);

const searchQuery = ref('');
const showForm = ref(false);
const currentScenario = ref({ id: null, name: '', description: '' });
const isEditing = ref(false);

const filteredScenarios = computed(() => {
  if (!searchQuery.value) {
    return scenarios.value;
  }
  return scenarios.value.filter(scenario =>
    scenario.name.toLowerCase().includes(searchQuery.value.toLowerCase()) ||
    scenario.description.toLowerCase().includes(searchQuery.value.toLowerCase())
  );
});

const openAddForm = () => {
  isEditing.value = false;
  currentScenario.value = { id: null, name: '', description: '' };
  showForm.value = true;
};

const openEditForm = (scenario) => {
  isEditing.value = true;
  currentScenario.value = { ...scenario };
  showForm.value = true;
};

const closeForm = () => {
  showForm.value = false;
};

const saveScenario = () => {
  if (isEditing.value) {
    const index = scenarios.value.findIndex(s => s.id === currentScenario.value.id);
    if (index !== -1) {
      scenarios.value[index] = { ...currentScenario.value };
    }
  } else {
    currentScenario.value.id = Date.now();
    scenarios.value.push({ ...currentScenario.value });
  }
  closeForm();
};

const deleteScenario = (id) => {
  if (confirm(t('scenarioApps.deleteConfirm'))) {
    scenarios.value = scenarios.value.filter(s => s.id !== id);
  }
};
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