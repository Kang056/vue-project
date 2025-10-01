export default {
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
  save: 'Save',
  add: 'Add',
  edit: 'Edit',
  delete: 'Delete',
  saveChanges: 'Save Changes',

  // SmartDevices.vue
  smartDevices: {
    pageTitle: 'Common Smart Devices',
    searchPlaceholder: 'Search devices...',
    addButton: 'Add Device',
    addTitle: 'Add New Device',
    editTitle: 'Edit Device',
    nameLabel: 'Device Name:',
    descriptionLabel: 'Device Description:',
    deleteConfirm: 'Are you sure you want to delete this device?',
    devices: {
      lighting: {
        name: 'Smart Lighting',
        description: 'Users can remotely control lights, adjust brightness and color temperature, and even set schedules. Smart bulbs and light strips are among the most popular products for starting a smart home.'
      },
      thermostat: {
        name: 'Smart Thermostat',
        description: 'Smart thermostats (like Nest) learn your habits and automatically adjust the indoor temperature to balance comfort and energy savings.'
      },
      speaker: {
        name: 'Smart Speaker',
        description: 'As the hub of the home, smart speakers (like Google Nest, Amazon Echo, Apple HomePod) not only play music but also control other smart devices via voice commands.'
      },
      security: {
        name: 'Smart Security',
        description: 'Includes smart locks, surveillance cameras, door/window sensors, etc., providing remote monitoring, abnormal activity detection, and alarm functions to enhance home security.'
      }
    }
  },

  // ScenarioApplications.vue
  scenarioApps: {
    pageTitle: 'Scenario Application Examples',
    searchPlaceholder: 'Search scenarios...',
    addButton: 'Add Scenario',
    addTitle: 'Add New Scenario',
    editTitle: 'Edit Scenario',
    nameLabel: 'Scenario Name:',
    descriptionLabel: 'Scenario Description:',
    deleteConfirm: 'Are you sure you want to delete this scenario?',
    scenarios: {
      home: {
        name: 'Home Mode',
        description: 'When the smart lock detects you arriving home, it triggers a series of actions: the entryway light turns on, the living room air conditioner adjusts to a comfortable temperature, the smart speaker plays your favorite music, and the security system is disarmed.'
      },
      movie: {
        name: 'Movie Mode',
        description: 'With a simple "Hey Siri, turn on movie mode," the main living room lights dim, accent light strips turn on, the TV automatically turns on and switches to Netflix, and the curtains slowly close, immersing you in the cinematic world instantly.'
      },
      sleep: {
        name: 'Sleep Mode',
        description: 'When bedtime arrives or via a voice command, all non-essential lights will turn off, the bedroom night light will turn on, the air conditioner will enter sleep mode, and it will confirm all doors and windows are locked.'
      },
      away: {
        name: 'Away Mode',
        description: 'When you leave home, the system automatically turns off all specified appliances and lights, starts the robot vacuum, and activates the security alert mode to ensure home safety and energy savings.'
      }
    }
  }
};