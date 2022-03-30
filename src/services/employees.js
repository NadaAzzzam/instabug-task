import endpoints from "../common/endpoints";
import http from "../common/http";
const employeesUrl = endpoints.EMPLOYESS;

export default {
  getAll() {
    return http
      .get(employeesUrl)
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
