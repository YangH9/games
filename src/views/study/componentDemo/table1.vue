<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <a-table :dataSource="dataSource" :columns="columns" />
      <a-button @click="cons">cons</a-button>
      <!-- <a-button @click="print">输出</a-button> -->
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const tableData = [
  {
    name: '胡彦斌',
    age: 32,
    column0: '1.1',
    column1: '1.2',
    column2: '1.3',
    column3: '1.4',
    column4: '1.5',
    column5: '1.6',
    column6: '1.7',
    column7: '1.8',
    column8: '1.9',
    column9: '2.0'
  },
  ...new Array(5).fill(1).map((a, i) => ({
    name: `Edrward ${i}`,
    age: ~~(Math.random() * 100),
    column0: ~~(Math.random() * 10000) / 100,
    column1: ~~(Math.random() * 10000) / 100,
    column2: ~~(Math.random() * 10000) / 100,
    column3: ~~(Math.random() * 10000) / 100,
    column4: ~~(Math.random() * 10000) / 100,
    column5: ~~(Math.random() * 10000) / 100,
    column6: ~~(Math.random() * 10000) / 100,
    column7: ~~(Math.random() * 10000) / 100,
    column8: ~~(Math.random() * 10000) / 100,
    column9: ~~(Math.random() * 10000) / 100,
    column10: ~~(Math.random() * 10000) / 100
  }))
]
const columnData = [
  {
    title: '姓名',
    dataIndex: 'name',
    key: 'name',
    customRender: ({ text, record, index, column }) => record[column.key].value
  },
  {
    title: '年龄',
    dataIndex: 'age',
    key: 'age',
    customRender: ({ text, record, index, column }) => record[column.key].value
  },
  ...new Array(9).fill(1).map((a, i) => ({
    title: `column${i}`,
    dataIndex: `column${i}`,
    key: `column${i}`,
    customRender: ({ text, record, index, column }) => {
      return <a-checkbox v-model:checked={record[column.key].checked}>{record[column.key].value}</a-checkbox>
    }
  }))
]
const dataSource = ref([])
const columns = ref([])

const init = () => {
  dataSource.value = tableData.map((item) => {
    const obj = {}
    columnData.forEach((i) => {
      obj[i.dataIndex] = { value: item[i.dataIndex] || null, checked: false }
    })
    return obj
  })
  columns.value = columnData
}
init()

const cons = () => {
  console.log(dataSource.value)
}
const print = () => {
  window.print()
}
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
</style>
