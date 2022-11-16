<template>
  <Menu url="/resources/demo"></Menu>
  <a-layout style="padding: 0 24px 24px">
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
}
</style>
