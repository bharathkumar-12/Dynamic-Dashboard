<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheWelcome from "../components/TheWelcome.vue";
import { Line } from "vue-chartjs";
import CardView from "../components/CardView.vue";
import ButtonSlot from "../components/ButtonSlot.vue";
import FilterMenu from "../components/FilterMenu.vue";
import { ref } from "vue";

const chartData = {
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
};

const data = [
	{
		id: 1,
		title: "ICSI Normal Fertilization Rate",
		benchmark: "<=98.4%",
		numerator: 842,
		denominator: 1034,
	},
	{
		id: 2,
		title: "Cleavage Rate",
		benchmark: "≥99%",
		numerator: 995,
		denominator: 1034,
	},
	{
		id: 3,
		title: "Day 2 Embryo Development Rate",
		benchmark: "≥80%",
		numerator: 804,
		denominator: 1034,
	},
	{
		id: 4,
		title: "Day 3 Embryo Development Rate",
		benchmark: "≥70%",
		numerator: 618,
		denominator: 1034,
	},
	{
		id: 5,
		title: "Day 5 Blastulation Rate",
		benchmark: "≥60%",
		numerator: 583,
		denominator: 1034,
	},
	{
		id: 6,
		title: "Overall Blastocyst Rate",
		benchmark: "≥70%",
		numerator: 691,
		denominator: 1034,
	},
	{
		id: 7,
		title: "1PN Rate (ICSI)",
		benchmark: "<1%",
		numerator: 49,
		denominator: 1507,
	},
	{
		id: 8,
		title: "Proportion of Failed Fertilization (ICSI)",
		benchmark: "<1%",
		numerator: 7,
		denominator: 190,
	},
	{
		id: 9,
		title: "ICSI Degeneration Rate",
		benchmark: "",
		numerator: "",
		denominator: "",
	},
];
const showFilter = ref(false);
</script>

<template>
	<div class="p-4 flex gap-4 flex-col">
		<div class="grid grid-flow-col justify-between">
			<div class="flex flex-row gap-4">
				<div class="py-2 text-sm text-white">Dashboard KPI's</div>
				<ButtonSlot @click="console.log('click identified')">
					<template #btnText>
						Refresh
					</template>
					<template #icon>
						<font-awesome-icon :icon="['fas', 'arrows-rotate']" />
					</template>
				</ButtonSlot>
			</div>
			<div
				class="grid relative grid-cols-2 gap-[100px] text-sm border-b-[0.5px]"
			>
				<div class="cursor-pointer text-gray-400 hover:text-gray-100">
					Clear Filter
				</div>
				<div
					@click="showFilter = !showFilter"
					class="cursor-pointer text-gray-400 hover:text-gray-100"
				>
					Filter
					<font-awesome-icon :icon="['fas', 'filter']" />
				</div>
				<div class="absolute z-50 right-0 w-[400px]" v-if="showFilter">
					<FilterMenu />
				</div>
			</div>
		</div>
		<div class="flex flex-wrap gap-4 relative">
			<CardView
				v-for="item in data"
				:key="item.id"
				:title="item.title"
				:benchmark="item.benchmark"
				:numerator="item.numerator"
				:denominator="item.denominator"
			/>
			<!-- <Line :data="chartData" class="bg-gray-900 p-4" :options="options" /> -->
		</div>
	</div>
</template>
