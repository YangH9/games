<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <GenerateDom />
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive } from 'vue'

const list = {
  email: 'MATMSG:TO:{aaa};SUB:{aaa};BODY:{aaa};;',
  event:
    'BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:{name}\nDTSTART:{startdate}\nDTEND:{enddate}\nEND:VEVENT\nEND:VCALENDAR',
  wifi: 'WIFI:S:{name};T:WPA;P:{paddsord};;',
  link: '',
  text: '',
  contact: '',
  appStore: '',
  sendSms: 'SMSTO:{number}:{sms}',
  clipboard: ''
}
const formData = reactive({
  type: ''
})
const typeList = [
  { value: 'email', label: '邮件' },
  { value: 'event', label: '日程' },
  { value: 'wifi', label: 'WiFi' },
  { value: 'link', label: '链接' },
  { value: 'text', label: '文本' },
  { value: 'contact', label: '联系人' },
  { value: 'appStore', label: 'App' },
  { value: 'sendSms', label: '短信' }
]

const GenerateDom = () => (
  <a-card title="二维码生成器" class="mb_2" hoverable={true}>
    <a-form model={formData}>
      <a-row gutter={24}>
        <a-col span={24}>
          <a-form-item label="二维码类型">
            <a-select v-model:value={formData.type} allowClear placeholder="二维码类型" class="grow">
              {typeList.map((item) => (
                <a-select-option value={item.value}>{item.label}</a-select-option>
              ))}
            </a-select>
          </a-form-item>
        </a-col>
      </a-row>
    </a-form>
  </a-card>
)
</script>

<style lang="scss" scoped></style>
