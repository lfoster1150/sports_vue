<template>
  <v-container>
    <template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          v-model="existingUser.email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          v-model="existingUser.password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[value => !!value || 'Password is required']"
          :type="show ? 'text' : 'password'"
          label="Password"
          @click:append="show = !show"
        ></v-text-field>

        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate"
        >
          Login
        </v-btn>
        <v-subheader v-if="loginFailed" class="error--text">Login Failed</v-subheader>
      </v-form>
    </template>
  </v-container>
</template>

<script>
import { SignInUser } from "../services/Auth"
export default {
  name: "Login",
  data: () => ({
      show: false,
      valid: true,
      loginFailed: false,
      existingUser: {
        email: '',
        password: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
  }),
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.login()
      }
    },
    async login() {
      const payload = await SignInUser(this.existingUser)
      if (payload){
        this.existingUser = { email: '', password: '' }
        this.loginFailed = false;
        this.handeLogIn(payload, true)
      }
      this.loginFailed = true;
      // props.history.push('/feed')
    },
    handeLogIn(user, isAuthenticated) {
      this.$emit('handleLogIn', user, isAuthenticated)
    },
  }
}
</script>