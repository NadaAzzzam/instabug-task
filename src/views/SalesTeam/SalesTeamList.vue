<template>
  <div class="c-dashboard">
    <div class="c-dashboard__pagination">
      <AppListPagination
        @getPage="
          page = $event;
          page != 1 ? GetAll() : '';
        "
        :totalPages="employeesList.pages"
      />
    </div>
    <div class="c-filters__container">
      <AppListSearchInput
        @getEmployeeWorkStatus="
          isPartTime = $event;
          GetAll();
        "
      />
    </div>
    <AppList :items="employeesList.employees" />

    <p v-if="hideLoadMoreBtn">{{ hideLoadMoreBtn }}</p>

    <div v-if="!hideLoadMoreBtn && page != 7" class="c-dashboard__footer">
      <button :disabled="loading" class="btn btn--primary" @click="onLoadaMore">Load More</button>
    </div>
  </div>
</template>

<script >
import globalModule from "@/store/modules/global";

import AppList from "@/components/AppList.vue";
import AppListPagination from "@/components/AppListPagination.vue";
import AppListSearchInput from "@/components/AppListSearchInput.vue";

export default {
  components: { AppList, AppListSearchInput, AppListPagination },
  data: () => ({
    page: 1,
    isPartTime: false,
    hideLoadMoreBtn: false,
    loading: false,
  }),
  created() {
    if (!globalModule.isRegistered) {
      this.$store.registerModule("employees", globalModule);
      globalModule.isRegistered = true;
    }
    this.GetAll();
  },

  methods: {
    GetAll() {
      this.loading = true;
      const filters = {
        page: this.page,
        isPartTime: this.isPartTime,
      };

      this.$store
        .dispatch("employees/getAll", filters)
        .then((res) => {
          this.loading = false;

          if (res && res.error == "this page is not existed") {
            this.hideLoadMoreBtn = res.error;
          } else {
            this.hideLoadMoreBtn = false;
          }
        })
        .catch((err) => {
          this.loading = false;

          console.log(err);
        });
    },
    onLoadaMore() {
      this.page = this.page + 1;
      if (this.employeesList.current_page <= this.employeesList.pages) {
        this.$router.replace(
          {
            query: Object.assign({ ...this.$route.query }, { page: this.page }),
          },
          () => {
            this.GetAll();
          }
        );
        console.log(this.employeesList);
      }
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