<template>
  <a-layout-header class="header">
    <div class="logo">扫雷</div>
    <!-- <a-menu
      theme="dark"
      mode="horizontal"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">扫雷</a-menu-item>
    </a-menu> -->
  </a-layout-header>
</template>

<script setup>
// import { ref } from "vue"

</script>

<style scoped>
.logo{
  width: 100px;
  margin-right: 50px;
  display: inline-block;
  color: #fff;
  background: #444;
  text-align: center;
}
.logo ~ ul{
  display: inline-block;
}
</style>