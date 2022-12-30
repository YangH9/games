<template>
  <div class="container">
    <Breadcrumb />
    <a-card
      title="飞车手游图鉴"
      class="card mb10"
      :hoverable="true">
      <a-image-preview-group>
        <template v-if="carsDataList.length > 0">
          <a-card-grid
            v-for="item of carsDataList"
            :key="item.cid_d3"
            style="width: 25%">
            <a-card :title="item.cm_4e">
              <template #extra>{{ item.jb_43 }}</template>
              <a-image
                :src="item.slt_3c"
                width="100%"
                height="110px" />
            </a-card>
          </a-card-grid>
        </template>
      </a-image-preview-group>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import { ref } from "vue"

const url = i => `https://speedm.qq.com/zlkdatasys/data/${i}/list.json`

const carUrl = url`car_list`
const mapUrl = url`map_list`
const petUrl = url`pet_list`

const carsDataList = ref([])
const mapsDataList = ref([])
const petsDataList = ref([])

// 分装json内调用的方法并获取内容
window.cars_data = obj => {
  carsDataList.value = obj.scsy_ad.reverse()
}
window.maps_data = obj => {
  mapsDataList.value = obj.dtsy_1f.reverse()
}
window.pets_data = obj => {
  petsDataList.value = obj.cwsy_80.reverse()
}

// 生成script标签
const getScript = (src, func) => {
  const script = document.createElement("script")
  script.async = "async"
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
.card {
  :deep(.ant-card-body) {
    padding: 0;

    .ant-card-grid {
      padding: 12px;

      &:hover {
        box-shadow: none;
      }

      .ant-card-head {
        min-height: auto;
      }

      .ant-image-img {
        object-fit: contain;
      }

      .ant-card-head-title,
      .ant-card-extra {
        padding: 8px;
      }
    }
  }
}
</style>
