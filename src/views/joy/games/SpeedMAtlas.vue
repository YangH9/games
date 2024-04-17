<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="flex items_center content_between">
          <h3>飞车手游图鉴</h3>
          <h6>
            数据内容来自<a href="//speedm.qq.com/main.shtml">QQ飞车手游</a>官网，以下数据仅供参考，具体数据以游戏内为准
          </h6>
        </div>
        <a-divider />
        <a-radio-group
          v-model:value="typeListActive"
          button-style="solid"
          class="flex items_center content_around"
          @change="changeType"
        >
          <a-radio-button v-for="(item, index) in typeList" :key="index" :value="item.key"
            >{{ item.title }}（{{ item.num }}）</a-radio-button
          >
        </a-radio-group>
      </template>
      <template v-if="typeListActive === 'car'">
        <a-radio-group v-model:value="carFactoryListActive" button-style="solid" class="px_3 scroll_x">
          <a-radio-button v-for="(item, index) in carFactoryList" :key="index" :value="item.key">{{
            item.title
          }}</a-radio-button>
        </a-radio-group>
        <a-divider />
        <a-radio-group v-model:value="carGradeListActive" button-style="solid" class="px_3 scroll_x">
          <a-radio-button v-for="(item, index) in carGradeList" :key="index" :value="item.key">{{
            item.title
          }}</a-radio-button>
        </a-radio-group>
        <a-divider />
      </template>
      <template v-if="typeListActive === 'map'">
        <a-radio-group v-model:value="mapGradeListActive" button-style="solid" class="px_3 scroll_x">
          <a-radio-button v-for="(item, index) in mapGradeList" :key="index" :value="item.key">{{
            item.title
          }}</a-radio-button>
        </a-radio-group>
        <a-divider />
      </template>
      <a-row :gutter="[10, 10]">
        <template v-if="show && typeListActive === 'car'">
          <a-col
            v-for="(item, index) in carsDataList
              .filter(
                i =>
                  (i.ccmz_36 === carFactoryListActive || !carFactoryListActive) &&
                  (i.jb_43 === carGradeListActive || !carGradeListActive)
              )
              .slice(0, pageNum)"
            v-bind="colSpan"
            :key="index"
          >
            <a-card ref="carRef" :hoverable="true">
              <template #title>
                {{ item.cm_4e }}
                <img v-lazy="item.cclogo_2a" />
              </template>
              <template #extra>
                <a-tag color="blue" class="mr_0">{{ item.jb_43 }}</a-tag>
              </template>
              <img
                v-lazy="item.slt_3c"
                class="image"
                src="@/assets/default.png"
                :alt="item.cm_4e"
                :title="`${item.jj_3b}\n${item.slt_3c
                  .match(/\/([0-9]{8})\//)[1]
                  .replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3')}`"
                @click="previewUrl = [item.slt_3c, item.tt_8a]"
              />
            </a-card>
          </a-col>
        </template>
        <template v-if="show && typeListActive === 'map'">
          <a-col
            v-for="(item, index) in mapsDataList
              .filter(i => i.jytg_a3 === mapGradeListActive || !mapGradeListActive)
              .slice(0, pageNum)"
            v-bind="colSpan"
            :key="index"
          >
            <a-card ref="mapRef" :title="item.dtm_88" :hoverable="true">
              <template #extra>{{ item.jytg_a3 }}星</template>
              <img
                v-lazy="item.slt_3c"
                class="image"
                src="@/assets/default.png"
                :alt="item.dtm_88"
                :title="`${item.jj_3b}\n${item.slt_3c
                  .match(/\/([0-9]{8})\//)[1]
                  .replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3')}`"
                @click="previewUrl = [item.slt_3c, item.tt_8a]"
              />
            </a-card>
          </a-col>
        </template>
        <template v-if="show && typeListActive === 'pet'">
          <a-col v-for="(item, index) in petsDataList.slice(0, pageNum)" v-bind="colSpan" :key="index">
            <a-card ref="petRef" :title="item.mc_77" :hoverable="true">
              <img
                v-lazy="item.slt_3c"
                class="image"
                src="@/assets/default.png"
                :alt="item.mc_77"
                :title="`${item.jj_3b}\n${item.slt_3c
                  .match(/\/([0-9]{8})\//)[1]
                  .replace(/([0-9]{4})([0-9]{2})([0-9]{2})/, '$1-$2-$3')}`"
                @click="previewUrl = [item.slt_3c, item.tmpngxt_19, item.tt_8a]"
              />
            </a-card>
          </a-col>
        </template>
      </a-row>
    </a-card>
    <a-image-preview-group
      :preview="{
        visible: previewUrl.length > 0,
        onVisibleChange: e => !e && (previewUrl = [])
      }"
    >
      <a-image v-for="(item, index) in previewUrl" :key="index" :src="item" />
    </a-image-preview-group>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { nextTick, ref, watch, inject, computed } from 'vue'

const Jsonp = inject('Jsonp')

const colSpan = { xs: 12, sm: 8, md: 6 }

const pageNum = ref(10)

const carRef = ref([])
const mapRef = ref([])
const petRef = ref([])

const observer = new IntersectionObserver(entries => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      pageNum.value += 10
      observer.unobserve(item.target)
      observer.observe(carRef.value?.at(-1)?.$el || mapRef.value?.at(-1)?.$el || petRef.value?.at(-1)?.$el)
    }
  })
})
watch(
  [carRef, mapRef, petRef],
  () => {
    ;(carRef.value.length || mapRef.value.length || petRef.value.length) &&
      observer.observe(carRef.value?.at(-1)?.$el || mapRef.value?.at(-1)?.$el || petRef.value?.at(-1)?.$el)
  },
  { deep: true }
)

const changeType = () => {
  pageNum.value = 10
  observer.disconnect()
  document.querySelector('.ant-card-body').scrollTop = 0
}

const previewUrl = ref([])

const show = ref(true)

const typeListActive = ref('car')
const carFactoryListActive = ref('')
const carGradeListActive = ref('')
const mapGradeListActive = ref('')

const url = i => `https://speedm.qq.com/zlkdatasys/data/${i}/list.json`

const carUrl = url`car_list`
const mapUrl = url`map_list`
const petUrl = url`pet_list`

const carsDataList = ref([])
const mapsDataList = ref([])
const petsDataList = ref([])

const typeList = computed(() => [
  { title: '赛车', key: 'car', num: carsDataList.value.length },
  { title: '地图', key: 'map', num: mapsDataList.value.length },
  { title: '宠物', key: 'pet', num: petsDataList.value.length }
])
const carFactoryList = [
  { title: '全部车厂', key: '' },
  { title: '雷诺重工', key: '雷诺重工' },
  { title: '阿尔法科技', key: '阿尔法科技' },
  { title: '极星动力', key: '极星动力' },
  { title: '特洛伊工业', key: '特洛伊工业' },
  { title: '合作车厂', key: '合作车厂' },
  { title: '暂无车厂', key: '暂无车厂' }
]
const carGradeList = [
  { title: '全部等级', key: '' },
  { title: 'T车', key: 'T' },
  { title: 'S车', key: 'S' },
  { title: 'A车', key: 'A' },
  { title: 'B车', key: 'B' },
  { title: 'C车', key: 'C' },
  { title: 'D车', key: 'D' },
  { title: 'M2摩托', key: 'M2' },
  { title: 'M1摩托', key: 'M1' },
  { title: 'L2滑板', key: 'L2' },
  { title: 'L1滑板', key: 'L1' },
  { title: 'L0滑板', key: 'L0' }
]
const mapGradeList = [
  { title: '全部', key: '' },
  { title: '七星', key: '7' },
  { title: '六星', key: '6' },
  { title: '五星', key: '5' },
  { title: '四星', key: '4' },
  { title: '三星', key: '3' },
  { title: '二星', key: '2' },
  { title: '一星', key: '1' }
]

watch([typeListActive, carFactoryListActive, carGradeListActive, mapGradeListActive], () => {
  pageNum.value = 10
  show.value = false
  nextTick(() => {
    show.value = true
  })
})

// 获取赛车数据
Jsonp(carUrl, 'cars_data', data => {
  carsDataList.value = data.scsy_ad.reverse().map(item => {
    try {
      item.ccmz_36 = item.ccxgxx_48[0].ccmz_36
      item.cclogo_2a = item.ccxgxx_48[0].cclogo_2a
    } catch (err) {
      item.ccmz_36 = '合作车厂'
      item.cclogo_2a = ''
    }
    return item
  })
})
// 获取地图数据
Jsonp(mapUrl, 'maps_data', data => {
  mapsDataList.value = data.dtsy_1f.reverse()
})
// 获取宠物数据
Jsonp(petUrl, 'pets_data', data => {
  petsDataList.value = data.cwsy_80.reverse()
})
</script>

<style scoped lang="scss">
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
    overflow-y: scroll;
    padding: 10px 4px 10px 10px;

    .ant-card-head {
      padding-left: 10px;
      padding-right: 10px;
      min-height: auto;

      .ant-card-head-title {
        img {
          filter: invert(1);
        }
      }

      .ant-card-head-title,
      .ant-card-extra {
        padding: 8px;
      }
    }

    .ant-card-body {
      padding: 0;
      overflow-y: hidden;
    }

    .image {
      width: 100%;
      height: 120px;
      display: inline-block;
      object-fit: cover;
    }
  }
}
</style>
