<template>
  <a-layout>
    <Header></Header>
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
  </a-layout>
</template>

<script setup>
import Header from "./views/header.vue"
import Sider from "./views/sider.vue"
import Breadcrumb from "./views/breadcrumb.vue"
</script>

<style scoped>

</style>
