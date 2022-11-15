<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <RouterViewBox url="/joy">
        <div class="container">
          <Breadcrumb />
          <a-card
            title="游戏"
            class="mb10"
            :hoverable="true">
            <a-descriptions :column="3">
              <a-descriptions-item>
                <RouterLink to="/joy/gameHistory">游戏历程时间轴</RouterLink>
              </a-descriptions-item>
              <a-descriptions-item>
                <RouterLink to="/joy/catchTheCat">圈小猫</RouterLink>
              </a-descriptions-item>
              <a-descriptions-item>
                <RouterLink to="/joy/minesweeper">扫雷</RouterLink>
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
          <a-card
            title="娱乐"
            class="mb10"
            :hoverable="true">
            <a-descriptions :column="1">
              <a-descriptions-item>
                <RouterLink to="/joy/listen">音乐播放器</RouterLink>
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </div>
      </RouterViewBox>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import RouterViewBox from "@/components/RouterViewBox.vue"

</script>

<style lang="less" scoped>

</style>
