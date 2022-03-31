import employees from "../../../services/employees";



export default {
  getAll({ commit },filters ) {
    return new Promise((resolve, reject) => {
      employees
        .getAll(filters.isPartTime,filters.page)
        .then((resp) => {
            commit("SET_EMPLOYEES",  resp.data);
            resolve(  resp.data);
          
        })
        .catch((err) => {
       
          return reject(err);
        });
    });
  },
  getPerformance({ commit }) {
    
    return new Promise((resolve, reject) => {
      employees
        .getPerformance()
        .then((resp) => {
      

            commit("SET_PERFORMANCE",  resp.data);
            resolve(  resp.data);
          
        })
        .catch((err) => {
       
          return reject(err);
        });
    });
  },
 
};
