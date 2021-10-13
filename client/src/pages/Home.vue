<template>
<v-container>
  <v-container v-if="!authenticated && !user" class="login-container">
    <Login />
  </v-container>
  <v-container>
    <p class="text-h5 text--primary">
      Choose A Country To See Leagues:
    </p>
    <CountryCard 
      v-for="country in countries"
      :key="country.code"
      :country="country"
      @selectCountry="selectCountry"
    />
  </v-container>
</v-container>
  
</template>

<script>
import Login from '../components/Login.vue'
import CountryCard from '../components/CountryCard.vue'
import { GetLeaguesByCountryCode } from '../services/FootballApiServices'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    countries: [
      {name: "England", code: "gb" }
    ]
  }),
  components: {
    Login,
    CountryCard
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
  methods: {
    getLeagues() {
      // const leagues = GetLeagues()
      // console.log(leagues)
      // this.leagues = getLeagues
    },
    async selectCountry(code) {
      const leagues = await GetLeaguesByCountryCode(code)
      console.log(leagues)
    }
  },
  mounted() {
    this.getLeagues()
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