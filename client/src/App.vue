<template>
  <div id="app">
    <navbar></navbar>
    <router-view></router-view>
  </div>
</template>

<script>
  import Navbar from './components/Navbar'
  import Clock from './components/Clock'
  import TodoistProject from './components/Todoist/TodoistProject'
  export default {
    name: 'app',
    components: {
      Navbar,
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/mirror.scss";
  @import "./assets/scss/fonts.scss";
  @import "~bootstrap/scss/bootstrap";
  
</style>
