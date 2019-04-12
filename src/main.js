import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import VueI18n from 'vue-i18n'
import VueClipboard from 'vue-clipboard2'
import inViewportDirective from 'vue-in-viewport-directive'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import {
  faClipboard,
  faClipboardCheck,
  faUndo,
} from '@fortawesome/free-solid-svg-icons'

Vue.config.productionTip = false

Vue.use(VueI18n);
Vue.use(VueClipboard)
Vue.directive('in-viewport', inViewportDirective)
Vue.component('font-awesome-icon', FontAwesomeIcon)

const i18n = new VueI18n({
  locale: store.state.locale,
  fallbackLocale: 'en',
  messages: {
    en: {
      // ...
    },
    fr: {
      // ...
    }
  }
})

library.add(faClipboard, faClipboardCheck, faUndo)

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
