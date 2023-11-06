<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="国庆红旗头像生成器" :hoverable="true"
      >国庆红旗头像生成器</a-card
    >
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
