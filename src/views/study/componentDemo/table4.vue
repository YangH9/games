<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <a-button type="link" href="https://codepen.io/yangh9/full/ExrWGGY">
        https://codepen.io/yangh9/full/ExrWGGY
      </a-button>
      <el-table class="my_sortable" :data="tableData" style="width: 100%">
        <el-table-column type="index"></el-table-column>
        <el-table-column prop="date" label="Date"></el-table-column>
        <el-table-column prop="name" label="Name"></el-table-column>
        <el-table-column prop="address" label="Address"></el-table-column>
        <el-table-column prop="operate" label="操作">
          <template #default>
            <el-button class="my_handle" icon="ESort"></el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-divider>表格拖拽</el-divider>
      <div style="background: var(--el-bg-color)">{{ tableData }}</div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { nextTick, onMounted, ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import Mock from 'mockjs'
import Sortable from 'sortablejs'
import { cloneDeep } from 'lodash'

const tableData = ref(
  Mock.mock({
    'data|10': [
      {
        date: '@date',
        name: '@cname',
        address: '@city(true)'
      }
    ]
  }).data
)
onMounted(() => {
  // eslint-disable-next-line no-new
  new Sortable(document.querySelector('.my_sortable .el-table__body tbody'), {
    handle: '.my_handle',
    animation: 300,
    onEnd: ({ oldIndex, newIndex }) => {
      const oldTable = cloneDeep(tableData.value)
      // eslint-disable-next-line prefer-destructuring
      const item = oldTable.splice(oldIndex, 1)[0]
      oldTable.splice(newIndex, 0, item)
      tableData.value = []
      nextTick(() => {
        tableData.value = oldTable
      })
    }
  })
})
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}
</style>
