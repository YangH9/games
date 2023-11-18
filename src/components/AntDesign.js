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
  MenuItem,
  Breadcrumb,
  BreadcrumbItem,
  Descriptions,
  DescriptionsItem,
  Timeline,
  TimelineItem,
  Form,
  Input,
  Select,
  InputNumber,
  Radio,
  RadioGroup,
  Checkbox,
  Textarea,
  Collapse,
  CollapsePanel,
  Watermark,
  Tag,
  ConfigProvider,
  Table,
  Tree
} from 'ant-design-vue'

const antList = {
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
  // MenuItem,
  Breadcrumb,
  // BreadcrumbItem,
  Descriptions,
  // DescriptionsItem,
  Timeline,
  // TimelineItem,
  Form,
  Input,
  Select,
  InputNumber,
  Radio,
  // RadioGroup,
  Checkbox,
  // Textarea,
  Collapse,
  // CollapsePanel,
  Watermark,
  Tag,
  ConfigProvider,
  Table,
  Tree
}

// 抛出整体按需引入的组件
export default {
  install(app) {
    Object.values(antList).forEach((item) => {
      app.use(item)
    })
  }
}
