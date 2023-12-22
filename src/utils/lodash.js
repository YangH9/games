import _ from 'lodash'

/**
 * @description: 深拷贝
 * @param {Object} object 需拷贝的对象
 * @returns {Object} 新对象
 */
export const CloneDeep = (object) => _.cloneDeep(object)

/**
 * @description: 防抖
 */
export const Debounce = (func, time, option) => _.debounce(func, time, option)
