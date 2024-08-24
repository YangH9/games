<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card
      v-calcHeight="{ height: 21, dom: '.ant-card-body' }"
      class="flow_hidden"
      title="子午流注钟表"
      :hoverable="true"
    >
      <!-- <svg width="100" height="100" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
        <g fill="#3498db">
          <path d="M 50,10 A 40,40 0 0,1 90,50 L 50,50 L 50,10 Z" />
        </g>
      </svg> -->
      <!-- <div class="circle">
        <div class="sector" style="transform: rotate(45deg) translate(-18px, -18px)"></div>
        <div class="sector" style="transform: rotate(105deg) translate(-18px, -18px)"></div>
        <div class="sector" style="transform: rotate(165deg) translate(-18px, -18px)"></div>
        <div class="sector" style="transform: rotate(225deg) translate(-18px, -18px)"></div>
        <div class="sector" style="transform: rotate(285deg) translate(-18px, -18px)"></div>
        <div class="sector" style="transform: rotate(345deg) translate(-18px, -18px)"></div>
      </div> -->
      <div class="clock">
        <div class="clock_face">
          <div class="rotate_box meridian_bg">
            <svg
              v-for="(item, index) in meridianList"
              :key="index"
              :class="['rotate_item', item.startTime <= nowHour && item.endTime > nowHour ? 'active' : '']"
              viewBox="0 0 500 500"
              xmlns="http://www.w3.org/2000/svg"
              :style="meridianBgStyle(index, (clockWidth - 10) / 2)"
            >
              <path d="M 0,250 A 340,340 0 0,1 250,0 L 340,340 L 0,250 Z" />
            </svg>
          </div>
          <div class="rotate_box meridian_text">
            <div
              v-for="(item, index) in meridianList"
              :key="index"
              class="rotate_item"
              :style="meridianTextStyle(index, (clockWidth - 10) / 2)"
            >
              <div>{{ item.desc }}</div>
              <div>{{ item.name }}</div>
            </div>
          </div>
          <div class="rotate_box hour">
            <div
              v-for="(item, index) in 24"
              :key="index"
              class="rotate_item"
              :style="hourNumStyle(index, (clockWidth - 10) / 2)"
            >
              {{ item <= 6 ? item + 12 : item > 12 && item <= 18 ? item - 12 : item }}
            </div>
          </div>
        </div>
        <div class="clock_hand_box">
          <div class="clock_hand hour" :style="transformBoxStyle('hour')"></div>
          <div class="clock_hand minute" :style="transformBoxStyle('minute')"></div>
          <div class="clock_hand second" :style="transformBoxStyle('second')"></div>
          <div class="clock_hand center"></div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import { ref, reactive } from 'vue'
import Breadcrumb from '@/components/Breadcrumb.vue'
// https://baike.baidu.com/item/%E5%AD%90%E5%8D%88%E6%B5%81%E6%B3%A8%E5%9B%BE/10859969

const clockWidth = 700

const meridianBgStyle = (index, width) => {
  const num = width * (index >= 6 ? 1.1 : 2) * 0.71
  return {
    width: `${num}px`,
    height: `${num}px`,
    color: index >= 6 ? 'white' : 'black',
    transform: `translate(-50%, -50%) rotate(${index * 60 + 45}deg) translate(-${num * 0.18}px, -${num * 0.18}px)`,
    // fill: index >= 6 ? (index % 2 ? '#8CC7B5' : '#D1BA74') : index % 2 ? '#A0EEE1' : '#D6D5B7',
    fill: index >= 6 ? (index % 2 ? '#88aea2' : '#baa078') : index % 2 ? '#c2f4ec' : '#e4e4d0',
    stroke: '#9dff00'
  }
}
const meridianTextStyle = (index, width) => {
  const rotate = index * 60 - 90
  const translate = index >= 6 ? width * 0.25 : width * 0.75
  return {
    color: index >= 6 ? 'white' : 'black',
    transform: `translate(-50%, -50%) rotate(${rotate}deg) translateX(${translate}px) rotate(${-rotate}deg)`
  }
}

const hourNumStyle = (index, width) => {
  const rotate = index * 30 - 60
  const translate = index >= 12 ? width * 0.5 : width - 20
  return {
    color: index >= 12 ? 'white' : 'black',
    backgroundColor: index >= 12 ? '#2f2f2f' : '#f2f2f2',
    transform: `translate(-50%, -50%) rotate(${rotate}deg) translateX(${translate}px) rotate(${-rotate}deg)`
  }
}

const meridianList = [
  { name: '午', startTime: 11, endTime: 13, desc: '心经' },
  { name: '未', startTime: 13, endTime: 15, desc: '小肠经' },
  { name: '申', startTime: 15, endTime: 17, desc: '膀胱经' },
  { name: '酉', startTime: 17, endTime: 19, desc: '肾经' },
  { name: '辰', startTime: 7, endTime: 9, desc: '胃经' },
  { name: '巳', startTime: 9, endTime: 11, desc: '脾经' },
  { name: '子', startTime: 23, endTime: 1, desc: '胆经' },
  { name: '丑', startTime: 1, endTime: 3, desc: '肝经' },
  { name: '寅', startTime: 3, endTime: 5, desc: '肺经' },
  { name: '卯', startTime: 5, endTime: 7, desc: '大肠经' },
  { name: '戌', startTime: 19, endTime: 21, desc: '心包经' },
  { name: '亥', startTime: 21, endTime: 23, desc: '三焦经' }
]

let animationFrame = null
const hasT = ref(false)
const nowHour = ref(0)

const degData = reactive({
  hour: 0,
  minute: 0,
  second: 0
})

const transformBoxStyle = key => ({
  transform: `translate(-50%, 0) rotate(${degData[key]}deg)`,
  transition: hasT.value ? `transform .5s` : 'none'
})

// 子时 (23点至1点)，胆经最旺。
// 胆汁需要新陈代谢，人在子时入眠，胆方能完成代谢。“胆有多清，脑有多清。”凡在子时前入睡者，晨醒后头脑清新、气色红润。反之，日久子时不入睡者面色青白，易生肝炎、胆囊炎、结石一类病症，其中一部分人还会因此“胆怯”。这个时辰养肝血（阴）最好。
// 丑时(1点至3点)，肝经最旺。
// “肝藏血。”人的思维和行动要靠肝血的支持，废旧的血液需要淘汰，新鲜血液需要产生，这种代谢通常在肝经最旺的丑时完成。如果丑时不入睡，肝还在输出能量支持人的思维和行动，就无法完成新陈代谢。黄帝内经讲：“卧则血归于肝”。所以丑时未入睡者，面色青灰，情志倦怠而躁，易生肝病。
// 寅时(3点至5点)，肺经最旺。
// “肺朝百脉。”肝在丑时把血液推陈出新之后，将新鲜血液提供给肺，通过肺送往全身。所以人在清晨面色红润，精神充沛。寅时，有肺病的人反映尤为强烈，剧咳或哮喘或发烧。
// 卯时(5点至7点)，大肠经最旺。
// “肺与大肠相表里。”肺将充足的新鲜血液布满全身，紧接着促进大肠经进入兴奋状态，完成吸收食物中水份与营养、排出渣滓的过程。因此，大便不正常者在此时需要辨证调理。
// 辰时(7点至9点)，胃经最旺。
// 所以，人在 7点吃早饭最容易消化。如果胃火过盛，嘴唇干，重则唇裂或生疮，可以在7点清胃火。胃寒者7点养胃健脾。
// 巳时(9点至11点)，脾经最旺。
// “脾主运化，脾统血。”脾是消化、吸收、排泄的总调度，又是人体血液的统领。“脾开窍于口，其华在唇。”脾的功能好，消化吸收好，血的质量好，所以嘴唇是红润的。否则唇白，或唇暗、唇紫。脾虚者9点健脾；湿盛者9点利湿。
// 午时(11点至13点)，心经最旺。
// “心主神明，开窍于舌，其华在面。”心推动血液运行，养神、养气、养筋。人在午时能睡片刻，对于养心大有好处，可使下午乃至晚上精力充沛。心率过缓者11点补心阳；心率过速者滋心阴。
// 未时 (13点至15点)，小肠经最旺。
// 小肠分清浊，把水液归于膀胱，糟粕送人大肠，精华输送进脾。小肠经在未时对人一天的营养进行调整。饭后两肋胀痛者在此时降肝火、疏肝理气；
// 申时 (15点至17点)，膀胱经最旺。
// 膀胱贮藏水液和津液，水液排出体外，津液循环在体内。若膀胱有热可致膀胱咳，即咳而遗尿。申时人体温较热，阴虚的人尤为突出，在这个时间滋肾阴可调此证。
// 酉时(17点至19点)，肾经最旺。
// “肾藏生殖之精和五脏六腑之精。肾为先天之根。”经过申时的人体泻火排毒，肾在酉时进入贮藏精华的时辰。肾阳虚者酉时补肾阳最为有效。
// 戌时(19点至21点)，心包经最旺。
// “心包为心之外膜，附有脉络，气血通行之道。邪不能容，容之心伤。”心包是心的保护组织，又是气血通道。心包戌时兴旺可清除心脏周围外邪，使心脏处于完好状态。心发冷者戌时补肾阳；心闷热者戌时滋心阴。
// 亥时 (21点至23点)，三焦经最旺。
// 三焦是六腑中最大的腑，有主持诸气、疏通水道的作用。亥时三焦通百脉。人如果在亥时睡眠，百脉可休养生息，对身体十分有益。可惜现代人能做到的很少，亥时百脉皆通，所以可以用任何一种进行调理。古籍《灵枢》：“经脉流行不止，与天同度，与地同纪。

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
  font-size: 14px;
}

.circle {
  position: relative;
  width: 100px; /* 圆的直径 */
  height: 100px;
  margin: 20px;
}

.sector {
  position: absolute;
  width: 100px;
  height: 100px;
  background-color: skyblue;
  clip-path: path('M 0,50 A 68,68 0 0,1 50,0 L 68,68 L 0,50 Z');
  transform-origin: center center;
  &:nth-child(odd) {
    background-color: orange;
  }
}

.clock {
  position: absolute;
  width: 700px;
  height: 700px;
  top: 50%;
  left: 50%;
  display: flex;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  border: 6px solid #000;
}

.clock_face {
  display: contents;
}
.rotate_box {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  .rotate_item {
    position: absolute;
    top: 50%;
    left: 50%;
    text-align: center;
    transform: translate(-50%, -50%);
  }
}
.rotate_box.hour {
  z-index: 3;
  .rotate_item {
    font-size: 30px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: #ecad9e;
  }
}
.rotate_box.meridian_bg {
  .rotate_item {
    // opacity: 0.5;
    stroke-width: 0;
    &.active {
      stroke-width: 6;
      z-index: 1;
      // opacity: 1;
    }
  }
}
.rotate_box.meridian_text {
  z-index: 3;
  .rotate_item {
    // opacity: 0.5;
    font-size: 24px;
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
    background: #777777;
    opacity: 0.5;
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
