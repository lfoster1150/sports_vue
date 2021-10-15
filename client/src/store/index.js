import Vue from 'vue'
import Vuex, { Store } from 'vuex'
import createCache from 'vuex-cache'
import FootballClient from '../services/FootballApi'
const BASE_URL = `https://v3.football.api-sports.io`

Vue.use(Vuex)

const state = {
  user: null,
  authenticated: false,
  userFavoriteTeams: [],
  userFavoritePlayers: []
}

const getters = {
  isAuthenticated() {
    return state.authenticated
  },
  userTeams() {
    return state.userFavoriteTeams
  }
}

const mutations = {
  setUser(state, user) {
    state.user = user
  },
  toggleAuthenticated(state, authenticated) {
    state.authenticated = authenticated
  },
  addTeamToUserFavorites(state, team) {
    state.userFavoriteTeams.push(team)
  }
}

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  },
  toggleAuthenticated(context, authenticated) {
    context.commit('toggleAuthenticated', authenticated)
  },
  addTeamToUserFavorites(context, team) {
    context.commit('addTeamToUserFavorites', team)
  },

  // API ACTIONS
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
