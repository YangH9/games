import '@/utils/adriftText'

// 挂在到Date实例，可直接调用
// YYYY-MM-DD EEE hh:mm:ss
if (!Date.prototype.toFormat) {
  ;(() => {
    Date.prototype.toFormat = function (pattern = 'YYYY/MM/DD hh:mm:ss') {
      const time = {
        'M+': this.getMonth() + 1,
        'D+': this.getDate(),
        'h+': this.getHours(),
        'm+': this.getMinutes(),
        's+': this.getSeconds(),
        'q+': Math.floor((this.getMonth() + 3) / 3),
        S: this.getMilliseconds()
      }
      const week = ['\u65e5', '\u4e00', '\u4e8c', '\u4e09', '\u56db', '\u4e94', '\u516d']
      if (/(Y+)/.test(pattern)) {
        pattern = pattern.replace(RegExp.$1, `${this.getFullYear()}`.substr(4 - RegExp.$1.length))
      }
      if (/(E+)/.test(pattern)) {
        pattern = pattern.replace(
          RegExp.$1,
          (RegExp.$1.length > 1 ? (RegExp.$1.length > 2 ? '\u661f\u671f' : '\u5468') : '') + week[this.getDay()]
        )
      }
      for (const item in time) {
        if (new RegExp(`(${item})`).test(pattern)) {
          pattern = pattern.replace(
            RegExp.$1,
            RegExp.$1.length === 1 ? time[item] : `00${time[item]}`.substr(`${time[item]}`.length)
          )
        }
      }
      return pattern
    }
  })()
}

// 设置灰度 class
;(() => {
  const timeList = ['4/4', '9/18', '12/13']
  timeList.includes(new Date().toFormat('M/D')) && document.querySelector('html').classList.add('gray')
})()

/**
 * @description: 设置title
 * @param {Object} routerObject
 */
export const setTitle = (to) => {
  const Title = `${to.meta.title}—${import.meta.env.VITE_TITLE}`
  let handleVisiableInit = ''
  const handleVisiable = () => {
    if (document.visibilityState === 'visible') {
      document.title = '逗你的~'
      setTimeout(() => {
        handleVisiableInit()
      }, 1000)
    } else if (document.visibilityState === 'hidden') {
      document.title = `(你有一条新消息)${Title}`
    }
  }
  handleVisiableInit = () => {
    if (document.visibilityState === 'visible') {
      document.title = Title
    } else if (document.visibilityState === 'hidden') {
      document.title = `(你有一条新消息)${Title}`
    }
    document.addEventListener('visibilitychange', handleVisiable)
  }
  handleVisiableInit()
}
