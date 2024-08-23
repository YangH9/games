<template>
  <RouterLink :to="item.href">
    <slot></slot>
  </RouterLink>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
</script>

<style scoped></style>
