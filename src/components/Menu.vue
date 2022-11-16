<template>
  <a-layout-sider
    width="200"
    style="background: #fff">
    <a-menu
      :selectedKeys="[$route.path]"
      mode="inline"
      :style="{ height: '100%', borderRight: 0 }"
      @click="click">
      <a-menu-item
        v-for="item of menuList"
        :key="item.path">
        {{ item.meta.title }}
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { reactive } from "vue"
import { useRoute, useRouter } from "vue-router"

const { url } = defineProps({ url: String })

const $router = useRouter()
const $route = useRoute()

const menuList = reactive($route.matched.find(item => item.path === url).children)

const click = data => {
  $router.push(data.key)
}
</script>

<style lang="less" scoped>
.ant-menu {
  background: transparent;
  background-image: radial-gradient(transparent 1px, #ffffff 1px);
  background-size: 4px 4px;
  backdrop-filter: saturate(50%) blur(4px);
}
</style>
