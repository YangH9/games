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
import { reactive, inject, computed } from 'vue'
import { random } from 'lodash'
import isLeapYear from 'dayjs/plugin/isLeapYear'
import minMax from 'dayjs/plugin/minMax'

const Dayjs = inject('Dayjs')
Dayjs.extend(isLeapYear).extend(minMax)

// 默认最后一个是今天
const toDay = Dayjs()
// 第一个是往前12个月
const firstDay = toDay.add(-12, 'month')

// 按年选择就是当年所有数据
const formData = reactive({
  type: 0,
  model: 'all',
  size: 10,
  space: 4,
  setting: false,
  colorList: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39']
})
const levelList = [
  { value: 'L0', color: '#ebedf0' },
  { value: 'L1', color: '#9be9a8' },
  { value: 'L2', color: '#40c463' },
  { value: 'L3', color: '#30a14e' },
  { value: 'L4', color: '#216e39' }
]
const typeOption = [
  {
    value: 0,
    label: '近一年',
    length: toDay.diff(firstDay, 'day') + 1,
    start: firstDay,
    end: toDay
  },
  ...Array.from({ length: 5 }, (_, index) => {
    let item = toDay.add(-index, 'year').startOf('year')
    return {
      value: index + 1,
      label: `${item.year()}`,
      length: 365 + item.isLeapYear(),
      start: item,
      end: Dayjs.min(item.endOf('year'), toDay.endOf('day'))
    }
  })
]
const dayValue = reactive({})
const monthCount = computed(() => {
  const item = typeOption[formData.type]
  const start = item.start.day(0)
  const list = Array.from({ length: item.length / 7 }, (_, i) =>
    i ? start.add(i * 7, 'day').format('YYYY-MM') : item.start.format('YYYY-MM')
  ).reduce((total, current) => {
    total[current] ? total[current]++ : (total[current] = 1)
    return total
  }, {})
  return list
})

const initDayValue = () => {
  const start = toDay.add(-4, 'year').startOf('year')
  Array.from({ length: toDay.diff(start, 'day') + 1 }, (_, index) => {
    let item = start.add(index, 'day')
    switch (formData.model) {
      case 'work':
        dayValue[`${item.format('YYYY-MM-DD')}`] = item.day() % 6 === 0 ? +!random(0, 2) : random(1, 4)
        break
      case 'null':
        dayValue[`${item.format('YYYY-MM-DD')}`] = 0
        break
      default:
        dayValue[`${item.format('YYYY-MM-DD')}`] = random(0, 4)
    }
  })
  console.log(dayValue)
}
initDayValue()

const MainDom = () => (
  <>
    <a-form model={formData}>
      <a-row gutter={24}>
        <a-col span={24}>
          <a-form-item label="时间">
            <a-radio-group v-model:value={formData.type} options={typeOption}></a-radio-group>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="生成模式" onChange={() => initDayValue()}>
            <a-radio-group
              v-model:value={formData.model}
              options={[
                { value: 'all', label: '全随机' },
                { value: 'work', label: '工作日随机' },
                { value: 'null', label: '空白数据' }
              ]}
            ></a-radio-group>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="更多设置" onChange={() => initDayValue()}>
            <a-switch v-model:checked={formData.setting}></a-switch>
          </a-form-item>
        </a-col>
        {formData.setting && (
          <>
            <a-col span={24} md={12}>
              <a-form-item label="瓷砖大小">
                <a-input-number v-model:value={formData.size} min={10} max={100} class="w_100" />
              </a-form-item>
            </a-col>
            <a-col span={24} md={12}>
              <a-form-item label="瓷砖间距">
                <a-input-number v-model:value={formData.space} min={2} max={20} class="w_100" />
              </a-form-item>
            </a-col>
            <a-col span={24} md={12}>
              <a-form-item label="瓷砖颜色">
                <a-space size={10}>
                  <el-color-picker v-model={formData.colorList[0]}></el-color-picker>
                  <el-color-picker v-model={formData.colorList[1]}></el-color-picker>
                  <el-color-picker v-model={formData.colorList[2]}></el-color-picker>
                  <el-color-picker v-model={formData.colorList[3]}></el-color-picker>
                  <el-color-picker v-model={formData.colorList[4]}></el-color-picker>
                  <a-button onClick={() => (formData.colorList = levelList.map((i) => i.color))}>恢复默认</a-button>
                </a-space>
              </a-form-item>
            </a-col>
          </>
        )}
      </a-row>
    </a-form>
    <a-divider class="my_2" />
    {typeOption[formData.type].start.format('YYYY/MM/DD')} ~ {typeOption[formData.type].end.format('YYYY/MM/DD')}
    <a-divider class="my_2" />
    <div class="scroll_x " style={{ paddingBottom: `${formData.space + formData.space / 2}px` }}>
      <a-space size={0} direction="vertical">
        <a-space size={4}>
          <div
            style={{
              width: `${(formData.size + 2) * 2}px`,
              fontSize: `${formData.size}px`
            }}
          ></div>
          {Array.from({ length: 12 }, (_, index) => {
            const count = Object.values(monthCount.value)[index]
            return (
              <div
                style={{
                  width: `${formData.size * count + formData.space * (count - 1)}px`,
                  fontSize: `${formData.size}px`
                }}
                class="grow"
              >
                {
                  ['一月', '二月', '三月', '四月', '五月', '六月', '七月', '八月', '九月', '十月', '十一月', '十二月'][
                    typeOption[formData.type].start.add(index, 'month').month()
                  ]
                }
              </div>
            )
          })}
        </a-space>
        <a-space
          size={formData.space}
          direction="vertical"
          wrap
          style={{ maxHeight: `${formData.size * 7 + formData.space * 6}px` }}
        >
          {Array.from({ length: 7 }, (_, index) => (
            <div
              style={{
                width: `${(formData.size + 2) * 2}px`,
                height: `${formData.size}px`,
                fontSize: `${formData.size}px`,
                lineHeight: `${formData.size}px`
              }}
            >
              {(index + 1) % 2 === 0 ? ['周日', '周一', '周二', '周三', '周四', '周五', '周六'][index] : ''}
            </div>
          ))}
          {Array.from({ length: typeOption[formData.type].start.day() }, () => (
            <div class="square"></div>
          ))}
          {Array.from({ length: typeOption[formData.type].length }, (_, index) => {
            const date = typeOption[formData.type].start.add(index, 'day')
            const attribute = {
              style: {
                width: `${formData.size}px`,
                height: `${formData.size}px`,
                backgroundColor: formData.colorList[dayValue[date.format('YYYY-MM-DD')]] || formData.colorList[0]
              },
              date: `${date.format('YYYY年MM月DD日')}`
            }
            return (
              <a-tooltip v-slots={{ title: () => date.format('YYYY年MM月DD日 dddd') }}>
                <div class="square" {...attribute}></div>
              </a-tooltip>
            )
          })}
        </a-space>
      </a-space>
    </div>
    <div class="flex content_end mt_2">
      <a-space align="center">
        <span>低</span>
        {formData.colorList.map((item) => (
          <div style={{ backgroundColor: item }} class="square"></div>
        ))}
        <span>高</span>
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
  background-color: transparent;
}
</style>
