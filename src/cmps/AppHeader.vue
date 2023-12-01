<template>
    <header>
        <div class="rate-container">
            <small>Bitcoin/USD rate: {{ exchangeRate }}</small>
        </div>
        <nav class="nav-container">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </nav>
        <div v-if="user" class="user-container">
            Logged as {{ user }}.
        </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router'
import { userService } from '../services/userService'
import { bitcoinService } from '../services/bitcoinService'

export default {
    data() {
        return {
            user: null,
            exchangeRate: null
        }
    },
    async created() {
        this.user = userService.getUser().name
        this.exchangeRate = await bitcoinService.getRate()
    }

}
</script>
<style></style>