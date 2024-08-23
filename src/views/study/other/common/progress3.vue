<template>
  <div class="circleProgress_wrapper" :style="{ '--width': `${width}px` }">
    <div class="wrapper right">
      <div
        class="circleProgress right"
        :style="{
          transform: `rotate(${(props.value / 100 < 0.5 ? (props.value / 100) * 360 : 180) + 45}deg)`,
          'border-width': `${strokeWidth}px`,
          'border-left-color': 'green',
          'border-bottom-color': 'green'
        }"
      ></div>
    </div>
    <div class="wrapper left">
      <div
        class="circleProgress left"
        :style="{
          transform: `rotate(${(props.value / 100 > 0.5 ? (props.value / 100) * 360 : 180) + 225}deg)`,
          'border-width': `${strokeWidth}px`,
          'border-top-color': 'green',
          'border-right-color': 'green'
        }"
      ></div>
    </div>
    {{ props.value }}
  </div>
  <div class="circleProgress_wrapper" :style="{ '--width': `${width}px` }">
    <div class="wrapper right">
      <div class="circleProgress right rightcircle" :style="{ 'border-width': `${strokeWidth}px` }"></div>
    </div>
    <div class="wrapper left">
      <div class="circleProgress left leftcircle" :style="{ 'border-width': `${strokeWidth}px` }"></div>
    </div>
    CSS进度条
  </div>
</template>

<script setup lang="jsx">
const props = defineProps({
  width: { type: Number, default: 100 },
  value: { type: Number, default: 0 },
  strokeWidth: { type: Number, default: 10 }
})
</script>

<style scoped lang="scss">
.circleProgress_wrapper {
  text-align: center;
  line-height: var(--width);
  width: var(--width);
  height: var(--width);
  position: relative;
  margin: 0 10px;
}

.wrapper {
  width: calc(var(--width) / 2);
  height: var(--width);
  position: absolute;
  top: 0;
  overflow: hidden;
}

.right {
  right: 0;
}

.left {
  left: 0;
}

.circleProgress {
  width: var(--width);
  height: var(--width);
  border: 20px solid rgb(81, 197, 81);
  border-radius: 50%;
  position: absolute;
  top: 0;
  transform: rotate(45deg);
}

.rightcircle {
  animation: circleProgressLoad_right 10s linear infinite;
}

.leftcircle {
  animation: circleProgressLoad_left 10s linear infinite;
}

@keyframes circleProgressLoad_right {
  0% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(45deg);
  }

  50% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(225deg);
  }

  100% {
    border-left-color: green;
    border-bottom-color: green;
    transform: rotate(225deg);
  }
}

@keyframes circleProgressLoad_left {
  0% {
    transform: rotate(45deg);
  }

  50% {
    border-top-color: green;
    border-right-color: green;
    transform: rotate(45deg);
  }

  100% {
    border-top-color: green;
    border-right-color: green;
    transform: rotate(225deg);
  }
}
</style>
