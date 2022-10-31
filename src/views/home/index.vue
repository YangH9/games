<template>
  首页
  <div>
    {{ baseurl }}、{{ mode }}、{{ title }}
  </div>
</template>

<script setup>
import { getCurrentInstance } from "vue"
const env = getCurrentInstance().proxy.getEnv
console.log(env)
const baseurl = env.VITE_BASE_URL
const mode = env.MODE
const title = env.VITE_TITLE
</script>

<style scoped>

</style>