<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" :hoverable="true" title="飞车端游壁纸">
      <a-row :gutter="[10, 10]">
        <a-col v-for="(item, index) in dataList.slice(0, pageNum)" v-bind="colSpan" :key="index">
          <a-card ref="cardRef" :title="item.dtInputDT">
            <img
              v-lazy="item.sProdImgNo_1"
              class="image"
              src="@/assets/default.png"
              :title="item.dtInputDT"
              @click="previewUrl = [item.sThumbURL, item.sProdImgNo_2, item.sProdImgNo_3, item.sProdImgNo_4]"
            />
            <template #actions>
              <a-button type="link" size="small" class="px_1" @click="previewUrl = item.sProdImgNo_2"
                >1280X1024</a-button
              >
              <a-button type="link" size="small" class="px_1" @click="previewUrl = item.sProdImgNo_3"
                >1440X900</a-button
              >
              <a-button type="link" size="small" class="px_1" @click="previewUrl = item.sProdImgNo_4"
                >1920X1080</a-button
              >
            </template>
          </a-card>
        </a-col>
      </a-row>
    </a-card>
    <a-image-preview-group
      :preview="{
        visible: !!previewUrl,
        onVisibleChange: e => !e && (previewUrl = '')
      }"
    >
      <template v-if="Array.isArray(previewUrl)">
        <a-image v-for="(item, index) in previewUrl" :key="index" :src="item" />
      </template>
      <a-image v-else :src="previewUrl" />
    </a-image-preview-group>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, inject, watch } from 'vue'

const Jsonp = inject('Jsonp')

const colSpan = { xs: 24, sm: 12, md: 8, lg: 6 }
const dataKey = 'speed'

const previewUrl = ref('')

const pageNum = ref(10)

const cardRef = ref([])

const observer = new IntersectionObserver(entries => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      pageNum.value += 10
      observer.unobserve(item.target)
      observer.observe(cardRef.value?.at(-1)?.$el)
    }
  })
})
watch(
  [cardRef],
  () => {
    cardRef.value.length && observer.observe(cardRef.value?.at(-1)?.$el)
  },
  { deep: true }
)

const limit = 100
const pagesListActive = 0

const baseUrl = `https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi?sDataType=JSON&jsoncallback=${dataKey}&iActId=4023&iModuleId=4023&page=${pagesListActive}&iListNum=${limit}`

const dataList = ref([])

Jsonp(baseUrl, dataKey, res => {
  dataList.value = res.List.map(item => {
    item.dtInputDT = decodeURIComponent(item.dtInputDT)
    item.sThumbURL = decodeURIComponent(item.sThumbURL)
    item.sProdImgNo_1 = decodeURIComponent(item.sProdImgNo_1).replace('thumb_', '')
    item.sProdImgNo_2 = decodeURIComponent(item.sProdImgNo_2).replace('thumb_', '')
    item.sProdImgNo_3 = decodeURIComponent(item.sProdImgNo_3).replace('thumb_', '')
    item.sProdImgNo_4 = decodeURIComponent(item.sProdImgNo_4).replace('thumb_', '')
    return item
  })
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

.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 10px 4px 10px 10px;

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

  .image {
    width: 100%;
    height: 196px;
    max-width: 100%;
    display: inline-block;
    object-fit: cover;
  }
}
</style>
