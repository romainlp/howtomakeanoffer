<template>
  <div id="app">
  
    <Header />
  
    <div class="content">
      <div class="amount">
        <label for="amount_input">Enter the amount of the ad:</label>
        <input type="number" placeholder="Amount" v-on:keyup.enter="process" v-model="amount" />
        <input type="submit" value="Calculate" v-on:click="process" />
      </div>
      <div class="result" v-if="offer && !loading">
        <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
        <blockquote v-html="message" />
        <button class="button" v-on:click="toggleCopy" v-clipboard="message">{{ copyButtonText }}</button>
      </div>
    </div>

    <Footer />

    <Loader v-if="loading" message="We are currently processing your data, please wait..." />
  
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'
import Offer from '@/services/Offer'

export default {
  name: 'app',
  components: {
    Header,
    Footer,
    Loader
  },
  data () {
      return {
          amount: undefined,
          loading: false,
          offer: undefined,
          message: '',
          disableCopy: false,
          copyButtonText: 'Copy'
      }
  },
  watch: {
    amount (newAmount, oldAmount) {
      if (newAmount != oldAmount) {
        this.offer = undefined
        this.message = ''
        this.copyButtonText = 'Copy'
        this.disableCopy = false
      }
    }
  },
  methods: {
    process () {
      this.loading = true
      if (undefined === this.amount) {
        console.log('Please enter an amount')
      } else {
        this.offer = Offer.get(this.amount)
        this.message = "Hi there! I'd like to offer " + this.offer + ", cash, NOW!!!"
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
    },
    toggleCopy () {
      this.disableCopy = true
      this.copyButtonText = 'Copied'
    }
  }
}
</script>

<style lang="scss">
/**
 * Variables
 */
$green: #2d8327;

/**
 * Common styles
 */
.button {
  appearance: none;
  border-radius: 4px;
  background: $green;
  color: #fff;
  padding: 10px 20px;
  border: 0px;
}
body {
  background: #f4f4f4;
  padding: 100px 0 0 0;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}

.result {
  background: #fff;
  max-width: 500px;
  margin: 40px auto 40px;
  padding: 40px;
  .button {
    font-size: 16px;
  }
  p {
    font-weight: bold;
  }
  .message {
    font-size: 22px;
    font-style: italic;
  }
  blockquote {
    font-size: 22px;
    font-style: italic;
    padding: 20px 30px;
    background: rgba($green, 0.2);
    border-radius: 20px;
  }
}
/**
 * Header
 */
header {
  position: fixed;
  background: #fff;
  width: calc(100vw - 40px);
  top: 0;
  left: 0;
  padding: 20px;
  z-index: 20;
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  img {
    height: 38px;
    float: left;
    margin-right: 5px;
    transform: rotate(180deg);
  }
}
h1 {
  position: relative;
  display: inline-block;
  clear: both;
  font-size: 32px;
  line-height: 32px;
  font-weight: 300;
  margin: 0;
  span {
    font-size: 12px;
    font-weight: bold;
    color: $green;
  }
  &:after {
    content: '';
    background: rgba($green, 0.08);
    width: 100%;
    height: 20px;
    display: block;
    bottom: 0;
    position: absolute;
    left: 20px;
  }
}
h2 {
  display: block;
  font-style: italic;
  font-size: 16px;
  margin-left: 20px;
  float: right;
  line-height: 38px;
  margin: 0;
}

.content {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
}
div.amount {
  display: inline-block;
  margin: 20px auto;
}
label {
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
input[type="number"] {
  padding: 10px 20px;
  border-radius: 4px 0 0 4px;
  line-height: 40px;
  border: 1px solid #d3d3d3;
  outline: none;
  float: left;
  border-right: 0px;
  font-size: 20px
}
input[type="submit"] {
  float: left;
  line-height: 40px;
  padding: 10px 20px;
  appearance: none;
  border: 1px solid $green;
  background: $green;
  color: #fff;
  font-size: 20px;
  border-radius: 0 4px 4px 0;
  transition: all .3s ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba($green, 0.9);
    border-color: rgba($green, 0.9);
  }
}

.footer {
  margin: 20px auto;
  max-width: 800px;
  text-align: center;
}

</style>
