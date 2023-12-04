<template>
    <footer>
        <small>
            This App was created using VueJS - Want to see more? -
            <a href="https://github.com/AvihayR" class="vue-color">Click me!</a>
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
<style lang="scss">
footer {
    margin-inline: 1rem;
    display: flex;
    justify-content: center;
    margin-bottom: 0.5rem;
}
</style>