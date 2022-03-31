<template>
  <div class="c-dashboard">
    <div class="c-filters__container">
      <AppPerformanceDateFilter :minDate="minDate" :maxDate="maxDate" @getDateRange="getDateRange" />
    </div>

    <div class="c-dashboard__chart">
      <AppPerformanceChart
        v-if="performanceList"
        :chartData="performanceList"
        :startDate="startDate"
        :endDate="endDate"
      />
    </div>
  </div>
</template>

<script>
import AppPerformanceDateFilter from "@/components/AppPerformanceDateFilter.vue";
import AppPerformanceChart from "@/components/AppPerformanceChart.vue";
import globalModule from "@/store/modules/global";
import moment from "moment";

export default {
  components: {
    AppPerformanceDateFilter,
    AppPerformanceChart,
  },
  data: () => ({
    startDate: "",
    endDate: "",
  }),

  created() {
    if (!globalModule.isRegistered) {
      this.$store.registerModule("employees", globalModule);
      globalModule.isRegistered = true;
    }
    this.getPerformance(this.page);
  },
  methods: {
    getPerformance() {

      this.$store
        .dispatch("employees/getPerformance")
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
          // this.loader = "error";
        });
    },
    getDateRange(dateVal) {
      this.startDate = this.formatDate(dateVal.startDate);
      this.endDate = this.formatDate(dateVal.endDate);
    },
    formatDate(dateInMs) {
      return moment(dateInMs).format("DD MMM YYYY");
    },

  },
  computed: {
    performanceList() {
      return this.$store.state.employees.performance;
    },
    minDate() {
      return this.formatDate(
        new Date(
          Math.min(
            ...this.$store.state.employees.performance.map((element) => {
              return new Date(element.date_ms);
            })
          )
        )
      );
    },
    maxDate() {
      return this.formatDate(
        new Date(
          Math.max(
            ...this.$store.state.employees.performance.map((element) => {
              return new Date(element.date_ms);
            })
          )
        )
      );
    },
  },
};
</script>

<style lang="scss" scoped>
</style>