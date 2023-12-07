import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import * as AntDesignIconsVue from '@ant-design/icons-vue'
// import { defineAsyncComponent } from 'vue'

export default {
  install(app) {
    // 当前文件夹下的所有icon图标文件
    // const iconModules = import.meta.glob('@/components/icon/*.vue')
    // Object.entries(iconModules).forEach(([key, component]) => {
    //   app.component(key.match(/.*\/(.+).vue$/)[1], defineAsyncComponent(component))
    // })
    // elementplus的图标
    Object.entries(ElementPlusIconsVue).forEach(([key, component]) => {
      app.component(`E${key}`, component)
    })
    // antdesign的图标
    Object.entries(AntDesignIconsVue).forEach(([key, component]) => {
      app.component(`A${key}`, component)
    })
  }
}
