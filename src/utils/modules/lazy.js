// lazy 懒加载

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      item.target.src = item.target.dataset.src
    }
  })
})

const lazy = {
  mounted (el) {
    observer.observe(el)
  },
  unmounted () {
    observer.disconnect()
  }
}

export default lazy
