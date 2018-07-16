<template>
  <div id="app">
    <navbar></navbar>
    <!-- <clock></clock> -->
    <todoist-project></todoist-project>
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
      Clock,
      TodoistProject
    }
  }
</script>

<style lang="scss">
  @import "./assets/scss/mirror.scss";
  @import "./assets/scss/fonts.scss";
  @import "~bootstrap/scss/bootstrap";
  
</style>
