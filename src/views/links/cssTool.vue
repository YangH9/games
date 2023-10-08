<template>
  <div class="container">
    <Breadcrumb />
    <a-card v-for="(main, index) of dataList" :key="index" :title="main.title" class="mb_2" :hoverable="true">
      <a-button v-for="(item, index1) of main.list" :key="index1" :href="item.href" :title="item.title" size="large" target="_blank">
        <template #icon>
          <img v-lazy="filtterUrl(item)" class="icon" referrer="no-referrer" @error="(e) => (e.target.style.display = 'none')" />
        </template>
        {{ item.title }}
      </a-button>
      <a-button v-for="i of 10" :key="i" class="seat"></a-button>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

const dataList = [
  {
    title: '属性生成器',
    list: [
      { title: '新拟态生成器', href: 'https://neumorphism.io/', favicon: '' },
      { title: '阴影生成器', href: 'https://shadows.brumm.af/', favicon: '' },
      { title: '花式边框', href: 'https://9elements.github.io/fancy-border-radius/', favicon: 'fancy-border-radius/favicon-32x32.png' },
      { title: '发光效果', href: 'https://cssbud.com/css-generator/css-glow-generator/', favicon: '' },
      { title: '回旋曲线圆角', href: 'https://onotakehiko.dev/clothoid/', favicon: 'clothoid/favicon.ico' },
      { title: '毛玻璃', href: 'https://hype4.academy/tools/glassmorphism-generator', favicon: '' },
      { title: '复杂形状裁切', href: 'https://bennettfeely.com/clippy/', favicon: 'clippy/pics/favicon.png' },
      { title: '图片滤镜', href: 'https://www.cssfilters.co/', favicon: 'images/icons/favicon-32x32.png' },
      { title: 'Base64 Image', href: 'https://www.base64-image.de/', favicon: '' },
      { title: 'css查询器', href: 'https://quantityqueries.com/', favicon: 'images/icon.png' }
    ]
  },
  {
    title: '动画',
    list: [
      { title: '动画生成器', href: 'https://animista.net/play', favicon: '' },
      { title: '三次贝塞尔曲线', href: 'https://cubic-bezier.com/', favicon: '' },
      { title: '关键帧动画', href: 'https://keyframes.app/animate', favicon: 'img/icons/favicon-52.png' },
      { title: '延迟动画', href: 'https://waitanimate.wstone.uk/', favicon: 'images/favicon-32x32.png' },
      { title: '过渡动画', href: 'https://www.transition.style/', favicon: 'favicon.png' }
    ]
  },
  {
    title: '背景',
    list: [
      { title: '图案背景', href: 'https://heropatterns.com/', favicon: '' },
      { title: '背景生成', href: 'https://app.haikei.app/', favicon: '' },
      { title: '花样背景', href: 'https://doodad.dev/pattern-generator/', favicon: '' },
      { title: '图案背景', href: 'https://css-pattern.com/', favicon: 'fav.png' },
      { title: '条纹背景', href: 'https://patternizer.com/', favicon: '' },
      { title: '老式花样背景', href: 'http://www.patternify.com/', favicon: '' },
      { title: '模糊动画背景', href: 'https://wweb.dev/resources/animated-css-background-generator/', favicon: '' },
      { title: '几何背景', href: 'https://trianglify.io/', favicon: 'favicon.png' },
      { title: '动画背景', href: 'https://animatedbackgrounds.me/', favicon: '' },
      { title: '魔法图案背景', href: 'https://www.magicpattern.design/tools/css-backgrounds', favicon: 'static/favicons/favicon.ico' }
    ]
  },
  {
    title: '颜色',
    list: [
      { title: '渐变颜色', href: 'https://cssgradient.io/', favicon: 'images/favicon-23859487.png' },
      { title: '颜色编辑器', href: 'https://colormixer.web.app/', favicon: 'favicon@2x.png' },
      { title: '配色方案', href: 'https://palettte.app/', favicon: '' },
      { title: '色系调色板', href: 'https://paletton.com/', favicon: '' },
      { title: '渐变色', href: 'https://www.grabient.com/', favicon: '' },
      { title: '调色板', href: 'https://colorhunt.co/', favicon: 'img/colorhunt-favicon.svg' },
      { title: '贝塞尔渐变色', href: 'https://larsenwork.com/easing-gradients/#editor', favicon: '' },
      { title: '调色板', href: 'https://flatuicolors.com/', favicon: 'static/favicon.ico' },
      { title: '颜色工具', href: 'https://colordesigner.io/tools', favicon: 'favicons/favicon.ico' },
      { title: '图片取色', href: 'https://colorpalettes.earth/', favicon: '' }
    ]
  },
  {
    title: '字体排版',
    list: [
      { title: '字体搭配', href: 'https://fontjoy.com/', favicon: 'favicon32.gif' },
      { title: '文字属性预览', href: 'https://typesetwith.me/', favicon: '' },
      { title: '字体大小', href: 'https://type-scale.com/', favicon: 'wp-content/themes/typescale/favicon/favicon.ico' },
      { title: '图标字体', href: 'https://glyphter.com/', favicon: '' },
      { title: '字体库', href: 'https://katydecorah.com/font-library', favicon: '' },
      { title: '发光文字', href: 'https://wh0.github.io/glitter/', favicon: '' }
    ]
  },
  {
    title: '加载器动画',
    list: [
      { title: '加载动画', href: 'https://tobiasahlin.com/spinkit/', favicon: 'images/favicon.ico' },
      { title: '加载动画', href: 'https://whirl.netlify.app/', favicon: '' },
      { title: '加载动画', href: 'https://www.cssportal.com/css-loader-generator/', favicon: '' },
      { title: '加载动画', href: 'https://projects.lukehaas.me/css-loaders/', favicon: '' },
      { title: '加载动画', href: 'https://cssloaders.github.io/', favicon: 'images/favicon-32x32.png' },
      { title: '加载动画', href: 'https://loading.io/css/', favicon: 'favicon.ico' }
    ]
  },
  {
    title: '布局',
    list: [
      { title: '网格布局练习器', href: 'https://cssgridgarden.com/', favicon: '' },
      { title: '弹性布局练习器', href: 'https://flexboxfroggy.com/', favicon: '' },
      { title: '弹性布局可视化', href: 'https://bennettfeely.com/flexplorer/', favicon: 'flexplorer/flexfavicon.png' },
      { title: '交互式弹性布局', href: 'https://www.flexulator.com/', favicon: '' },
      { title: '网格模板', href: 'https://cssgrid-generator.netlify.app/', favicon: '' },
      { title: '布局制作', href: 'https://layout.bradwoods.io/', favicon: '' },
      { title: '盒子模型演示', href: 'https://codepen.io/carolineartz/full/ogVXZj', favicon: '' }
    ]
  },
  {
    title: '信息',
    list: [
      { title: 'CSS历史', href: 'https://css-timeline.vercel.app/', favicon: '' },
      { title: '屏幕尺寸', href: 'https://screensizemap.com/', favicon: '' },
      { title: '属性单位查看', href: 'https://katydecorah.com/css-ruler/', favicon: '' },
      { title: '十六进制颜色', href: 'http://bada55.io/', favicon: '' },
      { title: '检查颜色组合', href: 'https://www.whocanuse.com/', favicon: '' },
      { title: '浏览器兼容性检查', href: 'https://caniuse.com/', favicon: 'img/favicon-128.png' },
      { title: 'css属性兼容性', href: 'https://www.caniemail.com/', favicon: '' },
      { title: 'css语言类型转换', href: 'https://codebeautify.org/css-tools', favicon: 'img/cb.png' },
      { title: '统计网页中的css', href: 'https://unused-css.com/', favicon: '' },
      { title: '组件搜索', href: 'https://component.gallery/', favicon: 'favicon-32x32.png' }
    ]
  }
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
    span {
      max-width: 270px;
      line-height: normal;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
  }

  &::before,
  &::after {
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
