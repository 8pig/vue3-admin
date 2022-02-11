<template>
    <el-dropdown class="international" trigger="click" @command="setLang">
      <div>
        <el-tooltip content="切换语言" :effect="effect">
          <svg-icon icon="language"></svg-icon>
        </el-tooltip>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item :disabled="language === 'zh'" command="zh">中文</el-dropdown-item>
          <el-dropdown-item :disabled="language === 'en'" command="en">English</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>
<script setup>

import { computed, defineProps } from 'vue';
import { useStore } from 'vuex';
import { useI18n } from 'vue-i18n';
import { ElMessage } from 'element-plus';

defineProps({
  effect: {
    type: String,
    default: 'dart',
    validator (value) {
      return ['dart', 'light'].includes(value);
    }
  }
});


const store = useStore();
const language = computed(() => store.getters.language);
// 切换语言
const i18n = useI18n();
const setLang = lang => {
  // 切换 18n 状态
  i18n.locale.value = lang;
  store.commit('app/setLanguage', lang);
  ElMessage.success('切换成功');
};

</script>
<style lang="scss" scoped>

</style>
