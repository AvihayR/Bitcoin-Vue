<template>
    <form class="filter-container" v-on:submit.prevent="onSearch">
        <input v-on:input="onSearch" v-model="searchBy" type="text" id="search-input">
        <label for="search-input">
            <font-awesome-icon class="search-btn" icon="fa-solid fa-magnifying-glass" />
        </label>
    </form>
</template>
<script>
export default {
    data() {
        return {
            searchBy: ''
        }
    },
    emits: ['search'],
    methods: {
        onSearch() {
            this.$emit('search', this.searchBy)
        }
    }
}
</script>
<style lang="scss">
.filter-container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.6rem;

    input {
        font-size: 1.5rem;
        padding: 0.5rem;
        border-radius: 0.5rem;
        color: #41B883;
        background-color: black;
        border: 0;
        outline: #41B883 1px solid;
    }

    .search-btn {
        cursor: pointer;
        font-size: 2rem;
        color: #41B883;
    }
}
</style>