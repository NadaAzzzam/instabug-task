import Vue from "vue";
import VueRouter from "vue-router";
import SalesTeamList from "../views/SalesTeam/SalesTeamList.vue";
import PageNotFound from "@/components/AppPageNotFound.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "",
    redirect: "/GetAll/SalesTeam",
  },
  {
    path: "/GetAll/SalesTeam",
    name: "get-sales-team",
    meta: {
      title: "Sales Team List",
    },
    component: SalesTeamList,
  },
  {
    path: "/GetAll/SalesTeamPerformance",
    name: "get-sales-team-performance",
    meta: {
      title: "Sales Team Performance",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SalesTeam/SalesTeamPerformance.vue"),
  },
  // and finally the default route, when none of the above matches:
  { path: "*", component: PageNotFound, meta: {
    title: "Not Found ",
  }, },
];

const router = new VueRouter({
  routes,
  mode: "history",
  base: process.env.BASE_URL,

  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});
router.afterEach((to) => {
  setTimeout(() => {
    // store.dispatch("toggleHidePreloader");
  }, 350);
  setTimeout(() => {
    const nearestWithTitle = to.matched
      .slice()
      .reverse()
      .find((r) => r.meta && r.meta.title);
    if (nearestWithTitle) document.title = nearestWithTitle.meta.title;
  });
});
export default router;
