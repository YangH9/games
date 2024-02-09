<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="大小写转换器" :hoverable="true">大小写转换器</a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://wannianli.tianqi.com/jisuanqi/daxie/
const obj = { 0: '零', 1: '壹', 2: '贰', 3: '叁', 4: '肆', 5: '伍', 6: '陆', 7: '柒', 8: '捌', 9: '玖', 十: '拾' }
const list = ['零', '壹', '贰', '叁', '肆', '伍', '陆', '柒', '捌', '玖', '拾']
const list1 = ['零', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十']
</script>

<style scoped lang="scss"></style>
