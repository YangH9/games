<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <div class="container">
        <Breadcrumb />
        <a-card title="首页" class="mb_2" :hoverable="true">
          <div>MODE：{{ mode }}</div>
          <div>TITLE：{{ title }}</div>
        </a-card>
        <a-card class="mb_2" :hoverable="true">
          <a-statistic-countdown
            :title="`${gaoKaoTime.year()}高考倒计时`"
            :value="gaoKaoTime"
            format="DD日HH时mm分ss秒"
          />
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { inject, ref } from 'vue'
import arraySupport from 'dayjs/plugin/arraySupport'

const GetEnv = inject('GetEnv')
const dayjs = inject('dayjs')
dayjs.extend(arraySupport)

const mode = GetEnv.MODE
const title = GetEnv.VITE_TITLE

const gaoKaoTime = ref(null)

const getNextGaoKaoTime = () => {
  const nowTime = dayjs()
  const thisYearGaoKao = dayjs([nowTime.year(), 5, 7, 0, 0, 0, 1])
  const nextGaoKao =
    nowTime - thisYearGaoKao < 0 ? thisYearGaoKao : dayjs([thisYearGaoKao.year() + 1, 5, 7, 0, 0, 0, 1])
  gaoKaoTime.value = nextGaoKao
}
getNextGaoKaoTime()
</script>

<style scoped lang="scss"></style>
