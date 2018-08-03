// Import Vue stuff
import Vue from 'vue'
import BootstrapVue from "bootstrap-vue"
import App from './App.vue'
import Router from './router'
// import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap-vue/dist/bootstrap-vue.css"

Vue.config.performance = true;

console.log(Router);
Vue.use(BootstrapVue)
Vue.use(require('vue-moment'))

new Vue({
  el: '#app',
  router: Router,
  template: '<App/>', 
  components: { App }
})
