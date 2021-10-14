<template>
<v-container>
    <LeagueCard
      v-for="league in leagues"
      :key="league.id"
      :league="league"
      @selectCountry="selectCountry"
    />
  
</v-container>
</template>

<script>
import { GetLeaguesByCountryCode } from '../services/FootballApiServices'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    leagues: null
  }),
  components: {
    // LeagueCard
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
  methods: {
    async getCountryLeagues(code) {
      const leagues = await GetLeaguesByCountryCode(code)
      this.leagues = leagues//.response.splice(0,10)
    }
  },
  mounted() {
    this.getCountryLeagues(this.$route.params.code)
  }
}
</script>