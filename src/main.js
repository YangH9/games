import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "@/App.vue"
import router from "@/router"

import "@/assets/main.less"
import "@/assets/base.less"

const Vue = createApp(App)

Vue.config.globalProperties.getEnv = import.meta.env

Vue.use(createPinia())
Vue.use(router)

Vue.mount("#app")
