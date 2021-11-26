import { createStore } from 'vuex'

export default createStore({
  state: {
    Counter: 0
  },
  mutations: {
    addNumber(state,number){
      state.Counter += number;
    },
    minusNumber(state,number){
      state.Counter -= number;
    }
  },
  actions: {
  },
  modules: {
  }
})
