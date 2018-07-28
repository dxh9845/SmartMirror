<template>
  <div id="app">
    <b-container class="justify-content-between">
      <b-navbar type="dark" fixed="bottom">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <clock></clock>
        <b-navbar-brand class="mr-0" href="#">SmartMirror</b-navbar-brand>  
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item href="#"><i class="far fa-check-circle"></i> Todoist</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
    </b-container>
  </div>
</template>

<script>
import Clock from './Clock'

export default {
  name: 'Navbar',
  components: {
    Clock
  }
}
</script>

<style lang="scss">

  
</style>
