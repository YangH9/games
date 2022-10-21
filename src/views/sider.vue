<template>
  <a-layout-sider
    width="200"
    style="background: #fff">
    <a-menu
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="click">
      <a-menu-item key="/">home</a-menu-item>
      <a-menu-item key="/about">about</a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
// import { useRoute, useRouter, router } from "vue-router"
// import { ref } from "vue"

import router from "@/router"

const click = (data) => {
  console.log(data)
  router.push(data.key)
  // const router = useRouter()
  // router.push(data.key)
  
}

// console.log(useRoute.path)

</script>

<style scoped>

</style>