<template>
  <main class="home">

    <div class="workflow">
      <section class="content" v-show="section == 0">
        <label for="platform">What platform are you using?</label>
        <div class="platforms">
          <button
            v-for="platform in platforms"
            v-bind:key="platform.id"
            class="btn-platform"
            v-on:click="selectedPlatform = platform.id"
          >
            <img :src="platform.logo">
          </button>
        </div>
      </section>

      <section class="content" v-show="section == 1">
        <div class="amount">
          <label for="amount_input">Enter the amount of the ad:</label>
          <div class="btn-group">
            <input type="number" placeholder="Amount" v-on:keyup.enter="process" v-model="amount">
            <input type="submit" value="Calculate" v-on:click="process">
          </div>
        </div>
      </section>

      <section class="content" v-show="section == 2">
        <div v-if="offer && !loading">
          <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
          <blockquote class="bubble" v-html="message"/>
          <button class="button" v-on:click="toggleCopy">{{ copyButtonText }}</button>
        </div>
      </section>
    </div>

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
      section: 0,
      amount: undefined,
      loading: false,
      offer: undefined,
      selectedPlatform: undefined,
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
    selectedPlatform (newPlatform) {
      if (newPlatform != undefined) {
        this.section = 1
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
      this.section = 2
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
      switch (this.selectedPlatform) {
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

<style lang="scss">
.workflow {
  padding-top: 40px;
  .content {
    background: #fff;
    border-radius: 4px;
    padding: 40px;
  }
}
</style>