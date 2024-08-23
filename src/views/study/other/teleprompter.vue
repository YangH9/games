<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="提词器" class="mb_2" :hoverable="true">
      <canvas ref="canvas" width="200" height="600">不支持canvas</canvas>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted } from 'vue'

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
})
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
