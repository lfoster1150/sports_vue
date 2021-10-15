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
  user() {
    return state.user
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
  setUserTeams(context, teams) {
    state.userFavoriteTeams = teams
  },
  setUserPlayers(context, players) {
    state.userFavoritePlayers = players
  },
  addTeamToUserFavorites(state, team) {
    state.userFavoriteTeams.push(team)
  },
  addPlayerToUserFavorites(state, player) {
    state.userFavoriteTeams.push(player)
  }
}

const actions = {
  setUser(context, user) {
    context.commit('setUser', user)
  },
  toggleAuthenticated(context, authenticated) {
    context.commit('toggleAuthenticated', authenticated)
  },
  setUserTeams(context, teams) {
    context.commit('setUserTeams', teams)
  },
  setUserPlayers(context, players) {
    context.commit('setUserPlayers', players)
  },
  addTeamToUserFavorites(context, team) {
    context.commit('addTeamToUserFavorites', team)
  },
  addPlayerToUserFavorites(context, player) {
    context.commit('addPlayerToUserFavorites', player)
  },
  // API ACTIONS
  FETCH_QUERY_BY_LEAGUE_ID: async (_, id) => {
    const res = await FootballClient.get(
      `${BASE_URL}/teams?league=${id}&&season=2021`
    )
    return res.data.response
  },

  FETCH_QUERY_BY_TEAM_ID: async (_, id) => {
    let finalResult = null
    const res = await FootballClient.get(
      `${BASE_URL}/players?season=2021&team=${id}&season=2021`
    )
    finalResult = res.data.response
    if (res.data.paging.total > 1) {
      for (let i = 2; i <= res.data.paging.total; i++) {
        const nextPageRes = await FootballClient.get(
          `${BASE_URL}/players?season=2021&team=${id}&season=2021&page=${i}`
        )
        finalResult.push(...nextPageRes.data.response)
      }
    }
    finalResult = finalResult.sort((a, b) => {
      const aAppears = a.statistics[0].games.appearences
      const bAppears = b.statistics[0].games.appearences
      return bAppears - aAppears
    })
    return finalResult
  }
}

export default new Store({
  state,
  plugins: [createCache()],
  mutations,
  actions,
  getters
})
