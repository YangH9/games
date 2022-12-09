<template>
  <div class="container">
    <Breadcrumb />
    <a-card
      title="部落冲突"
      class="mb10"
      :hoverable="true">
      <a-descriptions :column="1">
        <a-descriptions-item>
          自2022/12/9起，所有国内渠道商都转移到了腾讯，你必须绑定QQ或微信才可以继续登录。
        </a-descriptions-item>
        <a-descriptions-item>
          如果你还没有绑定，请在更新后前往各大应用商店，搜索“部落冲突账号绑定工具”，使用您注册游戏时的账号登录，找到绑定入口进行绑定。
        </a-descriptions-item>
        <a-descriptions-item>
          下面有部分平台账号绑定工具。
        </a-descriptions-item>
      </a-descriptions>
    </a-card>
    <a-card
      title="部落冲突下载"
      class="mb10"
      :hoverable="true">
      <a-button
        v-for="(item, index1) of downloadList"
        :key="index1"
        size="large"
        :href="item.href">
        <template #icon>
          <img
            :src="
              item.favicon.indexOf('//') >= 0
                ? item.favicon
                : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
            "
            class="icon"
            referrer="no-referrer"
            @load="(e) => (e.target.style.display = 'inline-block')"
          />
        </template>
        {{ item.title }}
      </a-button>
    </a-card>
    <a-card
      title="部落冲突各平台账号绑定工具"
      class="mb10"
      :hoverable="true">
      <a-button
        v-for="(item, index1) of toolList"
        :key="index1"
        size="large"
        :href="item.href">
        <template #icon>
          <img
            :src="
              item.favicon.indexOf('//') >= 0
                ? item.favicon
                : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
            "
            class="icon"
            referrer="no-referrer"
            @load="(e) => (e.target.style.display = 'inline-block')"
          />
        </template>
        {{ item.title }}
      </a-button>
      <a-button
        v-for="i of 20"
        :key="i"
        class="seat">
      </a-button>
    </a-card>
    <a-card
      title="阵容攻略"
      class="mb10"
      :hoverable="true">
      <a-button
        v-for="(item, index1) of list"
        :key="index1"
        size="large"
        :href="item.href">
        <template #icon>
          <img
            :src="
              item.favicon.indexOf('//') >= 0
                ? item.favicon
                : `${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon || 'favicon.ico'}`
            "
            class="icon"
            referrer="no-referrer"
            @load="(e) => (e.target.style.display = 'inline-block')"
          />
        </template>
        {{ item.title }}
      </a-button>
      <a-button
        v-for="i of 20"
        :key="i"
        class="seat">
      </a-button>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"

const downloadList = [
  { title: "国服（腾讯版官网）", href: "https://coc.qq.com/", favicon: "" },
  { title: "国服（应用宝下载）", href: "https://sj.qq.com/appdetail/com.tencent.tmgp.supercell.clashofclans", favicon: "" },
  { title: "国际服（谷歌版）", href: "https://play.google.com/store/apps/details?id=com.supercell.clashofclans", favicon: "" },
  { title: "私服（Atrasis）", href: "https://atrasis.cc/", favicon: "" },
  { title: "私服（Null's Clash）", href: "https://nulls.gg/servers/nulls-clash/", favicon: "/assets/img/favicon-32.png" }
]

const toolList = [
  { title: "昆仑版", href: "https://coc.gameark.cn/", favicon: "" },
  { title: "九游版", href: "http://www.9game.cn/coc/", favicon: "" },
  { title: "华为版", href: "https://appstore.huawei.com/app/C10329573", favicon: "//appgallery.huawei.com/static/agweb/img/ic_navigation_appmarket.png" },
  // { title: "安智版", href: "http://www.anzhi.com/pkg/ea7c_com.supercell.clashofclans.anzhi.html", favicon: "" },
  { title: "豌豆荚版", href: "https://www.wandoujia.com/apps/7597066", favicon: "" },
  { title: "百度版", href: "https://mobile.baidu.com/item?pid=1540839", favicon: "//ascdn.baidu.com/appsite/images/logo57x57.png" },
  { title: "果盘版", href: "http://www.guopan.cn/blct/", favicon: "" },
  { title: "OPPO版", href: "http://update.coc.gameark.cn/?channel=oppo", favicon: "//f-cn-1.kunlun.com/coc/images/favicon.png" },
  { title: "VIVO版", href: "http://update.coc.gameark.cn/?channel=vivo", favicon: "//f-cn-1.kunlun.com/coc/images/favicon.png" },
  { title: "4399版", href: "http://news.4399.com/buluozz/", favicon: "" },
  { title: "2345版", href: "http://zhushou.2345.com/game/174645.html", favicon: "//zhushou.2345cdn.net/zhushouimg/images/web/v2/fav.ico" },
  { title: "360版", href: "http://u.360.cn/coc/", favicon: "" },
  { title: "小米版", href: "https://game.xiaomi.com/game/62231040", favicon: "" },
  { title: "一号玩家版", href: "https://www.1gamer.cn/game-id-11162.html", favicon: "" },
  { title: "雷电版", href: "https://www.ldmnq.com/app/1.html", favicon: "" },
  { title: "靠谱助手版", href: "http://www.kpzs.com/game/blctcoc1.html", favicon: "" },
  // { title: "拇指玩版", href: "https://www.muzhiwan.com/com.supercell.clashofclans.ewan.mzw.html", favicon: "" },
  { title: "B站版", href: "http://update.coc.gameark.cn/?channel=bili", favicon: "//f-cn-1.kunlun.com/coc/images/favicon.png" },
  { title: "逍遥版", href: "https://www.xyaz.cn/gc/apps-586-1.html", favicon: "//www.xyaz.cn/layout-v2/shortlogo.png" },
  { title: "搜狗版", href: "http://dl.wan.sogoucdn.com/dl0/1387/app12195_default_0009000500395.apk", favicon: "" },
  { title: "夜神版", href: "https://app.yeshen.com/games/single/9360", favicon: "" },
  { title: "联想版", href: "https://www.lenovomm.com/appdetail/com.supercell.clashofclans.lenovo/1138", favicon: "_next/static/images/favicon-f87a489f2d293ef5241ddf34007b6823.ico" },
  { title: "魅族版", href: "https://app.meizu.com/games/public/detail?package_name=com.supercell.clashofclans.mz", favicon: "" }
]

const list = [
  { title: "黑羽COC", href: "https://coc.heiyu100.cn/", favicon: "img/favicon.ico" },
  { title: "COC鱼情统计", href: "https://clashofclansforecaster.com/?lang=chinese-simp", favicon: "" },
  { title: "COC数据统计", href: "https://clashofstats.com/", favicon: "favicon-32x32.png" },
  { title: "COC指导", href: "https://cocservice.top/", favicon: "" },
  { title: "晴天COC（知乎）", href: "https://www.zhihu.com/people/xin-dong-58-2", favicon: "" },
  { title: "晴天COC（BiliBili）", href: "https://space.bilibili.com/22602921/", favicon: "" }
]
</script>

<style lang="less" scoped>
.layout {
  height: calc(100vh - 64px);
  overflow: auto;
}

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
  display: none;
  vertical-align: baseline;
}
</style>
