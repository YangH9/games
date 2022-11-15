import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "@/App.vue"
import router from "@/router"
import { formatDate } from "@/utils/index"

import "@/utils/text"

import "@/assets/main.less"
import "@/assets/base.less"

const Vue = createApp(App)

Vue.config.globalProperties.getEnv = import.meta.env

Vue.config.globalProperties.formatDate = formatDate

Vue.use(createPinia())
Vue.use(router)

Vue.mount("#app")
