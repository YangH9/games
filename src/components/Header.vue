<template>
  <a-layout-header>
    <div class="header">
      <RouterLink
        to="/"
        class="logo">
        木易
      </RouterLink>
      <a-menu
        :selectedKeys="[`/${$route.path.split('/')[1]}`]"
        mode="horizontal"
        @click="click">
        <a-menu-item key="/">首页</a-menu-item>
        <a-menu-item key="/study">学习</a-menu-item>
        <a-menu-item key="/joy">娱乐</a-menu-item>
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
.ant-layout-header {
  padding: 0;
  position: sticky;
  top: 0;
  z-index: 1000;

  .header {
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 0 20px;

    &::after {
      content: '';
      display: block;
      clear: both;
    }
  }

  @media (min-width: 1080px) {
    .header {
      width: 1080px;
    }
  }
}

.ant-layout-header {
  background: var(--color-background);
  // background-image: radial-gradient(transparent 1px, var(--color-background) 1px);
  // background-size: 4px 4px;
  // backdrop-filter: saturate(50%) blur(4px);
}
.ant-menu-horizontal {
  border-color: var(--color-background-soft);
}
.ant-menu {
  background: transparent;
  :deep(.ant-menu-title-content) {
    background: var(--color-background);
    color: var(--color-text);
  }
}

.logo {
  float: left;
  width: 120px;
  height: 31px;
  margin: 16px 24px 16px 0;
  background: var(--color-background-mute);
  color: var(--color-text);
  line-height: 32px;
  text-align: center;

  & ~ ul {
    float: right;
  }
}
</style>
