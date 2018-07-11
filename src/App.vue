<template>
  <div id="app">
    <navbar></navbar>
    <clock></clock>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Clock from './components/Clock'
  export default {
    name: 'app',
    components: {
      Navbar,
      Clock
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/mirror.scss";
  @import "~bootstrap/scss/bootstrap";
  
</style>
