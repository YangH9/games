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

<script setup lang="jsx">
import Header from '@/components/Header.vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import RouterViewBox from '@/components/RouterViewBox.vue'

const studyList = [
  {
    title: 'CSS特效',
    list: [
      { title: '皮卡丘', href: '/study/css-demo/pikaqiu' },
      { title: '灰太狼', href: '/study/css-demo/huitailang' },
      { title: '蓝胖子', href: '/study/css-demo/lanpangzi' },
      { title: '喵咪老师', href: '/study/css-demo/madara' },
      { title: '正多边形', href: '/study/css-demo/regular-polygon' },
      { title: '正多边形（SVG）', href: '/study/css-demo/regular-polygon-svg' },
      { title: '边框特效', href: '/study/css-demo/border-effect' },
      { title: '液晶数字字体', href: '/study/css-demo/lcd-digital' },
      { title: '液晶数字字体（SVG）', href: '/study/css-demo/lcd-digital-svg' },
      { title: '菜单特效', href: '/study/css-demo/menu-effect' },
      { title: '按钮特效', href: '/study/css-demo/button-effect' },
      { title: '动画图标', href: '/study/css-demo/icon' },
      { title: '动画时钟', href: '/study/css-demo/animation-clock' },
      { title: '液晶数字时钟', href: '/study/css-demo/nixie-tube-clock' },
      { title: '写轮眼', href: '/study/css-demo/sharingan' }
    ]
  },
  {
    title: '学习笔记',
    list: [
      { title: '入门级基础知识', href: '/study/note/basic' },
      { title: 'HTML相关', href: '/study/note/html' },
      { title: 'CSS相关', href: '/study/note/css' },
      { title: 'ECMAScript', href: '/study/note/ecma-script' },
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
      { title: 'threejs', href: '/study/other/three' },
      { title: 'LangChain-ChartGPT', href: '/study/other/langchain' },
      { title: '各种心形图案', href: '/study/other/heart' },
      { title: '时间轮盘', href: '/study/other/time-wheel' },
      { title: '子午流注钟表', href: '/study/other/meridian-flow-clock' },
      { title: '加载动画', href: '/study/other/loading' },
      { title: '进度条', href: '/study/other/progress' },
      { title: 'Apple新年logo', href: '/study/other/apple-logo' },
      { title: '代码雨', href: '/study/other/code-rain' },
      { title: '画中画', href: '/study/other/picture-in-picture' },
      { title: '提词器', href: '/study/other/teleprompter' },
      { title: '2024春晚', href: '/study/other/2024-spring-festival-gala' },
      { title: '虚拟摇杆', href: '/study/other/virtual-joystick' }
    ]
  },
  {
    title: '各种功能组件',
    list: [
      { title: '搜索', href: '/study/component-demo/search' },
      { title: '表格组件', href: '/study/component-demo/table-com' },
      { title: '表格1-ant', href: '/study/component-demo/table1-ant' },
      { title: '表格1-el', href: '/study/component-demo/table1-el' },
      { title: '表格2', href: '/study/component-demo/table2' },
      { title: '表格3', href: '/study/component-demo/table3' },
      { title: '表格4', href: '/study/component-demo/table4' },
      { title: '表格5', href: '/study/component-demo/table5' },
      { title: '低代码表单-vform', href: '/study/component-demo/form-vform' },
      { title: '低代码表单-formmaking', href: '/study/component-demo/form-formmaking' },
      { title: '富文本-tinymce', href: '/study/component-demo/richtext-tinymce' },
      { title: '富文本-quill', href: '/study/component-demo/richtext-quill' },
      { title: '富文本-canvaseditor', href: '/study/component-demo/richtext-canvaseditor' }
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
