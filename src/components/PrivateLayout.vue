<template>
  <div class="dashboard-layout">
    <header class="dashboard-header">
      <div class="header-left">
        <div class="logo">{{ $t('platformTitle') }}</div>
      </div>
      <nav class="tabs">
        <router-link to="/dashboard/smart-devices">{{ $t('dashboard.smartDevices') }}</router-link>
        <router-link to="/dashboard/scenario-applications">{{ $t('dashboard.scenarioApps') }}</router-link>
        <router-link to="/dashboard/future-trends">{{ $t('dashboard.futureTrends') }}</router-link>
        <router-link to="/dashboard/user-profile">{{ $t('dashboard.userProfile') }}</router-link>
      </nav>
      <div class="header-right">
        <LanguageSwitcher />
        <button @click="handleLogout" class="logout-button">{{ $t('logout') }}</button>
      </div>
    </header>
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router';
import LanguageSwitcher from './LanguageSwitcher.vue';

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

.header-left, .header-right {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.logo {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-accent);
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

.language-switcher {
  background-color: var(--container-bg);
  color: var(--text-color);
  border: 1px solid var(--secondary-accent);
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9em;
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
