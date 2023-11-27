// 按需引入
import { ElConfigProvider } from 'element-plus'

const Components = { ElConfigProvider }

// 抛出整体按需引入的组件
export default {
  install(app) {
    Object.values(Components).forEach((item) => {
      app.use(item)
    })
  }
}
