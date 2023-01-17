<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 22, dom: '.ant-card-body' }" title="代码雨" class="mb10" :hoverable="true">
      <canvas ref="canvas">你的浏览器不支持</canvas>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, reactive, onMounted } from 'vue'

const canvas = ref('')
const canvasConfig = reactive({
  width: 0,
  height: 0,
  content: '',
  step: 16,
  codeRainArr: [],
  cols: 0
})

// 初始化
const init = () => {
  canvasConfig.content = canvas.value.getContext('2d')
  canvasConfig.width = canvas.value.parentNode.clientWidth
  canvasConfig.height = canvas.value.parentNode.clientHeight
  canvas.value.width = canvasConfig.width
  canvas.value.height = canvasConfig.height
  canvasConfig.cols = ~~(canvasConfig.width / 14)
  canvasConfig.content.font = '14px microsoft yahei'
  canvasConfig.codeRainArr = Array(canvasConfig.cols)
    .fill(1)
    .map(() => {
      const basePos = ~~(Math.random() * 300)
      const speed = ~~(Math.random() * 10) + 3
      const colx = ~~(Math.random() * canvasConfig.width)
      return Array(~~(canvasConfig.height / canvasConfig.step) / 2)
        .fill(1)
        .map((a, i) => ({
          x: colx,
          y: -(canvasConfig.step * i) - basePos,
          speed,
          text: ~~(Math.random() * 10) % 2 === 0 ? 0 : 1
          // text : ["a","b","c","d","e","f","g","h","o","s","x"][parseInt(Math.random()*11)]
        }))
    })
}

const running = () => {
  canvasConfig.content.clearRect(0, 0, canvasConfig.width, canvasConfig.height)
  canvasConfig.codeRainArr.forEach((item) => {
    item.forEach((ite, i) => {
      if (ite.y > canvasConfig.height) {
        ite.y = 0
      } else {
        ite.y += ite.speed
      }
      canvasConfig.content.fillStyle = `hsl(${~~(Math.random() * 359) + 1},30%,${50 - i * 2}%)`
      canvasConfig.content.fillText(ite.text, ite.x, ite.y)
    })
  })
  requestAnimationFrame(running)
}

onMounted(() => {
  init()
  requestAnimationFrame(running)
})
</script>

<style lang="less" scoped>
.ant-card :deep(.ant-card-body) {
  padding: 0;
  background: #000;
}
</style>
