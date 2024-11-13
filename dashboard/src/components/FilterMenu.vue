<template>
	<div
		class="col-span-2 text-cyan-500 text-xs rounded-md absolute mt-[38px] right-0 w-[400px] bg-gray-800 p-4"
	>
		<!-- Date Range -->
		<div class="grid grid-cols-2 mb-4 gap-y-2">
			<div class="col-span-2 text-white font-semibold">Date</div>
			<input
				class="p-2 rounded-s-lg  border-[0.5px] border-cyan-700 bg-gray-800 "
				type="date"
				v-model="filters.fromDate"
			/>
			<input
				class="p-2 rounded-e-lg  border-[0.5px] border-cyan-700 bg-gray-800"
				type="date"
				v-model="filters.toDate"
			/>
		</div>

		<!-- Clinics Section -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Clinics</div>
			<div
				v-for="clinic in clinics"
				:key="clinic"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.clinic === clinic && clinic === 'All',
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.clinic === 'All' && clinic !== 'All',
					'bg-cyan-700': filters.clinic === clinic && clinic !== 'All',
				}"
				@click="filters.clinic = clinic"
			>
				{{ clinic }}
			</div>
		</div>

		<!-- Clinic Admin User -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Clinic Admin User</div>
			<div
				v-for="user in adminUsers"
				:key="user"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.adminUser === user && user === 'All',
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.adminUser === 'All' && user !== 'All',
					'bg-cyan-700': filters.adminUser === user && user !== 'All',
				}"
				@click="filters.adminUser = user"
			>
				{{ user }}
			</div>
		</div>

		<!-- Age Groups -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Age Groups</div>
			<div
				v-for="ageGroup in ageGroups"
				:key="ageGroup"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.ageGroup === ageGroup,
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.ageGroup !== ageGroup,
				}"
				@click="filters.ageGroup = ageGroup"
			>
				{{ ageGroup }}
			</div>
		</div>

		<!-- Insemination Method -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Insemination Method</div>
			<div
				v-for="method in inseminationMethods"
				:key="method"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.inseminationMethod === method && method === 'All',
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.inseminationMethod === 'All' && method !== 'All',
					'bg-cyan-700': filters.inseminationMethod === method && method !== 'All',
				}"
				@click="filters.inseminationMethod = method"
			>
				{{ method }}
			</div>
		</div>

		<!-- Own/Donor -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Own/Donor</div>
			<div
				v-for="type in ownDonorOptions"
				:key="type"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.ownDonor === type && type === 'All',
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.ownDonor === 'All' && type !== 'All',
					'bg-cyan-700': filters.ownDonor === type && type !== 'All',
				}"
				@click="filters.ownDonor = type"
			>
				{{ type }}
			</div>
		</div>

		<!-- Cryopreservation Type -->
		<div class="grid grid-cols-3 gap-2 mb-4">
			<div class="col-span-3 text-white font-semibold">Cryopreservation Type</div>
			<div
				v-for="type in cryopreservationTypes"
				:key="type"
				class="p-2 rounded-md border-[0.5px] border-cyan-700 bg-cyan-900 text-center text-white cursor-pointer"
				:class="{
					'bg-cyan-700 text-white': filters.cryopreservationType === type && type === 'All',
					'border-cyan-700 bg-gray-800 text-cyan-500': filters.cryopreservationType === 'All' && type !== 'All',
					'bg-cyan-700': filters.cryopreservationType === type && type !== 'All',
				}"
				@click="filters.cryopreservationType = type"
			>
				{{ type }}
			</div>
		</div>
	</div>
</template>

<script scoped>

export default {
	data() {
		return {
			filters: {
				fromDate: "",
				toDate: "",
				clinic: "All", // Default to "All"
				adminUser: "All", // Default to "All"
				ageGroup: "",
				inseminationMethod: "All", // Default to "All"
				ownDonor: "All", // Default to "All"
				cryopreservationType: "All", // Default to "All"
			},
			clinics: ["All", "Clinic 1", "Clinic 2"],
			adminUsers: ["All", "Doctor", "Embryologist"],
			ageGroups: ["All","20-29", "30-39", "40-49", "50-60"],
			inseminationMethods: ["All", "IVF", "ICSI"],
			ownDonorOptions: ["All", "Own", "Donar"],
			cryopreservationTypes: ["All", "Fresh", "Thawed"],
		};
	},
	methods: {
		applyFilters() {
			// Emit filters to the parent or handle logic
			this.$emit("apply-filters", this.filters);
		},
	},
};
</script>
