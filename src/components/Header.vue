<template>
    <header v-in-viewport>
        <div class="left">
        <img alt="Vue logo" src="../assets/logo.svg">
        <h1>howtomakeanoffer<span>.com.au</span></h1>
        </div>
        <div class="right">
        <h2>Get what you want, <span>cash</span>, <span>now</span></h2>
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
