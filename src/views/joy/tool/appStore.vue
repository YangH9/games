<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="App Store信息" :hoverable="true">
      <mainDom></mainDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { sizeFilter } from '@/utils'
import { debounce } from 'lodash'
import { reactive, inject, ref } from 'vue'

const Jsonp = inject('Jsonp')

const callback = 'jsonp_appStore'

const option = {
  entity: {
    software: { value: 'software', label: 'IOS' },
    macSoftware: { value: 'macSoftware', label: 'MacOS' }
  },
  contry: {
    cn: { value: 'cn', label: '中国/CN' },
    us: { value: 'us', label: '美国/US' },
    jp: { value: 'jp', label: '日本/JP' },
    kr: { value: 'kr', label: '韩国/KR' }
  }
}

const formData = reactive({
  name: '',
  entity: 'software',
  contry: 'cn'
})
const appList = ref([])
// limit: 10

const getData = async () => {
  const res = await Jsonp(
    `https://itunes.apple.com/search?term=${formData.name}&country=${formData.contry}&entity=${formData.entity}&callback=${callback}`,
    callback
  )
  appList.value = res.results
}

getData()

const mainDom = () => (
  <>
    <a-form model={formData} label-col={{ span: 3 }}>
      <a-row gutter={24}>
        <a-col span={24}>
          <a-form-item label="App名称">
            <a-input
              v-model:value={formData.name}
              placeholder="App相关信息"
              onChange={debounce(getData, 1000)}
            ></a-input>
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="系统" label-col={{ span: 3, md: 6 }}>
            <a-radio-group
              v-model:value={formData.entity}
              options={Object.values(option.entity)}
              onChange={getData}
            ></a-radio-group>
          </a-form-item>
        </a-col>
        <a-col span={24} md={12}>
          <a-form-item label="地区" label-col={{ span: 3, md: 6 }}>
            <a-radio-group
              v-model:value={formData.contry}
              options={Object.values(option.contry)}
              onChange={getData}
            ></a-radio-group>
          </a-form-item>
        </a-col>
        <a-col span={24}>
          <a-list
            item-layout="vertical"
            data-source={appList.value}
            renderItem={({ item }) => (
              <a-list-item>
                <a-list-item-meta
                  v-slots={{
                    title: () => (
                      <div class="flex items_center wrap">
                        <a
                          href={`https://apps.apple.com/cn/app/${item.trackViewUrl.match(/[^/]+(?=\?)/)?.[0]}`}
                          class="text_xl font_bold mr_4 textFlow"
                          title={item.trackName}
                        >
                          {item.trackName}
                        </a>
                        <a-tag color="success">{item.trackContentRating}</a-tag>
                        <a-tag color="gold">
                          {option.entity[item.wrapperType]?.label}-{item.primaryGenreName}
                        </a-tag>
                        <div class="grow"></div>
                        <a-tag>{sizeFilter(item.fileSizeBytes)}</a-tag>
                        <a-tag v-slots={{ icon: () => <APropertySafetyTwoTone /> }}>{item.formattedPrice}</a-tag>
                        <a-tag v-slots={{ icon: () => <AInfoCircleTwoTone /> }}>{item.version}</a-tag>
                      </div>
                    ),
                    description: () => (
                      <div class="flex items_center wrap">
                        <a href={item.artistViewUrl} class="text_no_wrap">
                          {item.artistName}
                        </a>
                        <div class="grow"></div>
                        {item.genres.map((i) => (
                          <a-tag color="cyan">{i}</a-tag>
                        ))}
                        {item.advisories.map((i) => (
                          <a-tag color="blue">{i}</a-tag>
                        ))}
                      </div>
                    ),
                    avatar: () => <a-avatar shape="square" size={64} src={item.artworkUrl100}></a-avatar>
                  }}
                ></a-list-item-meta>
                <p class="textFlow_2">{item.description}</p>
              </a-list-item>
            )}
          ></a-list>
        </a-col>
      </a-row>
    </a-form>
  </>
)
</script>

<style lang="scss" scoped></style>
