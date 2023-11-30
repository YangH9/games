<template>
  <div class="container pb_0">
    <Breadcrumb overlayShow />
  </div>
  <div v-calcHeight="0">
    <v-form-designer class="form-designer scroll_y"></v-form-designer>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://www.npmjs.com/package/vform3-builds
</script>

<style lang="scss" scoped>
.form-designer:deep() {
  .main-header {
    display: none;
  }
  .el-scrollbar {
    &.side-scroll-bar {
      height: calc(100vh - 118px) !important;
    }
    &.setting-scrollbar {
      height: calc(100vh - 172px) !important;
    }
    &.container-scroll-bar {
      height: calc(100vh - 160px) !important;
    }
  }
  .form-widget-container .el-form.full-height-width > .form-widget-list {
    min-height: calc(100vh - 186px);
  }
  .right-toolbar {
    width: auto !important;
    .right-toolbar-con {
      width: auto;
      button:nth-last-child(1),
      button:nth-last-child(2) {
        display: none;
      }
    }
  }
}
</style>
