import Vue from 'vue'
import Vuex from 'vuex'

// import state from './store/state.js'
import { state } from './store/state.js'
import  mutations from './store/mutations.js'
import  actions from './store/actions.js'
import getters from './store/getters.js'
Vue.use(Vuex)



export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
})
