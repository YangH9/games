import _ from 'lodash'

/**
 * @description: 深拷贝
 * @param {Object} object 需拷贝的对象
 * @returns {Object} 新对象
 */
export const CloneDeep = (object) => _.cloneDeep(object)
