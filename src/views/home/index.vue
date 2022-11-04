<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        <a-card
          title="首页"
          :hoverable="true">
          {{ baseurl }}、{{ mode }}、{{ title }}
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
const baseurl = env.VITE_BASE_URL
const mode = env.MODE
const title = env.VITE_TITLE
</script>

<style scoped>

</style>
