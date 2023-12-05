<template>
    <div>
        Login today!
        <form v-on:submit.prevent="onLogin">
            <label for="username-id">
                Username
                <input v-model="username" type="text" id="username-id">
            </label>
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
            username: null
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
<style lang="scss"></style>