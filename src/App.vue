<template>
  <div id="app">
  
    <header>
      <div class="left">
        <img alt="Vue logo" src="./assets/logo.png">
        <h1>howtomakeanoffer<span>.com.au</span></h1>
      </div>
      <div class="right">
        <h2>Get what you want, <span>cash</span>, <span>now</span></h2>
      </div>
    </header>
  
    <div class="content">
      <div class="amount">
        <label for="amount_input">Enter here the amount of the ad:</label>
        <input type="number" placeholder="Amount" v-model="amount" />
        <input type="submit" value="Help me!" v-on:click="process" />
      </div>
      <div class="result" v-if="offer && !loading">
        <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
        <p class="message" v-html="message"></p>
        <button class="button" v-clipboard="message">Copy</button>
      </div>
    </div>
  
    <transition name="fade">
      <div v-if="loading" class="overlay">
        <div class="content">
          <p>We are currently processing your datas, please wait...</p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import { setTimeout } from 'timers';
export default {
  name: 'app',
  data () {
      return {
          amount: undefined,
          loading: false,
          offer: undefined,
          message: ''
      }
  },
  methods: {
    process () {
      this.loading = true
      if (undefined === this.amount) {
        console.log('Please enter an amount')
      } else {
        this.offer = (this.amount / 2) + (this.amount * 0.09);
        this.message = "Hi there! I'd like to offer " + this.offer + "$, cash, NOW!!!"
      }
      setTimeout(() => {
        this.loading = false
      }, 2000)
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
 * Animation
 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
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
  margin-top: 40px;
  background: #fff;
  max-width: 450px;
  margin: 40px auto 0;
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

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $green;
  z-index: 10;
  display: flex;
  align-items: center;
  .content {
    color: #fff;
    font-size: 36px;
  }
}
</style>
