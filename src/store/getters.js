import { generateColors } from '@/utils/theme';
import storage from '@/utils/storage';
import { MAIN_COLOR } from '@/constant';

/* 快捷访问 */
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => { // true 表示已有用户信息
    return JSON.stringify(state.user.userInfo) !== `{}`;
  },
  cssVal: state => ({
    ...state.theme.variables,
    ...generateColors(storage.get(MAIN_COLOR))
  }),
  sidebarOpened: state => state.app.sidebarOpened,
  language: state => state.app.language,
  mainColor: state => state.theme.mainColor
};

export default getters;
