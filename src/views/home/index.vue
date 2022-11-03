<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        首页
        <div>
          {{ baseurl }}、{{ mode }}、{{ title }}
        </div>
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
const baseurl = env.VITE_BASE_URL
const mode = env.MODE
const title = env.VITE_TITLE
</script>

<style scoped>

</style>
