import router from './router';
import store from './store';


/* 白名单   、 */
const whiteList = ['/login'];

/*
* 全局前置守卫
* @param {*} to 到哪里去
* form 从哪个路由来
* next 是不是要过去
*  */
router.beforeEach(async (to, from, next) => {
  // if (store.state.user.token) {  // 访问太过于繁琐 封装成getters 获取    getters 就是一个计算属性
  if (store.getters.token) {
    if (to.path === '/login') { // 1. 如果用户已登录  不允许进入 login
      next('/');
    } else {
      // 是否获取到 用户信息， 如果不存在则获取，
      if (!store.getters.hasUserInfo) {
        /* 接口返回的字段中有permission 字段 为权限路由标志  可F12 查看返回*/
        const { permission } = await store.dispatch('user/getUserInfo');
        // 处理用户权限
        const filterRoutes = await store.dispatch('permission/filterRoutes', permission.menus);
        filterRoutes.forEach(item => {
          router.addRoute(item);
        });
        // 添加完成路由后 需要主动跳转
        return next(to.path);
      }
      next();
    }
  } else {
    if (whiteList.includes(to.path)) { // 2 未登录 或者没有权限的情况下 访问的路由在白名单 通过
      next();
    } else {
      // 不在白名单
      next('/login');
    }
  }
});

// 完成后在main 导入

