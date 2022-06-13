import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './styles/core.scss'
import Images from './assets/_index'

Vue.config.productionTip = false

Vue.prototype.$img = Images;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
