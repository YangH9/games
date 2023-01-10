<template>
  <Menu url="/study/demo"></Menu>
  <a-layout v-calcHeight="0">
    <Breadcrumb />
    <RouterView />
  </a-layout>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style lang="less" scoped>
.ant-layout {
  padding: 0px 24px 24px;
}
</style>
