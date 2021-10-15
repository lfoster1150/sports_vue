<template>
  <v-container>
    <!-- UPDATE USER INFO -->
    <template>
      <v-form
        ref="form"
        v-model="validInfo"
        lazy-validation
      >
        <v-text-field
          v-model="updateInfo.name"
          label="Name"
        ></v-text-field>
        <v-text-field
          v-model="updateInfo.email"
          :rules="emailRules"
          label="Email"
        ></v-text-field>
        <v-btn
          :disabled="!validInfo"
          color="success"
          @click="validate"
        >
          Update Info
          </v-btn>
      </v-form>
    </template>



    <!-- UPDATE USER PASSWORD -->
    <template>
      <v-form
        ref="form"
        v-model="validPassword"
        lazy-validation
      >
        <v-text-field
          v-model="updatePassword.newPassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[value => !!value || 'Old Password is required']"
          :type="show1 ? 'text' : 'password'"
          label="Old Password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-text-field
          v-model="updatePassword.newPassword"
          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
          :rules="[value => !!value || 'New Password is required']"
          :type="show1 ? 'text' : 'password'"
          label="New Password"
          @click:append="show1 = !show1"
        ></v-text-field>
        <v-btn
          :disabled="!validPassword"
          color="success"
          @click="validate"
        >
          Update Password
        </v-btn>
      </v-form>
      
    </template>
  </v-container>
</template>

<script>
import {RegisterUser} from '../services/Auth'
export default {
  name: "Register",
  data: () => ({
      show1: false,
      show2: false,
      validPassword: true,
      validInfo: true,
      updatePassword: {
        oldPassword: '',
        newPassword: ''
      },
      updateInfo: {
        name: '',
        email: '',
      },
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
    }),

    methods: {
      validate () {
        if (this.$refs.form.validate()) {
          RegisterUser({...this.newUser})
          this.newUser = {name: '',email: '',password: ''}
          this.$router.push(`/`)
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
    margin-top: 1em;
  }
</style>