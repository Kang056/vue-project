<template>
  <div class="login-container">
    <div class="login-wrapper">
      <h2 v-if="!isRegister">登入</h2>
      <h2 v-else>註冊</h2>

      <!-- 登入表單 -->
      <form v-if="!isRegister" @submit.prevent="handleLogin">
        <div class="form-group">
          <label for="username">使用者名稱:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">密碼:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <div class="form-actions">
          <button class="action-button cancel-button" type="button" @click="handleCancel">取消</button>
          <button class="action-button login-button" type="submit">登入</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <p class="hint">提示：使用者名稱: user, 密碼: password</p>
        <div class="toggle-form">
          還沒有帳號嗎？ <button type="button" @click="isRegister = true" class="link-button">立即註冊</button>
        </div>
      </form>

      <!-- 註冊表單 -->
      <form v-else @submit.prevent="handleRegister">
        <div class="form-group">
          <label for="reg-username">使用者名稱:</label>
          <input type="text" id="reg-username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="reg-password">密碼:</label>
          <input type="password" id="reg-password" v-model="password" required />
        </div>
        <div class="form-group">
          <label for="reg-confirm-password">確認密碼:</label>
          <input type="password" id="reg-confirm-password" v-model="confirmPassword" required />
        </div>
        <div class="form-actions">
          <button class="action-button cancel-button" type="button" @click="handleCancel">取消</button>
          <button class="action-button login-button" type="submit">註冊</button>
        </div>
        <p v-if="error" class="error-message">{{ error }}</p>
        <div class="toggle-form">
          已經有帳號了？ <button type="button" @click="isRegister = false" class="link-button">返回登入</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useRouter } from 'vue-router';

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
    error.value = '無效的使用者名稱或密碼';
  }
};

const handleCancel = () => {
  router.push('/');
};

const handleRegister = () => {
  if (password.value !== confirmPassword.value) {
    error.value = '兩次輸入的密碼不一致';
    return;
  }
  if (users.value.some(user => user.username === username.value)) {
    error.value = '此使用者名稱已被註冊';
    return;
  }

  // 新增使用者到模擬資料庫
  users.value.push({ username: username.value, password: password.value });


  // 這裡僅為範例，實際應用中應呼叫後端 API 進行註冊
  alert(`註冊成功！\n使用者名稱: ${username.value}\n\n將為您自動登入。`);
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