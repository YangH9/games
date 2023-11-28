import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import axios from '@/http'
import jsonp from '@/http/jsonp'
import '@/utils'
import directive from '@/utils/directive'
import AntDesign from 'ant-design-vue'
import ElementPlus from 'element-plus'
import VForm3 from 'vform3-builds'

import 'ant-design-vue/dist/reset.css'
import 'element-plus/dist/index.css'
import 'vform3-builds/dist/designer.style.css'

// 默哀的全局灰色
import '@/assets/gray.scss'
import '@/assets/base.scss'
import '@/assets/main.scss'

const app = createApp(App)

app
  .use(AntDesign)
  .use(ElementPlus)
  .use(VForm3)
  .use(createPinia())
  .use(router)
  .use(directive)
  .provide('GetEnv', import.meta.env)
  .provide('Dayjs', dayjs)
  .provide('Jsonp', jsonp)
  .provide('Axios', axios)
  .mount('#app')
