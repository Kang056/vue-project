<template>
  <div class="dashboard-layout">
    <header class="dashboard-header">
      <nav class="tabs">
        <router-link to="/dashboard/smart-devices">智慧裝置</router-link>
        <router-link to="/dashboard/scenario-applications">情境應用</router-link>
        <router-link to="/dashboard/future-trends">未來趨勢</router-link>
        <router-link to="/dashboard/user-profile">使用者資訊</router-link>
      </nav>
      <button @click="handleLogout" class="logout-button">登出</button>
    </header>
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';

const router = useRouter();

const handleLogout = () => {
  localStorage.removeItem('isAuthenticated');
  router.push('/');
};
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark-bg);
}

.dashboard-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: var(--container-bg);
  border-bottom: 1px solid var(--secondary-accent);
  flex-shrink: 0;
}

.tabs {
  display: flex;
  gap: 1rem;
}

.tabs a {
  display: inline-block;
  padding: 1rem 0.5rem;
  color: var(--hint-color);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
}

.tabs a:hover {
  color: var(--text-color);
}

.tabs a.router-link-exact-active {
  color: var(--primary-accent);
  border-bottom-color: var(--primary-accent);
}

.logout-button {
  background-color: var(--error-color);
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-button:hover {
  opacity: 0.9;
}

.dashboard-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .dashboard-header {
    flex-direction: column;
    padding: 1rem;
    height: auto;
  }
  .tabs {
    order: 2;
    width: 100%;
    justify-content: center;
  }
}
</style>
