<template>
  <main>
    <h2>Welcome back, {{ user }}!</h2>
    <h3>Bitcoin/USD Current rate: {{ btcRate }}</h3>
  </main>
</template>

<script>
import { userService } from '../services/userService';
import { bitcoinService } from '../services/bitcoinService'

export default {
  data() {
    return {
      user: null,
      btcRate: 0
    }
  },
  methods: {
  },
  async created() {
    this.user = await userService.getUser().name
    this.btcRate = await bitcoinService.getRate()
  }
}

</script>

<style scoped lang="scss">
main {
  margin-inline: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}
</style>