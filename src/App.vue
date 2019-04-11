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
/**
 * Common styles
 */
* {
  box-sizing: border-box;
}
html {
  max-width: 100vw;
  overflow-x: hidden;
  overflow-y: auto;
}
body {
  background: #f4f4f4;
  padding: 0;
  margin: 0;
  max-width: 100vw;
}
#app {
  font-family: "Avenir", $font-system;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
  min-height: 100vh;
  max-width: 100vw;
  &:before,
  &:after {
    content: '';
    position: absolute;
    background: #D3D3D3;
    width: 350px;
    height: 350px;
    transform: rotate(30deg);
    z-index: 0;
    transition: all .3s ease-in-out;
  }
  &:before {
    top: 50px;
    left: -100px;
  }
  &:after {
    bottom: -50px;
    right: -150px;
  }
  &.gumtree {
    &:before,
    &:after {
      background: rgba($green, 0.1);
    }
  }
  &.ebay {
    &:before {
      background: rgba(#E53238, 0.1);
    }
    &:after {
      background: rgba(#0064D2, 0.1);
    }
  }
  &.craigslist {
    &:before,
    &:after {
      background: rgba(#6f2b7a, 0.1);
    }
  }
}
.content {
  max-width: $container-width;
  margin: 0 auto;
  text-align: center;
  margin: $gutter auto;
  padding: 0 $gutter;
  position: relative;
  z-index: 1;
}
.button {
  appearance: none;
  border-radius: 4px;
  background: $green;
  color: #fff;
  padding: 10px 20px;
  border: 0px;
}

/* PLatforms */
.platforms {
  display: inline-flex;
  max-width: $container-width / 2;
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
    &:hover {
      cursor: pointer;
    }
    &.selected {
      transform: scale(1.1);
      border: 2px solid $green;
    }
  }
}

/* Result */
.content {
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
}
.bubble {
  white-space: pre-wrap;
  text-align: left;
}
div.amount {
  display: inline-block;
}
label {
  display: block;
  text-align: center;
  font-weight: bold;
  margin-bottom: 20px;
}
.btn-group {
  position: relative;
  display: inline-flex;
  vertical-align: middle;
  > * {
    position: relative;
    flex: 1 1 auto;
    padding: 10px 20px;
    font-size: 15px;
    line-height: 30px;
    @media (min-width: $container-width) {
      font-size: 20px;
      line-height: 40px;
    }
    &:first-child {
      border-radius: 4px 0 0 4px;
    }
    &:last-child {
      border-radius: 0 4px 4px 0;
    }
  }
}
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
</style>
