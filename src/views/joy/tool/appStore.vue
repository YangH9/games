<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="" :hoverable="true">
      <mainDom></mainDom>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { sizeFilter } from '@/utils'
import { debounce } from 'lodash'
import { reactive, inject, ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const dayjs = inject('dayjs')
const Jsonp = inject('Jsonp')
const route = useRoute()
const router = useRouter()

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
  name: route.query?.term || '',
  entity: 'software',
  contry: 'cn'
})
const appList = ref([])
const detailData = ref({})
// limit: 10

const getData = async () => {
  router.replace({ query: { term: formData.name } })
  const res = await Jsonp(
    `https://itunes.apple.com/search?term=${formData.name}&country=${formData.contry}&entity=${formData.entity}&callback=${callback}`,
    callback
  )
  appList.value = res.results
}

route.query?.term && getData()

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
              <a-list-item class="px_0" onClick={() => (detailData.value = item)}>
                <a-list-item-meta
                  v-slots={{
                    title: () => (
                      <div class="flex items_center wrap">
                        <a
                          href={`https://apps.apple.com/cn/app/id${item.trackId}`}
                          title={item.trackName}
                          target="_blank"
                          class="text_xl font_bold mr_4 textFlow"
                        >
                          {item.trackName}
                        </a>
                        <a-tag color="success">{item.trackContentRating}</a-tag>
                        <a-tag color="gold">
                          {option.entity[item.wrapperType]?.label}-{item.primaryGenreName}
                        </a-tag>
                        <a-tag>{sizeFilter(item.fileSizeBytes)}</a-tag>
                        <a-tag>
                          <el-rate
                            v-model={item.averageUserRating}
                            disabled
                            show-score
                            size="small"
                            score-template={`${item.userRatingCount}`}
                          />
                        </a-tag>
                        <a-tag v-slots={{ icon: () => <APropertySafetyTwoTone /> }}>{item.formattedPrice}</a-tag>
                        <a-tag v-slots={{ icon: () => <AInfoCircleTwoTone /> }}>{item.version}</a-tag>
                      </div>
                    ),
                    description: () => (
                      <>
                        <div class="mb_2">
                          <a
                            href={`https://apps.apple.com/cn/developer/id${item.artistId}`}
                            title={item.artistName}
                            target="_blank"
                          >
                            {item.artistName}
                          </a>
                        </div>
                        {item.genres.map(i => (
                          <a-tag color="cyan">{i}</a-tag>
                        ))}
                        {item.advisories.map(i => (
                          <a-tag color="blue">{i}</a-tag>
                        ))}
                      </>
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
    <a-drawer
      title="详情"
      placement="bottom"
      closable={false}
      open={!!detailData.value?.trackId}
      height="80vh"
      class="drawer"
      onClose={() => (detailData.value = {})}
    >
      <a-space size={20}>
        <a-avatar shape="square" size={64} src={detailData.value.artworkUrl100}></a-avatar>
        <a-space size={6} direction="vertical">
          <a-space size={10}>
            <div class="text_xl font_bold textFlow">{detailData.value.trackName}</div>
            <a-tag>{detailData.value.contentAdvisoryRating}</a-tag>
          </a-space>
          <a-space size={0}>
            <a-tag color="blue" v-slots={{ icon: () => <APropertySafetyTwoTone /> }}>
              {detailData.value.formattedPrice}
            </a-tag>
            {detailData.value.genres?.map(i => (
              <a-tag color="cyan">{i}</a-tag>
            ))}
          </a-space>
        </a-space>
      </a-space>
      <a-divider></a-divider>
      <div class="scroll_x">
        <a-space size={10}>
          <a-space size={6} align="center" direction="vertical">
            <span class="text_no_wrap">{detailData.value.userRatingCount} 个评分</span>
            <el-rate v-model={detailData.value.averageUserRating} disabled show-score size="small" score-template="" />
            <span>{detailData.value.averageUserRating?.toFixed(2)}</span>
          </a-space>
          <a-divider type="vertical" />
          <a-space size={6} align="center" direction="vertical">
            <span>开发者</span>
            <a
              href={`https://apps.apple.com/cn/developer/id${detailData.value.artistId}`}
              title={detailData.value.artistName}
              target="_blank"
            >
              {detailData.value.artistName}
            </a>
          </a-space>
          <a-divider type="vertical" />
          <a-space size={6} align="center" direction="vertical">
            <span>年龄</span>
            <span class="text_xl font_bold">{detailData.value.contentAdvisoryRating}</span>
          </a-space>
          <a-divider type="vertical" />
          <a-space size={6} align="center" direction="vertical">
            <span>语言</span>
            <span class="text_xl font_bold">{detailData.value.languageCodesISO2A?.[0]}</span>
            {detailData.value.languageCodesISO2A?.length > 0 ? (
              <span class="text_no_wrap">+{detailData.value.languageCodesISO2A?.length}种语言</span>
            ) : (
              ''
            )}
          </a-space>
          <a-divider type="vertical" />
          <a-space size={6} align="center" direction="vertical">
            <span>大小</span>
            <span class="text_xl font_bold text_no_wrap">{sizeFilter(detailData.value.fileSizeBytes)}</span>
          </a-space>
        </a-space>
      </div>
      <a-divider></a-divider>
      <div>
        <div class="flex content_between mb_2">
          <div class="text_xl font_bold textFlow">新内容</div>
        </div>
        <div class="flex content_between mb_1">
          <div>版本：{detailData.value.version}</div>
          <div>{dayjs(detailData.value.currentVersionReleaseDate).format('YYYY/MM/DD')}</div>
        </div>
        <p class="ml_4" v-html={detailData.value.releaseNotes?.replaceAll('\n', '<br />')}></p>
      </div>
      <a-divider></a-divider>
      <p class="px_2" v-html={detailData.value.description?.replaceAll('\n', '<br />')}></p>
      <a-divider></a-divider>
      <div>
        <div class="text_xl font_bold textFlow mb_3">信息</div>
        <div class="px_2">
          <div class="mb_3">
            <div>名称</div>
            <div>{detailData.value.trackName}</div>
          </div>
          <div class="mb_3">
            <div>供应商</div>
            <div>
              {detailData.value.sellerUrl ? (
                <a href={detailData.value.sellerUrl} title={detailData.value.sellerName} target="_blank">
                  {detailData.value.sellerName}
                </a>
              ) : (
                detailData.value.sellerName
              )}
            </div>
          </div>
          <div class="mb_3">
            <div>类别</div>
            <div>
              {detailData.value.genres?.map((i, j) => (
                <a
                  href={` https://itunes.apple.com/cn/genre/id${detailData.value.genreIds?.[j]}`}
                  target="_blank"
                  class="mr_2"
                >
                  {i}
                </a>
              ))}
            </div>
          </div>
          <div class="mb_3">
            <div>大小</div>
            <div class="font_600">{sizeFilter(detailData.value.fileSizeBytes)}</div>
          </div>
          <div class="mb_3">
            <div>年龄分级</div>
            <div class="font_600">{detailData.value.contentAdvisoryRating}</div>
            {detailData.value.advisories?.length > 0 ? <div>{detailData.value.advisories.map(i => i)}</div> : ''}
          </div>
          <div class="mb_3">
            <div>价格</div>
            <div class="font_600">{detailData.value.formattedPrice}</div>
          </div>
          <div class="mb_3">
            <div>更新时间</div>
            <div class="font_600">{dayjs(detailData.value.currentVersionReleaseDate).format('YYYY/MM/DD')}</div>
          </div>
          <div>
            <div>上架时间</div>
            <div class="font_600">{dayjs(detailData.value.releaseDate).format('YYYY/MM/DD')}</div>
          </div>
        </div>
      </div>
    </a-drawer>
  </>
)
</script>

<style scoped lang="scss">
:global(.el-rate .el-rate__icon) {
  margin-right: 0;
}
</style>
