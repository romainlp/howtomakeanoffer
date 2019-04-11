<template>
  <div id="app">
    <Header />
    <router-view></router-view>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'

export default {
  name: "app",
  components: {
    Header
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
body {
  background: #f4f4f4;
  padding: 0;
  margin: 0;
}
#app {
  font-family: "Avenir", $font-system;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 16px;
}
.content {
  max-width: $container-width;
  margin: 0 auto;
  text-align: center;
  margin: $gutter auto;
  padding: 0 $gutter;
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
    border: 2px solid #fff;
    border-radius: 4px;
    outline: none;
    @media (min-width: $container-width /2) {
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
.result {
  background: #fff;
  max-width: 500px;
  margin: 40px auto 40px;
  padding: 40px;
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
  margin: 20px auto;
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
