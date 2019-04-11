<template>
  <header v-in-viewport>
    <div class="top">
      <div class="left">
        <img alt="Vue logo" src="../assets/logo.svg">
        <h1>
            howtomakeanoffer
            <span>.com.au</span>
        </h1>
        </div>
        <div class="right">
        <h2>
            Get what you want,
            <span>cash</span>,
            <span>now</span>
        </h2>
        </div>
    </div>
    <Navigation />
  </header>
</template>

<script>
import Navigation from '@/components/Navigation.vue'

export default {
    name: 'Header',
    components: {
        Navigation
    }
}
</script>

<style lang="scss">
/**
 * Header
 */
header {
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  background: #fff;
  position: relative;
  border-bottom: 1px solid rgba(27, 31, 35, 0.1);
  .top {
    padding: $gutter;
    border-bottom: 1px solid rgba(27, 31, 35, 0.1);
    @media (min-width: $container-width) {
      text-align: left;
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .left {
        display: flex;
        img {
            height: 38px;
            margin: 0 5px 0 0;
            transform: rotate(180deg);
        }
    }
  }
}
h1 {
  position: relative;
  display: inline-block;
  clear: both;
  font-size: 32px;
  font-weight: 300;
  margin: 0;
  span {
    display: none;
  }
  &:after {
    content: "";
    background: rgba($green, 0.08);
    width: 100%;
    height: 20px;
    display: block;
    bottom: 0;
    position: absolute;
  }
  @media (min-width: $container-width / 2) {
    span {
      font-size: 12px;
      font-weight: bold;
      color: $green;
      display: inline;
    }
    &:after {
      left: 20px;
    }
  }
}
h2 {
  font-style: italic;
  font-size: 16px;
  margin: 0;
}
</style>