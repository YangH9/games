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
                :src="`${item.href.split('/')[0]}//${item.href.split('/')[2]}/favicon.ico`"
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
      { title: "【腾讯云】推广者专属福利，新客户无门槛领取总价值高达2860元代金券，每种代金券限量500张，先到先得。", href: "https://cloud.tencent.com/act/cps/redirect?redirect=1062&cps_key=42dc10103f6f6935ce4d5a47e1cefa80&from=console" },
      { title: "「新浪云福利」1000云豆免费领！低成本、免运维、灵活、安全稳定，轻松应对业务爆发式增长，一起来用吧！", href: "https://www.sinacloud.com/public/login/inviter/gaimrn-mddmzeKWrhKWvrYKIo619nptqfqKqdg.html" },
      { title: "宝塔服务器面板，一键全能部署及管理，送你3188元礼包，点我领取", href: "https://www.bt.cn/?invite_code=MV9wb3Npdmw=" },
      { title: "天行数据API接口", href: "https://www.tianapi.com/source/9897a82ddb" },
      { title: "程序猿必备小贴纸", href: "https://www.smallsticker.com/" }
    ]
  },
  {
    title: "网站收录",
    list: [
      { title: "百度资源搜索平台", href: "https://ziyuan.baidu.com/" },
      { title: "必应网站管理员工具", href: "https://www.bing.com/toolbox/webmaster/" },
      { title: "360站长平台", href: "http://zhanzhang.so.com/" },
      { title: "谷歌收录", href: "http://www.google.cn/intl/zh-CN/add_url.html" },
      { title: "搜狗站长平台", href: "http://zhanzhang.sogou.com/" },
      { title: "神马站长平台", href: "https://zhanzhang.sm.cn/" }
    ]
  },
  {
    title: "常用",
    list: [
      { title: "百度", href: "https://www.baidu.com/" },
      { title: "百度翻译", href: "https://fanyi.baidu.com/" },
      { title: "百度地图", href: "https://map.baidu.com/" },
      { title: "百度地图开放平台", href: "http://lbsyun.baidu.com/" },
      { title: "腾讯地图", href: "https://map.qq.com/" },
      { title: "MDN", href: "https://developer.mozilla.org/zh-CN/" },
      { title: "w3school", href: "https://www.w3school.com.cn/" },
      { title: "菜鸟教程", href: "https://www.runoob.com/" },
      { title: "ESLint", href: "https://cn.eslint.org/" },
      { title: "dcloud", href: "https://www.dcloud.io/" },
      { title: "极光", href: "https://www.jiguang.cn/" },
      { title: "docschina", href: "https://docschina.org/" }
    ]
  },
  {
    title: "腾讯",
    list: [
      { title: "腾讯扣叮", href: "https://coding.qq.com/" },
      { title: "腾讯文档", href: "https://docs.qq.com/" },
      { title: "ProWork", href: "https://prowork.qq.com/" },
      { title: "腾讯问卷", href: "https://wj.qq.com/" },
      { title: "腾讯兔小巢", href: "https://txc.qq.com/" },
      { title: "CoDesign", href: "https://codesign.qq.com/" },
      { title: "AIDesign", href: "https://ailogo.qq.com/" },
      { title: "TDesign", href: "https://tdesign.tencent.com/" },
      { title: "腾讯工蜂", href: "https://code.tencent.com/" },
      { title: "腾讯GCLOUD", href: "https://gcloud.tencent.com/" },
      { title: "蓝鲸智云", href: "https://bk.tencent.com/" },
      { title: "腾讯开源", href: "https://opensource.tencent.com/" }
    ]
  },
  {
    title: "码农",
    list: [
      { title: "vuejs", href: "https://cn.vuejs.org/" },
      { title: "DCloud", href: "https://www.dcloud.io/" },
      { title: "uni-app", href: "https://uniapp.dcloud.net.cn/" },
      { title: "angularjs", href: "https://angular.cn/" },
      { title: "Bootstrap", href: "https://www.bootcss.com/" },
      { title: "sass", href: "https://www.sass.hk/" },
      { title: "less", href: "http://lesscss.cn/" },
      { title: "threejs", href: "https://threejs.docschina.org/", code: "https://threejs.org/" },
      { title: "ThingJS", href: "http://www.thingjs.com/guide/" },
      { title: "ECharts", href: "http://echarts.apache.org/zh/index.html" },
      { title: "jquery", href: "https://www.jquery123.com/" },
      { title: "jQuery插件库", href: "http://jq22.com/" },
      { title: "Redis", href: "https://redis.cn/" },
      { title: "Babel", href: "https://www.babeljs.cn/" },
      { title: "Electron", href: "http://www.electronjs.org/" },
      { title: "fullCalendar日程插件", href: "https://fullcalendar.io/" },
      { title: "Nuxt.js", href: "https://www.nuxtjs.cn/" },
      { title: "Socket.IO", href: "https://socket.io/" },
      { title: "webpack", href: "https://webpack.docschina.org/" },
      { title: "Mint-UI", href: "http://mint-ui.github.io/#!/zh-cn" },
      { title: "Element-UI", href: "https://element.eleme.cn/#/zh-CN" },
      { title: "Ant Design Vue", href: "https://www.antdv.com/docs/vue/introduce-cn/" },
      { title: "Layui", href: "https://www.layui.com/" },
      { title: "Vant", href: "https://youzan.github.io/vant/#/zh-CN/" },
      { title: "VUX", href: "https://vux.li/" },
      { title: "iView-UI", href: "https://www.iviewui.com/" },
      { title: "React Native", href: "https://reactnative.cn/" },
      { title: "Ant Design", href: "https://ant.design/" },
      { title: "Element-React-UI", href: "https://elemefe.github.io/element-react" },
      { title: "Node.js", href: "http://nodejs.cn/" },
      { title: "egg", href: "https://eggjs.org/zh-cn/" },
      { title: "Express", href: "http://expressjs.com/zh-cn/" },
      { title: "GitHub", href: "http://github.com/" },
      { title: "码云", href: "https://gitee.com/" },
      { title: "TortoiseGit", href: "https://tortoisegit.org/" },
      { title: "iconfont图标", href: "http://iconfont.cn/" },
      { title: "凡科网", href: "http://fkw.com/" },
      { title: "腾讯云", href: "https://cloud.tencent.com/" },
      { title: "新浪云", href: "https://www.sinacloud.com/" },
      { title: "阿里云", href: "https://www.aliyun.com/" },
      { title: "码市", href: "https://codemart.com/" },
      { title: "QQ小程序", href: "http://q.qq.com/" },
      { title: "腾讯开放平台", href: "http://om.qq.com/" },
      { title: "微信公众平台", href: "https://mp.weixin.qq.com/" },
      { title: "微信开放平台", href: "https://open.weixin.qq.com/" },
      { title: "赛码网", href: "http://www.acmcoder.com/" },
      { title: "蓝湖", href: "https://lanhuapp.com/" }
    ]
  },
  {
    title: "办公",
    list: [
      { title: "QQ邮箱", href: "https://mail.qq.com/" },
      { title: "163邮箱", href: "https://mail.163.com/" },
      { title: "微博", href: "http://www.weibo.com/" },
      { title: "QQ空间", href: "https://qzone.qq.com/" },
      { title: "蓝湖", href: "https://lanhuapp.com/" },
      { title: "worktile", href: "https://worktile.com/" },
      { title: "站酷", href: "https://www.zcool.com.cn/" },
      { title: "哔哩哔哩", href: "https://www.bilibili.com/" }
    ]
  },
  {
    title: "娱乐",
    list: [
      { title: "京东", href: "http://jd.com/" },
      { title: "小米", href: "https://www.mi.com/" },
      { title: "Apple", href: "http://apple.com.cn/" },
      { title: "淘宝", href: "http://taobao.com/" },
      { title: "千牛", href: "https://myseller.taobao.com/" },
      { title: "黑羽", href: "http://coc.heiyu100.cn/" },
      { title: "coc统计", href: "http://clashofclansforecaster.com/" },
      { title: "coc查看", href: "http://clashofstats.com/" },
      { title: "coc指导", href: "http://cocservice.top/" },
      { title: "CF", href: "https://cf.qq.com/" },
      { title: "CFM", href: "https://cfm.qq.com/" },
      { title: "Speed", href: "https://speed.qq.com/" },
      { title: "SpeedM", href: "https://speedm.qq.com/" },
      { title: "企鹅电竞", href: "https://egame.qq.com/" },
      { title: "3DMgame", href: "https://www.3dmgame.com/" },
      { title: "原神", href: "https://ys.mihoyo.com/#/" }
    ]
  },
  {
    title: "其他",
    list: [
      { title: "康博嘉", href: "http://yun.kbjcc.cc/html/login.html?tc=jht001" },
      { title: "景安", href: "http://www.zzidc.com/" },
      { title: "蜂语", href: "http://w2.wx900.top/" },
      { title: "BOSS直聘", href: "https://www.zhipin.com/" },
      { title: "智联招聘", href: "https://www.zhaopin.com/" },
      { title: "TMOOC", href: "http://www.tmooc.cn/" },
      { title: "天眼查", href: "https://www.tianyancha.com/" },
      { title: "牛客网", href: "http://nowcoder.com/" },
      { title: "熊猫办公", href: "https://www.tukuppt.com/" },
      { title: "草料二维码", href: "http://cli.im/" },
      { title: "96编辑器", href: "http://bj.96weixin.com/" },
      { title: "图怪兽", href: "https://818ps.com/" },
      { title: "MAKA", href: "http://maka.im/" },
      { title: "站长之家", href: "http://www.chinaz.com/" },
      { title: "站酷", href: "https://www.zcool.com.cn/" },
      { title: "全国征兵网", href: "https://www.gfbzb.gov.cn/" },
      { title: "学信网", href: "https://www.chsi.com.cn/" },
      { title: "便民查询网", href: "https://www.51240.com/" },
      { title: "吾爱破解", href: "https://www.52pojie.cn/" },
      { title: "天行数据", href: "http://www.tianapi.com/" },
      { title: "源码之家", href: "https://www.mycodes.net/" },
      { title: "苹果签名证书", href: "http://www.appuploader.net/" },
      { title: "小贴画", href: "http://smallsticker.com/" },
      { title: "api", href: "https://bird.ioliu.cn/" },
      { title: "在线作图", href: "https://processon.com/" }
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
  display: inline-block;
}
</style>
