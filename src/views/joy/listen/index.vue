<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <RouterViewBox url="/joy/listen">
        <div>音乐播放器规划中</div>
      </RouterViewBox>
    </a-layout-content>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import RouterViewBox from "@/components/RouterViewBox.vue"
</script>

<style lang="less" scoped></style>
