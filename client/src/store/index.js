import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  user: null,
  authenticated: false,
  footballQueries: []
}

const getters = {
  isAuthenticated() {
    return state.authenticated
  },
  getFootballQueriesByCountry: state => id => {
    return state.footballQueries.find(query => query.parameters.code === id)
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  toggleAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  },
  addQuery(state, query) {
    state.footballQueries.append(query)
  }
}

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  },
  toggleAuthenticated(context, authenticated) {
    context.commit('toggleAuthenticated', authenticated)
  },
  addQuery(context, query) {
    context.commit('addQuery', query)
  }
}

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters
})
