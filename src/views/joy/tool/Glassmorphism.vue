<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="CSS玻璃拟物化风格生成器" :hoverable="true">
      <div class="preview">
        <div class="box"></div>
      </div>
      <a-row>
        <a-col class="col" :span="12">
          <a-form :labelCol="{ span: 4 }">
            <a-form-item label="背景类型">
              <a-select></a-select>
            </a-form-item>
            <a-form-item label="背景图片">
              <a-input />
            </a-form-item>
            <a-form-item label="颜色">
              <a-input />
            </a-form-item>
            <a-form-item label="卡片颜色">
              <a-slider />
            </a-form-item>
            <a-form-item label="模糊值">
              <a-slider />
            </a-form-item>
            <a-form-item label="不透明度">
              <a-slider />
            </a-form-item>
            <a-form-item label="饱和">
              <a-slider />
            </a-form-item>
            <a-form-item label="圆角">
              <a-slider />
            </a-form-item>
          </a-form>
        </a-col>
        <a-col class="col" :span="12">
          border-radius: 50px;<br />
          background: #e0e0e0;<br />
          box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://www.fly63.com/tool/glassmorphism/
</script>

<style lang="less" scoped>
.ant-card:deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
  padding: 0;
  .col {
    padding: 20px;
  }
  .preview {
    height: 300px;
    background: #aaa;
    display: flex;
    align-items: center;
    justify-content: center;
    .box {
      width: 300px;
      height: 200px;
      display: block;
      border: 1px solid #000;
    }
  }
  .radio .ant-radio-button-wrapper {
    :last-child > * {
      stroke: #414141;
      width: 60px;
      height: auto;
      display: inline-block;
      pointer-events: none;
    }
  }
  .ant-form-item:last-child {
    margin-bottom: 0;
  }
}
</style>
