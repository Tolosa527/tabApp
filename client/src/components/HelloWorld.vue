<template>
  <div class="message-container">
    <h1 class="messageWelcome">Welcome to <span class="italic-style">TabTracker</span></h1>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.message-container{
  margin-top: 10%;
}
.messageWelcome{
  color: rgb(58, 197, 233);
  font-size: 6em;
}
.italic-style{
  font-style: italic;
}
</style>
