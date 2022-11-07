<template>
  <a-layout>
    <Header></Header>
    <a-layout>
      <div class="container">
        <Breadcrumb />
        <a-space
          size="middle"
          direction="vertical">
          <template
            v-for="(main, index) of resoutcesList"
            :key="index">
            <a-card
              :title="main.title"
              :hoverable="true">
              <a-space
                class="wrap"
                size="small">
                <template
                  v-for="(item, index1) of main.list"
                  :key="index1">
                  <a-button
                    size="large"
                    :target="item.target"
                    :href="item.href">
                    <template #icon>
                      <img
                        :src="`https://${item.href.split('/')[2]}/favicon.ico`"
                        style="width:20px;height:20px;"
                        @error="(e)=>e.target.style.display='none'" />
                    </template>
                    {{ item.title }}
                  </a-button>
                </template>
              </a-space>
            </a-card>
          </template>
        </a-space>
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
      { title: "【腾讯云】推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。", href: "https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=42dc10103f6f6935ce4d5a47e1cefa80&from=console", target: "_blank" },
      { title: "「新浪云福利」1000云豆免费领！低成本、免运维、灵活、安全稳定，轻松应对业务爆发式增长，一起来用吧！", href: "https://www.sinacloud.com/public/login/inviter/gaimrn-mddmzeKWrhKWvrYKIo619nptqfqKqdg.html", target: "_blank" },
      { title: "宝塔服务器面板，一键全能部署及管理，送你3188元礼包，点我领取", href: "https://www.bt.cn/?invite_code=MV9wb3Npdmw=", target: "_blank" },
      { title: "天行数据API接口", href: "https://www.tianapi.com/source/9897a82ddb", target: "_blank" },
      { title: "程序猿必备小贴纸", href: "https://www.smallsticker.com/", target: "_blank" }
    ]
  },
  {
    title: "网站收录",
    list: [
      { title: "百度资源搜索平台", href: "https://ziyuan.baidu.com/", target: "_blank" },
      { title: "必应网站管理员工具", href: "https://www.bing.com/toolbox/webmaster/", target: "_blank" },
      { title: "360站长平台", href: "http://zhanzhang.so.com/", target: "_blank" },
      { title: "谷歌收录", href: "http://www.google.cn/intl/zh-CN/add_url.html", target: "_blank" },
      { title: "搜狗站长平台", href: "http://zhanzhang.sogou.com/", target: "_blank" },
      { title: "神马站长平台", href: "https://zhanzhang.sm.cn/", target: "_blank" }
    ]
  },
  {
    title: "常用",
    list: [
      { title: "百度", href: "https://www.baidu.com/", target: "_blank" },
      { title: "百度翻译", href: "https://fanyi.baidu.com/", target: "_blank" },
      { title: "百度地图", href: "https://map.baidu.com/", target: "_blank" },
      { title: "百度地图开放平台", href: "http://lbsyun.baidu.com/", target: "_blank" },
      { title: "腾讯地图", href: "https://map.qq.com/", target: "_blank" },
      { title: "MDN", href: "https://developer.mozilla.org/zh-CN/", target: "_blank" },
      { title: "w3school", href: "https://www.w3school.com.cn/", target: "_blank" },
      { title: "菜鸟教程", href: "https://www.runoob.com/", target: "_blank" },
      { title: "ESLint", href: "https://cn.eslint.org/", target: "_blank" },
      { title: "dcloud", href: "https://www.dcloud.io/", target: "_blank" },
      { title: "极光", href: "https://www.jiguang.cn/", target: "_blank" },
      { title: "docschina", href: "https://docschina.org/", target: "_blank" }
    ]
  },
  {
    title: "码农",
    list: [
      { title: "vuejs", href: "https://cn.vuejs.org/", target: "_blank" },
      { title: "DCloud", href: "https://www.dcloud.io/", target: "_blank" },
      { title: "uni-app", href: "https://uniapp.dcloud.net.cn/", target: "_blank" },
      { title: "angularjs", href: "https://angular.cn/", target: "_blank" },
      { title: "Bootstrap", href: "https://www.bootcss.com/", target: "_blank" },
      { title: "sass", href: "https://www.sass.hk/", target: "_blank" },
      { title: "less", href: "http://lesscss.cn/", target: "_blank" },
      { title: "threejs", href: "https://threejs.docschina.org/", code: "https://threejs.org/", target: "_blank" },
      { title: "ThingJS", href: "http://www.thingjs.com/guide/", target: "_blank" },
      { title: "ECharts", href: "http://echarts.apache.org/zh/index.html", target: "_blank" },
      { title: "jquery", href: "https://www.jquery123.com/", target: "_blank" },
      { title: "jQuery插件库", href: "http://jq22.com/", target: "_blank" },
      { title: "Redis", href: "https://redis.cn/", target: "_blank" },
      { title: "Babel", href: "https://www.babeljs.cn/", target: "_blank" },
      { title: "Electron", href: "http://www.electronjs.org/", target: "_blank" },
      { title: "fullCalendar日程插件", href: "https://fullcalendar.io/", target: "_blank" },
      { title: "Nuxt.js", href: "https://www.nuxtjs.cn/", target: "_blank" },
      { title: "Socket.IO", href: "https://socket.io/", target: "_blank" },
      { title: "webpack", href: "https://webpack.docschina.org/", target: "_blank" },
      { title: "Mint-UI", href: "http://mint-ui.github.io/#!/zh-cn", target: "_blank" },
      { title: "Element-UI", href: "https://element.eleme.cn/#/zh-CN", target: "_blank" },
      { title: "Ant Design Vue", href: "https://www.antdv.com/docs/vue/introduce-cn/", target: "_blank" },
      { title: "Layui", href: "https://www.layui.com/", target: "_blank" },
      { title: "Vant", href: "https://youzan.github.io/vant/#/zh-CN/", target: "_blank" },
      { title: "VUX", href: "https://vux.li/", target: "_blank" },
      { title: "iView-UI", href: "https://www.iviewui.com/", target: "_blank" },
      { title: "React Native", href: "https://reactnative.cn/", target: "_blank" },
      { title: "Ant Design React", href: "https://ant.design/index-cn", target: "_blank" },
      { title: "Element-React-UI", href: "https://elemefe.github.io/element-react", target: "_blank" },
      { title: "Node.js", href: "http://nodejs.cn/", target: "_blank" },
      { title: "egg", href: "https://eggjs.org/zh-cn/", target: "_blank" },
      { title: "Express", href: "http://expressjs.com/zh-cn/", target: "_blank" },
      { title: "GitHub", href: "http://github.com/", target: "_blank" },
      { title: "码云", href: "https://gitee.com/", target: "_blank" },
      { title: "TortoiseGit", href: "https://tortoisegit.org/", target: "_blank" },
      { title: "iconfont图标", href: "http://iconfont.cn/", target: "_blank" },
      { title: "凡科网", href: "http://fkw.com/", target: "_blank" },
      { title: "腾讯云", href: "https://cloud.tencent.com/", target: "_blank" },
      { title: "新浪云", href: "https://www.sinacloud.com/", target: "_blank" },
      { title: "阿里云", href: "https://www.aliyun.com/", target: "_blank" },
      { title: "码市", href: "https://codemart.com/", target: "_blank" },
      { title: "QQ小程序", href: "http://q.qq.com/", target: "_blank" },
      { title: "腾讯开放平台", href: "http://om.qq.com/", target: "_blank" },
      { title: "微信公众平台", href: "https://mp.weixin.qq.com/", target: "_blank" },
      { title: "微信开放平台", href: "https://open.weixin.qq.com/", target: "_blank" },
      { title: "赛码网", href: "http://www.acmcoder.com/", target: "_blank" },
      { title: "蓝湖", href: "https://lanhuapp.com/", target: "_blank" }
    ]
  },
  {
    title: "办公",
    list: [
      { title: "QQ邮箱", href: "https://mail.qq.com/", target: "_blank" },
      { title: "163邮箱", href: "https://mail.163.com/", target: "_blank" },
      { title: "微博", href: "http://www.weibo.com/", target: "_blank" },
      { title: "QQ空间", href: "https://qzone.qq.com/", target: "_blank" },
      { title: "蓝湖", href: "https://lanhuapp.com/", target: "_blank" },
      { title: "worktile", href: "https://worktile.com/", target: "_blank" },
      { title: "站酷", href: "https://www.zcool.com.cn/", target: "_blank" },
      { title: "哔哩哔哩", href: "https://www.bilibili.com/", target: "_blank" }
    ]
  },
  {
    title: "娱乐",
    list: [
      { title: "京东", href: "http://jd.com/", target: "_blank" },
      { title: "小米", href: "https://www.mi.com/", target: "_blank" },
      { title: "Apple", href: "http://apple.com.cn/", target: "_blank" },
      { title: "淘宝", href: "http://taobao.com/", target: "_blank" },
      { title: "千牛", href: "https://myseller.taobao.com/", target: "_blank" },
      { title: "黑羽", href: "http://coc.heiyu100.cn/", target: "_blank" },
      { title: "coc统计", href: "http://clashofclansforecaster.com/", target: "_blank" },
      { title: "coc查看", href: "http://clashofstats.com/", target: "_blank" },
      { title: "coc指导", href: "http://cocservice.top/", target: "_blank" },
      { title: "CF", href: "https://cf.qq.com/", target: "_blank" },
      { title: "CFM", href: "https://cfm.qq.com/", target: "_blank" },
      { title: "Speed", href: "https://speed.qq.com/", target: "_blank" },
      { title: "SpeedM", href: "https://speedm.qq.com/", target: "_blank" },
      { title: "企鹅电竞", href: "https://egame.qq.com/", target: "_blank" },
      { title: "3DMgame", href: "https://www.3dmgame.com/", target: "_blank" },
      { title: "原神", href: "https://ys.mihoyo.com/#/", target: "_blank" }
    ]
  },
  {
    title: "其他",
    list: [
      { title: "康博嘉", href: "http://yun.kbjcc.cc/html/login.html?tc=jht001", target: "_blank" },
      { title: "景安", href: "http://www.zzidc.com/", target: "_blank" },
      { title: "蜂语", href: "http://w2.wx900.top/", target: "_blank" },
      { title: "BOSS直聘", href: "https://www.zhipin.com/", target: "_blank" },
      { title: "智联招聘", href: "https://www.zhaopin.com/", target: "_blank" },
      { title: "TMOOC", href: "http://www.tmooc.cn/", target: "_blank" },
      { title: "天眼查", href: "https://www.tianyancha.com/", target: "_blank" },
      { title: "牛客网", href: "http://nowcoder.com/", target: "_blank" },
      { title: "熊猫办公", href: "https://www.tukuppt.com/", target: "_blank" },
      { title: "草料二维码", href: "http://cli.im/", target: "_blank" },
      { title: "96编辑器", href: "http://bj.96weixin.com/", target: "_blank" },
      { title: "图怪兽", href: "https://818ps.com/", target: "_blank" },
      { title: "MAKA", href: "http://maka.im/", target: "_blank" },
      { title: "站长之家", href: "http://www.chinaz.com/", target: "_blank" },
      { title: "站酷", href: "https://www.zcool.com.cn/", target: "_blank" },
      { title: "全国征兵网", href: "https://www.gfbzb.gov.cn/", target: "_blank" },
      { title: "学信网", href: "https://www.chsi.com.cn/", target: "_blank" },
      { title: "便民查询网", href: "https://www.51240.com/", target: "_blank" },
      { title: "吾爱破解", href: "https://www.52pojie.cn/", target: "_blank" },
      { title: "天行数据", href: "http://www.tianapi.com/", target: "_blank" },
      { title: "源码之家", href: "https://www.mycodes.net/", target: "_blank" },
      { title: "苹果签名证书", href: "http://www.appuploader.net/", target: "_blank" },
      { title: "小贴画", href: "http://smallsticker.com/", target: "_blank" },
      { title: "api", href: "https://bird.ioliu.cn/", target: "_blank" },
      { title: "在线作图", href: "https://processon.com/", target: "_blank" }
    ]
  }
])

</script>

<style lang="less" scoped>

</style>
