<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <GenerateDom />
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, inject, ref } from 'vue'
import { Debounce } from '@/utils/lodash'

const Dayjs = inject('Dayjs')
const Jsonp = inject('Jsonp')

const callback = 'jsonp_appStore'
const appStoreUrl = (key) =>
  `https://itunes.apple.com/search?term=${key}&country=cn&entity=software&limit=10&callback=${callback}`

const formData = reactive({
  type: '',
  emailName: null,
  emailTitle: null,
  emailBody: null,
  eventName: null,
  eventLocation: null,
  eventAllDay: false,
  eventTime: [Dayjs(), Dayjs().add(2, 'hour')],
  eventDesc: null,
  eventValarm: false,
  eventValarmDate: Dayjs().add(-1, 'day'),
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
            <a-textarea
              v-model:value={formData.emailBody}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="邮件内容"
            ></a-textarea>
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
          <a-form-item label="位置">
            <a-input v-model:value={formData.eventLocation} placeholder="位置"></a-input>
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
            ></a-range-picker>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="日程备注">
            <a-textarea
              v-model:value={formData.eventDesc}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="日程备注"
            ></a-textarea>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="提醒">
            <a-switch v-model:checked={formData.eventValarm} />
          </a-form-item>
        </a-col>
        {formData.eventValarm && (
          <a-col span={24}>
            <a-form-item label="提醒时间">
              {formData.eventAllDay ? (
                <>
                  <a-date-picker
                    v-model:value={formData.eventValarmDate}
                    format="YYYY-MM-DD HH:mm"
                    showTime={{ format: 'HH:mm' }}
                    disabled-date={(date) => date && date > Dayjs().endOf('day')}
                    class="w_100"
                  ></a-date-picker>
                </>
              ) : (
                <a-row gutter={10}>
                  <a-col span={10}>
                    <a-input-number v-model:value={formData.eventValarmTime[0]} class="w_100"></a-input-number>
                  </a-col>
                  <a-col span={10}>
                    <a-select v-model:value={formData.eventValarmTime[1]} class="grow">
                      {[
                        { value: 'S', label: '秒' },
                        { value: 'M', label: '分钟' },
                        { value: 'H', label: '小时' }
                      ].map((item) => (
                        <a-select-option value={item.value}>{item.label}</a-select-option>
                      ))}
                    </a-select>
                  </a-col>
                  <a-col class="flex center">前</a-col>
                </a-row>
              )}
            </a-form-item>
          </a-col>
        )}
        {formData.eventName && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`BEGIN:VEVENT\nDTSTART:${formData.eventTime[0].format(
                  formData.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmm00'
                )}\nDTEND:${formData.eventTime[1].format(
                  formData.eventAllDay ? 'YYYYMMDD' : 'YYYYMMDDTHHmm00'
                )}\nSUMMARY:${formData.eventName}\nLOCATION:${
                  formData.eventLocation
                }\nDESCRIPTION:${formData.eventDesc?.replaceAll('\n', '\\n')}\n${
                  formData.eventValarm
                    ? `BEGIN:VALARM\nTRIGGER:${
                        formData.eventAllDay
                          ? formData.eventValarmDate.format('YYYYMMDDTHHmm00')
                          : `-PT${formData.eventValarmTime.join('')}`
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
  geography: {
    value: 'geography',
    label: '地理坐标',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="纬度" required>
            <a-input-number
              v-model:value={formData.geographyLatitude}
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
              v-model:value={formData.geographyLongitude}
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
              v-model:value={formData.geographyAccuracy}
              min={0}
              max={1000}
              placeholder="精度"
              class="w_100"
            ></a-input-number>
          </a-form-item>
        </a-col>
        {formData.geographyLatitude && formData.geographyLongitude && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`GEO:${formData.geographyLatitude},${formData.geographyLongitude},${formData.geographyAccuracy}`}
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
              v-model:value={formData.text}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="文本内容"
            ></a-textarea>
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
    label: '联系名片',
    dom: () => (
      <>
        <a-col span={24}>
          <a-form-item label="姓名" required>
            <a-row gutter={10}>
              <a-col span={12}>
                <a-input v-model:value={formData.contactSurname} placeholder="姓"></a-input>
              </a-col>
              <a-col span={12}>
                <a-input v-model:value={formData.contactName} placeholder="名"></a-input>
              </a-col>
            </a-row>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="电话号码" required>
            <a-input v-model:value={formData.contactTel} placeholder="电话号码"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="电子邮件">
            <a-input v-model:value={formData.contactEmail} placeholder="电子邮件"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="生日">
            <a-date-picker
              v-model:value={formData.contactBirthday}
              format="YYYY-MM-DD"
              placeholder="生日"
              class="w_100"
            ></a-date-picker>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="地址">
            <a-input v-model:value={formData.contactAdr} placeholder="地址"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="个人主页">
            <a-input v-model:value={formData.contactUrl} placeholder="个人主页"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="QQ">
            <a-input v-model:value={formData.contactQQ} placeholder="QQ"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="组织">
            <a-input v-model:value={formData.contactOrg} placeholder="组织"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="职位">
            <a-input v-model:value={formData.contactTitle} placeholder="职位"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="工作电话">
            <a-input v-model:value={formData.contactWorkTel} placeholder="工作电话"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="备注">
            <a-textarea
              v-model:value={formData.contactNote}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="备注"
            ></a-textarea>
          </a-form-item>
        </a-col>
        {formData.contactSurname && formData.contactName && formData.contactTel && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode
                value={`BEGIN:VCARD\nVERSION:3.0\nN:${formData.contactSurname}${
                  formData.contactName
                }\nTEL;TYPE=HOME,VOICE:${formData.contactTel}\n${
                  formData.contactEmail ? `EMAIL:${formData.contactEmail}\n` : ''
                }${formData.contactBirthday ? `BDAY:${formData.contactBirthday.format('YYYYMMDD')}\n` : ''}${
                  formData.contactAdr ? `ADR:${formData.contactAdr}\n` : ''
                }${formData.contactUrl ? `URL:${formData.contactUrl}\n` : ''}${
                  formData.contactQQ ? `X-QQ:${formData.contactQQ}\n` : ''
                }${formData.contactOrg ? `ORG:${formData.contactOrg}\n` : ''}${
                  formData.contactTitle ? `TITLE:${formData.contactTitle}\n` : ''
                }${formData.contactWorkTel ? `TEL;TYPE=WORK,VOICE:${formData.contactWorkTel}\n` : ''}${
                  formData.contactNote ? `NOTE:${formData.contactNote?.replaceAll('\n', '\\n')}\n` : ''
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
              v-model:value={formData.appStoreName}
              show-search
              listHeight={440}
              filterOption={() => true}
              placeholder="App名称,输入内容搜索(暂时仅支持AppStore的App)"
              class="grow"
              onChange={async (val) => {
                formData.appStoreItem = formData.appStoreList.find((i) => i.trackName === val)
                const res = await Jsonp(appStoreUrl(val), callback)
                formData.appStoreList = res.results
              }}
              onSearch={Debounce(async (val) => {
                const res = await Jsonp(appStoreUrl(val), callback)
                formData.appStoreList = res.results
              }, 500)}
            >
              {formData.appStoreList.map((item) => (
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
        {formData.appStoreItem && (
          <>
            <a-col span={24}>
              <a-space>
                <a-avatar src={formData.appStoreItem.artworkUrl60} shape="square" />
                {formData.appStoreItem.trackName}
              </a-space>
              <p class="textFlow_2">{formData.appStoreItem.description}</p>
            </a-col>
            <a-col span={24}>
              <a-space size={20}>
                <a-qrcode
                  value={`https://apps.apple.com/cn/app/${
                    formData.appStoreItem.trackViewUrl.match(/[^/]+(?=\?)/)?.[0]
                  }`}
                />
                <a-button
                  href={`https://apps.apple.com/cn/app/${formData.appStoreItem.trackViewUrl.match(/[^/]+(?=\?)/)?.[0]}`}
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
            <a-input v-model:value={formData.telephone} placeholder="电话号码"></a-input>
          </a-form-item>
        </a-col>
        {formData.telephone && (
          <a-col span={24}>
            <a-space size={20} wrap>
              <a-qrcode value={`TEL:${formData.telephone}`} />
              <a-button href={`tel:${formData.telephone}`} type="link" target="_blank">
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
            <a-input v-model:value={formData.smsName} placeholder="收信人"></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-form-item label="短信内容">
            <a-textarea
              v-model:value={formData.smsBody}
              auto-size={{ minRows: 2, maxRows: 5 }}
              placeholder="短信内容"
            ></a-textarea>
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
          <a-form-item label="二维码类型" required>
            <a-radio-group v-model:value={formData.type} options={Object.values(typeOption)}></a-radio-group>
          </a-form-item>
        </a-col>
        {typeOption[formData.type]?.dom()}
      </a-row>
    </a-form>
  </a-card>
)
</script>

<style lang="scss" scoped></style>
