<template>
<v-container>
  <v-container v-if="!authenticated && !user" class="login-container">
    <Login />
  </v-container>
  <v-container>
    <p class="text-h5 text--primary">
      Top Leagues:
    </p>
    <LeagueCard
        v-for="league in leagues"
        :key="league.id"
        :league="league"
        @selectLeague="selectLeague"
      />
  </v-container>
  <v-container fluid class="d-flex .flex-row flex-wrap">

  </v-container>
</v-container>
  
</template>

<script>
import Login from '../components/Login.vue'
import { mapState } from 'vuex'
import LeagueCard from '../components/LeagueCard.vue'
export default {
  name: 'Home',
  data: () => ({
    leagues: [
      {name: "Premier League", id: "39", location: "England" },
      {name: "Championship", id: "40", location: "England" },
      {name: "La Liga", id: "140", location: "Spain"},
      {name: "Segunda Division", id: "141", location: "Spain"},
      {name: "Bundesliga 1", id: "78", location: "Germany"},
      {name: "Bundesliga 2", id: "79", location: "Germany"},
      {name: "Serie A", id: "135", location: "Italy"},
      {name: "Serie B", id: "136", location: "Italy"},
      {name: "Ligue 1", id: "61", location: "France"},
      {name: "Ligue 2", id: "62", location: "France"},
      {name: "Major League Soccer", id: "253", location: "United States"},
    ]
  }),
  components: {
    Login,
    LeagueCard
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
  methods: {
    async selectLeague(leagueId) {
      this.$router.push(`/league/${leagueId}`)
    }
  }
}
</script>

<style scoped>
  .login-container {
    border: white 2px solid;
    border-radius: 10px;
    padding: 1.5em;
  }
  
</style>