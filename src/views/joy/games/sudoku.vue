<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card title="数独" :hoverable="true"> </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref } from 'vue'

// 空格数

// 数独规则：格子数为9*9。由9个3*3的九宫格组成。每个小格子填入数字1到9。每一行、每一列不能有重复的数字；每一个九宫格内不能有重复的数字。当所有空格都填满时为成功。
// 点击下方列表的数字或格子内的系统生成的黑色数字，则该数字为当前数字，点击空格则填写该数字，重复点击则删除。人工填入的数字为绿色（夜间模式下为黄色）。橙色为已完成数字。
// 设置空格数调节难度。空格数和难度的关系待考证。点击按钮新开一局。
</script>

<style scoped lang="scss"></style>
