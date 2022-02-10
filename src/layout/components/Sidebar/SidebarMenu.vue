<!-- 组件说明 -->
<template>
  <!-- 一级 menu 菜单 -->
  <el-menu
    :collapse="!$store.getters.sidebarOpened"
    :uniqueOpened="true"
    :default-active="activeMenu"
    :background-color="$store.getters.cssVal.menuBg"
    :text-color="$store.getters.cssVal.menuText"
    :active-text-color="$store.getters.cssVal.menuActiveText"
    router
  >
    <SidebarItem
      v-for="item in routes"
      :key="item.path"
      :route="item"
    />

  </el-menu>
</template>

<script setup>
import SidebarItem from './SidebarItem';
/*
*  router 的操作解析 查看docs 路由解析
*  */
import { computed } from 'vue';
import { useRouter, useRoute } from 'vue-router';
import { filterRouters, generateMenus } from '@/utils/route';
import { useStore } from 'vuex';

const router = useRouter();
const routes = computed(() => {
  const fRoute = filterRouters(router.getRoutes());
  return generateMenus(fRoute);
});
console.log(JSON.stringify(routes.value));

// 默认激活项
const route = useRoute();
const activeMenu = computed(() => {
  const { path } = route;
  return path;
});
console.log(useStore().state.app);


</script>

<style lang='scss' scoped>
//@import url()

</style>
