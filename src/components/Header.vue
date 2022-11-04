<template>
  <a-layout-header class="header">
    <div class="container">
      <div class="logo">瀚</div>
      <a-menu
        :selectedKeys="[`/${$route.path.split('/')[ 1 ]}`]"
        theme="dark"
        mode="horizontal"
        @click="click"
      >
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/game">游戏</a-menu-item>
        <a-menu-item key="/resources">资源分享</a-menu-item>
        <a-menu-item key="/links">链接</a-menu-item>
        <a-menu-item key="/about">关于</a-menu-item>
      </a-menu>
    </div>
  </a-layout-header>
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
.header{
  padding: 0;
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: rgba(255, 255, 255, 0.3);
  color: #f2f2f2;
  line-height: 32px;
  text-align: center;
  & ~ ul {
    float: right;
  }
}

</style>
