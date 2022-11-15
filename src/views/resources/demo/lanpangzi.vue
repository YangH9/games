<template>
  <Menu></Menu>
  <a-layout style="padding: 0 24px 24px">
    <Breadcrumb />
    <a-layout-content>
      <div>
        CSS蓝胖子
      </div>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import Menu from "./components/menu.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"

</script>

<style lang="less" scoped>
.ant-layout{
  height: calc(100vh - 64px);
}
</style>
