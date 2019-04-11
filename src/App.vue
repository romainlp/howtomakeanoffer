<template>
  <div id="app">
    <Header/>

    <main>
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
    </main>

    <Footer/>

    <Loader v-if="loading" message="We are currently processing your data, please wait..."/>
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
import Loader from "@/components/Loader.vue";
import Offer from "@/services/Offer";

export default {
  name: "app",
  components: {
    Header,
    Footer,
    Loader
  },
  data() {
    return {
      amount: undefined,
      loading: false,
      offer: undefined,
      offer_platform: 0,
      message: "",
      disableCopy: false,
      copyButtonText: "Copy",
      platforms: {
        Gumtree: {
          id: 0,
          logo: require("./assets/logo-gumtree.png")
        },
        eBay: {
          id: 1,
          logo: require("./assets/logo-ebay.jpg")
        },
        Craigslist: {
          id: 2,
          logo: require("./assets/logo-craigslist.jpg")
        }
      }
    };
  },
  watch: {
    amount(newAmount, oldAmount) {
      if (newAmount != oldAmount) {
        this.reset();
      }
    },
    offer_platform(newPlatform, oldPlatform) {
      if (newPlatform != oldPlatform) {
        this.reset();
      }
    }
  },
  methods: {
    reset() {
      this.offer = undefined;
      this.message = "";
      this.copyButtonText = "Copy";
      this.disableCopy = false;
    },
    process() {
      this.loading = true;
      if (undefined === this.amount) {
        console.log("Please enter an amount");
      } else {
        this.offer = Offer.get(this.amount);
        const platform = this.getPlatform();
        this.message = `Hi there! 
I saw your ${platform} ad, and I'd like to offer ${this.offer}, cash, NOW!!!
`;
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    toggleCopy() {
      this.$copyText(this.message);
      this.disableCopy = true;
      this.copyButtonText = "Copied";
    },
    getPlatform() {
      switch (this.offer_platform) {
        case 0:
          return "Gumtree";
        case 1:
          return "eBay";
        case 2:
          return "Craigslist";
        default:
          return "-";
      }
    }
  }
};
</script>

<style lang="scss">
/**
 * Common styles
 */
* {
  box-sizing: border-box;
}
body {
  background: #f4f4f4;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", $font-system;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
.content {
  max-width: $container-width;
  margin: 0 auto;
  text-align: center;
  margin: $gutter auto;
  padding: 0 $gutter;
}
.button {
  appearance: none;
  border-radius: 4px;
  background: $green;
  color: #fff;
  padding: 10px 20px;
  border: 0px;
}

/* PLatforms */
.platforms {
  display: inline-flex;
  max-width: $container-width / 2;
  img {
    width: 100%;
  }
  .btn-platform {
    flex: 1 1 0;
    background-color: #fff;
    margin: 5px;
    border: none;
    transition: all 0.5s;
    padding: 10px;
    @media (min-width: $container-width /2) {
      padding: 10px 20px;
    }
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    &.selected {
      transform: scale(1.1);
      border: 2px solid $green;
    }
  }
}

/* Result */
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
.bubble {
  white-space: pre-wrap;
  text-align: left;
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
.btn-group {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  > * {
    position: relative;
    flex: 1 1 auto;
    padding: 10px 20px;
    font-size: 15px;
    line-height: 30px;
    @media (min-width: $container-width) {
      font-size: 20px;
      line-height: 40px;
    }
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
input[type="number"] {
  border: 1px solid #d3d3d3;
  outline: none;
  border-right: 0px;
  @media (max-width: $container-width - 1) {
    width: 60%;
  }
}
input[type="submit"] {
  appearance: none;
  border: 1px solid $green;
  background: $green;
  @media (max-width: $container-width - 1) {
    width: 40%;
  }
  color: #fff;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:focus {
    background-color: rgba($green, 0.9);
    border-color: rgba($green, 0.9);
  }
}
</style>
