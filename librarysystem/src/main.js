import Vue from 'vue'
import App from './App.vue'
import Navbar from './components/Navbar.vue'
import Footer from './components/Footer.vue';






Vue.component('app-nav',Navbar);
Vue.component('Footer',Footer)

new Vue({
  el: '#app',
  render: h => h(App),
   

})

