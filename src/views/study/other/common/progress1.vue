<template>
  <div>
    <!-- 水平进度条 -->
    <svg v-if="type === 'line'" :width="lineOption.width" :height="lineOption.height" :viewBox="lineOption.viewBox">
      <line
        :x1="lineOption.x1"
        :y1="lineOption.y1"
        :x2="lineOption.x2"
        :y2="lineOption.y2"
        fill="none"
        :stroke-width="lineOption.strokeWidth"
        :stroke="bgColor"
        :stroke-linecap="linecap"
      />
      <line
        ref="refDom"
        :x1="lineOption.x1"
        :y1="lineOption.y1"
        :x2="lineOption.x2"
        :y2="lineOption.y2"
        fill="none"
        :stroke-width="lineOption.strokeWidth"
        :stroke="color"
        :stroke-dasharray="lineOption.strokeDasharray"
        :stroke-linecap="linecap"
      />
    </svg>
    <!-- 圆形进度条 -->
    <svg
      v-if="type === 'circle'"
      :width="circleOption.width"
      :height="circleOption.height"
      :viewBox="circleOption.viewBox"
    >
      <circle
        :cx="circleOption.cx"
        :cy="circleOption.cy"
        :r="circleOption.r"
        fill="none"
        :stroke="bgColor"
        :stroke-width="circleOption.strokeWidth"
      />
      <circle
        ref="refDom"
        :cx="circleOption.cx"
        :cy="circleOption.cy"
        :r="circleOption.r"
        fill="none"
        :stroke="color"
        :stroke-width="circleOption.strokeWidth"
        :stroke-dasharray="circleOption.strokeDasharray"
        :stroke-linecap="linecap"
      />
      <text
        v-if="hasText"
        :x="circleOption.textX"
        :y="circleOption.textY"
        text-anchor="middle"
        :font-size="circleOption.textSize"
      >
        {{ props.value }}
      </text>
    </svg>
  </div>
</template>

<script setup>
import { computed, reactive, ref } from 'vue'

const props = defineProps({
  type: { type: String, default: 'circle' },
  hasText: { type: Boolean, default: false },
  width: { type: Number, default: 100 },
  steps: { type: Number, default: 100 },
  value: { type: Number, default: 0 },
  color: { type: String, default: '#359dda' },
  bgColor: { type: String, default: '#ccc' },
  linecap: { type: String, default: 'round' },
  strokeWidth: { type: Number, default: 10 }
})

const refDom = ref()
const total = ref(computed(() => refDom?.value?.getTotalLength()))

const lineOption = reactive({
  width: props.width,
  height: props.strokeWidth,
  viewBox: `0 0 ${props.width} ${props.strokeWidth}`,
  x1: props.strokeWidth / 2,
  y1: props.strokeWidth / 2,
  x2: props.width - props.strokeWidth / 2,
  y2: props.strokeWidth / 2,
  strokeWidth: props.strokeWidth,
  strokeDasharray: computed(() => `${(props.value / props.steps) * total.value} ${total.value}`)
})

const circleOption = reactive({
  width: props.width,
  height: props.width,
  viewBox: `0 0 ${props.width} ${props.width}`,
  cx: props.width / 2,
  cy: props.width / 2,
  r: props.width / 2 - props.strokeWidth / 2,
  strokeWidth: props.strokeWidth,
  strokeDasharray: computed(() => `${(props.value / props.steps) * total.value} ${total.value}`),
  textX: props.width / 2,
  textY: props.width / 2 + props.strokeWidth / 2 + 2,
  textSize: props.strokeWidth * 2
})
</script>

<style scoped lang="scss">
circle {
  transform-origin: center center;
  transform: rotate(-90deg);
}
</style>
