<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card
      v-calcHeight="{ height: 21, dom: '.ant-card-body' }"
      class="flow_hidden"
      title="子午流注钟表V1"
      :hoverable="true"
    >
      <div class="clock" :style="{ width: `${radius * 2}px`, height: `${radius * 2}px` }">
        <div class="clock_face">
          <template v-for="(item, index) in meridianList" :key="index">
            <svgBoxDom class="meridian_bg" :index="index" :item="item" :width="radius - 5">
              <meridianBgPathDom :inner="[1, 0.8]" :width="radius - 5"></meridianBgPathDom>
              <meridianBgPathDom :inner="[0.8, 0.56]" :width="radius - 5"></meridianBgPathDom>
              <meridianBgPathDom :inner="[0.45, 0.35]" :width="radius - 5"></meridianBgPathDom>
              <meridianBgPathDom :inner="[0.35, 0]" :width="radius - 5"></meridianBgPathDom>
            </svgBoxDom>
            <meridianTextDom class="meridian_text" :index="index" :translate="0.4">
              {{ item.branch }}
            </meridianTextDom>
            <meridianTextDom class="meridian_text" :index="index" :translate="0.65">
              {{ item.meridian }}
            </meridianTextDom>
            <meridianTextDom class="meridian_text" :index="index" :translate="0.92">
              <span style="font-size: 16px">{{ item.tips2 }}</span>
            </meridianTextDom>
          </template>
          <template v-for="item in 24" :key="item">
            <hourNumDom class="meridian_hour" :item="item" :step="15" :translate="0.8"></hourNumDom>
          </template>
          <template v-for="item in 12" :key="item">
            <hourNumDom class="hour" :item="item" :step="30" :translate="0.5"></hourNumDom>
          </template>
        </div>
        <div class="clock_hand_box">
          <div class="clock_hand hour" :style="transformHandStyle('hour')"></div>
          <div class="clock_hand minute" :style="transformHandStyle('minute')"></div>
          <div class="clock_hand second" :style="transformHandStyle('second')"></div>
          <div class="clock_hand center"></div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'

const radius = 750 / 2

if (window.innerWidth < 750) {
  setTimeout(() => {
    document.querySelector('.clock').style.transform = `translate(-50%, -50%) scale(${window.innerWidth / 750})`
  }, 10)
}

// prettier-ignore
const meridianList = [
  { startTime: 23, endTime: 1, branch: '子', meridian: '胆', color: '#A0EEE1', tips1: '睡觉', tips2: '养胆排毒 应入睡', desc: '胆汁需要新陈代谢，人在子时入眠，胆方能完成代谢。“胆有多清，脑有多清。”凡在子时前入睡者，晨醒后头脑清新、气色红润。反之，日久子时不入睡者面色青白，易生肝炎、胆囊炎、结石一类病症，其中一部分人还会因此“胆怯”。这个时辰养肝血（阴）最好。' },
  { startTime: 1, endTime: 3, branch: '丑', meridian: '肝', color: '#A0EEE1', tips1: '睡觉', tips2: '养肝排毒 忌熬夜', desc: '“肝藏血。”人的思维和行动要靠肝血的支持，废旧的血液需要淘汰，新鲜血液需要产生，这种代谢通常在肝经最旺的丑时完成。如果丑时不入睡，肝还在输出能量支持人的思维和行动，就无法完成新陈代谢。黄帝内经讲：“卧则血归于肝”。所以丑时未入睡者，面色青灰，情志倦怠而躁，易生肝病。' },
  { startTime: 3, endTime: 5, branch: '寅', meridian: '肺', color: '#A0EEE1', tips1: '深睡', tips2: '养肺排毒 需熟睡', desc: '“肺朝百脉。”肝在丑时把血液推陈出新之后，将新鲜血液提供给肺，通过肺送往全身。所以人在清晨面色红润，精神充沛。寅时，有肺病的人反映尤为强烈，剧咳或哮喘或发烧。' },
  { startTime: 5, endTime: 7, branch: '卯', meridian: '大肠', color: '#A0EEE1', tips1: '排便', tips2: '养肠排毒 饮水排泄', desc: '“肺与大肠相表里。”肺将充足的新鲜血液布满全身，紧接着促进大肠经进入兴奋状态，完成吸收食物中水份与营养、排出渣滓的过程。因此，大便不正常者在此时需要辨证调理。' },
  { startTime: 7, endTime: 9, branch: '辰', meridian: '胃', color: '#A0EEE1', tips1: '早餐', tips2: '养胃时间 宜食早餐', desc: '所以，人在 7点吃早饭最容易消化。如果胃火过盛，嘴唇干，重则唇裂或生疮，可以在7点清胃火。胃寒者7点养胃健脾。' },
  { startTime: 9, endTime: 11, branch: '巳', meridian: '脾', color: '#A0EEE1', tips1: '饮水', tips2: '养脾时间 忌冰寒', desc: '“脾主运化，脾统血。”脾是消化、吸收、排泄的总调度，又是人体血液的统领。“脾开窍于口，其华在唇。”脾的功能好，消化吸收好，血的质量好，所以嘴唇是红润的。否则唇白，或唇暗、唇紫。脾虚者9点健脾；湿盛者9点利湿。' },
  { startTime: 11, endTime: 13, branch: '午', meridian: '心', color: '#A0EEE1', tips1: '午休', tips2: '养心时间 宜午睡', desc: '“心主神明，开窍于舌，其华在面。”心推动血液运行，养神、养气、养筋。人在午时能睡片刻，对于养心大有好处，可使下午乃至晚上精力充沛。心率过缓者11点补心阳；心率过速者滋心阴。' },
  { startTime: 13, endTime: 15, branch: '未', meridian: '小肠', color: '#A0EEE1', tips1: '运动', tips2: '养肠时间 宜运动', desc: '小肠分清浊，把水液归于膀胱，糟粕送人大肠，精华输送进脾。小肠经在未时对人一天的营养进行调整。饭后两肋胀痛者在此时降肝火、疏肝理气；' },
  { startTime: 15, endTime: 17, branch: '申', meridian: '膀胱', color: '#A0EEE1', tips1: '饮水', tips2: '膀胱排毒 饮水排泄', desc: '膀胱贮藏水液和津液，水液排出体外，津液循环在体内。若膀胱有热可致膀胱咳，即咳而遗尿。申时人体温较热，阴虚的人尤为突出，在这个时间滋肾阴可调此证。' },
  { startTime: 17, endTime: 19, branch: '酉', meridian: '肾', color: '#A0EEE1', tips1: '晚餐', tips2: '养肾时间 宜食晚餐', desc: '“肾藏生殖之精和五脏六腑之精。肾为先天之根。”经过申时的人体泻火排毒，肾在酉时进入贮藏精华的时辰。肾阳虚者酉时补肾阳最为有效。' },
  { startTime: 19, endTime: 21, branch: '戌', meridian: '心包', color: '#A0EEE1', tips1: '散步', tips2: '养气时间 宜散步', desc: '“心包为心之外膜，附有脉络，气血通行之道。邪不能容，容之心伤。”心包是心的保护组织，又是气血通道。心包戌时兴旺可清除心脏周围外邪，使心脏处于完好状态。心发冷者戌时补肾阳；心闷热者戌时滋心阴。' },
  { startTime: 21, endTime: 23, branch: '亥', meridian: '三焦', color: '#A0EEE1', tips1: '睡觉', tips2: '养生时间 宜入睡', desc: '三焦是六腑中最大的腑，有主持诸气、疏通水道的作用。亥时三焦通百脉。人如果在亥时睡眠，百脉可休养生息，对身体十分有益。可惜现代人能做到的很少，亥时百脉皆通，所以可以用任何一种进行调理。古籍《灵枢》：“经脉流行不止，与天同度，与地同纪。' }
]

let animationFrame = null
const hasT = ref(false)
const nowHour = ref(0)

const degData = reactive({
  hour: 0,
  minute: 0,
  second: 0
})

const transformHandStyle = key => ({
  transform: `translate(-50%, 0) rotate(${degData[key]}deg)`,
  transition: hasT.value ? `transform .5s` : 'none'
})

// svg盒子
const svgBoxDom = ({ item, index, width }, { slots }) => {
  const isActive = item.startTime <= nowHour.value && item.endTime > nowHour.value
  const num = (width * Math.sqrt(3)) / 2
  return (
    <svg
      class="clock_face_item"
      viewBox={`0 0 ${width} ${width}`}
      xmlns="http://www.w3.org/2000/svg"
      style={{
        width: `${num}px`,
        height: `${num}px`,
        transform: `translate(-50%, -50%) rotate(${index * 30 + 45}deg) translate(-50%, -50%)`,
        // fill: index >= 6 ? (index % 2 ? '#8CC7B5' : '#D1BA74') : index % 2 ? '#A0EEE1' : '#D6D5B7',
        // fill: index >= 6 ? (index % 2 ? '#88aea2' : '#baa078') : index % 2 ? '#c2f4ec' : '#e4e4d0',
        fill: isActive ? item.color : '#f4f4f4',
        zIndex: isActive ? 2 : 1
      }}
    >
      {slots.default?.()}
    </svg>
  )
}

// 弧形路径
const meridianBgPathDom = ({ width, inner }) => {
  const width1 = width * inner[0]
  const width2 = width * inner[1]
  const point1 = width - width * inner[0]
  const point2 = width - (Math.sqrt(3) / 3) * width * inner[0]
  const point3 = width - width * inner[1]
  const point4 = width - (Math.sqrt(3) / 3) * width * inner[1]
  return (
    <path
      d={`M ${point1} ${point2} A ${width1} ${width1} 0 0 1 ${point2} ${point1} L ${point4} ${point3} A ${width2} ${width2} 0 0 0 ${point3} ${point4} L ${point3} ${point4} Z`}
      strokeWidth={width * 0.005}
      stroke="#2f2f2f"
    />
  )
}

// 文字内容
const meridianTextDom = ({ index, translate }, { slots }) => (
  <div
    class="clock_face_item"
    style={{
      writingMode: [2, 3, 4, 8, 9, 10].includes(index) ? 'vertical-lr' : 'unset',
      transform: `translate(-50%, -50%) rotate(${index * 30}deg) translateY(${-radius * translate}px) rotate(${
        [2, 3, 4].includes(index) ? 270 : [5, 6, 7].includes(index) ? 180 : [8, 9, 10].includes(index) ? 90 : 0
      }deg)`
    }}
  >
    {slots.default?.()}
  </div>
)

// 小时数字
const hourNumDom = ({ item, step, translate }) => (
  <div
    class="clock_face_item"
    style={{
      transform: `translate(-50%, -50%) rotate(${item * step}deg) translateY(${-radius * translate}px) rotate(${-(
        item * step
      )}deg)`
    }}
  >
    {item}
  </div>
)

const animation = () => {
  const dateT = new Date()
  const hour = dateT.getHours()
  const minute = dateT.getMinutes()
  const second = dateT.getSeconds()
  nowHour.value = hour
  degData.hour = (hour % 12) * 30 + minute * 0.5
  degData.minute = minute * 6
  degData.second = second * 6

  const transitionend = () => {
    removeEventListener('transitionend', transitionend)
    hasT.value = false
    setTimeout(() => {
      if ((minute + 1) * 6 >= 360) {
        degData.minute = -6
      }
      if (((hour + 1) % 12) * 30 >= 360) {
        degData.hourDeg = -30
      }
      degData.second = -6
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
  setTimeout(() => {
    hasT.value = true
  }, 10)
}
init()

document.addEventListener('visibilitychange', e => {
  if (e.target.visibilityState === 'visible') {
    init()
  } else if (e.target.visibilityState === 'hidden') {
    hasT.value = false
    window.cancelAnimationFrame(animationFrame)
  }
})
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  position: relative;
  overflow: hidden;
}

.clock {
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  background: #ffbf4b;
  border: 5px solid #000;
}

.clock_face {
  display: contents;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .clock_face_item {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
    overflow: unset;
  }
  .hour,
  .meridian_hour {
    z-index: 3;
    font-size: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: black;
    background-color: #ffbf4b;
  }
  .hour {
    color: black;
    font-weight: bold;
  }

  .meridian_text {
    z-index: 3;
    // opacity: 0.5;
    font-size: 24px;
    font-weight: bold;
  }
}
.clock_hand_box {
  width: 0;
  height: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  z-index: 5;
  .clock_hand {
    position: absolute;
    left: 50%;
    bottom: 0;
    transform: translate(-50%, 0);
    transform-origin: center bottom;
    border-radius: 6px;
    background: #e98d02;
    opacity: 0.8;
    &.hour {
      width: 18px;
      height: 150px;
    }
    &.minute {
      width: 12px;
      height: 230px;
    }
    &.second {
      width: 6px;
      height: 300px;
    }
    &.center {
      position: absolute;
      top: 50%;
      left: 50%;
      width: 40px;
      height: 40px;
      transform: translate(-50%, -50%);
      background: #000;
      border-radius: 50%;
      opacity: 1;
    }
  }
}
</style>
