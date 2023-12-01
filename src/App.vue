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
main {
  min-height: 89vh;
}
</style>
