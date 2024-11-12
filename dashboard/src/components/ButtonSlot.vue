<template>
	<div
		class="cursor-pointer border-[0.5px] rounded-sm hover:bg-cyan-500 hover:text-black text-xs border-cyan-300 text-cyan-300 px-4 py-2 flex flex-row gap-2 justify-center text-center items-center"
	>
		<button type="submit"  class="">
            <slot name="btnText"/>
        </button>
		<slot name="icon" />
	</div>
</template>
<script setup>

</script>
