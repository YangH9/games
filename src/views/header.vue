<template>
  <a-layout-header class="header">
    <Container>
      <div class="logo">瀚海</div>
      <a-menu
        :selectedKeys="selectedKeys"
        theme="dark"
        mode="horizontal"
        @click="click">
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/minesweeper">扫雷</a-menu-item>
      </a-menu>
    </Container>
  </a-layout-header>
</template>

<script setup>
import { useRoute, useRouter } from "vue-router"
import { ref, computed } from "vue"
const $router = useRouter()
const $route = useRoute()

const selectedKeys = computed(() => [`/${$route.path.split("/")[ 1 ]}`])

const click = data => {
  $router.push(data.key)
}
</script>

<style lang="less" scoped>
.header{
  padding: 0;
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
  line-height: 32px;
  text-align: center;
  & ~ ul {
    float: right;
  }
}

</style>
