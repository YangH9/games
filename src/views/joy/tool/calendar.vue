<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="日历" :hoverable="true">
      <toDayRender></toDayRender>
      <a-divider></a-divider>
      <aCalendarDom></aCalendarDom>
      <a-divider></a-divider>
      <elCalendarDom></elCalendarDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { weekText, lunarToSolar, solarToLunar } from '@/utils/calendar'

console.log(lunarToSolar(1999, 1, 17))
console.log(lunarToSolar(1998, 5, 10, true))

// 判断当前年份是否是闰年(闰年2月份有29天，平年2月份只有28天)
function isLeap(year) {
  return year % 4 === 0 ? (year % 100 !== 0 ? 1 : year % 400 === 0 ? 1 : 0) : 0
}
const today = new Date() // 获取当前日期
const y = today.getFullYear() // 获取日期中的年份
const m = today.getMonth() // 获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
const d = today.getDate() // 获取日期中的日(方便在建立日期表格时高亮显示当天)
const firstday = new Date(y, m, 1) // 获取当月的第一天
const dayOfWeek = firstday.getDay() // 判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
const daysPerMonth = [31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31] // 创建月份数组
const strNums = Math.ceil((dayOfWeek + daysPerMonth[m]) / 7) // 确定日期表格所需的行数
const date = solarToLunar(y, m + 1, d)

const toDayRender = () => (
  <>
    <h3>
      公历：{date.cYear}年 {date.cMonth}月 {date.cDay}日 {date.ncWeek}
    </h3>
    <h3>
      农历：{date.lYear}年 {date.IMonthCn} {date.IDayCn}
    </h3>
    <h3>
      天干地支纪年：{date.gzYear} {date.Animal}年 {date.gzMonth}月 {date.gzDay}日
    </h3>
    <h3>{date.astro}</h3>
    <table cellspacing="0" class="text_center">
      <tr>
        {Array.from({ length: 7 }, (_, i) => (
          <th>{weekText[i]}</th>
        ))}
      </tr>
      {Array.from({ length: strNums }, (_, i) => (
        <tr>
          {Array.from({ length: 7 }, (_, j) => {
            const num = 7 * i + j - dayOfWeek + 1
            return (
              <td class={num === d ? 'ant-picker-calendar-date-today' : ''}>
                {num <= 0 || num > daysPerMonth[m] ? '' : num}
              </td>
            )
          })}
        </tr>
      ))}
    </table>
  </>
)

const aCalendarDom = () => (
  <a-calendar
    v-slots={{
      dateCellRender: ({ current }) => {
        const dateData = solarToLunar(current.year(), current.month() + 1, current.date())
        return (
          <a-space direction="vertical" size={0}>
            {dateData.lFestival && <a-badge status="success" text={`${dateData.lFestival}`} />}
            {dateData.cFestival && <a-badge status="success" text={`${dateData.cFestival}`} />}
            {dateData.Term && <a-badge status="success" text={`${dateData.Term}`} />}
            <a-badge status="success" text={`${dateData.gzYear}/${dateData.gzMonth}/${dateData.gzDay}`} />
            <a-badge status="success" text={`${dateData.IMonthCn}${dateData.IDayCn}`} />
            <a-badge status="success" text={`${dateData.astro}`} />
          </a-space>
        )
      }
    }}
  ></a-calendar>
)

const elCalendarDom = () => (
  <el-calendar
    v-slots={{
      'date-cell': ({ data }) => {
        const dateData = solarToLunar(data.date.getFullYear(), data.date.getMonth() + 1, data.date.getDate())
        return (
          <el-scrollbar>
            <el-space direction="vertical" alignment="flex-start" size={0}>
              {data.date.toFormat('DD')}
              {dateData.lFestival && dateData.lFestival}
              {dateData.cFestival && dateData.cFestival}
              {dateData.Term && dateData.Term}
              {`${dateData.gzYear}/${dateData.gzMonth}/${dateData.gzDay}`}
              {`${dateData.IMonthCn}${dateData.IDayCn}`}
              {`${dateData.astro}`}
            </el-space>
          </el-scrollbar>
        )
      }
    }}
  ></el-calendar>
)
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
