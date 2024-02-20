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
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'
import Icon from '@/components/icon'

import 'ant-design-vue/dist/reset.css'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'
import 'vform3-builds/dist/designer.style.css'

// 默哀的全局灰色
import '@/assets/gray.scss'
import '@/assets/base.scss'
import '@/assets/main.scss'

dayjs.locale('zh-cn')

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
