<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <a-table :dataSource="dataSource" :columns="columns" />
      <a-button @click="cons">cons</a-button>
      <!-- <a-button @click="print">输出</a-button> -->
      <div class="ant-card">
        <div>固定列数据：{{ fixedObj }}</div>
        <div>动态列数据：{{ checkboxObj }}</div>
        <div>表格数据：{{ dataSource }}</div>
        <div>列数据：{{ columns }}</div>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const tableData = [
  {
    name: 'Edrward',
    age: 32,
    time: new Date().toFormat(),
    column0: '1.1',
    column1: '1.2',
    column2: '1.3',
    column3: '1.4',
    column4: '1.5',
    column5: '1.6',
    column6: '1.7',
    column7: '1.8',
    column8: '1.9',
    column9: '2.0',
    column10: '2.1'
  },
  ...new Array(5).fill(1).map((a, i) => ({
    name: `Edrward ${i}`,
    age: ~~(Math.random() * 100),
    time: new Date().toFormat(),
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
const fixedObj = {
  name: '姓名',
  age: '年龄',
  time: '时间'
}
const checkboxObj = {}
new Array(~~(Math.random() * 10)).fill(1).forEach((a, i) => {
  checkboxObj[`column${i}`] = `column${i}`
})

const dataSource = ref([])
const columns = ref([])

const init = () => {
  const columnList = [
    ...Object.entries(fixedObj).map(([key, title]) => {
      return {
        title,
        key,
        dataIndex: key,
        customRender: ({ text, record, index, column }) => record[column.key].value
      }
    }),
    ...Object.entries(checkboxObj).map(([key, title]) => {
      return {
        title,
        key,
        dataIndex: key,
        customRender: ({ text, record, index, column }) => {
          return <a-checkbox v-model:checked={record[column.key].checked}>{record[column.key].value}</a-checkbox>
        }
      }
    })
  ]
  const tableList = tableData.map((item) => {
    const obj = {}
    columnList.forEach((i) => {
      obj[i.dataIndex] = { value: item[i.dataIndex] || null, checked: false }
    })
    return obj
  })
  dataSource.value = tableList
  columns.value = columnList
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
