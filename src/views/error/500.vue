<template>
  <a-result
    status="500"
    title="500"
    sub-title="服务器发生了错误。">
    <template #extra>
      <a-button
        type="primary"
        @click="back">
        Back Home
      </a-button>
    </template>
  </a-result>
</template>

<script setup>
import router from "@/router"

const back = () => {
  router.push("/")
}
</script>

<style lang="less" scoped>

</style>
