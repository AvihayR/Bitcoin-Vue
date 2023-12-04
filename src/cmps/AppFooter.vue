<template>
    <footer>
        <small>
            This is my first app using VueJS, Want to see more? -
            <a href="">Click me!</a>
            <span class="vue-color">{{ count }}</span>
        </small>
    </footer>
</template>
<script>
export default {
    computed: {
        count() { return this.$store.getters.count }
    }
}
</script>
<style>
footer {
    margin-inline: 1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}
</style>