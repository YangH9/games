<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <div class="container">
        <Breadcrumb />
        <RouterViewBox url="/about">
          <a-card title="关注我" class="mb_2" :hoverable="true">
            <a-descriptions :column="{ xs: 1, sm: 1, md: 2 }">
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
          <a-card class="card_button_list" :hoverable="true">
            <a-button :href="`${$router.options.history.base}/about/minimart`" size="large"> 杂货铺 </a-button>
          </a-card>
          <a-card title="站点信息" class="mb_2" :hoverable="true">
            <a-descriptions :column="2">
              <a-descriptions-item label="网站运行时间" span="2">
                {{ dayjs.duration(nowTime.diff(startTime)).format('Y年MM月DD日HH时mm分ss秒') }}
              </a-descriptions-item>
              <a-descriptions-item label="建站时间">
                {{ startTime.format('YYYY年MM月DD日') }}
              </a-descriptions-item>
              <a-descriptions-item label="二次重构时间">
                {{ time1.format('YYYY年MM月DD日') }}
              </a-descriptions-item>
            </a-descriptions>
          </a-card>
        </RouterViewBox>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup lang="jsx">
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RouterViewBox from '@/components/RouterViewBox.vue'
import { inject, onBeforeUnmount, onMounted, ref } from 'vue'

const dayjs = inject('dayjs')

// QQ注册时间2011-01-30

const userList = [
  { label: 'QQ', title: '1770571618', href: 'tencent://message/?uin=1770571618' },
  { label: 'GitHub', title: 'https://github.com/YangH9', href: 'https://github.com/YangH9' },
  { label: 'GitHub站点', title: 'https://yangh9.github.io', href: 'https://yangh9.github.io' },
  { label: 'Gitee', title: 'https://gitee.com/YangH9', href: 'https://gitee.com/YangH9' },
  { label: 'Gitee站点', title: 'https://yangh9.gitee.io', href: 'https://yangh9.gitee.io' },
  { label: 'CodePen', title: 'https://codepen.io/yangh9', href: 'https://codepen.io/yangh9' },
  { label: '知乎', title: 'https://www.zhihu.com/people/yangh9', href: 'https://www.zhihu.com/people/yangh9' },
  { label: '抖音', title: 'https://v.douyin.com/iLbA41x1', href: 'https://v.douyin.com/iLbA41x1' },
  {
    label: '快手',
    title: 'https://v.kuaishou.com/f/Y7oSeQ6Ze',
    href: 'https://v.kuaishou.com/f/Y7oSeQ6Ze'
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

// 建站时间
const startTime = ref(dayjs('2020/03/22'))
// 重构时间
const time1 = dayjs('2022/10/19')
const nowTime = ref(dayjs())

const list = [
  { title: '自制低代码表单设计器（开发中）', href: '/form-preview/' },
  { title: '自制日历订阅(节假日、24节气)', href: '/ChinaCalendar/' },
  { title: '不会百度么', href: 'https://yangh9.github.io/baidu/' },
  { title: '国庆头像制作', href: 'https://yangh9.github.io/avatar-editor/' },
  { title: '摸摸头', href: 'https://yangh9.github.io/petpet/' },
  { title: '1024节', href: 'https://yangh9.github.io/1024/' },
  { title: '代码行数计算', href: 'https://github.com/YangH9/linecounter' },
  { title: '行政区划', href: 'https://github.com/YangH9/China_area' }
]

let timer = ''

const running = () => {
  nowTime.value = dayjs()
  timer = requestAnimationFrame(running)
}

onMounted(() => {
  timer = requestAnimationFrame(running)
})

onBeforeUnmount(() => {
  cancelAnimationFrame(timer)
})
</script>

<style scoped lang="scss"></style>
