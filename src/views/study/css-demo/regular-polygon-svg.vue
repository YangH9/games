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
    <template v-for="item in 14" :key="item">
      <regularPolygonDom :width="width" :side="item + 2"></regularPolygonDom>
    </template>
  </a-card>
</template>

<script setup lang="jsx">
import { ref } from 'vue'

const min = 20
const max = 300
const width = ref(100)

const deg = {
  6.9: 1 / 26,
  8.2: 1 / 22,
  10: 1 / 18,
  12.9: 1 / 14,
  13.8: 2 / 26,
  16.4: 1 / 11,
  18: 1 / 10,
  20: 1 / 9,
  20.8: 3 / 26,
  24.5: 3 / 22,
  25.7: 1 / 7,
  27.7: 2 / 13,
  30: 1 / 6,
  32.7: 2 / 11,
  34.6: 5 / 26,
  36: 1 / 5,
  38.6: 3 / 14,
  40: 2 / 9,
  40.9: 5 / 22,
  41.5: 6 / 26,
  45: 1 / 4
}
const sin = {}
const cos = {}
Object.keys(deg).forEach(item => {
  sin[item] = Math.sin(Math.PI * deg[item])
  cos[item] = Math.cos(Math.PI * deg[item])
})

const regularPolygonDom = ({ width, side }) => {
  const viewWidth = 1024

  const sideLength = {
    5: viewWidth / cos[36] / 2,
    6: viewWidth / 2,
    7: viewWidth / (1 + sin[38.6] * 2),
    8: viewWidth / (1 + cos[45] * 2),
    9: viewWidth / (1 + cos[40] * 2 + sin[10] * 2),
    10: viewWidth / (1 + cos[36] * 2 + sin[18] * 2),
    11: viewWidth / (1 + cos[32.7] * 2 + sin[24.5] * 2),
    12: viewWidth / (1 + cos[30] * 2 + sin[30] * 2),
    13: viewWidth / (1 + cos[27.7] * 2 + sin[34.6] * 2 + sin[6.9] * 2),
    14: viewWidth / (1 + cos[25.7] * 2 + sin[38.6] * 2 + sin[12.9] * 2)
  }

  const path = {
    3: `M 0 ${viewWidth} l ${viewWidth} 0 l -${viewWidth / 2} -${viewWidth * cos[30]} Z`,
    4: `M 0 0 l 0 ${viewWidth} l ${viewWidth} 0 l 0 -${viewWidth} Z`,
    5: `M 0 ${viewWidth - sideLength[5] * cos[18]} l ${sideLength[5] * sin[18]} ${sideLength[5] * cos[18]} l ${sideLength[5]} 0 l ${sideLength[5] * sin[18]} -${sideLength[5] * cos[18]} l -${viewWidth / 2} -${sideLength[5] * sin[36]} Z`,
    6: `M 0 ${viewWidth - sideLength[6] * cos[30]} l ${sideLength[6] / 2} ${sideLength[6] * cos[30]} l ${sideLength[6]} 0 l ${sideLength[6] / 2} -${sideLength[6] * cos[30]} l -${sideLength[6] / 2} -${sideLength[6] * cos[30]} l -${sideLength[6]} 0 Z`,
    7: `M 0 ${viewWidth - sideLength[7] * cos[38.6]} l ${sideLength[7] * sin[38.6]} ${sideLength[7] * cos[38.6]} l ${sideLength[7]} 0 l ${sideLength[7] * sin[38.6]} -${sideLength[7] * cos[38.6]} l -${sideLength[7] * sin[12.9]} -${sideLength[7] * cos[12.9]} l -${sideLength[7] * cos[25.7]} -${sideLength[7] * sin[25.7]} l -${sideLength[7] * cos[25.7]} ${sideLength[7] * sin[25.7]} Z`,
    8: `M 0 ${viewWidth - sideLength[8] * cos[45]} l ${sideLength[8] * cos[45]} ${sideLength[8] * sin[45]} l ${sideLength[8]} 0  l ${sideLength[8] * cos[45]} -${sideLength[8] * sin[45]} l 0 -${sideLength[8]} l -${sideLength[8] * cos[45]} -${sideLength[8] * sin[45]} l -${sideLength[8]} 0 l -${sideLength[8] * cos[45]} ${sideLength[8] * sin[45]} Z`,
    9: `M 0 ${viewWidth - sideLength[9] * sin[40] - sideLength[9] * cos[10]} l ${sideLength[9] * sin[10]} ${sideLength[9] * cos[10]} l ${sideLength[9] * cos[40]} ${sideLength[9] * sin[40]} l ${sideLength[9]} 0 l${sideLength[9] * cos[40]} -${sideLength[9] * sin[40]} l ${sideLength[9] * sin[10]} -${sideLength[9] * cos[10]} l -${sideLength[9] * sin[30]} -${sideLength[9] * cos[30]} l -${sideLength[9] * cos[20]} -${sideLength[9] * sin[20]} l -${sideLength[9] * cos[20]} ${sideLength[9] * sin[20]} Z`,
    10: `M 0 ${viewWidth - sideLength[10] * sin[36] - sideLength[10] * cos[18]} l ${sideLength[10] * sin[18]} ${sideLength[10] * cos[18]} l ${sideLength[10] * cos[36]} ${sideLength[10] * sin[36]} l ${sideLength[10]} 0 l ${sideLength[10] * cos[36]} -${sideLength[10] * sin[36]} l ${sideLength[10] * sin[18]} -${sideLength[10] * cos[18]} l -${sideLength[10] * sin[18]} -${sideLength[10] * cos[18]} l -${sideLength[10] * cos[36]} -${sideLength[10] * sin[36]} l -${sideLength[10]} 0 l -${sideLength[10] * cos[36]} ${sideLength[10] * sin[36]}Z`,
    11: `M 0 ${viewWidth - sideLength[11] * sin[32.7] - sideLength[11] * cos[24.5]} l ${sideLength[11] * sin[24.5]} ${sideLength[11] * cos[24.5]} l ${sideLength[11] * cos[32.7]} ${sideLength[11] * sin[32.7]} l ${sideLength[11]} 0 l ${sideLength[11] * cos[32.7]} -${sideLength[11] * sin[32.7]} l ${sideLength[11] * sin[24.5]} -${sideLength[11] * cos[24.5]} l -${sideLength[11] * sin[8.2]} -${sideLength[11] * cos[8.2]} l -${sideLength[11] * sin[40.9]} -${sideLength[11] * cos[40.9]} l -${sideLength[11] * cos[16.4]} -${sideLength[11] * sin[16.4]} l -${sideLength[11] * cos[16.4]} ${sideLength[11] * sin[16.4]} l -${sideLength[11] * sin[40.9]} ${sideLength[11] * cos[40.9]}Z`,
    12: `M 0 ${viewWidth - sideLength[12] * sin[30] - sideLength[12] * cos[30]} l ${sideLength[12] * sin[30]} ${sideLength[12] * cos[30]} l ${sideLength[12] * cos[30]} ${sideLength[12] * sin[30]} l ${sideLength[12]} 0 l ${sideLength[12] * cos[30]} -${sideLength[12] * sin[30]} l ${sideLength[12] * sin[30]} -${sideLength[12] * cos[30]} l 0 -${sideLength[12]} l -${sideLength[12] * sin[30]} -${sideLength[12] * cos[30]} l -${sideLength[12] * cos[30]} -${sideLength[12] * sin[30]} l -${sideLength[12]} 0 l -${sideLength[12] * cos[30]} ${sideLength[12] * sin[30]} l -${sideLength[12] * sin[30]} ${sideLength[12] * cos[30]}Z`,
    13: `M 0 ${viewWidth - sideLength[13] * sin[27.7] - sideLength[13] * cos[34.6] - sideLength[13] * cos[6.9]} l ${sideLength[13] * sin[6.9]} ${sideLength[13] * cos[6.9]} l ${sideLength[13] * sin[34.6]} ${sideLength[13] * cos[34.6]} l ${sideLength[13] * cos[27.7]} ${sideLength[13] * sin[27.7]} l ${sideLength[13]} 0 l ${sideLength[13] * cos[27.7]} -${sideLength[13] * sin[27.7]} l ${sideLength[13] * sin[34.6]} -${sideLength[13] * cos[34.6]} l ${sideLength[13] * sin[6.9]} -${sideLength[13] * cos[6.9]} l -${sideLength[13] * sin[20.8]} -${sideLength[13] * cos[20.8]} l -${sideLength[13] * cos[41.5]} -${sideLength[13] * sin[41.5]} l -${sideLength[13] * cos[13.8]} -${sideLength[13] * sin[13.8]} l -${sideLength[13] * cos[13.8]} ${sideLength[13] * sin[13.8]} l -${sideLength[13] * cos[41.5]} ${sideLength[13] * sin[41.5]} Z`,
    14: `M 0 ${viewWidth - sideLength[13] * sin[25.7] - sideLength[13] * sin[38.6] - sideLength[13] * cos[12.9]} l ${sideLength[14] * sin[12.9]} ${sideLength[14] * cos[12.9]} l ${sideLength[14] * sin[38.6]} ${sideLength[14] * cos[38.6]} l ${sideLength[14] * cos[25.7]} ${sideLength[14] * sin[25.7]} l ${sideLength[14]} 0 l ${sideLength[14] * cos[25.7]} -${sideLength[14] * sin[25.7]} l ${sideLength[14] * sin[38.6]} -${sideLength[14] * cos[38.6]} l ${sideLength[14] * sin[12.9]} -${sideLength[14] * cos[12.9]} l -${sideLength[14] * sin[12.9]} -${sideLength[14] * cos[12.9]} l -${sideLength[14] * sin[38.6]} -${sideLength[14] * cos[38.6]} l -${sideLength[14] * cos[25.7]} -${sideLength[14] * sin[25.7]} l -${sideLength[14]} 0 l -${sideLength[14] * cos[25.7]} ${sideLength[14] * sin[25.7]} l -${sideLength[14] * sin[38.6]} ${sideLength[14] * cos[38.6]} Z`
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
      <path d={path[side]} />
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
