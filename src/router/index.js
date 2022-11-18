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
        path: "/joy/gameHistory",
        name: "gameHistory",
        meta: {
          title: "游戏历程时间轴"
        },
        component: () => import("@/views/joy/gameHistory.vue")
      },
      {
        path: "/joy/catchTheCat",
        name: "catchTheCat",
        meta: {
          title: "圈小猫"
        },
        component: () => import("@/views/joy/catchTheCat.vue")
      },
      {
        path: "/joy/minesweeper",
        name: "minesweeper",
        meta: {
          title: "扫雷"
        },
        component: () => import("@/views/joy/minesweeper/index.vue"),
        children: [
          {
            path: "/joy/minesweeper",
            name: "minesweeper_home",
            meta: {
              title: "扫雷home"
            },
            component: () => import("@/views/joy/minesweeper/home.vue")
          },
          {
            path: "/joy/minesweeper/setting",
            name: "minesweeper_setting",
            meta: {
              title: "扫雷setting"
            },
            component: () => import("@/views/joy/minesweeper/setting.vue")
          }
        ]
      },
      {
        path: "/joy/listen",
        name: "listen",
        meta: {
          title: "音乐播放器"
        },
        component: () => import("@/views/joy/listen/index.vue")
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
    component: () => import("@/views/resources/index.vue"),
    children: [
      {
        path: "/resources/demo",
        name: "demo",
        meta: {
          title: "DEMO展示"
        },
        redirect: "/resources/demo/pikaqiu",
        component: () => import("@/views/resources/demo/index.vue"),
        children: [
          {
            path: "/resources/demo/pikaqiu",
            name: "pikaqiu",
            meta: {
              title: "CSS皮卡丘"
            },
            component: () => import("@/views/resources/demo/pikaqiu.vue")
          },
          {
            path: "/resources/demo/huitailang",
            name: "huitailang",
            meta: {
              title: "CSS灰太狼"
            },
            component: () => import("@/views/resources/demo/huitailang.vue")
          },
          {
            path: "/resources/demo/lanpangzi",
            name: "lanpangzi",
            meta: {
              title: "CSS蓝胖子"
            },
            component: () => import("@/views/resources/demo/lanpangzi.vue")
          },
          {
            path: "/resources/demo/loading",
            name: "loading",
            meta: {
              title: "加载动画"
            },
            component: () => import("@/views/resources/demo/loading.vue")
          }
        ]
      }
    ]
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
  }, 1000)
})

export default router
