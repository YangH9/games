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
          <div class="mines_title_bomb">{{ bombList.length }}</div>
          <div class="mines_title_icon" @click="init">
            <AFrownOutlined v-if="clickTime.lastXY.length" :style="{ background: '#ffff00', borderRadius: '50%' }" />
            <ASmileOutlined v-else :style="{ background: '#ffff00', borderRadius: '50%' }" />
          </div>
          <div class="mines_title_time">计时</div>
        </div>
        <div class="mines_body">
          <div v-for="(row, ri) in mineMapData" :key="ri" class="mines_row">
            <div v-for="(col, ci) in row" :key="ci" class="mines_col">
              <div
                :class="[
                  'mines_item',
                  col.open ? '' : 'close',
                  clickTime.end ? 'over' : '',
                  clickTime.lastXY.join('-') === `${ri}-${ci}` ? 'fail' : ''
                ]"
                :style="{ color: col.flag ? '#000' : numColor(col.num) }"
                @click="clickMap([ri, ci])"
                @contextmenu.prevent.stop="rightClickMap([ri, ci])"
              >
                <template v-if="col.open">
                  <component :is="col.text"></component>
                </template>
                <template v-if="col.flag">
                  <AFlagTwoTone two-tone-color="#dd0c0c" />
                  <!-- <QuestionOutlined /> -->
                </template>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a-card>
  </div>
</template>

<script setup lang="jsx">
import Breadcrumb from '@/components/Breadcrumb.vue'
import { reactive, ref } from 'vue'
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
const bombList = ref([])
const flagList = ref([])
const clickTime = reactive({ start: 0, end: 0, fistXY: [], lastXY: [], timer: null })

// 第一次点击后生成雷区数据，点击的区域无雷
const initMinesData = () => {
  const { fistXY } = clickTime
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

// 重置地图
const resetMap = () => {
  const { rowCount, colCount, mCount } = minesOption
  const defObj = { open: false, flag: false }
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

// 开始计时
const startTimer = () => {
  clickTime.start = Date.now()
}

// 重置计时
const resetTimer = () => {
  clickTime.start = 0
  clickTime.end = 0
  clickTime.fistXY = []
  clickTime.lastXY = []
}

// 停止计时
const stopTimer = () => {
  clickTime.end = Date.now()
}

// 初始化地图
const init = () => {
  const { rowCount, colCount, mCount } = typeOption[type.value]
  console.log(type.value, rowCount, colCount, mCount)
  minesOption.rowCount = rowCount
  minesOption.colCount = colCount
  minesOption.mCount = mCount
  // 重置雷区
  resetMap()
  // 重置计时
  resetTimer()
  // clickMap()
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
    if (mineMapData.value[x][y].num === 9 && !clickTime.end) {
      gameOver()
      clickTime.lastXY = xy
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
  }
}

// 点击地图，生成雷区数据，开始计时
const clickMap = xy => {
  console.log(xy)
  if (clickTime.start === 0) {
    // 鼠标按下时，记录坐标
    clickTime.fistXY = xy
    // 生成雷区
    initMinesData()
    // 开始计时
    startTimer()
  }
  if (!clickTime.end) {
    openItem(xy)
  }
}

// 插旗子
const rightClickMap = xy => {
  console.log('flag', xy)
  if (!clickTime.end) {
    const [x, y] = xy
    if (!mineMapData.value[x][y].flag) {
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
</script>

<style scoped lang="scss">
.ant-card :deep(.ant-card-body) {
  position: relative;
  display: flex;
  justify-content: center;
  overflow: auto;
  align-items: flex-start;
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
          width: 30px;
          height: 30px;
          font-size: 20px;
          font-weight: bold;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #bebebe;
          border: 1px solid #828282;
          &.close {
            width: 30px;
            height: 30px;
            display: flex;
            align-items: center;
            justify-content: center;
            border: 4px solid #f0f0f0;
            border-right-color: #828282;
            border-bottom-color: #828282;
            &:not(.over):active {
              border: 4px solid #f0f0f0;
              border-top-color: #828282;
              border-left-color: #828282;
            }
          }
          &.fail {
            background: #dd0c0c;
            border: 1px solid #828282;
          }
        }
      }
    }
  }
}
</style>
