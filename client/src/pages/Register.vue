<template>
  <v-container>
    <template>
      <v-form
        ref="form"
        v-model="valid"
        lazy-validation
      >
        <v-text-field
          name="name"
          :value="newUser.name"
          v-model="name"
          :counter="10"
          :rules="[v => !!v || 'Name is required']"
          label="Name"
          required
        ></v-text-field>

        <v-text-field
          name="email"
          :value="newUser.email"
          v-model="email"
          :rules="emailRules"
          label="Email"
          required
        ></v-text-field>

        <v-text-field
          name="password"
          :value="newUser.password"
          v-model="password"
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
          Register
        </v-btn>

        <v-btn
          color="error"
          class="mr-4"
          @click="reset"
        >
          Reset Form
        </v-btn>
      </v-form>
    </template>
  </v-container>
</template>

<script>
import {RegisterUser} from '../services/Auth'
export default {
  data: () => ({
      show: false,
      valid: true,
      newUser: {
        name: '',
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
          RegisterUser(this.newUser)
        }
      },
      reset () {
        this.$refs.form.reset()
      },
      resetValidation () {
        this.$refs.form.resetValidation()
      },
    },
}
</script>

<style scoped>
  .v-btn {
    margin-right: 1em;
  }
</style>