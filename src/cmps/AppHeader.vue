<template>
    <header>
        <nav class="nav-container">
            <router-link to="/">Home</router-link>
            <router-link to="/contact">Contacts</router-link>
            <router-link to="/stats">Statistics</router-link>
        </nav>
        <div v-if="user" class="user-container">
            <span>Logged as {{ user.name }}.</span>
            <span @click="onLogout" class="logout">Logout</span>
        </div>
    </header>
</template>
<script>
import { RouterLink } from 'vue-router'
import { userService } from '../services/userService'

export default {
    data() {
        return {
        }
    },
    methods: {
        onLogout() {
            this.$store.dispatch({ type: 'logOut' })
            this.$router.push('/signup')
        }
    },
    computed: {
        user() {
            return this.$store.getters.loggedUser
        },
    },
    async created() {
        // this.user = await userService.getUser()
        this.$store.dispatch({ type: 'loadLoggedUser' })
    },

}
</script>
<style lang="scss">
header {
    display: flex;
    justify-content: space-between;
    margin-inline: 1rem;

    .user-container {
        display: grid;
        justify-items: end;
        color: #41B883;

        .logout {
            cursor: pointer;
            color: gray;
            font-weight: 700;
        }
    }

    .nav-container {
        display: flex;
        gap: 0.8rem;
        font-size: 1.5rem;


        a {
            text-decoration: none;
            color: unset;

            &.router-link-active {
                text-decoration: underline;
                color: #41B883;
            }
        }
    }

    @media (max-width: 550px) {
        .nav-container {
            font-size: 1rem;
        }
    }
}
</style>