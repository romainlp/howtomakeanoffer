<template>
  <div id="app" v-bind:class="cssContext">
    <Header />
    <router-view></router-view>
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
      cssContext: 'default'
    }
  },
  computed: {
    ...mapGetters(['selectedPlatform'])
  },
  watch: {
    selectedPlatform (newValue) {
      if (newValue != undefined) {
        this.cssContext = newValue.slug
      } else {
        this.cssContext = 'default'
      }
    }
  }
};
</script>

<style lang="scss">
  @import "@/styles/global.scss";
</style>
