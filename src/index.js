import { createRouter, createWebHistory } from 'vue-router';
import Home from './Home.vue';
import PublicLayout from './PublicLayout.vue';
import Login from './Login.vue';
import SmartHomeIntro from './SmartHomeIntro.vue';
import SmartDevices from './SmartDevices.vue';
import ScenarioApplications from './ScenarioApplications.vue';
import FutureTrends from './FutureTrends.vue';
import UserProfile from './UserProfile.vue';

const routes = [
  {
    path: '/', // 公共區域
    component: PublicLayout,
    children: [
      {
        path: '',
        name: 'SmartHomeIntro',
        component: SmartHomeIntro,
      },
    ],
  },
  {
    path: '/dashboard', // 登入後區域
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true },
    children: [
      {
        path: 'smart-devices',
        name: 'SmartDevices',
        component: SmartDevices,
      },
      {
        path: 'scenario-applications',
        name: 'ScenarioApplications',
        component: ScenarioApplications,
      },
      {
        path: 'future-trends',
        name: 'FutureTrends',
        component: FutureTrends,
      },
      {
        path: 'user-profile',
        name: 'UserProfile',
        component: UserProfile,
      },
    ],
  },
  {
    path: '/login',
    name: 'Login',
    component: Login,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

  if (to.matched.some(record => record.meta.requiresAuth) && !isAuthenticated) {
    next('/login');
  } else {
    next();
  }
});

export default router;