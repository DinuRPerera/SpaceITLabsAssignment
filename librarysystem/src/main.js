import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Router from './routes.js';






Vue.component('app-nav',Navbar);

new Vue({
  el: '#app',
  render: h => h(App),
    router:Router

})

