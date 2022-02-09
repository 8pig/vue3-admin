import { createRouter, createWebHashHistory } from 'vue-router';


const publicRoutes = [

  {
    path: '/login',
    name: 'login',
    component: () => import(/* webpackChunkName: "about" */ '@/views/login/index.vue')
  },
  {
    path: '/',
    component: () => import(/* webpackChunkName: "layout" */ '@/layout/index')
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: publicRoutes
});

export default router;
