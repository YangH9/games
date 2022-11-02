<template>
  <a-layout>
    <Sider></Sider>
    <a-layout style="padding: 0 24px 24px">
      <Breadcrumb></Breadcrumb>
      <a-layout-content
        :style="{ background: '#fff', height: 'calc(100vh - 142px)' }"
      >
        <RouterView />
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "../../components/Breadcrumb.vue"
import Sider from "../sider.vue"

</script>

<style scoped>

</style>
