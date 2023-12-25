<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <a-row :gutter="[16, 16]">
        <a-col v-bind="{ xs: 24, md: 6 }">
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
import { CloneDeep } from '@/utils/lodash'

const ramdomStr = () => Array.from({ length: 8 }, (_) => String.fromCharCode(~~(Math.random() * 25) + 97)).join('')

const treeData = Array.from({ length: ~~(Math.random() * 4) + 1 }, (_) => {
  const str = ramdomStr()
  return {
    title: str,
    key: str,
    children: Array.from({ length: ~~(Math.random() * 6) + 1 }, (_) => {
      const str = ramdomStr()
      return {
        title: str,
        key: str
      }
    })
  }
})

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
      }
      return { rowSpan: tableData.value.filter((i) => i[key] === record[key]).length || 1 }
    }
  },
  { title: '功能1', key: 'column2', dataIndex: 'column2', colSpan: 0 },
  { title: '内容说明', key: 'column3', dataIndex: 'column3' },
  { title: '开发', key: 'column4', dataIndex: 'column4' },
  { title: '测试', key: 'column5', dataIndex: 'column5' },
  { title: '费用', key: 'column6', dataIndex: 'column6' }
])

const defaultDataObj = () => ({
  column1: ramdomStr(),
  column2: ramdomStr(),
  column3: ramdomStr(),
  column4: ramdomStr(),
  column5: ramdomStr(),
  column6: ramdomStr()
})

const checkTree = (keys) => {
  const oldData = CloneDeep(tableData.value)
  const tree = treeData
  const data = []
  tree.forEach((i) =>
    i.children.forEach((j) =>
      keys.forEach(
        (item) =>
          item === j.key &&
          data.push(
            oldData.find((a) => a.column1 === i.title && a.column2 === j.title) ?? {
              ...defaultDataObj(),
              column1: i.title,
              column2: j.title
            }
          )
      )
    )
  )
  tableData.value = data
}
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
</style>
