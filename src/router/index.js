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
      path: "/games",
      name: "games",
      meta: {
        title: "游戏"
      },
      component: () => import("@/views/games/index.vue"),
      children: [
        {
          path: "/games/minesweeper",
          name: "minesweeper",
          meta: {
            title: "扫雷"
          },
          component: () => import("@/views/games/minesweeper/index.vue"),
          children: [
            {
              path: "/games/minesweeper/setting",
              name: "minesweeper_setting",
              meta: {
                title: "扫雷setting"
              },
              component: () => import("@/views/games/minesweeper/setting.vue")
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

    // { path: "/404", component: () => import("@/error.vue") },
    // { path: "/:catchAll(.*)", redirect:"/404" },
    { path: "/:catchAll(.*)", component: () => import("@/views/Error.vue") }
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
