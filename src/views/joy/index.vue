<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <RouterViewBox url="/joy">
        <div class="container">
          <Breadcrumb />
          <a-card
            v-for="(main, index) in joyList"
            :key="index"
            :title="main.title"
            class="card_button_list"
            :hoverable="true"
          >
            <a-button
              v-for="(item, index1) in main.list"
              :key="index1"
              :href="`${$router.options.history.base}${item.href}`"
              :title="item.title"
              size="large"
            >
              {{ item.title }}
            </a-button>
          </a-card>
          <a-card title="我的世界" class="card_button_list" :hoverable="true">
            <template #extra>
              <a-button
                :href="`${$router.options.history.base}/links/MinecraftBookmark`"
                title="查看更多"
                type="link"
                size="small"
              >
                查看更多
              </a-button>
            </template>
            <a-button
              v-for="(item, index) in mcList"
              :key="index"
              :href="item.href"
              :title="item.title"
              size="large"
              target="_blank"
            >
              <template #icon>
                <img
                  v-lazy="filtterUrl(item)"
                  class="icon"
                  referrer="no-referrer"
                  @error="(e) => e.target.classList.add('hidden')"
                />
              </template>
              {{ item.title }}
            </a-button>
          </a-card>
          <a-card title="原神" class="card_button_list" :hoverable="true">
            <a-button
              v-for="(item, index) in ysList"
              :key="index"
              :href="item.href"
              :title="item.title"
              size="large"
              target="_blank"
            >
              <template #icon>
                <img
                  v-lazy="filtterUrl(item)"
                  class="icon"
                  referrer="no-referrer"
                  @error="(e) => e.target.classList.add('hidden')"
                />
              </template>
              {{ item.title }}
            </a-button>
          </a-card>
          <a-card title="QQ群" class="card_button_list" :hoverable="true">
            <a-button
              v-for="(item, index) in qqList"
              :key="index"
              :href="item.href"
              :title="item.title"
              size="large"
              target="_blank"
            >
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
      { title: '部落冲突', href: '/joy/games/clashOfClans' },
      { title: '圈小猫', href: '/joy/games/catchTheCat' },
      { title: '扫雷', href: '/joy/games/minesweeper' },
      { title: '飞车手游壁纸', href: '/joy/games/speedm' },
      { title: '飞车手游图鉴', href: '/joy/games/speedm/atlas' },
      { title: '穿越火线手游壁纸', href: '/joy/games/cfm' },
      { title: '穿越火线手游图鉴', href: '/joy/games/cfm/atlas' },
      { title: '飞车端游壁纸', href: '/joy/games/speed' },
      { title: '王者荣耀壁纸', href: '/joy/games/pvp' },
      { title: '王者荣耀图鉴', href: '/joy/games/pvp/atlas' }
    ]
  },
  {
    title: '工具',
    list: [
      { title: '设备信息', href: '/joy/tool/deviceInfo' },
      { title: '日历', href: '/joy/tool/calendar' },
      { title: '链接二维码生成器', href: '/joy/tool/qrcode' },
      { title: 'appStore应用搜索', href: '/joy/tool/appStore' },
      { title: '运营商积分兑换话费', href: '/joy/tool/operatorPointsRedemption' },
      { title: '音乐播放器', href: '/joy/tool/listen' },
      { title: '摸头生成器', href: '/joy/tool/petpet' },
      { title: '随机数生成器', href: '/joy/tool/random' },
      { title: '人生进度表', href: '/joy/tool/lifeTime' },
      { title: '灰色头像生成器', href: '/joy/tool/grayhead' },
      { title: '国庆红旗头像生成器', href: '/joy/tool/avatarEditor' },
      { title: 'CSS新拟态生成器', href: '/joy/tool/skeuomorphism' },
      { title: 'CSS玻璃拟物化生成器', href: '/joy/tool/glassmorphism' },
      { title: 'ChartGPT', href: '/links/chartGPT' }
    ]
  },
  {
    title: '节日欢庆',
    list: [{ title: '新年烟花', href: '/joy/festival/newyear' }]
  }
]

const mcList = [
  {
    title: 'Minecraft',
    href: 'https://www.minecraft.net/zh-hans',
    favicon: 'etc.clientlibs/minecraft/clientlibs/main/resources/favicon.ico'
  },
  {
    title: 'Minecraft Wiki',
    href: 'https://minecraft.fandom.com/zh/wiki/Minecraft_Wiki',
    favicon: 'https://static.wikia.nocookie.net/minecraft_zh_gamepedia/images/4/4a/Site-favicon.ico/revision/latest'
  }
]

const ysList = [
  { title: '米哈游', href: 'https://www.mihoyo.com/', favicon: '' },
  { title: '原神', href: 'https://ys.mihoyo.com/main/', favicon: '' },
  { title: '米游社', href: 'https://www.miyoushe.com/', favicon: '' },
  { title: '原神·米游社', href: 'https://www.miyoushe.com/ys/', favicon: '' },
  { title: '原神·观测枢', href: 'https://bbs.mihoyo.com/ys/strategy/', favicon: '' },
  { title: '原神·地图', href: 'https://webstatic.mihoyo.com/ys/app/interactive-map', favicon: '' }
]

const qqList = [{ title: '👨‍👦‍👦MC精彩无限 (778923681)', href: 'https://jq.qq.com/?_wv=1027&k=ikak0eLV' }]

const filtterUrl = (item) => {
  const url =
    item.favicon.indexOf('//') >= 0
      ? item.favicon
      : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
  return url
}
</script>

<style lang="scss" scoped></style>
