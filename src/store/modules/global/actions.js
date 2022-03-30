import employees from "../../../services/employees";



export default {
  getAll({ commit }) {
    return new Promise((resolve, reject) => {
      employees
        .getAll()
        .then((resp) => {
          console.log( resp.employees);
            commit("SET_EMPLOYEES",  resp.employees);
            resolve(  resp.employees);
          
        })
        .catch((err) => {
       
          return reject(err);
        });
    });
  },
 
};
