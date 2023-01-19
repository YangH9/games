<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="layout">
      <div class="container">
        <Breadcrumb />
        <a-card title="首页" class="mb10" :hoverable="true">
          <div>MODE：{{ mode }}</div>
          <div>TITLE：{{ title }}</div>
          <!-- 18:00、19:40
          1、20:00、21:00
          2、20:30、21:30 -->
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { getCurrentInstance } from 'vue'

const { GetEnv } = getCurrentInstance().proxy

const mode = GetEnv.MODE
const title = GetEnv.VITE_TITLE
</script>

<style lang="less" scoped>
.layout {
  overflow: auto;
}
</style>
