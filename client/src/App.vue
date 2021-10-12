<template>
  <v-app>
    <Nav
      :authenticated="authenticated"
      :user="user"
      @handleLogOut="handleLogOut"
    />
    <v-main>
      <v-container fluid>
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Nav from './components/Nav.vue'
import {CheckSession} from './services/Auth'
export default {
  name: 'App',

  components: {
    Nav
  },
  mount() {
    const token = localStorage.getItem('token')
    if (token) {
      this.checkToken()
    }
  },
  data: () => ({
    authenticated: false,
    user: null
  }),
  methods: {
    async checkToken() {
      const session = await CheckSession()
      this.user = session
      this.authenticated = true
    },
    handleLogout() {
      console.log("Logging Out")
    }
    
  }
};
</script>

<style scoped>

</style>
