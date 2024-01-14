<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="生辰八字查询" class="mb_2" :hoverable="true">
      <MainDom></MainDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { message } from 'ant-design-vue'
import { reactive } from 'vue'
import { ganList, zhiList, solarToLunar, lunarToSolar } from '@/utils/calendar'

// const fiveElementsList = ['金', '木', '水', '火', '土']
/**
  ['甲', '乙', '丙', '丁', '戊', '己', '庚', '辛', '壬', '癸']
  ['子', '丑', '寅', '卯', '辰', '巳', '午', '未', '申', '酉', '戌', '亥']
  ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水']
 */
const fiveElementsList = ['水', '土', '木', '木', '土', '火', '火', '土', '金', '金', '土', '水']
const formData = reactive({
  birthdates: '',
  isLunar: false,
  isLeap: false
})
const data = reactive({
  solar: '',
  lunar: '',
  birthdates: '',
  fiveElements: ''
})

const gzFindFE = (gz) =>
  gz
    .split('')
    .map((key) => fiveElementsList[[...zhiList, ...ganList].findIndex((i) => i === key) % 12] || key)
    .join('')

const MainDom = () => (
  <>
    <a-form model={formData} label-col={{ style: { width: '100px' } }}>
      <a-form-item label="生日">
        <a-row gutter={[20, 20]}>
          <a-col span={24} md={12}>
            <a-date-picker
              v-model:value={formData.birthdates}
              format="YYYY-MM-DD HH"
              show-time={{ format: 'HH' }}
              placeholder="生日"
              class="w_100"
            />
          </a-col>
          <a-col span={24} md={12}>
            <a-space size={10} wrap>
              <a-switch
                v-model:checked={formData.isLunar}
                checked-children="农历（阴历）"
                un-checked-children="公历（阳历）"
              />
              {formData.isLunar && (
                <a-switch v-model:checked={formData.isLeap} checked-children="闰月" un-checked-children="平月" />
              )}
              <a-button
                disabled={!formData.birthdates}
                onClick={() => {
                  const { birthdates, isLunar, isLeap } = formData
                  const date = isLunar
                    ? lunarToSolar(birthdates.year(), birthdates.month() + 1, birthdates.date(), isLeap)
                    : solarToLunar(birthdates.year(), birthdates.month() + 1, birthdates.date())
                  if (date !== -1) {
                    const hour = ~~((birthdates.hour() + 1) / 2)
                    const zhi = zhiList[hour % 12]
                    const gan = ganList[(ganList.findIndex((i) => i === date.gzDay.slice(0, 1)) * 2 + hour) % 10]
                    const gzHour = `${gan}${zhi}`
                    console.log(formData.birthdates, date)
                    data.solar = `${date.cYear}年 ${date.cMonth}月 ${date.cDay}日 ${birthdates.hour()}时`
                    data.lunar = `${date.lYear}年 ${date.IMonthCn} ${date.IDayCn} ${zhi}时`
                    data.birthdates = `${date.gzYear}年 ${date.gzMonth}月 ${date.gzDay}日 ${gzHour}时`
                    data.fiveElements = gzFindFE(`${date.gzYear} ${date.gzMonth} ${date.gzDay} ${gzHour}`)
                  } else {
                    data.solar = ''
                    data.lunar = ''
                    data.birthdates = ''
                    data.fiveElements = ''
                    message.error('无效日期')
                  }
                }}
              >
                查询
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="公历（阳历）">{data.solar}</a-form-item>
      <a-form-item label="农历（阴历）">{data.lunar}</a-form-item>
      <a-form-item label="八字">{data.birthdates}</a-form-item>
      <a-form-item label="五行">{data.fiveElements}</a-form-item>
    </a-form>
  </>
)
</script>

<style lang="scss" scoped></style>
