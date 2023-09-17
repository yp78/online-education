import { defineStore } from 'pinia'
import { ref } from 'vue'
export const useSearchStore = defineStore(
  'oe-search',
  () => {
    const setSearch = ref<string[]>([])
    const addSearch = (val: string) => {
      if (setSearch.value.includes(val)) {
        return
      } else {
        setSearch.value.push(val)
      }
    }
    const clearSearch = () => {
      setSearch.value = []
    }
    return {
      setSearch,
      addSearch,
      clearSearch
    }
  },
  {
    persist: true
  }
)
