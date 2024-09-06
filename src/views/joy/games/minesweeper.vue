<template>
  <div class="container">
    <Breadcrumb overlayShow />
    <a-card v-calcHeight="{ height: 21, dom: '.ant-card-body' }" title="扫雷" :hoverable="true">
      <template #extra>
        <a-radio-group v-model:value="type" button-style="solid" @change="init">
          <a-radio-button label="基础" value="level1">基础</a-radio-button>
          <a-radio-button label="中级" value="level2">中级</a-radio-button>
          <a-radio-button label="专家" value="level3">专家</a-radio-button>
          <a-radio-button label="自定义" value="custom">自定义</a-radio-button>
        </a-radio-group>
        <div v-if="type === 'custom'" class="d_inline ml_2">
          <a-input-number
            v-model:value="typeOption.custom.colCount"
            :min="10"
            :max="30"
            addon-before="横"
            class="mr_2"
            style="width: 100px"
          />
          <a-input-number
            v-model:value="typeOption.custom.rowCount"
            :min="10"
            :max="30"
            addon-before="竖"
            class="mr_2"
            style="width: 100px"
          />
          <a-input-number
            v-model:value="typeOption.custom.mCount"
            :min="1"
            :max="100"
            addon-before="雷"
            class="mr_2"
            style="width: 100px"
          />
          <a-button type="primary" @click="init">确定</a-button>
        </div>
      </template>
      <div class="mines_box">
        <div class="mines_title">
          <div class="mines_title_num">
            <div class="mines_title_num_bg"><DigitalTubeNumbers :num="888"></DigitalTubeNumbers></div>
            <div class="mines_title_num_text">
              <DigitalTubeNumbers :num="bombList.length - flagList.length"></DigitalTubeNumbers>
            </div>
          </div>
          <div class="mines_title_icon" @click="init">
            <AFrownOutlined
              v-if="operateOption.lastXY.length"
              :style="{ background: '#ffff00', borderRadius: '50%' }"
            />
            <ASmileOutlined v-else :style="{ background: '#ffff00', borderRadius: '50%' }" />
          </div>
          <div class="mines_title_time">
            <div class="mines_title_num_bg"><DigitalTubeNumbers :num="888"></DigitalTubeNumbers></div>
            <div class="mines_title_num_text">
              <DigitalTubeNumbers :num="timerNum"></DigitalTubeNumbers>
            </div>
          </div>
        </div>
        <div class="mines_body">
          <div v-for="(row, ri) in mineMapData" :key="ri" class="mines_row">
            <div v-for="(col, ci) in row" :key="ci" class="mines_col">
              <div
                :class="[
                  'mines_item',
                  col.open ? '' : 'close',
                  col.mask ? 'mask' : 'mask',
                  operateOption.end ? 'over' : '',
                  operateOption.lastXY.join('-') === `${ri}-${ci}` ? 'fail' : ''
                ]"
                :style="{ color: col.flag ? '#000' : numColor(col.num) }"
                @click="clickMap([ri, ci])"
                @contextmenu.prevent.stop="rightClickMap([ri, ci])"
              >
                <template v-if="col.open">
                  <component :is="col.text"></component>
                </template>
                <template v-if="col.flag">
                  <el-icon color="#dd0c0c"><EFlag /></el-icon>
                  <!-- <AFlagTwoTone two-tone-color="#dd0c0c" /> -->
                  <!-- <QuestionOutlined /> -->
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
      {{ clickHistory }}
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref, computed } from 'vue'
import { cloneDeep } from 'lodash'

const type = ref('level2')
const typeOption = reactive({
  level1: { rowCount: 9, colCount: 9, mCount: 10 },
  level2: { rowCount: 16, colCount: 16, mCount: 40 },
  level3: { rowCount: 16, colCount: 30, mCount: 99 },
  custom: { rowCount: 15, colCount: 15, mCount: 20 }
})

const minesOption = reactive({ rowCount: 0, colCount: 0, mCount: 0 })
const mineMapData = ref([])
const operateOption = reactive({ start: 0, end: 0, fistXY: [], lastXY: [], timer: null })
const bombList = ref([])
const flagList = ref([])
const clickHistory = ref([])

// 初始化地图
const initMap = () => {
  const { rowCount, colCount, mCount } = minesOption
  const defObj = { open: false, flag: false, mask: false }
  // 创建基础雷区数据
  const mineMapArr = Array.from({ length: rowCount }, () =>
    Array.from({ length: colCount }, () => ({ num: 0, text: () => '', ...defObj }))
  )
  // 雷子坐标
  const bombs = []
  // 生成雷子
  Array.from(
    { length: mCount },
    (_, i) =>
      ~~(i / colCount) < mineMapArr.length &&
      (mineMapArr[~~(i / colCount)][~~(i % colCount)] = { num: 9, text: () => <AThunderboltFilled />, ...defObj })
  )
  // 存雷子坐标
  Array.from({ length: rowCount }, (_, i) => {
    Array.from({ length: colCount }, (_, j) => {
      if (mineMapArr[i][j].num === 9) {
        bombs.push([i, j])
      }
    })
  })
  mineMapData.value = mineMapArr
  bombList.value = bombs
  flagList.value = []
}

// 第一次点击后生成雷区数据，点击的区域无雷
const initMinesData = () => {
  const { fistXY } = operateOption
  const { rowCount, colCount } = minesOption
  // 创建基础雷区数据
  const mineMapArr = cloneDeep(mineMapData.value)
  // 雷子坐标
  const bombs = []

  // 雷打乱顺序
  Array.from({ length: rowCount * colCount }, () => {
    let x1 = ~~(Math.random() * rowCount)
    let y1 = ~~(Math.random() * colCount)
    let x2 = ~~(Math.random() * rowCount)
    let y2 = ~~(Math.random() * colCount)
    ;[mineMapArr[x1][y1].num, mineMapArr[x2][y2].num] = [mineMapArr[x2][y2].num, mineMapArr[x1][y1].num]
    ;[mineMapArr[x1][y1].text, mineMapArr[x2][y2].text] = [mineMapArr[x2][y2].text, mineMapArr[x1][y1].text]
  })

  // 点击位置雷移走
  if (mineMapArr[fistXY[0]][fistXY[1]].num === 9) {
    const [a, b] = fistXY
    // 找一个空地
    Array.from({ length: rowCount * colCount }, () => 1).some((_, i) => {
      const x = ~~(i / colCount)
      const y = ~~(i % colCount)
      if (mineMapArr[x][y].num === 0 && mineMapArr[a][b].num === 9) {
        ;[mineMapArr[a][b].num, mineMapArr[x][y].num] = [mineMapArr[x][y].num, mineMapArr[a][b].num]
        ;[mineMapArr[a][b].text, mineMapArr[x][y].text] = [mineMapArr[x][y].text, mineMapArr[a][b].text]
        return true
      }
      return false
    })
  }

  // 计算周围雷数
  Array.from({ length: rowCount }, (_, i) => {
    Array.from({ length: colCount }, (_, j) => {
      if (mineMapArr[i][j].num === 9) {
        bombs.push([i, j])
        // 遍历周围格子，如果为雷，则加一
        Array.from({ length: 9 }, (_, k) => {
          const x = i + ((k % 3) - 1)
          const y = j + (~~(k / 3) - 1)
          if (x >= 0 && x < rowCount && y >= 0 && y < colCount && mineMapArr[x][y].num !== 9) {
            mineMapArr[x][y].num++
            mineMapArr[x][y].text = () => mineMapArr[x][y].num
          }
        })
      }
    })
  })

  mineMapData.value = mineMapArr
  bombList.value = bombs
}

const timerNum = computed(() => {
  const { start, end, timer } = operateOption
  if (start) {
    return ~~((Date.now() - start) / 1000)
  } else if (end) {
    return ~~((end - start) / 1000)
  }
  return 0
})

// 初始化计时
const initTimer = () => {
  clearTimeout(operateOption.timer)
  operateOption.start = 0
  operateOption.end = 0
  operateOption.fistXY = []
  operateOption.lastXY = []
}

// 开始计时
const startTimer = () => {
  operateOption.start = Date.now()
  const timeout = () => {
    clearTimeout(operateOption.timer)
    operateOption.timer = setTimeout(() => {
      timeout()
    }, 1000)
  }
  timeout()
}

// 停止计时
const stopTimer = () => {
  operateOption.end = Date.now()
  clearTimeout(operateOption.timer)
}

// 初始化地图
const init = () => {
  const { rowCount, colCount, mCount } = typeOption[type.value]
  console.log(type.value, rowCount, colCount, mCount)
  minesOption.rowCount = rowCount
  minesOption.colCount = colCount
  minesOption.mCount = mCount
  // 初始化地图
  initMap()
  // 重置计时
  initTimer()
  // clickMap()
  clickHistory.value = []
}
init()

// 游戏结束
const gameOver = () => {
  stopTimer()
  // 亮起所有雷子
  bombList.value.forEach(xy => {
    openItem(xy)
  })
}

// 点击事件，
// 首次点击，开始计时，左键生成雷区，右键无操作
// 左键点开区块，再次点击提示周围，右键放置取消旗子，

// 翻开地块
const openItem = xy => {
  const { rowCount, colCount } = minesOption
  const [x, y] = xy
  if (mineMapData.value[x][y].flag) {
    mineMapData.value[x][y].flag = false
    flagList.value = flagList.value.filter(item => item.join('-') !== xy.join('-'))
  } else if (!mineMapData.value[x][y].open) {
    mineMapData.value[x][y].open = true
    if (mineMapData.value[x][y].num === 9 && !operateOption.end) {
      gameOver()
      operateOption.lastXY = xy
    } else {
      // 找周围空格
      Array.from({ length: 9 }, (_, k) => {
        const x1 = x + ((k % 3) - 1)
        const y1 = y + (~~(k / 3) - 1)
        if (
          x1 >= 0 &&
          x1 < rowCount &&
          y1 >= 0 &&
          y1 < colCount &&
          (mineMapData.value[x][y].num === 0 || mineMapData.value[x1][y1].num === 0) &&
          !mineMapData.value[x1][y1].flag
        ) {
          openItem([x1, y1])
        }
      })
    }
  } else if (mineMapData.value[x][y].open) {
    mineMapData.value[x][y].mask = true
    setTimeout(() => {
      mineMapData.value[x][y].mask = false
    }, 300)
  }
}

// 点击地图，生成雷区数据，开始计时
const clickMap = xy => {
  console.log(xy)
  if (operateOption.start === 0) {
    // 鼠标按下时，记录坐标
    operateOption.fistXY = xy
    // 生成雷区
    initMinesData()
    // 开始计时
    startTimer()
  }
  if (!operateOption.end) {
    openItem(xy)
    clickHistory.value.push(xy)
  }
}

// 插旗子
const rightClickMap = xy => {
  console.log('flag', xy)
  if (!operateOption.end) {
    const [x, y] = xy
    if (!mineMapData.value[x][y].flag && bombList.value.length > flagList.value.length) {
      mineMapData.value[x][y].flag = true
      flagList.value.push(xy)
    }
  }
}

const numColor = num => {
  switch (num) {
    case 1:
      return 'blue'
    case 2:
      return 'green'
    case 3:
      return 'red'
    case 4:
      return 'purple'
    case 5:
      return 'orange'
    case 6:
      return 'pink'
    case 7:
      return 'gray'
    case 8:
      return 'cyan'
    default:
      return 'black'
  }
}

/**
 * 开地、标记功能
 * 左键：开地、取消标记、提示9*9范围
 * 右键：放置标记、切换标记类型（旗子、问号）
 */

// 第一次点击不会是雷。格子里的数字表示它周围有几个雷。游戏目标是找出所有雷。“触雷”则输。点击表情重新开始。
// 二选一留到最后，可任选，需先清完其他方块。

// 电脑：鼠标右键点击原始方块，以小旗标记为雷，再点去除标记。标记的雷数和数字匹配时，点击数字（左右键均可）翻开周围的安全区域。鼠标左键点击无标记方块则直接打开。

// 鼠标起效时间点，左键，按下时，弹起时

// 手机或平板：在触屏上点击方块即标记为雷，再点去除标记。标记的雷数和数字匹配时，点击数字翻开周围的安全区域。长按方块直接打开。（可设置为点击直接打开；或点击三次打开）

// 触击效果，标记，直开
// 直开模式下的标记方法，长按
// 标记模式下的打开方法，长按，快点三次

// svg数码管数字
const DigitalTubeNumbers = ({ num }) => {
  const svgItem = path => (
    <svg viewBox="0 0 667 1024" xmlns="http://www.w3.org/2000/svg" width="0.651em" height="1em">
      {path}
    </svg>
  )
  const pathList = [
    // 左上
    'M168.64699648 438.77532017l-63.01871122 55.82224525-29.91811299-31.66071531c-13.29311689-13.55750495-22.382562-31.69806381-23.59442248-45.25655162-0.64377017-7.53653385 0.07567985-16.5876476 0.64377017-27.19167259l18.25457005-205.19068495c2.00699036-28.66792114 8.48204057-40.71182906 29.27434283-61.84419922l37.3416185-39.23558051 56.95940875 64.87532473-25.94246361 289.68183422z',
    // 左下
    'M129.10967941 883.8829308l-74.41884894 63.39711046-28.668904-34.72820645c-8.33166373-9.0520966-13.93688706-21.13335301-15.11041622-34.69085795-0.53074182-6.05930245 0.34006791-13.5584878 1.17352915-21.13237016l19.31507085-227.837635c2.68810903-21.13138731 8.74741149-37.75736627 21.28372986-49.76294281l51.61955632-48.28767711 51.39153391 52.7940683-26.58623378 300.24752788z',
    // 上
    'M217.04671908 129.51206133l-59.87554019-63.39711046 30.41052347-31.69904667C205.49718736 14.79909682 218.56228185 8.77812571 244.20202604 8.77812571h273.09418662c24.1625128 0 38.25075957 6.02195396 53.55086684 25.63876135l28.32785325 30.22279812-78.84857744 64.87335901H217.04770195z',
    // 中
    'M492.71696924 452.37115646l55.21680644 61.88253056-67.26071435 58.81405656 H180.38720213l-56.4669983-58.85238791 67.03367479-61.88253057 h301.76210777z',
    // 下
    'M452.9506469 894.48597296l60.55764174 70.93462717-30.82823694 27.1543241c-20.9053306 19.61779025-29.72940479 22.64695004-68.92665394 22.64695006 H161.7542328c-37.72001776 0-53.20981608-4.54472256-68.35758079-22.64695006l-23.36738292-25.6770927 81.19661855-72.41087572 H452.9506469z',
    // 右上
    'M536.98771707 147.57694034l77.33399753-64.87434187 25.10900239 28.66988686c10.11161453 12.08027355 15.67948937 24.16152995 16.73999016 36.20445501 0.64377017 7.53653385-0.18969105 15.0730677-0.90914108 24.16251281L636.81828778 392.00320579c-4.24102029 37.72001776-11.853234 54.34599671-32.87257577 72.44920708l-36.31846623 33.1752952-56.46699829-58.85337077 25.82845242-291.19641411z',
    // 右下
    'M497.44941714 592.68455098l67.14670315-60.32961931 33.21362655 34.69085796c9.96025483 10.56569365 15.6785065 24.12418146 17.00437821 39.23558052 0.79611273 9.01278239 0.07567985 18.1022275-0.53074182 28.668904l-19.69248724 223.2919296c-0.45506196 12.08125641-2.68909188 21.13237015-3.82527254 25.63876135-2.23402992 9.0520966-7.57486521 16.62597895-22.98898369 30.18348391l-37.72001774 34.72918931-58.47398865-64.91267322 25.86678377-291.19641412z'
  ]
  // const svgItem1 = path => (
  //   <svg viewBox="0 0 598 1024" xmlns="http://www.w3.org/2000/svg" width="0.584em" height="1em">
  //     {path}
  //   </svg>
  // )
  // const pathList1 = [
  //   'M19.04640003 108.10405925v352.11440989l41.4252247 41.42522469 41.42522469-41.42522469V108.10405925l-41.42522469-41.42522468z', // 左上
  //   'M19.04640003 563.78153086v352.11440989l41.4252247 41.42522468 41.42522469-41.42522468V563.78153086l-41.42522469-41.42522469z', // 左下
  //   'M112.25315559 14.8973037l-41.4252247 41.42522469 41.4252247 41.4252247h372.82702222l41.4252247-41.4252247-41.4252247-41.42522469z', // 上
  //   'M112.25315559 470.57477531l-41.4252247 41.42522469 41.4252247 41.42522469h372.82702222l41.4252247-41.42522469-41.4252247-41.42522469z', // 中
  //   'M112.25315559 926.25224691l-41.4252247 41.4252247 41.4252247 41.42522469h372.82702222l41.4252247-41.42522469-41.4252247-41.4252247z', // 下
  //   'M495.43648398 108.10405925v352.11440989l41.42522469 41.42522469 41.4252247-41.42522469V108.10405925l-41.4252247-41.42522468z', // 右上
  //   'M495.43648398 563.78153086v352.11440989l41.42522469 41.42522468 41.4252247-41.42522468V563.78153086l-41.4252247-41.42522469z' // 右下
  // ]
  const numPath = num => {
    let obj = {
      0: [0, 1, 2, 4, 5, 6],
      1: [5, 6],
      2: [1, 2, 3, 4, 5],
      3: [2, 3, 4, 5, 6],
      4: [0, 3, 5, 6],
      5: [0, 2, 3, 4, 6],
      6: [0, 1, 2, 3, 4, 6],
      7: [2, 5, 6],
      8: [0, 1, 2, 3, 4, 5, 6],
      9: [0, 2, 3, 4, 5, 6]
    }
    return <path d={(obj[num] || obj[8]).map(i => pathList[i]).join(' ')} />
  }
  return `${num}`.split('').map(i => svgItem(numPath(i)))
}
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  position: relative;
  overflow: auto;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
}
.mines_box {
  border: 10px solid #cccccc;
  border-radius: 4px;
  .mines_title {
    display: flex;
    justify-content: space-between;
    background: #c0c0c0;
    border: 1px solid #828282;
    padding: 4px;
    font-size: 18px;
    color: #000;

    .mines_title_num,
    .mines_title_time {
      height: 30px;
      font-size: 30px;
      line-height: 30px;
      vertical-align: middle;
      position: relative;
      background: #000;
      :deep()svg {
        fill: #f00;
      }
      &_bg {
        position: relative;
        opacity: 0.4;
      }
      &_text {
        position: absolute;
        top: 0;
        right: 0;
      }
    }
    .mines_title_icon {
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 4px solid #f0f0f0;
      border-right-color: #828282;
      border-bottom-color: #828282;
      &:active {
        border: 4px solid #f0f0f0;
        border-top-color: #828282;
        border-left-color: #828282;
      }
    }
  }
  .mines_body {
    .mines_row {
      display: flex;
      .mines_col {
        .mines_item {
          position: relative;
          width: 26px;
          height: 26px;
          font-size: 20px;
          font-weight: bold;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #bebebe;
          border: 1px solid #828282;
          &.close {
            border: 3px solid #f0f0f0;
            border-right-color: #828282;
            border-bottom-color: #828282;
            &:not(.over):active {
              border: 3px solid #ffffff;
              border-top-color: #727272;
              border-left-color: #727272;
            }
          }
          &.fail {
            background: #dd0c0c;
            border: 1px solid #828282;
          }
          // &.mask {
          //   &::after {
          //     content: '';
          //     position: absolute;
          //     width: 400%;
          //     height: 400%;
          //     background-color: pink;
          //   }
          // }
        }
      }
    }
  }
}
</style>
