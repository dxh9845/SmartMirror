<template>
  <div id="app">
    <b-navbar type="dark" variant="dark" fixed="bottom">
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-navbar-brand href="#">SmartMirror</b-navbar-brand>
        <b-collapse is-nav id="nav-collapse">
          <b-navbar-nav>
            <b-nav-item href="#"><i class="far fa-check-circle"></i> Todoist</b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">

  
</style>
