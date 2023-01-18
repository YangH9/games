import { createRouter, createWebHashHistory } from 'vue-router'
import { routerLoading } from '@/stores'
import routes from '@/router/routeList'
// import { message } from 'ant-design-vue'

const router = createRouter({
  history: createWebHashHistory(import.meta.env.VITE_BASE_URL),
  routes
})

// 当路由跳转开始前
router.beforeEach((to, from, next) => {
  routerLoading().show()
  // 开发中拦截
  // setTimeout(() => {
  //   message.success('aaa')
  // }, 2000)
  next()
})

// 当路由跳转结束后
router.afterEach((to) => {
  routerLoading().hide()

  const Title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`

  document.title = Title

  const handleVisiable = (e) => {
    console.log(e.target.title, e.target.visibilityState)
    if (e.target.visibilityState === 'visible') {
      document.title = '逗你的~'
      setTimeout(() => {
        document.title = Title
      }, 1000)
    } else if (e.target.visibilityState === 'hidden') {
      document.title = '你有一条新消息'
    }
  }

  document.addEventListener('visibilitychange', handleVisiable)
})

export default router
