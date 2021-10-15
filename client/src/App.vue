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
import { mapActions, mapState, mapGetters } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav
  },
  async mounted() {
    const token = await this.getToken()
    if (token) {
      await this.checkToken(token)
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
  computed: {
    ...mapState(["user", "authenticated"])
  }
  
  
};
</script>

<style scoped>

</style>
