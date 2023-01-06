<template>
  <div class="container">
    <Breadcrumb />
    <a-card class="card" :hoverable="true" title="飞车端游壁纸">
      <a-row justify="space-around" :gutter="[0, 10]">
        <a-col v-for="(item, index) of dataList" :key="index">
          <a-card :title="item.dtInputDT">
            <img
              v-lazy
              class="image"
              src="@/assets/default.png"
              :data-src="item.sProdImgNo_1"
              :title="item.dtInputDT"
              @click="previewUrl = item.sThumbURL"
            />
            <template #actions>
              <div @click="previewUrl = item.sProdImgNo_2">1280X1024</div>
              <div @click="previewUrl = item.sProdImgNo_3">1440X900</div>
              <div @click="previewUrl = item.sProdImgNo_4">1920X1080</div>
            </template>
          </a-card>
        </a-col>
        <a-col v-for="item of 3" :key="item" class="seat">
          <a-card>
            <div class="image"></div>
          </a-card>
        </a-col>
      </a-row>
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
import { onMounted, ref } from 'vue'

const dataKey = 'speed'

const previewUrl = ref('')

const limit = ref(100)
const pagesListActive = ref(0)

const baseUrl = `https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi?sDataType=JSON&jsoncallback=${dataKey}&iActId=4023&iModuleId=4023&page=${pagesListActive.value}&iListNum=${limit.value}`

const dataList = ref([])

window[dataKey] = (res) => {
  dataList.value = res.List.map((item) => {
    item.dtInputDT = decodeURIComponent(item.dtInputDT)
    item.sThumbURL = decodeURIComponent(item.sThumbURL)
    item.sProdImgNo_1 = decodeURIComponent(item.sProdImgNo_1).replace('thumb_', '')
    item.sProdImgNo_2 = decodeURIComponent(item.sProdImgNo_2).replace('thumb_', '')
    item.sProdImgNo_3 = decodeURIComponent(item.sProdImgNo_3).replace('thumb_', '')
    item.sProdImgNo_4 = decodeURIComponent(item.sProdImgNo_4).replace('thumb_', '')
    return item
  })
}

// 生成script标签
const getScript = (src, func) => {
  const script = document.createElement('script')
  script.async = 'async'
  script.src = src
  script.onload = func
  document.head.appendChild(script)
  document.head.removeChild(script)
}

getScript(baseUrl)

onMounted(() => {
  const { top } = document.querySelector('.ant-card-body').getBoundingClientRect()
  document.querySelector('.ant-card-body').setAttribute('style', `height:calc(100vh - ${top + 12}px`)
})
</script>

<style lang="less" scoped>
.ant-btn + .ant-btn {
  margin-left: 6px;
}

.ant-divider {
  margin-top: 8px;
  margin-bottom: 8px;
}

:deep(.ant-image) {
  display: none;
}

.card {
  & > :deep(.ant-card-body) {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 6px 0px 0px 6px;

    .ant-card-head {
      padding-left: 10px;
      padding-right: 10px;
      min-height: auto;

      .ant-card-head-title {
        padding: 6px;
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
      width: 246px;
      height: 196px;
      max-width: 100%;
      display: inline-block;
      object-fit: contain;
    }
  }
}
</style>
