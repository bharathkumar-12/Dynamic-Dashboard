import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const showGraph = ref(false)
  const graphTitle = ref('')
  const filters = ref({
    fromDate: '',
    toDate: '',
    clinic: 'All', // Default to "All"
    adminUser: 'All', // Default to "All"
    ageGroup: 'All',
    inseminationMethod: 'All', // Default to "All"
    ownDonor: 'All', // Default to "All"
    cryopreservationType: 'All', // Default to "All"
  })
  const doubleCount = computed(() => count.value * 2)
  function increment() {
    count.value++
  }

  return { count, doubleCount, increment, showGraph, graphTitle, filters }
})
