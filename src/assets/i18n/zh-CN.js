export default {
  // PublicLayout.vue
  platformTitle: '智能家庭平台',
  login: '登录',
  logout: '登出',

  // Login.vue
  register: '注册',
  username: '用户名:',
  password: '密码:',
  confirmPassword: '确认密码:',
  cancel: '取消',
  loginHint: '提示：用户名: user, 密码: password',
  noAccount: '还没有帐号吗？',
  registerNow: '立即注册',
  haveAccount: '已经有帐号了？',
  backToLogin: '返回登录',
  errorInvalidCredentials: '无效的用户名或密码',
  errorPasswordMismatch: '两次输入的密码不一致',
  errorUserExists: '此用户名已被注册',
  registrationSuccessTitle: '注册成功！',
  registrationSuccessMessage: '用户名: {username}\n\n将为您自动登录。',

  // SmartHomeIntro.vue
  intro: {
    heroTitle: '欢迎来到未来之家',
    heroSubtitle: '探索智能家庭如何让您的生活更便利、更舒适、更安全。',
    connectivityTitle: '核心概念：互联互通',
    connectivityText: '通过 Wi-Fi, Bluetooth, Zigbee, Matter 等通信协议，让不同品牌的设备能够互相沟通与协作，打造无缝的智能生态系。',
    automationTitle: '核心概念：自动化',
    automationText: '根据预设的规则、时间或传感器数据（如温湿度、光线、人体活动），自动执行特定任务，例如「日落时自动开灯」，让家为您服务。',
    remoteControlTitle: '核心概念：远程控制',
    remoteControlText: '用户可以通过智能手机、平板或语音助理，随时随地监控和控制家中的设备，一切尽在掌握。',
    advantagesTitle: '智能家庭的优势',
    convenience: '便利性',
    convenienceText: '一键或一句话就能控制多个设备，简化日常操作。',
    energySaving: '节能省电',
    energySavingText: '智能温控和照明系统能根据实际需求调整，避免不必要的能源浪费。',
    qualityOfLife: '生活品质',
    qualityOfLifeText: '自动化的情景模式（如电影、睡眠模式）能营造更舒适的氛围。',
    security: '居家安全',
    securityText: '智能门锁、监视器和传感器能实时回报家中状况，提升安全性。'
  },

  // Language Switcher
  language: '语言',

  // Home.vue (Dashboard)
  dashboard: {
    smartDevices: '智能设备',
    scenarioApps: '情景应用',
    futureTrends: '未来趋势',
    userProfile: '用户信息'
  },

  // UserProfile.vue
  userProfile: {
    pageTitle: '用户基本信息',
    editButton: '修改资料',
    membershipLevel: '会员等级',
    premiumMember: '高级会员'
  },

  // FutureTrends.vue
  futureTrends: {
    pageTitle: '未来趋势',
    matterTitle: 'Matter 协议的普及',
    matterText: 'Matter 是一个开放源代码的智能家庭连接标准，旨在打破不同品牌生态系之间的壁垒。未来，支持 Matter 的设备将能更轻易地互相协作，大幅简化设定过程并提升用户体验。',
    aiTitle: 'AI 与边缘运算',
    aiText: '越来越多的智能家庭设备将整合 AI 功能，使其能够在本地（边缘端）进行数据处理和决策，而无需完全依赖云端。这不仅能加快反应速度，也能更好地保护用户隐私。',
    proactiveTitle: '主动式智能与个人化',
    proactiveText: '未来的智能家庭将不只是被动地等待指令，而是能主动学习您的生活模式，预测您的需求。例如，在您通常起床的时间前，自动煮好咖啡、播放晨间新闻。',
    energyTitle: '能源管理与永续性',
    energyText: '随着对永续发展的重视，智能家庭将在能源管理上扮演更重要的角色。系统能整合太阳能发电、储能设备和电网的离峰电价信息，自动优化家庭的能源使用，以达到最大程度的节能减碳。'
  },

  // General
  email: '电子邮件',
  joinDate: '帐号建立日期',
  save: '保存',
  add: '新增',
  edit: '修改',
  delete: '删除',
  saveChanges: '保存变更',

  // SmartDevices.vue
  smartDevices: {
    pageTitle: '常见智能设备',
    searchPlaceholder: '搜索设备...',
    addButton: '新增设备',
    addTitle: '新增设备',
    editTitle: '修改设备',
    nameLabel: '设备名称:',
    descriptionLabel: '设备描述:',
    deleteConfirm: '确定要删除此设备吗？',
    devices: {
      lighting: {
        name: '智能照明',
        description: '用户可以远程控制灯光开关、调整亮度与色温，甚至设定定时排程。智能灯泡和灯带是入门智能家庭最受欢迎的产品之一。'
      },
      thermostat: {
        name: '智能温控',
        description: '智能温控器（如 Nest）能学习您的生活习惯，自动调节室内温度，达到舒适与节能的平衡。'
      },
      speaker: {
        name: '智能音箱',
        description: '作为家庭的中枢，智能音箱（如 Google Nest, Amazon Echo, Apple HomePod）不仅能播放音乐，还能通过语音指令控制其他智能设备。'
      },
      security: {
        name: '智能安防',
        description: '包含智能门锁、监控摄影机、门窗传感器等，提供远程监控、异常活动侦测与警报功能，提升居家安全。'
      }
    }
  },

  // ScenarioApplications.vue
  scenarioApps: {
    pageTitle: '情景应用范例',
    searchPlaceholder: '搜索情景...',
    addButton: '新增情景',
    addTitle: '新增情景',
    editTitle: '修改情景',
    nameLabel: '情景名称:',
    descriptionLabel: '情景描述:',
    deleteConfirm: '确定要删除此情景吗？',
    scenarios: {
      home: {
        name: '回家模式',
        description: '当智能门锁侦测到您回家时，会自动触发一系列动作：玄关灯光亮起、客厅空调调整至舒适温度、智能音箱播放您喜爱的音乐，并解除安防系统。'
      },
      movie: {
        name: '电影模式',
        description: '一句「Hey Siri，开启电影模式」，客厅主灯光变暗、气氛灯带亮起、电视自动开启并切换到 Netflix，窗帘缓缓关上，让您立刻沉浸在影音世界中。'
      },
      sleep: {
        name: '睡眠模式',
        description: '设定就寝时间一到，或通过语音指令，所有非必要的灯光将会关闭，卧室夜灯亮起，空调进入舒眠模式，并确认所有门窗都已上锁。'
      },
      away: {
        name: '外出模式',
        description: '当您离开家时，系统会自动关闭所有指定的电器和灯光，启动扫地机器人，并开启安防警戒模式，确保居家安全与节能。'
      }
    }
  }
};