import { defineStore } from 'pinia'

export const routerLoading = defineStore('routerLoading', {
  state: () => ({ visible: false }),
  actions: {
    show() {
      this.visible = true
    },
    hide() {
      this.visible = false
    }
  }
})
