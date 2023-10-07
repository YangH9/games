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

const Vue = createApp(App)

Vue.config.globalProperties.GetEnv = import.meta.env
Vue.config.globalProperties.Dayjs = dayjs
Vue.config.globalProperties.Jsonp = jsonp

Vue.use(AntDesign)
Vue.use(createPinia())
Vue.use(router)
Vue.use(directive)

Vue.mount('#app')
