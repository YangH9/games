<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="画中画" class="mb10" :hoverable="true">
      <canvas ref="canvas">不支持canvas</canvas>
      <video ref="video" autoplay></video>
      <div>
        <!-- <a-button @click="start">视频开始</a-button> -->
        <a-button @click="open">开启画中画</a-button>
      </div>
    </a-card>
    <span ref="textWidth" class="textWidth"></span>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted, getCurrentInstance, nextTick } from 'vue'

const { Dayjs } = getCurrentInstance().proxy

// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
// https://developer.mozilla.org/zh-CN/docs/Web/API/Picture-in-Picture_API
// https://blog.csdn.net/hzhfxian/article/details/120283616
// https://cn.teleprompter-online.com/

const font = '30px SanFrancisco'
const padding = 14
let textRect = {}
let context = ''

const canvas = ref('')
const video = ref('')
const textWidth = ref('')

const getTime = () => Dayjs().format('YYYY/MM/DD HH:mm:ss')

const draw = () => {
  const time = getTime()
  const { width, height } = textRect
  context.clearRect(0, 0, width, height)
  context.fillStyle = '#fff'
  context.fillRect(0, 0, width, height)
  context.fillStyle = '#000'
  context.font = font
  context.beginPath()
  context.fillText(time, width / 2, height / 2 + 10)
  try {
    video.value.srcObject = canvas.value.captureStream()
  } catch (err) {
    console.log(err)
  }
  // window.requestAnimationFrame(draw)
  setTimeout(() => {
    draw()
  }, 1000)
}

const init = () => {
  const { width, height } = textRect
  canvas.value.width = width
  canvas.value.height = height
  video.value.width = width
  video.value.height = height
  context = canvas.value.getContext('2d')
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.lineWidth = 5
  draw()
}

const open = () => {
  if (document.pictureInPictureEnabled && !video.value.disablePictureInPicture) {
    try {
      if (document.pictureInPictureElement) {
        document.exitPictureInPicture()
      }
      video.value.requestPictureInPicture()
    } catch (err) {
      console.error(err)
    }
  }
}

onMounted(() => {
  textWidth.value.style.font = font
  textWidth.value.style.padding = `${padding}px`
  textWidth.value.innerHTML = '0000/00/00 00:00:00'
  textRect = textWidth.value.getBoundingClientRect()
  init()
})
</script>

<style lang="less" scoped>
.textWidth {
  display: inline-block;
  visibility: hidden;
  position: absolute;
  top: -1000px;
  left: -1000px;
}
</style>
