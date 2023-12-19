<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <GenerateDom />
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, inject } from 'vue'

const Dayjs = inject('Dayjs')

const formData = reactive({
  type: '',
  emailName: '',
  emailTitle: '',
  emailBody: '',
  eventName: '',
  eventAllDay: false,
  eventTime: [Dayjs(), Dayjs().add(2, 'hour')],
  eventDesc: '',
  wifiName: '',
  wifiPassword: '',
  linkUrl: '',
  text: ''
})
const typeOption = {
  email: {
    value: 'email',
    label: '发送邮件',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="收件邮箱" required>
            <a-input v-model:value={formData.emailName} type="email" placeholder="收件邮箱(格式错误无效)"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="邮件标题">
            <a-input v-model:value={formData.emailTitle} placeholder="邮件标题"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="邮件内容">
            <a-textarea v-model:value={formData.emailBody} placeholder="邮件内容"></a-textarea>
          </a-form-item>
        </a-col>
        {formData.emailName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`MATMSG:TO:${formData.emailName};SUB:${formData.emailTitle};BODY:${formData.emailBody};;`}
              />
              <a-button
                href={`mailto:${formData.emailName}?subject=${formData.emailTitle}&body=${formData.emailBody}`}
                type="link"
                target="_blank"
              >
                点击跳转发送
              </a-button>
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  event: {
    value: 'event',
    label: '日程',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="日程名称" required>
            <a-input v-model:value={formData.eventName} placeholder="日程名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="全天">
            <a-switch v-model:checked={formData.eventAllDay} />
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="起止时间">
            <a-range-picker
              v-model:value={formData.eventTime}
              format={formData.eventAllDay ? 'YYYY-MM-DD' : 'YYYY-MM-DD HH:mm'}
              showTime={formData.eventAllDay ? false : { format: 'HH:mm' }}
              class="w_100"
              onChange={() => {
                console.log(formData.eventTime)
              }}
            ></a-range-picker>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="日程备注">
            <a-textarea v-model:value={formData.eventDesc} placeholder="日程备注"></a-textarea>
          </a-form-item>
        </a-col>
        {formData.eventName && (
          <a-col span={24}>
            {/* <a-qrcode
              value={`BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:${
                formData.eventName
              }\nDTSTART:${formData.eventTime[0].$d.toFormat(
                formData.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmmss'
              )}\nDTEND:${formData.eventTime[0].$d.toFormat(
                formData.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmmss'
              )}\nEND:VEVENT\nEND:VCALENDAR`}
            /> */}
            {/* <a-qrcode value="BEGIN:VEVENT\nDTSTART;VALUE=DATE:20241004\nDTEND;VALUE=DATE:20241004\nDTSTAMP:20241004T000001\nUID:20241004T000001_holiday_178@yangh9\nCREATED:20241004T000001\nSUMMARY:『国庆节 假期』 第4天/共7天\nDESCRIPTION:七、国庆节：\nLAST-MODIFIED:20231214T110858\nSTATUS:CONFIRMED\nTRANSP:TRANSPARENT\nSEQUENCE:1\nEND:VEVENT" /> */}
            <a-qrcode value="BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:qqqqqqqqqqqqqq\nDTSTART:20241012T090000\nDTEND:20241012T180000\nEND:VEVENT\nEND:VCALENDAR" />
            {/* BEGIN:VCALENDAR\nVERSION:2.0\nBEGIN:VEVENT\nSUMMARY:{formData.eventName}\nDTSTART:{formData.eventStart}
            \nDTEND:{formData.eventEnd}\nEND:VEVENT\nEND:VCALENDAR */}
          </a-col>
        )}

        {/*
BEGIN:VCALENDAR
VERSION:2.0
BEGIN:VEVENT
SUMMARY:{formData.eventName}
DTSTART:{formData.eventStart}
DTEND:{formData.eventEnd}
END:VEVENT
END:VCALENDAR

BEGIN:VEVENT
DTSTART;VALUE=DATE:20241004
DTEND;VALUE=DATE:20241004
DTSTAMP:20241004T000001
UID:20241004T000001_holiday_178@yangh9
CREATED:20241004T000001
SUMMARY:『国庆节 假期』 第4天/共7天
DESCRIPTION:七、国庆节：10月1日至7日放假调休，共7天。9月29日（星期日）、10月12日（星期六）上班。\n\n放假通知：https://www.gov.cn/zhengce/content/202310/content_6911527.htm\n\n2020~2025年中国人民共和国节日、纪念日和假日调休、补班日历。更新时间：2023-12-14
LAST-MODIFIED:20231214T110858
STATUS:CONFIRMED
TRANSP:TRANSPARENT
SEQUENCE:1
END:VEVENT

BEGIN:VEVENT
DTSTART:20241012T090000
DTEND:20241012T180000
DTSTAMP:20241012T000001
UID:20241012T000001_compensateday_182@yangh9
CREATED:20241012T000001
SUMMARY:『国庆节 补班』 第2天/共2天
DESCRIPTION:七、国庆节：10月1日至7日放假调休，共7天。9月29日（星期日）、10月12日（星期六）上班。\n\n放假通知：https://www.gov.cn/zhengce/content/202310/content_6911527.htm\n\n2020~2025年中国人民共和国节日、纪念日和假日调休、补班日历。更新时间：2023-12-14
LAST-MODIFIED:20231214T110858
STATUS:TENTATIVE
TRANSP:OPAQUE
SEQUENCE:1
BEGIN:VALARM
TRIGGER:-PT60M
ACTION:DISPLAY
END:VALARM
END:VEVENT */}
      </>
    )
  },
  wifi: {
    value: 'wifi',
    label: 'WiFi',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="WiFi名称" required>
            <a-input v-model:value={formData.wifiName} placeholder="WiFi名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="WiFi密码">
            <a-input v-model:value={formData.wifiPassword} placeholder="WiFi密码(最小8位)"></a-input>
          </a-form-item>
        </a-col>
        {formData.wifiName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`WIFI:T:WPA;S:${formData.wifiName};P:${formData.wifiPassword};;`} />
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  link: {
    value: 'link',
    label: '链接',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="链接" required>
            <a-input v-model:value={formData.linkUrl} placeholder="链接"></a-input>
          </a-form-item>
        </a-col>
        {formData.linkUrl && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={formData.linkUrl} />
              <a-button href={formData.linkUrl} type="link" target="_blank">
                点击跳转
              </a-button>
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  text: {
    value: 'text',
    label: '文本',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="文本内容" required>
            <a-textarea v-model:value={formData.text} placeholder="文本内容"></a-textarea>
          </a-form-item>
        </a-col>
        {formData.text && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={formData.text} />
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  contact: {
    value: 'contact',
    label: '联系人',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="联系人">
            <a-input v-model:value={formData.eventName} placeholder="联系人"></a-input>
          </a-form-item>
        </a-col>
      </>
    )
  },
  appStore: {
    value: 'appStore',
    label: 'App',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="App名称">
            <a-input v-model:value={formData.eventName} placeholder="App名称"></a-input>
          </a-form-item>
        </a-col>
      </>
    )
  },
  sendSms: {
    value: 'sendSms',
    label: '短信',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="收信人" required>
            <a-input v-model:value={formData.smsName} placeholder="收信人"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="短信内容">
            <a-textarea v-model:value={formData.smsBody} placeholder="短信内容"></a-textarea>
          </a-form-item>
        </a-col>
        {formData.smsName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`SMSTO:${formData.smsName}:${formData.smsBody}`} />
              <a-button href={`sms:${formData.smsName}?body=${formData.smsBody}`} type="link" target="_blank">
                点击跳转发送
              </a-button>
            </a-space>
          </a-col>
        )}
      </>
    )
  }
}
const GenerateDom = () => (
  <a-card title="二维码生成器" class="mb_2" hoverable={true}>
    <a-form model={formData} label-col={{ span: 3 }}>
      <a-row gutter={24}>
        <a-col span={24}>
          <a-form-item label="二维码类型">
            <a-select v-model:value={formData.type} allowClear placeholder="二维码类型" class="grow">
              {Object.values(typeOption).map((item) => (
                <a-select-option value={item.value}>{item.label}</a-select-option>
              ))}
            </a-select>
          </a-form-item>
        </a-col>
        {typeOption[formData.type]?.dom()}
      </a-row>
    </a-form>
  </a-card>
)
</script>

<style lang="scss" scoped></style>
