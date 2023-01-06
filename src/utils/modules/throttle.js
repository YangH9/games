// throttle 节流

const throttle = {
  mounted(el, binding) {
    if (typeof binding.value !== 'function') {
      throw new Error('callback must be a function')
    }
    let timer = null
    el.handleClick = () => {
      if (timer) {
        clearTimeout(timer)
      }
      if (!el.disabled) {
        el.disabled = true
        binding.value()
        timer = setTimeout(() => {
          el.disabled = false
        }, 1000)
      }
    }
    el.addEventListener('click', el.handleClick)
  },
  beforeUnmount(el) {
    el.removeEventListener('click', el.handleClick)
  }
}

export default throttle
