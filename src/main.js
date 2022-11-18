import App from "@/App.vue"
import router from "@/router"
import { createApp } from "vue"
import { createPinia } from "pinia"

import { formatDate } from "@/utils/index"

import "@/assets/main.less"

const Vue = createApp(App)

Vue.config.globalProperties.getEnv = import.meta.env
Vue.config.globalProperties.formatDate = formatDate

Vue.use(createPinia())
Vue.use(router)

Vue.mount("#app")
