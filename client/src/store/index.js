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
    state.userFavoritePlayers.push(player)
  },
  removeTeamFromUserFavorites(state, teamId) {
    state.userFavoriteTeams = state.userFavoriteTeams.filter(
      a => parseFloat(a.id) != parseFloat(teamId)
    )
  },
  removePlayerFromUserFavorites(state, playerId) {
    state.userFavoritePlayers = state.userFavoritePlayers.filter(
      a => parseFloat(a.id) != parseFloat(playerId)
    )
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
  removeTeamFromUserFavorites(context, teamId) {
    context.commit('removeTeamFromUserFavorites', teamId)
  },
  removePlayerFromUserFavorites(context, playerId) {
    context.commit('removePlayerFromUserFavorites', playerId)
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
    let leagueId = 0
    let league = await FootballClient.get(
      `${BASE_URL}/leagues?season=2021&team=${id}`
    )
    league = league.data.response.filter(a => {
      if (a.league.type === 'League') {
        return a
      }
    })
    if (league.length) {
      leagueId = league[0].league.id
    }
    const data = await FootballClient.get(
      `https://v3.football.api-sports.io/teams/statistics?league=${leagueId}&season=2021&team=${id}`
    )
    const res = await FootballClient.get(
      `${BASE_URL}/players?season=2021&team=${id}`
    )
    finalResult = res.data.response
    if (res.data.paging.total > 1) {
      for (let i = 2; i <= res.data.paging.total; i++) {
        const nextPageRes = await FootballClient.get(
          `${BASE_URL}/players?season=2021&team=${id}&page=${i}`
        )
        finalResult.push(...nextPageRes.data.response)
      }
    }
    finalResult = finalResult.sort((a, b) => {
      const aAppears = a.statistics[0].games.appearences
      const bAppears = b.statistics[0].games.appearences
      return bAppears - aAppears
    })
    return {
      players: finalResult,
      data: data
    }
  }
}

export default new Store({
  state,
  plugins: [createCache()],
  mutations,
  actions,
  getters
})
