<template>
    <transition name="fade" appear>
        <div class="overlay">
            <div class="content">
                <p>{{ message }}</p>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'Loader',
    props: {
        message: String
    }
}
</script>

<style lang="scss" scoped>
/**
 * Animation
 */
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: $green;
  z-index: 10;
  display: flex;
  align-items: center;
  .content {
    color: #fff;
    font-size: 36px;
  }
}
</style>
