<template>
  <a-config-provider :locale="zhCN">
    <a-watermark :content="`${route.meta.title}-${title}-木易`" :zIndex="100" :gap="[200, 200]" :offset="[50, 50]">
      <Loading />
      <RouterView />
    </a-watermark>
  </a-config-provider>
</template>

<script setup>
import Loading from '@/components/Loading.vue'
import { inject } from 'vue'
import { useRoute } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'

const route = useRoute()
const GetEnv = inject('GetEnv')

const title = GetEnv.VITE_TITLE
</script>

<style lang="scss" scoped></style>
