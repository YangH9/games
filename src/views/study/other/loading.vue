<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="加载动画" class="mb10" :hoverable="true">
      <div class="box">
        <img src="@/assets/loading.svg" width="100" />
        <my-loading size="100" lineWidth="10" strokeStyle="#359dda"></my-loading>
        <Loading1></Loading1>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import Loading1 from './common/loading1.vue'
import { LoadingCircle } from '@/utils/custom/loading'

customElements.define('my-loading', LoadingCircle)
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
