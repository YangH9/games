<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <a-row :gutter="16">
        <a-col v-bind="{ xs: 0, md: 6 }">
          <a-tree
            checkable
            defaultExpandAll
            :selectable="false"
            :tree-data="treeData"
            :fieldNames="{ children: 'children', title: 'title', key: 'key' }"
            class="p_4"
            @check="checkTree"
          />
        </a-col>
        <a-col v-bind="{ xs: 24, md: 18 }">
          <a-table :dataSource="tableData" :columns="tableCol" bordered :pagination="false" />
        </a-col>
      </a-row>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const treeData = [
  {
    title: 'title1',
    key: 'key1',
    children: [
      { title: 'title2', key: 'key2' },
      { title: 'title3', key: 'key3' }
    ]
  },
  {
    title: 'title4',
    key: 'key4',
    children: [
      { title: 'title5', key: 'key5' },
      { title: 'title6', key: 'key6' },
      { title: 'title7', key: 'key7' }
    ]
  },
  {
    title: 'title8',
    key: 'key8',
    children: [
      { title: 'title9', key: 'key9' },
      { title: 'title10', key: 'key10' },
      { title: 'title11', key: 'key11' },
      { title: 'title12', key: 'key12' }
    ]
  }
]
const tableData = ref([])
const tableCol = ref([
  {
    title: '功能',
    key: 'column1',
    dataIndex: 'column1',
    colSpan: 2,
    customCell: (record, rowIndex, column) => {
      const key = 'column1'
      if (tableData.value[rowIndex - 1]?.[key] === record[key]) {
        return { rowSpan: 0 }
      } else {
        return { rowSpan: tableData.value.filter((i) => i[key] === record[key]).length || 1 }
      }
    }
  },
  { title: '功能1', key: 'column2', dataIndex: 'column2', colSpan: 0 },
  { title: '内容说明', key: 'column3', dataIndex: 'column3' },
  { title: '开发', key: 'column4', dataIndex: 'column4' },
  { title: '测试', key: 'column5', dataIndex: 'column5' },
  { title: '费用', key: 'column6', dataIndex: 'column6' }
])
const defaultDataObj = {
  column1: 'column1',
  column2: 'column2',
  column3: 'column3',
  column4: 'column4',
  column5: 'column5',
  column6: 'column6'
}

const checkTree = (keys) => {
  const tree = treeData
  console.log(keys)
  const obj = {}
  const data = []
  keys.forEach((item) => {
    tree.forEach((i) =>
      i.children.forEach((j) => {
        if (item === j.key) {
          obj[item] = j
          data.push({ ...defaultDataObj, column1: i.title, column2: j.title })
        }
      })
    )
  })
  tableData.value = data
}
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
</style>
