import { createRouter, createWebHashHistory } from 'vue-router'
import { routerLoading } from '@/stores'
import { message } from 'ant-design-vue'
import routes from '@/router/routeList'
import devRouter from '@/router/devRouter'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

// 当路由跳转开始前
router.beforeEach((to, from, next) => {
  routerLoading().show()
  if (devRouter.includes(to.path)) {
    message.info('开发中，暂未开放！')
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
router.afterEach((to) => {
  routerLoading().hide()

  const Title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`

  document.title = Title

  const handleVisiable = (e) => {
    // console.log(e.target.title, e.target.visibilityState)
    if (e.target.visibilityState === 'visible') {
      document.title = '逗你的~'
      setTimeout(() => {
        if (e.target.visibilityState === 'visible') {
          document.title = Title
        } else if (e.target.visibilityState === 'hidden') {
          document.title = `(你有一条新消息)${Title}`
        }
      }, 1000)
    } else if (e.target.visibilityState === 'hidden') {
      document.title = `(你有一条新消息)${Title}`
    }
  }

  document.addEventListener('visibilitychange', handleVisiable)
})

export default router
