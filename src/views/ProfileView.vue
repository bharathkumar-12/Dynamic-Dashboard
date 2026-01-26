<script setup>
import { ref } from 'vue';

const user = ref({
  name: 'Alex Johnson',
  role: 'Senior Product Manager',
  email: 'alex.johnson@company.com',
  location: 'San Francisco, CA',
  department: 'Product Development',
  joinDate: 'January 2022'
});

const stats = ref([
  { label: 'Projects', value: '12', icon: 'briefcase' },
  { label: 'Tasks', value: '48', icon: 'tasks' },
  { label: 'Meetings', value: '24', icon: 'calendar' },
  { label: 'Documents', value: '18', icon: 'file-lines' }
]);

const skills = ref([
  { name: 'Product Strategy', level: 90 },
  { name: 'User Research', level: 85 },
  { name: 'Data Analysis', level: 80 },
  { name: 'Team Leadership', level: 95 },
  { name: 'Agile Methodologies', level: 88 }
]);

const recentActivity = ref([
  {
    id: 1,
    title: 'Completed project proposal',
    date: '2 hours ago',
    icon: 'check-circle',
    color: 'text-green-500'
  },
  {
    id: 2,
    title: 'Scheduled team meeting',
    date: 'Yesterday',
    icon: 'calendar',
    color: 'text-blue-500'
  },
  {
    id: 3,
    title: 'Updated documentation',
    date: '2 days ago',
    icon: 'file-lines',
    color: 'text-purple-500'
  },
  {
    id: 4,
    title: 'Reviewed quarterly reports',
    date: '3 days ago',
    icon: 'chart-simple',
    color: 'text-yellow-500'
  },
  {
    id: 5,
    title: 'Added new task',
    date: '1 week ago',
    icon: 'plus',
    color: 'text-indigo-500'
  }
]);

const teams = ref([
  { name: 'Product Team', members: 8, color: 'bg-blue-500' },
  { name: 'Design Team', members: 5, color: 'bg-purple-500' },
  { name: 'Development Team', members: 12, color: 'bg-green-500' },
  { name: 'Marketing Team', members: 6, color: 'bg-red-500' }
]);
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- Profile Header -->
    <div class="relative rounded-3xl overflow-hidden mb-6">
      <!-- Cover Section -->
      <div class="h-48 md:h-64 w-full bg-gradient-to-r from-blue-500 to-purple-600 relative">
        <div class="absolute inset-0 flex items-center justify-center">
          <div class="w-full h-full bg-gradient-to-br from-blue-400/20 to-purple-500/20 backdrop-blur-sm"></div>
          <div class="absolute inset-0 flex items-center justify-center">
            <font-awesome-icon 
              :icon="['fas', 'user-circle']" 
              class="text-white/10 text-9xl"
            />
          </div>
        </div>
      </div>
      
      <!-- Profile Info -->
      <div class="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 to-transparent">
        <div class="flex flex-col md:flex-row items-center md:items-end gap-4">
          <div class="relative -mt-16 md:-mt-20">
            <div class="w-32 h-32 md:w-40 md:h-40 rounded-full border-4 border-white dark:border-gray-800 shadow-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
              <font-awesome-icon 
                :icon="['fas', 'user']" 
                class="text-white text-5xl md:text-6xl"
              />
            </div>
            <div class="absolute bottom-0 right-0 bg-green-500 w-6 h-6 rounded-full border-2 border-white dark:border-gray-800"></div>
          </div>
          <div class="text-center md:text-left">
            <h1 class="text-2xl md:text-3xl font-semibold text-white">{{ user.name }}</h1>
            <p class="text-gray-200">{{ user.role }}</p>
          </div>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-1 lg:grid-cols-3 gap-6">
      <!-- Main Content -->
      <div class="lg:col-span-2 space-y-6">
        <!-- About Section -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">About</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mr-3">
                <font-awesome-icon :icon="['fas', 'envelope']" class="text-blue-500 dark:text-blue-300" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Email</p>
                <p class="font-medium text-gray-900 dark:text-white">{{ user.email }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900 flex items-center justify-center mr-3">
                <font-awesome-icon :icon="['fas', 'location-dot']" class="text-purple-500 dark:text-purple-300" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Location</p>
                <p class="font-medium text-gray-900 dark:text-white">{{ user.location }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center mr-3">
                <font-awesome-icon :icon="['fas', 'building']" class="text-green-500 dark:text-green-300" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Department</p>
                <p class="font-medium text-gray-900 dark:text-white">{{ user.department }}</p>
              </div>
            </div>
            <div class="flex items-start">
              <div class="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900 flex items-center justify-center mr-3">
                <font-awesome-icon :icon="['fas', 'calendar']" class="text-yellow-500 dark:text-yellow-300" />
              </div>
              <div>
                <p class="text-sm text-gray-500 dark:text-gray-400">Joined</p>
                <p class="font-medium text-gray-900 dark:text-white">{{ user.joinDate }}</p>
              </div>
            </div>
          </div>
        </div>

        <!-- Skills Section -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Skills</h2>
          <div class="space-y-4">
            <div v-for="skill in skills" :key="skill.name" class="space-y-1">
              <div class="flex justify-between">
                <span class="text-sm font-medium text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
                <span class="text-sm text-gray-500 dark:text-gray-400">{{ skill.level }}%</span>
              </div>
              <div class="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  class="h-full bg-blue-500 rounded-full" 
                  :style="{ width: `${skill.level}%` }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Recent Activity -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Recent Activity</h2>
          <div class="space-y-4">
            <div v-for="activity in recentActivity" :key="activity.id" class="flex items-start">
              <div :class="[activity.color, 'w-8 h-8 rounded-full flex items-center justify-center mr-3']">
                <font-awesome-icon :icon="['fas', activity.icon]" class="text-white" />
              </div>
              <div>
                <p class="font-medium text-gray-900 dark:text-white">{{ activity.title }}</p>
                <p class="text-sm text-gray-500 dark:text-gray-400">{{ activity.date }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Sidebar -->
      <div class="space-y-6">
        <!-- Stats -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Stats</h2>
          <div class="grid grid-cols-2 gap-4">
            <div v-for="stat in stats" :key="stat.label" class="bg-gray-50 dark:bg-gray-700 rounded-xl p-4 text-center">
              <div class="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900 flex items-center justify-center mx-auto mb-2">
                <font-awesome-icon :icon="['fas', stat.icon]" class="text-blue-500 dark:text-blue-300" />
              </div>
              <p class="text-2xl font-semibold text-gray-900 dark:text-white">{{ stat.value }}</p>
              <p class="text-sm text-gray-500 dark:text-gray-400">{{ stat.label }}</p>
            </div>
          </div>
        </div>

        <!-- Teams -->
        <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
          <h2 class="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Teams</h2>
          <div class="space-y-3">
            <div v-for="team in teams" :key="team.name" class="flex items-center justify-between p-3 rounded-xl bg-gray-50 dark:bg-gray-700">
              <div class="flex items-center">
                <div :class="[team.color, 'w-3 h-3 rounded-full mr-3']"></div>
                <span class="font-medium text-gray-900 dark:text-white">{{ team.name }}</span>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">{{ team.members }} members</span>
            </div>
          </div>
        </div>

        <!-- Contact Button -->
        <button class="w-full py-3 bg-blue-500 text-white rounded-xl hover:bg-blue-600 transition-colors flex items-center justify-center">
          <font-awesome-icon :icon="['fas', 'envelope']" class="mr-2" />
          Contact
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile-header {
  background-image: linear-gradient(to right, #3b82f6, #8b5cf6);
}
</style>