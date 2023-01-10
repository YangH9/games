// lazy 懒加载 传入 src

const observer = new IntersectionObserver((entries) => {
  entries.forEach((item) => {
    if (item.isIntersecting) {
      item.target.src = item.target.__src__
    }
  })
})

const lazy = {
  created(el, binding) {
    el.__src__ = binding.value
    observer.observe(el)
  }
}

export default lazy
