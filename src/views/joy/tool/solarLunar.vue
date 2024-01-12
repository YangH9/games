<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="公历农历转换器" class="mb_2" :hoverable="true"></a-card>
    <MainDom></MainDom>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive } from 'vue'
import { lunarToSolar, solarToLunar } from '@/utils/calendar'

const formData = reactive({
  solar: '',
  lunar: '',
  isLeap: false
})
const data = reactive({
  solar: '',
  lunar: ''
})

const MainDom = () => (
  <>
    <a-card title="公历转农历" class="mb_2" hoverable={true}>
      <a-form model={formData}>
        <a-form-item label="公历（阳历）">
          <a-space size={10} wrap>
            <a-date-picker v-model:value={formData.solar} placeholder="公历（阳历）" />
            <a-button
              disabled={!formData.solar}
              onClick={() => {
                const solar = formData.solar
                const date = solarToLunar(solar.year(), solar.month() + 1, solar.date())
                data.solar = `${date.lYear}年${date.isLeap ? '闰' : ''}${date.lMonth}月${date.lDay}日（${
                  date.IMonthCn
                }${date.IDayCn}）`
              }}
            >
              转为农历（阴历）
            </a-button>
          </a-space>
        </a-form-item>
        <a-form-item label="农历（阴历）">{data.solar}</a-form-item>
      </a-form>
    </a-card>
    <a-card title="农历转公历" class="mb_2" hoverable={true}>
      <a-form model={formData}>
        <a-form-item label="农历（阴历）">
          <a-space size={10} wrap>
            <a-date-picker v-model:value={formData.lunar} placeholder="农历（阴历）" />
            <a-switch v-model:checked={formData.isLeap} checked-children="闰月" un-checked-children="平月" />
            <a-button
              disabled={!formData.lunar}
              onClick={() => {
                const lunar = formData.lunar
                const date = lunarToSolar(lunar.year(), lunar.month() + 1, lunar.date(), formData.isLeap)
                data.lunar = date + 1 ? `${date.cYear}年${date.cMonth}月${date.cDay}日` : '无效日期'
              }}
            >
              转为公历（阳历）
            </a-button>
          </a-space>
        </a-form-item>
        <a-form-item label="公历（阳历）">{data.lunar}</a-form-item>
      </a-form>
    </a-card>
  </>
)
</script>

<style lang="scss" scoped>
:deep(.ant-picker) {
  width: 300px;
  max-width: 100%;
}
</style>
