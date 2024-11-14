<template>
  <div class="grid grid-cols-3  gap-2 mb-4">
    <div class="col-span-3 text-white font-semibold">{{ label }}</div>
    <div
      v-for="option in options"
      :key="option"
      class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
      :class="{
        'bg-cyan-700 text-white': modelValue === option,
        'border-cyan-700 bg-gray-800 text-cyan-500': modelValue !== option,
      }"
      @click="$emit('update:modelValue', option)"
    >
      {{ option }}
    </div>
  </div>
</template>

<script scoped>
export default {
  props: {
    label: {
      type: String,
      required: true,
    },
    options: {
      type: Array,
      required: true,
    },
    modelValue: {
      type: String,
      required: true,
    },
  },
};
</script>
