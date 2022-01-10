import { ShowModel } from '@/shared/variable'
import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    showModel: ShowModel.day
  }),
  actions: {
    updateShowModel(value: ShowModel) {
      this.showModel = value
    }
  }
})