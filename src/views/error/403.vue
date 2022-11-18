<template>
  <div class="result">
    <a-result
      status="403"
      title="403"
      sub-title="你没有此页面的访问权限。">
      <template #extra>
        <a-button
          type="primary"
          @click="back">
          Back
        </a-button>
        <a-button
          type="primary"
          @click="home">
          Home
        </a-button>
      </template>
    </a-result>
  </div>
</template>

<script setup>
import router from "@/router"

const back = () => {
  router.back()
}
const home = () => {
  router.push("/")
}
</script>

<style lang="less" scoped></style>
