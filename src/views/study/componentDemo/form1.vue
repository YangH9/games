<template>
  <div class="container">
    <Breadcrumb />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="表单" :hoverable="true">表单</a-card>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
