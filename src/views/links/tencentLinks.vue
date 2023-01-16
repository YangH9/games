<template>
  <div class="container">
    <Breadcrumb />
    <a-card title="腾讯旗下游戏链接" class="mb10" :hoverable="true">
      <a-button v-for="(item, key, index) of dataList" :key="index" size="large" :href="`//${key}`" :title="item.title">
        <template #icon>
          <img v-lazy="`//${key}/favicon.ico`" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ key }}
      </a-button>
      <a-button v-for="i of 10" :key="i" class="seat"></a-button>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, getCurrentInstance } from 'vue'

// 腾讯各类域名
// http://ossweb-img.qq.com/images/js/milo_config_server/milo_monitor_alldomain.js

const { Jsonp } = getCurrentInstance().proxy

const dataList = ref([])

Jsonp('http://ossweb-img.qq.com/images/js/milo_config_server/milo_monitor_alldomain.js', () => {
  console.log(window.Milo_Monitor_All_Domain)
  dataList.value = window.Milo_Monitor_All_Domain
})
</script>

<style lang="less" scoped>
.layout {
  overflow: auto;
}

.ant-card :deep(.ant-card-body) {
  padding-right: 14px;
  padding-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  content-visibility: auto;

  .ant-btn {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  &::before,
  &::after {
    display: none;
  }

  .seat {
    width: 0;
    height: 0;
    zoom: 0;
    margin: 0;
    padding: 0;
  }
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: baseline;
}
</style>
