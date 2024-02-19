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

// prettier-ignore
const mapTable = {
  // 阴阳
  yinYang: {
    甲: '阳', 乙: '阴', 丙: '阳', 丁: '阴', 戊: '阳', 己: '阴', 庚: '阳', 辛: '阴', 壬: '阳', 癸: '阴',
    子: '阳', 丑: '阴', 寅: '阳', 卯: '阴', 辰: '阳', 巳: '阴', 午: '阳', 未: '阴', 申: '阳', 酉: '阴', 戌: '阳', 亥: '阴'
  },
  // 旺季
  wangJi: {
    甲: '春季', 乙: '春季', 丙: '夏季', 丁: '夏季', 戊: '四季', 己: '四季', 庚: '秋季', 辛: '秋季', 壬: '冬季', 癸: '冬季',
    子: '冬季', 丑: '四季', 寅: '春季', 卯: '春季', 辰: '四季', 巳: '夏季', 午: '夏季', 未: '四季', 申: '秋季', 酉: '秋季', 戌: '四季', 亥: '冬季'
  },
  // 方位
  fangWei: {
    甲: '东方', 乙: '东方', 丙: '南方', 丁: '南方', 戊: '中央', 己: '中央', 庚: '西方', 辛: '西方', 壬: '北方', 癸: '北方',
    子: '北方', 丑: '中央', 寅: '东方', 卯: '东方', 辰: '中央', 巳: '南方', 午: '南方', 未: '中央', 申: '西方', 酉: '西方', 戌: '中央', 亥: '北方'
  },
  // 五行
  wuXing: {
    甲: '木', 乙: '木', 丙: '火', 丁: '火', 戊: '土', 己: '土', 庚: '金', 辛: '金', 壬: '水', 癸: '水',
    子: '水', 丑: '土', 寅: '木', 卯: '木', 辰: '土', 巳: '火', 午: '火', 未: '土', 申: '金', 酉: '金', 戌: '土', 亥: '水'
  },
  jiaZiWuXing: {
    甲子: '海中金', 乙丑: '海中金', 甲午: '沙中金', 乙未: '沙中金', 丙寅: '炉中火', 丁卯: '炉中火', 丙申: '山下火', 丁酉: '山下火',
    戊辰: '大林木', 己巳: '大林木', 戊戌: '平地木', 己亥: '平地木', 庚午: '路旁土', 辛未: '路旁土', 庚子: '壁上土', 辛丑: '壁上土',
    壬申: '剑锋金', 癸酉: '剑锋金', 壬寅: '金箔金', 癸卯: '金箔金', 甲戌: '山头火', 乙亥: '山头火', 甲辰: '覆灯火', 乙巳: '覆灯火',
    丙子: '涧下水', 丁丑: '涧下水', 丙午: '天河水', 丁未: '天河水', 戊寅: '城头土', 己卯: '城头土', 戊申: '大驿土', 己酉: '大驿土',
    庚辰: '白腊金', 辛巳: '白腊金', 庚戌: '钗钏金', 辛亥: '钗钏金', 壬午: '杨柳木', 癸未: '杨柳木', 壬子: '桑柘木', 癸丑: '桑柘木',
    甲申: '泉中水', 乙酉: '泉中水', 甲寅: '大溪水', 乙卯: '大溪水', 丙戌: '屋上土', 丁亥: '屋上土', 丙辰: '沙中土', 丁巳: '沙中土',
    戊子: '霹雳火', 己丑: '霹雳火', 戊午: '天上火', 己未: '天上火', 庚寅: '松柏木', 辛卯: '松柏木', 庚申: '石榴木', 辛酉: '石榴木',
    壬辰: '长流水', 癸巳: '长流水', 壬戌: '大海水', 癸亥: '大海水'
  }
}

const formData = reactive({
  birthdates: '',
  isLunar: false,
  isLeap: false
})
const data = reactive({
  solar: '',
  lunar: '',
  birthdates: '',
  wuXing: '',
  riZhu: '',
  yinYang: '',
  jiaZiWuXing: '',
  wangJi: '',
  fangWei: ''
})

// 生成信息
const generate = () => {
  const { birthdates, isLunar, isLeap } = formData
  const { wuXing, yinYang, jiaZiWuXing, wangJi, fangWei } = mapTable
  const date = isLunar
    ? lunarToSolar(birthdates.year(), birthdates.month() + 1, birthdates.date(), isLeap)
    : solarToLunar(birthdates.year(), birthdates.month() + 1, birthdates.date())
  const obj = {}
  if (date !== -1) {
    const hour = ~~((birthdates.hour() + 1) / 2)
    const zhi = zhiList[hour % 12]
    const gan = ganList[(ganList.findIndex(i => i === date.gzDay.slice(0, 1)) * 2 + hour) % 10]
    const gzHour = `${gan}${zhi}`
    console.log(formData.birthdates, date)
    obj.solar = `${date.cYear}年 ${date.cMonth}月 ${date.cDay}日 ${birthdates.hour()}时`
    obj.lunar = `${date.lYear}年 ${date.IMonthCn} ${date.IDayCn} ${zhi}时`
    obj.birthdates = `${date.gzYear}年 ${date.gzMonth}月 ${date.gzDay}日 ${gzHour}时`
    obj.wuXing = [date.gzYear, date.gzMonth, date.gzDay, gzHour]
      .map(key => `${wuXing[key.split('')[0]]}${wuXing[key.split('')[1]]}`)
      .join(' ')
    obj.riZhu = `${date.gzDay} ${date.gzDay.split('')[0]}${wuXing[date.gzDay.split('')[0]]}命`
    obj.yinYang = [date.gzYear, date.gzMonth, date.gzDay, gzHour].map(key => yinYang[key.split('')[0]]).join(' ')
    obj.jiaZiWuXing = [date.gzYear, date.gzMonth, date.gzDay, gzHour].map(key => jiaZiWuXing[key]).join(' ')
    obj.wangJi = [date.gzYear, date.gzMonth, date.gzDay, gzHour].map(key => wangJi[key.split('')[0]]).join(' ')
    obj.fangWei = [date.gzYear, date.gzMonth, date.gzDay, gzHour].map(key => fangWei[key.split('')[0]]).join(' ')
  } else {
    message.error('无效日期')
  }
  data.solar = obj.solar || ''
  data.lunar = obj.lunar || ''
  data.birthdates = obj.birthdates || ''
  data.wuXing = obj.wuXing || ''
  data.riZhu = obj.riZhu || ''
  data.yinYang = obj.yinYang || ''
  data.jiaZiWuXing = obj.jiaZiWuXing || ''
  data.wangJi = obj.wangJi || ''
  data.fangWei = obj.fangWei || ''
}

const MainDom = () => (
  <>
    <a-form model={formData} label-col={{ style: { width: '100px' } }}>
      <a-form-item label="生日" class="mb_2">
        <a-row gutter={[10, 10]}>
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
            <a-space size={10} wrap class="mb_0">
              <a-switch
                v-model:checked={formData.isLunar}
                checked-children="农历（阴历）"
                un-checked-children="公历（阳历）"
              />
              {formData.isLunar && (
                <a-switch v-model:checked={formData.isLeap} checked-children="闰月" un-checked-children="平月" />
              )}
              <a-button disabled={!formData.birthdates} onClick={generate}>
                查询
              </a-button>
            </a-space>
          </a-col>
        </a-row>
      </a-form-item>
      <a-form-item label="公历（阳历）" class="mb_2">
        {data.solar}
      </a-form-item>
      <a-form-item label="农历（阴历）" class="mb_2">
        {data.lunar}
      </a-form-item>
      <a-form-item label="八字" class="mb_2">
        {data.birthdates}
      </a-form-item>
      <a-form-item label="五行" class="mb_2">
        {data.wuXing}
      </a-form-item>
      <a-form-item label="日柱" class="mb_2">
        {data.riZhu}
      </a-form-item>
      <a-form-item label="阴阳" class="mb_2">
        {data.yinYang}
      </a-form-item>
      <a-form-item label="纳音" class="mb_2">
        {data.jiaZiWuXing}
      </a-form-item>
      <a-form-item label="旺季" class="mb_2">
        {data.wangJi}
      </a-form-item>
      <a-form-item label="方向" class="mb_2">
        {data.fangWei}
      </a-form-item>
    </a-form>
    <a-divider plain>内容仅供参考</a-divider>
  </>
)
</script>

<style scoped lang="scss"></style>
