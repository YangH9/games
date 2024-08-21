<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" class="flow_hidden" title="时间轮盘" :hoverable="true">
      <template #extra>
        <a-checkbox-group
          v-model:value="dateListCheck"
          :options="[
            { label: '月', value: 'month' },
            { label: '日', value: 'date' },
            { label: '上午下午', value: 'ampm' },
            { label: '时', value: 'hour' },
            { label: '分', value: 'minute' },
            { label: '秒', value: 'second' }
          ]"
        />
      </template>
      <div class="clock">
        <div class="shade"></div>
        <div class="year rotate_box">
          <div>{{ dateTime.year }}</div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.monthDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.monthList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'month') }"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.dateDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.dateList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'date') }"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.ampmDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.ampmList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'ampm') }"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.hourDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.hourList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'hour') }"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.minuteDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.minuteList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'minute') }"
          >
            {{ item }}
          </div>
        </div>
        <div
          class="rotate_box"
          :style="{ transform: `rotate(${dateTime.secondDeg}deg)`, transition: hasT ? `transform .5s` : 'none' }"
        >
          <div
            v-for="(item, index) in dateTimeList.secondList"
            :key="index"
            :style="{ transform: transformItemFilter(index, 'second') }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const dateListCheck = ref(['month', 'date', 'ampm', 'hour', 'minute', 'second'])

const dateTime = reactive({
  year: '',
  monthDeg: 0,
  dateDeg: 0,
  hourDeg: 0,
  minuteDeg: 0,
  secondDeg: 0,
  ampmDeg: 0
})
const dateTimeList = reactive({
  monthList: [],
  dateList: [],
  hourList: [],
  minuteList: [],
  secondList: [],
  ampmList: []
})
const dateLength = ref(0)
const hasT = ref(false)

const transformItemFilter = (index, key) => {
  const degMap = {
    month: 30,
    date: 360 / dateLength.value,
    hour: dateListCheck.value.includes('ampm') ? 30 : 15,
    minute: 6,
    second: 6,
    ampm: 180
  }
  const itemWidth = 420 / dateListCheck.value.length
  const dateIndex = dateListCheck.value.findIndex(item => item === key)
  return dateListCheck.value.includes(key)
    ? key !== 'hour'
      ? `rotate(${index * degMap[key]}deg) translateX(${dateIndex * itemWidth + 60}px)`
      : dateListCheck.value.includes('ampm') && index > 12
        ? 'scale(0)'
        : `rotate(${index * degMap[key]}deg) translateX(${dateIndex * itemWidth + 60}px)`
    : 'scale(0)'
}

const filterNum = num => {
  const chineseNumbers = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九']
  if (num < 10) {
    return chineseNumbers[num]
  } else if (num >= 10 && num < 20) {
    return `十${chineseNumbers[num % 10]}`
  }
  return `${chineseNumbers[Math.floor(num / 10)]}十${chineseNumbers[num % 10]}`
}

let animationFrame = null

const animation = () => {
  const dateT = new Date()
  const year = dateT.getFullYear()
  const month = dateT.getMonth() + 1
  const date = dateT.getDate()
  const hour = dateT.getHours()
  const minute = dateT.getMinutes()
  const second = dateT.getSeconds()

  dateLength.value = new Date(year, month, 0).getDate()
  dateTime.year = `${year}年`
  dateTime.monthDeg = -(month - 1) * 30
  dateTime.dateDeg = -(date - 1) * (360 / dateLength.value)
  dateTime.hourDeg = dateListCheck.value.includes('ampm') ? -((hour - 1) % 12) * 30 : -(hour - 1) * 15
  dateTime.minuteDeg = -(minute - 1) * 6
  dateTime.secondDeg = -(second - 1) * 6
  dateTime.ampmDeg = -~~(hour / 12) * 180

  const transitionend = () => {
    removeEventListener('transitionend', transitionend)
    hasT.value = false
    setTimeout(() => {
      if ((month + 1) * 30 >= 360) {
        dateTime.monthDeg = 360 - month * 30
      }
      if ((date + 1) * (360 / dateLength.value) >= 360) {
        dateTime.dateDeg = 360 - (date - 1) * (360 / dateLength.value)
      }
      if ((dateListCheck.value.includes('ampm') ? ((hour + 1) % 12) * 30 : (hour + 1) * 15) >= 360) {
        dateTime.hourDeg = 360 - (dateListCheck.value.includes('ampm') ? -((hour - 1) % 12) * 30 : -(hour - 1) * 15)
      }
      if ((minute + 1) * 6 >= 360) {
        dateTime.minuteDeg = 360 - (minute - 1) * 6
      }
      if (~~((hour + 1) / 12) * 180 >= 360) {
        dateTime.ampmDeg = 360 - ~~(hour / 12) * 180
      }
      dateTime.secondDeg = 360 - (second - 1) * 6
      setTimeout(
        () => {
          hasT.value = true
          animationFrame = requestAnimationFrame(animation)
        },
        1000 - (Date.now() % 1000)
      )
    }, 10)
  }

  if ((second + 1) * 6 >= 360) {
    addEventListener('transitionend', transitionend)
  } else {
    animationFrame = requestAnimationFrame(animation)
  }
}

const init = () => {
  animation()
  dateTimeList.monthList = Array.from({ length: 12 }, (_, i) => `${filterNum(i + 1)}月`)
  dateTimeList.dateList = Array.from({ length: dateLength.value }, (_, i) => `${filterNum(i + 1)}日`)
  dateTimeList.hourList = Array.from({ length: 24 }, (_, i) => `${filterNum(i + 1)}时`)
  dateTimeList.minuteList = Array.from({ length: 60 }, (_, i) => `${filterNum(i + 1)}分`)
  dateTimeList.secondList = Array.from({ length: 60 }, (_, i) => `${filterNum(i + 1)}秒`)
  dateTimeList.ampmList = ['上午', '下午']
  hasT.value = true
}
init()

document.addEventListener('visibilitychange', e => {
  console.log(e.target.visibilityState)
  if (e.target.visibilityState === 'visible') {
    init()
  } else if (e.target.visibilityState === 'hidden') {
    hasT.value = false
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped lang="scss">
:deep(.ant-card-body) {
  position: relative;
  overflow: hidden;
  font-size: 14px;
}

.clock {
  position: absolute;
  width: 0;
  height: 0;
  top: 50%;
  left: 50%;
  display: flex;
  text-align: right;
}
.year.rotate_box {
  left: -40px;
  top: -40px;
}
.year.rotate_box div {
  background: skyblue;
  position: absolute;
  width: 80px;
  height: 80px;
  border-radius: 50%;
  line-height: 80px;
  text-align: center;
}
.rotate_box {
  position: absolute;
  left: -35px;
  top: -10px;
  transform-origin: 35px 10px;
  margin: 0;
}
.rotate_box div {
  position: absolute;
  width: 70px;
  height: 20px;
}

.shade {
  position: absolute;
  background: skyblue;
  width: 430px;
  height: 28px;
  left: 20px;
  top: -14px;
}
</style>
