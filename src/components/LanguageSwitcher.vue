<template>
  <select v-model="$i18n.locale" class="language-switcher">
    <option v-for="language in languages" :value="language.value">{{ language.name }}</option>
  </select>
</template>

<script setup>
const languages = [
  { name: '繁體中文', value: 'zh-TW' },
  { name: '简体中文', value: 'zh-CN' },
  { name: 'English', value: 'en' },
  { name: '日本語', value: 'ja' },
  { name: '한국어', value: 'ko' },
];
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