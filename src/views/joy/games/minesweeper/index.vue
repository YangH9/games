<template>
  <Menu url="/joy/games/minesweeper"></Menu>
  <a-layout v-calcHeight="0">
    <Breadcrumb />
    <RouterView />
  </a-layout>
</template>

<script setup>
import Menu from '@/components/Menu.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
</script>

<style lang="scss" scoped>
@media (min-width: 720px) {
  .ant-layout {
    padding: 0px 20px 20px;
  }
}
</style>
