import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex);

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
  },
  getters : {
    platforms : state => {
      return state.platforms
    },
    selectedPlatform : state => {
      return state.selectedPlatform
    }
  },
  mutations: {
    SET_PLATFORM : (state, payload) => {
      state.selectedPlatform = payload
    }
  },
  actions : {}  
})