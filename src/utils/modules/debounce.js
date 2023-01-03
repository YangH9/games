/**
 * v-debounce
 * 按钮防抖指令，可自行扩展至input
 * 接收参数：function类型
 */

const debounce = {
  mounted (el, binding) {
    if (typeof binding.value !== "function") {
      throw new Error("callback must be a function")
    }
    let timer = null
    el.handleClick = () => {
      if (timer) {
        clearInterval(timer)
      }
      timer = setTimeout(() => {
        binding.value()
      }, 500)
    }
    el.addEventListener("click", el.handleClick)
  },
  beforeUnmount (el) {
    el.removeEventListener("click", el.handleClick)
  }
}

export default debounce
