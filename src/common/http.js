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

    store.dispatch("toggleHide");
    return response.data;
  },
  function(error) {

 
 
  return Promise.reject(error);

}
);

Vue.prototype.$http = base;
export default base;
