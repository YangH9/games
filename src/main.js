import App from '@/App.vue'
import router from '@/router'
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import dayjs from 'dayjs'
import jsonp from '@/http/jsonp'
import '@/utils'
import directive from '@/utils/directive'
import AntDesign from '@/components/AntDesign'

import 'ant-design-vue/dist/reset.css'

// 默哀的全局灰色
import '@/assets/gray.scss'
import '@/assets/base.scss'
import '@/assets/main.scss'

const app = createApp(App)

app
  .use(AntDesign)
  .use(createPinia())
  .use(router)
  .use(directive)
  .provide('GetEnv', import.meta.env)
  .provide('Dayjs', dayjs)
  .provide('Jsonp', jsonp)
  .mount('#app')
