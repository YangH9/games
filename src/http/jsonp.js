export default (src, callback) => {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = 'async'
    script.src = src
    script.onload = () => {
      callback && callback()
      resolve()
    }
    document.head.appendChild(script)
    document.head.removeChild(script)
  })
}
