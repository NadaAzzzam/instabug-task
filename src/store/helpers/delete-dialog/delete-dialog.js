const deleteDialog = {
    state: {
        isDeleteDialogShow: false
    },
    mutations: {
        SET_DELETE_DIALOG(state,isDeleteDialogShow,) {
            state.isDeleteDialogShow = isDeleteDialogShow;
        },
       
    },
    actions:{
        toggleDeleteDialog({commit},value){
            commit("SET_DELETE_DIALOG",value);


        }
    },

    getters: {
        getDeleteDialogValue: state => {return state.isDeleteDialogShow},

    }
};
export default deleteDialog;
