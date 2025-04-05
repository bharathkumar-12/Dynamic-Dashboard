<script setup>
import { RouterLink, RouterView, useRoute } from "vue-router";
import { ref } from "vue";
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { 
	faChartSimple, 
	faCalendar, 
	faClipboard, 
	faUser, 
	faGear,
	faBars,
	faX,
	faPlus,
	faChevronLeft,
	faChevronRight,
	faMagnifyingGlass,
	faCheck,
	faBriefcase,
	faUsers,
	faFileLines,
	faClipboardList
} from '@fortawesome/free-solid-svg-icons';
import {
	Chart as ChartJS,
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend,
} from "chart.js";

// Add icons to the library
library.add(
	faChartSimple, 
	faCalendar, 
	faClipboard, 
	faUser, 
	faGear,
	faBars,
	faX,
	faPlus,
	faChevronLeft,
	faChevronRight,
	faMagnifyingGlass,
	faCheck,
	faBriefcase,
	faUsers,
	faFileLines,
	faClipboardList
);

ChartJS.register(
	CategoryScale,
	LinearScale,
	PointElement,
	LineElement,
	Title,
	Tooltip,
	Legend
);

const expandMenu = ref(false);
const route = useRoute();

const isActive = (path) => {
	return route.path === path;
};

function toggleMenu() {
	expandMenu.value = !expandMenu.value;
}
</script>

<template>
	<div class="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
		<!-- Mobile Header -->
		<div class="relative lg:hidden">
			<div class="backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-4 border-b border-gray-200/50 dark:border-gray-700/50">
				<div class="flex items-center gap-3">
					<img
						src="./assets/logo.svg"
						class="h-8 w-8 object-cover rounded-xl shadow-lg"
						alt="Logo"
					/>
					<span class="text-gray-900 dark:text-white text-lg font-medium">Company Name</span>
				</div>
				<button
					class="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
					@click="toggleMenu"
				>
					<font-awesome-icon v-if="!expandMenu" :icon="['fas', 'bars']" class="text-xl" />
					<font-awesome-icon v-else :icon="['fas', 'x']" class="text-xl" />
				</button>
			</div>

			<!-- Mobile Menu -->
			<div
				v-if="expandMenu"
				class="fixed inset-0 z-40 backdrop-blur-xl bg-white/95 dark:bg-gray-900/95 pt-20"
				@click="expandMenu = false"
			>
				<div class="px-6 py-4 space-y-1">
					<RouterLink
						v-for="(item, index) in [
							{ path: '/', icon: ['fas', 'chart-simple'], label: 'Graph Cards' },
							{ path: '/planner', icon: ['fas', 'calendar'], label: 'Planner' },
							{ path: '/task', icon: ['fas', 'clipboard'], label: 'Task Manager' },
							{ path: '/profile', icon: ['fas', 'user'], label: 'Profile' },
							{ path: '/settings', icon: ['fas', 'gear'], label: 'Settings' }
						]"
						:key="index"
						:to="item.path"
						:class="[
							'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200',
							isActive(item.path)
								? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
								: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
						]"
					>
						<font-awesome-icon :icon="item.icon" class="text-lg" />
						<span class="font-medium">{{ item.label }}</span>
					</RouterLink>
				</div>
			</div>
		</div>

		<div class="lg:grid lg:grid-cols-[auto,1fr] min-h-screen">
			<!-- Desktop Sidebar -->
			<div class="hidden lg:flex">
				<div class="w-20 group hover:w-64 transition-all duration-300 fixed top-0 left-0 h-screen backdrop-blur-xl bg-white/70 dark:bg-gray-900/70 border-r border-gray-200/50 dark:border-gray-700/50 z-40">
					<div class="flex flex-col h-full">
						<div class="flex items-center gap-3 p-6 border-b border-gray-200/50 dark:border-gray-700/50">
							<div class="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-lg">
								<font-awesome-icon :icon="['fas', 'chart-simple']" class="text-white text-xl" />
							</div>
							<div class="hidden group-hover:block">
								<h1 class="text-lg font-semibold text-gray-900 dark:text-white tracking-tight">Analytics</h1>
								<p class="text-xs text-gray-500 dark:text-gray-400">Enterprise Dashboard</p>
							</div>
						</div>

						<div class="flex-1 px-4 py-8 space-y-2">
							<RouterLink
								v-for="(item, index) in [
									{ path: '/', icon: ['fas', 'chart-simple'], label: 'Graph Cards' },
									{ path: '/planner', icon: ['fas', 'calendar'], label: 'Planner' },
									{ path: '/task', icon: ['fas', 'clipboard'], label: 'Task Manager' }
								]"
								:key="index"
								:to="item.path"
								:class="[
									'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200',
									isActive(item.path)
										? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
										: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
								]"
							>
								<font-awesome-icon :icon="item.icon" class="text-lg" />
								<span class="hidden group-hover:block font-medium">{{ item.label }}</span>
							</RouterLink>
						</div>

						<div class="px-4 pb-8 space-y-2">
							<RouterLink
								v-for="(item, index) in [
									{ path: '/profile', icon: ['fas', 'user'], label: 'Profile' },
									{ path: '/settings', icon: ['fas', 'gear'], label: 'Settings' }
								]"
								:key="index"
								:to="item.path"
								:class="[
									'flex items-center gap-4 px-4 py-3 rounded-2xl transition-all duration-200',
									isActive(item.path)
										? 'bg-gray-900 dark:bg-white text-white dark:text-gray-900 shadow-lg'
										: 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800'
								]"
							>
								<font-awesome-icon :icon="item.icon" class="text-lg" />
								<span class="hidden group-hover:block font-medium">{{ item.label }}</span>
							</RouterLink>
						</div>
					</div>
				</div>
			</div>

			<!-- Main Content -->
			<main class="lg:pl-20 min-h-screen">
				<div class="p-6 pt-20 lg:pt-6">
					<RouterView />
				</div>
			</main>
		</div>
	</div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=SF+Pro+Display:wght@400;500;600&display=swap');

:root {
	font-family: 'SF Pro Display', -apple-system, BlinkMacSystemFont, sans-serif;
	color-scheme: light dark;
}

body {
	@apply antialiased;
}

/* Custom scrollbar */
::-webkit-scrollbar {
	width: 8px;
	height: 8px;
}

::-webkit-scrollbar-track {
	@apply bg-transparent;
}

::-webkit-scrollbar-thumb {
	@apply bg-gray-300 dark:bg-gray-700 rounded-full;
}

::-webkit-scrollbar-thumb:hover {
	@apply bg-gray-400 dark:bg-gray-600;
}

/* Smooth transitions for dark mode */
* {
	transition: background-color 0.3s ease, border-color 0.3s ease;
}

/* Glass morphism effect */
.backdrop-blur-xl {
	backdrop-filter: blur(20px);
	-webkit-backdrop-filter: blur(20px);
}
</style>
