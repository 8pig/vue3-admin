import storage from '@/utils/storage';
import { LANG } from '@/constant';
export default {
  namespace: true,
  state: () => ({
    sidebarOpened: true,
    language: storage.get(LANG) || 'zh'
  }),
  mutations: {
    triggerSidebarOpened (state) {
      state.sidebarOpened = !state.sidebarOpened;
    },
    setLanguage (state, lang) {
      state.language = lang;
      storage.set(LANG, lang);
    }
  }
};
