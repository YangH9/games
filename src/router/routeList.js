export default [
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: () => import('@/views/home/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于' },
    component: () => import('@/views/about/index.vue'),
    children: [
      {
        path: '/about/minimart',
        name: 'about-minimart',
        meta: { title: '杂货铺' },
        component: () => import('@/views/about/minimart.vue')
      }
    ]
  },
  {
    path: '/study',
    name: 'study',
    meta: { title: '学习' },
    component: () => import('@/views/study/index.vue'),
    children: [
      {
        path: '/study/css-demo',
        name: 'css-demo',
        meta: { title: 'CSS特效' },
        redirect: '/study/css-demo/pikaqiu',
        component: () => import('@/views/study/css-demo/index.vue'),
        children: [
          {
            path: '/study/css-demo/pikaqiu',
            name: 'pikaqiu',
            meta: { title: 'CSS皮卡丘' },
            component: () => import('@/views/study/css-demo/pikaqiu.vue')
          },
          {
            path: '/study/css-demo/huitailang',
            name: 'huitailang',
            meta: { title: 'CSS灰太狼' },
            component: () => import('@/views/study/css-demo/huitailang.vue')
          },
          {
            path: '/study/css-demo/lanpangzi',
            name: 'lanpangzi',
            meta: { title: 'CSS蓝胖子' },
            component: () => import('@/views/study/css-demo/lanpangzi.vue')
          },
          {
            path: '/study/css-demo/madara',
            name: 'madara',
            meta: { title: 'CSS喵咪老师' },
            component: () => import('@/views/study/css-demo/madara.vue')
          },
          {
            path: '/study/css-demo/regular-polygon',
            name: 'regular-polygon',
            meta: { title: 'CSS正多边形' },
            component: () => import('@/views/study/css-demo/regular-polygon.vue')
          },
          {
            path: '/study/css-demo/border-effect',
            name: 'border-effect',
            meta: { title: 'CSS边框特效' },
            component: () => import('@/views/study/css-demo/border-effect.vue')
          },
          {
            path: '/study/css-demo/lcd-digital',
            name: 'lcd-digital',
            meta: { title: 'CSS液晶数字字体' },
            component: () => import('@/views/study/css-demo/lcd-digital.vue')
          },
          {
            path: '/study/css-demo/menu-effect',
            name: 'menu-effect',
            meta: { title: 'CSS菜单特效' },
            component: () => import('@/views/study/css-demo/menu-effect.vue')
          },
          {
            path: '/study/css-demo/button-effect',
            name: 'button-effect',
            meta: { title: 'CSS按钮特效' },
            component: () => import('@/views/study/css-demo/button-effect.vue')
          },
          {
            path: '/study/css-demo/icon',
            name: 'icon',
            meta: { title: 'CSS动画图标' },
            component: () => import('@/views/study/css-demo/icon.vue')
          },
          {
            path: '/study/css-demo/animation-clock',
            name: 'animation-clock',
            meta: { title: 'CSS动画时钟' },
            component: () => import('@/views/study/css-demo/animation-clock.vue')
          },
          {
            path: '/study/css-demo/nixie-tube-clock',
            name: 'nixie-tube-clock',
            meta: { title: '数码管时钟' },
            component: () => import('@/views/study/css-demo/nixie-tube-clock.vue')
          },
          {
            path: '/study/css-demo/sharingan',
            name: 'sharingan',
            meta: { title: 'CSS写轮眼' },
            component: () => import('@/views/study/css-demo/sharingan.vue')
          }
        ]
      },
      {
        path: '/study/note',
        name: 'note',
        meta: { title: '学习笔记' },
        redirect: '/study',
        children: [
          {
            path: '/study/note/basic',
            name: 'basic',
            meta: { title: '入门级基础知识' },
            component: () => import('@/views/study/note/basic.vue')
          },
          {
            path: '/study/note/html',
            name: 'html',
            meta: { title: 'HTML相关' },
            component: () => import('@/views/study/note/html.vue')
          },
          {
            path: '/study/note/css',
            name: 'css',
            meta: { title: 'CSS相关' },
            component: () => import('@/views/study/note/css.vue')
          },
          {
            path: '/study/note/ecma-script',
            name: 'ecma-script',
            meta: { title: 'ECMAScript' },
            component: () => import('@/views/study/note/ecma-script.vue')
          },
          {
            path: '/study/note/regular',
            name: 'regular',
            meta: { title: '正则基础知识' },
            component: () => import('@/views/study/note/regular.vue')
          },
          {
            path: '/study/note/git',
            name: 'git',
            meta: { title: 'git常用命令' },
            component: () => import('@/views/study/note/git.vue')
          },
          {
            path: '/study/note/npm',
            name: 'npm',
            meta: { title: 'npm常用命令' },
            component: () => import('@/views/study/note/npm.vue')
          },
          {
            path: '/study/note/command',
            name: 'command',
            meta: { title: '计算机常用命令快捷键' },
            component: () => import('@/views/study/note/command.vue')
          },
          {
            path: '/study/note/function',
            name: 'function',
            meta: { title: 'js常用方法封装' },
            component: () => import('@/views/study/note/function.vue')
          }
        ]
      },
      {
        path: '/study/other',
        name: 'other',
        meta: { title: '其他' },
        redirect: '/study',
        children: [
          {
            path: '/study/other/three',
            name: 'three',
            meta: { title: 'three' },
            component: () => import('@/views/study/other/three.vue')
          },
          {
            path: '/study/other/langchain',
            name: 'langchain',
            meta: { title: 'langchain' },
            component: () => import('@/views/study/other/langchain.vue')
          },
          {
            path: '/study/other/heart',
            name: 'heart',
            meta: { title: '心形图案' },
            component: () => import('@/views/study/other/heart.vue')
          },
          {
            path: '/study/other/meridian-flow-clock',
            name: 'meridian-flow-clock',
            meta: { title: '子午流注钟表' },
            component: () => import('@/views/study/other/meridian-flow-clock.vue')
          },
          {
            path: '/study/other/time-wheel',
            name: 'time-wheel',
            meta: { title: '时间轮盘' },
            component: () => import('@/views/study/other/time-wheel.vue')
          },
          {
            path: '/study/other/loading',
            name: 'loading',
            meta: { title: '加载动画' },
            component: () => import('@/views/study/other/loading.vue')
          },
          {
            path: '/study/other/progress',
            name: 'progress',
            meta: { title: '进度条' },
            component: () => import('@/views/study/other/progress.vue')
          },
          {
            path: '/study/other/apple-logo',
            name: 'apple-logo',
            meta: { title: 'Apple新年logo' },
            component: () => import('@/views/study/other/apple-logo.vue')
          },
          {
            path: '/study/other/code-rain',
            name: 'code-rain',
            meta: { title: '代码雨' },
            component: () => import('@/views/study/other/code-rain.vue')
          },
          {
            path: '/study/other/picture-in-picture',
            name: 'picture-in-picture',
            meta: { title: '画中画' },
            component: () => import('@/views/study/other/picture-in-picture.vue')
          },
          {
            path: '/study/other/teleprompter',
            name: 'teleprompter',
            meta: { title: '提词器' },
            component: () => import('@/views/study/other/teleprompter.vue')
          },
          {
            path: '/study/other/2024-spring-festival-gala',
            name: '2024-spring-festival-gala',
            meta: { title: '2024春晚' },
            component: () => import('@/views/study/other/2024-spring-festival-gala.vue')
          }
        ]
      },
      {
        path: '/study/component-demo',
        name: 'component-demo',
        meta: { title: '组件例子' },
        redirect: '/study',
        children: [
          {
            path: '/study/component-demo/search',
            name: 'search',
            meta: { title: '搜索' },
            component: () => import('@/views/study/component-demo/search.vue')
          },
          {
            path: '/study/component-demo/table-com',
            name: 'table-com',
            meta: { title: '表格组件' },
            component: () => import('@/views/study/component-demo/table-com.vue')
          },
          {
            path: '/study/component-demo/table1-ant',
            name: 'table1-ant',
            meta: { title: '表格1-ant' },
            component: () => import('@/views/study/component-demo/table1-ant.vue')
          },
          {
            path: '/study/component-demo/table1-el',
            name: 'table1-el',
            meta: { title: '表格1-el' },
            component: () => import('@/views/study/component-demo/table1-el.vue')
          },
          {
            path: '/study/component-demo/table2',
            name: 'table2',
            meta: { title: '表格2' },
            component: () => import('@/views/study/component-demo/table2.vue')
          },
          {
            path: '/study/component-demo/table3',
            name: 'table3',
            meta: { title: '表格3' },
            component: () => import('@/views/study/component-demo/table3.vue')
          },
          {
            path: '/study/component-demo/table4',
            name: 'table4',
            meta: { title: '表格4' },
            component: () => import('@/views/study/component-demo/table4.vue')
          },
          {
            path: '/study/component-demo/table5',
            name: 'table5',
            meta: { title: '表格5' },
            component: () => import('@/views/study/component-demo/table5.vue')
      
          },
          {
            path: '/study/component-demo/form-vform',
            name: 'form-vform',
            meta: { title: '低代码表单-vform' },
            component: () => import('@/views/study/component-demo/form-vform.vue')
          },
          {
            path: '/study/component-demo/form-formmaking',
            name: 'form-formmaking',
            meta: { title: '低代码表单-formmaking' },
            component: () => import('@/views/study/component-demo/form-formmaking.vue')    },
          {
            path: '/study/component-demo/richtext-tinymce',
            name: 'richtext-tinymce',
            meta: { title: '富文本-tinymce' },
            component: () => import('@/views/study/component-demo/richtext-tinymce.vue')
          },
          {
            path: '/study/component-demo/richtext-quill',
            name: 'richtext-quill',
            meta: { title: '富文本-quill' },
            component: () => import('@/views/study/component-demo/richtext-quill.vue')
          },
          {
            path: '/study/component-demo/richtext-canvaseditor',
            name: 'richtext-canvas-editor',
            meta: { title: '富文本-canvaseditor' },
            component: () => import('@/views/study/component-demo/richtext-canvaseditor.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/joy',
    name: 'joy',
    meta: { title: '娱乐' },
    component: () => import('@/views/joy/index.vue'),
    children: [
      {
        path: '/joy/games',
        name: 'games',
        meta: { title: '游戏' },
        redirect: '/joy',
        children: [
          {
            path: '/joy/games/game-history',
            name: 'game-history',
            meta: { title: '游戏历程时间轴' },
            component: () => import('@/views/joy/games/game-history.vue')
          },
          {
            path: '/joy/games/clash-of-clans',
            name: 'clash-of-clans',
            meta: { title: '部落冲突' },
            component: () => import('@/views/joy/games/clash-of-clans.vue')
          },
          {
            path: '/joy/games/catch-the-cat',
            name: 'catch-the-cat',
            meta: { title: '圈小猫' },
            component: () => import('@/views/joy/games/catch-the-cat.vue')
          },
          {
            path: '/joy/games/speed',
            name: 'speed',
            meta: { title: '飞车端游壁纸' },
            component: () => import('@/views/joy/games/speed.vue')
          },
          {
            path: '/joy/games/speedm',
            name: 'speedm',
            meta: { title: '飞车手游壁纸' },
            component: () => import('@/views/joy/games/speedm.vue')
          },
          {
            path: '/joy/games/speedm/atlas',
            name: 'speedmatlas',
            meta: { title: '飞车手游图鉴' },
            component: () => import('@/views/joy/games/speedm-atlas.vue')
          },
          {
            path: '/joy/games/cfm',
            name: 'cfm',
            meta: { title: '穿越火线手游壁纸' },
            component: () => import('@/views/joy/games/cfm.vue')
          },
          {
            path: '/joy/games/cfm/atlas',
            name: 'cfmatlas',
            meta: { title: '穿越火线手游图鉴' },
            component: () => import('@/views/joy/games/cfm-atlas.vue')
          },
          {
            path: '/joy/games/pvp',
            name: 'pvp',
            meta: { title: '王者荣耀壁纸' },
            component: () => import('@/views/joy/games/pvp.vue')
          },
          {
            path: '/joy/games/pvp/atlas',
            name: 'pvpatlas',
            meta: { title: '王者荣耀图鉴' },
            component: () => import('@/views/joy/games/pvp-atlas.vue')
          },
          {
            path: '/joy/games/minesweeper',
            name: 'minesweeper',
            meta: { title: '扫雷' },
            component: () => import('@/views/joy/games/minesweeper.vue')
          },
          {
            path: '/joy/games/sudoku',
            name: 'sudoku',
            meta: { title: '数独' },
            component: () => import('@/views/joy/games/sudoku.vue')
          }
        ]
      },
      {
        path: '/joy/tool',
        name: 'tool',
        meta: { title: '工具' },
        redirect: '/joy',
        children: [
          {
            path: '/joy/tool/device-info',
            name: 'device-info',
            meta: { title: '设备信息' },
            component: () => import('@/views/joy/tool/device-info.vue')
          },
          {
            path: '/joy/tool/calendar',
            name: 'calendar',
            meta: { title: '日历' },
            component: () => import('@/views/joy/tool/calendar.vue')
          },
          {
            path: '/joy/tool/birthdates',
            name: 'birthdates',
            meta: { title: '生辰八字查询' },
            component: () => import('@/views/joy/tool/birthdates.vue')
          },
          {
            path: '/joy/tool/solar-lunar',
            name: 'solar-lunar',
            meta: { title: '公历农历转换器' },
            component: () => import('@/views/joy/tool/solar-lunar.vue')
          },
          {
            path: '/joy/tool/toggle-case',
            name: 'toggle-case',
            meta: { title: '数字大小写转换器' },
            component: () => import('@/views/joy/tool/toggle-case.vue')
          },
          {
            path: '/joy/tool/listen',
            name: 'listen',
            meta: { title: '音乐播放器' },
            component: () => import('@/views/joy/tool/listen.vue')
          },
          {
            path: '/joy/tool/petpet',
            name: 'petpet',
            meta: { title: '摸头生成器' },
            component: () => import('@/views/joy/tool/petpet/index.vue')
          },
          {
            path: '/joy/tool/random',
            name: 'random',
            meta: { title: '随机数生成器' },
            component: () => import('@/views/joy/tool/random.vue')
          },
          {
            path: '/joy/tool/gray-head',
            name: 'gray-head',
            meta: { title: '灰色头像生成器' },
            component: () => import('@/views/joy/tool/gray-head.vue')
          },
          {
            path: '/joy/tool/avatar-editor',
            name: 'avatar-editor',
            meta: { title: '国庆红旗头像生成器' },
            component: () => import('@/views/joy/tool/avatar-editor.vue')
          },
          {
            path: '/joy/tool/qrcode',
            name: 'qrcode',
            meta: { title: '链接二维码生成器' },
            component: () => import('@/views/joy/tool/qrcode.vue')
          },
          {
            path: '/joy/tool/app-store',
            name: 'app-store',
            meta: { title: 'appStore应用搜索' },
            component: () => import('@/views/joy/tool/app-store.vue')
          },
          {
            path: '/joy/tool/operator-points-redemption',
            name: 'operator-points-redemption',
            meta: { title: '运营商积分兑换话费' },
            component: () => import('@/views/joy/tool/operator-points-redemption.vue')
          },
          {
            path: '/joy/tool/life-time',
            name: 'life-time',
            meta: { title: '人生进度表' },
            component: () => import('@/views/joy/tool/life-time.vue')
          },
          {
            path: '/joy/tool/ceramic-tile-wall',
            name: 'ceramic-tile-wall',
            meta: { title: '瓷砖墙' },
            component: () => import('@/views/joy/tool/ceramic-tile-wall.vue')
          },
          {
            path: '/joy/tool/skeuomorphism',
            name: 'skeuomorphism',
            meta: { title: 'CSS新拟态设计风格生成器' },
            component: () => import('@/views/joy/tool/skeuomorphism.vue')
          },
          {
            path: '/joy/tool/glassmorphism',
            name: 'glassmorphism',
            meta: { title: 'CSS玻璃拟物化风格生成器' },
            component: () => import('@/views/joy/tool/glassmorphism.vue')
          }
        ]
      },
      {
        path: '/joy/festival',
        name: 'festival',
        meta: { title: '节日欢庆' },
        redirect: '/joy',
        children: [
          {
            path: '/joy/festival/newyear',
            name: 'newyear',
            meta: { title: '新年烟花' },
            component: () => import('@/views/joy/festival/newyear.vue')
          }
        ]
      }
    ]
  },
  {
    path: '/links',
    name: 'links',
    meta: { title: '链接' },
    component: () => import('@/views/links/index.vue'),
    children: [
      {
        path: '/links/tencent-links',
        name: 'tencent-links',
        meta: { title: '腾讯链接' },
        component: () => import('@/views/links/tencent-links.vue')
      },
      {
        path: '/links/minecraft-bookmark',
        name: 'minecraft-bookmark',
        meta: { title: '我的世界书签收录' },
        component: () => import('@/views/links/minecraft-bookmark.vue')
      },
      {
        path: '/links/css-tool',
        name: 'css-tool',
        meta: { title: 'CSS工具收录' },
        component: () => import('@/views/links/css-tool.vue')
      },
      {
        path: '/links/chart-gpt-free',
        name: 'chart-gpt-free',
        meta: { title: 'ChartGPT免费链接' },
        component: () => import('@/views/links/chart-gpt-free.vue')
      }
    ]
  },
  {
    path: '/resources',
    name: 'resources',
    meta: { title: '资源分享' },
    component: () => import('@/views/resources/index.vue')
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404(NotFound)' },
    component: () => import('@/views/error-pages/404.vue')
  }
]
