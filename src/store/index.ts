import { ShowModel } from '@/shared/variable'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    showModel: ShowModel.day,
    fontSize: 50
  }),
  actions: {
    updateShowModel(value: ShowModel) {
      this.showModel = value
    },
    updateFontSize(value: number) {
      this.fontSize = value
    }
  }
})