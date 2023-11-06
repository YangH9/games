<template>
  <a-layout>
    <Header></Header>
    <a-layout v-calcHeight="0" class="scroll_auto">
      <RouterViewBox url="/study">
        <div class="container">
          <Breadcrumb />
          <a-card
            v-for="(main, index) in studyList"
            :key="index"
            :title="main.title"
            class="card_button_list"
            :hoverable="true"
          >
            <a-button
              v-for="(item, index1) in main.list"
              :key="index1"
              :href="item.href"
              :title="item.title"
              size="large"
            >
              <RouterLink :to="item.href">{{ item.title }}</RouterLink>
            </a-button>
            <a-button v-for="i in 10" :key="i" class="seat"></a-button>
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
            <a-button v-for="i in 10" :key="i" class="seat"></a-button>
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

const studyList = [
  {
    title: 'CSS特效',
    list: [
      { title: '皮卡丘', href: '/study/demo/pikaqiu' },
      { title: '灰太狼', href: '/study/demo/huitailang' },
      { title: '蓝胖子', href: '/study/demo/lanpangzi' },
      { title: '喵咪老师', href: '/study/demo/madara' },
      { title: '正多边形', href: '/study/demo/regularPolygon' },
      { title: '边框特效', href: '/study/demo/borderEffect' },
      { title: '液晶数字字体', href: '/study/demo/LCDDigital' },
      { title: '菜单特效', href: '/study/demo/menuEffect' },
      { title: '按钮特效', href: '/study/demo/buttonEffect' },
      { title: '动画图标', href: '/study/demo/icon' },
      { title: '动画时钟', href: '/study/demo/animationClock' },
      { title: '数码管时钟', href: '/study/demo/nixieTubeClock' },
      { title: '写轮眼', href: '/study/demo/sharingan' }
    ]
  },
  {
    title: '学习笔记',
    list: [
      { title: '入门级基础知识', href: '/study/note/basic' },
      { title: 'HTML相关', href: '/study/note/html' },
      { title: 'CSS相关', href: '/study/note/css' },
      { title: 'ECMAScript', href: '/study/note/ecmascript' },
      { title: '正则基础知识', href: '/study/note/regular' },
      { title: 'git常用命令', href: '/study/note/git' },
      { title: 'npm常用命令', href: '/study/note/npm' },
      { title: '计算机常用命令快捷键', href: '/study/note/command' },
      { title: 'js常用方法封装', href: '/study/note/function' }
    ]
  },
  {
    title: '其他',
    list: [
      { title: '加载动画', href: '/study/other/loading' },
      { title: '进度条', href: '/study/other/progress' },
      { title: 'Apple新年logo', href: '/study/other/applelogo' },
      { title: '代码雨', href: '/study/other/codeRain' },
      { title: '画中画', href: '/study/other/pictureInPicture' },
      { title: '提词器', href: '/study/other/teleprompter' }
    ]
  }
]

const qqList = [
  { title: '👨‍👦‍👦前端程序员交流 (687041277)', href: 'https://jq.qq.com/?_wv=1027&k=wSi5TUnM' },
  { title: '👨‍👦‍👦后端程序员交流 (527121526)', href: 'https://jq.qq.com/?_wv=1027&k=PXkCkxA8' },
  { title: '👨‍👦‍👦前端开发工程师交流 (153700736)', href: 'https://jq.qq.com/?_wv=1027&k=rSylFS04' }
]
</script>

<style lang="scss" scoped></style>
