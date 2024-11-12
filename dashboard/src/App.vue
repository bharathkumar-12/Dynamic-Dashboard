<script setup>
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
</script>

<template>
	<div class="h-screen bg-gray-900">
		<div class="grid grid-cols-12 h-full">
			<div class="col-span-1 w-[50px]">
				<img
					src="./assets/logo.svg"
					class="object-cover justify-self-center h-[40px] w-[40px] p-2 rounded-[50%]"
					alt=""
				/>
				<header
					class="bg-cyan-700 px-2 flex flex-col items-center justify-between h-full gap-6"
				>
					<font-awesome-icon class="p-4 text-white hover:bg-cyan-500" :icon="['fas', 'chevron-right']" />

					<div class="flex flex-col justify-center">
						<RouterLink class="p-4 hover:bg-cyan-400 bg-gray-800 transition-all rounded-full group" to="/">
							<font-awesome-icon
								class="text-white"
								:icon="['fas', 'chart-simple']"
							/>
						</RouterLink>
						<RouterLink class="p-4 hover:bg-cyan-400 transition-all rounded-full group" to="/about">
							<font-awesome-icon class="text-white" :icon="['fas', 'calendar']" />
						</RouterLink>
						<RouterLink class="p-4 hover:bg-cyan-400 transition-all rounded-full group" to="/about">
							<font-awesome-icon class="text-white" :icon="['fas', 'clipboard']" />
						</RouterLink>
					</div>

					<div class="mb-[50px] grid gap-3">
						<div class="border-2 grid justify-self-center items-center border-white rounded-full h-[25px] w-[25px]">
              <font-awesome-icon class="justify-self-center text-white h-[10px] w-[10px]" :icon="['fas', 'user']" />
            </div>
						<div class="grid justify-self-center  items-center  rounded-full h-[20px] w-[20px]">
              <font-awesome-icon class="justify-self-center text-xl text-white" :icon="['fas', 'gear']" />
            </div>
					</div>
				</header>
			</div>
			<div class="col-span-11">
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
