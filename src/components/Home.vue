<template>
  <div class="intro-container">
    <!-- Hero Section -->
    <header class="hero-section">
      <div class="hero-content">
        <h1 class="hero-title">{{ t('intro.heroTitle') }}</h1>
        <p class="hero-subtitle">{{ t('intro.heroSubtitle') }}</p>
      </div>
    </header>

    <!-- Feature Sections -->
    <main class="feature-sections">
      <section class="feature-item">
        <div class="feature-image">
          <img src="@/assets/images/connectivity.jpg" alt="Connectivity">
        </div>
        <div class="feature-text">
          <h2 class="feature-title-highlight">{{ t('intro.connectivityTitle') }}</h2>
          <p>{{ t('intro.connectivityText') }}</p>
        </div>
      </section>

      <section class="feature-item reverse">
        <div class="feature-image">
          <img src="@/assets/images/automation.avif" alt="Automation">
        </div>
        <div class="feature-text">
          <h2 class="feature-title-highlight">{{ t('intro.automationTitle') }}</h2>
          <p>{{ t('intro.automationText') }}</p>
        </div>
      </section>

      <section class="feature-item">
        <div class="feature-image">
          <img src="@/assets/images/control.jpg" alt="Remote Control">
        </div>
        <div class="feature-text">
          <h2 class="feature-title-highlight">{{ t('intro.remoteControlTitle') }}</h2>
          <p>{{ t('intro.remoteControlText') }}</p>
        </div>
      </section>

      <!-- Advantages Section -->
      <section class="advantages-section">
        <h2 class="section-title">{{ t('intro.advantagesTitle') }}</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>{{ t('intro.convenience') }}</h3>
            <p>{{ t('intro.convenienceText') }}</p>
          </div>
          <div class="advantage-card">
            <h3>{{ t('intro.energySaving') }}</h3>
            <p>{{ t('intro.energySavingText') }}</p>
          </div>
          <div class="advantage-card">
            <h3>{{ t('intro.security') }}</h3>
            <p>{{ t('intro.securityText') }}</p>
          </div>
          <div class="advantage-card">
            <h3>{{ t('intro.qualityOfLife') }}</h3>
            <p>{{ t('intro.qualityOfLifeText') }}</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

onMounted(() => {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1
  });

  document.querySelectorAll('.feature-item, .advantage-card').forEach(el => {
    observer.observe(el);
  });
});
</script>

<style scoped>
.intro-container {
  color: var(--text-color);
}

.hero-section {
  height: 60vh;
  background-size: cover;
  background-position: center;
  background-image: linear-gradient(rgba(240, 173, 78, 0.2), rgba(253, 242, 226, 0.8)), url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop');
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  max-width: 800px;
  padding: 2rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  color: var(--text-color);
  margin-bottom: 1rem;
  text-shadow: 0 2px 10px rgba(0,0,0,0.5);
  animation: fadeInUp 0.8s ease-out forwards;
}

.hero-subtitle {
  font-size: 1.25rem;
  color: var(--text-color);
  opacity: 0;
  animation: fadeInUp 0.8s ease-out 0.3s forwards;
}

.feature-sections {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

.feature-item {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  margin-bottom: 5rem;
  /* For scroll animation */
  opacity: 0;
  transform: translateY(50px);
  transition: opacity 0.6s ease-out, transform 0.6s ease-out;
}

.feature-item.reverse {
  grid-template-columns: 1fr 1fr;
}

.feature-item.reverse .feature-image {
  order: 2;
}

.feature-item.visible {
  opacity: 1;
  transform: translateY(0);
}

.feature-image img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease;
}

.feature-image img:hover {
  transform: scale(1.05);
}

.feature-text h2 {
  font-size: 2rem;
  color: var(--primary-accent);
  margin-bottom: 1rem;
}
.feature-title-highlight {
  color: #d35400;
}

.feature-text p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: var(--hint-color);
}

.advantages-section {
  text-align: center;
  padding: 4rem 2rem;
  background-color: var(--container-bg);
}

.section-title {
  font-size: 2.5rem;
  color: var(--primary-accent);
  margin-bottom: 3rem;
}

.advantages-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.advantage-card {
  background: var(--dark-bg);
  padding: 2rem;
  border-radius: 8px;
  border: 1px solid var(--secondary-accent);
  transition: all 0.3s ease;
}

.advantage-card.visible {
  opacity: 1;
  transform: translateY(0);
}

.advantage-card:hover {
  transform: translateY(-10px);
  border-color: var(--primary-accent);
}

.advantage-card h3 {
  font-size: 1.5rem;
  color: var(--primary-accent);
  margin-bottom: 1rem;
}

.advantage-card p {
  color: var(--hint-color);
}

/* Animation Delays for cards */
.advantage-card:nth-child(1) { transition-delay: 0.1s; }
.advantage-card:nth-child(2) { transition-delay: 0.2s; }
.advantage-card:nth-child(3) { transition-delay: 0.3s; }
.advantage-card:nth-child(4) { transition-delay: 0.4s; }


@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
  .hero-subtitle {
    font-size: 1.1rem;
  }
  .feature-item,
  .feature-item.reverse {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .feature-item.reverse .feature-image {
    order: 0;
  }
  .feature-sections, .advantages-section {
    padding: 2rem 1rem;
  }
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>