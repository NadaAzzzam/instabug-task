import endpoints from "../common/endpoints";
import http from "../common/http";
const employeesUrl = endpoints.EMPLOYESS;
const performanceUrl = endpoints.PERFORMANCE;

export default {
  getAll(isPartTime,page) {
    return http
      .get(employeesUrl,{
        params:{
          isPartTime:isPartTime ,
          page:page 
        }
      })
      .then((res) => {
        return res;
      });
  },
  getPerformance() {
    return http
      .get(performanceUrl)
      .then((res) => {
        return res;
      });
  },
  getById(id) {
    return http.get(`${employeesUrl}/${id}`).then((res) => {
      return res;
    });
  },
 
};
