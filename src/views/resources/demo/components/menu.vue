<template>
  <a-layout-sider
    width="200"
    style="background: #fff">
    <a-menu
      :selectedKeys="[ $route.path ]"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="click">
      <a-menu-item key="/resources/demo/pikaqiu">皮卡丘</a-menu-item>
      <a-menu-item key="/resources/demo/huitailang">灰太狼</a-menu-item>
      <a-menu-item key="/resources/demo/lanpangzi">蓝胖子</a-menu-item>
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

<style lang="less" scoped>
.ant-menu{
  background: transparent;
  background-image: radial-gradient(transparent 1px,var(--color-background) 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
}
</style>
