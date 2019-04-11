<template>
  <main class="home">
    <section class="content">
      <label for="platform">What Platform are you Using?</label>
      <div class="platforms">
        <button
          v-for="platform in platforms"
          v-bind:key="platform.id"
          class="btn-platform"
          v-on:click="offer_platform = platform.id"
          v-bind:class="{ 'selected': offer_platform == platform.id }"
        >
          <img :src="platform.logo">
        </button>
      </div>
    </section>

    <section class="content">
      <div class="amount">
        <label for="amount_input">Enter the amount of the ad:</label>
        <div class="btn-group">
          <input type="number" placeholder="Amount" v-on:keyup.enter="process" v-model="amount">
          <input type="submit" value="Calculate" v-on:click="process">
        </div>
      </div>
      <div class="result" v-if="offer && !loading">
        <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
        <blockquote class="bubble" v-html="message"/>
        <button class="button" v-on:click="toggleCopy">{{ copyButtonText }}</button>
      </div>
    </section>
    <Loader v-if="loading" message="We are currently processing your data, please wait..."/>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Offer from '@/services/Offer'

export default {
  name: 'home',
  components: {
    Loader
  },
  data () {
      return {
          amount: undefined,
          loading: false,
          offer: undefined,
          offer_platform: 0,
          message: '',
          disableCopy: false,
          copyButtonText: 'Copy',
          platforms: {
            'Gumtree': {
              id: 0,
              logo: require('@/assets/logo-gumtree.png')
            },
            'eBay': {
              id: 1,
              logo: require('@/assets/logo-ebay.jpg')
            },
            'Craigslist': {
              id: 2,
              logo: require('@/assets/logo-craigslist.jpg')
            },
          }
      }
  },
  watch: {
    amount (newAmount, oldAmount) {
      if (newAmount != oldAmount) {
        this.reset()
      }
    },
    offer_platform (newPlatform, oldPlatform) {
      if (newPlatform != oldPlatform) {
        this.reset()
      }
    }
  },
  methods: {
    reset () {
      this.offer = undefined
      this.message = ''
      this.copyButtonText = 'Copy'
      this.disableCopy = false
    },
    process () {
      this.loading = true
      if (undefined === this.amount) {
        console.log('Please enter an amount')
      } else {
        this.offer = Offer.get(this.amount)
        const platform = this.getPlatform();
        this.message = `Hi there! 
I saw your ${platform} ad, and I'd like to offer ${this.offer}, cash, NOW!!!
`
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    toggleCopy () {
      this.$copyText(this.message)
      this.disableCopy = true
      this.copyButtonText = 'Copied'
    },
    getPlatform() {
      switch (this.offer_platform) {
        case 0: return 'Gumtree'
        case 1: return 'eBay'
        case 2: return 'Craigslist'
        default:
          return '-'
      }
    }
  }
}
</script>
