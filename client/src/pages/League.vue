<template>
  <v-container fluid class="d-flex flex-row flex-wrap">
      <!-- <LeagueCard
        v-for="league in leagues"
        :key="league.id"
        :league="league"
        @selectLeague="selectLeague"
      /> -->
  </v-container>
</template>

<script>
import { GetTeamsByLeagueId } from '../services/FootballApiServices'
import { mapState, mapGetters, mapActions } from 'vuex'
import { mapCacheActions } from 'vuex-cache';

// import TeamCard from '../components/TeamCard.vue'
export default {
  name: 'League',
  data: () => ({
    teams: null,
    queryExists: true,
    queryFromCache: null
  }),
  components: {
    // TeamCard
  },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
      footballQueries: state => state.footballQueries,
    }),
    ...mapGetters([
      'getFootballQueriesByLeagueId'
    ]),
    query: function () {
      return this.getFootballQueriesByLeagueId(this.$route.params.league_id)
    },
  },
    watch: {
      queryExists() {
          const query = this.getFootballQueriesByLeagueId(this.$route.params.league_id)
          this.checkQuery(query)
      }
    },
  methods: {
    ...mapActions(['addQuery','fetchFootballQueriesByLeagueId']),
    ...mapCacheActions(['FETCH_QUERY_BY_LEAGUE_ID']),
    async getLeagueTeams(leagueId) {
      leagueId = leagueId.toString()
      try {
        const teams = await GetTeamsByLeagueId(leagueId)
        this.addQuery(teams)
        this.teams = teams.response
      } catch (error) {
        console.log(error)
      }
    },
    async selectLeague(leagueId) {
      this.$router.push(`/league/${leagueId}`)
    },
    checkQuery(query){
      if (query) {
        console.log("Query found")
        this.teams = query.response
      } else {
        console.log("Query not found")
        this.getLeagueTeams(this.$route.params.league_id)
      }
    }
  },
  async mounted() {
    this.queryFromCache = await this.$store.dispatch('FETCH_QUERY_BY_LEAGUE_ID', this.$route.params.league_id)
    if(this.queryFromCache) {
      console.log("QueryFound")
      console.log(this.queryFromCache)
    } {
      console.log("QueryNotFound")
      this.getLeagueTeams(this.$route.params.league_id)
    }
  }

}
</script>