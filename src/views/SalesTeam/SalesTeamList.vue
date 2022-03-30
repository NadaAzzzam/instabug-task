<template>
  <div class="c-dashboard">
        <div class="c-filters__container">
    <AppListSearchInput/>
  </div>
      <AppList/>

       <div class="c-dashboard__footer">
    <button class="btn btn--primary">
      Load More
    </button>
  </div>
  </div>
</template>

<script >
import AppList from "@/components/AppList.vue";
import AppListSearchInput from "@/components/AppListSearchInput.vue";

export default {
  components: { AppList,AppListSearchInput },

}
</script>

<style lang="scss"  scoped>

////////////////////////////
// Dashboard LIST STYLE
.c-dashboard {
  margin: 8px 16px;

  &__header {
    display: flex;
    justify-content: center;
  }

  &__footer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
}


////////////////////////////
// Filters LIST STYLE
.c-filters__container {
  margin: 0 0 8px;
  padding: 16px 8px;
  border: 1px solid #dcdee3;
  background-color: #e5e9f1;
}

</style>