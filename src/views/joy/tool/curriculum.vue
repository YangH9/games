<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card
      v-calcHeight="{ height: 21, dom: '.ant-card-body' }"
      class="flow_hidden"
      title="课程表日程生成器"
      :hoverable="true"
    >
      <template #extra>
        <a-date-picker
          v-model:value="fistWeek"
          :valueFormat="dateFormatKey"
          placeholder="第一周时间"
          picker="week"
          class="mr_2"
        />
        <a-dropdown :overlayStyle="{ zIndex: 1000 }">
          <template #overlay>
            <a-menu class="p_2">
              <div class="mb_2">
                <a-button
                  block
                  @click="
                    () => {
                      classTimeModal.visible = true
                      classTimeModal.list = cloneDeep(classTimeList)
                    }
                  "
                >
                  <aSettingOutlined />
                  课程时间
                </a-button>
              </div>
              <div class="mb_2">
                <a-upload
                  accept=".xls,.xlsx"
                  :file-list="fileList"
                  :before-upload="beforeUpload"
                  :showUploadList="false"
                >
                  <a-button block>
                    <aUploadOutlined />
                    {{ fileList[0]?.name || '导入文件' }}
                  </a-button>
                </a-upload>
              </div>
            </a-menu>
          </template>
          <a-button class="mr_2">
            更多操作
            <aDownOutlined />
          </a-button>
        </a-dropdown>
        <a-button type="primary" @click="generateSchedule">
          <aDownloadOutlined />
          生成日程
        </a-button>
      </template>
      <a-collapse v-model:activeKey="collapseActive">
        <a-collapse-panel v-for="(item, index) in curriculumList" :key="index" :header="`课程${index + 1}`">
          <template #extra>
            <a-button
              type="link"
              class="mr_2"
              @Click.stop="
                () =>
                  curriculumList.splice(index + 1, 0, cloneDeep(curriculumDefault)) &
                  collapseActive.push(curriculumList.length - 1)
              "
            >
              <template #icon>
                <aPlusOutlined />
              </template>
            </a-button>
            <a-button
              type="link"
              class="mr_2"
              @Click.stop="() => curriculumList.splice(index, 1, cloneDeep(curriculumDefault))"
            >
              <template #icon>
                <aUndoOutlined />
              </template>
            </a-button>
            <a-button
              v-if="curriculumList.length > 1"
              type="link"
              danger
              @Click.stop="() => curriculumList.splice(index, 1)"
            >
              <template #icon>
                <aDeleteOutlined />
              </template>
            </a-button>
          </template>
          <a-form>
            <a-descriptions class="mb_2">
              <a-descriptions-item>
                <a-form-item label="课程" class="mb_0 grow">
                  <a-input v-model:value="item.course" placeholder="课程" />
                </a-form-item>
              </a-descriptions-item>
              <a-descriptions-item>
                <a-form-item label="教室" class="mb_0 grow">
                  <a-input v-model:value="item.room" placeholder="教室" />
                </a-form-item>
              </a-descriptions-item>
              <a-descriptions-item>
                <a-form-item label="老师" class="mb_0 grow">
                  <a-input v-model:value="item.teacher" placeholder="老师" />
                </a-form-item>
              </a-descriptions-item>
              <a-descriptions-item>
                <a-form-item label="时间" required class="mb_0 grow">
                  <a-cascader
                    v-model:value="item.classTime"
                    :options="classTimeOption"
                    expand-trigger="hover"
                    placeholder="上课时间"
                    popupClassName="h240"
                  />
                </a-form-item>
              </a-descriptions-item>
              <a-descriptions-item>
                <a-form-item label="上课周" class="mb_0 grow">
                  <a-select
                    v-model:value="item.weeks"
                    mode="multiple"
                    allowClear
                    max-tag-count="responsive"
                    placeholder="上课周"
                  >
                    <a-select-option v-for="(item, index) in weeksList" :key="index" :value="item.value">
                      {{ item.label }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-descriptions-item>
              <a-descriptions-item>
                <a-form-item label="提醒" class="mb_0 grow">
                  <a-select v-model:value="item.alarm" placeholder="提醒时间">
                    <a-select-option v-for="(item, index) in alarmList" :key="index" :value="item.value">
                      {{ item.label }}
                    </a-select-option>
                  </a-select>
                </a-form-item>
              </a-descriptions-item>
            </a-descriptions>
          </a-form>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
    <a-modal
      v-model:open="classTimeModal.visible"
      width="1000px"
      :closable="false"
      :bodyStyle="{ maxHeight: 'calc(100vh - 300px)', overflowY: 'auto' }"
      @ok="
        () => {
          classTimeModal.visible = false
          classTimeList = cloneDeep(classTimeModal.list)
        }
      "
    >
      <template #title>
        <div class="d_flex content_between">
          课程时间
          <a-button type="link" @click="() => (classTimeModal.list = cloneDeep(classTimeDefaultList))">
            <aUndoOutlined />
            重置
          </a-button>
        </div>
      </template>
      <a-descriptions v-for="(item, index) in classTimeModal.list" :key="index" :column="4" class="mb_2">
        <a-descriptions-item>
          <a-input v-model:value="item.name" placeholder="名称" />
        </a-descriptions-item>
        <a-descriptions-item>
          <a-time-picker
            v-model:value="item.startTime"
            format="HH:mm"
            value-format="HH:mm"
            class="w_100"
            placeholder="上课时间"
          />
        </a-descriptions-item>
        <a-descriptions-item>
          <a-time-picker
            v-model:value="item.endTime"
            format="HH:mm"
            value-format="HH:mm"
            class="w_100"
            placeholder="上课时间"
          />
        </a-descriptions-item>
        <a-descriptions-item>
          <a-button
            type="link"
            @Click.stop="() => classTimeModal.list.splice(index + 1, 0, cloneDeep(classTimeDefaultItem))"
          >
            <template #icon>
              <aPlusOutlined />
            </template>
          </a-button>
          <a-button
            v-if="classTimeModal.list.length > 1"
            type="link"
            danger
            @Click.stop="() => classTimeModal.list.splice(index, 1)"
          >
            <template #icon>
              <aDeleteOutlined />
            </template>
          </a-button>
        </a-descriptions-item>
      </a-descriptions>
    </a-modal>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { read, utils } from 'xlsx'
import { computed, inject, reactive, ref } from 'vue'
import { cloneDeep } from 'lodash'
import { useStorage } from '@vueuse/core'
import { message } from 'ant-design-vue'

const dayjs = inject('dayjs')

const dateFormatKey = 'YYYY-ww'

const fistWeek = ref(`${dayjs().year()}-34`)

const curriculumDefault = { teacher: '', course: '', weeks: [], classTime: [], room: '', alarm: 30 }
const classTimeDefaultItem = { name: '', startTime: '08:00', endTime: '09:00' }
const classTimeDefaultList = [
  { name: '第一节', startTime: '08:00', endTime: '09:35' },
  { name: '第二节', startTime: '10:05', endTime: '11:40' },
  { name: '第三节', startTime: '14:00', endTime: '15:35' },
  { name: '第四节', startTime: '16:05', endTime: '17:40' },
  { name: '第五节', startTime: '19:00', endTime: '20:35' },
  { name: '第六节', startTime: '20:45', endTime: '22:20' },
  { name: '午间', startTime: '12:00', endTime: '13:35' },
  { name: '晚间', startTime: '18:00', endTime: '18:45' }
]

const curriculumList = useStorage('joy-curriculum-list', [cloneDeep(curriculumDefault)])
const classTimeList = useStorage('joy-curriculum-class', cloneDeep(classTimeDefaultList))

const weeksList = Array.from({ length: 53 }, (_, i) => ({ label: `第${i + 1}周`, value: i + 1 }))
const alarmList = [
  { label: '无提醒', value: 0 },
  { label: '五分钟前', value: 5 },
  { label: '十分钟前', value: 10 },
  { label: '十五分钟前', value: 15 },
  { label: '二十分钟前', value: 20 },
  { label: '半小时前', value: 30 },
  { label: '一小时前', value: 60 }
]
const weekList = ['周一', '周二', '周三', '周四', '周五', '周六', '周日']

const classTimeOption = computed(() =>
  weekList.map((week, index) => ({
    label: week,
    value: index,
    children: classTimeList.value.map((item, index) => ({
      label: `${item.name} (${item.startTime}-${item.endTime})`,
      value: index
    }))
  }))
)

const classTimeModal = reactive({
  visible: false,
  list: []
})

const collapseActive = ref(curriculumList.value.map((_, i) => i))

const calendarObj = {
  head: () =>
    `BEGIN:VCALENDAR\nPRODID:-//YangH9//China Calendar//CN\nVERSION:2.0\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:课程表日历\nX-WR-TIMEZONE:Asia/Shanghai\nX-WR-CALDESC:${fistWeek.value}周课程表日历\nBEGIN:VTIMEZONE\nTZID:Asia/Shanghai\nX-LIC-LOCATION:Asia/Shanghai\nBEGIN:STANDARD\nTZOFFSETFROM:+0800\nTZOFFSETTO:+0800\nTZNAME:CST\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE\n`,
  body: ({ start, end, UID, create, modify, summary, location, description, alarm }) =>
    `BEGIN:VEVENT\n${start}${end}${UID}${create}${modify}${summary}${location}${description}${alarm}END:VEVENT\n`,
  foot: () => 'END:VCALENDAR'
}

// 生成日程模板
const generateSchedule = () => {
  const body = curriculumList.value
    .filter(item => item.classTime.length === 2)
    .map((item, index) => {
      const { name: className, startTime, endTime } = classTimeList.value[item.classTime[1]] || {}
      const weekday = item.classTime[0]
      return item.weeks
        .map(week => {
          const dayTime = dayjs(
            dayjs(fistWeek.value, dateFormatKey).diff(dayjs.duration({ weeks: -week, days: -weekday }))
          )
          const obj = {
            start: `DTSTART:${dayjs(`${dayTime.format('YYYY-MM-DD')} ${startTime}`).format('YYYYMMDDTHHmm00')}\n`,
            end: `DTEND:${dayjs(`${dayTime.format('YYYY-MM-DD')} ${endTime}`).format('YYYYMMDDTHHmm00')}\n`,
            UID: `UID:${dayTime.format('YYYYMMDDTHHmm01')}_${index + 1}@YangH9\n`,
            create: `CREATED:${dayTime.format('YYYYMMDDTHHmm01')}\n`,
            modify: `LAST-MODIFIED:${dayjs().format('YYYYMMDDTHHmmss')}\n`,
            summary: `SUMMARY:『${item.course}』${weeksList[week - 1].label}\n`,
            location: `LOCATION:${item.room}\n`,
            description: `DESCRIPTION:课程名称：『${item.course}』${weeksList[week - 1].label}\\n上课时间：${weekList[weekday]} ${className}(${startTime}-${endTime})\\n授课老师：${item.teacher}\\n教室位置：${item.room}\n`,
            alarm: item.alarm ? `BEGIN:VALARM\nTRIGGER:-PT${item.alarm}M\nACTION:DISPLAY\nEND:VALARM\n` : ''
          }
          return calendarObj.body(obj)
        })
        .join('')
    })
    .join('')
  const fileName = `${fistWeek.value}周课程表.ics`
  const content = `${calendarObj.head()}${body}${calendarObj.foot()}`
  const aTag = document.createElement('a')
  const blob = new Blob([content])
  aTag.download = fileName
  aTag.href = URL.createObjectURL(blob)
  aTag.click()
  URL.revokeObjectURL(blob)
}

const fileList = ref([])

// 读取文件，多种类型处理方法，读取失败就换一种
const beforeUpload = file => {
  fileList.value = [file]

  dispose1(file).catch(err => {
    // dispose2(file).catch(err => {})
    message.warning('文件数据异常')
  })

  return false
}
// 处理方法
const dispose1 = file => {
  return new Promise((reactive, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      const htmlText = e.target.result
      if (!htmlText.startsWith('<html')) {
        reject('不支持该文件类型')
        return
      }
      const curList = []
      const domparser = new DOMParser()
      const htmlDocument = domparser.parseFromString(htmlText, 'text/html')
      const classDocument = htmlDocument.querySelector('table tbody')
      const trDocument = classDocument.querySelectorAll('tr')
      trDocument.forEach((tr, classIndex) => {
        const tdDocument = tr.querySelectorAll('td')
        tdDocument.forEach((td, weekIndex) => {
          if (td.innerText && weekIndex) {
            const regex = /([\u4e00-\u9fa5\w（）]+?)\(.*?\).*?\((.*?)\).*?\(([\u4e00-\u9fa5]?)(\d+)-(\d+),.*?(.*?)\)/g
            const curText = td.innerText
            const matches = [...curText.matchAll(regex)]
            matches.forEach(item => {
              curList.push({
                teacher: item[2],
                course: item[1],
                weeks: weeksList
                  .slice(item[4] - 1, item[5])
                  .filter(i =>
                    item[3] ? (item[3] === '双' && !(i.value % 2)) || (item[3] === '单' && i.value % 2) : !item[3]
                  )
                  .map(i => i.value),
                classTime: [weekIndex - 1, classIndex],
                room: item[6],
                alarm: 30
              })
            })
          }
        })
      })
      curriculumList.value = curList.sort((a, b) =>
        a.classTime[0] === b.classTime[0] ? a.classTime[1] - b.classTime[1] : a.classTime[0] - b.classTime[0]
      )
      collapseActive.value = curList.map((_, i) => i)
      reactive()
    }
    reader.readAsText(file, 'GB2312')
  })
}

const dispose2 = file => {
  return new Promise((reactive, reject) => {
    const reader = new FileReader()
    reader.onload = e => {
      console.clear()
      const arrayBuffer = e.target.result
      console.log(11111111, 'dispose2', arrayBuffer)
      const workbook = read(arrayBuffer)
      const worksheet = workbook.Sheets[workbook.SheetNames[0]]
      const merges = worksheet['!merges']
      const jsonData = utils.sheet_to_json(worksheet)

      const curList = []
      let weekKeyList = []
      let startIndex = 0
      jsonData.reduce((total, item, index) => {
        const row = item.__rowNum__
        if (item[Object.keys(item)[0]] === '节次/周次') {
          weekKeyList = Object.keys(item)
          startIndex = index
          console.log(weekKeyList)
          return row
        }
      }, undefined)
    }
    reader.readAsArrayBuffer(file)
  })
}
</script>

<style scoped lang="scss">
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}
.ant-card :deep(.ant-card-head) {
  .ant-card-head-wrapper {
    flex-wrap: wrap;
    & > div {
      flex: unset;
    }
  }
}

.ant-collapse:deep().ant-collapse-header {
  align-items: center;
}
:global(.ant-cascader-dropdown.h240 .ant-cascader-menu) {
  height: 240px;
}
</style>
