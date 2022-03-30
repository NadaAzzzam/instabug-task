const spinner = {
    state: {
        spinner: false
    },
    mutations: {
        TOGGLE_SHOW(state) {
            state.spinner = true;
        },
        TOGGLE_HIDE(state) {
            state.spinner = false;
        }
    },
    actions: {
        toggleShow({commit}) {
            commit("TOGGLE_SHOW");
        },
        toggleHide({commit}) {
            commit("TOGGLE_HIDE");
        }
    },
    getters: {
        getSpinner: state => state.spinner
    }
};
export default spinner;
