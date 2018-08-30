import Vue from 'vue'
import Vuex from 'vuex'

// import state from './store/state.js'
import { state } from './store/state.js'
import  mutations from './store/mutations.js'

Vue.use(Vuex)



export default new Vuex.Store({
  state,
  mutations,
  actions: {
    increment(submit) {
      submit.commit('increment'); // 与 store 实例具有相同方法和属性的submit对象
      // window.console.log(submit)
    },
    decrement({commit}) {
      commit('decrement')
    },
    incrementIfOdd({ commit, state }) {
      if((state.count + 1) % 2 === 0){
        commit('increment')
      }
    },
    incrementAsync( {commit} ) {
      setTimeout(()=>{
        commit('increment')
      },1000)
    }
  },
  getters:{
    evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
  }
})
