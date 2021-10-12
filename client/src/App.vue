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
export default {
  name: 'App',

  components: {
    Nav
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped>
/* .v-main {
  background-color: black;
} */
</style>
