import variables from '@/styles/variables.scss';

/* 快捷访问 */
const getters = {
  token: state => state.user.token,
  userInfo: state => state.user.userInfo,
  hasUserInfo: state => { // true 表示已有用户信息
    return JSON.stringify(state.user.userInfo) !== `{}`;
  },
  cssVal: state => variables
};

export default getters;
