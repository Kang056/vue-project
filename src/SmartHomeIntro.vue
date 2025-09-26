<template>
  <div class="intro-container">
    <!-- Hero Section -->
    <header class="hero-section" style="background-image: linear-gradient(rgba(240, 173, 78, 0.2), rgba(253, 242, 226, 0.8)), url('https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=2070&auto=format&fit=crop');">
      <div class="hero-content">
        <h1 class="hero-title">歡迎來到未來之家</h1>
        <p class="hero-subtitle">探索智慧家庭如何讓您的生活更便利、更舒適、更安全。</p>
      </div>
    </header>

    <!-- Feature Sections -->
    <main class="feature-sections">
      <section class="feature-item">
        <div class="feature-image">
          <img src="https://lh7-us.googleusercontent.com/EBwMRhFePyi2lOYWVAcLG5-R6KNJNpi0Twb-zZy11Owcisd6zfbD5-SJiwpdZjp_-_dZDK8ppocYAX5Al6Evgk4UxPI3am77RuLTsBFQpggRe7EzrvafOdkYrI6ct43J50UL949y7TEspZ7CmnJgU-8" alt="Connectivity">
        </div>
        <div class="feature-text">
          <h2 style="color: #d35400;">核心概念：互聯互通</h2>
          <p>透過 Wi-Fi, Bluetooth, Zigbee, Matter 等通訊協定，讓不同品牌的設備能夠互相溝通與協作，打造無縫的智慧生態系。</p>
        </div>
      </section>

      <section class="feature-item reverse">
        <div class="feature-image">
          <img src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?q=80&w=1920&auto=format&fit=crop" alt="Automation">
        </div>
        <div class="feature-text">
          <h2 style="color: #d35400;">核心概念：自動化</h2>
          <p>根據預設的規則、時間或感測器數據（如溫濕度、光線、人體活動），自動執行特定任務，例如「日落時自動開燈」，讓家為您服務。</p>
        </div>
      </section>

      <section class="feature-item">
        <div class="feature-image">
          <img src="https://panyi-architecture.com/wp-content/uploads/2020/09/image2-2.jpg" alt="Remote Control">
        </div>
        <div class="feature-text">
          <h2 style="color: #d35400;">核心概念：遠端控制</h2>
          <p>使用者可以透過智慧型手機、平板或語音助理，隨時隨地監控和控制家中的設備，一切盡在掌握。</p>
        </div>
      </section>

      <!-- Advantages Section -->
      <section class="advantages-section">
        <h2 class="section-title">智慧家庭的優勢</h2>
        <div class="advantages-grid">
          <div class="advantage-card">
            <h3>便利性</h3>
            <p>一鍵或一句話就能控制多個設備，簡化日常操作。</p>
          </div>
          <div class="advantage-card">
            <h3>節能省電</h3>
            <p>智慧溫控和照明系統能根據實際需求調整，避免不必要的能源浪費。</p>
          </div>
          <div class="advantage-card">
            <h3>居家安全</h3>
            <p>智慧門鎖、監視器和感測器能即時回報家中狀況，提升安全性。</p>
          </div>
          <div class="advantage-card">
            <h3>生活品質</h3>
            <p>自動化的情境模式（如電影、睡眠模式）能營造更舒適的氛圍。</p>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

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