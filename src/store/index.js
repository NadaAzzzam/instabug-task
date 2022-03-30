import Vue from 'vue'
import Snackbar from './helpers/snackbar/snackbar'
import Spinner from './helpers/spinner/spinner'
import Preloader from './helpers/preloader/preloader'
import DeleteDialog from './helpers/delete-dialog/delete-dialog'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    Spinner,
    Snackbar,
    Preloader,
    DeleteDialog,
  }
})
