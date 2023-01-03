<template>
  <div class="container">
    <Breadcrumb />
    <a-card title="设备基础信息" class="mb10" :hoverable="true">
      <a-descriptions :column="2">
        <a-descriptions-item label="设备UA" :span="2">
          {{ userAgent }}
        </a-descriptions-item>
        <a-descriptions-item v-for="item of userAgentData?.brands" :key="item.brand" label="品牌(版本)">
          {{ item.brand }}（{{ item.version }}）
        </a-descriptions-item>
        <a-descriptions-item label="平台">{{ userAgentData.platform }}</a-descriptions-item>
        <a-descriptions-item label="设备类型">{{ userAgentData.mobile ? '移动设备' : '非移动设备' }}</a-descriptions-item>
        <a-descriptions-item label="浏览器的名称">{{ appName }}</a-descriptions-item>
        <a-descriptions-item label="操作系统平台">{{ platform }}</a-descriptions-item>
        <a-descriptions-item label="浏览器引擎">{{ product }}</a-descriptions-item>
        <a-descriptions-item label="最大触控数量">{{ maxTouchPoints }}</a-descriptions-item>
        <a-descriptions-item label="设备内存">{{ deviceMemory }}GB</a-descriptions-item>
        <a-descriptions-item label="首选语言">{{ language }}</a-descriptions-item>
        <a-descriptions-item label="其他语言">{{ languages.slice(1)?.join(',') }}</a-descriptions-item>
        <a-descriptions-item label="Cookie开关">{{ cookieEnabled ? '开启' : '关闭' }}</a-descriptions-item>
        <a-descriptions-item label="PDF阅读">{{ pdfViewerEnabled ? '支持' : '不支持' }}</a-descriptions-item>
        <!-- <a-descriptions-item label="storage ">{{ JSON.stringify(storage) }}</a-descriptions-item>
        <a-descriptions-item label="credentials">{{ JSON.stringify(geolocation) }}</a-descriptions-item>
        <a-descriptions-item label="mediaSession">{{ JSON.stringify(mediaSession) }}</a-descriptions-item> -->
      </a-descriptions>
    </a-card>
    <a-card title="网络信息" class="mb10" :hoverable="true">
      <a-descriptions :column="2">
        <a-descriptions-item label="网络状态">{{ onLine ? '在线' : '离线' }}</a-descriptions-item>
        <a-descriptions-item label="网络类型">{{ connection?.effectiveType }}</a-descriptions-item>
        <a-descriptions-item label="下行速度">{{ connection?.downlink }}</a-descriptions-item>
        <a-descriptions-item label="估算的往返时间">{{ connection?.rtt }}</a-descriptions-item>
        <a-descriptions-item label="数据保护模式">{{ connection?.saveData }}</a-descriptions-item>
      </a-descriptions>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

const {
  appName = '',
  platform = '',
  product = '',
  userAgent = '',
  cookieEnabled = '',
  language = '',
  languages = [],
  maxTouchPoints = '',
  connection = {},
  onLine = '',
  pdfViewerEnabled = '',
  deviceMemory = '',
  userAgentData = {},
  wakeLock = {},
  storage = '',
  geolocation = '',
  mediaSession = ''
} = window.navigator

console.log(storage, geolocation, mediaSession)

wakeLock?.request('screen').then((lock) => {
  setTimeout(() => lock.release(), 10 * 60 * 1000)
})

// const { architecture, bitness, fullVersionList, platform, platformVersion } = await userAgentData.getHighEntropyValues([ "architecture", "bitness", "model", "platformVersion", "fullVersionList" ])
// console.log(architecture, bitness, fullVersionList, platform, platformVersion)
</script>

<style lang="less" scoped>
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
