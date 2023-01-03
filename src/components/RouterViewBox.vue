<template>
  <template v-if="props.url === $route.path">
    <slot></slot>
  </template>
  <template v-else>
    <RouterView />
  </template>
</template>

<script setup>
import { useRoute } from "vue-router"
const $route = useRoute()
const props = defineProps({ url: String })
</script>

<style lang="less" scoped>

</style>
