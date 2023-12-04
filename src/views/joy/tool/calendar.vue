<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="日历" :hoverable="true">
      <toDayRender></toDayRender>
      <a-divider></a-divider>
      <a-calendar>
        <template #dateCellRender="{ current }">
          <dateCellRender :data="current"></dateCellRender>
        </template>
      </a-calendar>
      <a-divider></a-divider>
      <el-calendar>
        <template #date-cell="{ data }">
          <dateCell :data="data"></dateCell>
        </template>
      </el-calendar>
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
  return year % 4 == 0 ? (year % 100 != 0 ? 1 : year % 400 == 0 ? 1 : 0) : 0
}
let today = new Date(), // 获取当前日期
  y = today.getFullYear(), // 获取日期中的年份
  m = today.getMonth(), // 获取日期中的月份(需要注意的是：月份是从0开始计算，获取的值比正常月份的值少1)
  d = today.getDate(), // 获取日期中的日(方便在建立日期表格时高亮显示当天)
  firstday = new Date(y, m, 1), // 获取当月的第一天
  dayOfWeek = firstday.getDay(), // 判断第一天是星期几(返回[0-6]中的一个，0代表星期天，1代表星期一，以此类推)
  days_per_month = new Array(31, 28 + isLeap(y), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31), // 创建月份数组
  str_nums = Math.ceil((dayOfWeek + days_per_month[m]) / 7), // 确定日期表格所需的行数
  data = solarToLunar(y, m + 1, d)

const toDayRender = () => {
  return (
    <>
      <h3>
        公历：{data.cYear}年{data.cMonth}月{data.cDay}日{data.ncWeek}
      </h3>
      <h3>
        农历：{data.IMonthCn} {data.IDayCn}
      </h3>
      <h3>
        天干地支纪年：{data.gzYear}年 【{data.Animal}年】 {data.gzMonth}月 {data.gzDay}日
      </h3>
      <h3>{data.astro}</h3>
      <table cellspacing="0" class="text_center">
        <tr>
          {new Array(7).fill(1).map((_, i) => (
            <th>{weekText[i]}</th>
          ))}
        </tr>
        {new Array(str_nums).fill(1).map((_, i) => (
          <tr>
            {new Array(7).fill(1).map((_, j) => (
              <td>
                {7 * i + j - dayOfWeek + 1 <= 0 || 7 * i + j - dayOfWeek + 1 > days_per_month[m]
                  ? ''
                  : 7 * i + j - dayOfWeek + 1}
              </td>
            ))}
          </tr>
        ))}
      </table>
    </>
  )
}

const dateCellRender = ({ data }) => {
  const dateData = solarToLunar(data.year(), data.month() + 1, data.date())
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

const dateCell = ({ data }) => {
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
</script>

<style lang="scss" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
</style>
