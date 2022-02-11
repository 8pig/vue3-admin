import { createI18n } from 'vue-i18n';
import zhLocale from './lang/zh';
import enLocale from './lang/en';
import store from '@/store';

const messages = {
  en: {
    msg: {
      ...enLocale
    }
  },
  zh: {
    msg: {
      ...zhLocale
    }
  }
};

function getLanguage () {
  return store?.getters.language;
}
// const locale = 'zh';
const i18n = createI18n({
  legacy: false,
  globalInjection: true,
  locale: getLanguage(),
  messages
});
export default i18n;
