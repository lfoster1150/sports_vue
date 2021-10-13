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
import { mapActions, mapState } from 'vuex'
export default {
  name: 'App',
  components: {
    Nav
  },
  mounted() {
    const token = localStorage.getItem('token')
    if (token) {
      this.checkToken()
    }
    console.log("mount")
  },
  methods: {
    ...mapActions(['setUser']),
    async checkToken() {
      const session = await CheckSession()
      this.user = session
      this.authenticated = true
    },
    handleLogout() {
      console.log("Logging Out")
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
