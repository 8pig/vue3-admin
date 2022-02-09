import { login } from '@/api/sys';
import storage from '@/utils/storage';
import { TOKEN } from '@/constant';
import router from '@/router';

export default {
  namespaced: true,
  state: () => ({
    token: storage.get(TOKEN) || ''

  }),
  mutations: {
    setToken (state, token) {
      state.token = token;
      storage.set(TOKEN, token);
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
          router.push('/');
          // 跳转
          resolve(res);
        }).catch(e => {
          reject(e);
        });
      });
    }
  }
};
