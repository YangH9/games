<template>
  <div>
    扫雷home
    <div>
      {{ baseurl }}、{{ mode }}、{{ title }}
    </div>
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

<style lang="less" scoped>
.ant-layout {
  height: calc(100vh - 64px);
}
</style>
