<template>
  <div class="container">
    <Breadcrumb />
    <a-card class="card" :hoverable="true">
      <template #title>
        <div class="ant-row ant-row-space-between">
          飞车手游壁纸
          <div>
            <template v-for="(item, index) of directionList" :key="index">
              <a-button :type="directionListActive === item.key ? 'primary' : ''" @click="directionListActive = item.key">
                {{ item.title }}
              </a-button>
            </template>
          </div>
          <div>
            <template v-for="(item, index) of sortByList" :key="index">
              <a-button :type="sortByListActive === item.key ? 'primary' : ''" @click="sortByListActive = item.key">
                {{ item.title }}
              </a-button>
            </template>
          </div>
        </div>
        <a-divider />
        <a-row justify="space-around">
          <a-col v-for="(item, index) of pagesList" :key="index">
            <a-button :type="pagesListActive === item.key ? 'primary' : ''" @click="pagesListActive = item.key">
              {{ item.title }}
            </a-button>
          </a-col>
        </a-row>
      </template>
      <a-row justify="space-around" :gutter="[0, 8]" :class="`direction${directionListActive}`">
        <a-col v-for="(item, index) of sIdxTimeDataList" :key="index">
          <a-card :title="item.sTitle">
            <template #extra>{{ item.sTagInfoList[0].name }}</template>
            <img v-lazy class="image" src="@/assets/default.png" :data-src="item.sIMG" :alt="item.sTitle" :title="item.sTitle" />
          </a-card>
        </a-col>
        <a-col v-for="item of 3" :key="item" class="seat">
          <a-card>
            <div class="image"></div>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref, watch, nextTick, computed } from 'vue'

const baseUrl = `https://apps.game.qq.com/cmc/cross?serviceId=70&source=web_pc&r0=script`
const dataKey = 'qqSpeedM'
const limit = 20

const show = ref(true)
const total = ref(0)

const pagesListActive = ref(1)
const directionListActive = ref('122216')
const sortByListActive = ref('sIdxTime')

const pagesList = computed(() =>
  Array(Math.ceil(total.value / limit))
    .fill(1)
    .map((item, i) => ({ title: i + 1, key: i + 1 }))
)
const directionList = reactive([
  { title: '横板', key: '122216' },
  { title: '竖版', key: '122217' }
])
const sortByList = reactive([
  { title: '时间排序', key: 'sIdxTime' },
  { title: '热度排序', key: 'iTotalPlay' }
])

const sIdxTimeDataList = ref([])

// 生成script标签
const getScript = (src, func) => {
  const script = document.createElement('script')
  script.async = 'async'
  script.src = src
  script.onload = func
  document.head.appendChild(script)
  document.head.removeChild(script)
}

const getData = () => {
  const start = (pagesListActive.value - 1) * limit
  const getUrl = `${baseUrl}&tagids=${directionListActive.value}&start=${start}&limit=${limit}&sortby=${sortByListActive.value}&r1=${dataKey}`
  sIdxTimeDataList.value = []
  getScript(getUrl, () => {
    sIdxTimeDataList.value = window[dataKey].data.items
    total.value = window[dataKey].data.total
    if (pagesListActive.value > Math.ceil(total.value / limit)) {
      pagesListActive.value = Math.ceil(total.value / limit)
    }
  })
}

getData()

watch([pagesListActive, directionListActive, sortByListActive], () => {
  show.value = false
  getData()
  nextTick(() => {
    show.value = true
  })
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

.card {
  & > :deep(.ant-card-body) {
    height: calc(100vh - 243px);
    overflow-x: hidden;
    overflow-y: auto;
    padding: 6px 0px 0px 6px;

    .ant-card-head {
      padding-left: 10px;
      padding-right: 10px;
      min-height: auto;

      .ant-card-head-title,
      .ant-card-extra {
        padding: 8px;
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
      width: 500px;
      height: 310px;
      max-width: 100%;
      display: inline-block;
      object-fit: contain;
    }
    .direction122217 {
      .image {
        width: 302px;
        height: 600px;
      }
    }
  }
}
</style>
