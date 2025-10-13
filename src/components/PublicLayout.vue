<template>
  <div class="public-layout">
    <AppHeader :is-authenticated="false" />
    <main class="public-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import AppHeader from './AppHeader.vue';
</script>

<style scoped>
.public-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark-bg);
}

.public-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}
</style>
