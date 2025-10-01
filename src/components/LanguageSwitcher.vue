<template>
  <select v-model="$i18n.locale" class="language-switcher">
    <option value="zh-TW">繁體中文</option>
    <option value="zh-CN">简体中文</option>
    <option value="en">English</option>
  </select>
</template>

<script setup>
// This component uses the global $i18n instance provided by vue-i18n.
// The v-model directive automatically handles the state management.
</script>

<style scoped>
.language-switcher {
  background-color: var(--container-bg);
  color: var(--text-color);
  border: 1px solid var(--secondary-accent);
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9em;
}
</style>