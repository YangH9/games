<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="画中画" class="mb_2" :hoverable="true">
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
import { ref, onMounted, nextTick, watch } from 'vue'

// web devtools eruda

// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
// https://developer.mozilla.org/zh-CN/docs/Web/API/Picture-in-Picture_API
// https://blog.csdn.net/hzhfxian/article/details/120283616
// https://cn.teleprompter-online.com/

const font = '30px SanFrancisco'
const padding = 14
let textRect = {}
let context = ''
let oldTime = ''

const canvas = ref('')
const video = ref('')
const textWidth = ref('')

const getTime = () => new Date().toFormat()

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
  if (oldTime !== time) {
    oldTime = time
    try {
      video.value.srcObject = canvas.value.captureStream()
      // video.value.srcObject.push(canvas.value.captureStream())
    } catch (err) {
      console.log(err)
    }
  }
  window.requestAnimationFrame(draw)
  // setTimeout(() => {
  //   draw()
  // }, 1000)
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
  // const mediaSource = new MediaSource();
  // const stream = canvas.value.captureStream()
  // const mediaRecorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
  // mediaRecorder.ondataavailable = (event) => {
  //   console.log(event)
  //   if (event.data && event.data.size) {
  //     mediaSource.addSourceBuffer(e.data)
  //   }
  // }
  // nextTick(() => {
  //   console.log(video.value)
  //   mediaSource.addSourceBuffer(canvas.value.captureStream())
  //   video.value.srcObject = mediaSource;
  // })
  // mediaRecorder.start()
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
