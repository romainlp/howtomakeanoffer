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
            :title="platform.name"
            v-on:click="setPlatform(platform)"
          >
            <img :src="platform.logo">
          </button>
        </div>
      </section>

      <section class="content" v-show="section == 1">
        <div class="amount">
          <label for="amount_input">What is the amount of the ad?</label>
          <div class="btn-group">
            <input type="number" placeholder="Amount" v-on:keyup.enter="process" v-model="amount">
            <input type="submit" value="Calculate" v-on:click="process">
          </div>
        </div>
      </section>

      <section class="content" v-show="section == 2">
        <div v-if="offer && !loading">
          <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
          <blockquote class="bubble" v-html="message" />
          <button class="button" v-on:click="toggleCopy">{{ copyButtonText }}</button>
          <a v-on:click="reset">Restart</a>
        </div>
      </section>
    </div>

    <Loader v-if="loading" message="We are currently processing your data, please wait..."/>
  </main>
</template>

<script>
import Loader from '@/components/Loader.vue'
import Offer from '@/services/Offer'
import { mapGetters } from 'vuex'

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
      message: '',
      disableCopy: false,
      copyButtonText: 'Copy'
    }
  },
  watch: {
    selectedPlatform (newPlatform) {
      if (newPlatform != undefined) {
        this.section = 1
      }
    }
  },
  computed: {
    ...mapGetters(['platforms', 'selectedPlatform'])
  },
  methods: {
    setPlatform (platform) {
      this.$store.commit('SET_PLATFORM', platform)
    },
    reset () {
      this.$store.commit('SET_PLATFORM', undefined)
      this.offer = undefined
      this.section = 0
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
        this.message = "Hi there!<br>I saw your " + this.selectedPlatform.name + " ad,"
          + "and I'd like to offer " + this.offer + ", cash, NOW!!!"
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    toggleCopy () {
      this.$copyText(this.message)
      this.disableCopy = true
      this.copyButtonText = 'Copied'
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