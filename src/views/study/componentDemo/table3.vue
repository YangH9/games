<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <a-button type="link" href="https://codepen.io/yangh9/full/JjwbPRX">
        https://codepen.io/yangh9/full/JjwbPRX
      </a-button>
      <el-divider>表格--数据为Mockjs生成的随机数据</el-divider>
      <el-table
        v-resize="tableData.length"
        :data="tableData"
        style="width: 100%"
        height="calc(100vh - 215px)"
        :cell-style="cellStyle"
      >
        <el-table-column fixed prop="date" label="Date"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="age" label="Age"></el-table-column>
        <el-table-column prop="city" label="City"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column prop="zip" label="Zip"></el-table-column>
      </el-table>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Mock from 'mockjs'

const tableData = ref(
  Mock.mock({
    'data|10': [
      {
        date: '@date',
        name: '@cname',
        address: '@county(true)',
        age: '@integer(10, 50)',
        city: '@city',
        zip: '@zip'
      }
    ]
  }).data
)
const cellStyle = ({ row, column }) => {
  if (column.property === 'name') {
    if (row.age < 25) {
      return {
        background: '#f89898'
      }
    }
    return {
      background: '#95d475'
    }
  }
  return {}
}

const vResize = {
  mounted(el, binding) {
    const aaa = () => {
      const height =
        (el.querySelector('.el-table__body-wrapper').clientHeight ===
        el.querySelector('.el-table__inner-wrapper').clientHeight
          ? el.querySelector('.el-table__body-wrapper').clientHeight - 40
          : el.querySelector('.el-table__body-wrapper').clientHeight) / binding.value
      el.querySelectorAll('.el-table__row').forEach(item => {
        item.style.height = `${height}px`
      })
    }
    aaa()
    window.addEventListener('resize', () => {
      aaa()
    })
  },
  beforeUnmount() {
    window.removeEventListener('resize', () => {
      console.log('resize')
    })
  }
}
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}
</style>
