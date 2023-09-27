<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-layout-content>
      <div class="ant-card-body">
        <a-timeline mode="alternate">
          <a-timeline-item v-for="(item, i) of historyList" :key="i">
            <a-card :title="item.title" :hoverable="true">
              {{ item.text }}
            </a-card>
          </a-timeline-item>
        </a-timeline>
      </div>
    </a-layout-content>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'
//
const historyList = [
  { title: '2022年12月9日', text: '部落冲突公测（运营商换为腾讯，其他版本废弃）' },
  { title: '2021年10月8日', text: '英雄联盟手游，在中国大陆地区开启公测' },
  { title: '2021年1月27日', text: '梦想新大陆发行' },
  { title: '2021年1月27日', text: '鸿图之下发行' },
  { title: '2020年12月25日', text: '使命召唤手游（简称CODM）' },
  { title: '2020年6月9日', text: '荒野乱斗（国服）发行，2018年12月12日（全球上线）' },
  { title: '2019年5月8日', text: '和平精英发行（绝地求生：刺激战场的发布时间2018年2月9日）' },
  { title: '2018年2月9日', text: '绝地求生：刺激战场发行（2019年5月8日更名为和平精英）' },
  { title: '2018年2月9日', text: '绝地求生：全军出击发行（2019年5月8日停服）' },
  { title: '2017年12月27日', text: 'QQ飞车手游发行，注册时间2017年12月27日' },
  { title: '2017年6月6日', text: '魂斗罗：归来发行' },
  { title: '2017年3月1日', text: '龙之谷手游发行' },
  { title: '2016年5月19日', text: '火影忍者发行' },
  { title: '2016年1月4日', text: '部落冲突：皇室战争发行' },
  { title: '2015年11月26日', text: '王者荣耀发行' },
  { title: '2015年9月21日', text: '穿越火线：枪战王者发行' },
  { title: '2015年', text: '全民突击发行（腾讯首款FPS枪战手游）' },
  { title: '2014年10月26日', text: '天天风之旅发行（2018年1月22日停服）' },
  { title: '2014年3月12日', text: '雷霆战机发行（2021年10月11日11点正式停止在中国大陆地区的运营）' },
  { title: '2014年1月10日', text: '全民飞机大战' },
  { title: '2013年9月16日', text: '天天酷跑发行' },
  { title: '2013年12月1日', text: '天天飞车发行（2020年12月15日停服）' },
  { title: '2012年8月2日', text: '部落冲突发行' },
  { title: '2012年7月26日', text: '神庙逃亡发行（2018年6月13日下架）' }
]
</script>

<style lang="less" scoped>
.ant-card-body {
  padding: 0 20px;
}

.ant-timeline {
  .ant-timeline-item:last-child {
    padding-bottom: 0;
  }

  :deep(.ant-timeline-item) {
    .ant-timeline-item-head {
      margin-left: -10px;
      width: 24px;
      height: 24px;
    }

    .ant-timeline-item-content {
      width: calc(50% - 20px);
    }

    &.ant-timeline-item-left {
      .ant-timeline-item-content {
        left: calc(50% - 0px);
      }
    }

    .ant-timeline-item-tail {
      border-left: 2px solid #1890ff80;
    }
  }
}
</style>
