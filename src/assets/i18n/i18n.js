import { createI18n } from 'vue-i18n';
import en from './en';
import zhTW from './zh-TW';

const messages = {
  en,
  'zh-TW': zhTW,
};

const i18n = createI18n({
  legacy: false, // you must set `false`, to use Composition API
  locale: 'zh-TW', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
});

export default i18n;