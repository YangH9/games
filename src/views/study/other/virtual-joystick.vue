<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="虚拟摇杆" :hoverable="true">
      <fourWayButton></fourWayButton>
      <eightWayButton></eightWayButton>
      <fourWayJoystick></fourWayJoystick>
      <eightWayJoystick></eightWayJoystick>
      <allWayJoystick></allWayJoystick>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { ref } from 'vue'

// 方向数据
const directionData = ref({})

const active = ref('')
// 四向按钮
const fourWayButton = () => {
  return (
    <div class="joystick_box" onTouchend={() => (active.value = '')}>
      {['up', 'right', 'down', 'left'].map(item => (
        <div
          class={['joystick_item', active.value === item ? 'active' : '']}
          onTouchstart={() => (active.value = item)}
        >
          {item}
          {active.value}
        </div>
      ))}
    </div>
  )
}
// 八向按钮
const eightWayButton = () => {
  return (
    <div class="joystick_box" onTouchend={() => (active.value = '')}>
      {['up', 'right', 'down', 'left', 'up_right', 'up_left', 'down_right', 'down_left'].map(item => (
        <div
          class={['joystick_item', active.value === item ? 'active' : '']}
          onTouchstart={() => (active.value = item)}
        >
          {item}
          {active.value}
        </div>
      ))}
    </div>
  )
}
// 四向摇杆
const fourWayJoystick = () => <div>四向摇杆</div>
// 八向摇杆
const eightWayJoystick = () => <div>八向摇杆</div>
// 万向摇杆
const allWayJoystick = () => <div>万向摇杆</div>
</script>

<style scoped lang="scss">
.joystick_box {
  padding: 100px;
  touch-action: none;
}
</style>
