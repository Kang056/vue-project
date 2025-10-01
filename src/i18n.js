import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    // PublicLayout.vue
    platformTitle: 'Smart Home Platform',
    login: 'Login',
    logout: 'Logout',

    // Login.vue
    register: 'Register',
    username: 'Username:',
    password: 'Password:',
    confirmPassword: 'Confirm Password:',
    cancel: 'Cancel',
    loginHint: 'Hint: Username: user, Password: password',
    noAccount: "Don't have an account?",
    registerNow: 'Register now',
    haveAccount: 'Already have an account?',
    backToLogin: 'Back to login',
    errorInvalidCredentials: 'Invalid username or password',
    errorPasswordMismatch: 'Passwords do not match',
    errorUserExists: 'This username is already registered',
    registrationSuccessTitle: 'Registration Successful!',
    registrationSuccessMessage: 'Username: {username}\nYou will be logged in automatically.',

    // SmartHomeIntro.vue
    intro: {
      heroTitle: 'Welcome to the Home of the Future',
      heroSubtitle: 'Discover how a smart home can make your life more convenient, comfortable, and secure.',
      connectivityTitle: 'Core Concept: Interconnectivity',
      connectivityText: 'Through communication protocols like Wi-Fi, Bluetooth, Zigbee, and Matter, devices from different brands can communicate and collaborate, creating a seamless smart ecosystem.',
      automationTitle: 'Core Concept: Automation',
      automationText: 'Automatically execute specific tasks based on preset rules, time, or sensor data (like temperature, humidity, light, human activity), such as "automatically turn on lights at sunset," letting your home work for you.',
      remoteControlTitle: 'Core Concept: Remote Control',
      remoteControlText: 'Users can monitor and control home devices anytime, anywhere via smartphones, tablets, or voice assistants. Everything is under your control.',
      advantagesTitle: 'Advantages of a Smart Home',
      convenience: 'Convenience',
      convenienceText: 'Control multiple devices with a single tap or voice command, simplifying daily routines.',
      energySaving: 'Energy Saving',
      energySavingText: 'Smart thermostats and lighting systems adjust based on actual needs, avoiding unnecessary energy waste.',
      security: 'Home Security',
      securityText: 'Smart locks, cameras, and sensors provide real-time updates on your home’s status, enhancing security.',
      qualityOfLife: 'Quality of Life',
      qualityOfLifeText: 'Automated scenes (like movie or sleep mode) create a more comfortable atmosphere.'
    },

    // Language Switcher
    language: 'Language',

    // Home.vue (Dashboard)
    dashboard: {
      smartDevices: 'Smart Devices',
      scenarioApps: 'Scenario Apps',
      futureTrends: 'Future Trends',
      userProfile: 'User Profile'
    },

    // UserProfile.vue
    userProfile: {
      pageTitle: 'User Profile',
      editButton: 'Edit Profile',
      membershipLevel: 'Membership Level',
      premiumMember: 'Premium Member'
    }
  },
  'zh-TW': {
    // PublicLayout.vue
    platformTitle: '智慧家庭平台',
    login: '登入',
    logout: '登出',

    // Login.vue
    register: '註冊',
    username: '使用者名稱:',
    password: '密碼:',
    confirmPassword: '確認密碼:',
    cancel: '取消',
    loginHint: '提示：使用者名稱: user, 密碼: password',
    noAccount: '還沒有帳號嗎？',
    registerNow: '立即註冊',
    haveAccount: '已經有帳號了？',
    backToLogin: '返回登入',
    errorInvalidCredentials: '無效的使用者名稱或密碼',
    errorPasswordMismatch: '兩次輸入的密碼不一致',
    errorUserExists: '此使用者名稱已被註冊',
    registrationSuccessTitle: '註冊成功！',
    registrationSuccessMessage: '使用者名稱: {username}\n\n將為您自動登入。',

    // SmartHomeIntro.vue
    intro: {
      heroTitle: '歡迎來到未來之家',
      heroSubtitle: '探索智慧家庭如何讓您的生活更便利、更舒適、更安全。',
      connectivityTitle: '核心概念：互聯互通',
      connectivityText: '透過 Wi-Fi, Bluetooth, Zigbee, Matter 等通訊協定，讓不同品牌的設備能夠互相溝通與協作，打造無縫的智慧生態系。',
      automationTitle: '核心概念：自動化',
      automationText: '根據預設的規則、時間或感測器數據（如溫濕度、光線、人體活動），自動執行特定任務，例如「日落時自動開燈」，讓家為您服務。',
      remoteControlTitle: '核心概念：遠端控制',
      remoteControlText: '使用者可以透過智慧型手機、平板或語音助理，隨時隨地監控和控制家中的設備，一切盡在掌握。',
      advantagesTitle: '智慧家庭的優勢',
      convenience: '便利性',
      convenienceText: '一鍵或一句話就能控制多個設備，簡化日常操作。',
      energySaving: '節能省電',
      energySavingText: '智慧溫控和照明系統能根據實際需求調整，避免不必要的能源浪費。',
      qualityOfLife: '生活品質',
      qualityOfLifeText: '自動化的情境模式（如電影、睡眠模式）能營造更舒適的氛圍。',
      security: '居家安全',
      securityText: '智慧門鎖、監視器和感測器能即時回報家中狀況，提升安全性。'
    },

    // Language Switcher
    language: '語言',

    // Home.vue (Dashboard)
    dashboard: {
      smartDevices: '智慧裝置',
      scenarioApps: '情境應用',
      futureTrends: '未來趨勢',
      userProfile: '使用者資訊'
    },

    // UserProfile.vue
    userProfile: {
      pageTitle: '使用者基本資訊',
      editButton: '修改資料',
      membershipLevel: '會員等級',
      premiumMember: '高級會員'
    }
  }
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;