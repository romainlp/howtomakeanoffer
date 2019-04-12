<i18n>
{
  "en": {
    "getOffer": "Get an offer",
    "about": "About",
    "howToBuy": "How to buy"
  },
  "fr": {
    "getOffer": "Obtenir une offre",
    "about": "A propos",
    "howToBuy": "Comment acheter"
  }
}
</i18n>

<template>
  <nav>
    <ul class="nav">
      <li><router-link :class="{'router-link-exact-active': isWorkflow }" to="/">{{ $t('getOffer') }}</router-link></li>
      <li><router-link to="/about">{{ $t('about') }}</router-link></li>
      <li><router-link to="/guide">{{ $t('howToBuy') }}</router-link></li>
    </ul>
    <ul class="locale">
      <li><button @click="setLocale('en')" :class="{active: (locale == 'en')}">En</button></li>
      <li>/</li>
      <li><button @click="setLocale('fr')" :class="{active: (locale == 'fr')}">Fr</button></li>
    </ul>
  </nav>
</template>

<script>
import Localization from '@/mixins/Localization.js'

export default {
  name: 'Navigation',
  data () {
    return {
      isWorkflow: false
    }
  },
  mixins: [Localization],
  watch: {
    '$route' (to) {
      if (to.meta.isWorkflow) {
        this.isWorkflow = true
      } else {
        this.isWorkflow = false
      }
    }
  },
  methods: {
    setLocale (locale) {
      this.$store.commit('SET_LOCALE', locale)
    }
  }
}
</script>

<style scoped lang="scss">
nav {
  clear: both;
  display: block;
  padding: 20px 30px;
  width: 100%;
  overflow: auto;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
    float: left;
    @media (min-width: $container-width) {
      justify-content: left;
      li {
        margin-right: 30px;
      }
    }
    @media (max-width: 450px) {
      display: block;
      width: 100%;
    }
    &.locale {
      float: right;
      @media (max-width: 450px) {
        float: none;
        margin: 20px auto;
      }
      li {
        margin: 0 5px;
        &:last-of-type {
          margin-right: 0;
        }
      }
      button {
        appearance: none;
        border: none;
        outline: none;
        padding: 0;
        &:hover {
          text-decoration: underline;
        }
        &.active {
          font-weight: bold;
        }
      }
    }
    &.nav {
      @media (max-width: 450px) {
        float: none;
      }
      li {
        @media (max-width: 450px) {
          display: block;
          width: 100%;
          padding: 10px 0;
        }
      }
    }
    li {
      display: inline-block;
      justify-content: left;
      li {
        margin-right: 30px;
      }
      a {
        color: rgba(#000, 0.8);
        text-decoration: none;
        &.router-link-exact-active {
          font-weight: bold;
        }
      }
    }
  }
}
</style>