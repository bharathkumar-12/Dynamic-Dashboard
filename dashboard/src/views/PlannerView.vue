<script setup>
import { ref, computed } from 'vue';

const currentDate = ref(new Date());
const selectedDate = ref(new Date());
const events = ref([
  {
    id: 1,
    title: 'Team Meeting',
    date: '2024-03-25',
    time: '10:00 AM',
    type: 'meeting'
  },
  {
    id: 2,
    title: 'Project Review',
    date: '2024-03-26',
    time: '2:00 PM',
    type: 'review'
  },
  {
    id: 3,
    title: 'Client Call',
    date: '2024-03-28',
    time: '11:30 AM',
    type: 'call'
  }
]);

const daysInMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  return new Date(year, month + 1, 0).getDate();
});

const firstDayOfMonth = computed(() => {
  const year = currentDate.value.getFullYear();
  const month = currentDate.value.getMonth();
  return new Date(year, month, 1).getDay();
});

const monthName = computed(() => {
  return currentDate.value.toLocaleString('default', { month: 'long' });
});

const year = computed(() => {
  return currentDate.value.getFullYear();
});

const days = computed(() => {
  const days = [];
  const totalDays = daysInMonth.value + firstDayOfMonth.value;
  
  for (let i = 0; i < totalDays; i++) {
    if (i < firstDayOfMonth.value) {
      days.push(null);
    } else {
      days.push(i - firstDayOfMonth.value + 1);
    }
  }
  
  return days;
});

function previousMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() - 1);
}

function nextMonth() {
  currentDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth() + 1);
}

function selectDate(day) {
  if (day) {
    selectedDate.value = new Date(currentDate.value.getFullYear(), currentDate.value.getMonth(), day);
  }
}

function getEventsForDate(date) {
  return events.value.filter(event => event.date === date.toISOString().split('T')[0]);
}

function getEventTypeColor(type) {
  switch (type) {
    case 'meeting':
      return 'bg-blue-500';
    case 'review':
      return 'bg-purple-500';
    case 'call':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Calendar</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Plan and manage your schedule</p>
      </div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        <font-awesome-icon :icon="['fas', 'plus']" class="mr-2" />
        Add Event
      </button>
    </div>

    <div class="grid lg:grid-cols-[1fr,300px] gap-6">
      <!-- Calendar -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
        <!-- Month Navigation -->
        <div class="flex items-center justify-between mb-6">
          <button @click="previousMonth" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <font-awesome-icon :icon="['fas', 'chevron-left']" />
          </button>
          <h2 class="text-xl font-semibold">{{ monthName }} {{ year }}</h2>
          <button @click="nextMonth" class="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
            <font-awesome-icon :icon="['fas', 'chevron-right']" />
          </button>
        </div>

        <!-- Calendar Grid -->
        <div class="grid grid-cols-7 gap-1">
          <!-- Week days -->
          <div v-for="day in ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']" 
               :key="day"
               class="text-center text-sm font-medium text-gray-500 dark:text-gray-400 py-2">
            {{ day }}
          </div>

          <!-- Calendar days -->
          <div v-for="(day, index) in days" 
               :key="index"
               :class="[
                 'aspect-square p-2 rounded-xl transition-all cursor-pointer',
                 day ? 'hover:bg-gray-100 dark:hover:bg-gray-700' : '',
                 day && selectedDate.getDate() === day ? 'bg-blue-500 text-white' : '',
                 !day ? 'cursor-default' : ''
               ]"
               @click="day && selectDate(day)">
            <div v-if="day" class="h-full flex flex-col">
              <span class="text-sm">{{ day }}</span>
              <div class="flex-1 flex flex-col gap-1 mt-1">
                <div v-for="event in getEventsForDate(new Date(currentDate.getFullYear(), currentDate.getMonth(), day))"
                     :key="event.id"
                     :class="[
                       'h-1.5 rounded-full',
                       getEventTypeColor(event.type)
                     ]">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Events List -->
      <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg h-fit">
        <h3 class="text-lg font-semibold mb-4">Today's Events</h3>
        <div class="space-y-4">
          <div v-for="event in getEventsForDate(selectedDate)"
               :key="event.id"
               class="p-4 rounded-xl bg-gray-50 dark:bg-gray-700">
            <div class="flex items-start justify-between">
              <div>
                <h4 class="font-medium">{{ event.title }}</h4>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ event.time }}</p>
              </div>
              <div :class="[
                'w-2 h-2 rounded-full mt-2',
                getEventTypeColor(event.type)
              ]"></div>
            </div>
          </div>
          <div v-if="!getEventsForDate(selectedDate).length" 
               class="text-center text-gray-500 dark:text-gray-400 py-8">
            No events scheduled
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
}
</style>
