<template>
  <div class="page-container">
    <div class="profile-header">
      <h1>{{ t('userProfile.pageTitle') }}</h1>
      <button @click="toggleEditMode" class="action-button">
        {{ isEditing ? t('cancel') : t('userProfile.editButton') }}
      </button>
    </div>
    <div class="profile-card">
      <div class="profile-item">
        <span class="label">{{ t('username') }}</span>
        <span class="value">{{ user.username }}</span>
      </div>
      <div class="profile-item">
        <span class="label">{{ t('email') }}:</span>
        <input v-if="isEditing" v-model="editableUser.email" type="email" class="edit-input" />
        <span v-else class="value">{{ user.email }}</span>
      </div>
      <div class="profile-item">
        <span class="label">{{ t('joinDate') }}:</span>
        <span class="value">{{ user.joinDate }}</span>
      </div>
      <div class="profile-item">
        <span class="label">{{ t('userProfile.membershipLevel') }}:</span>
        <span class="value">{{ t(user.level) }}</span>
      </div>
      <div v-if="isEditing" class="profile-actions">
        <button @click="saveProfile" class="action-button save-button">{{ t('save') }}</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isEditing = ref(false);
const user = ref({
  username: 'user',
  email: 'user@example.com',
  joinDate: '2024-01-01',
  level: 'userProfile.premiumMember',
});
const editableUser = ref({ ...user.value });

const toggleEditMode = () => {
  isEditing.value = !isEditing.value;
  if (isEditing.value) {
    editableUser.value = { ...user.value };
  }
};

const saveProfile = () => {
  user.value = { ...editableUser.value };
  isEditing.value = false;
};
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  color: var(--text-color);
}

.profile-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

h1, .profile-header h1 {
  color: var(--primary-accent);
  border-bottom: 1px solid var(--secondary-accent);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

.profile-card {
  background: var(--container-bg);
  border: 1px solid var(--primary-accent);
  border-radius: 8px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
}

.profile-item {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  border-bottom: 1px solid var(--secondary-accent);
}

.profile-item:last-child {
  border-bottom: none;
}

.label {
  font-weight: 600;
  color: var(--hint-color);
}

.value {
  font-weight: 500;
  color: var(--text-color);
}

.edit-input {
  background: var(--secondary-accent);
  border: 1px solid var(--primary-accent);
  border-radius: 4px;
  color: var(--text-color);
  padding: 0.3rem 0.5rem;
  text-align: right;
  width: 250px;
}

.profile-actions {
  display: flex;
  justify-content: flex-end;
  margin-top: 1.5rem;
}

.action-button {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-weight: 600;
  transition: all 0.2s ease;
  background-color: var(--primary-accent);  color: #fff;
}

.action-button:hover {
  opacity: 0.9;
}

@media (max-width: 768px) {
  .profile-header {
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
  }

  .profile-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }

  .edit-input {
    width: 100%;
    text-align: left;
  }
}
</style>