<template>
  <div class="col-span-2 text-cyan-500 text-xs rounded-md absolute grid w-full lg:ml-0 mt-[38px] bg-gray-800 p-4">
    <!-- Date Range -->
    <div class="grid grid-cols-2 mb-4 gap-y-2">
      <div class="col-span-2 text-white font-semibold">Date</div>
      <input
        class="p-2 rounded-s-lg  border-[0.5px] border-cyan-700 bg-gray-800"
        type="date"
        v-model="store.filters.fromDate"
      />
      <input
        class="p-2 rounded-e-lg  border-[0.5px] border-cyan-700 bg-gray-800"
        type="date"
        v-model="store.filters.toDate"
      />
    </div>

    <!-- Filters -->
    <FilterSection
      label="Clinics"
      :options="clinics"
      v-model="store.filters.clinic"
    />
    <FilterSection
      label="Clinic Admin User"
      :options="adminUsers"
      v-model="store.filters.adminUser"
    />
    <FilterSection
      label="Age Groups"
      :options="ageGroups"
      v-model="store.filters.ageGroup"
    />
    <FilterSection
      label="Insemination Method"
      :options="inseminationMethods"
      v-model="store.filters.inseminationMethod"
    />
    <FilterSection
      label="Own/Donor"
      :options="ownDonorOptions"
      v-model="store.filters.ownDonor"
    />
    <FilterSection
      label="Cryopreservation Type"
      :options="cryopreservationTypes"
      v-model="store.filters.cryopreservationType"
    />
  </div>
</template>

<script>
import FilterSection from "../components/FilterSection.vue";
import { useCounterStore } from "@/stores/counter";
export default {
  components: {
    FilterSection,
  },
  data() {
    return {
		store: useCounterStore(),
		
    //   filters: {
    //     fromDate: "",
    //     toDate: "",
    //     clinic: "All", // Default to "All"
    //     adminUser: "All", // Default to "All"
    //     ageGroup: "All",
    //     inseminationMethod: "All", // Default to "All"
    //     ownDonor: "All", // Default to "All"
    //     cryopreservationType: "All", // Default to "All"
    //   },
      clinics: ["All", "Clinic 1", "Clinic 2"],
      adminUsers: ["All", "Doctor", "Embryologist"],
      ageGroups: ["All", "20-29", "30-39", "40-49", "50-60"],
      inseminationMethods: ["All", "IVF", "ICSI"],
      ownDonorOptions: ["All", "Own", "Donor"],
      cryopreservationTypes: ["All", "Fresh", "Thawed"],
    };
  },
  methods: {
    applyFilters() {
      // Emit filters to the parent or handle logic
      this.$emit("applyFilters", this.filters);
    },
	
  },
};
</script>
