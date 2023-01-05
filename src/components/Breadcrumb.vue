<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>
      <router-link to="/">
        <home-outlined />
      </router-link>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in menuList" :key="index">
      <template v-if="index === menuList.length - 1">{{ item.meta.title }}</template>
      <router-link v-else :to="item.path">
        {{ item.meta.title }}
      </router-link>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeOutlined } from '@ant-design/icons-vue'

const $route = useRoute()

const menuList = computed(() => $route.matched)
</script>

<style lang="less" scoped>
@media (prefers-color-scheme: dark) {
  .ant-breadcrumb {
    a,
    :deep(.ant-breadcrumb-separator) {
      color: var(--color-text);
    }

    & > span:last-child {
      color: var(--color-heading);
    }
  }
}
</style>
