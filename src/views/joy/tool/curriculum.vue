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
          valueFormat="YYYY-ww"
          placeholder="第一周时间"
          picker="week"
          class="mr_2"
        />
        <a-button class="mr_2">
          <aSettingOutlined />
          每日课程时间
        </a-button>
        <a-upload accept=".xls,.xlsx" :file-list="fileList" :before-upload="beforeUpload" :showUploadList="false">
          <a-button class="mr_2">
            <aUploadOutlined />
            {{ fileList[0]?.name || '导入文件' }}
          </a-button>
        </a-upload>
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
                () => curriculumList.push(cloneDeep(curriculumDefault)) & collapseActive.push(curriculumList.length - 1)
              "
            >
              <template #icon>
                <aPlusOutlined />
              </template>
            </a-button>
            <a-button type="link" danger @Click.stop="() => curriculumList.splice(index, 1)">
              <template #icon>
                <aDeleteOutlined />
              </template>
            </a-button>
          </template>
          <a-descriptions>
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
              <a-form-item label="时间" class="mb_0 grow">
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
        </a-collapse-panel>
      </a-collapse>
      <p>{{ curriculumList }}</p>
      <p>{{ calendarText }}</p>
      <!-- <div>{{ textxml }}</div> -->
      <!-- <table border>
        <thead>
          <tr>
            <th v-for="(item, index) in columnList" :key="index">{{ item }}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, idx) in pres" :key="idx">
            <th
              v-for="(item, index) in columnList"
              :key="index"
              v-html="`${row?.[item] || ''}`.replaceAll('\n', '<br/>')"
            ></th>
          </tr>
        </tbody>
      </table> -->
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { read, utils } from 'xlsx'
import { computed, inject, ref } from 'vue'
import { cloneDeep } from 'lodash'

const dayjs = inject('dayjs')

const fistWeek = ref('2024-34')

const curriculumDefault = {
  teacher: '',
  course: '',
  weeks: [],
  classTime: [],
  room: '',
  alarm: 30
}

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
const classTimeList = ref([
  { name: '第一节', startTime: '08:00', endTime: '09:35' },
  { name: '第二节', startTime: '10:05', endTime: '11:40' },
  { name: '第三节', startTime: '14:00', endTime: '15:35' },
  { name: '第四节', startTime: '16:05', endTime: '17:40' },
  { name: '第五节', startTime: '19:00', endTime: '20:35' }
])

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

const curriculumList = ref([
  {
    course: '高等数学',
    room: '西5-217c',
    teacher: '王老师',
    weeks: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16],
    classTime: [0, 2],
    alarm: 30
  },
  { teacher: '王老师', course: '计算机网络', weeks: [4], classTime: [1, 2], room: '1-2', alarm: 30 },
  { teacher: '', course: '', weeks: [4], classTime: [], room: '', alarm: 30 }
])

const collapseActive = ref(curriculumList.value.map((_, i) => i))

const calendarText = ref('')

const calendarObj = {
  head: () =>
    `BEGIN:VCALENDAR\nPRODID:-//YangH9//China Calendar//CN\nVERSION:2.0\nCALSCALE:GREGORIAN\nMETHOD:PUBLISH\nX-WR-CALNAME:课程表日历\nX-WR-TIMEZONE:Asia/Shanghai\nX-WR-CALDESC:${fistWeek.value}周课程表日历\nBEGIN:VTIMEZONE\nTZID:Asia/Shanghai\nX-LIC-LOCATION:Asia/Shanghai\nBEGIN:STANDARD\nTZOFFSETFROM:+0800\nTZOFFSETTO:+0800\nTZNAME:CST\nDTSTART:19700101T000000\nEND:STANDARD\nEND:VTIMEZONE`,
  body: () =>
    `BEGIN:VEVENT\nDTSTART:20200119T090000\nDTEND:20200119T180000\nUID:20200119T000001_1@YangH9\nCREATED:20200119T000001\nLAST-MODIFIED:20240909T105531\nSUMMARY:课程名称\nDESCRIPTION:课程名称\nSTATUS:TENTATIVE\nTRANSP:OPAQUE\nSEQUENCE:1\nBEGIN:VALARM\nTRIGGER:-PT60M\nACTION:DISPLAY\nEND:VALARM\nEND:VEVENT`,
  aaa: () =>
    `BEGIN:VEVENT\nDTSTART:YYYYMMDDTHHmm00\nDTEND:YYYYMMDDTHHmm00\nSUMMARY:课程名称\nLOCATION:地点\nDESCRIPTION:描述\nBEGIN:VALARM\nTRIGGER:-PT30M\nACTION:DISPLAY\nEND:VALARM\nEND:VEVENT`,
  foot: () => 'END:VCALENDAR'
}

// 生成日程模板
const generateSchedule = () => {
  console.log(calendarObj.aaa())
  // console.log(calendarObj.head())
  console.log(calendarObj.body())
  // console.log(calendarObj.foot())
  curriculumList.value.map((item, index) => {
    const startTime = classTimeList.value[item.classTime[1]]?.startTime
    const endTime = classTimeList.value[item.classTime[1]]?.endTime
    const weekday = item.classTime[0]
    item.weeks.map(week => {
      const dayTime = dayjs(dayjs(fistWeek.value, 'YYYY-ww').diff(dayjs.duration({ weeks: -week, days: -weekday })))
      const obj = {
        start: dayjs(`${dayTime.format('YYYY-MM-DD')} ${startTime}`).format('YYYYMMDDTHHmm00'),
        end: dayjs(`${dayTime.format('YYYY-MM-DD')} ${endTime}`).format('YYYYMMDDTHHmm00'),
        UID: `${dayTime.format('YYYYMMDDTHHmm01')}_${index + 1}@YangH9`,
        create: dayTime.format('YYYYMMDDTHHmm01'),
        modify: dayjs().format('YYYYMMDDTHHmmss')
      }
      console.log(obj, dayjs(fistWeek.value, 'YYYY-ww').format('YYYY-MM-DD'), dayTime.format('YYYY-MM-DD'))
      // console.log(item, week, dayTime.format('YYYY-MM-DD'))
    })

    // console.log(item, startTime, endTime)
  })
}

const fileList = ref([])

const pres = ref([])
const columnList = ref([])

const textxml = ref('')

const beforeUpload = file => {
  fileList.value = [file]
  console.log(file)
  const reader = new FileReader()
  reader.onload = e => {
    console.log(11111111, e)
    const arrayBuffer = e.target.result
    const workbook = read(arrayBuffer)
    const worksheet = workbook.Sheets[workbook.SheetNames[0]]
    const merges = worksheet['!merges']
    const data = utils.sheet_to_json(worksheet)
    console.log(workbook, worksheet, merges)

    const newData = Array.from({ length: data.at(-1).__rowNum__ }, () => {})
    let list = []
    data.forEach(item => {
      newData[item.__rowNum__ - 1] = item
      Object.keys(item).forEach(key => !list.includes(key) && list.push(key))
    })
    columnList.value = list

    pres.value = newData
  }
  reader.readAsArrayBuffer(file)
  return false
}
const beforeUploadXml = file => {
  fileList.value = [file]
  const reader = new FileReader()
  reader.onload = e => {
    console.log(11111111, e)
    textxml.value = e.target.result
  }
  reader.readAsText(file, 'GB2312')
  return false
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
