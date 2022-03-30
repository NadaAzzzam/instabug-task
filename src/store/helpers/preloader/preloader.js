const preloader = {
    state: {
        preloader: false
    },
    mutations: {
        TOGGLE_SHOW(state) {
            state.preloader = true;
        },
        TOGGLE_HIDE(state) {
            state.preloader = false;
        }
    },
    actions: {
        toggleShowPreloader({commit}) {
            commit("TOGGLE_SHOW");
        },
        toggleHidePreloader({commit}) {
            commit("TOGGLE_HIDE");
        }
    },
    getters: {
        getPreloader: state => state.preloader

    }
};
export default preloader;
