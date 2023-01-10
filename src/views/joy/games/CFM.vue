<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 12, dom: '.ant-card-body' }" class="card" :hoverable="true">
      <template #title>
        <div class="ant-row ant-row-space-between">
          <h3>穿越火线手游壁纸</h3>
          <h6>数据内容来自<a href="//cfm.qq.com/main.shtml">穿越火线手游</a>官网，以下数据仅供参考，具体数据以游戏内为准</h6>
        </div>
      </template>
      <a-row justify="space-around" :gutter="[0, 10]">
        <a-col v-for="(item, index) of dataList" :key="index">
          <a-card :hoverable="true">
            <template #title>
              {{ item.sTitle }}
            </template>
            <template #extra>{{ item.sCoverList[0].size }}</template>
            <img
              v-lazy="item.sIMG"
              class="image"
              src="@/assets/default.png"
              :alt="item.sAuthor"
              :title="`${item.sTitle}\n${item.sIdxTime}`"
              @click="previewUrl = item.sIMG"
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
import { dataList } from '@/utils/tencentGame/cfm.json'

// https://cfm.qq.com/cp/a20200225s2/index.html

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

.card {
  & > :deep(.ant-card-body) {
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
      width: 330px;
      height: 186px;
      max-width: 100%;
      display: inline-block;
      object-fit: contain;
    }
  }
}
</style>
