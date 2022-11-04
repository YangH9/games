<template>
  <a-result
    status="403"
    title="403"
    sub-title="你没有此页面的访问权限。">
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
