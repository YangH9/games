export default (src, callbackKey, callback) =>
  new Promise((resolve, reject) => {
    const script = document.createElement('script')
    script.async = 'async'
    script.src = src
    typeof callbackKey !== 'function'
      ? (window[callbackKey] = data => {
          callback && callback(data)
          resolve(data)
        })
      : (script.onload = () => {
          callbackKey && callbackKey()
          resolve()
        })
    document.head.appendChild(script)
    document.head.removeChild(script)
  })
