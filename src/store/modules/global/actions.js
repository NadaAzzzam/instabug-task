import global from "../../../services/global";



export default {
  getGrades({ commit }) {
    return new Promise((resolve, reject) => {
      global
        .getGrades()
        .then((resp) => {
            commit("SET_GRADES",  resp.response.data);
            resolve( resp.response.data);
          
        })
        .catch((resp) => {
       
          return reject(resp);
        });
    });
  },
 
};
