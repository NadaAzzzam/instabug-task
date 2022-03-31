<template>
  <nav class="pagination-nav" aria-label="Page navigation example">
    <ul class="pagination">
      <li
        v-show="totalPages"
        v-for="(item, i) in totalPages"
        :key="i + 'pagination-list'"
        class="pagination-page__item"
      >
      <!-- {{$route.query.page}} -->
        <a
          class="pagination-page__link"
          :class="{ active: item ==$route.query.page }"
          @click="page = item"
          >{{ item }}</a
        >
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  props: ["totalPages"],
  data: () => ({
    page: 1,
  }),
  created() {
    this.$emit("getPage", this.page);

    this.$router.replace(
      {
        query: Object.assign({ ...this.$route.query }, { page: this.page }),
      },
      () => {}
    );
  },
  watch: {
    page(newVal) {
      if (newVal) {
        this.$emit("getPage", newVal);
        this.$router.replace(
          {
            query: Object.assign({ ...this.$route.query }, { page: newVal }),
          },
          () => {}
        );
      }
    },
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.pagination {
  display: flex;
  align-items: center;
  justify-content: right;
  list-style: none;
  margin: 3px 0;
  &-nav {
    padding: 0;
  }

  &-page__link {
    position: relative;
    display: block;
    padding: 0.5rem 0.75rem;
    margin-left: -1px;
    line-height: 1.25;
    color: #007bff;
    background-color: #fff;
    border: 1px solid #dee2e6;
  }
  .active {
    z-index: 1;
    color: #fff;
    background-color: #007bff;
    border-color: #007bff;
  }
}
</style>