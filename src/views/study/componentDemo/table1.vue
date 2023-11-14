<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <a-table :dataSource="tableData" :columns="columnData" :scroll="{ x: 1500 }" />
      <a-button @click="print">print</a-button>
      <div class="ant-card mt_3">
        <div>选择的数据：</div>
        <div class="border_all">{{ checkD }}</div>
        <div class="border_all" v-html="checkD"></div>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

import data1 from './data/data1.json'
import data2 from './data/data2.json'

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data1)
    }, 300)
  })
}
const getData1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data2)
    }, 300)
  })
}
const checkD = ref('')
const columnData = ref([])
const tableData = ref([])
const defaultColumn = [
  { prop: 'matchNumStr', label: '编号', width: 100, unChecked: true, fixed: 'left' },
  { prop: 'matchDate', label: '时间', width: 120, align: 'center', unChecked: true },
  { prop: 'HADh', label: '列表1', width: 85 },
  { prop: 'HADd', label: '列表2', width: 85 },
  { prop: 'HADa', label: '列表3', width: 85 },
  { prop: 'HHADh', label: '列表4', width: 85 },
  { prop: 'HHADd', label: '列表5', width: 85 },
  { prop: 'HHADa', label: '列表6', width: 85 },
  { prop: 's00s00', label: '0.0', width: 85 },
  { prop: 's00s01', label: '0.1', width: 85 },
  { prop: 's00s02', label: '0.2', width: 85 },
  { prop: 's00s03', label: '0.3', width: 85 },
  { prop: 's00s04', label: '0.4', width: 85 },
  { prop: 's00s05', label: '0.5', width: 85 },
  { prop: 's01s00', label: '1.0', width: 85 },
  { prop: 's01s01', label: '1.1', width: 85 },
  { prop: 's01s02', label: '1.2', width: 85 },
  { prop: 's01s03', label: '1.3', width: 85 },
  { prop: 's01s04', label: '1.4', width: 85 },
  { prop: 's01s05', label: '1.5', width: 85 },
  { prop: 's02s00', label: '2.0', width: 85 },
  { prop: 's02s01', label: '2.1', width: 85 },
  { prop: 's02s02', label: '2.2', width: 85 },
  { prop: 's02s03', label: '2.3', width: 85 },
  { prop: 's02s04', label: '2.4', width: 85 },
  { prop: 's02s05', label: '2.5', width: 85 },
  { prop: 's03s00', label: '3.0', width: 85 },
  { prop: 's03s01', label: '3.1', width: 85 },
  { prop: 's03s02', label: '3.2', width: 85 },
  { prop: 's03s03', label: '3.3', width: 85 },
  { prop: 's04s00', label: '4.0', width: 85 },
  { prop: 's04s01', label: '4.1', width: 85 },
  { prop: 's04s02', label: '4.2', width: 85 },
  { prop: 's05s00', label: '5.0', width: 85 },
  { prop: 's05s01', label: '5.1', width: 85 },
  { prop: 's05s02', label: '5.2', width: 85 },
  { prop: 's-1sh', label: 'a其他', width: 85 },
  { prop: 's-1sd', label: 'b其他', width: 85 },
  { prop: 's-1sa', label: 'c其他', width: 85 },
  { prop: 'hh', label: 'aa', width: 85 },
  { prop: 'hd', label: 'ab', width: 85 },
  { prop: 'ha', label: 'ac', width: 85 },
  { prop: 'dh', label: 'ba', width: 85 },
  { prop: 'dd', label: 'bb', width: 85 },
  { prop: 'da', label: 'bc', width: 85 },
  { prop: 'ah', label: 'ca', width: 85 },
  { prop: 'ad', label: 'cb', width: 85 },
  { prop: 'aa', label: 'cc', width: 85 },
  { prop: 's0', label: '00', width: 85 },
  { prop: 's1', label: '01', width: 85 },
  { prop: 's2', label: '02', width: 85 },
  { prop: 's3', label: '03', width: 85 },
  { prop: 's4', label: '04', width: 85 },
  { prop: 's5', label: '05', width: 85 },
  { prop: 's6', label: '06', width: 85 },
  { prop: 's7', label: '07', width: 85 }
]

const init = async () => {
  // 获取主要数据
  const { value } = await getData()

  const mapRes = value.matchInfoList
    .flatMap((i) => i.subMatchList)
    .map((i) => {
      return new Promise(async (resolve, reject) => {
        const obj = {
          matchId: i.matchId,
          matchNumStr: i.matchNumStr,
          matchDate: i.matchDate
        }
        i.oddsList.forEach((j) => {
          if (['HAD', 'HHAD'].includes(j.poolCode)) {
            obj[`${j.poolCode}a`] = { value: j.a, checked: false }
            obj[`${j.poolCode}d`] = { value: j.d, checked: false }
            obj[`${j.poolCode}h`] = { value: j.h, checked: false }
          }
        })
        // 按matchId查询数据
        const {
          value: { oddsHistory: detailData }
        } = await getData1(obj.matchId)

        ;['crsList', 'hafuList', 'ttgList'].forEach((key) => {
          const detail = detailData[key].reduce(
            (total, item) =>
              new Date(`${total.updateDate} ${total.updateTime}`) < new Date(`${item.updateDate} ${item.updateTime}`)
                ? item
                : total,
            { updateDate: '1970', updateTime: '0:0' }
          )
          Object.keys(detail).forEach((key) => {
            obj[key] = { value: detail[key], checked: false }
          })
        })
        resolve(obj)
      })
    })
  const data = await Promise.all(mapRes)
  columnData.value = defaultColumn.map((i) => ({
    title: i.label,
    key: i.prop,
    dataIndex: i.prop,
    fixed: i.fixed,
    width: i.width,
    unChecked: i.unChecked,
    customRender: ({ text, record, index, column }) =>
      column.unChecked ? (
        record[column.key]
      ) : record[column.key] ? (
        <a-checkbox v-model:checked={record[column.key].checked}>{record[column.key].value}</a-checkbox>
      ) : (
        ''
      )
  }))
  tableData.value = data
}
init()

const print = () => {
  const column = JSON.parse(JSON.stringify(defaultColumn))
  const checkData = tableData.value
    .filter((i) => Object.values(i).find((i) => i?.checked))
    .map((item) => {
      const numList = column.filter((i) => item[i.prop]?.checked).map((i) => item[i.prop].value)
      // return `${item.matchNumStr}：${numList.join('+')}`
      return `<p><font size="12">${item.matchNumStr}</font></p><p><font size="8">${numList.join('+')}</font></p>`
    })
  checkD.value = checkData.join('')
}
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
</style>
