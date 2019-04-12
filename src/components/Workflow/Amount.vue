<template>
  <div>
    <div class="amount">
      <label for="amount_input">What is the amount of the ad?</label>
      <div class="btn-group">
        <input type="number" placeholder="Amount" v-on:keyup.enter="validate" v-model="amount">
        <input type="submit" value="Calculate" v-on:click="validate">
      </div>
    </div>
  </div>
</template>

<script>
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
  methods: {
    validate () {
      this.$router.push({ name: 'workflow-result' })
    }
  }
}
</script>