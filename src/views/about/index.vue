<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        <a-space
          size="middle"
          direction="vertical">
          <a-card
            title="关于"
            :hoverable="true">
            关于
          </a-card>
          <a-card
            title="站点信息"
            :hoverable="true">
            <a-descriptions>
              <a-descriptions-item label="网站运行时间">{{ runTime }}</a-descriptions-item>
            </a-descriptions>
            <a-descriptions :column="2">
              <a-descriptions-item label="建站时间">{{ formatDate(startTime, 'yyyy年MM月dd日') }}</a-descriptions-item>
              <a-descriptions-item label="迁移时间">{{ formatDate(nowTime, 'yyyy年MM月dd日') }}</a-descriptions-item>
            </a-descriptions>
          </a-card>
        </a-space>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"
import { formatDate } from "@/utils"
import { computed } from "vue"

const startTime = 1584864000000
const nowTime = new Date()
const runTime = computed(() => {
  const time = +nowTime - startTime
  const y = ~~(time / (1000 * 60 * 60 * 24 * 365))
  const M = ~~(time / (1000 * 60 * 60 * 24 * 30) % 12)
  const d = ~~(time / (1000 * 60 * 60 * 24) % 30)
  const h = ~~(time / (1000 * 60 * 60) % 24)
  const m = ~~(time / (1000 * 60) % 60)
  const s = ~~(time / 1000 % 60)
  return `${y}年${M}月${d}日${h}时${m}分${s}秒`
})
</script>

<style scoped>

</style>
