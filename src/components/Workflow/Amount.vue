<i18n>
{
  "en": {
    "label": "What is the amount of the ad?",
    "amount": "Amount",
    "calculate": "Calculate"
  },
  "fr": {
    "label": "Quel est le montant de l'annonce ?",
    "amount": "Montant",
    "calculate": "Calculer"
  }
}
</i18n>

<template>
  <div>
    <div class="amount">
      <label for="amount_input">{{ $t('label') }}</label>
      <div class="btn-group">
        <input type="number" :placeholder="$t('amount')" v-on:keyup.enter="validate" v-model="amount">
        <input type="submit" :value="$t('calculate')" v-on:click="validate">
      </div>
    </div>
  </div>
</template>

<script>
import Localization from '@/mixins/Localization.js'

export default {
  name: "WorkflowAmount",
  computed: {
    amount: {
      get () {
        return this.$store.state.amount
      },
      set (value) {
        this.$store.commit('SET_AMOUNT', value)
      }
    }
  },
  mixins: [Localization],
  methods: {
    validate () {
      this.$router.push({ name: 'workflow-result' })
    }
  }
}
</script>