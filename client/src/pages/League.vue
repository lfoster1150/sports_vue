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
import { mapState } from 'vuex'
import { mapCacheActions } from 'vuex-cache';
// import TeamCard from '../components/TeamCard.vue'

export default {
  name: 'League',
  data: () => ({
    teams: null
  }),
  components: {
    // TeamCard
  },
  computed: {
    ...mapState({
      user: state => state.user,
      authenticated: state => state.authenticated,
      footballQueries: state => state.footballQueries,
    })
  },
  methods: {
    ...mapCacheActions(['FETCH_QUERY_BY_LEAGUE_ID']),
    async getLeagueTeams(leagueId) {
      let results = await this.FETCH_QUERY_BY_LEAGUE_ID(leagueId)
      this.teams = results
    }
  },
  async mounted() {
    this.getLeagueTeams(this.$route.params.league_id)
  }

}
</script>