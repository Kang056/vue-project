import { createI18n } from 'vue-i18n';
import en from './assets/i18n/en.js';
import zhTW from './assets/i18n/zh-TW.js';
import zhCN from './assets/i18n/zh-CN.js';
import ja from './assets/i18n/ja.js';
import ko from './assets/i18n/ko.js';

const messages = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  ja,
  ko,
};

const i18n = createI18n({
  legacy: false, // 使用 Composition API
  locale: 'zh-TW', // 預設語言
  fallbackLocale: 'en',
  messages,
  __VUE_I18N_FULL_INSTALL__: true,
  __VUE_I18N_LEGACY_API__: false,
  __INTLIFY_PROD_DEVTOOLS__: false,
});

export default i18n;