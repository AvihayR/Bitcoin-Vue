<template>
    <router-link v-bind:to="getContactUrl">
        <div class="contact-card">
            <div class="icons-container">
                <h3><font-awesome-icon class="vue-color" icon="fa-solid fa-person" /></h3>
                <h4><font-awesome-icon class="vue-color" icon="fa-solid fa-mobile-screen" /></h4>
                <h5><font-awesome-icon class="vue-color" icon="fa-solid fa-at" /></h5>
            </div>
            <hr>
            <div class="details-container">
                <h3 class="name">{{ contact.name }}</h3>
                <h4 class="phone">{{ contact.phone }}</h4>
                <h5 class="email"> {{ contact.email }}</h5>
            </div>

            <font-awesome-icon class="arrow" icon="fa-solid fa-arrow-right" />
        </div>
    </router-link>
</template>
<script>
export default {
    props: ['contact'],
    computed: {
        getContactUrl() {
            return '/contact/' + this.contact._id
        }
    }
}
</script>
<style lang="scss" scoped>
a {
    all: unset;
    display: block;
}

.contact-card {
    display: flex;
    gap: 1rem;
    padding: 1rem;
    background-color: #0f0f0f;
    border-radius: 1rem;
    margin-bottom: .5rem;
    cursor: pointer;

    hr {
        all: unset;
        border-right: 2px solid;
        border-color: #282828;
    }

    &:hover {

        .arrow {
            opacity: 1;
            margin-inline-start: 3.5rem;
        }
    }

    .arrow {
        opacity: 0;
        align-self: center;
        font-size: 1.5rem;
        color: #41B883;
        transition: opacity 0.4s;
        transition: margin 0.4s;
    }

    .details-container {
        display: grid;
        gap: .5rem;
        font-size: 1.1rem;
    }

    .icons-container {
        display: grid;
        gap: .5rem;
        font-size: 1.2rem;
    }
}
</style>