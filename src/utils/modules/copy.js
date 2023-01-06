/**
 * v-copy
 * 复制某个值至剪贴板
 * 接收参数：string类型/Ref<string>类型/Reactive<string>类型
 */

const handleClick = (that) => {
  const input = document.createElement('input')
  input.style.opacity = '0'
  input.value = that.copyData.toLocaleString()
  document.body.appendChild(input)
  input.select()
  document.execCommand('Copy')
  document.body.removeChild(input)
  // ElMessage({
  //   type: "success",
  //   message: "复制成功"
  // })
}

const copy = {
  mounted(el, binding) {
    el.copyData = binding.value
    el.addEventListener('click', handleClick)
  },
  updated(el, binding) {
    el.copyData = binding.value
    // },
    // beforeUnmount (el) {
    //   el.removeEventListener("click", el.__handleClick__)
  }
}

export default copy
