<template>
  <a-breadcrumb
    style="margin: 16px 0">
    <a-breadcrumb-item href="./">首页</a-breadcrumb-item>
    <a-breadcrumb-item
      v-for="(item, index) in menuList"
      :key="index" 
      :href="item.path">
      {{ item.meta.title }}
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"

const $router = useRouter()
const $route = useRoute()

const menuList = ref($route.matched)

setTimeout(() => {
  console.log({ ...$route })
}, 1000)
</script>

<style scoped>

</style>