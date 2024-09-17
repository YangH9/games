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
        <a-date-picker v-model:value="fistWeek" placeholder="第一周时间" picker="week" class="mr_2" />
        <a-upload accept=".xls,.xlsx" :file-list="fileList" :before-upload="beforeUpload" :showUploadList="false">
          <a-button>
            <aFileOutlined />
            {{ fileList[0]?.name || '导入文件' }}
          </a-button>
        </a-upload>
      </template>
      <a-collapse :activeKey="curriculumList.map((_, i) => i)">
        <a-collapse-panel v-for="(item, index) in curriculumList" :key="index" :header="`课程${index + 1}`">
          <template #extra>
            <a-button type="link" danger @Click="() => curriculumList.splice(index, 1)">
              <template #icon>
                <aDeleteOutlined />
              </template>
            </a-button>
          </template>
          <a-descriptions>
            <a-descriptions-item>
              <a-form-item label="老师" class="mb_0 grow">
                <a-input v-model:value="item.teacher" placeholder="老师" />
              </a-form-item>
            </a-descriptions-item>
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
              <a-form-item label="上课周" class="mb_0 grow">
                <a-input v-model:value="item.week" placeholder="上课周" />
              </a-form-item>
            </a-descriptions-item>
            <a-descriptions-item>
              <a-form-item label="上课时间" class="mb_0 grow">
                <a-input v-model:value="item.time" placeholder="上课时间" />
              </a-form-item>
            </a-descriptions-item>
          </a-descriptions>
        </a-collapse-panel>
      </a-collapse>
      <!-- <a-table :dataSource="curriculumList" :columns="columns" bordered :pagination="false">
        <template #headerCell="{ column }">
          <template v-if="column.dataIndex === 'operate'">
            操作
            <a-button type="link" @Click="() => curriculumList.push({})">
              <template #icon>
                <aPlusOutlined />
              </template>
            </a-button>
          </template>
        </template>
      </a-table> -->
      {{ curriculumList }}
      授课老师 课程名称 每周时间 上课周 教室位置 备注
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
import { h, ref } from 'vue'

const fistWeek = ref('')

const weeksList = ref(Array({ length: 53 }, (_, i) => i + 1))

const curriculumList = ref([
  { teacher: '王老师', course: '高等数学', weeks: [], time: '1-2', room: '西5-217c' },
  { teacher: '王老师', course: '计算机网络', weeks: [], time: '1-2', room: '1-2' },
  { teacher: '王老师', course: '计算机网络', weeks: [], time: '1-2', room: '1-2' },
  {}
])
const columns = [
  {
    title: '老师',
    dataIndex: 'teacher',
    customRender: ({ text, record, index, column }) => <a-input v-model:value={record.teacher} placeholder="老师" />
  },
  {
    title: '课程',
    dataIndex: 'course',
    customRender: ({ text, record, index, column }) => <a-input v-model:value={record.course} placeholder="课程" />
  },
  {
    title: '教室',
    dataIndex: 'room',
    customRender: ({ text, record, index, column }) => <a-input v-model:value={record.room} placeholder="教室" />
  },
  {
    title: '上课周',
    dataIndex: 'week',
    customRender: ({ text, record, index, column }) => <a-input v-model:value={record.week} placeholder="上课周" />
  },
  {
    title: '上课时间',
    dataIndex: 'time',
    customRender: ({ text, record, index, column }) => (
      <>
        <a-input v-model:value={record.time} placeholder="上课时间" />
      </>
    )
  },
  {
    title: '操作',
    dataIndex: 'operate',
    align: 'center',
    width: 105,
    customRender: ({ text, record, index, column }) => (
      <>
        {/* <a-button type="link" class="mr_2" icon={<aPlusOutlined />} onClick={() => curriculumList.value.push({})} /> */}
        <a-button type="link" danger icon={<aMinusOutlined />} onClick={() => curriculumList.value.splice(index, 1)} />
      </>
    )
  }
]

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
    // const decoder = new TextDecoder('GBK');
    // const arrayBuffer = decoder.decode(e.target.result);
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

.ant-collapse:deep().ant-collapse-header {
  align-items: center;
}
</style>
