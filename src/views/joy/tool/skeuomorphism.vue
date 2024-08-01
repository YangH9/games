<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 18, dom: '.ant-card-body' }" title="CSS新拟态设计风格生成器" :hoverable="true">
      <div class="preview">
        <div class="box"></div>
      </div>
      <a-row>
        <a-col class="col" :span="12">
          <a-form :labelCol="{ span: 2 }">
            <a-form-item label="颜色">
              <a-input />
            </a-form-item>
            <a-form-item label="大小">
              <a-slider />
            </a-form-item>
            <a-form-item label="圆角">
              <a-slider />
            </a-form-item>
            <a-form-item label="距离">
              <a-slider />
            </a-form-item>
            <a-form-item label="强度">
              <a-slider />
            </a-form-item>
            <a-form-item label="模糊">
              <a-slider />
            </a-form-item>
            <a-form-item label="形状">
              <a-radio-group class="radio" value="a" button-style="solid">
                <a-radio-button value="a">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="145"
                    height="24"
                    viewBox="0 0 145 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3C22 2.44772 22.4477 2 23 2H121C121.552 2 122 2.44772 122 3V7.00001C122 15.2843 128.716 22 137 22H145"
                      stroke="inherit"
                      stroke-width="6"
                    ></path>
                  </svg>
                </a-radio-button>
                <a-radio-button value="b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="145"
                    height="24"
                    viewBox="0 0 145 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      d="M0 22H7C15.2843 22 22 15.2843 22 7.00001V3.39336C22 2.7091 22.6808 2.2299 23.3304 2.44485C59.2066 14.3156 85.7767 12.9047 120.7 2.39438C121.343 2.20072 122 2.67921 122 3.3512V7.00001C122 15.2843 128.716 22 137 22H145"
                      stroke="inherit"
                      stroke-width="6"
                    ></path>
                  </svg>
                </a-radio-button>
                <a-radio-button value="c">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="145"
                    height="33"
                    viewBox="0 0 145 33"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      d="M0 31H7C15.2843 31 22 24.2843 22 16V11.7329C22 11.2966 22.2898 10.9083 22.7061 10.7779C60.0722 -0.924818 84.913 -0.925978 121.302 10.7745C121.714 10.9071 122 11.2935 122 11.727V16C122 24.2843 128.716 31 137 31H145"
                      stroke="inherit"
                      stroke-width="6"
                    ></path>
                  </svg>
                </a-radio-button>
                <a-radio-button value="d">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="145"
                    height="24"
                    viewBox="0 0 145 24"
                    fill="none"
                    stroke="white"
                  >
                    <path
                      d="M0 2H22V21C22 21.5523 22.4477 22 23 22H121C121.552 22 122 21.5523 122 21V2H145"
                      stroke="inherit"
                      stroke-width="6"
                    ></path>
                  </svg>
                </a-radio-button>
              </a-radio-group>
            </a-form-item>
            <a-form-item label="方向">
              <a-radio-group value="a" button-style="solid">
                <a-radio-button value="a">右下</a-radio-button>
                <a-radio-button value="b">左下</a-radio-button>
                <a-radio-button value="c">右上</a-radio-button>
                <a-radio-button value="d">左上</a-radio-button>
              </a-radio-group>
            </a-form-item>
          </a-form>
        </a-col>
        <a-col class="col" :span="12">
          <div class="code-box">
            border-radius: 50px;<br />
            background: #e0e0e0;<br />
            box-shadow: 20px 20px 60px #bebebe, -20px -20px 60px #ffffff;
          </div>
        </a-col>
      </a-row>
    </a-card>
  </div>
</template>

<script setup>
import Breadcrumb from '@/components/Breadcrumb.vue'

// https://www.fly63.com/tool/neumorphism/
// https://yeelz.com/tool/softui/#e0e0e0
// https://neumorphism.io/#e0e0e0
</script>

<style scoped lang="scss">
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
      width: 200px;
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
  .code-box {
    padding: 10px;
    color: #fff;
    background: #000;
  }
}
</style>
