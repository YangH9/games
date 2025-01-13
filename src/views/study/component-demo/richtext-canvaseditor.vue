<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="富文本-canvaseditor" :hoverable="true">
      <div class="canvas-editor"></div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted } from 'vue'

import Editor from '@hufe921/canvas-editor'

// https://hufe.club/canvas-editor-docs/

onMounted(() => {
  new Editor(
    document.querySelector('.canvas-editor'),
    {
      header: [
        {
          value: 'Header'
        }
      ],
      main: [
        {
          value: 'Hello World'
        }
      ],
      footer: [
        {
          value: 'footer',
          size: 12
        }
      ]
    },
    {}
  )
})
</script>

<style scoped lang="scss">
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
.canvas-editor:deep() {
  & > div {
    margin: 0 auto;
    canvas {
      border: 1px solid #ccc;
    }
  }
}
</style>
