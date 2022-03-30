import endpoints from "../../common/endpoints";
import http from "../../common/http";
const activityUrl = endpoints.ACTIVITIES_ENDPOINT;

export default {
  getAll(data) {
    return http
      .get(activityUrl, {
        params: {
          page:  data&&data.page? data.page:null,
        },
      })
      .then((res) => {
        return res;
      });
  },
  getById(id) {
    return http.get(`${activityUrl}/${id}`).then((res) => {
      return res;
    });
  },
  delete(id) {
    return http
      .delete(`${activityUrl}/${id}`)
      .then((res) => {
        return res;
      });
  },
  update(id, body) {
     
    return http.post(`${activityUrl}/${id}`, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        "enctype":"multipart/form-data",
      }
    }).then((res) => {
      return res;
    });
  },
  add(body) {
    return http.post(activityUrl, body, {
      headers: {
        "Content-Type": "multipart/form-data",
        "enctype":"multipart/form-data",
      }
    }).then((res) => {
      return res;
    });
  },
};
