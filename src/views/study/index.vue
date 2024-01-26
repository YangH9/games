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
              :href="`${$router.options.history.base}${item.href}`"
              :title="item.title"
              size="large"
            >
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

const studyList = [
  {
    title: 'CSS特效',
    list: [
      { title: '皮卡丘', href: '/study/cssDemo/pikaqiu' },
      { title: '灰太狼', href: '/study/cssDemo/huitailang' },
      { title: '蓝胖子', href: '/study/cssDemo/lanpangzi' },
      { title: '喵咪老师', href: '/study/cssDemo/madara' },
      { title: '正多边形', href: '/study/cssDemo/regularPolygon' },
      { title: '边框特效', href: '/study/cssDemo/borderEffect' },
      { title: '液晶数字字体', href: '/study/cssDemo/LCDDigital' },
      { title: '菜单特效', href: '/study/cssDemo/menuEffect' },
      { title: '按钮特效', href: '/study/cssDemo/buttonEffect' },
      { title: '动画图标', href: '/study/cssDemo/icon' },
      { title: '动画时钟', href: '/study/cssDemo/animationClock' },
      { title: '数码管时钟', href: '/study/cssDemo/nixieTubeClock' },
      { title: '写轮眼', href: '/study/cssDemo/sharingan' }
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
      { title: '各种心形图案', href: '/study/other/heart' },
      { title: '时间轮盘', href: '/study/other/timeWheel' },
      { title: '加载动画', href: '/study/other/loading' },
      { title: '进度条', href: '/study/other/progress' },
      { title: 'Apple新年logo', href: '/study/other/applelogo' },
      { title: '代码雨', href: '/study/other/codeRain' },
      { title: '画中画', href: '/study/other/pictureInPicture' },
      { title: '提词器', href: '/study/other/teleprompter' }
    ]
  },
  {
    title: '各种功能组件',
    list: [
      { title: '搜索', href: '/study/componentDemo/search' },
      { title: '表格1-ant', href: '/study/componentDemo/table1_ant' },
      { title: '表格1-el', href: '/study/componentDemo/table1_el' },
      { title: '表格2', href: '/study/componentDemo/table2' },
      { title: '表单1', href: '/study/componentDemo/form1' },
      { title: '低代码表单', href: '/study/componentDemo/form2' }
    ]
  }
]

const qqList = [
  { title: '👨‍👦‍👦前端程序员交流 (687041277)', href: 'https://jq.qq.com/?_wv=1027&k=wSi5TUnM' },
  { title: '👨‍👦‍👦后端程序员交流 (527121526)', href: 'https://jq.qq.com/?_wv=1027&k=PXkCkxA8' },
  { title: '👨‍👦‍👦前端开发工程师交流 (153700736)', href: 'https://jq.qq.com/?_wv=1027&k=rSylFS04' }
]
</script>

<style scoped lang="scss"></style>
