<template>
  <div id="app">
    <page-header />
    <!-- <img src="./assets/logo.png"> -->
    <router-view/>
  </div>
</template>

<script>
import PageHeader from '@/components/Header.vue'
export default {
  name: 'App',
  components: {
    PageHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-btn__content{
  color:white;
}
.v-toolbar__title{
  font-style: italic;
  font-weight: bold;
}
.layout{
  margin-top: 50px;
}
.signBtn{
  color: white;
}
</style>
