<template>
  <div>
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
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: "WorkflowPlatforms",
  data () {
    return {
      amount: undefined
    }
  },
  computed: {
    ...mapGetters(['platforms'])
  },
  methods: {
    setPlatform (platform) {
      this.$store.commit('SET_PLATFORM', platform)
      this.$router.push({ name: 'workflow-amount' })
    }
  }
}
</script>