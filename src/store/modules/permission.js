import { publicRoutes, privateRoutes } from '@/router';

export default {
  namespaced: true,
  state: () => ({
    // 指定初始路由表
    routes: publicRoutes
  }),
  mutations: {
    setRoutes (state, newRoutes) { // 合并
      state.routes = [...publicRoutes, ...newRoutes];
    }
  },
  actions: {
    /**
     *
     * @param context
     * @param menus 权限数据
     */
    filterRoutes (context, menus) {
      // 筛选之后 获取到的路由
      const routes = [];
      menus.forEach(key => {
        routes.push(...privateRoutes.filter(item => item.name === key));
      });

      // 最后加入404
      routes.push({
        path: '/:catchAll(.*)',
        name: '404',
        component: () => import('@/views/error-page/404'),
      },);
      context.commit('setRoutes', routes);
      return routes;
    }
  }
};
