<template>
  <a-layout>
    <Header></Header>
    <a-layout class="layout">
      <RouterViewBox url="/joy">
        <div class="container">
          <Breadcrumb />
          <a-card
            v-for="(main, index) of joyList"
            :key="index"
            :title="main.title"
            class="mb10"
            :hoverable="true">
            <a-button
              v-for="(item, index1) of main.list"
              :key="index1"
              type="link"
              size="small">
              <RouterLink :to="item.href">{{ item.title }}</RouterLink>
            </a-button>
          </a-card>
          <a-card
            title="QQ群"
            class="mb10"
            :hoverable="true">
            <a-button
              v-for="(item, index) of qqList"
              :key="index"
              type="link"
              size="small"
              :href="item.href">
              {{ item.title }}
            </a-button>
          </a-card>
        </div>
      </RouterViewBox>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Breadcrumb from "@/components/Breadcrumb.vue"
import RouterViewBox from "@/components/RouterViewBox.vue"

const joyList = [
  {
    title: "DEMO展示",
    list: [
      { title: "CSS皮卡丘", href: "/joy/demo/pikaqiu" },
      { title: "CSS灰太狼", href: "/joy/demo/huitailang" },
      { title: "CSS蓝胖子", href: "/joy/demo/lanpangzi" },
      { title: "加载动画", href: "/joy/demo/loading" }
    ]
  },
  {
    title: "游戏",
    list: [
      { title: "游戏历程时间轴", href: "/joy/games/gameHistory" },
      { title: "圈小猫", href: "/joy/games/catchTheCat" },
      { title: "扫雷", href: "/joy/games/minesweeper" }
    ]
  },
  {
    title: "工具",
    list: [
      { title: "音乐播放器", href: "/joy/tool/listen" },
      { title: "摸头生成器", href: "/joy/tool/petpet" },
      { title: "设备信息", href: "/joy/tool/deviceInfo" }
    ]
  }
]

const qqList = [
  { title: "👨‍👦‍👦前端程序员交流 (687041277)", href: "https://jq.qq.com/?_wv=1027&k=wSi5TUnM" },
  { title: "👨‍👦‍👦后端程序员交流 (527121526)", href: "https://jq.qq.com/?_wv=1027&k=PXkCkxA8" },
  { title: "👨‍👦‍👦前端开发工程师交流 (153700736)", href: "https://jq.qq.com/?_wv=1027&k=rSylFS04" },
  // { title: "👨‍👦‍👦MC精彩无限 (778923681)", href: "https://jq.qq.com/?_wv=1027&k=ikak0eLV" },
  { title: "👨‍👦‍👦cfm活动分享群 (238080446)", href: "https://jq.qq.com/?_wv=1027&k=K6vsosuT" }
]
</script>

<style lang="less" scoped>
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}
</style>
