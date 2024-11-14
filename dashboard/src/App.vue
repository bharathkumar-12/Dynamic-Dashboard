<script setup>
import { RouterLink, RouterView } from "vue-router";
import { Line } from "vue-chartjs";
import { ref } from "vue";
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
function toggleMenu() {
	expandMenu.value = !expandMenu.value;
}
</script>

<template>
	<div class="h-[100vh]">
		<div class="relative lg:hidden">
			<!-- Mobile Header -->
			<div class="bg-cyan-700 flex justify-between items-center px-4 py-2">
				<img
					src="./assets/logo.svg"
					class="h-[40px] w-[40px] object-cover rounded-full"
					alt="Logo"
				/>
				<div class="text-white text-lg font-semibold">Company Name</div>
				<button
					class="text-white text-2xl focus:outline-none"
					@click="toggleMenu"
				>
					<font-awesome-icon v-if="!expandMenu" :icon="['fas', 'bars']" />
					<font-awesome-icon v-else :icon="['fas', 'x']" />
				</button>
			</div>

			<!-- Collapsible Menu -->
			<div
				v-if="expandMenu" @click="expandMenu = false"
				class="bg-cyan-700 absolute top-[60px] left-0 w-full z-50 flex-col items-center"
			>
				
					<RouterLink
						class="flex gap-4 items-center py-2 px-4 hover:bg-cyan-600 w-full"
						to="/"
					>
						<i class="fas fa-chart-simple text-white"></i>
						<span class="text-white">Graph Cards</span>
					</RouterLink>
				

				<RouterLink
					class="flex gap-4 items-center py-2 px-4 hover:bg-cyan-600 w-full"
					to="/planner"
				>
					<i class="fas fa-calendar text-white"></i>
					<span class="text-white">Planner</span>
				</RouterLink>

				<RouterLink
					class="flex gap-4 items-center py-2 px-4 hover:bg-cyan-600 w-full"
					to="/task"
				>
					<i class="fas fa-clipboard text-white"></i>
					<span class="text-white">Task Manager</span>
				</RouterLink>

				<RouterLink
					class="flex gap-4 items-center py-2 px-4 hover:bg-cyan-600 w-full"
					to="/profile"
				>
					<i class="fas fa-user text-white"></i>
					<span class="text-white">Profile</span>
				</RouterLink>

				<RouterLink
					class="flex gap-4 items-center py-2 px-4 hover:bg-cyan-600 w-full"
					to="/settings"
				>
					<i class="fas fa-gear text-white"></i>
					<span class="text-white">Settings</span>
				</RouterLink>
			</div>
		</div>
		<div class="grid grid-flow-col h-[100vh]">
			<div
				class="hover:w-[250px] lg:flex flex-col hidden w-fit group transition-all ease-in-out delay-200 z-40"
			>
				<div
					class="bg-cyan-700 grid grid-flow-col items-center border-b-[0.5px] border-white"
				>
					<img
						src="./assets/logo.svg"
						class="object-cover justify-self-center h-[40px] w-[40px] p-2 rounded-[50%]"
						alt=""
					/>
					<div
						class="hidden text-gray-300 text-lg font-semibold group-hover:flex"
					>
						Company Name
					</div>
				</div>

				<header
					class="bg-cyan-700 px-2 flex flex-col items-center justify-between w-full h-full gap-6"
				>
					<!-- <font-awesome-icon
						class="p-4 text-white hover:bg-cyan-500"
						:icon="['fas', 'chevron-right']"
					/> -->
					<div>
						<!-- its for layout -->
					</div>

					<div class="flex flex-col gap-2 justify-center w-full">
						<RouterLink
							class="py-2 px-4 hover:bg-cyan-600 transition-all rounded-full w-full group"
							to="/"
						>
							<div class="flex flex-row gap-4 items-center">
								<font-awesome-icon
									class="text-white"
									:icon="['fas', 'chart-simple']"
								/>
								<div class="hidden group-hover:flex text-white">
									Graph Cards
								</div>
							</div>
						</RouterLink>
						<RouterLink
							class="py-2 px-4 hover:bg-cyan-600 transition-all rounded-full w-full group"
							to="/planner"
						>
							<div class="flex flex-row gap-4 items-center">
								<font-awesome-icon
									class="text-white"
									:icon="['fas', 'calendar']"
								/>
								<div class="hidden group-hover:flex text-white">
									Planner
								</div>
							</div>
						</RouterLink>
						<RouterLink
							class="py-2 px-4 hover:bg-cyan-600 transition-all rounded-full w-full group"
							to="/task"
						>
							<div class="flex flex-row gap-4 items-center">
								<font-awesome-icon
									class="text-white"
									:icon="['fas', 'clipboard']"
								/>
								<div class="hidden group-hover:flex text-white">
									Task Manager
								</div>
							</div>
						</RouterLink>
					</div>

					<div class="mb-[50px] grid w-full gap-3">
						<RouterLink
							class="py-2 px-4 hover:bg-cyan-600 transition-all rounded-full w-full group"
							to="/profile"
						>
							<div class="flex flex-row gap-4 items-center">
								<font-awesome-icon class="text-white" :icon="['fas', 'user']" />
								<div class="hidden group-hover:flex text-white">
									Profile
								</div>
							</div>
						</RouterLink>
						<RouterLink
							class="py-2 px-4 hover:bg-cyan-600 transition-all rounded-full w-full group"
							to="/settings"
						>
							<div class="flex flex-row gap-4 items-center">
								<font-awesome-icon class="text-white" :icon="['fas', 'gear']" />
								<div class="hidden group-hover:flex text-white">
									Settings
								</div>
							</div>
						</RouterLink>
					</div>
				</header>
			</div>
			<div>
				<RouterView />
			</div>
		</div>
	</div>
</template>

<style scoped></style>
