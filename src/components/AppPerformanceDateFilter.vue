<template>
  <div class="filter-list">
    <div class="filter-list__input">
      <label> Start Date:</label>
      <input  v-model="startDate" type="date" />
    </div>
    <div class="filter-list__input">
      <label> End Date:</label>
      <input  v-model="endDate" type="date" />
    </div>
  </div>
</template>

<script>
export default {
    data: () => ({
    startDate:null,
    endDate: null
  }),
  watch: {
    startDate(newVal) {
      if (newVal && this.endDate) this.$emit("getDateRange", {
        startDate:newVal,
        endDate:this.endDate

      });
    },
    endDate(newVal) {
      if (newVal && this.startDate) this.$emit("getDateRange",  {
        endDate:newVal,
        startDate:this.startDate

      });
    },
  },
};
</script>

<style lang="scss" scoped>
.filter-list {
  display: flex;
  justify-content: center;
  align-items: center;
  &__input {
    font-size: 1rem;
    font-family: inherit;
    color: inherit;
    border-radius: 2px;
    border: none;
    padding: 0.5rem;
    // border-bottom: 3px solid transparent;
    display: block;
    transition: all 0.3s;

    &:focus {
      outline: none;
    }

    label {
      padding: 0.2rem;
    }
  }
}
</style>
