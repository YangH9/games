<template>
  <div class="container">
    <Breadcrumb></Breadcrumb>
    <a-layout-content
      :style="{ background: '#fff', height: 'calc(100vh - 142px)' }"
    >
      <RouterViewBox url="/joy/listen">
        <div>
          音乐播放器规划中
        </div>
      </RouterViewBox>
    </a-layout-content>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import RouterViewBox from "@/components/RouterViewBox.vue"


</script>

<style lang="less" scoped>

</style>
