<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="layout">
      <div class="container">
        <Breadcrumb />
        <a-card title="关注我" class="mb10" :hoverable="true">
          <a-descriptions :column="1">
            <a-descriptions-item v-for="(item, index) of userList" :key="index" :label="item.label">
              <a-button :href="item.href" size="small" type="link" target="_blank">
                {{ item.title }}
              </a-button>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
        <a-card class="mb10" :hoverable="true">
          <a-descriptions :column="1">
            <a-descriptions-item>
              <a-button href="https://yangh9.github.io/ChinaHolidayCalender/" target="_blank">自制日历订阅</a-button>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
        <a-card title="站点信息" class="mb10" :hoverable="true">
          <a-descriptions :column="2">
            <a-descriptions-item label="网站运行时间" span="2">
              {{ new Date(nowTime - startTime).toFormat('Y年M月D日h时m分s秒') }}
            </a-descriptions-item>
            <a-descriptions-item label="建站时间">{{ new Date(startTime).toFormat('YYYY年MM月DD日') }}</a-descriptions-item>
            <a-descriptions-item label="二次重构时间">{{ new Date(1666137600000).toFormat('YYYY年MM月DD日') }}</a-descriptions-item>
          </a-descriptions>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { onBeforeUnmount, onMounted, ref } from 'vue'

const userList = [
  { label: 'QQ', title: '1770571618', href: 'tencent://message/?uin=1770571618' },
  { label: '快手', title: 'https://f.kuaishou.com/3QQz0B', href: 'https://f.kuaishou.com/3QQz0B' },
  { label: '抖音', title: 'https://v.douyin.com/3x5ty2', href: 'https://v.douyin.com/3x5ty2' },
  { label: 'GitHub', title: 'https://github.com/YangH9', href: 'https://github.com/YangH9' },
  { label: 'GitHub站点', title: 'https://yangh9.github.io', href: 'https://yangh9.github.io' },
  { label: 'Gitee', title: 'https://gitee.com/YangH9', href: 'https://gitee.com/YangH9' },
  { label: 'Gitee站点', title: 'https://yangh9.gitee.io', href: 'https://yangh9.gitee.io' },
  { label: '哔哩哔哩', title: 'https://space.bilibili.com/492362541', href: 'https://space.bilibili.com/492362541' },
  { label: '哔哩哔哩Live', title: 'https://live.bilibili.com/22069552', href: 'https://live.bilibili.com/22069552' }
]

const startTime = ref(1584864000000)
const nowTime = ref(Date.now())

let timer = ''

const running = () => {
  nowTime.value = Date.now()
  timer = requestAnimationFrame(running)
}

onMounted(() => {
  timer = requestAnimationFrame(running)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(timer)
})
</script>

<style lang="less" scoped>
.layout {
  overflow: auto;
}
</style>
