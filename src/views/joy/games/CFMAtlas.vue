<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="ant-row ant-row-space-between">
          <h3>穿越火线手游武器图鉴</h3>
          <span>全部（{{ dataList.length }}）件</span>
          <h6>数据内容来自<a href="//cfm.qq.com/main.shtml">穿越火线手游</a>官网，以下数据仅供参考，具体数据以游戏内为准</h6>
        </div>
      </template>
      <a-row justify="space-around" :gutter="[0, 10]">
        <a-col v-for="(item, index) of dataList" :key="index">
          <a-card :hoverable="true">
            <template #title>
              {{ item.qxmc_e8 }}
            </template>
            <template #extra>{{ Array.isArray(item.wqlx_ba) ? item.wqlx_ba[0].bq_24 : item.wqlx_ba?.bq_24 }}</template>
            <img
              v-lazy="item.sytp_58"
              class="image"
              src="@/assets/default.png"
              :alt="item.qxmc_e8"
              :title="item.qxjj_c7"
              @click="previewUrl = item.sytp_58"
            />
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
import { ref } from 'vue'
import { dataList } from '@/utils/tencentGame/cfmAtlas.json'

// const url = `https://cfm.qq.com/zlkdatasys/data_zlk_qxsy.json`

const previewUrl = ref('')
</script>

<style lang="less" scoped>
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
    width: 244px;
    height: 120px;
    max-width: 100%;
    display: inline-block;
    object-fit: contain;
    background: url('https://game.gtimg.cn/images/cfm/ingame/ingame2017/bg_weapons_bd.jpg') center center;
    background-size: contain;
  }
}
</style>
