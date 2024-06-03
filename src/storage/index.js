export const Storage = (model = 'local') => {
  const StorageMap = {
    local: window.localStorage,
    session: window.sessionStorage
  }

  const StorageObj = StorageMap[model] || StorageMap.local
  return {
    get(key) {
      return StorageObj.getItem(key)
    },
    set(key, value) {
      return StorageObj.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
    },
    remove(key) {
      return StorageObj.removeItem(key)
    }
  }
}
