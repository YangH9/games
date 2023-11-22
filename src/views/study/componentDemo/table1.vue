<template>
  <div class="container">
    <Breadcrumb />
    <a-layout-content>
      <a-table :dataSource="tableData" :columns="columnData" :scroll="{ x: 1000 }" :pagination="false" bordered />
      <div class="my_3">
        <a-button class="mx_2" @click="print">print</a-button>
        <a-button class="mx_2" @click="tablePreview">表格预览</a-button>
        <a-button class="mx_2" @click="printView">导出预览</a-button>
      </div>
      <div class="ant-card my_3">
        <div>选择的数据：</div>
        <div>{{ checkD }}</div>
      </div>
    </a-layout-content>
    <contextHolder />
  </div>
</template>

<script setup lang="jsx">
import { ref } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
import { Modal } from 'ant-design-vue'
import '@/utils/grhtml5-6.8-min.js'
const [modal, contextHolder] = Modal.useModal()

import data1 from './data/data1.json'
import data2 from './data/data2.json'
import { export2Img, export2Pdf } from '@/utils/export'

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
            obj[`${j.poolCode}a`] = { value: j.a, key: `${j.poolCode}a`, checked: false }
            obj[`${j.poolCode}d`] = { value: j.d, key: `${j.poolCode}d`, checked: false }
            obj[`${j.poolCode}h`] = { value: j.h, key: `${j.poolCode}h`, checked: false }
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
            obj[key] = { value: detail[key], key, checked: false }
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
    customRender: ({ record, column }) =>
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

const getCheckData = () => {
  const column = JSON.parse(JSON.stringify(defaultColumn))
  const data = tableData.value
    .filter((i) => Object.values(i).find((i) => i?.checked))
    .map((item) => ({
      matchDate: item.matchDate,
      matchId: item.matchId,
      matchNumStr: item.matchNumStr,
      checkList: column.filter((i) => item[i.prop]?.checked).map((i) => item[i.prop])
    }))
  return data
}

const print = () => {
  const data = getCheckData()
  const test = data.map((item) => `${item.matchNumStr}：${item.checkList.map((i) => i.value).join('+')}`)
  checkD.value = test.join('，')
}

const tablePreview = () => {
  const checkData = getCheckData()
  const checkCol = JSON.parse(JSON.stringify(defaultColumn))
    .filter((i) =>
      checkData.find((a) => ['matchNumStr', 'matchDate'].includes(i.prop) || a.checkList.find((b) => b.key === i.prop))
    )
    .map((i) => ({
      title: i.label,
      key: i.prop,
      dataIndex: i.prop,
      fixed: i.fixed,
      width: i.width,
      customRender: ({ record, column }) =>
        record[column.key] ? record[column.key] : record.checkList.find((i) => i.key === column.key)?.value
    }))
  modal.info({
    width: '80%',
    class: 'mymodal',
    icon: () => <div></div>,
    footer: null,
    maskClosable: true,
    content: () => (
      <a-table dataSource={checkData} columns={checkCol} scroll={{ x: 1000 }} pagination={false} bordered></a-table>
    )
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
  modal.info({
    class: 'mymodal',
    icon: () => <div></div>,
    maskClosable: true,
    content: () => <div id="report_holder" class="inline-block border_all"></div>,
    footer: () => (
      <div class="flex content_end mt_4">
        <a-button
          class="ml_4"
          onClick={() => {
            const dom = document.querySelector('#report_holder')
            export2Img(dom)
            Modal.destroyAll()
          }}
        >
          导出图片
        </a-button>
        <a-button
          class="ml_4"
          onClick={() => {
            const dom = document.querySelector('#report_holder')
            export2Pdf(dom)
            Modal.destroyAll()
          }}
        >
          导出PDF
        </a-button>
        <a-button
          class="ml_4"
          type="primary"
          onClick={() => {
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
              Modal.destroyAll()
            }, 1000)
          }}
        >
          打印
        </a-button>
      </div>
    )
  })
  window.rubylong.grhtml5.insertReportViewer('report_holder', reportURL, data).start()
}
</script>

<style lang="scss" scoped>
.ant-layout-content {
  text-align: center;
}
:global(.mymodal .ant-modal-confirm-content) {
  width: 100%;
  text-align: center;
}
</style>
