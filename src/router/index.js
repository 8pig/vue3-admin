import {
  createRouter,
  createWebHashHistory
} from 'vue-router';
// import Layout from '@/layout';
import Article from '@/router/modules/Article';
import UserManage from '@/router/modules/UserManage';
import RoleList from '@/router/modules/RoleList';
import PermissionList from '@/router/modules/PermissionList';
import ArticleCreate from '@/router/modules/ArticleCreate';

export const privateRoutes = [
  Article, UserManage, RoleList, PermissionList, ArticleCreate
];
console.warn(privateRoutes);
export const publicRoutes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    redirect: '/profile',
    component: () => import('@/layout/index'),
    children: [
      //
      {
        path: '/profile',
        name: 'profile',
        component: () => import('@/views/profile/index'),
        meta: {
          title: 'profile',
          icon: 'el-icon-user'
        }
      },
      {
        path: '/404',
        name: '404',
        component: () => import('@/views/error-page/404'),
      },
      {
        path: '/401',
        name: '401',
        component: () => import('@/views/error-page/401'),
      }
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes: [...publicRoutes]
});

export default router;
