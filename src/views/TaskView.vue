<script setup>
import { ref, computed } from 'vue';

const tasks = ref([
  {
    id: 1,
    title: 'Complete project proposal',
    description: 'Finish the proposal document for the new client project',
    dueDate: '2024-03-25',
    priority: 'high',
    status: 'in-progress',
    category: 'work'
  },
  {
    id: 2,
    title: 'Schedule team meeting',
    description: 'Set up a meeting with the development team to discuss sprint planning',
    dueDate: '2024-03-26',
    priority: 'medium',
    status: 'pending',
    category: 'meeting'
  },
  {
    id: 3,
    title: 'Review quarterly reports',
    description: 'Go through the Q1 financial reports and prepare summary',
    dueDate: '2024-03-28',
    priority: 'high',
    status: 'pending',
    category: 'work'
  },
  {
    id: 4,
    title: 'Update documentation',
    description: 'Update the user guide with the latest features',
    dueDate: '2024-03-30',
    priority: 'low',
    status: 'pending',
    category: 'documentation'
  },
  {
    id: 5,
    title: 'Prepare presentation',
    description: 'Create slides for the upcoming client presentation',
    dueDate: '2024-04-02',
    priority: 'medium',
    status: 'pending',
    category: 'presentation'
  }
]);

const filterStatus = ref('all');
const filterPriority = ref('all');
const filterCategory = ref('all');
const searchQuery = ref('');

const filteredTasks = computed(() => {
  return tasks.value.filter(task => {
    // Filter by status
    if (filterStatus.value !== 'all' && task.status !== filterStatus.value) {
      return false;
    }
    
    // Filter by priority
    if (filterPriority.value !== 'all' && task.priority !== filterPriority.value) {
      return false;
    }
    
    // Filter by category
    if (filterCategory.value !== 'all' && task.category !== filterCategory.value) {
      return false;
    }
    
    // Filter by search query
    if (searchQuery.value && !task.title.toLowerCase().includes(searchQuery.value.toLowerCase())) {
      return false;
    }
    
    return true;
  });
});

function toggleTaskStatus(taskId) {
  const task = tasks.value.find(t => t.id === taskId);
  if (task) {
    task.status = task.status === 'completed' ? 'pending' : 'completed';
  }
}

function getPriorityColor(priority) {
  switch (priority) {
    case 'high':
      return 'bg-red-500';
    case 'medium':
      return 'bg-yellow-500';
    case 'low':
      return 'bg-green-500';
    default:
      return 'bg-gray-500';
  }
}

function getCategoryIcon(category) {
  switch (category) {
    case 'work':
      return ['fas', 'briefcase'];
    case 'meeting':
      return ['fas', 'users'];
    case 'documentation':
      return ['fas', 'file-lines'];
    case 'presentation':
      return ['fas', 'presentation-screen'];
    default:
      return ['fas', 'tasks'];
  }
}

function formatDate(dateString) {
  const options = { month: 'short', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}
</script>

<template>
  <div class="p-6 max-w-7xl mx-auto">
    <!-- Header -->
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="text-2xl font-semibold text-gray-900 dark:text-white">Tasks</h1>
        <p class="text-sm text-gray-500 dark:text-gray-400">Manage your tasks and stay organized</p>
      </div>
      <button class="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors">
        <font-awesome-icon :icon="['fas', 'plus']" class="mr-2" />
        Add Task
      </button>
    </div>

    <!-- Filters and Search -->
    <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg mb-6">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
        <!-- Search -->
        <div class="relative">
          <input 
            v-model="searchQuery"
            type="text" 
            placeholder="Search tasks..." 
            class="w-full pl-10 pr-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <font-awesome-icon 
            :icon="['fas', 'magnifying-glass']" 
            class="absolute left-3 top-3 text-gray-400"
          />
        </div>
        
        <!-- Status Filter -->
        <div>
          <select 
            v-model="filterStatus"
            class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Statuses</option>
            <option value="pending">Pending</option>
            <option value="in-progress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>
        
        <!-- Priority Filter -->
        <div>
          <select 
            v-model="filterPriority"
            class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Priorities</option>
            <option value="high">High</option>
            <option value="medium">Medium</option>
            <option value="low">Low</option>
          </select>
        </div>
        
        <!-- Category Filter -->
        <div>
          <select 
            v-model="filterCategory"
            class="w-full px-4 py-2 rounded-xl bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="all">All Categories</option>
            <option value="work">Work</option>
            <option value="meeting">Meeting</option>
            <option value="documentation">Documentation</option>
            <option value="presentation">Presentation</option>
          </select>
        </div>
      </div>
    </div>

    <!-- Task List -->
    <div class="bg-white dark:bg-gray-800 rounded-3xl p-6 shadow-lg">
      <div v-if="filteredTasks.length === 0" class="text-center py-12">
        <font-awesome-icon :icon="['fas', 'clipboard-list']" class="text-4xl text-gray-400 mb-4" />
        <p class="text-gray-500 dark:text-gray-400">No tasks found. Try adjusting your filters.</p>
      </div>
      
      <div v-else class="space-y-4">
        <div 
          v-for="task in filteredTasks" 
          :key="task.id"
          class="p-4 rounded-xl border border-gray-100 dark:border-gray-700 hover:shadow-md transition-shadow"
        >
          <div class="flex items-start">
            <!-- Checkbox -->
            <div class="mr-4 mt-1">
              <button 
                @click="toggleTaskStatus(task.id)"
                :class="[
                  'w-5 h-5 rounded-full border-2 flex items-center justify-center transition-colors',
                  task.status === 'completed' 
                    ? 'bg-blue-500 border-blue-500' 
                    : 'border-gray-300 dark:border-gray-600'
                ]"
              >
                <font-awesome-icon 
                  v-if="task.status === 'completed'"
                  :icon="['fas', 'check']" 
                  class="text-white text-xs"
                />
              </button>
            </div>
            
            <!-- Task Content -->
            <div class="flex-1">
              <div class="flex items-start justify-between">
                <h3 
                  :class="[
                    'font-medium',
                    task.status === 'completed' ? 'line-through text-gray-500 dark:text-gray-400' : 'text-gray-900 dark:text-white'
                  ]"
                >
                  {{ task.title }}
                </h3>
                <div class="flex items-center space-x-2">
                  <span 
                    :class="[
                      'px-2 py-1 text-xs rounded-full',
                      getPriorityColor(task.priority)
                    ]"
                  >
                    {{ task.priority }}
                  </span>
                  <span class="text-xs text-gray-500 dark:text-gray-400">
                    {{ formatDate(task.dueDate) }}
                  </span>
                </div>
              </div>
              
              <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
                {{ task.description }}
              </p>
              
              <div class="flex items-center mt-3">
                <div class="flex items-center text-xs text-gray-500 dark:text-gray-400">
                  <font-awesome-icon :icon="getCategoryIcon(task.category)" class="mr-1" />
                  {{ task.category }}
                </div>
                
                <div class="ml-4 flex items-center text-xs">
                  <span 
                    :class="[
                      'px-2 py-1 rounded-full',
                      task.status === 'completed' ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200' :
                      task.status === 'in-progress' ? 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200' :
                      'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-200'
                    ]"
                  >
                    {{ task.status }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.task-item {
  transition: all 0.2s ease;
}
</style>