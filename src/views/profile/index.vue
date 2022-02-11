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
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
    <el-button>中文</el-button>
  </el-row>
</template>

<script setup>
import {} from 'vue';
</script>

<style lang="scss" scoped></style>
