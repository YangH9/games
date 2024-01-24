<template>
  <a-layout-sider width="200">
    <a-menu :selectedKeys="[$route.path]" mode="inline" :style="{ height: '100%', borderRight: 0 }" @click="click">
      <a-menu-item v-for="item in menuList" :key="item.path">
        <span>
          {{ item.meta.title }}
        </span>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>

<script setup>
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const { url } = defineProps({ url: String })

const router = useRouter()
const route = useRoute()

const menuList = reactive(route.matched.find(item => item.path === url).children)

const click = data => {
  router.push(data.key)
}
</script>

<style lang="scss" scoped>
.ant-layout-sider {
  background: transparent;
}

// .ant-menu {
//   background: var(--color-background);

//   // background: transparent;
//   // background-image: radial-gradient(transparent 1px, var(--color-background) 1px);
//   // background-size: 4px 4px;
//   // backdrop-filter: saturate(50%) blur(4px);
//   :deep(.ant-menu-title-content) span {
//     color: var(--color-heading);
//   }
// }

@media (max-width: 720px) {
  .ant-layout-sider {
    display: none;
  }
}

// @media (prefers-color-scheme: dark) {
//   :deep(.ant-menu-item.ant-menu-item-selected) {
//     background: #004a6d;
//   }
// }
</style>
