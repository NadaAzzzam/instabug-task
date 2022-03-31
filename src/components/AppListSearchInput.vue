<template>
  <div class="search-list">
    <div class="search-list__form">
      <div class="search-list__input">
        <input v-model="searchInput" type="text" />
      </div>
      <div class="search-list__buttn">
        <button
          class="btn btn--primary"
          :disabled="!searchInput"
          @click="onClearSearchInput()"
        >
          Clear
        </button>
      </div>
    </div>

    <div class="search-list__form--check">
      <input
        class="search-list__form--check-input"
        type="checkbox"
        v-model="isFullTimeEmployee"
        id="flexCheckDefault"
      />
      <label class="search-list__form--check-label" for="flexCheckDefault">
        is full-time employees
      </label>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    searchInput: null,
    isFullTimeEmployee:false
  }),
  watch: {
    isFullTimeEmployee(newVal){
        this.$emit("getEmployeeWorkStatus", newVal);

    },
    searchInput(newval) {
      if (newval) {
        this.$router.replace(
          {
            query: Object.assign({ ...this.$route.query }, { filter: newval }),
          },
          () => {}
        );
      } else {
        this.onClearSearchInput();
      }
    },
  },

  methods: {
    onClearSearchInput() {
      let query = Object.assign({ ...this.$route.query }, this.$route.query);
      delete query.filter;
      this.$router.replace(
        {
          query: Object.assign({ ...this.$route.query }, { filter: undefined }),
        },
        () => {}
      );
      this.searchInput = null;
    },
  },
};
</script>

<style lang="scss" scoped>
.search-list {
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
  }
  &__form {
    flex: 0 0 50%;
    display: flex;
    align-items: center;
    justify-content: end;
  }
  &__form--check {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: end;
    &-input{
      margin-right: 2px;
    }
  }
}
</style>