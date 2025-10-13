<template>
  <div class="dashboard-layout">
    <AppHeader :is-authenticated="true" @logout="handleLogout" />
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import AppHeader from './AppHeader.vue';

const router = useRouter();

const handleLogout = (): void => {
  removeLocallStorage();
  router.push('/');
};

const removeLocallStorage = (): void => {
  ['isAuthenticated', 'vue-smart-home-devices', 'vue-smart-home-scenarios'].forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  });
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark-bg);
}
.dashboard-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}
</style>
