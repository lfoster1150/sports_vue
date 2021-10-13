<template>
  <div>
    <v-app-bar
        app
        color="#1E1E1E"
        dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>SportsVue</v-toolbar-title>

      <v-spacer></v-spacer>
      <router-link to="/">
        <v-btn icon>
          <v-icon>mdi-home</v-icon>
        </v-btn>
      </router-link>
    <v-menu>
      <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
      </template>
      <v-list>
          <v-list-item @click="goToUserPage(userId)">
            <v-list-item-title>User Page</v-list-item-title>
          </v-list-item>
        <v-list-item @click="signIn">
          <v-list-item-title>Sign In</v-list-item-title>
        </v-list-item>

        <v-list-item @click="signOut">
          <v-list-item-title>Sign Out</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      absolute
      temporary
    >
      <v-list
        nav
        dense
      >
        <v-list-item-group
          v-model="group"
        >      
            <router-link to="/">
              <v-list-item>Home</v-list-item>
            </router-link>
            <router-link to="/register">
              <v-list-item>Register</v-list-item>
            </router-link>
            <router-link to="/login">
              <v-list-item>Login</v-list-item>
            </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'
export default {
  name: "Nav",
  data: () => ({
      drawer: false,
      group: null,
    }),
  watch: {
    group () {
        this.drawer = false
      },
    },
  methods: {
    ...mapActions(['toggleAuthenticated']),
    goToUserPage(userId) {
      this.$router.push(`/user/${userId}`)
    },
    signOut() {
      this.$emit('handleLogOut')
    },
    signIn() {
      this.$router.push(`/login`)
    }
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
}
</script>

<style scoped>
  a {
    text-decoration: none;
  }
  .v-list-item:hover {
    cursor: pointer;
  }
</style>