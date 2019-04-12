<i18n>
{
  "en": {
    "loading": "Currently doing the magic...",
    "copy": "Copy",
    "copied": "Copied",
    "label": "Based on our recommendations and our secret algorithm, we advice you to send this message:"
  },
  "fr": {
    "loading": "Veuillez patienter pendant que la magie s'oppère...",
    "copy": "Copier",
    "copied": "Copié",
    "label": "En se basant sur nos recommendations et notre algorithme secret, nous vous conseillons d'envoyer le message suivant:"
  }
}
</i18n>

<template>
  <div>
    <div v-if="loading" class="loading">
      <label>{{ $t('loading') }}</label>
    </div>
    <div v-else>
      <label>{{ $t('label') }}</label>
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
import Localization from '@/mixins/Localization.js'

export default {
  name: "WorkflowResult",
  data () {
    return {
      copyButtonText: this.$t('copy'),
      message: '',
      disableCopy: false
    }
  },
  computed: {
    ...mapGetters(['selectedPlatform', 'amount', 'loading'])
  },
  mixins: [Localization],
  mounted () {
    this.process()
  },
  methods: {
    async process () {
      this.$store.commit('SET_LOADING', true)
      this.message = await Offer.get(this.amount, this.selectedPlatform, this.locale)
      this.$store.commit('SET_LOADING', false)
    },
    toggleCopy () {
      this.$copyText(this.message)
      this.disableCopy = true
      this.copyButtonText = this.$t('copied')
    }
  }
}
</script>

<style lang="scss">
.bubble {
  border-radius: 4px;
  background: rgba($text-color, 0.1);
  padding: 20px 30px;
  text-align: left;
  font-style: italic;
  font-size: 22px;
}
.loading {
  label {
    margin-bottom: 0;
  }
}
.button {
  font-size: 16px;
  padding: 15px 30px;
  svg {
    margin-right: 10px;
  }
}
</style>