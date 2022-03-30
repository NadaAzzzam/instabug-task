<template>
  <div class="c-users-list">
    <div class="c-users-list__header">
      <div>Employee</div>
      <div>Email</div>
      <div>Adress</div>
      <div>Start Date</div>
      <div>Performance Index</div>
      <div>About</div>
    </div>
    <div
      class="c-users-list__body"
      v-show="!employee.length"
      v-for="(employee, i) in items"
      :key="i + 'user-list'"
    >
      <div>
        <div class="c-users-list__main-info">
          <img
            class="c-users-list__avatar"
            :src="employee.profile.avatar"
            :alt="employee.profile.name"
          />
          <div v-html="$options.filters.highlight(employee.profile.name, $route.query.filter)"></div>
        </div>
      </div>
      <div >{{ employee.email }}</div>
      <div v-html="$options.filters.highlight(employee.profile.address, $route.query.filter)"></div>
      <div>{{ employee.start_date | date }}</div>
      <div>{{ employee.performance_index }}</div>
      <div v-html="$options.filters.highlight(employee.profile.about, $route.query.filter)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["items"],

  data: () => ({
  
    }),
};
</script>

<style lang="scss"  scoped>
////////////////////////////
// USER LIST STYLE
.c-users-list {
  display: table;
  width: 100%;
  margin-bottom: 24px;
  font-size: 14px;

  &__header {
    display: table-row;
    font-size: 16px;
    font-weight: 500;
    background-color: #e5e9f1;

    > div {
      display: table-cell;
      text-align: center;
      vertical-align: middle;
      font-size: 14px;
    }
  }

  &__body {
    display: table-row;
    height: 64px;

    > div {
      display: table-cell;
      padding: 0 8px;
      vertical-align: middle;
    }
  }

  &__avatar {
    width: 32px;
    height: 32px;
    margin-right: 8px;
    border-radius: 50%;
  }

  &__main-info {
    display: flex;
    align-items: center;
  }
}
</style>