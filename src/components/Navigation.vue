<template>
  <nav>
    <ul>
      <li><router-link to="/">Get an offer</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/contributors">Contributors</router-link></li>
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
  padding: 0px;
  padding-top: 20px;
  width: 100%;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    li {
      display: inline-block;
      margin-right: 20px;
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