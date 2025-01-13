<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="二维码生成器" :hoverable="true">
      <template #extra>
        <a-button @click="() => (formData = cloneDeep(defaultData))">
          <aUndoOutlined />
          重置
        </a-button>
      </template>
      <a-form :model="formData" :label-col="{ span: 3 }">
        <a-row :gutter="24">
          <a-col :span="24">
            <a-form-item label="二维码类型" required>
              <a-radio-group v-model:value="formData.type" :options="Object.values(typeOption)"></a-radio-group>
            </a-form-item>
          </a-col>
          <typeOptionDom></typeOptionDom>
        </a-row>
      </a-form>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { inject, ref } from 'vue'
import { cloneDeep, debounce } from 'lodash'
import { useStorage } from '@vueuse/core'

const dayjs = inject('dayjs')
const Jsonp = inject('Jsonp')

const callback = 'jsonp_appStore'
const appStoreUrl = key =>
  `https://itunes.apple.com/search?term=${key}&country=cn&entity=software&limit=10&callback=${callback}`
const emailOptions = ref([])

const defaultData = {
  type: '',
  emailName: null,
  emailTitle: '',
  emailBody: '',
  eventName: null,
  eventLocation: null,
  eventAllDay: false,
  eventTime: [dayjs().format('YYYY-MM-DD HH:mm'), dayjs().add(2, 'hour').format('YYYY-MM-DD HH:mm')],
  eventDesc: null,
  eventValarm: false,
  eventValarmDate: dayjs().add(-1, 'day').format('YYYY-MM-DD HH:mm'),
  eventValarmTime: [1, 'H'],
  wifiName: null,
  wifiPassword: null,
  linkUrl: null,
  geographyLatitude: null,
  geographyLongitude: null,
  geographyAccuracy: null,
  text: null,
  contactSurname: null,
  contactName: null,
  contactTel: null,
  contactEmail: null,
  contactBirthday: null,
  contactAdr: null,
  contactUrl: null,
  contactQQ: null,
  contactOrg: null,
  contactTitle: null,
  contactWorkTel: null,
  contactNote: null,
  appStoreName: null,
  appStoreList: [],
  appStoreItem: null,
  telephone: null,
  smsName: null,
  smsBody: null
}

const formData = useStorage('joy-qrcode', cloneDeep(defaultData))

const typeOption = {
  email: {
    value: 'email',
    label: '发送邮件',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="收件邮箱" required>
            <a-auto-complete
              v-model:value={formData.value.emailName}
              placeholder="收件邮箱(格式错误无效)"
              options={emailOptions.value}
              v-slots={{
                option: ({ value }) => (
                  <>
                    {value.split('@')[0]} @ <span class="font_bold">{value.split('@')[1]}</span>
                  </>
                )
              }}
              onSearch={val => {
                let res = []
                if (!val || val.indexOf('@') >= 0) {
                  res = []
                } else {
                  res = ['gmail.com', '163.com', '126.com', 'qq.com', 'msn.com', 'icloud.com', 'example.com'].map(
                    domain => ({
                      value: `${val}@${domain}`
                    })
                  )
                }
                emailOptions.value = res
              }}
            ></a-auto-complete>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="邮件标题">
            <a-input v-model:value={formData.value.emailTitle} placeholder="邮件标题"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="邮件内容">
            <a-textarea
              v-model:value={formData.value.emailBody}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="邮件内容"
            ></a-textarea>
          </a-form-item>
        </a-col>
        {formData.value.emailName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`MATMSG:TO:${formData.value.emailName};SUB:${formData.value.emailTitle};BODY:${formData.value.emailBody};;`}
              />
              <a-button
                href={`mailto:${formData.value.emailName}?subject=${formData.value.emailTitle}&body=${formData.value.emailBody}`}
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
            <a-input v-model:value={formData.value.eventName} placeholder="日程名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="位置">
            <a-input v-model:value={formData.value.eventLocation} placeholder="位置"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="全天">
            <a-switch v-model:checked={formData.value.eventAllDay} />
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="起止时间">
            <a-range-picker
              v-model:value={formData.value.eventTime}
              valueFormat="YYYY-MM-DD HH:mm"
              showTime={formData.value.eventAllDay ? false : { format: 'HH:mm' }}
              class="w_100"
            ></a-range-picker>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="日程备注">
            <a-textarea
              v-model:value={formData.value.eventDesc}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="日程备注"
            ></a-textarea>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="提醒">
            <a-switch v-model:checked={formData.value.eventValarm} />
          </a-form-item>
        </a-col>
        {formData.value.eventValarm && (
          <a-col span={24}>
            <a-form-item label="提醒时间">
              {formData.value.eventAllDay ? (
                <>
                  <a-date-picker
                    v-model:value={formData.value.eventValarmDate}
                    valueFormat="YYYY-MM-DD HH:mm"
                    showTime={{ format: 'HH:mm' }}
                    disabled-date={date => date && date > dayjs().endOf('day')}
                    class="w_100"
                  ></a-date-picker>
                </>
              ) : (
                <a-row gutter={10}>
                  <a-col span={10}>
                    <a-input-number v-model:value={formData.value.eventValarmTime[0]} class="w_100"></a-input-number>
                  </a-col>
                  <a-col span={10}>
                    <a-select v-model:value={formData.value.eventValarmTime[1]} class="grow">
                      {[
                        { value: 'S', label: '秒' },
                        { value: 'M', label: '分钟' },
                        { value: 'H', label: '小时' }
                      ].map(item => (
                        <a-select-option value={item.value}>{item.label}</a-select-option>
                      ))}
                    </a-select>
                  </a-col>
                  <a-col class="d_flex center">前</a-col>
                </a-row>
              )}
            </a-form-item>
          </a-col>
        )}
        {formData.value.eventName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`BEGIN:VEVENT\nDTSTART:${dayjs(formData.value.eventTime[0], 'YYYY-MM-DD HH:mm').format(
                  formData.value.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmm00'
                )}\nDTEND:${dayjs(formData.value.eventTime[1], 'YYYY-MM-DD HH:mm').format(
                  formData.value.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmm00'
                )}\nSUMMARY:${formData.value.eventName}\n${
                  formData.value.eventLocation ? `LOCATION:${formData.value.eventLocation}\n` : ''
                }${formData.value.eventDesc ? `DESCRIPTION:${formData.value.eventDesc?.replaceAll('\n', '\\n')}\n` : ''}${
                  formData.value.eventValarm
                    ? `BEGIN:VALARM\nTRIGGER:${
                        formData.value.eventAllDay
                          ? dayjs(formData.value.eventValarmDate, 'YYYY-MM-DD HH:mm').format('YYYYMMDDTHHmm00')
                          : `-PT${formData.value.eventValarmTime.join('')}`
                      }\nACTION:DISPLAY\nEND:VALARM\n`
                    : ''
                }END:VEVENT`}
              />
            </a-space>
          </a-col>
        )}
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
            <a-input v-model:value={formData.value.wifiName} placeholder="WiFi名称"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="WiFi密码">
            <a-input v-model:value={formData.value.wifiPassword} placeholder="WiFi密码(最小8位)"></a-input>
          </a-form-item>
        </a-col>
        {formData.value.wifiName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`WIFI:T:WPA;S:${formData.value.wifiName};P:${formData.value.wifiPassword};;`} />
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
            <a-input v-model:value={formData.value.linkUrl} placeholder="链接"></a-input>
          </a-form-item>
        </a-col>
        {formData.value.linkUrl && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={formData.value.linkUrl} />
              <a-button href={formData.value.linkUrl} type="link" target="_blank">
                点击跳转
              </a-button>
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  geography: {
    value: 'geography',
    label: '地理坐标',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="纬度" required>
            <a-input-number
              v-model:value={formData.value.geographyLatitude}
              min={-90}
              max={90}
              step="0.000000001"
              string-mode
              placeholder="纬度"
              class="w_100"
            ></a-input-number>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="经度" required>
            <a-input-number
              v-model:value={formData.value.geographyLongitude}
              min={-180}
              max={180}
              step="0.000000001"
              string-mode
              placeholder="经度"
              class="w_100"
            ></a-input-number>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="精度">
            <a-input-number
              v-model:value={formData.value.geographyAccuracy}
              min={0}
              max={1000}
              placeholder="精度"
              class="w_100"
            ></a-input-number>
          </a-form-item>
        </a-col>
        {formData.value.geographyLatitude && formData.value.geographyLongitude && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`GEO:${formData.value.geographyLatitude},${formData.value.geographyLongitude},${formData.value.geographyAccuracy}`}
              />
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
            <a-textarea
              v-model:value={formData.value.text}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="文本内容"
            ></a-textarea>
          </a-form-item>
        </a-col>
        {formData.value.text && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={formData.value.text} />
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  contact: {
    value: 'contact',
    label: '联系名片',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="姓名" required>
            <a-row gutter={10}>
              <a-col span={12}>
                <a-input v-model:value={formData.value.contactSurname} placeholder="姓"></a-input>
              </a-col>
              <a-col span={12}>
                <a-input v-model:value={formData.value.contactName} placeholder="名"></a-input>
              </a-col>
            </a-row>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="电话号码" required>
            <a-input v-model:value={formData.value.contactTel} placeholder="电话号码"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="电子邮件">
            <a-input v-model:value={formData.value.contactEmail} placeholder="电子邮件"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="生日">
            <a-date-picker
              v-model:value={formData.value.contactBirthday}
              format="YYYY-MM-DD"
              placeholder="生日"
              class="w_100"
            ></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="地址">
            <a-input v-model:value={formData.value.contactAdr} placeholder="地址"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="个人主页">
            <a-input v-model:value={formData.value.contactUrl} placeholder="个人主页"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="QQ">
            <a-input v-model:value={formData.value.contactQQ} placeholder="QQ"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="组织">
            <a-input v-model:value={formData.value.contactOrg} placeholder="组织"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="职位">
            <a-input v-model:value={formData.value.contactTitle} placeholder="职位"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="工作电话">
            <a-input v-model:value={formData.value.contactWorkTel} placeholder="工作电话"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="备注">
            <a-textarea
              v-model:value={formData.value.contactNote}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="备注"
            ></a-textarea>
          </a-form-item>
        </a-col>
        {formData.value.contactSurname && formData.value.contactName && formData.value.contactTel && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`BEGIN:VCARD\nVERSION:3.0\nN:${formData.value.contactSurname}${
                  formData.value.contactName
                }\nTEL;TYPE=HOME,VOICE:${formData.value.contactTel}\n${
                  formData.value.contactEmail ? `EMAIL:${formData.value.contactEmail}\n` : ''
                }${formData.value.contactBirthday ? `BDAY:${formData.value.contactBirthday.format('YYYYMMDD')}\n` : ''}${
                  formData.value.contactAdr ? `ADR:${formData.value.contactAdr}\n` : ''
                }${formData.value.contactUrl ? `URL:${formData.value.contactUrl}\n` : ''}${
                  formData.value.contactQQ ? `X-QQ:${formData.value.contactQQ}\n` : ''
                }${formData.value.contactOrg ? `ORG:${formData.value.contactOrg}\n` : ''}${
                  formData.value.contactTitle ? `TITLE:${formData.value.contactTitle}\n` : ''
                }${formData.value.contactWorkTel ? `TEL;TYPE=WORK,VOICE:${formData.value.contactWorkTel}\n` : ''}${
                  formData.value.contactNote ? `NOTE:${formData.value.contactNote?.replaceAll('\n', '\\n')}\n` : ''
                }END:VCARD`}
              />
            </a-space>
          </a-col>
        )}
      </>
    )
  },
  appStore: {
    value: 'appStore',
    label: 'App',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="App名称" required>
            <a-select
              v-model:value={formData.value.appStoreName}
              show-search
              listHeight={440}
              filterOption={() => true}
              placeholder="App名称,输入内容搜索(暂时仅支持AppStore的App)"
              class="grow"
              onChange={async val => {
                formData.value.appStoreItem = formData.value.appStoreList.find(i => i.trackName === val)
                const res = await Jsonp(appStoreUrl(val), callback)
                formData.value.appStoreList = res.results
              }}
              onSearch={debounce(async val => {
                const res = await Jsonp(appStoreUrl(val), callback)
                formData.value.appStoreList = res.results
              }, 500)}
            >
              {formData.value.appStoreList.map(item => (
                <a-select-option value={item.trackName}>
                  <a-space size={20} class="ml_2">
                    <a-avatar src={item.artworkUrl60} shape="square" />
                    {item.trackName}
                  </a-space>
                </a-select-option>
              ))}
            </a-select>
          </a-form-item>
        </a-col>
        {formData.value.appStoreItem && (
          <>
            <a-col span={24}>
              <a-space>
                <a-avatar src={formData.value.appStoreItem.artworkUrl60} shape="square" />
                {formData.value.appStoreItem.trackName}
              </a-space>
              <p class="textFlow_2">{formData.value.appStoreItem.description}</p>
            </a-col>
            <a-col span={24}>
              <a-space size={20}>
                <a-qrcode value={`https://apps.apple.com/cn/app/id${formData.value.appStoreItem.trackId}`} />
                <a-button
                  href={`https://apps.apple.com/cn/app/id${formData.value.appStoreItem.trackId}`}
                  type="link"
                  target="_blank"
                >
                  点击跳转
                </a-button>
              </a-space>
            </a-col>
          </>
        )}
      </>
    )
  },
  telephone: {
    value: 'telephone',
    label: '拨打电话',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="电话号码" required>
            <a-input v-model:value={formData.value.telephone} placeholder="电话号码"></a-input>
          </a-form-item>
        </a-col>
        {formData.value.telephone && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`TEL:${formData.value.telephone}`} />
              <a-button href={`tel:${formData.value.telephone}`} type="link" target="_blank">
                点击跳转
              </a-button>
            </a-space>
          </a-col>
        )}
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
            <a-input v-model:value={formData.value.smsName} placeholder="收信人"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="短信内容">
            <a-textarea
              v-model:value={formData.value.smsBody}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="短信内容"
            ></a-textarea>
          </a-form-item>
        </a-col>
        {formData.value.smsName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`SMSTO:${formData.value.smsName}:${formData.value.smsBody}`} />
              <a-button
                href={`sms:${formData.value.smsName}?body=${formData.value.smsBody}`}
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
  }
}
const typeOptionDom = () => typeOption[formData.value.type]?.dom()
</script>

<style scoped lang="scss"></style>
