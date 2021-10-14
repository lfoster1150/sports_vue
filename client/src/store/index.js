import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createCache from 'vuex-cache'
import FootballClient from '../services/FootballApi'
const BASE_URL = `https://v3.football.api-sports.io`

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
  },
  getFootballQueriesByLeagueId: state => id => {
    const query = state.footballQueries.find(
      query => query.parameters.league === id
    )
    return query
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
    state.footballQueries = query
  },
  setQuery(state, query) {
    state.query = query
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
  },
  FETCH_QUERY_BY_LEAGUE_ID: async (_, id) => {
    const res = await FootballClient.get(
      `${BASE_URL}/teams?league=${id}&&season=2021`
    )
    return res.data.response
  }
}

export default new Store({
  store: state,
  plugins: [createCache()],
  mutations,
  actions,
  getters
})
