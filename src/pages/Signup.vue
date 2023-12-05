<template>
    <div class="signup-page">
        <h1 class="login">
            Login today!
        </h1>
        <form v-on:submit.prevent="onLogin">
            <label class="vue-color user-label" for="username-id">
                Username
            </label>
            <input autofocus v-model="username" type="text" id="username-id">
            <button class="btn" type="submit">
                <font-awesome-icon class="arrow vue-color" title="Login" icon="fa-solid fa-arrow-right" />
            </button>
        </form>
    </div>
</template>
<script>
import { userService } from '../services/userService'

export default {
    data() {
        return {
            username: 'User'
        }
    },
    methods: {
        async onLogin() {
            try {
                await userService.login(this.username)
                await this.$store.dispatch({ type: 'loadLoggedUser' })
                this.$router.push('/')
            } catch (err) {
                console.log(err)
            }

        }
    }
}
</script>
<style lang="scss">
.signup-page {
    margin-inline: 1rem;
    display: grid;
    place-items: center;

    .login {
        font-size: 2.5rem;
    }

    form {
        margin-block-start: 3rem;
        display: grid;
        place-items: center;
        gap: .5rem;

        label {
            font-size: 1.3rem;
        }

        input {
            all: unset;
            background-color: black;
            padding: .5rem 1rem;
            border-radius: .5rem;
        }
    }
}
</style>