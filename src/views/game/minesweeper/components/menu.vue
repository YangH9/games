<template>
  <a-layout-sider
    width="200"
    style="background: #fff">
    <a-menu
      :selectedKeys="[ $route.path ]"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="click">
      <a-menu-item key="/game/minesweeper">home</a-menu-item>
      <a-menu-item key="/game/minesweeper/setting">setting</a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
const $router = useRouter()
const $route = useRoute()
const click = data => {
  $router.push(data.key)
}
</script>

<style scoped>

</style>
