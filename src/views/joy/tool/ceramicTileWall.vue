<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="瓷砖墙" :hoverable="true">
      <MainDom></MainDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { computed, reactive, inject } from 'vue'

const Dayjs = inject('Dayjs')

// 默认最后一个是今天
// 第一个是往前12个月的1日
const toDay = Dayjs()
const firstDay = toDay.add(-12, 'month').date(1)

console.log(toDay.format('YYYY-MM-DD'), firstDay.format('YYYY-MM-DD'))

// 按年选择就是当年所有数据
const formData = reactive({
  size: 10,
  space: 4
})
const levelList = [
  { value: 'L0', color: '#ebedf0' },
  { value: 'L1', color: '#9be9a8' },
  { value: 'L2', color: '#40c463' },
  { value: 'L3', color: '#30a14e' },
  { value: 'L4', color: '#216e39' }
]

const MainDom = () => (
  <>
    <a-form model={formData}>
      <a-row gutter={24}>
        <a-col span={24} md={12}>
          <a-form-item label="大小">
            <a-input-number v-model:value={formData.size} min={10} max={100} class="w_100" />
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="间距">
            <a-input-number v-model:value={formData.space} min={10} max={100} class="w_100" />
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
    <a-divider class="my_2" />
    <a-space align="center" wrap>
      <span>低</span>
      {levelList.map((item) => (
        <div style={{ backgroundColor: item.color }} class="square"></div>
      ))}
      <span>高</span>
    </a-space>
    <a-divider class="my_2" />
    随机生成 {firstDay.format('YYYY/MM/DD')} ~ {toDay.format('YYYY/MM/DD')}
    <a-divider class="my_2" />
    <div class="scroll_x pb_2">
      <a-space
        size={formData.space}
        direction="vertical"
        wrap
        style={{ maxHeight: `${formData.size * 7 + formData.space * 6}px` }}
      >
        {Array.from({ length: toDay.diff(firstDay, 'day') + 1 }, (_, index) => {
          const date = firstDay.add(index, 'day')
          const attribute = {
            style: {
              width: `${formData.size}px`,
              height: `${formData.size}px`,
              backgroundColor: levelList[~~(Math.random() * 5)].color
            },
            date: `${date.format('YYYY年MM月DD日')}`
          }
          return (
            <a-tooltip v-slots={{ title: () => date.format('YYYY年MM月DD日') }}>
              <div class="square" {...attribute}></div>
            </a-tooltip>
          )
        })}
      </a-space>
    </div>
  </>
)
</script>

<style lang="scss" scoped>
:deep(.square) {
  width: 10px;
  height: 10px;
  border-radius: 20%;
  border-width: 0;
  position: relative;
  background-color: #ebedf0;
}
</style>
