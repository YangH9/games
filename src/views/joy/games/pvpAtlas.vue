<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="ant-row ant-row-space-between">
          <h3>王者荣耀图鉴</h3>
        </div>
      </template>
      <a-row justify="space-around" :gutter="[0, 10]"></a-row>
    </a-card>
    <a-image
      :preview="{
        visible: !!previewUrl,
        src: previewUrl,
        onVisibleChange: (e) => {
          !e && (previewUrl = '')
        }
      }"
    />
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'

const previewUrl = ref('')
</script>

<style lang="less" scoped>
.ant-divider {
  margin-top: 8px;
  margin-bottom: 8px;
}

:deep(.ant-image) {
  display: none;
}

.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 6px 0px 0px 6px;

  .ant-card-head {
    padding-left: 10px;
    padding-right: 10px;
    min-height: auto;

    .ant-card-head-title,
    .ant-card-extra {
      padding: 8px;
      max-width: 200px;
    }
  }

  .ant-card-body {
    padding: 0;
  }

  .seat {
    zoom: 0;
    visibility: hidden;
    height: 0;
    overflow: hidden;
  }

  .image {
    width: 330px;
    height: 186px;
    max-width: 100%;
    display: inline-block;
    object-fit: contain;
  }
}
</style>
