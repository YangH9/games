<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card
      v-calcHeight="{ height: 21, dom: '.ant-card-body' }"
      class="flow_hidden"
      title="雷霆战机图鉴"
      :hoverable="true"
    >
      <a-collapse :activeKey="[0, 1, 2, 3]">
        <a-collapse-panel header="战力数据">战力数据</a-collapse-panel>
        <a-collapse-panel header="图鉴">
          <a-tabs>
            <a-tab-pane :key="1" tab="战机">
              <a-table :dataSource="advancedData.fighter" bordered :pagination="false">
                <a-table-column key="grade" title="名称" data-index="grade" />
                <a-table-column key="maxLevel" title="最大战力" data-index="maxLevel" />
                <a-table-column key="materials" title="进阶材料" data-index="materials" />
                <a-table-column key="score" title="分数加成" data-index="score" />
              </a-table>
            </a-tab-pane>
            <a-tab-pane :key="2" tab="装甲">装甲</a-tab-pane>
            <a-tab-pane :key="3" tab="副武器">服务器</a-tab-pane>
            <a-tab-pane :key="4" tab="僚机">僚机</a-tab-pane>
          </a-tabs>
        </a-collapse-panel>
        <a-collapse-panel header="品阶进阶材料">
          <a-tabs>
            <a-tab-pane :key="1" tab="战机">
              <a-table :dataSource="advancedData.fighter" bordered :pagination="false">
                <a-table-column key="grade" title="品阶" data-index="grade" />
                <a-table-column key="maxLevel" title="最大等级" data-index="maxLevel" />
                <a-table-column key="materials" title="进阶材料" data-index="materials" />
                <a-table-column key="score" title="分数加成" data-index="score" />
              </a-table>
              <p class="mt_2">
                一个紫色MAX需要9个紫色，一个紫色需要一个蓝色MAX和一套夸克级进阶套装，一个蓝色MAX需要5个蓝色
              </p>
              <p>
                按最大消耗计算：一个紫色MAX 需要 9个紫色 或 45个蓝色加9套夸克级进阶套装 或
                45个绿色加45套米加级进阶套装加9套夸克级进阶套装
              </p>
            </a-tab-pane>
            <a-tab-pane :key="2" tab="战神">
              <a-table :dataSource="advancedData.godOfWar" bordered :pagination="false">
                <a-table-column key="grade" title="品阶" data-index="grade" />
                <a-table-column key="maxLevel" title="最大等级" data-index="maxLevel" />
                <a-table-column key="materials" title="进阶材料" data-index="materials" />
                <a-table-column key="score" title="分数加成" data-index="score" />
              </a-table>
              <p class="mt_2">战神MAX需要55套超炫级进阶套装</p>
            </a-tab-pane>
          </a-tabs>
        </a-collapse-panel>
        <a-collapse-panel header="驾驶员">
          <a-descriptions title="基础说明" :column="1">
            <a-descriptions-item>
              驾驶员提供技能、分数加成、战机攻击、装甲生命、副武器攻击、僚机攻击
            </a-descriptions-item>
            <a-descriptions-item>主驾驶100%加成于装备，副驾驶30%加成于装备</a-descriptions-item>
            <a-descriptions-item>驾驶员可通过升级、进阶提升属性，解锁或进阶需要一定数量的星座光辉</a-descriptions-item>
          </a-descriptions>
        </a-collapse-panel>
      </a-collapse>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { computed, inject, reactive, ref } from 'vue'

const dayjs = inject('dayjs')

// 战机数据
//
const fighterData = [
  {
    name: '雷霆突击'
  }
]
const godOfWarData = []

// 图鉴
const atlasData = {
  fighter: [
    { name: '突击零式1级', series: '雷霆突击', battleValue: 180, type: 'fighter' },
    { name: '突击零式', series: '雷霆突击', battleValue: 396, type: 'fighter' },
    { name: '迅雷突击', series: '雷霆突击', battleValue: 515, type: 'fighter' },
  ],
  armor: [],
  wingman: [],
  secondary: []
}

// 进阶数据
const advancedData = {
  fighter: [
    { grade: '白色', maxLevel: '25', score: '24%', materials: '量子级进阶套装' },
    { grade: '绿色', maxLevel: '30', score: '29%', materials: '米加级进阶套装' },
    { grade: '蓝色', maxLevel: '45', score: '44%', materials: '蓝色*1' },
    { grade: '蓝色+1', maxLevel: '50', score: '49%', materials: '蓝色*1' },
    { grade: '蓝色+2', maxLevel: '55', score: '54%', materials: '蓝色*2' },
    { grade: '蓝色+3', maxLevel: '60', score: '59%', materials: '夸克级进阶套装' },
    { grade: '紫色', maxLevel: '75', score: '74%', materials: '紫色*1' },
    { grade: '紫色+1', maxLevel: '80', score: '79%', materials: '紫色*1' },
    { grade: '紫色+2', maxLevel: '85', score: '84%', materials: '紫色*1' },
    { grade: '紫色+3', maxLevel: '90', score: '89%', materials: '紫色*2' },
    { grade: '紫色+4', maxLevel: '95', score: '94%', materials: '紫色*3' },
    { grade: '紫色+5(MAX)', maxLevel: '100', score: '99%', materials: '' }
  ],
  godOfWar: [
    { grade: '战神', maxLevel: '50', score: '74%', materials: '超炫级进阶套装' },
    { grade: '战神+1', maxLevel: '55', score: '79%', materials: '超炫级进阶套装*2' },
    { grade: '战神+2', maxLevel: '60', score: '84%', materials: '超炫级进阶套装*3' },
    { grade: '战神+3', maxLevel: '65', score: '89%', materials: '超炫级进阶套装*4' },
    { grade: '战神+4', maxLevel: '70', score: '94%', materials: '超炫级进阶套装*5' },
    { grade: '战神+5', maxLevel: '75', score: '99%', materials: '超炫级进阶套装*6' },
    { grade: '战神+6', maxLevel: '80', score: '104%', materials: '超炫级进阶套装*7' },
    { grade: '战神+7', maxLevel: '85', score: '109%', materials: '超炫级进阶套装*8' },
    { grade: '战神+8', maxLevel: '90', score: '114%', materials: '超炫级进阶套装*9' },
    { grade: '战神+9', maxLevel: '95', score: '119%', materials: '超炫级进阶套装*10' },
    { grade: '战神+10(MAX)', maxLevel: '100', score: '124%', materials: '' }
  ]
}

// 驾驶员数据
// 名称、星座、技能、[等级上限、光辉数量、技能效果、分数加成、战机攻击、装甲生命、副武器攻击、僚机攻击]
const driverData = [
  {
    name: '布莱德',
    bbb: '白羊座',
    ccc: '充能火花',
    ddd: [
      { lavel: 0, aaa: 10, bbb: '' },
      { lavel: 30, aaa: 20, bbb: '增加高能爆弹威力8%' },
      { lavel: 50, aaa: 30, bbb: '增加高能爆弹威力16%' },
      { lavel: 70, aaa: 40, bbb: '增加高能爆弹威力24%' },
      { lavel: 90, aaa: 0, bbb: '增加高能爆弹威力32%' }
    ]
  },
  {
    name: '巴利尔',
    bbb: '金牛座',
    ccc: '蛮牛冲撞',
    ddd: [
      { lavel: 0, aaa: 10, bbb: '' },
      { lavel: 30, aaa: 20, bbb: '开局冲刺6波' },
      { lavel: 50, aaa: 30, bbb: '开局冲刺12波' },
      { lavel: 70, aaa: 40, bbb: '开局冲刺18波' },
      { lavel: 90, aaa: 0, bbb: '开局冲刺24波' }
    ]
  },
  {
    name: '罗西纳',
    bbb: '双子座',
    ccc: '同步本能',
    ddd: [
      { lavel: 0, aaa: 10, bbb: '' },
      { lavel: 30, aaa: 20, bbb: '提升好友助战时间5秒' },
      { lavel: 50, aaa: 30, bbb: '提升好友助战时间10秒' },
      { lavel: 70, aaa: 40, bbb: '提升好友助战时间15秒' },
      { lavel: 90, aaa: 0, bbb: '提升好友助战时间20秒' }
    ]
  },
  {
    name: '罗西纳',
    bbb: '双子座',
    ccc: '同步本能',
    ddd: [
      { lavel: 0, aaa: 10, bbb: '' },
      { lavel: 30, aaa: 20, bbb: '死亡后冲刺6波' },
      { lavel: 50, aaa: 30, bbb: '死亡后冲刺8波' },
      { lavel: 70, aaa: 40, bbb: '死亡后冲刺10波' },
      { lavel: 90, aaa: 0, bbb: '死亡后冲刺12波' }
    ]
  }
]
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
