<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" title="日历" :hoverable="true"> 日历 </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://www.fly63.com/tool/glassmorphism/
</script>

<style lang="less" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
