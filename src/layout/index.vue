<template>
  <div
    class="app-wrapper"
  >
    <!-- 左侧 menu -->
    <sidebar
      id="guide-sidebar"
      class="sidebar-container"
      :style="{ backgroundColor: variables.menuBg }"
    />
    <div class="main-container">
      <div class="fixed-header">
        <!-- 顶部的 navbar -->
        <navbar />
      </div>
      <!-- 内容区 -->
      <app-main />
    </div>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import AppMain from './components/AppMain';
// 导入定义的scss
import variables from '@/styles/variables.scss';

</script>


<style lang="scss" scoped>
@import '~@/styles/mixin.scss';
@import '~@/styles/variables.scss';


.app-wrapper {
  @include clearfix;
  position: relative;
  height: 100%;
  width: 100%;
}

.fixed-header {
  position: fixed;
  top: 0;
  right: 0;
  z-index: 9;
  width: calc(100% - #{$sideBarWidth});
}
</style>
