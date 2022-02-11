<template>
  <div class="">个人中心</div>
  <div>
    {{ $t('msg.test')}}
  </div>
  <el-pagination
    :page-size="100"
    layout="total, prev, pager, next"
    :total="1000"
  >
  </el-pagination>
</template>

<script setup>
import {} from 'vue';
</script>

<style lang="scss" scoped></style>
