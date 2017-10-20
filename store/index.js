import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      item: {}
    },
    mutations: {
      SET_ITEM (state, item) {
        state.item = item
      }
    }
  })
}

export default createStore