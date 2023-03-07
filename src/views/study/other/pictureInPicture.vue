<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="画中画" class="mb10" :hoverable="true">
      <canvas ref="canvas">不支持canvas</canvas>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted } from 'vue'

// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
// https://blog.csdn.net/hzhfxian/article/details/120283616
// https://cn.teleprompter-online.com/

const canvas = ref('')
onMounted(() => {
  console.log(window.getComputedStyle(canvas.value.parentElement).paddingLeft)
  canvas.value.width = 600
  canvas.value.height = 300
  const context = canvas.value.getContext('2d')
  console.log(canvas)
  console.log(context)
  context.fillColor = '#aaa'
  context.font = '40px SanFrancisco'
  context.lineWidth = 5
  context.beginPath()
  context.fillText('测试', 40, 40)
  // requestPictureInPicture()
})
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
