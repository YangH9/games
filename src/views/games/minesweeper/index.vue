<template>
  <Menu></Menu>
  <a-layout style="padding: 0 24px 24px">
    <Breadcrumb></Breadcrumb>
    <a-layout-content
      :style="{ background: '#fff', height: 'calc(100vh - 142px)' }"
    >
      <RouterViewBox url="/games/minesweeper">
        <div>
          扫雷home
          <div>
            {{ baseurl }}、{{ mode }}、{{ title }}
          </div>
        </div>
      </RouterViewBox>
    </a-layout-content>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Menu from "./components/menu.vue"
import { getCurrentInstance } from "vue"
import RouterViewBox from "@/components/RouterViewBox.vue"
const env = getCurrentInstance().proxy.getEnv
console.log(env)
const baseurl = env.VITE_BASE_URL
const mode = env.MODE
const title = env.VITE_TITLE

</script>

<style scoped>

</style>
