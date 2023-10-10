<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="flex items_center content_between">
          <h3>穿越火线手游武器图鉴</h3>
          <span>全部（{{ dataList.length }}）件</span>
          <h6>数据内容来自<a href="//cfm.qq.com/main.shtml">穿越火线手游</a>官网，以下数据仅供参考，具体数据以游戏内为准</h6>
        </div>
      </template>
      <a-row justify="space-around" :gutter="[10, 10]">
        <a-col v-bind="colSpan" v-for="(item, index) of dataList.slice(0, pageNum)" :key="index">
          <a-card ref="cardRef" :hoverable="true">
            <template #title>
              {{ item.qxmc_e8 }}
            </template>
            <template #extra>
              <template v-if="Array.isArray(item.wqlx_ba)">
                <a-tag v-for="ite of item.wqlx_ba" color="blue" class="mr_0 ml_1">{{ ite?.bq_24 }}</a-tag>
              </template>
              <a-tag v-else color="blue" class="mr_0">{{ item.wqlx_ba?.bq_24 }}</a-tag>
            </template>
            <img
              v-lazy="item.sytp_58"
              class="image"
              src="@/assets/default.png"
              :alt="item.qxmc_e8"
              :title="`${item.qxjj_c7}${item.sytp_58.match(/\/([0-9]{8})\//)[1].replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3')}`"
              @click="previewUrl = item.sytp_58"
            />
          </a-card>
        </a-col>
        <a-col v-bind="colSpan" v-for="item of 4" :key="item" class="seat">
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
        onVisibleChange: (e) => !e && (previewUrl = '')
      }"
    />
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, watch } from 'vue'
import { dataList } from '@/utils/tencentGame/cfmAtlas.json'

// const url = `https://cfm.qq.com/zlkdatasys/data_zlk_qxsy.json`

const colSpan = { xs: 12, sm: 8, lg: 6 }

const previewUrl = ref('')

const pageNum = ref(10)

const cardRef = ref([])

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
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
</script>

<style lang="scss" scoped>
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
  padding: 10px 4px 0px 10px;

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
    width: 100%;
    height: 120px;
    max-width: 100%;
    display: inline-block;
    object-fit: contain;
    background: url('https://game.gtimg.cn/images/cfm/ingame/ingame2017/bg_weapons_bd.jpg') center center;
    background-size: contain;
  }
}
</style>
