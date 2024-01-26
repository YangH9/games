<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" :hoverable="true">
      <template #title>
        <div class="flex items_center content_between">
          <h3>王者荣耀图鉴</h3>
          <h6>数据内容来自<a href="https://pvp.qq.com/">王者荣耀</a>官网，以下数据仅供参考，具体数据以游戏内为准</h6>
        </div>
        <a-divider />
        <a-radio-group
          v-model:value="typeListActive"
          button-style="solid"
          class="flex items_center content_around"
          @change="changeType"
        >
          <a-radio-button v-for="(item, index) in typeList" :key="index" :value="item.key"
            >{{ item.title }}（{{ item.num }}）</a-radio-button
          >
        </a-radio-group>
      </template>
      <template v-if="typeListActive === 'hero'">
        <a-radio-group v-model:value="heroTypeListActive" button-style="solid" class="px_3 scroll_x">
          <a-radio-button v-for="(item, index) in heroTypeList" :key="index" :value="item.key">{{
            item.title
          }}</a-radio-button>
        </a-radio-group>
        <a-divider />
      </template>
      <template v-if="typeListActive === 'item'">
        <a-radio-group v-model:value="itemTypeListActive" button-style="solid" class="px_3 scroll_x">
          <a-radio-button v-for="(item, index) in itemTypeList" :key="index" :value="item.key">{{
            item.title
          }}</a-radio-button>
        </a-radio-group>
        <a-divider />
      </template>
      <a-row :gutter="[10, 10]">
        <template v-if="show && typeListActive === 'hero'">
          <a-col
            v-for="(item, index) in heroList
              .filter(
                i => !heroTypeListActive || i.hero_type === heroTypeListActive || i.hero_type2 === heroTypeListActive
              )
              .slice(0, pageNum)"
            v-bind="colSpan"
            :key="index"
          >
            <a-card ref="heroRef" :hoverable="true">
              <template #title> {{ item.cname }} </template>
              <img
                v-lazy="`${imgBaseUrl}heroimg/${item.ename}/${item.ename}.jpg`"
                class="image"
                src="@/assets/default.png"
                @click="
                  previewUrl = [
                    `${imgBaseUrl}heroimg/${item.ename}/${item.ename}.jpg`,
                    ...Array.from(
                      { length: item.skin_name.split('|').length },
                      (_, i) => `${imgBaseUrl}heroimg/${item.ename}/${item.ename}-bigskin-${i}.jpg`
                    )
                  ]
                "
              />
            </a-card>
          </a-col>
        </template>
        <template v-if="show && typeListActive === 'item'">
          <a-col
            v-for="(item, index) in itemList
              .filter(i => !itemTypeListActive || i.item_type === itemTypeListActive)
              .slice(0, pageNum)"
            v-bind="colSpan"
            :key="index"
          >
            <a-card ref="itemRef" :hoverable="true">
              <template #title> {{ item.item_name }} </template>
              <img
                v-lazy="`${imgBaseUrl}itemimg/${item.item_id}.jpg`"
                class="image"
                src="@/assets/default.png"
                @click="previewUrl = [`${imgBaseUrl}itemimg/${item.item_id}.jpg`]"
              />
            </a-card>
          </a-col>
        </template>
        <template v-if="show && typeListActive === 'summoner'">
          <a-col v-for="(item, index) in summonerList.slice(0, pageNum)" v-bind="colSpan" :key="index">
            <a-card ref="summonerRef" :hoverable="true">
              <template #title> {{ item.summoner_name }} </template>
              <img
                v-lazy="`${imgBaseUrl}summoner/${item.summoner_id}.jpg`"
                class="image"
                src="@/assets/default.png"
                @click="
                  previewUrl = [
                    `${imgBaseUrl}summoner/${item.summoner_id}.jpg`,
                    `${imgBaseUrl}summoner/${item.summoner_id}-big.jpg`
                  ]
                "
              />
            </a-card>
          </a-col>
        </template>
        <template v-if="show && typeListActive === 'ming'">
          <a-col v-for="(item, index) in mingList.slice(0, pageNum)" v-bind="colSpan" :key="index">
            <a-card ref="mingRef" :hoverable="true">
              <template #title> {{ item.ming_name }} </template>
              <img
                v-lazy="`${imgBaseUrl}mingwen/${item.ming_id}.png`"
                class="image"
                src="@/assets/default.png"
                @click="previewUrl = [`${imgBaseUrl}mingwen/${item.ming_id}.png`]"
              />
            </a-card>
          </a-col>
        </template>
      </a-row>
    </a-card>
    <a-image-preview-group
      :preview="{
        visible: previewUrl.length > 0,
        onVisibleChange: e => !e && (previewUrl = [])
      }"
    >
      <a-image v-for="item in previewUrl" :src="item" />
    </a-image-preview-group>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
import { computed, nextTick, ref, watch, inject } from 'vue'
const Jsonp = inject('Jsonp')

// https://pvp.qq.com/web201605/js/herolist.json heroimg/166/166.jpg heroimg/166/166-bigskin-1.jpg heroimg/166/166-mobileskin-1.jpg
const heroList = ref([])
// https://pvp.qq.com/web201605/js/item.json itemimg/1111.jpg
const itemList = ref([])
// https://pvp.qq.com/zlkdatasys/data_zlk_bjtwitem.json itemimg/1111.jpg
// const bjtwItemList = ref([])
// https://pvp.qq.com/web201605/js/summoner.json summoner/80104.jpg summoner/80104-big.jpg
const summonerList = ref([])
// https://pvp.qq.com/web201605/js/ming.json mingwen/1510.png
const mingList = ref([])

const birdUrl = (url, back) => `https://bird.ioliu.cn/v2?url=${url}&callback=${back}`
const baseUrl = 'https://pvp.qq.com/web201605/js/'
const imgBaseUrl = '//game.gtimg.cn/images/yxzj/img201606/'

Jsonp(birdUrl(`${baseUrl}herolist.json`, 'pvp_hero'), 'pvp_hero', data => (heroList.value = JSON.parse(data)))
Jsonp(birdUrl(`${baseUrl}item.json`, 'pvp_item'), 'pvp_item', data => (itemList.value = JSON.parse(data)))
// Jsonp(
//   birdUrl(`https://pvp.qq.com/zlkdatasys/data_zlk_bjtwitem.json`, 'pvp_bjtwitem'),
//   'pvp_bjtwitem',
//   (data) => (bjtwItemList.value = JSON.parse(data))
// )
Jsonp(
  birdUrl(`${baseUrl}summoner.json`, 'pvp_summoner'),
  'pvp_summoner',
  data => (summonerList.value = JSON.parse(data))
)
Jsonp(birdUrl(`${baseUrl}ming.json`, 'pvp_ming'), 'pvp_ming', data => (mingList.value = JSON.parse(data)))

const colSpan = { xs: 8, sm: 6, md: 3 }

const pageNum = ref(10)

const heroRef = ref([])
const itemRef = ref([])
const summonerRef = ref([])
const mingRef = ref([])

const observer = new IntersectionObserver(entries => {
  entries.forEach(item => {
    if (item.isIntersecting) {
      pageNum.value += 10
      observer.unobserve(item.target)
      observer.observe(
        heroRef.value?.at(-1)?.$el ||
          itemRef.value?.at(-1)?.$el ||
          summonerRef.value?.at(-1)?.$el ||
          mingRef.value?.at(-1)?.$el
      )
    }
  })
})
watch(
  [heroRef, itemRef, summonerRef, mingRef],
  () => {
    ;(heroRef.value.length || itemRef.value.length || summonerRef.value.length || mingRef.value.length) &&
      observer.observe(
        heroRef.value?.at(-1)?.$el ||
          itemRef.value?.at(-1)?.$el ||
          summonerRef.value?.at(-1)?.$el ||
          mingRef.value?.at(-1)?.$el
      )
  },
  { deep: true }
)

const changeType = () => {
  pageNum.value = 10
  observer.disconnect()
  document.querySelector('.ant-card-body').scrollTop = 0
}

const previewUrl = ref([])

const show = ref(true)

const typeListActive = ref('hero')
const heroTypeListActive = ref(0)
const itemTypeListActive = ref(0)
const bjtwItemTypeListActive = ref(0)

const typeList = computed(() => [
  { title: '英雄', key: 'hero', num: heroList.value.length },
  { title: '局内道具', key: 'item', num: itemList.value.length },
  // { title: '局内道具\n（边境突围模式）', key: 'bjtwitem', num: bjtwItemList.value.length },
  { title: '召唤师技能', key: 'summoner', num: summonerList.value.length },
  { title: '铭文', key: 'ming', num: mingList.value.length }
])
const heroTypeList = [
  { key: 0, title: '全部' },
  { key: 3, title: '坦克' },
  { key: 1, title: '战士' },
  { key: 4, title: '刺客' },
  { key: 2, title: '法师' },
  { key: 5, title: '射手' },
  { key: 6, title: '辅助' }
]
const itemTypeList = [
  { key: 0, title: '全部' },
  { key: 1, title: '攻击' },
  { key: 2, title: '法术' },
  { key: 3, title: '防御' },
  { key: 4, title: '移动' },
  { key: 5, title: '打野' },
  { key: 7, title: '游走' }
]
const bjtwItemTypeList = [
  { key: 0, title: '全部' },
  { key: 1, title: '装备' },
  { key: 2, title: '道具' },
  { key: 3, title: '额外技能' }
]

watch([typeListActive, heroTypeListActive, itemTypeListActive, bjtwItemTypeListActive], () => {
  pageNum.value = 10
  show.value = false
  nextTick(() => {
    show.value = true
  })
})

// https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi?activityId=2735&sVerifyCode=ABCD&sDataType=JSON&iListNum=4&totalpage=0&page=0&iOrder=0&iSortNumClose=1&jsoncallback=jQuery111304377051446796667_1699868485422&iAMSActivityId=51991&_everyRead=true&iTypeId=1&iFlowId=267733&iActId=2735&iModuleId=2735&_=1699868485423

// https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi?activityId=2735&sVerifyCode=ABCD&sDataType=JSON&iListNum=20&totalpage=0&page=0&iOrder=0&iSortNumClose=1&jsoncallback=jQuery111304377051446796667_1699868485422&iAMSActivityId=51991&_everyRead=true&iTypeId=2&iFlowId=267733&iActId=2735&iModuleId=2735&_=1699868485424

// https://apps.game.qq.com/cgi-bin/ams/module/ishow/V1.0/query/workList_inc.cgi?activityId=2735&sVerifyCode=ABCD&sDataType=JSON&iListNum=20&totalpage=0&page=0&iOrder=0&iSortNumClose=1&jsoncallback=jQuery111304377051446796667_1699868485422&iAMSActivityId=51991&_everyRead=true&iTypeId=2&iFlowId=267733&iActId=2735&iModuleId=2735&_=1699868485425
</script>

<style scoped lang="scss">
.ant-btn + .ant-btn {
  margin-left: 6px;
}

.ant-divider {
  margin-top: 8px;
  margin-bottom: 8px;
}

:deep(.ant-image) {
  display: none;
}

:deep(.ant-card) {
  .ant-card-head-title {
    padding: 10px 0;
  }

  .ant-card-body {
    overflow-x: hidden;
    overflow-y: scroll;
    padding: 10px 4px 10px 10px;

    .ant-card-head {
      font-size: 14px;
      padding-left: 2px;
      padding-right: 2px;
      min-height: auto;

      .ant-card-head-title {
        img {
          filter: invert(1);
        }
      }

      .ant-card-head-title,
      .ant-card-extra {
        padding: 6px 4px;
      }
    }

    .ant-card-body {
      padding: 0;
      overflow-y: hidden;
    }

    .image {
      width: 100%;
      height: 100px;
      display: inline-block;
      object-fit: contain;
    }
  }
}
</style>
