<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="Apple新年logo" class="mb_2" :hoverable="true">
      <div class="box">
        <img src="@/assets/apple/2023.svg" />
      </div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style scoped lang="scss">
.box {
  display: flex;
  align-items: center;

  & > * {
    margin: 10px;
  }
}
</style>
