import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import VueClipboard from 'vue-clipboard2'
import router from './router'

Vue.config.productionTip = false
Vue.use(VueClipboard);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
