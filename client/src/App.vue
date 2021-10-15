<template>
  <v-app>
    <Nav />
    <v-main>
      <h1 v-if="authenticated">Test</h1>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import { CheckSession } from './services/Auth'
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav
  },
  mounted() {
    const token = this.getToken()
    if (token) {
      this.checkToken(token)
    }
  },
  methods: {
    ...mapActions(['setUser','toggleAuthenticated']),
    async getToken() {
      const token = await localStorage.getItem('token')
      return token
    },
    async checkToken(token) {
      const session = await CheckSession(token)
      this.setUser(session)
      this.toggleAuthenticated(true)
    }
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
  
};
</script>

<style scoped>

</style>
