<template>
  <div class="container">
    <Breadcrumb />
    <a-card class="card mb10" :hoverable="true">
      <template #title>
        <h3>飞车手游图鉴</h3>
        <a-divider />
        <a-row justify="space-around">
          <a-col v-for="(item, index) of typeList" :key="index">
            <a-button :type="typeListActive === item.key ? 'primary' : ''" @click="typeListActive = item.key">
              {{ item.title }}
            </a-button>
          </a-col>
        </a-row>
        <template v-if="typeListActive === 'car'">
          <a-divider />
          <div>
            <a-button
              v-for="(item, index) of carFactoryList"
              :key="index"
              :type="carFactoryListActive === item.key ? 'primary' : ''"
              @click="carFactoryListActive = item.key"
            >
              {{ item.title }}
            </a-button>
          </div>
          <a-divider />
          <div>
            <a-button
              v-for="(item, index) of carGradeList"
              :key="index"
              :type="carGradeListActive === item.key ? 'primary' : ''"
              @click="carGradeListActive = item.key"
            >
              {{ item.title }}
            </a-button>
          </div>
        </template>
        <template v-if="typeListActive === 'map'">
          <a-divider />
          <div>
            <a-button
              v-for="(item, index) of mapGradeList"
              :key="index"
              :type="mapGradeListActive === item.key ? 'primary' : ''"
              @click="mapGradeListActive = item.key"
            >
              {{ item.title }}
            </a-button>
          </div>
        </template>
      </template>
      <template v-if="show">
        <a-row v-if="carsDataList.length > 0 && typeListActive === 'car'" justify="space-around" :gutter="[4, 8]">
          <a-col
            v-for="(item, index) of carsDataList.filter(
              (item) => (item.ccmz_36 === carFactoryListActive || !carFactoryListActive) && (item.jb_43 === carGradeListActive || !carGradeListActive)
            )"
            :key="index"
          >
            <a-card>
              <template #title>
                {{ item.cm_4e }}
                <img v-lazy :data-src="item.cclogo_2a" style="filter: invert(1)" />
              </template>
              <template #extra>{{ item.jb_43 }}</template>
              <img v-lazy class="image" src="@/assets/default.png" :data-src="item.slt_3c" :alt="item.cm_4e" :title="item.jj_3b" />
            </a-card>
          </a-col>
          <a-col v-for="item of 3" :key="item" class="seat">
            <a-card>
              <div class="image"></div>
            </a-card>
          </a-col>
        </a-row>
        <a-row v-if="mapsDataList.length > 0 && typeListActive === 'map'" justify="space-around" :gutter="[4, 8]">
          <a-col v-for="(item, index) of mapsDataList.filter((item) => item.jytg_a3 === mapGradeListActive || !mapGradeListActive)" :key="index">
            <a-card :title="item.dtm_88">
              <template #extra>{{ item.jytg_a3 }}星</template>
              <img v-lazy class="image" src="@/assets/default.png" :data-src="item.slt_3c" :alt="item.dtm_88" :title="item.jj_3b" />
            </a-card>
          </a-col>
          <a-col v-for="item of 3" :key="item" class="seat">
            <a-card>
              <div class="image"></div>
            </a-card>
          </a-col>
        </a-row>
        <a-row v-if="petsDataList.length > 0 && typeListActive === 'pet'" justify="space-around" :gutter="[4, 8]">
          <a-col v-for="(item, index) of petsDataList" :key="index">
            <a-card :title="item.mc_77">
              <img v-lazy class="image" src="@/assets/default.png" :data-src="item.slt_3c" :alt="item.mc_77" :title="item.jj_3b" />
            </a-card>
          </a-col>
          <a-col v-for="item of 3" :key="item" class="seat">
            <a-card>
              <div class="image"></div>
            </a-card>
          </a-col>
        </a-row>
      </template>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref, watch, nextTick } from 'vue'

const show = ref(true)

const typeListActive = ref('car')
const carFactoryListActive = ref('')
const carGradeListActive = ref('')
const mapGradeListActive = ref('')

const typeList = reactive([
  { title: '赛车', key: 'car' },
  { title: '地图', key: 'map' },
  { title: '宠物', key: 'pet' }
])
const carFactoryList = reactive([
  { title: '全部车厂', key: '' },
  { title: '雷诺重工', key: '雷诺重工' },
  { title: '阿尔法科技', key: '阿尔法科技' },
  { title: '极星动力', key: '极星动力' },
  { title: '特洛伊工业', key: '特洛伊工业' },
  { title: '合作车厂', key: '合作车厂' },
  { title: '暂无车厂', key: '暂无车厂' }
])
const carGradeList = reactive([
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
])
const mapGradeList = reactive([
  { title: '全部', key: '' },
  { title: '七星', key: '7' },
  { title: '六星', key: '6' },
  { title: '五星', key: '5' },
  { title: '四星', key: '4' },
  { title: '三星', key: '3' },
  { title: '二星', key: '2' },
  { title: '一星', key: '1' }
])

watch([typeListActive, carFactoryListActive, carGradeListActive, mapGradeListActive], () => {
  show.value = false
  nextTick(() => {
    show.value = true
  })
})

const url = (i) => `https://speedm.qq.com/zlkdatasys/data/${i}/list.json`

const carUrl = url`car_list`
const mapUrl = url`map_list`
const petUrl = url`pet_list`

const carsDataList = ref([])
const mapsDataList = ref([])
const petsDataList = ref([])

// 分装json内调用的方法并获取内容
window.cars_data = (obj) => {
  carsDataList.value = obj.scsy_ad.reverse().map((item) => {
    try {
      item.ccmz_36 = item.ccxgxx_48[0].ccmz_36
      item.cclogo_2a = item.ccxgxx_48[0].cclogo_2a
    } catch (err) {
      item.ccmz_36 = '合作车厂'
      item.cclogo_2a = ''
    }
    return item
  })
}
window.maps_data = (obj) => {
  mapsDataList.value = obj.dtsy_1f.reverse()
}
window.pets_data = (obj) => {
  petsDataList.value = obj.cwsy_80.reverse()
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
// 获取赛车数据
getScript(carUrl)
// 获取地图数据
getScript(mapUrl)
// 获取宠物数据
getScript(petUrl)
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
  :deep(.ant-card-body) {
    padding: 6px;

    .ant-card-grid {
      padding: 12px;

      &:hover {
        box-shadow: none;
      }
    }

    .ant-card-head {
      padding-left: 10px;
      padding-right: 10px;
      min-height: auto;
      // color: #fff;
      // background: #0009;
    }

    .ant-card-head-title,
    .ant-card-extra {
      padding: 8px;
    }

    .seat {
      zoom: 0;
      visibility: hidden;

      .image {
        width: 230px;
        height: 0;
      }
    }

    .image {
      width: 230px;
      height: 120px;
      max-width: 100%;
      display: inline-block;
      object-fit: contain;
    }
  }
}
</style>
