<template>
  <a-layout>
    <Header></Header>
    <a-layout>
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
                :src="`${item.href.split('/')[0]}//${item.href.split('/')[2]}/${item.favicon||'favicon.ico'}`"
                class="icon"
                @error="(e)=>e.target.style.display='none'" />
            </template>
            {{ item.title }}
          </a-button>
        </a-card>
      </div>
    </a-layout>
  </a-layout>
</template>

<script setup>
import Breadcrumb from "@/components/Breadcrumb.vue"
import Header from "@/components/Header.vue"
import { reactive } from "vue"

const resoutcesList = reactive([
  {
    title: "友情链接",
    list: []
  },
  {
    title: "码农推荐",
    list: [
      { title: "【腾讯云】推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。", href: "https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=42dc10103f6f6935ce4d5a47e1cefa80&from=console", favicon: "" },
      { title: "「新浪云福利」1000云豆免费领！低成本、免运维、灵活、安全稳定，轻松应对业务爆发式增长，一起来用吧！", href: "https://www.sinacloud.com/public/login/inviter/gaimrn-mddmzeKWrhKWvrYKIo619nptqfqKqdg.html", favicon: "" },
      { title: "宝塔服务器面板，一键全能部署及管理，送你3188元礼包，点我领取", href: "https://www.bt.cn/?invite_code=MV9wb3Npdmw=", favicon: "" },
      { title: "天行数据API接口", href: "https://www.tianapi.com/source/9897a82ddb", favicon: "" },
      { title: "程序猿必备小贴纸", href: "https://www.smallsticker.com/,favicon:''" }
    ]
  },
  {
    title: "网站收录",
    list: [
      { title: "百度资源搜索平台", href: "https://ziyuan.baidu.com/", favicon: "" },
      { title: "必应网站管理员工具", href: "https://www.bing.com/toolbox/webmaster/", favicon: "" },
      { title: "360站长平台", href: "https://zhanzhang.so.com/", favicon: "" },
      { title: "谷歌收录", href: "https://www.google.cn/intl/zh-CN/add_url.html", favicon: "" },
      { title: "搜狗站长平台", href: "https://zhanzhang.sogou.com/", favicon: "" },
      { title: "神马站长平台", href: "https://zhanzhang.sm.cn/,favicon:''" }
    ]
  },
  {
    title: "常用",
    list: [
      { title: "百度", href: "https://www.baidu.com/", favicon: "" },
      { title: "百度翻译", href: "https://fanyi.baidu.com/", favicon: "" },
      { title: "百度地图", href: "https://map.baidu.com/", favicon: "" },
      { title: "腾讯地图", href: "https://map.qq.com/", favicon: "" },
      { title: "MDN", href: "https://developer.mozilla.org/zh-CN/", favicon: "" },
      { title: "w3school", href: "https://www.w3school.com.cn/", favicon: "" },
      { title: "菜鸟教程", href: "https://www.runoob.com/", favicon: "" },
      { title: "ESLint", href: "https://zh-hans.eslint.org/", favicon: "" },
      { title: "VSCode", href: "https://code.visualstudio.com/", favicon: "" },
      { title: "URDRA极光", href: "https://www.jiguang.cn/,favicon:''" }
    ]
  },
  {
    title: "腾讯",
    list: [
      { title: "腾讯扣叮", href: "https://coding.qq.com/", favicon: "" },
      { title: "腾讯文档", href: "https://docs.qq.com/", favicon: "" },
      { title: "ProWork", href: "https://prowork.qq.com/", favicon: "" },
      { title: "腾讯问卷", href: "https://wj.qq.com/", favicon: "" },
      { title: "腾讯兔小巢", href: "https://txc.qq.com/", favicon: "" },
      { title: "CoDesign", href: "https://codesign.qq.com/", favicon: "" },
      { title: "AIDesign", href: "https://ailogo.qq.com/", favicon: "" },
      { title: "TDesign", href: "https://tdesign.tencent.com/", favicon: "" },
      { title: "腾讯工蜂", href: "https://code.tencent.com/", favicon: "" },
      { title: "腾讯GCLOUD", href: "https://gcloud.tencent.com/", favicon: "" },
      { title: "蓝鲸智云", href: "https://bk.tencent.com/", favicon: "" },
      { title: "腾讯开源", href: "https://opensource.tencent.com/,favicon:''" }
    ]
  },
  {
    title: "码农",
    list: [
      { title: "vuejs", href: "https://cn.vuejs.org/", favicon: "logo.svg" },
      { title: "angular", href: "https://angular.cn/", favicon: "assets/images/favicons/favicon.ico" },
      { title: "reactjs", href: "https://zh-hans.reactjs.org/", favicon: "" },
      { title: "Vuex", href: "https://vuex.vuejs.org/zh/", favicon: "logo.png" },
      { title: "Vue Router", href: "https://router.vuejs.org/zh/", favicon: "logo.png" },
      { title: "Pinia", href: "https://pinia.vuejs.org/zh/", favicon: "logo.svg" },
      { title: "Vite", href: "https://cn.vitejs.dev/", favicon: "logo.svg" },
      { title: "Vue Devtools", href: "https://devtools.vuejs.org/", favicon: "favicon.svg" },
      { title: "DCloud", href: "https://www.dcloud.io/", favicon: "" },
      { title: "uni-app", href: "https://uniapp.dcloud.net.cn/", favicon: "" },
      { title: "Bootstrap", href: "https://www.bootcss.com/", favicon: "" },
      { title: "sass", href: "https://www.sass.hk/", favicon: "" },
      { title: "less", href: "https://lesscss.com.cn/", favicon: "" },
      { title: "jquery", href: "https://www.jquery123.com/", favicon: "" },
      { title: "jQuery插件库", href: "https://jq22.com/", favicon: "" },
      { title: "Redis", href: "https://redis.io/", favicon: "" },
      { title: "Babel", href: "https://www.babeljs.cn/", favicon: "" },
      { title: "Electron", href: "https://www.electronjs.org/", favicon: "images/favicon.b7a59262df48d6563400baf5671da548.ico" },
      { title: "Nuxt.js", href: "https://www.nuxtjs.org.cn/", favicon: "" },
      { title: "Socket.IO", href: "https://socket.io/", favicon: "" },
      { title: "webpack", href: "https://www.webpackjs.com/", favicon: "" },
      { title: "View Design", href: "https://www.iviewui.com/", favicon: "" },
      { title: "Element-UI", href: "https://element.eleme.cn/#/zh-CN", favicon: "" },
      { title: "Element-Plus", href: "https://element-plus.org/", favicon: "" },
      { title: "Ant Design", href: "https://ant.design/", favicon: "" },
      { title: "Ant Design of Vue", href: "https://antdv.com/docs/vue/introduce-cn", favicon: "" },
      { title: "Layui", href: "https://layui.gitee.io/", favicon: "" },
      { title: "Vant", href: "https://vant-ui.github.io/", favicon: "" },
      { title: "Mint-UI", href: "https://mint-ui.github.io/", favicon: "" },
      { title: "iView-UI", href: "https://www.iviewui.com/", favicon: "" },
      { title: "React Native", href: "https://reactnative.cn/", favicon: "" },
      { title: "Node.js", href: "https://nodejs.org/zh-cn/", favicon: "" },
      { title: "egg", href: "https://eggjs.org/zh-cn/", favicon: "" },
      { title: "Express", href: "https://expressjs.com/zh-cn/", favicon: "" },
      { title: "Day.js", href: "https://dayjs.gitee.io/zh-CN/", favicon: "" },
      { title: "Moment.js", href: "http://momentjs.cn/", favicon: "" },
      { title: "Lodash", href: "https://www.lodashjs.com/", favicon: "" },
      { title: "vxe-table", href: "https://vxetable.cn/", favicon: "" },
      { title: "GitHub", href: "https://github.com/", favicon: "" },
      { title: "码云", href: "https://gitee.com/", favicon: "" },
      { title: "TortoiseGit", href: "https://tortoisegit.org/", favicon: "" },
      { title: "iconfont图标", href: "https://iconfont.cn/", favicon: "" },
      { title: "fullCalendar日程插件", href: "https://fullcalendar.io/", favicon: "" },
      { title: "Mock.js", href: "http://mockjs.com/", favicon: "" },
      { title: "Threejs", href: "https://threejs.org/", favicon: "" },
      { title: "ThingJS", href: "https://www.thingjs.com/guide/", favicon: "" },
      { title: "ECharts", href: "https://echarts.apache.org/zh/index.html", favicon: "" },
      { title: "凡科网", href: "https://fkw.com/", favicon: "" },
      { title: "腾讯云", href: "https://cloud.tencent.com/", favicon: "" },
      { title: "新浪云", href: "https://www.sinacloud.com/", favicon: "" },
      { title: "阿里云", href: "https://www.aliyun.com/", favicon: "" },
      { title: "码市", href: "https://codemart.com/", favicon: "" },
      { title: "力扣", href: "https://leetcode.cn/", favicon: "" },
      { title: "牛客网", href: "https://nowcoder.com/", favicon: "" },
      { title: "赛码网", href: "https://www.acmcoder.com/,favicon:''" }
    ]
  },
  {
    title: "开放平台",
    list: [
      { title: "百度地图开放平台", href: "https://lbsyun.baidu.com/", favicon: "" },
      { title: "QQ小程序开放平台", href: "https://q.qq.com/", favicon: "" },
      { title: "腾讯开放平台", href: "https://om.qq.com/", favicon: "" },
      { title: "微信公众平台", href: "https://mp.weixin.qq.com/", favicon: "" },
      { title: "微信开放平台", href: "https://open.weixin.qq.com/,favicon:''" }
    ]
  },
  {
    title: "办公",
    list: [
      { title: "QQ邮箱", href: "https://mail.qq.com/", favicon: "" },
      { title: "163邮箱", href: "https://mail.163.com/", favicon: "" },
      { title: "微博", href: "https://www.weibo.com/", favicon: "" },
      { title: "QQ空间", href: "https://qzone.qq.com/", favicon: "" },
      { title: "蓝湖", href: "https://lanhuapp.com/", favicon: "" },
      { title: "worktile", href: "https://worktile.com/", favicon: "" },
      { title: "站酷", href: "https://www.zcool.com.cn/", favicon: "" },
      { title: "哔哩哔哩", href: "https://www.bilibili.com/,favicon:''" }
    ]
  },
  {
    title: "娱乐",
    list: [
      { title: "京东", href: "https://jd.com/", favicon: "" },
      { title: "小米", href: "https://www.mi.com/", favicon: "" },
      { title: "Apple", href: "https://apple.com.cn/", favicon: "" },
      { title: "淘宝", href: "https://taobao.com/", favicon: "" },
      { title: "千牛", href: "https://myseller.taobao.com/", favicon: "" },
      { title: "黑羽", href: "https://coc.heiyu100.cn/", favicon: "" },
      { title: "coc统计", href: "https://clashofclansforecaster.com/?lang=chinese-simp", favicon: "" },
      { title: "coc查看", href: "https://clashofstats.com/", favicon: "" },
      { title: "coc指导", href: "https://cocservice.top/", favicon: "" },
      { title: "CF", href: "https://cf.qq.com/", favicon: "" },
      { title: "CFM", href: "https://cfm.qq.com/", favicon: "" },
      { title: "Speed", href: "https://speed.qq.com/", favicon: "" },
      { title: "SpeedM", href: "https://speedm.qq.com/", favicon: "" },
      { title: "企鹅电竞", href: "https://egame.qq.com/", favicon: "" },
      { title: "3DMgame", href: "https://www.3dmgame.com/", favicon: "" },
      { title: "原神", href: "https://ys.mihoyo.com/#/,favicon:''" }
    ]
  },
  {
    title: "其他",
    list: [
      { title: "康博嘉", href: "https://yun.kbjcc.cc/html/login.html?tc=jht001", favicon: "" },
      { title: "景安", href: "https://www.zzidc.com/", favicon: "" },
      { title: "蜂语", href: "https://w2.wx900.top/", favicon: "" },
      { title: "BOSS直聘", href: "https://www.zhipin.com/", favicon: "" },
      { title: "智联招聘", href: "https://www.zhaopin.com/", favicon: "" },
      { title: "TMOOC", href: "https://www.tmooc.cn/", favicon: "" },
      { title: "天眼查", href: "https://www.tianyancha.com/", favicon: "" },
      { title: "熊猫办公", href: "https://www.tukuppt.com/", favicon: "" },
      { title: "草料二维码", href: "https://cli.im/", favicon: "" },
      { title: "96编辑器", href: "https://bj.96weixin.com/", favicon: "" },
      { title: "图怪兽", href: "https://818ps.com/", favicon: "" },
      { title: "MAKA", href: "https://maka.im/", favicon: "" },
      { title: "站长之家", href: "https://www.chinaz.com/", favicon: "" },
      { title: "站酷", href: "https://www.zcool.com.cn/", favicon: "" },
      { title: "全国征兵网", href: "https://www.gfbzb.gov.cn/", favicon: "" },
      { title: "学信网", href: "https://www.chsi.com.cn/", favicon: "" },
      { title: "便民查询网", href: "https://www.51240.com/", favicon: "" },
      { title: "吾爱破解", href: "https://www.52pojie.cn/", favicon: "" },
      { title: "天行数据", href: "https://www.tianapi.com/", favicon: "" },
      { title: "源码之家", href: "https://www.mycodes.net/", favicon: "" },
      { title: "苹果签名证书", href: "https://www.appuploader.net/", favicon: "" },
      { title: "小贴画", href: "https://smallsticker.com/", favicon: "" },
      { title: "api", href: "https://bird.ioliu.cn/", favicon: "" },
      { title: "音乐磁场", href: "https://www.hifini.com/", favicon: "" },
      { title: "在线作图", href: "https://processon.com/,favicon:''" }
    ]
  }
])

</script>

<style lang="less" scoped>
.ant-card :deep(.ant-card-body) {
    padding-bottom: 14px;
    .ant-btn {
      margin-right: 10px;
      margin-bottom: 10px;
  }
}
.icon{
  width: 16px;
  height: 16px;
  margin-right: 4px;
  display: inline-block;
  vertical-align: baseline;
}
</style>
