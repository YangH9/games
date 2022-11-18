<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <iframe
        src="https://yangh9.github.io/petpet/"
        frameborder="0"
        width="100%"
        height="100%"></iframe>
    </a-layout-content>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
</script>

<style lang="less" scoped>
.ant-layout-content{
  height: calc(100vh - 128px);
}
</style>
