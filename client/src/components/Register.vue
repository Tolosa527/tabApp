<template>
  <div>
    <h1>Register</h1>
    <input type="text" v-model="email" placeholder="email">
    <br>
    <input type="text" v-model="password" placeholder="password">
    <br>
    <button @click='register'>Register</button>
  </div>
</template>
<script>
import AuthenticationService from '../../../server/src/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
