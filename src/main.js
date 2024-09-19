import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import axios from '@/http'
import jsonp from '@/http/jsonp'
import '@/utils'
import directive from '@/utils/directive'
import AntDesign from 'ant-design-vue'
import ElementPlus from 'element-plus'
import VForm3 from 'vform3-builds'
import zhCn from 'element-plus/dist/locale/zh-cn.mjs'
import Icon from '@/components/icon'

import 'ant-design-vue/dist/reset.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'vform3-builds/dist/designer.style.css'

// 默哀的全局灰色
import '@/assets/gray.scss'
import '@/assets/base.scss'
import '@/assets/main.scss'

// dayjs 及插件
import dayjs from 'dayjs'
import updateLocale from 'dayjs/plugin/updateLocale'
import weekOfYear from 'dayjs/plugin/weekOfYear'
import duration from 'dayjs/plugin/duration'
import arraySupport from 'dayjs/plugin/arraySupport'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import minMax from 'dayjs/plugin/minMax'
import 'dayjs/locale/zh-cn'
dayjs
  .extend(updateLocale)
  .extend(weekOfYear)
  .extend(duration)
  .extend(arraySupport)
  .extend(isLeapYear)
  .extend(minMax)
  .locale('zh-cn')

createApp(App)
  .use(AntDesign)
  .use(ElementPlus, { locale: zhCn })
  .use(VForm3)
  .use(createPinia())
  .use(router)
  .use(directive)
  .use(Icon)
  .provide('GetEnv', import.meta.env)
  .provide('dayjs', dayjs)
  .provide('Jsonp', jsonp)
  .provide('Axios', axios)
  .mount('#app')
