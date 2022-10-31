import { createRouter, createWebHashHistory } from "vue-router"

const router = createRouter({
  history: createWebHashHistory (import.meta.env.VITE_BASE_URL),
  routes: [
    {
      path: "/",
      meta: {
        title: "首页"
      },
      children: [
        {
          path: "/",
          name: "home",
          meta: {
            title: "首页home"
          },
          component: () => import("@/views/home/index.vue")
        }
      ]
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
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue")
    },
    // { path: "/404", component: () => import("@/error.vue") },
    // { path: "/:catchAll(.*)", redirect:"/404" },
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
