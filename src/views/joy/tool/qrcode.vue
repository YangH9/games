<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="二维码生成器" :hoverable="true">
      二维码生成器
      邮件
      日程
      WiFi
      链接
      文本
      联系人
      App
      短信
    </a-card>
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
