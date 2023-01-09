/** calcHeight
 * @description: 设置高度
 * @param {number} 底部预留高度，修改当前元素
 * @param {Object} { height: Number, dom: String} height：底部预留高度，dom：修改的子元素
 */

const caseObject = {
  number: (el, binding) => {
    if (el) {
      const { top } = el.getBoundingClientRect()
      el.setAttribute('style', `height:calc(100vh - ${top + binding.value}px)`)
    }
  },
  object: (el, binding) => {
    const dom = el.querySelector(binding.value.dom)
    if (dom) {
      const { top } = dom.getBoundingClientRect()
      dom.setAttribute('style', `height:calc(100vh - ${top + binding.value.height}px)`)
    }
  }
}

const calcHeight = {
  mounted(el, binding) {
    caseObject[typeof binding.value](el, binding)
  }
}

export default calcHeight
