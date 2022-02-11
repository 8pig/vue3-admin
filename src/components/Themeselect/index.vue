<template>
  <el-dropdown
    v-bind="$attrs"
    trigger="click"
    class="theme"
    @command="handSelect"
  >
<!--    图标-->
    <div>
      <el-tooltip placement="left" effect="light">
        <svg-icon icon="change-theme"></svg-icon>
      </el-tooltip>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item command="color">
          {{ $t('msg.navBar.themeChange') }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
<!--  弹出层 -->
  <div></div>
  <Selectcolor v-model="isShow"></Selectcolor>
</template>
<script setup>
import { ref } from 'vue';


import Selectcolor from './SelectColor';
const handSelect = command => {
  isShow.value = true;
};
const isShow = ref(false);
</script>
