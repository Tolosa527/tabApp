<template>
  <v-layout pa-3 mb-2>
    <v-flex xs4 offset-xs4>
      <div class="white elevation-3">
        <v-toolbar flat dense class="cyan" dark>
          <v-toolbar-title> Register
          </v-toolbar-title>
        </v-toolbar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-text-field type="text" v-model="email" placeholder="email" ></v-text-field>
          <br>
          <v-text-field type="text" v-model="password" placeholder="password" ></v-text-field>
          <br>
          <div class="error" v-html="error"></div>
          <v-btn class="cyan" @click='register'>Register</v-btn>
        </div>
      </div>
    </v-flex>
  </v-layout>
</template>
<script>
import AuthenticationService from '../../../server/src/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  methods: {
    async register () {
      try {
        await AuthenticationService.register({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .error {
    color: red
  }
</style>
