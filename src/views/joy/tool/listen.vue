<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="音乐播放器" :hoverable="true">
      音乐播放器
      <!-- <audio controls src="https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3"></audio> -->
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { inject } from 'vue'

const Jsonp = inject('Jsonp')

// https://developer.mozilla.org/zh-CN/docs/Web/Media/Audio_and_video_manipulation

// https://yangh9.github.io/public/audio/fileList.js
// https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3

const audioObj = new Audio('https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3')
audioObj.addEventListener('readyState', (event) => {
  console.log(event, audioObj)
})

Jsonp('https://yangh9.github.io/public/audio/fileList.js', 'callback', (res) => {
  console.log(res)
})
</script>

<style lang="scss" scoped></style>
