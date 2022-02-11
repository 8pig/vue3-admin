<template>
  <div>
    <div class="logo-container">
      <el-avatar size="large" shape="square" src="/logo.png" fit="contain" style="background: none;" />
      <h1 v-show="$store.getters.sidebarOpened" class="logo-title">
        vue3Admin
      </h1>
    </div>
    <el-scrollbar>
      <sidebar-menu />
    </el-scrollbar>
  </div>

</template>
<script setup>
import SidebarMenu from './SidebarMenu.vue';

</script>
<style  lang="scss" scoped>
.logo-container {
  height: 44px;
  padding: 10px 0 22px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  .logo-title {
    margin-left: 10px;
    color: #fff;
    font-weight: 600;
    line-height: 50px;
    font-size: 16px;
    white-space: nowrap;
  }
}
</style>
