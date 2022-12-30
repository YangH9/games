import { createRouter, createWebHashHistory } from "vue-router"
import { routerLoading } from "@/stores"

const routes = [
  {
    path: "/",
    name: "home",
    meta: {
      title: "首页"
    },
    component: () => import("@/views/home/index.vue")
  },
  {
    path: "/about",
    name: "about",
    meta: {
      title: "关于"
    },
    component: () => import("@/views/about/index.vue")
  },
  {
    path: "/study",
    name: "study",
    meta: {
      title: "学习"
    },
    component: () => import("@/views/study/index.vue"),
    children: [
      {
        path: "/study/demo",
        name: "demo",
        meta: {
          title: "纯CSS特效"
        },
        redirect: "/study/demo/pikaqiu",
        component: () => import("@/views/study/demo/index.vue"),
        children: [
          {
            path: "/study/demo/pikaqiu",
            name: "pikaqiu",
            meta: {
              title: "CSS皮卡丘"
            },
            component: () => import("@/views/study/demo/pikaqiu.vue")
          },
          {
            path: "/study/demo/huitailang",
            name: "huitailang",
            meta: {
              title: "CSS灰太狼"
            },
            component: () => import("@/views/study/demo/huitailang.vue")
          },
          {
            path: "/study/demo/lanpangzi",
            name: "lanpangzi",
            meta: {
              title: "CSS蓝胖子"
            },
            component: () => import("@/views/study/demo/lanpangzi.vue")
          }
        ]
      },
      {
        path: "/study/other",
        name: "other",
        meta: {
          title: "其他"
        },
        redirect: "/study",
        children: [
          {
            path: "/study/other/loading",
            name: "loading",
            meta: {
              title: "加载动画"
            },
            component: () => import("@/views/study/other/loading.vue")
          },
          {
            path: "/study/other/progress",
            name: "progress",
            meta: {
              title: "进度条"
            },
            component: () => import("@/views/study/other/progress.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/joy",
    name: "joy",
    meta: {
      title: "娱乐"
    },
    component: () => import("@/views/joy/index.vue"),
    children: [
      {
        path: "/joy/games",
        name: "games",
        meta: {
          title: "游戏"
        },
        redirect: "/joy",
        children: [
          {
            path: "/joy/games/gameHistory",
            name: "gameHistory",
            meta: {
              title: "游戏历程时间轴"
            },
            component: () => import("@/views/joy/games/GameHistory.vue")
          },
          {
            path: "/joy/games/clashofclans",
            name: "clashofclans",
            meta: {
              title: "部落冲突"
            },
            component: () => import("@/views/joy/games/ClashOfClans.vue")
          },
          {
            path: "/joy/games/catchTheCat",
            name: "catchTheCat",
            meta: {
              title: "圈小猫"
            },
            component: () => import("@/views/joy/games/CatchTheCat.vue")
          },
          {
            path: "/joy/games/qqspeedm",
            name: "qqspeedm",
            meta: {
              title: "QQ飞车手游"
            },
            component: () => import("@/views/joy/games/QQSpeedM.vue")
          },
          {
            path: "/joy/games/minesweeper",
            name: "minesweeper",
            meta: {
              title: "扫雷"
            },
            component: () => import("@/views/joy/games/minesweeper/index.vue"),
            children: [
              {
                path: "/joy/games/minesweeper",
                name: "minesweeper_home",
                meta: {
                  title: "扫雷home"
                },
                component: () => import("@/views/joy/games/minesweeper/home.vue")
              },
              {
                path: "/joy/games/minesweeper/setting",
                name: "minesweeper_setting",
                meta: {
                  title: "扫雷setting"
                },
                component: () => import("@/views/joy/games/minesweeper/setting.vue")
              }
            ]
          }
        ]
      },
      {
        path: "/joy/tool",
        name: "tool",
        meta: {
          title: "工具"
        },
        redirect: "/joy",
        children: [
          {
            path: "/joy/tool/listen",
            name: "listen",
            meta: {
              title: "音乐播放器"
            },
            component: () => import("@/views/joy/tool/listen/index.vue")
          },
          {
            path: "/joy/tool/petpet",
            name: "petpet",
            meta: {
              title: "摸头生成器"
            },
            component: () => import("@/views/joy/tool/petpet/index.vue")
          },
          {
            path: "/joy/tool/deviceinfo",
            name: "deviceInfo",
            meta: {
              title: "设备信息"
            },
            component: () => import("@/views/joy/tool/DeviceInfo.vue")
          },
          {
            path: "/joy/tool/grayhead",
            name: "grayhead",
            meta: {
              title: "灰色头像生成器"
            },
            component: () => import("@/views/joy/tool/GrayHead.vue")
          }
        ]
      }
    ]
  },
  {
    path: "/links",
    name: "links",
    meta: {
      title: "链接"
    },
    component: () => import("@/views/links/index.vue")
  },
  {
    path: "/resources",
    name: "resources",
    meta: {
      title: "资源分享"
    },
    component: () => import("@/views/resources/index.vue")
  },
  { path: "/403", component: () => import("@/views/error/403.vue") },
  { path: "/404", component: () => import("@/views/error/404.vue") },
  { path: "/500", component: () => import("@/views/error/500.vue") },
  // { path: "/:catchAll(.*)", component: () => import("@/views/error/404.vue") }
  { path: "/:catchAll(.*)", redirect: "/404" }
]

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

// 当路由跳转开始前
router.beforeEach((to, from, next) => {
  routerLoading().show()
  if (to.meta.title) {
    document.title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`
  }
  next()
})

// 当路由跳转结束后
router.afterEach(to => {
  routerLoading().hide()
  const Title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`
  const handleVisiable = e => {
    console.log(e.target.title, e.target.visibilityState)
    if (e.target.visibilityState === "visible") {
      document.title = "逗你的~"
      setTimeout(() => {
        document.title = Title
      }, 500)
    } else if (e.target.visibilityState === "hidden") {
      document.title = "你有一条新消息"
    }
  }
  window.onload = () => {
    document.addEventListener("visibilitychange", handleVisiable)
  }
})

export default router
