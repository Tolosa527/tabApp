<template>
  <v-toolbar color="cyan">
    <v-toolbar-title class="white--text">
      <span @click="navegateTo({name: 'root'})" >TabTracker</span>
    </v-toolbar-title>
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click="navegateTo({name: 'register'})" flat dark>Sign in</v-btn>
      <v-btn @click="navegateTo({name: 'login'})" flat dark>Login</v-btn>
    </v-toolbar-items>
   </v-toolbar>
</template>

<script>
export default {
  methods: {
    navegateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>

<style lang="css" scoped>
</style>
