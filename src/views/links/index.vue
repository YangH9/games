<template>
  <a-layout>
    <Header></Header>
    <a-layout class="layout">
      <div class="container">
        <Breadcrumb />
        <a-card
          v-for="(main, index) of resoutcesList"
          :key="index"
          :title="main.title"
          class="mb10"
          :hoverable="true">
          <a-button
            v-for="(item, index1) of main.list"
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
            v-for="i of 10"
            :key="i"
            class="seat">
          </a-button>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"

const resoutcesList = [
  {
    title: "友情链接",
    list: [{ title: "RGB", href: "https://rgb39.top/", favicon: "" }]
  },
  {
    title: "码农推荐",
    list: [
      {
        title: "【腾讯云】推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。",
        href: "https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=42dc10103f6f6935ce4d5a47e1cefa80&from=console",
        favicon: ""
      },
      {
        title: "「新浪云福利」1000云豆免费领！低成本、免运维、灵活、安全稳定，轻松应对业务爆发式增长，一起来用吧！",
        href: "https://www.sinacloud.com/public/login/inviter/gaimrn-mddmzeKWrhKWvrYKIo619nptqfqKqdg.html",
        favicon: ""
      },
      { title: "宝塔服务器面板，一键全能部署及管理，送你3188元礼包，点我领取", href: "https://www.bt.cn/?invite_code=MV9wb3Npdmw=", favicon: "" },
      { title: "天行数据API接口", href: "https://www.tianapi.com/source/9897a82ddb", favicon: "" },
      { title: "程序猿必备小贴纸", href: "https://www.smallsticker.com/", favicon: "" }
    ]
  },
  {
    title: "网站收录",
    list: [
      { title: "百度资源搜索平台", href: "https://ziyuan.baidu.com/", favicon: "" },
      { title: "必应网站管理员工具", href: "https://www.bing.com/toolbox/webmaster/", favicon: "" },
      { title: "360站长平台", href: "https://zhanzhang.so.com/", favicon: "" },
      { title: "谷歌收录", href: "https://www.google.cn/intl/zh-CN/add_url.html", favicon: "" },
      { title: "搜狗站长平台", href: "https://zhanzhang.sogou.com/", favicon: "//dlweb.sogoucdn.com/translate/favicon.ico" },
      { title: "神马站长平台", href: "https://zhanzhang.sm.cn/", favicon: "//sm01.alicdn.com/L1/272/1990/favicon/favicon.ico" }
    ]
  },
  {
    title: "名站导航",
    list: [
      { title: "百度", href: "https://www.baidu.com/", favicon: "" },
      { title: "百度开发者搜索", href: "https://kaifa.baidu.com/", favicon: "assets/favicon.ico" },
      { title: "必应搜索", href: "https://www.bing.com/", favicon: "" },
      { title: "百度翻译", href: "https://fanyi.baidu.com/", favicon: "" },
      { title: "百度地图", href: "https://map.baidu.com/", favicon: "" },
      { title: "腾讯地图", href: "https://map.qq.com/", favicon: "" },
      { title: "哔哩哔哩", href: "https://www.bilibili.com/", favicon: "" },
      { title: "网易云音乐", href: "https://music.163.com/", favicon: "style/favicon.ico" },
      { title: "MDN", href: "https://developer.mozilla.org/zh-CN/", favicon: "" },
      { title: "w3school", href: "https://www.w3school.com.cn/", favicon: "ui2019/logo-16-red.png" },
      { title: "菜鸟教程", href: "https://www.runoob.com/", favicon: "" },
      { title: "ESLint", href: "https://zh-hans.eslint.org/", favicon: "" },
      { title: "VSCode", href: "https://code.visualstudio.com/", favicon: "" },
      { title: "URDRA极光", href: "https://www.jiguang.cn/", favicon: "" }
    ]
  },
  {
    title: "腾讯",
    list: [
      { title: "QQ", href: "https://im.qq.com/", favicon: "" },
      { title: "微信", href: "https://weixin.qq.com/", favicon: "//res.wx.qq.com/a/wx_fed/assets/res/NTI4MWU5.ico" },
      { title: "TIM", href: "https://office.qq.com/", favicon: "" },
      { title: "QQ空间", href: "https://qzone.qq.com/", favicon: "" },
      { title: "QQ邮箱", href: "https://mail.qq.com/", favicon: "" },
      { title: "QQ音乐", href: "https://y.qq.com/", favicon: "" },
      { title: "腾讯视频", href: "https://v.qq.com/", favicon: "" },
      { title: "腾讯游戏", href: "https://game.qq.com/", favicon: "" },
      { title: "腾讯扣叮", href: "https://coding.qq.com/", favicon: "" },
      { title: "腾讯文档", href: "https://docs.qq.com/", favicon: "//docs.gtimg.com/desktop/favicon2.ico" },
      { title: "ProWork", href: "https://prowork.qq.com/", favicon: "" },
      { title: "腾讯问卷", href: "https://wj.qq.com/", favicon: "" },
      { title: "腾讯兔小巢", href: "https://txc.qq.com/", favicon: "" },
      { title: "CoDesign", href: "https://codesign.qq.com/", favicon: "" },
      { title: "AIDesign", href: "https://ailogo.qq.com/", favicon: "" },
      { title: "TDesign", href: "https://tdesign.tencent.com/", favicon: "" },
      { title: "腾讯工蜂", href: "https://code.tencent.com/", favicon: "//assets.code.tencent.com/official/p/1667911693366/favicon.ico" },
      { title: "腾讯GCLOUD", href: "https://gcloud.tencent.com/", favicon: "//gcloudweb-1256818929.cos.ap-shanghai.myqcloud.com/static/images/OfficialSite_Tencent/ico-img/gcloud-ico.ico" },
      { title: "蓝鲸智云", href: "https://bk.tencent.com/", favicon: "static/img/favicon.ico" },
      { title: "腾讯开源", href: "https://opensource.tencent.com/", favicon: "" }
    ]
  },
  {
    title: "码农必备（教程、学习、插件、库、框架）",
    list: [
      { title: "vuejs", href: "https://cn.vuejs.org/", favicon: "logo.svg" },
      { title: "angular", href: "https://angular.cn/", favicon: "assets/images/favicons/favicon.ico" },
      { title: "angularjs", href: "https://angularjs.org", favicon: "" },
      { title: "reactjs", href: "https://zh-hans.reactjs.org/", favicon: "" },
      { title: "Vuex", href: "https://vuex.vuejs.org/zh/", favicon: "logo.png" },
      { title: "Vue Router", href: "https://router.vuejs.org/zh/", favicon: "logo.png" },
      { title: "Pinia", href: "https://pinia.vuejs.org/zh/", favicon: "logo.svg" },
      { title: "Vite", href: "https://cn.vitejs.dev/", favicon: "logo.svg" },
      { title: "Vue Devtools", href: "https://devtools.vuejs.org/", favicon: "favicon.svg" },
      { title: "DCloud", href: "https://www.dcloud.io/", favicon: "" },
      { title: "uni-app", href: "https://uniapp.dcloud.net.cn/", favicon: "//vkceyugu.cdn.bspapp.com/VKCEYUGU-a90b5f95-90ba-4d30-a6a7-cd4d057327db/d23e842c-58fc-4574-998d-17fdc7811cc3.png" },
      { title: "Bootstrap", href: "https://www.bootcss.com/", favicon: "//cdn.jsdelivr.net/npm/@bootcss/www.bootcss.com@0.0.65/dist/ico/favicon.ico" },
      { title: "sass", href: "https://www.sass.hk/", favicon: "" },
      { title: "less", href: "https://lesscss.com.cn/", favicon: "Application/Home/View/Public/img/favicon.ico" },
      { title: "jquery", href: "https://www.jquery123.com/", favicon: "assets/images/favicon.ico" },
      { title: "jQuery插件库", href: "https://www.jq22.com/", favicon: "//www.jq22.com/favicon.ico" },
      { title: "Redis", href: "https://redis.io/", favicon: "images/favicons/favicon-32x32.png" },
      { title: "Babel", href: "https://www.babeljs.cn/", favicon: "img/favicon.png" },
      { title: "Electron", href: "https://www.electronjs.org/", favicon: "assets/img/favicon.ico" },
      { title: "Nuxt.js", href: "https://www.nuxtjs.org.cn/", favicon: "" },
      { title: "Socket.IO", href: "https://socket.io/", favicon: "images/favicon.png" },
      { title: "webpack", href: "https://www.webpackjs.com/", favicon: "favicon.f326220248556af65f41.ico" },
      { title: "View Design", href: "https://www.iviewui.com/", favicon: "//file.iviewui.com/view-design-logo.png" },
      { title: "Element-UI", href: "https://element.eleme.cn/#/zh-CN", favicon: "" },
      { title: "Element-Plus", href: "https://element-plus.org/", favicon: "images/element-plus-logo-small.svg" },
      { title: "Ant Design", href: "https://ant.design/", favicon: "//gw.alipayobjects.com/zos/rmsportal/rlpTLlbMzTNYuZGGCVYM.png" },
      { title: "Ant Design of Vue", href: "https://antdv.com/docs/vue/introduce-cn", favicon: "//aliyuncdn.antdv.com/favicon.ico" },
      { title: "Layui", href: "https://layui.gitee.io/", favicon: "" },
      { title: "Vant", href: "https://vant-ui.github.io/", favicon: "//fastly.jsdelivr.net/npm/@vant/assets/logo.png" },
      { title: "Mint-UI", href: "https://mint-ui.github.io/", favicon: "" },
      { title: "iView-UI", href: "https://www.iviewui.com/", favicon: "//file.iviewui.com/view-design-logo.png" },
      { title: "React Native", href: "https://reactnative.cn/", favicon: "img/favicon.ico" },
      { title: "Node.js", href: "https://nodejs.org/zh-cn/", favicon: "" },
      { title: "egg", href: "https://eggjs.org/zh-cn/", favicon: "favicon.png" },
      { title: "Express", href: "https://expressjs.com/zh-cn/", favicon: "images/favicon.png" },
      { title: "Day.js", href: "https://day.js.org/", favicon: "img/favicon.ico" },
      { title: "Moment.js", href: "http://momentjs.cn/", favicon: "static/img/moment-favicon.png" },
      { title: "Lodash", href: "https://www.lodashjs.com/", favicon: "img/favicon.ico" },
      { title: "vxe-table", href: "https://vxetable.cn/", favicon: "" },
      { title: "TortoiseGit", href: "https://tortoisegit.org/", favicon: "" },
      { title: "iconfont图标", href: "https://iconfont.cn/", favicon: "//img.alicdn.com/imgextra/i4/O1CN01Z5paLz1O0zuCC7osS_!!6000000001644-55-tps-83-82.svg" },
      { title: "fullCalendar日程插件", href: "https://fullcalendar.io/", favicon: "favicon-32x32.png" },
      { title: "Mock.js", href: "http://mockjs.com/", favicon: "assets/img/logo-2.svg" },
      { title: "Flutter", href: "https://flutter.cn", favicon: "" },
      { title: "Tippy.js", href: "https://tippyjs.bootcss.com", favicon: "icons/icon-48x48.png" },
      { title: "Video.js", href: "https://videojs.com", favicon: "" },
      { title: "ThingJS", href: "https://www.thingjs.com/guide/", favicon: "" },
      { title: "Threejs", href: "https://threejs.org/", favicon: "" },
      { title: "Swiper", href: "https://swiperjs.com", favicon: "images/favicon.png" },
      { title: "TweenMax中文网", href: "https://www.tweenmax.com.cn", favicon: "" },
      { title: "Dart", href: "https://dart.dev/", favicon: "assets/shared/dart/icon/64.png" },
      { title: "jsdelivr", href: "https://www.jsdelivr.com", favicon: "" },
      { title: "CodePen", href: "https://codepen.io", favicon: "" },
      { title: "Postman", href: "https://www.postman.com", favicon: "//www.postman.com/_ar-assets/images/favicon-1-16.png" },
      { title: "RxJS", href: "https://rxjs.dev/", favicon: "assets/images/favicons/favicon.ico" },
      { title: "码市", href: "https://codemart.com/", favicon: "" },
      { title: "力扣", href: "https://leetcode.cn/", favicon: "" },
      { title: "牛客网", href: "https://www.nowcoder.com/", favicon: "//static.nowcoder.com/images/logo_87_87.png" },
      { title: "赛码网", href: "https://www.acmcoder.com/", favicon: "//cdn.acmcoder.com/release/www/2.0.1/images/acm.ico" },
      { title: "万维网联盟（W3C）", href: "https://www.w3.org", favicon: "" },
      { title: "MDN", href: "https://developer.mozilla.org", favicon: "" },
      { title: "掘金", href: "https://juejin.cn", favicon: "" },
      { title: "CSDN", href: "https://www.csdn.net", favicon: "" },
      { title: "w3school", href: "https://www.w3school.com.cn", favicon: "//www.w3school.com.cn/ui2019/logo-16-red.png" },
      { title: "菜鸟教程", href: "https://www.runoob.com", favicon: "" },
      { title: "Stack Overflow", href: "https://stackoverflow.com", favicon: "" },
      { title: "SegmentFault 思否", href: "https://segmentfault.com", favicon: "//static.segmentfault.com/main_site_next/44882992/favicon.ico" },
      { title: "开源中国", href: "https://www.oschina.net/", favicon: "//static.oschina.net/new-osc/img/favicon.ico" },
      { title: "知乎", href: "https://www.zhihu.com", favicon: "" }
    ]
  },
  {
    title: "ECharts Demo",
    list: [
      { title: "ECharts", href: "https://echarts.apache.org/", favicon: "//echarts.apache.org/zh/images/favicon.png" },
      { title: "MadeAPie", href: "https://madeapie.com/", favicon: "" },
      { title: "ISQQW", href: "https://www.isqqw.com/", favicon: "" },
      { title: "PPChart", href: "http://ppchart.com/", favicon: "" },
      { title: "ChartLib", href: "http://chartlib.datains.cn/", favicon: "" }
    ]
  },
  {
    title: "云服务",
    list: [
      { title: "凡科网", href: "https://fkw.com/", favicon: "" },
      { title: "GitHub", href: "https://github.com/", favicon: "" },
      { title: "码云", href: "https://gitee.com/", favicon: "" },
      { title: "腾讯云", href: "https://cloud.tencent.com/", favicon: "" },
      { title: "新浪云", href: "https://www.sinacloud.com/", favicon: "" },
      { title: "阿里云", href: "https://www.aliyun.com/", favicon: "" }
    ]
  },
  {
    title: "开放平台",
    list: [
      { title: "腾讯开放平台", href: "https://open.tencent.com", favicon: "" },
      { title: "QQ开放平台", href: "https://om.qq.com", favicon: "" },
      { title: "QQ小程序开放平台", href: "https://q.qq.com/#/", favicon: "" },
      { title: "微信公众开发平台", href: "https://mp.weixin.qq.com", favicon: "" },
      { title: "微信开放平台", href: "https://open.weixin.qq.com", favicon: "" },
      { title: "腾讯位置服务", href: "https://lbs.qq.com", favicon: "" },
      { title: "百度地图开放平台", href: "https://lbsyun.baidu.com", favicon: "" },
      { title: "高德开放平台", href: "https://developer.amap.com", favicon: "" },
      { title: "支付宝开放平台", href: "https://open.alipay.com", favicon: "//img.alicdn.com/tfs/TB1qEwuzrj1gK0jSZFOXXc7GpXa-32-32.ico" },
      { title: "拼多多开放平台", href: "https://open.pinduoduo.com", favicon: "//open-static.pddpic.com/application/favicon.ico" },
      { title: "百度智能云", href: "https://cloud.baidu.com", favicon: "//bce.bdstatic.com/img/favicon.ico" },
      { title: "百度网盘开放平台", href: "https://pan.baidu.com", favicon: "//nd-static.bdstatic.com/m-static/v20-main/favicon-main.ico" },
      { title: "OPPO开放平台", href: "https://open.oppomobile.com", favicon: "" },
      { title: "淘宝开放平台", href: "https://open.taobao.com", favicon: "//img.alicdn.com/imgextra/i3/O1CN01K6gTbI1FasPBz4iEB_!!6000000000504-73-tps-32-32.ico" },
      { title: "小米开放平台", href: "https://dev.mi.com", favicon: "//dev.mi.com/console/favicon.ico" },
      { title: "阿里巴巴开放平台", href: "https://open.1688.com", favicon: "//cbu01.alicdn.com/favicon.ico" },
      { title: "钉钉开放平台", href: "https://open.dingtalk.com", favicon: "" }
    ]
  },
  {
    title: "娱乐、办公、其他",
    list: [
      { title: "小米", href: "https://www.mi.com", favicon: "" },
      { title: "京东", href: "https://www.jd.com", favicon: "" },
      { title: "淘宝", href: "https://www.taobao.com", favicon: "" },
      { title: "千牛", href: "https://myseller.taobao.com", favicon: "//g.alicdn.com/qn/qn-login-page/0.0.9/favicon.png" },
      { title: "Apple", href: "https://apple.com.cn", favicon: "" },
      { title: "蓝湖", href: "https://lanhuapp.com/", favicon: "" },
      { title: "哔哩哔哩", href: "https://www.bilibili.com/", favicon: "" },
      { title: "黑羽", href: "https://coc.heiyu100.cn/", favicon: "img/favicon.ico" },
      { title: "coc统计", href: "https://clashofclansforecaster.com/?lang=chinese-simp", favicon: "" },
      // { title: "coc查看", href: "https://clashofstats.com/", favicon: "" },
      { title: "coc指导", href: "https://cocservice.top/", favicon: "" },
      { title: "CF", href: "https://cf.qq.com/", favicon: "" },
      { title: "CFM", href: "https://cfm.qq.com/", favicon: "" },
      { title: "Speed", href: "https://speed.qq.com/", favicon: "" },
      { title: "SpeedM", href: "https://speedm.qq.com/", favicon: "" },
      { title: "企鹅电竞", href: "https://egame.qq.com/", favicon: "" },
      { title: "3DMgame", href: "https://www.3dmgame.com/", favicon: "" },
      { title: "原神", href: "https://ys.mihoyo.com/", favicon: "" },
      { title: "蜂语", href: "https://w2.wx900.top/", favicon: "" },
      { title: "智联招聘", href: "https://www.zhaopin.com/", favicon: "" },
      { title: "全国征兵网", href: "https://www.gfbzb.gov.cn/", favicon: "" },
      { title: "苹果签名证书", href: "https://www.appuploader.net/", favicon: "" },
      { title: "JsonBird", href: "https://bird.ioliu.cn/", favicon: "static/images/favicon.ico" },
      { title: "音乐磁场", href: "https://www.hifini.com/", favicon: "" },
      { title: "163邮箱", href: "https://mail.163.com", favicon: "" },
      { title: "微博", href: "https://www.weibo.com", favicon: "" },
      { title: "Microsoft", href: "https://www.microsoft.com/zh-cn", favicon: "" },
      { title: "BOSS直聘", href: "https://www.zhipin.com", favicon: "" },
      { title: "宝塔面板", href: "https://www.bt.cn", favicon: "" },
      { title: "景安", href: "https://www.zzidc.com", favicon: "" },
      { title: "熊猫办公", href: "https://www.tukuppt.com", favicon: "" },
      { title: "草料二维码", href: "https://cli.im", favicon: "" },
      { title: "96微信编辑器", href: "https://bj.96weixin.com", favicon: "" },
      { title: "站长之家", href: "https://www.chinaz.com", favicon: "//img.chinaz.com/2020/img/favicon.ico" },
      { title: "在线作图", href: "https://processon.com", favicon: "" },
      { title: "模板之家", href: "http://www.cssmoban.com", favicon: "" },
      { title: "天行数据", href: "https://www.tianapi.com", favicon: "" },
      { title: "凡科建站", href: "https://fkw.com", favicon: "" },
      { title: "源码之家", href: "https://www.mycodes.net", favicon: "" },
      { title: "17素材网", href: "https://www.17sucai.com", favicon: "" },
      { title: "图怪兽", href: "https://818ps.com", favicon: "" },
      { title: "吾爱破解", href: "https://www.52pojie.cn", favicon: "" },
      { title: "站酷", href: "https://www.zcool.com.cn", favicon: "//static.zcool.cn/git_z/z/site/favicon.ico" },
      { title: "MAKA", href: "https://maka.im", favicon: "" },
      { title: "便民查询网", href: "https://www.51240.com", favicon: "" },
      { title: "Worktile", href: "https://worktile.com", favicon: "//cdn.pingcode.com/static/portal/favicon.ico" },
      { title: "天眼查", href: "https://www.tianyancha.com", favicon: "" },
      { title: "学信网", href: "https://www.chsi.com.cn", favicon: "" },
      { title: "小贴画", href: "https://smallsticker.com", favicon: "" },
      { title: "央视网", href: "https://www.cctv.com", favicon: "" },
      { title: "懂车帝", href: "https://www.dongchedi.com", favicon: "" },
      { title: "赛码网", href: "https://www.acmcoder.com", favicon: "//cdn.acmcoder.com/release/www/2.0.1/images/acm.ico" },
      { title: "Chrome插件", href: "https://www.extfans.com", favicon: "//static-public.infinitytab.com/sites-resource/extfans/61ea85a31aec3f3365dbe165/icon_1642759665914.jpg" },
      { title: "迅雷", href: "https://www.xunlei.com", favicon: "" },
      { title: "谷歌浏览器", href: "https://www.google.cn/chrome", favicon: "/chrome/static/images/favicons/favicon-16x16.png" },
      { title: "易车", href: "https://www.yiche.com", favicon: "//static1.bitautoimg.com/yc-common/icon/favicon.ico" },
      { title: "Ionic", href: "https://ionicframework.com", favicon: "" }
    ]
  }
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
