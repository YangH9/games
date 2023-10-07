<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="部落冲突" class="mb_2" :hoverable="true">
      <a-descriptions :column="1">
        <a-descriptions-item>自2022/12/9起，所有国内渠道商都转移到了腾讯，你必须绑定QQ或微信才可以继续登录。</a-descriptions-item>
        <a-descriptions-item>
          如果你还没有绑定，请在更新后前往各大应用商店，搜索“部落冲突账号绑定工具”，使用您注册游戏时的账号登录，找到绑定入口进行绑定。
        </a-descriptions-item>
        <a-descriptions-item>当乐、靠谱助手、安智、拇指玩、熊猫玩、搜狗，已倒闭需联系客服处理。</a-descriptions-item>
        <a-descriptions-item>下面有部分平台账号绑定工具。</a-descriptions-item>
      </a-descriptions>
    </a-card>
    <a-card title="部落冲突下载" class="mb_2" :hoverable="true">
      <a-button v-for="(item, index1) of downloadList" :key="index1" :href="item.href" :title="item.title" size="large" type="link" target="_blank">
        <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ item.title }}
      </a-button>
    </a-card>
    <a-card title="部落冲突各平台账号绑定工具" class="mb_2" :hoverable="true">
      <a-button v-for="(item, index1) of toolList" :key="index1" :href="item.href" :title="item.title" size="large" type="link" target="_blank">
        <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ item.title }}
      </a-button>
      <a-button v-for="i of 20" :key="i" class="seat"></a-button>
    </a-card>
    <a-card title="阵容攻略" class="mb_2" :hoverable="true">
      <a-button v-for="(item, index1) of list" :key="index1" :href="item.href" :title="item.title" size="large" type="link" target="_blank">
        <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ item.title }}
      </a-button>
      <a-button v-for="i of 20" :key="i" class="seat"></a-button>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
//
const downloadList = [
  { title: '国服（腾讯版官网）', href: 'https://coc.qq.com/', favicon: '' },
  { title: '国服（应用宝下载）', href: 'https://sj.qq.com/appdetail/com.tencent.tmgp.supercell.clashofclans', favicon: '' },
  { title: '国际服（谷歌版）', href: 'https://play.google.com/store/apps/details?id=com.supercell.clashofclans', favicon: '' },
  { title: '私服（Atrasis）', href: 'https://atrasis.cc/', favicon: '' },
  { title: "私服（Null's Clash）", href: 'https://nulls.gg/servers/nulls-clash/', favicon: '/assets/img/favicon-32.png' }
]

const toolList = [
  { title: '昆仑版（线路一）', href: 'https://coc.gameark.cn/', favicon: '' },
  { title: '昆仑版（线路二）', href: 'http://update.coc.gameark.cn/?channel=kunlun', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: '豌豆荚/九游（线路一）', href: 'http://www.9game.cn/coc/', favicon: '' },
  { title: '豌豆荚/九游（线路二）', href: 'https://www.wandoujia.com/apps/6632360', favicon: '' },
  { title: '豌豆荚/九游（线路三）', href: 'http://update.coc.gameark.cn/?channel=wandoujia', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  {
    title: '华为版（需先下载三依赖）',
    href: 'https://appgallery.huawei.com/#/app/C10329573',
    favicon: '//appgallery.huawei.com/static/agweb/img/ic_navigation_appmarket.png'
  },
  {
    title: '华为版（应用市场）',
    href: 'https://appgallery.huawei.com/#/app/C27162',
    favicon: '//appgallery.huawei.com/static/agweb/img/ic_navigation_appmarket.png'
  },
  {
    title: '华为版（移动服务）',
    href: 'https://appgallery.huawei.com/#/app/C10132067',
    favicon: '//appgallery.huawei.com/static/agweb/img/ic_navigation_appmarket.png'
  },
  {
    title: '华为版（游戏中心）',
    href: 'https://appgallery.huawei.com/#/app/C10059090',
    favicon: '//appgallery.huawei.com/static/agweb/img/ic_navigation_appmarket.png'
  },
  { title: '百度版（线路一）', href: 'http://update.coc.gameark.cn/?channel=baidu', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: '百度版（线路二）', href: 'https://mobile.baidu.com/item?pid=1540839', favicon: '//ascdn.baidu.com/appsite/images/logo57x57.png' },
  { title: '百度版（线路三）', href: 'https://shouji.baidu.com/detail/1540839', favicon: '//ascdn.baidu.com/appsite/images/logo57x57.png' },
  { title: '果盘版（线路一）', href: 'https://game.guopan.cn/m/gamedetail/43182', favicon: '' },
  { title: '果盘版（线路二）', href: 'http://www.guopan.cn/blct/', favicon: '' },
  { title: '果盘版（线路三）', href: 'https://game.guopan.cn/detail/43182', favicon: '' },
  { title: 'VIVO版', href: 'http://update.coc.gameark.cn/?channel=vivo', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: 'OPPO版（线路一）', href: 'http://update.coc.gameark.cn/?channel=oppo', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: 'OPPO版（线路二）', href: 'https://store.oppomobile.com/', favicon: '' },
  { title: '4399版（线路一）', href: 'http://news.4399.com/buluozz/', favicon: '' },
  { title: '4399版（线路二）', href: 'https://a.4399.cn/game-id-251473.html', favicon: '' },
  { title: '2345版（线路一）', href: 'https://zhushou.2345.com/game/174645.html', favicon: '//zhushou.2345cdn.net/zhushouimg/images/web/v2/fav.ico' },
  {
    title: '2345版（线路二）',
    href: 'https://zhushou.2345.com/m/game/174645.html',
    favicon: '//zhushou.2345cdn.net/zhushouimg/images/web/v2/fav.ico'
  },
  { title: '360版（线路一）', href: 'http://u.360.cn/coc/', favicon: '' },
  { title: '360版（线路二）', href: 'https://m.app.so.com/detail/index?from=qing&id=3100671', favicon: '' },
  { title: '360版（线路三）', href: 'http://update.coc.gameark.cn/?channel=360', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: '小米版（线路一）', href: 'https://game.xiaomi.com/game/62231040', favicon: '' },
  { title: '小米版（线路二）', href: 'https://app.mi.com/details?id=com.supercell.clashofclans.mi', favicon: '//www.mi.com/favicon.ico' },
  { title: '一号玩家版（原益玩版）', href: 'https://www.1gamer.cn/game-id-11162.html', favicon: '' },
  { title: '雷电版', href: 'https://www.ldmnq.com/app/7361.html', favicon: '' },
  { title: 'B站版（线路一）', href: 'https://www.biligame.com/detail/?id=103536', favicon: '//www.bilibili.com/favicon.ico' },
  { title: 'B站版（线路二）', href: 'http://update.coc.gameark.cn/?channel=bili', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: '逍遥版', href: 'https://www.xyaz.cn/gc/apps-586-1.html', favicon: '//www.xyaz.cn/layout-v2/shortlogo.png' },
  { title: '夜神版', href: 'https://app.yeshen.com/games/single/9360', favicon: '' },
  {
    title: '联想版（线路一）',
    href: 'https://www.lenovomm.com/appdetail/com.supercell.clashofclans.lenovo/1138',
    favicon: '_next/static/images/favicon-f87a489f2d293ef5241ddf34007b6823.ico'
  },
  { title: '联想版（线路二）', href: 'http://update.coc.gameark.cn/?channel=lenovo', favicon: '//f-cn-1.kunlun.com/coc/images/favicon.png' },
  { title: '魅族版（线路一）', href: 'https://app.meizu.com/games/public/detail?package_name=com.supercell.clashofclans.mz', favicon: '' },
  { title: '魅族版（线路二）', href: 'https://game.flyme.cn/game/detail/3239713?contentId=3239713', favicon: '' }
]

const list = [
  { title: '黑羽COC', href: 'https://coc.heiyu100.cn/', favicon: 'img/favicon.ico' },
  { title: 'COC鱼情统计', href: 'https://clashofclansforecaster.com/?lang=chinese-simp', favicon: '' },
  { title: 'COC数据统计', href: 'https://clashofstats.com/', favicon: 'favicon-32x32.png' },
  { title: 'COC指导', href: 'https://cocservice.top/', favicon: '' },
  { title: '晴天COC（知乎）', href: 'https://www.zhihu.com/people/xin-dong-58-2', favicon: '' },
  { title: '晴天COC（BiliBili）', href: 'https://space.bilibili.com/22602921/', favicon: '' }
]

const filtterUrl = (item) => {
  const url =
    item.favicon.indexOf('//') >= 0 ? item.favicon : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
  return url
}
</script>

<style lang="scss" scoped>
.ant-card :deep(.ant-card-body) {
  padding-right: 14px;
  padding-bottom: 14px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  content-visibility: auto;

  .ant-btn {
    margin-right: 10px;
    margin-bottom: 10px;
  }

  &::before {
    display: none;
  }

  .seat {
    width: 0;
    height: 0;
    zoom: 0;
    margin: 0;
    padding: 0;
  }
}

.icon {
  width: 16px;
  height: 16px;
  margin-right: 4px;
  vertical-align: baseline;
}
</style>
