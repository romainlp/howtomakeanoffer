<template>
  <div id="app" v-bind:class="cssContext">
    <div class="before">
      <span v-for="(span, index) in spans" :key="span">{{ index }}</span>
    </div>
    <Header />
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>
    <div class="after">
      <span v-for="(span, index) in spans" :key="span">{{ index }}</span>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'
import { mapGetters } from 'vuex'

export default {
  name: "app",
  components: {
    Header
  },
  data () {
    return {
      cssContext: 'default',
      spans: 100,
    }
  },
  computed: {
    ...mapGetters(['selectedPlatform'])
  },
  watch: {
    selectedPlatform (newValue) {
      if (newValue != undefined) {
        this.cssContext = newValue.slug + ' hasContext'
      } else {
        this.cssContext = 'default'
      }
    }
  }
};
</script>

<style lang="scss">
  @import "@/styles/global.scss";
  .before {
    width: 40vw;
    height: 40vh;
    position: fixed;
    left: -50px;
    transform: rotate(30deg);
    span {
      text-indent: -9999px;
      width: 100%;
      display: block;
      background: rgba($text-color, 0.1);
      height: 3px;
      margin-bottom: 3px;
    }
  }
  .after {
    width: 40vw;
    height: 40vh;
    position: fixed;
    right: -50px;
    bottom: 0;
    transform: rotate(30deg);
    z-index: -1;
    span {
      text-indent: -9999px;
      width: 100%;
      display: block;
      background: rgba($text-color, 0.1);
      height: 3px;
      margin-bottom: 3px;
    }
  }
</style>
