<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <AppListSearchInput />
    </div>
    <AppList :items="employeesList" />

    <div class="c-dashboard__footer">
      <button class="btn btn--primary">Load More</button>
    </div>
  </div>
</template>

<script >
import globalModule from "@/store/modules/global";

import AppList from "@/components/AppList.vue";
import AppListSearchInput from "@/components/AppListSearchInput.vue";

export default {
  components: { AppList, AppListSearchInput },
  data: () => ({
    page: 1,
  }),
  created() {
    if (!globalModule.isRegistered) {
      this.$store.registerModule("employees", globalModule);
      globalModule.isRegistered = true;
    }
    this.GetAll(this.page);
  },

  methods: {
    GetAll(page) {
      console.log(page);

      this.$store
        .dispatch("employees/getAll")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          // this.loader = "error";
        });
    },
  },
  computed: {
    employeesList() {
      return this.$store.state.employees.employees;
    },
  },
};
</script>

<style lang="scss"  >

</style>