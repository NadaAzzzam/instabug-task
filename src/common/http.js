import Vue from "vue";
import axios from "axios";
import store from "../store";
import endpoints from "./endpoints";

const $domain_api = endpoints.API_URL;

const base = axios.create({
  baseURL: $domain_api,
  headers: 
     {
        "localization-x":
          localStorage.getItem("direction") == "rtl" ? "ar" : "en",
          "Accept":"application/json"
      }
  
});

// before a request is made start the nprogress
base.interceptors.request.use((config) => {
  store.dispatch("toggleShowPreloader");

  return config;
});

base.interceptors.response.use(
  function(response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    store.dispatch("toggleShowPreloader");

    if (response.config.method == "post") {
      if (response.config && response.config.url.indexOf("login")) {
        store.commit("SHOW_MESSAGE", {
          text: "Added Successfully",
          color: "success",
          timeout: 3500,
        });
      }
    }

    if (response.config.method == "delete") {
      store.commit("SHOW_MESSAGE", {
        text: "Deleted Successfully",
        color: "success",
        timeout: 3500,
      });
    }
    store.dispatch("toggleHide");
    return response.data.response;
  },
  function(error) {

 

    store.dispatch("toggleHidePreloader");
    if (error.response&&error.response.data.errors.length) {
      store.commit("SHOW_MESSAGE", {
        text: error.response.data.errors[0],
        color: "red darken-2",
        timeout: 3500,
      });
    } else {
      store.commit("SHOW_MESSAGE", {
        text: error.response.data.message,
        color: "red darken-2",
        timeout: 3500,
      });

  }
 
  return Promise.reject(error.response.data);

}
);

Vue.prototype.$http = base;
export default base;
