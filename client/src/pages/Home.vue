<template>
<v-container>
  <v-container v-if="!authenticated && !user" class="login-container">
    <Login />
  </v-container>
</v-container>
  
</template>

<script>
import Login from '../components/Login.vue'
import { mapState } from 'vuex'
export default {
  name: 'Home',
  components: {
    Login
  },
  computed: mapState({
    user: state => state.user,
    authenticated: state => state.authenticated
  }),
}
</script>

<style scoped>
  .login-container {
    border: white 2px solid;
    border-radius: 10px;
    padding: 1.5em;
  }
  
</style>