// 只能使用字面量引入，一组/*为一层文件夹
const modules = import.meta.glob(['@/views/*.vue', '@/views/*/*.vue', '@/views/*/*/*.vue', '@/views/*/*/*/*.vue'])
console.log(modules)

/**
 * @description: 辅助处理路由表信息，减少数据量
 * component：src/views/下的文件路径
 * { component: 'home/overview' } => { path: '/home/overview', name: '/home/overview', component1: () => import('@/views/home/overview.vue') }
 * 过滤index路径，home/index => home
 */
const createRoute = list => {
  list.map(item => {
    // 添加path
    !Object.hasOwn(item, 'path') && (item.path = `/${item.component}`.replace(/(\/index)$/, ''))
    // 添加name
    !Object.hasOwn(item, 'name') && (item.name = item.component?.replace(/\//g, '_'))
    Object.hasOwn(item, 'component') &&
      (item.component = modules[`/src/views/${item.component}.vue`] || modules['/src/views/errorPages/404.vue'])
    // 添加是否有子元素选择、
    !Object.hasOwn(item, 'has_children') && (item.has_children = Object.hasOwn(item, 'children'))
    Object.hasOwn(item, 'children') && createRoute(item.children)
    // 添加默认数据，防止空数据
    !item.meta && (item.meta = { title: item.name, icon: 'Document' })
  })
  return list
}

export default createRoute([
  {
    path: '/',
    name: 'home',
    meta: { title: '首页' },
    component: 'home/index'
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: '关于' },
    component: 'about/index',
    children: [
      {
        path: '/about/minimart',
        name: 'aboutMinimart',
        meta: { title: '杂货铺' },
        component: 'about/minimart'
      }
    ]
  },
  {
    path: '/study',
    name: 'study',
    meta: { title: '学习' },
    component: 'study/index',
    children: [
      {
        path: '/study/cssDemo',
        name: 'cssDemo',
        meta: { title: 'CSS特效' },
        redirect: '/study/cssDemo/pikaqiu',
        component: 'study/cssDemo/index',
        children: [
          {
            path: '/study/cssDemo/pikaqiu',
            name: 'pikaqiu',
            meta: { title: 'CSS皮卡丘' },
            component: 'study/cssDemo/pikaqiu'
          },
          {
            path: '/study/cssDemo/huitailang',
            name: 'huitailang',
            meta: { title: 'CSS灰太狼' },
            component: 'study/cssDemo/huitailang'
          },
          {
            path: '/study/cssDemo/lanpangzi',
            name: 'lanpangzi',
            meta: { title: 'CSS蓝胖子' },
            component: 'study/cssDemo/lanpangzi'
          },
          {
            path: '/study/cssDemo/madara',
            name: 'madara',
            meta: { title: 'CSS喵咪老师' },
            component: 'study/cssDemo/madara'
          },
          {
            path: '/study/cssDemo/regularPolygon',
            name: 'regularPolygon',
            meta: { title: 'CSS正多边形' },
            component: 'study/cssDemo/regularPolygon'
          },
          {
            path: '/study/cssDemo/borderEffect',
            name: 'borderEffect',
            meta: { title: 'CSS边框特效' },
            component: 'study/cssDemo/borderEffect'
          },
          {
            path: '/study/cssDemo/LCDDigital',
            name: 'LCDDigital',
            meta: { title: 'CSS液晶数字字体' },
            component: 'study/cssDemo/LCDDigital'
          },
          {
            path: '/study/cssDemo/menuEffect',
            name: 'menuEffect',
            meta: { title: 'CSS菜单特效' },
            component: 'study/cssDemo/menuEffect'
          },
          {
            path: '/study/cssDemo/buttonEffect',
            name: 'buttonEffect',
            meta: { title: 'CSS按钮特效' },
            component: 'study/cssDemo/buttonEffect'
          },
          {
            path: '/study/cssDemo/icon',
            name: 'icon',
            meta: { title: 'CSS动画图标' },
            component: 'study/cssDemo/icon'
          },
          {
            path: '/study/cssDemo/animationClock',
            name: 'animationClock',
            meta: { title: 'CSS动画时钟' },
            component: 'study/cssDemo/animationClock'
          },
          {
            path: '/study/cssDemo/nixieTubeClock',
            name: 'nixieTubeClock',
            meta: { title: '数码管时钟' },
            component: 'study/cssDemo/nixieTubeClock'
          },
          {
            path: '/study/cssDemo/sharingan',
            name: 'sharingan',
            meta: { title: 'CSS写轮眼' },
            component: 'study/cssDemo/sharingan'
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
            meta: { dev: true, title: '入门级基础知识' },
            component: 'study/note/basic'
          },
          {
            path: '/study/note/html',
            name: 'html',
            meta: { dev: true, title: 'HTML相关' },
            component: 'study/note/html'
          },
          {
            path: '/study/note/css',
            name: 'css',
            meta: { dev: true, title: 'CSS相关' },
            component: 'study/note/css'
          },
          {
            path: '/study/note/ecmascript',
            name: 'ecmascript',
            meta: { dev: true, title: 'ECMAScript' },
            component: 'study/note/ECMAScript'
          },
          {
            path: '/study/note/regular',
            name: 'regular',
            meta: { dev: true, title: '正则基础知识' },
            component: 'study/note/regular'
          },
          {
            path: '/study/note/git',
            name: 'git',
            meta: { dev: true, title: 'git常用命令' },
            component: 'study/note/git'
          },
          {
            path: '/study/note/npm',
            name: 'npm',
            meta: { dev: true, title: 'npm常用命令' },
            component: 'study/note/npm'
          },
          {
            path: '/study/note/command',
            name: 'command',
            meta: { dev: true, title: '计算机常用命令快捷键' },
            component: 'study/note/command'
          },
          {
            path: '/study/note/function',
            name: 'function',
            meta: { dev: true, title: 'js常用方法封装' },
            component: 'study/note/function'
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
            path: '/study/other/heart',
            name: 'heart',
            meta: { title: '心形图案' },
            component: 'study/other/heart'
          },
          {
            path: '/study/other/timeWheel',
            name: 'timeWheel',
            meta: { title: '时间轮盘' },
            component: 'study/other/timeWheel'
          },
          {
            path: '/study/other/loading',
            name: 'loading',
            meta: { title: '加载动画' },
            component: 'study/other/loading'
          },
          {
            path: '/study/other/progress',
            name: 'progress',
            meta: { title: '进度条' },
            component: 'study/other/progress'
          },
          {
            path: '/study/other/applelogo',
            name: 'applelogo',
            meta: { title: 'Apple新年logo' },
            component: 'study/other/appleLogo'
          },
          {
            path: '/study/other/codeRain',
            name: 'codeRain',
            meta: { title: '代码雨' },
            component: 'study/other/codeRain'
          },
          {
            path: '/study/other/pictureInPicture',
            name: 'pictureInPicture',
            meta: { title: '画中画' },
            component: 'study/other/pictureInPicture'
          },
          {
            path: '/study/other/teleprompter',
            name: 'teleprompter',
            meta: { dev: true, title: '提词器' },
            component: 'study/other/teleprompter'
          },
          {
            path: '/study/other/2024SpringFestivalGala',
            name: '2024SpringFestivalGala',
            meta: { title: '2024春晚' },
            component: 'study/other/2024SpringFestivalGala'
          }
        ]
      },
      {
        path: '/study/componentDemo',
        name: 'componentDemo',
        meta: { title: '组件例子' },
        redirect: '/study',
        children: [
          {
            path: '/study/componentDemo/search',
            name: 'search',
            meta: { dev: true, title: '搜索' },
            component: 'study/componentDemo/search'
          },
          {
            path: '/study/componentDemo/tableCom',
            name: 'tableCom',
            meta: { title: '表格组件' },
            component: 'study/componentDemo/tableCom'
          },
          {
            path: '/study/componentDemo/table1_ant',
            name: 'table1_ant',
            meta: { title: '表格1-ant' },
            component: 'study/componentDemo/table1_ant'
          },
          {
            path: '/study/componentDemo/table1_el',
            name: 'table1_el',
            meta: { title: '表格1-el' },
            component: 'study/componentDemo/table1_el'
          },
          {
            path: '/study/componentDemo/table2',
            name: 'table2',
            meta: { title: '表格2' },
            component: 'study/componentDemo/table2'
          },
          {
            path: '/study/componentDemo/table3',
            name: 'table3',
            meta: { title: '表格3' },
            component: 'study/componentDemo/table3'
          },
          {
            path: '/study/componentDemo/table4',
            name: 'table4',
            meta: { title: '表格4' },
            component: 'study/componentDemo/table4'
          },
          {
            path: '/study/componentDemo/table5',
            name: 'table5',
            meta: { title: '表格5' },
            component: 'study/componentDemo/table5'
          },
          {
            path: '/study/componentDemo/form1',
            name: 'form1',
            meta: { title: '表单1' },
            component: 'study/componentDemo/form1'
          },
          {
            path: '/study/componentDemo/form2',
            name: 'form2',
            meta: { title: '低代码表单' },
            component: 'study/componentDemo/form2'
          }
        ]
      }
    ]
  },
  {
    path: '/joy',
    name: 'joy',
    meta: { title: '娱乐' },
    component: 'joy/index',
    children: [
      {
        path: '/joy/games',
        name: 'games',
        meta: { title: '游戏' },
        redirect: '/joy',
        children: [
          {
            path: '/joy/games/gameHistory',
            name: 'gameHistory',
            meta: { title: '游戏历程时间轴' },
            component: 'joy/games/gameHistory'
          },
          {
            path: '/joy/games/clashOfClans',
            name: 'clashofclans',
            meta: { title: '部落冲突' },
            component: 'joy/games/clashOfClans'
          },
          {
            path: '/joy/games/catchTheCat',
            name: 'catchTheCat',
            meta: { title: '圈小猫' },
            component: 'joy/games/catchTheCat'
          },
          {
            path: '/joy/games/speed',
            name: 'speed',
            meta: { title: '飞车端游壁纸' },
            component: 'joy/games/Speed'
          },
          {
            path: '/joy/games/speedm',
            name: 'speedm',
            meta: { title: '飞车手游壁纸' },
            component: 'joy/games/SpeedM'
          },
          {
            path: '/joy/games/speedm/atlas',
            name: 'speedmatlas',
            meta: { title: '飞车手游图鉴' },
            component: 'joy/games/SpeedMAtlas'
          },
          {
            path: '/joy/games/cfm',
            name: 'cfm',
            meta: { title: '穿越火线手游壁纸' },
            component: 'joy/games/CFM'
          },
          {
            path: '/joy/games/cfm/atlas',
            name: 'cfmatlas',
            meta: { title: '穿越火线手游图鉴' },
            component: 'joy/games/CFMAtlas'
          },
          {
            path: '/joy/games/pvp',
            name: 'pvp',
            meta: { dev: true, title: '王者荣耀壁纸' },
            component: 'joy/games/pvp'
          },
          {
            path: '/joy/games/pvp/atlas',
            name: 'pvpatlas',
            meta: { title: '王者荣耀图鉴' },
            component: 'joy/games/pvpAtlas'
          },
          {
            path: '/joy/games/minesweeper',
            name: 'minesweeper',
            meta: { dev: true, title: '扫雷' },
            component: 'joy/games/minesweeper/index',
            children: [
              {
                path: '/joy/games/minesweeper',
                name: 'minesweeper_home',
                meta: { title: '扫雷home' },
                component: 'joy/games/minesweeper/home'
              },
              {
                path: '/joy/games/minesweeper/setting',
                name: 'minesweeper_setting',
                meta: { title: '扫雷setting' },
                component: 'joy/games/minesweeper/setting'
              }
            ]
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
            path: '/joy/tool/deviceinfo',
            name: 'deviceInfo',
            meta: { title: '设备信息' },
            component: 'joy/tool/deviceInfo'
          },
          {
            path: '/joy/tool/calendar',
            name: 'calendar',
            meta: { title: '日历' },
            component: 'joy/tool/calendar'
          },
          {
            path: '/joy/tool/birthdates',
            name: 'birthdates',
            meta: { title: '生辰八字查询' },
            component: 'joy/tool/birthdates'
          },
          {
            path: '/joy/tool/solarLunar',
            name: 'solarLunar',
            meta: { title: '公历农历转换器' },
            component: 'joy/tool/solarLunar'
          },
          {
            path: '/joy/tool/toggleCase',
            name: 'toggleCase',
            meta: { title: '数字大小写转换器' },
            component: 'joy/tool/toggleCase'
          },
          {
            path: '/joy/tool/listen',
            name: 'listen',
            meta: { dev: true, title: '音乐播放器' },
            component: 'joy/tool/listen'
          },
          {
            path: '/joy/tool/petpet',
            name: 'petpet',
            meta: { title: '摸头生成器' },
            component: 'joy/tool/petpet/index'
          },
          {
            path: '/joy/tool/random',
            name: 'random',
            meta: { title: '随机数生成器' },
            component: 'joy/tool/random'
          },
          {
            path: '/joy/tool/grayhead',
            name: 'grayhead',
            meta: { dev: true, title: '灰色头像生成器' },
            component: 'joy/tool/GrayHead'
          },
          {
            path: '/joy/tool/avatarEditor',
            name: 'avatarEditor',
            meta: { dev: true, title: '国庆红旗头像生成器' },
            component: 'joy/tool/avatarEditor'
          },
          {
            path: '/joy/tool/qrcode',
            name: 'qrcode',
            meta: { title: '链接二维码生成器' },
            component: 'joy/tool/qrcode'
          },
          {
            path: '/joy/tool/appStore',
            name: 'appStore',
            meta: { title: 'appStore应用搜索' },
            component: 'joy/tool/appStore'
          },
          {
            path: '/joy/tool/operatorPointsRedemption',
            name: 'operatorPointsRedemption',
            meta: { title: '运营商积分兑换话费' },
            component: 'joy/tool/operatorPointsRedemption'
          },
          {
            path: '/joy/tool/lifeTime',
            name: 'lifeTime',
            meta: { title: '人生进度表' },
            component: 'joy/tool/lifeTime'
          },
          {
            path: '/joy/tool/ceramicTileWall',
            name: 'ceramicTileWall',
            meta: { title: '瓷砖墙' },
            component: 'joy/tool/ceramicTileWall'
          },
          {
            path: '/joy/tool/skeuomorphism',
            name: 'Skeuomorphism',
            meta: { dev: true, title: 'CSS新拟态设计风格生成器' },
            component: 'joy/tool/Skeuomorphism'
          },
          {
            path: '/joy/tool/glassmorphism',
            name: 'Glassmorphism',
            meta: { dev: true, title: 'CSS玻璃拟物化风格生成器' },
            component: 'joy/tool/Glassmorphism'
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
            meta: { dev: true, title: '新年烟花' },
            component: 'joy/festival/newyear'
          }
        ]
      }
    ]
  },
  {
    path: '/links',
    name: 'links',
    meta: { title: '链接' },
    component: 'links/index',
    children: [
      {
        path: '/links/tencentLinks',
        name: 'tencentLinks',
        meta: { title: '腾讯链接' },
        component: 'links/tencentLinks'
      },
      {
        path: '/links/minecraftBookmark',
        name: 'minecraftBookmark',
        meta: { title: '我的世界书签收录' },
        component: 'links/MinecraftBookmark'
      },
      {
        path: '/links/cssTool',
        name: 'cssTool',
        meta: { title: 'CSS工具收录' },
        component: 'links/cssTool'
      },
      {
        path: '/links/chartGPT',
        name: 'chartGPT',
        meta: { title: 'chartGPT' },
        component: 'links/chartGPT'
      }
    ]
  },
  {
    path: '/resources',
    name: 'resources',
    meta: { title: '资源分享' },
    component: 'resources/index'
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    meta: { title: '404(NotFound)' },
    component: 'errorPages/404'
  }
])
