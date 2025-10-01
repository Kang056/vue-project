<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h2 v-if="!isRegister">{{ t('login') }}</h2>
      <h2 v-else>{{ t('register') }}</h2>

      <!-- 登入表單 -->
      <form v-if="!isRegister" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">{{ t('username') }}</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">{{ t('password') }}</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-actions">
          <button class="action-button cancel-button" type="button" @click="handleCancel">{{ t('cancel') }}</button>
          <button class="action-button login-button" type="submit">{{ t('login') }}</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p class="hint">{{ t('loginHint') }}</p>
        <div class="toggle-form">
          {{ t('noAccount') }} <button type="button" @click="isRegister = true" class="link-button">{{ t('registerNow') }}</button>
        </div>
      </form>

      <!-- 註冊表單 -->
      <form v-else @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="reg-username">{{ t('username') }}</label>
          <input type="text" id="reg-username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="reg-password">{{ t('password') }}</label>
          <input type="password" id="reg-password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="reg-confirm-password">{{ t('confirmPassword') }}</label>
          <input type="password" id="reg-confirm-password" v-model="confirmPassword" required />
        </div>
        <div class="form-actions">
          <button class="action-button cancel-button" type="button" @click="handleCancel">{{ t('cancel') }}</button>
          <button class="action-button login-button" type="submit">{{ t('register') }}</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <div class="toggle-form">
          {{ t('haveAccount') }} <button type="button" @click="isRegister = false" class="link-button">{{ t('backToLogin') }}</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

const isRegister = ref(false);
const username = ref('');
const password = ref('');
const confirmPassword = ref('');
const error = ref('');
const router = useRouter();

// 模擬使用者資料庫
const users = ref([
  { username: 'user', password: 'password' }
]);

const handleLogin = () => {
  const foundUser = users.value.find(
    (user) => user.username === username.value && user.password === password.value
  );
  if (foundUser) {
    localStorage.setItem('isAuthenticated', 'true');
    router.push('/dashboard/smart-devices');
  } else {
    error.value = t('errorInvalidCredentials');
  }
};

const handleCancel = () => {
  router.push('/');
};

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    error.value = t('errorPasswordMismatch');
    return;
  }
  if (users.value.some(user => user.username === username.value)) {
    error.value = t('errorUserExists');
    return;
  }

  // 新增使用者到模擬資料庫
  users.value.push({ username: username.value, password: password.value });


  // 這裡僅為範例，實際應用中應呼叫後端 API 進行註冊
  alert(t('registrationSuccessTitle') + '\n' + t('registrationSuccessMessage', { username: username.value }));
  // 模擬API延遲後再登入，讓使用者能看到alert
  setTimeout(() => {
    // 使用註冊的帳密進行登入
    handleLogin();
  }, 0);
};

// 在登入/註冊模式切換時清除錯誤訊息與表單內容
watch(isRegister, () => {
  error.value = '';
  username.value = '';
  password.value = '';
  confirmPassword.value = '';
});
</script>

<style scoped>
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  background-color: var(--dark-bg);
}

.login-wrapper {
  max-width: 350px;
  width: 100%;
  padding: 30px;
  background-color: var(--container-bg);
  border: 1px solid var(--secondary-accent);
  border-radius: 8px;
  box-shadow: 0 0 25px rgba(83, 114, 240, 0.2);
  transition: all 0.3s ease;
}

.form-group {
  margin-bottom: 20px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
  font-weight: 600;
}

.form-group input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
  background: var(--secondary-accent);
  border: 1px solid var(--primary-accent);
  border-radius: 4px;
  color: var(--text-color);
}

.form-group input:focus {
  outline: none;
  box-shadow: 0 0 8px rgba(83, 114, 240, 0.5);
}

.form-actions {
  display: flex;
  gap: 1rem;
}

.action-button {
  flex-grow: 1;
  padding: 12px;
  border: none;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 1px;
}

.login-button {
  background: var(--primary-accent);
  color: #fff;
  box-shadow: 0 0 10px rgba(83, 114, 240, 0.3);
}

.cancel-button {
  background-color: var(--hint-color);
  color: white;
}

.action-button:hover {
  background: #4361d0;
  box-shadow: 0 0 20px rgba(83, 114, 240, 0.6);
}

.error-message {
  color: var(--error-color);
  margin-top: 10px;
}

.hint {
    font-size: 0.8em;
    color: var(--hint-color);
    margin-top: 15px;
}

.toggle-form {
  text-align: center;
  margin-top: 20px;
  font-size: 0.9em;
}

.link-button {
  background: none;
  border: none;
  color: var(--primary-accent);
  text-decoration: underline;
  cursor: pointer;
  padding: 0;
}

@media (max-width: 768px) {
  .login-wrapper {
    padding: 20px;
  }
}
</style>