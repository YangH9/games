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
      path: "/game",
      name: "game",
      meta: {
        title: "游戏"
      },
      component: () => import("@/views/game/index.vue"),
      children: [
        {
          path: "/game/minesweeper",
          name: "minesweeper",
          meta: {
            title: "扫雷"
          },
          component: () => import("@/views/game/minesweeper/index.vue"),
          children: [
            {
              path: "/game/minesweeper/setting",
              name: "minesweeper_setting",
              meta: {
                title: "扫雷setting"
              },
              component: () => import("@/views/game/minesweeper/setting.vue")
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
