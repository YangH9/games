<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="进度条" class="mb_2" :hoverable="true">
      <div class="box">
        <progress></progress>
        <progress :value="progressValue" :max="steps"></progress>
        <Progress1 type="line" :width="200" :value="progressValue"></Progress1>
        <Progress1 type="circle" :value="progressValue" hasText></Progress1>
        <Progress2 :value="progressValue"></Progress2>
        <Progress3 :value="progressValue"></Progress3>
      </div>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue'
import Progress1 from './common/progress1.vue'
import Progress2 from './common/progress2.vue'
import Progress3 from './common/progress3.vue'

const progressValue = ref(0)
const step = Date.now()
const steps = 100

let timer = ''

const running = () => {
  // progressValue.value = (progressValue.value + step) % steps
  progressValue.value = ~~((Date.now() / steps - step / steps) % steps)
  timer = requestAnimationFrame(running)
}

onMounted(() => {
  timer = requestAnimationFrame(running)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(timer)
})
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  & > * {
    margin: 10px;
  }
}
</style>
