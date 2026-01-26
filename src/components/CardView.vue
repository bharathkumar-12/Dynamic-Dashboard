<template>
	<div
		@click="showGraph(props.title)"
		:class="[
			'backdrop-blur-xl transition-all duration-300 min-w-[280px] lg:max-w-[280px] rounded-2xl cursor-pointer p-6 hover:scale-[1.02] hover:shadow-lg',
			isActive ? 'bg-white/95 dark:bg-gray-800/95 shadow-lg' : 'bg-white/80 dark:bg-gray-900/80 shadow-md',
		]"
	>
		<!-- Card Header -->
		<div class="flex items-start justify-between mb-6">
			<h3 class="text-base font-medium truncate text-gray-900 dark:text-white capitalize">
				{{ props.title }}
			</h3>
			<div v-if="benchmark && numerator && denominator" 
				:class="[
					'h-2 w-2 rounded-full mt-1.5',
					getStatusColor
				]"
			></div>
		</div>

		<!-- Card Content -->
		<div class="space-y-4">
			<div v-if="benchmark && numerator && denominator">
				<!-- Main Value -->
				<div class="flex items-baseline gap-2">
					<div class="text-4xl font-semibold tracking-tight text-gray-900 dark:text-white">
						{{ value }}%
					</div>
					<div :class="[
						'text-sm font-medium',
						getTrendColor
					]">
						{{ getTrendIndicator }}
					</div>
				</div>

				<!-- Benchmark & Stats -->
				<div class="flex items-center justify-between text-sm">
					<div class="text-gray-500 dark:text-gray-400">
						BM {{ benchmark }}
					</div>
					<div>
						<span class="font-medium text-gray-900 dark:text-white">{{ numerator }}</span>
						<span class="text-gray-500 dark:text-gray-400"> / {{ denominator }}</span>
					</div>
				</div>
			</div>
			
			<!-- Coming Soon State -->
			<div v-else class="flex flex-col items-center justify-center py-4">
				<div class="text-sm font-medium text-blue-600 dark:text-blue-400">Coming soon</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import { computed } from "vue";
import { useCounterStore } from "@/stores/counter";

const store = useCounterStore();
const props = defineProps({
	title: {
		type: String,
		Required: true,
	},
	benchmark: {
		type: String,
		default: "≥99%",
	},
	numerator: {
		type: Number,
		default: 995,
	},
	denominator: {
		type: Number,
		default: 1034,
	},
});

const isActive = computed(() => props.title === store.graphTitle);

const value = computed(() => {
	if (props.denominator === 0) {
		return "N/A";
	}
	const percentage = (props.numerator / props.denominator) * 100;
	return percentage.toFixed(1);
});

// Status indicator color based on value
const getStatusColor = computed(() => {
	const numValue = parseFloat(value.value);
	if (numValue < 20) return 'bg-green-500';
	if (numValue >= 20 && numValue < 90) return 'bg-yellow-500';
	return 'bg-red-500';
});

// Trend indicator (example - you can modify based on your needs)
const getTrendIndicator = computed(() => {
	const numValue = parseFloat(value.value);
	const benchmark = parseFloat(props.benchmark.replace(/[^0-9.]/g, ''));
	return numValue >= benchmark ? '+2.5%' : '-1.2%';
});

// Trend color
const getTrendColor = computed(() => {
	const numValue = parseFloat(value.value);
	const benchmark = parseFloat(props.benchmark.replace(/[^0-9.]/g, ''));
	return numValue >= benchmark ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400';
});

function showGraph(value) {
	console.log("TT", props.title);
	store.showGraph = true;
	store.graphTitle = value;
}
</script>

<style scoped>
.backdrop-blur-xl {
	-webkit-backdrop-filter: blur(20px);
	backdrop-filter: blur(20px);
}
</style>
