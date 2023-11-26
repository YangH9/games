// 按需引入
import { ElTable, ElConfigProvider, ElButton, ElCheckbox, ElCheckboxGroup, ElDivider } from 'element-plus'

const Components = {
  ElTable,
  ElConfigProvider,
  ElButton,
  ElCheckbox,
  ElCheckboxGroup,
  ElDivider
}

// 抛出整体按需引入的组件
export default {
  install(app) {
    Object.values(Components).forEach((item) => {
      app.use(item)
    })
  }
}
