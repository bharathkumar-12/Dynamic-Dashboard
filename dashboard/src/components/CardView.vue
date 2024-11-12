<template>
    <div class="bg-gray-600 min-w-[250px] max-w-[250px] rounded-sm cursor-pointer text-gray-400 p-2 text-xs grid gap-8">
        <div class="capitalize">
           {{ title }}
        </div>
        <div>
            <div v-if="benchmark && numerator && denominator" class="flex flex-row gap-2 items-end">
                <div v-if="value<20" class="h-[10px] w-[10px] rounded-full bg-green-400 mb-2"></div>
                <div v-else-if="value>=20 && value < 90" class="h-[10px] w-[10px] rounded-full bg-yellow-400 mb-2"></div>
                <div v-if="value>=90" class="h-[10px] w-[10px] rounded-full bg-red-400 mb-2"></div>
                <div class="text-4xl text-white leading-0">{{ value }}%</div>
            </div>
            <div v-if="benchmark && numerator && denominator" class="flex flex-row justify-between">
                <div>BM {{ benchmark }} </div>
                <div> <span class="text-white">{{ numerator }}</span> / {{ denominator }}</div>
            </div>
            <div v-else>
                <div class="text-cyan-400">Coming soon</div>
            </div>
        </div>
    </div>
</template>
<script setup>
import { computed } from 'vue';
const props = defineProps({
  title: {
    type: String,
    default: "Cleavage Rate"
  },
  benchmark: {
    type: String,
    default: "≥99%"
  },
  numerator: {
    type: Number,
    default: 995
  },
  denominator: {
    type: Number,
    default: 1034
  }
});

const value = computed(() => {
  if (props.denominator === 0) {
    return "N/A"; // Prevent division by zero
  }
  const percentage = (props.numerator / props.denominator) * 100;
  return percentage.toFixed(1); // Format to one decimal place
});
</script>