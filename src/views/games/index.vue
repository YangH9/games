<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <RouterViewBox url="/games">
        <div class="container">
          <Breadcrumb />
          <a-card
            title="游戏"
            :hoverable="true">
            <RouterLink to="/games/minesweeper">扫雷</RouterLink>
          </a-card>
          <br>
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
