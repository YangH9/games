<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="flex items_center content_between">
          <div>
            <span class="mr_2">飞车手游壁纸</span>
            <a-radio-group v-model:value="directionListActive" button-style="solid">
              <a-radio-button v-for="(item, index) in directionList" :key="index" :value="item.key">{{
                item.title
              }}</a-radio-button>
            </a-radio-group>
          </div>
          <div>
            <a-radio-group v-model:value="sortByListActive" button-style="solid">
              <a-radio-button v-for="(item, index) in sortByList" :key="index" :value="item.key">{{
                item.title
              }}</a-radio-button>
            </a-radio-group>
          </div>
        </div>
        <a-divider />
        <div class="flex items_center content_between">
          <div>
            <a-radio-group v-model:value="pagesListActive" button-style="solid">
              <a-radio-button v-for="(item, index) in pagesList" :key="index" :value="item.key">{{
                item.title
              }}</a-radio-button>
            </a-radio-group>
          </div>
          <a-select v-model:value="limit">
            <a-select-option :value="5">5</a-select-option>
            <a-select-option :value="10">10</a-select-option>
            <a-select-option :value="20">20</a-select-option>
          </a-select>
        </div>
      </template>
      <a-row :gutter="[10, 10]" :class="`direction${directionListActive}`">
        <a-col v-for="(item, index) in dataList" v-bind="colSpan[directionListActive]" :key="index">
          <a-card :title="item.sTitle">
            <template #extra>
              <a-tag color="blue" class="mr_0">{{ item.sTagInfoList[0].name }}</a-tag>
            </template>
            <img
              v-lazy="item.sIMG"
              class="image"
              src="@/assets/default.png"
              :alt="item.sTitle"
              :title="`${item.sTitle}\n${item.sCreated}`"
              @click="previewUrl = item.sIMG"
            />
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <a-image
      :preview="{
        visible: !!previewUrl,
        src: previewUrl,
        onVisibleChange: e => !e && (previewUrl = '')
      }"
    />
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { computed, ref, watch, inject } from 'vue'

const Jsonp = inject('Jsonp')

const colSpan = { 122216: { xs: 24, sm: 12, md: 8 }, 122217: { xs: 12, sm: 8, md: 6 } }
const baseUrl = `https://apps.game.qq.com/cmc/cross?serviceId=70&source=web_pc&r0=script`
const dataKey = 'speedM'

const previewUrl = ref('')
const limit = ref(20)

const total = ref(0)

const pagesListActive = ref(1)
const directionListActive = ref('122216')
const sortByListActive = ref('sIdxTime')

const pagesList = computed(() =>
  Array(Math.ceil(total.value / limit.value))
    .fill(1)
    .map((_, i) => ({ title: i + 1, key: i + 1 }))
)
const directionList = [
  { title: '横版', key: '122216' },
  { title: '竖版', key: '122217' }
]
const sortByList = [
  { title: '时间排序', key: 'sIdxTime' },
  { title: '热度排序', key: 'iTotalPlay' }
]

const dataList = ref([])

const getData = () => {
  const start = (pagesListActive.value - 1) * limit.value
  const getUrl = `${baseUrl}&tagids=${directionListActive.value}&start=${start}&limit=${limit.value}&sortby=${sortByListActive.value}&r1=${dataKey}`
  dataList.value = []
  Jsonp(getUrl, () => {
    dataList.value = window[dataKey].data.items
    total.value = window[dataKey].data.total
    if (pagesListActive.value > Math.ceil(total.value / limit.value)) {
      pagesListActive.value = Math.ceil(total.value / limit.value)
    }
  })
}

getData()

watch([pagesListActive, directionListActive, sortByListActive, limit], () => {
  getData()
})
</script>

<style lang="scss" scoped>
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

:deep(.ant-card) {
  .ant-card-head-title {
    padding: 10px 0;
  }
  .ant-card-body {
    overflow-x: hidden;
    overflow-y: auto;
    padding: 10px 4px 10px 10px;

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

    .image {
      width: 100%;
      height: 206px;
      display: inline-block;
      object-fit: cover;
    }

    .direction122217 {
      .image {
        height: 340px;
      }
    }
  }
}
</style>
