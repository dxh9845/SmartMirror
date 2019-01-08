<template>
  <div id="app">
    <b-navbar toggleable="md" type="dark" variant="transparent" fixed="bottom">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-collapse is-nav id="nav_collapse" class="justify-content-center" >
        <b-navbar-nav>
          <b-nav-text>
            <current-time></current-time>
          </b-nav-text>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <router-view/>
  </div>
</template>

<script>
import CurrentTime from '@/components/Time/CurrentTime.vue';

export default {
  components: {
    CurrentTime
  }
}
</script>


<style lang="scss">
</style>
