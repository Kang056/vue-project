export default {
  // PublicLayout.vue
  platformTitle: 'スマートホームプラットフォーム',
  login: 'ログイン',
  logout: 'ログアウト',

  // Login.vue
  register: '登録',
  username: 'ユーザー名:',
  password: 'パスワード:',
  confirmPassword: 'パスワード確認:',
  cancel: 'キャンセル',
  loginHint: 'ヒント：ユーザー名: user, パスワード: password',
  noAccount: 'アカウントをお持ちではありませんか？',
  registerNow: '今すぐ登録',
  haveAccount: 'すでにアカウントをお持ちですか？',
  backToLogin: 'ログインに戻る',
  errorInvalidCredentials: 'ユーザー名またはパスワードが無効です',
  errorPasswordMismatch: 'パスワードが一致しません',
  errorUserExists: 'このユーザー名はすでに登録されています',
  registrationSuccessTitle: '登録成功！',
  registrationSuccessMessage: 'ユーザー名: {username}\n\n自動的にログインします。',

  // SmartHomeIntro.vue
  intro: {
    heroTitle: '未来の家へようこそ',
    heroSubtitle: 'スマートホームがあなたの生活をより便利、快適、安全にする方法をご覧ください。',
    connectivityTitle: 'コアコンセプト：相互接続性',
    connectivityText: 'Wi-Fi、Bluetooth、Zigbee、Matterなどの通信プロトコルを通じて、異なるブランドのデバイスが相互に通信・連携し、シームレスなスマートエコシステムを構築します。',
    automationTitle: 'コアコンセプト：自動化',
    automationText: '事前に設定されたルール、時間、またはセンサーデータ（温度、湿度、光、人の動きなど）に基づいて、「日没時に自動で照明を点灯する」などの特定のタスクを自動的に実行し、家があなたのために働きます。',
    remoteControlTitle: 'コアコンセプト：遠隔操作',
    remoteControlText: 'ユーザーはスマートフォン、タブレット、または音声アシスタントを介して、いつでもどこでも自宅のデバイスを監視および制御できます。すべてがあなたの手の中に。',
    advantagesTitle: 'スマートホームの利点',
    convenience: '利便性',
    convenienceText: 'ワンタップまたは一言で複数のデバイスを制御し、日常の操作を簡素化します。',
    energySaving: '省エネ',
    energySavingText: 'スマートサーモスタットと照明システムは、実際のニーズに基づいて調整され、不要なエネルギーの無駄を避けます。',
    security: 'ホームセキュリティ',
    securityText: 'スマートロック、カメラ、センサーは、自宅の状況をリアルタイムで報告し、セキュリティを向上させます。',
    qualityOfLife: '生活の質',
    qualityOfLifeText: '自動化されたシーン（映画や睡眠モードなど）は、より快適な雰囲気を作り出します。'
  },

  // Language Switcher
  language: '言語',

  // Home.vue (Dashboard)
  dashboard: {
    smartDevices: 'スマートデバイス',
    scenarioApps: 'シナリオアプリ',
    futureTrends: '未来のトレンド',
    userProfile: 'ユーザー情報'
  },

  // UserProfile.vue
  userProfile: {
    pageTitle: 'ユーザー情報',
    editButton: 'プロファイル編集',
    membershipLevel: '会員レベル',
    premiumMember: 'プレミアム会員'
  },

  // FutureTrends.vue
  futureTrends: {
    pageTitle: '未来のトレンド',
    matterTitle: 'Matterプロトコルの台頭',
    matterText: 'Matterは、異なるブランドのエコシステム間の障壁を打破することを目的とした、オープンソースのスマートホーム接続規格です。将来的には、Matter対応デバイスはより簡単に連携できるようになり、セットアッププロセスが大幅に簡素化され、ユーザーエクスペリエンスが向上します。',
    aiTitle: 'AIとエッジコンピューティング',
    aiText: 'ますます多くのスマートホームデバイスがAI機能を統合し、クラウドに完全に依存することなく、ローカル（エッジ）でデータを処理し、意思決定を行うことができるようになります。これにより、応答時間が短縮されるだけでなく、ユーザーのプライバシーもより良く保護されます。',
    proactiveTitle: 'プロアクティブインテリジェンスとパーソナライゼーション',
    proactiveText: '未来のスマートホームは、単にコマンドを待つだけでなく、あなたのライフスタイルパターンを積極的に学習し、ニーズを予測します。たとえば、通常起きる時間の前に自動的にコーヒーを淹れ、朝のニュースを再生します。',
    energyTitle: 'エネルギー管理と持続可能性',
    energyText: '持続可能性への関心が高まるにつれて、スマートホームはエネルギー管理においてより重要な役割を果たすようになります。システムは、太陽光発電、エネルギー貯蔵デバイス、および電力網のオフピーク電力価格情報を統合して、家庭のエネルギー使用を自動的に最適化し、最大限の省エネと二酸化炭素排出削減を実現します。'
  },

  // General
  email: 'メールアドレス',
  joinDate: '参加日',
  save: '保存',
  add: '追加',
  edit: '編集',
  delete: '削除',
  saveChanges: '変更を保存',

  // SmartDevices.vue
  smartDevices: {
    pageTitle: '一般的なスマートデバイス',
    searchPlaceholder: 'デバイスを検索...',
    addButton: 'デバイスを追加',
    addTitle: '新しいデバイスを追加',
    editTitle: 'デバイスを編集',
    nameLabel: 'デバイス名:',
    descriptionLabel: 'デバイスの説明:',
    deleteConfirm: 'このデバイスを削除してもよろしいですか？',
    devices: {
      lighting: {
        name: 'スマート照明',
        description: 'ユーザーは遠隔で照明を制御し、明るさや色温度を調整し、スケジュールを設定することもできます。スマート電球やライトストリップは、スマートホームを始めるための最も人気のある製品の1つです。'
      },
      thermostat: {
        name: 'スマートサーモスタット',
        description: 'スマートサーモスタット（Nestなど）は、あなたの習慣を学習し、室内の温度を自動的に調整して、快適さと省エネのバランスを取ります。'
      },
      speaker: {
        name: 'スマートスピーカー',
        description: '家のハブとして、スマートスピーカー（Google Nest、Amazon Echo、Apple HomePodなど）は音楽を再生するだけでなく、音声コマンドで他のスマートデバイスを制御することもできます。'
      },
      security: {
        name: 'スマートセキュリティ',
        description: 'スマートロック、監視カメラ、ドア/窓センサーなどが含まれ、遠隔監視、異常活動検出、および警報機能を提供して、ホームセキュリティを強化します。'
      }
    }
  },

  // ScenarioApplications.vue
  scenarioApps: {
    pageTitle: 'シナリオアプリケーションの例',
    searchPlaceholder: 'シナリオを検索...',
    addButton: 'シナリオを追加',
    addTitle: '新しいシナリオを追加',
    editTitle: 'シナリオを編集',
    nameLabel: 'シナリオ名:',
    descriptionLabel: 'シナリオの説明:',
    deleteConfirm: 'このシナリオを削除してもよろしいですか？',
    scenarios: {
      home: {
        name: '帰宅モード',
        description: 'スマートロックがあなたの帰宅を検出すると、一連のアクションがトリガーされます：玄関の照明が点灯し、リビングのエアコンが快適な温度に調整され、スマートスピーカーがお気に入りの音楽を再生し、セキュリティシステムが解除されます。'
      },
      movie: {
        name: '映画モード',
        description: '「Hey Siri、映画モードにして」と言うだけで、リビングの主照明が暗くなり、アクセントライトが点灯し、テレビが自動的にオンになってNetflixに切り替わり、カーテンがゆっくりと閉まり、すぐに映画の世界に没頭できます。'
      },
      sleep: {
        name: '睡眠モード',
        description: '就寝時間になると、または音声コマンドで、不要な照明がすべてオフになり、寝室の夜間照明が点灯し、エアコンがスリープモードに入り、すべてのドアと窓がロックされていることを確認します。'
      },
      away: {
        name: '外出モード',
        description: '家を出ると、システムは指定されたすべての電化製品と照明を自動的にオフにし、ロボット掃除機を起動し、セキュリティ警告モードを有効にして、家の安全と省エネを確保します。'
      }
    }
  }
};