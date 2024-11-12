<script setup>
import { RouterLink, RouterView } from "vue-router";
import TheWelcome from "../components/TheWelcome.vue";
import CardView from "../components/CardView.vue";
import ButtonSlot from "../components/ButtonSlot.vue";
const data = [
  {
    "id": 1,
    "title": "ICSI Normal Fertilization Rate",
    "benchmark": "<=98.4%",
    "numerator": 842,
    "denominator": 1034
  },
  {
    "id": 2,
    "title": "Cleavage Rate",
    "benchmark": "≥99%",
    "numerator": 995,
    "denominator": 1034
  },
  {
    "id": 3,
    "title": "Day 2 Embryo Development Rate",
    "benchmark": "≥80%",
    "numerator": 804,
    "denominator": 1034
  },
  {
    "id": 4,
    "title": "Day 3 Embryo Development Rate",
    "benchmark": "≥70%",
    "numerator": 618,
    "denominator": 1034
  },
  {
    "id": 5,
    "title": "Day 5 Blastulation Rate",
    "benchmark": "≥60%",
    "numerator": 583,
    "denominator": 1034
  },
  {
    "id": 6,
    "title": "Overall Blastocyst Rate",
    "benchmark": "≥70%",
    "numerator": 691,
    "denominator": 1034
  },
  {
    "id": 7,
    "title": "1PN Rate (ICSI)",
    "benchmark": "<1%",
    "numerator": 49,
    "denominator": 1507
  },
  {
    "id": 8,
    "title": "Proportion of Failed Fertilization (ICSI)",
    "benchmark": "<1%",
    "numerator": 7,
    "denominator": 190
  },
  {
    "id": 9,
    "title": "ICSI Degeneration Rate",
    "benchmark": "",
    "numerator": '',
    "denominator": ''
  }
]

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
			<div class="grid relative grid-cols-2 gap-[100px] text-sm border-b-[0.5px]">
        <div class="cursor-pointer hover:text-gray-100 ">Clear Filter</div>
        <div class="cursor-pointer hover:text-gray-100">Filter
          <font-awesome-icon :icon="['fas', 'filter']" />
        </div>
        <div class="col-span-2 absolute mt-[38px] w-[235px] bg-cyan-900 p-4">
          Filter Menu
        </div>
      </div>
		</div>
<div class="flex flex-wrap gap-4">
	<CardView v-for="item in data" :key="item.id"
    :title="item.title"
    :benchmark="item.benchmark"
    :numerator="item.numerator"
    :denominator="item.denominator"
     />
</div>
	
	</div>
</template>
