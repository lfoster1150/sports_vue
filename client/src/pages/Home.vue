<template>
<v-container>
  <v-container v-if="!authenticated && !user" class="login-container">
    <Login />
  </v-container>
  <v-container>
    <p class="text-h5 text--primary">
      Choose A Country To See Leagues:
    </p>
  </v-container>
  <v-container fluid class="d-flex .flex-row flex-wrap">
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
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data: () => ({
    countries: [
      {name: "England", code: "gb" },
      {name: "Spain", code: "es" },
      {name: "Germany", code: "de" },
      {name: "Italy", code: "it" },
      {name: "France", code: "fr" },
      {name: "United States", code: "us" },
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
    async selectCountry(code) {
      this.$router.push(`/country/${code}`)
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