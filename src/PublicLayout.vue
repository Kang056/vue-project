<template>
  <div class="public-layout">
    <header class="public-header">
      <div class="logo">智慧家庭平台</div>
      <nav>
        <router-link to="/login" class="login-button">登入</router-link>
      </nav>
    </header>
    <main class="public-content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
.public-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark-bg);
}

.public-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2rem;
  height: 60px;
  background-color: var(--container-bg);
  border-bottom: 1px solid var(--secondary-accent);
  flex-shrink: 0;
}

.logo {
  font-size: 1.2rem;
  font-weight: 600;
  color: var(--primary-accent);
}

.login-button {
  background-color: var(--primary-accent);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;
}

.login-button:hover {
  opacity: 0.9;
}

.public-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}

@media (max-width: 768px) {
  .public-header {
    padding: 0 1rem;
  }
  .public-content {
    padding: 1rem;
  }
}
</style>
