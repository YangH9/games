<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" :style="{ '--width': `${width}px` }">
    <template #title>
      <a-row justify="center">
        <a-col :span="6">
          <a-slider v-model:value="width" :min="min" :max="max" />
        </a-col>
        <a-col :span="4">
          <a-input-number v-model:value="width" :min="min" :max="max" class="ml_2" />
        </a-col>
      </a-row>
    </template>
    <div class="polygon p3"></div>
    <div class="polygon p4"></div>
    <div class="polygon p5"></div>
    <div class="polygon p6"></div>
    <div class="polygon p7">
      <div></div>
    </div>
    <div class="polygon p8">
      <div></div>
    </div>
    <div class="polygon pp6">
      <div>
        <div class="content">旋转正六边形</div>
      </div>
    </div>
    <div class="polygon pp8">
      <div>
        <div class="content">旋转正八边形</div>
      </div>
    </div>
  </a-card>
</template>

<script setup>
import { ref } from 'vue'

const min = ref(20)
const max = ref(300)
const width = ref(100)
</script>

<style lang="less" scoped>
.ant-card :deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;

  *,
  *::before,
  *::after {
    box-sizing: content-box;
  }
}

.polygon {
  --bgc: pink;
  position: relative;
  display: inline-block;
  margin: 10px;

  &,
  &::before,
  &::after {
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 0;
  }
}

.p3 {
  --sin60: calc(var(--width) * 0.866);
  border-width: 0 calc(var(--width) / 2) var(--sin60);
  border-color: transparent transparent var(--bgc);
}

.p4 {
  width: var(--width);
  height: var(--width);
  background: var(--bgc);
}

.p5 {
  --sin54: calc(var(--width) * 0.809);
  --cos54: calc(var(--width) * 0.5878);
  --sin18: calc(var(--width) * 0.309);
  --cos18: calc(var(--width) * 0.951);
  width: calc(var(--sin54) * 2);
  height: calc(var(--cos54) + var(--cos18));

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    border-width: 0 var(--sin54) var(--cos54);
    border-color: transparent transparent var(--bgc);
  }

  &::after {
    content: '';
    position: absolute;
    top: var(--cos54);
    width: var(--width);
    border-width: var(--cos18) var(--sin18) 0;
    border-color: var(--bgc) transparent transparent;
  }
}

.p6 {
  --sin60: calc(var(--width) * 0.866);
  width: calc(var(--width) * 2);
  height: calc(var(--sin60) * 2);

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: var(--width);
    border-width: 0 calc(var(--width) / 2) var(--sin60);
    border-color: transparent transparent var(--bgc);
  }

  &::after {
    bottom: 0;
    border-width: var(--sin60) calc(var(--width) / 2) 0;
    border-color: var(--bgc) transparent transparent;
  }
}

.p7 {
  --sin38: calc(var(--width) * 0.6234);
  --cos38: calc(var(--width) * 0.7818);
  --sin64: calc(var(--width) * 0.9009);
  --cos64: calc(var(--width) * 0.434);
  --sin77: calc(var(--width) * 0.9749);
  --cos77: calc(var(--width) * 0.2226);
  width: calc(var(--width) + var(--sin38) + var(--sin38));
  height: calc(var(--cos64) + var(--sin77) + var(--cos38));

  & > div,
  &::before,
  &::after {
    content: '';
    position: absolute;
  }

  &::before {
    top: 0;
    left: var(--cos77);
    border-width: 0 var(--sin64) var(--cos64);
    border-color: transparent transparent var(--bgc);
  }

  & > div {
    width: calc(var(--sin64) * 2);
    top: var(--cos64);
    border-style: solid;
    border-width: 0 var(--cos77) var(--sin77);
    border-color: transparent transparent var(--bgc);
  }

  &::after {
    width: var(--width);
    top: calc(var(--cos64) + var(--sin77));
    border-width: var(--cos38) var(--sin38) 0;
    border-color: var(--bgc) transparent transparent;
  }
}

.p8 {
  --sin45: calc(var(--width) * 0.707);
  --sin45_2: calc(var(--sin45) * 2);
  width: calc(var(--width) + var(--sin45_2));
  height: calc(var(--width) + var(--sin45_2));

  & > div {
    background: var(--bgc);
    position: absolute;
    top: var(--sin45);
    width: calc(var(--width) + var(--sin45_2));
    height: var(--width);
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    width: var(--width);
    top: 0;
    border-width: 0 var(--sin45) var(--sin45);
    border-color: transparent transparent var(--bgc);
  }

  &::after {
    top: auto;
    bottom: 0;
    border-width: var(--sin45) var(--sin45) 0;
    border-color: var(--bgc) transparent transparent;
  }
}

.pp6,
.pp8 {
  position: relative;
  display: inline-block;
  width: calc(var(--width) * 0.86 * 2);
  height: calc(var(--width) * 1 * 2);
  overflow: hidden;
  visibility: hidden;
  transform: rotate(-60deg) skewY(30deg);

  & > div {
    transform: skewY(-30deg) rotate(60deg);
    width: 100%;
    height: 100%;
    position: absolute;
    color: #fff;
    overflow: hidden;
    visibility: hidden;
  }

  & .content {
    position: absolute;
    width: 120%;
    height: 100%;
    background: pink;
    left: -100%;
    right: -100%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: visible;
  }
}

.pp8 {
  width: calc(var(--width) * 2);
  height: calc(var(--width) * 2);
  transform: rotate(45deg);

  & > div {
    transform: rotate(-45deg);
  }
}
</style>
