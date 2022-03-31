import employees from "../../../services/employees";



export default {
  getAll({ commit }) {
    return new Promise((resolve, reject) => {
      employees
        .getAll()
        .then((resp) => {
          console.log( resp.data.employees);
            commit("SET_EMPLOYEES",  resp.data.employees);
            resolve(  resp.data.employees);
          
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
