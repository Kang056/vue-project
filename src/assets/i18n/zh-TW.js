export default {
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
  save: '儲存',
  add: '新增',
  edit: '修改',
  delete: '刪除',
  saveChanges: '儲存變更',

  // SmartDevices.vue
  smartDevices: {
    pageTitle: '常見智慧裝置',
    searchPlaceholder: '搜尋裝置...',
    addButton: '新增裝置',
    addTitle: '新增裝置',
    editTitle: '修改裝置',
    nameLabel: '裝置名稱:',
    descriptionLabel: '裝置描述:',
    deleteConfirm: '確定要刪除此裝置嗎？',
    devices: {
      lighting: {
        name: '智慧照明',
        description: '使用者可以遠端控制燈光開關、調整亮度與色溫，甚至設定定時排程。智慧燈泡和燈帶是入門智慧家庭最受歡迎的產品之一。'
      },
      thermostat: {
        name: '智慧溫控',
        description: '智慧溫控器（如 Nest）能學習您的生活習慣，自動調節室內溫度，達到舒適與節能的平衡。'
      },
      speaker: {
        name: '智慧音箱',
        description: '作為家庭的中樞，智慧音箱（如 Google Nest, Amazon Echo, Apple HomePod）不僅能播放音樂，還能透過語音指令控制其他智慧設備。'
      },
      security: {
        name: '智慧保全',
        description: '包含智慧門鎖、監視攝影機、門窗感測器等，提供遠端監控、異常活動偵測與警報功能，提升居家安全。'
      }
    }
  },

  // ScenarioApplications.vue
  scenarioApps: {
    pageTitle: '情境應用範例',
    searchPlaceholder: '搜尋情境...',
    addButton: '新增情境',
    addTitle: '新增情境',
    editTitle: '修改情境',
    nameLabel: '情境名稱:',
    descriptionLabel: '情境描述:',
    deleteConfirm: '確定要刪除此情境嗎？',
    scenarios: {
      home: {
        name: '回家模式',
        description: '當智慧門鎖偵測到您回家時，會自動觸發一系列動作：玄關燈光亮起、客廳空調調整至舒適溫度、智慧音箱播放您喜愛的音樂，並解除保全系統。'
      },
      movie: {
        name: '電影模式',
        description: '一句「Hey Siri，開啟電影模式」，客廳主燈光變暗、氣氛燈帶亮起、電視自動開啟並切換到 Netflix，窗簾緩緩關上，讓您立刻沉浸在影音世界中。'
      },
      sleep: {
        name: '睡眠模式',
        description: '設定就寢時間一到，或透過語音指令，所有非必要的燈光將會關閉，臥室夜燈亮起，空調進入舒眠模式，並確認所有門窗都已上鎖。'
      },
      away: {
        name: '外出模式',
        description: '當您離開家時，系統會自動關閉所有指定的電器和燈光，啟動掃地機器人，並開啟保全警戒模式，確保居家安全與節能。'
      }
    }
  }
};