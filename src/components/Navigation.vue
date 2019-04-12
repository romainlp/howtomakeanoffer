<template>
  <nav>
    <ul>
      <li><router-link :class="{'router-link-exact-active': isWorkflow }" to="/">Get an offer</router-link></li>
      <li><router-link to="/about">About</router-link></li>
      <li><router-link to="/guide">How to buy</router-link></li>
    </ul>
  </nav>
</template>

<script>
export default {
    name: 'Navigation',
    data () {
      return {
        isWorkflow: false
      }
    },
    watch: {
      '$route' (to) {
        if (to.meta.isWorkflow) {
          this.isWorkflow = true
        } else {
          this.isWorkflow = false
        }
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
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    display: flex;
    justify-content: space-around;
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