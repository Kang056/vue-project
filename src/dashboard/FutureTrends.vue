<template>
  <div class="page-container">
    <h1>未來趨勢</h1>
    <section>
      <h2>Matter 協定的普及</h2>
      <p>Matter 是一個開放原始碼的智慧家庭連接標準，旨在打破不同品牌生態系之間的壁壘。未來，支援 Matter 的設備將能更輕易地互相協作，大幅簡化設定過程並提升使用者體驗。</p>
    </section>
    <section>
      <h2>AI 與邊緣運算</h2>
      <p>越來越多的智慧家庭設備將整合 AI 功能，使其能夠在本地（邊緣端）進行數據處理和決策，而無需完全依賴雲端。這不僅能加快反應速度，也能更好地保護使用者隱私。</p>
    </section>
    <section>
      <h2>主動式智慧與個人化</h2>
      <p>未來的智慧家庭將不只是被動地等待指令，而是能主動學習您的生活模式，預測您的需求。例如，在您通常起床的時間前，自動煮好咖啡、播放晨間新聞。</p>
    </section>
    <section>
      <h2>能源管理與永續性</h2>
      <p>隨著對永續發展的重視，智慧家庭將在能源管理上扮演更重要的角色。系統能整合太陽能發電、儲能設備和電網的離峰電價資訊，自動優化家庭的能源使用，以達到最大程度的節能減碳。</p>
    </section>
  </div>
</template>

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