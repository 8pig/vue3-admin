<template>
  <el-breadcrumb class="breadcrumb" separator="/">


    <transition-group name="breadcrumb">
      <el-breadcrumb-item
        v-for="(item, index) in BreadcrumData"
        :key="item.path"
      >
      <span
        class="no-redirect"
        v-if="index === BreadcrumData.length - 1"
      >
        {{ item.meta.title}}
      </span>
        <span
          class="redirect"
          v-else
          @click="linkClick(item)"
        >
        {{ item.meta.title}}
      </span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script setup>
import { ref, watch } from 'vue';
import { useStore } from 'vuex';
import { useRoute, useRouter } from 'vue-router';


const BreadcrumData = ref([]);

const route = useRoute();
watch(route, () => {
  BreadcrumData.value = route.matched.filter(item => item.meta && item.meta.title);
  console.log(BreadcrumData);
},
{ immediate: true }
);

// 跳转事件
const router = useRouter();
const linkClick = route => {
  router.push(route.path);
};


const store = useStore();
const linkHoverColor = ref(store.getters.cssVal.menuBg);

</script>

<style lang="scss" scoped>
.breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 8px;
  .redirect {
    color: #666;
    font-weight: 600;
    cursor:pointer;
  }
  .redirect:hover {
    color: v-bind(linkHoverColor);
  }
  ::v-deep .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}

</style>
