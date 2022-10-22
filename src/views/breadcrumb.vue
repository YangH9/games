<!--
 * @fileName breadcrumb
 * @date 2022-10-22 09:52:12
 * @version V1.0.0
!-->

<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>游戏</a-breadcrumb-item>
    <a-breadcrumb-item>{{ $route.meta.title }}</a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
// import { ref } from "vue"
const $router = useRouter()
const $route = useRoute()

</script>

<style scoped>

</style>