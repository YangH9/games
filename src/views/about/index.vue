<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <div class="container">
        <Breadcrumb />
        <a-card title="关注我" class="mb_2" :hoverable="true">
          <a-descriptions :column="1">
            <a-descriptions-item v-for="(item, index) in userList" :key="index" :label="item.label">
              <a-button :href="item.href" size="small" type="link" target="_blank">
                {{ item.title }}
              </a-button>
            </a-descriptions-item>
          </a-descriptions>
        </a-card>
        <a-card class="card_button_list" :hoverable="true">
          <a-button
            v-for="(item, index) in list"
            :key="index"
            :href="item.href"
            :title="item.title"
            size="large"
            target="_blank"
          >
            {{ item.title }}
          </a-button>
        </a-card>
        <a-card title="站点信息" class="mb_2" :hoverable="true">
          <a-descriptions :column="2">
            <a-descriptions-item label="网站运行时间" span="2">
              {{ new Date(nowTime - startTime).toFormat('Y年M月D日h时m分s秒') }}
            </a-descriptions-item>
            <a-descriptions-item label="建站时间">{{
              new Date(startTime).toFormat('YYYY年MM月DD日')
            }}</a-descriptions-item>
            <a-descriptions-item label="二次重构时间">{{
              new Date(1666137600000).toFormat('YYYY年MM月DD日')
            }}</a-descriptions-item>
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
  { label: 'GitHub', title: 'https://github.com/YangH9', href: 'https://github.com/YangH9' },
  { label: 'GitHub站点', title: 'https://yangh9.github.io', href: 'https://yangh9.github.io' },
  { label: 'Gitee', title: 'https://gitee.com/YangH9', href: 'https://gitee.com/YangH9' },
  { label: 'Gitee站点', title: 'https://yangh9.gitee.io', href: 'https://yangh9.gitee.io' },
  { label: '抖音', title: 'https://v.douyin.com/3x5ty2', href: 'https://v.douyin.com/3x5ty2' },
  {
    label: '快手',
    title: 'https://www.kuaishou.com/profile/3x9f22yvyy25eee',
    href: 'https://www.kuaishou.com/profile/3x9f22yvyy25eee'
  },
  {
    label: '哔哩哔哩',
    title: 'https://space.bilibili.com/492362541',
    href: 'https://space.bilibili.com/492362541'
  },
  {
    label: '哔哩哔哩Live',
    title: 'https://live.bilibili.com/22069552',
    href: 'https://live.bilibili.com/22069552'
  }
]

const startTime = ref(1584864000000)
const nowTime = ref(Date.now())

const list = [
  { title: '自制日历订阅', href: 'https://yangh9.github.io/ChinaHolidayCalender/' },
  { title: '不会百度么', href: 'https://yangh9.github.io/baidu/' },
  { title: '国庆头像制作', href: 'https://yangh9.github.io/avatar-editor/' },
  { title: '摸摸头', href: 'https://yangh9.github.io/petpet/' },
  { title: '1024节', href: 'https://yangh9.github.io/1024/' },
  { title: '代码行数计算', href: 'https://github.com/YangH9/linecounter' },
  { title: '行政区划', href: 'https://github.com/YangH9/China_area' }
]

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

<style lang="scss" scoped></style>
