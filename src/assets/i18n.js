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
    },

    // FutureTrends.vue
    futureTrends: {
      pageTitle: 'Future Trends',
      matterTitle: 'The Rise of the Matter Protocol',
      matterText: 'Matter is an open-source smart home connectivity standard aimed at breaking down the barriers between different brand ecosystems. In the future, Matter-supported devices will be able to collaborate more easily, significantly simplifying the setup process and enhancing the user experience.',
      aiTitle: 'AI and Edge Computing',
      aiText: 'More and more smart home devices will integrate AI capabilities, allowing them to process data and make decisions locally (at the edge) without complete reliance on the cloud. This not only speeds up response times but also better protects user privacy.',
      proactiveTitle: 'Proactive Intelligence and Personalization',
      proactiveText: 'The smart home of the future will not just passively wait for commands but will actively learn your lifestyle patterns and anticipate your needs. For example, automatically brewing coffee and playing the morning news before you usually wake up.',
      energyTitle: 'Energy Management and Sustainability',
      energyText: 'With the growing emphasis on sustainability, smart homes will play a more significant role in energy management. The system can integrate solar power generation, energy storage devices, and off-peak electricity pricing information from the grid to automatically optimize home energy use, achieving maximum energy savings and carbon reduction.'
    },

    // General
    email: 'Email',
    joinDate: 'Join Date',
    save: 'Save'
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
    },

    // FutureTrends.vue
    futureTrends: {
      pageTitle: '未來趨勢',
      matterTitle: 'Matter 協定的普及',
      matterText: 'Matter 是一個開放原始碼的智慧家庭連接標準，旨在打破不同品牌生態系之間的壁壘。未來，支援 Matter 的設備將能更輕易地互相協作，大幅簡化設定過程並提升使用者體驗。',
      aiTitle: 'AI 與邊緣運算',
      aiText: '越來越多的智慧家庭設備將整合 AI 功能，使其能夠在本地（邊緣端）進行數據處理和決策，而無需完全依賴雲端。這不僅能加快反應速度，也能更好地保護使用者隱私。',
      proactiveTitle: '主動式智慧與個人化',
      proactiveText: '未來的智慧家庭將不只是被動地等待指令，而是能主動學習您的生活模式，預測您的需求。例如，在您通常起床的時間前，自動煮好咖啡、播放晨間新聞。',
      energyTitle: '能源管理與永續性',
      energyText: '隨著對永續發展的重視，智慧家庭將在能源管理上扮演更重要的角色。系統能整合太陽能發電、儲能設備和電網的離峰電價資訊，自動優化家庭的能源使用，以達到最大程度的節能減碳。'
    },

    // General
    email: '電子郵件',
    joinDate: '帳號建立日期',
    save: '儲存'
  }
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;