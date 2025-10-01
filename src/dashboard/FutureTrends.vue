<template>
  <div class="page-container">
    <h1>{{ t('futureTrends.pageTitle') }}</h1>
    <section>
      <h2>{{ t('futureTrends.matterTitle') }}</h2>
      <p>{{ t('futureTrends.matterText') }}</p>
    </section>
    <section>
      <h2>{{ t('futureTrends.aiTitle') }}</h2>
      <p>{{ t('futureTrends.aiText') }}</p>
    </section>
    <section>
      <h2>{{ t('futureTrends.proactiveTitle') }}</h2>
      <p>{{ t('futureTrends.proactiveText') }}</p>
    </section>
    <section>
      <h2>{{ t('futureTrends.energyTitle') }}</h2>
      <p>{{ t('futureTrends.energyText') }}</p>
    </section>
  </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n';

const { t } = useI18n();
</script>

<style scoped>
.page-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: var(--dark-bg);
  color: var(--text-color);
}

h1, h2 {
  color: var(--primary-accent);
  border-bottom: 1px solid var(--secondary-accent);
  padding-bottom: 0.5rem;
  margin-bottom: 1rem;
}

section {
  margin-bottom: 2rem;
}

p, ul {
  line-height: 1.6;
  color: var(--hint-color);
}

strong {
    color: var(--text-color);
}

@media (max-width: 768px) {
  h1, h2 {
    margin-bottom: 0.5rem;
  }
}
</style>