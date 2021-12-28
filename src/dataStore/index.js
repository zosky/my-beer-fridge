import { createStore } from 'vuex'

const state = {
  myBeer: {}
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  addBeer(state, newBrew) { 
    const myBeer = state.myBeer
    const brewer = newBrew[0].trim()
    const beer = newBrew[1].trim()
    myBeer[brewer] = myBeer?.[ brewer ] ?? {}
    if (myBeer[brewer][beer]) myBeer[brewer][beer]++
    else myBeer[brewer][beer] = 1
  },
  rmBeer(state, newBrew) {
    const myBeer = state.myBeer
    const brewer = newBrew[0].trim()
    const beer = newBrew[1].trim()
    const thisBeer = myBeer[ brewer ][beer] 
    thisBeer > 1 ? myBeer[ brewer ][beer]-- 
      : delete myBeer[brewer][beer]
    if(!Object.keys(myBeer[brewer]).length)
      delete myBeer[brewer]
  }

}

// actions are functions that cause side effects and can involve
// asynchronous operations.
// const actions = {
//   increment: ({ commit }) => commit('increment'),
//   decrement: ({ commit }) => commit('decrement'),
//   incrementIfOdd ({ commit, state }) {
//     if ((state.count + 1) % 2 === 0) {
//       commit('increment')
//     }
//   },
//   incrementAsync ({ commit }) {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => {
//         commit('increment')
//         resolve()
//       }, 1000)
//     })
//   }
// }

// getters are functions.
// const getters = {
//   evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
// }

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.
export default createStore({
  state,
  // getters,
  // actions,
  mutations
})