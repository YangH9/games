<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <GenerateDom />
    <OperatorDom />
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
  url: '',
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
  { value: 'email', label: '日程' },
  { value: 'email', label: 'WiFi' },
  { value: 'email', label: '链接' },
  { value: 'email', label: '文本' },
  { value: 'email', label: '联系人' },
  { value: 'email', label: 'App' },
  { value: 'email', label: '短信' }
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

<style lang="scss" scoped>

</style>
