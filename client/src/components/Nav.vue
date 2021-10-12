<template>
  <div>
    <v-app-bar
        app
        color="#1E1E1E"
        dark
      >
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-home</v-icon>
      </v-btn>
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
        <v-list-item @click="goToUserPage">
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
            <router-link to="/teams">
              <v-list-item>Teams</v-list-item>
            </router-link>
            <router-link to="/players">
              <v-list-item>Players</v-list-item>
            </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  data: () => ({
      drawer: false,
      group: null,
    }),
  watch: {
    group () {
        this.drawer = false
      },
    },
}
</script>
