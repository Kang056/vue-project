<template>
  <header class="app-header" :class="{ 'is-menu-open': isMenuOpen }">
    <div class="header-left">
      <div class="logo">{{ t('platformTitle') }}</div>
    </div>

    <!-- Desktop Navigation -->
    <nav v-if="isAuthenticated" class="tabs">
      <router-link v-for="link in navLinks" :key="link.to" :to="link.to">{{ link.text }}</router-link>
    </nav>

    <div class="header-right">
      <LanguageSwitcher />
      <router-link v-if="!isAuthenticated" to="/login" class="login-button">{{ t('login') }}</router-link>
      <button v-if="isAuthenticated" @click="onLogout" class="logout-button">{{ t('logout') }}</button>
    </div>

    <!-- Mobile Navigation -->
    <div class="mobile-nav-container">
      <button @click="toggleMenu" class="hamburger-button" aria-label="Toggle menu">
        <span class="hamburger-icon"></span>
      </button>
      <transition name="slide-down">
        <nav v-if="isMenuOpen" class="mobile-menu">
          <div v-if="isAuthenticated" class="mobile-menu-links">
            <router-link v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeMenu">{{ link.text }}</router-link>
          </div>
          <div class="mobile-menu-actions">
            <LanguageSwitcher />
            <router-link v-if="!isAuthenticated" to="/login" @click="closeMenu" class="login-button">{{ t('login') }}</router-link>
            <button v-if="isAuthenticated" @click="onLogout" class="logout-button">{{ t('logout') }}</button>
          </div>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import LanguageSwitcher from './LanguageSwitcher.vue';

defineProps<{
  isAuthenticated: boolean;
}>();

const emit = defineEmits<{
  (e: 'logout'): void;
}>();

const { t } = useI18n();
const isMenuOpen = ref(false);

const navLinks = computed(() => [
  { to: '/dashboard/smart-devices', text: t('dashboard.smartDevices') },
  { to: '/dashboard/scenario-applications', text: t('dashboard.scenarioApps') },
  { to: '/dashboard/future-trends', text: t('dashboard.futureTrends') },
  { to: '/dashboard/user-profile', text: t('dashboard.userProfile') }
]);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};

const onLogout = () => {
  closeMenu();
  emit('logout');
};
</script>

<style scoped>
.app-header {
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

.tabs {
  display: flex;
  gap: 1rem;
  flex-grow: 1;
  justify-content: center;
}

.tabs a {
  display: inline-block;
  padding: 1rem 0.5rem;
  color: var(--hint-color);
  text-decoration: none;
  border-bottom: 2px solid transparent;
  transition: all 0.2s ease-in-out;
}

.tabs a:hover {
  color: var(--text-color);
}

.tabs a.router-link-exact-active {
  color: var(--primary-accent);
  border-bottom-color: var(--primary-accent);
}

.login-button, .logout-button {
  padding: 0.5rem 1rem;
  border-radius: 4px;
  text-decoration: none;
  transition: background-color 0.2s;
  border: none;
  cursor: pointer;
  font-weight: 600;
  color: white;
}

.login-button {
  background-color: var(--primary-accent);
}

.logout-button {
  background-color: var(--error-color);
}

.login-button:hover, .logout-button:hover {
  opacity: 0.9;
}

.mobile-nav-container {
  display: none;
}

@media (max-width: 768px) {
  .app-header {
    padding: 0 1rem;
  }

  .tabs, .header-right {
    display: none;
  }

  .header-left {
    flex-grow: 1;
  }

  .mobile-nav-container {
    display: block;
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

  .app-header.is-menu-open .hamburger-icon {
    background-color: transparent;
  }

  .app-header.is-menu-open .hamburger-icon::before {
    transform: rotate(45deg);
  }

  .app-header.is-menu-open .hamburger-icon::after {
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

  .mobile-menu-links {
    display: flex;
    flex-direction: column;
  }

  .mobile-menu-links a {
    padding: 1rem 1.5rem;
    color: var(--hint-color);
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .mobile-menu-links a:hover {
    background-color: var(--secondary-accent);
    color: var(--text-color);
  }

  .mobile-menu-links a.router-link-exact-active {
    color: var(--primary-accent);
    font-weight: 600;
  }

  .mobile-menu-actions {
    padding: 1rem 1.5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-menu-links + .mobile-menu-actions {
    margin-top: 1rem;
    border-top: 1px solid var(--secondary-accent);
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