<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="音乐播放器" :hoverable="true">
      <!-- <audio controls src="https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3"></audio> -->
      <controlDom></controlDom>
      <a-divider />
      <musicListDom></musicListDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, inject } from 'vue'

const Jsonp = inject('Jsonp')

// https://developer.mozilla.org/zh-CN/docs/Web/Media/Audio_and_video_manipulation

// https://yangh9.github.io/public/audio/fileList.js
// https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3

const audioObj = new Audio('https://yangh9.github.io/public/audio/山河图-凤凰传奇.mp3')
audioObj.addEventListener('canplaythrough', (event) => {
  console.log(event, audioObj.readyState, audioObj)
})

const musicList = ref([])

Jsonp('https://yangh9.github.io/public/audio/fileList.js', 'callback', (res) => {
  console.log(res)
  musicList.value = res.fhcqList
})
const controlDom = () => (
  <>
    <a-row class="text_center">
      <a-col span={2} offset={2}>
        <a-button type="text">
          <ARetweetOutlined />
        </a-button>
      </a-col>
      <a-col span={2} class="flex center">
        00 : 00
      </a-col>
      <a-col span={12}>
        <a-slider />
      </a-col>
      <a-col span={2} class="flex center">
        00 : 00
      </a-col>
      <a-col span={2}>
        <a-button type="text">
          <ASoundOutlined />
        </a-button>
      </a-col>
      <a-col span={2}>
        <a-slider />
      </a-col>
    </a-row>
    <a-row class="text_center">
      <a-col span={2} offset={9}>
        <a-button type="text">
          <AArrowLeftOutlined />
        </a-button>
      </a-col>
      <a-col span={2}>
        <a-button type="text">
          <ACaretRightOutlined />
        </a-button>
        {/* <APauseOutlined /> */}
      </a-col>
      <a-col span={2}>
        <a-button type="text">
          <AArrowRightOutlined />
        </a-button>
      </a-col>
    </a-row>
  </>
)

const musicListDom = () => (
  <a-list
    data-source={musicList.value}
    bordered
    size="small"
    renderItem={({ item }) => (
      <a-list-item v-slots={{ actions: () => <a key="list-loadmore-edit">播放</a> }}>{item.name}</a-list-item>
    )}
  ></a-list>
)
</script>

<style lang="scss" scoped></style>
