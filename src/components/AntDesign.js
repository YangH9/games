// 按需引入
import {
  Row,
  Col,
  Image,
  Card,
  Divider,
  Button,
  Layout,
  Slider,
  Result,
  Menu,
  Breadcrumb,
  Descriptions,
  Timeline,
  Form,
  Input,
  Select,
  InputNumber,
  Radio,
  Checkbox,
  Collapse,
  Watermark,
  Tag,
  ConfigProvider,
  Table,
  Tree
} from 'ant-design-vue'

const Components = {
  Row,
  Col,
  Image,
  Card,
  Divider,
  Button,
  Layout,
  Slider,
  Result,
  Menu,
  Breadcrumb,
  Descriptions,
  Timeline,
  Form,
  Input,
  Select,
  InputNumber,
  Radio,
  Checkbox,
  Collapse,
  Watermark,
  Tag,
  ConfigProvider,
  Table,
  Tree
}

// 抛出整体按需引入的组件
export default {
  install(app) {
    Object.values(Components).forEach((item) => {
      app.use(item)
    })
  }
}
