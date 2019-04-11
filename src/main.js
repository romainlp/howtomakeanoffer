import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueClipboard from 'vue-clipboard2'
import inViewportDirective from 'vue-in-viewport-directive'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faClipboard,
  faClipboardCheck,
  faRedo,
} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

Vue.use(VueClipboard)
Vue.directive('in-viewport', inViewportDirective)
Vue.component('font-awesome-icon', FontAwesomeIcon)

library.add(faClipboard, faClipboardCheck, faRedo)

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
