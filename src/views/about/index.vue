<template>
  <a-layout>
    <Header></Header>
    <a-layout class="layout">
      <div class="container">
        <Breadcrumb />
        <a-card
          title="关注我"
          class="mb10"
          :hoverable="true">
          <a-descriptions :column="1">
            <a-descriptions-item
              v-for="(item, index) of userList"
              :key="index"
              :label="item.label">
              <a-button
                type="link"
                size="small"
                :href="item.href">
                {{ item.title }}
              </a-button>
            </a-descriptions-item>
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
import { ref, reactive, onBeforeUnmount, onMounted, getCurrentInstance } from "vue"

const { formatDate } = getCurrentInstance().proxy

const userList = reactive([
  { label: "QQ", title: "1770571618", href: "tencent://message/?uin=1770571618" },
  { label: "快手", title: "https://f.kuaishou.com/3QQz0B", href: "https://f.kuaishou.com/3QQz0B" },
  { label: "抖音", title: "https://v.douyin.com/3x5ty2", href: "https://v.douyin.com/3x5ty2" },
  { label: "GitHub", title: "https://github.com/YangH9", href: "https://github.com/YangH9" },
  { label: "哔哩哔哩", title: "https://space.bilibili.com/492362541", href: "https://space.bilibili.com/492362541" },
  { label: "哔哩哔哩Live", title: "https://live.bilibili.com/22069552", href: "https://live.bilibili.com/22069552" }
])

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
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
