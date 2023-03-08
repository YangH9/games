<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <span ref="textWidth" class="textWidth"></span>
    <a-card title="画中画" class="mb10" :hoverable="true">
      <canvas ref="canvas">不支持canvas</canvas>
      <video ref="video" controls autoplay></video>
      <div>
        <a-button @click="open">开启</a-button>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted, getCurrentInstance } from 'vue'

const { Dayjs } = getCurrentInstance().proxy

// https://developer.mozilla.org/zh-CN/docs/Web/API/Canvas_API
// https://developer.mozilla.org/zh-CN/docs/Web/API/Picture-in-Picture_API
// https://blog.csdn.net/hzhfxian/article/details/120283616
// https://cn.teleprompter-online.com/

const font = '40px SanFrancisco'
const padding = 20

const canvas = ref('')
const video = ref('')
const textWidth = ref('')

const getTime = () => Dayjs().format('YYYY/MM/DD HH:mm:ss')

const getWidthHeight = (text) => {
  textWidth.value.style.font = font
  textWidth.value.style.padding = `${padding}px`
  textWidth.value.innerHTML = text
  return textWidth.value.getBoundingClientRect()
}

const draw = () => {
  const time = getTime()
  const { width, height } = getWidthHeight(time)
  const context = canvas.value.getContext('2d')
  context.clearRect(0, 0, width, height)
  context.fillStyle = '#fff'
  context.fillRect(0, 0, width, height)
  context.fillStyle = '#000'
  context.textAlign = 'center'
  context.textBaseline = 'middle'
  context.lineWidth = 5
  context.font = font
  context.beginPath()
  context.fillText(time, width / 2, height / 2 + 10)

  window.requestAnimationFrame(draw)
}

const init = () => {
  const { width, height } = getWidthHeight(getTime())
  canvas.value.width = width
  canvas.value.height = height
  const stream = canvas.value.captureStream()
  const recorder = new MediaRecorder(stream, { mimeType: 'video/webm' })
  const data = []
  recorder.ondataavailable = function (event) {
    console.log(event)
    if (event.data && event.data.size) {
      data.push(event.data)
    }
  }
  recorder.onstop = () => {
    const url = URL.createObjectURL(new Blob(data, { type: 'video/webm' }))
    console.log('video url', url)
    video.value.src = url
  }
  recorder.start()
  setTimeout(() => {
    recorder.stop()
  }, 10000)
  // window.requestAnimationFrame(draw)
  draw()
}

const open = () => {
  canvas.value.requestPictureInPicture()
}

onMounted(() => {
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
