<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="layout">
      <RouterViewBox url="/joy">
        <div class="container">
          <Breadcrumb />
          <a-card v-for="(main, index) of joyList" :key="index" :title="main.title" class="mb10" :hoverable="true">
            <a-button v-for="(item, index1) of main.list" :key="index1" type="link" size="small" :title="item.title">
              <RouterLink :to="item.href">{{ item.title }}</RouterLink>
            </a-button>
          </a-card>
          <a-card title="我的世界" class="mb10" :hoverable="true">
            <template #extra>
              <RouterLink to="/links/MinecraftBookmark">查看更多</RouterLink>
            </template>
            <a-button v-for="(item, index) of mcList" :key="index" size="large" :href="item.href" class="mr10" :title="item.title">
              <template #icon>
                <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
              </template>
              {{ item.title }}
            </a-button>
          </a-card>
          <a-card title="QQ群" class="mb10" :hoverable="true">
            <a-button v-for="(item, index) of qqList" :key="index" type="link" size="small" :href="item.href" :title="item.title">
              {{ item.title }}
            </a-button>
          </a-card>
        </div>
      </RouterViewBox>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RouterViewBox from '@/components/RouterViewBox.vue'

const joyList = [
  {
    title: '游戏',
    list: [
      { title: '游戏历程时间轴', href: '/joy/games/gameHistory' },
      { title: '部落冲突', href: '/joy/games/clashofclans' },
      { title: '圈小猫', href: '/joy/games/catchTheCat' },
      { title: '扫雷', href: '/joy/games/minesweeper' },
      { title: '飞车手游壁纸', href: '/joy/games/speedm' },
      { title: '飞车手游图鉴', href: '/joy/games/speedm/atlas' },
      { title: '穿越火线手游壁纸', href: '/joy/games/cfm' },
      { title: '穿越火线手游图鉴', href: '/joy/games/cfm/atlas' },
      { title: '飞车端游壁纸', href: '/joy/games/speed' }
    ]
  },
  {
    title: '工具',
    list: [
      { title: '设备信息', href: '/joy/tool/deviceInfo' },
      { title: '音乐播放器', href: '/joy/tool/listen' },
      { title: '摸头生成器', href: '/joy/tool/petpet' },
      { title: '灰色头像生成器', href: '/joy/tool/grayhead' },
      { title: 'CSS拟态生成器', href: '/joy/tool/mimicry' }
    ]
  }
]

const mcList = [
  { title: 'Minecraft', href: 'https://www.minecraft.net/zh-hans', favicon: 'etc.clientlibs/minecraft/clientlibs/main/resources/favicon.ico' },
  {
    title: 'Minecraft Wiki',
    href: 'https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki',
    favicon: 'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4a/Site-favicon.ico/revision/latest'
  }
]

const qqList = [
  { title: '👨‍👦‍👦MC精彩无限 (778923681)', href: 'https://jq.qq.com/?_wv=1027&k=ikak0eLV' },
  { title: '👨‍👦‍👦cfm活动分享群 (238080446)', href: 'https://jq.qq.com/?_wv=1027&k=K6vsosuT' }
]

const filtterUrl = (item) => {
  const url =
    item.favicon.indexOf('//') >= 0 ? item.favicon : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
  return url
}
</script>

<style lang="less" scoped>
.layout {
  overflow: auto;
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: baseline;
}
</style>
