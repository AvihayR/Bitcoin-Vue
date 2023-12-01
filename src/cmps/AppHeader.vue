<template>
    <header>
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

export default {
    data() {
        return {
            user: null,
        }
    },
    async created() {
        this.user = userService.getUser().name
    }

}
</script>
<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    margin-inline: 1rem;

    .nav-container {
        display: flex;
        gap: 0.8rem;
        font-size: 1.5rem;

        a {
            text-decoration: none;
            color: unset;

            &.router-link-active {
                text-decoration: underline;
                filter: brightness(2.75);
            }
        }
    }
}
</style>