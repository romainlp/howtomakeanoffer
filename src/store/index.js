import Vue from 'vue'
import Vuex from 'vuex'
import VuexPersistence from 'vuex-persist'

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default new Vuex.Store({
  state: {
    platforms: [
      {
        id: 1,
        name: 'Gumtree',
        slug: 'gumtree',
        logo: require('@/assets/logo-gumtree.svg')
      },
      {
        id: 2,
        name: 'eBay',
        slug: 'ebay',
        logo: require('@/assets/logo-ebay.svg')
      },
      {
        id: 3,
        name: 'Craigslist',
        slug: 'craigslist',
        logo: require('@/assets/logo-craigslist.svg')
      },
      {
        id: 4,
        name: 'Facebook',
        slug: 'facebook',
        logo: require('@/assets/logo-facebook.svg')
      }
    ],
    selectedPlatform: undefined,
    amount: undefined,
    loading: false,
    locale: 'en'
  },
  getters : {
    platforms: state => {
      return state.platforms
    },
    selectedPlatform: state => {
      return state.selectedPlatform
    },
    loading: state => {
      return state.loading
    },
    amount: state => {
      return state.amount
    },
    locale: state => {
      return state.locale
    }
  },
  mutations: {
    SET_PLATFORM : (state, payload) => {
      state.selectedPlatform = payload
    },
    /**
     * @todo check if boolean
     */
    SET_LOADING : (state, payload) => {
      state.loading = payload
    },
    SET_AMOUNT: (state, payload) => {
      state.amount = payload
    },
    RESET: (state) => {
      state.amount = undefined,
      state.selectedPlatform = undefined
    },
    SET_LOCALE: (state, locale) => {
      state.locale = locale
    },
  },
  actions : {},
  plugins: [vuexLocal.plugin],
})