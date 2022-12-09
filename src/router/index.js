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
    path: "/joy",
    name: "joy",
    meta: {
      title: "娱乐"
    },
    component: () => import("@/views/joy/index.vue"),
    children: [
      {
        path: "/joy/demo",
        name: "demo",
        meta: {
          title: "DEMO展示"
        },
        redirect: "/joy/demo/pikaqiu",
        component: () => import("@/views/joy/demo/index.vue"),
        children: [
          {
            path: "/joy/demo/pikaqiu",
            name: "pikaqiu",
            meta: {
              title: "CSS皮卡丘"
            },
            component: () => import("@/views/joy/demo/pikaqiu.vue")
          },
          {
            path: "/joy/demo/huitailang",
            name: "huitailang",
            meta: {
              title: "CSS灰太狼"
            },
            component: () => import("@/views/joy/demo/huitailang.vue")
          },
          {
            path: "/joy/demo/lanpangzi",
            name: "lanpangzi",
            meta: {
              title: "CSS蓝胖子"
            },
            component: () => import("@/views/joy/demo/lanpangzi.vue")
          },
          {
            path: "/joy/demo/loading",
            name: "loading",
            meta: {
              title: "加载动画"
            },
            component: () => import("@/views/joy/demo/loading.vue")
          }
        ]
      },
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
            component: () => import("@/views/joy/games/gameHistory/index.vue")
          },
          {
            path: "/joy/games/catchTheCat",
            name: "catchTheCat",
            meta: {
              title: "圈小猫"
            },
            component: () => import("@/views/joy/games/catchTheCat/index.vue")
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
            path: "/joy/tool/deviceInfo",
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
router.afterEach(() => {
  setTimeout(() => {
    routerLoading().hide()
  }, 500)
})

export default router
