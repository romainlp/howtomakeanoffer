import { mapGetters } from 'vuex'

const Localization = {
  computed: {
    ...mapGetters(['locale'])
  },
  watch: {
    locale (val) {
      this.$i18n.locale = val
    }
  },
}

export default Localization;