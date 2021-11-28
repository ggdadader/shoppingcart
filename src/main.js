import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/styles/cart.css'
import './assets/styles/main.css'
import './assets/styles/stepnform.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'



Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
