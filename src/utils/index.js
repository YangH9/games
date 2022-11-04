/**
 * 时间转换
 * @param {Date} date 时间对象
 * @param {String} pattern 转换的格式（默认yyyy-MM）
 * @returns
 */
export const formatDate = (date, pattern = "yyyy-MM-dd hh:mm:ss") => {
  const time = new Date(date)
  let result = pattern
  const timeObj = {
    "M+": time.getMonth() + 1,
    "d+": time.getDate(),
    "h+": time.getHours(),
    "m+": time.getMinutes(),
    "s+": time.getSeconds(),
    "q+": Math.floor((time.getMonth() + 3) / 3),
    S: time.getMilliseconds()
  }
  if ((/(y+)/).test(result)) {
    result = result.replace(RegExp.$1, `${time.getFullYear()}`.substr(4 - RegExp.$1.length))
  }
  for (const item in timeObj) {
    if (new RegExp(`(${item})`).test(result)) {
      result = result.replace(RegExp.$1, RegExp.$1.length === 1 ? timeObj[ item ] : `00${timeObj[ item ]}`.substr(`${timeObj[ item ]}`.length))
    }
  }
  return result
}
