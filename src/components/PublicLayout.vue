<template>
  <div class="public-layout">
    <header class="public-header" :class="{ 'is-menu-open': isMenuOpen }">
      <div class="header-left">
        <div class="logo">{{ t('platformTitle') }}</div>
      </div>
      <div class="header-right">
        <LanguageSwitcher />
        <router-link to="/login" class="login-button">{{ t('login') }}</router-link>
      </div>
      <div class="mobile-nav-container">
        <button @click="toggleMenu" class="hamburger-button" aria-label="Toggle menu">
          <span class="hamburger-icon"></span>
        </button>
        <transition name="slide-down">
          <nav v-if="isMenuOpen" class="mobile-menu">
            <div class="mobile-menu-actions">
              <LanguageSwitcher />
              <router-link to="/login" class="login-button">{{ t('login') }}</router-link>
            </div>
          </nav>
        </transition>
      </div>
    </header>
    <main class="public-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import LanguageSwitcher from './LanguageSwitcher.vue';
import { ref } from 'vue';
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

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
.language-switcher {
  background-color: var(--container-bg);
  color: var(--text-color);
  border: 1px solid var(--secondary-accent);
  border-radius: 4px;
  padding: 0.4rem 0.6rem;
  cursor: pointer;
  font-size: 0.9em;
}
.public-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}

.mobile-nav-container {
  display: none;
}

@media (max-width: 768px) {
  .public-header {
    padding: 0 1rem;
    justify-content: space-between;
  }
  .header-left {
    order: 1;
  }

  .header-right {
    order: 2;
  }
  .mobile-nav-container {
    display: block;
    order: 3;
  }
  
  .header-right {
    display: none;
  }

  .hamburger-button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 1rem;
    position: relative;
    z-index: 1001;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .hamburger-icon,
  .hamburger-icon::before,
  .hamburger-icon::after {
    content: '';
    display: block;
    background-color: var(--text-color);
    height: 2px;
    width: 24px;
    border-radius: 2px;
    transition: all 0.3s ease-in-out;
    position: absolute;
  }

  .hamburger-icon::before {
    transform: translateY(-8px);
  }

  .hamburger-icon::after {
    transform: translateY(8px);
  }

  .public-header.is-menu-open .hamburger-icon {
    background-color: transparent;
  }

  .public-header.is-menu-open .hamburger-icon::before {
    transform: rotate(45deg);
  }

  .public-header.is-menu-open .hamburger-icon::after {
    transform: rotate(-45deg);
  }

  .mobile-menu {
    position: absolute;
    top: 60px;
    left: 0;
    width: 100%;
    background-color: var(--container-bg);
    border-bottom: 1px solid var(--secondary-accent);
    z-index: 1000;
    padding: 1rem 0;
  }

  .mobile-menu-actions {
    padding: 1rem 1.5rem 0;
    margin-top: 1rem;
    border-top: 1px solid var(--secondary-accent);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .slide-down-enter-active,
  .slide-down-leave-active {
    transition: transform 0.3s ease-out, opacity 0.3s ease-out;
  }

  .slide-down-enter-from,
  .slide-down-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
}
</style>
