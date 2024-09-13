<template>
  <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" :style="{ '--width': `${width}px` }">
    <template #title>
      <a-row justify="center">
        <a-col :span="2"> 宽度 </a-col>
        <a-col :span="6">
          <a-slider v-model:value="width" :min="min" :max="max" />
        </a-col>
        <a-col :span="4">
          <a-input-number v-model:value="width" :min="min" :max="max" class="ml_2" />
        </a-col>
      </a-row>
    </template>
    <template v-for="item in 20" :key="item">
      <regularPolygonDom :width="width" :side="item + 2"></regularPolygonDom>
    </template>
  </a-card>
</template>

<script setup lang="jsx">
import { ref } from 'vue'

const min = 20
const max = 300
const width = ref(100)

const sin = {
  12.8: Math.sin(Math.PI * (1 / 14)),
  18: Math.sin(Math.PI / 10),
  25.7: Math.sin(Math.PI * (1 / 7)),
  30: Math.sin(Math.PI / 6),
  36: Math.sin(Math.PI / 5),
  45: Math.sin(Math.PI / 4),
  51.4: Math.sin(Math.PI * (2 / 7)),
  60: Math.sin(Math.PI / 3)
}
const cos = {
  12.8: Math.cos(Math.PI * (1 / 14)),
  18: Math.cos(Math.PI / 10),
  25.7: Math.cos(Math.PI * (1 / 7)),
  30: Math.cos(Math.PI / 6),
  36: Math.cos(Math.PI / 5),
  45: Math.cos(Math.PI / 4),
  51.4: Math.cos(Math.PI * (2 / 7)),
  60: Math.cos(Math.PI / 3)
}

const regularPolygonDom = ({ width, side }) => {
  const viewWidth = 1024

  const sideLength = {
    5: viewWidth / cos[36] / 2,
    6: viewWidth / 2,
    7: viewWidth / (1 + cos[51.4] * 2),
    8: viewWidth / (1 + cos[45] * 2)
  }

  const path = {
    3: `M 0 ${viewWidth} l ${viewWidth} 0 l -${viewWidth / 2} -${viewWidth * sin[60]} Z`,
    4: `M 0 0 l 0 ${viewWidth} l ${viewWidth} 0 l 0 -${viewWidth} Z`,
    5: `M 0 ${viewWidth - sideLength[5] * cos[18]} l ${sideLength[5] * sin[18]} ${sideLength[5] * cos[18]} l ${sideLength[5]} 0 l ${sideLength[5] * sin[18]} -${sideLength[5] * cos[18]} l -${viewWidth / 2} -${sideLength[5] * sin[36]} Z`,
    6: `M 0 ${viewWidth - sideLength[6] * cos[30]} l ${sideLength[6] / 2} ${sideLength[6] * cos[30]} l ${sideLength[6]} 0 l ${sideLength[6] / 2} -${sideLength[6] * cos[30]} l -${sideLength[6] / 2} -${sideLength[6] * cos[30]} l -${sideLength[6]} 0 Z`,
    7: `M 0 ${viewWidth - sideLength[7] * sin[51.4]} l ${sideLength[7] * cos[51.4]} ${sideLength[7] * sin[51.4]} l ${sideLength[7]} 0 l ${sideLength[7] * cos[51.4]} -${sideLength[7] * sin[51.4]} l -${sideLength[7] * sin[12.8]} -${sideLength[7] * cos[12.8]} l -${sideLength[7] * cos[25.7]} -${sideLength[7] * sin[25.7]} l -${sideLength[7] * cos[25.7]} ${sideLength[7] * sin[25.7]} Z`,
    8: `M 0 ${viewWidth - sideLength[8] * cos[45]} l ${sideLength[8] * cos[45]} ${sideLength[8] * sin[45]} l ${sideLength[8]} 0  l ${sideLength[8] * cos[45]} -${sideLength[8] * sin[45]} l 0 -${sideLength[8]} l -${sideLength[8] * cos[45]} -${sideLength[8] * sin[45]} l -${sideLength[8]} 0 l -${sideLength[8] * cos[45]} ${sideLength[8] * sin[45]} Z`,
    0: `M 0 ${viewWidth} Z`
  }
  return (
    <svg
      class="polygon"
      viewBox={`0 0 ${viewWidth} ${viewWidth}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${width}px`,
        height: `${width}px`,
        fill: 'pink'
      }}
    >
      <path d={path[side]} opacity={0.5} />
    </svg>
  )
}
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  overflow-x: hidden;
  overflow-y: auto;
}

.polygon {
  position: relative;
  display: inline-block;
  margin: 10px;
  overflow: unset;
}
</style>
