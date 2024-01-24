import textData from './textData'

const testList = [] // 飘字数据

// 默认配置
const defaultOption = {
  left: 0, // X轴偏移量
  top: -14, // Y轴偏移量
  scale: 1, // 缩放
  opacity: 1, // 透明度
  timer: ''
}

// 步长配置
const stepOption = {
  left: 0, // left
  top: -1, // top
  scale: 0.004, // 缩放
  opacity: -0.013 // 透明度
}

const random = (max, min = 0) => ~~(Math.random() * (max - min) + min)

// 随机颜色
const randomColor = () => `rgb(${random(255)},${random(255)},${random(255)})`

// 随机文字
const randomText = () => textData[random(textData.length)]

// 文字运动
const textLoop = () => {
  testList.forEach((item, index) => {
    if (item.opacity <= 0) {
      testList.splice(index, 1)
      document.body.removeChild(item.ele)
    } else {
      item.left += stepOption.left
      item.top += stepOption.top
      item.scale += stepOption.scale
      item.opacity += stepOption.opacity
      item.ele.style = Object.entries({
        left: `${item.left}px`,
        top: `${item.top}px`,
        transform: `translateX(-50%) scale(${item.scale},${item.scale})`,
        color: item.color,
        opacity: item.opacity
      })
        .map(([key, val]) => `${key}:${val}`)
        .join(';')
    }
  })
  if (testList.length) {
    cancelAnimationFrame(defaultOption.timer)
    defaultOption.timer = requestAnimationFrame(textLoop)
  }
}

// 创建文字元素
const createEle = e => {
  const ele = document.createElement('div')
  ele.className = 'adriftText'
  ele.innerHTML = randomText()
  document.body.appendChild(ele)
  testList.push({
    ele,
    startTime: Date.now(),
    left: e.clientX + defaultOption.left,
    top: e.clientY + defaultOption.top,
    scale: defaultOption.scale,
    opacity: defaultOption.opacity,
    color: randomColor()
  })
}

// 添加事件
const attachEvent = () => {
  window.addEventListener('click', e => {
    createEle(e)
    textLoop()
  })
}

// 初始化
const init = () => {
  attachEvent()
}

init()
