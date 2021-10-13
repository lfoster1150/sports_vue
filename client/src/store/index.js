import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  authenticated: false
}

const getters = {
  isAuthenticated() {
    return state.authenticated
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  toggleAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  }
}

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  },
  toggleAuthenticated(context, authenticated) {
    context.commit('toggleAuthenticated', authenticated)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
