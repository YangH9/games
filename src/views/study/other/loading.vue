<template>
  <div class="container">
    <Breadcrumb />
    <a-card title="加载动画" class="mb10" :hoverable="true">
      <div class="box">
        <img src="@/assets/loading.svg" width="100" />
        <loading-circle size="100" lineWidth="10" strokeStyle="#359dda"></loading-circle>
        <Loading></Loading>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Loading from './common/loading1.vue'
</script>

<style lang="less" scoped>
.box {
  display: flex;
  align-items: center;

  & > * {
    margin: 10px;
  }
}
</style>
