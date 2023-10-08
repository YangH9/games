<template>
  <a-watermark :content="`${route.meta.title}-${title}-木易`" :zIndex="100" :gap="[200, 200]" :offset="[50, 50]">
    <Loading />
    <RouterView />
  </a-watermark>
</template>

<script setup>
import Loading from '@/components/Loading.vue'
import { getCurrentInstance } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const { GetEnv } = getCurrentInstance().proxy

const title = GetEnv.VITE_TITLE
</script>

<style lang="scss" scoped></style>
