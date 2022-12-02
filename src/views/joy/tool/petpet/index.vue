<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <iframe
        src="https://yangh9.github.io/petpet/"
        frameborder="0"
        width="100%"
        height="100%"
        @load="routerLoading().hide()"></iframe>
    </a-layout-content>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import { routerLoading } from "@/stores"
import { onMounted } from "vue"

onMounted(() => {
  routerLoading().show()
})
</script>

<style lang="less" scoped>
.ant-layout-content{
  height: calc(100vh - 128px);
}
</style>
