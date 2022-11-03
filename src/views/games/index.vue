<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <RouterViewBox url="/games">
        <div class="container">
          <Breadcrumb />
          游戏
          <br>
          <RouterLink to="/games/minesweeper">扫雷</RouterLink>
        </div>
      </RouterViewBox>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"
import RouterViewBox from "@/components/RouterViewBox.vue"

</script>

<style scoped>

</style>
