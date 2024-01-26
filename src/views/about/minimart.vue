<template>
  <a-card title="杂货铺" class="mb_2" :hoverable="true">
    <template #extra>
      联系购买：<a-button href="tencent://message/?uin=1770571618" type="link" size="small"> 1770571618 </a-button>
    </template>
  </a-card>
  <a-card title="旬邑红富士苹果" class="mb_2" :hoverable="true">
    <p>
      小果 <span class="font_bold">50</span> /箱，果径 <span class="font_bold">65mm</span> 左右；中果
      <span class="font_bold">60</span> /箱，果径 <span class="font_bold">70mm</span> 左右；大果
      <span class="font_bold">80</span> /箱，果径 <span class="font_bold">80mm</span> 左右。
      每箱为10斤装，果径有大有小，体积不同可能会有空槽。
    </p>
    <p><span class="font_bold">注：</span>包邮，部分偏远地区不发货</p>
  </a-card>
  <a-card title="全网话费慢充" class="mb_2" :hoverable="true">
    <p>
      全国移动 <span class="font_bold">95</span> 充 <span class="font_bold">100</span> 、
      <span class="font_bold">187</span> 充 <span class="font_bold">200</span> ； 全国联通
      <span class="font_bold">95</span> 充 <span class="font_bold">100</span> 、 <span class="font_bold">187</span> 充
      <span class="font_bold">200</span> ； 全国电信 <span class="font_bold">95</span> 充
      <span class="font_bold">100</span> 、 <span class="font_bold">187</span> 充
      <span class="font_bold">200</span> 。话费慢充，1~2天内到账，平均1天内到账。
    </p>
    <p>
      <span class="font_bold">注：</span>
      手机副卡、虚拟卡不能参与，只有在网实体主卡可参与，排队充值期间不可再其他渠道进行充值。
    </p>
  </a-card>
  <a-card class="mb_2" :hoverable="true"> 更新时间：{{ Dayjs(1705420800000).format('YYYY-MM-DD') }} </a-card>
</template>

<script setup lang="jsx">
import { inject } from 'vue'

const Dayjs = inject('Dayjs')
</script>

<style scoped lang="scss"></style>
