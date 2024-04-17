// draggable 拖拽

const draggable = {
  mounted(el) {
    el.style.cursor = 'move'
    el.style.position = 'absolute'
    el.onmousedown = e => {
      const disX = e.pageX - el.offsetLeft
      const disY = e.pageY - el.offsetTop
      document.onmousemove = e => {
        let x = e.pageX - disX
        let y = e.pageY - disY
        const maxX =
          parseInt(window.getComputedStyle(el.parentNode).width, 10) - parseInt(window.getComputedStyle(el).width, 10)
        const maxY =
          parseInt(window.getComputedStyle(el.parentNode).height, 10) - parseInt(window.getComputedStyle(el).height, 10)
        if (x < 0) {
          x = 0
        } else if (x > maxX) {
          x = maxX
        }
        if (y < 0) {
          y = 0
        } else if (y > maxY) {
          y = maxY
        }
        el.style.left = `${x}px`
        el.style.top = `${y}px`
      }
      document.onmouseup = () => {
        document.onmousemove = null
        document.onmouseup = null
      }
    }
  }
}

export default draggable
