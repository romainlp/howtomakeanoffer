<template>
  <header>
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
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style lang="scss">
/**
 * Header
 */
body {
  // padding-top: 140px !important;
  // @media (min-width: $container-width) {
  //   padding-top: 100px !important;;
  // }
}
header {
  // position: fixed; // Uncomment above to get fixed header again
  width: 100vw;
  top: 0;
  left: 0;
  right: 0;
  z-index: 20;
  padding: $gutter;
  background: #fff;
  text-align: center;
  @media (min-width: $container-width) {
    text-align: left;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  img {
    height: 38px;
    margin-right: 5px;
  }
  box-shadow: 0 1px 3px rgba(27, 31, 35, 0.1);
}
.left {
  @media (min-width: $container-width / 2) {
    display: inline-flex;
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