export const getStorage = (key) => localStorage.getItem(key) || ''

export const setStorage = (key, value) => localStorage.setItem(key, value)

export const delStorage = (key) => localStorage.removeItem(key)
