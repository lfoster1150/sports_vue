<template>
<v-container>
  <v-container class="login-container">
    <Login />
  </v-container>
</v-container>
  
</template>

<script>
import Login from '../components/Login.vue'
export default {
  name: 'Home',
  components: {
    Login
  },
}
</script>

<style scoped>
  .login-container {
    border: white 2px solid;
    border-radius: 10px;
    padding: 1.5em;
  }

</style>