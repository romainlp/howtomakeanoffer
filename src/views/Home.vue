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
            :class="platform.slug"
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
        <div class="result" v-if="offer && !loading">
          <p>Based on our recommendations and our secret algorithm, we advice you to send this message:</p>
          <blockquote class="bubble" v-html="message" />
          <button class="button" v-on:click="toggleCopy">
            <font-awesome-icon v-if="!disableCopy" icon="clipboard"></font-awesome-icon>
            <font-awesome-icon v-else icon="clipboard-check"></font-awesome-icon>
            {{ copyButtonText }}
          </button>
          <button class="button button-outline" v-on:click="reset">
            <font-awesome-icon icon="redo"></font-awesome-icon>
            Restart
          </button>
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
  name: "home",
  components: {
    Loader
  },
  data() {
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
    selectedPlatform(newPlatform) {
      if (newPlatform != undefined) {
        this.section = 1;
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
    process() {
      this.loading = true;
      this.section = 2;
      if (undefined === this.amount) {
        console.log("Please enter an amount");
      } else {
        this.offer = Offer.get(this.amount)
        this.message = "Hi there!<br>I saw your " + this.selectedPlatform.name + " ad,"
          + "and I'd like to offer " + this.offer + ", cash, NOW!!!"
      }
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    toggleCopy () {
      this.$copyText(this.message)
      this.disableCopy = true
      this.copyButtonText = 'Copied'
    }
  }
};
</script>

<style lang="scss">

/* Workflow */
.workflow {
  padding-top: 40px;
  .content {
    background: #fff;
    border-radius: 4px;
    padding: 40px;
  }
    label {
    display: block;
    text-align: center;
    font-weight: bold;
    margin-bottom: 20px;
  }
}

/* Platforms */
.platforms {
  display: inline-flex;
  max-width: 519px;
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
    border: 2px solid #f3f3f3;
    border-radius: 4px;
    outline: none;
    @media (min-width: $container-width / 2) {
      padding: 10px 20px;
    }
    &.facebook {
      img {
        max-height: 28px;
      }
    }
    &:hover {
      cursor: pointer;
    }
    &.selected {
      transform: scale(1.1);
      border: 2px solid $green;
    }
  }
}

/* Amount */
.amount {
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
}

/* Result */
.result {
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
  .bubble {
    white-space: pre-wrap;
    text-align: left;
  }
}
</style>