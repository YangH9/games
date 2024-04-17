<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <a-button type="link" href="https://codepen.io/yangh9/full/XWGajRw">
        https://codepen.io/yangh9/full/XWGajRw
      </a-button>
      <el-divider>表格--数据为Mockjs生成的随机数据</el-divider>
      <el-table
        :data="[tableData[0]]"
        style="width: 100%"
        @cell-dblclick="(_, column) => tableData?.forEach(i => i.yearMonth === column.property && (i.isEdit = true))"
      >
        <el-table-column
          v-for="(year, index) in [...new Set(tableData.map(i => i.year))]"
          :key="index"
          :label="year"
          header-align="center"
        >
          <el-table-column
            v-for="(item, inde) in tableData.filter(i => i.year === year)"
            :key="inde"
            :label="item.month"
            :prop="item.yearMonth"
            align="center"
            header-align="center"
          >
            <el-button v-if="!item.isEdit" link>{{ item.count }}</el-button>
            <el-input-number
              v-else
              v-model="item.count"
              v-focus
              size="small"
              :controls="false"
              style="width: 100%"
              @blur="() => (item.isEdit = false)"
            ></el-input-number>
          </el-table-column>
        </el-table-column>
      </el-table>
      <el-divider>双击修改</el-divider>
      <div style="background: var(--el-bg-color)">{{ tableData }}</div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import dayjs from 'dayjs'

const tableData = ref(
  Array.from(
    {
      length: 12
    },
    (_, index) => {
      const time = dayjs().startOf('month').add(-index, 'month')
      return {
        month: time.format('MM'),
        year: time.format('YYYY'),
        count: ~~(Math.random() * 10),
        yearMonth: time.format('YYYY-MM'),
        isEdit: false
      }
    }
  ).reverse()
)

const vFocus = {
  mounted(el) {
    el.querySelector('input').focus()
  }
}
</script>

<style scoped lang="scss">
.ant-layout-content {
  text-align: center;
}
</style>
