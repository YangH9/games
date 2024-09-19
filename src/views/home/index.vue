<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <div class="container">
        <Breadcrumb />
        <a-card title="首页" class="mb_2" :hoverable="true">
          <div>MODE：{{ mode }}</div>
          <div>TITLE：{{ title }}</div>
          <div>VERSION：{{ version }}</div>
        </a-card>
        <a-card class="mb_2" :hoverable="true">
          <a-statistic-countdown
            :title="`${gaoKaoTime.year()}高考倒计时`"
            :value="gaoKaoTime"
            format="DD日HH时mm分ss秒"
          />
        </a-card>
        <a-card title="仓库" class="mb_2" :hoverable="true">
          <a-list item-layout="horizontal" size="small" bordered :data-source="storeList">
            <template #renderItem="{ item }">
              <a-list-item>
                <a :href="`https://github.com/YangH9/${item}`" target="_blank">
                  <img
                    :src="`https://img.shields.io/badge/${item.replaceAll('-', '%E2%80%93')}-fff?logo=Github&logoColor=000`"
                    alt="store"
                  />
                </a>
                <a :href="`https://github.com/YangH9/${item}/stargazers`" target="_blank">
                  <img :src="`https://img.shields.io/github/stars/YangH9/${item}`" alt="stargazers" />
                </a>
                <a :href="`https://YangH9.github.io/${item}`" target="_blank">
                  <img
                    src="https://img.shields.io/badge/github%20pages-white?logo=github&amp;logoColor=black"
                    alt="GithubPages"
                  />
                </a>
              </a-list-item>
            </template>
          </a-list>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup lang="jsx">
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { inject, ref } from 'vue'

const GetEnv = inject('GetEnv')
const dayjs = inject('dayjs')

const mode = GetEnv.MODE
const title = GetEnv.VITE_APP_TITLE
const version = process.env.npm_package_version

const gaoKaoTime = ref(null)

const getNextGaoKaoTime = () => {
  const nowTime = dayjs()
  const thisYearGaoKao = dayjs([nowTime.year(), 5, 7, 0, 0, 0, 1])
  const nextGaoKao =
    nowTime - thisYearGaoKao < 0 ? thisYearGaoKao : dayjs([thisYearGaoKao.year() + 1, 5, 7, 0, 0, 0, 1])
  gaoKaoTime.value = nextGaoKao
}
getNextGaoKaoTime()

const storeList = [
  'YangH9',
  'YangH9.github.io',
  'y',
  'ChinaCalendar',
  'China_area',
  'form-preview',
  'linecounter',
  'avatar-editor',
  'baidu',
  'BitwardenPackage'
]
</script>

<style scoped lang="scss"></style>
