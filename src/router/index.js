import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes: [
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
          path: "/joy/minesweeper",
          name: "minesweeper",
          meta: {
            title: "扫雷"
          },
          component: () => import("@/views/joy/minesweeper/index.vue"),
          children: [
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
      component: () => import("@/views/resources/index.vue")
    },

    // { path: "/:catchAll(.*)", redirect:"/404" },
    { path: "/403", component: () => import("@/views/error/403.vue") },
    { path: "/404", component: () => import("@/views/error/404.vue") },
    { path: "/500", component: () => import("@/views/error/500.vue") },
    { path: "/:catchAll(.*)", component: () => import("@/views/error/404.vue") }
  ]
})

// 当路由跳转开始前
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`
  }
  next()
})

// 当路由跳转结束后
// router.afterEach((to, from) => {
// })

export default router
