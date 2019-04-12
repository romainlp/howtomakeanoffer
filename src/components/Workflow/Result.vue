<template>
  <div>
    <div v-if="loading">
      <label>Currently doing the magic...</label>
    </div>
    <div v-else>
      <label>Based on our recommendations and our secret algorithm, we advice you to send this message:</label>
      <blockquote class="bubble" v-html="message" />
      <button class="button" v-on:click="toggleCopy">
        <font-awesome-icon v-if="!disableCopy" icon="clipboard"></font-awesome-icon>
        <font-awesome-icon v-else icon="clipboard-check"></font-awesome-icon>
        {{ copyButtonText }}
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Offer from '@/services/Offer'

export default {
  name: "WorkflowResult",
  data () {
    return {
      copyButtonText: 'Copy',
      message: '',
      disableCopy: false
    }
  },
  computed: {
    ...mapGetters(['selectedPlatform', 'amount', 'loading'])
  },
  mounted () {
    this.process()
  },
  methods: {
    async process () {
      this.$store.commit('SET_LOADING', true)
      this.message = await Offer.get(this.amount, this.selectedPlatform)
      this.$store.commit('SET_LOADING', false)
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
.bubble {
  border-radius: 25px;
  background: rgba($text-color, 0.1);
  padding: 20px 30px;
  text-align: left;
  font-style: italic;
  font-size: 22px;
}
</style>