<template>
  <a-breadcrumb style="margin: 16px 0">
    <a-breadcrumb-item>
      <RouterLink to="/">
        <home-outlined />
      </RouterLink>
    </a-breadcrumb-item>
    <a-breadcrumb-item v-for="(item, index) in menuList" :key="index">
      <template v-if="index === menuList.length - 1">{{ item.meta.title }}</template>
      <RouterLink v-if="index < menuList.length - 1" :to="item.path">
        {{ item.meta.title }}
      </RouterLink>
      <template v-if="overlayShow && index === menuList.length - 1 && menuList[index - 1]?.children?.length" #overlay>
        <a-menu>
          <template v-for="(ite, ind) in menuList[index - 1].children" :key="ind">
            <a-menu-item v-if="ite.path !== item.path">
              <RouterLink :to="ite.path">
                {{ ite.meta.title }}
              </RouterLink>
              <!-- <a target="_blank" rel="noopener noreferrer" href="http://www.alipay.com/">General</a> -->
            </a-menu-item>
          </template>
        </a-menu>
      </template>
    </a-breadcrumb-item>
  </a-breadcrumb>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { HomeOutlined } from '@ant-design/icons-vue'

const { overlayShow } = defineProps({ overlayShow: { type: Boolean, default: false } })

const route = useRoute()

const menuList = computed(() => route.matched)
</script>

<style scoped lang="scss">
.ant-dropdown-menu:deep(.ant-dropdown-menu-item) {
  padding: 0;

  a {
    display: block;
    padding: 5px 12px;
  }
}

@media (max-width: 720px) {
  .ant-breadcrumb {
    padding: 0 20px;
  }
}

// @media (prefers-color-scheme: dark) {
//   .ant-breadcrumb {
//     a,
//     :deep(.ant-breadcrumb-separator) {
//       color: var(--color-text);
//     }

//     & > span:last-child {
//       color: var(--color-heading);
//     }
//   }
// }
</style>
