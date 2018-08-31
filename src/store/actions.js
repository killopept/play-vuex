const actions = {
    increment(submit) {
        submit.commit('increment') // 与 store 实例具有相同方法和属性的submit对象
        // window.console.log(submit) 
    },
    decrement({commit}) {
        commit('decrement')
    },
    incrementIfOdd({ commit, state }) {
        // state.count += 5
        if((state.count + 1) % 2 === 0){
            commit('increment')
        }
    },
    incrementAsync( {commit} ) {
        setTimeout(()=>{
            commit('increment')
        },1000)
    }
}
export default actions