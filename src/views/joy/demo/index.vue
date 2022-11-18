<template>
  <Menu url="/joy/demo"></Menu>
  <a-layout>
    <Breadcrumb />
    <RouterView />
  </a-layout>
</template>

<script setup>
import Menu from "@/components/Menu.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
</script>

<style lang="less" scoped>
.ant-layout {
  height: calc(100vh - 64px);
  padding: 0px 24px 24px;
}
</style>
