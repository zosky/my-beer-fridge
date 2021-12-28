import { createStore } from 'vuex'
import onList from '../assets/onBeerList.json'

const state = {
  myBeer: {},
  onListRAW: onList.map(b=>{ 
    const c = Object.keys(b)
    c.forEach( C => { b[C] = b[C].trim() } )
    return b
  }).filter( b => {
    const B = Object.values(b) 
    return B[0] || B[1] ? true:false 
  })
}

// mutations are operations that actually mutate the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  initBeer(state){
    // 1st update masterList VS myList
    const beer = window.localStorage.getItem('myBeer')
    state.myBeer = (beer) ? JSON.parse(beer) : {}
    const k = Object.keys(state.onListRAW[0])
    state.onListRAW.map(b=>{
      const BR = b[k[1]]
      const BE = b[k[2]]
      b.qty = state.myBeer?.[BR]?.[BE] ?? 0
      return b
    })
  },
  addBeer(state, newBrew) { 
    const myBeer = state.myBeer
    const brewer = newBrew[0]
    const beer = newBrew[1]
    // update myList + save@browser
    myBeer[brewer] = myBeer?.[ brewer ] ?? {}
    if (myBeer[brewer][beer]) myBeer[brewer][beer]++
    else myBeer[brewer][beer] = 1
    window.localStorage.setItem('myBeer', JSON.stringify(myBeer)) 
    // update master list
    const thisBeer = state.onListRAW.find(b=>{
      const B = Object.values(b)
      return B[1] == brewer && B[2] == beer 
    })
    if (thisBeer?.qty) thisBeer.qty++
  },
  rmBeer(state, newBrew) {
    const myBeer = state.myBeer
    const brewer = newBrew[0]
    const beer = newBrew[1]
    // update myList + save@browser
    const thisBeer = myBeer[ brewer ][beer] 
    thisBeer > 1 ? myBeer[ brewer ][beer]-- 
      : delete myBeer[brewer][beer]
    if(!Object.keys(myBeer[brewer]).length)
      delete myBeer[brewer]
    window.localStorage.setItem('myBeer', JSON.stringify(myBeer))
    // update master list
    const masterBeer = state.onListRAW.find(b=>{
      const B = Object.values(b)
      return B[1] == brewer && B[2] == beer 
    })
    if (masterBeer?.qty) masterBeer.qty--
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