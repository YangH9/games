import { createRouter, createWebHashHistory } from 'vue-router'
import { routerLoading } from '@/stores'
import { message } from 'ant-design-vue'
import routes from '@/router/routeList'
import { setTitle } from '@/utils'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

// 当路由跳转开始前
router.beforeEach((to, from, next) => {
  routerLoading().show()
  if (to.meta.dev) {
    message.info('开发中，敬请期待！')
    if (import.meta.env.PROD) {
      next(from.path)
    } else {
      next()
    }
  } else {
    next()
  }
})

// 当路由跳转结束后
router.afterEach(to => {
  routerLoading().hide()
  setTitle(to)
})

export default router
