import '@/utils/adriftText'

/**
 * 时间转换
 * @param {Date} date 时间对象
 * @param {String} pattern 转换的格式（默认yyyy-MM）
 * @returns
 */
export const formatDate = (date, pattern = 'yyyy-MM-dd hh:mm:ss') => {
  const time = new Date(date)
  let result = pattern
  const timeObj = {
    'M+': time.getMonth() + 1,
    'd+': time.getDate(),
    'h+': time.getHours(),
    'm+': time.getMinutes(),
    's+': time.getSeconds(),
    'q+': Math.floor((time.getMonth() + 3) / 3),
    S: time.getMilliseconds()
  }
  if (/(y+)/.test(result)) {
    result = result.replace(RegExp.$1, `${time.getFullYear()}`.substr(4 - RegExp.$1.length))
  }
  for (const item in timeObj) {
    if (new RegExp(`(${item})`).test(result)) {
      result = result.replace(RegExp.$1, RegExp.$1.length === 1 ? timeObj[item] : `00${timeObj[item]}`.substr(`${timeObj[item]}`.length))
    }
  }
  return result
}

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
