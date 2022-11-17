<template>
  <a-layout>
    <Header></Header>
    <a-layout class="layout">
      <div class="container">
        <Breadcrumb />
        <a-card
          title="首页"
          class="mb10"
          :hoverable="true">
          <div>MODE：{{ mode }}</div>
          <div>TITLE：{{ title }}</div>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import { getCurrentInstance } from "vue"
import Header from "@/components/Header.vue"
const env = getCurrentInstance().proxy.getEnv
console.log(env)
const mode = env.MODE
const title = env.VITE_TITLE
</script>

<style lang="less" scoped>
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
