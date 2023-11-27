<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <MyTable :data="tableData" :columns="columnData"></MyTable>
      <div class="my_3">
        <ElButton class="mx_2" @click="setColumn">修改显示列</ElButton>
        <ElButton class="mx_2" @click="printData">输出数据</ElButton>
        <ElButton class="mx_2" @click="tablePreview">表格预览</ElButton>
        <ElButton class="mx_2" @click="printView">导出预览</ElButton>
      </div>
      <div class="ant-card my_3">
        <div>选择的数据：</div>
        <div>{{ checkD }}</div>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup lang="jsx">
import { computed, ref } from 'vue'
import { ElMessageBox, ElCheckbox, ElCheckboxGroup, ElDivider, ElTable, ElTableColumn, ElButton } from 'element-plus'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { export2Img, export2Pdf } from '@/utils/export'
import '@/utils/grhtml5-6.8-min.js'
import data1 from './data/data1.json'
import data2 from './data/data2.json'

const columnObject = {
  HAD: { HADh: '列表1', HADd: '列表2', HADa: '列表3' },
  HHAD: { HHADh: '列表4', HHADd: '列表5', HHADa: '列表6' },
  crsList: {
    s00s00: '0.0',
    s00s01: '0.1',
    s00s02: '0.2',
    s00s03: '0.3',
    s00s04: '0.4',
    s00s05: '0.5',
    s01s00: '1.0',
    s01s01: '1.1',
    s01s02: '1.2',
    s01s03: '1.3',
    s01s04: '1.4',
    s01s05: '1.5',
    s02s00: '2.0',
    s02s01: '2.1',
    s02s02: '2.2',
    s02s03: '2.3',
    s02s04: '2.4',
    s02s05: '2.5',
    s03s00: '3.0',
    s03s01: '3.1',
    s03s02: '3.2',
    s03s03: '3.3',
    s04s00: '4.0',
    s04s01: '4.1',
    s04s02: '4.2',
    s05s00: '5.0',
    s05s01: '5.1',
    s05s02: '5.2',
    's-1sh': 'a其他',
    's-1sd': 'b其他',
    's-1sa': 'c其他'
  },
  hafuList: { hh: 'aa', hd: 'ab', ha: 'ac', dh: 'ba', dd: 'bb', da: 'bc', ah: 'ca', ad: 'cb', aa: 'cc' },
  ttgList: { s0: '00', s1: '01', s2: '02', s3: '03', s4: '04', s5: '05', s6: '06', s7: '07' }
}

const defaultColumn = [
  { prop: 'matchNumStr', label: '编号', group: 0, minWidth: 100, disabled: true, fixed: 'left' },
  { prop: 'matchDate', label: '时间', group: 0, minWidth: 120, disabled: true, fixed: 'left' },
  ...Object.entries(columnObject)
    .map(([key, value]) => Object.entries(value).map(([k, v]) => ({ prop: k, label: v, group: key, minWidth: 85 })))
    .flat(1)
]

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
            obj[`${j.poolCode}a`] = { value: j.a, prop: `${j.poolCode}a`, checked: false }
            obj[`${j.poolCode}d`] = { value: j.d, prop: `${j.poolCode}d`, checked: false }
            obj[`${j.poolCode}h`] = { value: j.h, prop: `${j.poolCode}h`, checked: false }
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
            obj[key] = { value: detail[key], prop: key, checked: false }
          })
        })
        resolve(obj)
      })
    })
  const data = await Promise.all(mapRes)
  columnData.value = defaultColumn.map((i) => ({
    ...i,
    active: i.active ?? i.disabled ?? true,
    render: ({ row, column }) =>
      ['matchNumStr', 'matchDate'].includes(column.property) ? (
        row[column.property]
      ) : row[column.property] ? (
        <ElCheckbox v-model={row[column.property].checked}>{row[column.property].value}</ElCheckbox>
      ) : (
        ''
      )
  }))
  tableData.value = data
}
init()

const setColumn = () => {
  const column = ref(columnData.value.map((i) => ({ ...i, value: i.prop })))
  const defaultActiveList = column.value.filter((i) => i.disabled).map((i) => i.value)
  const activeList = ref(column.value.filter((i) => i.active).map((i) => i.value))
  const checkAll = computed(() => activeList.value.length === column.value.length)
  const indeterminate = computed(() => activeList.value.length > 0 && activeList.value.length < column.value.length)
  const groupOption = computed(() => {
    const active = activeList.value
    const colum = column.value
    const obj = {}
    Object.keys(columnObject).forEach((key) => {
      const col = colum.filter((i) => i.group === key)
      const act = active.filter((i) => col.find((a) => i === a.prop))
      obj[key] = {
        checkAll: act.length === col.length,
        indeterminate: act.length > 0 && act.length < col.length
      }
    })
    return obj
  })
  console.log(column.value)
  ElMessageBox({
    customStyle: {
      maxWidth: '60%'
    },
    message: () => (
      <>
        <div>
          <ElCheckbox
            model-value={checkAll.value}
            indeterminate={indeterminate.value}
            onChange={() =>
              checkAll.value
                ? (activeList.value = JSON.parse(JSON.stringify(defaultActiveList)))
                : (activeList.value = column.value.filter((i) => i.active).map((i) => i.value))
            }
          >
            全选
          </ElCheckbox>
          {Object.keys(columnObject).map((key) => (
            <ElCheckbox
              model-value={groupOption.value[key].checkAll}
              indeterminate={groupOption.value[key].indeterminate}
              onChange={() =>
                !groupOption.value[key].checkAll
                  ? (activeList.value = [
                      ...new Set([
                        ...activeList.value,
                        ...column.value.filter((i) => i.group === key).map((i) => i.prop)
                      ])
                    ])
                  : (activeList.value = activeList.value.filter(
                      (i) => column.value.find((a) => a.prop === i)?.group !== key
                    ))
              }
            >
              {key}
            </ElCheckbox>
          ))}
        </div>
        <ElDivider class="my_3" />
        <ElCheckboxGroup v-model={activeList.value}>
          {column.value.map((item) => (
            <ElCheckbox label={item.value} disabled={item.disabled}>
              {item.label}
            </ElCheckbox>
          ))}
        </ElCheckboxGroup>
      </>
    )
  }).then(() => {
    const list = activeList.value
    columnData.value.forEach((i) => (i.active = list.includes(i.prop)))
  })
}

const getCheckData = () => {
  const column = JSON.parse(JSON.stringify(columnData.value))
  const data = tableData.value
    .filter((i) => Object.values(i).find((i) => i?.checked && column.find((j) => j.prop === i?.prop)?.active))
    .map((item) => ({
      matchDate: item.matchDate,
      matchId: item.matchId,
      matchNumStr: item.matchNumStr,
      checkList: column.filter((i) => item[i.prop]?.checked && i?.active).map((i) => item[i.prop])
    }))
  return data
}

const printData = () => {
  const data = getCheckData()
  const test = data.map((item) => `${item.matchNumStr}：${item.checkList.map((i) => i.value).join('+')}`)
  checkD.value = test.join('，')
}

const tablePreview = () => {
  const checkData = getCheckData()
  const checkCol = JSON.parse(JSON.stringify(columnData.value))
    .filter((i) =>
      checkData.find((a) => ['matchNumStr', 'matchDate'].includes(i.prop) || a.checkList.find((b) => b.prop === i.prop))
    )
    .map((i) => ({
      ...i,
      render: ({ row, column }) =>
        row[column.property] ? row[column.property] : row.checkList.find((i) => i.prop === column.property)?.value
    }))
  console.log(checkData, checkCol)
  ElMessageBox({
    customStyle: {
      maxWidth: '80%'
    },
    message: () => <MyTable data={checkData} columns={checkCol}></MyTable>
  })
}

const printView = () => {
  const checkData = getCheckData()
  const reportURL = './file/table1Grf.grf'
  const data = {
    Table: [
      {
        MemoBox3: checkData
          .map(
            (i) =>
              `<p><font size=3>${i.matchNumStr}</font></p><p><font size=2>${i.checkList
                .map((i, a) => ((a + 1) % 5 ? i.value : `${i.value}</br>`))
                .join('+')}</font></p>`
          )
          .join(''),
        MemoBox6: '标题内容',
        MemoBox11: new Date().toFormat('YYYY/MM/DD')
      }
    ]
  }
  ElMessageBox({
    customStyle: {
      maxWidth: '80%'
    },
    center: true,
    message: () => (
      <>
        <div id="report_holder" class="inline-block border_all"></div>
        <div>
          <ElButton
            class="ml_4"
            onClick={() => {
              const dom = document.querySelector('#report_holder')
              export2Img(dom)
              ElMessageBox.close()
            }}
          >
            导出图片
          </ElButton>
          <ElButton
            class="ml_4"
            onClick={() => {
              const dom = document.querySelector('#report_holder')
              export2Pdf(dom)
              ElMessageBox.close()
            }}
          >
            导出PDF
          </ElButton>
        </div>
      </>
    ),
    confirmButtonText: '打印'
  }).then(() => {
    const dom = document.querySelector('#report_holder')
    const css = document.querySelectorAll('[id^="_gridcss"]')
    const printContentHtml = dom.outerHTML
    const iframe = document.createElement('iframe')
    document.body.appendChild(iframe)
    iframe.contentDocument.write([...css].map((i) => i.outerHTML).join(''))
    iframe.contentDocument.write('<style media="print">@page{size:auto;margin:0;}</style>')
    iframe.contentDocument.write(printContentHtml)
    iframe.setAttribute('style', 'position:absolute;width:0px;height:0px;left:-500px;top:-500px;')
    iframe.contentDocument.body.setAttribute('style', 'margin:0px')
    iframe.contentDocument.close()
    iframe.contentWindow.print()
    setTimeout(() => {
      document.body.removeChild(iframe)
    }, 1000)
  })
  window.rubylong.grhtml5.insertReportViewer('report_holder', reportURL, data).start()
}

const MyTable = ({ data, columns }) => (
  <ElTable data={data} border stripe>
    {
      computed(() =>
        columns
          .filter((i) => i.active)
          .map((col) => <ElTableColumn {...col} v-slots={{ default: col.render }}></ElTableColumn>)
      ).value
    }
  </ElTable>
)
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
</style>
