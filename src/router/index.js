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
  let handleVisiableInit = ''
  const handleVisiable = () => {
    if (document.visibilityState === 'visible') {
      document.title = '逗你的~'
      setTimeout(() => {
        handleVisiableInit()
      }, 1000)
    } else if (document.visibilityState === 'hidden') {
      document.title = `(你有一条新消息)${Title}`
    }
  }
  handleVisiableInit = () => {
    if (document.visibilityState === 'visible') {
      document.title = Title
    } else if (document.visibilityState === 'hidden') {
      document.title = `(你有一条新消息)${Title}`
    }
    document.addEventListener('visibilitychange', handleVisiable)
  }
  handleVisiableInit()
})

export default router
