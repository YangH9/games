<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="App Store信息" :hoverable="true"></a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'

const callback = 'jsonp_appStore'
const appStoreUrl = (key) =>
  `https://itunes.apple.com/search?term=${key}&country=cn&entity=software&limit=10&callback=${callback}`
</script>

<style lang="scss" scoped></style>
