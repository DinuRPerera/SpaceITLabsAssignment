<template>
  <div>
      <app-nav></app-nav>
      <app-home></app-home>
      <Footer></Footer>
     
    

  </div>
</template>

<script>
import Home from './components/Home.vue'


export default {
  components:{
    'app-home' : Home
    
    
  }
  
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
