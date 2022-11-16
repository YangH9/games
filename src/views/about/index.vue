<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        <a-card
          title="关于"
          class="mb10"
          :hoverable="true">
          <a-descriptions :column="1">
            <template
              v-for="(item, index) of userList"
              :key="index">
              <a-descriptions-item :label="item.title">
                <a-button
                  type="link"
                  size="small"
                  :href="item.href">
                  {{ item.href }}
                </a-button>
              </a-descriptions-item>
            </template>
          </a-descriptions>
        </a-card>
        <a-card
          title="站点信息"
          class="mb10"
          :hoverable="true">
          <a-descriptions :column="2">
            <a-descriptions-item
              label="网站运行时间"
              span="2">
              {{ runTime() }}
            </a-descriptions-item>
            <a-descriptions-item label="建站时间">{{ formatDate(startTime, 'yyyy年MM月dd日') }}</a-descriptions-item>
            <a-descriptions-item label="迁移时间">{{ formatDate(nowTime, 'yyyy年MM月dd日') }}</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"
import { formatDate } from "@/utils"
import { onBeforeUnmount, onMounted, reactive, ref } from "vue"

const userList = reactive([
  { title: "快手", href: "https://f.kuaishou.com/3QQz0B" },
  { title: "抖音", href: "https://v.douyin.com/3x5ty2" },
  { title: "GitHub", href: "https://github.com/YangH9" },
  { title: "哔哩哔哩", href: "https://space.bilibili.com/492362541" },
  { title: "哔哩哔哩Live", href: "https://live.bilibili.com/22069552" }
])

// const toolList = reactive([
//   { title: "万年历", href: "https://f.kuaishou.com/3QQz0B" }
// ])

// const demoList = reactive([
//   { title: "CSS皮卡丘", href: "https://f.kuaishou.com/3QQz0B" }
// ])

const startTime = ref(1584864000000)
const nowTime = ref(new Date())
const runTime = () => {
  const time = +nowTime.value - startTime.value
  const y = ~~(time / (1000 * 60 * 60 * 24 * 365))
  const M = ~~(time / (1000 * 60 * 60 * 24 * 30) % 12)
  const d = ~~(time / (1000 * 60 * 60 * 24) % 30)
  const h = ~~(time / (1000 * 60 * 60) % 24)
  const m = ~~(time / (1000 * 60) % 60)
  const s = ~~(time / 1000 % 60)
  const a = i => i < 10 ? `0${i}` : i
  return `${y}年${a(M)}月${a(d)}日${a(h)}时${a(m)}分${a(s)}秒`
}

let timer = null
onMounted(() => {
  timer = setInterval(() => {
    nowTime.value = new Date()
  }, 1000)
})

onBeforeUnmount(() => {
  clearInterval(timer)
  timer = null
})

</script>

<style lang="less" scoped>

</style>
