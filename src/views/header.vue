<template>
  <a-layout-header class="header">
    <div class="logo">游戏</div>
    <a-menu
      v-model:selectedKeys="selectedKeys"
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
      @click="click"
    >
      <a-menu-item key="/">首页</a-menu-item>
      <a-menu-item key="/minesweeper">扫雷</a-menu-item>
    </a-menu>
  </a-layout-header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { ref } from "vue"
const $router = useRouter()
const $route = useRoute()

const selectedKeys = ref([ $route.path ])

const click = (data) => {
  $router.push(data.key)
}
</script>

<style scoped>
.logo{
  width: 100px;
  margin-right: 50px;
  display: inline-block;
  color: #fff;
  background: #444;
  text-align: center;
}
.logo ~ ul{
  display: inline-block;
}
</style>