<template>
  <div class="nav-bar">
    <!--    -->
    <hamburger class="hamburger-container"></hamburger>
    <breadcrumb class="breadcrumb-container" />
    <div class="right-menu">
      <el-dropdown class="avatar-container" trigger="click">
        <div class="avatar-wrapper">
          <el-avatar shape="square" :size="40" :src="$store.getters.userInfo.avatar"></el-avatar>
          <i class="el-icon-s-tools"></i>
        </div>
        <template #dropdown>
          <el-dropdown-menu class="user-dropdown">
            <route-link to="/">
              <el-dropdown-item>主页</el-dropdown-item>
            </route-link>
              <route-link to="/setting">
              <el-dropdown-item>账号设置</el-dropdown-item>
            </route-link>
          </el-dropdown-menu>
          <el-dropdown-item divided @click="logout">退出登录</el-dropdown-item>
        </template>
      </el-dropdown>
    </div>
  </div>

</template>
<script setup>
import Hamburger from '@/components/hamburger';
import Breadcrumb from '@/components/Breadcrumb';
import { useStore } from 'vuex';
const store = useStore();

const logout = () => {
  store.dispatch('user/logout');
};
</script>
<style lang="scss" scoped>
  .nav-bar {
    height: 50px;
    overflow: hidden;
    position: relative;
    background: #fff;
    box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
    .breadcrumb-container {
      float: left;
    }
  }
  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.5s;
    &:hover {
      background: rgba(0, 0, 0, 0.06);
    }
  }

  .right-menu {
    display: flex;
    align-items: center;
    float: right;
    padding-right: 16px;
  }
  ::v-deep .avatar-container {
    cursor: pointer;
    .avatar-wrapper {
      margin-top: 5px;
      position: relative;
    }
    .el-avatar {
      background: none;
      margin-right: 12px;
    }
  }

</style>
