<template>
  <div class="container">
    <Breadcrumb />
    <a-card
      title="灰色头像生成器"
      class="mb10"
      :hoverable="true">
      <a-descriptions :column="2">
        <!-- <a-descriptions-item
          label="设备UA"
          :span="2">
          {{ userAgent }}
        </a-descriptions-item>
        <a-descriptions-item label="浏览器品牌">{{ userAgentData?.brands[0]?.brand }}</a-descriptions-item>
        <a-descriptions-item label="版本">{{ userAgentData?.brands[0]?.version }}</a-descriptions-item>
        <a-descriptions-item label="平台">{{ userAgentData.platform }}</a-descriptions-item>
        <a-descriptions-item label="设备类型">{{ userAgentData.mobile ? '移动设备' : '非移动设备' }}</a-descriptions-item>
        <a-descriptions-item label="最大触控数量">{{ maxTouchPoints }}</a-descriptions-item>
        <a-descriptions-item label="设备内存">{{ deviceMemory }}GB</a-descriptions-item>
        <a-descriptions-item label="首选语言">{{ language }}</a-descriptions-item>
        <a-descriptions-item label="其他语言">{{ languages.slice(1)?.join(',') }}</a-descriptions-item>
        <a-descriptions-item label="Cookie开关">{{ cookieEnabled ? '开启' : '关闭' }}</a-descriptions-item>
        <a-descriptions-item label="PDF阅读">{{ pdfViewerEnabled ? '支持' : '不支持' }}</a-descriptions-item>
        <a-descriptions-item label="storage ">{{ JSON.stringify(storage) }}</a-descriptions-item>
        <a-descriptions-item label="credentials">{{ JSON.stringify(geolocation) }}</a-descriptions-item>
        <a-descriptions-item label="mediaSession">{{ JSON.stringify(mediaSession) }}</a-descriptions-item> -->
      </a-descriptions>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"

</script>

<style lang="less" scoped>
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
