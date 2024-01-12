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
import { reactive } from 'vue'
import { ganList, solarToLunar, zhiList } from '@/utils/calendar'

const formData = reactive({
  birthdates: ''
})
const data = reactive({
  birthdates: ''
})

/**

天干	地支	五行
甲	子	水
乙	丑	土
丙	寅	木
丁	卯	木
戊	辰	土
己	巳	火
庚	午	火
辛	未	土
壬	申	金
癸	酉	金
    戌	土
    亥	水
 */

const MainDom = () => (
  <>
    <a-form model={formData}>
      <a-form-item label="公历（阳历）">
        <a-space size={10} wrap>
          <a-date-picker
            v-model:value={formData.birthdates}
            format="YYYY-MM-DD HH"
            show-time={{ format: 'HH' }}
            placeholder="公历（阳历）"
          />
          <a-button
            disabled={!formData.birthdates}
            onClick={() => {
              const birthdates = formData.birthdates
              const date = solarToLunar(birthdates.year(), birthdates.month() + 1, birthdates.date())
              const gzHour = `${
                ganList[(ganList.findIndex((i) => i === date.gzDay.slice(0, 1)) * 2 + (birthdates.hour() + 1) / 2) % 10]
              }${zhiList[(birthdates.hour() + 1) / 2]}`
              console.log(formData.birthdates)
              data.birthdates = `${date.gzYear}年 ${date.gzMonth}月 ${date.gzDay}日 ${gzHour}时`
            }}
          >
            查询
          </a-button>
        </a-space>
      </a-form-item>
      <a-form-item label="生辰八字">{data.birthdates}</a-form-item>
    </a-form>
  </>
)
</script>

<style lang="scss" scoped>
:deep(.ant-picker) {
  width: 300px;
  max-width: 100%;
}
</style>
