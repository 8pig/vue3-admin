
/* 快捷访问 */
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => { // true 表示已有用户信息
    return JSON.stringify(state.user.userInfo) !== `{}`;
  }
};

export default getters;
