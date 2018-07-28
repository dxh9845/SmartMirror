// Import Vue stuff
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.performance = true;

Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

new Vue({
  el: '#app',
  template: '<App/>', 
  components: { App }
})
