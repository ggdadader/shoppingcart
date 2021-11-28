<template>
  <div id="shopping-cart">
   
    <main class="mt-5 bg-white" role=main>
      <router-view/>
    </main>
    
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
import checkout from './views/checkout.vue'
// import '@fortawesome/fontawesome-free/css/all.css'
// import '@fortawesome/fontawesome-free/js/all.js'


export default {
  name: 'App',
  checkout
  
}
</script>