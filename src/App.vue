<template>
  <a-config-provider :locale="ant_zhCN">
    <el-config-provider :locale="ele_zhCn">
      <a-watermark :content="`${route.meta.title}-${title}-木易`" :zIndex="100" :gap="[200, 200]" :offset="[50, 50]">
        <Loading />
        <RouterView />
      </a-watermark>
    </el-config-provider>
  </a-config-provider>
</template>

<script setup>
import Loading from '@/components/Loading.vue'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import ant_zhCN from 'ant-design-vue/es/locale/zh_CN'
import ele_zhCn from 'element-plus/dist/locale/zh-cn.mjs'

const route = useRoute()
const GetEnv = inject('GetEnv')

const title = GetEnv.VITE_TITLE
</script>

<style lang="scss" scoped></style>
