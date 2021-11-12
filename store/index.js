import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default Vuex.Store({
  state: {
    currentPage: 'index'
  },
  mutations: {
    setPage(state, data) {
      state.user = data
    },
    clearPage(state) {
      state.user = 'index'
    },
  },
  actions: {
  },
  modules: {
  },
  strict: true
})
