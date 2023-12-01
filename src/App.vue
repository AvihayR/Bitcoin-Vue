<template>
  <AppHeader />
  <RouterView />
  <AppFooter />
</template>

<script>
import { RouterLink, RouterView } from 'vue-router'
import AppHeader from './cmps/AppHeader.vue'
import AppFooter from './cmps/AppFooter.vue'

export default {
  components: {
    AppHeader,
    AppFooter
  }
}
</script>

<style>
#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

main {
  min-height: 90vh;
}
</style>
