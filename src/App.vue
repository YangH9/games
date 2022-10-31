<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <RouterView />
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from "@/views/header.vue"

</script>

<style scoped>

</style>
