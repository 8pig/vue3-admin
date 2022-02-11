<template>
    <el-dialog
      title="提示"
      :model-value="modeVlue"
      @close="closed"
      width="20%"
    >
      <div class="content">
        <p class="title">主题色</p>
        <el-color-picker
          v-model="myColor"
          :predefine="predefineColors"
        />
      </div>
      <template #footer>
        <el-button @click="closed">{{ $t('msg.universal.cancel')}}</el-button>
        <el-button type="primary" @click="confirm">{{ $t('msg.universal.confirm')}}</el-button>
      </template>

    </el-dialog>
</template>
<script setup>
import { defineProps, defineEmits, ref } from 'vue';
import { useStore } from 'vuex';
import { generateNewStyle, writeNewStyle } from '@/utils/theme';
const store = useStore();
const myColor = ref(store.getters.mainColor);
defineProps({
  modeVlue: {
    type: Boolean,
    required: true
  }
});
const emits = defineEmits(['update:modelValue']);
const closed = () => {
  emits('update:modelValue', false);
};
const confirm = async () => {
  // 1.1 获取主题色
  const newStyleText = await generateNewStyle(myColor.value);
  // 1.2 写入最新主题色
  writeNewStyle(newStyleText);
  // 2. 保存最新的主题色
  store.commit('theme/setMainColor', myColor.value);
  // 3. 关闭 dialog
  closed();
  window.location.reload();
};

// 预定义色值
const predefineColors = [
  '#ff4500',
  '#ff8c00',
  '#ffd700',
  '#90ee90',
  '#00ced1',
  '#1e90ff',
  '#c71585',
  'rgba(255, 69, 0, 0.68)',
  'rgb(255, 120, 0)',
  'hsv(51, 100, 98)',
  'hsva(120, 40, 94, 0.5)',
  'hsl(181, 100%, 37%)',
  'hsla(209, 100%, 56%, 0.73)',
  '#c7158577'
];
</script>
<style scoped lang="scss">
.content {
  text-align: center;
  .title {
    margin-bottom: 12px;
  }
}
</style>
