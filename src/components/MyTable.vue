<template>
  <mainDom></mainDom>
</template>

<script setup lang="jsx">
import { useAttrs, computed } from 'vue'

let key = 0

const props = defineProps({
  data: Array,
  columns: Array,
  option: Object
})
const emit = defineEmits(['pageChange'])

const attrs = useAttrs()

const sizeChange = e => {
  emit('pageChange', { page: props.option.page ?? 1, pageSize: e })
}
const currentChange = e => {
  emit('pageChange', { page: e, pageSize: props.option.pageSize ?? 10 })
}

const empty = () => <el-empty description="暂无数据" />

const mainDom = () => (
  <>
    <el-table data={props.data} border stripe v-slots={{ empty }} {...attrs}>
      {props.columns.map(column => {
        const { render, headerRender, ...data } = column
        // 处理自定义头部和自定义内容
        const slots = {}
        if (headerRender) {
          slots.header = headerRender
        }
        if (render) {
          slots.default = render
        }
        if (!column.prop && !column.type) {
          key += 1
        }
        const columnProps = { align: 'center', ...data }
        return (
          <el-table-column key={column.prop ?? column.type ?? key} {...columnProps} v-slots={slots}></el-table-column>
        )
      })}
    </el-table>
    {props.option?.paging && (
      <el-pagination
        class="my_3"
        layout="total, ->, sizes, jumper, prev, pager, next"
        page-sizes={props.option?.sizes ?? [10, 20, 30]}
        default-page-size={props.option?.pageSize ?? 10}
        current-page={props.option?.page}
        total={props.option?.total ?? 0}
        onSizeChange={sizeChange}
        onCurrentChange={currentChange}
        {...attrs}
      ></el-pagination>
    )}
  </>
)
</script>

<style scoped lang="scss"></style>
