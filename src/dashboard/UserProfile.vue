<template>
  <div class="page-container">
    <div class="profile-header">
      <h1>使用者基本資訊</h1>
      <button @click="toggleEditMode" class="action-button">
        {{ isEditing ? '取消' : '修改資料' }}
      </button>
    </div>
    <div class="profile-card">
      <div class="profile-item">
        <span class="label">使用者名稱:</span>
        <span class="value">{{ user.username }}</span>
      </div>
      <div class="profile-item">
        <span class="label">電子郵件:</span>
        <input v-if="isEditing" v-model="editableUser.email" type="email" class="edit-input" />
        <span v-else class="value">{{ user.email }}</span>
      </div>
      <div class="profile-item">
        <span class="label">帳號建立日期:</span>
        <span class="value">{{ user.joinDate }}</span>
      </div>
      <div class="profile-item">
        <span class="label">會員等級:</span>
        <span class="value">{{ user.level }}</span>
      </div>
      <div v-if="isEditing" class="profile-actions">
        <button @click="saveProfile" class="action-button save-button">儲存</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isEditing = ref(false);
const user = ref({
  username: 'user',
  email: 'user@example.com',
  joinDate: '2024-01-01',
  level: '高級會員',
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