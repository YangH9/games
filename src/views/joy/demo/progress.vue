<template>
  <a-card
    title="进度条"
    class="mb10"
    :hoverable="true">
    <div class="box">
      <progress></progress>
      <progress
        :value="progressValue"
        :max="steps"></progress>
      <Progress
        type="line"
        :value="progressValue"></Progress>
      <Progress
        type="circle"
        :value="progressValue"
        :width="100"
        hasText></Progress>
    </div>
  </a-card>
</template>

<script setup>
import { ref, onMounted } from "vue"
import Progress from "./common/progress.vue"

const progressValue = ref(0)
const step = 1
const steps = 100

onMounted(() => {
  setInterval(() => {
    progressValue.value = (progressValue.value + step) % steps
  }, 100)
})
</script>

<style lang="less" scoped>
.box {
  display: flex;
  align-items: center;
  & > * {
    margin: 10px;
  }
}
</style>
