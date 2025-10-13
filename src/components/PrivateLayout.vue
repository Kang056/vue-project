<template>
  <div class="dashboard-layout">
    <header class="dashboard-header" :class="{ 'is-menu-open': isMenuOpen }">
      <div class="header-left">
        <div class="logo">{{ t('platformTitle') }}</div>
      </div>
      <nav class="tabs">
        <router-link to="/dashboard/smart-devices">{{ t('dashboard.smartDevices') }}</router-link>
        <router-link to="/dashboard/scenario-applications">{{ t('dashboard.scenarioApps') }}</router-link>
        <router-link to="/dashboard/future-trends">{{ $t('dashboard.futureTrends') }}</router-link>
        <router-link to="/dashboard/user-profile">{{ t('dashboard.userProfile') }}</router-link>
      </nav>
      <div class="header-right">
        <LanguageSwitcher />
        <button @click="handleLogout" class="logout-button">{{ t('logout') }}</button>
      </div>
      <div class="mobile-nav-container">
        <button @click="toggleMenu" class="hamburger-button" aria-label="Toggle menu">
          <span class="hamburger-icon"></span>
        </button>
        <transition name="slide-down">
          <nav v-if="isMenuOpen" class="mobile-menu">
            <div class="mobile-menu-links">
              <router-link v-for="link in navLinks" :key="link.to" :to="link.to" @click="closeMenu">{{ link.text }}</router-link>
            </div>
            <div class="mobile-menu-actions">
              <LanguageSwitcher />
              <button @click="handleLogout" class="logout-button">{{ t('logout') }}</button>
            </div>
          </nav>
        </transition>
      </div>
    </header>
    <main class="dashboard-content">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useRouter } from 'vue-router';
import { useI18n } from 'vue-i18n'
import LanguageSwitcher from './LanguageSwitcher.vue';

const { t } = useI18n()
const router = useRouter();
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
const handleLogout = (): void => {
  closeMenu();
  removeLocallStorage();
  router.push('/');
};

const removeLocallStorage = (): void => {
  ['isAuthenticated', 'vue-smart-home-devices', 'vue-smart-home-scenarios'].forEach(key => {
    if (localStorage.getItem(key)) {
      localStorage.removeItem(key);
    }
  });
}
</script>

<style scoped>
.dashboard-layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: var(--dark-bg);
}

.dashboard-header {
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

.logout-button {
  background-color: var(--error-color);
  border: none;
  color: #fff;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.logout-button:hover {
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

.dashboard-content {
  flex-grow: 1;
  overflow-y: auto;
  padding: 2rem;
}

.mobile-nav-container {
  display: none;
}

@media (max-width: 768px) {
  .dashboard-header {
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

  .tabs {
    display: none;
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

  .dashboard-header.is-menu-open .hamburger-icon {
    background-color: transparent;
  }

  .dashboard-header.is-menu-open .hamburger-icon::before {
    transform: rotate(45deg);
  }

  .dashboard-header.is-menu-open .hamburger-icon::after {
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

  .mobile-menu-actions {
    padding: 1rem 1.5rem 0;
    margin-top: 1rem;
    border-top: 1px solid var(--secondary-accent);
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .mobile-menu a {
    padding: 1rem 1.5rem;
    color: var(--hint-color);
    text-decoration: none;
    transition: background-color 0.2s;
  }

  .mobile-menu a:hover {
    background-color: var(--secondary-accent);
    color: var(--text-color);
  }

  .mobile-menu a.router-link-exact-active {
    color: var(--primary-accent);
    font-weight: 600;
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
