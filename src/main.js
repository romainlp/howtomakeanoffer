import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import VueClipboard from 'vue-clipboard2'
import inViewportDirective from 'vue-in-viewport-directive'

Vue.config.productionTip = false
Vue.use(VueClipboard);
Vue.directive('in-viewport', inViewportDirective)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
