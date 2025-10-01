import { createI18n } from 'vue-i18n';
import en from './en';
import zhTW from './zh-TW';
import zhCN from './zh-CN';
import ja from './ja';

const messages = {
  en,
  'zh-TW': zhTW,
  'zh-CN': zhCN,
  'ja': ja,
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;