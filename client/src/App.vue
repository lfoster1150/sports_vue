<template>
  <v-app>
    <Nav />
    <v-main>
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
    const token = localStorage.getItem('token')
    if (token) {
      this.checkToken(token)
    }
  },
  methods: {
    ...mapActions(['setUser','toggleAuthenticated']),
    async checkToken(token) {
      const session = await CheckSession(token)
      this.setUser(session)
      this.toggleAuthenticated(true)
    },
    setUserInState(user) {
      this.setUser(user)
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
