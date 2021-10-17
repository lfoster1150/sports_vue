<template>
  <v-container fluid class="d-flex flex-row flex-wrap justify-space-around">
    <TeamCard
      v-for="team in teams"
      :key="team.team.id"
      :team="team.team"
      @selectTeam="selectTeam"
      @favoriteTeam="favoriteTeam"
    />
  </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'
import { mapCacheActions } from 'vuex-cache';
import {AddTeamToUser} from '../services/TeamServices'
import TeamCard from '../components/TeamCard.vue'

export default {
  name: 'League',
  data: () => ({
    teams: null
  }),
  components: {
    TeamCard
  },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
      userFavoriteTeams: state => state.userFavoriteTeams,
    })
  },
  methods: {
    ...mapActions(['addTeamToUserFavorites']),
    ...mapCacheActions(['FETCH_QUERY_BY_LEAGUE_ID']),
    async getLeagueTeams(leagueId) {
      let results = await this.FETCH_QUERY_BY_LEAGUE_ID(leagueId)
      this.teams = results
    },
    selectTeam(teamId) {
      this.$router.push(`/team/${teamId}`)
    },
    async favoriteTeam(team) {
      const data = {
        "name": team.name,
        "image": `https://media.api-sports.io/football/teams/${team.id}.png`,
        "api_id": team.id,
        "user_id": this.user.id
      }
      const res = await AddTeamToUser(data)
      this.addTeamToUserFavorites(res.data.payload)
    }
  },
  async mounted() {
    this.getLeagueTeams(this.$route.params.league_id)
  }

}
</script>