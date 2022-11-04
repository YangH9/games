<template>
  <a-result
    status="404"
    title="404"
    sub-title="此页面未找到。">
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
  router.back()
}
</script>

<style scoped>

</style>
