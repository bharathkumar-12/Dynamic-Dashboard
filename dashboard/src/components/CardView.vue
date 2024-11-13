<template>
	<div
		@click="showGraph(title)" 
		class="bg-gray-600 min-w-[250px] hover:border-[0.5px] border-gray-300 max-w-[250px] rounded-sm cursor-pointer text-gray-400 p-2 text-xs grid gap-8"
	>
		<div class="capitalize">
			{{ title }}
		</div>
		<div>
			<div
				v-if="benchmark && numerator && denominator"
				class="flex flex-row gap-2 items-end"
			>
				<div
					v-if="value < 20"
					class="h-[10px] w-[10px] rounded-full bg-green-400 mb-2"
				></div>
				<div
					v-else-if="value >= 20 && value < 90"
					class="h-[10px] w-[10px] rounded-full bg-yellow-400 mb-2"
				></div>
				<div
					v-if="value >= 90"
					class="h-[10px] w-[10px] rounded-full bg-red-400 mb-2"
				></div>
				<div class="text-4xl text-white leading-0">{{ value }}%</div>
			</div>
			<div v-else class="h-[40px]"></div>
			<div
				v-if="benchmark && numerator && denominator"
				class="flex flex-row justify-between"
			>
				<div>BM {{ benchmark }}</div>
				<div>
					<span class="text-white">{{ numerator }}</span> / {{ denominator }}
				</div>
			</div>
			<div v-else>
				<div class="text-cyan-400">Coming soon</div>
			</div>
		</div>
	</div>
	<div
		v-if="store.showGraph"
		class="grid justify-items-center gap-2 absolute bg-[#2A3663] p-2 top-[130px]"
	>
		<div
			@click="store.showGraph = false"
			class="text-xs hover:bg-slate-500 cursor-pointer w-fit px-2 py-1 rounded-xl"
		>
			Close Graph View
		</div>

		<Line :data="chartData" class="p-4 w-[80vw] h-full" :options="options" />
	</div>
</template>
<script setup>
import { Line } from "vue-chartjs";
import { computed, onMounted, reactive, ref } from "vue";
import { useCounterStore } from "@/stores/counter";
const store = useCounterStore();
const props = defineProps({
	title: {
		type: String,
		default: "Cleavage Rate",
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

const value = computed(() => {
	if (props.denominator === 0) {
		return "N/A"; // Prevent division by zero
	}
	const percentage = (props.numerator / props.denominator) * 100;
	return percentage.toFixed(1); // Format to one decimal place
});

const chartData = ref({
	labels: [
		"04 May 24",
		"11 May 24",
		"18 May 24",
		"25 May 24",
		"01 Jun 24",
		"08 Jun 24",
		"15 Jun 24",
		"22 Jun 24",
		"29 Jun 24",
		"06 Jul 24",
		"13 Jul 24",
		"20 Jul 24",
		"27 Jul 24",
		"03 Aug 24",
		"10 Aug 24",
		"17 Aug 24",
		"24 Aug 24",
		"31 Aug 24",
		"07 Sep 24",
		"14 Sep 24",
		"21 Sep 24",
		"28 Sep 24",
		"05 Oct 24",
		"12 Oct 24",
		"19 Oct 24",
		"26 Oct 24",
		"31 Oct 24",
	],
	datasets: [
		{
			label: "ICSI Normal Fertilization Rate",
			backgroundColor: "transparent",
			borderColor: "#00d4d4",
			data: [
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				0,
				65,
				75,
				85,
				80,
				75,
				70,
				60,
				55,
			],
			borderWidth: 2,
			pointBackgroundColor: "#00d4d4",
			pointBorderColor: "#00d4d4",
		},
		{
			label: "Benchmark ≥ 80%",
			backgroundColor: "transparent",
			borderColor: "#ffffff",
			data: Array(27).fill(80),
			pointRadius: 0,
			borderWidth: 1,
		},
		{
			label: "Competency ≥ 65%",
			backgroundColor: "transparent",
			borderColor: "#ff4b4b",
			data: Array(27).fill(65),
			pointRadius: 0,
			borderDash: [5, 5],
			borderWidth: 1,
		},
	],
});
function showGraph(value) {
	console.log("TT", props.title);
	store.showGraph = true;
	store.graphTitle = value;
}
</script>
