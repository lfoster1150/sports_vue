import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  authenticated: false
}

const mutations = {
  setUser(state, user) {
    state.user = user
  }
}

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions
})
