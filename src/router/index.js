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
      path: "/minesweeper",
      name: "minesweeper",
      meta: {
        title: "扫雷"
      },
      component: () => import("@/views/minesweeper/index.vue"),
      children: [
        {
          path: "/minesweeper",
          name: "minesweeper_home",
          meta: {
            title: "扫雷home"
          },
          component: () => import("@/views/minesweeper/home.vue")
        },
        {
          path: "/minesweeper/setting",
          name: "minesweeper_setting",
          meta: {
            title: "扫雷setting"
          },
          component: () => import("@/views/minesweeper/setting.vue")
        }
      ]
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
      component: () => import("@/views/games/index.vue")
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

    /*
     * { path: "/404", component: () => import("@/error.vue") },
     * { path: "/:catchAll(.*)", redirect:"/404" },
     */
    { path: "/:catchAll(.*)", component: () => import("@/error.vue") }
  ]
})

router.beforeEach((to, from, next) => {
  if (to.meta.title) {
    document.title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`
  }
  next()
})

export default router
