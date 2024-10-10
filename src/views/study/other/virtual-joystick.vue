<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="虚拟摇杆" :hoverable="true">
      <div>四向按钮</div>
      <div>八向按钮</div>
      <div>四向摇杆</div>
      <div>八向摇杆</div>
      <div>万向摇杆</div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
// 四向按钮
// 八向按钮
// 四向摇杆
// 八向摇杆
// 万向摇杆
</script>

<style scoped lang="scss"></style>
