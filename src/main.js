import { createApp } from "vue"
import { createPinia } from "pinia"

import App from "./App.vue"
import router from "./router"
import Container from "@/components/Container.vue"

import "./assets/main.css"

const Vue = createApp(App)

Vue.config.globalProperties.getEnv = import.meta.env

Vue.component("Container", Container)

Vue.use(createPinia())
Vue.use(router)

Vue.mount("#app")
