<template>
  <table class="c-users-list">
    <tr class="c-users-list__header">
      <th>Employee</th>
      <th>Email</th>
      <th>Adress</th>
      <th>Start Date</th>
      <th>Performance Index</th>
      <th>About</th>
    </tr>
    <tr
      class="c-users-list__body"
      v-show="!employee.length"
      v-for="(employee, i) in items"
      :key="i + 'user-list'"
    >
      <td>
        <div class="c-users-list__main-info">
          <img
            class="c-users-list__avatar"
            :src="employee.profile.avatar"
            :alt="employee.profile.name"
          />
          <div v-html="$options.filters.highlight(employee.profile.name, $route.query.filter)"></div>
        </div>
      </td>
      <td >{{ employee.email }}</td>
      <td v-html="$options.filters.highlight(employee.profile.address, $route.query.filter)"></td>
      <td>{{ employee.start_date | date }}</td>
      <td>{{ employee.performance_index }}</td>
      <td v-html="$options.filters.highlight(employee.profile.about, $route.query.filter)"></td>
    </tr>
  </table>
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