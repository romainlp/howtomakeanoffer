<template>
  <nav>
    <ul>
      <li><router-link to="/">Get an offer</router-link></li>
      <li><router-link to="/about">About</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navigation'
}
</script>

<style scoped lang="scss">
nav {
  clear: both;
  display: block;
  padding: 20px 30px;
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-between;
    @media (min-width: $container-width) {
      justify-content: left;
      li {
        margin-right: 30px;
      }
    }
    li {
      display: inline-block;
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