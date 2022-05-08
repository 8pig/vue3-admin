import { login, getUserInfo } from '@/api/sys';
import storage from '@/utils/storage';
import { TOKEN } from '@/constant';
import router from '@/router';
import { setTimeStamp } from '@/utils/auth';

export default {
  namespaced: true,
  state: () => ({
    token: storage.get(TOKEN) || '',
    userInfo: {}

  }),
  mutations: {
    setToken (state, token) {
      state.token = token;
      storage.set(TOKEN, token);
    },
    setUserInfo (state, userInfo) {
      state.userInfo = userInfo;
    }
  },
  actions: {
    login (ctx, userInfo) {
      console.error(ctx);
      const { username, password } = userInfo;
      // 真实情况需要对password 进行md5 ra加密
      return new Promise((resolve, reject) => {
        login({ username, password }).then(res => {
          console.log(res);
          this.commit('user/setToken', res.data.token);
          // 保存登录时间
          setTimeStamp();
          router.push('/');
          // 跳转
          resolve(res);
        }).catch(e => {
          reject(e);
        });
      });
    },
    // 获取用户信息  权限
    async getUserInfo (ctx, userInfo) {
      const { data } = await getUserInfo();
      this.commit('user/setUserInfo', data);
      return data;
    },
    // 登出
    logout () {
      this.commit('user/setToken', '');
      this.commit('user/setUserInfo', {});
      storage.removeAll();
      window.location.reload();
      // router.push('/login');
    }
  }
};
