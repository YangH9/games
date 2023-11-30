<template>
  <div class="container pb_0">
    <Breadcrumb overlayShow />
  </div>
  <div v-calcHeight="0">
    <v-form-designer class="v-form-designer scroll_y"></v-form-designer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://www.npmjs.com/package/vform3-builds
</script>

<style lang="scss" scoped>
.v-form-designer:deep(.main-header) {
  display: none;
}
</style>
