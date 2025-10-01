import { createI18n } from 'vue-i18n';
import en from './assets/i18n/en';
import zhTW from './assets/i18n/zh-TW';
import zhCN from './assets/i18n/zh-CN';
import ja from './assets/i18n/ja';
import ko from './assets/i18n/ko';

const messages = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'ja': ja,
  'ko': ko,
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;